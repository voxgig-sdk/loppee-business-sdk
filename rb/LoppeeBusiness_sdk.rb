# LoppeeBusiness SDK

require_relative 'utility/struct/voxgig_struct'
require_relative 'core/utility_type'
require_relative 'core/spec'
require_relative 'core/helpers'

# Load utility registration
require_relative 'utility/register'

# Load config and features
require_relative 'config'
require_relative 'feature/base_feature'
require_relative 'features'

# Load typed models (Struct value objects).
require_relative 'LoppeeBusiness_types'


class LoppeeBusinessSDK
  attr_accessor :mode, :features, :options

  def initialize(options = {})
    @mode = "live"
    @features = []
    @options = nil

    utility = LoppeeBusinessUtility.new
    @_utility = utility

    config = LoppeeBusinessConfig.shared_config

    @_rootctx = utility.make_context.call({
      "client" => self,
      "utility" => utility,
      "config" => config,
      "options" => options || {},
      "shared" => {},
    }, nil)

    @options = utility.make_options.call(@_rootctx)

    if VoxgigStruct.getpath(@options, "feature.test.active") == true
      @mode = "test"
    end

    @_rootctx.options = @options

    # Add features in the resolved order (make_options puts an explicit array
    # order first, else defaults to test-first). Ordering matters: the `test`
    # feature installs the base mock transport and the transport features
    # (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
    # must be added before them to sit at the base of the chain.
    feature_opts = LoppeeBusinessHelpers.to_map(VoxgigStruct.getprop(@options, "feature"))
    if feature_opts
      featureorder = VoxgigStruct.getpath(@options, "__derived__.featureorder")
      if featureorder.is_a?(Array)
        featureorder.each do |fname|
          fopts = LoppeeBusinessHelpers.to_map(feature_opts[fname])
          if fopts && fopts["active"] == true
            utility.feature_add.call(@_rootctx, LoppeeBusinessFeatures.make_feature(fname))
          end
        end
      end
    end

    # Add extension features.
    extend_val = VoxgigStruct.getprop(@options, "extend")
    if extend_val.is_a?(Array)
      extend_val.each do |f|
        if f.respond_to?(:get_name)
          utility.feature_add.call(@_rootctx, f)
        end
      end
    end

    # Initialize features.
    @features.each do |f|
      utility.feature_init.call(@_rootctx, f)
    end

    utility.feature_hook.call(@_rootctx, "PostConstruct")
  end

  def options_map
    out = VoxgigStruct.clone(@options)
    out.is_a?(Hash) ? out : {}
  end

  def get_utility
    LoppeeBusinessUtility.copy(@_utility)
  end

  def get_root_ctx
    @_rootctx
  end

  # The options and the root context both hold the credential, so the
  # client's printed form is its name alone; `options_map` is the
  # documented way to read them back.
  def to_s
    "LoppeeBusiness " + VoxgigStruct.jsonify({ "name" => "LoppeeBusiness" })
  end

  def inspect
    to_s
  end

  def prepare(fetchargs = {})
    utility = @_utility
    fetchargs ||= {}

    ctrl = LoppeeBusinessHelpers.to_map(VoxgigStruct.getprop(fetchargs, "ctrl")) || {}

    ctx = utility.make_context.call({
      "opname" => "prepare",
      "ctrl" => ctrl,
    }, @_rootctx)

    opts = @options
    path = VoxgigStruct.getprop(fetchargs, "path") || ""
    path = "" unless path.is_a?(String)
    method_val = VoxgigStruct.getprop(fetchargs, "method") || "GET"
    method_val = "GET" unless method_val.is_a?(String) && "" != method_val
    method_val = method_val.upcase
    allow_method = VoxgigStruct.getpath(opts, "allow.method")
    unless LoppeeBusinessUtilities.allowed(allow_method, method_val)
      raise ctx.make_error("spec_method_allow",
        "Method \"#{method_val}\" not allowed by SDK option allow.method value: \"#{allow_method}\"")
    end
    params = LoppeeBusinessHelpers.to_map(VoxgigStruct.getprop(fetchargs, "params")) || {}
    query = LoppeeBusinessHelpers.to_map(VoxgigStruct.getprop(fetchargs, "query")) || {}
    headers = utility.prepare_headers.call(ctx)

    base = VoxgigStruct.getprop(opts, "base") || ""
    base = "" unless base.is_a?(String)
    prefix = VoxgigStruct.getprop(opts, "prefix") || ""
    prefix = "" unless prefix.is_a?(String)
    suffix = VoxgigStruct.getprop(opts, "suffix") || ""
    suffix = "" unless suffix.is_a?(String)

    ctx.spec = LoppeeBusinessSpec.new({
      "base" => base, "prefix" => prefix, "suffix" => suffix,
      "path" => path, "method" => method_val,
      "params" => params, "query" => query, "headers" => headers,
      "body" => VoxgigStruct.getprop(fetchargs, "body"),
      "step" => "start",
    })

    # Merge user-provided headers.
    uh = VoxgigStruct.getprop(fetchargs, "headers")
    if uh.is_a?(Hash)
      uh.each { |k, v| ctx.spec.headers[k] = v }
    end

    _, err = utility.prepare_auth.call(ctx)
    raise err if err

    # make_fetch_def returns a (fetchdef, err) tuple; destructure it and
    # return just the fetchdef Hash (raising on error) so callers — including
    # direct(), which indexes fetchdef["url"] — receive a Hash, mirroring the
    # ts/py prepare().
    fetchdef, fd_err = utility.make_fetch_def.call(ctx)
    raise fd_err if fd_err

    fetchdef
  end

  # Raw endpoint access is operator-controllable, like every entity op.
  # Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
  # either one reaches the same endpoint.
  def direct(fetchargs = {})
    return op_denied("direct") unless op_allowed?("direct")

    raw_request(fetchargs)
  end

  # Is this raw-access op permitted by the SDK's allow.op option?
  def op_allowed?(op)
    LoppeeBusinessUtilities.allowed(VoxgigStruct.getpath(@options, "allow.op"), op)
  end

  def op_denied(op)
    allow_op = VoxgigStruct.getpath(@options, "allow.op")
    {
      "ok" => false,
      "err" => LoppeeBusinessError.new(
        "LoppeeBusinessSDK: #{op}: operation not allowed by" \
        " SDK option allow.op value: \"#{allow_op}\"",
        code: "#{op}_allow"),
    }
  end

  # Ungated request path shared by direct and graphql, each of which checks
  # its own allow.op token first. Separate, rather than a flag on fetchargs:
  # a caller-supplied marker would let anyone opt straight back out of the
  # gate by passing it.
  def raw_request(fetchargs = {})
    utility = @_utility

    # direct() is the raw-HTTP escape hatch: it always returns a result hash
    # ({ "ok" => ..., ... }) and never raises. prepare() raises on error, so
    # trap that and surface it in the hash.
    begin
      fetchdef = prepare(fetchargs)
    rescue LoppeeBusinessError => err
      return { "ok" => false, "err" => err }
    end

    fetchargs ||= {}
    ctrl = LoppeeBusinessHelpers.to_map(VoxgigStruct.getprop(fetchargs, "ctrl")) || {}

    ctx = utility.make_context.call({
      "opname" => "direct",
      "ctrl" => ctrl,
    }, @_rootctx)

    url = fetchdef["url"] || ""
    fetched, fetch_err = utility.fetcher.call(ctx, url, fetchdef)

    return { "ok" => false, "err" => utility.clean.call(ctx, fetch_err) } if fetch_err

    if fetched.nil?
      return {
        "ok" => false,
        "err" => ctx.make_error("direct_no_response", "response: undefined"),
      }
    end

    if fetched.is_a?(Hash)
      status = LoppeeBusinessHelpers.to_int(VoxgigStruct.getprop(fetched, "status"))
      headers = VoxgigStruct.getprop(fetched, "headers") || {}

      # No-body responses (204, 304) and explicit zero content-length must
      # skip JSON parsing — calling json() on an empty body errors.
      content_length = headers.is_a?(Hash) ? headers["content-length"] : nil
      no_body = status == 204 || status == 304 || content_length.to_s == "0"

      json_data = nil
      body_err = nil
      unless no_body
        jf = VoxgigStruct.getprop(fetched, "json")
        if jf.is_a?(Proc)
          begin
            json_data = jf.call
          rescue StandardError
            # Non-JSON body — leave data nil, keep status/headers.
            json_data = nil
          end
        end
        if true == VoxgigStruct.getprop(fetched, "unreadable")
          failed = status >= 200 && status < 300 ? nil : ctx.make_error("request_status",
            "request: #{status}: #{VoxgigStruct.getprop(fetched, 'statusText')}")
          body_err = LoppeeBusinessUtilities::UnreadableBody.call(ctx, status, headers,
            VoxgigStruct.getprop(fetched, "body"), fetchdef["headers"], failed)
        end
      end

      out = {
        "ok" => body_err.nil? && status >= 200 && status < 300,
        "status" => status,
        "headers" => headers,
        "data" => json_data,
      }
      out["err"] = utility.clean.call(ctx, body_err) unless body_err.nil?
      return out
    end

    return {
      "ok" => false,
      "err" => ctx.make_error("direct_invalid", "invalid response type"),
    }
  end

  # Raw GraphQL access: the pressure valve that makes the generated surface's
  # deliberate omissions (per-call selection sets, typed filter builders,
  # batching, subscriptions) livable — the whole schema stays reachable.
  #
  # Thin wrapper over the same prepare/fetch path direct uses, with the one
  # thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
  # as a top-level `errors` array, so status alone would report a failed
  # query as ok.
  #
  # NOTE: like direct, this bypasses the feature pipeline — no retry,
  # ratelimit or paging features apply.
  def graphql(query, variables = nil, ctrl = nil)
    return op_denied("graphql") unless op_allowed?("graphql")

    res = raw_request({
      "method" => "POST",
      "headers" => { "content-type" => "application/json" },
      "body" => { "query" => query, "variables" => variables || {} },
      "ctrl" => ctrl || {},
    })

    # Errors are read BEFORE any status check: a GraphQL parse or validation
    # failure comes back as HTTP 400 carrying the standard { errors: [...] }
    # body, and the raw path represents a non-2xx as ok:false with no err —
    # so returning early on status would discard the server's own
    # diagnostics, which are the only useful part of that response.
    errors = VoxgigStruct.getpath(res, "data.errors")

    if errors.is_a?(Array) && !errors.empty?
      first = errors[0].is_a?(Hash) ? errors[0] : {}
      msg = first["message"]
      msg = "graphql error" if msg.nil? || msg.to_s.empty?
      res["ok"] = false
      res["err"] = LoppeeBusinessError.new(
        "LoppeeBusinessSDK: graphql: #{msg}", code: "graphql_error")
      res["graphql"] = errors
    end

    res
  end


  # Canonical facade: client.AgentAccess.list / client.AgentAccess.load({ "id" => ... })
  def AgentAccess(data = nil)
    require_relative 'entity/agent_access_entity'
    AgentAccessEntity.new(self, data)
  end


  # Canonical facade: client.AgentCapability.list / client.AgentCapability.load({ "id" => ... })
  def AgentCapability(data = nil)
    require_relative 'entity/agent_capability_entity'
    AgentCapabilityEntity.new(self, data)
  end


  # Canonical facade: client.AgentConnectionTest.list / client.AgentConnectionTest.load({ "id" => ... })
  def AgentConnectionTest(data = nil)
    require_relative 'entity/agent_connection_test_entity'
    AgentConnectionTestEntity.new(self, data)
  end


  # Canonical facade: client.AgentIntegration.list / client.AgentIntegration.load({ "id" => ... })
  def AgentIntegration(data = nil)
    require_relative 'entity/agent_integration_entity'
    AgentIntegrationEntity.new(self, data)
  end


  # Canonical facade: client.AgentMonitoring.list / client.AgentMonitoring.load({ "id" => ... })
  def AgentMonitoring(data = nil)
    require_relative 'entity/agent_monitoring_entity'
    AgentMonitoringEntity.new(self, data)
  end


  # Canonical facade: client.AgentOpenapi.list / client.AgentOpenapi.load({ "id" => ... })
  def AgentOpenapi(data = nil)
    require_relative 'entity/agent_openapi_entity'
    AgentOpenapiEntity.new(self, data)
  end


  # Canonical facade: client.AgentPolicy.list / client.AgentPolicy.load({ "id" => ... })
  def AgentPolicy(data = nil)
    require_relative 'entity/agent_policy_entity'
    AgentPolicyEntity.new(self, data)
  end


  # Canonical facade: client.AnonymousLocationProofRevocation.list / client.AnonymousLocationProofRevocation.load({ "id" => ... })
  def AnonymousLocationProofRevocation(data = nil)
    require_relative 'entity/anonymous_location_proof_revocation_entity'
    AnonymousLocationProofRevocationEntity.new(self, data)
  end


  # Canonical facade: client.BusinessApplication.list / client.BusinessApplication.load({ "id" => ... })
  def BusinessApplication(data = nil)
    require_relative 'entity/business_application_entity'
    BusinessApplicationEntity.new(self, data)
  end


  # Canonical facade: client.BusinessClaim.list / client.BusinessClaim.load({ "id" => ... })
  def BusinessClaim(data = nil)
    require_relative 'entity/business_claim_entity'
    BusinessClaimEntity.new(self, data)
  end


  # Canonical facade: client.BusinessDeal.list / client.BusinessDeal.load({ "id" => ... })
  def BusinessDeal(data = nil)
    require_relative 'entity/business_deal_entity'
    BusinessDealEntity.new(self, data)
  end


  # Canonical facade: client.BusinessIndex.list / client.BusinessIndex.load({ "id" => ... })
  def BusinessIndex(data = nil)
    require_relative 'entity/business_index_entity'
    BusinessIndexEntity.new(self, data)
  end


  # Canonical facade: client.BusinessOwner.list / client.BusinessOwner.load({ "id" => ... })
  def BusinessOwner(data = nil)
    require_relative 'entity/business_owner_entity'
    BusinessOwnerEntity.new(self, data)
  end


  # Canonical facade: client.BusinessReview.list / client.BusinessReview.load({ "id" => ... })
  def BusinessReview(data = nil)
    require_relative 'entity/business_review_entity'
    BusinessReviewEntity.new(self, data)
  end


  # Canonical facade: client.ChatAttachment.list / client.ChatAttachment.load({ "id" => ... })
  def ChatAttachment(data = nil)
    require_relative 'entity/chat_attachment_entity'
    ChatAttachmentEntity.new(self, data)
  end


  # Canonical facade: client.ChatAttachmentUrl.list / client.ChatAttachmentUrl.load({ "id" => ... })
  def ChatAttachmentUrl(data = nil)
    require_relative 'entity/chat_attachment_url_entity'
    ChatAttachmentUrlEntity.new(self, data)
  end


  # Canonical facade: client.ClaimVerificationSend.list / client.ClaimVerificationSend.load({ "id" => ... })
  def ClaimVerificationSend(data = nil)
    require_relative 'entity/claim_verification_send_entity'
    ClaimVerificationSendEntity.new(self, data)
  end


  # Canonical facade: client.ClaimVerificationVerify.list / client.ClaimVerificationVerify.load({ "id" => ... })
  def ClaimVerificationVerify(data = nil)
    require_relative 'entity/claim_verification_verify_entity'
    ClaimVerificationVerifyEntity.new(self, data)
  end


  # Canonical facade: client.CommercialClick.list / client.CommercialClick.load({ "id" => ... })
  def CommercialClick(data = nil)
    require_relative 'entity/commercial_click_entity'
    CommercialClickEntity.new(self, data)
  end


  # Canonical facade: client.ContactRecorded.list / client.ContactRecorded.load({ "id" => ... })
  def ContactRecorded(data = nil)
    require_relative 'entity/contact_recorded_entity'
    ContactRecordedEntity.new(self, data)
  end


  # Canonical facade: client.Conversation.list / client.Conversation.load({ "id" => ... })
  def Conversation(data = nil)
    require_relative 'entity/conversation_entity'
    ConversationEntity.new(self, data)
  end


  # Canonical facade: client.ConversationClose.list / client.ConversationClose.load({ "id" => ... })
  def ConversationClose(data = nil)
    require_relative 'entity/conversation_close_entity'
    ConversationCloseEntity.new(self, data)
  end


  # Canonical facade: client.ConversationReport.list / client.ConversationReport.load({ "id" => ... })
  def ConversationReport(data = nil)
    require_relative 'entity/conversation_report_entity'
    ConversationReportEntity.new(self, data)
  end


  # Canonical facade: client.ConversationWorkflow.list / client.ConversationWorkflow.load({ "id" => ... })
  def ConversationWorkflow(data = nil)
    require_relative 'entity/conversation_workflow_entity'
    ConversationWorkflowEntity.new(self, data)
  end


  # Canonical facade: client.CreateAgentApiKey.list / client.CreateAgentApiKey.load({ "id" => ... })
  def CreateAgentApiKey(data = nil)
    require_relative 'entity/create_agent_api_key_entity'
    CreateAgentApiKeyEntity.new(self, data)
  end


  # Canonical facade: client.Customer.list / client.Customer.load({ "id" => ... })
  def Customer(data = nil)
    require_relative 'entity/customer_entity'
    CustomerEntity.new(self, data)
  end


  # Canonical facade: client.CustomerAccount.list / client.CustomerAccount.load({ "id" => ... })
  def CustomerAccount(data = nil)
    require_relative 'entity/customer_account_entity'
    CustomerAccountEntity.new(self, data)
  end


  # Canonical facade: client.CustomerLocationProofRevocation.list / client.CustomerLocationProofRevocation.load({ "id" => ... })
  def CustomerLocationProofRevocation(data = nil)
    require_relative 'entity/customer_location_proof_revocation_entity'
    CustomerLocationProofRevocationEntity.new(self, data)
  end


  # Canonical facade: client.DestinationAddressSuggestion.list / client.DestinationAddressSuggestion.load({ "id" => ... })
  def DestinationAddressSuggestion(data = nil)
    require_relative 'entity/destination_address_suggestion_entity'
    DestinationAddressSuggestionEntity.new(self, data)
  end


  # Canonical facade: client.DestinationLocationProof.list / client.DestinationLocationProof.load({ "id" => ... })
  def DestinationLocationProof(data = nil)
    require_relative 'entity/destination_location_proof_entity'
    DestinationLocationProofEntity.new(self, data)
  end


  # Canonical facade: client.DomainTrustCard.list / client.DomainTrustCard.load({ "id" => ... })
  def DomainTrustCard(data = nil)
    require_relative 'entity/domain_trust_card_entity'
    DomainTrustCardEntity.new(self, data)
  end


  # Canonical facade: client.GeoContext.list / client.GeoContext.load({ "id" => ... })
  def GeoContext(data = nil)
    require_relative 'entity/geo_context_entity'
    GeoContextEntity.new(self, data)
  end


  # Canonical facade: client.Health.list / client.Health.load({ "id" => ... })
  def Health(data = nil)
    require_relative 'entity/health_entity'
    HealthEntity.new(self, data)
  end


  # Canonical facade: client.JobApplication.list / client.JobApplication.load({ "id" => ... })
  def JobApplication(data = nil)
    require_relative 'entity/job_application_entity'
    JobApplicationEntity.new(self, data)
  end


  # Canonical facade: client.JobResumeSignedUrl.list / client.JobResumeSignedUrl.load({ "id" => ... })
  def JobResumeSignedUrl(data = nil)
    require_relative 'entity/job_resume_signed_url_entity'
    JobResumeSignedUrlEntity.new(self, data)
  end


  # Canonical facade: client.LocationHandoff.list / client.LocationHandoff.load({ "id" => ... })
  def LocationHandoff(data = nil)
    require_relative 'entity/location_handoff_entity'
    LocationHandoffEntity.new(self, data)
  end


  # Canonical facade: client.Message.list / client.Message.load({ "id" => ... })
  def Message(data = nil)
    require_relative 'entity/message_entity'
    MessageEntity.new(self, data)
  end


  # Canonical facade: client.ModeratedAction.list / client.ModeratedAction.load({ "id" => ... })
  def ModeratedAction(data = nil)
    require_relative 'entity/moderated_action_entity'
    ModeratedActionEntity.new(self, data)
  end


  # Canonical facade: client.OpenApiDocument.list / client.OpenApiDocument.load({ "id" => ... })
  def OpenApiDocument(data = nil)
    require_relative 'entity/open_api_document_entity'
    OpenApiDocumentEntity.new(self, data)
  end


  # Canonical facade: client.Operation.list / client.Operation.load({ "id" => ... })
  def Operation(data = nil)
    require_relative 'entity/operation_entity'
    OperationEntity.new(self, data)
  end


  # Canonical facade: client.OwnerNotification.list / client.OwnerNotification.load({ "id" => ... })
  def OwnerNotification(data = nil)
    require_relative 'entity/owner_notification_entity'
    OwnerNotificationEntity.new(self, data)
  end


  # Canonical facade: client.OwnerNotificationSetting.list / client.OwnerNotificationSetting.load({ "id" => ... })
  def OwnerNotificationSetting(data = nil)
    require_relative 'entity/owner_notification_setting_entity'
    OwnerNotificationSettingEntity.new(self, data)
  end


  # Canonical facade: client.OwnerWebhookEndpoint.list / client.OwnerWebhookEndpoint.load({ "id" => ... })
  def OwnerWebhookEndpoint(data = nil)
    require_relative 'entity/owner_webhook_endpoint_entity'
    OwnerWebhookEndpointEntity.new(self, data)
  end


  # Canonical facade: client.OwnerWebhookRegistration.list / client.OwnerWebhookRegistration.load({ "id" => ... })
  def OwnerWebhookRegistration(data = nil)
    require_relative 'entity/owner_webhook_registration_entity'
    OwnerWebhookRegistrationEntity.new(self, data)
  end


  # Canonical facade: client.Pricing.list / client.Pricing.load({ "id" => ... })
  def Pricing(data = nil)
    require_relative 'entity/pricing_entity'
    PricingEntity.new(self, data)
  end


  # Canonical facade: client.PromoteVerifiedTransaction.list / client.PromoteVerifiedTransaction.load({ "id" => ... })
  def PromoteVerifiedTransaction(data = nil)
    require_relative 'entity/promote_verified_transaction_entity'
    PromoteVerifiedTransactionEntity.new(self, data)
  end


  # Canonical facade: client.PublicContent.list / client.PublicContent.load({ "id" => ... })
  def PublicContent(data = nil)
    require_relative 'entity/public_content_entity'
    PublicContentEntity.new(self, data)
  end


  # Canonical facade: client.Recommend.list / client.Recommend.load({ "id" => ... })
  def Recommend(data = nil)
    require_relative 'entity/recommend_entity'
    RecommendEntity.new(self, data)
  end


  # Canonical facade: client.Review.list / client.Review.load({ "id" => ... })
  def Review(data = nil)
    require_relative 'entity/review_entity'
    ReviewEntity.new(self, data)
  end


  # Canonical facade: client.Revoke.list / client.Revoke.load({ "id" => ... })
  def Revoke(data = nil)
    require_relative 'entity/revoke_entity'
    RevokeEntity.new(self, data)
  end


  # Canonical facade: client.SaveBusiness.list / client.SaveBusiness.load({ "id" => ... })
  def SaveBusiness(data = nil)
    require_relative 'entity/save_business_entity'
    SaveBusinessEntity.new(self, data)
  end


  # Canonical facade: client.SavedBusiness.list / client.SavedBusiness.load({ "id" => ... })
  def SavedBusiness(data = nil)
    require_relative 'entity/saved_business_entity'
    SavedBusinessEntity.new(self, data)
  end


  # Canonical facade: client.SavedLocation.list / client.SavedLocation.load({ "id" => ... })
  def SavedLocation(data = nil)
    require_relative 'entity/saved_location_entity'
    SavedLocationEntity.new(self, data)
  end


  # Canonical facade: client.Search.list / client.Search.load({ "id" => ... })
  def Search(data = nil)
    require_relative 'entity/search_entity'
    SearchEntity.new(self, data)
  end


  # Canonical facade: client.Suggest.list / client.Suggest.load({ "id" => ... })
  def Suggest(data = nil)
    require_relative 'entity/suggest_entity'
    SuggestEntity.new(self, data)
  end


  # Canonical facade: client.SupportInternalNote.list / client.SupportInternalNote.load({ "id" => ... })
  def SupportInternalNote(data = nil)
    require_relative 'entity/support_internal_note_entity'
    SupportInternalNoteEntity.new(self, data)
  end


  # Canonical facade: client.SupportWorkflow.list / client.SupportWorkflow.load({ "id" => ... })
  def SupportWorkflow(data = nil)
    require_relative 'entity/support_workflow_entity'
    SupportWorkflowEntity.new(self, data)
  end


  # Canonical facade: client.TaxonomySuggestion.list / client.TaxonomySuggestion.load({ "id" => ... })
  def TaxonomySuggestion(data = nil)
    require_relative 'entity/taxonomy_suggestion_entity'
    TaxonomySuggestionEntity.new(self, data)
  end


  # Canonical facade: client.TrustCard.list / client.TrustCard.load({ "id" => ... })
  def TrustCard(data = nil)
    require_relative 'entity/trust_card_entity'
    TrustCardEntity.new(self, data)
  end


  # Canonical facade: client.UnsaveBusiness.list / client.UnsaveBusiness.load({ "id" => ... })
  def UnsaveBusiness(data = nil)
    require_relative 'entity/unsave_business_entity'
    UnsaveBusinessEntity.new(self, data)
  end


  # Canonical facade: client.UpdateAgentBillingAccount.list / client.UpdateAgentBillingAccount.load({ "id" => ... })
  def UpdateAgentBillingAccount(data = nil)
    require_relative 'entity/update_agent_billing_account_entity'
    UpdateAgentBillingAccountEntity.new(self, data)
  end


  # Canonical facade: client.WithdrawJobApplication.list / client.WithdrawJobApplication.load({ "id" => ... })
  def WithdrawJobApplication(data = nil)
    require_relative 'entity/withdraw_job_application_entity'
    WithdrawJobApplicationEntity.new(self, data)
  end



  def self.test(testopts = nil, sdkopts = nil)
    sdkopts = sdkopts || {}
    sdkopts = VoxgigStruct.clone(sdkopts)
    sdkopts = {} unless sdkopts.is_a?(Hash)

    testopts = testopts || {}
    testopts = VoxgigStruct.clone(testopts)
    testopts = {} unless testopts.is_a?(Hash)
    testopts["active"] = true

    VoxgigStruct.setpath(sdkopts, "feature.test", testopts)

    sdk = LoppeeBusinessSDK.new(sdkopts)
    sdk.mode = "test"
    sdk
  end
end
