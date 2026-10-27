# SavedLocation entity test

require "minitest/autorun"
require "json"
require_relative "../LoppeeBusiness_sdk"
require_relative "runner"

class SavedLocationEntityTest < Minitest::Test
  # main.kit.test.live.strict is true (the default is true): a live
  # request that fails, or a live test missing an input it needs,
  # fails the test.
  # An account with no record for a test to read skips it either way.
  LIVE_STRICT = true

  def test_create_instance
    testsdk = LoppeeBusinessSDK.test(nil, nil)
    ent = testsdk.SavedLocation(nil)
    assert !ent.nil?
  end

  def test_validate
    cfg = LoppeeBusinessConfig.shared_config
    unless cfg["feature"].is_a?(Hash) && cfg["feature"].key?("validate")
      skip("feature not present in this SDK: validate")
    end
    client = LoppeeBusinessSDK.test(nil, { "feature" => { "validate" => { "active" => true } } })
    err = assert_raises(StandardError) do
      client.SavedLocation(nil).update({ "label" => 1 }, nil)
    end
    assert_equal "validate_failed", err.code
  end

  def test_basic_flow
    setup = saved_location_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["update"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "saved_location." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    if setup[:live] && ENV["VOXGIG_GETONLY_GUARD"] == "TRUE"
      puts "LIVE STEP {\"id\":\"saved_location.update.0\",\"state\":\"excluded\",\"attempted\":false,\"reason\":\"GET-only live run: needs PUT /v1/account/location\"}"
      skip("Live coverage incomplete: saved_location.update.0 excluded (GET-only live run: needs PUT /v1/account/location)")
    end

    client = setup[:client]

    # Bootstrap entity data from existing test data.
    saved_location_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.saved_location")))
    saved_location_ref01_data = nil
    if saved_location_ref01_data_raw.length > 0
      saved_location_ref01_data = Helpers.to_map(saved_location_ref01_data_raw[0][1])
    end

    # UPDATE
    saved_location_ref01_ent = client.SavedLocation(nil)
    saved_location_ref01_data_up0_up = {
    }

    saved_location_ref01_markdef_up0_name = "location_proof_id"
    saved_location_ref01_markdef_up0_value = "Mark01-saved_location_ref01_#{setup[:now]}"
    saved_location_ref01_data_up0_up[saved_location_ref01_markdef_up0_name] = saved_location_ref01_markdef_up0_value

    saved_location_ref01_resdata_up0_result = saved_location_ref01_ent.update(saved_location_ref01_data_up0_up, nil)
    saved_location_ref01_resdata_up0 = Helpers.to_map(saved_location_ref01_resdata_up0_result.respond_to?(:data_get) ? saved_location_ref01_resdata_up0_result.data_get : saved_location_ref01_resdata_up0_result)
    assert !saved_location_ref01_resdata_up0.nil?
    assert_equal saved_location_ref01_resdata_up0[saved_location_ref01_markdef_up0_name], saved_location_ref01_markdef_up0_value

  end
end

def saved_location_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "saved_location", "SavedLocationTestData.json")
  entity_data_source = File.read(entity_data_file, encoding: "UTF-8")
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = LoppeeBusinessSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["saved_location01", "saved_location02", "saved_location03"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Whether *_ENTID supplied the idmap, read before env_override consumes
  # it: without it, the ids a live flow binds are the fixture's synthetic ones.
  entid_env_raw = ENV["LOPPEE_BUSINESS_TEST_SAVED_LOCATION_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "LOPPEE_BUSINESS_TEST_SAVED_LOCATION_ENTID" => idmap,
    "LOPPEE_BUSINESS_TEST_LIVE" => "FALSE",
    "LOPPEE_BUSINESS_TEST_EXPLAIN" => "FALSE",
    "LOPPEE_BUSINESS_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["LOPPEE_BUSINESS_TEST_SAVED_LOCATION_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end

  if env["LOPPEE_BUSINESS_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      # FIRST, so the generated fields below win: sdk-test-control.json's
      # test.client.options adds to the live client, it does not redirect it.
      Runner.live_client_options,
      {
        "apikey" => env["LOPPEE_BUSINESS_APIKEY"],
      },
      extra || {},
    ])
    client = LoppeeBusinessSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["LOPPEE_BUSINESS_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["LOPPEE_BUSINESS_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
