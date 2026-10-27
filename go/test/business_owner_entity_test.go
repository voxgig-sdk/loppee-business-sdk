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
const business_ownerEntityLiveStrict = true


func TestBusinessOwnerEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.BusinessOwner(nil)
		if ent == nil {
			t.Fatal("expected non-nil BusinessOwnerEntity")
		}
	})

	t.Run("validate", func(t *testing.T) {
		if !fhHasFeature("validate") {
			t.Skip("feature not present in this SDK: validate")
		}
		client := sdk.TestSDK(nil, map[string]any{
			"feature": map[string]any{"validate": map[string]any{"active": true}},
		})
		_, err := client.BusinessOwner(nil).Create(map[string]any{"deal_id": 1, "account_id": "x", "account_role": "x", "acknowledge_data_effects": true, "actions": "x", "allowed_actions": "x", "amount_cents": 1, "asset_id": "x", "assigneeId": "x", "assigneeLabel": "x", "assigneeType": "x", "attempt_id": "x", "body": "x", "businessId": "x", "businessName": "x", "campaign": "x", "campaign_id": "x", "category_aliases": "x", "change": "x", "city": "x", "client_message_id": "x", "code": "x", "confirmation": "x", "connection_kind": "x", "consent_sha256": "x", "content_type": "x", "createdAt": "x", "created_at": "x", "credential_id": "x", "credential_identifier": "x", "data_base64": "x", "delivery_contract": "x", "disabled_reason": "x", "discount_label": "x", "display_name": "x", "enabled": true, "endpoint": "x", "endpoint_id": "x", "endpoint_url": "x", "event_id": "x", "event_types": "x", "expected_updated_at": "x", "factor_id": "x", "failure_count": 1, "file_name": "x", "file_sha256": "x", "id": "x", "installation_id": "x", "issuer": "x", "kind": "x", "lastMessageAt": "x", "lastMessageAuthorType": "x", "lastMessagePreview": "x", "last_delivery_at": "x", "license_number": "x", "messages": "x", "messagesTruncated": true, "name": "x", "one_time_display": "x", "ownerEmail": "x", "ownerLastReadAt": "x", "ownerName": "x", "ownerUserId": "x", "phone": "x", "platform": "x", "push_token": "x", "radius_miles": 1, "reason": "x", "registered_at": "x", "request_id": "x", "requested_at": "x", "save_card": true, "signing_secret": "x", "size_bytes": 1, "state": "x", "street_address": "x", "supportLastReadAt": "x", "terms_version": "x", "ticketNumber": "x", "tier": "x", "title": "x", "updatedAt": "x", "updated_at": "x", "url": "x", "website": "x"}, nil)
		if sdkerr, ok := err.(*core.LoppeeBusinessError); !ok || "validate_failed" != sdkerr.Code {
			t.Fatalf("expected validate_failed, got %v", err)
		}
	})

	t.Run("basic", func(tt *testing.T) {
		var t testing.TB = tt
		setup := business_ownerBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "business_owner." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		if setup.live && os.Getenv("VOXGIG_GETONLY_GUARD") == "TRUE" {
			t.Log("LIVE STEP {\"id\":\"business_owner.create.0\",\"state\":\"excluded\",\"attempted\":false,\"reason\":\"GET-only live run: needs POST /v1/owner/agents/{agent_id}/disconnect\"}")
			t.Log("LIVE STEP {\"id\":\"business_owner.update.1\",\"state\":\"excluded\",\"attempted\":false,\"reason\":\"GET-only live run: needs PUT /v1/owner/evidence/upload-intents/{intent_id}/object\"}")
			t.Skip("Live coverage incomplete: business_owner.create.0 excluded (GET-only live run: needs POST /v1/owner/agents/{agent_id}/disconnect); business_owner.update.1 excluded (GET-only live run: needs PUT /v1/owner/evidence/upload-intents/{intent_id}/object)")
			return
		}

		client := setup.client
		_ = client

		// CREATE
		businessOwnerRef01Ent := client.BusinessOwner(nil)
		businessOwnerRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "business_owner"}), "business_owner_ref01"))

		businessOwnerRef01DataResult, err := businessOwnerRef01Ent.Create(businessOwnerRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		businessOwnerRef01Data = core.ToMapAny(entityData(businessOwnerRef01DataResult))
		if businessOwnerRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if businessOwnerRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// UPDATE
		businessOwnerRef01DataUp0Up := map[string]any{
			"id": businessOwnerRef01Data["id"],
		}

		businessOwnerRef01MarkdefUp0Name := "account_id"
		businessOwnerRef01MarkdefUp0Value := fmt.Sprintf("Mark01-business_owner_ref01_%d", setup.now)
		businessOwnerRef01DataUp0Up[businessOwnerRef01MarkdefUp0Name] = businessOwnerRef01MarkdefUp0Value

		businessOwnerRef01ResdataUp0Result, err := businessOwnerRef01Ent.Update(businessOwnerRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		businessOwnerRef01ResdataUp0 := core.ToMapAny(entityData(businessOwnerRef01ResdataUp0Result))
		if businessOwnerRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if businessOwnerRef01ResdataUp0["id"] != businessOwnerRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if businessOwnerRef01ResdataUp0[businessOwnerRef01MarkdefUp0Name] != businessOwnerRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", businessOwnerRef01MarkdefUp0Name, businessOwnerRef01ResdataUp0[businessOwnerRef01MarkdefUp0Name])
		}

	})
}

func business_ownerBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "business_owner", "BusinessOwnerTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read business_owner test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse business_owner test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"business_owner01", "business_owner02", "business_owner03", "conversation01", "conversation02", "conversation03", "message01", "message02", "message03", "review01", "review02", "review03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Whether *_ENTID supplied the idmap, read before envOverride consumes it:
	// without it, the ids a live flow binds are the fixture's synthetic ones.
	entidEnvRaw := os.Getenv("LOPPEE_BUSINESS_TEST_BUSINESS_OWNER_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"LOPPEE_BUSINESS_TEST_BUSINESS_OWNER_ENTID": idmap,
		"LOPPEE_BUSINESS_TEST_LIVE":      "FALSE",
		"LOPPEE_BUSINESS_TEST_EXPLAIN":   "FALSE",
		"LOPPEE_BUSINESS_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["LOPPEE_BUSINESS_TEST_BUSINESS_OWNER_ENTID"])
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
