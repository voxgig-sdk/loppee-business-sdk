# CustomerAccount entity test

import json
import os
import time

import pytest

from loppeebusiness_sdk.utility.voxgig_struct import voxgig_struct as vs
from loppeebusiness_sdk import LoppeeBusinessSDK
from loppeebusiness_sdk.core import helpers
from loppeebusiness_sdk.config import shared_config
from loppeebusiness_sdk.feature.base_feature import LoppeeBusinessBaseFeature

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner



# main.kit.test.live.strict is true (the default is true): a live
# request that fails, or a live test missing an input it needs,
# fails the test.
# An account with no record for a test to read skips it either way.
LIVE_STRICT = True


class TestCustomerAccountEntity:

    def test_should_create_instance(self):
        testsdk = LoppeeBusinessSDK.test(None, None)
        ent = testsdk.CustomerAccount(None)
        assert ent is not None

    def test_should_refuse_an_invalid_request(self):
        if "validate" not in (shared_config().get("feature") or {}):
            pytest.skip("feature not present in this SDK: validate")
        client = LoppeeBusinessSDK.test(
            None, {"feature": {"validate": {"active": True}}})
        with pytest.raises(Exception) as err:
            client.CustomerAccount(None).create({"account_id": 1, "account_role": "x", "accuracy_meters": 1, "acknowledge_data_effects": True, "actions": "x", "agent_key_id": "x", "agent_receives_coordinates": True, "all_paused": True, "app_attest_registered": True, "assertion": "x", "attestation": "x", "author_label": "x", "author_type": "x", "binding": "x", "body": "x", "business_id": "x", "capture_source": "x", "captured_at": "x", "challenge": "x", "challenge_id": "x", "client_message_id": "x", "completed": True, "confirmation": "x", "connection_id": "x", "connection_kind": "x", "coordinates_returned": True, "created_at": "x", "credential_id": "x", "declined": True, "delivery_contract": "x", "disabled_reason": "x", "disclosure": "x", "enabled": True, "endpoint": "x", "endpoint_id": "x", "endpoint_url": "x", "environment": "x", "event_id": "x", "event_types": "x", "failure_count": 1, "handoff_id": "x", "has_more": True, "id": "x", "idempotent_replay": True, "installation_id": "x", "key_id": "x", "last_delivery_at": "x", "latitude": 1, "longitude": 1, "message_alerts_enabled": True, "messages": "x", "mode": "x", "oauth_grant_id": "x", "one_time_display": "x", "platform": "x", "policy": "x", "purpose": "x", "push_token": "x", "registered_at": "x", "reply": "x", "request_mode": "x", "requested_at": "x", "results": "x", "schema_version": "x", "selected_at": "x", "signed_in": True, "signing_secret": "x", "status": "x", "updated_at": "x", "url": "x", "usable_until": "x", "use_mode": "x"}, None)
        assert "validate_failed" == getattr(err.value, "code", None)

    def test_should_run_basic_flow(self):
        setup = _customer_account_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "customer_account." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        if setup["live"] and os.environ.get("VOXGIG_GETONLY_GUARD") == "TRUE":
            print("LIVE STEP {\"id\":\"customer_account.create.0\",\"state\":\"excluded\",\"attempted\":false,\"reason\":\"GET-only live run: needs POST /v1/account/location-handoffs/{handoff_id}/complete-from-device\"}")
            pytest.skip("Live coverage incomplete: customer_account.create.0 excluded (GET-only live run: needs POST /v1/account/location-handoffs/{handoff_id}/complete-from-device)")

        client = setup["client"]

        # CREATE
        customer_account_ref01_ent = client.CustomerAccount(None)
        customer_account_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.customer_account"), "customer_account_ref01"))

        customer_account_ref01_data = helpers.to_map(runner.entity_data(customer_account_ref01_ent.create(customer_account_ref01_data, None)))
        assert customer_account_ref01_data is not None
        assert customer_account_ref01_data["id"] is not None



def _customer_account_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/customer_account/CustomerAccountTestData.json")
    with open(entity_data_file, "r", encoding="utf-8") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = LoppeeBusinessSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["customer_account01", "customer_account02", "customer_account03", "conversation01", "conversation02", "conversation03", "location_handoff01", "location_handoff02", "location_handoff03"],
        {
            "`$PACK`": ["", {
                "`$KEY`": "`$COPY`",
                "`$VAL`": ["`$FORMAT`", "upper", "`$COPY`"],
            }],
        }
    )

    # Whether *_ENTID supplied the idmap, read before env_override consumes
    # it: without it, the ids a live flow binds are the fixture's synthetic ones.
    _entid_env_raw = os.environ.get(
        "LOPPEE_BUSINESS_TEST_CUSTOMER_ACCOUNT_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "LOPPEE_BUSINESS_TEST_CUSTOMER_ACCOUNT_ENTID": idmap,
        "LOPPEE_BUSINESS_TEST_LIVE": "FALSE",
        "LOPPEE_BUSINESS_TEST_EXPLAIN": "FALSE",
        "LOPPEE_BUSINESS_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("LOPPEE_BUSINESS_TEST_CUSTOMER_ACCOUNT_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)

    if env.get("LOPPEE_BUSINESS_TEST_LIVE") == "TRUE":
        merged_opts = vs.merge([
            # FIRST, so the generated fields below win: sdk-test-control.json's
            # test.client.options adds to the live client, it does not
            # redirect it.
            runner.live_client_options(),
            {
                "apikey": env.get("LOPPEE_BUSINESS_APIKEY"),
            },
            extra or {},
        ])
        client = LoppeeBusinessSDK(helpers.to_map(merged_opts))

    _live = env.get("LOPPEE_BUSINESS_TEST_LIVE") == "TRUE"
    return {
        "client": client,
        "data": entity_data,
        "idmap": idmap_resolved,
        "env": env,
        "explain": env.get("LOPPEE_BUSINESS_TEST_EXPLAIN") == "TRUE",
        "live": _live,
        "synthetic_only": _live and not _idmap_overridden,
        "now": int(time.time() * 1000),
    }
