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
(0, node_test_1.describe)('ClaimVerificationVerifyEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LOPPEE_BUSINESS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LOPPEE_BUSINESS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LoppeeBusinessSDK.test();
        const ent = testsdk.ClaimVerificationVerify();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.LoppeeBusinessSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.ClaimVerificationVerify().create({ "challenge_id": 1, "claim_id": "x", "code": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LOPPEE_BUSINESS_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'claim_verification_verify.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "business_id": { "a": true, "h": "Business Id", "n": "business_id", "r": true, "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "business_id", "index$": 0 }, "challenge_id": { "a": true, "fo": "uuid", "h": "Challenge Id", "n": "challenge_id", "r": false, "sh": "Exact challenge UUID returned by the v3 SMS or owner-email send.", "t": "`$STRING`", "key$": "challenge_id", "index$": 1 }, "channel": { "a": true, "h": "Channel", "n": "channel", "r": false, "t": "`$ANY`", "key$": "channel", "index$": 2 }, "claim_id": { "a": true, "h": "Claim Id", "n": "claim_id", "r": true, "t": "`$STRING`", "key$": "claim_id", "index$": 3 }, "code": { "a": true, "h": "Code", "n": "code", "r": true, "t": "`$STRING`", "key$": "code", "index$": 4 }, "method": { "a": true, "h": "Method", "n": "method", "r": false, "t": "`$ANY`", "key$": "method", "index$": 5 }, "publication": { "a": true, "h": "Publication", "n": "publication", "r": false, "t": "`$OBJECT`", "key$": "publication", "index$": 6 }, "status": { "a": true, "h": "Status", "n": "status", "r": true, "t": "`$ANY`", "key$": "status", "index$": 7 }, "transfer_review_required": { "a": true, "h": "Transfer Review Required", "n": "transfer_review_required", "r": false, "t": "`$ANY`", "key$": "transfer_review_required", "index$": 8 }, "trust_model_version": { "a": true, "h": "Trust Model Version", "n": "trust_model_version", "r": false, "t": "`$ANY`", "key$": "trust_model_version", "index$": 9 } }, "name": "claim_verification_verify", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["challenge_id", "channel", "claim_id", "code"], "co": { "id": "POST /v1/actions/claim-verification/verify", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/v1/actions/claim-verification/verify", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v1" }, { "lit": "actions" }, { "lit": "claim-verification" }, { "lit": "verify" }], "t": { "req": { "challenge_id": "`reqdata.challenge_id`", "channel": "`reqdata.channel`", "claim_id": "`reqdata.claim_id`", "code": "`reqdata.code`" }, "res": "`body`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "claim_verification_verify", "name__orig": "claim_verification_verify", "Name": "ClaimVerificationVerify", "name_": "claim_verification_verify", "name-": "claim-verification-verify", "NAME": "CLAIM_VERIFICATION_VERIFY", "index$": 17 }, { "active": true, "entity": "claim_verification_verify", "key$": "BasicClaimVerificationVerifyFlow", "kind": "basic", "name": "BasicClaimVerificationVerifyFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "claim_verification_verify_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'ClaimVerificationVerify', { "POST /v1/actions/claim-verification/verify": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "required": ["claim_id", "code"], "additionalProperties": false, "properties": { "claim_id": { "type": "string", "minLength": 1, "key$": "claim_id" }, "code": { "type": "string", "minLength": 1, "maxLength": 12, "key$": "code" }, "channel": { "enum": ["email", "sms"], "key$": "channel" }, "challenge_id": { "type": "string", "format": "uuid", "description": "Exact challenge UUID returned by the v3 SMS or owner-email send. Required for v3 SMS verification and owner-email verification; optional for the compatible v2 path.", "key$": "challenge_id" } }, "x-ref": "#/components/schemas/ClaimVerificationVerifyRequest", "index$": 1 } } } }, "parameters": [] } }, { strict: LIVE_STRICT, t }, 'TRUE' === process.env.VOXGIG_GETONLY_GUARD ? { "claim_verification_verify.create.0": "GET-only live run: needs POST /v1/actions/claim-verification/verify" } : {});
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const claim_verification_verify_ref01_ent = client.ClaimVerificationVerify();
        let claim_verification_verify_ref01_data = setup.data.new.claim_verification_verify['claim_verification_verify_ref01'];
        claim_verification_verify_ref01_data = (await claim_verification_verify_ref01_ent.create(claim_verification_verify_ref01_data)).data();
        (0, node_assert_1.default)(null != claim_verification_verify_ref01_data);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/claim_verification_verify/ClaimVerificationVerifyTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LoppeeBusinessSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['claim_verification_verify01', 'claim_verification_verify02', 'claim_verification_verify03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LOPPEE_BUSINESS_TEST_CLAIM_VERIFICATION_VERIFY_ENTID': idmap,
        'LOPPEE_BUSINESS_TEST_LIVE': 'FALSE',
        'LOPPEE_BUSINESS_TEST_EXPLAIN': 'FALSE',
        'LOPPEE_BUSINESS_APIKEY': '',
    });
    idmap = env['LOPPEE_BUSINESS_TEST_CLAIM_VERIFICATION_VERIFY_ENTID'];
    const live = 'TRUE' === env.LOPPEE_BUSINESS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LOPPEE_BUSINESS_TEST_CLAIM_VERIFICATION_VERIFY_ENTID'];
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
//# sourceMappingURL=ClaimVerificationVerifyEntity.test.js.map