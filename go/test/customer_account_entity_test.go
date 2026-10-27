package sdktest

import (
	"encoding/json"
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
const customer_accountEntityLiveStrict = true


func TestCustomerAccountEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.CustomerAccount(nil)
		if ent == nil {
			t.Fatal("expected non-nil CustomerAccountEntity")
		}
	})

	t.Run("validate", func(t *testing.T) {
		if !fhHasFeature("validate") {
			t.Skip("feature not present in this SDK: validate")
		}
		client := sdk.TestSDK(nil, map[string]any{
			"feature": map[string]any{"validate": map[string]any{"active": true}},
		})
		_, err := client.CustomerAccount(nil).Create(map[string]any{"account_id": 1, "account_role": "x", "accuracy_meters": 1, "acknowledge_data_effects": true, "actions": "x", "agent_key_id": "x", "agent_receives_coordinates": true, "all_paused": true, "app_attest_registered": true, "assertion": "x", "attestation": "x", "author_label": "x", "author_type": "x", "binding": "x", "body": "x", "business_id": "x", "capture_source": "x", "captured_at": "x", "challenge": "x", "challenge_id": "x", "client_message_id": "x", "completed": true, "confirmation": "x", "connection_id": "x", "connection_kind": "x", "coordinates_returned": true, "created_at": "x", "credential_id": "x", "declined": true, "delivery_contract": "x", "disabled_reason": "x", "disclosure": "x", "enabled": true, "endpoint": "x", "endpoint_id": "x", "endpoint_url": "x", "environment": "x", "event_id": "x", "event_types": "x", "failure_count": 1, "handoff_id": "x", "has_more": true, "id": "x", "idempotent_replay": true, "installation_id": "x", "key_id": "x", "last_delivery_at": "x", "latitude": 1, "longitude": 1, "message_alerts_enabled": true, "messages": "x", "mode": "x", "oauth_grant_id": "x", "one_time_display": "x", "platform": "x", "policy": "x", "purpose": "x", "push_token": "x", "registered_at": "x", "reply": "x", "request_mode": "x", "requested_at": "x", "results": "x", "schema_version": "x", "selected_at": "x", "signed_in": true, "signing_secret": "x", "status": "x", "updated_at": "x", "url": "x", "usable_until": "x", "use_mode": "x"}, nil)
		if sdkerr, ok := err.(*core.LoppeeBusinessError); !ok || "validate_failed" != sdkerr.Code {
			t.Fatalf("expected validate_failed, got %v", err)
		}
	})

	t.Run("basic", func(tt *testing.T) {
		var t testing.TB = tt
		setup := customer_accountBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "customer_account." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		if setup.live && os.Getenv("VOXGIG_GETONLY_GUARD") == "TRUE" {
			t.Log("LIVE STEP {\"id\":\"customer_account.create.0\",\"state\":\"excluded\",\"attempted\":false,\"reason\":\"GET-only live run: needs POST /v1/account/location-handoffs/{handoff_id}/complete-from-device\"}")
			t.Skip("Live coverage incomplete: customer_account.create.0 excluded (GET-only live run: needs POST /v1/account/location-handoffs/{handoff_id}/complete-from-device)")
			return
		}

		client := setup.client
		_ = client

		// CREATE
		customerAccountRef01Ent := client.CustomerAccount(nil)
		customerAccountRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "customer_account"}), "customer_account_ref01"))

		customerAccountRef01DataResult, err := customerAccountRef01Ent.Create(customerAccountRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		customerAccountRef01Data = core.ToMapAny(entityData(customerAccountRef01DataResult))
		if customerAccountRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if customerAccountRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

	})
}

func customer_accountBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "customer_account", "CustomerAccountTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read customer_account test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse customer_account test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"customer_account01", "customer_account02", "customer_account03", "conversation01", "conversation02", "conversation03", "location_handoff01", "location_handoff02", "location_handoff03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Whether *_ENTID supplied the idmap, read before envOverride consumes it:
	// without it, the ids a live flow binds are the fixture's synthetic ones.
	entidEnvRaw := os.Getenv("LOPPEE_BUSINESS_TEST_CUSTOMER_ACCOUNT_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"LOPPEE_BUSINESS_TEST_CUSTOMER_ACCOUNT_ENTID": idmap,
		"LOPPEE_BUSINESS_TEST_LIVE":      "FALSE",
		"LOPPEE_BUSINESS_TEST_EXPLAIN":   "FALSE",
		"LOPPEE_BUSINESS_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["LOPPEE_BUSINESS_TEST_CUSTOMER_ACCOUNT_ENTID"])
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
