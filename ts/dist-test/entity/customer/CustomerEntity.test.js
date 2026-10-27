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
(0, node_test_1.describe)('CustomerEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LOPPEE_BUSINESS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LOPPEE_BUSINESS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LoppeeBusinessSDK.test();
        const ent = testsdk.Customer();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.LoppeeBusinessSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.Customer().create({ "auth_provider": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LOPPEE_BUSINESS_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'customer.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "auth_provider": { "a": true, "h": "Auth Provider", "n": "auth_provider", "r": false, "t": "`$STRING`", "key$": "auth_provider", "index$": 0 }, "avatar_url": { "a": true, "fo": "uri", "h": "Avatar Url", "n": "avatar_url", "op": { "create": { "req": false, "type": "`$STRING`" } }, "r": true, "sh": "Short-lived signed display URL for a private avatar object, or null.", "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "avatar_url", "index$": 1 }, "city": { "a": true, "h": "City", "n": "city", "op": { "create": { "req": false, "type": "`$STRING`" } }, "r": true, "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "city", "index$": 2 }, "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": true, "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "created_at", "index$": 3 }, "email": { "a": true, "fo": "email", "h": "Email", "n": "email", "r": true, "t": "`$STRING`", "key$": "email", "index$": 4 }, "full_name": { "a": true, "h": "Full Name", "n": "full_name", "op": { "create": { "req": false, "type": "`$STRING`" } }, "r": true, "t": "`$STRING`", "key$": "full_name", "index$": 5 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "t": "`$STRING`", "key$": "id", "index$": 6 }, "phone": { "a": true, "h": "Phone", "n": "phone", "op": { "create": { "req": false, "type": "`$STRING`" } }, "r": true, "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "phone", "index$": 7 }, "search_category": { "a": true, "h": "Search Category", "n": "search_category", "r": false, "t": "`$STRING`", "key$": "search_category", "index$": 8 }, "service_need": { "a": true, "h": "Service Need", "n": "service_need", "r": false, "t": "`$STRING`", "key$": "service_need", "index$": 9 }, "state": { "a": true, "h": "State", "n": "state", "op": { "create": { "req": false, "type": "`$STRING`" } }, "r": true, "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "state", "index$": 10 }, "status": { "a": true, "h": "Status", "n": "status", "r": true, "t": "`$ANY`", "key$": "status", "index$": 11 }, "updated_at": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updated_at", "r": true, "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "updated_at", "index$": 12 } }, "id": { "field": "id", "name": "id" }, "name": "customer", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["auth_provider", "avatar_url", "city", "full_name", "phone", "search_category", "service_need", "state"], "co": { "id": "POST /v1/account/customer", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/v1/account/customer", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v1" }, { "lit": "account" }, { "lit": "customer" }], "t": { "req": { "auth_provider": "`reqdata.auth_provider`", "avatar_url": "`reqdata.avatar_url`", "city": "`reqdata.city`", "full_name": "`reqdata.full_name`", "phone": "`reqdata.phone`", "search_category": "`reqdata.search_category`", "service_need": "`reqdata.service_need`", "state": "`reqdata.state`" }, "res": "`body.account`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "customer", "name__orig": "customer", "Name": "Customer", "name_": "customer", "name-": "customer", "NAME": "CUSTOMER", "index$": 25 }, { "active": true, "entity": "customer", "key$": "BasicCustomerFlow", "kind": "basic", "name": "BasicCustomerFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "customer_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'Customer', { "POST /v1/account/customer": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "additionalProperties": false, "properties": { "full_name": { "type": "string", "key$": "full_name" }, "phone": { "type": "string", "key$": "phone" }, "city": { "type": "string", "key$": "city" }, "state": { "type": "string", "key$": "state" }, "search_category": { "type": "string", "key$": "search_category" }, "service_need": { "type": "string", "key$": "service_need" }, "auth_provider": { "type": "string", "key$": "auth_provider" }, "avatar_url": { "type": "string", "maxLength": 420000, "description": "Empty string removes the photo. Otherwise, a client-cropped square PNG/JPEG/WebP/GIF base64 data URI; decoded bytes must be at most 300 KB and dimensions at most 512×512. Raw object-storage locators and remote URLs are rejected.", "key$": "avatar_url" } }, "x-ref": "#/components/schemas/CustomerAccountUpsertRequest", "index$": 1 } } } }, "parameters": [] } }, { strict: LIVE_STRICT, t }, 'TRUE' === process.env.VOXGIG_GETONLY_GUARD ? { "customer.create.0": "GET-only live run: needs POST /v1/account/customer" } : {});
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const customer_ref01_ent = client.Customer();
        let customer_ref01_data = setup.data.new.customer['customer_ref01'];
        customer_ref01_data = (await customer_ref01_ent.create(customer_ref01_data)).data();
        (0, node_assert_1.default)(null != customer_ref01_data.id);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/customer/CustomerTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LoppeeBusinessSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['customer01', 'customer02', 'customer03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LOPPEE_BUSINESS_TEST_CUSTOMER_ENTID': idmap,
        'LOPPEE_BUSINESS_TEST_LIVE': 'FALSE',
        'LOPPEE_BUSINESS_TEST_EXPLAIN': 'FALSE',
        'LOPPEE_BUSINESS_APIKEY': '',
    });
    idmap = env['LOPPEE_BUSINESS_TEST_CUSTOMER_ENTID'];
    const live = 'TRUE' === env.LOPPEE_BUSINESS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LOPPEE_BUSINESS_TEST_CUSTOMER_ENTID'];
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
//# sourceMappingURL=CustomerEntity.test.js.map