# LoppeeBusiness Ruby SDK



The Ruby SDK for the LoppeeBusiness API — an entity-oriented client using idiomatic Ruby conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.AgentAccess` — with named operations (`list`/`load`/`create`/`update`/`patch`/`remove`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to RubyGems. Install it from the
GitHub release tag (`rb/vX.Y.Z`, see [Tags](https://github.com/voxgig-sdk/loppee-business-sdk/tags)), or
from a clone:

```bash
git clone https://github.com/voxgig-sdk/loppee-business-sdk
```

Then add it to your `Gemfile` by path, and run `bundle install`:

```ruby
gem "voxgig-sdk-loppee-business-sdk", path: "./loppee-business-sdk/rb"
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record. The client sends the API key in the `X-LOPPEE-API-Key` header.

### 1. Create a client

```ruby
require_relative "LoppeeBusiness_sdk"

client = LoppeeBusinessSDK.new({
  "apikey" => ENV["LOPPEE_BUSINESS_APIKEY"],
})
```

### 4. Create, update, and remove

```ruby
# create returns the ENTITY — call data_get for the created AgentAccess record.
created = client.AgentAccess.create({ "agent_name" => "example_agent_name", "developer_email" => "example_developer_email", "organization_name" => "example_organization_name" })

```


## Error handling

Entity operations raise on failure, so rescue them:

```ruby
begin
  agentcapability = client.AgentCapability.load()
rescue => err
  warn "load failed: #{err}"
end
```

`direct` does **not** raise — it returns the result hash. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example_id" },
})

warn "request failed: #{result["err"] || "HTTP #{result["status"]}"}" unless result["ok"]
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})

if result["ok"]
  puts result["status"]  # 200
  puts result["data"]    # response body
else
  # On an HTTP error status there is no err (only a transport failure sets
  # it), so fall back to the status code.
  warn(result["err"] || "HTTP #{result["status"]}")
end
```

### Prepare a request without sending it

```ruby
begin
  fetchdef = client.prepare({
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => { "id" => "example" },
  })
  puts fetchdef["url"]
  puts fetchdef["method"]
  puts fetchdef["headers"]
rescue => err
  warn "prepare failed: #{err}"
end
```

### Use test mode

Create a mock client for unit testing — no server required:

```ruby
client = LoppeeBusinessSDK.test

# Entity ops return the ENTITY (raises on error);
# data_get reads its mock record.
agentcapability = client.AgentCapability.load()
puts agentcapability.data_get
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```ruby
mock_fetch = ->(url, init) {
  return {
    "status" => 200,
    "statusText" => "OK",
    "headers" => {},
    "json" => ->() { { "id" => "mock01" } },
  }, nil
}

client = LoppeeBusinessSDK.new({
  "base" => "http://localhost:8080",
  "system" => {
    "fetch" => mock_fetch,
  },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
LOPPEE_BUSINESS_TEST_LIVE=TRUE
LOPPEE_BUSINESS_APIKEY=<your-key>
```

Then run:

```bash
cd rb && ruby -Itest -e "Dir['test/*_test.rb'].each { |f| require_relative f }"
```


## Reference

### LoppeeBusinessSDK

```ruby
require_relative "LoppeeBusiness_sdk"
client = LoppeeBusinessSDK.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `String` | API key for authentication. |
| `base` | `String` | Base URL of the API server. |
| `prefix` | `String` | URL path prefix prepended to all requests. |
| `suffix` | `String` | URL path suffix appended to all requests. |
| `feature` | `Hash` | Feature activation flags. |
| `extend` | `Hash` | Additional Feature instances to load. |
| `system` | `Hash` | System overrides (e.g. custom `fetch` lambda). |

### test

```ruby
client = LoppeeBusinessSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### LoppeeBusinessSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> Hash` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> Hash` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> Hash` | Build and send an HTTP request. Returns a result hash (`result["ok"]`); does not raise. |
| `AgentAccess` | `(data) -> AgentAccessEntity` | Create an AgentAccess entity instance. |
| `AgentCapability` | `(data) -> AgentCapabilityEntity` | Create an AgentCapability entity instance. |
| `AgentConnectionTest` | `(data) -> AgentConnectionTestEntity` | Create an AgentConnectionTest entity instance. |
| `AgentIntegration` | `(data) -> AgentIntegrationEntity` | Create an AgentIntegration entity instance. |
| `AgentMonitoring` | `(data) -> AgentMonitoringEntity` | Create an AgentMonitoring entity instance. |
| `AgentOpenapi` | `(data) -> AgentOpenapiEntity` | Create an AgentOpenapi entity instance. |
| `AgentPolicy` | `(data) -> AgentPolicyEntity` | Create an AgentPolicy entity instance. |
| `AnonymousLocationProofRevocation` | `(data) -> AnonymousLocationProofRevocationEntity` | Create an AnonymousLocationProofRevocation entity instance. |
| `BusinessApplication` | `(data) -> BusinessApplicationEntity` | Create a BusinessApplication entity instance. |
| `BusinessClaim` | `(data) -> BusinessClaimEntity` | Create a BusinessClaim entity instance. |
| `BusinessDeal` | `(data) -> BusinessDealEntity` | Create a BusinessDeal entity instance. |
| `BusinessIndex` | `(data) -> BusinessIndexEntity` | Create a BusinessIndex entity instance. |
| `BusinessOwner` | `(data) -> BusinessOwnerEntity` | Create a BusinessOwner entity instance. |
| `BusinessReview` | `(data) -> BusinessReviewEntity` | Create a BusinessReview entity instance. |
| `ChatAttachment` | `(data) -> ChatAttachmentEntity` | Create a ChatAttachment entity instance. |
| `ChatAttachmentUrl` | `(data) -> ChatAttachmentUrlEntity` | Create a ChatAttachmentUrl entity instance. |
| `ClaimVerificationSend` | `(data) -> ClaimVerificationSendEntity` | Create a ClaimVerificationSend entity instance. |
| `ClaimVerificationVerify` | `(data) -> ClaimVerificationVerifyEntity` | Create a ClaimVerificationVerify entity instance. |
| `CommercialClick` | `(data) -> CommercialClickEntity` | Create a CommercialClick entity instance. |
| `ContactRecorded` | `(data) -> ContactRecordedEntity` | Create a ContactRecorded entity instance. |
| `Conversation` | `(data) -> ConversationEntity` | Create a Conversation entity instance. |
| `ConversationClose` | `(data) -> ConversationCloseEntity` | Create a ConversationClose entity instance. |
| `ConversationReport` | `(data) -> ConversationReportEntity` | Create a ConversationReport entity instance. |
| `ConversationWorkflow` | `(data) -> ConversationWorkflowEntity` | Create a ConversationWorkflow entity instance. |
| `CreateAgentApiKey` | `(data) -> CreateAgentApiKeyEntity` | Create a CreateAgentApiKey entity instance. |
| `Customer` | `(data) -> CustomerEntity` | Create a Customer entity instance. |
| `CustomerAccount` | `(data) -> CustomerAccountEntity` | Create a CustomerAccount entity instance. |
| `CustomerLocationProofRevocation` | `(data) -> CustomerLocationProofRevocationEntity` | Create a CustomerLocationProofRevocation entity instance. |
| `DestinationAddressSuggestion` | `(data) -> DestinationAddressSuggestionEntity` | Create a DestinationAddressSuggestion entity instance. |
| `DestinationLocationProof` | `(data) -> DestinationLocationProofEntity` | Create a DestinationLocationProof entity instance. |
| `DomainTrustCard` | `(data) -> DomainTrustCardEntity` | Create a DomainTrustCard entity instance. |
| `GeoContext` | `(data) -> GeoContextEntity` | Create a GeoContext entity instance. |
| `Health` | `(data) -> HealthEntity` | Create a Health entity instance. |
| `JobApplication` | `(data) -> JobApplicationEntity` | Create a JobApplication entity instance. |
| `JobResumeSignedUrl` | `(data) -> JobResumeSignedUrlEntity` | Create a JobResumeSignedUrl entity instance. |
| `LocationHandoff` | `(data) -> LocationHandoffEntity` | Create a LocationHandoff entity instance. |
| `Message` | `(data) -> MessageEntity` | Create a Message entity instance. |
| `ModeratedAction` | `(data) -> ModeratedActionEntity` | Create a ModeratedAction entity instance. |
| `OpenApiDocument` | `(data) -> OpenApiDocumentEntity` | Create an OpenApiDocument entity instance. |
| `Operation` | `(data) -> OperationEntity` | Create an Operation entity instance. |
| `OwnerNotification` | `(data) -> OwnerNotificationEntity` | Create an OwnerNotification entity instance. |
| `OwnerNotificationSetting` | `(data) -> OwnerNotificationSettingEntity` | Create an OwnerNotificationSetting entity instance. |
| `OwnerWebhookEndpoint` | `(data) -> OwnerWebhookEndpointEntity` | Create an OwnerWebhookEndpoint entity instance. |
| `OwnerWebhookRegistration` | `(data) -> OwnerWebhookRegistrationEntity` | Create an OwnerWebhookRegistration entity instance. |
| `Pricing` | `(data) -> PricingEntity` | Create a Pricing entity instance. |
| `PromoteVerifiedTransaction` | `(data) -> PromoteVerifiedTransactionEntity` | Create a PromoteVerifiedTransaction entity instance. |
| `PublicContent` | `(data) -> PublicContentEntity` | Create a PublicContent entity instance. |
| `Recommend` | `(data) -> RecommendEntity` | Create a Recommend entity instance. |
| `Review` | `(data) -> ReviewEntity` | Create a Review entity instance. |
| `Revoke` | `(data) -> RevokeEntity` | Create a Revoke entity instance. |
| `SaveBusiness` | `(data) -> SaveBusinessEntity` | Create a SaveBusiness entity instance. |
| `SavedBusiness` | `(data) -> SavedBusinessEntity` | Create a SavedBusiness entity instance. |
| `SavedLocation` | `(data) -> SavedLocationEntity` | Create a SavedLocation entity instance. |
| `Search` | `(data) -> SearchEntity` | Create a Search entity instance. |
| `Suggest` | `(data) -> SuggestEntity` | Create a Suggest entity instance. |
| `SupportInternalNote` | `(data) -> SupportInternalNoteEntity` | Create a SupportInternalNote entity instance. |
| `SupportWorkflow` | `(data) -> SupportWorkflowEntity` | Create a SupportWorkflow entity instance. |
| `TaxonomySuggestion` | `(data) -> TaxonomySuggestionEntity` | Create a TaxonomySuggestion entity instance. |
| `TrustCard` | `(data) -> TrustCardEntity` | Create a TrustCard entity instance. |
| `UnsaveBusiness` | `(data) -> UnsaveBusinessEntity` | Create an UnsaveBusiness entity instance. |
| `UpdateAgentBillingAccount` | `(data) -> UpdateAgentBillingAccountEntity` | Create an UpdateAgentBillingAccount entity instance. |
| `WithdrawJobApplication` | `(data) -> WithdrawJobApplicationEntity` | Create a WithdrawJobApplication entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria, and return it. Raises on error. |
| `list` | `(reqmatch = nil, ctrl) -> Array` | List entities matching the criteria (call with no argument to list all), one per record. Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity, and return it. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity, and return it. Raises on error. |
| `patch` | `(reqdata, ctrl) -> any` | Change part of an existing entity, and return it. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity, and return it marked as deleted. Raises on error. |
| `data_get` | `() -> Hash` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> Hash` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> String` | Return the entity name. |

### Result shape

Entity operations return the entity, and `list` an `Array` of entities, one
per record; an entity's `data_get` reads its record. On failure they raise a
`LoppeeBusinessError` (a `StandardError` subclass), so wrap calls in
`begin`/`rescue` where you need to handle errors.

The `direct` escape hatch is the exception: it never raises and instead
returns a result `Hash` with these keys:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `Boolean` | `true` if the HTTP status is 2xx. |
| `status` | `Integer` | HTTP status code. |
| `headers` | `Hash` | Response headers. |
| `data` | `any` | Parsed JSON response body. |
| `err` | `Error` | Present when `ok` is `false`. |

### Entities

#### AgentAccess

| Field | Description |
| --- | --- |
| `agent_name` |  |
| `agent_type` |  |
| `callback_url` |  |
| `compliance_notes` |  |
| `created_at` |  |
| `data_needs` |  |
| `developer_email` |  |
| `operating_states` |  |
| `organization_name` |  |
| `request_id` |  |
| `request_status` |  |
| `requested_actions` |  |
| `safety_contact` |  |
| `status` |  |
| `target_categories` |  |
| `use_case` |  |
| `website` |  |

Operations: Create.

API path: `/v1/actions/agent-access-request`

#### AgentCapability

| Field | Description |
| --- | --- |
| `agent_phone_location_bridge` |  |
| `agent_rules` |  |
| `discovery` |  |
| `external_agent_access` |  |
| `external_agent_webhooks` |  |
| `local_discovery_location_policy` |  |
| `location_choices` |  |
| `registry_name` |  |
| `schema_version` |  |
| `trust_model_version` |  |

Operations: Load.

API path: `/v1/agent-capabilities.json`

#### AgentConnectionTest

| Field | Description |
| --- | --- |
| `key` | Optional UI fallback. |

Operations: Create.

API path: `/v1/actions/agent-connection-test`

#### AgentIntegration

| Field | Description |
| --- | --- |
| `auth_model` |  |
| `commercial_influence` |  |
| `developer_docs_url` |  |
| `exposure_tiers` |  |
| `external_agent_access` |  |
| `generated_at` |  |
| `http_api` |  |
| `legal` |  |
| `mcp` |  |
| `mcp_client_example_url` |  |
| `monitoring_url` |  |
| `openapi_url` |  |
| `openapi_v1_url` |  |
| `operational_rules` |  |
| `owner_agent_notifications` |  |
| `package_url` |  |
| `public_base_url` |  |
| `rate_limits` |  |
| `registry_name` |  |
| `schema_version` |  |
| `trust_card_contract` |  |
| `trust_doctrine` |  |

Operations: List.

API path: `/v1/agent-integration.json`

#### AgentMonitoring

| Field | Description |
| --- | --- |
| `build_sha` |  |
| `contract_version` |  |
| `generated_at` |  |
| `health_url` |  |
| `integration_package_url` |  |
| `mcp_url` |  |
| `metrics` |  |
| `openapi_url` |  |
| `rate_limits` |  |
| `registry_name` |  |
| `schema_version` |  |
| `service` |  |
| `uptime_seconds` |  |
| `version` |  |

Operations: Load.

API path: `/v1/agent-monitoring.json`

#### AgentOpenapi

| Field | Description |
| --- | --- |
| `components` |  |
| `info` |  |
| `openapi` |  |
| `paths` |  |
| `servers` |  |
| `tags` |  |

Operations: List.

API path: `/v1/agent-openapi.json`

#### AgentPolicy

| Field | Description |
| --- | --- |
| `external_agent_access` |  |
| `external_agent_webhooks` |  |
| `local_discovery_location_policy` |  |
| `location_handoff_flow` |  |
| `payment` |  |
| `publication` |  |
| `schema_version` |  |
| `trust_model_version` |  |
| `verification` |  |

Operations: Load.

API path: `/v1/agent-policy.json`

#### AnonymousLocationProofRevocation

| Field | Description |
| --- | --- |
| `accuracy_meters` |  |
| `captured_at` |  |
| `latitude` |  |
| `longitude` |  |

Operations: Create, Remove.

API path: `/v1/location-proofs`

#### BusinessApplication

| Field | Description |
| --- | --- |
| `application` |  |
| `application_id` |  |
| `business_id` |  |
| `claim_id` |  |
| `created_at` |  |
| `existing_business` |  |
| `files` |  |
| `listing_id` |  |
| `pipeline_status` |  |
| `status` |  |
| `trust_model_version` |  |
| `uploaded_files` |  |

Operations: Create.

API path: `/v1/actions/business-application`

#### BusinessClaim

| Field | Description |
| --- | --- |
| `business_id` |  |
| `category` |  |
| `city` |  |
| `claim_id` |  |
| `claim_status` |  |
| `claimant_email` | Legacy field; authenticated owner identity wins. |
| `claimant_name` | Legacy field; authenticated owner identity wins. |
| `claimant_relationship` |  |
| `created_at` |  |
| `directory_listing_id` |  |
| `display_name` |  |
| `listing_id` |  |
| `notes` |  |
| `phone` |  |
| `source` |  |
| `source_type` |  |
| `source_url` |  |
| `state` |  |
| `status` |  |
| `verification` |  |
| `website` |  |

Operations: Create.

API path: `/v1/actions/business-claim`

#### BusinessDeal

| Field | Description |
| --- | --- |
| `createdAt` |  |
| `description` |  |
| `discountLabel` |  |
| `endsAt` |  |
| `id` |  |
| `promoCode` |  |
| `startsAt` |  |
| `terms` |  |
| `title` |  |

Operations: List.

API path: `/v1/businesses/{business_id}/deals.json`

#### BusinessIndex

| Field | Description |
| --- | --- |
| `brand_assets` |  |
| `business_id` |  |
| `category` |  |
| `city` |  |
| `display_name` |  |
| `domain` |  |
| `insurance` |  |
| `phone` |  |
| `public_profile_url` |  |
| `review_reputation` |  |
| `state` |  |
| `street_address` | Owner-published street address where authorized. |
| `trust_card_url` |  |
| `trust_model_version` |  |
| `verification_class` |  |
| `verification_disclosure` |  |
| `website` |  |
| `zip` | Owner-published postal code where authorized. |

Operations: List.

API path: `/v1/businesses/index.json`

#### BusinessOwner

| Field | Description |
| --- | --- |
| `account_id` |  |
| `account_role` |  |
| `acknowledge_data_effects` |  |
| `actions` |  |
| `allowed_actions` |  |
| `amount_cents` | Within the top-up limits (default $25 to $5,000). |
| `applicant_location_requirements` |  |
| `apply_url` |  |
| `asset_id` |  |
| `assigneeId` |  |
| `assigneeLabel` |  |
| `assigneeType` |  |
| `attempt_id` |  |
| `benefits` |  |
| `body` |  |
| `businessId` |  |
| `businessName` |  |
| `business_id` |  |
| `campaign` |  |
| `campaign_id` |  |
| `carrier_name` |  |
| `category` |  |
| `category_alias` |  |
| `category_aliases` |  |
| `change` |  |
| `city` |  |
| `client_message_id` |  |
| `code` |  |
| `compensation_text` |  |
| `confirm` |  |
| `confirmation` |  |
| `connection_kind` |  |
| `consent_sha256` | SHA-256 of the acceptance text shown (from payment-authorizations). |
| `contact_email` |  |
| `content_type` |  |
| `country` |  |
| `coupon_code` |  |
| `createdAt` |  |
| `created_at` |  |
| `credential_id` |  |
| `credential_identifier` |  |
| `data_base64` |  |
| `delivery_contract` |  |
| `description` |  |
| `direct_apply` |  |
| `disabled_reason` |  |
| `discount_label` |  |
| `display_name` |  |
| `employment_type` |  |
| `enabled` |  |
| `endpoint` |  |
| `endpoint_id` |  |
| `endpoint_url` |  |
| `ends_at` |  |
| `event_id` |  |
| `event_types` |  |
| `evidence_observed_at` |  |
| `expected_updated_at` |  |
| `experience_level` |  |
| `expires_at` |  |
| `factor_id` |  |
| `failure_count` |  |
| `file_name` |  |
| `file_sha256` |  |
| `full_name` |  |
| `guideHandoffAnsweredAt` |  |
| `guideHandoffAt` |  |
| `guideHandoffDueAt` |  |
| `hours` |  |
| `id` |  |
| `idempotency_key` |  |
| `installation_id` |  |
| `issuer` |  |
| `jurisdiction` |  |
| `kind` |  |
| `label` |  |
| `lastMessageAt` |  |
| `lastMessageAuthorType` |  |
| `lastMessagePreview` |  |
| `last_delivery_at` |  |
| `launch` |  |
| `license_number` |  |
| `messages` |  |
| `messagesTruncated` |  |
| `monthly_cap_cents` |  |
| `name` |  |
| `note` |  |
| `one_time_display` |  |
| `ownerEmail` |  |
| `ownerLastReadAt` |  |
| `ownerName` |  |
| `ownerUserId` |  |
| `period` |  |
| `phone` |  |
| `platform` |  |
| `policy_number` |  |
| `postal_code` |  |
| `promo_code` |  |
| `push_token` |  |
| `radius_miles` |  |
| `reason` |  |
| `reason_category` |  |
| `reason_detail` |  |
| `registered_at` |  |
| `request_id` | Client id of this confirmation (8-100 characters); reuse it only to retry the same confirmation. |
| `requested_at` |  |
| `salary_currency` |  |
| `salary_max` |  |
| `salary_min` |  |
| `salary_period` |  |
| `save_card` |  |
| `save_card_consent_sha256` | Only with save_card true: SHA-256 of the save-card consent text shown. |
| `schedule` |  |
| `service_areas` |  |
| `signing_secret` |  |
| `size_bytes` |  |
| `skills` |  |
| `source_url` |  |
| `starts_at` |  |
| `state` |  |
| `stated_expires_at` |  |
| `status` |  |
| `street_address` |  |
| `subject` |  |
| `submitted_identifier` |  |
| `supportLastReadAt` |  |
| `terms` |  |
| `terms_version` | Must be the current Advertiser Terms version. |
| `threshold_cents` |  |
| `ticketNumber` |  |
| `tier` |  |
| `title` |  |
| `total_job_openings` |  |
| `typing` |  |
| `updatedAt` |  |
| `updated_at` |  |
| `url` | Public HTTPS receiver operated by the connecting principal or its agent runtime. |
| `website` |  |
| `workplace_type` |  |
| `zip` |  |

Operations: Create, Update.

API path: `/v1/owner/agents/{agent_id}/disconnect`

#### BusinessReview

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Load.

API path: `/v1/businesses/{business_id}/reviews.json`

#### ChatAttachment

| Field | Description |
| --- | --- |
| `byteSize` |  |
| `content_type` |  |
| `data_base64` |  |
| `fileName` |  |
| `file_name` |  |
| `id` |  |
| `mediaType` |  |
| `size_bytes` |  |

Operations: Create.

API path: `/v1/account/conversations/{conversation_id}/attachments`

#### ChatAttachmentUrl

| Field | Description |
| --- | --- |
| `byte_size` |  |
| `expires_in_seconds` |  |
| `file_name` |  |
| `id` |  |
| `media_type` |  |
| `signed_url` |  |

Operations: Create.

API path: `/v1/account/conversations/{conversation_id}/attachments/{attachment_id}/url`

#### ClaimVerificationSend

| Field | Description |
| --- | --- |
| `challenge_id` | Opaque v3 SMS or owner-email challenge UUID. |
| `channel` |  |
| `claim_id` |  |
| `destination_hint` |  |
| `expires_in_seconds` |  |
| `provider_status` | V3 provider request state. |
| `recipient_delivery_confirmed` | V3 currently has no final-delivery provider event for this receipt. |
| `request_id` | Caller-generated idempotency UUID. |
| `status` |  |

Operations: Create.

API path: `/v1/actions/claim-verification/send`

#### ClaimVerificationVerify

| Field | Description |
| --- | --- |
| `business_id` |  |
| `challenge_id` | Exact challenge UUID returned by the v3 SMS or owner-email send. |
| `channel` |  |
| `claim_id` |  |
| `code` |  |
| `method` |  |
| `publication` |  |
| `status` |  |
| `transfer_review_required` |  |
| `trust_model_version` |  |

Operations: Create.

API path: `/v1/actions/claim-verification/verify`

#### CommercialClick

| Field | Description |
| --- | --- |
| `action_type` |  |
| `ad_receipt` | Opaque server-signed receipt of a served Sponsored ad, sent back unchanged with a profile, website or call tap. |
| `billable` |  |
| `billing_event_id` |  |
| `billing_status` |  |
| `business_id` |  |
| `category` |  |
| `city` |  |
| `click_id` |  |
| `commercial_status` |  |
| `created_at` |  |
| `directory_listing_id` | Deprecated alias of listing_id. |
| `display_name` |  |
| `fallback_interaction_id` |  |
| `ledger_status` |  |
| `listing_id` |  |
| `metadata` |  |
| `migration_required` |  |
| `page_path` |  |
| `referrer` |  |
| `source_type` |  |
| `state` |  |
| `status` |  |
| `storage` |  |
| `surface` | Where the Sponsored ad was shown (with ad_receipt). |
| `target_url` |  |

Operations: Create.

API path: `/v1/actions/commercial-click`

#### ContactRecorded

| Field | Description |
| --- | --- |
| `business_id` |  |
| `contact_recorded` |  |
| `interaction_id` |  |
| `ok` |  |
| `policy` |  |
| `review_upgraded` |  |
| `status` |  |
| `trust_weight` |  |
| `verified` |  |

Operations: Create.

API path: `/v1/actions/confirm-interaction`

#### Conversation

| Field | Description |
| --- | --- |
| `account_id` |  |
| `conversation_id` | Exact conversation referenced by a webhook; returns zero or one scoped thread. |
| `conversations` |  |
| `count` |  |
| `cursor` | Opaque pagination cursor returned by the previous page. |
| `limit` |  |
| `pagination` |  |

Operations: Create.

API path: `/v1/actions/list-my-conversations`

#### ConversationClose

| Field | Description |
| --- | --- |
| `closed_at` |  |
| `conversation_id` |  |
| `id` |  |
| `status` |  |

Operations: Create.

API path: `/v1/account/conversations/{conversation_id}/close`

#### ConversationReport

| Field | Description |
| --- | --- |
| `detail` |  |
| `id` |  |
| `reason` |  |
| `status` |  |

Operations: Create.

API path: `/v1/account/conversations/{conversation_id}/report`

#### ConversationWorkflow

| Field | Description |
| --- | --- |
| `priority` |  |
| `status` |  |

Operations: Create.

API path: `/v1/owner/messages/{interaction_id}/workflow`

#### CreateAgentApiKey

| Field | Description |
| --- | --- |
| `account_id` |  |
| `allowed_actions` |  |
| `allowed_business_ids` |  |
| `created_by` |  |
| `key` |  |
| `label` |  |
| `monthly_quota` |  |
| `notes` |  |
| `one_time_display` |  |
| `rate_limit_per_minute` |  |
| `raw_key` |  |
| `status` |  |

Operations: Create.

API path: `/v1/admin/agent-keys`

#### Customer

| Field | Description |
| --- | --- |
| `auth_provider` |  |
| `avatar_url` | Short-lived signed display URL for a private avatar object, or null. |
| `city` |  |
| `created_at` |  |
| `email` |  |
| `full_name` |  |
| `id` |  |
| `phone` |  |
| `search_category` |  |
| `service_need` |  |
| `state` |  |
| `status` |  |
| `updated_at` |  |

Operations: Create.

API path: `/v1/account/customer`

#### CustomerAccount

| Field | Description |
| --- | --- |
| `account_id` |  |
| `account_role` |  |
| `accuracy_meters` |  |
| `acknowledge_data_effects` |  |
| `actions` |  |
| `agent_key_id` |  |
| `agent_receives_coordinates` |  |
| `all_paused` |  |
| `app_attest_registered` |  |
| `assertion` |  |
| `attestation` |  |
| `author_label` |  |
| `author_type` |  |
| `binding` |  |
| `body` |  |
| `business_id` |  |
| `capture_source` |  |
| `captured_at` |  |
| `challenge` |  |
| `challenge_id` |  |
| `client_message_id` |  |
| `completed` |  |
| `confirmation` |  |
| `connection_id` |  |
| `connection_kind` |  |
| `continuation` | The continuation from the previous response, sent back unchanged to get the next results. |
| `coordinates_returned` |  |
| `created_at` |  |
| `credential_id` |  |
| `declined` |  |
| `delivery_contract` |  |
| `disabled_reason` |  |
| `disclosure` |  |
| `enabled` |  |
| `endpoint` |  |
| `endpoint_id` |  |
| `endpoint_url` |  |
| `environment` |  |
| `event_id` |  |
| `event_types` |  |
| `failure_count` |  |
| `handoff_id` |  |
| `has_more` |  |
| `id` |  |
| `idempotent_replay` |  |
| `installation_id` |  |
| `key_id` |  |
| `last_delivery_at` |  |
| `latitude` |  |
| `location` | An opaque location reference from the website's own location controls. |
| `longitude` |  |
| `message_alerts_enabled` |  |
| `messages` |  |
| `mode` | fallback: a direct search answered because the language model was unavailable. |
| `name` |  |
| `oauth_grant_id` |  |
| `one_time_display` |  |
| `platform` |  |
| `policy` |  |
| `purpose` |  |
| `push_token` |  |
| `reason` |  |
| `registered_at` |  |
| `reply` |  |
| `request_mode` |  |
| `requested_at` |  |
| `results` |  |
| `schema_version` |  |
| `selected_at` |  |
| `signed_in` |  |
| `signing_secret` |  |
| `status` |  |
| `updated_at` |  |
| `url` | Public HTTPS receiver operated by the connecting principal or its agent runtime. |
| `usable_until` |  |
| `use_mode` |  |

Operations: Create.

API path: `/v1/account/location-handoffs/{handoff_id}/complete-from-device`

#### CustomerLocationProofRevocation

| Field | Description |
| --- | --- |
| `accuracy_meters` |  |
| `captured_at` |  |
| `latitude` |  |
| `longitude` |  |

Operations: Create, Remove.

API path: `/v1/account/location-proofs`

#### DestinationAddressSuggestion

| Field | Description |
| --- | --- |
| `input` | Normalized partial US service-address text. |
| `suggestions` |  |

Operations: Create.

API path: `/v1/account/destination-address-suggestions`

#### DestinationLocationProof

| Field | Description |
| --- | --- |
| `address` | A real US service address. |
| `premise_proximity_confirmation_token` | Opaque one-time token from the immediately preceding premise-proximity challenge for the same address and authority. |

Operations: Create.

API path: `/v1/account/destination-location-proofs`

#### DomainTrustCard

| Field | Description |
| --- | --- |
| `business_id` |  |
| `domain` |  |
| `schema_version` |  |
| `trust_card` |  |
| `trust_card_url` |  |
| `trust_model_version` |  |
| `verification_class` |  |
| `verification_disclosure` |  |

Operations: Load.

API path: `/v1/domains/{domain_key}/trust-card.json`

#### GeoContext

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/v1/geo/context`

#### Health

| Field | Description |
| --- | --- |
| `agent_phone_location_bridge` |  |
| `build_sha` |  |
| `business_review_access` |  |
| `contract_version` |  |
| `external_agent_webhooks` |  |
| `external_agent_webhooks_enabled` |  |
| `ios_app_attest_anonymous_location` |  |
| `location_choices` |  |
| `location_handoff` |  |
| `mobile_push` |  |
| `ok` |  |
| `service` |  |
| `sponsored_ordering` |  |
| `trust_model_version` |  |
| `version` |  |

Operations: Load.

API path: `/health`

#### JobApplication

| Field | Description |
| --- | --- |
| `account_id` |  |
| `already_withdrawn` |  |
| `application` |  |
| `applications` |  |
| `billing` |  |
| `business_id` |  |
| `count` |  |
| `cover_note` |  |
| `free_to_apply` |  |
| `id` |  |
| `job_id` |  |
| `limit` |  |
| `offset` |  |
| `resume` |  |
| `retention_note` |  |
| `status` |  |

Operations: Create.

API path: `/v1/jobs/{job_id}/apply`

#### JobResumeSignedUrl

| Field | Description |
| --- | --- |
| `application_id` |  |
| `content_type` |  |
| `expires_in_seconds` |  |
| `resume_file_name` |  |
| `signed_url` |  |
| `size_bytes` |  |
| `status` |  |

Operations: Create.

API path: `/v1/account/job-applications/{application_id}/resume-url`

#### LocationHandoff

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/v1/account/location-handoffs`

#### Message

| Field | Description |
| --- | --- |
| `account_id` |  |
| `client_message_id` | Caller-stable retry key. |
| `conversation_id` |  |
| `created_at` |  |
| `delivery` |  |
| `idempotent_replay` |  |
| `interaction_id` |  |
| `message` |  |
| `moderation_required` |  |
| `source_path` |  |
| `status` |  |
| `subject` |  |
| `target_business_id` |  |
| `target_business_name` |  |
| `target_business_source` |  |

Operations: Create.

API path: `/v1/actions/business-message`

#### ModeratedAction

| Field | Description |
| --- | --- |
| `actions` |  |
| `body` |  |
| `client_request_id` |  |
| `content_type` |  |
| `continuation` | The continuation from the previous response, sent back unchanged to get the next results. |
| `coordinates_returned` |  |
| `disclosure` |  |
| `enabled` |  |
| `file_sha256` |  |
| `has_more` |  |
| `human_confirmation` |  |
| `intent_id` |  |
| `kind` |  |
| `knowledgeVersion` |  |
| `limits` |  |
| `links` |  |
| `location` | An opaque location reference from the website's own location controls. |
| `message` |  |
| `messages` |  |
| `mode` | fallback: a direct search answered because the language model was unavailable. |
| `name` |  |
| `needsHuman` |  |
| `policy` | Human schedule and separate claim-review policy. |
| `question` |  |
| `reply` |  |
| `result` |  |
| `results` |  |
| `scan_authority_id` |  |
| `scanner` |  |
| `scanner_version` |  |
| `schema_version` |  |
| `searcher_latitude` |  |
| `searcher_longitude` |  |
| `signature` |  |
| `signed_in` |  |
| `size_bytes` |  |
| `subject` |  |
| `target_business_id` |  |
| `topic` |  |

Operations: Create, Load.

API path: `/v1/actions/contact-attempt`

#### OpenApiDocument

| Field | Description |
| --- | --- |
| `components` |  |
| `info` |  |
| `openapi` |  |
| `paths` |  |
| `servers` |  |
| `tags` |  |

Operations: List.

API path: `/openapi.json`

#### Operation

| Field | Description |
| --- | --- |
| `account_id` |  |
| `action` |  |
| `active` |  |
| `active_or_good_standing` |  |
| `ai_draft_id` |  |
| `allowed_actions` |  |
| `alt` |  |
| `amount_cents` | Whole cents, non-zero, at most 1,000,000 either way; a promotional credit is positive. |
| `amount_off_cents` |  |
| `api_key` |  |
| `applies_to_period` |  |
| `applies_to_tier` |  |
| `assigned_admin_user_id` |  |
| `assigneeId` |  |
| `assigneeLabel` |  |
| `assigneeType` |  |
| `assignee_id` |  |
| `assignee_label` |  |
| `assignee_type` | AI assignment is unavailable while the customer-support workload is disconnected. |
| `assistant_enabled` |  |
| `base_url` |  |
| `body` |  |
| `businessId` |  |
| `businessName` |  |
| `business_id` |  |
| `business_ids` |  |
| `campaign_id` |  |
| `campaign_ids` |  |
| `caption` |  |
| `case_status` |  |
| `catalog` |  |
| `category` |  |
| `category_alias` |  |
| `chunk_size` |  |
| `city` |  |
| `code` |  |
| `confidence` |  |
| `config` | Complete validated pricing configuration. |
| `confirm` |  |
| `confirm_admin` |  |
| `confirmation` |  |
| `connection_id` |  |
| `connection_kind` |  |
| `content_type` |  |
| `context_id` |  |
| `context_type` |  |
| `createdAt` |  |
| `created_at` |  |
| `credential_expires_at` | Expiration date printed on the license. |
| `credential_id` |  |
| `custom_wire` |  |
| `data_base64` |  |
| `decision` |  |
| `dedupe_ack` |  |
| `delivery_contract` |  |
| `disabled_reason` |  |
| `discount_type` |  |
| `display_name` |  |
| `disposition` |  |
| `draft` |  |
| `duration` |  |
| `duration_in_months` |  |
| `email` |  |
| `enabled` |  |
| `endpoint` |  |
| `endpoint_id` |  |
| `endpoint_url` |  |
| `ends_at` |  |
| `environment_fallback` |  |
| `event_id` |  |
| `event_types` |  |
| `expected_allowed_actions` |  |
| `expected_key_id` |  |
| `expected_updated_at` |  |
| `expected_version` |  |
| `expires_at` | Promotional credit only: ISO date-time 1 hour to 2 years ahead, disclosed to the owner. |
| `fact_id` |  |
| `facts` |  |
| `failure_count` |  |
| `fields` | Validated fields for this fixed content-block type. |
| `file_name` |  |
| `guideHandoffAnsweredAt` |  |
| `guideHandoffAt` |  |
| `guideHandoffDueAt` |  |
| `height` |  |
| `historic_association_checked` |  |
| `hold` |  |
| `holder_name_match` |  |
| `hours` |  |
| `id` |  |
| `idempotency_key` |  |
| `identifier_match` |  |
| `in_use` |  |
| `instruction` |  |
| `invited` |  |
| `key_check` |  |
| `kind` |  |
| `label` |  |
| `lastMessageAt` |  |
| `lastMessageAuthorType` |  |
| `lastMessagePreview` |  |
| `last_delivery_at` |  |
| `last_error_code` |  |
| `last_probe_at` |  |
| `last_problem` |  |
| `legal_name` |  |
| `limit` |  |
| `make_active` |  |
| `max_cents` |  |
| `max_redemptions` |  |
| `messages` |  |
| `messagesTruncated` |  |
| `min_cents` |  |
| `model` |  |
| `model_id` |  |
| `name` |  |
| `note` |  |
| `notes` |  |
| `observed_at` |  |
| `one_time_display` |  |
| `outcome` |  |
| `ownerEmail` |  |
| `ownerLastReadAt` |  |
| `ownerName` |  |
| `ownerUserId` |  |
| `owner_reason_code` | Controlled owner-visible rejection reason. |
| `per_customer_limit` |  |
| `percent_off` |  |
| `phone` |  |
| `policyVersion` |  |
| `priority` |  |
| `provider` |  |
| `providers` |  |
| `purpose_code` |  |
| `rank_bid_cents` |  |
| `reason` |  |
| `reason_category` |  |
| `reason_code` |  |
| `reason_detail` |  |
| `reference` |  |
| `reject_reason` |  |
| `related_case_id` |  |
| `report_id` |  |
| `report_ids` |  |
| `reserve_cents` | 100-10000; never below $1.00. |
| `resolution_note` |  |
| `review_notes` |  |
| `revision` |  |
| `role` |  |
| `rows` |  |
| `run` |  |
| `schema_version` |  |
| `scope` |  |
| `search` |  |
| `settings` |  |
| `signing_secret` |  |
| `size_bytes` |  |
| `sla_due_at` |  |
| `source` |  |
| `source_authority` | Exact official authority name. |
| `source_category_slug` |  |
| `source_scope_checked` |  |
| `source_url` | Exact HTTPS official source URL. |
| `starts_at` |  |
| `state` | Bulk by area: every ad of the advertisers in this two-letter U.S. |
| `status` |  |
| `storage` |  |
| `street_address` |  |
| `subject` |  |
| `supportLastReadAt` |  |
| `target_category` |  |
| `taxonomy_category_aliases` |  |
| `ticketNumber` |  |
| `tier` |  |
| `typing` |  |
| `until` |  |
| `updatedAt` |  |
| `updated_at` |  |
| `url` | Public HTTPS receiver operated by the connecting principal or its agent runtime. |
| `valid_until` |  |
| `value` |  |
| `verification_method` |  |
| `verified_at` |  |
| `verified_service_scope` |  |
| `version` |  |
| `website` |  |
| `width` |  |
| `window_hours` | 1-744, default 48. |
| `workload` |  |
| `zip` |  |

Operations: Create, Patch, Remove, Update.

API path: `/v1/admin/businesses/{business_id}/job-applications/{application_id}/resume-url`

#### OwnerNotification

| Field | Description |
| --- | --- |
| `businessId` |  |
| `createdAt` |  |
| `dedupeKey` |  |
| `emailStatus` |  |
| `eventType` |  |
| `id` |  |
| `readAt` |  |
| `resourceId` |  |
| `resourceKind` |  |
| `resourceUrl` |  |
| `summary` |  |
| `webhookStatus` |  |

Operations: Create.

API path: `/v1/owner/notifications/{notification_id}/read`

#### OwnerNotificationSetting

| Field | Description |
| --- | --- |
| `businessId` |  |
| `business_id` |  |
| `createdAt` |  |
| `emailEnabled` |  |
| `email_enabled` |  |
| `eventTypeSubscriptions` |  |
| `event_types` |  |
| `updatedAt` |  |
| `webhookEnabled` |  |
| `webhook_enabled` |  |

Operations: Create.

API path: `/v1/owner/notification-settings`

#### OwnerWebhookEndpoint

| Field | Description |
| --- | --- |
| `businessId` |  |
| `createdAt` |  |
| `enabled` |  |
| `eventTypeSubscriptions` |  |
| `failureCount` |  |
| `id` |  |
| `lastDeliveryAt` |  |
| `updatedAt` |  |
| `url` |  |

Operations: Create.

API path: `/v1/owner/webhooks/{endpoint_id}/disable`

#### OwnerWebhookRegistration

| Field | Description |
| --- | --- |
| `business_id` |  |
| `endpoint` |  |
| `event_types` |  |
| `one_time_display` |  |
| `signing_secret` |  |
| `status` |  |
| `url` |  |

Operations: Create.

API path: `/v1/owner/webhooks/{endpoint_id}/rotate-secret`

#### Pricing

| Field | Description |
| --- | --- |
| `billing` |  |
| `branch_add_ons` |  |
| `currency` |  |
| `generated_at` |  |
| `neutrality` |  |
| `plans` |  |
| `promotions` |  |
| `published_at` |  |
| `radius_extension` |  |
| `revision_id` |  |
| `source` |  |
| `trust_model_version` |  |

Operations: List.

API path: `/v1/pricing`

#### PromoteVerifiedTransaction

| Field | Description |
| --- | --- |
| `business_id` |  |
| `evidence_id` |  |
| `interaction_id` |  |
| `ok` |  |
| `review_upgraded` |  |
| `status` |  |
| `trust_weight` |  |
| `verified` |  |

Operations: Create.

API path: `/v1/actions/promote-verified-transaction`

#### PublicContent

| Field | Description |
| --- | --- |
| `blocks` |  |
| `generated_at` |  |
| `source` |  |
| `trust_model_version` |  |

Operations: Load.

API path: `/v1/content`

#### Recommend

| Field | Description |
| --- | --- |
| `candidate_window_truncated` | True when Loppee's bounded candidate assembly reached its safety cap. |
| `commercial_influence` | Must be none whenever current-location or saved_exact authority is absent, including universal exact/genuine-prefix name lookup. |
| `display_count` | Agent-key responses: the number of businesses in this response. |
| `endpoint` |  |
| `fallback_registry` |  |
| `generated_at` |  |
| `has_more` | True only when next_cursor can continue through the current bounded, deterministic candidate window. |
| `listed` |  |
| `location_context` | Local category discovery and recommendations require a current precise location proof or handoff, a user-confirmed validated destination authority, or a saved_exact Home location. |
| `ordering` |  |
| `policy` |  |
| `presentation_guidance` | Agent-key responses: how to present these results to the customer. |
| `query` |  |
| `ranking_policy` |  |
| `registry_count_basis` |  |
| `registry_count_observed_at` |  |
| `registry_name` |  |
| `results` |  |
| `returned_count` |  |
| `reviewed_registry` |  |
| `schema_version` |  |
| `search_intent` |  |
| `suggestions` |  |
| `total_matches` | Web and app responses. |
| `total_matches_basis` |  |
| `total_registry_records` |  |
| `trust_model_version` |  |
| `verified` |  |
| `visible_candidate_records` | Web and app responses. |

Operations: List.

API path: `/v1/recommend`

#### Review

| Field | Description |
| --- | --- |
| `account_id` |  |
| `attestation_accepted` | Set true only after the customer confirms this describes their own experience and explicitly approves publishing the displayed business, star rating, title, and full review. |
| `customer_confirmed` | Set true to confirm you were a customer of this business. |
| `message` |  |
| `rating` |  |
| `service_date` | Optional real, non-future service date in YYYY-MM-DD format; empty means not provided. |
| `subject` |  |
| `target_business_id` |  |

Operations: Create.

API path: `/v1/actions/public-review`

#### Revoke

| Field | Description |
| --- | --- |
| `account_id` |  |
| `key_id` |  |
| `revoked_by` |  |
| `status` |  |

Operations: Create.

API path: `/v1/admin/agent-keys/{key_id}/revoke`

#### SaveBusiness

| Field | Description |
| --- | --- |
| `account_id` |  |
| `business_id` |  |
| `business_name` |  |
| `business_source` |  |
| `category` |  |
| `city` |  |
| `created_at` |  |
| `notes` |  |
| `saved_business_id` |  |
| `state` |  |
| `status` |  |

Operations: Create.

API path: `/v1/actions/save-business`

#### SavedBusiness

| Field | Description |
| --- | --- |
| `account_id` |  |
| `count` |  |
| `limit` |  |
| `saved_businesses` |  |

Operations: Create.

API path: `/v1/actions/list-saved-businesses`

#### SavedLocation

| Field | Description |
| --- | --- |
| `available` |  |
| `coordinates_returned` |  |
| `kind` | Only saved_exact is precise local-discovery authority. |
| `label` |  |
| `location_proof_id` |  |
| `reach_precision` | Exact can authorize local category/recommendation reach; coarse cannot activate local results, Sponsored placement, or impressions. |
| `saved_location_ref` |  |
| `updated_at` |  |
| `zip` |  |

Operations: Remove, Update.

API path: `/v1/account/location`

#### Search

| Field | Description |
| --- | --- |
| `candidate_window_truncated` | True when Loppee's bounded candidate assembly reached its safety cap. |
| `commercial_influence` | Must be none whenever current-location or saved_exact authority is absent, including universal exact/genuine-prefix name lookup. |
| `display_count` | Agent-key responses: the number of businesses in this response. |
| `generated_at` |  |
| `has_more` | True only when next_cursor can continue through the current bounded, deterministic candidate window. |
| `location_context` | Local category discovery and recommendations require a current precise location proof or handoff, a user-confirmed validated destination authority, or a saved_exact Home location. |
| `next_cursor` |  |
| `page_limit` |  |
| `policy` |  |
| `presentation_guidance` | Agent-key responses: how to present these results to the customer. |
| `query` |  |
| `ranking_policy` |  |
| `registry_count_basis` |  |
| `registry_count_observed_at` |  |
| `registry_name` |  |
| `results` |  |
| `returned_count` |  |
| `schema_version` |  |
| `search_intent` |  |
| `suggestions` |  |
| `total_matches` | Web and app responses. |
| `total_matches_basis` |  |
| `total_registry_records` |  |
| `trust_model_version` |  |
| `visible_candidate_records` | Web and app responses. |

Operations: List.

API path: `/v1/business-claim/candidates`

#### Suggest

| Field | Description |
| --- | --- |
| `categories` |  |
| `names` |  |
| `query` |  |
| `schema_version` |  |

Operations: List.

API path: `/v1/suggest`

#### SupportInternalNote

| Field | Description |
| --- | --- |
| `authorLabel` |  |
| `body` |  |
| `createdAt` |  |
| `id` |  |

Operations: Create.

API path: `/v1/admin/support/{conversation_id}/internal-notes`

#### SupportWorkflow

| Field | Description |
| --- | --- |
| `category` |  |
| `id` |  |
| `priority` |  |
| `waiting_on` |  |

Operations: Create.

API path: `/v1/admin/support/{conversation_id}/workflow`

#### TaxonomySuggestion

| Field | Description |
| --- | --- |
| `alias` |  |
| `path_titles` |  |
| `title` |  |

Operations: List.

API path: `/v1/taxonomy/suggest`

#### TrustCard

| Field | Description |
| --- | --- |
| `agency` |  |
| `collected_at` |  |
| `disclosure` |  |
| `fact_id` |  |
| `matched_on` |  |
| `reason` |  |
| `record_kind` |  |
| `record_number` |  |
| `record_scope` |  |
| `record_type` |  |
| `recorded_expiry` |  |
| `result` |  |
| `source_label` |  |
| `source_url` |  |
| `state` |  |
| `status_on_record` |  |

Operations: Create, List, Load.

API path: `/v1/businesses/{business_id}/license-records/{fact_id}/report`

#### UnsaveBusiness

| Field | Description |
| --- | --- |
| `account_id` |  |
| `business_id` |  |
| `removed` |  |
| `status` |  |

Operations: Create.

API path: `/v1/actions/unsave-business`

#### UpdateAgentBillingAccount

| Field | Description |
| --- | --- |
| `account_id` |  |
| `billing_account` |  |
| `billing_status` |  |
| `included_actions` |  |
| `monthly_fee_cents` |  |
| `overage_cents` |  |
| `plan` |  |
| `status` |  |
| `updated_by` |  |

Operations: Create.

API path: `/v1/admin/agent-billing-accounts`

#### WithdrawJobApplication

| Field | Description |
| --- | --- |
| `account_id` |  |
| `already_withdrawn` |  |
| `application` |  |
| `application_id` |  |
| `status` |  |

Operations: Create.

API path: `/v1/actions/withdraw-job-application`



## Entities


### AgentAccess

Create an instance: `agent_access = client.AgentAccess`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_name` | `String` |  |
| `agent_type` | `String` |  |
| `callback_url` | `String` |  |
| `compliance_notes` | `String` |  |
| `created_at` | `String` |  |
| `data_needs` | `String` |  |
| `developer_email` | `String` |  |
| `operating_states` | `Array` |  |
| `organization_name` | `String` |  |
| `request_id` | `String` |  |
| `request_status` | `String` |  |
| `requested_actions` | `Array` |  |
| `safety_contact` | `String` |  |
| `status` | `Object` |  |
| `target_categories` | `Array` |  |
| `use_case` | `String` |  |
| `website` | `String` |  |

#### Example: Create

```ruby
agent_access = client.AgentAccess.create({
  "agent_name" => "example_agent_name", # String
  "developer_email" => "example_developer_email", # String
  "organization_name" => "example_organization_name", # String
})
```


### AgentCapability

Create an instance: `agent_capability = client.AgentCapability`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_phone_location_bridge` | `Hash` |  |
| `agent_rules` | `Hash` |  |
| `discovery` | `Hash` |  |
| `external_agent_access` | `Hash` |  |
| `external_agent_webhooks` | `Hash` |  |
| `local_discovery_location_policy` | `Hash` |  |
| `location_choices` | `Hash` |  |
| `registry_name` | `Object` |  |
| `schema_version` | `Object` |  |
| `trust_model_version` | `Object` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the AgentCapability record (raises on error).
agent_capability = client.AgentCapability.load()
```


### AgentConnectionTest

Create an instance: `agent_connection_test = client.AgentConnectionTest`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `key` | `String` | Optional UI fallback. |

#### Example: Create

```ruby
agent_connection_test = client.AgentConnectionTest.create({
})
```


### AgentIntegration

Create an instance: `agent_integration = client.AgentIntegration`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_model` | `Hash` |  |
| `commercial_influence` | `Hash` |  |
| `developer_docs_url` | `String` |  |
| `exposure_tiers` | `Hash` |  |
| `external_agent_access` | `Hash` |  |
| `generated_at` | `String` |  |
| `http_api` | `Hash` |  |
| `legal` | `Hash` |  |
| `mcp` | `Hash` |  |
| `mcp_client_example_url` | `String` |  |
| `monitoring_url` | `String` |  |
| `openapi_url` | `String` |  |
| `openapi_v1_url` | `String` |  |
| `operational_rules` | `Array` |  |
| `owner_agent_notifications` | `Hash` |  |
| `package_url` | `String` |  |
| `public_base_url` | `String` |  |
| `rate_limits` | `Hash` |  |
| `registry_name` | `Object` |  |
| `schema_version` | `String` |  |
| `trust_card_contract` | `Hash` |  |
| `trust_doctrine` | `Hash` |  |

#### Example: List

```ruby
# list returns an Array of AgentIntegration entities, one per record (raises on error).
agent_integrations = client.AgentIntegration.list
agent_integrations.each { |item| puts item.data_get }
```


### AgentMonitoring

Create an instance: `agent_monitoring = client.AgentMonitoring`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `build_sha` | `String` |  |
| `contract_version` | `String` |  |
| `generated_at` | `String` |  |
| `health_url` | `String` |  |
| `integration_package_url` | `String` |  |
| `mcp_url` | `String` |  |
| `metrics` | `Hash` |  |
| `openapi_url` | `String` |  |
| `rate_limits` | `Hash` |  |
| `registry_name` | `Object` |  |
| `schema_version` | `String` |  |
| `service` | `String` |  |
| `uptime_seconds` | `Float` |  |
| `version` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the AgentMonitoring record (raises on error).
agent_monitoring = client.AgentMonitoring.load()
```


### AgentOpenapi

Create an instance: `agent_openapi = client.AgentOpenapi`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `components` | `Hash` |  |
| `info` | `Hash` |  |
| `openapi` | `Object` |  |
| `paths` | `Hash` |  |
| `servers` | `Array` |  |
| `tags` | `Array` |  |

#### Example: List

```ruby
# list returns an Array of AgentOpenapi entities, one per record (raises on error).
agent_openapis = client.AgentOpenapi.list
agent_openapis.each { |item| puts item.data_get }
```


### AgentPolicy

Create an instance: `agent_policy = client.AgentPolicy`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `external_agent_access` | `Hash` |  |
| `external_agent_webhooks` | `Hash` |  |
| `local_discovery_location_policy` | `Hash` |  |
| `location_handoff_flow` | `Hash` |  |
| `payment` | `Hash` |  |
| `publication` | `Hash` |  |
| `schema_version` | `Object` |  |
| `trust_model_version` | `Object` |  |
| `verification` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the AgentPolicy record (raises on error).
agent_policy = client.AgentPolicy.load()
```


### AnonymousLocationProofRevocation

Create an instance: `anonymous_location_proof_revocation = client.AnonymousLocationProofRevocation`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accuracy_meters` | `Float` |  |
| `captured_at` | `String` |  |
| `latitude` | `Float` |  |
| `longitude` | `Float` |  |

#### Example: Create

```ruby
anonymous_location_proof_revocation = client.AnonymousLocationProofRevocation.create({
  "accuracy_meters" => 1, # Float
  "captured_at" => "example_captured_at", # String
  "latitude" => 1, # Float
  "longitude" => 1, # Float
})
```


### BusinessApplication

Create an instance: `business_application = client.BusinessApplication`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `application` | `Hash` |  |
| `application_id` | `String` |  |
| `business_id` | `String` |  |
| `claim_id` | `Object` |  |
| `created_at` | `String` |  |
| `existing_business` | `Boolean` |  |
| `files` | `Array` |  |
| `listing_id` | `String` |  |
| `pipeline_status` | `String` |  |
| `status` | `Object` |  |
| `trust_model_version` | `Object` |  |
| `uploaded_files` | `Float` |  |

#### Example: Create

```ruby
business_application = client.BusinessApplication.create({
  "application" => {}, # Hash
})
```


### BusinessClaim

Create an instance: `business_claim = client.BusinessClaim`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `business_id` | `Object` |  |
| `category` | `String` |  |
| `city` | `String` |  |
| `claim_id` | `String` |  |
| `claim_status` | `String` |  |
| `claimant_email` | `String` | Legacy field; authenticated owner identity wins. |
| `claimant_name` | `String` | Legacy field; authenticated owner identity wins. |
| `claimant_relationship` | `String` |  |
| `created_at` | `String` |  |
| `directory_listing_id` | `Object` |  |
| `display_name` | `String` |  |
| `listing_id` | `String` |  |
| `notes` | `String` |  |
| `phone` | `String` |  |
| `source` | `String` |  |
| `source_type` | `String` |  |
| `source_url` | `String` |  |
| `state` | `String` |  |
| `status` | `Object` |  |
| `verification` | `Hash` |  |
| `website` | `String` |  |

#### Example: Create

```ruby
business_claim = client.BusinessClaim.create({
  "display_name" => "example_display_name", # String
})
```


### BusinessDeal

Create an instance: `business_deal = client.BusinessDeal`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `String` |  |
| `description` | `String` |  |
| `discountLabel` | `String` |  |
| `endsAt` | `Object` |  |
| `id` | `String` |  |
| `promoCode` | `Object` |  |
| `startsAt` | `Object` |  |
| `terms` | `Object` |  |
| `title` | `String` |  |

#### Example: List

```ruby
# list returns an Array of BusinessDeal entities, one per record (raises on error).
business_deals = client.BusinessDeal.list({ "id" => "example" })
business_deals.each { |item| puts item.data_get }
```


### BusinessIndex

Create an instance: `business_index = client.BusinessIndex`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `brand_assets` | `Object` |  |
| `business_id` | `String` |  |
| `category` | `String` |  |
| `city` | `String` |  |
| `display_name` | `String` |  |
| `domain` | `Object` |  |
| `insurance` | `Hash` |  |
| `phone` | `Object` |  |
| `public_profile_url` | `String` |  |
| `review_reputation` | `Hash` |  |
| `state` | `String` |  |
| `street_address` | `Object` | Owner-published street address where authorized. |
| `trust_card_url` | `String` |  |
| `trust_model_version` | `Object` |  |
| `verification_class` | `String` |  |
| `verification_disclosure` | `String` |  |
| `website` | `Object` |  |
| `zip` | `Object` | Owner-published postal code where authorized. |

#### Example: List

```ruby
# list returns an Array of BusinessIndex entities, one per record (raises on error).
business_indexs = client.BusinessIndex.list
business_indexs.each { |item| puts item.data_get }
```


### BusinessOwner

Create an instance: `business_owner = client.BusinessOwner`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `String` |  |
| `account_role` | `String` |  |
| `acknowledge_data_effects` | `Boolean` |  |
| `actions` | `Array` |  |
| `allowed_actions` | `Array` |  |
| `amount_cents` | `Float` | Within the top-up limits (default $25 to $5,000). |
| `applicant_location_requirements` | `String` |  |
| `apply_url` | `Object` |  |
| `asset_id` | `String` |  |
| `assigneeId` | `String` |  |
| `assigneeLabel` | `String` |  |
| `assigneeType` | `String` |  |
| `attempt_id` | `String` |  |
| `benefits` | `String` |  |
| `body` | `String` |  |
| `businessId` | `String` |  |
| `businessName` | `String` |  |
| `business_id` | `String` |  |
| `campaign` | `Hash` |  |
| `campaign_id` | `String` |  |
| `carrier_name` | `String` |  |
| `category` | `String` |  |
| `category_alias` | `String` |  |
| `category_aliases` | `Array` |  |
| `change` | `Hash` |  |
| `city` | `String` |  |
| `client_message_id` | `String` |  |
| `code` | `String` |  |
| `compensation_text` | `String` |  |
| `confirm` | `Boolean` |  |
| `confirmation` | `String` |  |
| `connection_kind` | `String` |  |
| `consent_sha256` | `String` | SHA-256 of the acceptance text shown (from payment-authorizations). |
| `contact_email` | `Object` |  |
| `content_type` | `String` |  |
| `country` | `String` |  |
| `coupon_code` | `String` |  |
| `createdAt` | `Object` |  |
| `created_at` | `String` |  |
| `credential_id` | `String` |  |
| `credential_identifier` | `String` |  |
| `data_base64` | `String` |  |
| `delivery_contract` | `Hash` |  |
| `description` | `Object` |  |
| `direct_apply` | `Boolean` |  |
| `disabled_reason` | `Object` |  |
| `discount_label` | `String` |  |
| `display_name` | `String` |  |
| `employment_type` | `String` |  |
| `enabled` | `Boolean` |  |
| `endpoint` | `Hash` |  |
| `endpoint_id` | `String` |  |
| `endpoint_url` | `String` |  |
| `ends_at` | `Object` |  |
| `event_id` | `String` |  |
| `event_types` | `Array` |  |
| `evidence_observed_at` | `String` |  |
| `expected_updated_at` | `String` |  |
| `experience_level` | `String` |  |
| `expires_at` | `String` |  |
| `factor_id` | `String` |  |
| `failure_count` | `Integer` |  |
| `file_name` | `String` |  |
| `file_sha256` | `String` |  |
| `full_name` | `String` |  |
| `guideHandoffAnsweredAt` | `Object` |  |
| `guideHandoffAt` | `Object` |  |
| `guideHandoffDueAt` | `Object` |  |
| `hours` | `Object` |  |
| `id` | `String` |  |
| `idempotency_key` | `String` |  |
| `installation_id` | `String` |  |
| `issuer` | `String` |  |
| `jurisdiction` | `String` |  |
| `kind` | `String` |  |
| `label` | `String` |  |
| `lastMessageAt` | `Object` |  |
| `lastMessageAuthorType` | `String` |  |
| `lastMessagePreview` | `String` |  |
| `last_delivery_at` | `Object` |  |
| `launch` | `Boolean` |  |
| `license_number` | `String` |  |
| `messages` | `Array` |  |
| `messagesTruncated` | `Boolean` |  |
| `monthly_cap_cents` | `Float` |  |
| `name` | `String` |  |
| `note` | `String` |  |
| `one_time_display` | `Object` |  |
| `ownerEmail` | `String` |  |
| `ownerLastReadAt` | `Object` |  |
| `ownerName` | `String` |  |
| `ownerUserId` | `String` |  |
| `period` | `String` |  |
| `phone` | `String` |  |
| `platform` | `String` |  |
| `policy_number` | `String` |  |
| `postal_code` | `String` |  |
| `promo_code` | `Object` |  |
| `push_token` | `String` |  |
| `radius_miles` | `Float` |  |
| `reason` | `String` |  |
| `reason_category` | `String` |  |
| `reason_detail` | `String` |  |
| `registered_at` | `String` |  |
| `request_id` | `String` | Client id of this confirmation (8-100 characters); reuse it only to retry the same confirmation. |
| `requested_at` | `String` |  |
| `salary_currency` | `String` |  |
| `salary_max` | `Object` |  |
| `salary_min` | `Object` |  |
| `salary_period` | `String` |  |
| `save_card` | `Boolean` |  |
| `save_card_consent_sha256` | `String` | Only with save_card true: SHA-256 of the save-card consent text shown. |
| `schedule` | `String` |  |
| `service_areas` | `String` |  |
| `signing_secret` | `String` |  |
| `size_bytes` | `Float` |  |
| `skills` | `Array` |  |
| `source_url` | `String` |  |
| `starts_at` | `Object` |  |
| `state` | `String` |  |
| `stated_expires_at` | `String` |  |
| `status` | `String` |  |
| `street_address` | `String` |  |
| `subject` | `String` |  |
| `submitted_identifier` | `String` |  |
| `supportLastReadAt` | `Object` |  |
| `terms` | `Object` |  |
| `terms_version` | `String` | Must be the current Advertiser Terms version. |
| `threshold_cents` | `Float` |  |
| `ticketNumber` | `String` |  |
| `tier` | `String` |  |
| `title` | `String` |  |
| `total_job_openings` | `Object` |  |
| `typing` | `Boolean` |  |
| `updatedAt` | `Object` |  |
| `updated_at` | `String` |  |
| `url` | `String` | Public HTTPS receiver operated by the connecting principal or its agent runtime. |
| `website` | `String` |  |
| `workplace_type` | `String` |  |
| `zip` | `String` |  |

#### Example: Create

```ruby
business_owner = client.BusinessOwner.create({
  "deal_id" => "example_deal_id", # String
  "account_id" => "example_account_id", # String
  "account_role" => "example_account_role", # String
  "acknowledge_data_effects" => true, # Boolean
  "actions" => [], # Array
  "allowed_actions" => [], # Array
  "amount_cents" => 1, # Float
  "asset_id" => "example_asset_id", # String
  "assigneeId" => "example_assigneeId", # String
  "assigneeLabel" => "example_assigneeLabel", # String
  "assigneeType" => "example_assigneeType", # String
  "attempt_id" => "example_attempt_id", # String
  "body" => "example_body", # String
  "businessId" => "example_businessId", # String
  "businessName" => "example_businessName", # String
  "campaign" => {}, # Hash
  "campaign_id" => "example_campaign_id", # String
  "category_aliases" => [], # Array
  "change" => {}, # Hash
  "city" => "example_city", # String
  "client_message_id" => "example_client_message_id", # String
  "code" => "example_code", # String
  "confirmation" => "example_confirmation", # String
  "connection_kind" => "example_connection_kind", # String
  "consent_sha256" => "example_consent_sha256", # String
  "content_type" => "example_content_type", # String
  "createdAt" => "example_createdAt", # Object
  "created_at" => "example_created_at", # String
  "credential_id" => "example_credential_id", # String
  "credential_identifier" => "example_credential_identifier", # String
  "data_base64" => "example_data_base64", # String
  "delivery_contract" => {}, # Hash
  "disabled_reason" => "example_disabled_reason", # Object
  "discount_label" => "example_discount_label", # String
  "display_name" => "example_display_name", # String
  "enabled" => true, # Boolean
  "endpoint" => {}, # Hash
  "endpoint_id" => "example_endpoint_id", # String
  "endpoint_url" => "example_endpoint_url", # String
  "event_id" => "example_event_id", # String
  "event_types" => [], # Array
  "expected_updated_at" => "example_expected_updated_at", # String
  "factor_id" => "example_factor_id", # String
  "failure_count" => 1, # Integer
  "file_name" => "example_file_name", # String
  "file_sha256" => "example_file_sha256", # String
  "id" => "example_id", # String
  "installation_id" => "example_installation_id", # String
  "issuer" => "example_issuer", # String
  "kind" => "example_kind", # String
  "lastMessageAt" => "example_lastMessageAt", # Object
  "lastMessageAuthorType" => "example_lastMessageAuthorType", # String
  "lastMessagePreview" => "example_lastMessagePreview", # String
  "last_delivery_at" => "example_last_delivery_at", # Object
  "license_number" => "example_license_number", # String
  "messages" => [], # Array
  "messagesTruncated" => true, # Boolean
  "name" => "example_name", # String
  "one_time_display" => "example_one_time_display", # Object
  "ownerEmail" => "example_ownerEmail", # String
  "ownerLastReadAt" => "example_ownerLastReadAt", # Object
  "ownerName" => "example_ownerName", # String
  "ownerUserId" => "example_ownerUserId", # String
  "phone" => "example_phone", # String
  "platform" => "example_platform", # String
  "push_token" => "example_push_token", # String
  "radius_miles" => 1, # Float
  "reason" => "example_reason", # String
  "registered_at" => "example_registered_at", # String
  "request_id" => "example_request_id", # String
  "requested_at" => "example_requested_at", # String
  "save_card" => true, # Boolean
  "signing_secret" => "example_signing_secret", # String
  "size_bytes" => 1, # Float
  "state" => "example_state", # String
  "street_address" => "example_street_address", # String
  "supportLastReadAt" => "example_supportLastReadAt", # Object
  "terms_version" => "example_terms_version", # String
  "ticketNumber" => "example_ticketNumber", # String
  "tier" => "example_tier", # String
  "title" => "example_title", # String
  "updatedAt" => "example_updatedAt", # Object
  "updated_at" => "example_updated_at", # String
  "url" => "example_url", # String
  "website" => "example_website", # String
})
```


### BusinessReview

Create an instance: `business_review = client.BusinessReview`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the BusinessReview record (raises on error).
business_review = client.BusinessReview.load({ "id" => "business_review_id" })
```


### ChatAttachment

Create an instance: `chat_attachment = client.ChatAttachment`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `byteSize` | `Integer` |  |
| `content_type` | `Object` |  |
| `data_base64` | `String` |  |
| `fileName` | `String` |  |
| `file_name` | `String` |  |
| `id` | `String` |  |
| `mediaType` | `String` |  |
| `size_bytes` | `Integer` |  |

#### Example: Create

```ruby
chat_attachment = client.ChatAttachment.create({
  "conversation_id" => "example_conversation_id", # String
  "content_type" => "example_content_type", # Object
  "data_base64" => "example_data_base64", # String
  "file_name" => "example_file_name", # String
  "size_bytes" => 1, # Integer
})
```


### ChatAttachmentUrl

Create an instance: `chat_attachment_url = client.ChatAttachmentUrl`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `byte_size` | `Integer` |  |
| `expires_in_seconds` | `Object` |  |
| `file_name` | `String` |  |
| `id` | `String` |  |
| `media_type` | `String` |  |
| `signed_url` | `String` |  |

#### Example: Create

```ruby
chat_attachment_url = client.ChatAttachmentUrl.create({
  "attachment_id" => "example_attachment_id", # String
  "conversation_id" => "example_conversation_id", # String
})
```


### ClaimVerificationSend

Create an instance: `claim_verification_send = client.ClaimVerificationSend`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `challenge_id` | `String` | Opaque v3 SMS or owner-email challenge UUID. |
| `channel` | `Object` |  |
| `claim_id` | `String` |  |
| `destination_hint` | `String` |  |
| `expires_in_seconds` | `Float` |  |
| `provider_status` | `Object` | V3 provider request state. |
| `recipient_delivery_confirmed` | `Object` | V3 currently has no final-delivery provider event for this receipt. |
| `request_id` | `String` | Caller-generated idempotency UUID. |
| `status` | `Object` |  |

#### Example: Create

```ruby
claim_verification_send = client.ClaimVerificationSend.create({
  "claim_id" => "example_claim_id", # String
})
```


### ClaimVerificationVerify

Create an instance: `claim_verification_verify = client.ClaimVerificationVerify`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `business_id` | `Object` |  |
| `challenge_id` | `String` | Exact challenge UUID returned by the v3 SMS or owner-email send. |
| `channel` | `Object` |  |
| `claim_id` | `String` |  |
| `code` | `String` |  |
| `method` | `Object` |  |
| `publication` | `Hash` |  |
| `status` | `Object` |  |
| `transfer_review_required` | `Object` |  |
| `trust_model_version` | `Object` |  |

#### Example: Create

```ruby
claim_verification_verify = client.ClaimVerificationVerify.create({
  "claim_id" => "example_claim_id", # String
  "code" => "example_code", # String
})
```


### CommercialClick

Create an instance: `commercial_click = client.CommercialClick`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action_type` | `Object` |  |
| `ad_receipt` | `String` | Opaque server-signed receipt of a served Sponsored ad, sent back unchanged with a profile, website or call tap. |
| `billable` | `Boolean` |  |
| `billing_event_id` | `Object` |  |
| `billing_status` | `String` |  |
| `business_id` | `String` |  |
| `category` | `String` |  |
| `city` | `String` |  |
| `click_id` | `String` |  |
| `commercial_status` | `Object` |  |
| `created_at` | `String` |  |
| `directory_listing_id` | `String` | Deprecated alias of listing_id. |
| `display_name` | `String` |  |
| `fallback_interaction_id` | `String` |  |
| `ledger_status` | `String` |  |
| `listing_id` | `String` |  |
| `metadata` | `Hash` |  |
| `migration_required` | `Boolean` |  |
| `page_path` | `String` |  |
| `referrer` | `String` |  |
| `source_type` | `Object` |  |
| `state` | `String` |  |
| `status` | `Object` |  |
| `storage` | `Object` |  |
| `surface` | `Object` | Where the Sponsored ad was shown (with ad_receipt). |
| `target_url` | `String` |  |

#### Example: Create

```ruby
commercial_click = client.CommercialClick.create({
  "action_type" => "example_action_type", # Object
  "source_type" => "example_source_type", # Object
})
```


### ContactRecorded

Create an instance: `contact_recorded = client.ContactRecorded`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `business_id` | `String` |  |
| `contact_recorded` | `Object` |  |
| `interaction_id` | `String` |  |
| `ok` | `Object` |  |
| `policy` | `String` |  |
| `review_upgraded` | `Object` |  |
| `status` | `Object` |  |
| `trust_weight` | `Object` |  |
| `verified` | `Boolean` |  |

#### Example: Create

```ruby
contact_recorded = client.ContactRecorded.create({
  "business_id" => "example_business_id", # String
})
```


### Conversation

Create an instance: `conversation = client.Conversation`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `String` |  |
| `conversation_id` | `String` | Exact conversation referenced by a webhook; returns zero or one scoped thread. |
| `conversations` | `Array` |  |
| `count` | `Float` |  |
| `cursor` | `String` | Opaque pagination cursor returned by the previous page. |
| `limit` | `Float` |  |
| `pagination` | `Hash` |  |

#### Example: Create

```ruby
conversation = client.Conversation.create({
  "account_id" => "example_account_id", # String
})
```


### ConversationClose

Create an instance: `conversation_close = client.ConversationClose`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `closed_at` | `String` |  |
| `conversation_id` | `String` |  |
| `id` | `String` |  |
| `status` | `Object` |  |

#### Example: Create

```ruby
conversation_close = client.ConversationClose.create({
  "id" => "example_id", # String
})
```


### ConversationReport

Create an instance: `conversation_report = client.ConversationReport`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `detail` | `String` |  |
| `id` | `String` |  |
| `reason` | `Object` |  |
| `status` | `Object` |  |

#### Example: Create

```ruby
conversation_report = client.ConversationReport.create({
  "id" => "example_id", # String
  "reason" => "example_reason", # Object
})
```


### ConversationWorkflow

Create an instance: `conversation_workflow = client.ConversationWorkflow`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `priority` | `Object` |  |
| `status` | `Object` |  |

#### Example: Create

```ruby
conversation_workflow = client.ConversationWorkflow.create({
  "message_id" => "example_message_id", # String
})
```


### CreateAgentApiKey

Create an instance: `create_agent_api_key = client.CreateAgentApiKey`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `String` |  |
| `allowed_actions` | `Array` |  |
| `allowed_business_ids` | `Array` |  |
| `created_by` | `String` |  |
| `key` | `Hash` |  |
| `label` | `String` |  |
| `monthly_quota` | `Float` |  |
| `notes` | `String` |  |
| `one_time_display` | `Object` |  |
| `rate_limit_per_minute` | `Float` |  |
| `raw_key` | `String` |  |
| `status` | `Object` |  |

#### Example: Create

```ruby
create_agent_api_key = client.CreateAgentApiKey.create({
  "account_id" => "example_account_id", # String
})
```


### Customer

Create an instance: `customer = client.Customer`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_provider` | `String` |  |
| `avatar_url` | `Object` | Short-lived signed display URL for a private avatar object, or null. |
| `city` | `Object` |  |
| `created_at` | `Object` |  |
| `email` | `String` |  |
| `full_name` | `String` |  |
| `id` | `String` |  |
| `phone` | `Object` |  |
| `search_category` | `String` |  |
| `service_need` | `String` |  |
| `state` | `Object` |  |
| `status` | `Object` |  |
| `updated_at` | `Object` |  |

#### Example: Create

```ruby
customer = client.Customer.create({
})
```


### CustomerAccount

Create an instance: `customer_account = client.CustomerAccount`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `String` |  |
| `account_role` | `String` |  |
| `accuracy_meters` | `Float` |  |
| `acknowledge_data_effects` | `Boolean` |  |
| `actions` | `Array` |  |
| `agent_key_id` | `String` |  |
| `agent_receives_coordinates` | `Boolean` |  |
| `all_paused` | `Boolean` |  |
| `app_attest_registered` | `Boolean` |  |
| `assertion` | `String` |  |
| `attestation` | `String` |  |
| `author_label` | `String` |  |
| `author_type` | `String` |  |
| `binding` | `Object` |  |
| `body` | `String` |  |
| `business_id` | `Object` |  |
| `capture_source` | `Object` |  |
| `captured_at` | `String` |  |
| `challenge` | `String` |  |
| `challenge_id` | `String` |  |
| `client_message_id` | `String` |  |
| `completed` | `Boolean` |  |
| `confirmation` | `String` |  |
| `connection_id` | `String` |  |
| `connection_kind` | `String` |  |
| `continuation` | `Object` | The continuation from the previous response, sent back unchanged to get the next results. |
| `coordinates_returned` | `Boolean` |  |
| `created_at` | `String` |  |
| `credential_id` | `String` |  |
| `declined` | `Boolean` |  |
| `delivery_contract` | `Hash` |  |
| `disabled_reason` | `Object` |  |
| `disclosure` | `String` |  |
| `enabled` | `Boolean` |  |
| `endpoint` | `Hash` |  |
| `endpoint_id` | `String` |  |
| `endpoint_url` | `String` |  |
| `environment` | `String` |  |
| `event_id` | `String` |  |
| `event_types` | `Array` |  |
| `failure_count` | `Integer` |  |
| `handoff_id` | `String` |  |
| `has_more` | `Boolean` |  |
| `id` | `String` |  |
| `idempotent_replay` | `Boolean` |  |
| `installation_id` | `String` |  |
| `key_id` | `String` |  |
| `last_delivery_at` | `Object` |  |
| `latitude` | `Float` |  |
| `location` | `Object` | An opaque location reference from the website's own location controls. |
| `longitude` | `Float` |  |
| `message_alerts_enabled` | `Boolean` |  |
| `messages` | `Array` |  |
| `mode` | `String` | fallback: a direct search answered because the language model was unavailable. |
| `name` | `String` |  |
| `oauth_grant_id` | `Object` |  |
| `one_time_display` | `Object` |  |
| `platform` | `String` |  |
| `policy` | `String` |  |
| `purpose` | `String` |  |
| `push_token` | `String` |  |
| `reason` | `String` |  |
| `registered_at` | `String` |  |
| `reply` | `String` |  |
| `request_mode` | `String` |  |
| `requested_at` | `String` |  |
| `results` | `Array` |  |
| `schema_version` | `String` |  |
| `selected_at` | `String` |  |
| `signed_in` | `Boolean` |  |
| `signing_secret` | `String` |  |
| `status` | `Object` |  |
| `updated_at` | `String` |  |
| `url` | `String` | Public HTTPS receiver operated by the connecting principal or its agent runtime. |
| `usable_until` | `String` |  |
| `use_mode` | `String` |  |

#### Example: Create

```ruby
customer_account = client.CustomerAccount.create({
  "account_id" => "example_account_id", # String
  "account_role" => "example_account_role", # String
  "accuracy_meters" => 1, # Float
  "acknowledge_data_effects" => true, # Boolean
  "actions" => [], # Array
  "agent_key_id" => "example_agent_key_id", # String
  "agent_receives_coordinates" => true, # Boolean
  "all_paused" => true, # Boolean
  "app_attest_registered" => true, # Boolean
  "assertion" => "example_assertion", # String
  "attestation" => "example_attestation", # String
  "author_label" => "example_author_label", # String
  "author_type" => "example_author_type", # String
  "binding" => "example_binding", # Object
  "body" => "example_body", # String
  "business_id" => "example_business_id", # Object
  "capture_source" => "example_capture_source", # Object
  "captured_at" => "example_captured_at", # String
  "challenge" => "example_challenge", # String
  "challenge_id" => "example_challenge_id", # String
  "client_message_id" => "example_client_message_id", # String
  "completed" => true, # Boolean
  "confirmation" => "example_confirmation", # String
  "connection_id" => "example_connection_id", # String
  "connection_kind" => "example_connection_kind", # String
  "coordinates_returned" => true, # Boolean
  "created_at" => "example_created_at", # String
  "credential_id" => "example_credential_id", # String
  "declined" => true, # Boolean
  "delivery_contract" => {}, # Hash
  "disabled_reason" => "example_disabled_reason", # Object
  "disclosure" => "example_disclosure", # String
  "enabled" => true, # Boolean
  "endpoint" => {}, # Hash
  "endpoint_id" => "example_endpoint_id", # String
  "endpoint_url" => "example_endpoint_url", # String
  "environment" => "example_environment", # String
  "event_id" => "example_event_id", # String
  "event_types" => [], # Array
  "failure_count" => 1, # Integer
  "handoff_id" => "example_handoff_id", # String
  "has_more" => true, # Boolean
  "id" => "example_id", # String
  "idempotent_replay" => true, # Boolean
  "installation_id" => "example_installation_id", # String
  "key_id" => "example_key_id", # String
  "last_delivery_at" => "example_last_delivery_at", # Object
  "latitude" => 1, # Float
  "longitude" => 1, # Float
  "message_alerts_enabled" => true, # Boolean
  "messages" => [], # Array
  "mode" => "example_mode", # String
  "oauth_grant_id" => "example_oauth_grant_id", # Object
  "one_time_display" => "example_one_time_display", # Object
  "platform" => "example_platform", # String
  "policy" => "example_policy", # String
  "purpose" => "example_purpose", # String
  "push_token" => "example_push_token", # String
  "registered_at" => "example_registered_at", # String
  "reply" => "example_reply", # String
  "request_mode" => "example_request_mode", # String
  "requested_at" => "example_requested_at", # String
  "results" => [], # Array
  "schema_version" => "example_schema_version", # String
  "selected_at" => "example_selected_at", # String
  "signed_in" => true, # Boolean
  "signing_secret" => "example_signing_secret", # String
  "status" => "example_status", # Object
  "updated_at" => "example_updated_at", # String
  "url" => "example_url", # String
  "usable_until" => "example_usable_until", # String
  "use_mode" => "example_use_mode", # String
})
```


### CustomerLocationProofRevocation

Create an instance: `customer_location_proof_revocation = client.CustomerLocationProofRevocation`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accuracy_meters` | `Float` |  |
| `captured_at` | `String` |  |
| `latitude` | `Float` |  |
| `longitude` | `Float` |  |

#### Example: Create

```ruby
customer_location_proof_revocation = client.CustomerLocationProofRevocation.create({
  "accuracy_meters" => 1, # Float
  "captured_at" => "example_captured_at", # String
  "latitude" => 1, # Float
  "longitude" => 1, # Float
})
```


### DestinationAddressSuggestion

Create an instance: `destination_address_suggestion = client.DestinationAddressSuggestion`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `input` | `String` | Normalized partial US service-address text. |
| `suggestions` | `Array` |  |

#### Example: Create

```ruby
destination_address_suggestion = client.DestinationAddressSuggestion.create({
  "input" => "example_input", # String
})
```


### DestinationLocationProof

Create an instance: `destination_location_proof = client.DestinationLocationProof`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `address` | `String` | A real US service address. |
| `premise_proximity_confirmation_token` | `String` | Opaque one-time token from the immediately preceding premise-proximity challenge for the same address and authority. |

#### Example: Create

```ruby
destination_location_proof = client.DestinationLocationProof.create({
  "address" => "example_address", # String
})
```


### DomainTrustCard

Create an instance: `domain_trust_card = client.DomainTrustCard`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `business_id` | `String` |  |
| `domain` | `String` |  |
| `schema_version` | `Object` |  |
| `trust_card` | `Hash` |  |
| `trust_card_url` | `String` |  |
| `trust_model_version` | `Object` |  |
| `verification_class` | `Object` |  |
| `verification_disclosure` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the DomainTrustCard record (raises on error).
domain_trust_card = client.DomainTrustCard.load({ "domain_key" => "domain_key" })
```


### GeoContext

Create an instance: `geo_context = client.GeoContext`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the GeoContext record (raises on error).
geo_context = client.GeoContext.load()
```


### Health

Create an instance: `health = client.Health`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_phone_location_bridge` | `Hash` |  |
| `build_sha` | `String` |  |
| `business_review_access` | `Hash` |  |
| `contract_version` | `String` |  |
| `external_agent_webhooks` | `Hash` |  |
| `external_agent_webhooks_enabled` | `Boolean` |  |
| `ios_app_attest_anonymous_location` | `Hash` |  |
| `location_choices` | `Hash` |  |
| `location_handoff` | `Hash` |  |
| `mobile_push` | `Object` |  |
| `ok` | `Object` |  |
| `service` | `String` |  |
| `sponsored_ordering` | `Hash` |  |
| `trust_model_version` | `Object` |  |
| `version` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Health record (raises on error).
health = client.Health.load()
```


### JobApplication

Create an instance: `job_application = client.JobApplication`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `String` |  |
| `already_withdrawn` | `Boolean` |  |
| `application` | `Hash` |  |
| `applications` | `Array` |  |
| `billing` | `Hash` |  |
| `business_id` | `String` |  |
| `count` | `Float` |  |
| `cover_note` | `String` |  |
| `free_to_apply` | `Boolean` |  |
| `id` | `String` |  |
| `job_id` | `String` |  |
| `limit` | `Float` |  |
| `offset` | `Float` |  |
| `resume` | `Hash` |  |
| `retention_note` | `String` |  |
| `status` | `String` |  |

#### Example: Create

```ruby
job_application = client.JobApplication.create({
  "job_id" => "example_job_id", # String
  "resume" => {}, # Hash
})
```


### JobResumeSignedUrl

Create an instance: `job_resume_signed_url = client.JobResumeSignedUrl`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `application_id` | `String` |  |
| `content_type` | `String` |  |
| `expires_in_seconds` | `Float` |  |
| `resume_file_name` | `String` |  |
| `signed_url` | `String` |  |
| `size_bytes` | `Float` |  |
| `status` | `Object` |  |

#### Example: Create

```ruby
job_resume_signed_url = client.JobResumeSignedUrl.create({
  "job_application_id" => "example_job_application_id", # String
})
```


### LocationHandoff

Create an instance: `location_handoff = client.LocationHandoff`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ruby
location_handoff = client.LocationHandoff.create({
})
```


### Message

Create an instance: `message = client.Message`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `String` |  |
| `client_message_id` | `String` | Caller-stable retry key. |
| `conversation_id` | `String` |  |
| `created_at` | `String` |  |
| `delivery` | `Object` |  |
| `idempotent_replay` | `Boolean` |  |
| `interaction_id` | `String` |  |
| `message` | `String` |  |
| `moderation_required` | `Object` |  |
| `source_path` | `String` |  |
| `status` | `Object` |  |
| `subject` | `String` |  |
| `target_business_id` | `String` |  |
| `target_business_name` | `String` |  |
| `target_business_source` | `String` |  |

#### Example: Create

```ruby
message = client.Message.create({
  "account_id" => "example_account_id", # String
  "client_message_id" => "example_client_message_id", # String
  "message" => "example_message", # String
  "subject" => "example_subject", # String
  "target_business_id" => "example_target_business_id", # String
  "target_business_name" => "example_target_business_name", # String
  "target_business_source" => "example_target_business_source", # String
})
```


### ModeratedAction

Create an instance: `moderated_action = client.ModeratedAction`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actions` | `Array` |  |
| `body` | `String` |  |
| `client_request_id` | `String` |  |
| `content_type` | `String` |  |
| `continuation` | `Object` | The continuation from the previous response, sent back unchanged to get the next results. |
| `coordinates_returned` | `Boolean` |  |
| `disclosure` | `String` |  |
| `enabled` | `Boolean` |  |
| `file_sha256` | `String` |  |
| `has_more` | `Boolean` |  |
| `human_confirmation` | `Boolean` |  |
| `intent_id` | `String` |  |
| `kind` | `String` |  |
| `knowledgeVersion` | `String` |  |
| `limits` | `Hash` |  |
| `links` | `Array` |  |
| `location` | `Hash` | An opaque location reference from the website's own location controls. |
| `message` | `String` |  |
| `messages` | `Array` |  |
| `mode` | `String` | fallback: a direct search answered because the language model was unavailable. |
| `name` | `String` |  |
| `needsHuman` | `Boolean` |  |
| `policy` | `Hash` | Human schedule and separate claim-review policy. |
| `question` | `String` |  |
| `reply` | `String` |  |
| `result` | `String` |  |
| `results` | `Array` |  |
| `scan_authority_id` | `String` |  |
| `scanner` | `String` |  |
| `scanner_version` | `String` |  |
| `schema_version` | `String` |  |
| `searcher_latitude` | `Float` |  |
| `searcher_longitude` | `Float` |  |
| `signature` | `String` |  |
| `signed_in` | `Boolean` |  |
| `size_bytes` | `Float` |  |
| `subject` | `String` |  |
| `target_business_id` | `String` |  |
| `topic` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ModeratedAction record (raises on error).
moderated_action = client.ModeratedAction.load()
```

#### Example: Create

```ruby
moderated_action = client.ModeratedAction.create({
  "content_type" => "example_content_type", # String
  "file_sha256" => "example_file_sha256", # String
  "intent_id" => "example_intent_id", # String
  "messages" => [], # Array
  "question" => "example_question", # String
  "result" => "example_result", # String
  "scan_authority_id" => "example_scan_authority_id", # String
  "scanner" => "example_scanner", # String
  "scanner_version" => "example_scanner_version", # String
  "size_bytes" => 1, # Float
  "target_business_id" => "example_target_business_id", # String
})
```


### OpenApiDocument

Create an instance: `open_api_document = client.OpenApiDocument`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `components` | `Hash` |  |
| `info` | `Hash` |  |
| `openapi` | `Object` |  |
| `paths` | `Hash` |  |
| `servers` | `Array` |  |
| `tags` | `Array` |  |

#### Example: List

```ruby
# list returns an Array of OpenApiDocument entities, one per record (raises on error).
open_api_documents = client.OpenApiDocument.list
open_api_documents.each { |item| puts item.data_get }
```


### Operation

Create an instance: `operation = client.Operation`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `patch(data)` | Change part of an existing entity. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `String` |  |
| `action` | `String` |  |
| `active` | `Boolean` |  |
| `active_or_good_standing` | `Boolean` |  |
| `ai_draft_id` | `String` |  |
| `allowed_actions` | `Array` |  |
| `alt` | `String` |  |
| `amount_cents` | `Float` | Whole cents, non-zero, at most 1,000,000 either way; a promotional credit is positive. |
| `amount_off_cents` | `Float` |  |
| `api_key` | `String` |  |
| `applies_to_period` | `String` |  |
| `applies_to_tier` | `Object` |  |
| `assigned_admin_user_id` | `Object` |  |
| `assigneeId` | `String` |  |
| `assigneeLabel` | `String` |  |
| `assigneeType` | `String` |  |
| `assignee_id` | `String` |  |
| `assignee_label` | `String` |  |
| `assignee_type` | `String` | AI assignment is unavailable while the customer-support workload is disconnected. |
| `assistant_enabled` | `Boolean` |  |
| `base_url` | `String` |  |
| `body` | `String` |  |
| `businessId` | `String` |  |
| `businessName` | `String` |  |
| `business_id` | `Object` |  |
| `business_ids` | `Array` |  |
| `campaign_id` | `String` |  |
| `campaign_ids` | `Array` |  |
| `caption` | `String` |  |
| `case_status` | `String` |  |
| `catalog` | `Array` |  |
| `category` | `String` |  |
| `category_alias` | `String` |  |
| `chunk_size` | `Float` |  |
| `city` | `String` |  |
| `code` | `String` |  |
| `confidence` | `Float` |  |
| `config` | `Hash` | Complete validated pricing configuration. |
| `confirm` | `Boolean` |  |
| `confirm_admin` | `Boolean` |  |
| `confirmation` | `String` |  |
| `connection_id` | `String` |  |
| `connection_kind` | `String` |  |
| `content_type` | `String` |  |
| `context_id` | `String` |  |
| `context_type` | `String` |  |
| `createdAt` | `Object` |  |
| `created_at` | `String` |  |
| `credential_expires_at` | `String` | Expiration date printed on the license. |
| `credential_id` | `String` |  |
| `custom_wire` | `String` |  |
| `data_base64` | `String` |  |
| `decision` | `String` |  |
| `dedupe_ack` | `Boolean` |  |
| `delivery_contract` | `Hash` |  |
| `disabled_reason` | `Object` |  |
| `discount_type` | `String` |  |
| `display_name` | `String` |  |
| `disposition` | `String` |  |
| `draft` | `Hash` |  |
| `duration` | `String` |  |
| `duration_in_months` | `Object` |  |
| `email` | `String` |  |
| `enabled` | `Boolean` |  |
| `endpoint` | `Hash` |  |
| `endpoint_id` | `String` |  |
| `endpoint_url` | `String` |  |
| `ends_at` | `String` |  |
| `environment_fallback` | `Object` |  |
| `event_id` | `String` |  |
| `event_types` | `Array` |  |
| `expected_allowed_actions` | `Array` |  |
| `expected_key_id` | `String` |  |
| `expected_updated_at` | `String` |  |
| `expected_version` | `Float` |  |
| `expires_at` | `String` | Promotional credit only: ISO date-time 1 hour to 2 years ahead, disclosed to the owner. |
| `fact_id` | `String` |  |
| `facts` | `Hash` |  |
| `failure_count` | `Integer` |  |
| `fields` | `Hash` | Validated fields for this fixed content-block type. |
| `file_name` | `String` |  |
| `guideHandoffAnsweredAt` | `Object` |  |
| `guideHandoffAt` | `Object` |  |
| `guideHandoffDueAt` | `Object` |  |
| `height` | `Float` |  |
| `historic_association_checked` | `Boolean` |  |
| `hold` | `String` |  |
| `holder_name_match` | `Boolean` |  |
| `hours` | `Hash` |  |
| `id` | `String` |  |
| `idempotency_key` | `String` |  |
| `identifier_match` | `Boolean` |  |
| `in_use` | `Hash` |  |
| `instruction` | `String` |  |
| `invited` | `Boolean` |  |
| `key_check` | `Object` |  |
| `kind` | `String` |  |
| `label` | `String` |  |
| `lastMessageAt` | `Object` |  |
| `lastMessageAuthorType` | `String` |  |
| `lastMessagePreview` | `String` |  |
| `last_delivery_at` | `Object` |  |
| `last_error_code` | `Object` |  |
| `last_probe_at` | `Object` |  |
| `last_problem` | `Object` |  |
| `legal_name` | `String` |  |
| `limit` | `Float` |  |
| `make_active` | `Boolean` |  |
| `max_cents` | `Float` |  |
| `max_redemptions` | `Object` |  |
| `messages` | `Array` |  |
| `messagesTruncated` | `Boolean` |  |
| `min_cents` | `Float` |  |
| `model` | `String` |  |
| `model_id` | `String` |  |
| `name` | `String` |  |
| `note` | `String` |  |
| `notes` | `String` |  |
| `observed_at` | `String` |  |
| `one_time_display` | `Object` |  |
| `outcome` | `String` |  |
| `ownerEmail` | `String` |  |
| `ownerLastReadAt` | `Object` |  |
| `ownerName` | `String` |  |
| `ownerUserId` | `String` |  |
| `owner_reason_code` | `String` | Controlled owner-visible rejection reason. |
| `per_customer_limit` | `Float` |  |
| `percent_off` | `Float` |  |
| `phone` | `String` |  |
| `policyVersion` | `String` |  |
| `priority` | `String` |  |
| `provider` | `String` |  |
| `providers` | `Array` |  |
| `purpose_code` | `String` |  |
| `rank_bid_cents` | `Integer` |  |
| `reason` | `String` |  |
| `reason_category` | `String` |  |
| `reason_code` | `String` |  |
| `reason_detail` | `String` |  |
| `reference` | `String` |  |
| `reject_reason` | `String` |  |
| `related_case_id` | `String` |  |
| `report_id` | `Integer` |  |
| `report_ids` | `Array` |  |
| `reserve_cents` | `Float` | 100-10000; never below $1.00. |
| `resolution_note` | `String` |  |
| `review_notes` | `String` |  |
| `revision` | `Integer` |  |
| `role` | `String` |  |
| `rows` | `Array` |  |
| `run` | `Hash` |  |
| `schema_version` | `String` |  |
| `scope` | `String` |  |
| `search` | `String` |  |
| `settings` | `Hash` |  |
| `signing_secret` | `String` |  |
| `size_bytes` | `Float` |  |
| `sla_due_at` | `Object` |  |
| `source` | `String` |  |
| `source_authority` | `String` | Exact official authority name. |
| `source_category_slug` | `String` |  |
| `source_scope_checked` | `Boolean` |  |
| `source_url` | `String` | Exact HTTPS official source URL. |
| `starts_at` | `Object` |  |
| `state` | `String` | Bulk by area: every ad of the advertisers in this two-letter U.S. |
| `status` | `String` |  |
| `storage` | `String` |  |
| `street_address` | `String` |  |
| `subject` | `String` |  |
| `supportLastReadAt` | `Object` |  |
| `target_category` | `String` |  |
| `taxonomy_category_aliases` | `Array` |  |
| `ticketNumber` | `String` |  |
| `tier` | `String` |  |
| `typing` | `Boolean` |  |
| `until` | `String` |  |
| `updatedAt` | `Object` |  |
| `updated_at` | `String` |  |
| `url` | `String` | Public HTTPS receiver operated by the connecting principal or its agent runtime. |
| `valid_until` | `String` |  |
| `value` | `String` |  |
| `verification_method` | `String` |  |
| `verified_at` | `Object` |  |
| `verified_service_scope` | `Array` |  |
| `version` | `String` |  |
| `website` | `String` |  |
| `width` | `Float` |  |
| `window_hours` | `Float` | 1-744, default 48. |
| `workload` | `String` |  |
| `zip` | `String` |  |

#### Example: Create

```ruby
operation = client.Operation.create({
  "coupon_id" => "example_coupon_id", # String
  "account_id" => "example_account_id", # String
  "allowed_actions" => [], # Array
  "amount_cents" => 1, # Float
  "api_key" => "example_api_key", # String
  "assigneeId" => "example_assigneeId", # String
  "assigneeLabel" => "example_assigneeLabel", # String
  "assigneeType" => "example_assigneeType", # String
  "assistant_enabled" => true, # Boolean
  "body" => "example_body", # String
  "businessId" => "example_businessId", # String
  "businessName" => "example_businessName", # String
  "business_ids" => [], # Array
  "catalog" => [], # Array
  "code" => "example_code", # String
  "config" => {}, # Hash
  "confirmation" => "example_confirmation", # String
  "connection_id" => "example_connection_id", # String
  "connection_kind" => "example_connection_kind", # String
  "content_type" => "example_content_type", # String
  "context_id" => "example_context_id", # String
  "context_type" => "example_context_type", # String
  "createdAt" => "example_createdAt", # Object
  "created_at" => "example_created_at", # String
  "credential_id" => "example_credential_id", # String
  "data_base64" => "example_data_base64", # String
  "decision" => "example_decision", # String
  "delivery_contract" => {}, # Hash
  "disabled_reason" => "example_disabled_reason", # Object
  "discount_type" => "example_discount_type", # String
  "display_name" => "example_display_name", # String
  "disposition" => "example_disposition", # String
  "draft" => {}, # Hash
  "email" => "example_email", # String
  "enabled" => true, # Boolean
  "endpoint" => {}, # Hash
  "endpoint_id" => "example_endpoint_id", # String
  "endpoint_url" => "example_endpoint_url", # String
  "ends_at" => "example_ends_at", # String
  "environment_fallback" => "example_environment_fallback", # Object
  "event_id" => "example_event_id", # String
  "event_types" => [], # Array
  "expected_allowed_actions" => [], # Array
  "expected_key_id" => "example_expected_key_id", # String
  "expected_updated_at" => "example_expected_updated_at", # String
  "expected_version" => 1, # Float
  "fact_id" => "example_fact_id", # String
  "facts" => {}, # Hash
  "failure_count" => 1, # Integer
  "fields" => {}, # Hash
  "file_name" => "example_file_name", # String
  "historic_association_checked" => true, # Boolean
  "hold" => "example_hold", # String
  "hours" => {}, # Hash
  "id" => "example_id", # String
  "in_use" => {}, # Hash
  "invited" => true, # Boolean
  "key_check" => "example_key_check", # Object
  "kind" => "example_kind", # String
  "label" => "example_label", # String
  "lastMessageAt" => "example_lastMessageAt", # Object
  "lastMessageAuthorType" => "example_lastMessageAuthorType", # String
  "lastMessagePreview" => "example_lastMessagePreview", # String
  "last_delivery_at" => "example_last_delivery_at", # Object
  "last_error_code" => "example_last_error_code", # Object
  "last_probe_at" => "example_last_probe_at", # Object
  "last_problem" => "example_last_problem", # Object
  "make_active" => true, # Boolean
  "max_cents" => 1, # Float
  "messages" => [], # Array
  "messagesTruncated" => true, # Boolean
  "min_cents" => 1, # Float
  "model" => "example_model", # String
  "model_id" => "example_model_id", # String
  "name" => "example_name", # String
  "one_time_display" => "example_one_time_display", # Object
  "outcome" => "example_outcome", # String
  "ownerEmail" => "example_ownerEmail", # String
  "ownerLastReadAt" => "example_ownerLastReadAt", # Object
  "ownerName" => "example_ownerName", # String
  "ownerUserId" => "example_ownerUserId", # String
  "policyVersion" => "example_policyVersion", # String
  "provider" => "example_provider", # String
  "providers" => [], # Array
  "purpose_code" => "example_purpose_code", # String
  "rank_bid_cents" => 1, # Integer
  "reference" => "example_reference", # String
  "report_ids" => [], # Array
  "reserve_cents" => 1, # Float
  "resolution_note" => "example_resolution_note", # String
  "revision" => 1, # Integer
  "rows" => [], # Array
  "run" => {}, # Hash
  "schema_version" => "example_schema_version", # String
  "scope" => "example_scope", # String
  "settings" => {}, # Hash
  "signing_secret" => "example_signing_secret", # String
  "size_bytes" => 1, # Float
  "source_scope_checked" => true, # Boolean
  "storage" => "example_storage", # String
  "subject" => "example_subject", # String
  "supportLastReadAt" => "example_supportLastReadAt", # Object
  "taxonomy_category_aliases" => [], # Array
  "ticketNumber" => "example_ticketNumber", # String
  "tier" => "example_tier", # String
  "updatedAt" => "example_updatedAt", # Object
  "updated_at" => "example_updated_at", # String
  "url" => "example_url", # String
  "value" => "example_value", # String
  "verification_method" => "example_verification_method", # String
  "verified_at" => "example_verified_at", # Object
  "workload" => "example_workload", # String
})
```


### OwnerNotification

Create an instance: `owner_notification = client.OwnerNotification`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `businessId` | `String` |  |
| `createdAt` | `String` |  |
| `dedupeKey` | `String` |  |
| `emailStatus` | `String` |  |
| `eventType` | `Object` |  |
| `id` | `String` |  |
| `readAt` | `Object` |  |
| `resourceId` | `String` |  |
| `resourceKind` | `Object` |  |
| `resourceUrl` | `String` |  |
| `summary` | `String` |  |
| `webhookStatus` | `String` |  |

#### Example: Create

```ruby
owner_notification = client.OwnerNotification.create({
  "notification_id" => "example_notification_id", # String
})
```


### OwnerNotificationSetting

Create an instance: `owner_notification_setting = client.OwnerNotificationSetting`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `businessId` | `String` |  |
| `business_id` | `String` |  |
| `createdAt` | `String` |  |
| `emailEnabled` | `Boolean` |  |
| `email_enabled` | `Boolean` |  |
| `eventTypeSubscriptions` | `Array` |  |
| `event_types` | `Array` |  |
| `updatedAt` | `String` |  |
| `webhookEnabled` | `Boolean` |  |
| `webhook_enabled` | `Boolean` |  |

#### Example: Create

```ruby
owner_notification_setting = client.OwnerNotificationSetting.create({
})
```


### OwnerWebhookEndpoint

Create an instance: `owner_webhook_endpoint = client.OwnerWebhookEndpoint`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `businessId` | `String` |  |
| `createdAt` | `String` |  |
| `enabled` | `Boolean` |  |
| `eventTypeSubscriptions` | `Array` |  |
| `failureCount` | `Float` |  |
| `id` | `String` |  |
| `lastDeliveryAt` | `Object` |  |
| `updatedAt` | `String` |  |
| `url` | `String` |  |

#### Example: Create

```ruby
owner_webhook_endpoint = client.OwnerWebhookEndpoint.create({
  "webhook_id" => "example_webhook_id", # String
})
```


### OwnerWebhookRegistration

Create an instance: `owner_webhook_registration = client.OwnerWebhookRegistration`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `business_id` | `String` |  |
| `endpoint` | `Hash` |  |
| `event_types` | `Array` |  |
| `one_time_display` | `Object` |  |
| `signing_secret` | `String` |  |
| `status` | `Object` |  |
| `url` | `String` |  |

#### Example: Create

```ruby
owner_webhook_registration = client.OwnerWebhookRegistration.create({
  "url" => "example_url", # String
})
```


### Pricing

Create an instance: `pricing = client.Pricing`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `billing` | `Hash` |  |
| `branch_add_ons` | `Array` |  |
| `currency` | `Object` |  |
| `generated_at` | `String` |  |
| `neutrality` | `String` |  |
| `plans` | `Array` |  |
| `promotions` | `Array` |  |
| `published_at` | `Object` |  |
| `radius_extension` | `Hash` |  |
| `revision_id` | `Object` |  |
| `source` | `Object` |  |
| `trust_model_version` | `Object` |  |

#### Example: List

```ruby
# list returns an Array of Pricing entities, one per record (raises on error).
pricings = client.Pricing.list
pricings.each { |item| puts item.data_get }
```


### PromoteVerifiedTransaction

Create an instance: `promote_verified_transaction = client.PromoteVerifiedTransaction`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `business_id` | `String` |  |
| `evidence_id` | `String` |  |
| `interaction_id` | `String` |  |
| `ok` | `Object` |  |
| `review_upgraded` | `Boolean` |  |
| `status` | `Object` |  |
| `trust_weight` | `Object` |  |
| `verified` | `Boolean` |  |

#### Example: Create

```ruby
promote_verified_transaction = client.PromoteVerifiedTransaction.create({
  "business_id" => "example_business_id", # String
  "evidence_id" => "example_evidence_id", # String
})
```


### PublicContent

Create an instance: `public_content = client.PublicContent`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `blocks` | `Hash` |  |
| `generated_at` | `String` |  |
| `source` | `Object` |  |
| `trust_model_version` | `Object` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the PublicContent record (raises on error).
public_content = client.PublicContent.load()
```


### Recommend

Create an instance: `recommend = client.Recommend`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `candidate_window_truncated` | `Boolean` | True when Loppee's bounded candidate assembly reached its safety cap. |
| `commercial_influence` | `String` | Must be none whenever current-location or saved_exact authority is absent, including universal exact/genuine-prefix name lookup. |
| `display_count` | `Integer` | Agent-key responses: the number of businesses in this response. |
| `endpoint` | `Object` |  |
| `fallback_registry` | `Array` |  |
| `generated_at` | `String` |  |
| `has_more` | `Boolean` | True only when next_cursor can continue through the current bounded, deterministic candidate window. |
| `listed` | `Array` |  |
| `location_context` | `Object` | Local category discovery and recommendations require a current precise location proof or handoff, a user-confirmed validated destination authority, or a saved_exact Home location. |
| `ordering` | `Object` |  |
| `policy` | `String` |  |
| `presentation_guidance` | `String` | Agent-key responses: how to present these results to the customer. |
| `query` | `Hash` |  |
| `ranking_policy` | `String` |  |
| `registry_count_basis` | `String` |  |
| `registry_count_observed_at` | `Object` |  |
| `registry_name` | `Object` |  |
| `results` | `Array` |  |
| `returned_count` | `Integer` |  |
| `reviewed_registry` | `Array` |  |
| `schema_version` | `Object` |  |
| `search_intent` | `Hash` |  |
| `suggestions` | `Hash` |  |
| `total_matches` | `Integer` | Web and app responses. |
| `total_matches_basis` | `Integer` |  |
| `total_registry_records` | `Integer` |  |
| `trust_model_version` | `Object` |  |
| `verified` | `Array` |  |
| `visible_candidate_records` | `Integer` | Web and app responses. |

#### Example: List

```ruby
# list returns an Array of Recommend entities, one per record (raises on error).
recommends = client.Recommend.list
recommends.each { |item| puts item.data_get }
```


### Review

Create an instance: `review = client.Review`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `String` |  |
| `attestation_accepted` | `Boolean` | Set true only after the customer confirms this describes their own experience and explicitly approves publishing the displayed business, star rating, title, and full review. |
| `customer_confirmed` | `Boolean` | Set true to confirm you were a customer of this business. |
| `message` | `String` |  |
| `rating` | `Integer` |  |
| `service_date` | `Object` | Optional real, non-future service date in YYYY-MM-DD format; empty means not provided. |
| `subject` | `String` |  |
| `target_business_id` | `String` |  |

#### Example: Create

```ruby
review = client.Review.create({
  "account_id" => "example_account_id", # String
  "attestation_accepted" => true, # Boolean
  "message" => "example_message", # String
  "rating" => 1, # Integer
  "subject" => "example_subject", # String
  "target_business_id" => "example_target_business_id", # String
})
```


### Revoke

Create an instance: `revoke = client.Revoke`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `String` |  |
| `key_id` | `String` |  |
| `revoked_by` | `String` |  |
| `status` | `Object` |  |

#### Example: Create

```ruby
revoke = client.Revoke.create({
  "agent_key_id" => "example_agent_key_id", # String
})
```


### SaveBusiness

Create an instance: `save_business = client.SaveBusiness`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `String` |  |
| `business_id` | `String` |  |
| `business_name` | `String` |  |
| `business_source` | `String` |  |
| `category` | `String` |  |
| `city` | `String` |  |
| `created_at` | `String` |  |
| `notes` | `String` |  |
| `saved_business_id` | `String` |  |
| `state` | `String` |  |
| `status` | `Object` |  |

#### Example: Create

```ruby
save_business = client.SaveBusiness.create({
  "account_id" => "example_account_id", # String
  "business_id" => "example_business_id", # String
  "business_name" => "example_business_name", # String
  "business_source" => "example_business_source", # String
})
```


### SavedBusiness

Create an instance: `saved_business = client.SavedBusiness`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `String` |  |
| `count` | `Float` |  |
| `limit` | `Float` |  |
| `saved_businesses` | `Array` |  |

#### Example: Create

```ruby
saved_business = client.SavedBusiness.create({
  "account_id" => "example_account_id", # String
})
```


### SavedLocation

Create an instance: `saved_location = client.SavedLocation`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `available` | `Boolean` |  |
| `coordinates_returned` | `Object` |  |
| `kind` | `Object` | Only saved_exact is precise local-discovery authority. |
| `label` | `Object` |  |
| `location_proof_id` | `String` |  |
| `reach_precision` | `Object` | Exact can authorize local category/recommendation reach; coarse cannot activate local results, Sponsored placement, or impressions. |
| `saved_location_ref` | `Object` |  |
| `updated_at` | `Object` |  |
| `zip` | `String` |  |


### Search

Create an instance: `search = client.Search`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `candidate_window_truncated` | `Boolean` | True when Loppee's bounded candidate assembly reached its safety cap. |
| `commercial_influence` | `String` | Must be none whenever current-location or saved_exact authority is absent, including universal exact/genuine-prefix name lookup. |
| `display_count` | `Integer` | Agent-key responses: the number of businesses in this response. |
| `generated_at` | `String` |  |
| `has_more` | `Boolean` | True only when next_cursor can continue through the current bounded, deterministic candidate window. |
| `location_context` | `Object` | Local category discovery and recommendations require a current precise location proof or handoff, a user-confirmed validated destination authority, or a saved_exact Home location. |
| `next_cursor` | `Object` |  |
| `page_limit` | `Integer` |  |
| `policy` | `String` |  |
| `presentation_guidance` | `String` | Agent-key responses: how to present these results to the customer. |
| `query` | `Hash` |  |
| `ranking_policy` | `String` |  |
| `registry_count_basis` | `String` |  |
| `registry_count_observed_at` | `Object` |  |
| `registry_name` | `Object` |  |
| `results` | `Array` |  |
| `returned_count` | `Integer` |  |
| `schema_version` | `Object` |  |
| `search_intent` | `Hash` |  |
| `suggestions` | `Hash` |  |
| `total_matches` | `Integer` | Web and app responses. |
| `total_matches_basis` | `Integer` |  |
| `total_registry_records` | `Integer` |  |
| `trust_model_version` | `Object` |  |
| `visible_candidate_records` | `Integer` | Web and app responses. |

#### Example: List

```ruby
# list returns an Array of Search entities, one per record (raises on error).
searchs = client.Search.list
searchs.each { |item| puts item.data_get }
```


### Suggest

Create an instance: `suggest = client.Suggest`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `categories` | `Array` |  |
| `names` | `Array` |  |
| `query` | `String` |  |
| `schema_version` | `Object` |  |

#### Example: List

```ruby
# list returns an Array of Suggest entities, one per record (raises on error).
suggests = client.Suggest.list
suggests.each { |item| puts item.data_get }
```


### SupportInternalNote

Create an instance: `support_internal_note = client.SupportInternalNote`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `authorLabel` | `String` |  |
| `body` | `String` |  |
| `createdAt` | `Object` |  |
| `id` | `String` |  |

#### Example: Create

```ruby
support_internal_note = client.SupportInternalNote.create({
  "id" => "example_id", # String
  "body" => "example_body", # String
})
```


### SupportWorkflow

Create an instance: `support_workflow = client.SupportWorkflow`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `category` | `Object` |  |
| `id` | `String` |  |
| `priority` | `Object` |  |
| `waiting_on` | `Object` |  |

#### Example: Create

```ruby
support_workflow = client.SupportWorkflow.create({
  "id" => "example_id", # String
})
```


### TaxonomySuggestion

Create an instance: `taxonomy_suggestion = client.TaxonomySuggestion`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alias` | `String` |  |
| `path_titles` | `Array` |  |
| `title` | `String` |  |

#### Example: List

```ruby
# list returns an Array of TaxonomySuggestion entities, one per record (raises on error).
taxonomy_suggestions = client.TaxonomySuggestion.list
taxonomy_suggestions.each { |item| puts item.data_get }
```


### TrustCard

Create an instance: `trust_card = client.TrustCard`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agency` | `String` |  |
| `collected_at` | `String` |  |
| `disclosure` | `String` |  |
| `fact_id` | `String` |  |
| `matched_on` | `String` |  |
| `reason` | `String` |  |
| `record_kind` | `String` |  |
| `record_number` | `Object` |  |
| `record_scope` | `String` |  |
| `record_type` | `String` |  |
| `recorded_expiry` | `Object` |  |
| `result` | `String` |  |
| `source_label` | `String` |  |
| `source_url` | `String` |  |
| `state` | `String` |  |
| `status_on_record` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the TrustCard record (raises on error).
trust_card = client.TrustCard.load({ "schema_name" => "schema_name" })
```

#### Example: List

```ruby
# list returns an Array of TrustCard entities, one per record (raises on error).
trust_cards = client.TrustCard.list({ "business_id" => "example" })
trust_cards.each { |item| puts item.data_get }
```

#### Example: Create

```ruby
trust_card = client.TrustCard.create({
  "business_id" => "example_business_id", # String
  "license_record_id" => "example_license_record_id", # String
})
```


### UnsaveBusiness

Create an instance: `unsave_business = client.UnsaveBusiness`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `String` |  |
| `business_id` | `String` |  |
| `removed` | `Boolean` |  |
| `status` | `Object` |  |

#### Example: Create

```ruby
unsave_business = client.UnsaveBusiness.create({
  "account_id" => "example_account_id", # String
  "business_id" => "example_business_id", # String
})
```


### UpdateAgentBillingAccount

Create an instance: `update_agent_billing_account = client.UpdateAgentBillingAccount`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `String` |  |
| `billing_account` | `Hash` |  |
| `billing_status` | `String` |  |
| `included_actions` | `Float` |  |
| `monthly_fee_cents` | `Float` |  |
| `overage_cents` | `Float` |  |
| `plan` | `String` |  |
| `status` | `Object` |  |
| `updated_by` | `String` |  |

#### Example: Create

```ruby
update_agent_billing_account = client.UpdateAgentBillingAccount.create({
  "account_id" => "example_account_id", # String
})
```


### WithdrawJobApplication

Create an instance: `withdraw_job_application = client.WithdrawJobApplication`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `String` |  |
| `already_withdrawn` | `Boolean` |  |
| `application` | `Hash` |  |
| `application_id` | `String` |  |
| `status` | `Object` |  |

#### Example: Create

```ruby
withdraw_job_application = client.WithdrawJobApplication.create({
  "account_id" => "example_account_id", # String
  "application_id" => "example_application_id", # String
})
```

## Features

This SDK ships 4 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`ratelimit`](#ratelimit) | Rate limiting |
| [`retry`](#retry) | Retry |
| [`test`](#test) | Test transport |
| [`timeout`](#timeout) | Timeout |

> **Order matters for `ratelimit`, `retry`, `timeout`.** These wrap the
> transport, so each one wraps whatever is already installed: the order you
> activate them in IS the nesting order. Activating them as an ordered list
> rather than a map is what fixes that order.

### ratelimit

Rate limiting.

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

Set `feature.ratelimit.active` to enable it, then override any of the options above.

`ratelimit` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### retry

Retry.

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

Set `feature.retry.active` to enable it, then override any of the options above.

`retry` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### test

Test transport.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.

### timeout

Timeout.

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

Set `feature.timeout.active` to enable it, then override any of the options above.

`timeout` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.


## Open types

5 fields are carried as open values rather than typed structures.
This follows from the API definition, not from a gap in this SDK: the
definition describes them with untagged unions —
`oneOf`/`anyOf` branches with no `discriminator` — so it never states which
variant a given value is. Nothing can select a branch reliably, so the SDK
passes the value through unchanged rather than assert a shape the API does not
guarantee.

| Entity | Field | Variants | Nesting |
| --- | --- | --- | --- |
| `search` | `results` | 10 | 7 levels |
| `recommend` | `results` | 8 | 7 levels |
| `recommend` | `reviewed_registry` | 6 | 1 level |
| `customer_account` | `actions` | 4 | 1 level |
| `customer_account` | `binding` | 3 | 0 levels |

These values round-trip unchanged — read them, modify them, send them back. If
the API adds a `discriminator` to the definition, regenerating will type them.
Every other field is typed normally.

## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is a Ruby class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **RatelimitFeature**: Rate limiting
- **RetryFeature**: Retry
- **TestFeature**: Test transport
- **TimeoutFeature**: Timeout

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as hashes

The Ruby SDK uses plain Ruby hashes throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers.to_map()` to safely validate that a value is a hash.

### Module structure

```
rb/
├── LoppeeBusiness_sdk.rb       -- Main SDK module
├── config.rb                  -- Configuration
├── schema.rb                  -- Generated option + entity specs
├── features.rb                -- Feature factory
├── core/                      -- Core types and context
├── entity/                    -- Entity implementations
├── feature/                   -- Built-in features (Base, Test, Log)
├── utility/                   -- Utility functions and struct library
└── test/                      -- Test suites
```

The main module (`LoppeeBusiness_sdk`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```ruby
agentcapability = client.AgentCapability
agentcapability.load()

# agentcapability.data_get now returns the agentcapability data from the last load
# agentcapability.match_get returns the last match criteria
```

Call `make` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
