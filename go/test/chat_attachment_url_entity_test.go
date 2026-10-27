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
const chat_attachment_urlEntityLiveStrict = true


func TestChatAttachmentUrlEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ChatAttachmentUrl(nil)
		if ent == nil {
			t.Fatal("expected non-nil ChatAttachmentUrlEntity")
		}
	})

	t.Run("basic", func(tt *testing.T) {
		var t testing.TB = tt
		setup := chat_attachment_urlBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "chat_attachment_url." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		if setup.live && os.Getenv("VOXGIG_GETONLY_GUARD") == "TRUE" {
			t.Log("LIVE STEP {\"id\":\"chat_attachment_url.create.0\",\"state\":\"excluded\",\"attempted\":false,\"reason\":\"GET-only live run: needs POST /v1/account/conversations/{conversation_id}/attachments/{attachment_id}/url\"}")
			t.Skip("Live coverage incomplete: chat_attachment_url.create.0 excluded (GET-only live run: needs POST /v1/account/conversations/{conversation_id}/attachments/{attachment_id}/url)")
			return
		}

		if setup.live {
			for _, _liveKey := range []string{"attachment01", "support01"} {
				if setup.syntheticOnly || setup.idmap[_liveKey] == nil {
					liveMiss(t, chat_attachment_urlEntityLiveStrict, "Live entity test blocked: needs %s via LOPPEE_BUSINESS_TEST_CHAT_ATTACHMENT_URL_ENTID", _liveKey)
				}
			}
		}
		client := setup.client
		_ = client

		// CREATE
		chatAttachmentUrlRef01Ent := client.ChatAttachmentUrl(nil)
		chatAttachmentUrlRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "chat_attachment_url"}), "chat_attachment_url_ref01"))
		chatAttachmentUrlRef01Data["attachment_id"] = setup.idmap["attachment01"]
		chatAttachmentUrlRef01Data["support_id"] = setup.idmap["support01"]

		chatAttachmentUrlRef01DataResult, err := chatAttachmentUrlRef01Ent.Create(chatAttachmentUrlRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		chatAttachmentUrlRef01Data = core.ToMapAny(entityData(chatAttachmentUrlRef01DataResult))
		if chatAttachmentUrlRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if chatAttachmentUrlRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

	})
}

func chat_attachment_urlBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "chat_attachment_url", "ChatAttachmentUrlTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read chat_attachment_url test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse chat_attachment_url test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"chat_attachment_url01", "chat_attachment_url02", "chat_attachment_url03", "conversation01", "conversation02", "conversation03", "message01", "message02", "message03", "attachment01", "support01"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Whether *_ENTID supplied the idmap, read before envOverride consumes it:
	// without it, the ids a live flow binds are the fixture's synthetic ones.
	entidEnvRaw := os.Getenv("LOPPEE_BUSINESS_TEST_CHAT_ATTACHMENT_URL_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"LOPPEE_BUSINESS_TEST_CHAT_ATTACHMENT_URL_ENTID": idmap,
		"LOPPEE_BUSINESS_TEST_LIVE":      "FALSE",
		"LOPPEE_BUSINESS_TEST_EXPLAIN":   "FALSE",
		"LOPPEE_BUSINESS_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["LOPPEE_BUSINESS_TEST_CHAT_ATTACHMENT_URL_ENTID"])
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
