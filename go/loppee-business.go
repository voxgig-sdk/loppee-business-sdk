package voxgigloppeebusinesssdk

import (
	"github.com/voxgig-sdk/loppee-business-sdk/go/core"
	"github.com/voxgig-sdk/loppee-business-sdk/go/entity"
	"github.com/voxgig-sdk/loppee-business-sdk/go/feature"
	_ "github.com/voxgig-sdk/loppee-business-sdk/go/utility"
)

// Type aliases preserve external API.
type LoppeeBusinessSDK = core.LoppeeBusinessSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type LoppeeBusinessEntity = core.LoppeeBusinessEntity
type StreamItem = core.StreamItem
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type LoppeeBusinessError = core.LoppeeBusinessError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewRatelimitFeatureFunc = func() core.Feature {
		return feature.NewRatelimitFeature()
	}
	core.NewRetryFeatureFunc = func() core.Feature {
		return feature.NewRetryFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewTimeoutFeatureFunc = func() core.Feature {
		return feature.NewTimeoutFeature()
	}
	core.NewAgentAccessEntityFunc = func(client *core.LoppeeBusinessSDK, entopts map[string]any) core.LoppeeBusinessEntity {
		return entity.NewAgentAccessEntity(client, entopts)
	}
	core.NewAgentCapabilityEntityFunc = func(client *core.LoppeeBusinessSDK, entopts map[string]any) core.LoppeeBusinessEntity {
		return entity.NewAgentCapabilityEntity(client, entopts)
	}
	core.NewAgentConnectionTestEntityFunc = func(client *core.LoppeeBusinessSDK, entopts map[string]any) core.LoppeeBusinessEntity {
		return entity.NewAgentConnectionTestEntity(client, entopts)
	}
	core.NewAgentIntegrationEntityFunc = func(client *core.LoppeeBusinessSDK, entopts map[string]any) core.LoppeeBusinessEntity {
		return entity.NewAgentIntegrationEntity(client, entopts)
	}
	core.NewAgentMonitoringEntityFunc = func(client *core.LoppeeBusinessSDK, entopts map[string]any) core.LoppeeBusinessEntity {
		return entity.NewAgentMonitoringEntity(client, entopts)
	}
	core.NewAgentOpenapiEntityFunc = func(client *core.LoppeeBusinessSDK, entopts map[string]any) core.LoppeeBusinessEntity {
		return entity.NewAgentOpenapiEntity(client, entopts)
	}
	core.NewAgentPolicyEntityFunc = func(client *core.LoppeeBusinessSDK, entopts map[string]any) core.LoppeeBusinessEntity {
		return entity.NewAgentPolicyEntity(client, entopts)
	}
	core.NewAnonymousLocationProofRevocationEntityFunc = func(client *core.LoppeeBusinessSDK, entopts map[string]any) core.LoppeeBusinessEntity {
		return entity.NewAnonymousLocationProofRevocationEntity(client, entopts)
	}
	core.NewBusinessApplicationEntityFunc = func(client *core.LoppeeBusinessSDK, entopts map[string]any) core.LoppeeBusinessEntity {
		return entity.NewBusinessApplicationEntity(client, entopts)
	}
	core.NewBusinessClaimEntityFunc = func(client *core.LoppeeBusinessSDK, entopts map[string]any) core.LoppeeBusinessEntity {
		return entity.NewBusinessClaimEntity(client, entopts)
	}
	core.NewBusinessDealEntityFunc = func(client *core.LoppeeBusinessSDK, entopts map[string]any) core.LoppeeBusinessEntity {
		return entity.NewBusinessDealEntity(client, entopts)
	}
	core.NewBusinessIndexEntityFunc = func(client *core.LoppeeBusinessSDK, entopts map[string]any) core.LoppeeBusinessEntity {
		return entity.NewBusinessIndexEntity(client, entopts)
	}
	core.NewBusinessOwnerEntityFunc = func(client *core.LoppeeBusinessSDK, entopts map[string]any) core.LoppeeBusinessEntity {
		return entity.NewBusinessOwnerEntity(client, entopts)
	}
	core.NewBusinessReviewEntityFunc = func(client *core.LoppeeBusinessSDK, entopts map[string]any) core.LoppeeBusinessEntity {
		return entity.NewBusinessReviewEntity(client, entopts)
	}
	core.NewChatAttachmentEntityFunc = func(client *core.LoppeeBusinessSDK, entopts map[string]any) core.LoppeeBusinessEntity {
		return entity.NewChatAttachmentEntity(client, entopts)
	}
	core.NewChatAttachmentUrlEntityFunc = func(client *core.LoppeeBusinessSDK, entopts map[string]any) core.LoppeeBusinessEntity {
		return entity.NewChatAttachmentUrlEntity(client, entopts)
	}
	core.NewClaimVerificationSendEntityFunc = func(client *core.LoppeeBusinessSDK, entopts map[string]any) core.LoppeeBusinessEntity {
		return entity.NewClaimVerificationSendEntity(client, entopts)
	}
	core.NewClaimVerificationVerifyEntityFunc = func(client *core.LoppeeBusinessSDK, entopts map[string]any) core.LoppeeBusinessEntity {
		return entity.NewClaimVerificationVerifyEntity(client, entopts)
	}
	core.NewCommercialClickEntityFunc = func(client *core.LoppeeBusinessSDK, entopts map[string]any) core.LoppeeBusinessEntity {
		return entity.NewCommercialClickEntity(client, entopts)
	}
	core.NewContactRecordedEntityFunc = func(client *core.LoppeeBusinessSDK, entopts map[string]any) core.LoppeeBusinessEntity {
		return entity.NewContactRecordedEntity(client, entopts)
	}
	core.NewConversationEntityFunc = func(client *core.LoppeeBusinessSDK, entopts map[string]any) core.LoppeeBusinessEntity {
		return entity.NewConversationEntity(client, entopts)
	}
	core.NewConversationCloseEntityFunc = func(client *core.LoppeeBusinessSDK, entopts map[string]any) core.LoppeeBusinessEntity {
		return entity.NewConversationCloseEntity(client, entopts)
	}
	core.NewConversationReportEntityFunc = func(client *core.LoppeeBusinessSDK, entopts map[string]any) core.LoppeeBusinessEntity {
		return entity.NewConversationReportEntity(client, entopts)
	}
	core.NewConversationWorkflowEntityFunc = func(client *core.LoppeeBusinessSDK, entopts map[string]any) core.LoppeeBusinessEntity {
		return entity.NewConversationWorkflowEntity(client, entopts)
	}
	core.NewCreateAgentApiKeyEntityFunc = func(client *core.LoppeeBusinessSDK, entopts map[string]any) core.LoppeeBusinessEntity {
		return entity.NewCreateAgentApiKeyEntity(client, entopts)
	}
	core.NewCustomerEntityFunc = func(client *core.LoppeeBusinessSDK, entopts map[string]any) core.LoppeeBusinessEntity {
		return entity.NewCustomerEntity(client, entopts)
	}
	core.NewCustomerAccountEntityFunc = func(client *core.LoppeeBusinessSDK, entopts map[string]any) core.LoppeeBusinessEntity {
		return entity.NewCustomerAccountEntity(client, entopts)
	}
	core.NewCustomerLocationProofRevocationEntityFunc = func(client *core.LoppeeBusinessSDK, entopts map[string]any) core.LoppeeBusinessEntity {
		return entity.NewCustomerLocationProofRevocationEntity(client, entopts)
	}
	core.NewDestinationAddressSuggestionEntityFunc = func(client *core.LoppeeBusinessSDK, entopts map[string]any) core.LoppeeBusinessEntity {
		return entity.NewDestinationAddressSuggestionEntity(client, entopts)
	}
	core.NewDestinationLocationProofEntityFunc = func(client *core.LoppeeBusinessSDK, entopts map[string]any) core.LoppeeBusinessEntity {
		return entity.NewDestinationLocationProofEntity(client, entopts)
	}
	core.NewDomainTrustCardEntityFunc = func(client *core.LoppeeBusinessSDK, entopts map[string]any) core.LoppeeBusinessEntity {
		return entity.NewDomainTrustCardEntity(client, entopts)
	}
	core.NewGeoContextEntityFunc = func(client *core.LoppeeBusinessSDK, entopts map[string]any) core.LoppeeBusinessEntity {
		return entity.NewGeoContextEntity(client, entopts)
	}
	core.NewHealthEntityFunc = func(client *core.LoppeeBusinessSDK, entopts map[string]any) core.LoppeeBusinessEntity {
		return entity.NewHealthEntity(client, entopts)
	}
	core.NewJobApplicationEntityFunc = func(client *core.LoppeeBusinessSDK, entopts map[string]any) core.LoppeeBusinessEntity {
		return entity.NewJobApplicationEntity(client, entopts)
	}
	core.NewJobResumeSignedUrlEntityFunc = func(client *core.LoppeeBusinessSDK, entopts map[string]any) core.LoppeeBusinessEntity {
		return entity.NewJobResumeSignedUrlEntity(client, entopts)
	}
	core.NewLocationHandoffEntityFunc = func(client *core.LoppeeBusinessSDK, entopts map[string]any) core.LoppeeBusinessEntity {
		return entity.NewLocationHandoffEntity(client, entopts)
	}
	core.NewMessageEntityFunc = func(client *core.LoppeeBusinessSDK, entopts map[string]any) core.LoppeeBusinessEntity {
		return entity.NewMessageEntity(client, entopts)
	}
	core.NewModeratedActionEntityFunc = func(client *core.LoppeeBusinessSDK, entopts map[string]any) core.LoppeeBusinessEntity {
		return entity.NewModeratedActionEntity(client, entopts)
	}
	core.NewOpenApiDocumentEntityFunc = func(client *core.LoppeeBusinessSDK, entopts map[string]any) core.LoppeeBusinessEntity {
		return entity.NewOpenApiDocumentEntity(client, entopts)
	}
	core.NewOperationEntityFunc = func(client *core.LoppeeBusinessSDK, entopts map[string]any) core.LoppeeBusinessEntity {
		return entity.NewOperationEntity(client, entopts)
	}
	core.NewOwnerNotificationEntityFunc = func(client *core.LoppeeBusinessSDK, entopts map[string]any) core.LoppeeBusinessEntity {
		return entity.NewOwnerNotificationEntity(client, entopts)
	}
	core.NewOwnerNotificationSettingEntityFunc = func(client *core.LoppeeBusinessSDK, entopts map[string]any) core.LoppeeBusinessEntity {
		return entity.NewOwnerNotificationSettingEntity(client, entopts)
	}
	core.NewOwnerWebhookEndpointEntityFunc = func(client *core.LoppeeBusinessSDK, entopts map[string]any) core.LoppeeBusinessEntity {
		return entity.NewOwnerWebhookEndpointEntity(client, entopts)
	}
	core.NewOwnerWebhookRegistrationEntityFunc = func(client *core.LoppeeBusinessSDK, entopts map[string]any) core.LoppeeBusinessEntity {
		return entity.NewOwnerWebhookRegistrationEntity(client, entopts)
	}
	core.NewPricingEntityFunc = func(client *core.LoppeeBusinessSDK, entopts map[string]any) core.LoppeeBusinessEntity {
		return entity.NewPricingEntity(client, entopts)
	}
	core.NewPromoteVerifiedTransactionEntityFunc = func(client *core.LoppeeBusinessSDK, entopts map[string]any) core.LoppeeBusinessEntity {
		return entity.NewPromoteVerifiedTransactionEntity(client, entopts)
	}
	core.NewPublicContentEntityFunc = func(client *core.LoppeeBusinessSDK, entopts map[string]any) core.LoppeeBusinessEntity {
		return entity.NewPublicContentEntity(client, entopts)
	}
	core.NewRecommendEntityFunc = func(client *core.LoppeeBusinessSDK, entopts map[string]any) core.LoppeeBusinessEntity {
		return entity.NewRecommendEntity(client, entopts)
	}
	core.NewReviewEntityFunc = func(client *core.LoppeeBusinessSDK, entopts map[string]any) core.LoppeeBusinessEntity {
		return entity.NewReviewEntity(client, entopts)
	}
	core.NewRevokeEntityFunc = func(client *core.LoppeeBusinessSDK, entopts map[string]any) core.LoppeeBusinessEntity {
		return entity.NewRevokeEntity(client, entopts)
	}
	core.NewSaveBusinessEntityFunc = func(client *core.LoppeeBusinessSDK, entopts map[string]any) core.LoppeeBusinessEntity {
		return entity.NewSaveBusinessEntity(client, entopts)
	}
	core.NewSavedBusinessEntityFunc = func(client *core.LoppeeBusinessSDK, entopts map[string]any) core.LoppeeBusinessEntity {
		return entity.NewSavedBusinessEntity(client, entopts)
	}
	core.NewSavedLocationEntityFunc = func(client *core.LoppeeBusinessSDK, entopts map[string]any) core.LoppeeBusinessEntity {
		return entity.NewSavedLocationEntity(client, entopts)
	}
	core.NewSearchEntityFunc = func(client *core.LoppeeBusinessSDK, entopts map[string]any) core.LoppeeBusinessEntity {
		return entity.NewSearchEntity(client, entopts)
	}
	core.NewSuggestEntityFunc = func(client *core.LoppeeBusinessSDK, entopts map[string]any) core.LoppeeBusinessEntity {
		return entity.NewSuggestEntity(client, entopts)
	}
	core.NewSupportInternalNoteEntityFunc = func(client *core.LoppeeBusinessSDK, entopts map[string]any) core.LoppeeBusinessEntity {
		return entity.NewSupportInternalNoteEntity(client, entopts)
	}
	core.NewSupportWorkflowEntityFunc = func(client *core.LoppeeBusinessSDK, entopts map[string]any) core.LoppeeBusinessEntity {
		return entity.NewSupportWorkflowEntity(client, entopts)
	}
	core.NewTaxonomySuggestionEntityFunc = func(client *core.LoppeeBusinessSDK, entopts map[string]any) core.LoppeeBusinessEntity {
		return entity.NewTaxonomySuggestionEntity(client, entopts)
	}
	core.NewTrustCardEntityFunc = func(client *core.LoppeeBusinessSDK, entopts map[string]any) core.LoppeeBusinessEntity {
		return entity.NewTrustCardEntity(client, entopts)
	}
	core.NewUnsaveBusinessEntityFunc = func(client *core.LoppeeBusinessSDK, entopts map[string]any) core.LoppeeBusinessEntity {
		return entity.NewUnsaveBusinessEntity(client, entopts)
	}
	core.NewUpdateAgentBillingAccountEntityFunc = func(client *core.LoppeeBusinessSDK, entopts map[string]any) core.LoppeeBusinessEntity {
		return entity.NewUpdateAgentBillingAccountEntity(client, entopts)
	}
	core.NewWithdrawJobApplicationEntityFunc = func(client *core.LoppeeBusinessSDK, entopts map[string]any) core.LoppeeBusinessEntity {
		return entity.NewWithdrawJobApplicationEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewLoppeeBusinessSDK = core.NewLoppeeBusinessSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewLoppeeBusinessSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *LoppeeBusinessSDK  { return NewLoppeeBusinessSDK(nil) }
func Test() *LoppeeBusinessSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewRatelimitFeature = feature.NewRatelimitFeature
var NewRetryFeature = feature.NewRetryFeature
var NewTestFeature = feature.NewTestFeature
var NewTimeoutFeature = feature.NewTimeoutFeature
