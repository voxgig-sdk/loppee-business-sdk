-- ChatAttachment entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("loppee-business_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

-- main.kit.test.live.strict is true (the default is true): a live
-- request that fails, or a live test missing an input it needs,
-- fails the test.
-- An account with no record for a test to read skips it either way.
local LIVE_STRICT = true


describe("ChatAttachmentEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:ChatAttachment(nil)
    assert.is_not_nil(ent)
  end)

  it("should refuse an invalid request", function()
    local config = require("config_shared")()
    if type(config.feature) ~= "table" or config.feature.validate == nil then
      pending("feature not present in this SDK: validate")
      return
    end
    local client = sdk.test(nil, { feature = { validate = { active = true } } })
    local _, err = client:ChatAttachment(nil):create({ ["conversation_id"] = 1, ["content_type"] = "x", ["data_base64"] = "x", ["file_name"] = "x", ["size_bytes"] = 1 }, nil)
    assert.are.equal("validate_failed", type(err) == "table" and err.code or nil)
  end)

  it("should run basic flow", function()
    local setup = chat_attachment_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "chat_attachment." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    if setup.live and os.getenv("VOXGIG_GETONLY_GUARD") == "TRUE" then
      print("LIVE STEP {\"id\":\"chat_attachment.create.0\",\"state\":\"excluded\",\"attempted\":false,\"reason\":\"GET-only live run: needs POST /v1/account/conversations/{conversation_id}/attachments\"}")
      pending("Live coverage incomplete: chat_attachment.create.0 excluded (GET-only live run: needs POST /v1/account/conversations/{conversation_id}/attachments)")
      return
    end

    if setup.live then
      for _, _live_key in ipairs({"support01"}) do
        if setup.synthetic_only or setup.idmap[_live_key] == nil then
          runner.live_miss(pending, LIVE_STRICT, "Live entity test blocked: needs " .. _live_key .. " via LOPPEE_BUSINESS_TEST_CHAT_ATTACHMENT_ENTID")
        end
      end
    end
    local client = setup.client

    -- CREATE
    local chat_attachment_ref01_ent = client:ChatAttachment(nil)
    local chat_attachment_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.chat_attachment"), "chat_attachment_ref01"))
    chat_attachment_ref01_data["support_id"] = setup.idmap["support01"]

    local chat_attachment_ref01_data_result, err = chat_attachment_ref01_ent:create(chat_attachment_ref01_data, nil)
    assert.is_nil(err)
    chat_attachment_ref01_data = helpers.to_map(type(chat_attachment_ref01_data_result) == 'table' and chat_attachment_ref01_data_result.data_get and chat_attachment_ref01_data_result:data_get() or chat_attachment_ref01_data_result)
    assert.is_not_nil(chat_attachment_ref01_data)
    assert.is_not_nil(chat_attachment_ref01_data["id"])

  end)
end)

function chat_attachment_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/chat_attachment/ChatAttachmentTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read chat_attachment test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "chat_attachment01", "chat_attachment02", "chat_attachment03", "conversation01", "conversation02", "conversation03", "message01", "message02", "message03", "support01" },
    {
      ["`$PACK`"] = { "", {
        ["`$KEY`"] = "`$COPY`",
        ["`$VAL`"] = { "`$FORMAT`", "upper", "`$COPY`" },
      }},
    }
  )

  -- Whether *_ENTID supplied the idmap, read before env_override consumes
  -- it: without it, the ids a live flow binds are the fixture's synthetic ones.
  local entid_env_raw = os.getenv("LOPPEE_BUSINESS_TEST_CHAT_ATTACHMENT_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["LOPPEE_BUSINESS_TEST_CHAT_ATTACHMENT_ENTID"] = idmap,
    ["LOPPEE_BUSINESS_TEST_LIVE"] = "FALSE",
    ["LOPPEE_BUSINESS_TEST_EXPLAIN"] = "FALSE",
    ["LOPPEE_BUSINESS_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["LOPPEE_BUSINESS_TEST_CHAT_ATTACHMENT_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end

  if env["LOPPEE_BUSINESS_TEST_LIVE"] == "TRUE" then
    local merged_opts = vs.merge({
      -- FIRST, so the generated fields below win: sdk-test-control.json's
      -- test.client.options adds to the live client, it does not redirect it.
      runner.live_client_options(),
      {
        apikey = env["LOPPEE_BUSINESS_APIKEY"],
      },
      extra or {},
    })
    client = sdk.new(helpers.to_map(merged_opts))
  end

  local live = env["LOPPEE_BUSINESS_TEST_LIVE"] == "TRUE"
  return {
    client = client,
    data = entity_data,
    idmap = idmap_resolved,
    env = env,
    explain = env["LOPPEE_BUSINESS_TEST_EXPLAIN"] == "TRUE",
    live = live,
    synthetic_only = live and not idmap_overridden,
    now = os.time() * 1000,
  }
end
