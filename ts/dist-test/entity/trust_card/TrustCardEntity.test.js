"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('TrustCardEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LOPPEE_BUSINESS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LOPPEE_BUSINESS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LoppeeBusinessSDK.test();
        const ent = testsdk.TrustCard();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.LoppeeBusinessSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.TrustCard().list({ "business_id": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LOPPEE_BUSINESS_TEST_LIVE;
        for (const op of ['create', 'list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'trust_card.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "agency": { "a": true, "h": "Agency", "n": "agency", "r": true, "t": "`$STRING`", "key$": "agency", "index$": 0 }, "collected_at": { "a": true, "fo": "date-time", "h": "Collected At", "n": "collected_at", "r": true, "t": "`$STRING`", "key$": "collected_at", "index$": 1 }, "disclosure": { "a": true, "h": "Disclosure", "n": "disclosure", "r": true, "t": "`$STRING`", "key$": "disclosure", "index$": 2 }, "fact_id": { "a": true, "h": "Fact Id", "n": "fact_id", "r": true, "t": "`$STRING`", "key$": "fact_id", "index$": 3 }, "matched_on": { "a": true, "h": "Matched On", "n": "matched_on", "r": true, "t": "`$STRING`", "key$": "matched_on", "index$": 4 }, "reason": { "a": true, "h": "Reason", "n": "reason", "r": false, "t": "`$STRING`", "key$": "reason", "index$": 5 }, "record_kind": { "a": true, "h": "Record Kind", "n": "record_kind", "r": true, "t": "`$STRING`", "key$": "record_kind", "index$": 6 }, "record_number": { "a": true, "h": "Record Number", "n": "record_number", "r": true, "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "record_number", "index$": 7 }, "record_scope": { "a": true, "h": "Record Scope", "n": "record_scope", "r": true, "t": "`$STRING`", "key$": "record_scope", "index$": 8 }, "record_type": { "a": true, "h": "Record Type", "n": "record_type", "r": true, "t": "`$STRING`", "key$": "record_type", "index$": 9 }, "recorded_expiry": { "a": true, "fo": "date", "h": "Recorded Expiry", "n": "recorded_expiry", "r": true, "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "recorded_expiry", "index$": 10 }, "result": { "a": true, "h": "Result", "n": "result", "r": true, "t": "`$STRING`", "key$": "result", "index$": 11 }, "source_label": { "a": true, "h": "Source Label", "n": "source_label", "r": true, "t": "`$STRING`", "key$": "source_label", "index$": 12 }, "source_url": { "a": true, "fo": "uri", "h": "Source Url", "n": "source_url", "r": true, "t": "`$STRING`", "key$": "source_url", "index$": 13 }, "state": { "a": true, "h": "State", "n": "state", "r": true, "t": "`$STRING`", "key$": "state", "index$": 14 }, "status_on_record": { "a": true, "h": "Status On Record", "n": "status_on_record", "r": true, "t": "`$STRING`", "key$": "status_on_record", "index$": 15 } }, "name": "trust_card", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["reason"], "co": { "id": "POST /v1/businesses/{business_id}/license-records/{fact_id}/report", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "business_id", "or": "business_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "license_record_id", "or": "fact_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "POST", "o": "/v1/businesses/{business_id}/license-records/{fact_id}/report", "q": { "exist": ["business_id", "license_record_id"] }, "r": { "param": { "fact_id": "license_record_id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v1" }, { "lit": "businesses" }, { "var": "business_id" }, { "lit": "license-records" }, { "var": "license_record_id" }, { "lit": "report" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /v1/businesses/{business_id}/archived-records.json", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "biz_elite_ac_llc_jacksonville_fl", "k": "param", "n": "business_id", "or": "business_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/v1/businesses/{business_id}/archived-records.json", "q": { "exist": ["business_id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v1" }, { "lit": "businesses" }, { "var": "business_id" }, { "lit": "archived-records.json" }], "t": { "req": "`reqdata`", "res": "`body.facts`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /v1/businesses/{business_id}/license-records.json", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "biz_elite_ac_llc_jacksonville_fl", "k": "param", "n": "business_id", "or": "business_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/v1/businesses/{business_id}/license-records.json", "q": { "exist": ["business_id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v1" }, { "lit": "businesses" }, { "var": "business_id" }, { "lit": "license-records.json" }], "t": { "req": "`reqdata`", "res": "`body.records`" }, "index$": 1 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /v1/businesses/{business_id}/trust-card.json", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "biz_elite_ac_llc_jacksonville_fl", "k": "param", "n": "business_id", "or": "business_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/v1/businesses/{business_id}/trust-card.json", "q": { "exist": ["business_id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v1" }, { "lit": "businesses" }, { "var": "business_id" }, { "lit": "trust-card.json" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /v1/schemas/{schema_name}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "trust-card.schema.json", "k": "param", "n": "schema_name", "or": "schema_name", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/v1/schemas/{schema_name}", "q": { "exist": ["schema_name"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v1" }, { "lit": "schemas" }, { "var": "schema_name" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "trust_card", "name__orig": "trust_card", "Name": "TrustCard", "name_": "trust_card", "name-": "trust-card", "NAME": "TRUST_CARD", "index$": 58 }, { "active": true, "entity": "trust_card", "key$": "BasicTrustCardFlow", "kind": "basic", "name": "BasicTrustCardFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "trust_card_ref01" }, "m": { "business_id": "business01", "license_record_id": "license_record01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "business_id": "business01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "trust_card_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "trust_card_ref01", "srcdatavar": "trust_card_ref01_data", "suffix": "_dt0" }, "m": { "id": "trust_card01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-trust_card_ref01" } }], "index$": 2 }] }, 'TrustCard', { "POST /v1/businesses/{business_id}/license-records/{fact_id}/report": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "additionalProperties": true, "properties": { "reason": { "type": "string", "minLength": 3, "maxLength": 1000, "key$": "reason" } }, "index$": 1 } } } }, "parameters": [{ "name": "business_id", "in": "path", "required": true, "description": "business id path identifier.", "schema": { "type": "string" }, "index$": 0 }, { "name": "fact_id", "in": "path", "required": true, "description": "fact id path identifier.", "schema": { "type": "string" }, "index$": 1 }] }, "GET /v1/businesses/{business_id}/archived-records.json": { "protocol": "http", "parameters": [{ "name": "business_id", "in": "path", "required": true, "description": "business id path identifier.", "schema": { "type": "string" }, "example": "biz_elite_ac_llc_jacksonville_fl", "index$": 0 }] }, "GET /v1/businesses/{business_id}/license-records.json": { "protocol": "http", "parameters": [{ "name": "business_id", "in": "path", "required": true, "description": "business id path identifier.", "schema": { "type": "string" }, "example": "biz_elite_ac_llc_jacksonville_fl", "index$": 0 }] }, "GET /v1/businesses/{business_id}/trust-card.json": { "protocol": "http", "parameters": [{ "name": "business_id", "in": "path", "required": true, "description": "Loppee business id.", "schema": { "type": "string" }, "example": "biz_elite_ac_llc_jacksonville_fl", "index$": 0 }] }, "GET /v1/schemas/{schema_name}": { "protocol": "http", "parameters": [{ "name": "schema_name", "in": "path", "required": true, "description": "schema name path identifier.", "schema": { "type": "string", "pattern": "^[^/]+\\.schema\\.json$" }, "example": "trust-card.schema.json", "index$": 0 }] } }, { strict: LIVE_STRICT, t }, 'TRUE' === process.env.VOXGIG_GETONLY_GUARD ? { "trust_card.create.0": "GET-only live run: needs POST /v1/businesses/{business_id}/license-records/{fact_id}/report" } : {});
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const trust_card_ref01_ent = client.TrustCard();
        let trust_card_ref01_data = setup.data.new.trust_card['trust_card_ref01'];
        trust_card_ref01_data['business_id'] = setup.idmap['business01'];
        trust_card_ref01_data['license_record_id'] = setup.idmap['license_record01'];
        trust_card_ref01_data = (await trust_card_ref01_ent.create(trust_card_ref01_data)).data();
        (0, node_assert_1.default)(null != trust_card_ref01_data);
        // LIST
        const trust_card_ref01_match = {};
        trust_card_ref01_match['business_id'] = setup.idmap['business01'];
        const trust_card_ref01_list = (await trust_card_ref01_ent.list(trust_card_ref01_match)).map((e) => e.data());
    });
});
// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true;
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/trust_card/TrustCardTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LoppeeBusinessSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['trust_card01', 'trust_card02', 'trust_card03', 'business01', 'license_record01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LOPPEE_BUSINESS_TEST_TRUST_CARD_ENTID': idmap,
        'LOPPEE_BUSINESS_TEST_LIVE': 'FALSE',
        'LOPPEE_BUSINESS_TEST_EXPLAIN': 'FALSE',
        'LOPPEE_BUSINESS_APIKEY': '',
    });
    idmap = env['LOPPEE_BUSINESS_TEST_TRUST_CARD_ENTID'];
    const live = 'TRUE' === env.LOPPEE_BUSINESS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LOPPEE_BUSINESS_TEST_TRUST_CARD_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.LoppeeBusinessSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {
                apikey: env.LOPPEE_BUSINESS_APIKEY,
            },
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.LOPPEE_BUSINESS_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=TrustCardEntity.test.js.map