# LoppeeBusiness Lua SDK



The Lua SDK for the LoppeeBusiness API — an entity-oriented client using Lua conventions.

It exposes the API as capitalised, semantic **Entities** — e.g. `client:AgentAccess()` — each with the same small set of operations (`list`, `load`, `create`, `update`, `patch`, `remove`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to LuaRocks. Install it from the
GitHub release tag (`lua/vX.Y.Z`, see [Tags](https://github.com/voxgig-sdk/loppee-business-sdk/tags)),
or add the source directory to your `LUA_PATH`:

```bash
export LUA_PATH="path/to/lua/?.lua;path/to/lua/?/init.lua;;"
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record. The client sends the API key in the `X-LOPPEE-API-Key` header.

### 1. Create a client

```lua
local sdk = require("loppee-business_sdk")

local client = sdk.new({
  apikey = os.getenv("LOPPEE_BUSINESS_APIKEY"),
})
```

### 4. Create, update, and remove

```lua
-- Create
local created, err = client:AgentAccess():create({ agent_name = "example_agent_name", developer_email = "example_developer_email", organization_name = "example_organization_name" })
if err then error(err) end

```


## Error handling

Entity operations return `(value, err)`. Check `err` before using
the value:

```lua
local agentcapability, err = client:AgentCapability():load()
if err then error(err) end
```

`direct` follows the same `(value, err)` convention:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example_id" },
})
if err then error(err) end
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
if err then error(err) end

if result["ok"] then
  print(result["status"])  -- 200
  print(result["data"])    -- response body
end
```

### Prepare a request without sending it

```lua
local fetchdef, err = client:prepare({
  path = "/api/resource/{id}",
  method = "DELETE",
  params = { id = "example" },
})
if err then error(err) end

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```lua
local client = sdk.test()

local result, err = client:AgentCapability():load()
-- result is the entity; data_get() reads its mock record; err is set on failure
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```lua
local function mock_fetch(url, init)
  return {
    status = 200,
    statusText = "OK",
    headers = {},
    json = function()
      return { id = "mock01" }
    end,
  }, nil
end

local client = sdk.new({
  base = "http://localhost:8080",
  system = {
    fetch = mock_fetch,
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
cd lua && busted test/
```


## Reference

### LoppeeBusinessSDK

```lua
local sdk = require("loppee-business_sdk")
local client = sdk.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `table` | Feature activation flags. |
| `extend` | `table` | Additional Feature instances to load. |
| `system` | `table` | System overrides (e.g. custom `fetch` function). |

### test

```lua
local client = sdk.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### LoppeeBusinessSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> table` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> table, err` | Build an HTTP request definition without sending. |
| `direct` | `(fetchargs) -> table, err` | Build and send an HTTP request. |
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
| `load` | `(reqmatch, ctrl) -> any, err` | Load a single entity by match criteria, and return it. |
| `list` | `(reqmatch, ctrl) -> any, err` | List entities matching the criteria, one per record. |
| `create` | `(reqdata, ctrl) -> any, err` | Create a new entity, and return it. |
| `update` | `(reqdata, ctrl) -> any, err` | Update an existing entity, and return it. |
| `patch` | `(reqdata, ctrl) -> any, err` | Change part of an existing entity, and return it. |
| `remove` | `(reqmatch, ctrl) -> any, err` | Remove an entity, and return it marked as deleted. |
| `data_get` | `() -> table` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> table` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> string` | Return the entity name. |

### Result shape

Entity operations return `(value, err)`. The `value` is the entity
itself — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `load` / `create` / `update` / `patch` / `remove` | the entity, whose `data_get()` reads its record (a `table`) |
| `list` | an array (`table`) of entities, one per record |

Check `err` first (it is non-`nil` on failure), then use `value`:

    local agent_capability, err = client:AgentCapability():load()
    if err then error(err) end
    -- agent_capability is the loaded entity

Only `direct()` returns a response envelope — a `table` with `ok`,
`status`, `headers`, and `data` keys.

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

Create an instance: `local agent_access = client:AgentAccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_name` | `string` |  |
| `agent_type` | `string` |  |
| `callback_url` | `string` |  |
| `compliance_notes` | `string` |  |
| `created_at` | `string` |  |
| `data_needs` | `string` |  |
| `developer_email` | `string` |  |
| `operating_states` | `table` |  |
| `organization_name` | `string` |  |
| `request_id` | `string` |  |
| `request_status` | `string` |  |
| `requested_actions` | `table` |  |
| `safety_contact` | `string` |  |
| `status` | `any` |  |
| `target_categories` | `table` |  |
| `use_case` | `string` |  |
| `website` | `string` |  |

#### Example: Create

```lua
local agent_access, err = client:AgentAccess():create({
  agent_name = "example_agent_name", -- string
  developer_email = "example_developer_email", -- string
  organization_name = "example_organization_name", -- string
})
```


### AgentCapability

Create an instance: `local agent_capability = client:AgentCapability(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_phone_location_bridge` | `table` |  |
| `agent_rules` | `table` |  |
| `discovery` | `table` |  |
| `external_agent_access` | `table` |  |
| `external_agent_webhooks` | `table` |  |
| `local_discovery_location_policy` | `table` |  |
| `location_choices` | `table` |  |
| `registry_name` | `any` |  |
| `schema_version` | `any` |  |
| `trust_model_version` | `any` |  |

#### Example: Load

```lua
local agent_capability, err = client:AgentCapability():load()
```


### AgentConnectionTest

Create an instance: `local agent_connection_test = client:AgentConnectionTest(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `key` | `string` | Optional UI fallback. |

#### Example: Create

```lua
local agent_connection_test, err = client:AgentConnectionTest():create({
})
```


### AgentIntegration

Create an instance: `local agent_integration = client:AgentIntegration(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_model` | `table` |  |
| `commercial_influence` | `table` |  |
| `developer_docs_url` | `string` |  |
| `exposure_tiers` | `table` |  |
| `external_agent_access` | `table` |  |
| `generated_at` | `string` |  |
| `http_api` | `table` |  |
| `legal` | `table` |  |
| `mcp` | `table` |  |
| `mcp_client_example_url` | `string` |  |
| `monitoring_url` | `string` |  |
| `openapi_url` | `string` |  |
| `openapi_v1_url` | `string` |  |
| `operational_rules` | `table` |  |
| `owner_agent_notifications` | `table` |  |
| `package_url` | `string` |  |
| `public_base_url` | `string` |  |
| `rate_limits` | `table` |  |
| `registry_name` | `any` |  |
| `schema_version` | `string` |  |
| `trust_card_contract` | `table` |  |
| `trust_doctrine` | `table` |  |

#### Example: List

```lua
local agent_integrations, err = client:AgentIntegration():list()
```


### AgentMonitoring

Create an instance: `local agent_monitoring = client:AgentMonitoring(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `build_sha` | `string` |  |
| `contract_version` | `string` |  |
| `generated_at` | `string` |  |
| `health_url` | `string` |  |
| `integration_package_url` | `string` |  |
| `mcp_url` | `string` |  |
| `metrics` | `table` |  |
| `openapi_url` | `string` |  |
| `rate_limits` | `table` |  |
| `registry_name` | `any` |  |
| `schema_version` | `string` |  |
| `service` | `string` |  |
| `uptime_seconds` | `number` |  |
| `version` | `string` |  |

#### Example: Load

```lua
local agent_monitoring, err = client:AgentMonitoring():load()
```


### AgentOpenapi

Create an instance: `local agent_openapi = client:AgentOpenapi(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `components` | `table` |  |
| `info` | `table` |  |
| `openapi` | `any` |  |
| `paths` | `table` |  |
| `servers` | `table` |  |
| `tags` | `table` |  |

#### Example: List

```lua
local agent_openapis, err = client:AgentOpenapi():list()
```


### AgentPolicy

Create an instance: `local agent_policy = client:AgentPolicy(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `external_agent_access` | `table` |  |
| `external_agent_webhooks` | `table` |  |
| `local_discovery_location_policy` | `table` |  |
| `location_handoff_flow` | `table` |  |
| `payment` | `table` |  |
| `publication` | `table` |  |
| `schema_version` | `any` |  |
| `trust_model_version` | `any` |  |
| `verification` | `table` |  |

#### Example: Load

```lua
local agent_policy, err = client:AgentPolicy():load()
```


### AnonymousLocationProofRevocation

Create an instance: `local anonymous_location_proof_revocation = client:AnonymousLocationProofRevocation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accuracy_meters` | `number` |  |
| `captured_at` | `string` |  |
| `latitude` | `number` |  |
| `longitude` | `number` |  |

#### Example: Create

```lua
local anonymous_location_proof_revocation, err = client:AnonymousLocationProofRevocation():create({
  accuracy_meters = 1, -- number
  captured_at = "example_captured_at", -- string
  latitude = 1, -- number
  longitude = 1, -- number
})
```


### BusinessApplication

Create an instance: `local business_application = client:BusinessApplication(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `application` | `table` |  |
| `application_id` | `string` |  |
| `business_id` | `string` |  |
| `claim_id` | `string|nil` |  |
| `created_at` | `string` |  |
| `existing_business` | `boolean` |  |
| `files` | `table` |  |
| `listing_id` | `string` |  |
| `pipeline_status` | `string` |  |
| `status` | `any` |  |
| `trust_model_version` | `any` |  |
| `uploaded_files` | `number` |  |

#### Example: Create

```lua
local business_application, err = client:BusinessApplication():create({
  application = {}, -- table
})
```


### BusinessClaim

Create an instance: `local business_claim = client:BusinessClaim(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `business_id` | `string|nil` |  |
| `category` | `string` |  |
| `city` | `string` |  |
| `claim_id` | `string` |  |
| `claim_status` | `string` |  |
| `claimant_email` | `string` | Legacy field; authenticated owner identity wins. |
| `claimant_name` | `string` | Legacy field; authenticated owner identity wins. |
| `claimant_relationship` | `string` |  |
| `created_at` | `string` |  |
| `directory_listing_id` | `string|nil` |  |
| `display_name` | `string` |  |
| `listing_id` | `string` |  |
| `notes` | `string` |  |
| `phone` | `string` |  |
| `source` | `string` |  |
| `source_type` | `string` |  |
| `source_url` | `string` |  |
| `state` | `string` |  |
| `status` | `any` |  |
| `verification` | `table` |  |
| `website` | `string` |  |

#### Example: Create

```lua
local business_claim, err = client:BusinessClaim():create({
  display_name = "example_display_name", -- string
})
```


### BusinessDeal

Create an instance: `local business_deal = client:BusinessDeal(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `string` |  |
| `description` | `string` |  |
| `discountLabel` | `string` |  |
| `endsAt` | `string|nil` |  |
| `id` | `string` |  |
| `promoCode` | `string|nil` |  |
| `startsAt` | `string|nil` |  |
| `terms` | `string|nil` |  |
| `title` | `string` |  |

#### Example: List

```lua
local business_deals, err = client:BusinessDeal():list({ id = "example" })
```


### BusinessIndex

Create an instance: `local business_index = client:BusinessIndex(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `brand_assets` | `any` |  |
| `business_id` | `string` |  |
| `category` | `string` |  |
| `city` | `string` |  |
| `display_name` | `string` |  |
| `domain` | `string|nil` |  |
| `insurance` | `table` |  |
| `phone` | `string|nil` |  |
| `public_profile_url` | `string` |  |
| `review_reputation` | `table` |  |
| `state` | `string` |  |
| `street_address` | `string|nil` | Owner-published street address where authorized. |
| `trust_card_url` | `string` |  |
| `trust_model_version` | `any` |  |
| `verification_class` | `string` |  |
| `verification_disclosure` | `string` |  |
| `website` | `string|nil` |  |
| `zip` | `string|nil` | Owner-published postal code where authorized. |

#### Example: List

```lua
local business_indexs, err = client:BusinessIndex():list()
```


### BusinessOwner

Create an instance: `local business_owner = client:BusinessOwner(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `string` |  |
| `account_role` | `string` |  |
| `acknowledge_data_effects` | `boolean` |  |
| `actions` | `table` |  |
| `allowed_actions` | `table` |  |
| `amount_cents` | `number` | Within the top-up limits (default $25 to $5,000). |
| `applicant_location_requirements` | `string` |  |
| `apply_url` | `string|nil` |  |
| `asset_id` | `string` |  |
| `assigneeId` | `string` |  |
| `assigneeLabel` | `string` |  |
| `assigneeType` | `string` |  |
| `attempt_id` | `string` |  |
| `benefits` | `string` |  |
| `body` | `string` |  |
| `businessId` | `string` |  |
| `businessName` | `string` |  |
| `business_id` | `string` |  |
| `campaign` | `table` |  |
| `campaign_id` | `string` |  |
| `carrier_name` | `string` |  |
| `category` | `string` |  |
| `category_alias` | `string` |  |
| `category_aliases` | `table` |  |
| `change` | `table` |  |
| `city` | `string` |  |
| `client_message_id` | `string` |  |
| `code` | `string` |  |
| `compensation_text` | `string` |  |
| `confirm` | `boolean` |  |
| `confirmation` | `string` |  |
| `connection_kind` | `string` |  |
| `consent_sha256` | `string` | SHA-256 of the acceptance text shown (from payment-authorizations). |
| `contact_email` | `string|nil` |  |
| `content_type` | `string` |  |
| `country` | `string` |  |
| `coupon_code` | `string` |  |
| `createdAt` | `string|nil` |  |
| `created_at` | `string` |  |
| `credential_id` | `string` |  |
| `credential_identifier` | `string` |  |
| `data_base64` | `string` |  |
| `delivery_contract` | `table` |  |
| `description` | `string|nil` |  |
| `direct_apply` | `boolean` |  |
| `disabled_reason` | `string|nil` |  |
| `discount_label` | `string` |  |
| `display_name` | `string` |  |
| `employment_type` | `string` |  |
| `enabled` | `boolean` |  |
| `endpoint` | `table` |  |
| `endpoint_id` | `string` |  |
| `endpoint_url` | `string` |  |
| `ends_at` | `string|nil` |  |
| `event_id` | `string` |  |
| `event_types` | `table` |  |
| `evidence_observed_at` | `string` |  |
| `expected_updated_at` | `string` |  |
| `experience_level` | `string` |  |
| `expires_at` | `string` |  |
| `factor_id` | `string` |  |
| `failure_count` | `number` |  |
| `file_name` | `string` |  |
| `file_sha256` | `string` |  |
| `full_name` | `string` |  |
| `guideHandoffAnsweredAt` | `string|nil` |  |
| `guideHandoffAt` | `string|nil` |  |
| `guideHandoffDueAt` | `string|nil` |  |
| `hours` | `table|nil` |  |
| `id` | `string` |  |
| `idempotency_key` | `string` |  |
| `installation_id` | `string` |  |
| `issuer` | `string` |  |
| `jurisdiction` | `string` |  |
| `kind` | `string` |  |
| `label` | `string` |  |
| `lastMessageAt` | `string|nil` |  |
| `lastMessageAuthorType` | `string` |  |
| `lastMessagePreview` | `string` |  |
| `last_delivery_at` | `string|nil` |  |
| `launch` | `boolean` |  |
| `license_number` | `string` |  |
| `messages` | `table` |  |
| `messagesTruncated` | `boolean` |  |
| `monthly_cap_cents` | `number` |  |
| `name` | `string` |  |
| `note` | `string` |  |
| `one_time_display` | `any` |  |
| `ownerEmail` | `string` |  |
| `ownerLastReadAt` | `string|nil` |  |
| `ownerName` | `string` |  |
| `ownerUserId` | `string` |  |
| `period` | `string` |  |
| `phone` | `string` |  |
| `platform` | `string` |  |
| `policy_number` | `string` |  |
| `postal_code` | `string` |  |
| `promo_code` | `string|nil` |  |
| `push_token` | `string` |  |
| `radius_miles` | `number` |  |
| `reason` | `string` |  |
| `reason_category` | `string` |  |
| `reason_detail` | `string` |  |
| `registered_at` | `string` |  |
| `request_id` | `string` | Client id of this confirmation (8-100 characters); reuse it only to retry the same confirmation. |
| `requested_at` | `string` |  |
| `salary_currency` | `string` |  |
| `salary_max` | `number|nil` |  |
| `salary_min` | `number|nil` |  |
| `salary_period` | `string` |  |
| `save_card` | `boolean` |  |
| `save_card_consent_sha256` | `string` | Only with save_card true: SHA-256 of the save-card consent text shown. |
| `schedule` | `string` |  |
| `service_areas` | `string` |  |
| `signing_secret` | `string` |  |
| `size_bytes` | `number` |  |
| `skills` | `table` |  |
| `source_url` | `string` |  |
| `starts_at` | `string|nil` |  |
| `state` | `string` |  |
| `stated_expires_at` | `string` |  |
| `status` | `string` |  |
| `street_address` | `string` |  |
| `subject` | `string` |  |
| `submitted_identifier` | `string` |  |
| `supportLastReadAt` | `string|nil` |  |
| `terms` | `string|nil` |  |
| `terms_version` | `string` | Must be the current Advertiser Terms version. |
| `threshold_cents` | `number` |  |
| `ticketNumber` | `string` |  |
| `tier` | `string` |  |
| `title` | `string` |  |
| `total_job_openings` | `number|nil` |  |
| `typing` | `boolean` |  |
| `updatedAt` | `string|nil` |  |
| `updated_at` | `string` |  |
| `url` | `string` | Public HTTPS receiver operated by the connecting principal or its agent runtime. |
| `website` | `string` |  |
| `workplace_type` | `string` |  |
| `zip` | `string` |  |

#### Example: Create

```lua
local business_owner, err = client:BusinessOwner():create({
  deal_id = "example_deal_id", -- string
  account_id = "example_account_id", -- string
  account_role = "example_account_role", -- string
  acknowledge_data_effects = true, -- boolean
  actions = {}, -- table
  allowed_actions = {}, -- table
  amount_cents = 1, -- number
  asset_id = "example_asset_id", -- string
  assigneeId = "example_assigneeId", -- string
  assigneeLabel = "example_assigneeLabel", -- string
  assigneeType = "example_assigneeType", -- string
  attempt_id = "example_attempt_id", -- string
  body = "example_body", -- string
  businessId = "example_businessId", -- string
  businessName = "example_businessName", -- string
  campaign = {}, -- table
  campaign_id = "example_campaign_id", -- string
  category_aliases = {}, -- table
  change = {}, -- table
  city = "example_city", -- string
  client_message_id = "example_client_message_id", -- string
  code = "example_code", -- string
  confirmation = "example_confirmation", -- string
  connection_kind = "example_connection_kind", -- string
  consent_sha256 = "example_consent_sha256", -- string
  content_type = "example_content_type", -- string
  createdAt = "example_createdAt", -- string|nil
  created_at = "example_created_at", -- string
  credential_id = "example_credential_id", -- string
  credential_identifier = "example_credential_identifier", -- string
  data_base64 = "example_data_base64", -- string
  delivery_contract = {}, -- table
  disabled_reason = "example_disabled_reason", -- string|nil
  discount_label = "example_discount_label", -- string
  display_name = "example_display_name", -- string
  enabled = true, -- boolean
  endpoint = {}, -- table
  endpoint_id = "example_endpoint_id", -- string
  endpoint_url = "example_endpoint_url", -- string
  event_id = "example_event_id", -- string
  event_types = {}, -- table
  expected_updated_at = "example_expected_updated_at", -- string
  factor_id = "example_factor_id", -- string
  failure_count = 1, -- number
  file_name = "example_file_name", -- string
  file_sha256 = "example_file_sha256", -- string
  id = "example_id", -- string
  installation_id = "example_installation_id", -- string
  issuer = "example_issuer", -- string
  kind = "example_kind", -- string
  lastMessageAt = "example_lastMessageAt", -- string|nil
  lastMessageAuthorType = "example_lastMessageAuthorType", -- string
  lastMessagePreview = "example_lastMessagePreview", -- string
  last_delivery_at = "example_last_delivery_at", -- string|nil
  license_number = "example_license_number", -- string
  messages = {}, -- table
  messagesTruncated = true, -- boolean
  name = "example_name", -- string
  one_time_display = "example_one_time_display", -- any
  ownerEmail = "example_ownerEmail", -- string
  ownerLastReadAt = "example_ownerLastReadAt", -- string|nil
  ownerName = "example_ownerName", -- string
  ownerUserId = "example_ownerUserId", -- string
  phone = "example_phone", -- string
  platform = "example_platform", -- string
  push_token = "example_push_token", -- string
  radius_miles = 1, -- number
  reason = "example_reason", -- string
  registered_at = "example_registered_at", -- string
  request_id = "example_request_id", -- string
  requested_at = "example_requested_at", -- string
  save_card = true, -- boolean
  signing_secret = "example_signing_secret", -- string
  size_bytes = 1, -- number
  state = "example_state", -- string
  street_address = "example_street_address", -- string
  supportLastReadAt = "example_supportLastReadAt", -- string|nil
  terms_version = "example_terms_version", -- string
  ticketNumber = "example_ticketNumber", -- string
  tier = "example_tier", -- string
  title = "example_title", -- string
  updatedAt = "example_updatedAt", -- string|nil
  updated_at = "example_updated_at", -- string
  url = "example_url", -- string
  website = "example_website", -- string
})
```


### BusinessReview

Create an instance: `local business_review = client:BusinessReview(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```lua
local business_review, err = client:BusinessReview():load({ id = "business_review_id" })
```


### ChatAttachment

Create an instance: `local chat_attachment = client:ChatAttachment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `byteSize` | `number` |  |
| `content_type` | `any` |  |
| `data_base64` | `string` |  |
| `fileName` | `string` |  |
| `file_name` | `string` |  |
| `id` | `string` |  |
| `mediaType` | `string` |  |
| `size_bytes` | `number` |  |

#### Example: Create

```lua
local chat_attachment, err = client:ChatAttachment():create({
  conversation_id = "example_conversation_id", -- string
  content_type = "example_content_type", -- any
  data_base64 = "example_data_base64", -- string
  file_name = "example_file_name", -- string
  size_bytes = 1, -- number
})
```


### ChatAttachmentUrl

Create an instance: `local chat_attachment_url = client:ChatAttachmentUrl(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `byte_size` | `number` |  |
| `expires_in_seconds` | `any` |  |
| `file_name` | `string` |  |
| `id` | `string` |  |
| `media_type` | `string` |  |
| `signed_url` | `string` |  |

#### Example: Create

```lua
local chat_attachment_url, err = client:ChatAttachmentUrl():create({
  attachment_id = "example_attachment_id", -- string
  conversation_id = "example_conversation_id", -- string
})
```


### ClaimVerificationSend

Create an instance: `local claim_verification_send = client:ClaimVerificationSend(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `challenge_id` | `string` | Opaque v3 SMS or owner-email challenge UUID. |
| `channel` | `any` |  |
| `claim_id` | `string` |  |
| `destination_hint` | `string` |  |
| `expires_in_seconds` | `number` |  |
| `provider_status` | `any` | V3 provider request state. |
| `recipient_delivery_confirmed` | `any` | V3 currently has no final-delivery provider event for this receipt. |
| `request_id` | `string` | Caller-generated idempotency UUID. |
| `status` | `any` |  |

#### Example: Create

```lua
local claim_verification_send, err = client:ClaimVerificationSend():create({
  claim_id = "example_claim_id", -- string
})
```


### ClaimVerificationVerify

Create an instance: `local claim_verification_verify = client:ClaimVerificationVerify(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `business_id` | `string|nil` |  |
| `challenge_id` | `string` | Exact challenge UUID returned by the v3 SMS or owner-email send. |
| `channel` | `any` |  |
| `claim_id` | `string` |  |
| `code` | `string` |  |
| `method` | `any` |  |
| `publication` | `table` |  |
| `status` | `any` |  |
| `transfer_review_required` | `any` |  |
| `trust_model_version` | `any` |  |

#### Example: Create

```lua
local claim_verification_verify, err = client:ClaimVerificationVerify():create({
  claim_id = "example_claim_id", -- string
  code = "example_code", -- string
})
```


### CommercialClick

Create an instance: `local commercial_click = client:CommercialClick(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action_type` | `any` |  |
| `ad_receipt` | `string` | Opaque server-signed receipt of a served Sponsored ad, sent back unchanged with a profile, website or call tap. |
| `billable` | `boolean` |  |
| `billing_event_id` | `string|nil` |  |
| `billing_status` | `string` |  |
| `business_id` | `string` |  |
| `category` | `string` |  |
| `city` | `string` |  |
| `click_id` | `string` |  |
| `commercial_status` | `any` |  |
| `created_at` | `string` |  |
| `directory_listing_id` | `string` | Deprecated alias of listing_id. |
| `display_name` | `string` |  |
| `fallback_interaction_id` | `string` |  |
| `ledger_status` | `string` |  |
| `listing_id` | `string` |  |
| `metadata` | `table` |  |
| `migration_required` | `boolean` |  |
| `page_path` | `string` |  |
| `referrer` | `string` |  |
| `source_type` | `any` |  |
| `state` | `string` |  |
| `status` | `any` |  |
| `storage` | `any` |  |
| `surface` | `any` | Where the Sponsored ad was shown (with ad_receipt). |
| `target_url` | `string` |  |

#### Example: Create

```lua
local commercial_click, err = client:CommercialClick():create({
  action_type = "example_action_type", -- any
  source_type = "example_source_type", -- any
})
```


### ContactRecorded

Create an instance: `local contact_recorded = client:ContactRecorded(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `business_id` | `string` |  |
| `contact_recorded` | `any` |  |
| `interaction_id` | `string` |  |
| `ok` | `any` |  |
| `policy` | `string` |  |
| `review_upgraded` | `any` |  |
| `status` | `any` |  |
| `trust_weight` | `any` |  |
| `verified` | `boolean` |  |

#### Example: Create

```lua
local contact_recorded, err = client:ContactRecorded():create({
  business_id = "example_business_id", -- string
})
```


### Conversation

Create an instance: `local conversation = client:Conversation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `string` |  |
| `conversation_id` | `string` | Exact conversation referenced by a webhook; returns zero or one scoped thread. |
| `conversations` | `table` |  |
| `count` | `number` |  |
| `cursor` | `string` | Opaque pagination cursor returned by the previous page. |
| `limit` | `number` |  |
| `pagination` | `table` |  |

#### Example: Create

```lua
local conversation, err = client:Conversation():create({
  account_id = "example_account_id", -- string
})
```


### ConversationClose

Create an instance: `local conversation_close = client:ConversationClose(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `closed_at` | `string` |  |
| `conversation_id` | `string` |  |
| `id` | `string` |  |
| `status` | `any` |  |

#### Example: Create

```lua
local conversation_close, err = client:ConversationClose():create({
  id = "example_id", -- string
})
```


### ConversationReport

Create an instance: `local conversation_report = client:ConversationReport(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `detail` | `string` |  |
| `id` | `string` |  |
| `reason` | `any` |  |
| `status` | `any` |  |

#### Example: Create

```lua
local conversation_report, err = client:ConversationReport():create({
  id = "example_id", -- string
  reason = "example_reason", -- any
})
```


### ConversationWorkflow

Create an instance: `local conversation_workflow = client:ConversationWorkflow(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `priority` | `any` |  |
| `status` | `any` |  |

#### Example: Create

```lua
local conversation_workflow, err = client:ConversationWorkflow():create({
  message_id = "example_message_id", -- string
})
```


### CreateAgentApiKey

Create an instance: `local create_agent_api_key = client:CreateAgentApiKey(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `string` |  |
| `allowed_actions` | `table` |  |
| `allowed_business_ids` | `table` |  |
| `created_by` | `string` |  |
| `key` | `table` |  |
| `label` | `string` |  |
| `monthly_quota` | `number` |  |
| `notes` | `string` |  |
| `one_time_display` | `any` |  |
| `rate_limit_per_minute` | `number` |  |
| `raw_key` | `string` |  |
| `status` | `any` |  |

#### Example: Create

```lua
local create_agent_api_key, err = client:CreateAgentApiKey():create({
  account_id = "example_account_id", -- string
})
```


### Customer

Create an instance: `local customer = client:Customer(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_provider` | `string` |  |
| `avatar_url` | `string|nil` | Short-lived signed display URL for a private avatar object, or null. |
| `city` | `string|nil` |  |
| `created_at` | `string|nil` |  |
| `email` | `string` |  |
| `full_name` | `string` |  |
| `id` | `string` |  |
| `phone` | `string|nil` |  |
| `search_category` | `string` |  |
| `service_need` | `string` |  |
| `state` | `string|nil` |  |
| `status` | `any` |  |
| `updated_at` | `string|nil` |  |

#### Example: Create

```lua
local customer, err = client:Customer():create({
})
```


### CustomerAccount

Create an instance: `local customer_account = client:CustomerAccount(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `string` |  |
| `account_role` | `string` |  |
| `accuracy_meters` | `number` |  |
| `acknowledge_data_effects` | `boolean` |  |
| `actions` | `table` |  |
| `agent_key_id` | `string` |  |
| `agent_receives_coordinates` | `boolean` |  |
| `all_paused` | `boolean` |  |
| `app_attest_registered` | `boolean` |  |
| `assertion` | `string` |  |
| `attestation` | `string` |  |
| `author_label` | `string` |  |
| `author_type` | `string` |  |
| `binding` | `any` |  |
| `body` | `string` |  |
| `business_id` | `string|nil` |  |
| `capture_source` | `any` |  |
| `captured_at` | `string` |  |
| `challenge` | `string` |  |
| `challenge_id` | `string` |  |
| `client_message_id` | `string` |  |
| `completed` | `boolean` |  |
| `confirmation` | `string` |  |
| `connection_id` | `string` |  |
| `connection_kind` | `string` |  |
| `continuation` | `any` | The continuation from the previous response, sent back unchanged to get the next results. |
| `coordinates_returned` | `boolean` |  |
| `created_at` | `string` |  |
| `credential_id` | `string` |  |
| `declined` | `boolean` |  |
| `delivery_contract` | `table` |  |
| `disabled_reason` | `string|nil` |  |
| `disclosure` | `string` |  |
| `enabled` | `boolean` |  |
| `endpoint` | `table` |  |
| `endpoint_id` | `string` |  |
| `endpoint_url` | `string` |  |
| `environment` | `string` |  |
| `event_id` | `string` |  |
| `event_types` | `table` |  |
| `failure_count` | `number` |  |
| `handoff_id` | `string` |  |
| `has_more` | `boolean` |  |
| `id` | `string` |  |
| `idempotent_replay` | `boolean` |  |
| `installation_id` | `string` |  |
| `key_id` | `string` |  |
| `last_delivery_at` | `string|nil` |  |
| `latitude` | `number` |  |
| `location` | `any` | An opaque location reference from the website's own location controls. |
| `longitude` | `number` |  |
| `message_alerts_enabled` | `boolean` |  |
| `messages` | `table` |  |
| `mode` | `string` | fallback: a direct search answered because the language model was unavailable. |
| `name` | `string` |  |
| `oauth_grant_id` | `string|nil` |  |
| `one_time_display` | `any` |  |
| `platform` | `string` |  |
| `policy` | `string` |  |
| `purpose` | `string` |  |
| `push_token` | `string` |  |
| `reason` | `string` |  |
| `registered_at` | `string` |  |
| `reply` | `string` |  |
| `request_mode` | `string` |  |
| `requested_at` | `string` |  |
| `results` | `table` |  |
| `schema_version` | `string` |  |
| `selected_at` | `string` |  |
| `signed_in` | `boolean` |  |
| `signing_secret` | `string` |  |
| `status` | `any` |  |
| `updated_at` | `string` |  |
| `url` | `string` | Public HTTPS receiver operated by the connecting principal or its agent runtime. |
| `usable_until` | `string` |  |
| `use_mode` | `string` |  |

#### Example: Create

```lua
local customer_account, err = client:CustomerAccount():create({
  account_id = "example_account_id", -- string
  account_role = "example_account_role", -- string
  accuracy_meters = 1, -- number
  acknowledge_data_effects = true, -- boolean
  actions = {}, -- table
  agent_key_id = "example_agent_key_id", -- string
  agent_receives_coordinates = true, -- boolean
  all_paused = true, -- boolean
  app_attest_registered = true, -- boolean
  assertion = "example_assertion", -- string
  attestation = "example_attestation", -- string
  author_label = "example_author_label", -- string
  author_type = "example_author_type", -- string
  binding = "example_binding", -- any
  body = "example_body", -- string
  business_id = "example_business_id", -- string|nil
  capture_source = "example_capture_source", -- any
  captured_at = "example_captured_at", -- string
  challenge = "example_challenge", -- string
  challenge_id = "example_challenge_id", -- string
  client_message_id = "example_client_message_id", -- string
  completed = true, -- boolean
  confirmation = "example_confirmation", -- string
  connection_id = "example_connection_id", -- string
  connection_kind = "example_connection_kind", -- string
  coordinates_returned = true, -- boolean
  created_at = "example_created_at", -- string
  credential_id = "example_credential_id", -- string
  declined = true, -- boolean
  delivery_contract = {}, -- table
  disabled_reason = "example_disabled_reason", -- string|nil
  disclosure = "example_disclosure", -- string
  enabled = true, -- boolean
  endpoint = {}, -- table
  endpoint_id = "example_endpoint_id", -- string
  endpoint_url = "example_endpoint_url", -- string
  environment = "example_environment", -- string
  event_id = "example_event_id", -- string
  event_types = {}, -- table
  failure_count = 1, -- number
  handoff_id = "example_handoff_id", -- string
  has_more = true, -- boolean
  id = "example_id", -- string
  idempotent_replay = true, -- boolean
  installation_id = "example_installation_id", -- string
  key_id = "example_key_id", -- string
  last_delivery_at = "example_last_delivery_at", -- string|nil
  latitude = 1, -- number
  longitude = 1, -- number
  message_alerts_enabled = true, -- boolean
  messages = {}, -- table
  mode = "example_mode", -- string
  oauth_grant_id = "example_oauth_grant_id", -- string|nil
  one_time_display = "example_one_time_display", -- any
  platform = "example_platform", -- string
  policy = "example_policy", -- string
  purpose = "example_purpose", -- string
  push_token = "example_push_token", -- string
  registered_at = "example_registered_at", -- string
  reply = "example_reply", -- string
  request_mode = "example_request_mode", -- string
  requested_at = "example_requested_at", -- string
  results = {}, -- table
  schema_version = "example_schema_version", -- string
  selected_at = "example_selected_at", -- string
  signed_in = true, -- boolean
  signing_secret = "example_signing_secret", -- string
  status = "example_status", -- any
  updated_at = "example_updated_at", -- string
  url = "example_url", -- string
  usable_until = "example_usable_until", -- string
  use_mode = "example_use_mode", -- string
})
```


### CustomerLocationProofRevocation

Create an instance: `local customer_location_proof_revocation = client:CustomerLocationProofRevocation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accuracy_meters` | `number` |  |
| `captured_at` | `string` |  |
| `latitude` | `number` |  |
| `longitude` | `number` |  |

#### Example: Create

```lua
local customer_location_proof_revocation, err = client:CustomerLocationProofRevocation():create({
  accuracy_meters = 1, -- number
  captured_at = "example_captured_at", -- string
  latitude = 1, -- number
  longitude = 1, -- number
})
```


### DestinationAddressSuggestion

Create an instance: `local destination_address_suggestion = client:DestinationAddressSuggestion(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `input` | `string` | Normalized partial US service-address text. |
| `suggestions` | `table` |  |

#### Example: Create

```lua
local destination_address_suggestion, err = client:DestinationAddressSuggestion():create({
  input = "example_input", -- string
})
```


### DestinationLocationProof

Create an instance: `local destination_location_proof = client:DestinationLocationProof(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `address` | `string` | A real US service address. |
| `premise_proximity_confirmation_token` | `string` | Opaque one-time token from the immediately preceding premise-proximity challenge for the same address and authority. |

#### Example: Create

```lua
local destination_location_proof, err = client:DestinationLocationProof():create({
  address = "example_address", -- string
})
```


### DomainTrustCard

Create an instance: `local domain_trust_card = client:DomainTrustCard(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `business_id` | `string` |  |
| `domain` | `string` |  |
| `schema_version` | `any` |  |
| `trust_card` | `table` |  |
| `trust_card_url` | `string` |  |
| `trust_model_version` | `any` |  |
| `verification_class` | `any` |  |
| `verification_disclosure` | `string` |  |

#### Example: Load

```lua
local domain_trust_card, err = client:DomainTrustCard():load({ domain_key = "domain_key" })
```


### GeoContext

Create an instance: `local geo_context = client:GeoContext(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```lua
local geo_context, err = client:GeoContext():load()
```


### Health

Create an instance: `local health = client:Health(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_phone_location_bridge` | `table` |  |
| `build_sha` | `string` |  |
| `business_review_access` | `table` |  |
| `contract_version` | `string` |  |
| `external_agent_webhooks` | `table` |  |
| `external_agent_webhooks_enabled` | `boolean` |  |
| `ios_app_attest_anonymous_location` | `table` |  |
| `location_choices` | `table` |  |
| `location_handoff` | `table` |  |
| `mobile_push` | `any` |  |
| `ok` | `any` |  |
| `service` | `string` |  |
| `sponsored_ordering` | `table` |  |
| `trust_model_version` | `any` |  |
| `version` | `string` |  |

#### Example: Load

```lua
local health, err = client:Health():load()
```


### JobApplication

Create an instance: `local job_application = client:JobApplication(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `string` |  |
| `already_withdrawn` | `boolean` |  |
| `application` | `table` |  |
| `applications` | `table` |  |
| `billing` | `table` |  |
| `business_id` | `string` |  |
| `count` | `number` |  |
| `cover_note` | `string` |  |
| `free_to_apply` | `boolean` |  |
| `id` | `string` |  |
| `job_id` | `string` |  |
| `limit` | `number` |  |
| `offset` | `number` |  |
| `resume` | `table` |  |
| `retention_note` | `string` |  |
| `status` | `string` |  |

#### Example: Create

```lua
local job_application, err = client:JobApplication():create({
  job_id = "example_job_id", -- string
  resume = {}, -- table
})
```


### JobResumeSignedUrl

Create an instance: `local job_resume_signed_url = client:JobResumeSignedUrl(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `application_id` | `string` |  |
| `content_type` | `string` |  |
| `expires_in_seconds` | `number` |  |
| `resume_file_name` | `string` |  |
| `signed_url` | `string` |  |
| `size_bytes` | `number` |  |
| `status` | `any` |  |

#### Example: Create

```lua
local job_resume_signed_url, err = client:JobResumeSignedUrl():create({
  job_application_id = "example_job_application_id", -- string
})
```


### LocationHandoff

Create an instance: `local location_handoff = client:LocationHandoff(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```lua
local location_handoff, err = client:LocationHandoff():create({
})
```


### Message

Create an instance: `local message = client:Message(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `string` |  |
| `client_message_id` | `string` | Caller-stable retry key. |
| `conversation_id` | `string` |  |
| `created_at` | `string` |  |
| `delivery` | `any` |  |
| `idempotent_replay` | `boolean` |  |
| `interaction_id` | `string` |  |
| `message` | `string` |  |
| `moderation_required` | `any` |  |
| `source_path` | `string` |  |
| `status` | `any` |  |
| `subject` | `string` |  |
| `target_business_id` | `string` |  |
| `target_business_name` | `string` |  |
| `target_business_source` | `string` |  |

#### Example: Create

```lua
local message, err = client:Message():create({
  account_id = "example_account_id", -- string
  client_message_id = "example_client_message_id", -- string
  message = "example_message", -- string
  subject = "example_subject", -- string
  target_business_id = "example_target_business_id", -- string
  target_business_name = "example_target_business_name", -- string
  target_business_source = "example_target_business_source", -- string
})
```


### ModeratedAction

Create an instance: `local moderated_action = client:ModeratedAction(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actions` | `table` |  |
| `body` | `string` |  |
| `client_request_id` | `string` |  |
| `content_type` | `string` |  |
| `continuation` | `any` | The continuation from the previous response, sent back unchanged to get the next results. |
| `coordinates_returned` | `boolean` |  |
| `disclosure` | `string` |  |
| `enabled` | `boolean` |  |
| `file_sha256` | `string` |  |
| `has_more` | `boolean` |  |
| `human_confirmation` | `boolean` |  |
| `intent_id` | `string` |  |
| `kind` | `string` |  |
| `knowledgeVersion` | `string` |  |
| `limits` | `table` |  |
| `links` | `table` |  |
| `location` | `table` | An opaque location reference from the website's own location controls. |
| `message` | `string` |  |
| `messages` | `table` |  |
| `mode` | `string` | fallback: a direct search answered because the language model was unavailable. |
| `name` | `string` |  |
| `needsHuman` | `boolean` |  |
| `policy` | `table` | Human schedule and separate claim-review policy. |
| `question` | `string` |  |
| `reply` | `string` |  |
| `result` | `string` |  |
| `results` | `table` |  |
| `scan_authority_id` | `string` |  |
| `scanner` | `string` |  |
| `scanner_version` | `string` |  |
| `schema_version` | `string` |  |
| `searcher_latitude` | `number` |  |
| `searcher_longitude` | `number` |  |
| `signature` | `string` |  |
| `signed_in` | `boolean` |  |
| `size_bytes` | `number` |  |
| `subject` | `string` |  |
| `target_business_id` | `string` |  |
| `topic` | `string` |  |

#### Example: Load

```lua
local moderated_action, err = client:ModeratedAction():load()
```

#### Example: Create

```lua
local moderated_action, err = client:ModeratedAction():create({
  content_type = "example_content_type", -- string
  file_sha256 = "example_file_sha256", -- string
  intent_id = "example_intent_id", -- string
  messages = {}, -- table
  question = "example_question", -- string
  result = "example_result", -- string
  scan_authority_id = "example_scan_authority_id", -- string
  scanner = "example_scanner", -- string
  scanner_version = "example_scanner_version", -- string
  size_bytes = 1, -- number
  target_business_id = "example_target_business_id", -- string
})
```


### OpenApiDocument

Create an instance: `local open_api_document = client:OpenApiDocument(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `components` | `table` |  |
| `info` | `table` |  |
| `openapi` | `any` |  |
| `paths` | `table` |  |
| `servers` | `table` |  |
| `tags` | `table` |  |

#### Example: List

```lua
local open_api_documents, err = client:OpenApiDocument():list()
```


### Operation

Create an instance: `local operation = client:Operation(nil)`

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
| `account_id` | `string` |  |
| `action` | `string` |  |
| `active` | `boolean` |  |
| `active_or_good_standing` | `boolean` |  |
| `ai_draft_id` | `string` |  |
| `allowed_actions` | `table` |  |
| `alt` | `string` |  |
| `amount_cents` | `number` | Whole cents, non-zero, at most 1,000,000 either way; a promotional credit is positive. |
| `amount_off_cents` | `number` |  |
| `api_key` | `string` |  |
| `applies_to_period` | `string` |  |
| `applies_to_tier` | `string|nil` |  |
| `assigned_admin_user_id` | `string|nil` |  |
| `assigneeId` | `string` |  |
| `assigneeLabel` | `string` |  |
| `assigneeType` | `string` |  |
| `assignee_id` | `string` |  |
| `assignee_label` | `string` |  |
| `assignee_type` | `string` | AI assignment is unavailable while the customer-support workload is disconnected. |
| `assistant_enabled` | `boolean` |  |
| `base_url` | `string` |  |
| `body` | `string` |  |
| `businessId` | `string` |  |
| `businessName` | `string` |  |
| `business_id` | `string|nil` |  |
| `business_ids` | `table` |  |
| `campaign_id` | `string` |  |
| `campaign_ids` | `table` |  |
| `caption` | `string` |  |
| `case_status` | `string` |  |
| `catalog` | `table` |  |
| `category` | `string` |  |
| `category_alias` | `string` |  |
| `chunk_size` | `number` |  |
| `city` | `string` |  |
| `code` | `string` |  |
| `confidence` | `number` |  |
| `config` | `table` | Complete validated pricing configuration. |
| `confirm` | `boolean` |  |
| `confirm_admin` | `boolean` |  |
| `confirmation` | `string` |  |
| `connection_id` | `string` |  |
| `connection_kind` | `string` |  |
| `content_type` | `string` |  |
| `context_id` | `string` |  |
| `context_type` | `string` |  |
| `createdAt` | `string|nil` |  |
| `created_at` | `string` |  |
| `credential_expires_at` | `string` | Expiration date printed on the license. |
| `credential_id` | `string` |  |
| `custom_wire` | `string` |  |
| `data_base64` | `string` |  |
| `decision` | `string` |  |
| `dedupe_ack` | `boolean` |  |
| `delivery_contract` | `table` |  |
| `disabled_reason` | `string|nil` |  |
| `discount_type` | `string` |  |
| `display_name` | `string` |  |
| `disposition` | `string` |  |
| `draft` | `table` |  |
| `duration` | `string` |  |
| `duration_in_months` | `number|nil` |  |
| `email` | `string` |  |
| `enabled` | `boolean` |  |
| `endpoint` | `table` |  |
| `endpoint_id` | `string` |  |
| `endpoint_url` | `string` |  |
| `ends_at` | `string` |  |
| `environment_fallback` | `any` |  |
| `event_id` | `string` |  |
| `event_types` | `table` |  |
| `expected_allowed_actions` | `table` |  |
| `expected_key_id` | `string` |  |
| `expected_updated_at` | `string` |  |
| `expected_version` | `number` |  |
| `expires_at` | `string` | Promotional credit only: ISO date-time 1 hour to 2 years ahead, disclosed to the owner. |
| `fact_id` | `string` |  |
| `facts` | `table` |  |
| `failure_count` | `number` |  |
| `fields` | `table` | Validated fields for this fixed content-block type. |
| `file_name` | `string` |  |
| `guideHandoffAnsweredAt` | `string|nil` |  |
| `guideHandoffAt` | `string|nil` |  |
| `guideHandoffDueAt` | `string|nil` |  |
| `height` | `number` |  |
| `historic_association_checked` | `boolean` |  |
| `hold` | `string` |  |
| `holder_name_match` | `boolean` |  |
| `hours` | `table` |  |
| `id` | `string` |  |
| `idempotency_key` | `string` |  |
| `identifier_match` | `boolean` |  |
| `in_use` | `table` |  |
| `instruction` | `string` |  |
| `invited` | `boolean` |  |
| `key_check` | `any` |  |
| `kind` | `string` |  |
| `label` | `string` |  |
| `lastMessageAt` | `string|nil` |  |
| `lastMessageAuthorType` | `string` |  |
| `lastMessagePreview` | `string` |  |
| `last_delivery_at` | `string|nil` |  |
| `last_error_code` | `any` |  |
| `last_probe_at` | `any` |  |
| `last_problem` | `any` |  |
| `legal_name` | `string` |  |
| `limit` | `number` |  |
| `make_active` | `boolean` |  |
| `max_cents` | `number` |  |
| `max_redemptions` | `number|nil` |  |
| `messages` | `table` |  |
| `messagesTruncated` | `boolean` |  |
| `min_cents` | `number` |  |
| `model` | `string` |  |
| `model_id` | `string` |  |
| `name` | `string` |  |
| `note` | `string` |  |
| `notes` | `string` |  |
| `observed_at` | `string` |  |
| `one_time_display` | `any` |  |
| `outcome` | `string` |  |
| `ownerEmail` | `string` |  |
| `ownerLastReadAt` | `string|nil` |  |
| `ownerName` | `string` |  |
| `ownerUserId` | `string` |  |
| `owner_reason_code` | `string` | Controlled owner-visible rejection reason. |
| `per_customer_limit` | `number` |  |
| `percent_off` | `number` |  |
| `phone` | `string` |  |
| `policyVersion` | `string` |  |
| `priority` | `string` |  |
| `provider` | `string` |  |
| `providers` | `table` |  |
| `purpose_code` | `string` |  |
| `rank_bid_cents` | `number` |  |
| `reason` | `string` |  |
| `reason_category` | `string` |  |
| `reason_code` | `string` |  |
| `reason_detail` | `string` |  |
| `reference` | `string` |  |
| `reject_reason` | `string` |  |
| `related_case_id` | `string` |  |
| `report_id` | `number` |  |
| `report_ids` | `table` |  |
| `reserve_cents` | `number` | 100-10000; never below $1.00. |
| `resolution_note` | `string` |  |
| `review_notes` | `string` |  |
| `revision` | `number` |  |
| `role` | `string` |  |
| `rows` | `table` |  |
| `run` | `table` |  |
| `schema_version` | `string` |  |
| `scope` | `string` |  |
| `search` | `string` |  |
| `settings` | `table` |  |
| `signing_secret` | `string` |  |
| `size_bytes` | `number` |  |
| `sla_due_at` | `string|nil` |  |
| `source` | `string` |  |
| `source_authority` | `string` | Exact official authority name. |
| `source_category_slug` | `string` |  |
| `source_scope_checked` | `boolean` |  |
| `source_url` | `string` | Exact HTTPS official source URL. |
| `starts_at` | `string|nil` |  |
| `state` | `string` | Bulk by area: every ad of the advertisers in this two-letter U.S. |
| `status` | `string` |  |
| `storage` | `string` |  |
| `street_address` | `string` |  |
| `subject` | `string` |  |
| `supportLastReadAt` | `string|nil` |  |
| `target_category` | `string` |  |
| `taxonomy_category_aliases` | `table` |  |
| `ticketNumber` | `string` |  |
| `tier` | `string` |  |
| `typing` | `boolean` |  |
| `until` | `string` |  |
| `updatedAt` | `string|nil` |  |
| `updated_at` | `string` |  |
| `url` | `string` | Public HTTPS receiver operated by the connecting principal or its agent runtime. |
| `valid_until` | `string` |  |
| `value` | `string` |  |
| `verification_method` | `string` |  |
| `verified_at` | `any` |  |
| `verified_service_scope` | `table` |  |
| `version` | `string` |  |
| `website` | `string` |  |
| `width` | `number` |  |
| `window_hours` | `number` | 1-744, default 48. |
| `workload` | `string` |  |
| `zip` | `string` |  |

#### Example: Create

```lua
local operation, err = client:Operation():create({
  coupon_id = "example_coupon_id", -- string
  account_id = "example_account_id", -- string
  allowed_actions = {}, -- table
  amount_cents = 1, -- number
  api_key = "example_api_key", -- string
  assigneeId = "example_assigneeId", -- string
  assigneeLabel = "example_assigneeLabel", -- string
  assigneeType = "example_assigneeType", -- string
  assistant_enabled = true, -- boolean
  body = "example_body", -- string
  businessId = "example_businessId", -- string
  businessName = "example_businessName", -- string
  business_ids = {}, -- table
  catalog = {}, -- table
  code = "example_code", -- string
  config = {}, -- table
  confirmation = "example_confirmation", -- string
  connection_id = "example_connection_id", -- string
  connection_kind = "example_connection_kind", -- string
  content_type = "example_content_type", -- string
  context_id = "example_context_id", -- string
  context_type = "example_context_type", -- string
  createdAt = "example_createdAt", -- string|nil
  created_at = "example_created_at", -- string
  credential_id = "example_credential_id", -- string
  data_base64 = "example_data_base64", -- string
  decision = "example_decision", -- string
  delivery_contract = {}, -- table
  disabled_reason = "example_disabled_reason", -- string|nil
  discount_type = "example_discount_type", -- string
  display_name = "example_display_name", -- string
  disposition = "example_disposition", -- string
  draft = {}, -- table
  email = "example_email", -- string
  enabled = true, -- boolean
  endpoint = {}, -- table
  endpoint_id = "example_endpoint_id", -- string
  endpoint_url = "example_endpoint_url", -- string
  ends_at = "example_ends_at", -- string
  environment_fallback = "example_environment_fallback", -- any
  event_id = "example_event_id", -- string
  event_types = {}, -- table
  expected_allowed_actions = {}, -- table
  expected_key_id = "example_expected_key_id", -- string
  expected_updated_at = "example_expected_updated_at", -- string
  expected_version = 1, -- number
  fact_id = "example_fact_id", -- string
  facts = {}, -- table
  failure_count = 1, -- number
  fields = {}, -- table
  file_name = "example_file_name", -- string
  historic_association_checked = true, -- boolean
  hold = "example_hold", -- string
  hours = {}, -- table
  id = "example_id", -- string
  in_use = {}, -- table
  invited = true, -- boolean
  key_check = "example_key_check", -- any
  kind = "example_kind", -- string
  label = "example_label", -- string
  lastMessageAt = "example_lastMessageAt", -- string|nil
  lastMessageAuthorType = "example_lastMessageAuthorType", -- string
  lastMessagePreview = "example_lastMessagePreview", -- string
  last_delivery_at = "example_last_delivery_at", -- string|nil
  last_error_code = "example_last_error_code", -- any
  last_probe_at = "example_last_probe_at", -- any
  last_problem = "example_last_problem", -- any
  make_active = true, -- boolean
  max_cents = 1, -- number
  messages = {}, -- table
  messagesTruncated = true, -- boolean
  min_cents = 1, -- number
  model = "example_model", -- string
  model_id = "example_model_id", -- string
  name = "example_name", -- string
  one_time_display = "example_one_time_display", -- any
  outcome = "example_outcome", -- string
  ownerEmail = "example_ownerEmail", -- string
  ownerLastReadAt = "example_ownerLastReadAt", -- string|nil
  ownerName = "example_ownerName", -- string
  ownerUserId = "example_ownerUserId", -- string
  policyVersion = "example_policyVersion", -- string
  provider = "example_provider", -- string
  providers = {}, -- table
  purpose_code = "example_purpose_code", -- string
  rank_bid_cents = 1, -- number
  reference = "example_reference", -- string
  report_ids = {}, -- table
  reserve_cents = 1, -- number
  resolution_note = "example_resolution_note", -- string
  revision = 1, -- number
  rows = {}, -- table
  run = {}, -- table
  schema_version = "example_schema_version", -- string
  scope = "example_scope", -- string
  settings = {}, -- table
  signing_secret = "example_signing_secret", -- string
  size_bytes = 1, -- number
  source_scope_checked = true, -- boolean
  storage = "example_storage", -- string
  subject = "example_subject", -- string
  supportLastReadAt = "example_supportLastReadAt", -- string|nil
  taxonomy_category_aliases = {}, -- table
  ticketNumber = "example_ticketNumber", -- string
  tier = "example_tier", -- string
  updatedAt = "example_updatedAt", -- string|nil
  updated_at = "example_updated_at", -- string
  url = "example_url", -- string
  value = "example_value", -- string
  verification_method = "example_verification_method", -- string
  verified_at = "example_verified_at", -- any
  workload = "example_workload", -- string
})
```


### OwnerNotification

Create an instance: `local owner_notification = client:OwnerNotification(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `businessId` | `string` |  |
| `createdAt` | `string` |  |
| `dedupeKey` | `string` |  |
| `emailStatus` | `string` |  |
| `eventType` | `any` |  |
| `id` | `string` |  |
| `readAt` | `string|nil` |  |
| `resourceId` | `string` |  |
| `resourceKind` | `any` |  |
| `resourceUrl` | `string` |  |
| `summary` | `string` |  |
| `webhookStatus` | `string` |  |

#### Example: Create

```lua
local owner_notification, err = client:OwnerNotification():create({
  notification_id = "example_notification_id", -- string
})
```


### OwnerNotificationSetting

Create an instance: `local owner_notification_setting = client:OwnerNotificationSetting(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `businessId` | `string` |  |
| `business_id` | `string` |  |
| `createdAt` | `string` |  |
| `emailEnabled` | `boolean` |  |
| `email_enabled` | `boolean` |  |
| `eventTypeSubscriptions` | `table` |  |
| `event_types` | `table` |  |
| `updatedAt` | `string` |  |
| `webhookEnabled` | `boolean` |  |
| `webhook_enabled` | `boolean` |  |

#### Example: Create

```lua
local owner_notification_setting, err = client:OwnerNotificationSetting():create({
})
```


### OwnerWebhookEndpoint

Create an instance: `local owner_webhook_endpoint = client:OwnerWebhookEndpoint(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `businessId` | `string` |  |
| `createdAt` | `string` |  |
| `enabled` | `boolean` |  |
| `eventTypeSubscriptions` | `table` |  |
| `failureCount` | `number` |  |
| `id` | `string` |  |
| `lastDeliveryAt` | `string|nil` |  |
| `updatedAt` | `string` |  |
| `url` | `string` |  |

#### Example: Create

```lua
local owner_webhook_endpoint, err = client:OwnerWebhookEndpoint():create({
  webhook_id = "example_webhook_id", -- string
})
```


### OwnerWebhookRegistration

Create an instance: `local owner_webhook_registration = client:OwnerWebhookRegistration(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `business_id` | `string` |  |
| `endpoint` | `table` |  |
| `event_types` | `table` |  |
| `one_time_display` | `any` |  |
| `signing_secret` | `string` |  |
| `status` | `any` |  |
| `url` | `string` |  |

#### Example: Create

```lua
local owner_webhook_registration, err = client:OwnerWebhookRegistration():create({
  url = "example_url", -- string
})
```


### Pricing

Create an instance: `local pricing = client:Pricing(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `billing` | `table` |  |
| `branch_add_ons` | `table` |  |
| `currency` | `any` |  |
| `generated_at` | `string` |  |
| `neutrality` | `string` |  |
| `plans` | `table` |  |
| `promotions` | `table` |  |
| `published_at` | `string|nil` |  |
| `radius_extension` | `table` |  |
| `revision_id` | `string|nil` |  |
| `source` | `any` |  |
| `trust_model_version` | `any` |  |

#### Example: List

```lua
local pricings, err = client:Pricing():list()
```


### PromoteVerifiedTransaction

Create an instance: `local promote_verified_transaction = client:PromoteVerifiedTransaction(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `business_id` | `string` |  |
| `evidence_id` | `string` |  |
| `interaction_id` | `string` |  |
| `ok` | `any` |  |
| `review_upgraded` | `boolean` |  |
| `status` | `any` |  |
| `trust_weight` | `any` |  |
| `verified` | `boolean` |  |

#### Example: Create

```lua
local promote_verified_transaction, err = client:PromoteVerifiedTransaction():create({
  business_id = "example_business_id", -- string
  evidence_id = "example_evidence_id", -- string
})
```


### PublicContent

Create an instance: `local public_content = client:PublicContent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `blocks` | `table` |  |
| `generated_at` | `string` |  |
| `source` | `any` |  |
| `trust_model_version` | `any` |  |

#### Example: Load

```lua
local public_content, err = client:PublicContent():load()
```


### Recommend

Create an instance: `local recommend = client:Recommend(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `candidate_window_truncated` | `boolean` | True when Loppee's bounded candidate assembly reached its safety cap. |
| `commercial_influence` | `string` | Must be none whenever current-location or saved_exact authority is absent, including universal exact/genuine-prefix name lookup. |
| `display_count` | `number` | Agent-key responses: the number of businesses in this response. |
| `endpoint` | `any` |  |
| `fallback_registry` | `table` |  |
| `generated_at` | `string` |  |
| `has_more` | `boolean` | True only when next_cursor can continue through the current bounded, deterministic candidate window. |
| `listed` | `table` |  |
| `location_context` | `any` | Local category discovery and recommendations require a current precise location proof or handoff, a user-confirmed validated destination authority, or a saved_exact Home location. |
| `ordering` | `any` |  |
| `policy` | `string` |  |
| `presentation_guidance` | `string` | Agent-key responses: how to present these results to the customer. |
| `query` | `table` |  |
| `ranking_policy` | `string` |  |
| `registry_count_basis` | `string` |  |
| `registry_count_observed_at` | `string|nil` |  |
| `registry_name` | `any` |  |
| `results` | `table` |  |
| `returned_count` | `number` |  |
| `reviewed_registry` | `table` |  |
| `schema_version` | `any` |  |
| `search_intent` | `table` |  |
| `suggestions` | `table` |  |
| `total_matches` | `number` | Web and app responses. |
| `total_matches_basis` | `number` |  |
| `total_registry_records` | `number` |  |
| `trust_model_version` | `any` |  |
| `verified` | `table` |  |
| `visible_candidate_records` | `number` | Web and app responses. |

#### Example: List

```lua
local recommends, err = client:Recommend():list()
```


### Review

Create an instance: `local review = client:Review(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `string` |  |
| `attestation_accepted` | `boolean` | Set true only after the customer confirms this describes their own experience and explicitly approves publishing the displayed business, star rating, title, and full review. |
| `customer_confirmed` | `boolean` | Set true to confirm you were a customer of this business. |
| `message` | `string` |  |
| `rating` | `number` |  |
| `service_date` | `any` | Optional real, non-future service date in YYYY-MM-DD format; empty means not provided. |
| `subject` | `string` |  |
| `target_business_id` | `string` |  |

#### Example: Create

```lua
local review, err = client:Review():create({
  account_id = "example_account_id", -- string
  attestation_accepted = true, -- boolean
  message = "example_message", -- string
  rating = 1, -- number
  subject = "example_subject", -- string
  target_business_id = "example_target_business_id", -- string
})
```


### Revoke

Create an instance: `local revoke = client:Revoke(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `string` |  |
| `key_id` | `string` |  |
| `revoked_by` | `string` |  |
| `status` | `any` |  |

#### Example: Create

```lua
local revoke, err = client:Revoke():create({
  agent_key_id = "example_agent_key_id", -- string
})
```


### SaveBusiness

Create an instance: `local save_business = client:SaveBusiness(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `string` |  |
| `business_id` | `string` |  |
| `business_name` | `string` |  |
| `business_source` | `string` |  |
| `category` | `string` |  |
| `city` | `string` |  |
| `created_at` | `string` |  |
| `notes` | `string` |  |
| `saved_business_id` | `string` |  |
| `state` | `string` |  |
| `status` | `any` |  |

#### Example: Create

```lua
local save_business, err = client:SaveBusiness():create({
  account_id = "example_account_id", -- string
  business_id = "example_business_id", -- string
  business_name = "example_business_name", -- string
  business_source = "example_business_source", -- string
})
```


### SavedBusiness

Create an instance: `local saved_business = client:SavedBusiness(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `string` |  |
| `count` | `number` |  |
| `limit` | `number` |  |
| `saved_businesses` | `table` |  |

#### Example: Create

```lua
local saved_business, err = client:SavedBusiness():create({
  account_id = "example_account_id", -- string
})
```


### SavedLocation

Create an instance: `local saved_location = client:SavedLocation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `available` | `boolean` |  |
| `coordinates_returned` | `any` |  |
| `kind` | `any` | Only saved_exact is precise local-discovery authority. |
| `label` | `string|nil` |  |
| `location_proof_id` | `string` |  |
| `reach_precision` | `any` | Exact can authorize local category/recommendation reach; coarse cannot activate local results, Sponsored placement, or impressions. |
| `saved_location_ref` | `string|nil` |  |
| `updated_at` | `string|nil` |  |
| `zip` | `string` |  |


### Search

Create an instance: `local search = client:Search(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `candidate_window_truncated` | `boolean` | True when Loppee's bounded candidate assembly reached its safety cap. |
| `commercial_influence` | `string` | Must be none whenever current-location or saved_exact authority is absent, including universal exact/genuine-prefix name lookup. |
| `display_count` | `number` | Agent-key responses: the number of businesses in this response. |
| `generated_at` | `string` |  |
| `has_more` | `boolean` | True only when next_cursor can continue through the current bounded, deterministic candidate window. |
| `location_context` | `any` | Local category discovery and recommendations require a current precise location proof or handoff, a user-confirmed validated destination authority, or a saved_exact Home location. |
| `next_cursor` | `string|nil` |  |
| `page_limit` | `number` |  |
| `policy` | `string` |  |
| `presentation_guidance` | `string` | Agent-key responses: how to present these results to the customer. |
| `query` | `table` |  |
| `ranking_policy` | `string` |  |
| `registry_count_basis` | `string` |  |
| `registry_count_observed_at` | `string|nil` |  |
| `registry_name` | `any` |  |
| `results` | `table` |  |
| `returned_count` | `number` |  |
| `schema_version` | `any` |  |
| `search_intent` | `table` |  |
| `suggestions` | `table` |  |
| `total_matches` | `number` | Web and app responses. |
| `total_matches_basis` | `number` |  |
| `total_registry_records` | `number` |  |
| `trust_model_version` | `any` |  |
| `visible_candidate_records` | `number` | Web and app responses. |

#### Example: List

```lua
local searchs, err = client:Search():list()
```


### Suggest

Create an instance: `local suggest = client:Suggest(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `categories` | `table` |  |
| `names` | `table` |  |
| `query` | `string` |  |
| `schema_version` | `any` |  |

#### Example: List

```lua
local suggests, err = client:Suggest():list()
```


### SupportInternalNote

Create an instance: `local support_internal_note = client:SupportInternalNote(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `authorLabel` | `string` |  |
| `body` | `string` |  |
| `createdAt` | `string|nil` |  |
| `id` | `string` |  |

#### Example: Create

```lua
local support_internal_note, err = client:SupportInternalNote():create({
  id = "example_id", -- string
  body = "example_body", -- string
})
```


### SupportWorkflow

Create an instance: `local support_workflow = client:SupportWorkflow(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `category` | `any` |  |
| `id` | `string` |  |
| `priority` | `any` |  |
| `waiting_on` | `any` |  |

#### Example: Create

```lua
local support_workflow, err = client:SupportWorkflow():create({
  id = "example_id", -- string
})
```


### TaxonomySuggestion

Create an instance: `local taxonomy_suggestion = client:TaxonomySuggestion(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alias` | `string` |  |
| `path_titles` | `table` |  |
| `title` | `string` |  |

#### Example: List

```lua
local taxonomy_suggestions, err = client:TaxonomySuggestion():list()
```


### TrustCard

Create an instance: `local trust_card = client:TrustCard(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agency` | `string` |  |
| `collected_at` | `string` |  |
| `disclosure` | `string` |  |
| `fact_id` | `string` |  |
| `matched_on` | `string` |  |
| `reason` | `string` |  |
| `record_kind` | `string` |  |
| `record_number` | `string|nil` |  |
| `record_scope` | `string` |  |
| `record_type` | `string` |  |
| `recorded_expiry` | `string|nil` |  |
| `result` | `string` |  |
| `source_label` | `string` |  |
| `source_url` | `string` |  |
| `state` | `string` |  |
| `status_on_record` | `string` |  |

#### Example: Load

```lua
local trust_card, err = client:TrustCard():load({ schema_name = "schema_name" })
```

#### Example: List

```lua
local trust_cards, err = client:TrustCard():list({ business_id = "example" })
```

#### Example: Create

```lua
local trust_card, err = client:TrustCard():create({
  business_id = "example_business_id", -- string
  license_record_id = "example_license_record_id", -- string
})
```


### UnsaveBusiness

Create an instance: `local unsave_business = client:UnsaveBusiness(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `string` |  |
| `business_id` | `string` |  |
| `removed` | `boolean` |  |
| `status` | `any` |  |

#### Example: Create

```lua
local unsave_business, err = client:UnsaveBusiness():create({
  account_id = "example_account_id", -- string
  business_id = "example_business_id", -- string
})
```


### UpdateAgentBillingAccount

Create an instance: `local update_agent_billing_account = client:UpdateAgentBillingAccount(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `string` |  |
| `billing_account` | `table` |  |
| `billing_status` | `string` |  |
| `included_actions` | `number` |  |
| `monthly_fee_cents` | `number` |  |
| `overage_cents` | `number` |  |
| `plan` | `string` |  |
| `status` | `any` |  |
| `updated_by` | `string` |  |

#### Example: Create

```lua
local update_agent_billing_account, err = client:UpdateAgentBillingAccount():create({
  account_id = "example_account_id", -- string
})
```


### WithdrawJobApplication

Create an instance: `local withdraw_job_application = client:WithdrawJobApplication(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `string` |  |
| `already_withdrawn` | `boolean` |  |
| `application` | `table` |  |
| `application_id` | `string` |  |
| `status` | `any` |  |

#### Example: Create

```lua
local withdraw_job_application, err = client:WithdrawJobApplication():create({
  account_id = "example_account_id", -- string
  application_id = "example_application_id", -- string
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

Features are the extension mechanism. A feature is a Lua table
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **RatelimitFeature**: Rate limiting
- **RetryFeature**: Retry
- **TestFeature**: Test transport
- **TimeoutFeature**: Timeout

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as tables

The Lua SDK uses plain Lua tables throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a table.

### Module structure

```
lua/
├── loppee-business_sdk.lua    -- Main SDK module
├── config.lua               -- Configuration
├── schema.lua               -- Generated option + entity specs
├── features.lua             -- Feature factory
├── core/                    -- Core types and context
├── entity/                  -- Entity implementations
├── feature/                 -- Built-in features (Base, Test, Log)
├── utility/                 -- Utility functions and struct library
└── test/                    -- Test suites
```

The main module (`loppee-business_sdk`) exports the SDK constructor
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```lua
local agentcapability = client:AgentCapability()
agentcapability:load()

-- agentcapability:data_get() now returns the agentcapability data from the last load
-- agentcapability:match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
