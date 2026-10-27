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
(0, node_test_1.describe)('BusinessIndexEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LOPPEE_BUSINESS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LOPPEE_BUSINESS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LoppeeBusinessSDK.test();
        const ent = testsdk.BusinessIndex();
        (0, node_assert_1.default)(null != ent);
    });
    class FailHook extends __1.BaseFeature {
        name = 'failhook';
        version = '0.0.1';
        active = true;
        unexpected = 0;
        init() { }
        PreSpec() { throw new Error('business_index hook failed'); }
        PreUnexpected() { this.unexpected++; }
    }
    (0, node_test_1.test)('stream-error', async () => {
        const offline = { net: { offline: true } };
        await node_assert_1.default.rejects(async () => {
            for await (const _item of __1.LoppeeBusinessSDK.test(offline).BusinessIndex().stream('list')) { }
        }, /offline/);
        for await (const _item of __1.LoppeeBusinessSDK.test(offline).BusinessIndex()
            .stream('list', undefined, { ctrl: { throw: false } })) { }
        if (null != __1.config.feature?.rbac) {
            const denied = __1.LoppeeBusinessSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } });
            await node_assert_1.default.rejects(async () => {
                for await (const _item of denied.BusinessIndex().stream('list')) { }
            }, (err) => 'rbac_denied' === err.code);
        }
    });
    (0, node_test_1.test)('stream-ctrl', async () => {
        const explain = {};
        const ctrl = { explain };
        for await (const _item of __1.LoppeeBusinessSDK.test().BusinessIndex().stream('list', undefined, { ctrl })) { }
        node_assert_1.default.deepStrictEqual(Object.keys(ctrl), ['explain']);
        (0, node_assert_1.default)(explain === ctrl.explain && 0 < Object.keys(explain).length);
    });
    (0, node_test_1.test)('unexpected', async () => {
        const hook = new FailHook();
        const client = new __1.LoppeeBusinessSDK({ feature: { test: { active: true } }, extend: [hook] });
        await node_assert_1.default.rejects(client.BusinessIndex().list(), /hook failed/);
        (0, node_assert_1.default)(0 < hook.unexpected);
        const fired = hook.unexpected;
        node_assert_1.default.strictEqual(await client.BusinessIndex().list(undefined, { throw: false }), undefined);
        (0, node_assert_1.default)(fired < hook.unexpected);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.LoppeeBusinessSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.BusinessIndex().list({ "cursor": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LOPPEE_BUSINESS_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'business_index.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "brand_assets": { "a": true, "h": "Brand Assets", "n": "brand_assets", "r": false, "t": "`$ANY`", "key$": "brand_assets", "index$": 0 }, "business_id": { "a": true, "h": "Business Id", "n": "business_id", "r": true, "t": "`$STRING`", "key$": "business_id", "index$": 1 }, "category": { "a": true, "h": "Category", "n": "category", "r": true, "t": "`$STRING`", "key$": "category", "index$": 2 }, "city": { "a": true, "h": "City", "n": "city", "r": true, "t": "`$STRING`", "key$": "city", "index$": 3 }, "display_name": { "a": true, "h": "Display Name", "n": "display_name", "r": true, "t": "`$STRING`", "key$": "display_name", "index$": 4 }, "domain": { "a": true, "h": "Domain", "n": "domain", "r": true, "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "domain", "index$": 5 }, "insurance": { "a": true, "h": "Insurance", "n": "insurance", "r": true, "t": "`$OBJECT`", "key$": "insurance", "index$": 6 }, "phone": { "a": true, "h": "Phone", "n": "phone", "r": true, "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "phone", "index$": 7 }, "public_profile_url": { "a": true, "h": "Public Profile Url", "n": "public_profile_url", "r": true, "t": "`$STRING`", "key$": "public_profile_url", "index$": 8 }, "review_reputation": { "a": true, "h": "Review Reputation", "n": "review_reputation", "r": true, "t": "`$OBJECT`", "union": { "branches": 2, "count": 1, "depth": 2 }, "key$": "review_reputation", "index$": 9 }, "state": { "a": true, "h": "State", "n": "state", "r": true, "t": "`$STRING`", "key$": "state", "index$": 10 }, "street_address": { "a": true, "h": "Street Address", "n": "street_address", "r": false, "sh": "Owner-published street address where authorized.", "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "street_address", "index$": 11 }, "trust_card_url": { "a": true, "h": "Trust Card Url", "n": "trust_card_url", "r": true, "t": "`$STRING`", "key$": "trust_card_url", "index$": 12 }, "trust_model_version": { "a": true, "h": "Trust Model Version", "n": "trust_model_version", "r": true, "t": "`$ANY`", "key$": "trust_model_version", "index$": 13 }, "verification_class": { "a": true, "h": "Verification Class", "n": "verification_class", "r": true, "t": "`$STRING`", "key$": "verification_class", "index$": 14 }, "verification_disclosure": { "a": true, "h": "Verification Disclosure", "n": "verification_disclosure", "r": true, "t": "`$STRING`", "key$": "verification_disclosure", "index$": 15 }, "website": { "a": true, "h": "Website", "n": "website", "r": true, "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "website", "index$": 16 }, "zip": { "a": true, "h": "Zip", "n": "zip", "r": false, "sh": "Owner-published postal code where authorized.", "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "zip", "index$": 17 } }, "name": "business_index", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /v1/businesses/index.json", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "cursor", "or": "cursor", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$NUMBER`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/v1/businesses/index.json", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v1" }, { "lit": "businesses" }, { "lit": "index.json" }], "t": { "req": "`reqdata`", "res": "`body.businesses`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "business_index", "name__orig": "business_index", "Name": "BusinessIndex", "name_": "business_index", "name-": "business-index", "NAME": "BUSINESS_INDEX", "index$": 11 }, { "active": true, "entity": "business_index", "key$": "BasicBusinessIndexFlow", "kind": "basic", "name": "BasicBusinessIndexFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "business_index_ref01" } }], "index$": 0 }] }, 'BusinessIndex', { "GET /v1/businesses/index.json": { "protocol": "http", "parameters": [{ "name": "limit", "in": "query", "required": false, "description": "Maximum businesses per page (1-100, default 100).", "schema": { "type": "number" }, "index$": 0 }, { "name": "cursor", "in": "query", "required": false, "description": "Opaque pagination cursor from the previous page's next_cursor. Omit for the first page.", "schema": { "type": "string" }, "index$": 1 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let business_index_ref01_data = Object.values(setup.data.existing.business_index)[0];
        // LIST
        const business_index_ref01_ent = client.BusinessIndex();
        const business_index_ref01_match = {};
        const business_index_ref01_list = (await business_index_ref01_ent.list(business_index_ref01_match)).map((e) => e.data());
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/business_index/BusinessIndexTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LoppeeBusinessSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['business_index01', 'business_index02', 'business_index03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LOPPEE_BUSINESS_TEST_BUSINESS_INDEX_ENTID': idmap,
        'LOPPEE_BUSINESS_TEST_LIVE': 'FALSE',
        'LOPPEE_BUSINESS_TEST_EXPLAIN': 'FALSE',
        'LOPPEE_BUSINESS_APIKEY': '',
    });
    idmap = env['LOPPEE_BUSINESS_TEST_BUSINESS_INDEX_ENTID'];
    const live = 'TRUE' === env.LOPPEE_BUSINESS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LOPPEE_BUSINESS_TEST_BUSINESS_INDEX_ENTID'];
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
//# sourceMappingURL=BusinessIndexEntity.test.js.map