# LoppeeBusiness SDK

from loppeebusiness_sdk.utility.voxgig_struct import voxgig_struct as vs
from loppeebusiness_sdk.core.utility_type import LoppeeBusinessUtility
from loppeebusiness_sdk.core.spec import LoppeeBusinessSpec
from loppeebusiness_sdk.core import helpers
from loppeebusiness_sdk.utility.prepare_method import allowed
from loppeebusiness_sdk.utility.result_body import unreadable_body

# Load utility registration (populates Utility._registrar)
from loppeebusiness_sdk.utility import register

# Load features
from loppeebusiness_sdk.feature.base_feature import LoppeeBusinessBaseFeature
from loppeebusiness_sdk.features import _has_feature, _make_feature


class LoppeeBusinessSDK:
    # The options hold the credential. A slot keeps them reachable as
    # `client.options` and out of `vars(client)` and every attribute dump;
    # the dict entry keeps the instance open for everything else.
    __slots__ = ("_options", "__dict__")

    def __init__(self, options=None):
        self.mode = "live"
        self.features = []
        self._options = None

        utility = LoppeeBusinessUtility()
        self._utility = utility

        from loppeebusiness_sdk.config import shared_config
        config = shared_config()

        self._rootctx = utility.make_context({
            "client": self,
            "utility": utility,
            "config": config,
            "options": options if options is not None else {},
            "shared": {},
        }, None)

        self.options = utility.make_options(self._rootctx)

        if vs.getpath(self.options, "feature.test.active") is True:
            self.mode = "test"

        self._rootctx.options = self.options

        # Add features in the resolved order (make_options puts an explicit
        # list order first, else defaults to test-first). Ordering matters: the
        # `test` feature installs the base mock transport and the transport
        # features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        # current, so `test` must be added before them to sit at the base.
        # Extension feature INSTANCES come from the RAW construction
        # options - extend is consumed exactly once, here. make_options
        # strips the key before cloning (vs.clone flattens arbitrary
        # objects), so self.options never carries the instances.
        feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
        extend = options.get("extend") if isinstance(options, dict) else None
        if not isinstance(extend, list):
            extend = []
        if feature_opts is not None:
            featureorder = vs.getpath(self.options, "__derived__.featureorder")
            if isinstance(featureorder, list):
                for fname in featureorder:
                    fopts = helpers.to_map(feature_opts.get(fname))
                    if fopts is not None and fopts.get("active") is True:
                        # An active name with no generated feature class is
                        # legal when an extend-supplied instance carries that
                        # name (station's adopt path): the instance is added
                        # below, positioned by its own __after__ entry, so
                        # skip it here rather than add a BaseFeature stray
                        # that would silently shift feature positions.
                        if not _has_feature(fname) and any(
                            fname == (f.get("name") if isinstance(f, dict)
                                      else getattr(f, "name", None))
                            for f in extend
                        ):
                            continue
                        utility.feature_add(self._rootctx, _make_feature(fname))

        # Add extension features.
        for f in extend:
            if isinstance(f, dict) or (hasattr(f, "get_name") and callable(f.get_name)):
                utility.feature_add(self._rootctx, f)

        # Initialize features.
        for f in self.features:
            utility.feature_init(self._rootctx, f)

        utility.feature_hook(self._rootctx, "PostConstruct")

        # #BuildFeatures

    @property
    def options(self):
        return self._options

    @options.setter
    def options(self, value):
        self._options = value

    def __repr__(self):
        return "LoppeeBusinessSDK(mode=" + repr(self.mode) + ")"

    def options_map(self):
        out = vs.clone(self.options)
        if isinstance(out, dict):
            return out
        return {}

    def get_utility(self):
        return LoppeeBusinessUtility.copy(self._utility)

    def get_root_ctx(self):
        return self._rootctx

    def prepare(self, fetchargs=None):
        utility = self._utility

        if fetchargs is None:
            fetchargs = {}

        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "prepare",
            "ctrl": ctrl,
        }, self._rootctx)

        options = self.options

        path = vs.getprop(fetchargs, "path") or ""
        if not isinstance(path, str):
            path = ""

        method = vs.getprop(fetchargs, "method") or "GET"
        if not isinstance(method, str):
            method = "GET"
        method = method.upper()

        allow_method = vs.getpath(options, "allow.method")
        if not allowed(allow_method, method):
            raise ctx.make_error("spec_method_allow",
                'Method "' + method +
                '" not allowed by SDK option allow.method value: "' + str(allow_method) + '"')

        params = helpers.to_map(vs.getprop(fetchargs, "params"))
        if params is None:
            params = {}
        query = helpers.to_map(vs.getprop(fetchargs, "query"))
        if query is None:
            query = {}

        headers = utility.prepare_headers(ctx)

        base = vs.getprop(options, "base") or ""
        if not isinstance(base, str):
            base = ""
        prefix = vs.getprop(options, "prefix") or ""
        if not isinstance(prefix, str):
            prefix = ""
        suffix = vs.getprop(options, "suffix") or ""
        if not isinstance(suffix, str):
            suffix = ""

        ctx.spec = LoppeeBusinessSpec({
            "base": base,
            "prefix": prefix,
            "suffix": suffix,
            "path": path,
            "method": method,
            "params": params,
            "query": query,
            "headers": headers,
            "body": vs.getprop(fetchargs, "body"),
            "step": "start",
        })

        # Merge user-provided headers.
        uh = vs.getprop(fetchargs, "headers")
        if isinstance(uh, dict):
            for k, v in uh.items():
                ctx.spec.headers[k] = v

        _, err = utility.prepare_auth(ctx)
        if err is not None:
            raise err

        fetchdef, err = utility.make_fetch_def(ctx)
        if err is not None:
            raise err

        return fetchdef

    # Raw endpoint access is operator-controllable, like every entity op.
    # Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    # either one reaches the same endpoint.
    def direct(self, fetchargs=None):
        if not self._op_allowed("direct"):
            return self._op_denied("direct")

        return self._raw_request(fetchargs)

    # Is this raw-access op permitted by the SDK's allow.op option?
    def _op_allowed(self, op):
        return allowed(vs.getpath(self.options, "allow.op"), op)

    def _op_denied(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return {
            "ok": False,
            "err": Exception(
                "LoppeeBusinessSDK: " + op + ": operation not allowed by"
                ' SDK option allow.op value: "' + str(allow_op) + '"'),
        }

    # Ungated request path shared by direct and graphql, each of which checks
    # its own allow.op token first. Private, rather than a flag on fetchargs:
    # a caller-supplied marker would let anyone opt straight back out of the
    # gate by passing it.
    def _raw_request(self, fetchargs=None):
        utility = self._utility

        try:
            fetchdef = self.prepare(fetchargs)
        except Exception as err:
            # direct() is the raw-HTTP escape hatch: it never raises, it
            # returns a result object callers branch on via result["ok"].
            # That error never passes through make_error, so it is cleaned.
            return {"ok": False, "err": utility.clean(self._rootctx, err)}

        if fetchargs is None:
            fetchargs = {}
        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "direct",
            "ctrl": ctrl,
        }, self._rootctx)

        url = fetchdef.get("url", "")
        fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

        if fetch_err is not None:
            return {"ok": False, "err": utility.clean(ctx, fetch_err)}

        if fetched is None:
            return {
                "ok": False,
                "err": ctx.make_error("direct_no_response", "response: undefined"),
            }

        if isinstance(fetched, dict):
            status = helpers.to_int(vs.getprop(fetched, "status"))
            headers = vs.getprop(fetched, "headers") or {}

            # No-body responses (204, 304) and explicit zero content-length
            # must skip JSON parsing — calling json() on an empty body raises.
            content_length = None
            if isinstance(headers, dict):
                content_length = headers.get("content-length")
            no_body = status in (204, 304) or str(content_length) == "0"

            json_data = None
            body_err = None
            if not no_body:
                jf = vs.getprop(fetched, "json")
                if callable(jf):
                    try:
                        json_data = jf()
                    except Exception:
                        # Non-JSON body (e.g. text/plain, text/html). Surface
                        # status + headers but leave data as None.
                        json_data = None
                if vs.getprop(fetched, "unreadable") is True:
                    failed = None if 200 <= status < 300 else ctx.make_error(
                        "request_status",
                        "request: " + str(status) + ": " + str(vs.getprop(fetched, "statusText")))
                    body_err = unreadable_body(ctx, status, headers, vs.getprop(fetched, "body"),
                                               fetchdef.get("headers"), failed)

            out = {
                "ok": body_err is None and status >= 200 and status < 300,
                "status": status,
                "headers": headers,
                "data": json_data,
            }
            if body_err is not None:
                out["err"] = utility.clean(ctx, body_err)
            return out

        return {
            "ok": False,
            "err": ctx.make_error("direct_invalid", "invalid response type"),
        }

    # Raw GraphQL access: the pressure valve that makes the generated
    # surface's deliberate omissions (per-call selection sets, typed filter
    # builders, batching, subscriptions) livable — the whole schema stays
    # reachable.
    #
    # Thin wrapper over the same prepare/fetch path direct uses, with the one
    # thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
    # as a top-level `errors` array, so status alone would report a failed
    # query as ok.
    #
    # NOTE: like direct, this bypasses the feature pipeline — no retry,
    # ratelimit or paging features apply.
    def graphql(self, query, variables=None, ctrl=None):
        if not self._op_allowed("graphql"):
            return self._op_denied("graphql")

        res = self._raw_request({
            "method": "POST",
            "headers": {"content-type": "application/json"},
            "body": {"query": query, "variables": variables or {}},
            "ctrl": ctrl or {},
        })

        # Errors are read BEFORE any status check: a GraphQL parse or
        # validation failure comes back as HTTP 400 carrying the standard
        # { errors: [...] } body, and the raw path represents a non-2xx as
        # ok:False with no err — so returning early on status would discard
        # the server's own diagnostics, which are the only useful part of
        # that response.
        errors = vs.getpath(res, "data.errors")

        if isinstance(errors, list) and 0 < len(errors):
            first = errors[0] if isinstance(errors[0], dict) else {}
            msg = first.get("message") or "graphql error"
            res["ok"] = False
            res["err"] = Exception("LoppeeBusinessSDK: graphql: " + str(msg))
            res["graphql"] = errors

        return res


    def AgentAccess(self, data=None) -> "AgentAccessEntity":
        """Entity factory: client.AgentAccess().list() / client.AgentAccess().load({"id": ...})."""
        from loppeebusiness_sdk.entity.agent_access_entity import AgentAccessEntity
        return AgentAccessEntity(self, data)


    def AgentCapability(self, data=None) -> "AgentCapabilityEntity":
        """Entity factory: client.AgentCapability().list() / client.AgentCapability().load({"id": ...})."""
        from loppeebusiness_sdk.entity.agent_capability_entity import AgentCapabilityEntity
        return AgentCapabilityEntity(self, data)


    def AgentConnectionTest(self, data=None) -> "AgentConnectionTestEntity":
        """Entity factory: client.AgentConnectionTest().list() / client.AgentConnectionTest().load({"id": ...})."""
        from loppeebusiness_sdk.entity.agent_connection_test_entity import AgentConnectionTestEntity
        return AgentConnectionTestEntity(self, data)


    def AgentIntegration(self, data=None) -> "AgentIntegrationEntity":
        """Entity factory: client.AgentIntegration().list() / client.AgentIntegration().load({"id": ...})."""
        from loppeebusiness_sdk.entity.agent_integration_entity import AgentIntegrationEntity
        return AgentIntegrationEntity(self, data)


    def AgentMonitoring(self, data=None) -> "AgentMonitoringEntity":
        """Entity factory: client.AgentMonitoring().list() / client.AgentMonitoring().load({"id": ...})."""
        from loppeebusiness_sdk.entity.agent_monitoring_entity import AgentMonitoringEntity
        return AgentMonitoringEntity(self, data)


    def AgentOpenapi(self, data=None) -> "AgentOpenapiEntity":
        """Entity factory: client.AgentOpenapi().list() / client.AgentOpenapi().load({"id": ...})."""
        from loppeebusiness_sdk.entity.agent_openapi_entity import AgentOpenapiEntity
        return AgentOpenapiEntity(self, data)


    def AgentPolicy(self, data=None) -> "AgentPolicyEntity":
        """Entity factory: client.AgentPolicy().list() / client.AgentPolicy().load({"id": ...})."""
        from loppeebusiness_sdk.entity.agent_policy_entity import AgentPolicyEntity
        return AgentPolicyEntity(self, data)


    def AnonymousLocationProofRevocation(self, data=None) -> "AnonymousLocationProofRevocationEntity":
        """Entity factory: client.AnonymousLocationProofRevocation().list() / client.AnonymousLocationProofRevocation().load({"id": ...})."""
        from loppeebusiness_sdk.entity.anonymous_location_proof_revocation_entity import AnonymousLocationProofRevocationEntity
        return AnonymousLocationProofRevocationEntity(self, data)


    def BusinessApplication(self, data=None) -> "BusinessApplicationEntity":
        """Entity factory: client.BusinessApplication().list() / client.BusinessApplication().load({"id": ...})."""
        from loppeebusiness_sdk.entity.business_application_entity import BusinessApplicationEntity
        return BusinessApplicationEntity(self, data)


    def BusinessClaim(self, data=None) -> "BusinessClaimEntity":
        """Entity factory: client.BusinessClaim().list() / client.BusinessClaim().load({"id": ...})."""
        from loppeebusiness_sdk.entity.business_claim_entity import BusinessClaimEntity
        return BusinessClaimEntity(self, data)


    def BusinessDeal(self, data=None) -> "BusinessDealEntity":
        """Entity factory: client.BusinessDeal().list() / client.BusinessDeal().load({"id": ...})."""
        from loppeebusiness_sdk.entity.business_deal_entity import BusinessDealEntity
        return BusinessDealEntity(self, data)


    def BusinessIndex(self, data=None) -> "BusinessIndexEntity":
        """Entity factory: client.BusinessIndex().list() / client.BusinessIndex().load({"id": ...})."""
        from loppeebusiness_sdk.entity.business_index_entity import BusinessIndexEntity
        return BusinessIndexEntity(self, data)


    def BusinessOwner(self, data=None) -> "BusinessOwnerEntity":
        """Entity factory: client.BusinessOwner().list() / client.BusinessOwner().load({"id": ...})."""
        from loppeebusiness_sdk.entity.business_owner_entity import BusinessOwnerEntity
        return BusinessOwnerEntity(self, data)


    def BusinessReview(self, data=None) -> "BusinessReviewEntity":
        """Entity factory: client.BusinessReview().list() / client.BusinessReview().load({"id": ...})."""
        from loppeebusiness_sdk.entity.business_review_entity import BusinessReviewEntity
        return BusinessReviewEntity(self, data)


    def ChatAttachment(self, data=None) -> "ChatAttachmentEntity":
        """Entity factory: client.ChatAttachment().list() / client.ChatAttachment().load({"id": ...})."""
        from loppeebusiness_sdk.entity.chat_attachment_entity import ChatAttachmentEntity
        return ChatAttachmentEntity(self, data)


    def ChatAttachmentUrl(self, data=None) -> "ChatAttachmentUrlEntity":
        """Entity factory: client.ChatAttachmentUrl().list() / client.ChatAttachmentUrl().load({"id": ...})."""
        from loppeebusiness_sdk.entity.chat_attachment_url_entity import ChatAttachmentUrlEntity
        return ChatAttachmentUrlEntity(self, data)


    def ClaimVerificationSend(self, data=None) -> "ClaimVerificationSendEntity":
        """Entity factory: client.ClaimVerificationSend().list() / client.ClaimVerificationSend().load({"id": ...})."""
        from loppeebusiness_sdk.entity.claim_verification_send_entity import ClaimVerificationSendEntity
        return ClaimVerificationSendEntity(self, data)


    def ClaimVerificationVerify(self, data=None) -> "ClaimVerificationVerifyEntity":
        """Entity factory: client.ClaimVerificationVerify().list() / client.ClaimVerificationVerify().load({"id": ...})."""
        from loppeebusiness_sdk.entity.claim_verification_verify_entity import ClaimVerificationVerifyEntity
        return ClaimVerificationVerifyEntity(self, data)


    def CommercialClick(self, data=None) -> "CommercialClickEntity":
        """Entity factory: client.CommercialClick().list() / client.CommercialClick().load({"id": ...})."""
        from loppeebusiness_sdk.entity.commercial_click_entity import CommercialClickEntity
        return CommercialClickEntity(self, data)


    def ContactRecorded(self, data=None) -> "ContactRecordedEntity":
        """Entity factory: client.ContactRecorded().list() / client.ContactRecorded().load({"id": ...})."""
        from loppeebusiness_sdk.entity.contact_recorded_entity import ContactRecordedEntity
        return ContactRecordedEntity(self, data)


    def Conversation(self, data=None) -> "ConversationEntity":
        """Entity factory: client.Conversation().list() / client.Conversation().load({"id": ...})."""
        from loppeebusiness_sdk.entity.conversation_entity import ConversationEntity
        return ConversationEntity(self, data)


    def ConversationClose(self, data=None) -> "ConversationCloseEntity":
        """Entity factory: client.ConversationClose().list() / client.ConversationClose().load({"id": ...})."""
        from loppeebusiness_sdk.entity.conversation_close_entity import ConversationCloseEntity
        return ConversationCloseEntity(self, data)


    def ConversationReport(self, data=None) -> "ConversationReportEntity":
        """Entity factory: client.ConversationReport().list() / client.ConversationReport().load({"id": ...})."""
        from loppeebusiness_sdk.entity.conversation_report_entity import ConversationReportEntity
        return ConversationReportEntity(self, data)


    def ConversationWorkflow(self, data=None) -> "ConversationWorkflowEntity":
        """Entity factory: client.ConversationWorkflow().list() / client.ConversationWorkflow().load({"id": ...})."""
        from loppeebusiness_sdk.entity.conversation_workflow_entity import ConversationWorkflowEntity
        return ConversationWorkflowEntity(self, data)


    def CreateAgentApiKey(self, data=None) -> "CreateAgentApiKeyEntity":
        """Entity factory: client.CreateAgentApiKey().list() / client.CreateAgentApiKey().load({"id": ...})."""
        from loppeebusiness_sdk.entity.create_agent_api_key_entity import CreateAgentApiKeyEntity
        return CreateAgentApiKeyEntity(self, data)


    def Customer(self, data=None) -> "CustomerEntity":
        """Entity factory: client.Customer().list() / client.Customer().load({"id": ...})."""
        from loppeebusiness_sdk.entity.customer_entity import CustomerEntity
        return CustomerEntity(self, data)


    def CustomerAccount(self, data=None) -> "CustomerAccountEntity":
        """Entity factory: client.CustomerAccount().list() / client.CustomerAccount().load({"id": ...})."""
        from loppeebusiness_sdk.entity.customer_account_entity import CustomerAccountEntity
        return CustomerAccountEntity(self, data)


    def CustomerLocationProofRevocation(self, data=None) -> "CustomerLocationProofRevocationEntity":
        """Entity factory: client.CustomerLocationProofRevocation().list() / client.CustomerLocationProofRevocation().load({"id": ...})."""
        from loppeebusiness_sdk.entity.customer_location_proof_revocation_entity import CustomerLocationProofRevocationEntity
        return CustomerLocationProofRevocationEntity(self, data)


    def DestinationAddressSuggestion(self, data=None) -> "DestinationAddressSuggestionEntity":
        """Entity factory: client.DestinationAddressSuggestion().list() / client.DestinationAddressSuggestion().load({"id": ...})."""
        from loppeebusiness_sdk.entity.destination_address_suggestion_entity import DestinationAddressSuggestionEntity
        return DestinationAddressSuggestionEntity(self, data)


    def DestinationLocationProof(self, data=None) -> "DestinationLocationProofEntity":
        """Entity factory: client.DestinationLocationProof().list() / client.DestinationLocationProof().load({"id": ...})."""
        from loppeebusiness_sdk.entity.destination_location_proof_entity import DestinationLocationProofEntity
        return DestinationLocationProofEntity(self, data)


    def DomainTrustCard(self, data=None) -> "DomainTrustCardEntity":
        """Entity factory: client.DomainTrustCard().list() / client.DomainTrustCard().load({"id": ...})."""
        from loppeebusiness_sdk.entity.domain_trust_card_entity import DomainTrustCardEntity
        return DomainTrustCardEntity(self, data)


    def GeoContext(self, data=None) -> "GeoContextEntity":
        """Entity factory: client.GeoContext().list() / client.GeoContext().load({"id": ...})."""
        from loppeebusiness_sdk.entity.geo_context_entity import GeoContextEntity
        return GeoContextEntity(self, data)


    def Health(self, data=None) -> "HealthEntity":
        """Entity factory: client.Health().list() / client.Health().load({"id": ...})."""
        from loppeebusiness_sdk.entity.health_entity import HealthEntity
        return HealthEntity(self, data)


    def JobApplication(self, data=None) -> "JobApplicationEntity":
        """Entity factory: client.JobApplication().list() / client.JobApplication().load({"id": ...})."""
        from loppeebusiness_sdk.entity.job_application_entity import JobApplicationEntity
        return JobApplicationEntity(self, data)


    def JobResumeSignedUrl(self, data=None) -> "JobResumeSignedUrlEntity":
        """Entity factory: client.JobResumeSignedUrl().list() / client.JobResumeSignedUrl().load({"id": ...})."""
        from loppeebusiness_sdk.entity.job_resume_signed_url_entity import JobResumeSignedUrlEntity
        return JobResumeSignedUrlEntity(self, data)


    def LocationHandoff(self, data=None) -> "LocationHandoffEntity":
        """Entity factory: client.LocationHandoff().list() / client.LocationHandoff().load({"id": ...})."""
        from loppeebusiness_sdk.entity.location_handoff_entity import LocationHandoffEntity
        return LocationHandoffEntity(self, data)


    def Message(self, data=None) -> "MessageEntity":
        """Entity factory: client.Message().list() / client.Message().load({"id": ...})."""
        from loppeebusiness_sdk.entity.message_entity import MessageEntity
        return MessageEntity(self, data)


    def ModeratedAction(self, data=None) -> "ModeratedActionEntity":
        """Entity factory: client.ModeratedAction().list() / client.ModeratedAction().load({"id": ...})."""
        from loppeebusiness_sdk.entity.moderated_action_entity import ModeratedActionEntity
        return ModeratedActionEntity(self, data)


    def OpenApiDocument(self, data=None) -> "OpenApiDocumentEntity":
        """Entity factory: client.OpenApiDocument().list() / client.OpenApiDocument().load({"id": ...})."""
        from loppeebusiness_sdk.entity.open_api_document_entity import OpenApiDocumentEntity
        return OpenApiDocumentEntity(self, data)


    def Operation(self, data=None) -> "OperationEntity":
        """Entity factory: client.Operation().list() / client.Operation().load({"id": ...})."""
        from loppeebusiness_sdk.entity.operation_entity import OperationEntity
        return OperationEntity(self, data)


    def OwnerNotification(self, data=None) -> "OwnerNotificationEntity":
        """Entity factory: client.OwnerNotification().list() / client.OwnerNotification().load({"id": ...})."""
        from loppeebusiness_sdk.entity.owner_notification_entity import OwnerNotificationEntity
        return OwnerNotificationEntity(self, data)


    def OwnerNotificationSetting(self, data=None) -> "OwnerNotificationSettingEntity":
        """Entity factory: client.OwnerNotificationSetting().list() / client.OwnerNotificationSetting().load({"id": ...})."""
        from loppeebusiness_sdk.entity.owner_notification_setting_entity import OwnerNotificationSettingEntity
        return OwnerNotificationSettingEntity(self, data)


    def OwnerWebhookEndpoint(self, data=None) -> "OwnerWebhookEndpointEntity":
        """Entity factory: client.OwnerWebhookEndpoint().list() / client.OwnerWebhookEndpoint().load({"id": ...})."""
        from loppeebusiness_sdk.entity.owner_webhook_endpoint_entity import OwnerWebhookEndpointEntity
        return OwnerWebhookEndpointEntity(self, data)


    def OwnerWebhookRegistration(self, data=None) -> "OwnerWebhookRegistrationEntity":
        """Entity factory: client.OwnerWebhookRegistration().list() / client.OwnerWebhookRegistration().load({"id": ...})."""
        from loppeebusiness_sdk.entity.owner_webhook_registration_entity import OwnerWebhookRegistrationEntity
        return OwnerWebhookRegistrationEntity(self, data)


    def Pricing(self, data=None) -> "PricingEntity":
        """Entity factory: client.Pricing().list() / client.Pricing().load({"id": ...})."""
        from loppeebusiness_sdk.entity.pricing_entity import PricingEntity
        return PricingEntity(self, data)


    def PromoteVerifiedTransaction(self, data=None) -> "PromoteVerifiedTransactionEntity":
        """Entity factory: client.PromoteVerifiedTransaction().list() / client.PromoteVerifiedTransaction().load({"id": ...})."""
        from loppeebusiness_sdk.entity.promote_verified_transaction_entity import PromoteVerifiedTransactionEntity
        return PromoteVerifiedTransactionEntity(self, data)


    def PublicContent(self, data=None) -> "PublicContentEntity":
        """Entity factory: client.PublicContent().list() / client.PublicContent().load({"id": ...})."""
        from loppeebusiness_sdk.entity.public_content_entity import PublicContentEntity
        return PublicContentEntity(self, data)


    def Recommend(self, data=None) -> "RecommendEntity":
        """Entity factory: client.Recommend().list() / client.Recommend().load({"id": ...})."""
        from loppeebusiness_sdk.entity.recommend_entity import RecommendEntity
        return RecommendEntity(self, data)


    def Review(self, data=None) -> "ReviewEntity":
        """Entity factory: client.Review().list() / client.Review().load({"id": ...})."""
        from loppeebusiness_sdk.entity.review_entity import ReviewEntity
        return ReviewEntity(self, data)


    def Revoke(self, data=None) -> "RevokeEntity":
        """Entity factory: client.Revoke().list() / client.Revoke().load({"id": ...})."""
        from loppeebusiness_sdk.entity.revoke_entity import RevokeEntity
        return RevokeEntity(self, data)


    def SaveBusiness(self, data=None) -> "SaveBusinessEntity":
        """Entity factory: client.SaveBusiness().list() / client.SaveBusiness().load({"id": ...})."""
        from loppeebusiness_sdk.entity.save_business_entity import SaveBusinessEntity
        return SaveBusinessEntity(self, data)


    def SavedBusiness(self, data=None) -> "SavedBusinessEntity":
        """Entity factory: client.SavedBusiness().list() / client.SavedBusiness().load({"id": ...})."""
        from loppeebusiness_sdk.entity.saved_business_entity import SavedBusinessEntity
        return SavedBusinessEntity(self, data)


    def SavedLocation(self, data=None) -> "SavedLocationEntity":
        """Entity factory: client.SavedLocation().list() / client.SavedLocation().load({"id": ...})."""
        from loppeebusiness_sdk.entity.saved_location_entity import SavedLocationEntity
        return SavedLocationEntity(self, data)


    def Search(self, data=None) -> "SearchEntity":
        """Entity factory: client.Search().list() / client.Search().load({"id": ...})."""
        from loppeebusiness_sdk.entity.search_entity import SearchEntity
        return SearchEntity(self, data)


    def Suggest(self, data=None) -> "SuggestEntity":
        """Entity factory: client.Suggest().list() / client.Suggest().load({"id": ...})."""
        from loppeebusiness_sdk.entity.suggest_entity import SuggestEntity
        return SuggestEntity(self, data)


    def SupportInternalNote(self, data=None) -> "SupportInternalNoteEntity":
        """Entity factory: client.SupportInternalNote().list() / client.SupportInternalNote().load({"id": ...})."""
        from loppeebusiness_sdk.entity.support_internal_note_entity import SupportInternalNoteEntity
        return SupportInternalNoteEntity(self, data)


    def SupportWorkflow(self, data=None) -> "SupportWorkflowEntity":
        """Entity factory: client.SupportWorkflow().list() / client.SupportWorkflow().load({"id": ...})."""
        from loppeebusiness_sdk.entity.support_workflow_entity import SupportWorkflowEntity
        return SupportWorkflowEntity(self, data)


    def TaxonomySuggestion(self, data=None) -> "TaxonomySuggestionEntity":
        """Entity factory: client.TaxonomySuggestion().list() / client.TaxonomySuggestion().load({"id": ...})."""
        from loppeebusiness_sdk.entity.taxonomy_suggestion_entity import TaxonomySuggestionEntity
        return TaxonomySuggestionEntity(self, data)


    def TrustCard(self, data=None) -> "TrustCardEntity":
        """Entity factory: client.TrustCard().list() / client.TrustCard().load({"id": ...})."""
        from loppeebusiness_sdk.entity.trust_card_entity import TrustCardEntity
        return TrustCardEntity(self, data)


    def UnsaveBusiness(self, data=None) -> "UnsaveBusinessEntity":
        """Entity factory: client.UnsaveBusiness().list() / client.UnsaveBusiness().load({"id": ...})."""
        from loppeebusiness_sdk.entity.unsave_business_entity import UnsaveBusinessEntity
        return UnsaveBusinessEntity(self, data)


    def UpdateAgentBillingAccount(self, data=None) -> "UpdateAgentBillingAccountEntity":
        """Entity factory: client.UpdateAgentBillingAccount().list() / client.UpdateAgentBillingAccount().load({"id": ...})."""
        from loppeebusiness_sdk.entity.update_agent_billing_account_entity import UpdateAgentBillingAccountEntity
        return UpdateAgentBillingAccountEntity(self, data)


    def WithdrawJobApplication(self, data=None) -> "WithdrawJobApplicationEntity":
        """Entity factory: client.WithdrawJobApplication().list() / client.WithdrawJobApplication().load({"id": ...})."""
        from loppeebusiness_sdk.entity.withdraw_job_application_entity import WithdrawJobApplicationEntity
        return WithdrawJobApplicationEntity(self, data)



    @classmethod
    def test(cls, testopts=None, sdkopts=None) -> "LoppeeBusinessSDK":
        if sdkopts is None:
            sdkopts = {}
        sdkopts = vs.clone(sdkopts)
        if not isinstance(sdkopts, dict):
            sdkopts = {}

        if testopts is None:
            testopts = {}
        testopts = vs.clone(testopts)
        if not isinstance(testopts, dict):
            testopts = {}
        testopts["active"] = True

        vs.setpath(sdkopts, "feature.test", testopts)

        sdk = cls(sdkopts)
        sdk.mode = "test"

        return sdk


from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from loppeebusiness_sdk.entity.agent_access_entity import AgentAccessEntity
    from loppeebusiness_sdk.entity.agent_capability_entity import AgentCapabilityEntity
    from loppeebusiness_sdk.entity.agent_connection_test_entity import AgentConnectionTestEntity
    from loppeebusiness_sdk.entity.agent_integration_entity import AgentIntegrationEntity
    from loppeebusiness_sdk.entity.agent_monitoring_entity import AgentMonitoringEntity
    from loppeebusiness_sdk.entity.agent_openapi_entity import AgentOpenapiEntity
    from loppeebusiness_sdk.entity.agent_policy_entity import AgentPolicyEntity
    from loppeebusiness_sdk.entity.anonymous_location_proof_revocation_entity import AnonymousLocationProofRevocationEntity
    from loppeebusiness_sdk.entity.business_application_entity import BusinessApplicationEntity
    from loppeebusiness_sdk.entity.business_claim_entity import BusinessClaimEntity
    from loppeebusiness_sdk.entity.business_deal_entity import BusinessDealEntity
    from loppeebusiness_sdk.entity.business_index_entity import BusinessIndexEntity
    from loppeebusiness_sdk.entity.business_owner_entity import BusinessOwnerEntity
    from loppeebusiness_sdk.entity.business_review_entity import BusinessReviewEntity
    from loppeebusiness_sdk.entity.chat_attachment_entity import ChatAttachmentEntity
    from loppeebusiness_sdk.entity.chat_attachment_url_entity import ChatAttachmentUrlEntity
    from loppeebusiness_sdk.entity.claim_verification_send_entity import ClaimVerificationSendEntity
    from loppeebusiness_sdk.entity.claim_verification_verify_entity import ClaimVerificationVerifyEntity
    from loppeebusiness_sdk.entity.commercial_click_entity import CommercialClickEntity
    from loppeebusiness_sdk.entity.contact_recorded_entity import ContactRecordedEntity
    from loppeebusiness_sdk.entity.conversation_entity import ConversationEntity
    from loppeebusiness_sdk.entity.conversation_close_entity import ConversationCloseEntity
    from loppeebusiness_sdk.entity.conversation_report_entity import ConversationReportEntity
    from loppeebusiness_sdk.entity.conversation_workflow_entity import ConversationWorkflowEntity
    from loppeebusiness_sdk.entity.create_agent_api_key_entity import CreateAgentApiKeyEntity
    from loppeebusiness_sdk.entity.customer_entity import CustomerEntity
    from loppeebusiness_sdk.entity.customer_account_entity import CustomerAccountEntity
    from loppeebusiness_sdk.entity.customer_location_proof_revocation_entity import CustomerLocationProofRevocationEntity
    from loppeebusiness_sdk.entity.destination_address_suggestion_entity import DestinationAddressSuggestionEntity
    from loppeebusiness_sdk.entity.destination_location_proof_entity import DestinationLocationProofEntity
    from loppeebusiness_sdk.entity.domain_trust_card_entity import DomainTrustCardEntity
    from loppeebusiness_sdk.entity.geo_context_entity import GeoContextEntity
    from loppeebusiness_sdk.entity.health_entity import HealthEntity
    from loppeebusiness_sdk.entity.job_application_entity import JobApplicationEntity
    from loppeebusiness_sdk.entity.job_resume_signed_url_entity import JobResumeSignedUrlEntity
    from loppeebusiness_sdk.entity.location_handoff_entity import LocationHandoffEntity
    from loppeebusiness_sdk.entity.message_entity import MessageEntity
    from loppeebusiness_sdk.entity.moderated_action_entity import ModeratedActionEntity
    from loppeebusiness_sdk.entity.open_api_document_entity import OpenApiDocumentEntity
    from loppeebusiness_sdk.entity.operation_entity import OperationEntity
    from loppeebusiness_sdk.entity.owner_notification_entity import OwnerNotificationEntity
    from loppeebusiness_sdk.entity.owner_notification_setting_entity import OwnerNotificationSettingEntity
    from loppeebusiness_sdk.entity.owner_webhook_endpoint_entity import OwnerWebhookEndpointEntity
    from loppeebusiness_sdk.entity.owner_webhook_registration_entity import OwnerWebhookRegistrationEntity
    from loppeebusiness_sdk.entity.pricing_entity import PricingEntity
    from loppeebusiness_sdk.entity.promote_verified_transaction_entity import PromoteVerifiedTransactionEntity
    from loppeebusiness_sdk.entity.public_content_entity import PublicContentEntity
    from loppeebusiness_sdk.entity.recommend_entity import RecommendEntity
    from loppeebusiness_sdk.entity.review_entity import ReviewEntity
    from loppeebusiness_sdk.entity.revoke_entity import RevokeEntity
    from loppeebusiness_sdk.entity.save_business_entity import SaveBusinessEntity
    from loppeebusiness_sdk.entity.saved_business_entity import SavedBusinessEntity
    from loppeebusiness_sdk.entity.saved_location_entity import SavedLocationEntity
    from loppeebusiness_sdk.entity.search_entity import SearchEntity
    from loppeebusiness_sdk.entity.suggest_entity import SuggestEntity
    from loppeebusiness_sdk.entity.support_internal_note_entity import SupportInternalNoteEntity
    from loppeebusiness_sdk.entity.support_workflow_entity import SupportWorkflowEntity
    from loppeebusiness_sdk.entity.taxonomy_suggestion_entity import TaxonomySuggestionEntity
    from loppeebusiness_sdk.entity.trust_card_entity import TrustCardEntity
    from loppeebusiness_sdk.entity.unsave_business_entity import UnsaveBusinessEntity
    from loppeebusiness_sdk.entity.update_agent_billing_account_entity import UpdateAgentBillingAccountEntity
    from loppeebusiness_sdk.entity.withdraw_job_application_entity import WithdrawJobApplicationEntity
