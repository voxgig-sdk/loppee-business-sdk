# SupportInternalNote entity test

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


class TestSupportInternalNoteEntity:

    def test_should_create_instance(self):
        testsdk = LoppeeBusinessSDK.test(None, None)
        ent = testsdk.SupportInternalNote(None)
        assert ent is not None

    def test_should_refuse_an_invalid_request(self):
        if "validate" not in (shared_config().get("feature") or {}):
            pytest.skip("feature not present in this SDK: validate")
        client = LoppeeBusinessSDK.test(
            None, {"feature": {"validate": {"active": True}}})
        with pytest.raises(Exception) as err:
            client.SupportInternalNote(None).create({"support_id": 1, "body": "x"}, None)
        assert "validate_failed" == getattr(err.value, "code", None)

    def test_should_run_basic_flow(self):
        setup = _support_internal_note_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "support_internal_note." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        if setup["live"] and os.environ.get("VOXGIG_GETONLY_GUARD") == "TRUE":
            print("LIVE STEP {\"id\":\"support_internal_note.create.0\",\"state\":\"excluded\",\"attempted\":false,\"reason\":\"GET-only live run: needs POST /v1/admin/support/{conversation_id}/internal-notes\"}")
            pytest.skip("Live coverage incomplete: support_internal_note.create.0 excluded (GET-only live run: needs POST /v1/admin/support/{conversation_id}/internal-notes)")

        if setup["live"]:
            for _live_key in ["support01"]:
                if setup.get("synthetic_only") or setup["idmap"].get(_live_key) is None:
                    runner.live_miss(LIVE_STRICT, f"Live entity test blocked: needs {_live_key} via LOPPEE_BUSINESS_TEST_SUPPORT_INTERNAL_NOTE_ENTID")
        client = setup["client"]

        if setup["live"]:
            runner.live_pace()
        # CREATE
        support_internal_note_ref01_ent = client.SupportInternalNote(None)
        support_internal_note_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.support_internal_note"), "support_internal_note_ref01"))
        support_internal_note_ref01_data["support_id"] = setup["idmap"]["support01"]

        support_internal_note_ref01_data = helpers.to_map(runner.entity_data(support_internal_note_ref01_ent.create(support_internal_note_ref01_data, None)))
        assert support_internal_note_ref01_data is not None
        assert support_internal_note_ref01_data["id"] is not None



def _support_internal_note_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/support_internal_note/SupportInternalNoteTestData.json")
    with open(entity_data_file, "r", encoding="utf-8") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = LoppeeBusinessSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["support_internal_note01", "support_internal_note02", "support_internal_note03", "support01"],
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
        "LOPPEE_BUSINESS_TEST_SUPPORT_INTERNAL_NOTE_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "LOPPEE_BUSINESS_TEST_SUPPORT_INTERNAL_NOTE_ENTID": idmap,
        "LOPPEE_BUSINESS_TEST_LIVE": "FALSE",
        "LOPPEE_BUSINESS_TEST_EXPLAIN": "FALSE",
        "LOPPEE_BUSINESS_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("LOPPEE_BUSINESS_TEST_SUPPORT_INTERNAL_NOTE_ENTID"))
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
