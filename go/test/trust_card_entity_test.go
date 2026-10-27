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
const trust_cardEntityLiveStrict = true


func TestTrustCardEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.TrustCard(nil)
		if ent == nil {
			t.Fatal("expected non-nil TrustCardEntity")
		}
	})

	t.Run("validate", func(t *testing.T) {
		if !fhHasFeature("validate") {
			t.Skip("feature not present in this SDK: validate")
		}
		client := sdk.TestSDK(nil, map[string]any{
			"feature": map[string]any{"validate": map[string]any{"active": true}},
		})
		_, err := client.TrustCard(nil).List(map[string]any{"business_id": 1}, nil)
		if sdkerr, ok := err.(*core.LoppeeBusinessError); !ok || "validate_failed" != sdkerr.Code {
			t.Fatalf("expected validate_failed, got %v", err)
		}
	})

	t.Run("basic", func(tt *testing.T) {
		var t testing.TB = tt
		setup := trust_cardBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "trust_card." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		if setup.live && os.Getenv("VOXGIG_GETONLY_GUARD") == "TRUE" {
			t.Log("LIVE STEP {\"id\":\"trust_card.create.0\",\"state\":\"excluded\",\"attempted\":false,\"reason\":\"GET-only live run: needs POST /v1/businesses/{business_id}/license-records/{fact_id}/report\"}")
		if setup.live {
			for _, _liveKey := range []string{"business01"} {
				if setup.syntheticOnly || setup.idmap[_liveKey] == nil {
					liveMiss(t, trust_cardEntityLiveStrict, "Live entity test blocked: needs %s via LOPPEE_BUSINESS_TEST_TRUST_CARD_ENTID", _liveKey)
				}
			}
		}
		client := setup.client
		_ = client

		// Bootstrap entity data from existing test data (no create step in flow).
		trustCardRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.trust_card")))
		var trustCardRef01Data map[string]any
		if len(trustCardRef01DataRaw) > 0 {
			trustCardRef01Data = core.ToMapAny(trustCardRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = trustCardRef01Data

		// LIST
		trustCardRef01Ent := client.TrustCard(nil)
		trustCardRef01Match := map[string]any{
			"business_id": setup.idmap["business01"],
		}

		trustCardRef01ListResult, err := trustCardRef01Ent.List(trustCardRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, trustCardRef01ListOk := trustCardRef01ListResult.([]any)
		if !trustCardRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", trustCardRef01ListResult)
		}

		// LOAD
		trustCardRef01MatchDt0 := map[string]any{}
		if setup.live {
			trustCardRef01MatchDt0["business_id"] = "biz_elite_ac_llc_jacksonville_fl"
		}
		trustCardRef01DataDt0Loaded, err := trustCardRef01Ent.Load(trustCardRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if trustCardRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

		return
		}

		if setup.live {
			for _, _liveKey := range []string{"business01", "license_record01"} {
				if setup.syntheticOnly || setup.idmap[_liveKey] == nil {
					liveMiss(t, trust_cardEntityLiveStrict, "Live entity test blocked: needs %s via LOPPEE_BUSINESS_TEST_TRUST_CARD_ENTID", _liveKey)
				}
			}
		}
		client := setup.client
		_ = client

		// CREATE
		trustCardRef01Ent := client.TrustCard(nil)
		trustCardRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "trust_card"}), "trust_card_ref01"))
		trustCardRef01Data["business_id"] = setup.idmap["business01"]
		trustCardRef01Data["license_record_id"] = setup.idmap["license_record01"]

		trustCardRef01DataResult, err := trustCardRef01Ent.Create(trustCardRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		trustCardRef01Data = core.ToMapAny(entityData(trustCardRef01DataResult))
		if trustCardRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// LIST
		trustCardRef01Match := map[string]any{
			"business_id": setup.idmap["business01"],
		}

		trustCardRef01ListResult, err := trustCardRef01Ent.List(trustCardRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, trustCardRef01ListOk := trustCardRef01ListResult.([]any)
		if !trustCardRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", trustCardRef01ListResult)
		}

		// LOAD
		trustCardRef01MatchDt0 := map[string]any{}
		if setup.live {
			trustCardRef01MatchDt0["business_id"] = "biz_elite_ac_llc_jacksonville_fl"
		}
		trustCardRef01DataDt0Loaded, err := trustCardRef01Ent.Load(trustCardRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if trustCardRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func trust_cardBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "trust_card", "TrustCardTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read trust_card test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse trust_card test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"trust_card01", "trust_card02", "trust_card03", "business01", "license_record01"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Whether *_ENTID supplied the idmap, read before envOverride consumes it:
	// without it, the ids a live flow binds are the fixture's synthetic ones.
	entidEnvRaw := os.Getenv("LOPPEE_BUSINESS_TEST_TRUST_CARD_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"LOPPEE_BUSINESS_TEST_TRUST_CARD_ENTID": idmap,
		"LOPPEE_BUSINESS_TEST_LIVE":      "FALSE",
		"LOPPEE_BUSINESS_TEST_EXPLAIN":   "FALSE",
		"LOPPEE_BUSINESS_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["LOPPEE_BUSINESS_TEST_TRUST_CARD_ENTID"])
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
