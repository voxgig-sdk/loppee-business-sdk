<?php
declare(strict_types=1);

// Typed models for the LoppeeBusiness SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** AgentAccess entity data model. */
class AgentAccess
{
    public string $agent_name;
    public ?string $agent_type = null;
    public ?string $callback_url = null;
    public ?string $compliance_notes = null;
    public string $created_at;
    public ?string $data_needs = null;
    public string $developer_email;
    public ?array $operating_states = null;
    public string $organization_name;
    public string $request_id;
    public string $request_status;
    public ?array $requested_actions = null;
    public ?string $safety_contact = null;
    public mixed $status;
    public ?array $target_categories = null;
    public ?string $use_case = null;
    public ?string $website = null;
}

/** Request payload for AgentAccess#create. */
class AgentAccessCreateData
{
    public string $agent_name;
    public ?string $agent_type = null;
    public ?string $callback_url = null;
    public ?string $compliance_notes = null;
    public ?string $data_needs = null;
    public string $developer_email;
    public ?array $operating_states = null;
    public string $organization_name;
    public ?array $requested_actions = null;
    public ?string $safety_contact = null;
    public ?array $target_categories = null;
    public ?string $use_case = null;
    public ?string $website = null;
}

/** AgentCapability entity data model. */
class AgentCapability
{
    public ?array $agent_phone_location_bridge = null;
    public array $agent_rules;
    public array $discovery;
    public array $external_agent_access;
    public array $external_agent_webhooks;
    public array $local_discovery_location_policy;
    public ?array $location_choices = null;
    public mixed $registry_name;
    public mixed $schema_version;
    public mixed $trust_model_version;
}

/** Request payload for AgentCapability#load. */
class AgentCapabilityLoadMatch
{
    public ?array $agent_phone_location_bridge = null;
    public ?array $agent_rules = null;
    public ?array $discovery = null;
    public ?array $external_agent_access = null;
    public ?array $external_agent_webhooks = null;
    public ?array $local_discovery_location_policy = null;
    public ?array $location_choices = null;
    public mixed $registry_name = null;
    public mixed $schema_version = null;
    public mixed $trust_model_version = null;
}

/** AgentConnectionTest entity data model. */
class AgentConnectionTest
{
    public ?string $key = null;
}

/** Request payload for AgentConnectionTest#create. */
class AgentConnectionTestCreateData
{
    public ?string $key = null;
}

/** AgentIntegration entity data model. */
class AgentIntegration
{
    public array $auth_model;
    public array $commercial_influence;
    public string $developer_docs_url;
    public array $exposure_tiers;
    public array $external_agent_access;
    public string $generated_at;
    public array $http_api;
    public array $legal;
    public array $mcp;
    public string $mcp_client_example_url;
    public string $monitoring_url;
    public string $openapi_url;
    public string $openapi_v1_url;
    public array $operational_rules;
    public array $owner_agent_notifications;
    public string $package_url;
    public string $public_base_url;
    public array $rate_limits;
    public mixed $registry_name;
    public string $schema_version;
    public array $trust_card_contract;
    public array $trust_doctrine;
}

/** Request payload for AgentIntegration#list. */
class AgentIntegrationListMatch
{
    public ?array $auth_model = null;
    public ?array $commercial_influence = null;
    public ?string $developer_docs_url = null;
    public ?array $exposure_tiers = null;
    public ?array $external_agent_access = null;
    public ?string $generated_at = null;
    public ?array $http_api = null;
    public ?array $legal = null;
    public ?array $mcp = null;
    public ?string $mcp_client_example_url = null;
    public ?string $monitoring_url = null;
    public ?string $openapi_url = null;
    public ?string $openapi_v1_url = null;
    public ?array $operational_rules = null;
    public ?array $owner_agent_notifications = null;
    public ?string $package_url = null;
    public ?string $public_base_url = null;
    public ?array $rate_limits = null;
    public mixed $registry_name = null;
    public ?string $schema_version = null;
    public ?array $trust_card_contract = null;
    public ?array $trust_doctrine = null;
}

/** AgentMonitoring entity data model. */
class AgentMonitoring
{
    public string $build_sha;
    public string $contract_version;
    public string $generated_at;
    public string $health_url;
    public string $integration_package_url;
    public string $mcp_url;
    public array $metrics;
    public string $openapi_url;
    public array $rate_limits;
    public mixed $registry_name;
    public string $schema_version;
    public string $service;
    public float $uptime_seconds;
    public string $version;
}

/** Request payload for AgentMonitoring#load. */
class AgentMonitoringLoadMatch
{
    public ?string $build_sha = null;
    public ?string $contract_version = null;
    public ?string $generated_at = null;
    public ?string $health_url = null;
    public ?string $integration_package_url = null;
    public ?string $mcp_url = null;
    public ?array $metrics = null;
    public ?string $openapi_url = null;
    public ?array $rate_limits = null;
    public mixed $registry_name = null;
    public ?string $schema_version = null;
    public ?string $service = null;
    public ?float $uptime_seconds = null;
    public ?string $version = null;
}

/** AgentOpenapi entity data model. */
class AgentOpenapi
{
    public array $components;
    public array $info;
    public mixed $openapi;
    public array $paths;
    public array $servers;
    public array $tags;
}

/** Request payload for AgentOpenapi#list. */
class AgentOpenapiListMatch
{
    public ?array $components = null;
    public ?array $info = null;
    public mixed $openapi = null;
    public ?array $paths = null;
    public ?array $servers = null;
    public ?array $tags = null;
}

/** AgentPolicy entity data model. */
class AgentPolicy
{
    public array $external_agent_access;
    public array $external_agent_webhooks;
    public array $local_discovery_location_policy;
    public ?array $location_handoff_flow = null;
    public array $payment;
    public array $publication;
    public mixed $schema_version;
    public mixed $trust_model_version;
    public array $verification;
}

/** Request payload for AgentPolicy#load. */
class AgentPolicyLoadMatch
{
    public ?array $external_agent_access = null;
    public ?array $external_agent_webhooks = null;
    public ?array $local_discovery_location_policy = null;
    public ?array $location_handoff_flow = null;
    public ?array $payment = null;
    public ?array $publication = null;
    public mixed $schema_version = null;
    public mixed $trust_model_version = null;
    public ?array $verification = null;
}

/** AnonymousLocationProofRevocation entity data model. */
class AnonymousLocationProofRevocation
{
    public float $accuracy_meters;
    public string $captured_at;
    public float $latitude;
    public float $longitude;
}

/** Request payload for AnonymousLocationProofRevocation#create. */
class AnonymousLocationProofRevocationCreateData
{
    public float $accuracy_meters;
    public string $captured_at;
    public float $latitude;
    public float $longitude;
}

/** Request payload for AnonymousLocationProofRevocation#remove. */
class AnonymousLocationProofRevocationRemoveMatch
{
    public string $location_proof_id;
}

/** BusinessApplication entity data model. */
class BusinessApplication
{
    public array $application;
    public string $application_id;
    public string $business_id;
    public mixed $claim_id;
    public string $created_at;
    public bool $existing_business;
    public ?array $files = null;
    public ?string $listing_id = null;
    public string $pipeline_status;
    public mixed $status;
    public mixed $trust_model_version;
    public float $uploaded_files;
}

/** Request payload for BusinessApplication#create. */
class BusinessApplicationCreateData
{
    public array $application;
    public ?string $business_id = null;
    public mixed $claim_id = null;
    public ?array $files = null;
    public ?string $listing_id = null;
}

/** BusinessClaim entity data model. */
class BusinessClaim
{
    public mixed $business_id;
    public ?string $category = null;
    public ?string $city = null;
    public string $claim_id;
    public string $claim_status;
    public ?string $claimant_email = null;
    public ?string $claimant_name = null;
    public ?string $claimant_relationship = null;
    public string $created_at;
    public mixed $directory_listing_id;
    public string $display_name;
    public ?string $listing_id = null;
    public ?string $notes = null;
    public ?string $phone = null;
    public ?string $source = null;
    public ?string $source_type = null;
    public ?string $source_url = null;
    public ?string $state = null;
    public mixed $status;
    public ?array $verification = null;
    public ?string $website = null;
}

/** Request payload for BusinessClaim#create. */
class BusinessClaimCreateData
{
    public mixed $business_id = null;
    public ?string $category = null;
    public ?string $city = null;
    public ?string $claimant_email = null;
    public ?string $claimant_name = null;
    public ?string $claimant_relationship = null;
    public string $display_name;
    public ?string $listing_id = null;
    public ?string $notes = null;
    public ?string $phone = null;
    public ?string $source = null;
    public ?string $source_type = null;
    public ?string $source_url = null;
    public ?string $state = null;
    public ?string $website = null;
}

/** BusinessDeal entity data model. */
class BusinessDeal
{
    public string $createdAt;
    public string $description;
    public string $discountLabel;
    public mixed $endsAt;
    public string $id;
    public mixed $promoCode;
    public mixed $startsAt;
    public mixed $terms;
    public string $title;
}

/** Request payload for BusinessDeal#list. */
class BusinessDealListMatch
{
    public string $id;
}

/** BusinessIndex entity data model. */
class BusinessIndex
{
    public mixed $brand_assets = null;
    public string $business_id;
    public string $category;
    public string $city;
    public string $display_name;
    public mixed $domain;
    public array $insurance;
    public mixed $phone;
    public string $public_profile_url;
    public array $review_reputation;
    public string $state;
    public mixed $street_address = null;
    public string $trust_card_url;
    public mixed $trust_model_version;
    public string $verification_class;
    public string $verification_disclosure;
    public mixed $website;
    public mixed $zip = null;
}

/** Request payload for BusinessIndex#list. */
class BusinessIndexListMatch
{
    public ?string $cursor = null;
    public ?float $limit = null;
}

/** BusinessOwner entity data model. */
class BusinessOwner
{
    public string $account_id;
    public string $account_role;
    public bool $acknowledge_data_effects;
    public array $actions;
    public array $allowed_actions;
    public float $amount_cents;
    public ?string $applicant_location_requirements = null;
    public mixed $apply_url = null;
    public string $asset_id;
    public string $assigneeId;
    public string $assigneeLabel;
    public string $assigneeType;
    public string $attempt_id;
    public ?string $benefits = null;
    public string $body;
    public string $businessId;
    public string $businessName;
    public string $business_id;
    public array $campaign;
    public string $campaign_id;
    public ?string $carrier_name = null;
    public ?string $category = null;
    public ?string $category_alias = null;
    public array $category_aliases;
    public array $change;
    public ?string $city = null;
    public string $client_message_id;
    public string $code;
    public ?string $compensation_text = null;
    public ?bool $confirm = null;
    public string $confirmation;
    public string $connection_kind;
    public string $consent_sha256;
    public mixed $contact_email = null;
    public string $content_type;
    public ?string $country = null;
    public ?string $coupon_code = null;
    public mixed $createdAt;
    public string $created_at;
    public string $credential_id;
    public string $credential_identifier;
    public string $data_base64;
    public array $delivery_contract;
    public mixed $description = null;
    public ?bool $direct_apply = null;
    public mixed $disabled_reason;
    public ?string $discount_label = null;
    public string $display_name;
    public ?string $employment_type = null;
    public bool $enabled;
    public array $endpoint;
    public string $endpoint_id;
    public string $endpoint_url;
    public mixed $ends_at = null;
    public string $event_id;
    public array $event_types;
    public ?string $evidence_observed_at = null;
    public string $expected_updated_at;
    public ?string $experience_level = null;
    public ?string $expires_at = null;
    public ?string $factor_id = null;
    public int $failure_count;
    public string $file_name;
    public ?string $file_sha256 = null;
    public ?string $full_name = null;
    public mixed $guideHandoffAnsweredAt = null;
    public mixed $guideHandoffAt = null;
    public mixed $guideHandoffDueAt = null;
    public mixed $hours = null;
    public string $id;
    public ?string $idempotency_key = null;
    public string $installation_id;
    public string $issuer;
    public ?string $jurisdiction = null;
    public string $kind;
    public ?string $label = null;
    public mixed $lastMessageAt;
    public string $lastMessageAuthorType;
    public string $lastMessagePreview;
    public mixed $last_delivery_at;
    public ?bool $launch = null;
    public string $license_number;
    public array $messages;
    public bool $messagesTruncated;
    public ?float $monthly_cap_cents = null;
    public string $name;
    public ?string $note = null;
    public mixed $one_time_display;
    public string $ownerEmail;
    public mixed $ownerLastReadAt;
    public string $ownerName;
    public string $ownerUserId;
    public ?string $period = null;
    public ?string $phone = null;
    public string $platform;
    public ?string $policy_number = null;
    public ?string $postal_code = null;
    public mixed $promo_code = null;
    public string $push_token;
    public float $radius_miles;
    public ?string $reason = null;
    public ?string $reason_category = null;
    public ?string $reason_detail = null;
    public string $registered_at;
    public string $request_id;
    public string $requested_at;
    public ?string $salary_currency = null;
    public mixed $salary_max = null;
    public mixed $salary_min = null;
    public ?string $salary_period = null;
    public bool $save_card;
    public ?string $save_card_consent_sha256 = null;
    public ?string $schedule = null;
    public ?string $service_areas = null;
    public string $signing_secret;
    public float $size_bytes;
    public ?array $skills = null;
    public ?string $source_url = null;
    public mixed $starts_at = null;
    public ?string $state = null;
    public ?string $stated_expires_at = null;
    public string $status;
    public ?string $street_address = null;
    public string $subject;
    public ?string $submitted_identifier = null;
    public mixed $supportLastReadAt;
    public mixed $terms = null;
    public string $terms_version;
    public ?float $threshold_cents = null;
    public string $ticketNumber;
    public string $tier;
    public ?string $title = null;
    public mixed $total_job_openings = null;
    public ?bool $typing = null;
    public mixed $updatedAt;
    public string $updated_at;
    public string $url;
    public string $website;
    public ?string $workplace_type = null;
    public ?string $zip = null;
}

/** Request payload for BusinessOwner#create. */
class BusinessOwnerCreateData
{
    public string $deal_id;
    public string $account_id;
    public string $account_role;
    public bool $acknowledge_data_effects;
    public array $actions;
    public array $allowed_actions;
    public float $amount_cents;
    public ?string $applicant_location_requirements = null;
    public mixed $apply_url = null;
    public string $asset_id;
    public string $assigneeId;
    public string $assigneeLabel;
    public string $assigneeType;
    public string $attempt_id;
    public ?string $benefits = null;
    public string $body;
    public string $businessId;
    public string $businessName;
    public ?string $business_id = null;
    public array $campaign;
    public string $campaign_id;
    public ?string $carrier_name = null;
    public ?string $category = null;
    public ?string $category_alias = null;
    public array $category_aliases;
    public array $change;
    public string $city;
    public string $client_message_id;
    public string $code;
    public ?string $compensation_text = null;
    public ?bool $confirm = null;
    public string $confirmation;
    public string $connection_kind;
    public string $consent_sha256;
    public mixed $contact_email = null;
    public string $content_type;
    public ?string $country = null;
    public ?string $coupon_code = null;
    public mixed $createdAt;
    public string $created_at;
    public string $credential_id;
    public string $credential_identifier;
    public string $data_base64;
    public array $delivery_contract;
    public mixed $description = null;
    public ?bool $direct_apply = null;
    public mixed $disabled_reason;
    public string $discount_label;
    public string $display_name;
    public ?string $employment_type = null;
    public bool $enabled;
    public array $endpoint;
    public string $endpoint_id;
    public string $endpoint_url;
    public mixed $ends_at = null;
    public string $event_id;
    public array $event_types;
    public ?string $evidence_observed_at = null;
    public string $expected_updated_at;
    public ?string $experience_level = null;
    public ?string $expires_at = null;
    public string $factor_id;
    public int $failure_count;
    public string $file_name;
    public string $file_sha256;
    public ?string $full_name = null;
    public mixed $guideHandoffAnsweredAt = null;
    public mixed $guideHandoffAt = null;
    public mixed $guideHandoffDueAt = null;
    public mixed $hours = null;
    public string $id;
    public ?string $idempotency_key = null;
    public string $installation_id;
    public string $issuer;
    public ?string $jurisdiction = null;
    public string $kind;
    public ?string $label = null;
    public mixed $lastMessageAt;
    public string $lastMessageAuthorType;
    public string $lastMessagePreview;
    public mixed $last_delivery_at;
    public ?bool $launch = null;
    public string $license_number;
    public array $messages;
    public bool $messagesTruncated;
    public ?float $monthly_cap_cents = null;
    public string $name;
    public ?string $note = null;
    public mixed $one_time_display;
    public string $ownerEmail;
    public mixed $ownerLastReadAt;
    public string $ownerName;
    public string $ownerUserId;
    public ?string $period = null;
    public string $phone;
    public string $platform;
    public ?string $policy_number = null;
    public ?string $postal_code = null;
    public mixed $promo_code = null;
    public string $push_token;
    public float $radius_miles;
    public string $reason;
    public ?string $reason_category = null;
    public ?string $reason_detail = null;
    public string $registered_at;
    public string $request_id;
    public string $requested_at;
    public ?string $salary_currency = null;
    public mixed $salary_max = null;
    public mixed $salary_min = null;
    public ?string $salary_period = null;
    public bool $save_card;
    public ?string $save_card_consent_sha256 = null;
    public ?string $schedule = null;
    public ?string $service_areas = null;
    public string $signing_secret;
    public float $size_bytes;
    public ?array $skills = null;
    public ?string $source_url = null;
    public mixed $starts_at = null;
    public string $state;
    public ?string $stated_expires_at = null;
    public ?string $status = null;
    public string $street_address;
    public ?string $subject = null;
    public ?string $submitted_identifier = null;
    public mixed $supportLastReadAt;
    public mixed $terms = null;
    public string $terms_version;
    public ?float $threshold_cents = null;
    public string $ticketNumber;
    public string $tier;
    public string $title;
    public mixed $total_job_openings = null;
    public ?bool $typing = null;
    public mixed $updatedAt;
    public string $updated_at;
    public string $url;
    public string $website;
    public ?string $workplace_type = null;
    public ?string $zip = null;
}

/** Request payload for BusinessOwner#update. */
class BusinessOwnerUpdateData
{
    public ?string $account_id = null;
    public ?string $account_role = null;
    public ?bool $acknowledge_data_effects = null;
    public ?array $actions = null;
    public ?array $allowed_actions = null;
    public ?float $amount_cents = null;
    public ?string $applicant_location_requirements = null;
    public mixed $apply_url = null;
    public ?string $asset_id = null;
    public ?string $assigneeId = null;
    public ?string $assigneeLabel = null;
    public ?string $assigneeType = null;
    public ?string $attempt_id = null;
    public ?string $benefits = null;
    public ?string $body = null;
    public ?string $businessId = null;
    public ?string $businessName = null;
    public ?string $business_id = null;
    public ?array $campaign = null;
    public ?string $campaign_id = null;
    public ?string $carrier_name = null;
    public ?string $category = null;
    public ?string $category_alias = null;
    public ?array $category_aliases = null;
    public ?array $change = null;
    public ?string $city = null;
    public ?string $client_message_id = null;
    public ?string $code = null;
    public ?string $compensation_text = null;
    public ?bool $confirm = null;
    public ?string $confirmation = null;
    public ?string $connection_kind = null;
    public ?string $consent_sha256 = null;
    public mixed $contact_email = null;
    public ?string $content_type = null;
    public ?string $country = null;
    public ?string $coupon_code = null;
    public mixed $createdAt = null;
    public ?string $created_at = null;
    public ?string $credential_id = null;
    public ?string $credential_identifier = null;
    public ?string $data_base64 = null;
    public ?array $delivery_contract = null;
    public mixed $description = null;
    public ?bool $direct_apply = null;
    public mixed $disabled_reason = null;
    public ?string $discount_label = null;
    public ?string $display_name = null;
    public ?string $employment_type = null;
    public ?bool $enabled = null;
    public ?array $endpoint = null;
    public ?string $endpoint_id = null;
    public ?string $endpoint_url = null;
    public mixed $ends_at = null;
    public ?string $event_id = null;
    public ?array $event_types = null;
    public ?string $evidence_observed_at = null;
    public ?string $expected_updated_at = null;
    public ?string $experience_level = null;
    public ?string $expires_at = null;
    public ?string $factor_id = null;
    public ?int $failure_count = null;
    public ?string $file_name = null;
    public ?string $file_sha256 = null;
    public ?string $full_name = null;
    public mixed $guideHandoffAnsweredAt = null;
    public mixed $guideHandoffAt = null;
    public mixed $guideHandoffDueAt = null;
    public mixed $hours = null;
    public ?string $id = null;
    public ?string $idempotency_key = null;
    public ?string $installation_id = null;
    public ?string $issuer = null;
    public ?string $jurisdiction = null;
    public ?string $kind = null;
    public ?string $label = null;
    public mixed $lastMessageAt = null;
    public ?string $lastMessageAuthorType = null;
    public ?string $lastMessagePreview = null;
    public mixed $last_delivery_at = null;
    public ?bool $launch = null;
    public ?string $license_number = null;
    public ?array $messages = null;
    public ?bool $messagesTruncated = null;
    public ?float $monthly_cap_cents = null;
    public ?string $name = null;
    public ?string $note = null;
    public mixed $one_time_display = null;
    public ?string $ownerEmail = null;
    public mixed $ownerLastReadAt = null;
    public ?string $ownerName = null;
    public ?string $ownerUserId = null;
    public ?string $period = null;
    public ?string $phone = null;
    public ?string $platform = null;
    public ?string $policy_number = null;
    public ?string $postal_code = null;
    public mixed $promo_code = null;
    public ?string $push_token = null;
    public ?float $radius_miles = null;
    public ?string $reason = null;
    public ?string $reason_category = null;
    public ?string $reason_detail = null;
    public ?string $registered_at = null;
    public ?string $request_id = null;
    public ?string $requested_at = null;
    public ?string $salary_currency = null;
    public mixed $salary_max = null;
    public mixed $salary_min = null;
    public ?string $salary_period = null;
    public ?bool $save_card = null;
    public ?string $save_card_consent_sha256 = null;
    public ?string $schedule = null;
    public ?string $service_areas = null;
    public ?string $signing_secret = null;
    public ?float $size_bytes = null;
    public ?array $skills = null;
    public ?string $source_url = null;
    public mixed $starts_at = null;
    public ?string $state = null;
    public ?string $stated_expires_at = null;
    public ?string $status = null;
    public ?string $street_address = null;
    public ?string $subject = null;
    public ?string $submitted_identifier = null;
    public mixed $supportLastReadAt = null;
    public mixed $terms = null;
    public ?string $terms_version = null;
    public ?float $threshold_cents = null;
    public ?string $ticketNumber = null;
    public ?string $tier = null;
    public ?string $title = null;
    public mixed $total_job_openings = null;
    public ?bool $typing = null;
    public mixed $updatedAt = null;
    public ?string $updated_at = null;
    public ?string $url = null;
    public ?string $website = null;
    public ?string $workplace_type = null;
    public ?string $zip = null;
}

/** BusinessReview entity data model. */
class BusinessReview
{
    public ?string $id = null;
}

/** Request payload for BusinessReview#load. */
class BusinessReviewLoadMatch
{
    public string $id;
    public ?float $limit = null;
    public ?float $page = null;
    public ?string $rating = null;
}

/** ChatAttachment entity data model. */
class ChatAttachment
{
    public int $byteSize;
    public mixed $content_type;
    public string $data_base64;
    public string $fileName;
    public string $file_name;
    public string $id;
    public string $mediaType;
    public int $size_bytes;
}

/** Request payload for ChatAttachment#create. */
class ChatAttachmentCreateData
{
    public string $conversation_id;
    public mixed $content_type;
    public string $data_base64;
    public string $file_name;
    public int $size_bytes;
}

/** ChatAttachmentUrl entity data model. */
class ChatAttachmentUrl
{
    public int $byte_size;
    public mixed $expires_in_seconds;
    public string $file_name;
    public string $id;
    public string $media_type;
    public string $signed_url;
}

/** Request payload for ChatAttachmentUrl#create. */
class ChatAttachmentUrlCreateData
{
    public string $attachment_id;
    public ?string $conversation_id = null;
    public ?string $message_id = null;
    public ?string $support_id = null;
}

/** ClaimVerificationSend entity data model. */
class ClaimVerificationSend
{
    public ?string $challenge_id = null;
    public mixed $channel;
    public string $claim_id;
    public ?string $destination_hint = null;
    public ?float $expires_in_seconds = null;
    public mixed $provider_status = null;
    public mixed $recipient_delivery_confirmed = null;
    public ?string $request_id = null;
    public mixed $status;
}

/** Request payload for ClaimVerificationSend#create. */
class ClaimVerificationSendCreateData
{
    public mixed $channel = null;
    public string $claim_id;
    public ?string $request_id = null;
}

/** ClaimVerificationVerify entity data model. */
class ClaimVerificationVerify
{
    public mixed $business_id;
    public ?string $challenge_id = null;
    public mixed $channel = null;
    public string $claim_id;
    public string $code;
    public mixed $method = null;
    public ?array $publication = null;
    public mixed $status;
    public mixed $transfer_review_required = null;
    public mixed $trust_model_version = null;
}

/** Request payload for ClaimVerificationVerify#create. */
class ClaimVerificationVerifyCreateData
{
    public ?string $challenge_id = null;
    public mixed $channel = null;
    public string $claim_id;
    public string $code;
}

/** CommercialClick entity data model. */
class CommercialClick
{
    public mixed $action_type;
    public ?string $ad_receipt = null;
    public bool $billable;
    public mixed $billing_event_id = null;
    public string $billing_status;
    public ?string $business_id = null;
    public ?string $category = null;
    public ?string $city = null;
    public string $click_id;
    public mixed $commercial_status = null;
    public string $created_at;
    public ?string $directory_listing_id = null;
    public ?string $display_name = null;
    public ?string $fallback_interaction_id = null;
    public string $ledger_status;
    public ?string $listing_id = null;
    public ?array $metadata = null;
    public ?bool $migration_required = null;
    public ?string $page_path = null;
    public ?string $referrer = null;
    public mixed $source_type;
    public ?string $state = null;
    public mixed $status;
    public mixed $storage;
    public mixed $surface = null;
    public ?string $target_url = null;
}

/** Request payload for CommercialClick#create. */
class CommercialClickCreateData
{
    public mixed $action_type;
    public ?string $ad_receipt = null;
    public ?string $business_id = null;
    public ?string $category = null;
    public ?string $city = null;
    public mixed $commercial_status = null;
    public ?string $directory_listing_id = null;
    public ?string $display_name = null;
    public ?string $listing_id = null;
    public ?array $metadata = null;
    public ?string $page_path = null;
    public ?string $referrer = null;
    public mixed $source_type;
    public ?string $state = null;
    public mixed $surface = null;
    public ?string $target_url = null;
}

/** ContactRecorded entity data model. */
class ContactRecorded
{
    public string $business_id;
    public mixed $contact_recorded;
    public string $interaction_id;
    public mixed $ok;
    public string $policy;
    public mixed $review_upgraded;
    public mixed $status;
    public mixed $trust_weight;
    public bool $verified;
}

/** Request payload for ContactRecorded#create. */
class ContactRecordedCreateData
{
    public string $business_id;
}

/** Conversation entity data model. */
class Conversation
{
    public string $account_id;
    public ?string $conversation_id = null;
    public array $conversations;
    public float $count;
    public ?string $cursor = null;
    public ?float $limit = null;
    public array $pagination;
}

/** Request payload for Conversation#create. */
class ConversationCreateData
{
    public string $account_id;
    public ?string $conversation_id = null;
    public ?string $cursor = null;
    public ?float $limit = null;
}

/** ConversationClose entity data model. */
class ConversationClose
{
    public string $closed_at;
    public string $conversation_id;
    public ?string $id = null;
    public mixed $status;
}

/** Request payload for ConversationClose#create. */
class ConversationCloseCreateData
{
    public string $id;
}

/** ConversationReport entity data model. */
class ConversationReport
{
    public ?string $detail = null;
    public ?string $id = null;
    public mixed $reason;
    public mixed $status;
}

/** Request payload for ConversationReport#create. */
class ConversationReportCreateData
{
    public string $id;
    public ?string $detail = null;
    public mixed $reason;
}

/** ConversationWorkflow entity data model. */
class ConversationWorkflow
{
    public mixed $priority = null;
    public mixed $status = null;
}

/** Request payload for ConversationWorkflow#create. */
class ConversationWorkflowCreateData
{
    public string $message_id;
    public mixed $priority = null;
    public mixed $status = null;
}

/** CreateAgentApiKey entity data model. */
class CreateAgentApiKey
{
    public string $account_id;
    public ?array $allowed_actions = null;
    public ?array $allowed_business_ids = null;
    public string $created_by;
    public array $key;
    public ?string $label = null;
    public ?float $monthly_quota = null;
    public ?string $notes = null;
    public mixed $one_time_display;
    public ?float $rate_limit_per_minute = null;
    public string $raw_key;
    public mixed $status;
}

/** Request payload for CreateAgentApiKey#create. */
class CreateAgentApiKeyCreateData
{
    public string $account_id;
    public ?array $allowed_actions = null;
    public ?array $allowed_business_ids = null;
    public ?string $label = null;
    public ?float $monthly_quota = null;
    public ?string $notes = null;
    public ?float $rate_limit_per_minute = null;
}

/** Customer entity data model. */
class Customer
{
    public ?string $auth_provider = null;
    public mixed $avatar_url;
    public mixed $city;
    public mixed $created_at;
    public string $email;
    public string $full_name;
    public string $id;
    public mixed $phone;
    public ?string $search_category = null;
    public ?string $service_need = null;
    public mixed $state;
    public mixed $status;
    public mixed $updated_at;
}

/** Request payload for Customer#create. */
class CustomerCreateData
{
    public ?string $auth_provider = null;
    public mixed $avatar_url = null;
    public mixed $city = null;
    public ?string $full_name = null;
    public mixed $phone = null;
    public ?string $search_category = null;
    public ?string $service_need = null;
    public mixed $state = null;
}

/** CustomerAccount entity data model. */
class CustomerAccount
{
    public string $account_id;
    public string $account_role;
    public float $accuracy_meters;
    public bool $acknowledge_data_effects;
    public array $actions;
    public string $agent_key_id;
    public bool $agent_receives_coordinates;
    public bool $all_paused;
    public bool $app_attest_registered;
    public string $assertion;
    public string $attestation;
    public string $author_label;
    public string $author_type;
    public mixed $binding;
    public string $body;
    public mixed $business_id;
    public mixed $capture_source;
    public string $captured_at;
    public string $challenge;
    public string $challenge_id;
    public string $client_message_id;
    public bool $completed;
    public string $confirmation;
    public string $connection_id;
    public string $connection_kind;
    public mixed $continuation;
    public bool $coordinates_returned;
    public string $created_at;
    public string $credential_id;
    public bool $declined;
    public array $delivery_contract;
    public mixed $disabled_reason;
    public string $disclosure;
    public bool $enabled;
    public array $endpoint;
    public string $endpoint_id;
    public string $endpoint_url;
    public string $environment;
    public string $event_id;
    public array $event_types;
    public int $failure_count;
    public string $handoff_id;
    public bool $has_more;
    public string $id;
    public bool $idempotent_replay;
    public string $installation_id;
    public string $key_id;
    public mixed $last_delivery_at;
    public float $latitude;
    public mixed $location = null;
    public float $longitude;
    public bool $message_alerts_enabled;
    public array $messages;
    public string $mode;
    public ?string $name = null;
    public mixed $oauth_grant_id;
    public mixed $one_time_display;
    public string $platform;
    public string $policy;
    public string $purpose;
    public string $push_token;
    public string $reason;
    public string $registered_at;
    public string $reply;
    public string $request_mode;
    public string $requested_at;
    public array $results;
    public string $schema_version;
    public string $selected_at;
    public bool $signed_in;
    public string $signing_secret;
    public mixed $status;
    public string $updated_at;
    public string $url;
    public string $usable_until;
    public string $use_mode;
}

/** Request payload for CustomerAccount#create. */
class CustomerAccountCreateData
{
    public string $account_id;
    public string $account_role;
    public float $accuracy_meters;
    public bool $acknowledge_data_effects;
    public array $actions;
    public string $agent_key_id;
    public bool $agent_receives_coordinates;
    public bool $all_paused;
    public bool $app_attest_registered;
    public string $assertion;
    public string $attestation;
    public string $author_label;
    public string $author_type;
    public mixed $binding;
    public string $body;
    public mixed $business_id;
    public mixed $capture_source;
    public string $captured_at;
    public string $challenge;
    public string $challenge_id;
    public string $client_message_id;
    public bool $completed;
    public string $confirmation;
    public string $connection_id;
    public string $connection_kind;
    public mixed $continuation = null;
    public bool $coordinates_returned;
    public string $created_at;
    public string $credential_id;
    public bool $declined;
    public array $delivery_contract;
    public mixed $disabled_reason;
    public string $disclosure;
    public bool $enabled;
    public array $endpoint;
    public string $endpoint_id;
    public string $endpoint_url;
    public string $environment;
    public string $event_id;
    public array $event_types;
    public int $failure_count;
    public string $handoff_id;
    public bool $has_more;
    public string $id;
    public bool $idempotent_replay;
    public string $installation_id;
    public string $key_id;
    public mixed $last_delivery_at;
    public float $latitude;
    public mixed $location = null;
    public float $longitude;
    public bool $message_alerts_enabled;
    public array $messages;
    public string $mode;
    public ?string $name = null;
    public mixed $oauth_grant_id;
    public mixed $one_time_display;
    public string $platform;
    public string $policy;
    public string $purpose;
    public string $push_token;
    public ?string $reason = null;
    public string $registered_at;
    public string $reply;
    public string $request_mode;
    public string $requested_at;
    public array $results;
    public string $schema_version;
    public string $selected_at;
    public bool $signed_in;
    public string $signing_secret;
    public mixed $status;
    public string $updated_at;
    public string $url;
    public string $usable_until;
    public string $use_mode;
    public mixed $action = null;
    public mixed $consent_copy_version = null;
    public mixed $paused = null;
}

/** CustomerLocationProofRevocation entity data model. */
class CustomerLocationProofRevocation
{
    public float $accuracy_meters;
    public string $captured_at;
    public float $latitude;
    public float $longitude;
}

/** Request payload for CustomerLocationProofRevocation#create. */
class CustomerLocationProofRevocationCreateData
{
    public float $accuracy_meters;
    public string $captured_at;
    public float $latitude;
    public float $longitude;
}

/** Request payload for CustomerLocationProofRevocation#remove. */
class CustomerLocationProofRevocationRemoveMatch
{
    public string $location_proof_id;
}

/** DestinationAddressSuggestion entity data model. */
class DestinationAddressSuggestion
{
    public string $input;
    public array $suggestions;
}

/** Request payload for DestinationAddressSuggestion#create. */
class DestinationAddressSuggestionCreateData
{
    public string $input;
}

/** DestinationLocationProof entity data model. */
class DestinationLocationProof
{
    public string $address;
    public ?string $premise_proximity_confirmation_token = null;
}

/** Request payload for DestinationLocationProof#create. */
class DestinationLocationProofCreateData
{
    public string $address;
    public ?string $premise_proximity_confirmation_token = null;
}

/** DomainTrustCard entity data model. */
class DomainTrustCard
{
    public string $business_id;
    public string $domain;
    public mixed $schema_version;
    public array $trust_card;
    public string $trust_card_url;
    public mixed $trust_model_version;
    public mixed $verification_class;
    public string $verification_disclosure;
}

/** Request payload for DomainTrustCard#load. */
class DomainTrustCardLoadMatch
{
    public string $domain_key;
}

/** GeoContext entity data model. */
class GeoContext
{
}

/** Request payload for GeoContext#load. */
class GeoContextLoadMatch
{
}

/** Health entity data model. */
class Health
{
    public array $agent_phone_location_bridge;
    public string $build_sha;
    public array $business_review_access;
    public string $contract_version;
    public array $external_agent_webhooks;
    public bool $external_agent_webhooks_enabled;
    public array $ios_app_attest_anonymous_location;
    public array $location_choices;
    public array $location_handoff;
    public mixed $mobile_push;
    public mixed $ok;
    public string $service;
    public array $sponsored_ordering;
    public mixed $trust_model_version;
    public string $version;
}

/** Request payload for Health#load. */
class HealthLoadMatch
{
    public ?array $agent_phone_location_bridge = null;
    public ?string $build_sha = null;
    public ?array $business_review_access = null;
    public ?string $contract_version = null;
    public ?array $external_agent_webhooks = null;
    public ?bool $external_agent_webhooks_enabled = null;
    public ?array $ios_app_attest_anonymous_location = null;
    public ?array $location_choices = null;
    public ?array $location_handoff = null;
    public mixed $mobile_push = null;
    public mixed $ok = null;
    public ?string $service = null;
    public ?array $sponsored_ordering = null;
    public mixed $trust_model_version = null;
    public ?string $version = null;
}

/** JobApplication entity data model. */
class JobApplication
{
    public string $account_id;
    public ?bool $already_withdrawn = null;
    public array $application;
    public array $applications;
    public array $billing;
    public ?string $business_id = null;
    public float $count;
    public ?string $cover_note = null;
    public ?bool $free_to_apply = null;
    public ?string $id = null;
    public string $job_id;
    public float $limit;
    public float $offset;
    public array $resume;
    public ?string $retention_note = null;
    public string $status;
}

/** Request payload for JobApplication#create. */
class JobApplicationCreateData
{
    public ?string $account_id = null;
    public ?string $cover_note = null;
    public string $job_id;
    public ?float $limit = null;
    public ?float $offset = null;
    public array $resume;
    public ?string $status = null;
}

/** JobResumeSignedUrl entity data model. */
class JobResumeSignedUrl
{
    public string $application_id;
    public string $content_type;
    public float $expires_in_seconds;
    public string $resume_file_name;
    public string $signed_url;
    public float $size_bytes;
    public mixed $status;
}

/** Request payload for JobResumeSignedUrl#create. */
class JobResumeSignedUrlCreateData
{
    public string $job_application_id;
}

/** LocationHandoff entity data model. */
class LocationHandoff
{
}

/** Request payload for LocationHandoff#create. */
class LocationHandoffCreateData
{
}

/** Message entity data model. */
class Message
{
    public string $account_id;
    public string $client_message_id;
    public string $conversation_id;
    public string $created_at;
    public mixed $delivery = null;
    public bool $idempotent_replay;
    public string $interaction_id;
    public string $message;
    public mixed $moderation_required = null;
    public ?string $source_path = null;
    public mixed $status;
    public ?string $subject = null;
    public string $target_business_id;
    public ?string $target_business_name = null;
    public ?string $target_business_source = null;
}

/** Request payload for Message#create. */
class MessageCreateData
{
    public string $account_id;
    public string $client_message_id;
    public string $message;
    public ?string $source_path = null;
    public string $subject;
    public string $target_business_id;
    public string $target_business_name;
    public string $target_business_source;
}

/** ModeratedAction entity data model. */
class ModeratedAction
{
    public array $actions;
    public string $body;
    public ?string $client_request_id = null;
    public string $content_type;
    public mixed $continuation;
    public bool $coordinates_returned;
    public string $disclosure;
    public bool $enabled;
    public string $file_sha256;
    public bool $has_more;
    public ?bool $human_confirmation = null;
    public string $intent_id;
    public ?string $kind = null;
    public string $knowledgeVersion;
    public array $limits;
    public array $links;
    public array $location;
    public ?string $message = null;
    public array $messages;
    public string $mode;
    public string $name;
    public bool $needsHuman;
    public array $policy;
    public string $question;
    public string $reply;
    public string $result;
    public array $results;
    public string $scan_authority_id;
    public string $scanner;
    public string $scanner_version;
    public string $schema_version;
    public ?float $searcher_latitude = null;
    public ?float $searcher_longitude = null;
    public ?string $signature = null;
    public bool $signed_in;
    public float $size_bytes;
    public ?string $subject = null;
    public string $target_business_id;
    public string $topic;
}

/** Request payload for ModeratedAction#load. */
class ModeratedActionLoadMatch
{
    public ?array $actions = null;
    public ?string $body = null;
    public ?string $client_request_id = null;
    public ?string $content_type = null;
    public mixed $continuation = null;
    public ?bool $coordinates_returned = null;
    public ?string $disclosure = null;
    public ?bool $enabled = null;
    public ?string $file_sha256 = null;
    public ?bool $has_more = null;
    public ?bool $human_confirmation = null;
    public ?string $intent_id = null;
    public ?string $kind = null;
    public ?string $knowledgeVersion = null;
    public ?array $limits = null;
    public ?array $links = null;
    public ?array $location = null;
    public ?string $message = null;
    public ?array $messages = null;
    public ?string $mode = null;
    public ?string $name = null;
    public ?bool $needsHuman = null;
    public ?array $policy = null;
    public ?string $question = null;
    public ?string $reply = null;
    public ?string $result = null;
    public ?array $results = null;
    public ?string $scan_authority_id = null;
    public ?string $scanner = null;
    public ?string $scanner_version = null;
    public ?string $schema_version = null;
    public ?float $searcher_latitude = null;
    public ?float $searcher_longitude = null;
    public ?string $signature = null;
    public ?bool $signed_in = null;
    public ?float $size_bytes = null;
    public ?string $subject = null;
    public ?string $target_business_id = null;
    public ?string $topic = null;
}

/** Request payload for ModeratedAction#create. */
class ModeratedActionCreateData
{
    public ?string $client_request_id = null;
    public string $content_type;
    public mixed $continuation = null;
    public string $file_sha256;
    public ?bool $human_confirmation = null;
    public string $intent_id;
    public ?string $kind = null;
    public ?array $location = null;
    public ?string $message = null;
    public array $messages;
    public string $question;
    public string $result;
    public string $scan_authority_id;
    public string $scanner;
    public string $scanner_version;
    public ?float $searcher_latitude = null;
    public ?float $searcher_longitude = null;
    public ?string $signature = null;
    public float $size_bytes;
    public ?string $subject = null;
    public string $target_business_id;
}

/** OpenApiDocument entity data model. */
class OpenApiDocument
{
    public array $components;
    public array $info;
    public mixed $openapi;
    public array $paths;
    public array $servers;
    public array $tags;
}

/** Request payload for OpenApiDocument#list. */
class OpenApiDocumentListMatch
{
    public ?array $components = null;
    public ?array $info = null;
    public mixed $openapi = null;
    public ?array $paths = null;
    public ?array $servers = null;
    public ?array $tags = null;
}

/** Operation entity data model. */
class Operation
{
    public string $account_id;
    public string $action;
    public ?bool $active = null;
    public ?bool $active_or_good_standing = null;
    public ?string $ai_draft_id = null;
    public array $allowed_actions;
    public ?string $alt = null;
    public float $amount_cents;
    public ?float $amount_off_cents = null;
    public string $api_key;
    public ?string $applies_to_period = null;
    public mixed $applies_to_tier = null;
    public mixed $assigned_admin_user_id = null;
    public string $assigneeId;
    public string $assigneeLabel;
    public string $assigneeType;
    public ?string $assignee_id = null;
    public ?string $assignee_label = null;
    public ?string $assignee_type = null;
    public bool $assistant_enabled;
    public ?string $base_url = null;
    public string $body;
    public string $businessId;
    public string $businessName;
    public mixed $business_id;
    public array $business_ids;
    public ?string $campaign_id = null;
    public ?array $campaign_ids = null;
    public ?string $caption = null;
    public ?string $case_status = null;
    public array $catalog;
    public ?string $category = null;
    public string $category_alias;
    public ?float $chunk_size = null;
    public ?string $city = null;
    public string $code;
    public ?float $confidence = null;
    public array $config;
    public bool $confirm;
    public ?bool $confirm_admin = null;
    public string $confirmation;
    public string $connection_id;
    public string $connection_kind;
    public string $content_type;
    public string $context_id;
    public string $context_type;
    public mixed $createdAt;
    public string $created_at;
    public ?string $credential_expires_at = null;
    public string $credential_id;
    public ?string $custom_wire = null;
    public string $data_base64;
    public string $decision;
    public ?bool $dedupe_ack = null;
    public array $delivery_contract;
    public mixed $disabled_reason;
    public string $discount_type;
    public string $display_name;
    public string $disposition;
    public array $draft;
    public ?string $duration = null;
    public mixed $duration_in_months = null;
    public string $email;
    public bool $enabled;
    public array $endpoint;
    public string $endpoint_id;
    public string $endpoint_url;
    public string $ends_at;
    public mixed $environment_fallback;
    public string $event_id;
    public array $event_types;
    public array $expected_allowed_actions;
    public string $expected_key_id;
    public string $expected_updated_at;
    public float $expected_version;
    public ?string $expires_at = null;
    public string $fact_id;
    public array $facts;
    public int $failure_count;
    public array $fields;
    public string $file_name;
    public mixed $guideHandoffAnsweredAt = null;
    public mixed $guideHandoffAt = null;
    public mixed $guideHandoffDueAt = null;
    public ?float $height = null;
    public bool $historic_association_checked;
    public string $hold;
    public ?bool $holder_name_match = null;
    public array $hours;
    public string $id;
    public ?string $idempotency_key = null;
    public ?bool $identifier_match = null;
    public array $in_use;
    public ?string $instruction = null;
    public bool $invited;
    public mixed $key_check;
    public string $kind;
    public string $label;
    public mixed $lastMessageAt;
    public string $lastMessageAuthorType;
    public string $lastMessagePreview;
    public mixed $last_delivery_at;
    public mixed $last_error_code;
    public mixed $last_probe_at;
    public mixed $last_problem;
    public ?string $legal_name = null;
    public ?float $limit = null;
    public bool $make_active;
    public float $max_cents;
    public mixed $max_redemptions = null;
    public array $messages;
    public bool $messagesTruncated;
    public float $min_cents;
    public string $model;
    public string $model_id;
    public string $name;
    public ?string $note = null;
    public ?string $notes = null;
    public ?string $observed_at = null;
    public mixed $one_time_display;
    public string $outcome;
    public string $ownerEmail;
    public mixed $ownerLastReadAt;
    public string $ownerName;
    public string $ownerUserId;
    public ?string $owner_reason_code = null;
    public ?float $per_customer_limit = null;
    public ?float $percent_off = null;
    public ?string $phone = null;
    public string $policyVersion;
    public ?string $priority = null;
    public string $provider;
    public array $providers;
    public string $purpose_code;
    public int $rank_bid_cents;
    public string $reason;
    public ?string $reason_category = null;
    public ?string $reason_code = null;
    public ?string $reason_detail = null;
    public string $reference;
    public ?string $reject_reason = null;
    public ?string $related_case_id = null;
    public int $report_id;
    public array $report_ids;
    public float $reserve_cents;
    public string $resolution_note;
    public ?string $review_notes = null;
    public int $revision;
    public string $role;
    public array $rows;
    public array $run;
    public string $schema_version;
    public string $scope;
    public ?string $search = null;
    public array $settings;
    public string $signing_secret;
    public float $size_bytes;
    public mixed $sla_due_at = null;
    public string $source;
    public ?string $source_authority = null;
    public string $source_category_slug;
    public bool $source_scope_checked;
    public ?string $source_url = null;
    public mixed $starts_at = null;
    public ?string $state = null;
    public string $status;
    public string $storage;
    public ?string $street_address = null;
    public string $subject;
    public mixed $supportLastReadAt;
    public string $target_category;
    public array $taxonomy_category_aliases;
    public string $ticketNumber;
    public ?string $tier = null;
    public ?bool $typing = null;
    public ?string $until = null;
    public mixed $updatedAt;
    public string $updated_at;
    public string $url;
    public ?string $valid_until = null;
    public string $value;
    public string $verification_method;
    public mixed $verified_at;
    public ?array $verified_service_scope = null;
    public ?string $version = null;
    public ?string $website = null;
    public ?float $width = null;
    public ?float $window_hours = null;
    public string $workload;
    public ?string $zip = null;
}

/** Request payload for Operation#create. */
class OperationCreateData
{
    public string $coupon_id;
    public string $account_id;
    public ?string $action = null;
    public ?bool $active = null;
    public ?bool $active_or_good_standing = null;
    public ?string $ai_draft_id = null;
    public array $allowed_actions;
    public ?string $alt = null;
    public float $amount_cents;
    public ?float $amount_off_cents = null;
    public string $api_key;
    public ?string $applies_to_period = null;
    public mixed $applies_to_tier = null;
    public mixed $assigned_admin_user_id = null;
    public string $assigneeId;
    public string $assigneeLabel;
    public string $assigneeType;
    public ?string $assignee_id = null;
    public ?string $assignee_label = null;
    public ?string $assignee_type = null;
    public bool $assistant_enabled;
    public ?string $base_url = null;
    public string $body;
    public string $businessId;
    public string $businessName;
    public mixed $business_id = null;
    public array $business_ids;
    public ?string $campaign_id = null;
    public ?array $campaign_ids = null;
    public ?string $caption = null;
    public ?string $case_status = null;
    public array $catalog;
    public ?string $category = null;
    public ?string $category_alias = null;
    public ?float $chunk_size = null;
    public ?string $city = null;
    public string $code;
    public ?float $confidence = null;
    public array $config;
    public ?bool $confirm = null;
    public ?bool $confirm_admin = null;
    public string $confirmation;
    public string $connection_id;
    public string $connection_kind;
    public string $content_type;
    public string $context_id;
    public string $context_type;
    public mixed $createdAt;
    public string $created_at;
    public ?string $credential_expires_at = null;
    public string $credential_id;
    public ?string $custom_wire = null;
    public string $data_base64;
    public string $decision;
    public ?bool $dedupe_ack = null;
    public array $delivery_contract;
    public mixed $disabled_reason;
    public string $discount_type;
    public string $display_name;
    public string $disposition;
    public array $draft;
    public ?string $duration = null;
    public mixed $duration_in_months = null;
    public string $email;
    public bool $enabled;
    public array $endpoint;
    public string $endpoint_id;
    public string $endpoint_url;
    public string $ends_at;
    public mixed $environment_fallback;
    public string $event_id;
    public array $event_types;
    public array $expected_allowed_actions;
    public string $expected_key_id;
    public string $expected_updated_at;
    public float $expected_version;
    public ?string $expires_at = null;
    public string $fact_id;
    public array $facts;
    public int $failure_count;
    public array $fields;
    public string $file_name;
    public mixed $guideHandoffAnsweredAt = null;
    public mixed $guideHandoffAt = null;
    public mixed $guideHandoffDueAt = null;
    public ?float $height = null;
    public bool $historic_association_checked;
    public string $hold;
    public ?bool $holder_name_match = null;
    public array $hours;
    public string $id;
    public ?string $idempotency_key = null;
    public ?bool $identifier_match = null;
    public array $in_use;
    public ?string $instruction = null;
    public bool $invited;
    public mixed $key_check;
    public string $kind;
    public string $label;
    public mixed $lastMessageAt;
    public string $lastMessageAuthorType;
    public string $lastMessagePreview;
    public mixed $last_delivery_at;
    public mixed $last_error_code;
    public mixed $last_probe_at;
    public mixed $last_problem;
    public ?string $legal_name = null;
    public ?float $limit = null;
    public bool $make_active;
    public float $max_cents;
    public mixed $max_redemptions = null;
    public array $messages;
    public bool $messagesTruncated;
    public float $min_cents;
    public string $model;
    public string $model_id;
    public string $name;
    public ?string $note = null;
    public ?string $notes = null;
    public ?string $observed_at = null;
    public mixed $one_time_display;
    public string $outcome;
    public string $ownerEmail;
    public mixed $ownerLastReadAt;
    public string $ownerName;
    public string $ownerUserId;
    public ?string $owner_reason_code = null;
    public ?float $per_customer_limit = null;
    public ?float $percent_off = null;
    public ?string $phone = null;
    public string $policyVersion;
    public ?string $priority = null;
    public string $provider;
    public array $providers;
    public string $purpose_code;
    public int $rank_bid_cents;
    public ?string $reason = null;
    public ?string $reason_category = null;
    public ?string $reason_code = null;
    public ?string $reason_detail = null;
    public string $reference;
    public ?string $reject_reason = null;
    public ?string $related_case_id = null;
    public ?int $report_id = null;
    public array $report_ids;
    public float $reserve_cents;
    public string $resolution_note;
    public ?string $review_notes = null;
    public int $revision;
    public ?string $role = null;
    public array $rows;
    public array $run;
    public string $schema_version;
    public string $scope;
    public ?string $search = null;
    public array $settings;
    public string $signing_secret;
    public float $size_bytes;
    public mixed $sla_due_at = null;
    public ?string $source = null;
    public ?string $source_authority = null;
    public ?string $source_category_slug = null;
    public bool $source_scope_checked;
    public ?string $source_url = null;
    public mixed $starts_at = null;
    public ?string $state = null;
    public ?string $status = null;
    public string $storage;
    public ?string $street_address = null;
    public string $subject;
    public mixed $supportLastReadAt;
    public ?string $target_category = null;
    public array $taxonomy_category_aliases;
    public string $ticketNumber;
    public string $tier;
    public ?bool $typing = null;
    public ?string $until = null;
    public mixed $updatedAt;
    public string $updated_at;
    public string $url;
    public ?string $valid_until = null;
    public string $value;
    public string $verification_method;
    public mixed $verified_at;
    public ?array $verified_service_scope = null;
    public ?string $version = null;
    public ?string $website = null;
    public ?float $width = null;
    public ?float $window_hours = null;
    public string $workload;
    public ?string $zip = null;
}

/** Request payload for Operation#update. */
class OperationUpdateData
{
    public string $provider;
    public ?string $api_key = null;
    public ?string $base_url = null;
    public ?string $category_alias = null;
    public ?string $connection_id = null;
    public ?string $custom_wire = null;
    public ?bool $enabled = null;
    public ?bool $make_active = null;
    public ?float $max_cents = null;
    public ?float $min_cents = null;
    public ?string $model = null;
    public ?string $model_id = null;
    public ?string $reason = null;
    public ?float $reserve_cents = null;
}

/** Request payload for Operation#patch. */
class OperationPatchData
{
    public string $candidate_id;
    public mixed $assigned_admin_user_id = null;
    public ?string $case_status = null;
    public ?float $confidence = null;
    public ?float $expected_version = null;
    public ?string $notes = null;
    public ?string $priority = null;
    public ?string $reason_code = null;
    public ?string $review_notes = null;
    public mixed $sla_due_at = null;
    public ?string $status = null;
    public ?string $target_category = null;
}

/** Request payload for Operation#remove. */
class OperationRemoveMatch
{
    public string $access_context_id;
}

/** OwnerNotification entity data model. */
class OwnerNotification
{
    public string $businessId;
    public string $createdAt;
    public string $dedupeKey;
    public string $emailStatus;
    public mixed $eventType;
    public string $id;
    public mixed $readAt;
    public string $resourceId;
    public mixed $resourceKind;
    public string $resourceUrl;
    public string $summary;
    public string $webhookStatus;
}

/** Request payload for OwnerNotification#create. */
class OwnerNotificationCreateData
{
    public string $notification_id;
}

/** OwnerNotificationSetting entity data model. */
class OwnerNotificationSetting
{
    public string $businessId;
    public ?string $business_id = null;
    public string $createdAt;
    public bool $emailEnabled;
    public ?bool $email_enabled = null;
    public array $eventTypeSubscriptions;
    public ?array $event_types = null;
    public string $updatedAt;
    public bool $webhookEnabled;
    public ?bool $webhook_enabled = null;
}

/** Request payload for OwnerNotificationSetting#create. */
class OwnerNotificationSettingCreateData
{
    public ?string $business_id = null;
    public ?bool $email_enabled = null;
    public ?array $event_types = null;
    public ?bool $webhook_enabled = null;
}

/** OwnerWebhookEndpoint entity data model. */
class OwnerWebhookEndpoint
{
    public string $businessId;
    public string $createdAt;
    public bool $enabled;
    public array $eventTypeSubscriptions;
    public float $failureCount;
    public string $id;
    public mixed $lastDeliveryAt;
    public string $updatedAt;
    public string $url;
}

/** Request payload for OwnerWebhookEndpoint#create. */
class OwnerWebhookEndpointCreateData
{
    public string $webhook_id;
}

/** OwnerWebhookRegistration entity data model. */
class OwnerWebhookRegistration
{
    public ?string $business_id = null;
    public array $endpoint;
    public ?array $event_types = null;
    public mixed $one_time_display;
    public string $signing_secret;
    public mixed $status;
    public string $url;
}

/** Request payload for OwnerWebhookRegistration#create. */
class OwnerWebhookRegistrationCreateData
{
    public ?string $business_id = null;
    public ?array $event_types = null;
    public string $url;
}

/** Pricing entity data model. */
class Pricing
{
    public array $billing;
    public array $branch_add_ons;
    public mixed $currency;
    public string $generated_at;
    public string $neutrality;
    public array $plans;
    public array $promotions;
    public mixed $published_at;
    public array $radius_extension;
    public mixed $revision_id;
    public mixed $source;
    public mixed $trust_model_version;
}

/** Request payload for Pricing#list. */
class PricingListMatch
{
    public ?array $billing = null;
    public ?array $branch_add_ons = null;
    public mixed $currency = null;
    public ?string $generated_at = null;
    public ?string $neutrality = null;
    public ?array $plans = null;
    public ?array $promotions = null;
    public mixed $published_at = null;
    public ?array $radius_extension = null;
    public mixed $revision_id = null;
    public mixed $source = null;
    public mixed $trust_model_version = null;
}

/** PromoteVerifiedTransaction entity data model. */
class PromoteVerifiedTransaction
{
    public string $business_id;
    public string $evidence_id;
    public string $interaction_id;
    public mixed $ok;
    public bool $review_upgraded;
    public mixed $status;
    public mixed $trust_weight;
    public bool $verified;
}

/** Request payload for PromoteVerifiedTransaction#create. */
class PromoteVerifiedTransactionCreateData
{
    public string $business_id;
    public string $evidence_id;
}

/** PublicContent entity data model. */
class PublicContent
{
    public array $blocks;
    public string $generated_at;
    public mixed $source;
    public mixed $trust_model_version;
}

/** Request payload for PublicContent#load. */
class PublicContentLoadMatch
{
    public ?array $blocks = null;
    public ?string $generated_at = null;
    public mixed $source = null;
    public mixed $trust_model_version = null;
}

/** Recommend entity data model. */
class Recommend
{
    public bool $candidate_window_truncated;
    public string $commercial_influence;
    public ?int $display_count = null;
    public mixed $endpoint;
    public array $fallback_registry;
    public string $generated_at;
    public bool $has_more;
    public array $listed;
    public mixed $location_context;
    public mixed $ordering;
    public string $policy;
    public ?string $presentation_guidance = null;
    public array $query;
    public string $ranking_policy;
    public string $registry_count_basis;
    public mixed $registry_count_observed_at;
    public mixed $registry_name;
    public array $results;
    public int $returned_count;
    public array $reviewed_registry;
    public mixed $schema_version;
    public array $search_intent;
    public ?array $suggestions = null;
    public ?int $total_matches = null;
    public ?int $total_matches_basis = null;
    public int $total_registry_records;
    public mixed $trust_model_version;
    public array $verified;
    public ?int $visible_candidate_records = null;
}

/** Request payload for Recommend#list. */
class RecommendListMatch
{
    public ?string $allowed_action = null;
    public ?string $category = null;
    public ?string $city = null;
    public ?int $limit = null;
    public ?string $location_handoff_id = null;
    public ?string $location_proof_id = null;
    public ?string $location_selection = null;
    public ?string $q = null;
    public ?float $radius_mile = null;
    public ?string $saved_location_ref = null;
    public ?string $state = null;
    public ?string $zip = null;
}

/** Review entity data model. */
class Review
{
    public string $account_id;
    public bool $attestation_accepted;
    public ?bool $customer_confirmed = null;
    public string $message;
    public int $rating;
    public mixed $service_date = null;
    public string $subject;
    public string $target_business_id;
}

/** Request payload for Review#create. */
class ReviewCreateData
{
    public string $account_id;
    public bool $attestation_accepted;
    public ?bool $customer_confirmed = null;
    public string $message;
    public int $rating;
    public mixed $service_date = null;
    public string $subject;
    public string $target_business_id;
}

/** Revoke entity data model. */
class Revoke
{
    public string $account_id;
    public string $key_id;
    public string $revoked_by;
    public mixed $status;
}

/** Request payload for Revoke#create. */
class RevokeCreateData
{
    public string $agent_key_id;
}

/** SaveBusiness entity data model. */
class SaveBusiness
{
    public string $account_id;
    public string $business_id;
    public string $business_name;
    public string $business_source;
    public ?string $category = null;
    public ?string $city = null;
    public string $created_at;
    public ?string $notes = null;
    public string $saved_business_id;
    public ?string $state = null;
    public mixed $status;
}

/** Request payload for SaveBusiness#create. */
class SaveBusinessCreateData
{
    public string $account_id;
    public string $business_id;
    public string $business_name;
    public string $business_source;
    public ?string $category = null;
    public ?string $city = null;
    public ?string $notes = null;
    public ?string $state = null;
}

/** SavedBusiness entity data model. */
class SavedBusiness
{
    public string $account_id;
    public float $count;
    public ?float $limit = null;
    public array $saved_businesses;
}

/** Request payload for SavedBusiness#create. */
class SavedBusinessCreateData
{
    public string $account_id;
    public ?float $limit = null;
}

/** SavedLocation entity data model. */
class SavedLocation
{
    public bool $available;
    public mixed $coordinates_returned;
    public mixed $kind;
    public mixed $label;
    public ?string $location_proof_id = null;
    public mixed $reach_precision;
    public mixed $saved_location_ref;
    public mixed $updated_at;
    public ?string $zip = null;
}

/** Request payload for SavedLocation#update. */
class SavedLocationUpdateData
{
    public mixed $label = null;
    public ?string $location_proof_id = null;
    public ?string $zip = null;
}

/** Request payload for SavedLocation#remove. */
class SavedLocationRemoveMatch
{
    public ?bool $available = null;
    public mixed $coordinates_returned = null;
    public mixed $kind = null;
    public mixed $label = null;
    public ?string $location_proof_id = null;
    public mixed $reach_precision = null;
    public mixed $saved_location_ref = null;
    public mixed $updated_at = null;
    public ?string $zip = null;
}

/** Search entity data model. */
class Search
{
    public bool $candidate_window_truncated;
    public string $commercial_influence;
    public ?int $display_count = null;
    public string $generated_at;
    public bool $has_more;
    public mixed $location_context;
    public mixed $next_cursor;
    public int $page_limit;
    public string $policy;
    public ?string $presentation_guidance = null;
    public array $query;
    public string $ranking_policy;
    public string $registry_count_basis;
    public mixed $registry_count_observed_at;
    public mixed $registry_name;
    public array $results;
    public int $returned_count;
    public mixed $schema_version;
    public array $search_intent;
    public ?array $suggestions = null;
    public ?int $total_matches = null;
    public ?int $total_matches_basis = null;
    public int $total_registry_records;
    public mixed $trust_model_version;
    public ?int $visible_candidate_records = null;
}

/** Request payload for Search#list. */
class SearchListMatch
{
    public ?string $category = null;
    public ?string $city = null;
    public ?bool $consumer_reach = null;
    public ?string $cursor = null;
    public ?bool $include_directory_listing = null;
    public ?string $intent = null;
    public ?int $limit = null;
    public ?string $location_handoff_id = null;
    public ?string $location_proof_id = null;
    public ?string $location_selection = null;
    public ?bool $paid_only = null;
    public ?string $q = null;
    public ?float $radius_mile = null;
    public ?string $saved_location_ref = null;
    public ?string $search_intent = null;
    public ?string $state = null;
    public ?string $zip = null;
}

/** Suggest entity data model. */
class Suggest
{
    public array $categories;
    public array $names;
    public string $query;
    public mixed $schema_version;
}

/** Request payload for Suggest#list. */
class SuggestListMatch
{
    public ?string $q = null;
}

/** SupportInternalNote entity data model. */
class SupportInternalNote
{
    public string $authorLabel;
    public string $body;
    public mixed $createdAt;
    public string $id;
}

/** Request payload for SupportInternalNote#create. */
class SupportInternalNoteCreateData
{
    public string $id;
    public string $body;
}

/** SupportWorkflow entity data model. */
class SupportWorkflow
{
    public mixed $category = null;
    public ?string $id = null;
    public mixed $priority = null;
    public mixed $waiting_on = null;
}

/** Request payload for SupportWorkflow#create. */
class SupportWorkflowCreateData
{
    public string $id;
    public mixed $category = null;
    public mixed $priority = null;
    public mixed $waiting_on = null;
}

/** TaxonomySuggestion entity data model. */
class TaxonomySuggestion
{
    public string $alias;
    public array $path_titles;
    public string $title;
}

/** Request payload for TaxonomySuggestion#list. */
class TaxonomySuggestionListMatch
{
    public ?float $limit = null;
    public ?string $q = null;
}

/** TrustCard entity data model. */
class TrustCard
{
    public string $agency;
    public string $collected_at;
    public string $disclosure;
    public string $fact_id;
    public string $matched_on;
    public ?string $reason = null;
    public string $record_kind;
    public mixed $record_number;
    public string $record_scope;
    public string $record_type;
    public mixed $recorded_expiry;
    public string $result;
    public string $source_label;
    public string $source_url;
    public string $state;
    public string $status_on_record;
}

/** Request payload for TrustCard#load. */
class TrustCardLoadMatch
{
    public string $schema_name;
}

/** Request payload for TrustCard#list. */
class TrustCardListMatch
{
    public string $business_id;
}

/** Request payload for TrustCard#create. */
class TrustCardCreateData
{
    public string $business_id;
    public string $license_record_id;
    public ?string $reason = null;
}

/** UnsaveBusiness entity data model. */
class UnsaveBusiness
{
    public string $account_id;
    public string $business_id;
    public bool $removed;
    public mixed $status;
}

/** Request payload for UnsaveBusiness#create. */
class UnsaveBusinessCreateData
{
    public string $account_id;
    public string $business_id;
}

/** UpdateAgentBillingAccount entity data model. */
class UpdateAgentBillingAccount
{
    public string $account_id;
    public array $billing_account;
    public ?string $billing_status = null;
    public ?float $included_actions = null;
    public ?float $monthly_fee_cents = null;
    public ?float $overage_cents = null;
    public ?string $plan = null;
    public mixed $status;
    public string $updated_by;
}

/** Request payload for UpdateAgentBillingAccount#create. */
class UpdateAgentBillingAccountCreateData
{
    public string $account_id;
    public ?string $billing_status = null;
    public ?float $included_actions = null;
    public ?float $monthly_fee_cents = null;
    public ?float $overage_cents = null;
    public ?string $plan = null;
}

/** WithdrawJobApplication entity data model. */
class WithdrawJobApplication
{
    public string $account_id;
    public bool $already_withdrawn;
    public array $application;
    public string $application_id;
    public mixed $status;
}

/** Request payload for WithdrawJobApplication#create. */
class WithdrawJobApplicationCreateData
{
    public string $account_id;
    public string $application_id;
}

