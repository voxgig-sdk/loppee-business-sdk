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
(0, node_test_1.describe)('RecommendEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LOPPEE_BUSINESS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LOPPEE_BUSINESS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LoppeeBusinessSDK.test();
        const ent = testsdk.Recommend();
        (0, node_assert_1.default)(null != ent);
    });
    class FailHook extends __1.BaseFeature {
        name = 'failhook';
        version = '0.0.1';
        active = true;
        unexpected = 0;
        init() { }
        PreSpec() { throw new Error('recommend hook failed'); }
        PreUnexpected() { this.unexpected++; }
    }
    (0, node_test_1.test)('stream-error', async () => {
        const offline = { net: { offline: true } };
        await node_assert_1.default.rejects(async () => {
            for await (const _item of __1.LoppeeBusinessSDK.test(offline).Recommend().stream('list')) { }
        }, /offline/);
        for await (const _item of __1.LoppeeBusinessSDK.test(offline).Recommend()
            .stream('list', undefined, { ctrl: { throw: false } })) { }
        if (null != __1.config.feature?.rbac) {
            const denied = __1.LoppeeBusinessSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } });
            await node_assert_1.default.rejects(async () => {
                for await (const _item of denied.Recommend().stream('list')) { }
            }, (err) => 'rbac_denied' === err.code);
        }
    });
    (0, node_test_1.test)('stream-ctrl', async () => {
        const explain = {};
        const ctrl = { explain };
        for await (const _item of __1.LoppeeBusinessSDK.test().Recommend().stream('list', undefined, { ctrl })) { }
        node_assert_1.default.deepStrictEqual(Object.keys(ctrl), ['explain']);
        (0, node_assert_1.default)(explain === ctrl.explain && 0 < Object.keys(explain).length);
    });
    (0, node_test_1.test)('unexpected', async () => {
        const hook = new FailHook();
        const client = new __1.LoppeeBusinessSDK({ feature: { test: { active: true } }, extend: [hook] });
        await node_assert_1.default.rejects(client.Recommend().list(), /hook failed/);
        (0, node_assert_1.default)(0 < hook.unexpected);
        const fired = hook.unexpected;
        node_assert_1.default.strictEqual(await client.Recommend().list(undefined, { throw: false }), undefined);
        (0, node_assert_1.default)(fired < hook.unexpected);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.LoppeeBusinessSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.Recommend().list({ "allowed_action": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LOPPEE_BUSINESS_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'recommend.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "candidate_window_truncated": { "a": true, "h": "Candidate Window Truncated", "n": "candidate_window_truncated", "r": true, "sh": "True when Loppee's bounded candidate assembly reached its safety cap.", "t": "`$BOOLEAN`", "key$": "candidate_window_truncated", "index$": 0 }, "commercial_influence": { "a": true, "h": "Commercial Influence", "n": "commercial_influence", "r": true, "sh": "Must be none whenever current-location or saved_exact authority is absent, including universal exact/genuine-prefix name lookup.", "t": "`$STRING`", "key$": "commercial_influence", "index$": 1 }, "display_count": { "a": true, "h": "Display Count", "n": "display_count", "r": false, "sh": "Agent-key responses: the number of businesses in this response.", "t": "`$INTEGER`", "key$": "display_count", "index$": 2 }, "endpoint": { "a": true, "h": "Endpoint", "n": "endpoint", "r": true, "t": "`$ANY`", "key$": "endpoint", "index$": 3 }, "fallback_registry": { "a": true, "h": "Fallback Registry", "n": "fallback_registry", "r": true, "t": "`$ARRAY`", "key$": "fallback_registry", "index$": 4 }, "generated_at": { "a": true, "fo": "date-time", "h": "Generated At", "n": "generated_at", "r": true, "t": "`$STRING`", "key$": "generated_at", "index$": 5 }, "has_more": { "a": true, "h": "Has More", "n": "has_more", "r": true, "sh": "True only when next_cursor can continue through the current bounded, deterministic candidate window.", "t": "`$BOOLEAN`", "key$": "has_more", "index$": 6 }, "listed": { "a": true, "h": "Listed", "n": "listed", "r": true, "t": "`$ARRAY`", "union": { "branches": 2, "count": 1, "depth": 5 }, "key$": "listed", "index$": 7 }, "location_context": { "a": true, "h": "Location Context", "n": "location_context", "r": true, "sh": "Local category discovery and recommendations require a current precise location proof or handoff, a user-confirmed validated destination authority, or a saved_exact Home location.", "t": "`$ANY`", "union": { "branches": 2, "count": 1, "depth": 0 }, "key$": "location_context", "index$": 8 }, "ordering": { "a": true, "h": "Ordering", "n": "ordering", "r": true, "t": "`$ANY`", "key$": "ordering", "index$": 9 }, "policy": { "a": true, "h": "Policy", "n": "policy", "r": true, "t": "`$STRING`", "key$": "policy", "index$": 10 }, "presentation_guidance": { "a": true, "h": "Presentation Guidance", "n": "presentation_guidance", "r": false, "sh": "Agent-key responses: how to present these results to the customer.", "t": "`$STRING`", "key$": "presentation_guidance", "index$": 11 }, "query": { "a": true, "h": "Query", "n": "query", "r": true, "t": "`$OBJECT`", "key$": "query", "index$": 12 }, "ranking_policy": { "a": true, "h": "Ranking Policy", "n": "ranking_policy", "r": true, "t": "`$STRING`", "key$": "ranking_policy", "index$": 13 }, "registry_count_basis": { "a": true, "h": "Registry Count Basis", "n": "registry_count_basis", "r": true, "t": "`$STRING`", "key$": "registry_count_basis", "index$": 14 }, "registry_count_observed_at": { "a": true, "h": "Registry Count Observed At", "n": "registry_count_observed_at", "r": true, "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "registry_count_observed_at", "index$": 15 }, "registry_name": { "a": true, "h": "Registry Name", "n": "registry_name", "r": true, "t": "`$ANY`", "key$": "registry_name", "index$": 16 }, "results": { "a": true, "h": "Results", "n": "results", "r": true, "t": "`$ARRAY`", "union": { "branches": 8, "count": 2, "depth": 7 }, "key$": "results", "index$": 17 }, "returned_count": { "a": true, "h": "Returned Count", "n": "returned_count", "r": true, "t": "`$INTEGER`", "key$": "returned_count", "index$": 18 }, "reviewed_registry": { "a": true, "h": "Reviewed Registry", "n": "reviewed_registry", "r": true, "t": "`$ARRAY`", "union": { "branches": 6, "count": 1, "depth": 1 }, "key$": "reviewed_registry", "index$": 19 }, "schema_version": { "a": true, "h": "Schema Version", "n": "schema_version", "r": true, "t": "`$ANY`", "key$": "schema_version", "index$": 20 }, "search_intent": { "a": true, "h": "Search Intent", "n": "search_intent", "r": true, "t": "`$OBJECT`", "key$": "search_intent", "index$": 21 }, "suggestions": { "a": true, "h": "Suggestions", "n": "suggestions", "r": false, "t": "`$OBJECT`", "key$": "suggestions", "index$": 22 }, "total_matches": { "a": true, "h": "Total Matches", "n": "total_matches", "r": false, "sh": "Web and app responses.", "t": "`$INTEGER`", "key$": "total_matches", "index$": 23 }, "total_matches_basis": { "a": true, "h": "Total Matches Basis", "n": "total_matches_basis", "r": false, "t": "`$INTEGER`", "key$": "total_matches_basis", "index$": 24 }, "total_registry_records": { "a": true, "h": "Total Registry Records", "n": "total_registry_records", "r": true, "t": "`$INTEGER`", "key$": "total_registry_records", "index$": 25 }, "trust_model_version": { "a": true, "h": "Trust Model Version", "n": "trust_model_version", "r": true, "t": "`$ANY`", "key$": "trust_model_version", "index$": 26 }, "verified": { "a": true, "h": "Verified", "n": "verified", "r": true, "t": "`$ARRAY`", "union": { "branches": 2, "count": 1, "depth": 5 }, "key$": "verified", "index$": 27 }, "visible_candidate_records": { "a": true, "h": "Visible Candidate Records", "n": "visible_candidate_records", "r": false, "sh": "Web and app responses.", "t": "`$INTEGER`", "key$": "visible_candidate_records", "index$": 28 } }, "name": "recommend", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /v1/recommend", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "allowed_action", "or": "allowed_action", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "category", "or": "category", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "city", "or": "city", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "ex": 10, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 3 }, { "a": true, "k": "query", "n": "location_handoff_id", "or": "location_handoff_id", "r": false, "t": "`$STRING`", "index$": 4 }, { "a": true, "k": "query", "n": "location_proof_id", "or": "location_proof_id", "r": false, "t": "`$STRING`", "index$": 5 }, { "a": true, "k": "query", "n": "location_selection", "or": "location_selection", "r": false, "t": "`$STRING`", "index$": 6 }, { "a": true, "k": "query", "n": "q", "or": "q", "r": false, "t": "`$STRING`", "index$": 7 }, { "a": true, "k": "query", "n": "radius_mile", "or": "radius_miles", "r": false, "t": "`$NUMBER`", "index$": 8 }, { "a": true, "k": "query", "n": "saved_location_ref", "or": "saved_location_ref", "r": false, "t": "`$STRING`", "index$": 9 }, { "a": true, "k": "query", "n": "state", "or": "state", "r": false, "t": "`$STRING`", "index$": 10 }, { "a": true, "k": "query", "n": "zip", "or": "zip", "r": false, "t": "`$STRING`", "index$": 11 }] }, "k": "http", "m": "GET", "o": "/v1/recommend", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v1" }, { "lit": "recommend" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "recommend", "name__orig": "recommend", "Name": "Recommend", "name_": "recommend", "name-": "recommend", "NAME": "RECOMMEND", "index$": 47 }, { "active": true, "entity": "recommend", "key$": "BasicRecommendFlow", "kind": "basic", "name": "BasicRecommendFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "recommend_ref01" } }], "index$": 0 }] }, 'Recommend', { "GET /v1/recommend": { "protocol": "http", "parameters": [{ "name": "q", "in": "query", "required": false, "description": "Free-text search across the published pool. Exact and genuine-prefix name lookup remains universal; category recommendations require precise location authority.", "schema": { "description": "Free-text search across the published pool. Exact and genuine-prefix name lookup remains universal; category recommendations require precise location authority.", "type": "string", "minLength": 1, "maxLength": 200 }, "index$": 0 }, { "name": "category", "in": "query", "required": false, "description": "Business category or taxonomy term. Local recommendations require recognized current-location, validated-destination, or saved_exact authority.", "schema": { "description": "Business category or taxonomy term. Local recommendations require recognized current-location, validated-destination, or saved_exact authority.", "type": "string", "minLength": 1, "maxLength": 200 }, "index$": 1 }, { "name": "city", "in": "query", "required": false, "description": "City context. With state, it can disambiguate a business name but cannot enable local category/recommendation reach, Sponsored placement, or impressions.", "schema": { "description": "City context. With state, it can disambiguate a business name but cannot enable local category/recommendation reach, Sponsored placement, or impressions.", "type": "string", "minLength": 1, "maxLength": 200 }, "index$": 2 }, { "name": "state", "in": "query", "required": false, "description": "Two-letter US state or territory code. With city, this is neutral area context for business-name disambiguation; it is not precise local-discovery authority.", "schema": { "description": "Two-letter US state or territory code. With city, this is neutral area context for business-name disambiguation; it is not precise local-discovery authority.", "type": "string", "pattern": "^(?:AL|AK|AZ|AR|CA|CO|CT|DE|FL|GA|HI|ID|IL|IN|IA|KS|KY|LA|ME|MD|MA|MI|MN|MS|MO|MT|NE|NV|NH|NJ|NM|NY|NC|ND|OH|OK|OR|PA|RI|SC|SD|TN|TX|UT|VT|VA|WA|WV|WI|WY|DC|AS|GU|MP|PR|VI)$" }, "index$": 3 }, { "name": "zip", "in": "query", "required": false, "description": "5-digit US ZIP (ZIP+4 accepted). Its ZCTA centroid is neutral area context for business-name disambiguation only; it cannot enable local category/recommendation reach, Sponsored placement, or impressions.", "schema": { "description": "5-digit US ZIP (ZIP+4 accepted). Its ZCTA centroid is neutral area context for business-name disambiguation only; it cannot enable local category/recommendation reach, Sponsored placement, or impressions.", "type": "string", "pattern": "^\\d{5}(?:-\\d{4})?$" }, "index$": 4 }, { "name": "radius_miles", "in": "query", "required": false, "description": "Requested area radius. It never substitutes for recognized current-location, validated-destination, or saved_exact authority. Universal name lookup may use it only as neutral context.", "schema": { "description": "Requested area radius. It never substitutes for recognized current-location, validated-destination, or saved_exact authority. Universal name lookup may use it only as neutral context.", "type": "number", "minimum": 0.1, "maximum": 500 }, "index$": 5 }, { "name": "allowed_action", "in": "query", "required": false, "description": "Require a published allowed action such as recommend or call_business.", "schema": { "description": "Require a published allowed action such as recommend or call_business.", "type": "string", "minLength": 1, "maxLength": 200 }, "index$": 6 }, { "name": "location_selection", "in": "query", "required": false, "description": "The customer's explicit location choice. Current, a user-confirmed validated destination handoff, or Home when reach_precision=exact can authorize local category/recommendation discovery. Provided city/ZIP and coarse Home are neutral area context for business-name disambiguation only. Ask exactly: 'Where should I search? For local categories, use your current location, enter a different service address securely in Loppee, or use Home only when it is marked exact. Another city/ZIP is for area context or business-name lookup only.' Exact and genuine-prefix business-name lookup is exempt.", "schema": { "description": "The customer's explicit location choice. Current, a user-confirmed validated destination handoff, or Home when reach_precision=exact can authorize local category/recommendation discovery. Provided city/ZIP and coarse Home are neutral area context for business-name disambiguation only. Ask exactly: 'Where should I search? For local categories, use your current location, enter a different service address securely in Loppee, or use Home only when it is marked exact. Another city/ZIP is for area context or business-name lookup only.' Exact and genuine-prefix business-name lookup is exempt.", "type": "string", "enum": ["saved", "current", "destination", "provided"] }, "index$": 7 }, { "name": "saved_location_ref", "in": "query", "required": false, "description": "Opaque saved-location reference returned by get_location_options. Required with location_selection=saved. Only kind=saved_exact authorizes local category/recommendation reach; coarse saved kinds remain neutral context. It contains no address, ZIP, latitude, or longitude.", "schema": { "description": "Opaque saved-location reference returned by get_location_options. Required with location_selection=saved. Only kind=saved_exact authorizes local category/recommendation reach; coarse saved kinds remain neutral context. It contains no address, ZIP, latitude, or longitude.", "type": "string", "minLength": 1, "maxLength": 512 }, "index$": 8 }, { "name": "location_handoff_id", "in": "query", "required": false, "description": "Opaque current-location or validated-destination handoff approved by the consumer. Both authorize plan-based organic local category/recommendation reach and both are Sponsored-neutral: no Sponsored ordering or labels, click/recommendation attribution, or exposure accounting. Current location must come from the registered Loppee iPhone. Requires the same active scoped consumer-agent connection that created it. Do not combine it with lat/lng, ZIP, city, or state; Loppee uses the point privately and never returns an address or coordinates to the agent.", "schema": { "description": "Opaque current-location or validated-destination handoff approved by the consumer. Both authorize plan-based organic local category/recommendation reach and both are Sponsored-neutral: no Sponsored ordering or labels, click/recommendation attribution, or exposure accounting. Current location must come from the registered Loppee iPhone. Requires the same active scoped consumer-agent connection that created it. Do not combine it with lat/lng, ZIP, city, or state; Loppee uses the point privately and never returns an address or coordinates to the agent.", "type": "string", "format": "uuid", "pattern": "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$" }, "index$": 9 }, { "name": "location_proof_id", "in": "query", "required": false, "description": "Opaque short-lived current-location or validated-destination proof. It may be created by an authenticated Loppee customer or same-origin browser flow; the attested iOS lane remains current-location only. Do not combine it with any other location input; the address and exact point remain private.", "schema": { "description": "Opaque short-lived current-location or validated-destination proof. It may be created by an authenticated Loppee customer or same-origin browser flow; the attested iOS lane remains current-location only. Do not combine it with any other location input; the address and exact point remain private.", "type": "string", "format": "uuid", "pattern": "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$" }, "index$": 10 }, { "name": "limit", "in": "query", "required": false, "description": "Maximum result count from 1 to 50.", "schema": { "default": 10, "description": "Maximum result count from 1 to 50.", "type": "integer", "minimum": 1, "maximum": 50 }, "index$": 11 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let recommend_ref01_data = Object.values(setup.data.existing.recommend)[0];
        // LIST
        const recommend_ref01_ent = client.Recommend();
        const recommend_ref01_match = {};
        const recommend_ref01_list = (await recommend_ref01_ent.list(recommend_ref01_match)).map((e) => e.data());
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/recommend/RecommendTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LoppeeBusinessSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['recommend01', 'recommend02', 'recommend03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LOPPEE_BUSINESS_TEST_RECOMMEND_ENTID': idmap,
        'LOPPEE_BUSINESS_TEST_LIVE': 'FALSE',
        'LOPPEE_BUSINESS_TEST_EXPLAIN': 'FALSE',
        'LOPPEE_BUSINESS_APIKEY': '',
    });
    idmap = env['LOPPEE_BUSINESS_TEST_RECOMMEND_ENTID'];
    const live = 'TRUE' === env.LOPPEE_BUSINESS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LOPPEE_BUSINESS_TEST_RECOMMEND_ENTID'];
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
//# sourceMappingURL=RecommendEntity.test.js.map