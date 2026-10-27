# Operation entity test

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


class TestOperationEntity:

    def test_should_create_instance(self):
        testsdk = LoppeeBusinessSDK.test(None, None)
        ent = testsdk.Operation(None)
        assert ent is not None

    def test_should_refuse_an_invalid_request(self):
        if "validate" not in (shared_config().get("feature") or {}):
            pytest.skip("feature not present in this SDK: validate")
        client = LoppeeBusinessSDK.test(
            None, {"feature": {"validate": {"active": True}}})
        with pytest.raises(Exception) as err:
            client.Operation(None).create({"coupon_id": 1, "account_id": "x", "allowed_actions": "x", "amount_cents": 1, "api_key": "x", "assigneeId": "x", "assigneeLabel": "x", "assigneeType": "x", "assistant_enabled": True, "body": "x", "businessId": "x", "businessName": "x", "business_ids": "x", "catalog": "x", "code": "x", "config": "x", "confirmation": "x", "connection_id": "x", "connection_kind": "x", "content_type": "x", "context_id": "x", "context_type": "x", "createdAt": "x", "created_at": "x", "credential_id": "x", "data_base64": "x", "decision": "x", "delivery_contract": "x", "disabled_reason": "x", "discount_type": "x", "display_name": "x", "disposition": "x", "draft": "x", "email": "x", "enabled": True, "endpoint": "x", "endpoint_id": "x", "endpoint_url": "x", "ends_at": "x", "environment_fallback": "x", "event_id": "x", "event_types": "x", "expected_allowed_actions": "x", "expected_key_id": "x", "expected_updated_at": "x", "expected_version": 1, "fact_id": "x", "facts": "x", "failure_count": 1, "fields": "x", "file_name": "x", "historic_association_checked": True, "hold": "x", "hours": "x", "id": "x", "in_use": "x", "invited": True, "key_check": "x", "kind": "x", "label": "x", "lastMessageAt": "x", "lastMessageAuthorType": "x", "lastMessagePreview": "x", "last_delivery_at": "x", "last_error_code": "x", "last_probe_at": "x", "last_problem": "x", "make_active": True, "max_cents": 1, "messages": "x", "messagesTruncated": True, "min_cents": 1, "model": "x", "model_id": "x", "name": "x", "one_time_display": "x", "outcome": "x", "ownerEmail": "x", "ownerLastReadAt": "x", "ownerName": "x", "ownerUserId": "x", "policyVersion": "x", "provider": "x", "providers": "x", "purpose_code": "x", "rank_bid_cents": 1, "reference": "x", "report_ids": "x", "reserve_cents": 1, "resolution_note": "x", "revision": 1, "rows": "x", "run": "x", "schema_version": "x", "scope": "x", "settings": "x", "signing_secret": "x", "size_bytes": 1, "source_scope_checked": True, "storage": "x", "subject": "x", "supportLastReadAt": "x", "taxonomy_category_aliases": "x", "ticketNumber": "x", "tier": "x", "updatedAt": "x", "updated_at": "x", "url": "x", "value": "x", "verification_method": "x", "verified_at": "x", "workload": "x"}, None)
        assert "validate_failed" == getattr(err.value, "code", None)

    def test_should_run_basic_flow(self):
        setup = _operation_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "update", "remove"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "operation." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        if setup["live"] and os.environ.get("VOXGIG_GETONLY_GUARD") == "TRUE":
            print("LIVE STEP {\"id\":\"operation.create.0\",\"state\":\"excluded\",\"attempted\":false,\"reason\":\"GET-only live run: needs POST /v1/admin/businesses/{business_id}/job-applications/{application_id}/resume-url\"}")
            print("LIVE STEP {\"id\":\"operation.update.1\",\"state\":\"excluded\",\"attempted\":false,\"reason\":\"GET-only live run: needs PUT /v1/admin/assistant-provider/{provider}\"}")
            print("LIVE STEP {\"id\":\"operation.remove.2\",\"state\":\"excluded\",\"attempted\":false,\"reason\":\"GET-only live run: needs DELETE /v1/admin/support/{conversation_id}/ai-drafts/{draft_id}\"}")
            pytest.skip("Live coverage incomplete: operation.create.0 excluded (GET-only live run: needs POST /v1/admin/businesses/{business_id}/job-applications/{application_id}/resume-url); operation.update.1 excluded (GET-only live run: needs PUT /v1/admin/assistant-provider/{provider}); operation.remove.2 excluded (GET-only live run: needs DELETE /v1/admin/support/{conversation_id}/ai-drafts/{draft_id})")

        if setup["live"]:
            for _live_key in ["support01"]:
                if setup.get("synthetic_only") or setup["idmap"].get(_live_key) is None:
                    runner.live_miss(LIVE_STRICT, f"Live entity test blocked: needs {_live_key} via LOPPEE_BUSINESS_TEST_OPERATION_ENTID")
        client = setup["client"]

        # CREATE
        operation_ref01_ent = client.Operation(None)
        operation_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.operation"), "operation_ref01"))
        operation_ref01_data["support_id"] = setup["idmap"]["support01"]

        operation_ref01_data = helpers.to_map(runner.entity_data(operation_ref01_ent.create(operation_ref01_data, None)))
        assert operation_ref01_data is not None
        assert operation_ref01_data["id"] is not None

        # UPDATE
        operation_ref01_data_up0_up = {
            "id": operation_ref01_data["id"],
        }

        operation_ref01_markdef_up0_name = "account_id"
        operation_ref01_markdef_up0_value = "Mark01-operation_ref01_" + str(setup["now"])
        operation_ref01_data_up0_up[operation_ref01_markdef_up0_name] = operation_ref01_markdef_up0_value

        operation_ref01_resdata_up0 = helpers.to_map(runner.entity_data(operation_ref01_ent.update(operation_ref01_data_up0_up, None)))
        assert operation_ref01_resdata_up0 is not None
        assert operation_ref01_resdata_up0["id"] == operation_ref01_data_up0_up["id"]
        assert operation_ref01_resdata_up0[operation_ref01_markdef_up0_name] == operation_ref01_markdef_up0_value

        # REMOVE
        operation_ref01_match_rm0 = {
            "id": operation_ref01_data["id"],
        }
        operation_ref01_ent.remove(operation_ref01_match_rm0, None)



def _operation_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/operation/OperationTestData.json")
    with open(entity_data_file, "r", encoding="utf-8") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = LoppeeBusinessSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["operation01", "operation02", "operation03", "business_claim01", "business_claim02", "business_claim03", "review01", "review02", "review03", "job_application01", "job_application02", "job_application03", "message01", "message02", "message03", "support01"],
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
        "LOPPEE_BUSINESS_TEST_OPERATION_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "LOPPEE_BUSINESS_TEST_OPERATION_ENTID": idmap,
        "LOPPEE_BUSINESS_TEST_LIVE": "FALSE",
        "LOPPEE_BUSINESS_TEST_EXPLAIN": "FALSE",
        "LOPPEE_BUSINESS_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("LOPPEE_BUSINESS_TEST_OPERATION_ENTID"))
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
