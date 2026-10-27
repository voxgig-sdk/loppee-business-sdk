# JobResumeSignedUrl entity test

require "minitest/autorun"
require "json"
require_relative "../LoppeeBusiness_sdk"
require_relative "runner"

class JobResumeSignedUrlEntityTest < Minitest::Test
  # main.kit.test.live.strict is true (the default is true): a live
  # request that fails, or a live test missing an input it needs,
  # fails the test.
  # An account with no record for a test to read skips it either way.
  LIVE_STRICT = true

  def test_create_instance
    testsdk = LoppeeBusinessSDK.test(nil, nil)
    ent = testsdk.JobResumeSignedUrl(nil)
    assert !ent.nil?
  end

  def test_validate
    cfg = LoppeeBusinessConfig.shared_config
    unless cfg["feature"].is_a?(Hash) && cfg["feature"].key?("validate")
      skip("feature not present in this SDK: validate")
    end
    client = LoppeeBusinessSDK.test(nil, { "feature" => { "validate" => { "active" => true } } })
    err = assert_raises(StandardError) do
      client.JobResumeSignedUrl(nil).create({ "job_application_id" => 1 }, nil)
    end
    assert_equal "validate_failed", err.code
  end

  def test_basic_flow
    setup = job_resume_signed_url_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "job_resume_signed_url." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    if setup[:live] && ENV["VOXGIG_GETONLY_GUARD"] == "TRUE"
      puts "LIVE STEP {\"id\":\"job_resume_signed_url.create.0\",\"state\":\"excluded\",\"attempted\":false,\"reason\":\"GET-only live run: needs POST /v1/account/job-applications/{application_id}/resume-url\"}"
      skip("Live coverage incomplete: job_resume_signed_url.create.0 excluded (GET-only live run: needs POST /v1/account/job-applications/{application_id}/resume-url)")
    end

    if setup[:live]
      ["job_application01"].each do |_live_key|
        if setup[:synthetic_only] || setup[:idmap][_live_key].nil?
          Runner.live_miss(LIVE_STRICT, "Live entity test blocked: needs #{_live_key} via LOPPEE_BUSINESS_TEST_JOB_RESUME_SIGNED_URL_ENTID")
        end
      end
    end
    client = setup[:client]

    # CREATE
    job_resume_signed_url_ref01_ent = client.JobResumeSignedUrl(nil)
    job_resume_signed_url_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.job_resume_signed_url"), "job_resume_signed_url_ref01"))
    job_resume_signed_url_ref01_data["job_application_id"] = setup[:idmap]["job_application01"]

    job_resume_signed_url_ref01_data_result = job_resume_signed_url_ref01_ent.create(job_resume_signed_url_ref01_data, nil)
    job_resume_signed_url_ref01_data = Helpers.to_map(job_resume_signed_url_ref01_data_result.respond_to?(:data_get) ? job_resume_signed_url_ref01_data_result.data_get : job_resume_signed_url_ref01_data_result)
    assert !job_resume_signed_url_ref01_data.nil?

  end
end

def job_resume_signed_url_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "job_resume_signed_url", "JobResumeSignedUrlTestData.json")
  entity_data_source = File.read(entity_data_file, encoding: "UTF-8")
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = LoppeeBusinessSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["job_resume_signed_url01", "job_resume_signed_url02", "job_resume_signed_url03", "job_application01", "job_application02", "job_application03"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Whether *_ENTID supplied the idmap, read before env_override consumes
  # it: without it, the ids a live flow binds are the fixture's synthetic ones.
  entid_env_raw = ENV["LOPPEE_BUSINESS_TEST_JOB_RESUME_SIGNED_URL_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "LOPPEE_BUSINESS_TEST_JOB_RESUME_SIGNED_URL_ENTID" => idmap,
    "LOPPEE_BUSINESS_TEST_LIVE" => "FALSE",
    "LOPPEE_BUSINESS_TEST_EXPLAIN" => "FALSE",
    "LOPPEE_BUSINESS_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["LOPPEE_BUSINESS_TEST_JOB_RESUME_SIGNED_URL_ENTID"])
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
