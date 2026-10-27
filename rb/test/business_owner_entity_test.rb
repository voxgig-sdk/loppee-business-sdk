# BusinessOwner entity test

require "minitest/autorun"
require "json"
require_relative "../LoppeeBusiness_sdk"
require_relative "runner"

class BusinessOwnerEntityTest < Minitest::Test
  # main.kit.test.live.strict is true (the default is true): a live
  # request that fails, or a live test missing an input it needs,
  # fails the test.
  # An account with no record for a test to read skips it either way.
  LIVE_STRICT = true

  def test_create_instance
    testsdk = LoppeeBusinessSDK.test(nil, nil)
    ent = testsdk.BusinessOwner(nil)
    assert !ent.nil?
  end

  def test_validate
    cfg = LoppeeBusinessConfig.shared_config
    unless cfg["feature"].is_a?(Hash) && cfg["feature"].key?("validate")
      skip("feature not present in this SDK: validate")
    end
    client = LoppeeBusinessSDK.test(nil, { "feature" => { "validate" => { "active" => true } } })
    err = assert_raises(StandardError) do
      client.BusinessOwner(nil).create({ "deal_id" => 1, "account_id" => "x", "account_role" => "x", "acknowledge_data_effects" => true, "actions" => "x", "allowed_actions" => "x", "amount_cents" => 1, "asset_id" => "x", "assigneeId" => "x", "assigneeLabel" => "x", "assigneeType" => "x", "attempt_id" => "x", "body" => "x", "businessId" => "x", "businessName" => "x", "campaign" => "x", "campaign_id" => "x", "category_aliases" => "x", "change" => "x", "city" => "x", "client_message_id" => "x", "code" => "x", "confirmation" => "x", "connection_kind" => "x", "consent_sha256" => "x", "content_type" => "x", "createdAt" => "x", "created_at" => "x", "credential_id" => "x", "credential_identifier" => "x", "data_base64" => "x", "delivery_contract" => "x", "disabled_reason" => "x", "discount_label" => "x", "display_name" => "x", "enabled" => true, "endpoint" => "x", "endpoint_id" => "x", "endpoint_url" => "x", "event_id" => "x", "event_types" => "x", "expected_updated_at" => "x", "factor_id" => "x", "failure_count" => 1, "file_name" => "x", "file_sha256" => "x", "id" => "x", "installation_id" => "x", "issuer" => "x", "kind" => "x", "lastMessageAt" => "x", "lastMessageAuthorType" => "x", "lastMessagePreview" => "x", "last_delivery_at" => "x", "license_number" => "x", "messages" => "x", "messagesTruncated" => true, "name" => "x", "one_time_display" => "x", "ownerEmail" => "x", "ownerLastReadAt" => "x", "ownerName" => "x", "ownerUserId" => "x", "phone" => "x", "platform" => "x", "push_token" => "x", "radius_miles" => 1, "reason" => "x", "registered_at" => "x", "request_id" => "x", "requested_at" => "x", "save_card" => true, "signing_secret" => "x", "size_bytes" => 1, "state" => "x", "street_address" => "x", "supportLastReadAt" => "x", "terms_version" => "x", "ticketNumber" => "x", "tier" => "x", "title" => "x", "updatedAt" => "x", "updated_at" => "x", "url" => "x", "website" => "x" }, nil)
    end
    assert_equal "validate_failed", err.code
  end

  def test_basic_flow
    setup = business_owner_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "update"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "business_owner." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    if setup[:live] && ENV["VOXGIG_GETONLY_GUARD"] == "TRUE"
      puts "LIVE STEP {\"id\":\"business_owner.create.0\",\"state\":\"excluded\",\"attempted\":false,\"reason\":\"GET-only live run: needs POST /v1/owner/agents/{agent_id}/disconnect\"}"
      puts "LIVE STEP {\"id\":\"business_owner.update.1\",\"state\":\"excluded\",\"attempted\":false,\"reason\":\"GET-only live run: needs PUT /v1/owner/evidence/upload-intents/{intent_id}/object\"}"
      skip("Live coverage incomplete: business_owner.create.0 excluded (GET-only live run: needs POST /v1/owner/agents/{agent_id}/disconnect); business_owner.update.1 excluded (GET-only live run: needs PUT /v1/owner/evidence/upload-intents/{intent_id}/object)")
    end

    client = setup[:client]

    # CREATE
    business_owner_ref01_ent = client.BusinessOwner(nil)
    business_owner_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.business_owner"), "business_owner_ref01"))

    business_owner_ref01_data_result = business_owner_ref01_ent.create(business_owner_ref01_data, nil)
    business_owner_ref01_data = Helpers.to_map(business_owner_ref01_data_result.respond_to?(:data_get) ? business_owner_ref01_data_result.data_get : business_owner_ref01_data_result)
    assert !business_owner_ref01_data.nil?
    assert !business_owner_ref01_data["id"].nil?

    # UPDATE
    business_owner_ref01_data_up0_up = {
      "id" => business_owner_ref01_data["id"],
    }

    business_owner_ref01_markdef_up0_name = "account_id"
    business_owner_ref01_markdef_up0_value = "Mark01-business_owner_ref01_#{setup[:now]}"
    business_owner_ref01_data_up0_up[business_owner_ref01_markdef_up0_name] = business_owner_ref01_markdef_up0_value

    business_owner_ref01_resdata_up0_result = business_owner_ref01_ent.update(business_owner_ref01_data_up0_up, nil)
    business_owner_ref01_resdata_up0 = Helpers.to_map(business_owner_ref01_resdata_up0_result.respond_to?(:data_get) ? business_owner_ref01_resdata_up0_result.data_get : business_owner_ref01_resdata_up0_result)
    assert !business_owner_ref01_resdata_up0.nil?
    assert_equal business_owner_ref01_resdata_up0["id"], business_owner_ref01_data_up0_up["id"]
    assert_equal business_owner_ref01_resdata_up0[business_owner_ref01_markdef_up0_name], business_owner_ref01_markdef_up0_value

  end
end

def business_owner_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "business_owner", "BusinessOwnerTestData.json")
  entity_data_source = File.read(entity_data_file, encoding: "UTF-8")
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = LoppeeBusinessSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["business_owner01", "business_owner02", "business_owner03", "conversation01", "conversation02", "conversation03", "message01", "message02", "message03", "review01", "review02", "review03"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Whether *_ENTID supplied the idmap, read before env_override consumes
  # it: without it, the ids a live flow binds are the fixture's synthetic ones.
  entid_env_raw = ENV["LOPPEE_BUSINESS_TEST_BUSINESS_OWNER_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "LOPPEE_BUSINESS_TEST_BUSINESS_OWNER_ENTID" => idmap,
    "LOPPEE_BUSINESS_TEST_LIVE" => "FALSE",
    "LOPPEE_BUSINESS_TEST_EXPLAIN" => "FALSE",
    "LOPPEE_BUSINESS_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["LOPPEE_BUSINESS_TEST_BUSINESS_OWNER_ENTID"])
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
