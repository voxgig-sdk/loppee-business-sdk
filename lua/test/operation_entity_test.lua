-- Operation entity test

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


describe("OperationEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:Operation(nil)
    assert.is_not_nil(ent)
  end)

  it("should refuse an invalid request", function()
    local config = require("config_shared")()
    if type(config.feature) ~= "table" or config.feature.validate == nil then
      pending("feature not present in this SDK: validate")
      return
    end
    local client = sdk.test(nil, { feature = { validate = { active = true } } })
    local _, err = client:Operation(nil):create({ ["coupon_id"] = 1, ["account_id"] = "x", ["allowed_actions"] = "x", ["amount_cents"] = 1, ["api_key"] = "x", ["assigneeId"] = "x", ["assigneeLabel"] = "x", ["assigneeType"] = "x", ["assistant_enabled"] = true, ["body"] = "x", ["businessId"] = "x", ["businessName"] = "x", ["business_ids"] = "x", ["catalog"] = "x", ["code"] = "x", ["config"] = "x", ["confirmation"] = "x", ["connection_id"] = "x", ["connection_kind"] = "x", ["content_type"] = "x", ["context_id"] = "x", ["context_type"] = "x", ["createdAt"] = "x", ["created_at"] = "x", ["credential_id"] = "x", ["data_base64"] = "x", ["decision"] = "x", ["delivery_contract"] = "x", ["disabled_reason"] = "x", ["discount_type"] = "x", ["display_name"] = "x", ["disposition"] = "x", ["draft"] = "x", ["email"] = "x", ["enabled"] = true, ["endpoint"] = "x", ["endpoint_id"] = "x", ["endpoint_url"] = "x", ["ends_at"] = "x", ["environment_fallback"] = "x", ["event_id"] = "x", ["event_types"] = "x", ["expected_allowed_actions"] = "x", ["expected_key_id"] = "x", ["expected_updated_at"] = "x", ["expected_version"] = 1, ["fact_id"] = "x", ["facts"] = "x", ["failure_count"] = 1, ["fields"] = "x", ["file_name"] = "x", ["historic_association_checked"] = true, ["hold"] = "x", ["hours"] = "x", ["id"] = "x", ["in_use"] = "x", ["invited"] = true, ["key_check"] = "x", ["kind"] = "x", ["label"] = "x", ["lastMessageAt"] = "x", ["lastMessageAuthorType"] = "x", ["lastMessagePreview"] = "x", ["last_delivery_at"] = "x", ["last_error_code"] = "x", ["last_probe_at"] = "x", ["last_problem"] = "x", ["make_active"] = true, ["max_cents"] = 1, ["messages"] = "x", ["messagesTruncated"] = true, ["min_cents"] = 1, ["model"] = "x", ["model_id"] = "x", ["name"] = "x", ["one_time_display"] = "x", ["outcome"] = "x", ["ownerEmail"] = "x", ["ownerLastReadAt"] = "x", ["ownerName"] = "x", ["ownerUserId"] = "x", ["policyVersion"] = "x", ["provider"] = "x", ["providers"] = "x", ["purpose_code"] = "x", ["rank_bid_cents"] = 1, ["reference"] = "x", ["report_ids"] = "x", ["reserve_cents"] = 1, ["resolution_note"] = "x", ["revision"] = 1, ["rows"] = "x", ["run"] = "x", ["schema_version"] = "x", ["scope"] = "x", ["settings"] = "x", ["signing_secret"] = "x", ["size_bytes"] = 1, ["source_scope_checked"] = true, ["storage"] = "x", ["subject"] = "x", ["supportLastReadAt"] = "x", ["taxonomy_category_aliases"] = "x", ["ticketNumber"] = "x", ["tier"] = "x", ["updatedAt"] = "x", ["updated_at"] = "x", ["url"] = "x", ["value"] = "x", ["verification_method"] = "x", ["verified_at"] = "x", ["workload"] = "x" }, nil)
    assert.are.equal("validate_failed", type(err) == "table" and err.code or nil)
  end)

  it("should run basic flow", function()
    local setup = operation_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "update", "remove"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "operation." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    if setup.live and os.getenv("VOXGIG_GETONLY_GUARD") == "TRUE" then
      print("LIVE STEP {\"id\":\"operation.create.0\",\"state\":\"excluded\",\"attempted\":false,\"reason\":\"GET-only live run: needs POST /v1/admin/businesses/{business_id}/job-applications/{application_id}/resume-url\"}")
      print("LIVE STEP {\"id\":\"operation.update.1\",\"state\":\"excluded\",\"attempted\":false,\"reason\":\"GET-only live run: needs PUT /v1/admin/assistant-provider/{provider}\"}")
      print("LIVE STEP {\"id\":\"operation.remove.2\",\"state\":\"excluded\",\"attempted\":false,\"reason\":\"GET-only live run: needs DELETE /v1/admin/support/{conversation_id}/ai-drafts/{draft_id}\"}")
      pending("Live coverage incomplete: operation.create.0 excluded (GET-only live run: needs POST /v1/admin/businesses/{business_id}/job-applications/{application_id}/resume-url); operation.update.1 excluded (GET-only live run: needs PUT /v1/admin/assistant-provider/{provider}); operation.remove.2 excluded (GET-only live run: needs DELETE /v1/admin/support/{conversation_id}/ai-drafts/{draft_id})")
      return
    end

    if setup.live then
      for _, _live_key in ipairs({"support01"}) do
        if setup.synthetic_only or setup.idmap[_live_key] == nil then
          runner.live_miss(pending, LIVE_STRICT, "Live entity test blocked: needs " .. _live_key .. " via LOPPEE_BUSINESS_TEST_OPERATION_ENTID")
        end
      end
    end
    local client = setup.client

    -- CREATE
    local operation_ref01_ent = client:Operation(nil)
    local operation_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.operation"), "operation_ref01"))
    operation_ref01_data["support_id"] = setup.idmap["support01"]

    local operation_ref01_data_result, err = operation_ref01_ent:create(operation_ref01_data, nil)
    assert.is_nil(err)
    operation_ref01_data = helpers.to_map(type(operation_ref01_data_result) == 'table' and operation_ref01_data_result.data_get and operation_ref01_data_result:data_get() or operation_ref01_data_result)
    assert.is_not_nil(operation_ref01_data)
    assert.is_not_nil(operation_ref01_data["id"])

    -- UPDATE
    local operation_ref01_data_up0_up = {
      id = operation_ref01_data["id"],
    }

    local operation_ref01_markdef_up0_name = "account_id"
    local operation_ref01_markdef_up0_value = "Mark01-operation_ref01_" .. tostring(setup.now)
    operation_ref01_data_up0_up[operation_ref01_markdef_up0_name] = operation_ref01_markdef_up0_value

    local operation_ref01_resdata_up0_result, err = operation_ref01_ent:update(operation_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local operation_ref01_resdata_up0 = helpers.to_map(type(operation_ref01_resdata_up0_result) == 'table' and operation_ref01_resdata_up0_result.data_get and operation_ref01_resdata_up0_result:data_get() or operation_ref01_resdata_up0_result)
    assert.is_not_nil(operation_ref01_resdata_up0)
    assert.are.equal(operation_ref01_resdata_up0["id"], operation_ref01_data_up0_up["id"])
    assert.are.equal(operation_ref01_resdata_up0[operation_ref01_markdef_up0_name], operation_ref01_markdef_up0_value)

    -- REMOVE
    local operation_ref01_match_rm0 = {
      id = operation_ref01_data["id"],
    }
    local _, err = operation_ref01_ent:remove(operation_ref01_match_rm0, nil)
    assert.is_nil(err)

  end)
end)

function operation_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/operation/OperationTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read operation test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "operation01", "operation02", "operation03", "business_claim01", "business_claim02", "business_claim03", "review01", "review02", "review03", "job_application01", "job_application02", "job_application03", "message01", "message02", "message03", "support01" },
    {
      ["`$PACK`"] = { "", {
        ["`$KEY`"] = "`$COPY`",
        ["`$VAL`"] = { "`$FORMAT`", "upper", "`$COPY`" },
      }},
    }
  )

  -- Whether *_ENTID supplied the idmap, read before env_override consumes
  -- it: without it, the ids a live flow binds are the fixture's synthetic ones.
  local entid_env_raw = os.getenv("LOPPEE_BUSINESS_TEST_OPERATION_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["LOPPEE_BUSINESS_TEST_OPERATION_ENTID"] = idmap,
    ["LOPPEE_BUSINESS_TEST_LIVE"] = "FALSE",
    ["LOPPEE_BUSINESS_TEST_EXPLAIN"] = "FALSE",
    ["LOPPEE_BUSINESS_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["LOPPEE_BUSINESS_TEST_OPERATION_ENTID"])
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
