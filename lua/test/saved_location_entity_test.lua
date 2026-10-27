-- SavedLocation entity test

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


describe("SavedLocationEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:SavedLocation(nil)
    assert.is_not_nil(ent)
  end)

  it("should refuse an invalid request", function()
    local config = require("config_shared")()
    if type(config.feature) ~= "table" or config.feature.validate == nil then
      pending("feature not present in this SDK: validate")
      return
    end
    local client = sdk.test(nil, { feature = { validate = { active = true } } })
    local _, err = client:SavedLocation(nil):update({ ["label"] = 1 }, nil)
    assert.are.equal("validate_failed", type(err) == "table" and err.code or nil)
  end)

  it("should run basic flow", function()
    local setup = saved_location_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"update"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "saved_location." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    if setup.live and os.getenv("VOXGIG_GETONLY_GUARD") == "TRUE" then
      print("LIVE STEP {\"id\":\"saved_location.update.0\",\"state\":\"excluded\",\"attempted\":false,\"reason\":\"GET-only live run: needs PUT /v1/account/location\"}")
      pending("Live coverage incomplete: saved_location.update.0 excluded (GET-only live run: needs PUT /v1/account/location)")
      return
    end

    local client = setup.client

    -- Bootstrap entity data from existing test data.
    local saved_location_ref01_data_raw = vs.items(helpers.to_map(
      vs.getpath(setup.data, "existing.saved_location")))
    local saved_location_ref01_data = nil
    if #saved_location_ref01_data_raw > 0 then
      saved_location_ref01_data = helpers.to_map(saved_location_ref01_data_raw[1][2])
    end

    -- UPDATE
    local saved_location_ref01_ent = client:SavedLocation(nil)
    local saved_location_ref01_data_up0_up = {
    }

    local saved_location_ref01_markdef_up0_name = "location_proof_id"
    local saved_location_ref01_markdef_up0_value = "Mark01-saved_location_ref01_" .. tostring(setup.now)
    saved_location_ref01_data_up0_up[saved_location_ref01_markdef_up0_name] = saved_location_ref01_markdef_up0_value

    local saved_location_ref01_resdata_up0_result, err = saved_location_ref01_ent:update(saved_location_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local saved_location_ref01_resdata_up0 = helpers.to_map(type(saved_location_ref01_resdata_up0_result) == 'table' and saved_location_ref01_resdata_up0_result.data_get and saved_location_ref01_resdata_up0_result:data_get() or saved_location_ref01_resdata_up0_result)
    assert.is_not_nil(saved_location_ref01_resdata_up0)
    assert.are.equal(saved_location_ref01_resdata_up0[saved_location_ref01_markdef_up0_name], saved_location_ref01_markdef_up0_value)

  end)
end)

function saved_location_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/saved_location/SavedLocationTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read saved_location test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "saved_location01", "saved_location02", "saved_location03" },
    {
      ["`$PACK`"] = { "", {
        ["`$KEY`"] = "`$COPY`",
        ["`$VAL`"] = { "`$FORMAT`", "upper", "`$COPY`" },
      }},
    }
  )

  -- Whether *_ENTID supplied the idmap, read before env_override consumes
  -- it: without it, the ids a live flow binds are the fixture's synthetic ones.
  local entid_env_raw = os.getenv("LOPPEE_BUSINESS_TEST_SAVED_LOCATION_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["LOPPEE_BUSINESS_TEST_SAVED_LOCATION_ENTID"] = idmap,
    ["LOPPEE_BUSINESS_TEST_LIVE"] = "FALSE",
    ["LOPPEE_BUSINESS_TEST_EXPLAIN"] = "FALSE",
    ["LOPPEE_BUSINESS_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["LOPPEE_BUSINESS_TEST_SAVED_LOCATION_ENTID"])
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
