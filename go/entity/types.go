// Typed models for the LoppeeBusiness SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/loppee-business-sdk/go/core"
)

// AgentAccess is the typed data model for the agent_access entity.
type AgentAccess struct {
}

// AgentAccessCreateData is the typed request payload for AgentAccess.CreateTyped.
type AgentAccessCreateData struct {
	AgentName string `json:"agent_name"`
	AgentType *string `json:"agent_type,omitempty"`
	CallbackUrl *string `json:"callback_url,omitempty"`
	ComplianceNotes *string `json:"compliance_notes,omitempty"`
	DataNeeds *string `json:"data_needs,omitempty"`
	DeveloperEmail string `json:"developer_email"`
	OperatingStates *[]any `json:"operating_states,omitempty"`
	OrganizationName string `json:"organization_name"`
	RequestedActions *[]any `json:"requested_actions,omitempty"`
	SafetyContact *string `json:"safety_contact,omitempty"`
	TargetCategories *[]any `json:"target_categories,omitempty"`
	UseCase *string `json:"use_case,omitempty"`
	Website *string `json:"website,omitempty"`
}

// AgentCapability is the typed data model for the agent_capability entity.
type AgentCapability struct {
}

// AgentCapabilityLoadMatch is the typed request payload for AgentCapability.LoadTyped.
type AgentCapabilityLoadMatch struct {
	AgentPhoneLocationBridge *map[string]any `json:"agent_phone_location_bridge,omitempty"`
	AgentRules *map[string]any `json:"agent_rules,omitempty"`
	Discovery *map[string]any `json:"discovery,omitempty"`
	ExternalAgentAccess *map[string]any `json:"external_agent_access,omitempty"`
	ExternalAgentWebhooks *map[string]any `json:"external_agent_webhooks,omitempty"`
	LocalDiscoveryLocationPolicy *map[string]any `json:"local_discovery_location_policy,omitempty"`
	LocationChoices *map[string]any `json:"location_choices,omitempty"`
	RegistryName *any `json:"registry_name,omitempty"`
	SchemaVersion *any `json:"schema_version,omitempty"`
	TrustModelVersion *any `json:"trust_model_version,omitempty"`
}

// AgentConnectionTest is the typed data model for the agent_connection_test entity.
type AgentConnectionTest struct {
}

// AgentConnectionTestCreateData is the typed request payload for AgentConnectionTest.CreateTyped.
type AgentConnectionTestCreateData struct {
	Key *string `json:"key,omitempty"`
}

// AgentIntegration is the typed data model for the agent_integration entity.
type AgentIntegration struct {
}

// AgentIntegrationListMatch is the typed request payload for AgentIntegration.ListTyped.
type AgentIntegrationListMatch struct {
	AuthModel *map[string]any `json:"auth_model,omitempty"`
	CommercialInfluence *map[string]any `json:"commercial_influence,omitempty"`
	DeveloperDocsUrl *string `json:"developer_docs_url,omitempty"`
	ExposureTiers *map[string]any `json:"exposure_tiers,omitempty"`
	ExternalAgentAccess *map[string]any `json:"external_agent_access,omitempty"`
	GeneratedAt *string `json:"generated_at,omitempty"`
	HttpApi *map[string]any `json:"http_api,omitempty"`
	Legal *map[string]any `json:"legal,omitempty"`
	Mcp *map[string]any `json:"mcp,omitempty"`
	McpClientExampleUrl *string `json:"mcp_client_example_url,omitempty"`
	MonitoringUrl *string `json:"monitoring_url,omitempty"`
	OpenapiUrl *string `json:"openapi_url,omitempty"`
	OpenapiV1Url *string `json:"openapi_v1_url,omitempty"`
	OperationalRules *[]any `json:"operational_rules,omitempty"`
	OwnerAgentNotifications *map[string]any `json:"owner_agent_notifications,omitempty"`
	PackageUrl *string `json:"package_url,omitempty"`
	PublicBaseUrl *string `json:"public_base_url,omitempty"`
	RateLimits *map[string]any `json:"rate_limits,omitempty"`
	RegistryName *any `json:"registry_name,omitempty"`
	SchemaVersion *string `json:"schema_version,omitempty"`
	TrustCardContract *map[string]any `json:"trust_card_contract,omitempty"`
	TrustDoctrine *map[string]any `json:"trust_doctrine,omitempty"`
}

// AgentMonitoring is the typed data model for the agent_monitoring entity.
type AgentMonitoring struct {
}

// AgentMonitoringLoadMatch is the typed request payload for AgentMonitoring.LoadTyped.
type AgentMonitoringLoadMatch struct {
	BuildSha *string `json:"build_sha,omitempty"`
	ContractVersion *string `json:"contract_version,omitempty"`
	GeneratedAt *string `json:"generated_at,omitempty"`
	HealthUrl *string `json:"health_url,omitempty"`
	IntegrationPackageUrl *string `json:"integration_package_url,omitempty"`
	McpUrl *string `json:"mcp_url,omitempty"`
	Metrics *map[string]any `json:"metrics,omitempty"`
	OpenapiUrl *string `json:"openapi_url,omitempty"`
	RateLimits *map[string]any `json:"rate_limits,omitempty"`
	RegistryName *any `json:"registry_name,omitempty"`
	SchemaVersion *string `json:"schema_version,omitempty"`
	Service *string `json:"service,omitempty"`
	UptimeSeconds *float64 `json:"uptime_seconds,omitempty"`
	Version *string `json:"version,omitempty"`
}

// AgentOpenapi is the typed data model for the agent_openapi entity.
type AgentOpenapi struct {
}

// AgentOpenapiListMatch is the typed request payload for AgentOpenapi.ListTyped.
type AgentOpenapiListMatch struct {
	Components *map[string]any `json:"components,omitempty"`
	Info *map[string]any `json:"info,omitempty"`
	Openapi *any `json:"openapi,omitempty"`
	Paths *map[string]any `json:"paths,omitempty"`
	Servers *[]any `json:"servers,omitempty"`
	Tags *[]any `json:"tags,omitempty"`
}

// AgentPolicy is the typed data model for the agent_policy entity.
type AgentPolicy struct {
}

// AgentPolicyLoadMatch is the typed request payload for AgentPolicy.LoadTyped.
type AgentPolicyLoadMatch struct {
	ExternalAgentAccess *map[string]any `json:"external_agent_access,omitempty"`
	ExternalAgentWebhooks *map[string]any `json:"external_agent_webhooks,omitempty"`
	LocalDiscoveryLocationPolicy *map[string]any `json:"local_discovery_location_policy,omitempty"`
	LocationHandoffFlow *map[string]any `json:"location_handoff_flow,omitempty"`
	Payment *map[string]any `json:"payment,omitempty"`
	Publication *map[string]any `json:"publication,omitempty"`
	SchemaVersion *any `json:"schema_version,omitempty"`
	TrustModelVersion *any `json:"trust_model_version,omitempty"`
	Verification *map[string]any `json:"verification,omitempty"`
}

// AnonymousLocationProofRevocation is the typed data model for the anonymous_location_proof_revocation entity.
type AnonymousLocationProofRevocation struct {
}

// AnonymousLocationProofRevocationCreateData is the typed request payload for AnonymousLocationProofRevocation.CreateTyped.
type AnonymousLocationProofRevocationCreateData struct {
	AccuracyMeters float64 `json:"accuracy_meters"`
	CapturedAt string `json:"captured_at"`
	Latitude float64 `json:"latitude"`
	Longitude float64 `json:"longitude"`
}

// AnonymousLocationProofRevocationRemoveMatch is the typed request payload for AnonymousLocationProofRevocation.RemoveTyped.
type AnonymousLocationProofRevocationRemoveMatch struct {
	LocationProofId string `json:"location_proof_id"`
}

// BusinessApplication is the typed data model for the business_application entity.
type BusinessApplication struct {
}

// BusinessApplicationCreateData is the typed request payload for BusinessApplication.CreateTyped.
type BusinessApplicationCreateData struct {
	Application map[string]any `json:"application"`
	BusinessId *string `json:"business_id,omitempty"`
	ClaimId *any `json:"claim_id,omitempty"`
	Files *[]any `json:"files,omitempty"`
	ListingId *string `json:"listing_id,omitempty"`
}

// BusinessClaim is the typed data model for the business_claim entity.
type BusinessClaim struct {
}

// BusinessClaimCreateData is the typed request payload for BusinessClaim.CreateTyped.
type BusinessClaimCreateData struct {
	BusinessId *any `json:"business_id,omitempty"`
	Category *string `json:"category,omitempty"`
	City *string `json:"city,omitempty"`
	ClaimantEmail *string `json:"claimant_email,omitempty"`
	ClaimantName *string `json:"claimant_name,omitempty"`
	ClaimantRelationship *string `json:"claimant_relationship,omitempty"`
	DisplayName string `json:"display_name"`
	ListingId *string `json:"listing_id,omitempty"`
	Notes *string `json:"notes,omitempty"`
	Phone *string `json:"phone,omitempty"`
	Source *string `json:"source,omitempty"`
	SourceType *string `json:"source_type,omitempty"`
	SourceUrl *string `json:"source_url,omitempty"`
	State *string `json:"state,omitempty"`
	Website *string `json:"website,omitempty"`
}

// BusinessDeal is the typed data model for the business_deal entity.
type BusinessDeal struct {
}

// BusinessDealListMatch is the typed request payload for BusinessDeal.ListTyped.
type BusinessDealListMatch struct {
	Id string `json:"id"`
}

// BusinessIndex is the typed data model for the business_index entity.
type BusinessIndex struct {
}

// BusinessIndexListMatch is the typed request payload for BusinessIndex.ListTyped.
type BusinessIndexListMatch struct {
	Cursor *string `json:"cursor,omitempty"`
	Limit *float64 `json:"limit,omitempty"`
}

// BusinessOwner is the typed data model for the business_owner entity.
type BusinessOwner struct {
}

// BusinessOwnerCreateData is the typed request payload for BusinessOwner.CreateTyped.
type BusinessOwnerCreateData struct {
	DealId string `json:"deal_id"`
	AccountId string `json:"account_id"`
	AccountRole string `json:"account_role"`
	AcknowledgeDataEffects bool `json:"acknowledge_data_effects"`
	Actions []any `json:"actions"`
	AllowedActions []any `json:"allowed_actions"`
	AmountCents float64 `json:"amount_cents"`
	ApplicantLocationRequirements *string `json:"applicant_location_requirements,omitempty"`
	ApplyUrl *any `json:"apply_url,omitempty"`
	AssetId string `json:"asset_id"`
	AssigneeId string `json:"assigneeId"`
	AssigneeLabel string `json:"assigneeLabel"`
	AssigneeType string `json:"assigneeType"`
	AttemptId string `json:"attempt_id"`
	Benefits *string `json:"benefits,omitempty"`
	Body string `json:"body"`
	BusinessId string `json:"businessId"`
	BusinessName string `json:"businessName"`
	BusinessId2 *string `json:"business_id,omitempty"`
	Campaign map[string]any `json:"campaign"`
	CampaignId string `json:"campaign_id"`
	CarrierName *string `json:"carrier_name,omitempty"`
	Category *string `json:"category,omitempty"`
	CategoryAlias *string `json:"category_alias,omitempty"`
	CategoryAliases []any `json:"category_aliases"`
	Change map[string]any `json:"change"`
	City string `json:"city"`
	ClientMessageId string `json:"client_message_id"`
	Code string `json:"code"`
	CompensationText *string `json:"compensation_text,omitempty"`
	Confirm *bool `json:"confirm,omitempty"`
	Confirmation string `json:"confirmation"`
	ConnectionKind string `json:"connection_kind"`
	ConsentSha256 string `json:"consent_sha256"`
	ContactEmail *any `json:"contact_email,omitempty"`
	ContentType string `json:"content_type"`
	Country *string `json:"country,omitempty"`
	CouponCode *string `json:"coupon_code,omitempty"`
	CreatedAt any `json:"createdAt"`
	CreatedAt2 string `json:"created_at"`
	CredentialId string `json:"credential_id"`
	CredentialIdentifier string `json:"credential_identifier"`
	DataBase64 string `json:"data_base64"`
	DeliveryContract map[string]any `json:"delivery_contract"`
	Description *any `json:"description,omitempty"`
	DirectApply *bool `json:"direct_apply,omitempty"`
	DisabledReason any `json:"disabled_reason"`
	DiscountLabel string `json:"discount_label"`
	DisplayName string `json:"display_name"`
	EmploymentType *string `json:"employment_type,omitempty"`
	Enabled bool `json:"enabled"`
	Endpoint map[string]any `json:"endpoint"`
	EndpointId string `json:"endpoint_id"`
	EndpointUrl string `json:"endpoint_url"`
	EndsAt *any `json:"ends_at,omitempty"`
	EventId string `json:"event_id"`
	EventTypes []any `json:"event_types"`
	EvidenceObservedAt *string `json:"evidence_observed_at,omitempty"`
	ExpectedUpdatedAt string `json:"expected_updated_at"`
	ExperienceLevel *string `json:"experience_level,omitempty"`
	ExpiresAt *string `json:"expires_at,omitempty"`
	FactorId string `json:"factor_id"`
	FailureCount int `json:"failure_count"`
	FileName string `json:"file_name"`
	FileSha256 string `json:"file_sha256"`
	FullName *string `json:"full_name,omitempty"`
	GuideHandoffAnsweredAt *any `json:"guideHandoffAnsweredAt,omitempty"`
	GuideHandoffAt *any `json:"guideHandoffAt,omitempty"`
	GuideHandoffDueAt *any `json:"guideHandoffDueAt,omitempty"`
	Hours *any `json:"hours,omitempty"`
	Id string `json:"id"`
	IdempotencyKey *string `json:"idempotency_key,omitempty"`
	InstallationId string `json:"installation_id"`
	Issuer string `json:"issuer"`
	Jurisdiction *string `json:"jurisdiction,omitempty"`
	Kind string `json:"kind"`
	Label *string `json:"label,omitempty"`
	LastMessageAt any `json:"lastMessageAt"`
	LastMessageAuthorType string `json:"lastMessageAuthorType"`
	LastMessagePreview string `json:"lastMessagePreview"`
	LastDeliveryAt any `json:"last_delivery_at"`
	Launch *bool `json:"launch,omitempty"`
	LicenseNumber string `json:"license_number"`
	Messages []any `json:"messages"`
	MessagesTruncated bool `json:"messagesTruncated"`
	MonthlyCapCents *float64 `json:"monthly_cap_cents,omitempty"`
	Name string `json:"name"`
	Note *string `json:"note,omitempty"`
	OneTimeDisplay any `json:"one_time_display"`
	OwnerEmail string `json:"ownerEmail"`
	OwnerLastReadAt any `json:"ownerLastReadAt"`
	OwnerName string `json:"ownerName"`
	OwnerUserId string `json:"ownerUserId"`
	Period *string `json:"period,omitempty"`
	Phone string `json:"phone"`
	Platform string `json:"platform"`
	PolicyNumber *string `json:"policy_number,omitempty"`
	PostalCode *string `json:"postal_code,omitempty"`
	PromoCode *any `json:"promo_code,omitempty"`
	PushToken string `json:"push_token"`
	RadiusMiles float64 `json:"radius_miles"`
	Reason string `json:"reason"`
	ReasonCategory *string `json:"reason_category,omitempty"`
	ReasonDetail *string `json:"reason_detail,omitempty"`
	RegisteredAt string `json:"registered_at"`
	RequestId string `json:"request_id"`
	RequestedAt string `json:"requested_at"`
	SalaryCurrency *string `json:"salary_currency,omitempty"`
	SalaryMax *any `json:"salary_max,omitempty"`
	SalaryMin *any `json:"salary_min,omitempty"`
	SalaryPeriod *string `json:"salary_period,omitempty"`
	SaveCard bool `json:"save_card"`
	SaveCardConsentSha256 *string `json:"save_card_consent_sha256,omitempty"`
	Schedule *string `json:"schedule,omitempty"`
	ServiceAreas *string `json:"service_areas,omitempty"`
	SigningSecret string `json:"signing_secret"`
	SizeBytes float64 `json:"size_bytes"`
	Skills *[]any `json:"skills,omitempty"`
	SourceUrl *string `json:"source_url,omitempty"`
	StartsAt *any `json:"starts_at,omitempty"`
	State string `json:"state"`
	StatedExpiresAt *string `json:"stated_expires_at,omitempty"`
	Status *string `json:"status,omitempty"`
	StreetAddress string `json:"street_address"`
	Subject *string `json:"subject,omitempty"`
	SubmittedIdentifier *string `json:"submitted_identifier,omitempty"`
	SupportLastReadAt any `json:"supportLastReadAt"`
	Terms *any `json:"terms,omitempty"`
	TermsVersion string `json:"terms_version"`
	ThresholdCents *float64 `json:"threshold_cents,omitempty"`
	TicketNumber string `json:"ticketNumber"`
	Tier string `json:"tier"`
	Title string `json:"title"`
	TotalJobOpenings *any `json:"total_job_openings,omitempty"`
	Typing *bool `json:"typing,omitempty"`
	UpdatedAt any `json:"updatedAt"`
	UpdatedAt2 string `json:"updated_at"`
	Url string `json:"url"`
	Website string `json:"website"`
	WorkplaceType *string `json:"workplace_type,omitempty"`
	Zip *string `json:"zip,omitempty"`
}

// BusinessOwnerUpdateData is the typed request payload for BusinessOwner.UpdateTyped.
type BusinessOwnerUpdateData struct {
	AccountId *string `json:"account_id,omitempty"`
	AccountRole *string `json:"account_role,omitempty"`
	AcknowledgeDataEffects *bool `json:"acknowledge_data_effects,omitempty"`
	Actions *[]any `json:"actions,omitempty"`
	AllowedActions *[]any `json:"allowed_actions,omitempty"`
	AmountCents *float64 `json:"amount_cents,omitempty"`
	ApplicantLocationRequirements *string `json:"applicant_location_requirements,omitempty"`
	ApplyUrl *any `json:"apply_url,omitempty"`
	AssetId *string `json:"asset_id,omitempty"`
	AssigneeId *string `json:"assigneeId,omitempty"`
	AssigneeLabel *string `json:"assigneeLabel,omitempty"`
	AssigneeType *string `json:"assigneeType,omitempty"`
	AttemptId *string `json:"attempt_id,omitempty"`
	Benefits *string `json:"benefits,omitempty"`
	Body *string `json:"body,omitempty"`
	BusinessId *string `json:"businessId,omitempty"`
	BusinessName *string `json:"businessName,omitempty"`
	BusinessId2 *string `json:"business_id,omitempty"`
	Campaign *map[string]any `json:"campaign,omitempty"`
	CampaignId *string `json:"campaign_id,omitempty"`
	CarrierName *string `json:"carrier_name,omitempty"`
	Category *string `json:"category,omitempty"`
	CategoryAlias *string `json:"category_alias,omitempty"`
	CategoryAliases *[]any `json:"category_aliases,omitempty"`
	Change *map[string]any `json:"change,omitempty"`
	City *string `json:"city,omitempty"`
	ClientMessageId *string `json:"client_message_id,omitempty"`
	Code *string `json:"code,omitempty"`
	CompensationText *string `json:"compensation_text,omitempty"`
	Confirm *bool `json:"confirm,omitempty"`
	Confirmation *string `json:"confirmation,omitempty"`
	ConnectionKind *string `json:"connection_kind,omitempty"`
	ConsentSha256 *string `json:"consent_sha256,omitempty"`
	ContactEmail *any `json:"contact_email,omitempty"`
	ContentType *string `json:"content_type,omitempty"`
	Country *string `json:"country,omitempty"`
	CouponCode *string `json:"coupon_code,omitempty"`
	CreatedAt *any `json:"createdAt,omitempty"`
	CreatedAt2 *string `json:"created_at,omitempty"`
	CredentialId *string `json:"credential_id,omitempty"`
	CredentialIdentifier *string `json:"credential_identifier,omitempty"`
	DataBase64 *string `json:"data_base64,omitempty"`
	DeliveryContract *map[string]any `json:"delivery_contract,omitempty"`
	Description *any `json:"description,omitempty"`
	DirectApply *bool `json:"direct_apply,omitempty"`
	DisabledReason *any `json:"disabled_reason,omitempty"`
	DiscountLabel *string `json:"discount_label,omitempty"`
	DisplayName *string `json:"display_name,omitempty"`
	EmploymentType *string `json:"employment_type,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	Endpoint *map[string]any `json:"endpoint,omitempty"`
	EndpointId *string `json:"endpoint_id,omitempty"`
	EndpointUrl *string `json:"endpoint_url,omitempty"`
	EndsAt *any `json:"ends_at,omitempty"`
	EventId *string `json:"event_id,omitempty"`
	EventTypes *[]any `json:"event_types,omitempty"`
	EvidenceObservedAt *string `json:"evidence_observed_at,omitempty"`
	ExpectedUpdatedAt *string `json:"expected_updated_at,omitempty"`
	ExperienceLevel *string `json:"experience_level,omitempty"`
	ExpiresAt *string `json:"expires_at,omitempty"`
	FactorId *string `json:"factor_id,omitempty"`
	FailureCount *int `json:"failure_count,omitempty"`
	FileName *string `json:"file_name,omitempty"`
	FileSha256 *string `json:"file_sha256,omitempty"`
	FullName *string `json:"full_name,omitempty"`
	GuideHandoffAnsweredAt *any `json:"guideHandoffAnsweredAt,omitempty"`
	GuideHandoffAt *any `json:"guideHandoffAt,omitempty"`
	GuideHandoffDueAt *any `json:"guideHandoffDueAt,omitempty"`
	Hours *any `json:"hours,omitempty"`
	Id *string `json:"id,omitempty"`
	IdempotencyKey *string `json:"idempotency_key,omitempty"`
	InstallationId *string `json:"installation_id,omitempty"`
	Issuer *string `json:"issuer,omitempty"`
	Jurisdiction *string `json:"jurisdiction,omitempty"`
	Kind *string `json:"kind,omitempty"`
	Label *string `json:"label,omitempty"`
	LastMessageAt *any `json:"lastMessageAt,omitempty"`
	LastMessageAuthorType *string `json:"lastMessageAuthorType,omitempty"`
	LastMessagePreview *string `json:"lastMessagePreview,omitempty"`
	LastDeliveryAt *any `json:"last_delivery_at,omitempty"`
	Launch *bool `json:"launch,omitempty"`
	LicenseNumber *string `json:"license_number,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	MessagesTruncated *bool `json:"messagesTruncated,omitempty"`
	MonthlyCapCents *float64 `json:"monthly_cap_cents,omitempty"`
	Name *string `json:"name,omitempty"`
	Note *string `json:"note,omitempty"`
	OneTimeDisplay *any `json:"one_time_display,omitempty"`
	OwnerEmail *string `json:"ownerEmail,omitempty"`
	OwnerLastReadAt *any `json:"ownerLastReadAt,omitempty"`
	OwnerName *string `json:"ownerName,omitempty"`
	OwnerUserId *string `json:"ownerUserId,omitempty"`
	Period *string `json:"period,omitempty"`
	Phone *string `json:"phone,omitempty"`
	Platform *string `json:"platform,omitempty"`
	PolicyNumber *string `json:"policy_number,omitempty"`
	PostalCode *string `json:"postal_code,omitempty"`
	PromoCode *any `json:"promo_code,omitempty"`
	PushToken *string `json:"push_token,omitempty"`
	RadiusMiles *float64 `json:"radius_miles,omitempty"`
	Reason *string `json:"reason,omitempty"`
	ReasonCategory *string `json:"reason_category,omitempty"`
	ReasonDetail *string `json:"reason_detail,omitempty"`
	RegisteredAt *string `json:"registered_at,omitempty"`
	RequestId *string `json:"request_id,omitempty"`
	RequestedAt *string `json:"requested_at,omitempty"`
	SalaryCurrency *string `json:"salary_currency,omitempty"`
	SalaryMax *any `json:"salary_max,omitempty"`
	SalaryMin *any `json:"salary_min,omitempty"`
	SalaryPeriod *string `json:"salary_period,omitempty"`
	SaveCard *bool `json:"save_card,omitempty"`
	SaveCardConsentSha256 *string `json:"save_card_consent_sha256,omitempty"`
	Schedule *string `json:"schedule,omitempty"`
	ServiceAreas *string `json:"service_areas,omitempty"`
	SigningSecret *string `json:"signing_secret,omitempty"`
	SizeBytes *float64 `json:"size_bytes,omitempty"`
	Skills *[]any `json:"skills,omitempty"`
	SourceUrl *string `json:"source_url,omitempty"`
	StartsAt *any `json:"starts_at,omitempty"`
	State *string `json:"state,omitempty"`
	StatedExpiresAt *string `json:"stated_expires_at,omitempty"`
	Status *string `json:"status,omitempty"`
	StreetAddress *string `json:"street_address,omitempty"`
	Subject *string `json:"subject,omitempty"`
	SubmittedIdentifier *string `json:"submitted_identifier,omitempty"`
	SupportLastReadAt *any `json:"supportLastReadAt,omitempty"`
	Terms *any `json:"terms,omitempty"`
	TermsVersion *string `json:"terms_version,omitempty"`
	ThresholdCents *float64 `json:"threshold_cents,omitempty"`
	TicketNumber *string `json:"ticketNumber,omitempty"`
	Tier *string `json:"tier,omitempty"`
	Title *string `json:"title,omitempty"`
	TotalJobOpenings *any `json:"total_job_openings,omitempty"`
	Typing *bool `json:"typing,omitempty"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
	UpdatedAt2 *string `json:"updated_at,omitempty"`
	Url *string `json:"url,omitempty"`
	Website *string `json:"website,omitempty"`
	WorkplaceType *string `json:"workplace_type,omitempty"`
	Zip *string `json:"zip,omitempty"`
}

// BusinessReview is the typed data model for the business_review entity.
type BusinessReview struct {
}

// BusinessReviewLoadMatch is the typed request payload for BusinessReview.LoadTyped.
type BusinessReviewLoadMatch struct {
	Id string `json:"id"`
	Limit *float64 `json:"limit,omitempty"`
	Page *float64 `json:"page,omitempty"`
	Rating *string `json:"rating,omitempty"`
}

// ChatAttachment is the typed data model for the chat_attachment entity.
type ChatAttachment struct {
}

// ChatAttachmentCreateData is the typed request payload for ChatAttachment.CreateTyped.
type ChatAttachmentCreateData struct {
	ConversationId string `json:"conversation_id"`
	ContentType any `json:"content_type"`
	DataBase64 string `json:"data_base64"`
	FileName string `json:"file_name"`
	SizeBytes int `json:"size_bytes"`
}

// ChatAttachmentUrl is the typed data model for the chat_attachment_url entity.
type ChatAttachmentUrl struct {
}

// ChatAttachmentUrlCreateData is the typed request payload for ChatAttachmentUrl.CreateTyped.
type ChatAttachmentUrlCreateData struct {
	AttachmentId string `json:"attachment_id"`
	ConversationId *string `json:"conversation_id,omitempty"`
	MessageId *string `json:"message_id,omitempty"`
	SupportId *string `json:"support_id,omitempty"`
}

// ClaimVerificationSend is the typed data model for the claim_verification_send entity.
type ClaimVerificationSend struct {
}

// ClaimVerificationSendCreateData is the typed request payload for ClaimVerificationSend.CreateTyped.
type ClaimVerificationSendCreateData struct {
	Channel *any `json:"channel,omitempty"`
	ClaimId string `json:"claim_id"`
	RequestId *string `json:"request_id,omitempty"`
}

// ClaimVerificationVerify is the typed data model for the claim_verification_verify entity.
type ClaimVerificationVerify struct {
}

// ClaimVerificationVerifyCreateData is the typed request payload for ClaimVerificationVerify.CreateTyped.
type ClaimVerificationVerifyCreateData struct {
	ChallengeId *string `json:"challenge_id,omitempty"`
	Channel *any `json:"channel,omitempty"`
	ClaimId string `json:"claim_id"`
	Code string `json:"code"`
}

// CommercialClick is the typed data model for the commercial_click entity.
type CommercialClick struct {
}

// CommercialClickCreateData is the typed request payload for CommercialClick.CreateTyped.
type CommercialClickCreateData struct {
	ActionType any `json:"action_type"`
	AdReceipt *string `json:"ad_receipt,omitempty"`
	BusinessId *string `json:"business_id,omitempty"`
	Category *string `json:"category,omitempty"`
	City *string `json:"city,omitempty"`
	CommercialStatus *any `json:"commercial_status,omitempty"`
	DirectoryListingId *string `json:"directory_listing_id,omitempty"`
	DisplayName *string `json:"display_name,omitempty"`
	ListingId *string `json:"listing_id,omitempty"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	PagePath *string `json:"page_path,omitempty"`
	Referrer *string `json:"referrer,omitempty"`
	SourceType any `json:"source_type"`
	State *string `json:"state,omitempty"`
	Surface *any `json:"surface,omitempty"`
	TargetUrl *string `json:"target_url,omitempty"`
}

// ContactRecorded is the typed data model for the contact_recorded entity.
type ContactRecorded struct {
}

// ContactRecordedCreateData is the typed request payload for ContactRecorded.CreateTyped.
type ContactRecordedCreateData struct {
	BusinessId string `json:"business_id"`
}

// Conversation is the typed data model for the conversation entity.
type Conversation struct {
}

// ConversationCreateData is the typed request payload for Conversation.CreateTyped.
type ConversationCreateData struct {
	AccountId string `json:"account_id"`
	ConversationId *string `json:"conversation_id,omitempty"`
	Cursor *string `json:"cursor,omitempty"`
	Limit *float64 `json:"limit,omitempty"`
}

// ConversationClose is the typed data model for the conversation_close entity.
type ConversationClose struct {
}

// ConversationCloseCreateData is the typed request payload for ConversationClose.CreateTyped.
type ConversationCloseCreateData struct {
	Id string `json:"id"`
}

// ConversationReport is the typed data model for the conversation_report entity.
type ConversationReport struct {
}

// ConversationReportCreateData is the typed request payload for ConversationReport.CreateTyped.
type ConversationReportCreateData struct {
	Id string `json:"id"`
	Detail *string `json:"detail,omitempty"`
	Reason any `json:"reason"`
}

// ConversationWorkflow is the typed data model for the conversation_workflow entity.
type ConversationWorkflow struct {
}

// ConversationWorkflowCreateData is the typed request payload for ConversationWorkflow.CreateTyped.
type ConversationWorkflowCreateData struct {
	MessageId string `json:"message_id"`
	Priority *any `json:"priority,omitempty"`
	Status *any `json:"status,omitempty"`
}

// CreateAgentApiKey is the typed data model for the create_agent_api_key entity.
type CreateAgentApiKey struct {
}

// CreateAgentApiKeyCreateData is the typed request payload for CreateAgentApiKey.CreateTyped.
type CreateAgentApiKeyCreateData struct {
	AccountId string `json:"account_id"`
	AllowedActions *[]any `json:"allowed_actions,omitempty"`
	AllowedBusinessIds *[]any `json:"allowed_business_ids,omitempty"`
	Label *string `json:"label,omitempty"`
	MonthlyQuota *float64 `json:"monthly_quota,omitempty"`
	Notes *string `json:"notes,omitempty"`
	RateLimitPerMinute *float64 `json:"rate_limit_per_minute,omitempty"`
}

// Customer is the typed data model for the customer entity.
type Customer struct {
}

// CustomerCreateData is the typed request payload for Customer.CreateTyped.
type CustomerCreateData struct {
	AuthProvider *string `json:"auth_provider,omitempty"`
	AvatarUrl *any `json:"avatar_url,omitempty"`
	City *any `json:"city,omitempty"`
	FullName *string `json:"full_name,omitempty"`
	Phone *any `json:"phone,omitempty"`
	SearchCategory *string `json:"search_category,omitempty"`
	ServiceNeed *string `json:"service_need,omitempty"`
	State *any `json:"state,omitempty"`
}

// CustomerAccount is the typed data model for the customer_account entity.
type CustomerAccount struct {
}

// CustomerAccountCreateData is the typed request payload for CustomerAccount.CreateTyped.
type CustomerAccountCreateData struct {
	AccountId string `json:"account_id"`
	AccountRole string `json:"account_role"`
	AccuracyMeters float64 `json:"accuracy_meters"`
	AcknowledgeDataEffects bool `json:"acknowledge_data_effects"`
	Actions []any `json:"actions"`
	AgentKeyId string `json:"agent_key_id"`
	AgentReceivesCoordinates bool `json:"agent_receives_coordinates"`
	AllPaused bool `json:"all_paused"`
	AppAttestRegistered bool `json:"app_attest_registered"`
	Assertion string `json:"assertion"`
	Attestation string `json:"attestation"`
	AuthorLabel string `json:"author_label"`
	AuthorType string `json:"author_type"`
	Binding any `json:"binding"`
	Body string `json:"body"`
	BusinessId any `json:"business_id"`
	CaptureSource any `json:"capture_source"`
	CapturedAt string `json:"captured_at"`
	Challenge string `json:"challenge"`
	ChallengeId string `json:"challenge_id"`
	ClientMessageId string `json:"client_message_id"`
	Completed bool `json:"completed"`
	Confirmation string `json:"confirmation"`
	ConnectionId string `json:"connection_id"`
	ConnectionKind string `json:"connection_kind"`
	Continuation *any `json:"continuation,omitempty"`
	CoordinatesReturned bool `json:"coordinates_returned"`
	CreatedAt string `json:"created_at"`
	CredentialId string `json:"credential_id"`
	Declined bool `json:"declined"`
	DeliveryContract map[string]any `json:"delivery_contract"`
	DisabledReason any `json:"disabled_reason"`
	Disclosure string `json:"disclosure"`
	Enabled bool `json:"enabled"`
	Endpoint map[string]any `json:"endpoint"`
	EndpointId string `json:"endpoint_id"`
	EndpointUrl string `json:"endpoint_url"`
	Environment string `json:"environment"`
	EventId string `json:"event_id"`
	EventTypes []any `json:"event_types"`
	FailureCount int `json:"failure_count"`
	HandoffId string `json:"handoff_id"`
	HasMore bool `json:"has_more"`
	Id string `json:"id"`
	IdempotentReplay bool `json:"idempotent_replay"`
	InstallationId string `json:"installation_id"`
	KeyId string `json:"key_id"`
	LastDeliveryAt any `json:"last_delivery_at"`
	Latitude float64 `json:"latitude"`
	Location *any `json:"location,omitempty"`
	Longitude float64 `json:"longitude"`
	MessageAlertsEnabled bool `json:"message_alerts_enabled"`
	Messages []any `json:"messages"`
	Mode string `json:"mode"`
	Name *string `json:"name,omitempty"`
	OauthGrantId any `json:"oauth_grant_id"`
	OneTimeDisplay any `json:"one_time_display"`
	Platform string `json:"platform"`
	Policy string `json:"policy"`
	Purpose string `json:"purpose"`
	PushToken string `json:"push_token"`
	Reason *string `json:"reason,omitempty"`
	RegisteredAt string `json:"registered_at"`
	Reply string `json:"reply"`
	RequestMode string `json:"request_mode"`
	RequestedAt string `json:"requested_at"`
	Results []any `json:"results"`
	SchemaVersion string `json:"schema_version"`
	SelectedAt string `json:"selected_at"`
	SignedIn bool `json:"signed_in"`
	SigningSecret string `json:"signing_secret"`
	Status any `json:"status"`
	UpdatedAt string `json:"updated_at"`
	Url string `json:"url"`
	UsableUntil string `json:"usable_until"`
	UseMode string `json:"use_mode"`
	Action *any `json:"action,omitempty"`
	ConsentCopyVersion *any `json:"consent_copy_version,omitempty"`
	Paused *any `json:"paused,omitempty"`
}

// CustomerLocationProofRevocation is the typed data model for the customer_location_proof_revocation entity.
type CustomerLocationProofRevocation struct {
}

// CustomerLocationProofRevocationCreateData is the typed request payload for CustomerLocationProofRevocation.CreateTyped.
type CustomerLocationProofRevocationCreateData struct {
	AccuracyMeters float64 `json:"accuracy_meters"`
	CapturedAt string `json:"captured_at"`
	Latitude float64 `json:"latitude"`
	Longitude float64 `json:"longitude"`
}

// CustomerLocationProofRevocationRemoveMatch is the typed request payload for CustomerLocationProofRevocation.RemoveTyped.
type CustomerLocationProofRevocationRemoveMatch struct {
	LocationProofId string `json:"location_proof_id"`
}

// DestinationAddressSuggestion is the typed data model for the destination_address_suggestion entity.
type DestinationAddressSuggestion struct {
}

// DestinationAddressSuggestionCreateData is the typed request payload for DestinationAddressSuggestion.CreateTyped.
type DestinationAddressSuggestionCreateData struct {
	Input string `json:"input"`
}

// DestinationLocationProof is the typed data model for the destination_location_proof entity.
type DestinationLocationProof struct {
}

// DestinationLocationProofCreateData is the typed request payload for DestinationLocationProof.CreateTyped.
type DestinationLocationProofCreateData struct {
	Address string `json:"address"`
	PremiseProximityConfirmationToken *string `json:"premise_proximity_confirmation_token,omitempty"`
}

// DomainTrustCard is the typed data model for the domain_trust_card entity.
type DomainTrustCard struct {
}

// DomainTrustCardLoadMatch is the typed request payload for DomainTrustCard.LoadTyped.
type DomainTrustCardLoadMatch struct {
	DomainKey string `json:"domain_key"`
}

// GeoContext is the typed data model for the geo_context entity.
type GeoContext struct {
}

// GeoContextLoadMatch is the typed request payload for GeoContext.LoadTyped.
type GeoContextLoadMatch struct {
}

// Health is the typed data model for the health entity.
type Health struct {
}

// HealthLoadMatch is the typed request payload for Health.LoadTyped.
type HealthLoadMatch struct {
	AgentPhoneLocationBridge *map[string]any `json:"agent_phone_location_bridge,omitempty"`
	BuildSha *string `json:"build_sha,omitempty"`
	BusinessReviewAccess *map[string]any `json:"business_review_access,omitempty"`
	ContractVersion *string `json:"contract_version,omitempty"`
	ExternalAgentWebhooks *map[string]any `json:"external_agent_webhooks,omitempty"`
	ExternalAgentWebhooksEnabled *bool `json:"external_agent_webhooks_enabled,omitempty"`
	IosAppAttestAnonymousLocation *map[string]any `json:"ios_app_attest_anonymous_location,omitempty"`
	LocationChoices *map[string]any `json:"location_choices,omitempty"`
	LocationHandoff *map[string]any `json:"location_handoff,omitempty"`
	MobilePush *any `json:"mobile_push,omitempty"`
	Ok *any `json:"ok,omitempty"`
	Service *string `json:"service,omitempty"`
	SponsoredOrdering *map[string]any `json:"sponsored_ordering,omitempty"`
	TrustModelVersion *any `json:"trust_model_version,omitempty"`
	Version *string `json:"version,omitempty"`
}

// JobApplication is the typed data model for the job_application entity.
type JobApplication struct {
}

// JobApplicationCreateData is the typed request payload for JobApplication.CreateTyped.
type JobApplicationCreateData struct {
	AccountId *string `json:"account_id,omitempty"`
	CoverNote *string `json:"cover_note,omitempty"`
	JobId string `json:"job_id"`
	Limit *float64 `json:"limit,omitempty"`
	Offset *float64 `json:"offset,omitempty"`
	Resume map[string]any `json:"resume"`
	Status *string `json:"status,omitempty"`
}

// JobResumeSignedUrl is the typed data model for the job_resume_signed_url entity.
type JobResumeSignedUrl struct {
}

// JobResumeSignedUrlCreateData is the typed request payload for JobResumeSignedUrl.CreateTyped.
type JobResumeSignedUrlCreateData struct {
	JobApplicationId string `json:"job_application_id"`
}

// LocationHandoff is the typed data model for the location_handoff entity.
type LocationHandoff struct {
}

// LocationHandoffCreateData is the typed request payload for LocationHandoff.CreateTyped.
type LocationHandoffCreateData struct {
}

// Message is the typed data model for the message entity.
type Message struct {
}

// MessageCreateData is the typed request payload for Message.CreateTyped.
type MessageCreateData struct {
	AccountId string `json:"account_id"`
	ClientMessageId string `json:"client_message_id"`
	Message string `json:"message"`
	SourcePath *string `json:"source_path,omitempty"`
	Subject string `json:"subject"`
	TargetBusinessId string `json:"target_business_id"`
	TargetBusinessName string `json:"target_business_name"`
	TargetBusinessSource string `json:"target_business_source"`
}

// ModeratedAction is the typed data model for the moderated_action entity.
type ModeratedAction struct {
}

// ModeratedActionLoadMatch is the typed request payload for ModeratedAction.LoadTyped.
type ModeratedActionLoadMatch struct {
	Actions *[]any `json:"actions,omitempty"`
	Body *string `json:"body,omitempty"`
	ClientRequestId *string `json:"client_request_id,omitempty"`
	ContentType *string `json:"content_type,omitempty"`
	Continuation *any `json:"continuation,omitempty"`
	CoordinatesReturned *bool `json:"coordinates_returned,omitempty"`
	Disclosure *string `json:"disclosure,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	FileSha256 *string `json:"file_sha256,omitempty"`
	HasMore *bool `json:"has_more,omitempty"`
	HumanConfirmation *bool `json:"human_confirmation,omitempty"`
	IntentId *string `json:"intent_id,omitempty"`
	Kind *string `json:"kind,omitempty"`
	KnowledgeVersion *string `json:"knowledgeVersion,omitempty"`
	Limits *map[string]any `json:"limits,omitempty"`
	Links *[]any `json:"links,omitempty"`
	Location *map[string]any `json:"location,omitempty"`
	Message *string `json:"message,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Name *string `json:"name,omitempty"`
	NeedsHuman *bool `json:"needsHuman,omitempty"`
	Policy *map[string]any `json:"policy,omitempty"`
	Question *string `json:"question,omitempty"`
	Reply *string `json:"reply,omitempty"`
	Result *string `json:"result,omitempty"`
	Results *[]any `json:"results,omitempty"`
	ScanAuthorityId *string `json:"scan_authority_id,omitempty"`
	Scanner *string `json:"scanner,omitempty"`
	ScannerVersion *string `json:"scanner_version,omitempty"`
	SchemaVersion *string `json:"schema_version,omitempty"`
	SearcherLatitude *float64 `json:"searcher_latitude,omitempty"`
	SearcherLongitude *float64 `json:"searcher_longitude,omitempty"`
	Signature *string `json:"signature,omitempty"`
	SignedIn *bool `json:"signed_in,omitempty"`
	SizeBytes *float64 `json:"size_bytes,omitempty"`
	Subject *string `json:"subject,omitempty"`
	TargetBusinessId *string `json:"target_business_id,omitempty"`
	Topic *string `json:"topic,omitempty"`
}

// ModeratedActionCreateData is the typed request payload for ModeratedAction.CreateTyped.
type ModeratedActionCreateData struct {
	ClientRequestId *string `json:"client_request_id,omitempty"`
	ContentType string `json:"content_type"`
	Continuation *any `json:"continuation,omitempty"`
	FileSha256 string `json:"file_sha256"`
	HumanConfirmation *bool `json:"human_confirmation,omitempty"`
	IntentId string `json:"intent_id"`
	Kind *string `json:"kind,omitempty"`
	Location *map[string]any `json:"location,omitempty"`
	Message *string `json:"message,omitempty"`
	Messages []any `json:"messages"`
	Question string `json:"question"`
	Result string `json:"result"`
	ScanAuthorityId string `json:"scan_authority_id"`
	Scanner string `json:"scanner"`
	ScannerVersion string `json:"scanner_version"`
	SearcherLatitude *float64 `json:"searcher_latitude,omitempty"`
	SearcherLongitude *float64 `json:"searcher_longitude,omitempty"`
	Signature *string `json:"signature,omitempty"`
	SizeBytes float64 `json:"size_bytes"`
	Subject *string `json:"subject,omitempty"`
	TargetBusinessId string `json:"target_business_id"`
}

// OpenApiDocument is the typed data model for the open_api_document entity.
type OpenApiDocument struct {
}

// OpenApiDocumentListMatch is the typed request payload for OpenApiDocument.ListTyped.
type OpenApiDocumentListMatch struct {
	Components *map[string]any `json:"components,omitempty"`
	Info *map[string]any `json:"info,omitempty"`
	Openapi *any `json:"openapi,omitempty"`
	Paths *map[string]any `json:"paths,omitempty"`
	Servers *[]any `json:"servers,omitempty"`
	Tags *[]any `json:"tags,omitempty"`
}

// Operation is the typed data model for the operation entity.
type Operation struct {
}

// OperationCreateData is the typed request payload for Operation.CreateTyped.
type OperationCreateData struct {
	CouponId string `json:"coupon_id"`
	AccountId string `json:"account_id"`
	Action *string `json:"action,omitempty"`
	Active *bool `json:"active,omitempty"`
	ActiveOrGoodStanding *bool `json:"active_or_good_standing,omitempty"`
	AiDraftId *string `json:"ai_draft_id,omitempty"`
	AllowedActions []any `json:"allowed_actions"`
	Alt *string `json:"alt,omitempty"`
	AmountCents float64 `json:"amount_cents"`
	AmountOffCents *float64 `json:"amount_off_cents,omitempty"`
	ApiKey string `json:"api_key"`
	AppliesToPeriod *string `json:"applies_to_period,omitempty"`
	AppliesToTier *any `json:"applies_to_tier,omitempty"`
	AssignedAdminUserId *any `json:"assigned_admin_user_id,omitempty"`
	AssigneeId string `json:"assigneeId"`
	AssigneeLabel string `json:"assigneeLabel"`
	AssigneeType string `json:"assigneeType"`
	AssigneeId2 *string `json:"assignee_id,omitempty"`
	AssigneeLabel2 *string `json:"assignee_label,omitempty"`
	AssigneeType2 *string `json:"assignee_type,omitempty"`
	AssistantEnabled bool `json:"assistant_enabled"`
	BaseUrl *string `json:"base_url,omitempty"`
	Body string `json:"body"`
	BusinessId string `json:"businessId"`
	BusinessName string `json:"businessName"`
	BusinessId2 *any `json:"business_id,omitempty"`
	BusinessIds []any `json:"business_ids"`
	CampaignId *string `json:"campaign_id,omitempty"`
	CampaignIds *[]any `json:"campaign_ids,omitempty"`
	Caption *string `json:"caption,omitempty"`
	CaseStatus *string `json:"case_status,omitempty"`
	Catalog []any `json:"catalog"`
	Category *string `json:"category,omitempty"`
	CategoryAlias *string `json:"category_alias,omitempty"`
	ChunkSize *float64 `json:"chunk_size,omitempty"`
	City *string `json:"city,omitempty"`
	Code string `json:"code"`
	Confidence *float64 `json:"confidence,omitempty"`
	Config map[string]any `json:"config"`
	Confirm *bool `json:"confirm,omitempty"`
	ConfirmAdmin *bool `json:"confirm_admin,omitempty"`
	Confirmation string `json:"confirmation"`
	ConnectionId string `json:"connection_id"`
	ConnectionKind string `json:"connection_kind"`
	ContentType string `json:"content_type"`
	ContextId string `json:"context_id"`
	ContextType string `json:"context_type"`
	CreatedAt any `json:"createdAt"`
	CreatedAt2 string `json:"created_at"`
	CredentialExpiresAt *string `json:"credential_expires_at,omitempty"`
	CredentialId string `json:"credential_id"`
	CustomWire *string `json:"custom_wire,omitempty"`
	DataBase64 string `json:"data_base64"`
	Decision string `json:"decision"`
	DedupeAck *bool `json:"dedupe_ack,omitempty"`
	DeliveryContract map[string]any `json:"delivery_contract"`
	DisabledReason any `json:"disabled_reason"`
	DiscountType string `json:"discount_type"`
	DisplayName string `json:"display_name"`
	Disposition string `json:"disposition"`
	Draft map[string]any `json:"draft"`
	Duration *string `json:"duration,omitempty"`
	DurationInMonths *any `json:"duration_in_months,omitempty"`
	Email string `json:"email"`
	Enabled bool `json:"enabled"`
	Endpoint map[string]any `json:"endpoint"`
	EndpointId string `json:"endpoint_id"`
	EndpointUrl string `json:"endpoint_url"`
	EndsAt string `json:"ends_at"`
	EnvironmentFallback any `json:"environment_fallback"`
	EventId string `json:"event_id"`
	EventTypes []any `json:"event_types"`
	ExpectedAllowedActions []any `json:"expected_allowed_actions"`
	ExpectedKeyId string `json:"expected_key_id"`
	ExpectedUpdatedAt string `json:"expected_updated_at"`
	ExpectedVersion float64 `json:"expected_version"`
	ExpiresAt *string `json:"expires_at,omitempty"`
	FactId string `json:"fact_id"`
	Facts map[string]any `json:"facts"`
	FailureCount int `json:"failure_count"`
	Fields map[string]any `json:"fields"`
	FileName string `json:"file_name"`
	GuideHandoffAnsweredAt *any `json:"guideHandoffAnsweredAt,omitempty"`
	GuideHandoffAt *any `json:"guideHandoffAt,omitempty"`
	GuideHandoffDueAt *any `json:"guideHandoffDueAt,omitempty"`
	Height *float64 `json:"height,omitempty"`
	HistoricAssociationChecked bool `json:"historic_association_checked"`
	Hold string `json:"hold"`
	HolderNameMatch *bool `json:"holder_name_match,omitempty"`
	Hours map[string]any `json:"hours"`
	Id string `json:"id"`
	IdempotencyKey *string `json:"idempotency_key,omitempty"`
	IdentifierMatch *bool `json:"identifier_match,omitempty"`
	InUse map[string]any `json:"in_use"`
	Instruction *string `json:"instruction,omitempty"`
	Invited bool `json:"invited"`
	KeyCheck any `json:"key_check"`
	Kind string `json:"kind"`
	Label string `json:"label"`
	LastMessageAt any `json:"lastMessageAt"`
	LastMessageAuthorType string `json:"lastMessageAuthorType"`
	LastMessagePreview string `json:"lastMessagePreview"`
	LastDeliveryAt any `json:"last_delivery_at"`
	LastErrorCode any `json:"last_error_code"`
	LastProbeAt any `json:"last_probe_at"`
	LastProblem any `json:"last_problem"`
	LegalName *string `json:"legal_name,omitempty"`
	Limit *float64 `json:"limit,omitempty"`
	MakeActive bool `json:"make_active"`
	MaxCents float64 `json:"max_cents"`
	MaxRedemptions *any `json:"max_redemptions,omitempty"`
	Messages []any `json:"messages"`
	MessagesTruncated bool `json:"messagesTruncated"`
	MinCents float64 `json:"min_cents"`
	Model string `json:"model"`
	ModelId string `json:"model_id"`
	Name string `json:"name"`
	Note *string `json:"note,omitempty"`
	Notes *string `json:"notes,omitempty"`
	ObservedAt *string `json:"observed_at,omitempty"`
	OneTimeDisplay any `json:"one_time_display"`
	Outcome string `json:"outcome"`
	OwnerEmail string `json:"ownerEmail"`
	OwnerLastReadAt any `json:"ownerLastReadAt"`
	OwnerName string `json:"ownerName"`
	OwnerUserId string `json:"ownerUserId"`
	OwnerReasonCode *string `json:"owner_reason_code,omitempty"`
	PerCustomerLimit *float64 `json:"per_customer_limit,omitempty"`
	PercentOff *float64 `json:"percent_off,omitempty"`
	Phone *string `json:"phone,omitempty"`
	PolicyVersion string `json:"policyVersion"`
	Priority *string `json:"priority,omitempty"`
	Provider string `json:"provider"`
	Providers []any `json:"providers"`
	PurposeCode string `json:"purpose_code"`
	RankBidCents int `json:"rank_bid_cents"`
	Reason *string `json:"reason,omitempty"`
	ReasonCategory *string `json:"reason_category,omitempty"`
	ReasonCode *string `json:"reason_code,omitempty"`
	ReasonDetail *string `json:"reason_detail,omitempty"`
	Reference string `json:"reference"`
	RejectReason *string `json:"reject_reason,omitempty"`
	RelatedCaseId *string `json:"related_case_id,omitempty"`
	ReportId *int `json:"report_id,omitempty"`
	ReportIds []any `json:"report_ids"`
	ReserveCents float64 `json:"reserve_cents"`
	ResolutionNote string `json:"resolution_note"`
	ReviewNotes *string `json:"review_notes,omitempty"`
	Revision int `json:"revision"`
	Role *string `json:"role,omitempty"`
	Rows []any `json:"rows"`
	Run map[string]any `json:"run"`
	SchemaVersion string `json:"schema_version"`
	Scope string `json:"scope"`
	Search *string `json:"search,omitempty"`
	Settings map[string]any `json:"settings"`
	SigningSecret string `json:"signing_secret"`
	SizeBytes float64 `json:"size_bytes"`
	SlaDueAt *any `json:"sla_due_at,omitempty"`
	Source *string `json:"source,omitempty"`
	SourceAuthority *string `json:"source_authority,omitempty"`
	SourceCategorySlug *string `json:"source_category_slug,omitempty"`
	SourceScopeChecked bool `json:"source_scope_checked"`
	SourceUrl *string `json:"source_url,omitempty"`
	StartsAt *any `json:"starts_at,omitempty"`
	State *string `json:"state,omitempty"`
	Status *string `json:"status,omitempty"`
	Storage string `json:"storage"`
	StreetAddress *string `json:"street_address,omitempty"`
	Subject string `json:"subject"`
	SupportLastReadAt any `json:"supportLastReadAt"`
	TargetCategory *string `json:"target_category,omitempty"`
	TaxonomyCategoryAliases []any `json:"taxonomy_category_aliases"`
	TicketNumber string `json:"ticketNumber"`
	Tier string `json:"tier"`
	Typing *bool `json:"typing,omitempty"`
	Until *string `json:"until,omitempty"`
	UpdatedAt any `json:"updatedAt"`
	UpdatedAt2 string `json:"updated_at"`
	Url string `json:"url"`
	ValidUntil *string `json:"valid_until,omitempty"`
	Value string `json:"value"`
	VerificationMethod string `json:"verification_method"`
	VerifiedAt any `json:"verified_at"`
	VerifiedServiceScope *[]any `json:"verified_service_scope,omitempty"`
	Version *string `json:"version,omitempty"`
	Website *string `json:"website,omitempty"`
	Width *float64 `json:"width,omitempty"`
	WindowHours *float64 `json:"window_hours,omitempty"`
	Workload string `json:"workload"`
	Zip *string `json:"zip,omitempty"`
}

// OperationUpdateData is the typed request payload for Operation.UpdateTyped.
type OperationUpdateData struct {
	Provider string `json:"provider"`
	ApiKey *string `json:"api_key,omitempty"`
	BaseUrl *string `json:"base_url,omitempty"`
	CategoryAlias *string `json:"category_alias,omitempty"`
	ConnectionId *string `json:"connection_id,omitempty"`
	CustomWire *string `json:"custom_wire,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	MakeActive *bool `json:"make_active,omitempty"`
	MaxCents *float64 `json:"max_cents,omitempty"`
	MinCents *float64 `json:"min_cents,omitempty"`
	Model *string `json:"model,omitempty"`
	ModelId *string `json:"model_id,omitempty"`
	Reason *string `json:"reason,omitempty"`
	ReserveCents *float64 `json:"reserve_cents,omitempty"`
}

// OperationPatchData is the typed request payload for Operation.PatchTyped.
type OperationPatchData struct {
	CandidateId string `json:"candidate_id"`
	AssignedAdminUserId *any `json:"assigned_admin_user_id,omitempty"`
	CaseStatus *string `json:"case_status,omitempty"`
	Confidence *float64 `json:"confidence,omitempty"`
	ExpectedVersion *float64 `json:"expected_version,omitempty"`
	Notes *string `json:"notes,omitempty"`
	Priority *string `json:"priority,omitempty"`
	ReasonCode *string `json:"reason_code,omitempty"`
	ReviewNotes *string `json:"review_notes,omitempty"`
	SlaDueAt *any `json:"sla_due_at,omitempty"`
	Status *string `json:"status,omitempty"`
	TargetCategory *string `json:"target_category,omitempty"`
}

// OperationRemoveMatch is the typed request payload for Operation.RemoveTyped.
type OperationRemoveMatch struct {
	AccessContextId string `json:"access_context_id"`
}

// OwnerNotification is the typed data model for the owner_notification entity.
type OwnerNotification struct {
}

// OwnerNotificationCreateData is the typed request payload for OwnerNotification.CreateTyped.
type OwnerNotificationCreateData struct {
	NotificationId string `json:"notification_id"`
}

// OwnerNotificationSetting is the typed data model for the owner_notification_setting entity.
type OwnerNotificationSetting struct {
}

// OwnerNotificationSettingCreateData is the typed request payload for OwnerNotificationSetting.CreateTyped.
type OwnerNotificationSettingCreateData struct {
	BusinessId *string `json:"business_id,omitempty"`
	EmailEnabled *bool `json:"email_enabled,omitempty"`
	EventTypes *[]any `json:"event_types,omitempty"`
	WebhookEnabled *bool `json:"webhook_enabled,omitempty"`
}

// OwnerWebhookEndpoint is the typed data model for the owner_webhook_endpoint entity.
type OwnerWebhookEndpoint struct {
}

// OwnerWebhookEndpointCreateData is the typed request payload for OwnerWebhookEndpoint.CreateTyped.
type OwnerWebhookEndpointCreateData struct {
	WebhookId string `json:"webhook_id"`
}

// OwnerWebhookRegistration is the typed data model for the owner_webhook_registration entity.
type OwnerWebhookRegistration struct {
}

// OwnerWebhookRegistrationCreateData is the typed request payload for OwnerWebhookRegistration.CreateTyped.
type OwnerWebhookRegistrationCreateData struct {
	BusinessId *string `json:"business_id,omitempty"`
	EventTypes *[]any `json:"event_types,omitempty"`
	Url string `json:"url"`
}

// Pricing is the typed data model for the pricing entity.
type Pricing struct {
}

// PricingListMatch is the typed request payload for Pricing.ListTyped.
type PricingListMatch struct {
	Billing *map[string]any `json:"billing,omitempty"`
	BranchAddOns *[]any `json:"branch_add_ons,omitempty"`
	Currency *any `json:"currency,omitempty"`
	GeneratedAt *string `json:"generated_at,omitempty"`
	Neutrality *string `json:"neutrality,omitempty"`
	Plans *[]any `json:"plans,omitempty"`
	Promotions *[]any `json:"promotions,omitempty"`
	PublishedAt *any `json:"published_at,omitempty"`
	RadiusExtension *map[string]any `json:"radius_extension,omitempty"`
	RevisionId *any `json:"revision_id,omitempty"`
	Source *any `json:"source,omitempty"`
	TrustModelVersion *any `json:"trust_model_version,omitempty"`
}

// PromoteVerifiedTransaction is the typed data model for the promote_verified_transaction entity.
type PromoteVerifiedTransaction struct {
}

// PromoteVerifiedTransactionCreateData is the typed request payload for PromoteVerifiedTransaction.CreateTyped.
type PromoteVerifiedTransactionCreateData struct {
	BusinessId string `json:"business_id"`
	EvidenceId string `json:"evidence_id"`
}

// PublicContent is the typed data model for the public_content entity.
type PublicContent struct {
}

// PublicContentLoadMatch is the typed request payload for PublicContent.LoadTyped.
type PublicContentLoadMatch struct {
	Blocks *map[string]any `json:"blocks,omitempty"`
	GeneratedAt *string `json:"generated_at,omitempty"`
	Source *any `json:"source,omitempty"`
	TrustModelVersion *any `json:"trust_model_version,omitempty"`
}

// Recommend is the typed data model for the recommend entity.
type Recommend struct {
}

// RecommendListMatch is the typed request payload for Recommend.ListTyped.
type RecommendListMatch struct {
	AllowedAction *string `json:"allowed_action,omitempty"`
	Category *string `json:"category,omitempty"`
	City *string `json:"city,omitempty"`
	Limit *int `json:"limit,omitempty"`
	LocationHandoffId *string `json:"location_handoff_id,omitempty"`
	LocationProofId *string `json:"location_proof_id,omitempty"`
	LocationSelection *string `json:"location_selection,omitempty"`
	Q *string `json:"q,omitempty"`
	RadiusMile *float64 `json:"radius_mile,omitempty"`
	SavedLocationRef *string `json:"saved_location_ref,omitempty"`
	State *string `json:"state,omitempty"`
	Zip *string `json:"zip,omitempty"`
}

// Review is the typed data model for the review entity.
type Review struct {
}

// ReviewCreateData is the typed request payload for Review.CreateTyped.
type ReviewCreateData struct {
	AccountId string `json:"account_id"`
	AttestationAccepted bool `json:"attestation_accepted"`
	CustomerConfirmed *bool `json:"customer_confirmed,omitempty"`
	Message string `json:"message"`
	Rating int `json:"rating"`
	ServiceDate *any `json:"service_date,omitempty"`
	Subject string `json:"subject"`
	TargetBusinessId string `json:"target_business_id"`
}

// Revoke is the typed data model for the revoke entity.
type Revoke struct {
}

// RevokeCreateData is the typed request payload for Revoke.CreateTyped.
type RevokeCreateData struct {
	AgentKeyId string `json:"agent_key_id"`
}

// SaveBusiness is the typed data model for the save_business entity.
type SaveBusiness struct {
}

// SaveBusinessCreateData is the typed request payload for SaveBusiness.CreateTyped.
type SaveBusinessCreateData struct {
	AccountId string `json:"account_id"`
	BusinessId string `json:"business_id"`
	BusinessName string `json:"business_name"`
	BusinessSource string `json:"business_source"`
	Category *string `json:"category,omitempty"`
	City *string `json:"city,omitempty"`
	Notes *string `json:"notes,omitempty"`
	State *string `json:"state,omitempty"`
}

// SavedBusiness is the typed data model for the saved_business entity.
type SavedBusiness struct {
}

// SavedBusinessCreateData is the typed request payload for SavedBusiness.CreateTyped.
type SavedBusinessCreateData struct {
	AccountId string `json:"account_id"`
	Limit *float64 `json:"limit,omitempty"`
}

// SavedLocation is the typed data model for the saved_location entity.
type SavedLocation struct {
}

// SavedLocationUpdateData is the typed request payload for SavedLocation.UpdateTyped.
type SavedLocationUpdateData struct {
	Label *any `json:"label,omitempty"`
	LocationProofId *string `json:"location_proof_id,omitempty"`
	Zip *string `json:"zip,omitempty"`
}

// SavedLocationRemoveMatch is the typed request payload for SavedLocation.RemoveTyped.
type SavedLocationRemoveMatch struct {
	Available *bool `json:"available,omitempty"`
	CoordinatesReturned *any `json:"coordinates_returned,omitempty"`
	Kind *any `json:"kind,omitempty"`
	Label *any `json:"label,omitempty"`
	LocationProofId *string `json:"location_proof_id,omitempty"`
	ReachPrecision *any `json:"reach_precision,omitempty"`
	SavedLocationRef *any `json:"saved_location_ref,omitempty"`
	UpdatedAt *any `json:"updated_at,omitempty"`
	Zip *string `json:"zip,omitempty"`
}

// Search is the typed data model for the search entity.
type Search struct {
}

// SearchListMatch is the typed request payload for Search.ListTyped.
type SearchListMatch struct {
	Category *string `json:"category,omitempty"`
	City *string `json:"city,omitempty"`
	ConsumerReach *bool `json:"consumer_reach,omitempty"`
	Cursor *string `json:"cursor,omitempty"`
	IncludeDirectoryListing *bool `json:"include_directory_listing,omitempty"`
	Intent *string `json:"intent,omitempty"`
	Limit *int `json:"limit,omitempty"`
	LocationHandoffId *string `json:"location_handoff_id,omitempty"`
	LocationProofId *string `json:"location_proof_id,omitempty"`
	LocationSelection *string `json:"location_selection,omitempty"`
	PaidOnly *bool `json:"paid_only,omitempty"`
	Q *string `json:"q,omitempty"`
	RadiusMile *float64 `json:"radius_mile,omitempty"`
	SavedLocationRef *string `json:"saved_location_ref,omitempty"`
	SearchIntent *string `json:"search_intent,omitempty"`
	State *string `json:"state,omitempty"`
	Zip *string `json:"zip,omitempty"`
}

// Suggest is the typed data model for the suggest entity.
type Suggest struct {
}

// SuggestListMatch is the typed request payload for Suggest.ListTyped.
type SuggestListMatch struct {
	Q *string `json:"q,omitempty"`
}

// SupportInternalNote is the typed data model for the support_internal_note entity.
type SupportInternalNote struct {
}

// SupportInternalNoteCreateData is the typed request payload for SupportInternalNote.CreateTyped.
type SupportInternalNoteCreateData struct {
	Id string `json:"id"`
	Body string `json:"body"`
}

// SupportWorkflow is the typed data model for the support_workflow entity.
type SupportWorkflow struct {
}

// SupportWorkflowCreateData is the typed request payload for SupportWorkflow.CreateTyped.
type SupportWorkflowCreateData struct {
	Id string `json:"id"`
	Category *any `json:"category,omitempty"`
	Priority *any `json:"priority,omitempty"`
	WaitingOn *any `json:"waiting_on,omitempty"`
}

// TaxonomySuggestion is the typed data model for the taxonomy_suggestion entity.
type TaxonomySuggestion struct {
}

// TaxonomySuggestionListMatch is the typed request payload for TaxonomySuggestion.ListTyped.
type TaxonomySuggestionListMatch struct {
	Limit *float64 `json:"limit,omitempty"`
	Q *string `json:"q,omitempty"`
}

// TrustCard is the typed data model for the trust_card entity.
type TrustCard struct {
}

// TrustCardLoadMatch is the typed request payload for TrustCard.LoadTyped.
type TrustCardLoadMatch struct {
	SchemaName string `json:"schema_name"`
}

// TrustCardListMatch is the typed request payload for TrustCard.ListTyped.
type TrustCardListMatch struct {
	BusinessId string `json:"business_id"`
}

// TrustCardCreateData is the typed request payload for TrustCard.CreateTyped.
type TrustCardCreateData struct {
	BusinessId string `json:"business_id"`
	LicenseRecordId string `json:"license_record_id"`
	Reason *string `json:"reason,omitempty"`
}

// UnsaveBusiness is the typed data model for the unsave_business entity.
type UnsaveBusiness struct {
}

// UnsaveBusinessCreateData is the typed request payload for UnsaveBusiness.CreateTyped.
type UnsaveBusinessCreateData struct {
	AccountId string `json:"account_id"`
	BusinessId string `json:"business_id"`
}

// UpdateAgentBillingAccount is the typed data model for the update_agent_billing_account entity.
type UpdateAgentBillingAccount struct {
}

// UpdateAgentBillingAccountCreateData is the typed request payload for UpdateAgentBillingAccount.CreateTyped.
type UpdateAgentBillingAccountCreateData struct {
	AccountId string `json:"account_id"`
	BillingStatus *string `json:"billing_status,omitempty"`
	IncludedActions *float64 `json:"included_actions,omitempty"`
	MonthlyFeeCents *float64 `json:"monthly_fee_cents,omitempty"`
	OverageCents *float64 `json:"overage_cents,omitempty"`
	Plan *string `json:"plan,omitempty"`
}

// WithdrawJobApplication is the typed data model for the withdraw_job_application entity.
type WithdrawJobApplication struct {
}

// WithdrawJobApplicationCreateData is the typed request payload for WithdrawJobApplication.CreateTyped.
type WithdrawJobApplicationCreateData struct {
	AccountId string `json:"account_id"`
	ApplicationId string `json:"application_id"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
