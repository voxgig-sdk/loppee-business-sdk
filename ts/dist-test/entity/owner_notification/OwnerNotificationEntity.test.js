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
(0, node_test_1.describe)('OwnerNotificationEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LOPPEE_BUSINESS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LOPPEE_BUSINESS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LoppeeBusinessSDK.test();
        const ent = testsdk.OwnerNotification();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.LoppeeBusinessSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.OwnerNotification().create({ "notification_id": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LOPPEE_BUSINESS_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'owner_notification.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "businessId": { "a": true, "h": "Business Id", "n": "businessId", "r": true, "t": "`$STRING`", "key$": "businessId", "index$": 0 }, "createdAt": { "a": true, "h": "Created At", "n": "createdAt", "r": true, "t": "`$STRING`", "key$": "createdAt", "index$": 1 }, "dedupeKey": { "a": true, "h": "Dedupe Key", "n": "dedupeKey", "r": true, "t": "`$STRING`", "key$": "dedupeKey", "index$": 2 }, "emailStatus": { "a": true, "h": "Email Status", "n": "emailStatus", "r": true, "t": "`$STRING`", "key$": "emailStatus", "index$": 3 }, "eventType": { "a": true, "h": "Event Type", "n": "eventType", "r": true, "t": "`$ANY`", "key$": "eventType", "index$": 4 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "t": "`$STRING`", "key$": "id", "index$": 5 }, "readAt": { "a": true, "h": "Read At", "n": "readAt", "r": true, "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "readAt", "index$": 6 }, "resourceId": { "a": true, "h": "Resource Id", "n": "resourceId", "r": true, "t": "`$STRING`", "key$": "resourceId", "index$": 7 }, "resourceKind": { "a": true, "h": "Resource Kind", "n": "resourceKind", "r": true, "t": "`$ANY`", "key$": "resourceKind", "index$": 8 }, "resourceUrl": { "a": true, "h": "Resource Url", "n": "resourceUrl", "r": true, "t": "`$STRING`", "key$": "resourceUrl", "index$": 9 }, "summary": { "a": true, "h": "Summary", "n": "summary", "r": true, "t": "`$STRING`", "key$": "summary", "index$": 10 }, "webhookStatus": { "a": true, "h": "Webhook Status", "n": "webhookStatus", "r": true, "t": "`$STRING`", "key$": "webhookStatus", "index$": 11 } }, "id": { "field": "id", "name": "id" }, "name": "owner_notification", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": false, "co": { "id": "POST /v1/owner/notifications/{notification_id}/read", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "notification_id", "or": "notification_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/v1/owner/notifications/{notification_id}/read", "q": { "exist": ["notification_id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v1" }, { "lit": "owner" }, { "lit": "notifications" }, { "var": "notification_id" }, { "lit": "read" }], "t": { "req": "`reqdata`", "res": "`body.notification`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "owner_notification", "name__orig": "owner_notification", "Name": "OwnerNotification", "name_": "owner_notification", "name-": "owner-notification", "NAME": "OWNER_NOTIFICATION", "index$": 40 }, { "active": true, "entity": "owner_notification", "key$": "BasicOwnerNotificationFlow", "kind": "basic", "name": "BasicOwnerNotificationFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "owner_notification_ref01" }, "m": { "notification_id": "notification01" }, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'OwnerNotification', { "POST /v1/owner/notifications/{notification_id}/read": { "protocol": "http", "requestBody": { "required": false, "content": { "application/json": { "schema": { "type": "object", "maxProperties": 0, "additionalProperties": false, "x-ref": "#/components/schemas/EmptyRequest", "index$": 1 } } } }, "parameters": [{ "name": "notification_id", "in": "path", "required": true, "description": "Owner notification id.", "schema": { "type": "string" }, "index$": 0 }] } }, { strict: LIVE_STRICT, t }, 'TRUE' === process.env.VOXGIG_GETONLY_GUARD ? { "owner_notification.create.0": "GET-only live run: needs POST /v1/owner/notifications/{notification_id}/read" } : {});
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const owner_notification_ref01_ent = client.OwnerNotification();
        let owner_notification_ref01_data = setup.data.new.owner_notification['owner_notification_ref01'];
        owner_notification_ref01_data['notification_id'] = setup.idmap['notification01'];
        owner_notification_ref01_data = (await owner_notification_ref01_ent.create(owner_notification_ref01_data)).data();
        (0, node_assert_1.default)(null != owner_notification_ref01_data.id);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/owner_notification/OwnerNotificationTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LoppeeBusinessSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['owner_notification01', 'owner_notification02', 'owner_notification03', 'notification01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LOPPEE_BUSINESS_TEST_OWNER_NOTIFICATION_ENTID': idmap,
        'LOPPEE_BUSINESS_TEST_LIVE': 'FALSE',
        'LOPPEE_BUSINESS_TEST_EXPLAIN': 'FALSE',
        'LOPPEE_BUSINESS_APIKEY': '',
    });
    idmap = env['LOPPEE_BUSINESS_TEST_OWNER_NOTIFICATION_ENTID'];
    const live = 'TRUE' === env.LOPPEE_BUSINESS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LOPPEE_BUSINESS_TEST_OWNER_NOTIFICATION_ENTID'];
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
//# sourceMappingURL=OwnerNotificationEntity.test.js.map