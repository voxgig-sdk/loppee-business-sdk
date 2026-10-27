# ConversationWorkflow entity test

require "minitest/autorun"
require "json"
require_relative "../LoppeeBusiness_sdk"
require_relative "runner"

class ConversationWorkflowEntityTest < Minitest::Test
  # main.kit.test.live.strict is true (the default is true): a live
  # request that fails, or a live test missing an input it needs,
  # fails the test.
  # An account with no record for a test to read skips it either way.
  LIVE_STRICT = true

  def test_create_instance
    testsdk = LoppeeBusinessSDK.test(nil, nil)
    ent = testsdk.ConversationWorkflow(nil)
    assert !ent.nil?
  end

  def test_validate
    cfg = LoppeeBusinessConfig.shared_config
    unless cfg["feature"].is_a?(Hash) && cfg["feature"].key?("validate")
      skip("feature not present in this SDK: validate")
    end
    client = LoppeeBusinessSDK.test(nil, { "feature" => { "validate" => { "active" => true } } })
    err = assert_raises(StandardError) do
      client.ConversationWorkflow(nil).create({ "message_id" => 1 }, nil)
    end
    assert_equal "validate_failed", err.code
  end

  def test_basic_flow
    setup = conversation_workflow_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "conversation_workflow." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    if setup[:live] && ENV["VOXGIG_GETONLY_GUARD"] == "TRUE"
      puts "LIVE STEP {\"id\":\"conversation_workflow.create.0\",\"state\":\"excluded\",\"attempted\":false,\"reason\":\"GET-only live run: needs POST /v1/owner/messages/{interaction_id}/workflow\"}"
      skip("Live coverage incomplete: conversation_workflow.create.0 excluded (GET-only live run: needs POST /v1/owner/messages/{interaction_id}/workflow)")
    end

    if setup[:live]
      ["message01"].each do |_live_key|
        if setup[:synthetic_only] || setup[:idmap][_live_key].nil?
          Runner.live_miss(LIVE_STRICT, "Live entity test blocked: needs #{_live_key} via LOPPEE_BUSINESS_TEST_CONVERSATION_WORKFLOW_ENTID")
        end
      end
    end
    client = setup[:client]

    # CREATE
    conversation_workflow_ref01_ent = client.ConversationWorkflow(nil)
    conversation_workflow_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.conversation_workflow"), "conversation_workflow_ref01"))
    conversation_workflow_ref01_data["message_id"] = setup[:idmap]["message01"]

    conversation_workflow_ref01_data_result = conversation_workflow_ref01_ent.create(conversation_workflow_ref01_data, nil)
    conversation_workflow_ref01_data = Helpers.to_map(conversation_workflow_ref01_data_result.respond_to?(:data_get) ? conversation_workflow_ref01_data_result.data_get : conversation_workflow_ref01_data_result)
    assert !conversation_workflow_ref01_data.nil?

  end
end

def conversation_workflow_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "conversation_workflow", "ConversationWorkflowTestData.json")
  entity_data_source = File.read(entity_data_file, encoding: "UTF-8")
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = LoppeeBusinessSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["conversation_workflow01", "conversation_workflow02", "conversation_workflow03", "message01", "message02", "message03"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Whether *_ENTID supplied the idmap, read before env_override consumes
  # it: without it, the ids a live flow binds are the fixture's synthetic ones.
  entid_env_raw = ENV["LOPPEE_BUSINESS_TEST_CONVERSATION_WORKFLOW_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "LOPPEE_BUSINESS_TEST_CONVERSATION_WORKFLOW_ENTID" => idmap,
    "LOPPEE_BUSINESS_TEST_LIVE" => "FALSE",
    "LOPPEE_BUSINESS_TEST_EXPLAIN" => "FALSE",
    "LOPPEE_BUSINESS_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["LOPPEE_BUSINESS_TEST_CONVERSATION_WORKFLOW_ENTID"])
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
