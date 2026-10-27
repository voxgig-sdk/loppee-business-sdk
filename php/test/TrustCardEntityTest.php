<?php
declare(strict_types=1);

// TrustCard entity test

require_once __DIR__ . '/../loppeebusiness_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class TrustCardEntityTest extends TestCase
{
    // main.kit.test.live.strict is true (the default is true): a live
    // request that fails, or a live test missing an input it needs,
    // fails the test.
    // An account with no record for a test to read skips it either way.
    private const LIVE_STRICT = true;

    public function test_create_instance(): void
    {
        $testsdk = LoppeeBusinessSDK::test(null, null);
        $ent = $testsdk->TrustCard(null);
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
            $client->TrustCard(null)->list(["business_id" => 1], null);
        } catch (\Throwable $e) {
            $err = $e;
        }
        $this->assertSame('validate_failed', $err->sdk_code ?? null);
    }

    public function test_basic_flow(): void
    {
        $setup = trust_card_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "list", "load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "trust_card." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        if (!empty($setup["live"]) && getenv('VOXGIG_GETONLY_GUARD') === "TRUE") {
            fwrite(STDOUT, 'LIVE STEP {"id":"trust_card.create.0","state":"excluded","attempted":false,"reason":"GET-only live run: needs POST /v1/businesses/{business_id}/license-records/{fact_id}/report"}' . "\n");
        if (!empty($setup["live"])) {
            foreach (["business01"] as $_liveKey) {
                if (!empty($setup["synthetic_only"]) || null === ($setup["idmap"][$_liveKey] ?? null)) {
                    Runner::live_miss(self::LIVE_STRICT, "Live entity test blocked: needs " . $_liveKey . " via LOPPEE_BUSINESS_TEST_TRUST_CARD_ENTID");
                }
            }
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $trust_card_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.trust_card")));
        $trust_card_ref01_data = null;
        if (count($trust_card_ref01_data_raw) > 0) {
            $trust_card_ref01_data = Helpers::to_map($trust_card_ref01_data_raw[0][1]);
        }

        // LIST
        $trust_card_ref01_ent = $client->TrustCard(null);
        $trust_card_ref01_match = [
            "business_id" => $setup["idmap"]["business01"],
        ];

        $trust_card_ref01_list_result = $trust_card_ref01_ent->list($trust_card_ref01_match, null);
        $this->assertIsArray($trust_card_ref01_list_result);

        // LOAD
        $trust_card_ref01_match_dt0 = [];
        if (!empty($setup["live"])) {
            $trust_card_ref01_match_dt0["business_id"] = 'biz_elite_ac_llc_jacksonville_fl';
        }
        $trust_card_ref01_data_dt0_loaded = $trust_card_ref01_ent->load($trust_card_ref01_match_dt0, null);
        $this->assertNotNull($trust_card_ref01_data_dt0_loaded);

            return;
        }

        if (!empty($setup["live"])) {
            foreach (["business01", "license_record01"] as $_liveKey) {
                if (!empty($setup["synthetic_only"]) || null === ($setup["idmap"][$_liveKey] ?? null)) {
                    Runner::live_miss(self::LIVE_STRICT, "Live entity test blocked: needs " . $_liveKey . " via LOPPEE_BUSINESS_TEST_TRUST_CARD_ENTID");
                }
            }
        }
        $client = $setup["client"];

        // CREATE
        $trust_card_ref01_ent = $client->TrustCard(null);
        $trust_card_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.trust_card"), "trust_card_ref01"));
        $trust_card_ref01_data["business_id"] = $setup["idmap"]["business01"];
        $trust_card_ref01_data["license_record_id"] = $setup["idmap"]["license_record01"];

        $trust_card_ref01_data_result = $trust_card_ref01_ent->create($trust_card_ref01_data, null);
        $trust_card_ref01_data = Helpers::to_map(is_object($trust_card_ref01_data_result) && method_exists($trust_card_ref01_data_result, 'data_get') ? $trust_card_ref01_data_result->data_get() : $trust_card_ref01_data_result);
        $this->assertNotNull($trust_card_ref01_data);

        // LIST
        $trust_card_ref01_match = [
            "business_id" => $setup["idmap"]["business01"],
        ];

        $trust_card_ref01_list_result = $trust_card_ref01_ent->list($trust_card_ref01_match, null);
        $this->assertIsArray($trust_card_ref01_list_result);

        // LOAD
        $trust_card_ref01_match_dt0 = [];
        if (!empty($setup["live"])) {
            $trust_card_ref01_match_dt0["business_id"] = 'biz_elite_ac_llc_jacksonville_fl';
        }
        $trust_card_ref01_data_dt0_loaded = $trust_card_ref01_ent->load($trust_card_ref01_match_dt0, null);
        $this->assertNotNull($trust_card_ref01_data_dt0_loaded);

    }
}

function trust_card_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/trust_card/TrustCardTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = LoppeeBusinessSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["trust_card01", "trust_card02", "trust_card03", "business01", "license_record01"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Whether *_ENTID supplied the idmap, read before env_override consumes
    // it: without it, the ids a live flow binds are the fixture's synthetic ones.
    $entid_env_raw = getenv("LOPPEE_BUSINESS_TEST_TRUST_CARD_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "LOPPEE_BUSINESS_TEST_TRUST_CARD_ENTID" => $idmap,
        "LOPPEE_BUSINESS_TEST_LIVE" => "FALSE",
        "LOPPEE_BUSINESS_TEST_EXPLAIN" => "FALSE",
        "LOPPEE_BUSINESS_APIKEY" => "",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["LOPPEE_BUSINESS_TEST_TRUST_CARD_ENTID"]);
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
