// LoppeeBusiness Ts SDK

import { AgentAccessEntity } from './entity/AgentAccessEntity'
import { AgentCapabilityEntity } from './entity/AgentCapabilityEntity'
import { AgentConnectionTestEntity } from './entity/AgentConnectionTestEntity'
import { AgentIntegrationEntity } from './entity/AgentIntegrationEntity'
import { AgentMonitoringEntity } from './entity/AgentMonitoringEntity'
import { AgentOpenapiEntity } from './entity/AgentOpenapiEntity'
import { AgentPolicyEntity } from './entity/AgentPolicyEntity'
import { AnonymousLocationProofRevocationEntity } from './entity/AnonymousLocationProofRevocationEntity'
import { BusinessApplicationEntity } from './entity/BusinessApplicationEntity'
import { BusinessClaimEntity } from './entity/BusinessClaimEntity'
import { BusinessDealEntity } from './entity/BusinessDealEntity'
import { BusinessIndexEntity } from './entity/BusinessIndexEntity'
import { BusinessOwnerEntity } from './entity/BusinessOwnerEntity'
import { BusinessReviewEntity } from './entity/BusinessReviewEntity'
import { ChatAttachmentEntity } from './entity/ChatAttachmentEntity'
import { ChatAttachmentUrlEntity } from './entity/ChatAttachmentUrlEntity'
import { ClaimVerificationSendEntity } from './entity/ClaimVerificationSendEntity'
import { ClaimVerificationVerifyEntity } from './entity/ClaimVerificationVerifyEntity'
import { CommercialClickEntity } from './entity/CommercialClickEntity'
import { ContactRecordedEntity } from './entity/ContactRecordedEntity'
import { ConversationEntity } from './entity/ConversationEntity'
import { ConversationCloseEntity } from './entity/ConversationCloseEntity'
import { ConversationReportEntity } from './entity/ConversationReportEntity'
import { ConversationWorkflowEntity } from './entity/ConversationWorkflowEntity'
import { CreateAgentApiKeyEntity } from './entity/CreateAgentApiKeyEntity'
import { CustomerEntity } from './entity/CustomerEntity'
import { CustomerAccountEntity } from './entity/CustomerAccountEntity'
import { CustomerLocationProofRevocationEntity } from './entity/CustomerLocationProofRevocationEntity'
import { DestinationAddressSuggestionEntity } from './entity/DestinationAddressSuggestionEntity'
import { DestinationLocationProofEntity } from './entity/DestinationLocationProofEntity'
import { DomainTrustCardEntity } from './entity/DomainTrustCardEntity'
import { GeoContextEntity } from './entity/GeoContextEntity'
import { HealthEntity } from './entity/HealthEntity'
import { JobApplicationEntity } from './entity/JobApplicationEntity'
import { JobResumeSignedUrlEntity } from './entity/JobResumeSignedUrlEntity'
import { LocationHandoffEntity } from './entity/LocationHandoffEntity'
import { MessageEntity } from './entity/MessageEntity'
import { ModeratedActionEntity } from './entity/ModeratedActionEntity'
import { OpenApiDocumentEntity } from './entity/OpenApiDocumentEntity'
import { OperationEntity } from './entity/OperationEntity'
import { OwnerNotificationEntity } from './entity/OwnerNotificationEntity'
import { OwnerNotificationSettingEntity } from './entity/OwnerNotificationSettingEntity'
import { OwnerWebhookEndpointEntity } from './entity/OwnerWebhookEndpointEntity'
import { OwnerWebhookRegistrationEntity } from './entity/OwnerWebhookRegistrationEntity'
import { PricingEntity } from './entity/PricingEntity'
import { PromoteVerifiedTransactionEntity } from './entity/PromoteVerifiedTransactionEntity'
import { PublicContentEntity } from './entity/PublicContentEntity'
import { RecommendEntity } from './entity/RecommendEntity'
import { ReviewEntity } from './entity/ReviewEntity'
import { RevokeEntity } from './entity/RevokeEntity'
import { SaveBusinessEntity } from './entity/SaveBusinessEntity'
import { SavedBusinessEntity } from './entity/SavedBusinessEntity'
import { SavedLocationEntity } from './entity/SavedLocationEntity'
import { SearchEntity } from './entity/SearchEntity'
import { SuggestEntity } from './entity/SuggestEntity'
import { SupportInternalNoteEntity } from './entity/SupportInternalNoteEntity'
import { SupportWorkflowEntity } from './entity/SupportWorkflowEntity'
import { TaxonomySuggestionEntity } from './entity/TaxonomySuggestionEntity'
import { TrustCardEntity } from './entity/TrustCardEntity'
import { UnsaveBusinessEntity } from './entity/UnsaveBusinessEntity'
import { UpdateAgentBillingAccountEntity } from './entity/UpdateAgentBillingAccountEntity'
import { WithdrawJobApplicationEntity } from './entity/WithdrawJobApplicationEntity'

export type * from './LoppeeBusinessTypes'


import { inspect } from 'node:util'

import type { Context, Feature } from './types'

import { config } from './Config'
import { LoppeeBusinessEntityBase } from './LoppeeBusinessEntityBase'
import { Utility } from './utility/Utility'
import { unreadableBody } from './utility/ResultBodyUtility'
import { abortError } from './utility/MakeRequestUtility'
import { allowed } from './utility/PrepareMethodUtility'


import { BaseFeature } from './feature/base/BaseFeature'



const stdutil = new Utility()


// A request's outcome: ok is false alone on an error with no response, so a
// caller narrowing on it reaches the status and the data.
type DirectResult =
  | { ok: false, err: any, status?: undefined, headers?: undefined, data?: undefined }
  | { ok: boolean, status: number, headers: any, data: any, err?: any }


class LoppeeBusinessSDK {
  _mode: string = 'live'
  _options: any
  _utility = new Utility()
  _features: Feature[]
  _rootctx: Context
  

  constructor(options?: any) {

    this._rootctx = this._utility.makeContext({
      client: this,
      utility: this._utility,
      config,
      options,
      shared: new WeakMap()
    })

    this._options = this._utility.makeOptions(this._rootctx)

    for (const key of ['_options', '_rootctx', '_features']) {
      Object.defineProperty(this, key, {
        value: (this as any)[key], enumerable: false, writable: true, configurable: true
      })
    }

    const struct = this._utility.struct
    const getpath = struct.getpath

    if (true === getpath(this._options.feature, 'test.active')) {
      this._mode = 'test'
    }

    this._rootctx.options = this._options

    this._features = []

    const featureAdd = this._utility.featureAdd
    const featureInit = this._utility.featureInit

    // Add features in the resolved order (makeOptions puts an explicit
    // array order first, else defaults to test-first). Ordering matters:
    // the `test` feature installs the base mock transport and the transport
    // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
    // so `test` must be added before them to sit at the base of the chain.
    const extend = this._options.extend || []

    const featureorder = getpath(this._options, '__derived__.featureorder') || []
    for (const fname of featureorder) {
      const fopts = this._options.feature[fname] || {}
      if (fopts.active) {
        // An active name with no generated class is legal when an
        // extend-supplied instance carries that name (station's adopt
        // path): the instance is added below, positioned by its own
        // __after__ entry, so skip it here rather than fail construction.
        if (!this._rootctx.config.hasFeature(fname) &&
          extend.some((f: any) => fname === f.name)) {
          continue
        }
        featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname))
      }
    }

    for (let f of extend) {
      featureAdd(this._rootctx, f)
    }

    for (let f of this._features) {
      featureInit(this._rootctx, f)
    }

    const featureHook = this._utility.featureHook
    featureHook(this._rootctx, 'PostConstruct')
  }


  options() {
    return this._utility.struct.clone(this._options)
  }


  utility() {
    return this._utility.struct.clone(this._utility)
  }

  


  async prepare(fetchargs?: any) {
    const utility = this._utility
    const struct = utility.struct
    const clone = struct.clone

    const {
      makeContext,
      makeFetchDef,
      prepareHeaders,
      prepareAuth,
    } = utility

    fetchargs = fetchargs || {}

    let ctx: Context = makeContext({
      opname: 'prepare',
      ctrl: fetchargs.ctrl || {},
    }, this._rootctx)

    const options = this._options
    const method = String(fetchargs.method || 'GET').toUpperCase()

    if (!allowed(options.allow.method, method)) {
      return ctx.error('spec_method_allow', 'Method "' + method +
        '" not allowed by SDK option allow.method value: "' + options.allow.method + '"')
    }

    const spec: any = {
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
    }

    ctx.spec = spec

    if (fetchargs.headers) {
      const uheaders = fetchargs.headers
      for (let key in uheaders) {
        spec.headers[key] = uheaders[key]
      }
    }

    

    const authResult = prepareAuth(ctx)
    if (authResult instanceof Error) {
      return authResult
    }

    return makeFetchDef(ctx)
  }


  // Raw endpoint access is operator-controllable, like every entity op.
  // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
  // either one reaches the same endpoint.
  async direct(fetchargs?: any): Promise<DirectResult> {
    if (!allowed(this._options.allow.op, 'direct')) {
      return {
        ok: false,
        err: new Error('LoppeeBusinessSDK: direct: operation not allowed by' +
          ' SDK option allow.op value: "' + this._options.allow.op + '"'),
      }
    }

    return this._rawRequest(fetchargs)
  }


  // Ungated request path shared by direct() and graphql(), each of which
  // checks its own allow.op token first. Private, rather than a flag on
  // fetchargs: a caller-supplied marker would let anyone opt straight back
  // out of the gate by passing it.
  async _rawRequest(fetchargs?: any): Promise<DirectResult> {
    const utility = this._utility

    const fetcher = utility.fetcher
    const makeContext = utility.makeContext

    const fetchdef = await this.prepare(fetchargs)
    if (fetchdef instanceof Error) {
      return { ok: false, err: utility.clean(this._rootctx, fetchdef) }
    }

    let ctx: Context = makeContext({
      opname: 'direct',
      ctrl: (fetchargs || {}).ctrl || {},
    }, this._rootctx)

    try {
      if (true === fetchdef.signal?.aborted) {
        throw fetchdef.signal.reason
      }

      const fetched = await fetcher(ctx, fetchdef.url, fetchdef)

      if (null == fetched) {
        return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') }
      }
      else if (fetched instanceof Error) {
        return { ok: false, err: utility.clean(ctx, abortError(ctx, fetched)) }
      }

      const status = fetched.status

      // No body responses (204 No Content, 304 Not Modified) and explicit
      // zero content-length must skip JSON parsing — fetched.json() would
      // throw `Unexpected end of JSON input` on an empty body.
      const headers = fetched.headers
      const contentLength = headers && 'function' === typeof headers.get
        ? headers.get('content-length')
        : (headers || {})['content-length']
      const noBody = 204 === status || 304 === status || '0' === String(contentLength)

      let json: any = undefined
      let err: any = undefined
      if (!noBody) {
        let text: any = undefined
        try {
          const raw: any = fetched
          if ('function' === typeof raw.text) {
            text = await raw.text()
            json = '' === text.trim() ? undefined : JSON.parse(text)
          }
          else {
            json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json
          }
        }
        catch (parseErr: any) {
          if ('SyntaxError' !== parseErr?.name) {
            throw parseErr
          }
          err = unreadableBody(ctx, {
            status, headers, text: text ?? parseErr.text, sent: fetchdef.headers,
            failed: 200 <= status && status < 300 ? undefined :
              ctx.error('request_status', 'request: ' + status + ': ' + fetched.statusText),
          })
        }
      }

      return {
        ok: null == err && status >= 200 && status < 300,
        status,
        headers: fetched.headers,
        data: json,
        ...(null == err ? {} : { err: utility.clean(ctx, err) }),
      }
    }
    catch (err: any) {
      return { ok: false, err: utility.clean(ctx, abortError(ctx, err)) }
    }
  }



  async graphql(query: string, variables?: any, ctrl?: any) {
    const options = this._options

    if (!allowed(options.allow.op, 'graphql')) {
      return {
        ok: false,
        err: new Error('LoppeeBusinessSDK: graphql: operation not allowed by' +
          ' SDK option allow.op value: "' + options.allow.op + '"'),
      }
    }

    const res: any = await this._rawRequest({
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: { query, variables: variables || {} },
      ctrl,
    })

    // Errors are read BEFORE any status check: a GraphQL parse or validation
    // failure comes back as HTTP 400 carrying the standard { errors: [...] }
    // body, and the raw path represents a non-2xx as { ok: false } with no
    // err — so returning early on status would discard the server's own
    // diagnostics, which are the only useful part of that response.
    const errors = null == res.data ? undefined : res.data.errors

    if (null != errors && Array.isArray(errors) && 0 < errors.length) {
      const first = errors[0] || {}
      const err: any = new Error('LoppeeBusinessSDK: graphql: ' +
        (first.message || 'graphql error'))
      err.graphql = errors
      return { ok: false, status: res.status, headers: res.headers, err, data: res.data }
    }

    return res
  }



  // Entity access: `client.AgentAccess().list()` / `client.AgentAccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AgentAccess(entopts?: Record<string, any>) {
    const self = this
    return new AgentAccessEntity(self, entopts)
  }


  // Entity access: `client.AgentCapability().list()` / `client.AgentCapability().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AgentCapability(entopts?: Record<string, any>) {
    const self = this
    return new AgentCapabilityEntity(self, entopts)
  }


  // Entity access: `client.AgentConnectionTest().list()` / `client.AgentConnectionTest().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AgentConnectionTest(entopts?: Record<string, any>) {
    const self = this
    return new AgentConnectionTestEntity(self, entopts)
  }


  // Entity access: `client.AgentIntegration().list()` / `client.AgentIntegration().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AgentIntegration(entopts?: Record<string, any>) {
    const self = this
    return new AgentIntegrationEntity(self, entopts)
  }


  // Entity access: `client.AgentMonitoring().list()` / `client.AgentMonitoring().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AgentMonitoring(entopts?: Record<string, any>) {
    const self = this
    return new AgentMonitoringEntity(self, entopts)
  }


  // Entity access: `client.AgentOpenapi().list()` / `client.AgentOpenapi().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AgentOpenapi(entopts?: Record<string, any>) {
    const self = this
    return new AgentOpenapiEntity(self, entopts)
  }


  // Entity access: `client.AgentPolicy().list()` / `client.AgentPolicy().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AgentPolicy(entopts?: Record<string, any>) {
    const self = this
    return new AgentPolicyEntity(self, entopts)
  }


  // Entity access: `client.AnonymousLocationProofRevocation().list()` / `client.AnonymousLocationProofRevocation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AnonymousLocationProofRevocation(entopts?: Record<string, any>) {
    const self = this
    return new AnonymousLocationProofRevocationEntity(self, entopts)
  }


  // Entity access: `client.BusinessApplication().list()` / `client.BusinessApplication().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BusinessApplication(entopts?: Record<string, any>) {
    const self = this
    return new BusinessApplicationEntity(self, entopts)
  }


  // Entity access: `client.BusinessClaim().list()` / `client.BusinessClaim().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BusinessClaim(entopts?: Record<string, any>) {
    const self = this
    return new BusinessClaimEntity(self, entopts)
  }


  // Entity access: `client.BusinessDeal().list()` / `client.BusinessDeal().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BusinessDeal(entopts?: Record<string, any>) {
    const self = this
    return new BusinessDealEntity(self, entopts)
  }


  // Entity access: `client.BusinessIndex().list()` / `client.BusinessIndex().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BusinessIndex(entopts?: Record<string, any>) {
    const self = this
    return new BusinessIndexEntity(self, entopts)
  }


  // Entity access: `client.BusinessOwner().list()` / `client.BusinessOwner().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BusinessOwner(entopts?: Record<string, any>) {
    const self = this
    return new BusinessOwnerEntity(self, entopts)
  }


  // Entity access: `client.BusinessReview().list()` / `client.BusinessReview().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BusinessReview(entopts?: Record<string, any>) {
    const self = this
    return new BusinessReviewEntity(self, entopts)
  }


  // Entity access: `client.ChatAttachment().list()` / `client.ChatAttachment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ChatAttachment(entopts?: Record<string, any>) {
    const self = this
    return new ChatAttachmentEntity(self, entopts)
  }


  // Entity access: `client.ChatAttachmentUrl().list()` / `client.ChatAttachmentUrl().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ChatAttachmentUrl(entopts?: Record<string, any>) {
    const self = this
    return new ChatAttachmentUrlEntity(self, entopts)
  }


  // Entity access: `client.ClaimVerificationSend().list()` / `client.ClaimVerificationSend().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ClaimVerificationSend(entopts?: Record<string, any>) {
    const self = this
    return new ClaimVerificationSendEntity(self, entopts)
  }


  // Entity access: `client.ClaimVerificationVerify().list()` / `client.ClaimVerificationVerify().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ClaimVerificationVerify(entopts?: Record<string, any>) {
    const self = this
    return new ClaimVerificationVerifyEntity(self, entopts)
  }


  // Entity access: `client.CommercialClick().list()` / `client.CommercialClick().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CommercialClick(entopts?: Record<string, any>) {
    const self = this
    return new CommercialClickEntity(self, entopts)
  }


  // Entity access: `client.ContactRecorded().list()` / `client.ContactRecorded().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ContactRecorded(entopts?: Record<string, any>) {
    const self = this
    return new ContactRecordedEntity(self, entopts)
  }


  // Entity access: `client.Conversation().list()` / `client.Conversation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Conversation(entopts?: Record<string, any>) {
    const self = this
    return new ConversationEntity(self, entopts)
  }


  // Entity access: `client.ConversationClose().list()` / `client.ConversationClose().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ConversationClose(entopts?: Record<string, any>) {
    const self = this
    return new ConversationCloseEntity(self, entopts)
  }


  // Entity access: `client.ConversationReport().list()` / `client.ConversationReport().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ConversationReport(entopts?: Record<string, any>) {
    const self = this
    return new ConversationReportEntity(self, entopts)
  }


  // Entity access: `client.ConversationWorkflow().list()` / `client.ConversationWorkflow().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ConversationWorkflow(entopts?: Record<string, any>) {
    const self = this
    return new ConversationWorkflowEntity(self, entopts)
  }


  // Entity access: `client.CreateAgentApiKey().list()` / `client.CreateAgentApiKey().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CreateAgentApiKey(entopts?: Record<string, any>) {
    const self = this
    return new CreateAgentApiKeyEntity(self, entopts)
  }


  // Entity access: `client.Customer().list()` / `client.Customer().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Customer(entopts?: Record<string, any>) {
    const self = this
    return new CustomerEntity(self, entopts)
  }


  // Entity access: `client.CustomerAccount().list()` / `client.CustomerAccount().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CustomerAccount(entopts?: Record<string, any>) {
    const self = this
    return new CustomerAccountEntity(self, entopts)
  }


  // Entity access: `client.CustomerLocationProofRevocation().list()` / `client.CustomerLocationProofRevocation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CustomerLocationProofRevocation(entopts?: Record<string, any>) {
    const self = this
    return new CustomerLocationProofRevocationEntity(self, entopts)
  }


  // Entity access: `client.DestinationAddressSuggestion().list()` / `client.DestinationAddressSuggestion().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DestinationAddressSuggestion(entopts?: Record<string, any>) {
    const self = this
    return new DestinationAddressSuggestionEntity(self, entopts)
  }


  // Entity access: `client.DestinationLocationProof().list()` / `client.DestinationLocationProof().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DestinationLocationProof(entopts?: Record<string, any>) {
    const self = this
    return new DestinationLocationProofEntity(self, entopts)
  }


  // Entity access: `client.DomainTrustCard().list()` / `client.DomainTrustCard().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DomainTrustCard(entopts?: Record<string, any>) {
    const self = this
    return new DomainTrustCardEntity(self, entopts)
  }


  // Entity access: `client.GeoContext().list()` / `client.GeoContext().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  GeoContext(entopts?: Record<string, any>) {
    const self = this
    return new GeoContextEntity(self, entopts)
  }


  // Entity access: `client.Health().list()` / `client.Health().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Health(entopts?: Record<string, any>) {
    const self = this
    return new HealthEntity(self, entopts)
  }


  // Entity access: `client.JobApplication().list()` / `client.JobApplication().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  JobApplication(entopts?: Record<string, any>) {
    const self = this
    return new JobApplicationEntity(self, entopts)
  }


  // Entity access: `client.JobResumeSignedUrl().list()` / `client.JobResumeSignedUrl().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  JobResumeSignedUrl(entopts?: Record<string, any>) {
    const self = this
    return new JobResumeSignedUrlEntity(self, entopts)
  }


  // Entity access: `client.LocationHandoff().list()` / `client.LocationHandoff().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  LocationHandoff(entopts?: Record<string, any>) {
    const self = this
    return new LocationHandoffEntity(self, entopts)
  }


  // Entity access: `client.Message().list()` / `client.Message().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Message(entopts?: Record<string, any>) {
    const self = this
    return new MessageEntity(self, entopts)
  }


  // Entity access: `client.ModeratedAction().list()` / `client.ModeratedAction().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ModeratedAction(entopts?: Record<string, any>) {
    const self = this
    return new ModeratedActionEntity(self, entopts)
  }


  // Entity access: `client.OpenApiDocument().list()` / `client.OpenApiDocument().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OpenApiDocument(entopts?: Record<string, any>) {
    const self = this
    return new OpenApiDocumentEntity(self, entopts)
  }


  // Entity access: `client.Operation().list()` / `client.Operation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Operation(entopts?: Record<string, any>) {
    const self = this
    return new OperationEntity(self, entopts)
  }


  // Entity access: `client.OwnerNotification().list()` / `client.OwnerNotification().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OwnerNotification(entopts?: Record<string, any>) {
    const self = this
    return new OwnerNotificationEntity(self, entopts)
  }


  // Entity access: `client.OwnerNotificationSetting().list()` / `client.OwnerNotificationSetting().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OwnerNotificationSetting(entopts?: Record<string, any>) {
    const self = this
    return new OwnerNotificationSettingEntity(self, entopts)
  }


  // Entity access: `client.OwnerWebhookEndpoint().list()` / `client.OwnerWebhookEndpoint().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OwnerWebhookEndpoint(entopts?: Record<string, any>) {
    const self = this
    return new OwnerWebhookEndpointEntity(self, entopts)
  }


  // Entity access: `client.OwnerWebhookRegistration().list()` / `client.OwnerWebhookRegistration().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OwnerWebhookRegistration(entopts?: Record<string, any>) {
    const self = this
    return new OwnerWebhookRegistrationEntity(self, entopts)
  }


  // Entity access: `client.Pricing().list()` / `client.Pricing().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Pricing(entopts?: Record<string, any>) {
    const self = this
    return new PricingEntity(self, entopts)
  }


  // Entity access: `client.PromoteVerifiedTransaction().list()` / `client.PromoteVerifiedTransaction().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PromoteVerifiedTransaction(entopts?: Record<string, any>) {
    const self = this
    return new PromoteVerifiedTransactionEntity(self, entopts)
  }


  // Entity access: `client.PublicContent().list()` / `client.PublicContent().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PublicContent(entopts?: Record<string, any>) {
    const self = this
    return new PublicContentEntity(self, entopts)
  }


  // Entity access: `client.Recommend().list()` / `client.Recommend().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Recommend(entopts?: Record<string, any>) {
    const self = this
    return new RecommendEntity(self, entopts)
  }


  // Entity access: `client.Review().list()` / `client.Review().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Review(entopts?: Record<string, any>) {
    const self = this
    return new ReviewEntity(self, entopts)
  }


  // Entity access: `client.Revoke().list()` / `client.Revoke().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Revoke(entopts?: Record<string, any>) {
    const self = this
    return new RevokeEntity(self, entopts)
  }


  // Entity access: `client.SaveBusiness().list()` / `client.SaveBusiness().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SaveBusiness(entopts?: Record<string, any>) {
    const self = this
    return new SaveBusinessEntity(self, entopts)
  }


  // Entity access: `client.SavedBusiness().list()` / `client.SavedBusiness().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SavedBusiness(entopts?: Record<string, any>) {
    const self = this
    return new SavedBusinessEntity(self, entopts)
  }


  // Entity access: `client.SavedLocation().list()` / `client.SavedLocation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SavedLocation(entopts?: Record<string, any>) {
    const self = this
    return new SavedLocationEntity(self, entopts)
  }


  // Entity access: `client.Search().list()` / `client.Search().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Search(entopts?: Record<string, any>) {
    const self = this
    return new SearchEntity(self, entopts)
  }


  // Entity access: `client.Suggest().list()` / `client.Suggest().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Suggest(entopts?: Record<string, any>) {
    const self = this
    return new SuggestEntity(self, entopts)
  }


  // Entity access: `client.SupportInternalNote().list()` / `client.SupportInternalNote().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SupportInternalNote(entopts?: Record<string, any>) {
    const self = this
    return new SupportInternalNoteEntity(self, entopts)
  }


  // Entity access: `client.SupportWorkflow().list()` / `client.SupportWorkflow().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SupportWorkflow(entopts?: Record<string, any>) {
    const self = this
    return new SupportWorkflowEntity(self, entopts)
  }


  // Entity access: `client.TaxonomySuggestion().list()` / `client.TaxonomySuggestion().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TaxonomySuggestion(entopts?: Record<string, any>) {
    const self = this
    return new TaxonomySuggestionEntity(self, entopts)
  }


  // Entity access: `client.TrustCard().list()` / `client.TrustCard().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TrustCard(entopts?: Record<string, any>) {
    const self = this
    return new TrustCardEntity(self, entopts)
  }


  // Entity access: `client.UnsaveBusiness().list()` / `client.UnsaveBusiness().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  UnsaveBusiness(entopts?: Record<string, any>) {
    const self = this
    return new UnsaveBusinessEntity(self, entopts)
  }


  // Entity access: `client.UpdateAgentBillingAccount().list()` / `client.UpdateAgentBillingAccount().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  UpdateAgentBillingAccount(entopts?: Record<string, any>) {
    const self = this
    return new UpdateAgentBillingAccountEntity(self, entopts)
  }


  // Entity access: `client.WithdrawJobApplication().list()` / `client.WithdrawJobApplication().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  WithdrawJobApplication(entopts?: Record<string, any>) {
    const self = this
    return new WithdrawJobApplicationEntity(self, entopts)
  }




  static test(testoptsarg?: any, sdkoptsarg?: any) {
    const struct = stdutil.struct
    const setpath = struct.setpath
    const getdef = struct.getdef
    const clone = struct.clone
    const setprop = struct.setprop

    const sdkopts = getdef(clone(sdkoptsarg), {})
    const testopts = getdef(clone(testoptsarg), {})
    setprop(testopts, 'active', true)
    setpath(sdkopts, 'feature.test', testopts)

    const testsdk = new LoppeeBusinessSDK(sdkopts)
    testsdk._mode = 'test'

    return testsdk
  }


  tester(testopts?: any, sdkopts?: any) {
    return LoppeeBusinessSDK.test(testopts, sdkopts)
  }


  toJSON() {
    return { name: 'LoppeeBusiness' }
  }

  toString() {
    return 'LoppeeBusiness ' + this._utility.struct.jsonify(this.toJSON())
  }

  [inspect.custom]() {
    return this.toString()
  }

}




const SDK = LoppeeBusinessSDK


export {
  stdutil,
  config,
  

  BaseFeature,
  LoppeeBusinessEntityBase,

  LoppeeBusinessSDK,
  SDK,
}


export type { DirectResult }
