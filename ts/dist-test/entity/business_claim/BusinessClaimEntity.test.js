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
(0, node_test_1.describe)('BusinessClaimEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LOPPEE_BUSINESS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LOPPEE_BUSINESS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LoppeeBusinessSDK.test();
        const ent = testsdk.BusinessClaim();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.LoppeeBusinessSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.BusinessClaim().create({ "business_id": 1, "display_name": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LOPPEE_BUSINESS_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'business_claim.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "business_id": { "a": true, "h": "Business Id", "n": "business_id", "op": { "create": { "req": false, "type": "`$STRING`" } }, "r": true, "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "business_id", "index$": 0 }, "category": { "a": true, "h": "Category", "n": "category", "r": false, "t": "`$STRING`", "key$": "category", "index$": 1 }, "city": { "a": true, "h": "City", "n": "city", "r": false, "t": "`$STRING`", "key$": "city", "index$": 2 }, "claim_id": { "a": true, "h": "Claim Id", "n": "claim_id", "r": true, "t": "`$STRING`", "key$": "claim_id", "index$": 3 }, "claim_status": { "a": true, "h": "Claim Status", "n": "claim_status", "r": true, "t": "`$STRING`", "key$": "claim_status", "index$": 4 }, "claimant_email": { "a": true, "h": "Claimant Email", "n": "claimant_email", "r": false, "sh": "Legacy field; authenticated owner identity wins.", "t": "`$STRING`", "key$": "claimant_email", "index$": 5 }, "claimant_name": { "a": true, "h": "Claimant Name", "n": "claimant_name", "r": false, "sh": "Legacy field; authenticated owner identity wins.", "t": "`$STRING`", "key$": "claimant_name", "index$": 6 }, "claimant_relationship": { "a": true, "h": "Claimant Relationship", "n": "claimant_relationship", "r": false, "t": "`$STRING`", "key$": "claimant_relationship", "index$": 7 }, "created_at": { "a": true, "h": "Created At", "n": "created_at", "r": true, "t": "`$STRING`", "key$": "created_at", "index$": 8 }, "directory_listing_id": { "a": true, "h": "Directory Listing Id", "n": "directory_listing_id", "r": true, "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "directory_listing_id", "index$": 9 }, "display_name": { "a": true, "h": "Display Name", "n": "display_name", "r": true, "t": "`$STRING`", "key$": "display_name", "index$": 10 }, "listing_id": { "a": true, "h": "Listing Id", "n": "listing_id", "r": false, "t": "`$STRING`", "key$": "listing_id", "index$": 11 }, "notes": { "a": true, "h": "Notes", "n": "notes", "r": false, "t": "`$STRING`", "key$": "notes", "index$": 12 }, "phone": { "a": true, "h": "Phone", "n": "phone", "r": false, "t": "`$STRING`", "key$": "phone", "index$": 13 }, "source": { "a": true, "h": "Source", "n": "source", "r": false, "t": "`$STRING`", "key$": "source", "index$": 14 }, "source_type": { "a": true, "h": "Source Type", "n": "source_type", "r": false, "t": "`$STRING`", "key$": "source_type", "index$": 15 }, "source_url": { "a": true, "h": "Source Url", "n": "source_url", "r": false, "t": "`$STRING`", "key$": "source_url", "index$": 16 }, "state": { "a": true, "h": "State", "n": "state", "r": false, "t": "`$STRING`", "key$": "state", "index$": 17 }, "status": { "a": true, "h": "Status", "n": "status", "r": true, "t": "`$ANY`", "key$": "status", "index$": 18 }, "verification": { "a": true, "h": "Verification", "n": "verification", "r": false, "t": "`$OBJECT`", "key$": "verification", "index$": 19 }, "website": { "a": true, "h": "Website", "n": "website", "r": false, "t": "`$STRING`", "key$": "website", "index$": 20 } }, "name": "business_claim", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["business_id", "category", "city", "claimant_email", "claimant_name", "claimant_relationship", "display_name", "listing_id", "notes", "phone", "source", "source_type", "source_url", "state", "website"], "co": { "id": "POST /v1/actions/business-claim", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/v1/actions/business-claim", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v1" }, { "lit": "actions" }, { "lit": "business-claim" }], "t": { "req": { "business_id": "`reqdata.business_id`", "category": "`reqdata.category`", "city": "`reqdata.city`", "claimant_email": "`reqdata.claimant_email`", "claimant_name": "`reqdata.claimant_name`", "claimant_relationship": "`reqdata.claimant_relationship`", "display_name": "`reqdata.display_name`", "listing_id": "`reqdata.listing_id`", "notes": "`reqdata.note`", "phone": "`reqdata.phone`", "source": "`reqdata.source`", "source_type": "`reqdata.source_type`", "source_url": "`reqdata.source_url`", "state": "`reqdata.state`", "website": "`reqdata.website`" }, "res": "`body`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "business_claim", "name__orig": "business_claim", "Name": "BusinessClaim", "name_": "business_claim", "name-": "business-claim", "NAME": "BUSINESS_CLAIM", "index$": 9 }, { "active": true, "entity": "business_claim", "key$": "BasicBusinessClaimFlow", "kind": "basic", "name": "BasicBusinessClaimFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "business_claim_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'BusinessClaim', { "POST /v1/actions/business-claim": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "required": ["display_name"], "additionalProperties": false, "properties": { "listing_id": { "type": "string", "key$": "listing_id" }, "business_id": { "type": "string", "key$": "business_id" }, "display_name": { "type": "string", "minLength": 1, "key$": "display_name" }, "category": { "type": "string", "key$": "category" }, "city": { "type": "string", "key$": "city" }, "state": { "type": "string", "key$": "state" }, "phone": { "type": "string", "key$": "phone" }, "website": { "type": "string", "key$": "website" }, "source_type": { "type": "string", "key$": "source_type" }, "source": { "type": "string", "key$": "source" }, "source_url": { "type": "string", "key$": "source_url" }, "claimant_email": { "type": "string", "description": "Legacy field; authenticated owner identity wins.", "key$": "claimant_email" }, "claimant_name": { "type": "string", "description": "Legacy field; authenticated owner identity wins.", "key$": "claimant_name" }, "claimant_relationship": { "type": "string", "key$": "claimant_relationship" }, "notes": { "type": "string", "key$": "notes" } }, "x-ref": "#/components/schemas/BusinessClaimRequest", "index$": 1 } } } }, "parameters": [] } }, { strict: LIVE_STRICT, t }, 'TRUE' === process.env.VOXGIG_GETONLY_GUARD ? { "business_claim.create.0": "GET-only live run: needs POST /v1/actions/business-claim" } : {});
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const business_claim_ref01_ent = client.BusinessClaim();
        let business_claim_ref01_data = setup.data.new.business_claim['business_claim_ref01'];
        business_claim_ref01_data = (await business_claim_ref01_ent.create(business_claim_ref01_data)).data();
        (0, node_assert_1.default)(null != business_claim_ref01_data);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/business_claim/BusinessClaimTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LoppeeBusinessSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['business_claim01', 'business_claim02', 'business_claim03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LOPPEE_BUSINESS_TEST_BUSINESS_CLAIM_ENTID': idmap,
        'LOPPEE_BUSINESS_TEST_LIVE': 'FALSE',
        'LOPPEE_BUSINESS_TEST_EXPLAIN': 'FALSE',
        'LOPPEE_BUSINESS_APIKEY': '',
    });
    idmap = env['LOPPEE_BUSINESS_TEST_BUSINESS_CLAIM_ENTID'];
    const live = 'TRUE' === env.LOPPEE_BUSINESS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LOPPEE_BUSINESS_TEST_BUSINESS_CLAIM_ENTID'];
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
//# sourceMappingURL=BusinessClaimEntity.test.js.map