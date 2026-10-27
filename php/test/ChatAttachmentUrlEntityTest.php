<?php
declare(strict_types=1);

// ChatAttachmentUrl entity test

require_once __DIR__ . '/../loppeebusiness_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class ChatAttachmentUrlEntityTest extends TestCase
{
    // main.kit.test.live.strict is true (the default is true): a live
    // request that fails, or a live test missing an input it needs,
    // fails the test.
    // An account with no record for a test to read skips it either way.
    private const LIVE_STRICT = true;

    public function test_create_instance(): void
    {
        $testsdk = LoppeeBusinessSDK::test(null, null);
        $ent = $testsdk->ChatAttachmentUrl(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = chat_attachment_url_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "chat_attachment_url." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        if (!empty($setup["live"]) && getenv('VOXGIG_GETONLY_GUARD') === "TRUE") {
            fwrite(STDOUT, 'LIVE STEP {"id":"chat_attachment_url.create.0","state":"excluded","attempted":false,"reason":"GET-only live run: needs POST /v1/account/conversations/{conversation_id}/attachments/{attachment_id}/url"}' . "\n");
            $this->markTestSkipped('Live coverage incomplete: chat_attachment_url.create.0 excluded (GET-only live run: needs POST /v1/account/conversations/{conversation_id}/attachments/{attachment_id}/url)');
        }

        if (!empty($setup["live"])) {
            foreach (["attachment01", "support01"] as $_liveKey) {
                if (!empty($setup["synthetic_only"]) || null === ($setup["idmap"][$_liveKey] ?? null)) {
                    Runner::live_miss(self::LIVE_STRICT, "Live entity test blocked: needs " . $_liveKey . " via LOPPEE_BUSINESS_TEST_CHAT_ATTACHMENT_URL_ENTID");
                }
            }
        }
        $client = $setup["client"];

        // CREATE
        $chat_attachment_url_ref01_ent = $client->ChatAttachmentUrl(null);
        $chat_attachment_url_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.chat_attachment_url"), "chat_attachment_url_ref01"));
        $chat_attachment_url_ref01_data["attachment_id"] = $setup["idmap"]["attachment01"];
        $chat_attachment_url_ref01_data["support_id"] = $setup["idmap"]["support01"];

        $chat_attachment_url_ref01_data_result = $chat_attachment_url_ref01_ent->create($chat_attachment_url_ref01_data, null);
        $chat_attachment_url_ref01_data = Helpers::to_map(is_object($chat_attachment_url_ref01_data_result) && method_exists($chat_attachment_url_ref01_data_result, 'data_get') ? $chat_attachment_url_ref01_data_result->data_get() : $chat_attachment_url_ref01_data_result);
        $this->assertNotNull($chat_attachment_url_ref01_data);
        $this->assertNotNull($chat_attachment_url_ref01_data["id"]);

    }
}

function chat_attachment_url_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/chat_attachment_url/ChatAttachmentUrlTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = LoppeeBusinessSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["chat_attachment_url01", "chat_attachment_url02", "chat_attachment_url03", "conversation01", "conversation02", "conversation03", "message01", "message02", "message03", "attachment01", "support01"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Whether *_ENTID supplied the idmap, read before env_override consumes
    // it: without it, the ids a live flow binds are the fixture's synthetic ones.
    $entid_env_raw = getenv("LOPPEE_BUSINESS_TEST_CHAT_ATTACHMENT_URL_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "LOPPEE_BUSINESS_TEST_CHAT_ATTACHMENT_URL_ENTID" => $idmap,
        "LOPPEE_BUSINESS_TEST_LIVE" => "FALSE",
        "LOPPEE_BUSINESS_TEST_EXPLAIN" => "FALSE",
        "LOPPEE_BUSINESS_APIKEY" => "",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["LOPPEE_BUSINESS_TEST_CHAT_ATTACHMENT_URL_ENTID"]);
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
