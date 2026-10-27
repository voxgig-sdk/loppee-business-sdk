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
(0, node_test_1.describe)('ModeratedActionEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LOPPEE_BUSINESS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LOPPEE_BUSINESS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LoppeeBusinessSDK.test();
        const ent = testsdk.ModeratedAction();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.LoppeeBusinessSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.ModeratedAction().load({ "body": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LOPPEE_BUSINESS_TEST_LIVE;
        for (const op of ['create', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'moderated_action.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "actions": { "a": true, "h": "Actions", "n": "actions", "r": true, "t": "`$ARRAY`", "union": { "branches": 2, "count": 1, "depth": 1 }, "key$": "actions", "index$": 0 }, "body": { "a": true, "h": "Body", "n": "body", "r": true, "t": "`$STRING`", "key$": "body", "index$": 1 }, "client_request_id": { "a": true, "h": "Client Request Id", "n": "client_request_id", "r": false, "t": "`$STRING`", "key$": "client_request_id", "index$": 2 }, "content_type": { "a": true, "h": "Content Type", "n": "content_type", "r": true, "t": "`$STRING`", "key$": "content_type", "index$": 3 }, "continuation": { "a": true, "h": "Continuation", "n": "continuation", "op": { "create": { "req": false, "type": "`$ANY`" } }, "r": true, "sh": "The continuation from the previous response, sent back unchanged to get the next results.", "t": "`$ANY`", "key$": "continuation", "index$": 4 }, "coordinates_returned": { "a": true, "h": "Coordinates Returned", "n": "coordinates_returned", "r": true, "t": "`$BOOLEAN`", "key$": "coordinates_returned", "index$": 5 }, "disclosure": { "a": true, "h": "Disclosure", "n": "disclosure", "r": true, "t": "`$STRING`", "key$": "disclosure", "index$": 6 }, "enabled": { "a": true, "h": "Enabled", "n": "enabled", "r": true, "t": "`$BOOLEAN`", "key$": "enabled", "index$": 7 }, "file_sha256": { "a": true, "h": "File Sha256", "n": "file_sha256", "r": true, "t": "`$STRING`", "key$": "file_sha256", "index$": 8 }, "has_more": { "a": true, "h": "Has More", "n": "has_more", "r": true, "t": "`$BOOLEAN`", "key$": "has_more", "index$": 9 }, "human_confirmation": { "a": true, "h": "Human Confirmation", "n": "human_confirmation", "r": false, "t": "`$BOOLEAN`", "key$": "human_confirmation", "index$": 10 }, "intent_id": { "a": true, "h": "Intent Id", "n": "intent_id", "r": true, "t": "`$STRING`", "key$": "intent_id", "index$": 11 }, "kind": { "a": true, "h": "Kind", "n": "kind", "r": false, "t": "`$STRING`", "key$": "kind", "index$": 12 }, "knowledgeVersion": { "a": true, "h": "Knowledge Version", "n": "knowledgeVersion", "r": true, "t": "`$STRING`", "key$": "knowledgeVersion", "index$": 13 }, "limits": { "a": true, "h": "Limits", "n": "limits", "r": true, "t": "`$OBJECT`", "key$": "limits", "index$": 14 }, "links": { "a": true, "h": "Links", "n": "links", "r": true, "t": "`$ARRAY`", "key$": "links", "index$": 15 }, "location": { "a": true, "h": "Location", "n": "location", "op": { "create": { "req": false, "type": "`$ANY`" } }, "r": true, "sh": "An opaque location reference from the website's own location controls.", "t": "`$OBJECT`", "key$": "location", "index$": 16 }, "message": { "a": true, "h": "Message", "n": "message", "r": false, "t": "`$STRING`", "key$": "message", "index$": 17 }, "messages": { "a": true, "h": "Messages", "n": "messages", "r": true, "t": "`$ARRAY`", "key$": "messages", "index$": 18 }, "mode": { "a": true, "h": "Mode", "n": "mode", "r": true, "sh": "fallback: a direct search answered because the language model was unavailable.", "t": "`$STRING`", "key$": "mode", "index$": 19 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "t": "`$STRING`", "key$": "name", "index$": 20 }, "needsHuman": { "a": true, "h": "Needs Human", "n": "needsHuman", "r": true, "t": "`$BOOLEAN`", "key$": "needsHuman", "index$": 21 }, "policy": { "a": true, "h": "Policy", "n": "policy", "r": true, "sh": "Human schedule and separate claim-review policy.", "t": "`$OBJECT`", "key$": "policy", "index$": 22 }, "question": { "a": true, "h": "Question", "n": "question", "r": true, "t": "`$STRING`", "key$": "question", "index$": 23 }, "reply": { "a": true, "h": "Reply", "n": "reply", "r": true, "t": "`$STRING`", "key$": "reply", "index$": 24 }, "result": { "a": true, "h": "Result", "n": "result", "r": true, "t": "`$STRING`", "key$": "result", "index$": 25 }, "results": { "a": true, "h": "Results", "n": "results", "r": true, "t": "`$ARRAY`", "key$": "results", "index$": 26 }, "scan_authority_id": { "a": true, "fo": "uuid", "h": "Scan Authority Id", "n": "scan_authority_id", "r": true, "t": "`$STRING`", "key$": "scan_authority_id", "index$": 27 }, "scanner": { "a": true, "h": "Scanner", "n": "scanner", "r": true, "t": "`$STRING`", "key$": "scanner", "index$": 28 }, "scanner_version": { "a": true, "h": "Scanner Version", "n": "scanner_version", "r": true, "t": "`$STRING`", "key$": "scanner_version", "index$": 29 }, "schema_version": { "a": true, "h": "Schema Version", "n": "schema_version", "r": true, "t": "`$STRING`", "key$": "schema_version", "index$": 30 }, "searcher_latitude": { "a": true, "h": "Searcher Latitude", "n": "searcher_latitude", "r": false, "t": "`$NUMBER`", "key$": "searcher_latitude", "index$": 31 }, "searcher_longitude": { "a": true, "h": "Searcher Longitude", "n": "searcher_longitude", "r": false, "t": "`$NUMBER`", "key$": "searcher_longitude", "index$": 32 }, "signature": { "a": true, "h": "Signature", "n": "signature", "r": false, "t": "`$STRING`", "key$": "signature", "index$": 33 }, "signed_in": { "a": true, "h": "Signed In", "n": "signed_in", "r": true, "t": "`$BOOLEAN`", "key$": "signed_in", "index$": 34 }, "size_bytes": { "a": true, "h": "Size Bytes", "n": "size_bytes", "r": true, "t": "`$NUMBER`", "key$": "size_bytes", "index$": 35 }, "subject": { "a": true, "h": "Subject", "n": "subject", "r": false, "t": "`$STRING`", "key$": "subject", "index$": 36 }, "target_business_id": { "a": true, "h": "Target Business Id", "n": "target_business_id", "r": true, "t": "`$STRING`", "key$": "target_business_id", "index$": 37 }, "topic": { "a": true, "h": "Topic", "n": "topic", "r": true, "t": "`$STRING`", "key$": "topic", "index$": 38 } }, "name": "moderated_action", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["client_request_id", "human_confirmation", "kind", "message", "searcher_latitude", "searcher_longitude", "subject", "target_business_id"], "co": { "id": "POST /v1/actions/contact-attempt", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/v1/actions/contact-attempt", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v1" }, { "lit": "actions" }, { "lit": "contact-attempt" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "bf": ["continuation", "location", "messages"], "co": { "id": "POST /v1/assistant/chat", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/v1/assistant/chat", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v1" }, { "lit": "assistant" }, { "lit": "chat" }], "t": { "req": { "continuation": "`reqdata.continuation`", "location": "`reqdata.location`", "messages": "`reqdata.message`" }, "res": "`body`" }, "index$": 1 }, { "a": true, "bf": ["content_type", "file_sha256", "intent_id", "result", "scan_authority_id", "scanner", "scanner_version", "signature", "size_bytes"], "co": { "id": "POST /v1/internal/jobs/resume-scan-results", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/v1/internal/jobs/resume-scan-results", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v1" }, { "lit": "internal" }, { "lit": "jobs" }, { "lit": "resume-scan-results" }], "t": { "req": { "content_type": "`reqdata.content_type`", "file_sha256": "`reqdata.file_sha256`", "intent_id": "`reqdata.intent_id`", "result": "`reqdata.result`", "scan_authority_id": "`reqdata.scan_authority_id`", "scanner": "`reqdata.scanner`", "scanner_version": "`reqdata.scanner_version`", "signature": "`reqdata.signature`", "size_bytes": "`reqdata.size_byte`" }, "res": "`body`" }, "index$": 2 }, { "a": true, "bf": ["file_sha256", "intent_id", "result", "scanner", "scanner_version", "signature"], "co": { "id": "POST /v1/internal/owner-evidence/scan-results", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/v1/internal/owner-evidence/scan-results", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v1" }, { "lit": "internal" }, { "lit": "owner-evidence" }, { "lit": "scan-results" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 3 }, { "a": true, "bf": false, "co": { "id": "POST /v1/stripe/webhook", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/v1/stripe/webhook", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v1" }, { "lit": "stripe" }, { "lit": "webhook" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 4 }, { "a": true, "bf": ["question"], "co": { "id": "POST /v1/support/guide/help", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/v1/support/guide/help", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v1" }, { "lit": "support" }, { "lit": "guide" }, { "lit": "help" }], "t": { "req": { "question": "`reqdata.question`" }, "res": "`body`" }, "index$": 5 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /v1/assistant/native/status", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/v1/assistant/native/status", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v1" }, { "lit": "assistant" }, { "lit": "native" }, { "lit": "status" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /v1/assistant/status", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/v1/assistant/status", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v1" }, { "lit": "assistant" }, { "lit": "status" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "GET /v1/support/guide", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/v1/support/guide", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v1" }, { "lit": "support" }, { "lit": "guide" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "moderated_action", "name__orig": "moderated_action", "Name": "ModeratedAction", "name_": "moderated_action", "name-": "moderated-action", "NAME": "MODERATED_ACTION", "index$": 37 }, { "active": true, "entity": "moderated_action", "key$": "BasicModeratedActionFlow", "kind": "basic", "name": "BasicModeratedActionFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "moderated_action_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "moderated_action_ref01", "srcdatavar": "moderated_action_ref01_data", "suffix": "_dt0" }, "m": {}, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-moderated_action_ref01" } }], "index$": 1 }] }, 'ModeratedAction', { "POST /v1/actions/contact-attempt": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "additionalProperties": true, "required": ["target_business_id"], "properties": { "target_business_id": { "type": "string", "key$": "target_business_id" }, "kind": { "type": "string", "enum": ["quote_request", "call_request", "booking_request"], "key$": "kind" }, "client_request_id": { "type": "string", "maxLength": 160, "key$": "client_request_id" }, "subject": { "type": "string", "key$": "subject" }, "message": { "type": "string", "key$": "message" }, "human_confirmation": { "type": "boolean", "key$": "human_confirmation" }, "searcher_latitude": { "type": "number", "minimum": -90, "maximum": 90, "key$": "searcher_latitude" }, "searcher_longitude": { "type": "number", "minimum": -180, "maximum": 180, "key$": "searcher_longitude" } }, "dependentRequired": { "searcher_latitude": ["searcher_longitude"], "searcher_longitude": ["searcher_latitude"] }, "index$": 1 } } } }, "parameters": [] }, "POST /v1/assistant/chat": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "additionalProperties": false, "required": ["messages"], "properties": { "messages": { "type": "array", "minItems": 1, "maxItems": 12, "items": { "type": "object", "additionalProperties": false, "required": ["role", "content"], "properties": { "role": { "type": "string", "enum": [] }, "content": { "type": "string", "minLength": 1, "maxLength": 2000 } } }, "key$": "messages" }, "location": { "description": "An opaque location reference from the website's own location controls. Omit or send null when no location is chosen.", "oneOf": [{ "type": "null" }, { "type": "object", "additionalProperties": false, "required": ["kind", "location_proof_id"], "properties": { "kind": {}, "location_proof_id": {} } }, { "type": "object", "additionalProperties": false, "required": ["kind", "saved_location_ref"], "properties": { "kind": {}, "saved_location_ref": {} } }], "key$": "location" }, "continuation": { "description": "The continuation from the previous response, sent back unchanged to get the next results.", "oneOf": [{ "type": "null" }, { "type": "object", "additionalProperties": false, "required": ["search", "cursor"], "properties": { "search": {}, "cursor": {} } }], "key$": "continuation" } }, "index$": 1 } } } }, "parameters": [] }, "POST /v1/internal/jobs/resume-scan-results": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "additionalProperties": false, "required": ["intent_id", "scan_authority_id", "result", "scanner", "scanner_version", "file_sha256", "content_type", "size_bytes"], "properties": { "intent_id": { "type": "string", "pattern": "^jrui_[0-9a-fA-F-]{36}$", "key$": "intent_id" }, "scan_authority_id": { "type": "string", "format": "uuid", "key$": "scan_authority_id" }, "result": { "type": "string", "enum": ["clean", "infected", "error"], "key$": "result" }, "scanner": { "type": "string", "enum": ["clamav"], "key$": "scanner" }, "scanner_version": { "type": "string", "minLength": 1, "maxLength": 160, "key$": "scanner_version" }, "file_sha256": { "type": "string", "pattern": "^[a-f0-9]{64}$", "key$": "file_sha256" }, "content_type": { "type": "string", "enum": ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"], "key$": "content_type" }, "size_bytes": { "type": "number", "minimum": 1, "maximum": 5242880, "key$": "size_bytes" }, "signature": { "type": "string", "maxLength": 256, "key$": "signature" } }, "index$": 1 } } } }, "parameters": [] }, "POST /v1/internal/owner-evidence/scan-results": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "additionalProperties": true, "required": ["intent_id", "result", "scanner", "scanner_version", "file_sha256"], "properties": { "intent_id": { "type": "string", "key$": "intent_id" }, "result": { "type": "string", "enum": ["clean", "infected", "error"], "key$": "result" }, "scanner": { "type": "string", "enum": ["clamav"], "key$": "scanner" }, "scanner_version": { "type": "string", "key$": "scanner_version" }, "file_sha256": { "type": "string", "pattern": "^[a-f0-9]{64}$", "key$": "file_sha256" }, "signature": { "type": "string", "key$": "signature" } }, "index$": 1 } } } }, "parameters": [] }, "POST /v1/stripe/webhook": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "description": "Raw Stripe event JSON. The Stripe-Signature header is required and verified before processing.", "additionalProperties": true, "index$": 1 } } } }, "parameters": [] }, "POST /v1/support/guide/help": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "additionalProperties": false, "required": ["question"], "properties": { "question": { "type": "string", "minLength": 1, "maxLength": 1000, "key$": "question" } }, "index$": 1 } } } }, "parameters": [] }, "GET /v1/assistant/native/status": { "protocol": "http", "parameters": [] }, "GET /v1/assistant/status": { "protocol": "http", "parameters": [] }, "GET /v1/support/guide": { "protocol": "http", "parameters": [] } }, { strict: LIVE_STRICT, t }, 'TRUE' === process.env.VOXGIG_GETONLY_GUARD ? { "moderated_action.create.0": "GET-only live run: needs POST /v1/actions/contact-attempt" } : {});
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const moderated_action_ref01_ent = client.ModeratedAction();
        let moderated_action_ref01_data = setup.data.new.moderated_action['moderated_action_ref01'];
        moderated_action_ref01_data = (await moderated_action_ref01_ent.create(moderated_action_ref01_data)).data();
        (0, node_assert_1.default)(null != moderated_action_ref01_data);
        // LOAD
        const moderated_action_ref01_match_dt0 = {};
        const moderated_action_ref01_data_dt0 = (await moderated_action_ref01_ent.load(moderated_action_ref01_match_dt0)).data();
        (0, node_assert_1.default)(null != moderated_action_ref01_data_dt0);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/moderated_action/ModeratedActionTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LoppeeBusinessSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['moderated_action01', 'moderated_action02', 'moderated_action03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LOPPEE_BUSINESS_TEST_MODERATED_ACTION_ENTID': idmap,
        'LOPPEE_BUSINESS_TEST_LIVE': 'FALSE',
        'LOPPEE_BUSINESS_TEST_EXPLAIN': 'FALSE',
        'LOPPEE_BUSINESS_APIKEY': '',
    });
    idmap = env['LOPPEE_BUSINESS_TEST_MODERATED_ACTION_ENTID'];
    const live = 'TRUE' === env.LOPPEE_BUSINESS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LOPPEE_BUSINESS_TEST_MODERATED_ACTION_ENTID'];
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
//# sourceMappingURL=ModeratedActionEntity.test.js.map