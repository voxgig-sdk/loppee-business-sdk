-- CustomerLocationProofRevocation entity test

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


describe("CustomerLocationProofRevocationEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:CustomerLocationProofRevocation(nil)
    assert.is_not_nil(ent)
  end)

  it("should refuse an invalid request", function()
    local config = require("config_shared")()
    if type(config.feature) ~= "table" or config.feature.validate == nil then
      pending("feature not present in this SDK: validate")
      return
    end
    local client = sdk.test(nil, { feature = { validate = { active = true } } })
    local _, err = client:CustomerLocationProofRevocation(nil):create({ ["accuracy_meters"] = "x", ["captured_at"] = "x", ["latitude"] = 1, ["longitude"] = 1 }, nil)
    assert.are.equal("validate_failed", type(err) == "table" and err.code or nil)
  end)

  it("should run basic flow", function()
    local setup = customer_location_proof_revocation_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "customer_location_proof_revocation." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    if setup.live and os.getenv("VOXGIG_GETONLY_GUARD") == "TRUE" then
      print("LIVE STEP {\"id\":\"customer_location_proof_revocation.create.0\",\"state\":\"excluded\",\"attempted\":false,\"reason\":\"GET-only live run: needs POST /v1/account/location-proofs\"}")
      print("LIVE STEP {\"id\":\"customer_location_proof_revocation.remove.1\",\"state\":\"excluded\",\"attempted\":false,\"reason\":\"GET-only live run: needs DELETE /v1/account/location-proofs/{location_proof_id}\"}")
      pending("Live coverage incomplete: customer_location_proof_revocation.create.0 excluded (GET-only live run: needs POST /v1/account/location-proofs); customer_location_proof_revocation.remove.1 excluded (GET-only live run: needs DELETE /v1/account/location-proofs/{location_proof_id})")
      return
    end

    local client = setup.client

    -- CREATE
    local customer_location_proof_revocation_ref01_ent = client:CustomerLocationProofRevocation(nil)
    local customer_location_proof_revocation_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.customer_location_proof_revocation"), "customer_location_proof_revocation_ref01"))

    local customer_location_proof_revocation_ref01_data_result, err = customer_location_proof_revocation_ref01_ent:create(customer_location_proof_revocation_ref01_data, nil)
    assert.is_nil(err)
    customer_location_proof_revocation_ref01_data = helpers.to_map(type(customer_location_proof_revocation_ref01_data_result) == 'table' and customer_location_proof_revocation_ref01_data_result.data_get and customer_location_proof_revocation_ref01_data_result:data_get() or customer_location_proof_revocation_ref01_data_result)
    assert.is_not_nil(customer_location_proof_revocation_ref01_data)

  end)
end)

function customer_location_proof_revocation_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/customer_location_proof_revocation/CustomerLocationProofRevocationTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read customer_location_proof_revocation test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "customer_location_proof_revocation01", "customer_location_proof_revocation02", "customer_location_proof_revocation03" },
    {
      ["`$PACK`"] = { "", {
        ["`$KEY`"] = "`$COPY`",
        ["`$VAL`"] = { "`$FORMAT`", "upper", "`$COPY`" },
      }},
    }
  )

  -- Whether *_ENTID supplied the idmap, read before env_override consumes
  -- it: without it, the ids a live flow binds are the fixture's synthetic ones.
  local entid_env_raw = os.getenv("LOPPEE_BUSINESS_TEST_CUSTOMER_LOCATION_PROOF_REVOCATION_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["LOPPEE_BUSINESS_TEST_CUSTOMER_LOCATION_PROOF_REVOCATION_ENTID"] = idmap,
    ["LOPPEE_BUSINESS_TEST_LIVE"] = "FALSE",
    ["LOPPEE_BUSINESS_TEST_EXPLAIN"] = "FALSE",
    ["LOPPEE_BUSINESS_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["LOPPEE_BUSINESS_TEST_CUSTOMER_LOCATION_PROOF_REVOCATION_ENTID"])
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
