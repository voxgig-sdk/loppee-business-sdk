<?php
declare(strict_types=1);

// BusinessOwner entity test

require_once __DIR__ . '/../loppeebusiness_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class BusinessOwnerEntityTest extends TestCase
{
    // main.kit.test.live.strict is true (the default is true): a live
    // request that fails, or a live test missing an input it needs,
    // fails the test.
    // An account with no record for a test to read skips it either way.
    private const LIVE_STRICT = true;

    public function test_create_instance(): void
    {
        $testsdk = LoppeeBusinessSDK::test(null, null);
        $ent = $testsdk->BusinessOwner(null);
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
            $client->BusinessOwner(null)->create(["deal_id" => 1, "account_id" => 'x', "account_role" => 'x', "acknowledge_data_effects" => true, "actions" => 'x', "allowed_actions" => 'x', "amount_cents" => 1, "asset_id" => 'x', "assigneeId" => 'x', "assigneeLabel" => 'x', "assigneeType" => 'x', "attempt_id" => 'x', "body" => 'x', "businessId" => 'x', "businessName" => 'x', "campaign" => 'x', "campaign_id" => 'x', "category_aliases" => 'x', "change" => 'x', "city" => 'x', "client_message_id" => 'x', "code" => 'x', "confirmation" => 'x', "connection_kind" => 'x', "consent_sha256" => 'x', "content_type" => 'x', "createdAt" => 'x', "created_at" => 'x', "credential_id" => 'x', "credential_identifier" => 'x', "data_base64" => 'x', "delivery_contract" => 'x', "disabled_reason" => 'x', "discount_label" => 'x', "display_name" => 'x', "enabled" => true, "endpoint" => 'x', "endpoint_id" => 'x', "endpoint_url" => 'x', "event_id" => 'x', "event_types" => 'x', "expected_updated_at" => 'x', "factor_id" => 'x', "failure_count" => 1, "file_name" => 'x', "file_sha256" => 'x', "id" => 'x', "installation_id" => 'x', "issuer" => 'x', "kind" => 'x', "lastMessageAt" => 'x', "lastMessageAuthorType" => 'x', "lastMessagePreview" => 'x', "last_delivery_at" => 'x', "license_number" => 'x', "messages" => 'x', "messagesTruncated" => true, "name" => 'x', "one_time_display" => 'x', "ownerEmail" => 'x', "ownerLastReadAt" => 'x', "ownerName" => 'x', "ownerUserId" => 'x', "phone" => 'x', "platform" => 'x', "push_token" => 'x', "radius_miles" => 1, "reason" => 'x', "registered_at" => 'x', "request_id" => 'x', "requested_at" => 'x', "save_card" => true, "signing_secret" => 'x', "size_bytes" => 1, "state" => 'x', "street_address" => 'x', "supportLastReadAt" => 'x', "terms_version" => 'x', "ticketNumber" => 'x', "tier" => 'x', "title" => 'x', "updatedAt" => 'x', "updated_at" => 'x', "url" => 'x', "website" => 'x'], null);
        } catch (\Throwable $e) {
            $err = $e;
        }
        $this->assertSame('validate_failed', $err->sdk_code ?? null);
    }

    public function test_basic_flow(): void
    {
        $setup = business_owner_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "update"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "business_owner." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        if (!empty($setup["live"]) && getenv('VOXGIG_GETONLY_GUARD') === "TRUE") {
            fwrite(STDOUT, 'LIVE STEP {"id":"business_owner.create.0","state":"excluded","attempted":false,"reason":"GET-only live run: needs POST /v1/owner/agents/{agent_id}/disconnect"}' . "\n");
            fwrite(STDOUT, 'LIVE STEP {"id":"business_owner.update.1","state":"excluded","attempted":false,"reason":"GET-only live run: needs PUT /v1/owner/evidence/upload-intents/{intent_id}/object"}' . "\n");
            $this->markTestSkipped('Live coverage incomplete: business_owner.create.0 excluded (GET-only live run: needs POST /v1/owner/agents/{agent_id}/disconnect); business_owner.update.1 excluded (GET-only live run: needs PUT /v1/owner/evidence/upload-intents/{intent_id}/object)');
        }

        $client = $setup["client"];

        // CREATE
        $business_owner_ref01_ent = $client->BusinessOwner(null);
        $business_owner_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.business_owner"), "business_owner_ref01"));

        $business_owner_ref01_data_result = $business_owner_ref01_ent->create($business_owner_ref01_data, null);
        $business_owner_ref01_data = Helpers::to_map(is_object($business_owner_ref01_data_result) && method_exists($business_owner_ref01_data_result, 'data_get') ? $business_owner_ref01_data_result->data_get() : $business_owner_ref01_data_result);
        $this->assertNotNull($business_owner_ref01_data);
        $this->assertNotNull($business_owner_ref01_data["id"]);

        // UPDATE
        $business_owner_ref01_data_up0_up = [
            "id" => $business_owner_ref01_data["id"],
        ];

        $business_owner_ref01_markdef_up0_name = "account_id";
        $business_owner_ref01_markdef_up0_value = "Mark01-business_owner_ref01_" . $setup["now"];
        $business_owner_ref01_data_up0_up[$business_owner_ref01_markdef_up0_name] = $business_owner_ref01_markdef_up0_value;

        $business_owner_ref01_resdata_up0_result = $business_owner_ref01_ent->update($business_owner_ref01_data_up0_up, null);
        $business_owner_ref01_resdata_up0 = Helpers::to_map(is_object($business_owner_ref01_resdata_up0_result) && method_exists($business_owner_ref01_resdata_up0_result, 'data_get') ? $business_owner_ref01_resdata_up0_result->data_get() : $business_owner_ref01_resdata_up0_result);
        $this->assertNotNull($business_owner_ref01_resdata_up0);
        $this->assertEquals($business_owner_ref01_resdata_up0["id"], $business_owner_ref01_data_up0_up["id"]);
        $this->assertEquals($business_owner_ref01_resdata_up0[$business_owner_ref01_markdef_up0_name], $business_owner_ref01_markdef_up0_value);

    }
}

function business_owner_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/business_owner/BusinessOwnerTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = LoppeeBusinessSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["business_owner01", "business_owner02", "business_owner03", "conversation01", "conversation02", "conversation03", "message01", "message02", "message03", "review01", "review02", "review03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Whether *_ENTID supplied the idmap, read before env_override consumes
    // it: without it, the ids a live flow binds are the fixture's synthetic ones.
    $entid_env_raw = getenv("LOPPEE_BUSINESS_TEST_BUSINESS_OWNER_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "LOPPEE_BUSINESS_TEST_BUSINESS_OWNER_ENTID" => $idmap,
        "LOPPEE_BUSINESS_TEST_LIVE" => "FALSE",
        "LOPPEE_BUSINESS_TEST_EXPLAIN" => "FALSE",
        "LOPPEE_BUSINESS_APIKEY" => "",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["LOPPEE_BUSINESS_TEST_BUSINESS_OWNER_ENTID"]);
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
