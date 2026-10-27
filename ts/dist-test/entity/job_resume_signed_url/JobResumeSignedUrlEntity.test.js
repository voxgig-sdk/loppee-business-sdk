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
(0, node_test_1.describe)('JobResumeSignedUrlEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LOPPEE_BUSINESS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LOPPEE_BUSINESS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LoppeeBusinessSDK.test();
        const ent = testsdk.JobResumeSignedUrl();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.LoppeeBusinessSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.JobResumeSignedUrl().create({ "job_application_id": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LOPPEE_BUSINESS_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'job_resume_signed_url.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "application_id": { "a": true, "h": "Application Id", "n": "application_id", "r": true, "t": "`$STRING`", "key$": "application_id", "index$": 0 }, "content_type": { "a": true, "h": "Content Type", "n": "content_type", "r": true, "t": "`$STRING`", "key$": "content_type", "index$": 1 }, "expires_in_seconds": { "a": true, "h": "Expires In Seconds", "n": "expires_in_seconds", "r": true, "t": "`$NUMBER`", "key$": "expires_in_seconds", "index$": 2 }, "resume_file_name": { "a": true, "h": "Resume File Name", "n": "resume_file_name", "r": true, "t": "`$STRING`", "key$": "resume_file_name", "index$": 3 }, "signed_url": { "a": true, "h": "Signed Url", "n": "signed_url", "r": true, "t": "`$STRING`", "key$": "signed_url", "index$": 4 }, "size_bytes": { "a": true, "h": "Size Bytes", "n": "size_bytes", "r": true, "t": "`$NUMBER`", "key$": "size_bytes", "index$": 5 }, "status": { "a": true, "h": "Status", "n": "status", "r": true, "t": "`$ANY`", "key$": "status", "index$": 6 } }, "name": "job_resume_signed_url", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": false, "co": { "id": "POST /v1/account/job-applications/{application_id}/resume-url", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "job_application_id", "or": "application_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/v1/account/job-applications/{application_id}/resume-url", "q": { "exist": ["job_application_id"] }, "r": { "param": { "application_id": "job_application_id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v1" }, { "lit": "account" }, { "lit": "job-applications" }, { "var": "job_application_id" }, { "lit": "resume-url" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "bf": false, "co": { "id": "POST /v1/owner/job-applications/{application_id}/resume-url", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "job_application_id", "or": "application_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/v1/owner/job-applications/{application_id}/resume-url", "q": { "exist": ["job_application_id"] }, "r": { "param": { "application_id": "job_application_id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v1" }, { "lit": "owner" }, { "lit": "job-applications" }, { "var": "job_application_id" }, { "lit": "resume-url" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "create" } }, "relations": { "ancestors": [["$.main.kit.entity.job_application"]] }, "key$": "job_resume_signed_url", "name__orig": "job_resume_signed_url", "Name": "JobResumeSignedUrl", "name_": "job_resume_signed_url", "name-": "job-resume-signed-url", "NAME": "JOB_RESUME_SIGNED_URL", "index$": 34 }, { "active": true, "entity": "job_resume_signed_url", "key$": "BasicJobResumeSignedUrlFlow", "kind": "basic", "name": "BasicJobResumeSignedUrlFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "job_resume_signed_url_ref01" }, "m": { "job_application_id": "job_application01" }, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'JobResumeSignedUrl', { "POST /v1/account/job-applications/{application_id}/resume-url": { "protocol": "http", "requestBody": { "required": false, "content": { "application/json": { "schema": { "type": "object", "maxProperties": 0, "additionalProperties": false, "x-ref": "#/components/schemas/EmptyRequest", "index$": 1 } } } }, "parameters": [{ "name": "application_id", "in": "path", "required": true, "description": "Job application id.", "schema": { "type": "string" }, "index$": 0 }] }, "POST /v1/owner/job-applications/{application_id}/resume-url": { "protocol": "http", "requestBody": { "required": false, "content": { "application/json": { "schema": { "type": "object", "maxProperties": 0, "additionalProperties": false, "x-ref": "#/components/schemas/EmptyRequest", "index$": 1 } } } }, "parameters": [{ "name": "application_id", "in": "path", "required": true, "description": "Job application id.", "schema": { "type": "string" }, "index$": 0 }] } }, { strict: LIVE_STRICT, t }, 'TRUE' === process.env.VOXGIG_GETONLY_GUARD ? { "job_resume_signed_url.create.0": "GET-only live run: needs POST /v1/account/job-applications/{application_id}/resume-url" } : {});
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const job_resume_signed_url_ref01_ent = client.JobResumeSignedUrl();
        let job_resume_signed_url_ref01_data = setup.data.new.job_resume_signed_url['job_resume_signed_url_ref01'];
        job_resume_signed_url_ref01_data['job_application_id'] = setup.idmap['job_application01'];
        job_resume_signed_url_ref01_data = (await job_resume_signed_url_ref01_ent.create(job_resume_signed_url_ref01_data)).data();
        (0, node_assert_1.default)(null != job_resume_signed_url_ref01_data);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/job_resume_signed_url/JobResumeSignedUrlTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LoppeeBusinessSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['job_resume_signed_url01', 'job_resume_signed_url02', 'job_resume_signed_url03', 'job_application01', 'job_application02', 'job_application03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LOPPEE_BUSINESS_TEST_JOB_RESUME_SIGNED_URL_ENTID': idmap,
        'LOPPEE_BUSINESS_TEST_LIVE': 'FALSE',
        'LOPPEE_BUSINESS_TEST_EXPLAIN': 'FALSE',
        'LOPPEE_BUSINESS_APIKEY': '',
    });
    idmap = env['LOPPEE_BUSINESS_TEST_JOB_RESUME_SIGNED_URL_ENTID'];
    const live = 'TRUE' === env.LOPPEE_BUSINESS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LOPPEE_BUSINESS_TEST_JOB_RESUME_SIGNED_URL_ENTID'];
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
//# sourceMappingURL=JobResumeSignedUrlEntity.test.js.map