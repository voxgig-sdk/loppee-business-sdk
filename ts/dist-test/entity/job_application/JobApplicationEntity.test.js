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
(0, node_test_1.describe)('JobApplicationEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LOPPEE_BUSINESS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LOPPEE_BUSINESS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LoppeeBusinessSDK.test();
        const ent = testsdk.JobApplication();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.LoppeeBusinessSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.JobApplication().create({ "account_id": 1, "job_id": "x", "resume": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LOPPEE_BUSINESS_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'job_application.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "account_id": { "a": true, "h": "Account Id", "n": "account_id", "op": { "create": { "req": false, "type": "`$STRING`" } }, "r": true, "t": "`$STRING`", "key$": "account_id", "index$": 0 }, "already_withdrawn": { "a": true, "h": "Already Withdrawn", "n": "already_withdrawn", "r": false, "t": "`$BOOLEAN`", "key$": "already_withdrawn", "index$": 1 }, "application": { "a": true, "h": "Application", "n": "application", "r": true, "t": "`$OBJECT`", "key$": "application", "index$": 2 }, "applications": { "a": true, "h": "Applications", "n": "applications", "r": true, "t": "`$ARRAY`", "key$": "applications", "index$": 3 }, "billing": { "a": true, "h": "Billing", "n": "billing", "r": true, "t": "`$OBJECT`", "key$": "billing", "index$": 4 }, "business_id": { "a": true, "h": "Business Id", "n": "business_id", "r": false, "t": "`$STRING`", "key$": "business_id", "index$": 5 }, "count": { "a": true, "h": "Count", "n": "count", "r": true, "t": "`$NUMBER`", "key$": "count", "index$": 6 }, "cover_note": { "a": true, "h": "Cover Note", "n": "cover_note", "r": false, "t": "`$STRING`", "key$": "cover_note", "index$": 7 }, "free_to_apply": { "a": true, "h": "Free To Apply", "n": "free_to_apply", "r": false, "t": "`$BOOLEAN`", "key$": "free_to_apply", "index$": 8 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 9 }, "job_id": { "a": true, "h": "Job Id", "n": "job_id", "r": true, "t": "`$STRING`", "key$": "job_id", "index$": 10 }, "limit": { "a": true, "h": "Limit", "n": "limit", "op": { "create": { "req": false, "type": "`$NUMBER`" } }, "r": true, "t": "`$NUMBER`", "key$": "limit", "index$": 11 }, "offset": { "a": true, "h": "Offset", "n": "offset", "op": { "create": { "req": false, "type": "`$NUMBER`" } }, "r": true, "t": "`$NUMBER`", "key$": "offset", "index$": 12 }, "resume": { "a": true, "h": "Resume", "n": "resume", "r": true, "t": "`$OBJECT`", "key$": "resume", "index$": 13 }, "retention_note": { "a": true, "h": "Retention Note", "n": "retention_note", "r": false, "t": "`$STRING`", "key$": "retention_note", "index$": 14 }, "status": { "a": true, "h": "Status", "n": "status", "op": { "create": { "req": false, "type": "`$ANY`" } }, "r": true, "t": "`$STRING`", "key$": "status", "index$": 15 } }, "id": { "field": "id", "name": "id" }, "name": "job_application", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["cover_note", "resume"], "co": { "id": "POST /v1/jobs/{job_id}/apply", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "job_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/v1/jobs/{job_id}/apply", "q": { "$action": "apply", "exist": ["id"] }, "r": { "param": { "job_id": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v1" }, { "lit": "jobs" }, { "var": "id" }, { "lit": "apply" }], "t": { "req": { "cover_note": "`reqdata.cover_note`", "resume": "`reqdata.resume`" }, "res": "`body`" }, "index$": 0 }, { "a": true, "bf": ["status"], "co": { "id": "POST /v1/owner/job-applications/{application_id}/status", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "application_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/v1/owner/job-applications/{application_id}/status", "q": { "$action": "status", "exist": ["id"] }, "r": { "param": { "application_id": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v1" }, { "lit": "owner" }, { "lit": "job-applications" }, { "var": "id" }, { "lit": "status" }], "t": { "req": { "status": "`reqdata.status`" }, "res": "`body`" }, "index$": 1 }, { "a": true, "bf": false, "co": { "id": "POST /v1/account/job-applications/{application_id}/withdraw", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "application_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/v1/account/job-applications/{application_id}/withdraw", "q": { "$action": "withdraw", "exist": ["id"] }, "r": { "param": { "application_id": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v1" }, { "lit": "account" }, { "lit": "job-applications" }, { "var": "id" }, { "lit": "withdraw" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }, { "a": true, "bf": ["account_id", "cover_note", "job_id", "resume"], "co": { "id": "POST /v1/actions/job-application", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/v1/actions/job-application", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v1" }, { "lit": "actions" }, { "lit": "job-application" }], "t": { "req": { "account_id": "`reqdata.account_id`", "cover_note": "`reqdata.cover_note`", "job_id": "`reqdata.job_id`", "resume": "`reqdata.resume`" }, "res": "`body`" }, "index$": 3 }, { "a": true, "bf": ["account_id", "limit", "offset", "status"], "co": { "id": "POST /v1/actions/list-my-job-applications", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/v1/actions/list-my-job-applications", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v1" }, { "lit": "actions" }, { "lit": "list-my-job-applications" }], "t": { "req": { "account_id": "`reqdata.account_id`", "limit": "`reqdata.limit`", "offset": "`reqdata.offset`", "status": "`reqdata.status`" }, "res": "`body`" }, "index$": 4 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "job_application", "name__orig": "job_application", "Name": "JobApplication", "name_": "job_application", "name-": "job-application", "NAME": "JOB_APPLICATION", "index$": 33 }, { "active": true, "entity": "job_application", "key$": "BasicJobApplicationFlow", "kind": "basic", "name": "BasicJobApplicationFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "job_application_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'JobApplication', { "POST /v1/jobs/{job_id}/apply": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "required": ["resume"], "additionalProperties": false, "properties": { "cover_note": { "type": "string", "maxLength": 4000 }, "resume": { "type": "object", "required": ["file_name", "content_type", "size_bytes", "data_base64"], "additionalProperties": false, "properties": { "file_name": { "type": "string" }, "content_type": { "enum": ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"] }, "size_bytes": { "type": "number", "minimum": 1, "maximum": 5242880 }, "data_base64": { "type": "string" } }, "x-ref": "#/components/schemas/JobResumeUpload" } }, "x-ref": "#/components/schemas/JobApplicationRequest" } } } }, "parameters": [{ "name": "job_id", "in": "path", "required": true, "description": "Loppee job posting id.", "schema": { "type": "string" }, "index$": 0 }] }, "POST /v1/owner/job-applications/{application_id}/status": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "required": ["status"], "additionalProperties": false, "properties": { "status": { "enum": ["viewed", "shortlisted", "rejected", "hired"] } }, "x-ref": "#/components/schemas/JobApplicationStatusRequest" } } } }, "parameters": [{ "name": "application_id", "in": "path", "required": true, "description": "Job application id.", "schema": { "type": "string" }, "index$": 0 }] }, "POST /v1/account/job-applications/{application_id}/withdraw": { "protocol": "http", "requestBody": { "required": false, "content": { "application/json": { "schema": { "type": "object", "maxProperties": 0, "additionalProperties": false, "x-ref": "#/components/schemas/EmptyRequest" } } } }, "parameters": [{ "name": "application_id", "in": "path", "required": true, "description": "Job application id.", "schema": { "type": "string" }, "index$": 0 }] }, "POST /v1/actions/job-application": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "required": ["account_id", "job_id", "resume"], "additionalProperties": false, "properties": { "account_id": { "type": "string", "key$": "account_id" }, "job_id": { "type": "string", "key$": "job_id" }, "cover_note": { "type": "string", "maxLength": 4000, "key$": "cover_note" }, "resume": { "type": "object", "required": ["file_name", "content_type", "size_bytes", "data_base64"], "additionalProperties": false, "properties": { "file_name": { "type": "string" }, "content_type": { "enum": ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"] }, "size_bytes": { "type": "number", "minimum": 1, "maximum": 5242880 }, "data_base64": { "type": "string" } }, "x-ref": "#/components/schemas/JobResumeUpload", "key$": "resume" } }, "x-ref": "#/components/schemas/AgentJobApplicationRequest", "index$": 1 } } } }, "parameters": [] }, "POST /v1/actions/list-my-job-applications": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "required": ["account_id"], "additionalProperties": false, "properties": { "account_id": { "type": "string", "minLength": 1, "key$": "account_id" }, "status": { "enum": ["submitted", "viewed", "shortlisted", "rejected", "hired", "withdrawn"], "key$": "status" }, "limit": { "type": "number", "minimum": 1, "maximum": 100, "key$": "limit" }, "offset": { "type": "number", "minimum": 0, "maximum": 10000, "key$": "offset" } }, "x-ref": "#/components/schemas/ListMyJobApplicationsRequest", "index$": 1 } } } }, "parameters": [] } }, { strict: LIVE_STRICT, t }, 'TRUE' === process.env.VOXGIG_GETONLY_GUARD ? { "job_application.create.0": "GET-only live run: needs POST /v1/jobs/{job_id}/apply" } : {});
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const job_application_ref01_ent = client.JobApplication();
        let job_application_ref01_data = setup.data.new.job_application['job_application_ref01'];
        job_application_ref01_data = (await job_application_ref01_ent.create(job_application_ref01_data)).data();
        (0, node_assert_1.default)(null != job_application_ref01_data.id);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/job_application/JobApplicationTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LoppeeBusinessSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['job_application01', 'job_application02', 'job_application03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LOPPEE_BUSINESS_TEST_JOB_APPLICATION_ENTID': idmap,
        'LOPPEE_BUSINESS_TEST_LIVE': 'FALSE',
        'LOPPEE_BUSINESS_TEST_EXPLAIN': 'FALSE',
        'LOPPEE_BUSINESS_APIKEY': '',
    });
    idmap = env['LOPPEE_BUSINESS_TEST_JOB_APPLICATION_ENTID'];
    const live = 'TRUE' === env.LOPPEE_BUSINESS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LOPPEE_BUSINESS_TEST_JOB_APPLICATION_ENTID'];
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
//# sourceMappingURL=JobApplicationEntity.test.js.map