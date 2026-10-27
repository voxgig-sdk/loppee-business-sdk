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
(0, node_test_1.describe)('CommercialClickEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LOPPEE_BUSINESS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LOPPEE_BUSINESS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LoppeeBusinessSDK.test();
        const ent = testsdk.CommercialClick();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.LoppeeBusinessSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.CommercialClick().create({ "action_type": "x", "ad_receipt": 1, "source_type": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LOPPEE_BUSINESS_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'commercial_click.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "action_type": { "a": true, "h": "Action Type", "n": "action_type", "r": true, "t": "`$ANY`", "key$": "action_type", "index$": 0 }, "ad_receipt": { "a": true, "h": "Ad Receipt", "n": "ad_receipt", "r": false, "sh": "Opaque server-signed receipt of a served Sponsored ad, sent back unchanged with a profile, website or call tap.", "t": "`$STRING`", "key$": "ad_receipt", "index$": 1 }, "billable": { "a": true, "h": "Billable", "n": "billable", "r": true, "t": "`$BOOLEAN`", "key$": "billable", "index$": 2 }, "billing_event_id": { "a": true, "h": "Billing Event Id", "n": "billing_event_id", "r": false, "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "billing_event_id", "index$": 3 }, "billing_status": { "a": true, "h": "Billing Status", "n": "billing_status", "r": true, "t": "`$STRING`", "key$": "billing_status", "index$": 4 }, "business_id": { "a": true, "h": "Business Id", "n": "business_id", "r": false, "t": "`$STRING`", "key$": "business_id", "index$": 5 }, "category": { "a": true, "h": "Category", "n": "category", "r": false, "t": "`$STRING`", "key$": "category", "index$": 6 }, "city": { "a": true, "h": "City", "n": "city", "r": false, "t": "`$STRING`", "key$": "city", "index$": 7 }, "click_id": { "a": true, "h": "Click Id", "n": "click_id", "r": true, "t": "`$STRING`", "key$": "click_id", "index$": 8 }, "commercial_status": { "a": true, "h": "Commercial Status", "n": "commercial_status", "r": false, "t": "`$ANY`", "key$": "commercial_status", "index$": 9 }, "created_at": { "a": true, "h": "Created At", "n": "created_at", "r": true, "t": "`$STRING`", "key$": "created_at", "index$": 10 }, "directory_listing_id": { "a": true, "h": "Directory Listing Id", "n": "directory_listing_id", "r": false, "sh": "Deprecated alias of listing_id.", "t": "`$STRING`", "key$": "directory_listing_id", "index$": 11 }, "display_name": { "a": true, "h": "Display Name", "n": "display_name", "r": false, "t": "`$STRING`", "key$": "display_name", "index$": 12 }, "fallback_interaction_id": { "a": true, "h": "Fallback Interaction Id", "n": "fallback_interaction_id", "r": false, "t": "`$STRING`", "key$": "fallback_interaction_id", "index$": 13 }, "ledger_status": { "a": true, "h": "Ledger Status", "n": "ledger_status", "r": true, "t": "`$STRING`", "key$": "ledger_status", "index$": 14 }, "listing_id": { "a": true, "h": "Listing Id", "n": "listing_id", "r": false, "t": "`$STRING`", "key$": "listing_id", "index$": 15 }, "metadata": { "a": true, "h": "Metadata", "n": "metadata", "r": false, "t": "`$OBJECT`", "key$": "metadata", "index$": 16 }, "migration_required": { "a": true, "h": "Migration Required", "n": "migration_required", "r": false, "t": "`$BOOLEAN`", "key$": "migration_required", "index$": 17 }, "page_path": { "a": true, "h": "Page Path", "n": "page_path", "r": false, "t": "`$STRING`", "key$": "page_path", "index$": 18 }, "referrer": { "a": true, "h": "Referrer", "n": "referrer", "r": false, "t": "`$STRING`", "key$": "referrer", "index$": 19 }, "source_type": { "a": true, "h": "Source Type", "n": "source_type", "r": true, "t": "`$ANY`", "key$": "source_type", "index$": 20 }, "state": { "a": true, "h": "State", "n": "state", "r": false, "t": "`$STRING`", "key$": "state", "index$": 21 }, "status": { "a": true, "h": "Status", "n": "status", "r": true, "t": "`$ANY`", "key$": "status", "index$": 22 }, "storage": { "a": true, "h": "Storage", "n": "storage", "r": true, "t": "`$ANY`", "key$": "storage", "index$": 23 }, "surface": { "a": true, "h": "Surface", "n": "surface", "r": false, "sh": "Where the Sponsored ad was shown (with ad_receipt).", "t": "`$ANY`", "key$": "surface", "index$": 24 }, "target_url": { "a": true, "h": "Target Url", "n": "target_url", "r": false, "t": "`$STRING`", "key$": "target_url", "index$": 25 } }, "name": "commercial_click", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["action_type", "ad_receipt", "business_id", "category", "city", "commercial_status", "directory_listing_id", "display_name", "listing_id", "metadata", "page_path", "referrer", "source_type", "state", "surface", "target_url"], "co": { "id": "POST /v1/actions/commercial-click", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/v1/actions/commercial-click", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v1" }, { "lit": "actions" }, { "lit": "commercial-click" }], "t": { "req": { "action_type": "`reqdata.action_type`", "ad_receipt": "`reqdata.ad_receipt`", "business_id": "`reqdata.business_id`", "category": "`reqdata.category`", "city": "`reqdata.city`", "commercial_status": "`reqdata.commercial_status`", "directory_listing_id": "`reqdata.directory_listing_id`", "display_name": "`reqdata.display_name`", "listing_id": "`reqdata.listing_id`", "metadata": "`reqdata.metadata`", "page_path": "`reqdata.page_path`", "referrer": "`reqdata.referrer`", "source_type": "`reqdata.source_type`", "state": "`reqdata.state`", "surface": "`reqdata.surface`", "target_url": "`reqdata.target_url`" }, "res": "`body`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "commercial_click", "name__orig": "commercial_click", "Name": "CommercialClick", "name_": "commercial_click", "name-": "commercial-click", "NAME": "COMMERCIAL_CLICK", "index$": 18 }, { "active": true, "entity": "commercial_click", "key$": "BasicCommercialClickFlow", "kind": "basic", "name": "BasicCommercialClickFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "commercial_click_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'CommercialClick', { "POST /v1/actions/commercial-click": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "required": ["action_type", "source_type"], "additionalProperties": false, "properties": { "action_type": { "enum": ["website", "call", "view_profile", "claim", "trust_card", "badge", "directions", "recommend"], "key$": "action_type" }, "source_type": { "enum": ["published_profile", "directory_listing"], "key$": "source_type" }, "business_id": { "type": "string", "key$": "business_id" }, "listing_id": { "type": "string", "key$": "listing_id" }, "directory_listing_id": { "type": "string", "description": "Deprecated alias of listing_id.", "key$": "directory_listing_id" }, "display_name": { "type": "string", "key$": "display_name" }, "category": { "type": "string", "key$": "category" }, "city": { "type": "string", "key$": "city" }, "state": { "type": "string", "key$": "state" }, "commercial_status": { "enum": ["free", "paid", "sponsored"], "key$": "commercial_status" }, "target_url": { "type": "string", "key$": "target_url" }, "page_path": { "type": "string", "key$": "page_path" }, "referrer": { "type": "string", "key$": "referrer" }, "metadata": { "type": "object", "additionalProperties": true, "key$": "metadata" }, "ad_receipt": { "type": "string", "description": "Opaque server-signed receipt of a served Sponsored ad, sent back unchanged with a profile, website or call tap. Only a receipt that validates on Loppee's server makes the tap an ad tap; without one the click is ordinary.", "key$": "ad_receipt" }, "surface": { "enum": ["assistant", "web"], "description": "Where the Sponsored ad was shown (with ad_receipt).", "key$": "surface" } }, "x-ref": "#/components/schemas/CommercialClickRequest", "index$": 1 } } } }, "parameters": [] } }, { strict: LIVE_STRICT, t }, 'TRUE' === process.env.VOXGIG_GETONLY_GUARD ? { "commercial_click.create.0": "GET-only live run: needs POST /v1/actions/commercial-click" } : {});
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const commercial_click_ref01_ent = client.CommercialClick();
        let commercial_click_ref01_data = setup.data.new.commercial_click['commercial_click_ref01'];
        commercial_click_ref01_data = (await commercial_click_ref01_ent.create(commercial_click_ref01_data)).data();
        (0, node_assert_1.default)(null != commercial_click_ref01_data);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/commercial_click/CommercialClickTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LoppeeBusinessSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['commercial_click01', 'commercial_click02', 'commercial_click03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LOPPEE_BUSINESS_TEST_COMMERCIAL_CLICK_ENTID': idmap,
        'LOPPEE_BUSINESS_TEST_LIVE': 'FALSE',
        'LOPPEE_BUSINESS_TEST_EXPLAIN': 'FALSE',
        'LOPPEE_BUSINESS_APIKEY': '',
    });
    idmap = env['LOPPEE_BUSINESS_TEST_COMMERCIAL_CLICK_ENTID'];
    const live = 'TRUE' === env.LOPPEE_BUSINESS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LOPPEE_BUSINESS_TEST_COMMERCIAL_CLICK_ENTID'];
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
//# sourceMappingURL=CommercialClickEntity.test.js.map