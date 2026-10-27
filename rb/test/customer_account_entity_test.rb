# CustomerAccount entity test

require "minitest/autorun"
require "json"
require_relative "../LoppeeBusiness_sdk"
require_relative "runner"

class CustomerAccountEntityTest < Minitest::Test
  # main.kit.test.live.strict is true (the default is true): a live
  # request that fails, or a live test missing an input it needs,
  # fails the test.
  # An account with no record for a test to read skips it either way.
  LIVE_STRICT = true

  def test_create_instance
    testsdk = LoppeeBusinessSDK.test(nil, nil)
    ent = testsdk.CustomerAccount(nil)
    assert !ent.nil?
  end

  def test_validate
    cfg = LoppeeBusinessConfig.shared_config
    unless cfg["feature"].is_a?(Hash) && cfg["feature"].key?("validate")
      skip("feature not present in this SDK: validate")
    end
    client = LoppeeBusinessSDK.test(nil, { "feature" => { "validate" => { "active" => true } } })
    err = assert_raises(StandardError) do
      client.CustomerAccount(nil).create({ "account_id" => 1, "account_role" => "x", "accuracy_meters" => 1, "acknowledge_data_effects" => true, "actions" => "x", "agent_key_id" => "x", "agent_receives_coordinates" => true, "all_paused" => true, "app_attest_registered" => true, "assertion" => "x", "attestation" => "x", "author_label" => "x", "author_type" => "x", "binding" => "x", "body" => "x", "business_id" => "x", "capture_source" => "x", "captured_at" => "x", "challenge" => "x", "challenge_id" => "x", "client_message_id" => "x", "completed" => true, "confirmation" => "x", "connection_id" => "x", "connection_kind" => "x", "coordinates_returned" => true, "created_at" => "x", "credential_id" => "x", "declined" => true, "delivery_contract" => "x", "disabled_reason" => "x", "disclosure" => "x", "enabled" => true, "endpoint" => "x", "endpoint_id" => "x", "endpoint_url" => "x", "environment" => "x", "event_id" => "x", "event_types" => "x", "failure_count" => 1, "handoff_id" => "x", "has_more" => true, "id" => "x", "idempotent_replay" => true, "installation_id" => "x", "key_id" => "x", "last_delivery_at" => "x", "latitude" => 1, "longitude" => 1, "message_alerts_enabled" => true, "messages" => "x", "mode" => "x", "oauth_grant_id" => "x", "one_time_display" => "x", "platform" => "x", "policy" => "x", "purpose" => "x", "push_token" => "x", "registered_at" => "x", "reply" => "x", "request_mode" => "x", "requested_at" => "x", "results" => "x", "schema_version" => "x", "selected_at" => "x", "signed_in" => true, "signing_secret" => "x", "status" => "x", "updated_at" => "x", "url" => "x", "usable_until" => "x", "use_mode" => "x" }, nil)
    end
    assert_equal "validate_failed", err.code
  end

  def test_basic_flow
    setup = customer_account_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "customer_account." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    if setup[:live] && ENV["VOXGIG_GETONLY_GUARD"] == "TRUE"
      puts "LIVE STEP {\"id\":\"customer_account.create.0\",\"state\":\"excluded\",\"attempted\":false,\"reason\":\"GET-only live run: needs POST /v1/account/location-handoffs/{handoff_id}/complete-from-device\"}"
      skip("Live coverage incomplete: customer_account.create.0 excluded (GET-only live run: needs POST /v1/account/location-handoffs/{handoff_id}/complete-from-device)")
    end

    client = setup[:client]

    # CREATE
    customer_account_ref01_ent = client.CustomerAccount(nil)
    customer_account_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.customer_account"), "customer_account_ref01"))

    customer_account_ref01_data_result = customer_account_ref01_ent.create(customer_account_ref01_data, nil)
    customer_account_ref01_data = Helpers.to_map(customer_account_ref01_data_result.respond_to?(:data_get) ? customer_account_ref01_data_result.data_get : customer_account_ref01_data_result)
    assert !customer_account_ref01_data.nil?
    assert !customer_account_ref01_data["id"].nil?

  end
end

def customer_account_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "customer_account", "CustomerAccountTestData.json")
  entity_data_source = File.read(entity_data_file, encoding: "UTF-8")
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = LoppeeBusinessSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["customer_account01", "customer_account02", "customer_account03", "conversation01", "conversation02", "conversation03", "location_handoff01", "location_handoff02", "location_handoff03"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Whether *_ENTID supplied the idmap, read before env_override consumes
  # it: without it, the ids a live flow binds are the fixture's synthetic ones.
  entid_env_raw = ENV["LOPPEE_BUSINESS_TEST_CUSTOMER_ACCOUNT_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "LOPPEE_BUSINESS_TEST_CUSTOMER_ACCOUNT_ENTID" => idmap,
    "LOPPEE_BUSINESS_TEST_LIVE" => "FALSE",
    "LOPPEE_BUSINESS_TEST_EXPLAIN" => "FALSE",
    "LOPPEE_BUSINESS_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["LOPPEE_BUSINESS_TEST_CUSTOMER_ACCOUNT_ENTID"])
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
