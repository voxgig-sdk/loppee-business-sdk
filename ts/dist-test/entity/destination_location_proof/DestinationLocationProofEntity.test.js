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
(0, node_test_1.describe)('DestinationLocationProofEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LOPPEE_BUSINESS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LOPPEE_BUSINESS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LoppeeBusinessSDK.test();
        const ent = testsdk.DestinationLocationProof();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.LoppeeBusinessSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.DestinationLocationProof().create({ "address": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LOPPEE_BUSINESS_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'destination_location_proof.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "address": { "a": true, "h": "Address", "n": "address", "r": true, "sh": "A real US service address.", "t": "`$STRING`", "key$": "address", "index$": 0 }, "premise_proximity_confirmation_token": { "a": true, "h": "Premise Proximity Confirmation Token", "n": "premise_proximity_confirmation_token", "r": false, "sh": "Opaque one-time token from the immediately preceding premise-proximity challenge for the same address and authority.", "t": "`$STRING`", "key$": "premise_proximity_confirmation_token", "index$": 1 } }, "name": "destination_location_proof", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["address", "premise_proximity_confirmation_token"], "co": { "id": "POST /v1/account/destination-location-proofs", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/v1/account/destination-location-proofs", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v1" }, { "lit": "account" }, { "lit": "destination-location-proofs" }], "t": { "req": { "address": "`reqdata.address`", "premise_proximity_confirmation_token": "`reqdata.premise_proximity_confirmation_token`" }, "res": "`body`" }, "index$": 0 }, { "a": true, "bf": ["address", "premise_proximity_confirmation_token"], "co": { "id": "POST /v1/destination-location-proofs", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/v1/destination-location-proofs", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v1" }, { "lit": "destination-location-proofs" }], "t": { "req": { "address": "`reqdata.address`", "premise_proximity_confirmation_token": "`reqdata.premise_proximity_confirmation_token`" }, "res": "`body`" }, "index$": 1 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "destination_location_proof", "name__orig": "destination_location_proof", "Name": "DestinationLocationProof", "name_": "destination_location_proof", "name-": "destination-location-proof", "NAME": "DESTINATION_LOCATION_PROOF", "index$": 29 }, { "active": true, "entity": "destination_location_proof", "key$": "BasicDestinationLocationProofFlow", "kind": "basic", "name": "BasicDestinationLocationProofFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "destination_location_proof_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'DestinationLocationProof', { "POST /v1/account/destination-location-proofs": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "additionalProperties": false, "required": ["address"], "properties": { "address": { "type": "string", "minLength": 5, "maxLength": 280, "description": "A real US service address. It is accepted only in this POST body and is never returned, placed in a URL, or exposed to an external agent.", "key$": "address" }, "premise_proximity_confirmation_token": { "type": "string", "pattern": "^[A-Za-z0-9_-]{43}$", "description": "Opaque one-time token from the immediately preceding premise-proximity challenge for the same address and authority.", "key$": "premise_proximity_confirmation_token" } }, "x-ref": "#/components/schemas/DestinationLocationProofRequest", "index$": 1 } } } }, "parameters": [] }, "POST /v1/destination-location-proofs": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "additionalProperties": false, "required": ["address"], "properties": { "address": { "type": "string", "minLength": 5, "maxLength": 280, "description": "A real US service address. It is accepted only in this POST body and is never returned, placed in a URL, or exposed to an external agent.", "key$": "address" }, "premise_proximity_confirmation_token": { "type": "string", "pattern": "^[A-Za-z0-9_-]{43}$", "description": "Opaque one-time token from the immediately preceding premise-proximity challenge for the same address and authority.", "key$": "premise_proximity_confirmation_token" } }, "x-ref": "#/components/schemas/DestinationLocationProofRequest", "index$": 1 } } } }, "parameters": [] } }, { strict: LIVE_STRICT, t }, 'TRUE' === process.env.VOXGIG_GETONLY_GUARD ? { "destination_location_proof.create.0": "GET-only live run: needs POST /v1/account/destination-location-proofs" } : {});
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const destination_location_proof_ref01_ent = client.DestinationLocationProof();
        let destination_location_proof_ref01_data = setup.data.new.destination_location_proof['destination_location_proof_ref01'];
        destination_location_proof_ref01_data = (await destination_location_proof_ref01_ent.create(destination_location_proof_ref01_data)).data();
        (0, node_assert_1.default)(null != destination_location_proof_ref01_data);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/destination_location_proof/DestinationLocationProofTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LoppeeBusinessSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['destination_location_proof01', 'destination_location_proof02', 'destination_location_proof03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LOPPEE_BUSINESS_TEST_DESTINATION_LOCATION_PROOF_ENTID': idmap,
        'LOPPEE_BUSINESS_TEST_LIVE': 'FALSE',
        'LOPPEE_BUSINESS_TEST_EXPLAIN': 'FALSE',
        'LOPPEE_BUSINESS_APIKEY': '',
    });
    idmap = env['LOPPEE_BUSINESS_TEST_DESTINATION_LOCATION_PROOF_ENTID'];
    const live = 'TRUE' === env.LOPPEE_BUSINESS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LOPPEE_BUSINESS_TEST_DESTINATION_LOCATION_PROOF_ENTID'];
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
//# sourceMappingURL=DestinationLocationProofEntity.test.js.map