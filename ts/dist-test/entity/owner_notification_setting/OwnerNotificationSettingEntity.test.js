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
(0, node_test_1.describe)('OwnerNotificationSettingEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LOPPEE_BUSINESS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LOPPEE_BUSINESS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LoppeeBusinessSDK.test();
        const ent = testsdk.OwnerNotificationSetting();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.LoppeeBusinessSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.OwnerNotificationSetting().create({ "business_id": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LOPPEE_BUSINESS_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'owner_notification_setting.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "businessId": { "a": true, "h": "Business Id", "n": "businessId", "r": true, "t": "`$STRING`", "key$": "businessId", "index$": 0 }, "business_id": { "a": true, "h": "Business Id", "n": "business_id", "r": false, "t": "`$STRING`", "key$": "business_id", "index$": 1 }, "createdAt": { "a": true, "h": "Created At", "n": "createdAt", "r": true, "t": "`$STRING`", "key$": "createdAt", "index$": 2 }, "emailEnabled": { "a": true, "h": "Email Enabled", "n": "emailEnabled", "r": true, "t": "`$BOOLEAN`", "key$": "emailEnabled", "index$": 3 }, "email_enabled": { "a": true, "h": "Email Enabled", "n": "email_enabled", "r": false, "t": "`$BOOLEAN`", "key$": "email_enabled", "index$": 4 }, "eventTypeSubscriptions": { "a": true, "h": "Event Type Subscriptions", "n": "eventTypeSubscriptions", "r": true, "t": "`$ARRAY`", "key$": "eventTypeSubscriptions", "index$": 5 }, "event_types": { "a": true, "h": "Event Types", "n": "event_types", "r": false, "t": "`$ARRAY`", "key$": "event_types", "index$": 6 }, "updatedAt": { "a": true, "h": "Updated At", "n": "updatedAt", "r": true, "t": "`$STRING`", "key$": "updatedAt", "index$": 7 }, "webhookEnabled": { "a": true, "h": "Webhook Enabled", "n": "webhookEnabled", "r": true, "t": "`$BOOLEAN`", "key$": "webhookEnabled", "index$": 8 }, "webhook_enabled": { "a": true, "h": "Webhook Enabled", "n": "webhook_enabled", "r": false, "t": "`$BOOLEAN`", "key$": "webhook_enabled", "index$": 9 } }, "name": "owner_notification_setting", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["business_id", "email_enabled", "event_types", "webhook_enabled"], "co": { "id": "POST /v1/owner/notification-settings", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/v1/owner/notification-settings", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v1" }, { "lit": "owner" }, { "lit": "notification-settings" }], "t": { "req": { "business_id": "`reqdata.business_id`", "email_enabled": "`reqdata.email_enabled`", "event_types": "`reqdata.event_type`", "webhook_enabled": "`reqdata.webhook_enabled`" }, "res": "`body.settings`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "owner_notification_setting", "name__orig": "owner_notification_setting", "Name": "OwnerNotificationSetting", "name_": "owner_notification_setting", "name-": "owner-notification-setting", "NAME": "OWNER_NOTIFICATION_SETTING", "index$": 41 }, { "active": true, "entity": "owner_notification_setting", "key$": "BasicOwnerNotificationSettingFlow", "kind": "basic", "name": "BasicOwnerNotificationSettingFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "owner_notification_setting_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'OwnerNotificationSetting', { "POST /v1/owner/notification-settings": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "additionalProperties": false, "properties": { "business_id": { "type": "string", "key$": "business_id" }, "email_enabled": { "type": "boolean", "key$": "email_enabled" }, "webhook_enabled": { "type": "boolean", "key$": "webhook_enabled" }, "event_types": { "type": "array", "items": { "type": "string" }, "key$": "event_types" } }, "x-ref": "#/components/schemas/OwnerNotificationSettingsRequest", "index$": 1 } } } }, "parameters": [] } }, { strict: LIVE_STRICT, t }, 'TRUE' === process.env.VOXGIG_GETONLY_GUARD ? { "owner_notification_setting.create.0": "GET-only live run: needs POST /v1/owner/notification-settings" } : {});
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const owner_notification_setting_ref01_ent = client.OwnerNotificationSetting();
        let owner_notification_setting_ref01_data = setup.data.new.owner_notification_setting['owner_notification_setting_ref01'];
        owner_notification_setting_ref01_data = (await owner_notification_setting_ref01_ent.create(owner_notification_setting_ref01_data)).data();
        (0, node_assert_1.default)(null != owner_notification_setting_ref01_data);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/owner_notification_setting/OwnerNotificationSettingTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LoppeeBusinessSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['owner_notification_setting01', 'owner_notification_setting02', 'owner_notification_setting03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LOPPEE_BUSINESS_TEST_OWNER_NOTIFICATION_SETTING_ENTID': idmap,
        'LOPPEE_BUSINESS_TEST_LIVE': 'FALSE',
        'LOPPEE_BUSINESS_TEST_EXPLAIN': 'FALSE',
        'LOPPEE_BUSINESS_APIKEY': '',
    });
    idmap = env['LOPPEE_BUSINESS_TEST_OWNER_NOTIFICATION_SETTING_ENTID'];
    const live = 'TRUE' === env.LOPPEE_BUSINESS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LOPPEE_BUSINESS_TEST_OWNER_NOTIFICATION_SETTING_ENTID'];
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
//# sourceMappingURL=OwnerNotificationSettingEntity.test.js.map