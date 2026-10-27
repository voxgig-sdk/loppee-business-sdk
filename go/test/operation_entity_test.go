package sdktest

import (
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/loppee-business-sdk/go"
	"github.com/voxgig-sdk/loppee-business-sdk/go/core"

	vs "github.com/voxgig-sdk/loppee-business-sdk/go/utility/struct"
)

// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const operationEntityLiveStrict = true


func TestOperationEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Operation(nil)
		if ent == nil {
			t.Fatal("expected non-nil OperationEntity")
		}
	})

	t.Run("validate", func(t *testing.T) {
		if !fhHasFeature("validate") {
			t.Skip("feature not present in this SDK: validate")
		}
		client := sdk.TestSDK(nil, map[string]any{
			"feature": map[string]any{"validate": map[string]any{"active": true}},
		})
		_, err := client.Operation(nil).Create(map[string]any{"coupon_id": 1, "account_id": "x", "allowed_actions": "x", "amount_cents": 1, "api_key": "x", "assigneeId": "x", "assigneeLabel": "x", "assigneeType": "x", "assistant_enabled": true, "body": "x", "businessId": "x", "businessName": "x", "business_ids": "x", "catalog": "x", "code": "x", "config": "x", "confirmation": "x", "connection_id": "x", "connection_kind": "x", "content_type": "x", "context_id": "x", "context_type": "x", "createdAt": "x", "created_at": "x", "credential_id": "x", "data_base64": "x", "decision": "x", "delivery_contract": "x", "disabled_reason": "x", "discount_type": "x", "display_name": "x", "disposition": "x", "draft": "x", "email": "x", "enabled": true, "endpoint": "x", "endpoint_id": "x", "endpoint_url": "x", "ends_at": "x", "environment_fallback": "x", "event_id": "x", "event_types": "x", "expected_allowed_actions": "x", "expected_key_id": "x", "expected_updated_at": "x", "expected_version": 1, "fact_id": "x", "facts": "x", "failure_count": 1, "fields": "x", "file_name": "x", "historic_association_checked": true, "hold": "x", "hours": "x", "id": "x", "in_use": "x", "invited": true, "key_check": "x", "kind": "x", "label": "x", "lastMessageAt": "x", "lastMessageAuthorType": "x", "lastMessagePreview": "x", "last_delivery_at": "x", "last_error_code": "x", "last_probe_at": "x", "last_problem": "x", "make_active": true, "max_cents": 1, "messages": "x", "messagesTruncated": true, "min_cents": 1, "model": "x", "model_id": "x", "name": "x", "one_time_display": "x", "outcome": "x", "ownerEmail": "x", "ownerLastReadAt": "x", "ownerName": "x", "ownerUserId": "x", "policyVersion": "x", "provider": "x", "providers": "x", "purpose_code": "x", "rank_bid_cents": 1, "reference": "x", "report_ids": "x", "reserve_cents": 1, "resolution_note": "x", "revision": 1, "rows": "x", "run": "x", "schema_version": "x", "scope": "x", "settings": "x", "signing_secret": "x", "size_bytes": 1, "source_scope_checked": true, "storage": "x", "subject": "x", "supportLastReadAt": "x", "taxonomy_category_aliases": "x", "ticketNumber": "x", "tier": "x", "updatedAt": "x", "updated_at": "x", "url": "x", "value": "x", "verification_method": "x", "verified_at": "x", "workload": "x"}, nil)
		if sdkerr, ok := err.(*core.LoppeeBusinessError); !ok || "validate_failed" != sdkerr.Code {
			t.Fatalf("expected validate_failed, got %v", err)
		}
	})

	t.Run("basic", func(tt *testing.T) {
		var t testing.TB = tt
		setup := operationBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "operation." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		if setup.live && os.Getenv("VOXGIG_GETONLY_GUARD") == "TRUE" {
			t.Log("LIVE STEP {\"id\":\"operation.create.0\",\"state\":\"excluded\",\"attempted\":false,\"reason\":\"GET-only live run: needs POST /v1/admin/businesses/{business_id}/job-applications/{application_id}/resume-url\"}")
			t.Log("LIVE STEP {\"id\":\"operation.update.1\",\"state\":\"excluded\",\"attempted\":false,\"reason\":\"GET-only live run: needs PUT /v1/admin/assistant-provider/{provider}\"}")
			t.Log("LIVE STEP {\"id\":\"operation.remove.2\",\"state\":\"excluded\",\"attempted\":false,\"reason\":\"GET-only live run: needs DELETE /v1/admin/support/{conversation_id}/ai-drafts/{draft_id}\"}")
			t.Skip("Live coverage incomplete: operation.create.0 excluded (GET-only live run: needs POST /v1/admin/businesses/{business_id}/job-applications/{application_id}/resume-url); operation.update.1 excluded (GET-only live run: needs PUT /v1/admin/assistant-provider/{provider}); operation.remove.2 excluded (GET-only live run: needs DELETE /v1/admin/support/{conversation_id}/ai-drafts/{draft_id})")
			return
		}

		if setup.live {
			for _, _liveKey := range []string{"support01"} {
				if setup.syntheticOnly || setup.idmap[_liveKey] == nil {
					liveMiss(t, operationEntityLiveStrict, "Live entity test blocked: needs %s via LOPPEE_BUSINESS_TEST_OPERATION_ENTID", _liveKey)
				}
			}
		}
		client := setup.client
		_ = client

		// CREATE
		operationRef01Ent := client.Operation(nil)
		operationRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "operation"}), "operation_ref01"))
		operationRef01Data["support_id"] = setup.idmap["support01"]

		operationRef01DataResult, err := operationRef01Ent.Create(operationRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		operationRef01Data = core.ToMapAny(entityData(operationRef01DataResult))
		if operationRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if operationRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// UPDATE
		operationRef01DataUp0Up := map[string]any{
			"id": operationRef01Data["id"],
		}

		operationRef01MarkdefUp0Name := "account_id"
		operationRef01MarkdefUp0Value := fmt.Sprintf("Mark01-operation_ref01_%d", setup.now)
		operationRef01DataUp0Up[operationRef01MarkdefUp0Name] = operationRef01MarkdefUp0Value

		operationRef01ResdataUp0Result, err := operationRef01Ent.Update(operationRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		operationRef01ResdataUp0 := core.ToMapAny(entityData(operationRef01ResdataUp0Result))
		if operationRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if operationRef01ResdataUp0["id"] != operationRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if operationRef01ResdataUp0[operationRef01MarkdefUp0Name] != operationRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", operationRef01MarkdefUp0Name, operationRef01ResdataUp0[operationRef01MarkdefUp0Name])
		}

		// REMOVE
		operationRef01MatchRm0 := map[string]any{
			"id": operationRef01Data["id"],
		}
		_, err = operationRef01Ent.Remove(operationRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

	})
}

func operationBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "operation", "OperationTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read operation test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse operation test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"operation01", "operation02", "operation03", "business_claim01", "business_claim02", "business_claim03", "review01", "review02", "review03", "job_application01", "job_application02", "job_application03", "message01", "message02", "message03", "support01"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Whether *_ENTID supplied the idmap, read before envOverride consumes it:
	// without it, the ids a live flow binds are the fixture's synthetic ones.
	entidEnvRaw := os.Getenv("LOPPEE_BUSINESS_TEST_OPERATION_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"LOPPEE_BUSINESS_TEST_OPERATION_ENTID": idmap,
		"LOPPEE_BUSINESS_TEST_LIVE":      "FALSE",
		"LOPPEE_BUSINESS_TEST_EXPLAIN":   "FALSE",
		"LOPPEE_BUSINESS_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["LOPPEE_BUSINESS_TEST_OPERATION_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["LOPPEE_BUSINESS_TEST_LIVE"] == "TRUE" {
		// An empty map, not a nil one: Merge returns nil when its last entry
		// is nil, and BasicSetup is normally called with no extras - so a
		// bare nil silently discarded the apikey and server values below.
		extraOpts := extra
		if extraOpts == nil {
			extraOpts = map[string]any{}
		}

		mergedOpts := vs.Merge([]any{
			// liveClientOptions() FIRST, so the generated fields below win:
			// sdk-test-control.json's test.client.options adds to the live
			// client, it does not redirect it.
			liveClientOptions(),
			map[string]any{
				"apikey": env["LOPPEE_BUSINESS_APIKEY"],
			},
			extraOpts,
		})
		client = sdk.NewLoppeeBusinessSDK(core.ToMapAny(mergedOpts))
	}

	live := env["LOPPEE_BUSINESS_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["LOPPEE_BUSINESS_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
