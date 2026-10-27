# Typed models for the LoppeeBusiness SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class AgentAccessRequired(TypedDict):
    agent_name: str
    created_at: str
    developer_email: str
    organization_name: str
    request_id: str
    request_status: str
    status: Any


class AgentAccess(AgentAccessRequired, total=False):
    agent_type: str
    callback_url: str
    compliance_notes: str
    data_needs: str
    operating_states: list
    requested_actions: list
    safety_contact: str
    target_categories: list
    use_case: str
    website: str


class AgentAccessCreateDataRequired(TypedDict):
    agent_name: str
    developer_email: str
    organization_name: str


class AgentAccessCreateData(AgentAccessCreateDataRequired, total=False):
    agent_type: str
    callback_url: str
    compliance_notes: str
    data_needs: str
    operating_states: list
    requested_actions: list
    safety_contact: str
    target_categories: list
    use_case: str
    website: str


class AgentCapabilityRequired(TypedDict):
    agent_rules: dict
    discovery: dict
    external_agent_access: dict
    external_agent_webhooks: dict
    local_discovery_location_policy: dict
    registry_name: Any
    schema_version: Any
    trust_model_version: Any


class AgentCapability(AgentCapabilityRequired, total=False):
    agent_phone_location_bridge: dict
    location_choices: dict


class AgentCapabilityLoadMatch(TypedDict, total=False):
    agent_phone_location_bridge: dict
    agent_rules: dict
    discovery: dict
    external_agent_access: dict
    external_agent_webhooks: dict
    local_discovery_location_policy: dict
    location_choices: dict
    registry_name: Any
    schema_version: Any
    trust_model_version: Any


class AgentConnectionTest(TypedDict, total=False):
    key: str


class AgentConnectionTestCreateData(TypedDict, total=False):
    key: str


class AgentIntegration(TypedDict):
    auth_model: dict
    commercial_influence: dict
    developer_docs_url: str
    exposure_tiers: dict
    external_agent_access: dict
    generated_at: str
    http_api: dict
    legal: dict
    mcp: dict
    mcp_client_example_url: str
    monitoring_url: str
    openapi_url: str
    openapi_v1_url: str
    operational_rules: list
    owner_agent_notifications: dict
    package_url: str
    public_base_url: str
    rate_limits: dict
    registry_name: Any
    schema_version: str
    trust_card_contract: dict
    trust_doctrine: dict


class AgentIntegrationListMatch(TypedDict, total=False):
    auth_model: dict
    commercial_influence: dict
    developer_docs_url: str
    exposure_tiers: dict
    external_agent_access: dict
    generated_at: str
    http_api: dict
    legal: dict
    mcp: dict
    mcp_client_example_url: str
    monitoring_url: str
    openapi_url: str
    openapi_v1_url: str
    operational_rules: list
    owner_agent_notifications: dict
    package_url: str
    public_base_url: str
    rate_limits: dict
    registry_name: Any
    schema_version: str
    trust_card_contract: dict
    trust_doctrine: dict


class AgentMonitoring(TypedDict):
    build_sha: str
    contract_version: str
    generated_at: str
    health_url: str
    integration_package_url: str
    mcp_url: str
    metrics: dict
    openapi_url: str
    rate_limits: dict
    registry_name: Any
    schema_version: str
    service: str
    uptime_seconds: float
    version: str


class AgentMonitoringLoadMatch(TypedDict, total=False):
    build_sha: str
    contract_version: str
    generated_at: str
    health_url: str
    integration_package_url: str
    mcp_url: str
    metrics: dict
    openapi_url: str
    rate_limits: dict
    registry_name: Any
    schema_version: str
    service: str
    uptime_seconds: float
    version: str


class AgentOpenapi(TypedDict):
    components: dict
    info: dict
    openapi: Any
    paths: dict
    servers: list
    tags: list


class AgentOpenapiListMatch(TypedDict, total=False):
    components: dict
    info: dict
    openapi: Any
    paths: dict
    servers: list
    tags: list


class AgentPolicyRequired(TypedDict):
    external_agent_access: dict
    external_agent_webhooks: dict
    local_discovery_location_policy: dict
    payment: dict
    publication: dict
    schema_version: Any
    trust_model_version: Any
    verification: dict


class AgentPolicy(AgentPolicyRequired, total=False):
    location_handoff_flow: dict


class AgentPolicyLoadMatch(TypedDict, total=False):
    external_agent_access: dict
    external_agent_webhooks: dict
    local_discovery_location_policy: dict
    location_handoff_flow: dict
    payment: dict
    publication: dict
    schema_version: Any
    trust_model_version: Any
    verification: dict


class AnonymousLocationProofRevocation(TypedDict):
    accuracy_meters: float
    captured_at: str
    latitude: float
    longitude: float


class AnonymousLocationProofRevocationCreateData(TypedDict):
    accuracy_meters: float
    captured_at: str
    latitude: float
    longitude: float


class AnonymousLocationProofRevocationRemoveMatch(TypedDict):
    location_proof_id: str


class BusinessApplicationRequired(TypedDict):
    application: dict
    application_id: str
    business_id: str
    claim_id: str | None
    created_at: str
    existing_business: bool
    pipeline_status: str
    status: Any
    trust_model_version: Any
    uploaded_files: float


class BusinessApplication(BusinessApplicationRequired, total=False):
    files: list
    listing_id: str


class BusinessApplicationCreateDataRequired(TypedDict):
    application: dict


class BusinessApplicationCreateData(BusinessApplicationCreateDataRequired, total=False):
    business_id: str
    claim_id: str | None
    files: list
    listing_id: str


class BusinessClaimRequired(TypedDict):
    business_id: str | None
    claim_id: str
    claim_status: str
    created_at: str
    directory_listing_id: str | None
    display_name: str
    status: Any


class BusinessClaim(BusinessClaimRequired, total=False):
    category: str
    city: str
    claimant_email: str
    claimant_name: str
    claimant_relationship: str
    listing_id: str
    notes: str
    phone: str
    source: str
    source_type: str
    source_url: str
    state: str
    verification: dict
    website: str


class BusinessClaimCreateDataRequired(TypedDict):
    display_name: str


class BusinessClaimCreateData(BusinessClaimCreateDataRequired, total=False):
    business_id: str | None
    category: str
    city: str
    claimant_email: str
    claimant_name: str
    claimant_relationship: str
    listing_id: str
    notes: str
    phone: str
    source: str
    source_type: str
    source_url: str
    state: str
    website: str


class BusinessDeal(TypedDict):
    createdAt: str
    description: str
    discountLabel: str
    endsAt: str | None
    id: str
    promoCode: str | None
    startsAt: str | None
    terms: str | None
    title: str


class BusinessDealListMatch(TypedDict):
    id: str


class BusinessIndexRequired(TypedDict):
    business_id: str
    category: str
    city: str
    display_name: str
    domain: str | None
    insurance: dict
    phone: str | None
    public_profile_url: str
    review_reputation: dict
    state: str
    trust_card_url: str
    trust_model_version: Any
    verification_class: str
    verification_disclosure: str
    website: str | None


class BusinessIndex(BusinessIndexRequired, total=False):
    brand_assets: Any
    street_address: str | None
    zip: str | None


class BusinessIndexListMatch(TypedDict, total=False):
    cursor: str
    limit: float


class BusinessOwnerRequired(TypedDict):
    account_id: str
    account_role: str
    acknowledge_data_effects: bool
    actions: list
    allowed_actions: list
    amount_cents: float
    asset_id: str
    assigneeId: str
    assigneeLabel: str
    assigneeType: str
    attempt_id: str
    body: str
    businessId: str
    businessName: str
    business_id: str
    campaign: dict
    campaign_id: str
    category_aliases: list
    change: dict
    client_message_id: str
    code: str
    confirmation: str
    connection_kind: str
    consent_sha256: str
    content_type: str
    createdAt: str | None
    created_at: str
    credential_id: str
    credential_identifier: str
    data_base64: str
    delivery_contract: dict
    disabled_reason: str | None
    display_name: str
    enabled: bool
    endpoint: dict
    endpoint_id: str
    endpoint_url: str
    event_id: str
    event_types: list
    expected_updated_at: str
    failure_count: int
    file_name: str
    id: str
    installation_id: str
    issuer: str
    kind: str
    lastMessageAt: str | None
    lastMessageAuthorType: str
    lastMessagePreview: str
    last_delivery_at: str | None
    license_number: str
    messages: list
    messagesTruncated: bool
    name: str
    one_time_display: Any
    ownerEmail: str
    ownerLastReadAt: str | None
    ownerName: str
    ownerUserId: str
    platform: str
    push_token: str
    radius_miles: float
    registered_at: str
    request_id: str
    requested_at: str
    save_card: bool
    signing_secret: str
    size_bytes: float
    status: str
    subject: str
    supportLastReadAt: str | None
    terms_version: str
    ticketNumber: str
    tier: str
    updatedAt: str | None
    updated_at: str
    url: str
    website: str


class BusinessOwner(BusinessOwnerRequired, total=False):
    applicant_location_requirements: str
    apply_url: str | None
    benefits: str
    carrier_name: str
    category: str
    category_alias: str
    city: str
    compensation_text: str
    confirm: bool
    contact_email: str | None
    country: str
    coupon_code: str
    description: str | None
    direct_apply: bool
    discount_label: str
    employment_type: str
    ends_at: str | None
    evidence_observed_at: str
    experience_level: str
    expires_at: str
    factor_id: str
    file_sha256: str
    full_name: str
    guideHandoffAnsweredAt: str | None
    guideHandoffAt: str | None
    guideHandoffDueAt: str | None
    hours: dict | None
    idempotency_key: str
    jurisdiction: str
    label: str
    launch: bool
    monthly_cap_cents: float
    note: str
    period: str
    phone: str
    policy_number: str
    postal_code: str
    promo_code: str | None
    reason: str
    reason_category: str
    reason_detail: str
    salary_currency: str
    salary_max: float | None
    salary_min: float | None
    salary_period: str
    save_card_consent_sha256: str
    schedule: str
    service_areas: str
    skills: list
    source_url: str
    starts_at: str | None
    state: str
    stated_expires_at: str
    street_address: str
    submitted_identifier: str
    terms: str | None
    threshold_cents: float
    title: str
    total_job_openings: int | None
    typing: bool
    workplace_type: str
    zip: str


class BusinessOwnerCreateDataRequired(TypedDict):
    deal_id: str
    account_id: str
    account_role: str
    acknowledge_data_effects: bool
    actions: list
    allowed_actions: list
    amount_cents: float
    asset_id: str
    assigneeId: str
    assigneeLabel: str
    assigneeType: str
    attempt_id: str
    body: str
    businessId: str
    businessName: str
    campaign: dict
    campaign_id: str
    category_aliases: list
    change: dict
    city: str
    client_message_id: str
    code: str
    confirmation: str
    connection_kind: str
    consent_sha256: str
    content_type: str
    createdAt: str | None
    created_at: str
    credential_id: str
    credential_identifier: str
    data_base64: str
    delivery_contract: dict
    disabled_reason: str | None
    discount_label: str
    display_name: str
    enabled: bool
    endpoint: dict
    endpoint_id: str
    endpoint_url: str
    event_id: str
    event_types: list
    expected_updated_at: str
    factor_id: str
    failure_count: int
    file_name: str
    file_sha256: str
    id: str
    installation_id: str
    issuer: str
    kind: str
    lastMessageAt: str | None
    lastMessageAuthorType: str
    lastMessagePreview: str
    last_delivery_at: str | None
    license_number: str
    messages: list
    messagesTruncated: bool
    name: str
    one_time_display: Any
    ownerEmail: str
    ownerLastReadAt: str | None
    ownerName: str
    ownerUserId: str
    phone: str
    platform: str
    push_token: str
    radius_miles: float
    reason: str
    registered_at: str
    request_id: str
    requested_at: str
    save_card: bool
    signing_secret: str
    size_bytes: float
    state: str
    street_address: str
    supportLastReadAt: str | None
    terms_version: str
    ticketNumber: str
    tier: str
    title: str
    updatedAt: str | None
    updated_at: str
    url: str
    website: str


class BusinessOwnerCreateData(BusinessOwnerCreateDataRequired, total=False):
    applicant_location_requirements: str
    apply_url: str | None
    benefits: str
    business_id: str
    carrier_name: str
    category: str
    category_alias: str
    compensation_text: str
    confirm: bool
    contact_email: str | None
    country: str
    coupon_code: str
    description: str | None
    direct_apply: bool
    employment_type: str
    ends_at: str | None
    evidence_observed_at: str
    experience_level: str
    expires_at: str
    full_name: str
    guideHandoffAnsweredAt: str | None
    guideHandoffAt: str | None
    guideHandoffDueAt: str | None
    hours: dict | None
    idempotency_key: str
    jurisdiction: str
    label: str
    launch: bool
    monthly_cap_cents: float
    note: str
    period: str
    policy_number: str
    postal_code: str
    promo_code: str | None
    reason_category: str
    reason_detail: str
    salary_currency: str
    salary_max: float | None
    salary_min: float | None
    salary_period: str
    save_card_consent_sha256: str
    schedule: str
    service_areas: str
    skills: list
    source_url: str
    starts_at: str | None
    stated_expires_at: str
    status: str
    subject: str
    submitted_identifier: str
    terms: str | None
    threshold_cents: float
    total_job_openings: int | None
    typing: bool
    workplace_type: str
    zip: str


class BusinessOwnerUpdateData(TypedDict, total=False):
    account_id: str
    account_role: str
    acknowledge_data_effects: bool
    actions: list
    allowed_actions: list
    amount_cents: float
    applicant_location_requirements: str
    apply_url: str | None
    asset_id: str
    assigneeId: str
    assigneeLabel: str
    assigneeType: str
    attempt_id: str
    benefits: str
    body: str
    businessId: str
    businessName: str
    business_id: str
    campaign: dict
    campaign_id: str
    carrier_name: str
    category: str
    category_alias: str
    category_aliases: list
    change: dict
    city: str
    client_message_id: str
    code: str
    compensation_text: str
    confirm: bool
    confirmation: str
    connection_kind: str
    consent_sha256: str
    contact_email: str | None
    content_type: str
    country: str
    coupon_code: str
    createdAt: str | None
    created_at: str
    credential_id: str
    credential_identifier: str
    data_base64: str
    delivery_contract: dict
    description: str | None
    direct_apply: bool
    disabled_reason: str | None
    discount_label: str
    display_name: str
    employment_type: str
    enabled: bool
    endpoint: dict
    endpoint_id: str
    endpoint_url: str
    ends_at: str | None
    event_id: str
    event_types: list
    evidence_observed_at: str
    expected_updated_at: str
    experience_level: str
    expires_at: str
    factor_id: str
    failure_count: int
    file_name: str
    file_sha256: str
    full_name: str
    guideHandoffAnsweredAt: str | None
    guideHandoffAt: str | None
    guideHandoffDueAt: str | None
    hours: dict | None
    id: str
    idempotency_key: str
    installation_id: str
    issuer: str
    jurisdiction: str
    kind: str
    label: str
    lastMessageAt: str | None
    lastMessageAuthorType: str
    lastMessagePreview: str
    last_delivery_at: str | None
    launch: bool
    license_number: str
    messages: list
    messagesTruncated: bool
    monthly_cap_cents: float
    name: str
    note: str
    one_time_display: Any
    ownerEmail: str
    ownerLastReadAt: str | None
    ownerName: str
    ownerUserId: str
    period: str
    phone: str
    platform: str
    policy_number: str
    postal_code: str
    promo_code: str | None
    push_token: str
    radius_miles: float
    reason: str
    reason_category: str
    reason_detail: str
    registered_at: str
    request_id: str
    requested_at: str
    salary_currency: str
    salary_max: float | None
    salary_min: float | None
    salary_period: str
    save_card: bool
    save_card_consent_sha256: str
    schedule: str
    service_areas: str
    signing_secret: str
    size_bytes: float
    skills: list
    source_url: str
    starts_at: str | None
    state: str
    stated_expires_at: str
    status: str
    street_address: str
    subject: str
    submitted_identifier: str
    supportLastReadAt: str | None
    terms: str | None
    terms_version: str
    threshold_cents: float
    ticketNumber: str
    tier: str
    title: str
    total_job_openings: int | None
    typing: bool
    updatedAt: str | None
    updated_at: str
    url: str
    website: str
    workplace_type: str
    zip: str


class BusinessReview(TypedDict, total=False):
    id: str


class BusinessReviewLoadMatchRequired(TypedDict):
    id: str


class BusinessReviewLoadMatch(BusinessReviewLoadMatchRequired, total=False):
    limit: float
    page: float
    rating: str


class ChatAttachment(TypedDict):
    byteSize: int
    content_type: Any
    data_base64: str
    fileName: str
    file_name: str
    id: str
    mediaType: str
    size_bytes: int


class ChatAttachmentCreateData(TypedDict):
    conversation_id: str
    content_type: Any
    data_base64: str
    file_name: str
    size_bytes: int


class ChatAttachmentUrl(TypedDict):
    byte_size: int
    expires_in_seconds: Any
    file_name: str
    id: str
    media_type: str
    signed_url: str


class ChatAttachmentUrlCreateDataRequired(TypedDict):
    attachment_id: str


class ChatAttachmentUrlCreateData(ChatAttachmentUrlCreateDataRequired, total=False):
    conversation_id: str
    message_id: str
    support_id: str


class ClaimVerificationSendRequired(TypedDict):
    channel: Any
    claim_id: str
    status: Any


class ClaimVerificationSend(ClaimVerificationSendRequired, total=False):
    challenge_id: str
    destination_hint: str
    expires_in_seconds: float
    provider_status: Any
    recipient_delivery_confirmed: Any
    request_id: str


class ClaimVerificationSendCreateDataRequired(TypedDict):
    claim_id: str


class ClaimVerificationSendCreateData(ClaimVerificationSendCreateDataRequired, total=False):
    channel: Any
    request_id: str


class ClaimVerificationVerifyRequired(TypedDict):
    business_id: str | None
    claim_id: str
    code: str
    status: Any


class ClaimVerificationVerify(ClaimVerificationVerifyRequired, total=False):
    challenge_id: str
    channel: Any
    method: Any
    publication: dict
    transfer_review_required: Any
    trust_model_version: Any


class ClaimVerificationVerifyCreateDataRequired(TypedDict):
    claim_id: str
    code: str


class ClaimVerificationVerifyCreateData(ClaimVerificationVerifyCreateDataRequired, total=False):
    challenge_id: str
    channel: Any


class CommercialClickRequired(TypedDict):
    action_type: Any
    billable: bool
    billing_status: str
    click_id: str
    created_at: str
    ledger_status: str
    source_type: Any
    status: Any
    storage: Any


class CommercialClick(CommercialClickRequired, total=False):
    ad_receipt: str
    billing_event_id: str | None
    business_id: str
    category: str
    city: str
    commercial_status: Any
    directory_listing_id: str
    display_name: str
    fallback_interaction_id: str
    listing_id: str
    metadata: dict
    migration_required: bool
    page_path: str
    referrer: str
    state: str
    surface: Any
    target_url: str


class CommercialClickCreateDataRequired(TypedDict):
    action_type: Any
    source_type: Any


class CommercialClickCreateData(CommercialClickCreateDataRequired, total=False):
    ad_receipt: str
    business_id: str
    category: str
    city: str
    commercial_status: Any
    directory_listing_id: str
    display_name: str
    listing_id: str
    metadata: dict
    page_path: str
    referrer: str
    state: str
    surface: Any
    target_url: str


class ContactRecorded(TypedDict):
    business_id: str
    contact_recorded: Any
    interaction_id: str
    ok: Any
    policy: str
    review_upgraded: Any
    status: Any
    trust_weight: Any
    verified: bool


class ContactRecordedCreateData(TypedDict):
    business_id: str


class ConversationRequired(TypedDict):
    account_id: str
    conversations: list
    count: float
    pagination: dict


class Conversation(ConversationRequired, total=False):
    conversation_id: str
    cursor: str
    limit: float


class ConversationCreateDataRequired(TypedDict):
    account_id: str


class ConversationCreateData(ConversationCreateDataRequired, total=False):
    conversation_id: str
    cursor: str
    limit: float


class ConversationCloseRequired(TypedDict):
    closed_at: str
    conversation_id: str
    status: Any


class ConversationClose(ConversationCloseRequired, total=False):
    id: str


class ConversationCloseCreateData(TypedDict):
    id: str


class ConversationReportRequired(TypedDict):
    reason: Any
    status: Any


class ConversationReport(ConversationReportRequired, total=False):
    detail: str
    id: str


class ConversationReportCreateDataRequired(TypedDict):
    id: str
    reason: Any


class ConversationReportCreateData(ConversationReportCreateDataRequired, total=False):
    detail: str


class ConversationWorkflow(TypedDict, total=False):
    priority: Any
    status: Any


class ConversationWorkflowCreateDataRequired(TypedDict):
    message_id: str


class ConversationWorkflowCreateData(ConversationWorkflowCreateDataRequired, total=False):
    priority: Any
    status: Any


class CreateAgentApiKeyRequired(TypedDict):
    account_id: str
    created_by: str
    key: dict
    one_time_display: Any
    raw_key: str
    status: Any


class CreateAgentApiKey(CreateAgentApiKeyRequired, total=False):
    allowed_actions: list
    allowed_business_ids: list
    label: str
    monthly_quota: float
    notes: str
    rate_limit_per_minute: float


class CreateAgentApiKeyCreateDataRequired(TypedDict):
    account_id: str


class CreateAgentApiKeyCreateData(CreateAgentApiKeyCreateDataRequired, total=False):
    allowed_actions: list
    allowed_business_ids: list
    label: str
    monthly_quota: float
    notes: str
    rate_limit_per_minute: float


class CustomerRequired(TypedDict):
    avatar_url: str | None
    city: str | None
    created_at: str | None
    email: str
    full_name: str
    id: str
    phone: str | None
    state: str | None
    status: Any
    updated_at: str | None


class Customer(CustomerRequired, total=False):
    auth_provider: str
    search_category: str
    service_need: str


class CustomerCreateData(TypedDict, total=False):
    auth_provider: str
    avatar_url: str | None
    city: str | None
    full_name: str
    phone: str | None
    search_category: str
    service_need: str
    state: str | None


class CustomerAccountRequired(TypedDict):
    account_id: str
    account_role: str
    accuracy_meters: float
    acknowledge_data_effects: bool
    actions: list
    agent_key_id: str
    agent_receives_coordinates: bool
    all_paused: bool
    app_attest_registered: bool
    assertion: str
    attestation: str
    author_label: str
    author_type: str
    binding: Any
    body: str
    business_id: str | None
    capture_source: Any
    captured_at: str
    challenge: str
    challenge_id: str
    client_message_id: str
    completed: bool
    confirmation: str
    connection_id: str
    connection_kind: str
    continuation: Any
    coordinates_returned: bool
    created_at: str
    credential_id: str
    declined: bool
    delivery_contract: dict
    disabled_reason: str | None
    disclosure: str
    enabled: bool
    endpoint: dict
    endpoint_id: str
    endpoint_url: str
    environment: str
    event_id: str
    event_types: list
    failure_count: int
    handoff_id: str
    has_more: bool
    id: str
    idempotent_replay: bool
    installation_id: str
    key_id: str
    last_delivery_at: str | None
    latitude: float
    longitude: float
    message_alerts_enabled: bool
    messages: list
    mode: str
    oauth_grant_id: str | None
    one_time_display: Any
    platform: str
    policy: str
    purpose: str
    push_token: str
    reason: str
    registered_at: str
    reply: str
    request_mode: str
    requested_at: str
    results: list
    schema_version: str
    selected_at: str
    signed_in: bool
    signing_secret: str
    status: Any
    updated_at: str
    url: str
    usable_until: str
    use_mode: str


class CustomerAccount(CustomerAccountRequired, total=False):
    location: Any
    name: str


class CustomerAccountCreateDataRequired(TypedDict):
    account_id: str
    account_role: str
    accuracy_meters: float
    acknowledge_data_effects: bool
    actions: list
    agent_key_id: str
    agent_receives_coordinates: bool
    all_paused: bool
    app_attest_registered: bool
    assertion: str
    attestation: str
    author_label: str
    author_type: str
    binding: Any
    body: str
    business_id: str | None
    capture_source: Any
    captured_at: str
    challenge: str
    challenge_id: str
    client_message_id: str
    completed: bool
    confirmation: str
    connection_id: str
    connection_kind: str
    coordinates_returned: bool
    created_at: str
    credential_id: str
    declined: bool
    delivery_contract: dict
    disabled_reason: str | None
    disclosure: str
    enabled: bool
    endpoint: dict
    endpoint_id: str
    endpoint_url: str
    environment: str
    event_id: str
    event_types: list
    failure_count: int
    handoff_id: str
    has_more: bool
    id: str
    idempotent_replay: bool
    installation_id: str
    key_id: str
    last_delivery_at: str | None
    latitude: float
    longitude: float
    message_alerts_enabled: bool
    messages: list
    mode: str
    oauth_grant_id: str | None
    one_time_display: Any
    platform: str
    policy: str
    purpose: str
    push_token: str
    registered_at: str
    reply: str
    request_mode: str
    requested_at: str
    results: list
    schema_version: str
    selected_at: str
    signed_in: bool
    signing_secret: str
    status: Any
    updated_at: str
    url: str
    usable_until: str
    use_mode: str


class CustomerAccountCreateData(CustomerAccountCreateDataRequired, total=False):
    continuation: Any
    location: Any
    name: str
    reason: str
    action: Any
    consent_copy_version: Any
    paused: Any


class CustomerLocationProofRevocation(TypedDict):
    accuracy_meters: float
    captured_at: str
    latitude: float
    longitude: float


class CustomerLocationProofRevocationCreateData(TypedDict):
    accuracy_meters: float
    captured_at: str
    latitude: float
    longitude: float


class CustomerLocationProofRevocationRemoveMatch(TypedDict):
    location_proof_id: str


class DestinationAddressSuggestion(TypedDict):
    input: str
    suggestions: list


class DestinationAddressSuggestionCreateData(TypedDict):
    input: str


class DestinationLocationProofRequired(TypedDict):
    address: str


class DestinationLocationProof(DestinationLocationProofRequired, total=False):
    premise_proximity_confirmation_token: str


class DestinationLocationProofCreateDataRequired(TypedDict):
    address: str


class DestinationLocationProofCreateData(DestinationLocationProofCreateDataRequired, total=False):
    premise_proximity_confirmation_token: str


class DomainTrustCard(TypedDict):
    business_id: str
    domain: str
    schema_version: Any
    trust_card: dict
    trust_card_url: str
    trust_model_version: Any
    verification_class: Any
    verification_disclosure: str


class DomainTrustCardLoadMatch(TypedDict):
    domain_key: str


class GeoContext(TypedDict):
    pass


class GeoContextLoadMatch(TypedDict):
    pass


class Health(TypedDict):
    agent_phone_location_bridge: dict
    build_sha: str
    business_review_access: dict
    contract_version: str
    external_agent_webhooks: dict
    external_agent_webhooks_enabled: bool
    ios_app_attest_anonymous_location: dict
    location_choices: dict
    location_handoff: dict
    mobile_push: Any
    ok: Any
    service: str
    sponsored_ordering: dict
    trust_model_version: Any
    version: str


class HealthLoadMatch(TypedDict, total=False):
    agent_phone_location_bridge: dict
    build_sha: str
    business_review_access: dict
    contract_version: str
    external_agent_webhooks: dict
    external_agent_webhooks_enabled: bool
    ios_app_attest_anonymous_location: dict
    location_choices: dict
    location_handoff: dict
    mobile_push: Any
    ok: Any
    service: str
    sponsored_ordering: dict
    trust_model_version: Any
    version: str


class JobApplicationRequired(TypedDict):
    account_id: str
    application: dict
    applications: list
    billing: dict
    count: float
    job_id: str
    limit: float
    offset: float
    resume: dict
    status: str


class JobApplication(JobApplicationRequired, total=False):
    already_withdrawn: bool
    business_id: str
    cover_note: str
    free_to_apply: bool
    id: str
    retention_note: str


class JobApplicationCreateDataRequired(TypedDict):
    job_id: str
    resume: dict


class JobApplicationCreateData(JobApplicationCreateDataRequired, total=False):
    account_id: str
    cover_note: str
    limit: float
    offset: float
    status: str


class JobResumeSignedUrl(TypedDict):
    application_id: str
    content_type: str
    expires_in_seconds: float
    resume_file_name: str
    signed_url: str
    size_bytes: float
    status: Any


class JobResumeSignedUrlCreateData(TypedDict):
    job_application_id: str


class LocationHandoff(TypedDict):
    pass


class LocationHandoffCreateData(TypedDict):
    pass


class MessageRequired(TypedDict):
    account_id: str
    client_message_id: str
    conversation_id: str
    created_at: str
    idempotent_replay: bool
    interaction_id: str
    message: str
    status: Any
    target_business_id: str


class Message(MessageRequired, total=False):
    delivery: Any
    moderation_required: Any
    source_path: str
    subject: str
    target_business_name: str
    target_business_source: str


class MessageCreateDataRequired(TypedDict):
    account_id: str
    client_message_id: str
    message: str
    subject: str
    target_business_id: str
    target_business_name: str
    target_business_source: str


class MessageCreateData(MessageCreateDataRequired, total=False):
    source_path: str


class ModeratedActionRequired(TypedDict):
    actions: list
    body: str
    content_type: str
    continuation: Any
    coordinates_returned: bool
    disclosure: str
    enabled: bool
    file_sha256: str
    has_more: bool
    intent_id: str
    knowledgeVersion: str
    limits: dict
    links: list
    location: dict
    messages: list
    mode: str
    name: str
    needsHuman: bool
    policy: dict
    question: str
    reply: str
    result: str
    results: list
    scan_authority_id: str
    scanner: str
    scanner_version: str
    schema_version: str
    signed_in: bool
    size_bytes: float
    target_business_id: str
    topic: str


class ModeratedAction(ModeratedActionRequired, total=False):
    client_request_id: str
    human_confirmation: bool
    kind: str
    message: str
    searcher_latitude: float
    searcher_longitude: float
    signature: str
    subject: str


class ModeratedActionLoadMatch(TypedDict, total=False):
    actions: list
    body: str
    client_request_id: str
    content_type: str
    continuation: Any
    coordinates_returned: bool
    disclosure: str
    enabled: bool
    file_sha256: str
    has_more: bool
    human_confirmation: bool
    intent_id: str
    kind: str
    knowledgeVersion: str
    limits: dict
    links: list
    location: dict
    message: str
    messages: list
    mode: str
    name: str
    needsHuman: bool
    policy: dict
    question: str
    reply: str
    result: str
    results: list
    scan_authority_id: str
    scanner: str
    scanner_version: str
    schema_version: str
    searcher_latitude: float
    searcher_longitude: float
    signature: str
    signed_in: bool
    size_bytes: float
    subject: str
    target_business_id: str
    topic: str


class ModeratedActionCreateDataRequired(TypedDict):
    content_type: str
    file_sha256: str
    intent_id: str
    messages: list
    question: str
    result: str
    scan_authority_id: str
    scanner: str
    scanner_version: str
    size_bytes: float
    target_business_id: str


class ModeratedActionCreateData(ModeratedActionCreateDataRequired, total=False):
    client_request_id: str
    continuation: Any
    human_confirmation: bool
    kind: str
    location: dict
    message: str
    searcher_latitude: float
    searcher_longitude: float
    signature: str
    subject: str


class OpenApiDocument(TypedDict):
    components: dict
    info: dict
    openapi: Any
    paths: dict
    servers: list
    tags: list


class OpenApiDocumentListMatch(TypedDict, total=False):
    components: dict
    info: dict
    openapi: Any
    paths: dict
    servers: list
    tags: list


class OperationRequired(TypedDict):
    account_id: str
    action: str
    allowed_actions: list
    amount_cents: float
    api_key: str
    assigneeId: str
    assigneeLabel: str
    assigneeType: str
    assistant_enabled: bool
    body: str
    businessId: str
    businessName: str
    business_id: str | None
    business_ids: list
    catalog: list
    category_alias: str
    code: str
    config: dict
    confirm: bool
    confirmation: str
    connection_id: str
    connection_kind: str
    content_type: str
    context_id: str
    context_type: str
    createdAt: str | None
    created_at: str
    credential_id: str
    data_base64: str
    decision: str
    delivery_contract: dict
    disabled_reason: str | None
    discount_type: str
    display_name: str
    disposition: str
    draft: dict
    email: str
    enabled: bool
    endpoint: dict
    endpoint_id: str
    endpoint_url: str
    ends_at: str
    environment_fallback: Any
    event_id: str
    event_types: list
    expected_allowed_actions: list
    expected_key_id: str
    expected_updated_at: str
    expected_version: float
    fact_id: str
    facts: dict
    failure_count: int
    fields: dict
    file_name: str
    historic_association_checked: bool
    hold: str
    hours: dict
    id: str
    in_use: dict
    invited: bool
    key_check: Any
    kind: str
    label: str
    lastMessageAt: str | None
    lastMessageAuthorType: str
    lastMessagePreview: str
    last_delivery_at: str | None
    last_error_code: Any
    last_probe_at: Any
    last_problem: Any
    make_active: bool
    max_cents: float
    messages: list
    messagesTruncated: bool
    min_cents: float
    model: str
    model_id: str
    name: str
    one_time_display: Any
    outcome: str
    ownerEmail: str
    ownerLastReadAt: str | None
    ownerName: str
    ownerUserId: str
    policyVersion: str
    provider: str
    providers: list
    purpose_code: str
    rank_bid_cents: int
    reason: str
    reference: str
    report_id: int
    report_ids: list
    reserve_cents: float
    resolution_note: str
    revision: int
    role: str
    rows: list
    run: dict
    schema_version: str
    scope: str
    settings: dict
    signing_secret: str
    size_bytes: float
    source: str
    source_category_slug: str
    source_scope_checked: bool
    status: str
    storage: str
    subject: str
    supportLastReadAt: str | None
    target_category: str
    taxonomy_category_aliases: list
    ticketNumber: str
    updatedAt: str | None
    updated_at: str
    url: str
    value: str
    verification_method: str
    verified_at: Any
    workload: str


class Operation(OperationRequired, total=False):
    active: bool
    active_or_good_standing: bool
    ai_draft_id: str
    alt: str
    amount_off_cents: float
    applies_to_period: str
    applies_to_tier: str | None
    assigned_admin_user_id: str | None
    assignee_id: str
    assignee_label: str
    assignee_type: str
    base_url: str
    campaign_id: str
    campaign_ids: list
    caption: str
    case_status: str
    category: str
    chunk_size: float
    city: str
    confidence: float
    confirm_admin: bool
    credential_expires_at: str
    custom_wire: str
    dedupe_ack: bool
    duration: str
    duration_in_months: int | None
    expires_at: str
    guideHandoffAnsweredAt: str | None
    guideHandoffAt: str | None
    guideHandoffDueAt: str | None
    height: float
    holder_name_match: bool
    idempotency_key: str
    identifier_match: bool
    instruction: str
    legal_name: str
    limit: float
    max_redemptions: int | None
    note: str
    notes: str
    observed_at: str
    owner_reason_code: str
    per_customer_limit: float
    percent_off: float
    phone: str
    priority: str
    reason_category: str
    reason_code: str
    reason_detail: str
    reject_reason: str
    related_case_id: str
    review_notes: str
    search: str
    sla_due_at: str | None
    source_authority: str
    source_url: str
    starts_at: str | None
    state: str
    street_address: str
    tier: str
    typing: bool
    until: str
    valid_until: str
    verified_service_scope: list
    version: str
    website: str
    width: float
    window_hours: float
    zip: str


class OperationCreateDataRequired(TypedDict):
    coupon_id: str
    account_id: str
    allowed_actions: list
    amount_cents: float
    api_key: str
    assigneeId: str
    assigneeLabel: str
    assigneeType: str
    assistant_enabled: bool
    body: str
    businessId: str
    businessName: str
    business_ids: list
    catalog: list
    code: str
    config: dict
    confirmation: str
    connection_id: str
    connection_kind: str
    content_type: str
    context_id: str
    context_type: str
    createdAt: str | None
    created_at: str
    credential_id: str
    data_base64: str
    decision: str
    delivery_contract: dict
    disabled_reason: str | None
    discount_type: str
    display_name: str
    disposition: str
    draft: dict
    email: str
    enabled: bool
    endpoint: dict
    endpoint_id: str
    endpoint_url: str
    ends_at: str
    environment_fallback: Any
    event_id: str
    event_types: list
    expected_allowed_actions: list
    expected_key_id: str
    expected_updated_at: str
    expected_version: float
    fact_id: str
    facts: dict
    failure_count: int
    fields: dict
    file_name: str
    historic_association_checked: bool
    hold: str
    hours: dict
    id: str
    in_use: dict
    invited: bool
    key_check: Any
    kind: str
    label: str
    lastMessageAt: str | None
    lastMessageAuthorType: str
    lastMessagePreview: str
    last_delivery_at: str | None
    last_error_code: Any
    last_probe_at: Any
    last_problem: Any
    make_active: bool
    max_cents: float
    messages: list
    messagesTruncated: bool
    min_cents: float
    model: str
    model_id: str
    name: str
    one_time_display: Any
    outcome: str
    ownerEmail: str
    ownerLastReadAt: str | None
    ownerName: str
    ownerUserId: str
    policyVersion: str
    provider: str
    providers: list
    purpose_code: str
    rank_bid_cents: int
    reference: str
    report_ids: list
    reserve_cents: float
    resolution_note: str
    revision: int
    rows: list
    run: dict
    schema_version: str
    scope: str
    settings: dict
    signing_secret: str
    size_bytes: float
    source_scope_checked: bool
    storage: str
    subject: str
    supportLastReadAt: str | None
    taxonomy_category_aliases: list
    ticketNumber: str
    tier: str
    updatedAt: str | None
    updated_at: str
    url: str
    value: str
    verification_method: str
    verified_at: Any
    workload: str


class OperationCreateData(OperationCreateDataRequired, total=False):
    action: str
    active: bool
    active_or_good_standing: bool
    ai_draft_id: str
    alt: str
    amount_off_cents: float
    applies_to_period: str
    applies_to_tier: str | None
    assigned_admin_user_id: str | None
    assignee_id: str
    assignee_label: str
    assignee_type: str
    base_url: str
    business_id: str | None
    campaign_id: str
    campaign_ids: list
    caption: str
    case_status: str
    category: str
    category_alias: str
    chunk_size: float
    city: str
    confidence: float
    confirm: bool
    confirm_admin: bool
    credential_expires_at: str
    custom_wire: str
    dedupe_ack: bool
    duration: str
    duration_in_months: int | None
    expires_at: str
    guideHandoffAnsweredAt: str | None
    guideHandoffAt: str | None
    guideHandoffDueAt: str | None
    height: float
    holder_name_match: bool
    idempotency_key: str
    identifier_match: bool
    instruction: str
    legal_name: str
    limit: float
    max_redemptions: int | None
    note: str
    notes: str
    observed_at: str
    owner_reason_code: str
    per_customer_limit: float
    percent_off: float
    phone: str
    priority: str
    reason: str
    reason_category: str
    reason_code: str
    reason_detail: str
    reject_reason: str
    related_case_id: str
    report_id: int
    review_notes: str
    role: str
    search: str
    sla_due_at: str | None
    source: str
    source_authority: str
    source_category_slug: str
    source_url: str
    starts_at: str | None
    state: str
    status: str
    street_address: str
    target_category: str
    typing: bool
    until: str
    valid_until: str
    verified_service_scope: list
    version: str
    website: str
    width: float
    window_hours: float
    zip: str


class OperationUpdateDataRequired(TypedDict):
    provider: str


class OperationUpdateData(OperationUpdateDataRequired, total=False):
    api_key: str
    base_url: str
    category_alias: str
    connection_id: str
    custom_wire: str
    enabled: bool
    make_active: bool
    max_cents: float
    min_cents: float
    model: str
    model_id: str
    reason: str
    reserve_cents: float


class OperationPatchDataRequired(TypedDict):
    candidate_id: str


class OperationPatchData(OperationPatchDataRequired, total=False):
    assigned_admin_user_id: str | None
    case_status: str
    confidence: float
    expected_version: float
    notes: str
    priority: str
    reason_code: str
    review_notes: str
    sla_due_at: str | None
    status: str
    target_category: str


class OperationRemoveMatch(TypedDict):
    access_context_id: str


class OwnerNotification(TypedDict):
    businessId: str
    createdAt: str
    dedupeKey: str
    emailStatus: str
    eventType: Any
    id: str
    readAt: str | None
    resourceId: str
    resourceKind: Any
    resourceUrl: str
    summary: str
    webhookStatus: str


class OwnerNotificationCreateData(TypedDict):
    notification_id: str


class OwnerNotificationSettingRequired(TypedDict):
    businessId: str
    createdAt: str
    emailEnabled: bool
    eventTypeSubscriptions: list
    updatedAt: str
    webhookEnabled: bool


class OwnerNotificationSetting(OwnerNotificationSettingRequired, total=False):
    business_id: str
    email_enabled: bool
    event_types: list
    webhook_enabled: bool


class OwnerNotificationSettingCreateData(TypedDict, total=False):
    business_id: str
    email_enabled: bool
    event_types: list
    webhook_enabled: bool


class OwnerWebhookEndpoint(TypedDict):
    businessId: str
    createdAt: str
    enabled: bool
    eventTypeSubscriptions: list
    failureCount: float
    id: str
    lastDeliveryAt: str | None
    updatedAt: str
    url: str


class OwnerWebhookEndpointCreateData(TypedDict):
    webhook_id: str


class OwnerWebhookRegistrationRequired(TypedDict):
    endpoint: dict
    one_time_display: Any
    signing_secret: str
    status: Any
    url: str


class OwnerWebhookRegistration(OwnerWebhookRegistrationRequired, total=False):
    business_id: str
    event_types: list


class OwnerWebhookRegistrationCreateDataRequired(TypedDict):
    url: str


class OwnerWebhookRegistrationCreateData(OwnerWebhookRegistrationCreateDataRequired, total=False):
    business_id: str
    event_types: list


class Pricing(TypedDict):
    billing: dict
    branch_add_ons: list
    currency: Any
    generated_at: str
    neutrality: str
    plans: list
    promotions: list
    published_at: str | None
    radius_extension: dict
    revision_id: str | None
    source: Any
    trust_model_version: Any


class PricingListMatch(TypedDict, total=False):
    billing: dict
    branch_add_ons: list
    currency: Any
    generated_at: str
    neutrality: str
    plans: list
    promotions: list
    published_at: str | None
    radius_extension: dict
    revision_id: str | None
    source: Any
    trust_model_version: Any


class PromoteVerifiedTransaction(TypedDict):
    business_id: str
    evidence_id: str
    interaction_id: str
    ok: Any
    review_upgraded: bool
    status: Any
    trust_weight: Any
    verified: bool


class PromoteVerifiedTransactionCreateData(TypedDict):
    business_id: str
    evidence_id: str


class PublicContent(TypedDict):
    blocks: dict
    generated_at: str
    source: Any
    trust_model_version: Any


class PublicContentLoadMatch(TypedDict, total=False):
    blocks: dict
    generated_at: str
    source: Any
    trust_model_version: Any


class RecommendRequired(TypedDict):
    candidate_window_truncated: bool
    commercial_influence: str
    endpoint: Any
    fallback_registry: list
    generated_at: str
    has_more: bool
    listed: list
    location_context: Any
    ordering: Any
    policy: str
    query: dict
    ranking_policy: str
    registry_count_basis: str
    registry_count_observed_at: str | None
    registry_name: Any
    results: list
    returned_count: int
    reviewed_registry: list
    schema_version: Any
    search_intent: dict
    total_registry_records: int
    trust_model_version: Any
    verified: list


class Recommend(RecommendRequired, total=False):
    display_count: int
    presentation_guidance: str
    suggestions: dict
    total_matches: int
    total_matches_basis: int
    visible_candidate_records: int


class RecommendListMatch(TypedDict, total=False):
    allowed_action: str
    category: str
    city: str
    limit: int
    location_handoff_id: str
    location_proof_id: str
    location_selection: str
    q: str
    radius_mile: float
    saved_location_ref: str
    state: str
    zip: str


class ReviewRequired(TypedDict):
    account_id: str
    attestation_accepted: bool
    message: str
    rating: int
    subject: str
    target_business_id: str


class Review(ReviewRequired, total=False):
    customer_confirmed: bool
    service_date: Any


class ReviewCreateDataRequired(TypedDict):
    account_id: str
    attestation_accepted: bool
    message: str
    rating: int
    subject: str
    target_business_id: str


class ReviewCreateData(ReviewCreateDataRequired, total=False):
    customer_confirmed: bool
    service_date: Any


class Revoke(TypedDict):
    account_id: str
    key_id: str
    revoked_by: str
    status: Any


class RevokeCreateData(TypedDict):
    agent_key_id: str


class SaveBusinessRequired(TypedDict):
    account_id: str
    business_id: str
    business_name: str
    business_source: str
    created_at: str
    saved_business_id: str
    status: Any


class SaveBusiness(SaveBusinessRequired, total=False):
    category: str
    city: str
    notes: str
    state: str


class SaveBusinessCreateDataRequired(TypedDict):
    account_id: str
    business_id: str
    business_name: str
    business_source: str


class SaveBusinessCreateData(SaveBusinessCreateDataRequired, total=False):
    category: str
    city: str
    notes: str
    state: str


class SavedBusinessRequired(TypedDict):
    account_id: str
    count: float
    saved_businesses: list


class SavedBusiness(SavedBusinessRequired, total=False):
    limit: float


class SavedBusinessCreateDataRequired(TypedDict):
    account_id: str


class SavedBusinessCreateData(SavedBusinessCreateDataRequired, total=False):
    limit: float


class SavedLocationRequired(TypedDict):
    available: bool
    coordinates_returned: Any
    kind: Any
    label: str | None
    reach_precision: Any
    saved_location_ref: str | None
    updated_at: str | None


class SavedLocation(SavedLocationRequired, total=False):
    location_proof_id: str
    zip: str


class SavedLocationUpdateData(TypedDict, total=False):
    label: str | None
    location_proof_id: str
    zip: str


class SavedLocationRemoveMatch(TypedDict, total=False):
    available: bool
    coordinates_returned: Any
    kind: Any
    label: str | None
    location_proof_id: str
    reach_precision: Any
    saved_location_ref: str | None
    updated_at: str | None
    zip: str


class SearchRequired(TypedDict):
    candidate_window_truncated: bool
    commercial_influence: str
    generated_at: str
    has_more: bool
    location_context: Any
    next_cursor: str | None
    page_limit: int
    policy: str
    query: dict
    ranking_policy: str
    registry_count_basis: str
    registry_count_observed_at: str | None
    registry_name: Any
    results: list
    returned_count: int
    schema_version: Any
    search_intent: dict
    total_registry_records: int
    trust_model_version: Any


class Search(SearchRequired, total=False):
    display_count: int
    presentation_guidance: str
    suggestions: dict
    total_matches: int
    total_matches_basis: int
    visible_candidate_records: int


class SearchListMatch(TypedDict, total=False):
    category: str
    city: str
    consumer_reach: bool
    cursor: str
    include_directory_listing: bool
    intent: str
    limit: int
    location_handoff_id: str
    location_proof_id: str
    location_selection: str
    paid_only: bool
    q: str
    radius_mile: float
    saved_location_ref: str
    search_intent: str
    state: str
    zip: str


class Suggest(TypedDict):
    categories: list
    names: list
    query: str
    schema_version: Any


class SuggestListMatch(TypedDict, total=False):
    q: str


class SupportInternalNote(TypedDict):
    authorLabel: str
    body: str
    createdAt: str | None
    id: str


class SupportInternalNoteCreateData(TypedDict):
    id: str
    body: str


class SupportWorkflow(TypedDict, total=False):
    category: Any
    id: str
    priority: Any
    waiting_on: Any


class SupportWorkflowCreateDataRequired(TypedDict):
    id: str


class SupportWorkflowCreateData(SupportWorkflowCreateDataRequired, total=False):
    category: Any
    priority: Any
    waiting_on: Any


class TaxonomySuggestion(TypedDict):
    alias: str
    path_titles: list
    title: str


class TaxonomySuggestionListMatch(TypedDict, total=False):
    limit: float
    q: str


class TrustCardRequired(TypedDict):
    agency: str
    collected_at: str
    disclosure: str
    fact_id: str
    matched_on: str
    record_kind: str
    record_number: str | None
    record_scope: str
    record_type: str
    recorded_expiry: str | None
    result: str
    source_label: str
    source_url: str
    state: str
    status_on_record: str


class TrustCard(TrustCardRequired, total=False):
    reason: str


class TrustCardLoadMatch(TypedDict):
    schema_name: str


class TrustCardListMatch(TypedDict):
    business_id: str


class TrustCardCreateDataRequired(TypedDict):
    business_id: str
    license_record_id: str


class TrustCardCreateData(TrustCardCreateDataRequired, total=False):
    reason: str


class UnsaveBusiness(TypedDict):
    account_id: str
    business_id: str
    removed: bool
    status: Any


class UnsaveBusinessCreateData(TypedDict):
    account_id: str
    business_id: str


class UpdateAgentBillingAccountRequired(TypedDict):
    account_id: str
    billing_account: dict
    status: Any
    updated_by: str


class UpdateAgentBillingAccount(UpdateAgentBillingAccountRequired, total=False):
    billing_status: str
    included_actions: float
    monthly_fee_cents: float
    overage_cents: float
    plan: str


class UpdateAgentBillingAccountCreateDataRequired(TypedDict):
    account_id: str


class UpdateAgentBillingAccountCreateData(UpdateAgentBillingAccountCreateDataRequired, total=False):
    billing_status: str
    included_actions: float
    monthly_fee_cents: float
    overage_cents: float
    plan: str


class WithdrawJobApplication(TypedDict):
    account_id: str
    already_withdrawn: bool
    application: dict
    application_id: str
    status: Any


class WithdrawJobApplicationCreateData(TypedDict):
    account_id: str
    application_id: str
