package core

import (
	"encoding/json"
	"fmt"
	"strings"

	vs "github.com/voxgig-sdk/loppee-business-sdk/go/utility/struct"
)

type LoppeeBusinessSDK struct {
	Mode     string
	options  map[string]any
	utility  *Utility
	Features []Feature
	rootctx  *Context
}

func NewLoppeeBusinessSDK(options map[string]any) *LoppeeBusinessSDK {
	sdk := &LoppeeBusinessSDK{
		Mode:     "live",
		Features: []Feature{},
	}

	sdk.utility = NewUtility()

	config := SharedConfig()

	sdk.rootctx = sdk.utility.MakeContext(map[string]any{
		"client":  sdk,
		"utility": sdk.utility,
		"config":  config,
		"options": options,
		"shared":  map[string]any{},
	}, nil)

	sdk.options = sdk.utility.MakeOptions(sdk.rootctx)

	if vs.GetPath(sdk.options, []any{"feature", "test", "active"}) == true {
		sdk.Mode = "test"
	}

	sdk.rootctx.Options = sdk.options

	// Add features in the resolved order (MakeOptions puts an explicit array
	// order first, else defaults to test-first). Ordering matters: the `test`
	// feature installs the base mock transport and the transport features
	// (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
	// must be added before them to sit at the base of the chain.
	featureOpts := ToMapAny(vs.GetProp(sdk.options, "feature"))
	if featureOpts != nil {
		if fo, ok := vs.GetPath(sdk.options, []any{"__derived__", "featureorder"}).([]any); ok {
			for _, n := range fo {
				fname, _ := n.(string)
				fopts := ToMapAny(featureOpts[fname])
				if fopts != nil {
					if active, ok := fopts["active"]; ok {
						if ab, ok := active.(bool); ok && ab {
							sdk.utility.FeatureAdd(sdk.rootctx, makeFeature(fname))
						}
					}
				}
			}
		}
	}

	// Add extension features.
	if extend := vs.GetProp(sdk.options, "extend"); extend != nil {
		if extList, ok := extend.([]any); ok {
			for _, f := range extList {
				if feat, ok := f.(Feature); ok {
					sdk.utility.FeatureAdd(sdk.rootctx, feat)
				}
			}
		}
	}

	// Initialize features.
	for _, f := range sdk.Features {
		sdk.utility.FeatureInit(sdk.rootctx, f)
	}

	sdk.utility.FeatureHook(sdk.rootctx, "PostConstruct")

	return sdk
}

// The client holds the credential in its options, so a print or a JSON dump
// carries the name alone. Value receivers: a dereferenced client prints the
// same way.
func (sdk LoppeeBusinessSDK) String() string {
	return "LoppeeBusiness " + vs.Jsonify(map[string]any{"name": "LoppeeBusiness"},
		map[string]any{"indent": 0})
}

func (sdk LoppeeBusinessSDK) GoString() string {
	return sdk.String()
}

func (sdk LoppeeBusinessSDK) MarshalJSON() ([]byte, error) {
	return json.Marshal(map[string]any{"name": "LoppeeBusiness"})
}

func (sdk *LoppeeBusinessSDK) OptionsMap() map[string]any {
	out := vs.Clone(sdk.options)
	if om, ok := out.(map[string]any); ok {
		return om
	}
	return map[string]any{}
}

func (sdk *LoppeeBusinessSDK) GetUtility() *Utility {
	return CopyUtility(sdk.utility)
}

func (sdk *LoppeeBusinessSDK) GetRootCtx() *Context {
	return sdk.rootctx
}

func (sdk *LoppeeBusinessSDK) Prepare(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "prepare",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	options := sdk.options

	path, _ := vs.GetProp(fetchargs, "path").(string)
	method, _ := vs.GetProp(fetchargs, "method").(string)
	if method == "" {
		method = "GET"
	}
	method = strings.ToUpper(method)

	allowMethodVal := vs.GetPath(options, []any{"allow", "method"})
	if !Allowed(allowMethodVal, method) {
		allowMethod, _ := allowMethodVal.(string)
		return nil, ctx.MakeError("spec_method_allow",
			"Method \""+method+"\" not allowed by SDK option allow.method value: \""+allowMethod+"\"")
	}

	params := ToMapAny(vs.GetProp(fetchargs, "params"))
	if params == nil {
		params = map[string]any{}
	}
	query := ToMapAny(vs.GetProp(fetchargs, "query"))
	if query == nil {
		query = map[string]any{}
	}

	headers := utility.PrepareHeaders(ctx)

	base, _ := vs.GetProp(options, "base").(string)
	prefix, _ := vs.GetProp(options, "prefix").(string)
	suffix, _ := vs.GetProp(options, "suffix").(string)

	ctx.Spec = NewSpec(map[string]any{
		"base":    base,
		"prefix":  prefix,
		"suffix":  suffix,
		"path":    path,
		"method":  method,
		"params":  params,
		"query":   query,
		"headers": headers,
		"body":    vs.GetProp(fetchargs, "body"),
		"step":    "start",
	})

	// Merge user-provided headers.
	if uh := vs.GetProp(fetchargs, "headers"); uh != nil {
		if uhm, ok := uh.(map[string]any); ok {
			for k, v := range uhm {
				ctx.Spec.Headers[k] = v
			}
		}
	}

	_, err := utility.PrepareAuth(ctx)
	if err != nil {
		return nil, err
	}

	return utility.MakeFetchDef(ctx)
}

// Raw endpoint access is operator-controllable, like every entity op.
// Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
// either one reaches the same endpoint.
func (sdk *LoppeeBusinessSDK) Direct(fetchargs map[string]any) (map[string]any, error) {
	if !sdk.opAllowed("direct") {
		return sdk.opDenied("direct"), nil
	}

	return sdk.rawRequest(fetchargs)
}

// Is this raw-access op permitted by the SDK's allow.op option?
func (sdk *LoppeeBusinessSDK) opAllowed(op string) bool {
	return Allowed(vs.GetPath(sdk.options, []any{"allow", "op"}), op)
}

func (sdk *LoppeeBusinessSDK) opDenied(op string) map[string]any {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return map[string]any{
		"ok": false,
		"err": fmt.Errorf("LoppeeBusinessSDK: %s: operation not allowed by"+
			" SDK option allow.op value: \"%s\"", op, allowOp),
	}
}

// Ungated request path shared by Direct and Graphql, each of which checks
// its own allow.op token first. Unexported, rather than a flag on fetchargs:
// a caller-supplied marker would let anyone opt straight back out of the
// gate by passing it.
func (sdk *LoppeeBusinessSDK) rawRequest(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	fetchdef, err := sdk.Prepare(fetchargs)
	if err != nil {
		return map[string]any{"ok": false, "err": sdk.cleanErr(sdk.rootctx, err)}, nil
	}

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "direct",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	url, _ := fetchdef["url"].(string)
	fetched, fetchErr := utility.Fetcher(ctx, url, fetchdef)

	if fetchErr != nil {
		return map[string]any{"ok": false, "err": sdk.cleanErr(ctx, fetchErr)}, nil
	}

	if fetched == nil {
		return map[string]any{
			"ok":  false,
			"err": ctx.MakeError("direct_no_response", "response: undefined"),
		}, nil
	}

	if fm, ok := fetched.(map[string]any); ok {
		status := ToInt(vs.GetProp(fm, "status"))
		headers := vs.GetProp(fm, "headers")

		// No-body responses (204, 304) and explicit zero content-length
		// must skip JSON parsing — calling json() on an empty body errors.
		var contentLength string
		if hm, ok := headers.(map[string]any); ok {
			if cl, ok := hm["content-length"]; ok {
				contentLength = fmt.Sprintf("%v", cl)
			}
		}
		noBody := status == 204 || status == 304 || contentLength == "0"

		var jsonData any
		var bodyErr error
		if !noBody {
			if jf := vs.GetProp(fm, "json"); jf != nil {
				if f, ok := jf.(func() any); ok {
					jsonData = f()
				}
			}
			if unreadable, _ := vs.GetProp(fm, "unreadable").(bool); unreadable {
				var failed error
				if status < 200 || status >= 300 {
					failed = ctx.MakeError("request_status",
						fmt.Sprintf("request: %d: %v", status, vs.GetProp(fm, "statusText")))
				}
				bodyErr = UnreadableBody(ctx, status, headers, vs.GetProp(fm, "body"),
					fetchdef["headers"], failed)
			}
		}

		out := map[string]any{
			"ok":      bodyErr == nil && status >= 200 && status < 300,
			"status":  status,
			"headers": headers,
			"data":    jsonData,
		}
		if bodyErr != nil {
			out["err"] = sdk.cleanErr(ctx, bodyErr)
		}
		return out, nil
	}

	return map[string]any{"ok": false, "err": ctx.MakeError("direct_invalid", "invalid response type")}, nil
}

// A raw request returns its error rather than passing it through MakeError.
func (sdk *LoppeeBusinessSDK) cleanErr(ctx *Context, err error) error {
	if cleaned, ok := sdk.utility.Clean(ctx, err).(error); ok {
		return cleaned
	}
	return err
}

func (sdk *LoppeeBusinessSDK) Graphql(
	query string, variables map[string]any, ctrl map[string]any,
) (map[string]any, error) {
	if !sdk.opAllowed("graphql") {
		return sdk.opDenied("graphql"), nil
	}

	if variables == nil {
		variables = map[string]any{}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	res, err := sdk.rawRequest(map[string]any{
		"method":  "POST",
		"headers": map[string]any{"content-type": "application/json"},
		"body":    map[string]any{"query": query, "variables": variables},
		"ctrl":    ctrl,
	})

	if err != nil {
		return res, err
	}

	// Errors are read BEFORE any status check: a GraphQL parse or validation
	// failure comes back as HTTP 400 carrying the standard { errors: [...] }
	// body, and the raw path represents a non-2xx as ok:false with no err —
	// so returning early on status would discard the server's own
	// diagnostics, which are the only useful part of that response.
	errors, _ := vs.GetPath(res, []any{"data", "errors"}).([]any)

	if 0 < len(errors) {
		msg, _ := vs.GetProp(errors[0], "message").(string)
		if msg == "" {
			msg = "graphql error"
		}
		res["ok"] = false
		res["err"] = fmt.Errorf("LoppeeBusinessSDK: graphql: %s", msg)
		res["graphql"] = errors
	}

	return res, nil
}


// AgentAccess returns a AgentAccess entity bound to this client.
// Idiomatic usage: client.AgentAccess(nil).List(nil, nil) or
// client.AgentAccess(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LoppeeBusinessSDK) AgentAccess(data map[string]any) LoppeeBusinessEntity {
	return NewAgentAccessEntityFunc(sdk, data)
}


// AgentCapability returns a AgentCapability entity bound to this client.
// Idiomatic usage: client.AgentCapability(nil).List(nil, nil) or
// client.AgentCapability(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LoppeeBusinessSDK) AgentCapability(data map[string]any) LoppeeBusinessEntity {
	return NewAgentCapabilityEntityFunc(sdk, data)
}


// AgentConnectionTest returns a AgentConnectionTest entity bound to this client.
// Idiomatic usage: client.AgentConnectionTest(nil).List(nil, nil) or
// client.AgentConnectionTest(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LoppeeBusinessSDK) AgentConnectionTest(data map[string]any) LoppeeBusinessEntity {
	return NewAgentConnectionTestEntityFunc(sdk, data)
}


// AgentIntegration returns a AgentIntegration entity bound to this client.
// Idiomatic usage: client.AgentIntegration(nil).List(nil, nil) or
// client.AgentIntegration(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LoppeeBusinessSDK) AgentIntegration(data map[string]any) LoppeeBusinessEntity {
	return NewAgentIntegrationEntityFunc(sdk, data)
}


// AgentMonitoring returns a AgentMonitoring entity bound to this client.
// Idiomatic usage: client.AgentMonitoring(nil).List(nil, nil) or
// client.AgentMonitoring(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LoppeeBusinessSDK) AgentMonitoring(data map[string]any) LoppeeBusinessEntity {
	return NewAgentMonitoringEntityFunc(sdk, data)
}


// AgentOpenapi returns a AgentOpenapi entity bound to this client.
// Idiomatic usage: client.AgentOpenapi(nil).List(nil, nil) or
// client.AgentOpenapi(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LoppeeBusinessSDK) AgentOpenapi(data map[string]any) LoppeeBusinessEntity {
	return NewAgentOpenapiEntityFunc(sdk, data)
}


// AgentPolicy returns a AgentPolicy entity bound to this client.
// Idiomatic usage: client.AgentPolicy(nil).List(nil, nil) or
// client.AgentPolicy(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LoppeeBusinessSDK) AgentPolicy(data map[string]any) LoppeeBusinessEntity {
	return NewAgentPolicyEntityFunc(sdk, data)
}


// AnonymousLocationProofRevocation returns a AnonymousLocationProofRevocation entity bound to this client.
// Idiomatic usage: client.AnonymousLocationProofRevocation(nil).List(nil, nil) or
// client.AnonymousLocationProofRevocation(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LoppeeBusinessSDK) AnonymousLocationProofRevocation(data map[string]any) LoppeeBusinessEntity {
	return NewAnonymousLocationProofRevocationEntityFunc(sdk, data)
}


// BusinessApplication returns a BusinessApplication entity bound to this client.
// Idiomatic usage: client.BusinessApplication(nil).List(nil, nil) or
// client.BusinessApplication(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LoppeeBusinessSDK) BusinessApplication(data map[string]any) LoppeeBusinessEntity {
	return NewBusinessApplicationEntityFunc(sdk, data)
}


// BusinessClaim returns a BusinessClaim entity bound to this client.
// Idiomatic usage: client.BusinessClaim(nil).List(nil, nil) or
// client.BusinessClaim(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LoppeeBusinessSDK) BusinessClaim(data map[string]any) LoppeeBusinessEntity {
	return NewBusinessClaimEntityFunc(sdk, data)
}


// BusinessDeal returns a BusinessDeal entity bound to this client.
// Idiomatic usage: client.BusinessDeal(nil).List(nil, nil) or
// client.BusinessDeal(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LoppeeBusinessSDK) BusinessDeal(data map[string]any) LoppeeBusinessEntity {
	return NewBusinessDealEntityFunc(sdk, data)
}


// BusinessIndex returns a BusinessIndex entity bound to this client.
// Idiomatic usage: client.BusinessIndex(nil).List(nil, nil) or
// client.BusinessIndex(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LoppeeBusinessSDK) BusinessIndex(data map[string]any) LoppeeBusinessEntity {
	return NewBusinessIndexEntityFunc(sdk, data)
}


// BusinessOwner returns a BusinessOwner entity bound to this client.
// Idiomatic usage: client.BusinessOwner(nil).List(nil, nil) or
// client.BusinessOwner(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LoppeeBusinessSDK) BusinessOwner(data map[string]any) LoppeeBusinessEntity {
	return NewBusinessOwnerEntityFunc(sdk, data)
}


// BusinessReview returns a BusinessReview entity bound to this client.
// Idiomatic usage: client.BusinessReview(nil).List(nil, nil) or
// client.BusinessReview(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LoppeeBusinessSDK) BusinessReview(data map[string]any) LoppeeBusinessEntity {
	return NewBusinessReviewEntityFunc(sdk, data)
}


// ChatAttachment returns a ChatAttachment entity bound to this client.
// Idiomatic usage: client.ChatAttachment(nil).List(nil, nil) or
// client.ChatAttachment(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LoppeeBusinessSDK) ChatAttachment(data map[string]any) LoppeeBusinessEntity {
	return NewChatAttachmentEntityFunc(sdk, data)
}


// ChatAttachmentUrl returns a ChatAttachmentUrl entity bound to this client.
// Idiomatic usage: client.ChatAttachmentUrl(nil).List(nil, nil) or
// client.ChatAttachmentUrl(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LoppeeBusinessSDK) ChatAttachmentUrl(data map[string]any) LoppeeBusinessEntity {
	return NewChatAttachmentUrlEntityFunc(sdk, data)
}


// ClaimVerificationSend returns a ClaimVerificationSend entity bound to this client.
// Idiomatic usage: client.ClaimVerificationSend(nil).List(nil, nil) or
// client.ClaimVerificationSend(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LoppeeBusinessSDK) ClaimVerificationSend(data map[string]any) LoppeeBusinessEntity {
	return NewClaimVerificationSendEntityFunc(sdk, data)
}


// ClaimVerificationVerify returns a ClaimVerificationVerify entity bound to this client.
// Idiomatic usage: client.ClaimVerificationVerify(nil).List(nil, nil) or
// client.ClaimVerificationVerify(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LoppeeBusinessSDK) ClaimVerificationVerify(data map[string]any) LoppeeBusinessEntity {
	return NewClaimVerificationVerifyEntityFunc(sdk, data)
}


// CommercialClick returns a CommercialClick entity bound to this client.
// Idiomatic usage: client.CommercialClick(nil).List(nil, nil) or
// client.CommercialClick(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LoppeeBusinessSDK) CommercialClick(data map[string]any) LoppeeBusinessEntity {
	return NewCommercialClickEntityFunc(sdk, data)
}


// ContactRecorded returns a ContactRecorded entity bound to this client.
// Idiomatic usage: client.ContactRecorded(nil).List(nil, nil) or
// client.ContactRecorded(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LoppeeBusinessSDK) ContactRecorded(data map[string]any) LoppeeBusinessEntity {
	return NewContactRecordedEntityFunc(sdk, data)
}


// Conversation returns a Conversation entity bound to this client.
// Idiomatic usage: client.Conversation(nil).List(nil, nil) or
// client.Conversation(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LoppeeBusinessSDK) Conversation(data map[string]any) LoppeeBusinessEntity {
	return NewConversationEntityFunc(sdk, data)
}


// ConversationClose returns a ConversationClose entity bound to this client.
// Idiomatic usage: client.ConversationClose(nil).List(nil, nil) or
// client.ConversationClose(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LoppeeBusinessSDK) ConversationClose(data map[string]any) LoppeeBusinessEntity {
	return NewConversationCloseEntityFunc(sdk, data)
}


// ConversationReport returns a ConversationReport entity bound to this client.
// Idiomatic usage: client.ConversationReport(nil).List(nil, nil) or
// client.ConversationReport(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LoppeeBusinessSDK) ConversationReport(data map[string]any) LoppeeBusinessEntity {
	return NewConversationReportEntityFunc(sdk, data)
}


// ConversationWorkflow returns a ConversationWorkflow entity bound to this client.
// Idiomatic usage: client.ConversationWorkflow(nil).List(nil, nil) or
// client.ConversationWorkflow(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LoppeeBusinessSDK) ConversationWorkflow(data map[string]any) LoppeeBusinessEntity {
	return NewConversationWorkflowEntityFunc(sdk, data)
}


// CreateAgentApiKey returns a CreateAgentApiKey entity bound to this client.
// Idiomatic usage: client.CreateAgentApiKey(nil).List(nil, nil) or
// client.CreateAgentApiKey(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LoppeeBusinessSDK) CreateAgentApiKey(data map[string]any) LoppeeBusinessEntity {
	return NewCreateAgentApiKeyEntityFunc(sdk, data)
}


// Customer returns a Customer entity bound to this client.
// Idiomatic usage: client.Customer(nil).List(nil, nil) or
// client.Customer(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LoppeeBusinessSDK) Customer(data map[string]any) LoppeeBusinessEntity {
	return NewCustomerEntityFunc(sdk, data)
}


// CustomerAccount returns a CustomerAccount entity bound to this client.
// Idiomatic usage: client.CustomerAccount(nil).List(nil, nil) or
// client.CustomerAccount(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LoppeeBusinessSDK) CustomerAccount(data map[string]any) LoppeeBusinessEntity {
	return NewCustomerAccountEntityFunc(sdk, data)
}


// CustomerLocationProofRevocation returns a CustomerLocationProofRevocation entity bound to this client.
// Idiomatic usage: client.CustomerLocationProofRevocation(nil).List(nil, nil) or
// client.CustomerLocationProofRevocation(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LoppeeBusinessSDK) CustomerLocationProofRevocation(data map[string]any) LoppeeBusinessEntity {
	return NewCustomerLocationProofRevocationEntityFunc(sdk, data)
}


// DestinationAddressSuggestion returns a DestinationAddressSuggestion entity bound to this client.
// Idiomatic usage: client.DestinationAddressSuggestion(nil).List(nil, nil) or
// client.DestinationAddressSuggestion(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LoppeeBusinessSDK) DestinationAddressSuggestion(data map[string]any) LoppeeBusinessEntity {
	return NewDestinationAddressSuggestionEntityFunc(sdk, data)
}


// DestinationLocationProof returns a DestinationLocationProof entity bound to this client.
// Idiomatic usage: client.DestinationLocationProof(nil).List(nil, nil) or
// client.DestinationLocationProof(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LoppeeBusinessSDK) DestinationLocationProof(data map[string]any) LoppeeBusinessEntity {
	return NewDestinationLocationProofEntityFunc(sdk, data)
}


// DomainTrustCard returns a DomainTrustCard entity bound to this client.
// Idiomatic usage: client.DomainTrustCard(nil).List(nil, nil) or
// client.DomainTrustCard(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LoppeeBusinessSDK) DomainTrustCard(data map[string]any) LoppeeBusinessEntity {
	return NewDomainTrustCardEntityFunc(sdk, data)
}


// GeoContext returns a GeoContext entity bound to this client.
// Idiomatic usage: client.GeoContext(nil).List(nil, nil) or
// client.GeoContext(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LoppeeBusinessSDK) GeoContext(data map[string]any) LoppeeBusinessEntity {
	return NewGeoContextEntityFunc(sdk, data)
}


// Health returns a Health entity bound to this client.
// Idiomatic usage: client.Health(nil).List(nil, nil) or
// client.Health(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LoppeeBusinessSDK) Health(data map[string]any) LoppeeBusinessEntity {
	return NewHealthEntityFunc(sdk, data)
}


// JobApplication returns a JobApplication entity bound to this client.
// Idiomatic usage: client.JobApplication(nil).List(nil, nil) or
// client.JobApplication(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LoppeeBusinessSDK) JobApplication(data map[string]any) LoppeeBusinessEntity {
	return NewJobApplicationEntityFunc(sdk, data)
}


// JobResumeSignedUrl returns a JobResumeSignedUrl entity bound to this client.
// Idiomatic usage: client.JobResumeSignedUrl(nil).List(nil, nil) or
// client.JobResumeSignedUrl(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LoppeeBusinessSDK) JobResumeSignedUrl(data map[string]any) LoppeeBusinessEntity {
	return NewJobResumeSignedUrlEntityFunc(sdk, data)
}


// LocationHandoff returns a LocationHandoff entity bound to this client.
// Idiomatic usage: client.LocationHandoff(nil).List(nil, nil) or
// client.LocationHandoff(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LoppeeBusinessSDK) LocationHandoff(data map[string]any) LoppeeBusinessEntity {
	return NewLocationHandoffEntityFunc(sdk, data)
}


// Message returns a Message entity bound to this client.
// Idiomatic usage: client.Message(nil).List(nil, nil) or
// client.Message(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LoppeeBusinessSDK) Message(data map[string]any) LoppeeBusinessEntity {
	return NewMessageEntityFunc(sdk, data)
}


// ModeratedAction returns a ModeratedAction entity bound to this client.
// Idiomatic usage: client.ModeratedAction(nil).List(nil, nil) or
// client.ModeratedAction(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LoppeeBusinessSDK) ModeratedAction(data map[string]any) LoppeeBusinessEntity {
	return NewModeratedActionEntityFunc(sdk, data)
}


// OpenApiDocument returns a OpenApiDocument entity bound to this client.
// Idiomatic usage: client.OpenApiDocument(nil).List(nil, nil) or
// client.OpenApiDocument(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LoppeeBusinessSDK) OpenApiDocument(data map[string]any) LoppeeBusinessEntity {
	return NewOpenApiDocumentEntityFunc(sdk, data)
}


// Operation returns a Operation entity bound to this client.
// Idiomatic usage: client.Operation(nil).List(nil, nil) or
// client.Operation(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LoppeeBusinessSDK) Operation(data map[string]any) LoppeeBusinessEntity {
	return NewOperationEntityFunc(sdk, data)
}


// OwnerNotification returns a OwnerNotification entity bound to this client.
// Idiomatic usage: client.OwnerNotification(nil).List(nil, nil) or
// client.OwnerNotification(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LoppeeBusinessSDK) OwnerNotification(data map[string]any) LoppeeBusinessEntity {
	return NewOwnerNotificationEntityFunc(sdk, data)
}


// OwnerNotificationSetting returns a OwnerNotificationSetting entity bound to this client.
// Idiomatic usage: client.OwnerNotificationSetting(nil).List(nil, nil) or
// client.OwnerNotificationSetting(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LoppeeBusinessSDK) OwnerNotificationSetting(data map[string]any) LoppeeBusinessEntity {
	return NewOwnerNotificationSettingEntityFunc(sdk, data)
}


// OwnerWebhookEndpoint returns a OwnerWebhookEndpoint entity bound to this client.
// Idiomatic usage: client.OwnerWebhookEndpoint(nil).List(nil, nil) or
// client.OwnerWebhookEndpoint(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LoppeeBusinessSDK) OwnerWebhookEndpoint(data map[string]any) LoppeeBusinessEntity {
	return NewOwnerWebhookEndpointEntityFunc(sdk, data)
}


// OwnerWebhookRegistration returns a OwnerWebhookRegistration entity bound to this client.
// Idiomatic usage: client.OwnerWebhookRegistration(nil).List(nil, nil) or
// client.OwnerWebhookRegistration(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LoppeeBusinessSDK) OwnerWebhookRegistration(data map[string]any) LoppeeBusinessEntity {
	return NewOwnerWebhookRegistrationEntityFunc(sdk, data)
}


// Pricing returns a Pricing entity bound to this client.
// Idiomatic usage: client.Pricing(nil).List(nil, nil) or
// client.Pricing(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LoppeeBusinessSDK) Pricing(data map[string]any) LoppeeBusinessEntity {
	return NewPricingEntityFunc(sdk, data)
}


// PromoteVerifiedTransaction returns a PromoteVerifiedTransaction entity bound to this client.
// Idiomatic usage: client.PromoteVerifiedTransaction(nil).List(nil, nil) or
// client.PromoteVerifiedTransaction(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LoppeeBusinessSDK) PromoteVerifiedTransaction(data map[string]any) LoppeeBusinessEntity {
	return NewPromoteVerifiedTransactionEntityFunc(sdk, data)
}


// PublicContent returns a PublicContent entity bound to this client.
// Idiomatic usage: client.PublicContent(nil).List(nil, nil) or
// client.PublicContent(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LoppeeBusinessSDK) PublicContent(data map[string]any) LoppeeBusinessEntity {
	return NewPublicContentEntityFunc(sdk, data)
}


// Recommend returns a Recommend entity bound to this client.
// Idiomatic usage: client.Recommend(nil).List(nil, nil) or
// client.Recommend(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LoppeeBusinessSDK) Recommend(data map[string]any) LoppeeBusinessEntity {
	return NewRecommendEntityFunc(sdk, data)
}


// Review returns a Review entity bound to this client.
// Idiomatic usage: client.Review(nil).List(nil, nil) or
// client.Review(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LoppeeBusinessSDK) Review(data map[string]any) LoppeeBusinessEntity {
	return NewReviewEntityFunc(sdk, data)
}


// Revoke returns a Revoke entity bound to this client.
// Idiomatic usage: client.Revoke(nil).List(nil, nil) or
// client.Revoke(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LoppeeBusinessSDK) Revoke(data map[string]any) LoppeeBusinessEntity {
	return NewRevokeEntityFunc(sdk, data)
}


// SaveBusiness returns a SaveBusiness entity bound to this client.
// Idiomatic usage: client.SaveBusiness(nil).List(nil, nil) or
// client.SaveBusiness(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LoppeeBusinessSDK) SaveBusiness(data map[string]any) LoppeeBusinessEntity {
	return NewSaveBusinessEntityFunc(sdk, data)
}


// SavedBusiness returns a SavedBusiness entity bound to this client.
// Idiomatic usage: client.SavedBusiness(nil).List(nil, nil) or
// client.SavedBusiness(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LoppeeBusinessSDK) SavedBusiness(data map[string]any) LoppeeBusinessEntity {
	return NewSavedBusinessEntityFunc(sdk, data)
}


// SavedLocation returns a SavedLocation entity bound to this client.
// Idiomatic usage: client.SavedLocation(nil).List(nil, nil) or
// client.SavedLocation(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LoppeeBusinessSDK) SavedLocation(data map[string]any) LoppeeBusinessEntity {
	return NewSavedLocationEntityFunc(sdk, data)
}


// Search returns a Search entity bound to this client.
// Idiomatic usage: client.Search(nil).List(nil, nil) or
// client.Search(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LoppeeBusinessSDK) Search(data map[string]any) LoppeeBusinessEntity {
	return NewSearchEntityFunc(sdk, data)
}


// Suggest returns a Suggest entity bound to this client.
// Idiomatic usage: client.Suggest(nil).List(nil, nil) or
// client.Suggest(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LoppeeBusinessSDK) Suggest(data map[string]any) LoppeeBusinessEntity {
	return NewSuggestEntityFunc(sdk, data)
}


// SupportInternalNote returns a SupportInternalNote entity bound to this client.
// Idiomatic usage: client.SupportInternalNote(nil).List(nil, nil) or
// client.SupportInternalNote(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LoppeeBusinessSDK) SupportInternalNote(data map[string]any) LoppeeBusinessEntity {
	return NewSupportInternalNoteEntityFunc(sdk, data)
}


// SupportWorkflow returns a SupportWorkflow entity bound to this client.
// Idiomatic usage: client.SupportWorkflow(nil).List(nil, nil) or
// client.SupportWorkflow(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LoppeeBusinessSDK) SupportWorkflow(data map[string]any) LoppeeBusinessEntity {
	return NewSupportWorkflowEntityFunc(sdk, data)
}


// TaxonomySuggestion returns a TaxonomySuggestion entity bound to this client.
// Idiomatic usage: client.TaxonomySuggestion(nil).List(nil, nil) or
// client.TaxonomySuggestion(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LoppeeBusinessSDK) TaxonomySuggestion(data map[string]any) LoppeeBusinessEntity {
	return NewTaxonomySuggestionEntityFunc(sdk, data)
}


// TrustCard returns a TrustCard entity bound to this client.
// Idiomatic usage: client.TrustCard(nil).List(nil, nil) or
// client.TrustCard(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LoppeeBusinessSDK) TrustCard(data map[string]any) LoppeeBusinessEntity {
	return NewTrustCardEntityFunc(sdk, data)
}


// UnsaveBusiness returns a UnsaveBusiness entity bound to this client.
// Idiomatic usage: client.UnsaveBusiness(nil).List(nil, nil) or
// client.UnsaveBusiness(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LoppeeBusinessSDK) UnsaveBusiness(data map[string]any) LoppeeBusinessEntity {
	return NewUnsaveBusinessEntityFunc(sdk, data)
}


// UpdateAgentBillingAccount returns a UpdateAgentBillingAccount entity bound to this client.
// Idiomatic usage: client.UpdateAgentBillingAccount(nil).List(nil, nil) or
// client.UpdateAgentBillingAccount(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LoppeeBusinessSDK) UpdateAgentBillingAccount(data map[string]any) LoppeeBusinessEntity {
	return NewUpdateAgentBillingAccountEntityFunc(sdk, data)
}


// WithdrawJobApplication returns a WithdrawJobApplication entity bound to this client.
// Idiomatic usage: client.WithdrawJobApplication(nil).List(nil, nil) or
// client.WithdrawJobApplication(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LoppeeBusinessSDK) WithdrawJobApplication(data map[string]any) LoppeeBusinessEntity {
	return NewWithdrawJobApplicationEntityFunc(sdk, data)
}



func TestSDK(testopts map[string]any, sdkopts map[string]any) *LoppeeBusinessSDK {
	if sdkopts == nil {
		sdkopts = map[string]any{}
	}
	sdkopts = vs.Clone(sdkopts).(map[string]any)

	if testopts == nil {
		testopts = map[string]any{}
	}
	testopts = vs.Clone(testopts).(map[string]any)
	testopts["active"] = true

	vs.SetPath(sdkopts, []any{"feature", "test"}, testopts)

	sdk := NewLoppeeBusinessSDK(sdkopts)
	sdk.Mode = "test"

	return sdk
}
