package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewAgentAccessEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntity

var NewAgentCapabilityEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntity

var NewAgentConnectionTestEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntity

var NewAgentIntegrationEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntity

var NewAgentMonitoringEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntity

var NewAgentOpenapiEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntity

var NewAgentPolicyEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntity

var NewAnonymousLocationProofRevocationEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntity

var NewBusinessApplicationEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntity

var NewBusinessClaimEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntity

var NewBusinessDealEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntity

var NewBusinessIndexEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntity

var NewBusinessOwnerEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntity

var NewBusinessReviewEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntity

var NewChatAttachmentEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntity

var NewChatAttachmentUrlEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntity

var NewClaimVerificationSendEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntity

var NewClaimVerificationVerifyEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntity

var NewCommercialClickEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntity

var NewContactRecordedEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntity

var NewConversationEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntity

var NewConversationCloseEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntity

var NewConversationReportEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntity

var NewConversationWorkflowEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntity

var NewCreateAgentApiKeyEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntity

var NewCustomerEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntity

var NewCustomerAccountEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntity

var NewCustomerLocationProofRevocationEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntity

var NewDestinationAddressSuggestionEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntity

var NewDestinationLocationProofEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntity

var NewDomainTrustCardEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntity

var NewGeoContextEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntity

var NewHealthEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntity

var NewJobApplicationEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntity

var NewJobResumeSignedUrlEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntity

var NewLocationHandoffEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntity

var NewMessageEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntity

var NewModeratedActionEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntity

var NewOpenApiDocumentEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntity

var NewOperationEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntity

var NewOwnerNotificationEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntity

var NewOwnerNotificationSettingEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntity

var NewOwnerWebhookEndpointEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntity

var NewOwnerWebhookRegistrationEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntity

var NewPricingEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntity

var NewPromoteVerifiedTransactionEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntity

var NewPublicContentEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntity

var NewRecommendEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntity

var NewReviewEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntity

var NewRevokeEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntity

var NewSaveBusinessEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntity

var NewSavedBusinessEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntity

var NewSavedLocationEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntity

var NewSearchEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntity

var NewSuggestEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntity

var NewSupportInternalNoteEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntity

var NewSupportWorkflowEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntity

var NewTaxonomySuggestionEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntity

var NewTrustCardEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntity

var NewUnsaveBusinessEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntity

var NewUpdateAgentBillingAccountEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntity

var NewWithdrawJobApplicationEntityFunc func(client *LoppeeBusinessSDK, entopts map[string]any) LoppeeBusinessEntity

