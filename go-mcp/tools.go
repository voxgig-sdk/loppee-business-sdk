package main

import (
	"context"
	"encoding/json"
	"fmt"
	"strings"

	"github.com/google/jsonschema-go/jsonschema"
	"github.com/modelcontextprotocol/go-sdk/mcp"
	sdk "github.com/voxgig-sdk/loppee-business-sdk/go"
)

// ListArgs is what an agent sends to loppee-business_list.
type ListArgs struct {
	Entity string         `json:"entity" jsonschema:"one of: agent_integration | agent_openapi | business_deal | business_index | open_api_document | pricing | recommend | search | suggest | taxonomy_suggestion | trust_card"`
	Query  map[string]any `json:"query,omitempty" jsonschema:"optional filter map; omit it for the first page"`
}

// LoadArgs is what an agent sends to loppee-business_load.
type LoadArgs struct {
	Entity string         `json:"entity" jsonschema:"one of: agent_capability | agent_monitoring | agent_policy | business_review | domain_trust_card | geo_context | health | moderated_action | public_content | trust_card"`
	Query  map[string]any `json:"query" jsonschema:"match map naming the record, such as {\"id\":1}"`
}

func registerTools(server *mcp.Server, client *sdk.LoppeeBusinessSDK) {
	mcp.AddTool(server, &mcp.Tool{
		Name:        "loppee-business_list",
		Description: "List records from LoppeeBusiness. Args: entity, query (optional filter map; omit it for the first page). Returns the first page of records as JSON.",
		Annotations: &mcp.ToolAnnotations{ReadOnlyHint: true},
		InputSchema: entitySchema[ListArgs]("agent_integration", "agent_openapi", "business_deal", "business_index", "open_api_document", "pricing", "recommend", "search", "suggest", "taxonomy_suggestion", "trust_card"),
	}, func(ctx context.Context, req *mcp.CallToolRequest, args ListArgs) (*mcp.CallToolResult, any, error) {
		return runOp(ctx, client, "list", args.Entity, args.Query)
	})
	mcp.AddTool(server, &mcp.Tool{
		Name:        "loppee-business_load",
		Description: "Load one record from LoppeeBusiness. Args: entity, query (match map naming the record, such as {\"id\":1}). Returns the record as JSON.",
		Annotations: &mcp.ToolAnnotations{ReadOnlyHint: true},
		InputSchema: entitySchema[LoadArgs]("agent_capability", "agent_monitoring", "agent_policy", "business_review", "domain_trust_card", "geo_context", "health", "moderated_action", "public_content", "trust_card"),
	}, func(ctx context.Context, req *mcp.CallToolRequest, args LoadArgs) (*mcp.CallToolResult, any, error) {
		return runOp(ctx, client, "load", args.Entity, args.Query)
	})
}

// entitySchema is the schema inferred from In, its entity limited to the
// entities the tool serves.
func entitySchema[In any](names ...string) *jsonschema.Schema {
	schema, err := jsonschema.For[In](nil)
	if err != nil {
		panic(err)
	}
	enum := make([]any, len(names))
	for i, name := range names {
		enum[i] = name
	}
	schema.Properties["entity"].Enum = enum
	return schema
}

func runOp(_ context.Context, client *sdk.LoppeeBusinessSDK, op string, entity string, input map[string]any) (*mcp.CallToolResult, any, error) {
	ent, err := entityFor(client, entity)
	if err != nil {
		return toolError(err.Error())
	}

	var result any
	switch op {
	case "list":
		result, err = ent.List(input, nil)
	case "load":
		result, err = ent.Load(input, nil)
	case "create":
		result, err = ent.Create(input, nil)
	case "update":
		result, err = ent.Update(input, nil)
	case "patch":
		result, err = ent.Patch(input, nil)
	case "remove":
		result, err = ent.Remove(input, nil)
	default:
		return toolError(fmt.Sprintf("unknown op %q", op))
	}
	if err != nil {
		return toolError(err.Error())
	}

	// SDK returns *Entity wrappers; unwrap each via .Data() to get a
	// plain map[string]any (or []any of maps for list) suitable for
	// JSON marshalling.
	data := extractData(result)
	body, err := json.MarshalIndent(data, "", "  ")
	if err != nil {
		return toolError(fmt.Sprintf("marshal: %v", err))
	}
	return &mcp.CallToolResult{
		Content: []mcp.Content{
			&mcp.TextContent{Text: string(body)},
		},
	}, data, nil
}

// entityFor dispatches on the lowercase entity name. The generator
// emits one `case "<name>":` per entity defined in the SDK model.
func entityFor(client *sdk.LoppeeBusinessSDK, name string) (sdk.LoppeeBusinessEntity, error) {
	switch strings.ToLower(name) {
	case "agent_access":
		return client.AgentAccess(nil), nil
	case "agent_capability":
		return client.AgentCapability(nil), nil
	case "agent_connection_test":
		return client.AgentConnectionTest(nil), nil
	case "agent_integration":
		return client.AgentIntegration(nil), nil
	case "agent_monitoring":
		return client.AgentMonitoring(nil), nil
	case "agent_openapi":
		return client.AgentOpenapi(nil), nil
	case "agent_policy":
		return client.AgentPolicy(nil), nil
	case "anonymous_location_proof_revocation":
		return client.AnonymousLocationProofRevocation(nil), nil
	case "business_application":
		return client.BusinessApplication(nil), nil
	case "business_claim":
		return client.BusinessClaim(nil), nil
	case "business_deal":
		return client.BusinessDeal(nil), nil
	case "business_index":
		return client.BusinessIndex(nil), nil
	case "business_owner":
		return client.BusinessOwner(nil), nil
	case "business_review":
		return client.BusinessReview(nil), nil
	case "chat_attachment":
		return client.ChatAttachment(nil), nil
	case "chat_attachment_url":
		return client.ChatAttachmentUrl(nil), nil
	case "claim_verification_send":
		return client.ClaimVerificationSend(nil), nil
	case "claim_verification_verify":
		return client.ClaimVerificationVerify(nil), nil
	case "commercial_click":
		return client.CommercialClick(nil), nil
	case "contact_recorded":
		return client.ContactRecorded(nil), nil
	case "conversation":
		return client.Conversation(nil), nil
	case "conversation_close":
		return client.ConversationClose(nil), nil
	case "conversation_report":
		return client.ConversationReport(nil), nil
	case "conversation_workflow":
		return client.ConversationWorkflow(nil), nil
	case "create_agent_api_key":
		return client.CreateAgentApiKey(nil), nil
	case "customer":
		return client.Customer(nil), nil
	case "customer_account":
		return client.CustomerAccount(nil), nil
	case "customer_location_proof_revocation":
		return client.CustomerLocationProofRevocation(nil), nil
	case "destination_address_suggestion":
		return client.DestinationAddressSuggestion(nil), nil
	case "destination_location_proof":
		return client.DestinationLocationProof(nil), nil
	case "domain_trust_card":
		return client.DomainTrustCard(nil), nil
	case "geo_context":
		return client.GeoContext(nil), nil
	case "health":
		return client.Health(nil), nil
	case "job_application":
		return client.JobApplication(nil), nil
	case "job_resume_signed_url":
		return client.JobResumeSignedUrl(nil), nil
	case "location_handoff":
		return client.LocationHandoff(nil), nil
	case "message":
		return client.Message(nil), nil
	case "moderated_action":
		return client.ModeratedAction(nil), nil
	case "open_api_document":
		return client.OpenApiDocument(nil), nil
	case "operation":
		return client.Operation(nil), nil
	case "owner_notification":
		return client.OwnerNotification(nil), nil
	case "owner_notification_setting":
		return client.OwnerNotificationSetting(nil), nil
	case "owner_webhook_endpoint":
		return client.OwnerWebhookEndpoint(nil), nil
	case "owner_webhook_registration":
		return client.OwnerWebhookRegistration(nil), nil
	case "pricing":
		return client.Pricing(nil), nil
	case "promote_verified_transaction":
		return client.PromoteVerifiedTransaction(nil), nil
	case "public_content":
		return client.PublicContent(nil), nil
	case "recommend":
		return client.Recommend(nil), nil
	case "review":
		return client.Review(nil), nil
	case "revoke":
		return client.Revoke(nil), nil
	case "save_business":
		return client.SaveBusiness(nil), nil
	case "saved_business":
		return client.SavedBusiness(nil), nil
	case "saved_location":
		return client.SavedLocation(nil), nil
	case "search":
		return client.Search(nil), nil
	case "suggest":
		return client.Suggest(nil), nil
	case "support_internal_note":
		return client.SupportInternalNote(nil), nil
	case "support_workflow":
		return client.SupportWorkflow(nil), nil
	case "taxonomy_suggestion":
		return client.TaxonomySuggestion(nil), nil
	case "trust_card":
		return client.TrustCard(nil), nil
	case "unsave_business":
		return client.UnsaveBusiness(nil), nil
	case "update_agent_billing_account":
		return client.UpdateAgentBillingAccount(nil), nil
	case "withdraw_job_application":
		return client.WithdrawJobApplication(nil), nil
	}
	return nil, fmt.Errorf("unknown entity %q", name)
}

func extractData(x any) any {
	switch v := x.(type) {
	case sdk.Entity:
		return extractData(v.Data())
	case []any:
		out := make([]any, len(v))
		for i, e := range v {
			out[i] = extractData(e)
		}
		return out
	case map[string]any:
		out := make(map[string]any, len(v))
		for k, vv := range v {
			out[k] = extractData(vv)
		}
		return out
	}
	return x
}

func toolError(msg string) (*mcp.CallToolResult, any, error) {
	return &mcp.CallToolResult{
		IsError: true,
		Content: []mcp.Content{
			&mcp.TextContent{Text: msg},
		},
	}, nil, nil
}

// hint is an MCP annotation that defaults to true unless stated.
func hint(b bool) *bool {
	return &b
}
