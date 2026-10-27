"use strict";
// LoppeeBusiness Ts SDK
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.LoppeeBusinessSDK = exports.LoppeeBusinessEntityBase = exports.BaseFeature = exports.config = exports.stdutil = void 0;
const AgentAccessEntity_1 = require("./entity/AgentAccessEntity");
const AgentCapabilityEntity_1 = require("./entity/AgentCapabilityEntity");
const AgentConnectionTestEntity_1 = require("./entity/AgentConnectionTestEntity");
const AgentIntegrationEntity_1 = require("./entity/AgentIntegrationEntity");
const AgentMonitoringEntity_1 = require("./entity/AgentMonitoringEntity");
const AgentOpenapiEntity_1 = require("./entity/AgentOpenapiEntity");
const AgentPolicyEntity_1 = require("./entity/AgentPolicyEntity");
const AnonymousLocationProofRevocationEntity_1 = require("./entity/AnonymousLocationProofRevocationEntity");
const BusinessApplicationEntity_1 = require("./entity/BusinessApplicationEntity");
const BusinessClaimEntity_1 = require("./entity/BusinessClaimEntity");
const BusinessDealEntity_1 = require("./entity/BusinessDealEntity");
const BusinessIndexEntity_1 = require("./entity/BusinessIndexEntity");
const BusinessOwnerEntity_1 = require("./entity/BusinessOwnerEntity");
const BusinessReviewEntity_1 = require("./entity/BusinessReviewEntity");
const ChatAttachmentEntity_1 = require("./entity/ChatAttachmentEntity");
const ChatAttachmentUrlEntity_1 = require("./entity/ChatAttachmentUrlEntity");
const ClaimVerificationSendEntity_1 = require("./entity/ClaimVerificationSendEntity");
const ClaimVerificationVerifyEntity_1 = require("./entity/ClaimVerificationVerifyEntity");
const CommercialClickEntity_1 = require("./entity/CommercialClickEntity");
const ContactRecordedEntity_1 = require("./entity/ContactRecordedEntity");
const ConversationEntity_1 = require("./entity/ConversationEntity");
const ConversationCloseEntity_1 = require("./entity/ConversationCloseEntity");
const ConversationReportEntity_1 = require("./entity/ConversationReportEntity");
const ConversationWorkflowEntity_1 = require("./entity/ConversationWorkflowEntity");
const CreateAgentApiKeyEntity_1 = require("./entity/CreateAgentApiKeyEntity");
const CustomerEntity_1 = require("./entity/CustomerEntity");
const CustomerAccountEntity_1 = require("./entity/CustomerAccountEntity");
const CustomerLocationProofRevocationEntity_1 = require("./entity/CustomerLocationProofRevocationEntity");
const DestinationAddressSuggestionEntity_1 = require("./entity/DestinationAddressSuggestionEntity");
const DestinationLocationProofEntity_1 = require("./entity/DestinationLocationProofEntity");
const DomainTrustCardEntity_1 = require("./entity/DomainTrustCardEntity");
const GeoContextEntity_1 = require("./entity/GeoContextEntity");
const HealthEntity_1 = require("./entity/HealthEntity");
const JobApplicationEntity_1 = require("./entity/JobApplicationEntity");
const JobResumeSignedUrlEntity_1 = require("./entity/JobResumeSignedUrlEntity");
const LocationHandoffEntity_1 = require("./entity/LocationHandoffEntity");
const MessageEntity_1 = require("./entity/MessageEntity");
const ModeratedActionEntity_1 = require("./entity/ModeratedActionEntity");
const OpenApiDocumentEntity_1 = require("./entity/OpenApiDocumentEntity");
const OperationEntity_1 = require("./entity/OperationEntity");
const OwnerNotificationEntity_1 = require("./entity/OwnerNotificationEntity");
const OwnerNotificationSettingEntity_1 = require("./entity/OwnerNotificationSettingEntity");
const OwnerWebhookEndpointEntity_1 = require("./entity/OwnerWebhookEndpointEntity");
const OwnerWebhookRegistrationEntity_1 = require("./entity/OwnerWebhookRegistrationEntity");
const PricingEntity_1 = require("./entity/PricingEntity");
const PromoteVerifiedTransactionEntity_1 = require("./entity/PromoteVerifiedTransactionEntity");
const PublicContentEntity_1 = require("./entity/PublicContentEntity");
const RecommendEntity_1 = require("./entity/RecommendEntity");
const ReviewEntity_1 = require("./entity/ReviewEntity");
const RevokeEntity_1 = require("./entity/RevokeEntity");
const SaveBusinessEntity_1 = require("./entity/SaveBusinessEntity");
const SavedBusinessEntity_1 = require("./entity/SavedBusinessEntity");
const SavedLocationEntity_1 = require("./entity/SavedLocationEntity");
const SearchEntity_1 = require("./entity/SearchEntity");
const SuggestEntity_1 = require("./entity/SuggestEntity");
const SupportInternalNoteEntity_1 = require("./entity/SupportInternalNoteEntity");
const SupportWorkflowEntity_1 = require("./entity/SupportWorkflowEntity");
const TaxonomySuggestionEntity_1 = require("./entity/TaxonomySuggestionEntity");
const TrustCardEntity_1 = require("./entity/TrustCardEntity");
const UnsaveBusinessEntity_1 = require("./entity/UnsaveBusinessEntity");
const UpdateAgentBillingAccountEntity_1 = require("./entity/UpdateAgentBillingAccountEntity");
const WithdrawJobApplicationEntity_1 = require("./entity/WithdrawJobApplicationEntity");
const node_util_1 = require("node:util");
const Config_1 = require("./Config");
Object.defineProperty(exports, "config", { enumerable: true, get: function () { return Config_1.config; } });
const LoppeeBusinessEntityBase_1 = require("./LoppeeBusinessEntityBase");
Object.defineProperty(exports, "LoppeeBusinessEntityBase", { enumerable: true, get: function () { return LoppeeBusinessEntityBase_1.LoppeeBusinessEntityBase; } });
const Utility_1 = require("./utility/Utility");
const ResultBodyUtility_1 = require("./utility/ResultBodyUtility");
const MakeRequestUtility_1 = require("./utility/MakeRequestUtility");
const PrepareMethodUtility_1 = require("./utility/PrepareMethodUtility");
const BaseFeature_1 = require("./feature/base/BaseFeature");
Object.defineProperty(exports, "BaseFeature", { enumerable: true, get: function () { return BaseFeature_1.BaseFeature; } });
const stdutil = new Utility_1.Utility();
exports.stdutil = stdutil;
class LoppeeBusinessSDK {
    _mode = 'live';
    _options;
    _utility = new Utility_1.Utility();
    _features;
    _rootctx;
    constructor(options) {
        this._rootctx = this._utility.makeContext({
            client: this,
            utility: this._utility,
            config: Config_1.config,
            options,
            shared: new WeakMap()
        });
        this._options = this._utility.makeOptions(this._rootctx);
        for (const key of ['_options', '_rootctx', '_features']) {
            Object.defineProperty(this, key, {
                value: this[key], enumerable: false, writable: true, configurable: true
            });
        }
        const struct = this._utility.struct;
        const getpath = struct.getpath;
        if (true === getpath(this._options.feature, 'test.active')) {
            this._mode = 'test';
        }
        this._rootctx.options = this._options;
        this._features = [];
        const featureAdd = this._utility.featureAdd;
        const featureInit = this._utility.featureInit;
        // Add features in the resolved order (makeOptions puts an explicit
        // array order first, else defaults to test-first). Ordering matters:
        // the `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
        // so `test` must be added before them to sit at the base of the chain.
        const extend = this._options.extend || [];
        const featureorder = getpath(this._options, '__derived__.featureorder') || [];
        for (const fname of featureorder) {
            const fopts = this._options.feature[fname] || {};
            if (fopts.active) {
                // An active name with no generated class is legal when an
                // extend-supplied instance carries that name (station's adopt
                // path): the instance is added below, positioned by its own
                // __after__ entry, so skip it here rather than fail construction.
                if (!this._rootctx.config.hasFeature(fname) &&
                    extend.some((f) => fname === f.name)) {
                    continue;
                }
                featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname));
            }
        }
        for (let f of extend) {
            featureAdd(this._rootctx, f);
        }
        for (let f of this._features) {
            featureInit(this._rootctx, f);
        }
        const featureHook = this._utility.featureHook;
        featureHook(this._rootctx, 'PostConstruct');
    }
    options() {
        return this._utility.struct.clone(this._options);
    }
    utility() {
        return this._utility.struct.clone(this._utility);
    }
    async prepare(fetchargs) {
        const utility = this._utility;
        const struct = utility.struct;
        const clone = struct.clone;
        const { makeContext, makeFetchDef, prepareHeaders, prepareAuth, } = utility;
        fetchargs = fetchargs || {};
        let ctx = makeContext({
            opname: 'prepare',
            ctrl: fetchargs.ctrl || {},
        }, this._rootctx);
        const options = this._options;
        const method = String(fetchargs.method || 'GET').toUpperCase();
        if (!(0, PrepareMethodUtility_1.allowed)(options.allow.method, method)) {
            return ctx.error('spec_method_allow', 'Method "' + method +
                '" not allowed by SDK option allow.method value: "' + options.allow.method + '"');
        }
        const spec = {
            base: options.base,
            prefix: options.prefix,
            suffix: options.suffix,
            path: fetchargs.path || '',
            method,
            params: fetchargs.params || {},
            query: fetchargs.query || {},
            headers: prepareHeaders(ctx),
            body: fetchargs.body,
            step: 'start',
        };
        ctx.spec = spec;
        if (fetchargs.headers) {
            const uheaders = fetchargs.headers;
            for (let key in uheaders) {
                spec.headers[key] = uheaders[key];
            }
        }
        const authResult = prepareAuth(ctx);
        if (authResult instanceof Error) {
            return authResult;
        }
        return makeFetchDef(ctx);
    }
    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    // either one reaches the same endpoint.
    async direct(fetchargs) {
        if (!(0, PrepareMethodUtility_1.allowed)(this._options.allow.op, 'direct')) {
            return {
                ok: false,
                err: new Error('LoppeeBusinessSDK: direct: operation not allowed by' +
                    ' SDK option allow.op value: "' + this._options.allow.op + '"'),
            };
        }
        return this._rawRequest(fetchargs);
    }
    // Ungated request path shared by direct() and graphql(), each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    async _rawRequest(fetchargs) {
        const utility = this._utility;
        const fetcher = utility.fetcher;
        const makeContext = utility.makeContext;
        const fetchdef = await this.prepare(fetchargs);
        if (fetchdef instanceof Error) {
            return { ok: false, err: utility.clean(this._rootctx, fetchdef) };
        }
        let ctx = makeContext({
            opname: 'direct',
            ctrl: (fetchargs || {}).ctrl || {},
        }, this._rootctx);
        try {
            if (true === fetchdef.signal?.aborted) {
                throw fetchdef.signal.reason;
            }
            const fetched = await fetcher(ctx, fetchdef.url, fetchdef);
            if (null == fetched) {
                return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') };
            }
            else if (fetched instanceof Error) {
                return { ok: false, err: utility.clean(ctx, (0, MakeRequestUtility_1.abortError)(ctx, fetched)) };
            }
            const status = fetched.status;
            // No body responses (204 No Content, 304 Not Modified) and explicit
            // zero content-length must skip JSON parsing — fetched.json() would
            // throw `Unexpected end of JSON input` on an empty body.
            const headers = fetched.headers;
            const contentLength = headers && 'function' === typeof headers.get
                ? headers.get('content-length')
                : (headers || {})['content-length'];
            const noBody = 204 === status || 304 === status || '0' === String(contentLength);
            let json = undefined;
            let err = undefined;
            if (!noBody) {
                let text = undefined;
                try {
                    const raw = fetched;
                    if ('function' === typeof raw.text) {
                        text = await raw.text();
                        json = '' === text.trim() ? undefined : JSON.parse(text);
                    }
                    else {
                        json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json;
                    }
                }
                catch (parseErr) {
                    if ('SyntaxError' !== parseErr?.name) {
                        throw parseErr;
                    }
                    err = (0, ResultBodyUtility_1.unreadableBody)(ctx, {
                        status, headers, text: text ?? parseErr.text, sent: fetchdef.headers,
                        failed: 200 <= status && status < 300 ? undefined :
                            ctx.error('request_status', 'request: ' + status + ': ' + fetched.statusText),
                    });
                }
            }
            return {
                ok: null == err && status >= 200 && status < 300,
                status,
                headers: fetched.headers,
                data: json,
                ...(null == err ? {} : { err: utility.clean(ctx, err) }),
            };
        }
        catch (err) {
            return { ok: false, err: utility.clean(ctx, (0, MakeRequestUtility_1.abortError)(ctx, err)) };
        }
    }
    async graphql(query, variables, ctrl) {
        const options = this._options;
        if (!(0, PrepareMethodUtility_1.allowed)(options.allow.op, 'graphql')) {
            return {
                ok: false,
                err: new Error('LoppeeBusinessSDK: graphql: operation not allowed by' +
                    ' SDK option allow.op value: "' + options.allow.op + '"'),
            };
        }
        const res = await this._rawRequest({
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: { query, variables: variables || {} },
            ctrl,
        });
        // Errors are read BEFORE any status check: a GraphQL parse or validation
        // failure comes back as HTTP 400 carrying the standard { errors: [...] }
        // body, and the raw path represents a non-2xx as { ok: false } with no
        // err — so returning early on status would discard the server's own
        // diagnostics, which are the only useful part of that response.
        const errors = null == res.data ? undefined : res.data.errors;
        if (null != errors && Array.isArray(errors) && 0 < errors.length) {
            const first = errors[0] || {};
            const err = new Error('LoppeeBusinessSDK: graphql: ' +
                (first.message || 'graphql error'));
            err.graphql = errors;
            return { ok: false, status: res.status, headers: res.headers, err, data: res.data };
        }
        return res;
    }
    // Entity access: `client.AgentAccess().list()` / `client.AgentAccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AgentAccess(entopts) {
        const self = this;
        return new AgentAccessEntity_1.AgentAccessEntity(self, entopts);
    }
    // Entity access: `client.AgentCapability().list()` / `client.AgentCapability().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AgentCapability(entopts) {
        const self = this;
        return new AgentCapabilityEntity_1.AgentCapabilityEntity(self, entopts);
    }
    // Entity access: `client.AgentConnectionTest().list()` / `client.AgentConnectionTest().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AgentConnectionTest(entopts) {
        const self = this;
        return new AgentConnectionTestEntity_1.AgentConnectionTestEntity(self, entopts);
    }
    // Entity access: `client.AgentIntegration().list()` / `client.AgentIntegration().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AgentIntegration(entopts) {
        const self = this;
        return new AgentIntegrationEntity_1.AgentIntegrationEntity(self, entopts);
    }
    // Entity access: `client.AgentMonitoring().list()` / `client.AgentMonitoring().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AgentMonitoring(entopts) {
        const self = this;
        return new AgentMonitoringEntity_1.AgentMonitoringEntity(self, entopts);
    }
    // Entity access: `client.AgentOpenapi().list()` / `client.AgentOpenapi().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AgentOpenapi(entopts) {
        const self = this;
        return new AgentOpenapiEntity_1.AgentOpenapiEntity(self, entopts);
    }
    // Entity access: `client.AgentPolicy().list()` / `client.AgentPolicy().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AgentPolicy(entopts) {
        const self = this;
        return new AgentPolicyEntity_1.AgentPolicyEntity(self, entopts);
    }
    // Entity access: `client.AnonymousLocationProofRevocation().list()` / `client.AnonymousLocationProofRevocation().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AnonymousLocationProofRevocation(entopts) {
        const self = this;
        return new AnonymousLocationProofRevocationEntity_1.AnonymousLocationProofRevocationEntity(self, entopts);
    }
    // Entity access: `client.BusinessApplication().list()` / `client.BusinessApplication().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BusinessApplication(entopts) {
        const self = this;
        return new BusinessApplicationEntity_1.BusinessApplicationEntity(self, entopts);
    }
    // Entity access: `client.BusinessClaim().list()` / `client.BusinessClaim().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BusinessClaim(entopts) {
        const self = this;
        return new BusinessClaimEntity_1.BusinessClaimEntity(self, entopts);
    }
    // Entity access: `client.BusinessDeal().list()` / `client.BusinessDeal().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BusinessDeal(entopts) {
        const self = this;
        return new BusinessDealEntity_1.BusinessDealEntity(self, entopts);
    }
    // Entity access: `client.BusinessIndex().list()` / `client.BusinessIndex().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BusinessIndex(entopts) {
        const self = this;
        return new BusinessIndexEntity_1.BusinessIndexEntity(self, entopts);
    }
    // Entity access: `client.BusinessOwner().list()` / `client.BusinessOwner().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BusinessOwner(entopts) {
        const self = this;
        return new BusinessOwnerEntity_1.BusinessOwnerEntity(self, entopts);
    }
    // Entity access: `client.BusinessReview().list()` / `client.BusinessReview().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BusinessReview(entopts) {
        const self = this;
        return new BusinessReviewEntity_1.BusinessReviewEntity(self, entopts);
    }
    // Entity access: `client.ChatAttachment().list()` / `client.ChatAttachment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ChatAttachment(entopts) {
        const self = this;
        return new ChatAttachmentEntity_1.ChatAttachmentEntity(self, entopts);
    }
    // Entity access: `client.ChatAttachmentUrl().list()` / `client.ChatAttachmentUrl().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ChatAttachmentUrl(entopts) {
        const self = this;
        return new ChatAttachmentUrlEntity_1.ChatAttachmentUrlEntity(self, entopts);
    }
    // Entity access: `client.ClaimVerificationSend().list()` / `client.ClaimVerificationSend().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ClaimVerificationSend(entopts) {
        const self = this;
        return new ClaimVerificationSendEntity_1.ClaimVerificationSendEntity(self, entopts);
    }
    // Entity access: `client.ClaimVerificationVerify().list()` / `client.ClaimVerificationVerify().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ClaimVerificationVerify(entopts) {
        const self = this;
        return new ClaimVerificationVerifyEntity_1.ClaimVerificationVerifyEntity(self, entopts);
    }
    // Entity access: `client.CommercialClick().list()` / `client.CommercialClick().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CommercialClick(entopts) {
        const self = this;
        return new CommercialClickEntity_1.CommercialClickEntity(self, entopts);
    }
    // Entity access: `client.ContactRecorded().list()` / `client.ContactRecorded().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ContactRecorded(entopts) {
        const self = this;
        return new ContactRecordedEntity_1.ContactRecordedEntity(self, entopts);
    }
    // Entity access: `client.Conversation().list()` / `client.Conversation().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Conversation(entopts) {
        const self = this;
        return new ConversationEntity_1.ConversationEntity(self, entopts);
    }
    // Entity access: `client.ConversationClose().list()` / `client.ConversationClose().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ConversationClose(entopts) {
        const self = this;
        return new ConversationCloseEntity_1.ConversationCloseEntity(self, entopts);
    }
    // Entity access: `client.ConversationReport().list()` / `client.ConversationReport().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ConversationReport(entopts) {
        const self = this;
        return new ConversationReportEntity_1.ConversationReportEntity(self, entopts);
    }
    // Entity access: `client.ConversationWorkflow().list()` / `client.ConversationWorkflow().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ConversationWorkflow(entopts) {
        const self = this;
        return new ConversationWorkflowEntity_1.ConversationWorkflowEntity(self, entopts);
    }
    // Entity access: `client.CreateAgentApiKey().list()` / `client.CreateAgentApiKey().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CreateAgentApiKey(entopts) {
        const self = this;
        return new CreateAgentApiKeyEntity_1.CreateAgentApiKeyEntity(self, entopts);
    }
    // Entity access: `client.Customer().list()` / `client.Customer().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Customer(entopts) {
        const self = this;
        return new CustomerEntity_1.CustomerEntity(self, entopts);
    }
    // Entity access: `client.CustomerAccount().list()` / `client.CustomerAccount().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CustomerAccount(entopts) {
        const self = this;
        return new CustomerAccountEntity_1.CustomerAccountEntity(self, entopts);
    }
    // Entity access: `client.CustomerLocationProofRevocation().list()` / `client.CustomerLocationProofRevocation().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CustomerLocationProofRevocation(entopts) {
        const self = this;
        return new CustomerLocationProofRevocationEntity_1.CustomerLocationProofRevocationEntity(self, entopts);
    }
    // Entity access: `client.DestinationAddressSuggestion().list()` / `client.DestinationAddressSuggestion().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DestinationAddressSuggestion(entopts) {
        const self = this;
        return new DestinationAddressSuggestionEntity_1.DestinationAddressSuggestionEntity(self, entopts);
    }
    // Entity access: `client.DestinationLocationProof().list()` / `client.DestinationLocationProof().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DestinationLocationProof(entopts) {
        const self = this;
        return new DestinationLocationProofEntity_1.DestinationLocationProofEntity(self, entopts);
    }
    // Entity access: `client.DomainTrustCard().list()` / `client.DomainTrustCard().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DomainTrustCard(entopts) {
        const self = this;
        return new DomainTrustCardEntity_1.DomainTrustCardEntity(self, entopts);
    }
    // Entity access: `client.GeoContext().list()` / `client.GeoContext().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    GeoContext(entopts) {
        const self = this;
        return new GeoContextEntity_1.GeoContextEntity(self, entopts);
    }
    // Entity access: `client.Health().list()` / `client.Health().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Health(entopts) {
        const self = this;
        return new HealthEntity_1.HealthEntity(self, entopts);
    }
    // Entity access: `client.JobApplication().list()` / `client.JobApplication().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    JobApplication(entopts) {
        const self = this;
        return new JobApplicationEntity_1.JobApplicationEntity(self, entopts);
    }
    // Entity access: `client.JobResumeSignedUrl().list()` / `client.JobResumeSignedUrl().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    JobResumeSignedUrl(entopts) {
        const self = this;
        return new JobResumeSignedUrlEntity_1.JobResumeSignedUrlEntity(self, entopts);
    }
    // Entity access: `client.LocationHandoff().list()` / `client.LocationHandoff().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    LocationHandoff(entopts) {
        const self = this;
        return new LocationHandoffEntity_1.LocationHandoffEntity(self, entopts);
    }
    // Entity access: `client.Message().list()` / `client.Message().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Message(entopts) {
        const self = this;
        return new MessageEntity_1.MessageEntity(self, entopts);
    }
    // Entity access: `client.ModeratedAction().list()` / `client.ModeratedAction().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ModeratedAction(entopts) {
        const self = this;
        return new ModeratedActionEntity_1.ModeratedActionEntity(self, entopts);
    }
    // Entity access: `client.OpenApiDocument().list()` / `client.OpenApiDocument().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OpenApiDocument(entopts) {
        const self = this;
        return new OpenApiDocumentEntity_1.OpenApiDocumentEntity(self, entopts);
    }
    // Entity access: `client.Operation().list()` / `client.Operation().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Operation(entopts) {
        const self = this;
        return new OperationEntity_1.OperationEntity(self, entopts);
    }
    // Entity access: `client.OwnerNotification().list()` / `client.OwnerNotification().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OwnerNotification(entopts) {
        const self = this;
        return new OwnerNotificationEntity_1.OwnerNotificationEntity(self, entopts);
    }
    // Entity access: `client.OwnerNotificationSetting().list()` / `client.OwnerNotificationSetting().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OwnerNotificationSetting(entopts) {
        const self = this;
        return new OwnerNotificationSettingEntity_1.OwnerNotificationSettingEntity(self, entopts);
    }
    // Entity access: `client.OwnerWebhookEndpoint().list()` / `client.OwnerWebhookEndpoint().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OwnerWebhookEndpoint(entopts) {
        const self = this;
        return new OwnerWebhookEndpointEntity_1.OwnerWebhookEndpointEntity(self, entopts);
    }
    // Entity access: `client.OwnerWebhookRegistration().list()` / `client.OwnerWebhookRegistration().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OwnerWebhookRegistration(entopts) {
        const self = this;
        return new OwnerWebhookRegistrationEntity_1.OwnerWebhookRegistrationEntity(self, entopts);
    }
    // Entity access: `client.Pricing().list()` / `client.Pricing().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Pricing(entopts) {
        const self = this;
        return new PricingEntity_1.PricingEntity(self, entopts);
    }
    // Entity access: `client.PromoteVerifiedTransaction().list()` / `client.PromoteVerifiedTransaction().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PromoteVerifiedTransaction(entopts) {
        const self = this;
        return new PromoteVerifiedTransactionEntity_1.PromoteVerifiedTransactionEntity(self, entopts);
    }
    // Entity access: `client.PublicContent().list()` / `client.PublicContent().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PublicContent(entopts) {
        const self = this;
        return new PublicContentEntity_1.PublicContentEntity(self, entopts);
    }
    // Entity access: `client.Recommend().list()` / `client.Recommend().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Recommend(entopts) {
        const self = this;
        return new RecommendEntity_1.RecommendEntity(self, entopts);
    }
    // Entity access: `client.Review().list()` / `client.Review().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Review(entopts) {
        const self = this;
        return new ReviewEntity_1.ReviewEntity(self, entopts);
    }
    // Entity access: `client.Revoke().list()` / `client.Revoke().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Revoke(entopts) {
        const self = this;
        return new RevokeEntity_1.RevokeEntity(self, entopts);
    }
    // Entity access: `client.SaveBusiness().list()` / `client.SaveBusiness().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SaveBusiness(entopts) {
        const self = this;
        return new SaveBusinessEntity_1.SaveBusinessEntity(self, entopts);
    }
    // Entity access: `client.SavedBusiness().list()` / `client.SavedBusiness().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SavedBusiness(entopts) {
        const self = this;
        return new SavedBusinessEntity_1.SavedBusinessEntity(self, entopts);
    }
    // Entity access: `client.SavedLocation().list()` / `client.SavedLocation().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SavedLocation(entopts) {
        const self = this;
        return new SavedLocationEntity_1.SavedLocationEntity(self, entopts);
    }
    // Entity access: `client.Search().list()` / `client.Search().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Search(entopts) {
        const self = this;
        return new SearchEntity_1.SearchEntity(self, entopts);
    }
    // Entity access: `client.Suggest().list()` / `client.Suggest().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Suggest(entopts) {
        const self = this;
        return new SuggestEntity_1.SuggestEntity(self, entopts);
    }
    // Entity access: `client.SupportInternalNote().list()` / `client.SupportInternalNote().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SupportInternalNote(entopts) {
        const self = this;
        return new SupportInternalNoteEntity_1.SupportInternalNoteEntity(self, entopts);
    }
    // Entity access: `client.SupportWorkflow().list()` / `client.SupportWorkflow().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SupportWorkflow(entopts) {
        const self = this;
        return new SupportWorkflowEntity_1.SupportWorkflowEntity(self, entopts);
    }
    // Entity access: `client.TaxonomySuggestion().list()` / `client.TaxonomySuggestion().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TaxonomySuggestion(entopts) {
        const self = this;
        return new TaxonomySuggestionEntity_1.TaxonomySuggestionEntity(self, entopts);
    }
    // Entity access: `client.TrustCard().list()` / `client.TrustCard().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TrustCard(entopts) {
        const self = this;
        return new TrustCardEntity_1.TrustCardEntity(self, entopts);
    }
    // Entity access: `client.UnsaveBusiness().list()` / `client.UnsaveBusiness().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    UnsaveBusiness(entopts) {
        const self = this;
        return new UnsaveBusinessEntity_1.UnsaveBusinessEntity(self, entopts);
    }
    // Entity access: `client.UpdateAgentBillingAccount().list()` / `client.UpdateAgentBillingAccount().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    UpdateAgentBillingAccount(entopts) {
        const self = this;
        return new UpdateAgentBillingAccountEntity_1.UpdateAgentBillingAccountEntity(self, entopts);
    }
    // Entity access: `client.WithdrawJobApplication().list()` / `client.WithdrawJobApplication().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    WithdrawJobApplication(entopts) {
        const self = this;
        return new WithdrawJobApplicationEntity_1.WithdrawJobApplicationEntity(self, entopts);
    }
    static test(testoptsarg, sdkoptsarg) {
        const struct = stdutil.struct;
        const setpath = struct.setpath;
        const getdef = struct.getdef;
        const clone = struct.clone;
        const setprop = struct.setprop;
        const sdkopts = getdef(clone(sdkoptsarg), {});
        const testopts = getdef(clone(testoptsarg), {});
        setprop(testopts, 'active', true);
        setpath(sdkopts, 'feature.test', testopts);
        const testsdk = new LoppeeBusinessSDK(sdkopts);
        testsdk._mode = 'test';
        return testsdk;
    }
    tester(testopts, sdkopts) {
        return LoppeeBusinessSDK.test(testopts, sdkopts);
    }
    toJSON() {
        return { name: 'LoppeeBusiness' };
    }
    toString() {
        return 'LoppeeBusiness ' + this._utility.struct.jsonify(this.toJSON());
    }
    [node_util_1.inspect.custom]() {
        return this.toString();
    }
}
exports.LoppeeBusinessSDK = LoppeeBusinessSDK;
const SDK = LoppeeBusinessSDK;
exports.SDK = SDK;
//# sourceMappingURL=LoppeeBusinessSDK.js.map