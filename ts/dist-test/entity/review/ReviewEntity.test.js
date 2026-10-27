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
(0, node_test_1.describe)('ReviewEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LOPPEE_BUSINESS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LOPPEE_BUSINESS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LoppeeBusinessSDK.test();
        const ent = testsdk.Review();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.LoppeeBusinessSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.Review().create({ "account_id": 1, "attestation_accepted": true, "message": "x", "rating": 1, "subject": "x", "target_business_id": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LOPPEE_BUSINESS_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'review.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "account_id": { "a": true, "h": "Account Id", "n": "account_id", "r": true, "t": "`$STRING`", "key$": "account_id", "index$": 0 }, "attestation_accepted": { "a": true, "h": "Attestation Accepted", "n": "attestation_accepted", "r": true, "sh": "Set true only after the customer confirms this describes their own experience and explicitly approves publishing the displayed business, star rating, title, and full review.", "t": "`$BOOLEAN`", "key$": "attestation_accepted", "index$": 1 }, "customer_confirmed": { "a": true, "h": "Customer Confirmed", "n": "customer_confirmed", "r": false, "sh": "Set true to confirm you were a customer of this business.", "t": "`$BOOLEAN`", "key$": "customer_confirmed", "index$": 2 }, "message": { "a": true, "h": "Message", "n": "message", "r": true, "t": "`$STRING`", "key$": "message", "index$": 3 }, "rating": { "a": true, "h": "Rating", "n": "rating", "r": true, "t": "`$INTEGER`", "key$": "rating", "index$": 4 }, "service_date": { "a": true, "h": "Service Date", "n": "service_date", "r": false, "sh": "Optional real, non-future service date in YYYY-MM-DD format; empty means not provided.", "t": "`$ANY`", "union": { "branches": 2, "count": 1, "depth": 0 }, "key$": "service_date", "index$": 5 }, "subject": { "a": true, "h": "Subject", "n": "subject", "r": true, "t": "`$STRING`", "key$": "subject", "index$": 6 }, "target_business_id": { "a": true, "h": "Target Business Id", "n": "target_business_id", "r": true, "t": "`$STRING`", "key$": "target_business_id", "index$": 7 } }, "name": "review", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["attestation_accepted", "customer_confirmed", "message", "rating", "service_date", "subject", "target_business_id"], "co": { "id": "POST /v1/actions/public-review", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/v1/actions/public-review", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v1" }, { "lit": "actions" }, { "lit": "public-review" }], "t": { "req": { "attestation_accepted": "`reqdata.attestation_accepted`", "customer_confirmed": "`reqdata.customer_confirmed`", "message": "`reqdata.message`", "rating": "`reqdata.rating`", "service_date": "`reqdata.service_date`", "subject": "`reqdata.subject`", "target_business_id": "`reqdata.target_business_id`" }, "res": "`body`" }, "index$": 0 }, { "a": true, "bf": ["account_id", "attestation_accepted", "customer_confirmed", "message", "rating", "service_date", "subject", "target_business_id"], "co": { "id": "POST /v1/actions/review", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/v1/actions/review", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v1" }, { "lit": "actions" }, { "lit": "review" }], "t": { "req": { "account_id": "`reqdata.account_id`", "attestation_accepted": "`reqdata.attestation_accepted`", "customer_confirmed": "`reqdata.customer_confirmed`", "message": "`reqdata.message`", "rating": "`reqdata.rating`", "service_date": "`reqdata.service_date`", "subject": "`reqdata.subject`", "target_business_id": "`reqdata.target_business_id`" }, "res": "`body`" }, "index$": 1 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "review", "name__orig": "review", "Name": "Review", "name_": "review", "name-": "review", "NAME": "REVIEW", "index$": 48 }, { "active": true, "entity": "review", "key$": "BasicReviewFlow", "kind": "basic", "name": "BasicReviewFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "review_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'Review', { "POST /v1/actions/public-review": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "$schema": "https://json-schema.org/draft/2020-12/schema", "type": "object", "properties": { "target_business_id": { "type": "string", "minLength": 1, "key$": "target_business_id" }, "rating": { "type": "integer", "minimum": 1, "maximum": 5, "key$": "rating" }, "subject": { "type": "string", "minLength": 3, "maxLength": 160, "key$": "subject" }, "message": { "type": "string", "minLength": 20, "maxLength": 4000, "key$": "message" }, "service_date": { "anyOf": [{ "type": "string", "const": "" }, { "type": "string", "pattern": "^\\d{4}-\\d{2}-\\d{2}$" }], "description": "Optional real, non-future service date in YYYY-MM-DD format; empty means not provided.", "key$": "service_date" }, "attestation_accepted": { "type": "boolean", "const": true, "key$": "attestation_accepted" }, "customer_confirmed": { "type": "boolean", "description": "Set true to confirm you were a customer of this business. Required when the target business has not claimed its page.", "key$": "customer_confirmed" } }, "required": ["target_business_id", "rating", "subject", "message", "attestation_accepted"], "additionalProperties": false, "x-ref": "#/components/schemas/PublicReviewRequest", "index$": 1 } } } }, "parameters": [] }, "POST /v1/actions/review": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "$schema": "https://json-schema.org/draft/2020-12/schema", "type": "object", "properties": { "account_id": { "type": "string", "minLength": 1, "key$": "account_id" }, "target_business_id": { "type": "string", "minLength": 1, "key$": "target_business_id" }, "rating": { "type": "integer", "minimum": 1, "maximum": 5, "key$": "rating" }, "subject": { "type": "string", "minLength": 3, "maxLength": 160, "key$": "subject" }, "message": { "type": "string", "minLength": 20, "maxLength": 4000, "key$": "message" }, "service_date": { "anyOf": [{ "type": "string", "const": "" }, { "type": "string", "pattern": "^\\d{4}-\\d{2}-\\d{2}$" }], "description": "Optional real, non-future service date in YYYY-MM-DD format; empty means not provided.", "key$": "service_date" }, "attestation_accepted": { "type": "boolean", "const": true, "description": "Set true only after the customer confirms this describes their own experience and explicitly approves publishing the displayed business, star rating, title, and full review. Approval does not establish independently verified service evidence.", "key$": "attestation_accepted" }, "customer_confirmed": { "type": "boolean", "description": "Set true to confirm you were a customer of this business. Required when the target business has not claimed its page.", "key$": "customer_confirmed" } }, "required": ["account_id", "target_business_id", "rating", "subject", "message", "attestation_accepted"], "additionalProperties": false, "x-ref": "#/components/schemas/ReviewRequest", "index$": 1 } } } }, "parameters": [] } }, { strict: LIVE_STRICT, t }, 'TRUE' === process.env.VOXGIG_GETONLY_GUARD ? { "review.create.0": "GET-only live run: needs POST /v1/actions/public-review" } : {});
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const review_ref01_ent = client.Review();
        let review_ref01_data = setup.data.new.review['review_ref01'];
        review_ref01_data = (await review_ref01_ent.create(review_ref01_data)).data();
        (0, node_assert_1.default)(null != review_ref01_data);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/review/ReviewTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LoppeeBusinessSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['review01', 'review02', 'review03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LOPPEE_BUSINESS_TEST_REVIEW_ENTID': idmap,
        'LOPPEE_BUSINESS_TEST_LIVE': 'FALSE',
        'LOPPEE_BUSINESS_TEST_EXPLAIN': 'FALSE',
        'LOPPEE_BUSINESS_APIKEY': '',
    });
    idmap = env['LOPPEE_BUSINESS_TEST_REVIEW_ENTID'];
    const live = 'TRUE' === env.LOPPEE_BUSINESS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LOPPEE_BUSINESS_TEST_REVIEW_ENTID'];
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
//# sourceMappingURL=ReviewEntity.test.js.map