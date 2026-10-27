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
const conversation_reportEntityLiveStrict = true


func TestConversationReportEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ConversationReport(nil)
		if ent == nil {
			t.Fatal("expected non-nil ConversationReportEntity")
		}
	})

	t.Run("validate", func(t *testing.T) {
		if !fhHasFeature("validate") {
			t.Skip("feature not present in this SDK: validate")
		}
		client := sdk.TestSDK(nil, map[string]any{
			"feature": map[string]any{"validate": map[string]any{"active": true}},
		})
		_, err := client.ConversationReport(nil).Create(map[string]any{"id": 1, "reason": "x"}, nil)
		if sdkerr, ok := err.(*core.LoppeeBusinessError); !ok || "validate_failed" != sdkerr.Code {
			t.Fatalf("expected validate_failed, got %v", err)
		}
	})

	t.Run("basic", func(tt *testing.T) {
		var t testing.TB = tt
		setup := conversation_reportBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "conversation_report." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		if setup.live && os.Getenv("VOXGIG_GETONLY_GUARD") == "TRUE" {
			t.Log("LIVE STEP {\"id\":\"conversation_report.create.0\",\"state\":\"excluded\",\"attempted\":false,\"reason\":\"GET-only live run: needs POST /v1/account/conversations/{conversation_id}/report\"}")
			t.Skip("Live coverage incomplete: conversation_report.create.0 excluded (GET-only live run: needs POST /v1/account/conversations/{conversation_id}/report)")
			return
		}

		if setup.live {
			for _, _liveKey := range []string{"message01"} {
				if setup.syntheticOnly || setup.idmap[_liveKey] == nil {
					liveMiss(t, conversation_reportEntityLiveStrict, "Live entity test blocked: needs %s via LOPPEE_BUSINESS_TEST_CONVERSATION_REPORT_ENTID", _liveKey)
				}
			}
		}
		client := setup.client
		_ = client

		// CREATE
		conversationReportRef01Ent := client.ConversationReport(nil)
		conversationReportRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "conversation_report"}), "conversation_report_ref01"))
		conversationReportRef01Data["message_id"] = setup.idmap["message01"]

		conversationReportRef01DataResult, err := conversationReportRef01Ent.Create(conversationReportRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		conversationReportRef01Data = core.ToMapAny(entityData(conversationReportRef01DataResult))
		if conversationReportRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if conversationReportRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

	})
}

func conversation_reportBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "conversation_report", "ConversationReportTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read conversation_report test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse conversation_report test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"conversation_report01", "conversation_report02", "conversation_report03", "message01", "message02", "message03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Whether *_ENTID supplied the idmap, read before envOverride consumes it:
	// without it, the ids a live flow binds are the fixture's synthetic ones.
	entidEnvRaw := os.Getenv("LOPPEE_BUSINESS_TEST_CONVERSATION_REPORT_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"LOPPEE_BUSINESS_TEST_CONVERSATION_REPORT_ENTID": idmap,
		"LOPPEE_BUSINESS_TEST_LIVE":      "FALSE",
		"LOPPEE_BUSINESS_TEST_EXPLAIN":   "FALSE",
		"LOPPEE_BUSINESS_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["LOPPEE_BUSINESS_TEST_CONVERSATION_REPORT_ENTID"])
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
