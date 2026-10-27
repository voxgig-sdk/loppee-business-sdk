-- BusinessOwner entity test

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


describe("BusinessOwnerEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:BusinessOwner(nil)
    assert.is_not_nil(ent)
  end)

  it("should refuse an invalid request", function()
    local config = require("config_shared")()
    if type(config.feature) ~= "table" or config.feature.validate == nil then
      pending("feature not present in this SDK: validate")
      return
    end
    local client = sdk.test(nil, { feature = { validate = { active = true } } })
    local _, err = client:BusinessOwner(nil):create({ ["deal_id"] = 1, ["account_id"] = "x", ["account_role"] = "x", ["acknowledge_data_effects"] = true, ["actions"] = "x", ["allowed_actions"] = "x", ["amount_cents"] = 1, ["asset_id"] = "x", ["assigneeId"] = "x", ["assigneeLabel"] = "x", ["assigneeType"] = "x", ["attempt_id"] = "x", ["body"] = "x", ["businessId"] = "x", ["businessName"] = "x", ["campaign"] = "x", ["campaign_id"] = "x", ["category_aliases"] = "x", ["change"] = "x", ["city"] = "x", ["client_message_id"] = "x", ["code"] = "x", ["confirmation"] = "x", ["connection_kind"] = "x", ["consent_sha256"] = "x", ["content_type"] = "x", ["createdAt"] = "x", ["created_at"] = "x", ["credential_id"] = "x", ["credential_identifier"] = "x", ["data_base64"] = "x", ["delivery_contract"] = "x", ["disabled_reason"] = "x", ["discount_label"] = "x", ["display_name"] = "x", ["enabled"] = true, ["endpoint"] = "x", ["endpoint_id"] = "x", ["endpoint_url"] = "x", ["event_id"] = "x", ["event_types"] = "x", ["expected_updated_at"] = "x", ["factor_id"] = "x", ["failure_count"] = 1, ["file_name"] = "x", ["file_sha256"] = "x", ["id"] = "x", ["installation_id"] = "x", ["issuer"] = "x", ["kind"] = "x", ["lastMessageAt"] = "x", ["lastMessageAuthorType"] = "x", ["lastMessagePreview"] = "x", ["last_delivery_at"] = "x", ["license_number"] = "x", ["messages"] = "x", ["messagesTruncated"] = true, ["name"] = "x", ["one_time_display"] = "x", ["ownerEmail"] = "x", ["ownerLastReadAt"] = "x", ["ownerName"] = "x", ["ownerUserId"] = "x", ["phone"] = "x", ["platform"] = "x", ["push_token"] = "x", ["radius_miles"] = 1, ["reason"] = "x", ["registered_at"] = "x", ["request_id"] = "x", ["requested_at"] = "x", ["save_card"] = true, ["signing_secret"] = "x", ["size_bytes"] = 1, ["state"] = "x", ["street_address"] = "x", ["supportLastReadAt"] = "x", ["terms_version"] = "x", ["ticketNumber"] = "x", ["tier"] = "x", ["title"] = "x", ["updatedAt"] = "x", ["updated_at"] = "x", ["url"] = "x", ["website"] = "x" }, nil)
    assert.are.equal("validate_failed", type(err) == "table" and err.code or nil)
  end)

  it("should run basic flow", function()
    local setup = business_owner_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "update"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "business_owner." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    if setup.live and os.getenv("VOXGIG_GETONLY_GUARD") == "TRUE" then
      print("LIVE STEP {\"id\":\"business_owner.create.0\",\"state\":\"excluded\",\"attempted\":false,\"reason\":\"GET-only live run: needs POST /v1/owner/agents/{agent_id}/disconnect\"}")
      print("LIVE STEP {\"id\":\"business_owner.update.1\",\"state\":\"excluded\",\"attempted\":false,\"reason\":\"GET-only live run: needs PUT /v1/owner/evidence/upload-intents/{intent_id}/object\"}")
      pending("Live coverage incomplete: business_owner.create.0 excluded (GET-only live run: needs POST /v1/owner/agents/{agent_id}/disconnect); business_owner.update.1 excluded (GET-only live run: needs PUT /v1/owner/evidence/upload-intents/{intent_id}/object)")
      return
    end

    local client = setup.client

    -- CREATE
    local business_owner_ref01_ent = client:BusinessOwner(nil)
    local business_owner_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.business_owner"), "business_owner_ref01"))

    local business_owner_ref01_data_result, err = business_owner_ref01_ent:create(business_owner_ref01_data, nil)
    assert.is_nil(err)
    business_owner_ref01_data = helpers.to_map(type(business_owner_ref01_data_result) == 'table' and business_owner_ref01_data_result.data_get and business_owner_ref01_data_result:data_get() or business_owner_ref01_data_result)
    assert.is_not_nil(business_owner_ref01_data)
    assert.is_not_nil(business_owner_ref01_data["id"])

    -- UPDATE
    local business_owner_ref01_data_up0_up = {
      id = business_owner_ref01_data["id"],
    }

    local business_owner_ref01_markdef_up0_name = "account_id"
    local business_owner_ref01_markdef_up0_value = "Mark01-business_owner_ref01_" .. tostring(setup.now)
    business_owner_ref01_data_up0_up[business_owner_ref01_markdef_up0_name] = business_owner_ref01_markdef_up0_value

    local business_owner_ref01_resdata_up0_result, err = business_owner_ref01_ent:update(business_owner_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local business_owner_ref01_resdata_up0 = helpers.to_map(type(business_owner_ref01_resdata_up0_result) == 'table' and business_owner_ref01_resdata_up0_result.data_get and business_owner_ref01_resdata_up0_result:data_get() or business_owner_ref01_resdata_up0_result)
    assert.is_not_nil(business_owner_ref01_resdata_up0)
    assert.are.equal(business_owner_ref01_resdata_up0["id"], business_owner_ref01_data_up0_up["id"])
    assert.are.equal(business_owner_ref01_resdata_up0[business_owner_ref01_markdef_up0_name], business_owner_ref01_markdef_up0_value)

  end)
end)

function business_owner_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/business_owner/BusinessOwnerTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read business_owner test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "business_owner01", "business_owner02", "business_owner03", "conversation01", "conversation02", "conversation03", "message01", "message02", "message03", "review01", "review02", "review03" },
    {
      ["`$PACK`"] = { "", {
        ["`$KEY`"] = "`$COPY`",
        ["`$VAL`"] = { "`$FORMAT`", "upper", "`$COPY`" },
      }},
    }
  )

  -- Whether *_ENTID supplied the idmap, read before env_override consumes
  -- it: without it, the ids a live flow binds are the fixture's synthetic ones.
  local entid_env_raw = os.getenv("LOPPEE_BUSINESS_TEST_BUSINESS_OWNER_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["LOPPEE_BUSINESS_TEST_BUSINESS_OWNER_ENTID"] = idmap,
    ["LOPPEE_BUSINESS_TEST_LIVE"] = "FALSE",
    ["LOPPEE_BUSINESS_TEST_EXPLAIN"] = "FALSE",
    ["LOPPEE_BUSINESS_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["LOPPEE_BUSINESS_TEST_BUSINESS_OWNER_ENTID"])
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
