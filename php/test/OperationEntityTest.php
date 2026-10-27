<?php
declare(strict_types=1);

// Operation entity test

require_once __DIR__ . '/../loppeebusiness_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class OperationEntityTest extends TestCase
{
    // main.kit.test.live.strict is true (the default is true): a live
    // request that fails, or a live test missing an input it needs,
    // fails the test.
    // An account with no record for a test to read skips it either way.
    private const LIVE_STRICT = true;

    public function test_create_instance(): void
    {
        $testsdk = LoppeeBusinessSDK::test(null, null);
        $ent = $testsdk->Operation(null);
        $this->assertNotNull($ent);
    }

    public function test_validate(): void
    {
        $cfg = LoppeeBusinessConfig::shared_config();
        if (!isset($cfg["feature"]["validate"])) {
            $this->markTestSkipped('feature not present in this SDK: validate');
        }
        $client = LoppeeBusinessSDK::test(null, ["feature" => ["validate" => ["active" => true]]]);
        $err = null;
        try {
            $client->Operation(null)->create(["coupon_id" => 1, "account_id" => 'x', "allowed_actions" => 'x', "amount_cents" => 1, "api_key" => 'x', "assigneeId" => 'x', "assigneeLabel" => 'x', "assigneeType" => 'x', "assistant_enabled" => true, "body" => 'x', "businessId" => 'x', "businessName" => 'x', "business_ids" => 'x', "catalog" => 'x', "code" => 'x', "config" => 'x', "confirmation" => 'x', "connection_id" => 'x', "connection_kind" => 'x', "content_type" => 'x', "context_id" => 'x', "context_type" => 'x', "createdAt" => 'x', "created_at" => 'x', "credential_id" => 'x', "data_base64" => 'x', "decision" => 'x', "delivery_contract" => 'x', "disabled_reason" => 'x', "discount_type" => 'x', "display_name" => 'x', "disposition" => 'x', "draft" => 'x', "email" => 'x', "enabled" => true, "endpoint" => 'x', "endpoint_id" => 'x', "endpoint_url" => 'x', "ends_at" => 'x', "environment_fallback" => 'x', "event_id" => 'x', "event_types" => 'x', "expected_allowed_actions" => 'x', "expected_key_id" => 'x', "expected_updated_at" => 'x', "expected_version" => 1, "fact_id" => 'x', "facts" => 'x', "failure_count" => 1, "fields" => 'x', "file_name" => 'x', "historic_association_checked" => true, "hold" => 'x', "hours" => 'x', "id" => 'x', "in_use" => 'x', "invited" => true, "key_check" => 'x', "kind" => 'x', "label" => 'x', "lastMessageAt" => 'x', "lastMessageAuthorType" => 'x', "lastMessagePreview" => 'x', "last_delivery_at" => 'x', "last_error_code" => 'x', "last_probe_at" => 'x', "last_problem" => 'x', "make_active" => true, "max_cents" => 1, "messages" => 'x', "messagesTruncated" => true, "min_cents" => 1, "model" => 'x', "model_id" => 'x', "name" => 'x', "one_time_display" => 'x', "outcome" => 'x', "ownerEmail" => 'x', "ownerLastReadAt" => 'x', "ownerName" => 'x', "ownerUserId" => 'x', "policyVersion" => 'x', "provider" => 'x', "providers" => 'x', "purpose_code" => 'x', "rank_bid_cents" => 1, "reference" => 'x', "report_ids" => 'x', "reserve_cents" => 1, "resolution_note" => 'x', "revision" => 1, "rows" => 'x', "run" => 'x', "schema_version" => 'x', "scope" => 'x', "settings" => 'x', "signing_secret" => 'x', "size_bytes" => 1, "source_scope_checked" => true, "storage" => 'x', "subject" => 'x', "supportLastReadAt" => 'x', "taxonomy_category_aliases" => 'x', "ticketNumber" => 'x', "tier" => 'x', "updatedAt" => 'x', "updated_at" => 'x', "url" => 'x', "value" => 'x', "verification_method" => 'x', "verified_at" => 'x', "workload" => 'x'], null);
        } catch (\Throwable $e) {
            $err = $e;
        }
        $this->assertSame('validate_failed', $err->sdk_code ?? null);
    }

    public function test_basic_flow(): void
    {
        $setup = operation_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "update", "remove"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "operation." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        if (!empty($setup["live"]) && getenv('VOXGIG_GETONLY_GUARD') === "TRUE") {
            fwrite(STDOUT, 'LIVE STEP {"id":"operation.create.0","state":"excluded","attempted":false,"reason":"GET-only live run: needs POST /v1/admin/businesses/{business_id}/job-applications/{application_id}/resume-url"}' . "\n");
            fwrite(STDOUT, 'LIVE STEP {"id":"operation.update.1","state":"excluded","attempted":false,"reason":"GET-only live run: needs PUT /v1/admin/assistant-provider/{provider}"}' . "\n");
            fwrite(STDOUT, 'LIVE STEP {"id":"operation.remove.2","state":"excluded","attempted":false,"reason":"GET-only live run: needs DELETE /v1/admin/support/{conversation_id}/ai-drafts/{draft_id}"}' . "\n");
            $this->markTestSkipped('Live coverage incomplete: operation.create.0 excluded (GET-only live run: needs POST /v1/admin/businesses/{business_id}/job-applications/{application_id}/resume-url); operation.update.1 excluded (GET-only live run: needs PUT /v1/admin/assistant-provider/{provider}); operation.remove.2 excluded (GET-only live run: needs DELETE /v1/admin/support/{conversation_id}/ai-drafts/{draft_id})');
        }

        if (!empty($setup["live"])) {
            foreach (["support01"] as $_liveKey) {
                if (!empty($setup["synthetic_only"]) || null === ($setup["idmap"][$_liveKey] ?? null)) {
                    Runner::live_miss(self::LIVE_STRICT, "Live entity test blocked: needs " . $_liveKey . " via LOPPEE_BUSINESS_TEST_OPERATION_ENTID");
                }
            }
        }
        $client = $setup["client"];

        // CREATE
        $operation_ref01_ent = $client->Operation(null);
        $operation_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.operation"), "operation_ref01"));
        $operation_ref01_data["support_id"] = $setup["idmap"]["support01"];

        $operation_ref01_data_result = $operation_ref01_ent->create($operation_ref01_data, null);
        $operation_ref01_data = Helpers::to_map(is_object($operation_ref01_data_result) && method_exists($operation_ref01_data_result, 'data_get') ? $operation_ref01_data_result->data_get() : $operation_ref01_data_result);
        $this->assertNotNull($operation_ref01_data);
        $this->assertNotNull($operation_ref01_data["id"]);

        // UPDATE
        $operation_ref01_data_up0_up = [
            "id" => $operation_ref01_data["id"],
        ];

        $operation_ref01_markdef_up0_name = "account_id";
        $operation_ref01_markdef_up0_value = "Mark01-operation_ref01_" . $setup["now"];
        $operation_ref01_data_up0_up[$operation_ref01_markdef_up0_name] = $operation_ref01_markdef_up0_value;

        $operation_ref01_resdata_up0_result = $operation_ref01_ent->update($operation_ref01_data_up0_up, null);
        $operation_ref01_resdata_up0 = Helpers::to_map(is_object($operation_ref01_resdata_up0_result) && method_exists($operation_ref01_resdata_up0_result, 'data_get') ? $operation_ref01_resdata_up0_result->data_get() : $operation_ref01_resdata_up0_result);
        $this->assertNotNull($operation_ref01_resdata_up0);
        $this->assertEquals($operation_ref01_resdata_up0["id"], $operation_ref01_data_up0_up["id"]);
        $this->assertEquals($operation_ref01_resdata_up0[$operation_ref01_markdef_up0_name], $operation_ref01_markdef_up0_value);

        // REMOVE
        $operation_ref01_match_rm0 = [
            "id" => $operation_ref01_data["id"],
        ];
        $operation_ref01_ent->remove($operation_ref01_match_rm0, null);

    }
}

function operation_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/operation/OperationTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = LoppeeBusinessSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["operation01", "operation02", "operation03", "business_claim01", "business_claim02", "business_claim03", "review01", "review02", "review03", "job_application01", "job_application02", "job_application03", "message01", "message02", "message03", "support01"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Whether *_ENTID supplied the idmap, read before env_override consumes
    // it: without it, the ids a live flow binds are the fixture's synthetic ones.
    $entid_env_raw = getenv("LOPPEE_BUSINESS_TEST_OPERATION_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "LOPPEE_BUSINESS_TEST_OPERATION_ENTID" => $idmap,
        "LOPPEE_BUSINESS_TEST_LIVE" => "FALSE",
        "LOPPEE_BUSINESS_TEST_EXPLAIN" => "FALSE",
        "LOPPEE_BUSINESS_APIKEY" => "",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["LOPPEE_BUSINESS_TEST_OPERATION_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["LOPPEE_BUSINESS_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            Runner::live_client_options(),
            [
                "apikey" => $env["LOPPEE_BUSINESS_APIKEY"],
            ],
            // ismap, not a plain "?? []" default: an empty PHP array is a
            // LIST, and a non-map later entry REPLACES the accumulated map in
            // merge - so the no-extras call discarded live_client_options()
            // and the apikey/server map above it.
            Vs::ismap($extra) ? $extra : new \stdClass(),
        ]);
        // "?? []" because merge legitimately answers with a stdClass when every
        // contributing entry is an EMPTY map - an SDK with no apikey and no
        // server variables generates an empty middle entry, so that is the
        // common case, not the edge one. to_map returns null for a non-array by
        // design, and the constructor takes a non-nullable array, so without the
        // fallback every such SDK died on "must be of type array, null given"
        // the moment live mode was switched on. Offline mode never reaches this
        // branch, which is why the offline suite stayed green.
        $client = new LoppeeBusinessSDK(Helpers::to_map($merged_opts) ?? []);
    }

    $live = $env["LOPPEE_BUSINESS_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["LOPPEE_BUSINESS_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
