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
(0, node_test_1.describe)('AgentMonitoringEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LOPPEE_BUSINESS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LOPPEE_BUSINESS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LoppeeBusinessSDK.test();
        const ent = testsdk.AgentMonitoring();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.LoppeeBusinessSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.AgentMonitoring().load({ "build_sha": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LOPPEE_BUSINESS_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'agent_monitoring.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "build_sha": { "a": true, "h": "Build Sha", "n": "build_sha", "r": true, "t": "`$STRING`", "key$": "build_sha", "index$": 0 }, "contract_version": { "a": true, "h": "Contract Version", "n": "contract_version", "r": true, "t": "`$STRING`", "key$": "contract_version", "index$": 1 }, "generated_at": { "a": true, "fo": "date-time", "h": "Generated At", "n": "generated_at", "r": true, "t": "`$STRING`", "key$": "generated_at", "index$": 2 }, "health_url": { "a": true, "h": "Health Url", "n": "health_url", "r": true, "t": "`$STRING`", "key$": "health_url", "index$": 3 }, "integration_package_url": { "a": true, "h": "Integration Package Url", "n": "integration_package_url", "r": true, "t": "`$STRING`", "key$": "integration_package_url", "index$": 4 }, "mcp_url": { "a": true, "h": "Mcp Url", "n": "mcp_url", "r": true, "t": "`$STRING`", "key$": "mcp_url", "index$": 5 }, "metrics": { "a": true, "h": "Metrics", "n": "metrics", "r": true, "t": "`$OBJECT`", "key$": "metrics", "index$": 6 }, "openapi_url": { "a": true, "h": "Openapi Url", "n": "openapi_url", "r": true, "t": "`$STRING`", "key$": "openapi_url", "index$": 7 }, "rate_limits": { "a": true, "h": "Rate Limits", "n": "rate_limits", "r": true, "t": "`$OBJECT`", "key$": "rate_limits", "index$": 8 }, "registry_name": { "a": true, "h": "Registry Name", "n": "registry_name", "r": true, "t": "`$ANY`", "key$": "registry_name", "index$": 9 }, "schema_version": { "a": true, "h": "Schema Version", "n": "schema_version", "r": true, "t": "`$STRING`", "key$": "schema_version", "index$": 10 }, "service": { "a": true, "h": "Service", "n": "service", "r": true, "t": "`$STRING`", "key$": "service", "index$": 11 }, "uptime_seconds": { "a": true, "h": "Uptime Seconds", "n": "uptime_seconds", "r": true, "t": "`$NUMBER`", "key$": "uptime_seconds", "index$": 12 }, "version": { "a": true, "h": "Version", "n": "version", "r": true, "t": "`$STRING`", "key$": "version", "index$": 13 } }, "name": "agent_monitoring", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /v1/agent-monitoring.json", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/v1/agent-monitoring.json", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v1" }, { "lit": "agent-monitoring.json" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "agent_monitoring", "name__orig": "agent_monitoring", "Name": "AgentMonitoring", "name_": "agent_monitoring", "name-": "agent-monitoring", "NAME": "AGENT_MONITORING", "index$": 4 }, { "active": true, "entity": "agent_monitoring", "key$": "BasicAgentMonitoringFlow", "kind": "basic", "name": "BasicAgentMonitoringFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "agent_monitoring_ref01", "srcdatavar": "agent_monitoring_ref01_data", "suffix": "_dt0" }, "m": {}, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-agent_monitoring_ref01" } }], "index$": 0 }] }, 'AgentMonitoring', { "GET /v1/agent-monitoring.json": { "protocol": "http", "parameters": [] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let agent_monitoring_ref01_data = Object.values(setup.data.existing.agent_monitoring)[0];
        // LOAD
        const agent_monitoring_ref01_ent = client.AgentMonitoring();
        const agent_monitoring_ref01_match_dt0 = {};
        const agent_monitoring_ref01_data_dt0 = (await agent_monitoring_ref01_ent.load(agent_monitoring_ref01_match_dt0)).data();
        (0, node_assert_1.default)(null != agent_monitoring_ref01_data_dt0);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/agent_monitoring/AgentMonitoringTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LoppeeBusinessSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['agent_monitoring01', 'agent_monitoring02', 'agent_monitoring03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LOPPEE_BUSINESS_TEST_AGENT_MONITORING_ENTID': idmap,
        'LOPPEE_BUSINESS_TEST_LIVE': 'FALSE',
        'LOPPEE_BUSINESS_TEST_EXPLAIN': 'FALSE',
        'LOPPEE_BUSINESS_APIKEY': '',
    });
    idmap = env['LOPPEE_BUSINESS_TEST_AGENT_MONITORING_ENTID'];
    const live = 'TRUE' === env.LOPPEE_BUSINESS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LOPPEE_BUSINESS_TEST_AGENT_MONITORING_ENTID'];
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
//# sourceMappingURL=AgentMonitoringEntity.test.js.map