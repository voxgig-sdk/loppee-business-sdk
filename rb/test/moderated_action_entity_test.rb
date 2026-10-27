# ModeratedAction entity test

require "minitest/autorun"
require "json"
require_relative "../LoppeeBusiness_sdk"
require_relative "runner"

class ModeratedActionEntityTest < Minitest::Test
  # main.kit.test.live.strict is true (the default is true): a live
  # request that fails, or a live test missing an input it needs,
  # fails the test.
  # An account with no record for a test to read skips it either way.
  LIVE_STRICT = true

  def test_create_instance
    testsdk = LoppeeBusinessSDK.test(nil, nil)
    ent = testsdk.ModeratedAction(nil)
    assert !ent.nil?
  end

  def test_validate
    cfg = LoppeeBusinessConfig.shared_config
    unless cfg["feature"].is_a?(Hash) && cfg["feature"].key?("validate")
      skip("feature not present in this SDK: validate")
    end
    client = LoppeeBusinessSDK.test(nil, { "feature" => { "validate" => { "active" => true } } })
    err = assert_raises(StandardError) do
      client.ModeratedAction(nil).load({ "body" => 1 }, nil)
    end
    assert_equal "validate_failed", err.code
  end

  def test_basic_flow
    setup = moderated_action_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "moderated_action." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    if setup[:live] && ENV["VOXGIG_GETONLY_GUARD"] == "TRUE"
      puts "LIVE STEP {\"id\":\"moderated_action.create.0\",\"state\":\"excluded\",\"attempted\":false,\"reason\":\"GET-only live run: needs POST /v1/actions/contact-attempt\"}"
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    moderated_action_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.moderated_action")))
    moderated_action_ref01_data = nil
    if moderated_action_ref01_data_raw.length > 0
      moderated_action_ref01_data = Helpers.to_map(moderated_action_ref01_data_raw[0][1])
    end

    # LOAD
    moderated_action_ref01_ent = client.ModeratedAction(nil)
    moderated_action_ref01_match_dt0 = {}
    moderated_action_ref01_data_dt0_loaded = moderated_action_ref01_ent.load(moderated_action_ref01_match_dt0, nil)
    assert !moderated_action_ref01_data_dt0_loaded.nil?

      return
    end

    client = setup[:client]

    # CREATE
    moderated_action_ref01_ent = client.ModeratedAction(nil)
    moderated_action_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.moderated_action"), "moderated_action_ref01"))

    moderated_action_ref01_data_result = moderated_action_ref01_ent.create(moderated_action_ref01_data, nil)
    moderated_action_ref01_data = Helpers.to_map(moderated_action_ref01_data_result.respond_to?(:data_get) ? moderated_action_ref01_data_result.data_get : moderated_action_ref01_data_result)
    assert !moderated_action_ref01_data.nil?

    # LOAD
    moderated_action_ref01_match_dt0 = {}
    moderated_action_ref01_data_dt0_loaded = moderated_action_ref01_ent.load(moderated_action_ref01_match_dt0, nil)
    assert !moderated_action_ref01_data_dt0_loaded.nil?

  end
end

def moderated_action_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "moderated_action", "ModeratedActionTestData.json")
  entity_data_source = File.read(entity_data_file, encoding: "UTF-8")
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = LoppeeBusinessSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["moderated_action01", "moderated_action02", "moderated_action03"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Whether *_ENTID supplied the idmap, read before env_override consumes
  # it: without it, the ids a live flow binds are the fixture's synthetic ones.
  entid_env_raw = ENV["LOPPEE_BUSINESS_TEST_MODERATED_ACTION_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "LOPPEE_BUSINESS_TEST_MODERATED_ACTION_ENTID" => idmap,
    "LOPPEE_BUSINESS_TEST_LIVE" => "FALSE",
    "LOPPEE_BUSINESS_TEST_EXPLAIN" => "FALSE",
    "LOPPEE_BUSINESS_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["LOPPEE_BUSINESS_TEST_MODERATED_ACTION_ENTID"])
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
