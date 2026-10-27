# LoppeeBusiness PHP SDK



The PHP SDK for the LoppeeBusiness API — an entity-oriented client using PHP conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `$client->AgentAccess()` — with named operations (`list`/`load`/`create`/`update`/`patch`/`remove`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to Packagist. Install it from the
GitHub release tag (`php/vX.Y.Z`, see [Tags](https://github.com/voxgig-sdk/loppee-business-sdk/tags)), or
from a clone as a Composer path repository:

```bash
git clone https://github.com/voxgig-sdk/loppee-business-sdk
composer config repositories.loppee-business-sdk path ./loppee-business-sdk/php
composer require voxgig-sdk/loppee-business-sdk:@dev
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record. The client sends the API key in the `X-LOPPEE-API-Key` header.

### 1. Create a client

```php
<?php
require_once 'loppeebusiness_sdk.php';

$client = new LoppeeBusinessSDK([
    "apikey" => getenv("LOPPEE_BUSINESS_APIKEY"),
]);
```

### 4. Create, update, and remove

```php
// create() returns the ENTITY — call data_get() for the created AgentAccess record.
$created = $client->AgentAccess()->create(["agent_name" => "example_agent_name", "developer_email" => "example_developer_email", "organization_name" => "example_organization_name"]);

```


## Error handling

Entity operations throw a `\Throwable` on failure, so wrap them in
`try` / `catch`:

```php
try {
    $agentcapability = $client->AgentCapability()->load();
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

`direct()` does **not** throw — it returns the result array. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```php
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example_id"],
]);

if (! $result["ok"]) {
    $err = $result["err"] ?? null;
    echo "request failed: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```php
// direct() is the raw-HTTP escape hatch: it returns a result array
// (it does not throw). Branch on $result["ok"].
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);

if ($result["ok"]) {
    echo $result["status"];  // 200
    print_r($result["data"]);  // response body
} else {
    // On an HTTP error status there is no err (only a transport failure sets
    // it), so fall back to the status code.
    $err = $result["err"] ?? null;
    echo "Error: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```

### Prepare a request without sending it

```php
// prepare() throws on error and returns the fetch definition.
$fetchdef = $client->prepare([
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => ["id" => "example"],
]);

echo $fetchdef["url"];
echo $fetchdef["method"];
print_r($fetchdef["headers"]);
```

### Use test mode

Create a mock client for unit testing — no server required. Seed fixture
data via the `entity` option so offline calls resolve without a live server:

```php
$client = LoppeeBusinessSDK::test([
    "entity" => ["business_review" => ["test01" => ["id" => "test01"]]],
]);

// Entity ops return the ENTITY (throws on error);
// call data_get() for the mock record.
$businessreview = $client->BusinessReview()->load(["id" => "test01"]);
print_r($businessreview->data_get());
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```php
$mock_fetch = function ($url, $init) {
    return [
        [
            "status" => 200,
            "statusText" => "OK",
            "headers" => [],
            "json" => function () { return ["id" => "mock01"]; },
        ],
        null,
    ];
};

$client = new LoppeeBusinessSDK([
    "base" => "http://localhost:8080",
    "system" => [
        "fetch" => $mock_fetch,
    ],
]);
```

### Run live tests

Create a `.env.local` file at the project root:

```
LOPPEE_BUSINESS_TEST_LIVE=TRUE
LOPPEE_BUSINESS_APIKEY=<your-key>
```

Then run:

```bash
cd php && ./vendor/bin/phpunit test/
```


## Reference

### LoppeeBusinessSDK

```php
require_once 'loppeebusiness_sdk.php';
$client = new LoppeeBusinessSDK($options);
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `array` | Feature activation flags. |
| `extend` | `array` | Additional Feature instances to load. |
| `system` | `array` | System overrides (e.g. custom `fetch` callable). |

### test

```php
$client = LoppeeBusinessSDK::test($testopts, $sdkopts);
```

Creates a test-mode client with mock transport. Both arguments may be `null`.

### LoppeeBusinessSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `(): array` | Deep copy of current SDK options. |
| `get_utility` | `(): Utility` | Copy of the SDK utility object. |
| `prepare` | `(array $fetchargs): array` | Build an HTTP request definition without sending. |
| `direct` | `(array $fetchargs): array` | Build and send an HTTP request. |
| `AgentAccess` | `($data): AgentAccessEntity` | Create an AgentAccess entity instance. |
| `AgentCapability` | `($data): AgentCapabilityEntity` | Create an AgentCapability entity instance. |
| `AgentConnectionTest` | `($data): AgentConnectionTestEntity` | Create an AgentConnectionTest entity instance. |
| `AgentIntegration` | `($data): AgentIntegrationEntity` | Create an AgentIntegration entity instance. |
| `AgentMonitoring` | `($data): AgentMonitoringEntity` | Create an AgentMonitoring entity instance. |
| `AgentOpenapi` | `($data): AgentOpenapiEntity` | Create an AgentOpenapi entity instance. |
| `AgentPolicy` | `($data): AgentPolicyEntity` | Create an AgentPolicy entity instance. |
| `AnonymousLocationProofRevocation` | `($data): AnonymousLocationProofRevocationEntity` | Create an AnonymousLocationProofRevocation entity instance. |
| `BusinessApplication` | `($data): BusinessApplicationEntity` | Create a BusinessApplication entity instance. |
| `BusinessClaim` | `($data): BusinessClaimEntity` | Create a BusinessClaim entity instance. |
| `BusinessDeal` | `($data): BusinessDealEntity` | Create a BusinessDeal entity instance. |
| `BusinessIndex` | `($data): BusinessIndexEntity` | Create a BusinessIndex entity instance. |
| `BusinessOwner` | `($data): BusinessOwnerEntity` | Create a BusinessOwner entity instance. |
| `BusinessReview` | `($data): BusinessReviewEntity` | Create a BusinessReview entity instance. |
| `ChatAttachment` | `($data): ChatAttachmentEntity` | Create a ChatAttachment entity instance. |
| `ChatAttachmentUrl` | `($data): ChatAttachmentUrlEntity` | Create a ChatAttachmentUrl entity instance. |
| `ClaimVerificationSend` | `($data): ClaimVerificationSendEntity` | Create a ClaimVerificationSend entity instance. |
| `ClaimVerificationVerify` | `($data): ClaimVerificationVerifyEntity` | Create a ClaimVerificationVerify entity instance. |
| `CommercialClick` | `($data): CommercialClickEntity` | Create a CommercialClick entity instance. |
| `ContactRecorded` | `($data): ContactRecordedEntity` | Create a ContactRecorded entity instance. |
| `Conversation` | `($data): ConversationEntity` | Create a Conversation entity instance. |
| `ConversationClose` | `($data): ConversationCloseEntity` | Create a ConversationClose entity instance. |
| `ConversationReport` | `($data): ConversationReportEntity` | Create a ConversationReport entity instance. |
| `ConversationWorkflow` | `($data): ConversationWorkflowEntity` | Create a ConversationWorkflow entity instance. |
| `CreateAgentApiKey` | `($data): CreateAgentApiKeyEntity` | Create a CreateAgentApiKey entity instance. |
| `Customer` | `($data): CustomerEntity` | Create a Customer entity instance. |
| `CustomerAccount` | `($data): CustomerAccountEntity` | Create a CustomerAccount entity instance. |
| `CustomerLocationProofRevocation` | `($data): CustomerLocationProofRevocationEntity` | Create a CustomerLocationProofRevocation entity instance. |
| `DestinationAddressSuggestion` | `($data): DestinationAddressSuggestionEntity` | Create a DestinationAddressSuggestion entity instance. |
| `DestinationLocationProof` | `($data): DestinationLocationProofEntity` | Create a DestinationLocationProof entity instance. |
| `DomainTrustCard` | `($data): DomainTrustCardEntity` | Create a DomainTrustCard entity instance. |
| `GeoContext` | `($data): GeoContextEntity` | Create a GeoContext entity instance. |
| `Health` | `($data): HealthEntity` | Create a Health entity instance. |
| `JobApplication` | `($data): JobApplicationEntity` | Create a JobApplication entity instance. |
| `JobResumeSignedUrl` | `($data): JobResumeSignedUrlEntity` | Create a JobResumeSignedUrl entity instance. |
| `LocationHandoff` | `($data): LocationHandoffEntity` | Create a LocationHandoff entity instance. |
| `Message` | `($data): MessageEntity` | Create a Message entity instance. |
| `ModeratedAction` | `($data): ModeratedActionEntity` | Create a ModeratedAction entity instance. |
| `OpenApiDocument` | `($data): OpenApiDocumentEntity` | Create an OpenApiDocument entity instance. |
| `Operation` | `($data): OperationEntity` | Create an Operation entity instance. |
| `OwnerNotification` | `($data): OwnerNotificationEntity` | Create an OwnerNotification entity instance. |
| `OwnerNotificationSetting` | `($data): OwnerNotificationSettingEntity` | Create an OwnerNotificationSetting entity instance. |
| `OwnerWebhookEndpoint` | `($data): OwnerWebhookEndpointEntity` | Create an OwnerWebhookEndpoint entity instance. |
| `OwnerWebhookRegistration` | `($data): OwnerWebhookRegistrationEntity` | Create an OwnerWebhookRegistration entity instance. |
| `Pricing` | `($data): PricingEntity` | Create a Pricing entity instance. |
| `PromoteVerifiedTransaction` | `($data): PromoteVerifiedTransactionEntity` | Create a PromoteVerifiedTransaction entity instance. |
| `PublicContent` | `($data): PublicContentEntity` | Create a PublicContent entity instance. |
| `Recommend` | `($data): RecommendEntity` | Create a Recommend entity instance. |
| `Review` | `($data): ReviewEntity` | Create a Review entity instance. |
| `Revoke` | `($data): RevokeEntity` | Create a Revoke entity instance. |
| `SaveBusiness` | `($data): SaveBusinessEntity` | Create a SaveBusiness entity instance. |
| `SavedBusiness` | `($data): SavedBusinessEntity` | Create a SavedBusiness entity instance. |
| `SavedLocation` | `($data): SavedLocationEntity` | Create a SavedLocation entity instance. |
| `Search` | `($data): SearchEntity` | Create a Search entity instance. |
| `Suggest` | `($data): SuggestEntity` | Create a Suggest entity instance. |
| `SupportInternalNote` | `($data): SupportInternalNoteEntity` | Create a SupportInternalNote entity instance. |
| `SupportWorkflow` | `($data): SupportWorkflowEntity` | Create a SupportWorkflow entity instance. |
| `TaxonomySuggestion` | `($data): TaxonomySuggestionEntity` | Create a TaxonomySuggestion entity instance. |
| `TrustCard` | `($data): TrustCardEntity` | Create a TrustCard entity instance. |
| `UnsaveBusiness` | `($data): UnsaveBusinessEntity` | Create an UnsaveBusiness entity instance. |
| `UpdateAgentBillingAccount` | `($data): UpdateAgentBillingAccountEntity` | Create an UpdateAgentBillingAccount entity instance. |
| `WithdrawJobApplication` | `($data): WithdrawJobApplicationEntity` | Create a WithdrawJobApplication entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `($reqmatch, $ctrl): mixed` | Load a single entity by match criteria, and return it. |
| `list` | `(?array $reqmatch = null, $ctrl): mixed` | List entities matching the criteria (call with no argument to list all), one per record. |
| `create` | `($reqdata, $ctrl): mixed` | Create a new entity, and return it. |
| `update` | `($reqdata, $ctrl): mixed` | Update an existing entity, and return it. |
| `patch` | `($reqdata, $ctrl): mixed` | Change part of an existing entity, and return it. |
| `remove` | `($reqmatch, $ctrl): mixed` | Remove an entity, and return it marked as deleted. |
| `data_get` | `(): array` | Get entity data. |
| `data_set` | `($data): void` | Set entity data. |
| `match_get` | `(): array` | Get entity match criteria. |
| `match_set` | `($match): void` | Set entity match criteria. |
| `make` | `(): Entity` | Create a new instance with the same options. |
| `get_name` | `(): string` | Return the entity name. |

### Result shape

Entity operations return the entity, and `list` an `array` of entities, one
per record; an entity's `data_get()` reads its record (an `array`). They
throw on error, so wrap calls in `try`/`catch` to handle failures.

The `direct()` escape hatch never throws — it returns a result `array`
you branch on via `$result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `true` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `array` | Response headers. |
| `data` | `mixed` | Parsed JSON response body. |

On error, `ok` is `false` and `$err` contains the error value.

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

Create an instance: `$agent_access = $client->AgentAccess();`

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
| `operating_states` | `array` |  |
| `organization_name` | `string` |  |
| `request_id` | `string` |  |
| `request_status` | `string` |  |
| `requested_actions` | `array` |  |
| `safety_contact` | `string` |  |
| `status` | `mixed` |  |
| `target_categories` | `array` |  |
| `use_case` | `string` |  |
| `website` | `string` |  |

#### Example: Create

```php
$agent_access = $client->AgentAccess()->create([
    "agent_name" => null, // string
    "developer_email" => null, // string
    "organization_name" => null, // string
]);
```


### AgentCapability

Create an instance: `$agent_capability = $client->AgentCapability();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_phone_location_bridge` | `array` |  |
| `agent_rules` | `array` |  |
| `discovery` | `array` |  |
| `external_agent_access` | `array` |  |
| `external_agent_webhooks` | `array` |  |
| `local_discovery_location_policy` | `array` |  |
| `location_choices` | `array` |  |
| `registry_name` | `mixed` |  |
| `schema_version` | `mixed` |  |
| `trust_model_version` | `mixed` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the AgentCapability record (throws on error).
$agent_capability = $client->AgentCapability()->load();
```


### AgentConnectionTest

Create an instance: `$agent_connection_test = $client->AgentConnectionTest();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `key` | `string` | Optional UI fallback. |

#### Example: Create

```php
$agent_connection_test = $client->AgentConnectionTest()->create([
]);
```


### AgentIntegration

Create an instance: `$agent_integration = $client->AgentIntegration();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_model` | `array` |  |
| `commercial_influence` | `array` |  |
| `developer_docs_url` | `string` |  |
| `exposure_tiers` | `array` |  |
| `external_agent_access` | `array` |  |
| `generated_at` | `string` |  |
| `http_api` | `array` |  |
| `legal` | `array` |  |
| `mcp` | `array` |  |
| `mcp_client_example_url` | `string` |  |
| `monitoring_url` | `string` |  |
| `openapi_url` | `string` |  |
| `openapi_v1_url` | `string` |  |
| `operational_rules` | `array` |  |
| `owner_agent_notifications` | `array` |  |
| `package_url` | `string` |  |
| `public_base_url` | `string` |  |
| `rate_limits` | `array` |  |
| `registry_name` | `mixed` |  |
| `schema_version` | `string` |  |
| `trust_card_contract` | `array` |  |
| `trust_doctrine` | `array` |  |

#### Example: List

```php
// list() returns an array of AgentIntegration entities, one per record (throws on error).
$agent_integrations = $client->AgentIntegration()->list();
```


### AgentMonitoring

Create an instance: `$agent_monitoring = $client->AgentMonitoring();`

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
| `metrics` | `array` |  |
| `openapi_url` | `string` |  |
| `rate_limits` | `array` |  |
| `registry_name` | `mixed` |  |
| `schema_version` | `string` |  |
| `service` | `string` |  |
| `uptime_seconds` | `float` |  |
| `version` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the AgentMonitoring record (throws on error).
$agent_monitoring = $client->AgentMonitoring()->load();
```


### AgentOpenapi

Create an instance: `$agent_openapi = $client->AgentOpenapi();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `components` | `array` |  |
| `info` | `array` |  |
| `openapi` | `mixed` |  |
| `paths` | `array` |  |
| `servers` | `array` |  |
| `tags` | `array` |  |

#### Example: List

```php
// list() returns an array of AgentOpenapi entities, one per record (throws on error).
$agent_openapis = $client->AgentOpenapi()->list();
```


### AgentPolicy

Create an instance: `$agent_policy = $client->AgentPolicy();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `external_agent_access` | `array` |  |
| `external_agent_webhooks` | `array` |  |
| `local_discovery_location_policy` | `array` |  |
| `location_handoff_flow` | `array` |  |
| `payment` | `array` |  |
| `publication` | `array` |  |
| `schema_version` | `mixed` |  |
| `trust_model_version` | `mixed` |  |
| `verification` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the AgentPolicy record (throws on error).
$agent_policy = $client->AgentPolicy()->load();
```


### AnonymousLocationProofRevocation

Create an instance: `$anonymous_location_proof_revocation = $client->AnonymousLocationProofRevocation();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accuracy_meters` | `float` |  |
| `captured_at` | `string` |  |
| `latitude` | `float` |  |
| `longitude` | `float` |  |

#### Example: Create

```php
$anonymous_location_proof_revocation = $client->AnonymousLocationProofRevocation()->create([
    "accuracy_meters" => null, // float
    "captured_at" => null, // string
    "latitude" => null, // float
    "longitude" => null, // float
]);
```


### BusinessApplication

Create an instance: `$business_application = $client->BusinessApplication();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `application` | `array` |  |
| `application_id` | `string` |  |
| `business_id` | `string` |  |
| `claim_id` | `mixed` |  |
| `created_at` | `string` |  |
| `existing_business` | `bool` |  |
| `files` | `array` |  |
| `listing_id` | `string` |  |
| `pipeline_status` | `string` |  |
| `status` | `mixed` |  |
| `trust_model_version` | `mixed` |  |
| `uploaded_files` | `float` |  |

#### Example: Create

```php
$business_application = $client->BusinessApplication()->create([
    "application" => null, // array
]);
```


### BusinessClaim

Create an instance: `$business_claim = $client->BusinessClaim();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `business_id` | `mixed` |  |
| `category` | `string` |  |
| `city` | `string` |  |
| `claim_id` | `string` |  |
| `claim_status` | `string` |  |
| `claimant_email` | `string` | Legacy field; authenticated owner identity wins. |
| `claimant_name` | `string` | Legacy field; authenticated owner identity wins. |
| `claimant_relationship` | `string` |  |
| `created_at` | `string` |  |
| `directory_listing_id` | `mixed` |  |
| `display_name` | `string` |  |
| `listing_id` | `string` |  |
| `notes` | `string` |  |
| `phone` | `string` |  |
| `source` | `string` |  |
| `source_type` | `string` |  |
| `source_url` | `string` |  |
| `state` | `string` |  |
| `status` | `mixed` |  |
| `verification` | `array` |  |
| `website` | `string` |  |

#### Example: Create

```php
$business_claim = $client->BusinessClaim()->create([
    "display_name" => null, // string
]);
```


### BusinessDeal

Create an instance: `$business_deal = $client->BusinessDeal();`

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
| `endsAt` | `mixed` |  |
| `id` | `string` |  |
| `promoCode` | `mixed` |  |
| `startsAt` | `mixed` |  |
| `terms` | `mixed` |  |
| `title` | `string` |  |

#### Example: List

```php
// list() returns an array of BusinessDeal entities, one per record (throws on error).
$business_deals = $client->BusinessDeal()->list(["id" => "example"]);
```


### BusinessIndex

Create an instance: `$business_index = $client->BusinessIndex();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `brand_assets` | `mixed` |  |
| `business_id` | `string` |  |
| `category` | `string` |  |
| `city` | `string` |  |
| `display_name` | `string` |  |
| `domain` | `mixed` |  |
| `insurance` | `array` |  |
| `phone` | `mixed` |  |
| `public_profile_url` | `string` |  |
| `review_reputation` | `array` |  |
| `state` | `string` |  |
| `street_address` | `mixed` | Owner-published street address where authorized. |
| `trust_card_url` | `string` |  |
| `trust_model_version` | `mixed` |  |
| `verification_class` | `string` |  |
| `verification_disclosure` | `string` |  |
| `website` | `mixed` |  |
| `zip` | `mixed` | Owner-published postal code where authorized. |

#### Example: List

```php
// list() returns an array of BusinessIndex entities, one per record (throws on error).
$business_indexs = $client->BusinessIndex()->list();
```


### BusinessOwner

Create an instance: `$business_owner = $client->BusinessOwner();`

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
| `acknowledge_data_effects` | `bool` |  |
| `actions` | `array` |  |
| `allowed_actions` | `array` |  |
| `amount_cents` | `float` | Within the top-up limits (default $25 to $5,000). |
| `applicant_location_requirements` | `string` |  |
| `apply_url` | `mixed` |  |
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
| `campaign` | `array` |  |
| `campaign_id` | `string` |  |
| `carrier_name` | `string` |  |
| `category` | `string` |  |
| `category_alias` | `string` |  |
| `category_aliases` | `array` |  |
| `change` | `array` |  |
| `city` | `string` |  |
| `client_message_id` | `string` |  |
| `code` | `string` |  |
| `compensation_text` | `string` |  |
| `confirm` | `bool` |  |
| `confirmation` | `string` |  |
| `connection_kind` | `string` |  |
| `consent_sha256` | `string` | SHA-256 of the acceptance text shown (from payment-authorizations). |
| `contact_email` | `mixed` |  |
| `content_type` | `string` |  |
| `country` | `string` |  |
| `coupon_code` | `string` |  |
| `createdAt` | `mixed` |  |
| `created_at` | `string` |  |
| `credential_id` | `string` |  |
| `credential_identifier` | `string` |  |
| `data_base64` | `string` |  |
| `delivery_contract` | `array` |  |
| `description` | `mixed` |  |
| `direct_apply` | `bool` |  |
| `disabled_reason` | `mixed` |  |
| `discount_label` | `string` |  |
| `display_name` | `string` |  |
| `employment_type` | `string` |  |
| `enabled` | `bool` |  |
| `endpoint` | `array` |  |
| `endpoint_id` | `string` |  |
| `endpoint_url` | `string` |  |
| `ends_at` | `mixed` |  |
| `event_id` | `string` |  |
| `event_types` | `array` |  |
| `evidence_observed_at` | `string` |  |
| `expected_updated_at` | `string` |  |
| `experience_level` | `string` |  |
| `expires_at` | `string` |  |
| `factor_id` | `string` |  |
| `failure_count` | `int` |  |
| `file_name` | `string` |  |
| `file_sha256` | `string` |  |
| `full_name` | `string` |  |
| `guideHandoffAnsweredAt` | `mixed` |  |
| `guideHandoffAt` | `mixed` |  |
| `guideHandoffDueAt` | `mixed` |  |
| `hours` | `mixed` |  |
| `id` | `string` |  |
| `idempotency_key` | `string` |  |
| `installation_id` | `string` |  |
| `issuer` | `string` |  |
| `jurisdiction` | `string` |  |
| `kind` | `string` |  |
| `label` | `string` |  |
| `lastMessageAt` | `mixed` |  |
| `lastMessageAuthorType` | `string` |  |
| `lastMessagePreview` | `string` |  |
| `last_delivery_at` | `mixed` |  |
| `launch` | `bool` |  |
| `license_number` | `string` |  |
| `messages` | `array` |  |
| `messagesTruncated` | `bool` |  |
| `monthly_cap_cents` | `float` |  |
| `name` | `string` |  |
| `note` | `string` |  |
| `one_time_display` | `mixed` |  |
| `ownerEmail` | `string` |  |
| `ownerLastReadAt` | `mixed` |  |
| `ownerName` | `string` |  |
| `ownerUserId` | `string` |  |
| `period` | `string` |  |
| `phone` | `string` |  |
| `platform` | `string` |  |
| `policy_number` | `string` |  |
| `postal_code` | `string` |  |
| `promo_code` | `mixed` |  |
| `push_token` | `string` |  |
| `radius_miles` | `float` |  |
| `reason` | `string` |  |
| `reason_category` | `string` |  |
| `reason_detail` | `string` |  |
| `registered_at` | `string` |  |
| `request_id` | `string` | Client id of this confirmation (8-100 characters); reuse it only to retry the same confirmation. |
| `requested_at` | `string` |  |
| `salary_currency` | `string` |  |
| `salary_max` | `mixed` |  |
| `salary_min` | `mixed` |  |
| `salary_period` | `string` |  |
| `save_card` | `bool` |  |
| `save_card_consent_sha256` | `string` | Only with save_card true: SHA-256 of the save-card consent text shown. |
| `schedule` | `string` |  |
| `service_areas` | `string` |  |
| `signing_secret` | `string` |  |
| `size_bytes` | `float` |  |
| `skills` | `array` |  |
| `source_url` | `string` |  |
| `starts_at` | `mixed` |  |
| `state` | `string` |  |
| `stated_expires_at` | `string` |  |
| `status` | `string` |  |
| `street_address` | `string` |  |
| `subject` | `string` |  |
| `submitted_identifier` | `string` |  |
| `supportLastReadAt` | `mixed` |  |
| `terms` | `mixed` |  |
| `terms_version` | `string` | Must be the current Advertiser Terms version. |
| `threshold_cents` | `float` |  |
| `ticketNumber` | `string` |  |
| `tier` | `string` |  |
| `title` | `string` |  |
| `total_job_openings` | `mixed` |  |
| `typing` | `bool` |  |
| `updatedAt` | `mixed` |  |
| `updated_at` | `string` |  |
| `url` | `string` | Public HTTPS receiver operated by the connecting principal or its agent runtime. |
| `website` | `string` |  |
| `workplace_type` | `string` |  |
| `zip` | `string` |  |

#### Example: Create

```php
$business_owner = $client->BusinessOwner()->create([
    "deal_id" => null, // string
    "account_id" => null, // string
    "account_role" => null, // string
    "acknowledge_data_effects" => null, // bool
    "actions" => null, // array
    "allowed_actions" => null, // array
    "amount_cents" => null, // float
    "asset_id" => null, // string
    "assigneeId" => null, // string
    "assigneeLabel" => null, // string
    "assigneeType" => null, // string
    "attempt_id" => null, // string
    "body" => null, // string
    "businessId" => null, // string
    "businessName" => null, // string
    "campaign" => null, // array
    "campaign_id" => null, // string
    "category_aliases" => null, // array
    "change" => null, // array
    "city" => null, // string
    "client_message_id" => null, // string
    "code" => null, // string
    "confirmation" => null, // string
    "connection_kind" => null, // string
    "consent_sha256" => null, // string
    "content_type" => null, // string
    "createdAt" => null, // mixed
    "created_at" => null, // string
    "credential_id" => null, // string
    "credential_identifier" => null, // string
    "data_base64" => null, // string
    "delivery_contract" => null, // array
    "disabled_reason" => null, // mixed
    "discount_label" => null, // string
    "display_name" => null, // string
    "enabled" => null, // bool
    "endpoint" => null, // array
    "endpoint_id" => null, // string
    "endpoint_url" => null, // string
    "event_id" => null, // string
    "event_types" => null, // array
    "expected_updated_at" => null, // string
    "factor_id" => null, // string
    "failure_count" => null, // int
    "file_name" => null, // string
    "file_sha256" => null, // string
    "id" => null, // string
    "installation_id" => null, // string
    "issuer" => null, // string
    "kind" => null, // string
    "lastMessageAt" => null, // mixed
    "lastMessageAuthorType" => null, // string
    "lastMessagePreview" => null, // string
    "last_delivery_at" => null, // mixed
    "license_number" => null, // string
    "messages" => null, // array
    "messagesTruncated" => null, // bool
    "name" => null, // string
    "one_time_display" => null, // mixed
    "ownerEmail" => null, // string
    "ownerLastReadAt" => null, // mixed
    "ownerName" => null, // string
    "ownerUserId" => null, // string
    "phone" => null, // string
    "platform" => null, // string
    "push_token" => null, // string
    "radius_miles" => null, // float
    "reason" => null, // string
    "registered_at" => null, // string
    "request_id" => null, // string
    "requested_at" => null, // string
    "save_card" => null, // bool
    "signing_secret" => null, // string
    "size_bytes" => null, // float
    "state" => null, // string
    "street_address" => null, // string
    "supportLastReadAt" => null, // mixed
    "terms_version" => null, // string
    "ticketNumber" => null, // string
    "tier" => null, // string
    "title" => null, // string
    "updatedAt" => null, // mixed
    "updated_at" => null, // string
    "url" => null, // string
    "website" => null, // string
]);
```


### BusinessReview

Create an instance: `$business_review = $client->BusinessReview();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the BusinessReview record (throws on error).
$business_review = $client->BusinessReview()->load(["id" => "business_review_id"]);
```


### ChatAttachment

Create an instance: `$chat_attachment = $client->ChatAttachment();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `byteSize` | `int` |  |
| `content_type` | `mixed` |  |
| `data_base64` | `string` |  |
| `fileName` | `string` |  |
| `file_name` | `string` |  |
| `id` | `string` |  |
| `mediaType` | `string` |  |
| `size_bytes` | `int` |  |

#### Example: Create

```php
$chat_attachment = $client->ChatAttachment()->create([
    "conversation_id" => null, // string
    "content_type" => null, // mixed
    "data_base64" => null, // string
    "file_name" => null, // string
    "size_bytes" => null, // int
]);
```


### ChatAttachmentUrl

Create an instance: `$chat_attachment_url = $client->ChatAttachmentUrl();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `byte_size` | `int` |  |
| `expires_in_seconds` | `mixed` |  |
| `file_name` | `string` |  |
| `id` | `string` |  |
| `media_type` | `string` |  |
| `signed_url` | `string` |  |

#### Example: Create

```php
$chat_attachment_url = $client->ChatAttachmentUrl()->create([
    "attachment_id" => null, // string
    "conversation_id" => null, // string
]);
```


### ClaimVerificationSend

Create an instance: `$claim_verification_send = $client->ClaimVerificationSend();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `challenge_id` | `string` | Opaque v3 SMS or owner-email challenge UUID. |
| `channel` | `mixed` |  |
| `claim_id` | `string` |  |
| `destination_hint` | `string` |  |
| `expires_in_seconds` | `float` |  |
| `provider_status` | `mixed` | V3 provider request state. |
| `recipient_delivery_confirmed` | `mixed` | V3 currently has no final-delivery provider event for this receipt. |
| `request_id` | `string` | Caller-generated idempotency UUID. |
| `status` | `mixed` |  |

#### Example: Create

```php
$claim_verification_send = $client->ClaimVerificationSend()->create([
    "claim_id" => null, // string
]);
```


### ClaimVerificationVerify

Create an instance: `$claim_verification_verify = $client->ClaimVerificationVerify();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `business_id` | `mixed` |  |
| `challenge_id` | `string` | Exact challenge UUID returned by the v3 SMS or owner-email send. |
| `channel` | `mixed` |  |
| `claim_id` | `string` |  |
| `code` | `string` |  |
| `method` | `mixed` |  |
| `publication` | `array` |  |
| `status` | `mixed` |  |
| `transfer_review_required` | `mixed` |  |
| `trust_model_version` | `mixed` |  |

#### Example: Create

```php
$claim_verification_verify = $client->ClaimVerificationVerify()->create([
    "claim_id" => null, // string
    "code" => null, // string
]);
```


### CommercialClick

Create an instance: `$commercial_click = $client->CommercialClick();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action_type` | `mixed` |  |
| `ad_receipt` | `string` | Opaque server-signed receipt of a served Sponsored ad, sent back unchanged with a profile, website or call tap. |
| `billable` | `bool` |  |
| `billing_event_id` | `mixed` |  |
| `billing_status` | `string` |  |
| `business_id` | `string` |  |
| `category` | `string` |  |
| `city` | `string` |  |
| `click_id` | `string` |  |
| `commercial_status` | `mixed` |  |
| `created_at` | `string` |  |
| `directory_listing_id` | `string` | Deprecated alias of listing_id. |
| `display_name` | `string` |  |
| `fallback_interaction_id` | `string` |  |
| `ledger_status` | `string` |  |
| `listing_id` | `string` |  |
| `metadata` | `array` |  |
| `migration_required` | `bool` |  |
| `page_path` | `string` |  |
| `referrer` | `string` |  |
| `source_type` | `mixed` |  |
| `state` | `string` |  |
| `status` | `mixed` |  |
| `storage` | `mixed` |  |
| `surface` | `mixed` | Where the Sponsored ad was shown (with ad_receipt). |
| `target_url` | `string` |  |

#### Example: Create

```php
$commercial_click = $client->CommercialClick()->create([
    "action_type" => null, // mixed
    "source_type" => null, // mixed
]);
```


### ContactRecorded

Create an instance: `$contact_recorded = $client->ContactRecorded();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `business_id` | `string` |  |
| `contact_recorded` | `mixed` |  |
| `interaction_id` | `string` |  |
| `ok` | `mixed` |  |
| `policy` | `string` |  |
| `review_upgraded` | `mixed` |  |
| `status` | `mixed` |  |
| `trust_weight` | `mixed` |  |
| `verified` | `bool` |  |

#### Example: Create

```php
$contact_recorded = $client->ContactRecorded()->create([
    "business_id" => null, // string
]);
```


### Conversation

Create an instance: `$conversation = $client->Conversation();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `string` |  |
| `conversation_id` | `string` | Exact conversation referenced by a webhook; returns zero or one scoped thread. |
| `conversations` | `array` |  |
| `count` | `float` |  |
| `cursor` | `string` | Opaque pagination cursor returned by the previous page. |
| `limit` | `float` |  |
| `pagination` | `array` |  |

#### Example: Create

```php
$conversation = $client->Conversation()->create([
    "account_id" => null, // string
]);
```


### ConversationClose

Create an instance: `$conversation_close = $client->ConversationClose();`

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
| `status` | `mixed` |  |

#### Example: Create

```php
$conversation_close = $client->ConversationClose()->create([
    "id" => null, // string
]);
```


### ConversationReport

Create an instance: `$conversation_report = $client->ConversationReport();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `detail` | `string` |  |
| `id` | `string` |  |
| `reason` | `mixed` |  |
| `status` | `mixed` |  |

#### Example: Create

```php
$conversation_report = $client->ConversationReport()->create([
    "id" => null, // string
    "reason" => null, // mixed
]);
```


### ConversationWorkflow

Create an instance: `$conversation_workflow = $client->ConversationWorkflow();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `priority` | `mixed` |  |
| `status` | `mixed` |  |

#### Example: Create

```php
$conversation_workflow = $client->ConversationWorkflow()->create([
    "message_id" => null, // string
]);
```


### CreateAgentApiKey

Create an instance: `$create_agent_api_key = $client->CreateAgentApiKey();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `string` |  |
| `allowed_actions` | `array` |  |
| `allowed_business_ids` | `array` |  |
| `created_by` | `string` |  |
| `key` | `array` |  |
| `label` | `string` |  |
| `monthly_quota` | `float` |  |
| `notes` | `string` |  |
| `one_time_display` | `mixed` |  |
| `rate_limit_per_minute` | `float` |  |
| `raw_key` | `string` |  |
| `status` | `mixed` |  |

#### Example: Create

```php
$create_agent_api_key = $client->CreateAgentApiKey()->create([
    "account_id" => null, // string
]);
```


### Customer

Create an instance: `$customer = $client->Customer();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_provider` | `string` |  |
| `avatar_url` | `mixed` | Short-lived signed display URL for a private avatar object, or null. |
| `city` | `mixed` |  |
| `created_at` | `mixed` |  |
| `email` | `string` |  |
| `full_name` | `string` |  |
| `id` | `string` |  |
| `phone` | `mixed` |  |
| `search_category` | `string` |  |
| `service_need` | `string` |  |
| `state` | `mixed` |  |
| `status` | `mixed` |  |
| `updated_at` | `mixed` |  |

#### Example: Create

```php
$customer = $client->Customer()->create([
]);
```


### CustomerAccount

Create an instance: `$customer_account = $client->CustomerAccount();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `string` |  |
| `account_role` | `string` |  |
| `accuracy_meters` | `float` |  |
| `acknowledge_data_effects` | `bool` |  |
| `actions` | `array` |  |
| `agent_key_id` | `string` |  |
| `agent_receives_coordinates` | `bool` |  |
| `all_paused` | `bool` |  |
| `app_attest_registered` | `bool` |  |
| `assertion` | `string` |  |
| `attestation` | `string` |  |
| `author_label` | `string` |  |
| `author_type` | `string` |  |
| `binding` | `mixed` |  |
| `body` | `string` |  |
| `business_id` | `mixed` |  |
| `capture_source` | `mixed` |  |
| `captured_at` | `string` |  |
| `challenge` | `string` |  |
| `challenge_id` | `string` |  |
| `client_message_id` | `string` |  |
| `completed` | `bool` |  |
| `confirmation` | `string` |  |
| `connection_id` | `string` |  |
| `connection_kind` | `string` |  |
| `continuation` | `mixed` | The continuation from the previous response, sent back unchanged to get the next results. |
| `coordinates_returned` | `bool` |  |
| `created_at` | `string` |  |
| `credential_id` | `string` |  |
| `declined` | `bool` |  |
| `delivery_contract` | `array` |  |
| `disabled_reason` | `mixed` |  |
| `disclosure` | `string` |  |
| `enabled` | `bool` |  |
| `endpoint` | `array` |  |
| `endpoint_id` | `string` |  |
| `endpoint_url` | `string` |  |
| `environment` | `string` |  |
| `event_id` | `string` |  |
| `event_types` | `array` |  |
| `failure_count` | `int` |  |
| `handoff_id` | `string` |  |
| `has_more` | `bool` |  |
| `id` | `string` |  |
| `idempotent_replay` | `bool` |  |
| `installation_id` | `string` |  |
| `key_id` | `string` |  |
| `last_delivery_at` | `mixed` |  |
| `latitude` | `float` |  |
| `location` | `mixed` | An opaque location reference from the website's own location controls. |
| `longitude` | `float` |  |
| `message_alerts_enabled` | `bool` |  |
| `messages` | `array` |  |
| `mode` | `string` | fallback: a direct search answered because the language model was unavailable. |
| `name` | `string` |  |
| `oauth_grant_id` | `mixed` |  |
| `one_time_display` | `mixed` |  |
| `platform` | `string` |  |
| `policy` | `string` |  |
| `purpose` | `string` |  |
| `push_token` | `string` |  |
| `reason` | `string` |  |
| `registered_at` | `string` |  |
| `reply` | `string` |  |
| `request_mode` | `string` |  |
| `requested_at` | `string` |  |
| `results` | `array` |  |
| `schema_version` | `string` |  |
| `selected_at` | `string` |  |
| `signed_in` | `bool` |  |
| `signing_secret` | `string` |  |
| `status` | `mixed` |  |
| `updated_at` | `string` |  |
| `url` | `string` | Public HTTPS receiver operated by the connecting principal or its agent runtime. |
| `usable_until` | `string` |  |
| `use_mode` | `string` |  |

#### Example: Create

```php
$customer_account = $client->CustomerAccount()->create([
    "account_id" => null, // string
    "account_role" => null, // string
    "accuracy_meters" => null, // float
    "acknowledge_data_effects" => null, // bool
    "actions" => null, // array
    "agent_key_id" => null, // string
    "agent_receives_coordinates" => null, // bool
    "all_paused" => null, // bool
    "app_attest_registered" => null, // bool
    "assertion" => null, // string
    "attestation" => null, // string
    "author_label" => null, // string
    "author_type" => null, // string
    "binding" => null, // mixed
    "body" => null, // string
    "business_id" => null, // mixed
    "capture_source" => null, // mixed
    "captured_at" => null, // string
    "challenge" => null, // string
    "challenge_id" => null, // string
    "client_message_id" => null, // string
    "completed" => null, // bool
    "confirmation" => null, // string
    "connection_id" => null, // string
    "connection_kind" => null, // string
    "coordinates_returned" => null, // bool
    "created_at" => null, // string
    "credential_id" => null, // string
    "declined" => null, // bool
    "delivery_contract" => null, // array
    "disabled_reason" => null, // mixed
    "disclosure" => null, // string
    "enabled" => null, // bool
    "endpoint" => null, // array
    "endpoint_id" => null, // string
    "endpoint_url" => null, // string
    "environment" => null, // string
    "event_id" => null, // string
    "event_types" => null, // array
    "failure_count" => null, // int
    "handoff_id" => null, // string
    "has_more" => null, // bool
    "id" => null, // string
    "idempotent_replay" => null, // bool
    "installation_id" => null, // string
    "key_id" => null, // string
    "last_delivery_at" => null, // mixed
    "latitude" => null, // float
    "longitude" => null, // float
    "message_alerts_enabled" => null, // bool
    "messages" => null, // array
    "mode" => null, // string
    "oauth_grant_id" => null, // mixed
    "one_time_display" => null, // mixed
    "platform" => null, // string
    "policy" => null, // string
    "purpose" => null, // string
    "push_token" => null, // string
    "registered_at" => null, // string
    "reply" => null, // string
    "request_mode" => null, // string
    "requested_at" => null, // string
    "results" => null, // array
    "schema_version" => null, // string
    "selected_at" => null, // string
    "signed_in" => null, // bool
    "signing_secret" => null, // string
    "status" => null, // mixed
    "updated_at" => null, // string
    "url" => null, // string
    "usable_until" => null, // string
    "use_mode" => null, // string
]);
```


### CustomerLocationProofRevocation

Create an instance: `$customer_location_proof_revocation = $client->CustomerLocationProofRevocation();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accuracy_meters` | `float` |  |
| `captured_at` | `string` |  |
| `latitude` | `float` |  |
| `longitude` | `float` |  |

#### Example: Create

```php
$customer_location_proof_revocation = $client->CustomerLocationProofRevocation()->create([
    "accuracy_meters" => null, // float
    "captured_at" => null, // string
    "latitude" => null, // float
    "longitude" => null, // float
]);
```


### DestinationAddressSuggestion

Create an instance: `$destination_address_suggestion = $client->DestinationAddressSuggestion();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `input` | `string` | Normalized partial US service-address text. |
| `suggestions` | `array` |  |

#### Example: Create

```php
$destination_address_suggestion = $client->DestinationAddressSuggestion()->create([
    "input" => null, // string
]);
```


### DestinationLocationProof

Create an instance: `$destination_location_proof = $client->DestinationLocationProof();`

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

```php
$destination_location_proof = $client->DestinationLocationProof()->create([
    "address" => null, // string
]);
```


### DomainTrustCard

Create an instance: `$domain_trust_card = $client->DomainTrustCard();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `business_id` | `string` |  |
| `domain` | `string` |  |
| `schema_version` | `mixed` |  |
| `trust_card` | `array` |  |
| `trust_card_url` | `string` |  |
| `trust_model_version` | `mixed` |  |
| `verification_class` | `mixed` |  |
| `verification_disclosure` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the DomainTrustCard record (throws on error).
$domain_trust_card = $client->DomainTrustCard()->load(["domain_key" => "domain_key"]);
```


### GeoContext

Create an instance: `$geo_context = $client->GeoContext();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the GeoContext record (throws on error).
$geo_context = $client->GeoContext()->load();
```


### Health

Create an instance: `$health = $client->Health();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_phone_location_bridge` | `array` |  |
| `build_sha` | `string` |  |
| `business_review_access` | `array` |  |
| `contract_version` | `string` |  |
| `external_agent_webhooks` | `array` |  |
| `external_agent_webhooks_enabled` | `bool` |  |
| `ios_app_attest_anonymous_location` | `array` |  |
| `location_choices` | `array` |  |
| `location_handoff` | `array` |  |
| `mobile_push` | `mixed` |  |
| `ok` | `mixed` |  |
| `service` | `string` |  |
| `sponsored_ordering` | `array` |  |
| `trust_model_version` | `mixed` |  |
| `version` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Health record (throws on error).
$health = $client->Health()->load();
```


### JobApplication

Create an instance: `$job_application = $client->JobApplication();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `string` |  |
| `already_withdrawn` | `bool` |  |
| `application` | `array` |  |
| `applications` | `array` |  |
| `billing` | `array` |  |
| `business_id` | `string` |  |
| `count` | `float` |  |
| `cover_note` | `string` |  |
| `free_to_apply` | `bool` |  |
| `id` | `string` |  |
| `job_id` | `string` |  |
| `limit` | `float` |  |
| `offset` | `float` |  |
| `resume` | `array` |  |
| `retention_note` | `string` |  |
| `status` | `string` |  |

#### Example: Create

```php
$job_application = $client->JobApplication()->create([
    "job_id" => null, // string
    "resume" => null, // array
]);
```


### JobResumeSignedUrl

Create an instance: `$job_resume_signed_url = $client->JobResumeSignedUrl();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `application_id` | `string` |  |
| `content_type` | `string` |  |
| `expires_in_seconds` | `float` |  |
| `resume_file_name` | `string` |  |
| `signed_url` | `string` |  |
| `size_bytes` | `float` |  |
| `status` | `mixed` |  |

#### Example: Create

```php
$job_resume_signed_url = $client->JobResumeSignedUrl()->create([
    "job_application_id" => null, // string
]);
```


### LocationHandoff

Create an instance: `$location_handoff = $client->LocationHandoff();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```php
$location_handoff = $client->LocationHandoff()->create([
]);
```


### Message

Create an instance: `$message = $client->Message();`

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
| `delivery` | `mixed` |  |
| `idempotent_replay` | `bool` |  |
| `interaction_id` | `string` |  |
| `message` | `string` |  |
| `moderation_required` | `mixed` |  |
| `source_path` | `string` |  |
| `status` | `mixed` |  |
| `subject` | `string` |  |
| `target_business_id` | `string` |  |
| `target_business_name` | `string` |  |
| `target_business_source` | `string` |  |

#### Example: Create

```php
$message = $client->Message()->create([
    "account_id" => null, // string
    "client_message_id" => null, // string
    "message" => null, // string
    "subject" => null, // string
    "target_business_id" => null, // string
    "target_business_name" => null, // string
    "target_business_source" => null, // string
]);
```


### ModeratedAction

Create an instance: `$moderated_action = $client->ModeratedAction();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actions` | `array` |  |
| `body` | `string` |  |
| `client_request_id` | `string` |  |
| `content_type` | `string` |  |
| `continuation` | `mixed` | The continuation from the previous response, sent back unchanged to get the next results. |
| `coordinates_returned` | `bool` |  |
| `disclosure` | `string` |  |
| `enabled` | `bool` |  |
| `file_sha256` | `string` |  |
| `has_more` | `bool` |  |
| `human_confirmation` | `bool` |  |
| `intent_id` | `string` |  |
| `kind` | `string` |  |
| `knowledgeVersion` | `string` |  |
| `limits` | `array` |  |
| `links` | `array` |  |
| `location` | `array` | An opaque location reference from the website's own location controls. |
| `message` | `string` |  |
| `messages` | `array` |  |
| `mode` | `string` | fallback: a direct search answered because the language model was unavailable. |
| `name` | `string` |  |
| `needsHuman` | `bool` |  |
| `policy` | `array` | Human schedule and separate claim-review policy. |
| `question` | `string` |  |
| `reply` | `string` |  |
| `result` | `string` |  |
| `results` | `array` |  |
| `scan_authority_id` | `string` |  |
| `scanner` | `string` |  |
| `scanner_version` | `string` |  |
| `schema_version` | `string` |  |
| `searcher_latitude` | `float` |  |
| `searcher_longitude` | `float` |  |
| `signature` | `string` |  |
| `signed_in` | `bool` |  |
| `size_bytes` | `float` |  |
| `subject` | `string` |  |
| `target_business_id` | `string` |  |
| `topic` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ModeratedAction record (throws on error).
$moderated_action = $client->ModeratedAction()->load();
```

#### Example: Create

```php
$moderated_action = $client->ModeratedAction()->create([
    "content_type" => null, // string
    "file_sha256" => null, // string
    "intent_id" => null, // string
    "messages" => null, // array
    "question" => null, // string
    "result" => null, // string
    "scan_authority_id" => null, // string
    "scanner" => null, // string
    "scanner_version" => null, // string
    "size_bytes" => null, // float
    "target_business_id" => null, // string
]);
```


### OpenApiDocument

Create an instance: `$open_api_document = $client->OpenApiDocument();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `components` | `array` |  |
| `info` | `array` |  |
| `openapi` | `mixed` |  |
| `paths` | `array` |  |
| `servers` | `array` |  |
| `tags` | `array` |  |

#### Example: List

```php
// list() returns an array of OpenApiDocument entities, one per record (throws on error).
$open_api_documents = $client->OpenApiDocument()->list();
```


### Operation

Create an instance: `$operation = $client->Operation();`

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
| `active` | `bool` |  |
| `active_or_good_standing` | `bool` |  |
| `ai_draft_id` | `string` |  |
| `allowed_actions` | `array` |  |
| `alt` | `string` |  |
| `amount_cents` | `float` | Whole cents, non-zero, at most 1,000,000 either way; a promotional credit is positive. |
| `amount_off_cents` | `float` |  |
| `api_key` | `string` |  |
| `applies_to_period` | `string` |  |
| `applies_to_tier` | `mixed` |  |
| `assigned_admin_user_id` | `mixed` |  |
| `assigneeId` | `string` |  |
| `assigneeLabel` | `string` |  |
| `assigneeType` | `string` |  |
| `assignee_id` | `string` |  |
| `assignee_label` | `string` |  |
| `assignee_type` | `string` | AI assignment is unavailable while the customer-support workload is disconnected. |
| `assistant_enabled` | `bool` |  |
| `base_url` | `string` |  |
| `body` | `string` |  |
| `businessId` | `string` |  |
| `businessName` | `string` |  |
| `business_id` | `mixed` |  |
| `business_ids` | `array` |  |
| `campaign_id` | `string` |  |
| `campaign_ids` | `array` |  |
| `caption` | `string` |  |
| `case_status` | `string` |  |
| `catalog` | `array` |  |
| `category` | `string` |  |
| `category_alias` | `string` |  |
| `chunk_size` | `float` |  |
| `city` | `string` |  |
| `code` | `string` |  |
| `confidence` | `float` |  |
| `config` | `array` | Complete validated pricing configuration. |
| `confirm` | `bool` |  |
| `confirm_admin` | `bool` |  |
| `confirmation` | `string` |  |
| `connection_id` | `string` |  |
| `connection_kind` | `string` |  |
| `content_type` | `string` |  |
| `context_id` | `string` |  |
| `context_type` | `string` |  |
| `createdAt` | `mixed` |  |
| `created_at` | `string` |  |
| `credential_expires_at` | `string` | Expiration date printed on the license. |
| `credential_id` | `string` |  |
| `custom_wire` | `string` |  |
| `data_base64` | `string` |  |
| `decision` | `string` |  |
| `dedupe_ack` | `bool` |  |
| `delivery_contract` | `array` |  |
| `disabled_reason` | `mixed` |  |
| `discount_type` | `string` |  |
| `display_name` | `string` |  |
| `disposition` | `string` |  |
| `draft` | `array` |  |
| `duration` | `string` |  |
| `duration_in_months` | `mixed` |  |
| `email` | `string` |  |
| `enabled` | `bool` |  |
| `endpoint` | `array` |  |
| `endpoint_id` | `string` |  |
| `endpoint_url` | `string` |  |
| `ends_at` | `string` |  |
| `environment_fallback` | `mixed` |  |
| `event_id` | `string` |  |
| `event_types` | `array` |  |
| `expected_allowed_actions` | `array` |  |
| `expected_key_id` | `string` |  |
| `expected_updated_at` | `string` |  |
| `expected_version` | `float` |  |
| `expires_at` | `string` | Promotional credit only: ISO date-time 1 hour to 2 years ahead, disclosed to the owner. |
| `fact_id` | `string` |  |
| `facts` | `array` |  |
| `failure_count` | `int` |  |
| `fields` | `array` | Validated fields for this fixed content-block type. |
| `file_name` | `string` |  |
| `guideHandoffAnsweredAt` | `mixed` |  |
| `guideHandoffAt` | `mixed` |  |
| `guideHandoffDueAt` | `mixed` |  |
| `height` | `float` |  |
| `historic_association_checked` | `bool` |  |
| `hold` | `string` |  |
| `holder_name_match` | `bool` |  |
| `hours` | `array` |  |
| `id` | `string` |  |
| `idempotency_key` | `string` |  |
| `identifier_match` | `bool` |  |
| `in_use` | `array` |  |
| `instruction` | `string` |  |
| `invited` | `bool` |  |
| `key_check` | `mixed` |  |
| `kind` | `string` |  |
| `label` | `string` |  |
| `lastMessageAt` | `mixed` |  |
| `lastMessageAuthorType` | `string` |  |
| `lastMessagePreview` | `string` |  |
| `last_delivery_at` | `mixed` |  |
| `last_error_code` | `mixed` |  |
| `last_probe_at` | `mixed` |  |
| `last_problem` | `mixed` |  |
| `legal_name` | `string` |  |
| `limit` | `float` |  |
| `make_active` | `bool` |  |
| `max_cents` | `float` |  |
| `max_redemptions` | `mixed` |  |
| `messages` | `array` |  |
| `messagesTruncated` | `bool` |  |
| `min_cents` | `float` |  |
| `model` | `string` |  |
| `model_id` | `string` |  |
| `name` | `string` |  |
| `note` | `string` |  |
| `notes` | `string` |  |
| `observed_at` | `string` |  |
| `one_time_display` | `mixed` |  |
| `outcome` | `string` |  |
| `ownerEmail` | `string` |  |
| `ownerLastReadAt` | `mixed` |  |
| `ownerName` | `string` |  |
| `ownerUserId` | `string` |  |
| `owner_reason_code` | `string` | Controlled owner-visible rejection reason. |
| `per_customer_limit` | `float` |  |
| `percent_off` | `float` |  |
| `phone` | `string` |  |
| `policyVersion` | `string` |  |
| `priority` | `string` |  |
| `provider` | `string` |  |
| `providers` | `array` |  |
| `purpose_code` | `string` |  |
| `rank_bid_cents` | `int` |  |
| `reason` | `string` |  |
| `reason_category` | `string` |  |
| `reason_code` | `string` |  |
| `reason_detail` | `string` |  |
| `reference` | `string` |  |
| `reject_reason` | `string` |  |
| `related_case_id` | `string` |  |
| `report_id` | `int` |  |
| `report_ids` | `array` |  |
| `reserve_cents` | `float` | 100-10000; never below $1.00. |
| `resolution_note` | `string` |  |
| `review_notes` | `string` |  |
| `revision` | `int` |  |
| `role` | `string` |  |
| `rows` | `array` |  |
| `run` | `array` |  |
| `schema_version` | `string` |  |
| `scope` | `string` |  |
| `search` | `string` |  |
| `settings` | `array` |  |
| `signing_secret` | `string` |  |
| `size_bytes` | `float` |  |
| `sla_due_at` | `mixed` |  |
| `source` | `string` |  |
| `source_authority` | `string` | Exact official authority name. |
| `source_category_slug` | `string` |  |
| `source_scope_checked` | `bool` |  |
| `source_url` | `string` | Exact HTTPS official source URL. |
| `starts_at` | `mixed` |  |
| `state` | `string` | Bulk by area: every ad of the advertisers in this two-letter U.S. |
| `status` | `string` |  |
| `storage` | `string` |  |
| `street_address` | `string` |  |
| `subject` | `string` |  |
| `supportLastReadAt` | `mixed` |  |
| `target_category` | `string` |  |
| `taxonomy_category_aliases` | `array` |  |
| `ticketNumber` | `string` |  |
| `tier` | `string` |  |
| `typing` | `bool` |  |
| `until` | `string` |  |
| `updatedAt` | `mixed` |  |
| `updated_at` | `string` |  |
| `url` | `string` | Public HTTPS receiver operated by the connecting principal or its agent runtime. |
| `valid_until` | `string` |  |
| `value` | `string` |  |
| `verification_method` | `string` |  |
| `verified_at` | `mixed` |  |
| `verified_service_scope` | `array` |  |
| `version` | `string` |  |
| `website` | `string` |  |
| `width` | `float` |  |
| `window_hours` | `float` | 1-744, default 48. |
| `workload` | `string` |  |
| `zip` | `string` |  |

#### Example: Create

```php
$operation = $client->Operation()->create([
    "coupon_id" => null, // string
    "account_id" => null, // string
    "allowed_actions" => null, // array
    "amount_cents" => null, // float
    "api_key" => null, // string
    "assigneeId" => null, // string
    "assigneeLabel" => null, // string
    "assigneeType" => null, // string
    "assistant_enabled" => null, // bool
    "body" => null, // string
    "businessId" => null, // string
    "businessName" => null, // string
    "business_ids" => null, // array
    "catalog" => null, // array
    "code" => null, // string
    "config" => null, // array
    "confirmation" => null, // string
    "connection_id" => null, // string
    "connection_kind" => null, // string
    "content_type" => null, // string
    "context_id" => null, // string
    "context_type" => null, // string
    "createdAt" => null, // mixed
    "created_at" => null, // string
    "credential_id" => null, // string
    "data_base64" => null, // string
    "decision" => null, // string
    "delivery_contract" => null, // array
    "disabled_reason" => null, // mixed
    "discount_type" => null, // string
    "display_name" => null, // string
    "disposition" => null, // string
    "draft" => null, // array
    "email" => null, // string
    "enabled" => null, // bool
    "endpoint" => null, // array
    "endpoint_id" => null, // string
    "endpoint_url" => null, // string
    "ends_at" => null, // string
    "environment_fallback" => null, // mixed
    "event_id" => null, // string
    "event_types" => null, // array
    "expected_allowed_actions" => null, // array
    "expected_key_id" => null, // string
    "expected_updated_at" => null, // string
    "expected_version" => null, // float
    "fact_id" => null, // string
    "facts" => null, // array
    "failure_count" => null, // int
    "fields" => null, // array
    "file_name" => null, // string
    "historic_association_checked" => null, // bool
    "hold" => null, // string
    "hours" => null, // array
    "id" => null, // string
    "in_use" => null, // array
    "invited" => null, // bool
    "key_check" => null, // mixed
    "kind" => null, // string
    "label" => null, // string
    "lastMessageAt" => null, // mixed
    "lastMessageAuthorType" => null, // string
    "lastMessagePreview" => null, // string
    "last_delivery_at" => null, // mixed
    "last_error_code" => null, // mixed
    "last_probe_at" => null, // mixed
    "last_problem" => null, // mixed
    "make_active" => null, // bool
    "max_cents" => null, // float
    "messages" => null, // array
    "messagesTruncated" => null, // bool
    "min_cents" => null, // float
    "model" => null, // string
    "model_id" => null, // string
    "name" => null, // string
    "one_time_display" => null, // mixed
    "outcome" => null, // string
    "ownerEmail" => null, // string
    "ownerLastReadAt" => null, // mixed
    "ownerName" => null, // string
    "ownerUserId" => null, // string
    "policyVersion" => null, // string
    "provider" => null, // string
    "providers" => null, // array
    "purpose_code" => null, // string
    "rank_bid_cents" => null, // int
    "reference" => null, // string
    "report_ids" => null, // array
    "reserve_cents" => null, // float
    "resolution_note" => null, // string
    "revision" => null, // int
    "rows" => null, // array
    "run" => null, // array
    "schema_version" => null, // string
    "scope" => null, // string
    "settings" => null, // array
    "signing_secret" => null, // string
    "size_bytes" => null, // float
    "source_scope_checked" => null, // bool
    "storage" => null, // string
    "subject" => null, // string
    "supportLastReadAt" => null, // mixed
    "taxonomy_category_aliases" => null, // array
    "ticketNumber" => null, // string
    "tier" => null, // string
    "updatedAt" => null, // mixed
    "updated_at" => null, // string
    "url" => null, // string
    "value" => null, // string
    "verification_method" => null, // string
    "verified_at" => null, // mixed
    "workload" => null, // string
]);
```


### OwnerNotification

Create an instance: `$owner_notification = $client->OwnerNotification();`

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
| `eventType` | `mixed` |  |
| `id` | `string` |  |
| `readAt` | `mixed` |  |
| `resourceId` | `string` |  |
| `resourceKind` | `mixed` |  |
| `resourceUrl` | `string` |  |
| `summary` | `string` |  |
| `webhookStatus` | `string` |  |

#### Example: Create

```php
$owner_notification = $client->OwnerNotification()->create([
    "notification_id" => null, // string
]);
```


### OwnerNotificationSetting

Create an instance: `$owner_notification_setting = $client->OwnerNotificationSetting();`

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
| `emailEnabled` | `bool` |  |
| `email_enabled` | `bool` |  |
| `eventTypeSubscriptions` | `array` |  |
| `event_types` | `array` |  |
| `updatedAt` | `string` |  |
| `webhookEnabled` | `bool` |  |
| `webhook_enabled` | `bool` |  |

#### Example: Create

```php
$owner_notification_setting = $client->OwnerNotificationSetting()->create([
]);
```


### OwnerWebhookEndpoint

Create an instance: `$owner_webhook_endpoint = $client->OwnerWebhookEndpoint();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `businessId` | `string` |  |
| `createdAt` | `string` |  |
| `enabled` | `bool` |  |
| `eventTypeSubscriptions` | `array` |  |
| `failureCount` | `float` |  |
| `id` | `string` |  |
| `lastDeliveryAt` | `mixed` |  |
| `updatedAt` | `string` |  |
| `url` | `string` |  |

#### Example: Create

```php
$owner_webhook_endpoint = $client->OwnerWebhookEndpoint()->create([
    "webhook_id" => null, // string
]);
```


### OwnerWebhookRegistration

Create an instance: `$owner_webhook_registration = $client->OwnerWebhookRegistration();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `business_id` | `string` |  |
| `endpoint` | `array` |  |
| `event_types` | `array` |  |
| `one_time_display` | `mixed` |  |
| `signing_secret` | `string` |  |
| `status` | `mixed` |  |
| `url` | `string` |  |

#### Example: Create

```php
$owner_webhook_registration = $client->OwnerWebhookRegistration()->create([
    "url" => null, // string
]);
```


### Pricing

Create an instance: `$pricing = $client->Pricing();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `billing` | `array` |  |
| `branch_add_ons` | `array` |  |
| `currency` | `mixed` |  |
| `generated_at` | `string` |  |
| `neutrality` | `string` |  |
| `plans` | `array` |  |
| `promotions` | `array` |  |
| `published_at` | `mixed` |  |
| `radius_extension` | `array` |  |
| `revision_id` | `mixed` |  |
| `source` | `mixed` |  |
| `trust_model_version` | `mixed` |  |

#### Example: List

```php
// list() returns an array of Pricing entities, one per record (throws on error).
$pricings = $client->Pricing()->list();
```


### PromoteVerifiedTransaction

Create an instance: `$promote_verified_transaction = $client->PromoteVerifiedTransaction();`

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
| `ok` | `mixed` |  |
| `review_upgraded` | `bool` |  |
| `status` | `mixed` |  |
| `trust_weight` | `mixed` |  |
| `verified` | `bool` |  |

#### Example: Create

```php
$promote_verified_transaction = $client->PromoteVerifiedTransaction()->create([
    "business_id" => null, // string
    "evidence_id" => null, // string
]);
```


### PublicContent

Create an instance: `$public_content = $client->PublicContent();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `blocks` | `array` |  |
| `generated_at` | `string` |  |
| `source` | `mixed` |  |
| `trust_model_version` | `mixed` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the PublicContent record (throws on error).
$public_content = $client->PublicContent()->load();
```


### Recommend

Create an instance: `$recommend = $client->Recommend();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `candidate_window_truncated` | `bool` | True when Loppee's bounded candidate assembly reached its safety cap. |
| `commercial_influence` | `string` | Must be none whenever current-location or saved_exact authority is absent, including universal exact/genuine-prefix name lookup. |
| `display_count` | `int` | Agent-key responses: the number of businesses in this response. |
| `endpoint` | `mixed` |  |
| `fallback_registry` | `array` |  |
| `generated_at` | `string` |  |
| `has_more` | `bool` | True only when next_cursor can continue through the current bounded, deterministic candidate window. |
| `listed` | `array` |  |
| `location_context` | `mixed` | Local category discovery and recommendations require a current precise location proof or handoff, a user-confirmed validated destination authority, or a saved_exact Home location. |
| `ordering` | `mixed` |  |
| `policy` | `string` |  |
| `presentation_guidance` | `string` | Agent-key responses: how to present these results to the customer. |
| `query` | `array` |  |
| `ranking_policy` | `string` |  |
| `registry_count_basis` | `string` |  |
| `registry_count_observed_at` | `mixed` |  |
| `registry_name` | `mixed` |  |
| `results` | `array` |  |
| `returned_count` | `int` |  |
| `reviewed_registry` | `array` |  |
| `schema_version` | `mixed` |  |
| `search_intent` | `array` |  |
| `suggestions` | `array` |  |
| `total_matches` | `int` | Web and app responses. |
| `total_matches_basis` | `int` |  |
| `total_registry_records` | `int` |  |
| `trust_model_version` | `mixed` |  |
| `verified` | `array` |  |
| `visible_candidate_records` | `int` | Web and app responses. |

#### Example: List

```php
// list() returns an array of Recommend entities, one per record (throws on error).
$recommends = $client->Recommend()->list();
```


### Review

Create an instance: `$review = $client->Review();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `string` |  |
| `attestation_accepted` | `bool` | Set true only after the customer confirms this describes their own experience and explicitly approves publishing the displayed business, star rating, title, and full review. |
| `customer_confirmed` | `bool` | Set true to confirm you were a customer of this business. |
| `message` | `string` |  |
| `rating` | `int` |  |
| `service_date` | `mixed` | Optional real, non-future service date in YYYY-MM-DD format; empty means not provided. |
| `subject` | `string` |  |
| `target_business_id` | `string` |  |

#### Example: Create

```php
$review = $client->Review()->create([
    "account_id" => null, // string
    "attestation_accepted" => null, // bool
    "message" => null, // string
    "rating" => null, // int
    "subject" => null, // string
    "target_business_id" => null, // string
]);
```


### Revoke

Create an instance: `$revoke = $client->Revoke();`

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
| `status` | `mixed` |  |

#### Example: Create

```php
$revoke = $client->Revoke()->create([
    "agent_key_id" => null, // string
]);
```


### SaveBusiness

Create an instance: `$save_business = $client->SaveBusiness();`

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
| `status` | `mixed` |  |

#### Example: Create

```php
$save_business = $client->SaveBusiness()->create([
    "account_id" => null, // string
    "business_id" => null, // string
    "business_name" => null, // string
    "business_source" => null, // string
]);
```


### SavedBusiness

Create an instance: `$saved_business = $client->SavedBusiness();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `string` |  |
| `count` | `float` |  |
| `limit` | `float` |  |
| `saved_businesses` | `array` |  |

#### Example: Create

```php
$saved_business = $client->SavedBusiness()->create([
    "account_id" => null, // string
]);
```


### SavedLocation

Create an instance: `$saved_location = $client->SavedLocation();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `available` | `bool` |  |
| `coordinates_returned` | `mixed` |  |
| `kind` | `mixed` | Only saved_exact is precise local-discovery authority. |
| `label` | `mixed` |  |
| `location_proof_id` | `string` |  |
| `reach_precision` | `mixed` | Exact can authorize local category/recommendation reach; coarse cannot activate local results, Sponsored placement, or impressions. |
| `saved_location_ref` | `mixed` |  |
| `updated_at` | `mixed` |  |
| `zip` | `string` |  |


### Search

Create an instance: `$search = $client->Search();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `candidate_window_truncated` | `bool` | True when Loppee's bounded candidate assembly reached its safety cap. |
| `commercial_influence` | `string` | Must be none whenever current-location or saved_exact authority is absent, including universal exact/genuine-prefix name lookup. |
| `display_count` | `int` | Agent-key responses: the number of businesses in this response. |
| `generated_at` | `string` |  |
| `has_more` | `bool` | True only when next_cursor can continue through the current bounded, deterministic candidate window. |
| `location_context` | `mixed` | Local category discovery and recommendations require a current precise location proof or handoff, a user-confirmed validated destination authority, or a saved_exact Home location. |
| `next_cursor` | `mixed` |  |
| `page_limit` | `int` |  |
| `policy` | `string` |  |
| `presentation_guidance` | `string` | Agent-key responses: how to present these results to the customer. |
| `query` | `array` |  |
| `ranking_policy` | `string` |  |
| `registry_count_basis` | `string` |  |
| `registry_count_observed_at` | `mixed` |  |
| `registry_name` | `mixed` |  |
| `results` | `array` |  |
| `returned_count` | `int` |  |
| `schema_version` | `mixed` |  |
| `search_intent` | `array` |  |
| `suggestions` | `array` |  |
| `total_matches` | `int` | Web and app responses. |
| `total_matches_basis` | `int` |  |
| `total_registry_records` | `int` |  |
| `trust_model_version` | `mixed` |  |
| `visible_candidate_records` | `int` | Web and app responses. |

#### Example: List

```php
// list() returns an array of Search entities, one per record (throws on error).
$searchs = $client->Search()->list();
```


### Suggest

Create an instance: `$suggest = $client->Suggest();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `categories` | `array` |  |
| `names` | `array` |  |
| `query` | `string` |  |
| `schema_version` | `mixed` |  |

#### Example: List

```php
// list() returns an array of Suggest entities, one per record (throws on error).
$suggests = $client->Suggest()->list();
```


### SupportInternalNote

Create an instance: `$support_internal_note = $client->SupportInternalNote();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `authorLabel` | `string` |  |
| `body` | `string` |  |
| `createdAt` | `mixed` |  |
| `id` | `string` |  |

#### Example: Create

```php
$support_internal_note = $client->SupportInternalNote()->create([
    "id" => null, // string
    "body" => null, // string
]);
```


### SupportWorkflow

Create an instance: `$support_workflow = $client->SupportWorkflow();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `category` | `mixed` |  |
| `id` | `string` |  |
| `priority` | `mixed` |  |
| `waiting_on` | `mixed` |  |

#### Example: Create

```php
$support_workflow = $client->SupportWorkflow()->create([
    "id" => null, // string
]);
```


### TaxonomySuggestion

Create an instance: `$taxonomy_suggestion = $client->TaxonomySuggestion();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alias` | `string` |  |
| `path_titles` | `array` |  |
| `title` | `string` |  |

#### Example: List

```php
// list() returns an array of TaxonomySuggestion entities, one per record (throws on error).
$taxonomy_suggestions = $client->TaxonomySuggestion()->list();
```


### TrustCard

Create an instance: `$trust_card = $client->TrustCard();`

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
| `record_number` | `mixed` |  |
| `record_scope` | `string` |  |
| `record_type` | `string` |  |
| `recorded_expiry` | `mixed` |  |
| `result` | `string` |  |
| `source_label` | `string` |  |
| `source_url` | `string` |  |
| `state` | `string` |  |
| `status_on_record` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the TrustCard record (throws on error).
$trust_card = $client->TrustCard()->load(["schema_name" => "schema_name"]);
```

#### Example: List

```php
// list() returns an array of TrustCard entities, one per record (throws on error).
$trust_cards = $client->TrustCard()->list(["business_id" => "example"]);
```

#### Example: Create

```php
$trust_card = $client->TrustCard()->create([
    "business_id" => null, // string
    "license_record_id" => null, // string
]);
```


### UnsaveBusiness

Create an instance: `$unsave_business = $client->UnsaveBusiness();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `string` |  |
| `business_id` | `string` |  |
| `removed` | `bool` |  |
| `status` | `mixed` |  |

#### Example: Create

```php
$unsave_business = $client->UnsaveBusiness()->create([
    "account_id" => null, // string
    "business_id" => null, // string
]);
```


### UpdateAgentBillingAccount

Create an instance: `$update_agent_billing_account = $client->UpdateAgentBillingAccount();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `string` |  |
| `billing_account` | `array` |  |
| `billing_status` | `string` |  |
| `included_actions` | `float` |  |
| `monthly_fee_cents` | `float` |  |
| `overage_cents` | `float` |  |
| `plan` | `string` |  |
| `status` | `mixed` |  |
| `updated_by` | `string` |  |

#### Example: Create

```php
$update_agent_billing_account = $client->UpdateAgentBillingAccount()->create([
    "account_id" => null, // string
]);
```


### WithdrawJobApplication

Create an instance: `$withdraw_job_application = $client->WithdrawJobApplication();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `string` |  |
| `already_withdrawn` | `bool` |  |
| `application` | `array` |  |
| `application_id` | `string` |  |
| `status` | `mixed` |  |

#### Example: Create

```php
$withdraw_job_application = $client->WithdrawJobApplication()->create([
    "account_id" => null, // string
    "application_id" => null, // string
]);
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

Features are the extension mechanism. A feature is a PHP class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **RatelimitFeature**: Rate limiting
- **RetryFeature**: Retry
- **TestFeature**: Test transport
- **TimeoutFeature**: Timeout

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as arrays

The PHP SDK uses plain PHP associative arrays throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers::to_map()` to safely validate that a value is an array.

### Directory structure

```
php/
├── loppeebusiness_sdk.php          -- Main SDK class
├── config.php                     -- Configuration
├── schema.php                     -- Generated option + entity specs
├── features.php                   -- Feature factory
├── core/                          -- Core types and context
├── entity/                        -- Entity implementations
├── feature/                       -- Built-in features (Base, Test, Log)
├── utility/                       -- Utility functions and struct library
└── test/                          -- Test suites
```

The main class (`loppeebusiness_sdk.php`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```php
$agentcapability = $client->AgentCapability();
$agentcapability->load();

// $agentcapability->data_get() now returns the agentcapability data from the last load
// $agentcapability->match_get() returns the last match criteria
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
