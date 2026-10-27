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
(0, node_test_1.describe)('AnonymousLocationProofRevocationEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LOPPEE_BUSINESS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LOPPEE_BUSINESS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LoppeeBusinessSDK.test();
        const ent = testsdk.AnonymousLocationProofRevocation();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.LoppeeBusinessSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.AnonymousLocationProofRevocation().create({ "accuracy_meters": "x", "captured_at": "x", "latitude": 1, "longitude": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LOPPEE_BUSINESS_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'anonymous_location_proof_revocation.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "accuracy_meters": { "a": true, "h": "Accuracy Meters", "n": "accuracy_meters", "r": true, "t": "`$NUMBER`", "key$": "accuracy_meters", "index$": 0 }, "captured_at": { "a": true, "fo": "date-time", "h": "Captured At", "n": "captured_at", "r": true, "t": "`$STRING`", "key$": "captured_at", "index$": 1 }, "latitude": { "a": true, "h": "Latitude", "n": "latitude", "r": true, "t": "`$NUMBER`", "key$": "latitude", "index$": 2 }, "longitude": { "a": true, "h": "Longitude", "n": "longitude", "r": true, "t": "`$NUMBER`", "key$": "longitude", "index$": 3 } }, "name": "anonymous_location_proof_revocation", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["accuracy_meters", "captured_at", "latitude", "longitude"], "co": { "id": "POST /v1/location-proofs", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/v1/location-proofs", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v1" }, { "lit": "location-proofs" }], "t": { "req": { "accuracy_meters": "`reqdata.accuracy_meter`", "captured_at": "`reqdata.captured_at`", "latitude": "`reqdata.latitude`", "longitude": "`reqdata.longitude`" }, "res": "`body`" }, "index$": 0 }], "key$": "create" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /v1/location-proofs/{location_proof_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "location_proof_id", "or": "location_proof_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/v1/location-proofs/{location_proof_id}", "q": { "exist": ["location_proof_id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v1" }, { "lit": "location-proofs" }, { "var": "location_proof_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" } }, "relations": { "ancestors": [] }, "key$": "anonymous_location_proof_revocation", "name__orig": "anonymous_location_proof_revocation", "Name": "AnonymousLocationProofRevocation", "name_": "anonymous_location_proof_revocation", "name-": "anonymous-location-proof-revocation", "NAME": "ANONYMOUS_LOCATION_PROOF_REVOCATION", "index$": 7 }, { "active": true, "entity": "anonymous_location_proof_revocation", "key$": "BasicAnonymousLocationProofRevocationFlow", "kind": "basic", "name": "BasicAnonymousLocationProofRevocationFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "anonymous_location_proof_revocation_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": false, "d": {}, "i": { "ref": "anonymous_location_proof_revocation_ref01", "suffix": "_rm0" }, "m": { "id": "anonymous_location_proof_revocation01" }, "o": "remove", "s": [], "v": [], "unreachable": true }] }, 'AnonymousLocationProofRevocation', { "POST /v1/location-proofs": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "additionalProperties": false, "required": ["latitude", "longitude", "accuracy_meters", "captured_at"], "properties": { "latitude": { "type": "number", "minimum": -90, "maximum": 90, "key$": "latitude" }, "longitude": { "type": "number", "minimum": -180, "maximum": 180, "key$": "longitude" }, "accuracy_meters": { "type": "number", "exclusiveMinimum": 0, "maximum": 500, "key$": "accuracy_meters" }, "captured_at": { "type": "string", "format": "date-time", "key$": "captured_at" } }, "x-ref": "#/components/schemas/AnonymousLocationProofRequest", "index$": 1 } } } }, "parameters": [] }, "DELETE /v1/location-proofs/{location_proof_id}": { "protocol": "http", "parameters": [{ "name": "location_proof_id", "in": "path", "required": true, "schema": { "type": "string", "format": "uuid" }, "index$": 0 }] } }, { strict: LIVE_STRICT, t }, 'TRUE' === process.env.VOXGIG_GETONLY_GUARD ? { "anonymous_location_proof_revocation.create.0": "GET-only live run: needs POST /v1/location-proofs", "anonymous_location_proof_revocation.remove.1": "GET-only live run: needs DELETE /v1/location-proofs/{location_proof_id}" } : {});
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const anonymous_location_proof_revocation_ref01_ent = client.AnonymousLocationProofRevocation();
        let anonymous_location_proof_revocation_ref01_data = setup.data.new.anonymous_location_proof_revocation['anonymous_location_proof_revocation_ref01'];
        anonymous_location_proof_revocation_ref01_data = (await anonymous_location_proof_revocation_ref01_ent.create(anonymous_location_proof_revocation_ref01_data)).data();
        (0, node_assert_1.default)(null != anonymous_location_proof_revocation_ref01_data);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/anonymous_location_proof_revocation/AnonymousLocationProofRevocationTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LoppeeBusinessSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['anonymous_location_proof_revocation01', 'anonymous_location_proof_revocation02', 'anonymous_location_proof_revocation03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LOPPEE_BUSINESS_TEST_ANONYMOUS_LOCATION_PROOF_REVOCATION_ENTID': idmap,
        'LOPPEE_BUSINESS_TEST_LIVE': 'FALSE',
        'LOPPEE_BUSINESS_TEST_EXPLAIN': 'FALSE',
        'LOPPEE_BUSINESS_APIKEY': '',
    });
    idmap = env['LOPPEE_BUSINESS_TEST_ANONYMOUS_LOCATION_PROOF_REVOCATION_ENTID'];
    const live = 'TRUE' === env.LOPPEE_BUSINESS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LOPPEE_BUSINESS_TEST_ANONYMOUS_LOCATION_PROOF_REVOCATION_ENTID'];
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
//# sourceMappingURL=AnonymousLocationProofRevocationEntity.test.js.map