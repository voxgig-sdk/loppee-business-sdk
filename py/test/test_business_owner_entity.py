# BusinessOwner entity test

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


class TestBusinessOwnerEntity:

    def test_should_create_instance(self):
        testsdk = LoppeeBusinessSDK.test(None, None)
        ent = testsdk.BusinessOwner(None)
        assert ent is not None

    def test_should_refuse_an_invalid_request(self):
        if "validate" not in (shared_config().get("feature") or {}):
            pytest.skip("feature not present in this SDK: validate")
        client = LoppeeBusinessSDK.test(
            None, {"feature": {"validate": {"active": True}}})
        with pytest.raises(Exception) as err:
            client.BusinessOwner(None).create({"deal_id": 1, "account_id": "x", "account_role": "x", "acknowledge_data_effects": True, "actions": "x", "allowed_actions": "x", "amount_cents": 1, "asset_id": "x", "assigneeId": "x", "assigneeLabel": "x", "assigneeType": "x", "attempt_id": "x", "body": "x", "businessId": "x", "businessName": "x", "campaign": "x", "campaign_id": "x", "category_aliases": "x", "change": "x", "city": "x", "client_message_id": "x", "code": "x", "confirmation": "x", "connection_kind": "x", "consent_sha256": "x", "content_type": "x", "createdAt": "x", "created_at": "x", "credential_id": "x", "credential_identifier": "x", "data_base64": "x", "delivery_contract": "x", "disabled_reason": "x", "discount_label": "x", "display_name": "x", "enabled": True, "endpoint": "x", "endpoint_id": "x", "endpoint_url": "x", "event_id": "x", "event_types": "x", "expected_updated_at": "x", "factor_id": "x", "failure_count": 1, "file_name": "x", "file_sha256": "x", "id": "x", "installation_id": "x", "issuer": "x", "kind": "x", "lastMessageAt": "x", "lastMessageAuthorType": "x", "lastMessagePreview": "x", "last_delivery_at": "x", "license_number": "x", "messages": "x", "messagesTruncated": True, "name": "x", "one_time_display": "x", "ownerEmail": "x", "ownerLastReadAt": "x", "ownerName": "x", "ownerUserId": "x", "phone": "x", "platform": "x", "push_token": "x", "radius_miles": 1, "reason": "x", "registered_at": "x", "request_id": "x", "requested_at": "x", "save_card": True, "signing_secret": "x", "size_bytes": 1, "state": "x", "street_address": "x", "supportLastReadAt": "x", "terms_version": "x", "ticketNumber": "x", "tier": "x", "title": "x", "updatedAt": "x", "updated_at": "x", "url": "x", "website": "x"}, None)
        assert "validate_failed" == getattr(err.value, "code", None)

    def test_should_run_basic_flow(self):
        setup = _business_owner_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "update"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "business_owner." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        if setup["live"] and os.environ.get("VOXGIG_GETONLY_GUARD") == "TRUE":
            print("LIVE STEP {\"id\":\"business_owner.create.0\",\"state\":\"excluded\",\"attempted\":false,\"reason\":\"GET-only live run: needs POST /v1/owner/agents/{agent_id}/disconnect\"}")
            print("LIVE STEP {\"id\":\"business_owner.update.1\",\"state\":\"excluded\",\"attempted\":false,\"reason\":\"GET-only live run: needs PUT /v1/owner/evidence/upload-intents/{intent_id}/object\"}")
            pytest.skip("Live coverage incomplete: business_owner.create.0 excluded (GET-only live run: needs POST /v1/owner/agents/{agent_id}/disconnect); business_owner.update.1 excluded (GET-only live run: needs PUT /v1/owner/evidence/upload-intents/{intent_id}/object)")

        client = setup["client"]

        # CREATE
        business_owner_ref01_ent = client.BusinessOwner(None)
        business_owner_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.business_owner"), "business_owner_ref01"))

        business_owner_ref01_data = helpers.to_map(runner.entity_data(business_owner_ref01_ent.create(business_owner_ref01_data, None)))
        assert business_owner_ref01_data is not None
        assert business_owner_ref01_data["id"] is not None

        # UPDATE
        business_owner_ref01_data_up0_up = {
            "id": business_owner_ref01_data["id"],
        }

        business_owner_ref01_markdef_up0_name = "account_id"
        business_owner_ref01_markdef_up0_value = "Mark01-business_owner_ref01_" + str(setup["now"])
        business_owner_ref01_data_up0_up[business_owner_ref01_markdef_up0_name] = business_owner_ref01_markdef_up0_value

        business_owner_ref01_resdata_up0 = helpers.to_map(runner.entity_data(business_owner_ref01_ent.update(business_owner_ref01_data_up0_up, None)))
        assert business_owner_ref01_resdata_up0 is not None
        assert business_owner_ref01_resdata_up0["id"] == business_owner_ref01_data_up0_up["id"]
        assert business_owner_ref01_resdata_up0[business_owner_ref01_markdef_up0_name] == business_owner_ref01_markdef_up0_value



def _business_owner_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/business_owner/BusinessOwnerTestData.json")
    with open(entity_data_file, "r", encoding="utf-8") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = LoppeeBusinessSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["business_owner01", "business_owner02", "business_owner03", "conversation01", "conversation02", "conversation03", "message01", "message02", "message03", "review01", "review02", "review03"],
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
        "LOPPEE_BUSINESS_TEST_BUSINESS_OWNER_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "LOPPEE_BUSINESS_TEST_BUSINESS_OWNER_ENTID": idmap,
        "LOPPEE_BUSINESS_TEST_LIVE": "FALSE",
        "LOPPEE_BUSINESS_TEST_EXPLAIN": "FALSE",
        "LOPPEE_BUSINESS_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("LOPPEE_BUSINESS_TEST_BUSINESS_OWNER_ENTID"))
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
