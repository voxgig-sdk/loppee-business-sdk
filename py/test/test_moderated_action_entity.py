# ModeratedAction entity test

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


class TestModeratedActionEntity:

    def test_should_create_instance(self):
        testsdk = LoppeeBusinessSDK.test(None, None)
        ent = testsdk.ModeratedAction(None)
        assert ent is not None

    def test_should_refuse_an_invalid_request(self):
        if "validate" not in (shared_config().get("feature") or {}):
            pytest.skip("feature not present in this SDK: validate")
        client = LoppeeBusinessSDK.test(
            None, {"feature": {"validate": {"active": True}}})
        with pytest.raises(Exception) as err:
            client.ModeratedAction(None).load({"body": 1}, None)
        assert "validate_failed" == getattr(err.value, "code", None)

    def test_should_run_basic_flow(self):
        setup = _moderated_action_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "load"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "moderated_action." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        if setup["live"] and os.environ.get("VOXGIG_GETONLY_GUARD") == "TRUE":
            print("LIVE STEP {\"id\":\"moderated_action.create.0\",\"state\":\"excluded\",\"attempted\":false,\"reason\":\"GET-only live run: needs POST /v1/actions/contact-attempt\"}")
            return self._run_get_only_flow(setup)

        client = setup["client"]

        # CREATE
        moderated_action_ref01_ent = client.ModeratedAction(None)
        moderated_action_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.moderated_action"), "moderated_action_ref01"))

        moderated_action_ref01_data = helpers.to_map(runner.entity_data(moderated_action_ref01_ent.create(moderated_action_ref01_data, None)))
        assert moderated_action_ref01_data is not None

        # LOAD
        moderated_action_ref01_match_dt0 = {}
        moderated_action_ref01_data_dt0_loaded = moderated_action_ref01_ent.load(moderated_action_ref01_match_dt0, None)
        assert moderated_action_ref01_data_dt0_loaded is not None


    def _run_get_only_flow(self, setup):
        client = setup["client"]

        # Bootstrap entity data from existing test data.
        moderated_action_ref01_data_raw = vs.items(helpers.to_map(
            vs.getpath(setup["data"], "existing.moderated_action")))
        moderated_action_ref01_data = None
        if len(moderated_action_ref01_data_raw) > 0:
            moderated_action_ref01_data = helpers.to_map(moderated_action_ref01_data_raw[0][1])

        # LOAD
        moderated_action_ref01_ent = client.ModeratedAction(None)
        moderated_action_ref01_match_dt0 = {}
        moderated_action_ref01_data_dt0_loaded = moderated_action_ref01_ent.load(moderated_action_ref01_match_dt0, None)
        assert moderated_action_ref01_data_dt0_loaded is not None



def _moderated_action_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/moderated_action/ModeratedActionTestData.json")
    with open(entity_data_file, "r", encoding="utf-8") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = LoppeeBusinessSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["moderated_action01", "moderated_action02", "moderated_action03"],
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
        "LOPPEE_BUSINESS_TEST_MODERATED_ACTION_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "LOPPEE_BUSINESS_TEST_MODERATED_ACTION_ENTID": idmap,
        "LOPPEE_BUSINESS_TEST_LIVE": "FALSE",
        "LOPPEE_BUSINESS_TEST_EXPLAIN": "FALSE",
        "LOPPEE_BUSINESS_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("LOPPEE_BUSINESS_TEST_MODERATED_ACTION_ENTID"))
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
