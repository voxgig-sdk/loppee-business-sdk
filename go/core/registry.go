package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewAgentAccessEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntityBase

var NewAgentCapabilityEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntityBase

var NewAgentConnectionTestEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntityBase

var NewAgentIntegrationEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntityBase

var NewAgentMonitoringEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntityBase

var NewAgentOpenapiEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntityBase

var NewAgentPolicyEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntityBase

var NewAnonymousLocationProofRevocationEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntityBase

var NewBusinessApplicationEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntityBase

var NewBusinessClaimEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntityBase

var NewBusinessDealEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntityBase

var NewBusinessIndexEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntityBase

var NewBusinessOwnerEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntityBase

var NewBusinessReviewEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntityBase

var NewChatAttachmentEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntityBase

var NewChatAttachmentUrlEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntityBase

var NewClaimVerificationSendEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntityBase

var NewClaimVerificationVerifyEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntityBase

var NewCommercialClickEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntityBase

var NewContactRecordedEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntityBase

var NewConversationEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntityBase

var NewConversationCloseEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntityBase

var NewConversationReportEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntityBase

var NewConversationWorkflowEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntityBase

var NewCreateAgentApiKeyEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntityBase

var NewCustomerEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntityBase

var NewCustomerAccountEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntityBase

var NewCustomerLocationProofRevocationEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntityBase

var NewDestinationAddressSuggestionEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntityBase

var NewDestinationLocationProofEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntityBase

var NewDomainTrustCardEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntityBase

var NewGeoContextEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntityBase

var NewHealthEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntityBase

var NewJobApplicationEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntityBase

var NewJobResumeSignedUrlEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntityBase

var NewLocationHandoffEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntityBase

var NewMessageEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntityBase

var NewModeratedActionEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntityBase

var NewOpenApiDocumentEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntityBase

var NewOperationEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntityBase

var NewOwnerNotificationEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntityBase

var NewOwnerNotificationSettingEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntityBase

var NewOwnerWebhookEndpointEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntityBase

var NewOwnerWebhookRegistrationEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntityBase

var NewPricingEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntityBase

var NewPromoteVerifiedTransactionEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntityBase

var NewPublicContentEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntityBase

var NewRecommendEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntityBase

var NewReviewEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntityBase

var NewRevokeEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntityBase

var NewSaveBusinessEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntityBase

var NewSavedBusinessEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntityBase

var NewSavedLocationEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntityBase

var NewSearchEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntityBase

var NewSuggestEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntityBase

var NewSupportInternalNoteEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntityBase

var NewSupportWorkflowEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntityBase

var NewTaxonomySuggestionEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntityBase

var NewTrustCardEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntityBase

var NewUnsaveBusinessEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntityBase

var NewUpdateAgentBillingAccountEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntityBase

var NewWithdrawJobApplicationEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntityBase

