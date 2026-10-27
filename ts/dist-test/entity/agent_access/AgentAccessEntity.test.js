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
(0, node_test_1.describe)('AgentAccessEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LOPPEE_BUSINESS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LOPPEE_BUSINESS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LoppeeBusinessSDK.test();
        const ent = testsdk.AgentAccess();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.LoppeeBusinessSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.AgentAccess().create({ "agent_name": 1, "developer_email": "x", "organization_name": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LOPPEE_BUSINESS_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'agent_access.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "agent_name": { "a": true, "h": "Agent Name", "n": "agent_name", "r": true, "t": "`$STRING`", "key$": "agent_name", "index$": 0 }, "agent_type": { "a": true, "h": "Agent Type", "n": "agent_type", "r": false, "t": "`$STRING`", "key$": "agent_type", "index$": 1 }, "callback_url": { "a": true, "h": "Callback Url", "n": "callback_url", "r": false, "t": "`$STRING`", "key$": "callback_url", "index$": 2 }, "compliance_notes": { "a": true, "h": "Compliance Notes", "n": "compliance_notes", "r": false, "t": "`$STRING`", "key$": "compliance_notes", "index$": 3 }, "created_at": { "a": true, "h": "Created At", "n": "created_at", "r": true, "t": "`$STRING`", "key$": "created_at", "index$": 4 }, "data_needs": { "a": true, "h": "Data Needs", "n": "data_needs", "r": false, "t": "`$STRING`", "key$": "data_needs", "index$": 5 }, "developer_email": { "a": true, "h": "Developer Email", "n": "developer_email", "r": true, "t": "`$STRING`", "key$": "developer_email", "index$": 6 }, "operating_states": { "a": true, "h": "Operating States", "n": "operating_states", "r": false, "t": "`$ARRAY`", "key$": "operating_states", "index$": 7 }, "organization_name": { "a": true, "h": "Organization Name", "n": "organization_name", "r": true, "t": "`$STRING`", "key$": "organization_name", "index$": 8 }, "request_id": { "a": true, "h": "Request Id", "n": "request_id", "r": true, "t": "`$STRING`", "key$": "request_id", "index$": 9 }, "request_status": { "a": true, "h": "Request Status", "n": "request_status", "r": true, "t": "`$STRING`", "key$": "request_status", "index$": 10 }, "requested_actions": { "a": true, "h": "Requested Actions", "n": "requested_actions", "r": false, "t": "`$ARRAY`", "key$": "requested_actions", "index$": 11 }, "safety_contact": { "a": true, "h": "Safety Contact", "n": "safety_contact", "r": false, "t": "`$STRING`", "key$": "safety_contact", "index$": 12 }, "status": { "a": true, "h": "Status", "n": "status", "r": true, "t": "`$ANY`", "key$": "status", "index$": 13 }, "target_categories": { "a": true, "h": "Target Categories", "n": "target_categories", "r": false, "t": "`$ARRAY`", "key$": "target_categories", "index$": 14 }, "use_case": { "a": true, "h": "Use Case", "n": "use_case", "r": false, "t": "`$STRING`", "key$": "use_case", "index$": 15 }, "website": { "a": true, "h": "Website", "n": "website", "r": false, "t": "`$STRING`", "key$": "website", "index$": 16 } }, "name": "agent_access", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["agent_name", "agent_type", "callback_url", "compliance_notes", "data_needs", "developer_email", "operating_states", "organization_name", "requested_actions", "safety_contact", "target_categories", "use_case", "website"], "co": { "id": "POST /v1/actions/agent-access-request", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/v1/actions/agent-access-request", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v1" }, { "lit": "actions" }, { "lit": "agent-access-request" }], "t": { "req": { "agent_name": "`reqdata.agent_name`", "agent_type": "`reqdata.agent_type`", "callback_url": "`reqdata.callback_url`", "compliance_notes": "`reqdata.compliance_note`", "data_needs": "`reqdata.data_need`", "developer_email": "`reqdata.developer_email`", "operating_states": "`reqdata.operating_state`", "organization_name": "`reqdata.organization_name`", "requested_actions": "`reqdata.requested_action`", "safety_contact": "`reqdata.safety_contact`", "target_categories": "`reqdata.target_category`", "use_case": "`reqdata.use_case`", "website": "`reqdata.website`" }, "res": "`body`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "agent_access", "name__orig": "agent_access", "Name": "AgentAccess", "name_": "agent_access", "name-": "agent-access", "NAME": "AGENT_ACCESS", "index$": 0 }, { "active": true, "entity": "agent_access", "key$": "BasicAgentAccessFlow", "kind": "basic", "name": "BasicAgentAccessFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "agent_access_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'AgentAccess', { "POST /v1/actions/agent-access-request": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "required": ["organization_name", "agent_name", "developer_email"], "additionalProperties": false, "properties": { "organization_name": { "type": "string", "minLength": 1, "maxLength": 200, "key$": "organization_name" }, "agent_name": { "type": "string", "minLength": 1, "maxLength": 200, "key$": "agent_name" }, "agent_type": { "type": "string", "key$": "agent_type" }, "website": { "type": "string", "key$": "website" }, "developer_email": { "type": "string", "minLength": 1, "maxLength": 254, "key$": "developer_email" }, "use_case": { "type": "string", "key$": "use_case" }, "target_categories": { "type": "array", "items": { "type": "string" }, "key$": "target_categories" }, "operating_states": { "type": "array", "items": { "type": "string" }, "key$": "operating_states" }, "requested_actions": { "type": "array", "items": { "type": "string" }, "key$": "requested_actions" }, "callback_url": { "type": "string", "key$": "callback_url" }, "data_needs": { "type": "string", "key$": "data_needs" }, "safety_contact": { "type": "string", "key$": "safety_contact" }, "compliance_notes": { "type": "string", "key$": "compliance_notes" } }, "x-ref": "#/components/schemas/AgentAccessRequest", "index$": 1 } } } }, "parameters": [] } }, { strict: LIVE_STRICT, t }, 'TRUE' === process.env.VOXGIG_GETONLY_GUARD ? { "agent_access.create.0": "GET-only live run: needs POST /v1/actions/agent-access-request" } : {});
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const agent_access_ref01_ent = client.AgentAccess();
        let agent_access_ref01_data = setup.data.new.agent_access['agent_access_ref01'];
        agent_access_ref01_data = (await agent_access_ref01_ent.create(agent_access_ref01_data)).data();
        (0, node_assert_1.default)(null != agent_access_ref01_data);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/agent_access/AgentAccessTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LoppeeBusinessSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['agent_access01', 'agent_access02', 'agent_access03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LOPPEE_BUSINESS_TEST_AGENT_ACCESS_ENTID': idmap,
        'LOPPEE_BUSINESS_TEST_LIVE': 'FALSE',
        'LOPPEE_BUSINESS_TEST_EXPLAIN': 'FALSE',
        'LOPPEE_BUSINESS_APIKEY': '',
    });
    idmap = env['LOPPEE_BUSINESS_TEST_AGENT_ACCESS_ENTID'];
    const live = 'TRUE' === env.LOPPEE_BUSINESS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LOPPEE_BUSINESS_TEST_AGENT_ACCESS_ENTID'];
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
//# sourceMappingURL=AgentAccessEntity.test.js.map