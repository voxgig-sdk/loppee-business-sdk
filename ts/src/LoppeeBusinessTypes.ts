// Typed models for the LoppeeBusiness SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface AgentAccess {
  agent_name: string
  agent_type?: string
  callback_url?: string
  compliance_notes?: string
  created_at: string
  data_needs?: string
  developer_email: string
  operating_states?: any[]
  organization_name: string
  request_id: string
  request_status: string
  requested_actions?: any[]
  safety_contact?: string
  status: any
  target_categories?: any[]
  use_case?: string
  website?: string
}

export interface AgentAccessCreateData {
  agent_name: string
  agent_type?: string
  callback_url?: string
  compliance_notes?: string
  data_needs?: string
  developer_email: string
  operating_states?: any[]
  organization_name: string
  requested_actions?: any[]
  safety_contact?: string
  target_categories?: any[]
  use_case?: string
  website?: string
}

export interface AgentCapability {
  agent_phone_location_bridge?: Record<string, any>
  agent_rules: Record<string, any>
  discovery: Record<string, any>
  external_agent_access: Record<string, any>
  external_agent_webhooks: Record<string, any>
  local_discovery_location_policy: Record<string, any>
  location_choices?: Record<string, any>
  registry_name: any
  schema_version: any
  trust_model_version: any
}

export interface AgentCapabilityLoadMatch {
  agent_phone_location_bridge?: Record<string, any>
  agent_rules?: Record<string, any>
  discovery?: Record<string, any>
  external_agent_access?: Record<string, any>
  external_agent_webhooks?: Record<string, any>
  local_discovery_location_policy?: Record<string, any>
  location_choices?: Record<string, any>
  registry_name?: any
  schema_version?: any
  trust_model_version?: any
}

export interface AgentConnectionTest {
  key?: string
}

export interface AgentConnectionTestCreateData {
  key?: string
}

export interface AgentIntegration {
  auth_model: Record<string, any>
  commercial_influence: Record<string, any>
  developer_docs_url: string
  exposure_tiers: Record<string, any>
  external_agent_access: Record<string, any>
  generated_at: string
  http_api: Record<string, any>
  legal: Record<string, any>
  mcp: Record<string, any>
  mcp_client_example_url: string
  monitoring_url: string
  openapi_url: string
  openapi_v1_url: string
  operational_rules: any[]
  owner_agent_notifications: Record<string, any>
  package_url: string
  public_base_url: string
  rate_limits: Record<string, any>
  registry_name: any
  schema_version: string
  trust_card_contract: Record<string, any>
  trust_doctrine: Record<string, any>
}

export interface AgentIntegrationListMatch {
  auth_model?: Record<string, any>
  commercial_influence?: Record<string, any>
  developer_docs_url?: string
  exposure_tiers?: Record<string, any>
  external_agent_access?: Record<string, any>
  generated_at?: string
  http_api?: Record<string, any>
  legal?: Record<string, any>
  mcp?: Record<string, any>
  mcp_client_example_url?: string
  monitoring_url?: string
  openapi_url?: string
  openapi_v1_url?: string
  operational_rules?: any[]
  owner_agent_notifications?: Record<string, any>
  package_url?: string
  public_base_url?: string
  rate_limits?: Record<string, any>
  registry_name?: any
  schema_version?: string
  trust_card_contract?: Record<string, any>
  trust_doctrine?: Record<string, any>
}

export interface AgentMonitoring {
  build_sha: string
  contract_version: string
  generated_at: string
  health_url: string
  integration_package_url: string
  mcp_url: string
  metrics: Record<string, any>
  openapi_url: string
  rate_limits: Record<string, any>
  registry_name: any
  schema_version: string
  service: string
  uptime_seconds: number
  version: string
}

export interface AgentMonitoringLoadMatch {
  build_sha?: string
  contract_version?: string
  generated_at?: string
  health_url?: string
  integration_package_url?: string
  mcp_url?: string
  metrics?: Record<string, any>
  openapi_url?: string
  rate_limits?: Record<string, any>
  registry_name?: any
  schema_version?: string
  service?: string
  uptime_seconds?: number
  version?: string
}

export interface AgentOpenapi {
  components: Record<string, any>
  info: Record<string, any>
  openapi: any
  paths: Record<string, any>
  servers: any[]
  tags: any[]
}

export interface AgentOpenapiListMatch {
  components?: Record<string, any>
  info?: Record<string, any>
  openapi?: any
  paths?: Record<string, any>
  servers?: any[]
  tags?: any[]
}

export interface AgentPolicy {
  external_agent_access: Record<string, any>
  external_agent_webhooks: Record<string, any>
  local_discovery_location_policy: Record<string, any>
  location_handoff_flow?: Record<string, any>
  payment: Record<string, any>
  publication: Record<string, any>
  schema_version: any
  trust_model_version: any
  verification: Record<string, any>
}

export interface AgentPolicyLoadMatch {
  external_agent_access?: Record<string, any>
  external_agent_webhooks?: Record<string, any>
  local_discovery_location_policy?: Record<string, any>
  location_handoff_flow?: Record<string, any>
  payment?: Record<string, any>
  publication?: Record<string, any>
  schema_version?: any
  trust_model_version?: any
  verification?: Record<string, any>
}

export interface AnonymousLocationProofRevocation {
  accuracy_meters: number
  captured_at: string
  latitude: number
  longitude: number
}

export interface AnonymousLocationProofRevocationCreateData {
  accuracy_meters: number
  captured_at: string
  latitude: number
  longitude: number
}

export interface AnonymousLocationProofRevocationRemoveMatch {
  location_proof_id: string
}

export interface BusinessApplication {
  application: Record<string, any>
  application_id: string
  business_id: string
  claim_id: string | null
  created_at: string
  existing_business: boolean
  files?: any[]
  listing_id?: string
  pipeline_status: string
  status: any
  trust_model_version: any
  uploaded_files: number
}

export interface BusinessApplicationCreateData {
  application: Record<string, any>
  business_id?: string
  claim_id?: string | null
  files?: any[]
  listing_id?: string
}

export interface BusinessClaim {
  business_id: string | null
  category?: string
  city?: string
  claim_id: string
  claim_status: string
  claimant_email?: string
  claimant_name?: string
  claimant_relationship?: string
  created_at: string
  directory_listing_id: string | null
  display_name: string
  listing_id?: string
  notes?: string
  phone?: string
  source?: string
  source_type?: string
  source_url?: string
  state?: string
  status: any
  verification?: Record<string, any>
  website?: string
}

export interface BusinessClaimCreateData {
  business_id?: string | null
  category?: string
  city?: string
  claimant_email?: string
  claimant_name?: string
  claimant_relationship?: string
  display_name: string
  listing_id?: string
  notes?: string
  phone?: string
  source?: string
  source_type?: string
  source_url?: string
  state?: string
  website?: string
}

export interface BusinessDeal {
  createdAt: string
  description: string
  discountLabel: string
  endsAt: string | null
  id: string
  promoCode: string | null
  startsAt: string | null
  terms: string | null
  title: string
}

export interface BusinessDealListMatch {
  id: string
}

export interface BusinessIndex {
  brand_assets?: any
  business_id: string
  category: string
  city: string
  display_name: string
  domain: string | null
  insurance: Record<string, any>
  phone: string | null
  public_profile_url: string
  review_reputation: Record<string, any>
  state: string
  street_address?: string | null
  trust_card_url: string
  trust_model_version: any
  verification_class: string
  verification_disclosure: string
  website: string | null
  zip?: string | null
}

export interface BusinessIndexListMatch {
  cursor?: string
  limit?: number
}

export interface BusinessOwner {
  account_id: string
  account_role: string
  acknowledge_data_effects: boolean
  actions: any[]
  allowed_actions: any[]
  amount_cents: number
  applicant_location_requirements?: string
  apply_url?: string | null
  asset_id: string
  assigneeId: string
  assigneeLabel: string
  assigneeType: string
  attempt_id: string
  benefits?: string
  body: string
  businessId: string
  businessName: string
  business_id: string
  campaign: Record<string, any>
  campaign_id: string
  carrier_name?: string
  category?: string
  category_alias?: string
  category_aliases: any[]
  change: Record<string, any>
  city?: string
  client_message_id: string
  code: string
  compensation_text?: string
  confirm?: boolean
  confirmation: string
  connection_kind: string
  consent_sha256: string
  contact_email?: string | null
  content_type: string
  country?: string
  coupon_code?: string
  createdAt: string | null
  created_at: string
  credential_id: string
  credential_identifier: string
  data_base64: string
  delivery_contract: Record<string, any>
  description?: string | null
  direct_apply?: boolean
  disabled_reason: string | null
  discount_label?: string
  display_name: string
  employment_type?: string
  enabled: boolean
  endpoint: Record<string, any>
  endpoint_id: string
  endpoint_url: string
  ends_at?: string | null
  event_id: string
  event_types: any[]
  evidence_observed_at?: string
  expected_updated_at: string
  experience_level?: string
  expires_at?: string
  factor_id?: string
  failure_count: number
  file_name: string
  file_sha256?: string
  full_name?: string
  guideHandoffAnsweredAt?: string | null
  guideHandoffAt?: string | null
  guideHandoffDueAt?: string | null
  hours?: Record<string, any> | null
  id: string
  idempotency_key?: string
  installation_id: string
  issuer: string
  jurisdiction?: string
  kind: string
  label?: string
  lastMessageAt: string | null
  lastMessageAuthorType: string
  lastMessagePreview: string
  last_delivery_at: string | null
  launch?: boolean
  license_number: string
  messages: any[]
  messagesTruncated: boolean
  monthly_cap_cents?: number
  name: string
  note?: string
  one_time_display: any
  ownerEmail: string
  ownerLastReadAt: string | null
  ownerName: string
  ownerUserId: string
  period?: string
  phone?: string
  platform: string
  policy_number?: string
  postal_code?: string
  promo_code?: string | null
  push_token: string
  radius_miles: number
  reason?: string
  reason_category?: string
  reason_detail?: string
  registered_at: string
  request_id: string
  requested_at: string
  salary_currency?: string
  salary_max?: number | null
  salary_min?: number | null
  salary_period?: string
  save_card: boolean
  save_card_consent_sha256?: string
  schedule?: string
  service_areas?: string
  signing_secret: string
  size_bytes: number
  skills?: any[]
  source_url?: string
  starts_at?: string | null
  state?: string
  stated_expires_at?: string
  status: string
  street_address?: string
  subject: string
  submitted_identifier?: string
  supportLastReadAt: string | null
  terms?: string | null
  terms_version: string
  threshold_cents?: number
  ticketNumber: string
  tier: string
  title?: string
  total_job_openings?: number | null
  typing?: boolean
  updatedAt: string | null
  updated_at: string
  url: string
  website: string
  workplace_type?: string
  zip?: string
}

export interface BusinessOwnerCreateData {
  deal_id: string
  account_id: string
  account_role: string
  acknowledge_data_effects: boolean
  actions: any[]
  allowed_actions: any[]
  amount_cents: number
  applicant_location_requirements?: string
  apply_url?: string | null
  asset_id: string
  assigneeId: string
  assigneeLabel: string
  assigneeType: string
  attempt_id: string
  benefits?: string
  body: string
  businessId: string
  businessName: string
  business_id?: string
  campaign: Record<string, any>
  campaign_id: string
  carrier_name?: string
  category?: string
  category_alias?: string
  category_aliases: any[]
  change: Record<string, any>
  city: string
  client_message_id: string
  code: string
  compensation_text?: string
  confirm?: boolean
  confirmation: string
  connection_kind: string
  consent_sha256: string
  contact_email?: string | null
  content_type: string
  country?: string
  coupon_code?: string
  createdAt: string | null
  created_at: string
  credential_id: string
  credential_identifier: string
  data_base64: string
  delivery_contract: Record<string, any>
  description?: string | null
  direct_apply?: boolean
  disabled_reason: string | null
  discount_label: string
  display_name: string
  employment_type?: string
  enabled: boolean
  endpoint: Record<string, any>
  endpoint_id: string
  endpoint_url: string
  ends_at?: string | null
  event_id: string
  event_types: any[]
  evidence_observed_at?: string
  expected_updated_at: string
  experience_level?: string
  expires_at?: string
  factor_id: string
  failure_count: number
  file_name: string
  file_sha256: string
  full_name?: string
  guideHandoffAnsweredAt?: string | null
  guideHandoffAt?: string | null
  guideHandoffDueAt?: string | null
  hours?: Record<string, any> | null
  id: string
  idempotency_key?: string
  installation_id: string
  issuer: string
  jurisdiction?: string
  kind: string
  label?: string
  lastMessageAt: string | null
  lastMessageAuthorType: string
  lastMessagePreview: string
  last_delivery_at: string | null
  launch?: boolean
  license_number: string
  messages: any[]
  messagesTruncated: boolean
  monthly_cap_cents?: number
  name: string
  note?: string
  one_time_display: any
  ownerEmail: string
  ownerLastReadAt: string | null
  ownerName: string
  ownerUserId: string
  period?: string
  phone: string
  platform: string
  policy_number?: string
  postal_code?: string
  promo_code?: string | null
  push_token: string
  radius_miles: number
  reason: string
  reason_category?: string
  reason_detail?: string
  registered_at: string
  request_id: string
  requested_at: string
  salary_currency?: string
  salary_max?: number | null
  salary_min?: number | null
  salary_period?: string
  save_card: boolean
  save_card_consent_sha256?: string
  schedule?: string
  service_areas?: string
  signing_secret: string
  size_bytes: number
  skills?: any[]
  source_url?: string
  starts_at?: string | null
  state: string
  stated_expires_at?: string
  status?: string
  street_address: string
  subject?: string
  submitted_identifier?: string
  supportLastReadAt: string | null
  terms?: string | null
  terms_version: string
  threshold_cents?: number
  ticketNumber: string
  tier: string
  title: string
  total_job_openings?: number | null
  typing?: boolean
  updatedAt: string | null
  updated_at: string
  url: string
  website: string
  workplace_type?: string
  zip?: string

  // Selects a custom action instead of the plain create:
  //   'checkout' | 'delete' | 'delete' | 'delete'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface BusinessOwnerUpdateData {
  account_id?: string
  account_role?: string
  acknowledge_data_effects?: boolean
  actions?: any[]
  allowed_actions?: any[]
  amount_cents?: number
  applicant_location_requirements?: string
  apply_url?: string | null
  asset_id?: string
  assigneeId?: string
  assigneeLabel?: string
  assigneeType?: string
  attempt_id?: string
  benefits?: string
  body?: string
  businessId?: string
  businessName?: string
  business_id?: string
  campaign?: Record<string, any>
  campaign_id?: string
  carrier_name?: string
  category?: string
  category_alias?: string
  category_aliases?: any[]
  change?: Record<string, any>
  city?: string
  client_message_id?: string
  code?: string
  compensation_text?: string
  confirm?: boolean
  confirmation?: string
  connection_kind?: string
  consent_sha256?: string
  contact_email?: string | null
  content_type?: string
  country?: string
  coupon_code?: string
  createdAt?: string | null
  created_at?: string
  credential_id?: string
  credential_identifier?: string
  data_base64?: string
  delivery_contract?: Record<string, any>
  description?: string | null
  direct_apply?: boolean
  disabled_reason?: string | null
  discount_label?: string
  display_name?: string
  employment_type?: string
  enabled?: boolean
  endpoint?: Record<string, any>
  endpoint_id?: string
  endpoint_url?: string
  ends_at?: string | null
  event_id?: string
  event_types?: any[]
  evidence_observed_at?: string
  expected_updated_at?: string
  experience_level?: string
  expires_at?: string
  factor_id?: string
  failure_count?: number
  file_name?: string
  file_sha256?: string
  full_name?: string
  guideHandoffAnsweredAt?: string | null
  guideHandoffAt?: string | null
  guideHandoffDueAt?: string | null
  hours?: Record<string, any> | null
  id?: string
  idempotency_key?: string
  installation_id?: string
  issuer?: string
  jurisdiction?: string
  kind?: string
  label?: string
  lastMessageAt?: string | null
  lastMessageAuthorType?: string
  lastMessagePreview?: string
  last_delivery_at?: string | null
  launch?: boolean
  license_number?: string
  messages?: any[]
  messagesTruncated?: boolean
  monthly_cap_cents?: number
  name?: string
  note?: string
  one_time_display?: any
  ownerEmail?: string
  ownerLastReadAt?: string | null
  ownerName?: string
  ownerUserId?: string
  period?: string
  phone?: string
  platform?: string
  policy_number?: string
  postal_code?: string
  promo_code?: string | null
  push_token?: string
  radius_miles?: number
  reason?: string
  reason_category?: string
  reason_detail?: string
  registered_at?: string
  request_id?: string
  requested_at?: string
  salary_currency?: string
  salary_max?: number | null
  salary_min?: number | null
  salary_period?: string
  save_card?: boolean
  save_card_consent_sha256?: string
  schedule?: string
  service_areas?: string
  signing_secret?: string
  size_bytes?: number
  skills?: any[]
  source_url?: string
  starts_at?: string | null
  state?: string
  stated_expires_at?: string
  status?: string
  street_address?: string
  subject?: string
  submitted_identifier?: string
  supportLastReadAt?: string | null
  terms?: string | null
  terms_version?: string
  threshold_cents?: number
  ticketNumber?: string
  tier?: string
  title?: string
  total_job_openings?: number | null
  typing?: boolean
  updatedAt?: string | null
  updated_at?: string
  url?: string
  website?: string
  workplace_type?: string
  zip?: string
}

export interface BusinessReview {
  id?: string
}

export interface BusinessReviewLoadMatch {
  id: string
  limit?: number
  page?: number
  rating?: string
}

export interface ChatAttachment {
  byteSize: number
  content_type: any
  data_base64: string
  fileName: string
  file_name: string
  id: string
  mediaType: string
  size_bytes: number
}

export interface ChatAttachmentCreateData {
  conversation_id: string
  content_type: any
  data_base64: string
  file_name: string
  size_bytes: number
}

export interface ChatAttachmentUrl {
  byte_size: number
  expires_in_seconds: any
  file_name: string
  id: string
  media_type: string
  signed_url: string
}

export interface ChatAttachmentUrlCreateData {
  attachment_id: string
  conversation_id?: string
  message_id?: string
  support_id?: string
}

export interface ClaimVerificationSend {
  challenge_id?: string
  channel: any
  claim_id: string
  destination_hint?: string
  expires_in_seconds?: number
  provider_status?: any
  recipient_delivery_confirmed?: any
  request_id?: string
  status: any
}

export interface ClaimVerificationSendCreateData {
  channel?: any
  claim_id: string
  request_id?: string
}

export interface ClaimVerificationVerify {
  business_id: string | null
  challenge_id?: string
  channel?: any
  claim_id: string
  code: string
  method?: any
  publication?: Record<string, any>
  status: any
  transfer_review_required?: any
  trust_model_version?: any
}

export interface ClaimVerificationVerifyCreateData {
  challenge_id?: string
  channel?: any
  claim_id: string
  code: string
}

export interface CommercialClick {
  action_type: any
  ad_receipt?: string
  billable: boolean
  billing_event_id?: string | null
  billing_status: string
  business_id?: string
  category?: string
  city?: string
  click_id: string
  commercial_status?: any
  created_at: string
  directory_listing_id?: string
  display_name?: string
  fallback_interaction_id?: string
  ledger_status: string
  listing_id?: string
  metadata?: Record<string, any>
  migration_required?: boolean
  page_path?: string
  referrer?: string
  source_type: any
  state?: string
  status: any
  storage: any
  surface?: any
  target_url?: string
}

export interface CommercialClickCreateData {
  action_type: any
  ad_receipt?: string
  business_id?: string
  category?: string
  city?: string
  commercial_status?: any
  directory_listing_id?: string
  display_name?: string
  listing_id?: string
  metadata?: Record<string, any>
  page_path?: string
  referrer?: string
  source_type: any
  state?: string
  surface?: any
  target_url?: string
}

export interface ContactRecorded {
  business_id: string
  contact_recorded: any
  interaction_id: string
  ok: any
  policy: string
  review_upgraded: any
  status: any
  trust_weight: any
  verified: boolean
}

export interface ContactRecordedCreateData {
  business_id: string
}

export interface Conversation {
  account_id: string
  conversation_id?: string
  conversations: any[]
  count: number
  cursor?: string
  limit?: number
  pagination: Record<string, any>
}

export interface ConversationCreateData {
  account_id: string
  conversation_id?: string
  cursor?: string
  limit?: number
}

export interface ConversationClose {
  closed_at: string
  conversation_id: string
  id?: string
  status: any
}

export interface ConversationCloseCreateData {
  id: string
}

export interface ConversationReport {
  detail?: string
  id?: string
  reason: any
  status: any
}

export interface ConversationReportCreateData {
  id: string
  detail?: string
  reason: any
}

export interface ConversationWorkflow {
  priority?: any
  status?: any
}

export interface ConversationWorkflowCreateData {
  message_id: string
  priority?: any
  status?: any
}

export interface CreateAgentApiKey {
  account_id: string
  allowed_actions?: any[]
  allowed_business_ids?: any[]
  created_by: string
  key: Record<string, any>
  label?: string
  monthly_quota?: number
  notes?: string
  one_time_display: any
  rate_limit_per_minute?: number
  raw_key: string
  status: any
}

export interface CreateAgentApiKeyCreateData {
  account_id: string
  allowed_actions?: any[]
  allowed_business_ids?: any[]
  label?: string
  monthly_quota?: number
  notes?: string
  rate_limit_per_minute?: number
}

export interface Customer {
  auth_provider?: string
  avatar_url: string | null
  city: string | null
  created_at: string | null
  email: string
  full_name: string
  id: string
  phone: string | null
  search_category?: string
  service_need?: string
  state: string | null
  status: any
  updated_at: string | null
}

export interface CustomerCreateData {
  auth_provider?: string
  avatar_url?: string | null
  city?: string | null
  full_name?: string
  phone?: string | null
  search_category?: string
  service_need?: string
  state?: string | null
}

export interface CustomerAccount {
  account_id: string
  account_role: string
  accuracy_meters: number
  acknowledge_data_effects: boolean
  actions: any[]
  agent_key_id: string
  agent_receives_coordinates: boolean
  all_paused: boolean
  app_attest_registered: boolean
  assertion: string
  attestation: string
  author_label: string
  author_type: string
  binding: any
  body: string
  business_id: string | null
  capture_source: any
  captured_at: string
  challenge: string
  challenge_id: string
  client_message_id: string
  completed: boolean
  confirmation: string
  connection_id: string
  connection_kind: string
  continuation: any
  coordinates_returned: boolean
  created_at: string
  credential_id: string
  declined: boolean
  delivery_contract: Record<string, any>
  disabled_reason: string | null
  disclosure: string
  enabled: boolean
  endpoint: Record<string, any>
  endpoint_id: string
  endpoint_url: string
  environment: string
  event_id: string
  event_types: any[]
  failure_count: number
  handoff_id: string
  has_more: boolean
  id: string
  idempotent_replay: boolean
  installation_id: string
  key_id: string
  last_delivery_at: string | null
  latitude: number
  location?: any
  longitude: number
  message_alerts_enabled: boolean
  messages: any[]
  mode: string
  name?: string
  oauth_grant_id: string | null
  one_time_display: any
  platform: string
  policy: string
  purpose: string
  push_token: string
  reason: string
  registered_at: string
  reply: string
  request_mode: string
  requested_at: string
  results: any[]
  schema_version: string
  selected_at: string
  signed_in: boolean
  signing_secret: string
  status: any
  updated_at: string
  url: string
  usable_until: string
  use_mode: string
}

export interface CustomerAccountCreateData {
  account_id: string
  account_role: string
  accuracy_meters: number
  acknowledge_data_effects: boolean
  actions: any[]
  agent_key_id: string
  agent_receives_coordinates: boolean
  all_paused: boolean
  app_attest_registered: boolean
  assertion: string
  attestation: string
  author_label: string
  author_type: string
  binding: any
  body: string
  business_id: string | null
  capture_source: any
  captured_at: string
  challenge: string
  challenge_id: string
  client_message_id: string
  completed: boolean
  confirmation: string
  connection_id: string
  connection_kind: string
  continuation?: any
  coordinates_returned: boolean
  created_at: string
  credential_id: string
  declined: boolean
  delivery_contract: Record<string, any>
  disabled_reason: string | null
  disclosure: string
  enabled: boolean
  endpoint: Record<string, any>
  endpoint_id: string
  endpoint_url: string
  environment: string
  event_id: string
  event_types: any[]
  failure_count: number
  handoff_id: string
  has_more: boolean
  id: string
  idempotent_replay: boolean
  installation_id: string
  key_id: string
  last_delivery_at: string | null
  latitude: number
  location?: any
  longitude: number
  message_alerts_enabled: boolean
  messages: any[]
  mode: string
  name?: string
  oauth_grant_id: string | null
  one_time_display: any
  platform: string
  policy: string
  purpose: string
  push_token: string
  reason?: string
  registered_at: string
  reply: string
  request_mode: string
  requested_at: string
  results: any[]
  schema_version: string
  selected_at: string
  signed_in: boolean
  signing_secret: string
  status: any
  updated_at: string
  url: string
  usable_until: string
  use_mode: string
  action?: any
  consent_copy_version?: any
  paused?: any
}

export interface CustomerLocationProofRevocation {
  accuracy_meters: number
  captured_at: string
  latitude: number
  longitude: number
}

export interface CustomerLocationProofRevocationCreateData {
  accuracy_meters: number
  captured_at: string
  latitude: number
  longitude: number
}

export interface CustomerLocationProofRevocationRemoveMatch {
  location_proof_id: string
}

export interface DestinationAddressSuggestion {
  input: string
  suggestions: any[]
}

export interface DestinationAddressSuggestionCreateData {
  input: string
}

export interface DestinationLocationProof {
  address: string
  premise_proximity_confirmation_token?: string
}

export interface DestinationLocationProofCreateData {
  address: string
  premise_proximity_confirmation_token?: string
}

export interface DomainTrustCard {
  business_id: string
  domain: string
  schema_version: any
  trust_card: Record<string, any>
  trust_card_url: string
  trust_model_version: any
  verification_class: any
  verification_disclosure: string
}

export interface DomainTrustCardLoadMatch {
  domain_key: string
}

export interface GeoContext {
}

export interface GeoContextLoadMatch {
}

export interface Health {
  agent_phone_location_bridge: Record<string, any>
  build_sha: string
  business_review_access: Record<string, any>
  contract_version: string
  external_agent_webhooks: Record<string, any>
  external_agent_webhooks_enabled: boolean
  ios_app_attest_anonymous_location: Record<string, any>
  location_choices: Record<string, any>
  location_handoff: Record<string, any>
  mobile_push: any
  ok: any
  service: string
  sponsored_ordering: Record<string, any>
  trust_model_version: any
  version: string
}

export interface HealthLoadMatch {
  agent_phone_location_bridge?: Record<string, any>
  build_sha?: string
  business_review_access?: Record<string, any>
  contract_version?: string
  external_agent_webhooks?: Record<string, any>
  external_agent_webhooks_enabled?: boolean
  ios_app_attest_anonymous_location?: Record<string, any>
  location_choices?: Record<string, any>
  location_handoff?: Record<string, any>
  mobile_push?: any
  ok?: any
  service?: string
  sponsored_ordering?: Record<string, any>
  trust_model_version?: any
  version?: string
}

export interface JobApplication {
  account_id: string
  already_withdrawn?: boolean
  application: Record<string, any>
  applications: any[]
  billing: Record<string, any>
  business_id?: string
  count: number
  cover_note?: string
  free_to_apply?: boolean
  id?: string
  job_id: string
  limit: number
  offset: number
  resume: Record<string, any>
  retention_note?: string
  status: string
}

export interface JobApplicationCreateData {
  account_id?: string
  cover_note?: string
  job_id: string
  limit?: number
  offset?: number
  resume: Record<string, any>
  status?: string

  // Selects a custom action instead of the plain create:
  //   'apply' | 'status' | 'withdraw'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface JobResumeSignedUrl {
  application_id: string
  content_type: string
  expires_in_seconds: number
  resume_file_name: string
  signed_url: string
  size_bytes: number
  status: any
}

export interface JobResumeSignedUrlCreateData {
  job_application_id: string
}

export interface LocationHandoff {
}

export interface LocationHandoffCreateData {
}

export interface Message {
  account_id: string
  client_message_id: string
  conversation_id: string
  created_at: string
  delivery?: any
  idempotent_replay: boolean
  interaction_id: string
  message: string
  moderation_required?: any
  source_path?: string
  status: any
  subject?: string
  target_business_id: string
  target_business_name?: string
  target_business_source?: string
}

export interface MessageCreateData {
  account_id: string
  client_message_id: string
  message: string
  source_path?: string
  subject: string
  target_business_id: string
  target_business_name: string
  target_business_source: string
}

export interface ModeratedAction {
  actions: any[]
  body: string
  client_request_id?: string
  content_type: string
  continuation: any
  coordinates_returned: boolean
  disclosure: string
  enabled: boolean
  file_sha256: string
  has_more: boolean
  human_confirmation?: boolean
  intent_id: string
  kind?: string
  knowledgeVersion: string
  limits: Record<string, any>
  links: any[]
  location: Record<string, any>
  message?: string
  messages: any[]
  mode: string
  name: string
  needsHuman: boolean
  policy: Record<string, any>
  question: string
  reply: string
  result: string
  results: any[]
  scan_authority_id: string
  scanner: string
  scanner_version: string
  schema_version: string
  searcher_latitude?: number
  searcher_longitude?: number
  signature?: string
  signed_in: boolean
  size_bytes: number
  subject?: string
  target_business_id: string
  topic: string
}

export interface ModeratedActionLoadMatch {
  actions?: any[]
  body?: string
  client_request_id?: string
  content_type?: string
  continuation?: any
  coordinates_returned?: boolean
  disclosure?: string
  enabled?: boolean
  file_sha256?: string
  has_more?: boolean
  human_confirmation?: boolean
  intent_id?: string
  kind?: string
  knowledgeVersion?: string
  limits?: Record<string, any>
  links?: any[]
  location?: Record<string, any>
  message?: string
  messages?: any[]
  mode?: string
  name?: string
  needsHuman?: boolean
  policy?: Record<string, any>
  question?: string
  reply?: string
  result?: string
  results?: any[]
  scan_authority_id?: string
  scanner?: string
  scanner_version?: string
  schema_version?: string
  searcher_latitude?: number
  searcher_longitude?: number
  signature?: string
  signed_in?: boolean
  size_bytes?: number
  subject?: string
  target_business_id?: string
  topic?: string
}

export interface ModeratedActionCreateData {
  client_request_id?: string
  content_type: string
  continuation?: any
  file_sha256: string
  human_confirmation?: boolean
  intent_id: string
  kind?: string
  location?: Record<string, any>
  message?: string
  messages: any[]
  question: string
  result: string
  scan_authority_id: string
  scanner: string
  scanner_version: string
  searcher_latitude?: number
  searcher_longitude?: number
  signature?: string
  size_bytes: number
  subject?: string
  target_business_id: string
}

export interface OpenApiDocument {
  components: Record<string, any>
  info: Record<string, any>
  openapi: any
  paths: Record<string, any>
  servers: any[]
  tags: any[]
}

export interface OpenApiDocumentListMatch {
  components?: Record<string, any>
  info?: Record<string, any>
  openapi?: any
  paths?: Record<string, any>
  servers?: any[]
  tags?: any[]
}

export interface OperationType {
  account_id: string
  action: string
  active?: boolean
  active_or_good_standing?: boolean
  ai_draft_id?: string
  allowed_actions: any[]
  alt?: string
  amount_cents: number
  amount_off_cents?: number
  api_key: string
  applies_to_period?: string
  applies_to_tier?: string | null
  assigned_admin_user_id?: string | null
  assigneeId: string
  assigneeLabel: string
  assigneeType: string
  assignee_id?: string
  assignee_label?: string
  assignee_type?: string
  assistant_enabled: boolean
  base_url?: string
  body: string
  businessId: string
  businessName: string
  business_id: string | null
  business_ids: any[]
  campaign_id?: string
  campaign_ids?: any[]
  caption?: string
  case_status?: string
  catalog: any[]
  category?: string
  category_alias: string
  chunk_size?: number
  city?: string
  code: string
  confidence?: number
  config: Record<string, any>
  confirm: boolean
  confirm_admin?: boolean
  confirmation: string
  connection_id: string
  connection_kind: string
  content_type: string
  context_id: string
  context_type: string
  createdAt: string | null
  created_at: string
  credential_expires_at?: string
  credential_id: string
  custom_wire?: string
  data_base64: string
  decision: string
  dedupe_ack?: boolean
  delivery_contract: Record<string, any>
  disabled_reason: string | null
  discount_type: string
  display_name: string
  disposition: string
  draft: Record<string, any>
  duration?: string
  duration_in_months?: number | null
  email: string
  enabled: boolean
  endpoint: Record<string, any>
  endpoint_id: string
  endpoint_url: string
  ends_at: string
  environment_fallback: any
  event_id: string
  event_types: any[]
  expected_allowed_actions: any[]
  expected_key_id: string
  expected_updated_at: string
  expected_version: number
  expires_at?: string
  fact_id: string
  facts: Record<string, any>
  failure_count: number
  fields: Record<string, any>
  file_name: string
  guideHandoffAnsweredAt?: string | null
  guideHandoffAt?: string | null
  guideHandoffDueAt?: string | null
  height?: number
  historic_association_checked: boolean
  hold: string
  holder_name_match?: boolean
  hours: Record<string, any>
  id: string
  idempotency_key?: string
  identifier_match?: boolean
  in_use: Record<string, any>
  instruction?: string
  invited: boolean
  key_check: any
  kind: string
  label: string
  lastMessageAt: string | null
  lastMessageAuthorType: string
  lastMessagePreview: string
  last_delivery_at: string | null
  last_error_code: any
  last_probe_at: any
  last_problem: any
  legal_name?: string
  limit?: number
  make_active: boolean
  max_cents: number
  max_redemptions?: number | null
  messages: any[]
  messagesTruncated: boolean
  min_cents: number
  model: string
  model_id: string
  name: string
  note?: string
  notes?: string
  observed_at?: string
  one_time_display: any
  outcome: string
  ownerEmail: string
  ownerLastReadAt: string | null
  ownerName: string
  ownerUserId: string
  owner_reason_code?: string
  per_customer_limit?: number
  percent_off?: number
  phone?: string
  policyVersion: string
  priority?: string
  provider: string
  providers: any[]
  purpose_code: string
  rank_bid_cents: number
  reason: string
  reason_category?: string
  reason_code?: string
  reason_detail?: string
  reference: string
  reject_reason?: string
  related_case_id?: string
  report_id: number
  report_ids: any[]
  reserve_cents: number
  resolution_note: string
  review_notes?: string
  revision: number
  role: string
  rows: any[]
  run: Record<string, any>
  schema_version: string
  scope: string
  search?: string
  settings: Record<string, any>
  signing_secret: string
  size_bytes: number
  sla_due_at?: string | null
  source: string
  source_authority?: string
  source_category_slug: string
  source_scope_checked: boolean
  source_url?: string
  starts_at?: string | null
  state?: string
  status: string
  storage: string
  street_address?: string
  subject: string
  supportLastReadAt: string | null
  target_category: string
  taxonomy_category_aliases: any[]
  ticketNumber: string
  tier?: string
  typing?: boolean
  until?: string
  updatedAt: string | null
  updated_at: string
  url: string
  valid_until?: string
  value: string
  verification_method: string
  verified_at: any
  verified_service_scope?: any[]
  version?: string
  website?: string
  width?: number
  window_hours?: number
  workload: string
  zip?: string
}

export interface OperationCreateData {
  coupon_id: string
  account_id: string
  action?: string
  active?: boolean
  active_or_good_standing?: boolean
  ai_draft_id?: string
  allowed_actions: any[]
  alt?: string
  amount_cents: number
  amount_off_cents?: number
  api_key: string
  applies_to_period?: string
  applies_to_tier?: string | null
  assigned_admin_user_id?: string | null
  assigneeId: string
  assigneeLabel: string
  assigneeType: string
  assignee_id?: string
  assignee_label?: string
  assignee_type?: string
  assistant_enabled: boolean
  base_url?: string
  body: string
  businessId: string
  businessName: string
  business_id?: string | null
  business_ids: any[]
  campaign_id?: string
  campaign_ids?: any[]
  caption?: string
  case_status?: string
  catalog: any[]
  category?: string
  category_alias?: string
  chunk_size?: number
  city?: string
  code: string
  confidence?: number
  config: Record<string, any>
  confirm?: boolean
  confirm_admin?: boolean
  confirmation: string
  connection_id: string
  connection_kind: string
  content_type: string
  context_id: string
  context_type: string
  createdAt: string | null
  created_at: string
  credential_expires_at?: string
  credential_id: string
  custom_wire?: string
  data_base64: string
  decision: string
  dedupe_ack?: boolean
  delivery_contract: Record<string, any>
  disabled_reason: string | null
  discount_type: string
  display_name: string
  disposition: string
  draft: Record<string, any>
  duration?: string
  duration_in_months?: number | null
  email: string
  enabled: boolean
  endpoint: Record<string, any>
  endpoint_id: string
  endpoint_url: string
  ends_at: string
  environment_fallback: any
  event_id: string
  event_types: any[]
  expected_allowed_actions: any[]
  expected_key_id: string
  expected_updated_at: string
  expected_version: number
  expires_at?: string
  fact_id: string
  facts: Record<string, any>
  failure_count: number
  fields: Record<string, any>
  file_name: string
  guideHandoffAnsweredAt?: string | null
  guideHandoffAt?: string | null
  guideHandoffDueAt?: string | null
  height?: number
  historic_association_checked: boolean
  hold: string
  holder_name_match?: boolean
  hours: Record<string, any>
  id: string
  idempotency_key?: string
  identifier_match?: boolean
  in_use: Record<string, any>
  instruction?: string
  invited: boolean
  key_check: any
  kind: string
  label: string
  lastMessageAt: string | null
  lastMessageAuthorType: string
  lastMessagePreview: string
  last_delivery_at: string | null
  last_error_code: any
  last_probe_at: any
  last_problem: any
  legal_name?: string
  limit?: number
  make_active: boolean
  max_cents: number
  max_redemptions?: number | null
  messages: any[]
  messagesTruncated: boolean
  min_cents: number
  model: string
  model_id: string
  name: string
  note?: string
  notes?: string
  observed_at?: string
  one_time_display: any
  outcome: string
  ownerEmail: string
  ownerLastReadAt: string | null
  ownerName: string
  ownerUserId: string
  owner_reason_code?: string
  per_customer_limit?: number
  percent_off?: number
  phone?: string
  policyVersion: string
  priority?: string
  provider: string
  providers: any[]
  purpose_code: string
  rank_bid_cents: number
  reason?: string
  reason_category?: string
  reason_code?: string
  reason_detail?: string
  reference: string
  reject_reason?: string
  related_case_id?: string
  report_id?: number
  report_ids: any[]
  reserve_cents: number
  resolution_note: string
  review_notes?: string
  revision: number
  role?: string
  rows: any[]
  run: Record<string, any>
  schema_version: string
  scope: string
  search?: string
  settings: Record<string, any>
  signing_secret: string
  size_bytes: number
  sla_due_at?: string | null
  source?: string
  source_authority?: string
  source_category_slug?: string
  source_scope_checked: boolean
  source_url?: string
  starts_at?: string | null
  state?: string
  status?: string
  storage: string
  street_address?: string
  subject: string
  supportLastReadAt: string | null
  target_category?: string
  taxonomy_category_aliases: any[]
  ticketNumber: string
  tier: string
  typing?: boolean
  until?: string
  updatedAt: string | null
  updated_at: string
  url: string
  valid_until?: string
  value: string
  verification_method: string
  verified_at: any
  verified_service_scope?: any[]
  version?: string
  website?: string
  width?: number
  window_hours?: number
  workload: string
  zip?: string

  // Selects a custom action instead of the plain create:
  //   'merge_dry_run' | 'remove' | 'rotate' | 'test' | 'test'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface OperationUpdateData {
  provider: string
  api_key?: string
  base_url?: string
  category_alias?: string
  connection_id?: string
  custom_wire?: string
  enabled?: boolean
  make_active?: boolean
  max_cents?: number
  min_cents?: number
  model?: string
  model_id?: string
  reason?: string
  reserve_cents?: number
}

export interface OperationPatchData {
  candidate_id: string
  assigned_admin_user_id?: string | null
  case_status?: string
  confidence?: number
  expected_version?: number
  notes?: string
  priority?: string
  reason_code?: string
  review_notes?: string
  sla_due_at?: string | null
  status?: string
  target_category?: string
}

export interface OperationRemoveMatch {
  access_context_id: string
}

export interface OwnerNotification {
  businessId: string
  createdAt: string
  dedupeKey: string
  emailStatus: string
  eventType: any
  id: string
  readAt: string | null
  resourceId: string
  resourceKind: any
  resourceUrl: string
  summary: string
  webhookStatus: string
}

export interface OwnerNotificationCreateData {
  notification_id: string
}

export interface OwnerNotificationSetting {
  businessId: string
  business_id?: string
  createdAt: string
  emailEnabled: boolean
  email_enabled?: boolean
  eventTypeSubscriptions: any[]
  event_types?: any[]
  updatedAt: string
  webhookEnabled: boolean
  webhook_enabled?: boolean
}

export interface OwnerNotificationSettingCreateData {
  business_id?: string
  email_enabled?: boolean
  event_types?: any[]
  webhook_enabled?: boolean
}

export interface OwnerWebhookEndpoint {
  businessId: string
  createdAt: string
  enabled: boolean
  eventTypeSubscriptions: any[]
  failureCount: number
  id: string
  lastDeliveryAt: string | null
  updatedAt: string
  url: string
}

export interface OwnerWebhookEndpointCreateData {
  webhook_id: string
}

export interface OwnerWebhookRegistration {
  business_id?: string
  endpoint: Record<string, any>
  event_types?: any[]
  one_time_display: any
  signing_secret: string
  status: any
  url: string
}

export interface OwnerWebhookRegistrationCreateData {
  business_id?: string
  event_types?: any[]
  url: string
}

export interface Pricing {
  billing: Record<string, any>
  branch_add_ons: any[]
  currency: any
  generated_at: string
  neutrality: string
  plans: any[]
  promotions: any[]
  published_at: string | null
  radius_extension: Record<string, any>
  revision_id: string | null
  source: any
  trust_model_version: any
}

export interface PricingListMatch {
  billing?: Record<string, any>
  branch_add_ons?: any[]
  currency?: any
  generated_at?: string
  neutrality?: string
  plans?: any[]
  promotions?: any[]
  published_at?: string | null
  radius_extension?: Record<string, any>
  revision_id?: string | null
  source?: any
  trust_model_version?: any
}

export interface PromoteVerifiedTransaction {
  business_id: string
  evidence_id: string
  interaction_id: string
  ok: any
  review_upgraded: boolean
  status: any
  trust_weight: any
  verified: boolean
}

export interface PromoteVerifiedTransactionCreateData {
  business_id: string
  evidence_id: string
}

export interface PublicContent {
  blocks: Record<string, any>
  generated_at: string
  source: any
  trust_model_version: any
}

export interface PublicContentLoadMatch {
  blocks?: Record<string, any>
  generated_at?: string
  source?: any
  trust_model_version?: any
}

export interface Recommend {
  candidate_window_truncated: boolean
  commercial_influence: string
  display_count?: number
  endpoint: any
  fallback_registry: any[]
  generated_at: string
  has_more: boolean
  listed: any[]
  location_context: any
  ordering: any
  policy: string
  presentation_guidance?: string
  query: Record<string, any>
  ranking_policy: string
  registry_count_basis: string
  registry_count_observed_at: string | null
  registry_name: any
  results: any[]
  returned_count: number
  reviewed_registry: any[]
  schema_version: any
  search_intent: Record<string, any>
  suggestions?: Record<string, any>
  total_matches?: number
  total_matches_basis?: number
  total_registry_records: number
  trust_model_version: any
  verified: any[]
  visible_candidate_records?: number
}

export interface RecommendListMatch {
  allowed_action?: string
  category?: string
  city?: string
  limit?: number
  location_handoff_id?: string
  location_proof_id?: string
  location_selection?: string
  q?: string
  radius_mile?: number
  saved_location_ref?: string
  state?: string
  zip?: string
}

export interface Review {
  account_id: string
  attestation_accepted: boolean
  customer_confirmed?: boolean
  message: string
  rating: number
  service_date?: any
  subject: string
  target_business_id: string
}

export interface ReviewCreateData {
  account_id: string
  attestation_accepted: boolean
  customer_confirmed?: boolean
  message: string
  rating: number
  service_date?: any
  subject: string
  target_business_id: string
}

export interface Revoke {
  account_id: string
  key_id: string
  revoked_by: string
  status: any
}

export interface RevokeCreateData {
  agent_key_id: string
}

export interface SaveBusiness {
  account_id: string
  business_id: string
  business_name: string
  business_source: string
  category?: string
  city?: string
  created_at: string
  notes?: string
  saved_business_id: string
  state?: string
  status: any
}

export interface SaveBusinessCreateData {
  account_id: string
  business_id: string
  business_name: string
  business_source: string
  category?: string
  city?: string
  notes?: string
  state?: string
}

export interface SavedBusiness {
  account_id: string
  count: number
  limit?: number
  saved_businesses: any[]
}

export interface SavedBusinessCreateData {
  account_id: string
  limit?: number
}

export interface SavedLocation {
  available: boolean
  coordinates_returned: any
  kind: any
  label: string | null
  location_proof_id?: string
  reach_precision: any
  saved_location_ref: string | null
  updated_at: string | null
  zip?: string
}

export interface SavedLocationUpdateData {
  label?: string | null
  location_proof_id?: string
  zip?: string
}

export interface SavedLocationRemoveMatch {
  available?: boolean
  coordinates_returned?: any
  kind?: any
  label?: string | null
  location_proof_id?: string
  reach_precision?: any
  saved_location_ref?: string | null
  updated_at?: string | null
  zip?: string
}

export interface Search {
  candidate_window_truncated: boolean
  commercial_influence: string
  display_count?: number
  generated_at: string
  has_more: boolean
  location_context: any
  next_cursor: string | null
  page_limit: number
  policy: string
  presentation_guidance?: string
  query: Record<string, any>
  ranking_policy: string
  registry_count_basis: string
  registry_count_observed_at: string | null
  registry_name: any
  results: any[]
  returned_count: number
  schema_version: any
  search_intent: Record<string, any>
  suggestions?: Record<string, any>
  total_matches?: number
  total_matches_basis?: number
  total_registry_records: number
  trust_model_version: any
  visible_candidate_records?: number
}

export interface SearchListMatch {
  category?: string
  city?: string
  consumer_reach?: boolean
  cursor?: string
  include_directory_listing?: boolean
  intent?: string
  limit?: number
  location_handoff_id?: string
  location_proof_id?: string
  location_selection?: string
  paid_only?: boolean
  q?: string
  radius_mile?: number
  saved_location_ref?: string
  search_intent?: string
  state?: string
  zip?: string
}

export interface Suggest {
  categories: any[]
  names: any[]
  query: string
  schema_version: any
}

export interface SuggestListMatch {
  q?: string
}

export interface SupportInternalNote {
  authorLabel: string
  body: string
  createdAt: string | null
  id: string
}

export interface SupportInternalNoteCreateData {
  id: string
  body: string
}

export interface SupportWorkflow {
  category?: any
  id?: string
  priority?: any
  waiting_on?: any
}

export interface SupportWorkflowCreateData {
  id: string
  category?: any
  priority?: any
  waiting_on?: any
}

export interface TaxonomySuggestion {
  alias: string
  path_titles: any[]
  title: string
}

export interface TaxonomySuggestionListMatch {
  limit?: number
  q?: string
}

export interface TrustCard {
  agency: string
  collected_at: string
  disclosure: string
  fact_id: string
  matched_on: string
  reason?: string
  record_kind: string
  record_number: string | null
  record_scope: string
  record_type: string
  recorded_expiry: string | null
  result: string
  source_label: string
  source_url: string
  state: string
  status_on_record: string
}

export interface TrustCardLoadMatch {
  schema_name: string
}

export interface TrustCardListMatch {
  business_id: string
}

export interface TrustCardCreateData {
  business_id: string
  license_record_id: string
  reason?: string
}

export interface UnsaveBusiness {
  account_id: string
  business_id: string
  removed: boolean
  status: any
}

export interface UnsaveBusinessCreateData {
  account_id: string
  business_id: string
}

export interface UpdateAgentBillingAccount {
  account_id: string
  billing_account: Record<string, any>
  billing_status?: string
  included_actions?: number
  monthly_fee_cents?: number
  overage_cents?: number
  plan?: string
  status: any
  updated_by: string
}

export interface UpdateAgentBillingAccountCreateData {
  account_id: string
  billing_status?: string
  included_actions?: number
  monthly_fee_cents?: number
  overage_cents?: number
  plan?: string
}

export interface WithdrawJobApplication {
  account_id: string
  already_withdrawn: boolean
  application: Record<string, any>
  application_id: string
  status: any
}

export interface WithdrawJobApplicationCreateData {
  account_id: string
  application_id: string
}

