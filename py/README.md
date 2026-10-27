# LoppeeBusiness Python SDK



The Python SDK for the LoppeeBusiness API — an entity-oriented client following Pythonic conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.AgentAccess()` — each
carrying a small, uniform set of operations (`list`, `load`, `create`, `update`, `patch`, `remove`) instead of raw URL
paths and query strings. You work with named resources and verbs, which
keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to PyPI. Install it from the GitHub
release tag (`py/vX.Y.Z`, see [Tags](https://github.com/voxgig-sdk/loppee-business-sdk/tags)) or
from a source checkout:

```bash
pip install -e .
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record. The client sends the API key in the `X-LOPPEE-API-Key` header.

### 1. Create a client

```python
import os
from loppeebusiness_sdk import LoppeeBusinessSDK

client = LoppeeBusinessSDK({
    "apikey": os.environ.get("LOPPEE_BUSINESS_APIKEY"),
})
```

### 4. Create, update, and remove

```python
# Create — returns the ENTITY (call data_get() for the record)
created = client.AgentAccess().create({"agent_name": "example_agent_name", "developer_email": "example_developer_email", "organization_name": "example_organization_name"})

```


## Error handling

Entity operations raise on failure, so wrap them in `try` / `except`:

```python
try:
    agentcapability = client.AgentCapability().load()
    print(agentcapability.data_get())
except Exception as err:
    print(f"load failed: {err}")
```

`direct()` does **not** raise — it returns the result envelope. Branch
on `ok`; on failure `status` holds the HTTP status (for error responses)
and `err` holds a transport error, so read both defensively:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example_id"},
})

if not result["ok"]:
    print("request failed:", result.get("status"), result.get("err"))
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})

if result["ok"]:
    print(result["status"])  # 200
    print(result["data"])    # response body
else:
    # A non-2xx response carries status + data (the error body); a
    # transport-level failure carries err instead. Only one is present, so
    # read both with .get() rather than indexing a key that may be absent.
    print(result.get("status"), result.get("err"))
```

### Prepare a request without sending it

```python
# prepare() returns the fetch definition and raises on error.
fetchdef = client.prepare({
    "path": "/api/resource/{id}",
    "method": "DELETE",
    "params": {"id": "example"},
})

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```python
client = LoppeeBusinessSDK.test()

# Entity ops return the entity, and list one per record; they raise on error.
agentcapability = client.AgentCapability().load()
# data_get() on an entity reads its mock response record
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```python
def mock_fetch(url, init):
    return {
        "status": 200,
        "statusText": "OK",
        "headers": {},
        "json": lambda: {"id": "mock01"},
    }, None

client = LoppeeBusinessSDK({
    "base": "http://localhost:8080",
    "system": {
        "fetch": mock_fetch,
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
cd py && pytest test/
```


## Reference

### LoppeeBusinessSDK

```python
from loppeebusiness_sdk import LoppeeBusinessSDK

client = LoppeeBusinessSDK(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `str` | API key for authentication. |
| `base` | `str` | Base URL of the API server. |
| `prefix` | `str` | URL path prefix prepended to all requests. |
| `suffix` | `str` | URL path suffix appended to all requests. |
| `feature` | `dict` | Feature activation flags. |
| `extend` | `list` | Additional Feature instances to load. |
| `system` | `dict` | System overrides (e.g. custom `fetch` function). |

### test

```python
client = LoppeeBusinessSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `None`.

### LoppeeBusinessSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> dict` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> dict` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> dict` | Build and send an HTTP request. Returns a result dict (branch on `ok`). |
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
| `list` | `(reqmatch, ctrl) -> list` | List entities matching the criteria, one per record. Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity, and return it. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity, and return it. Raises on error. |
| `patch` | `(reqdata, ctrl) -> any` | Change part of an existing entity, and return it. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity, and return it marked as deleted. Raises on error. |
| `data_get` | `() -> dict` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> dict` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> str` | Return the entity name. |

### Result shape

Entity operations return the entity, and `list` a `list` of entities, one
per record; an entity's `data_get()` reads its record (a `dict`). They raise
on error, so wrap calls in `try`/`except` to handle failures.

The `direct()` escape hatch never raises — it returns a result `dict`
you branch on via `result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `True` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `dict` | Response headers. |
| `data` | `any` | Parsed JSON response body. |

On error, `ok` is `False` and `err` contains the error value.

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

Create an instance: `agent_access = client.AgentAccess()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_name` | `str` |  |
| `agent_type` | `str` |  |
| `callback_url` | `str` |  |
| `compliance_notes` | `str` |  |
| `created_at` | `str` |  |
| `data_needs` | `str` |  |
| `developer_email` | `str` |  |
| `operating_states` | `list` |  |
| `organization_name` | `str` |  |
| `request_id` | `str` |  |
| `request_status` | `str` |  |
| `requested_actions` | `list` |  |
| `safety_contact` | `str` |  |
| `status` | `Any` |  |
| `target_categories` | `list` |  |
| `use_case` | `str` |  |
| `website` | `str` |  |

#### Example: Create

```python
agent_access = client.AgentAccess().create({
    "agent_name": "example_agent_name",  # str
    "developer_email": "example_developer_email",  # str
    "organization_name": "example_organization_name",  # str
})
```


### AgentCapability

Create an instance: `agent_capability = client.AgentCapability()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_phone_location_bridge` | `dict` |  |
| `agent_rules` | `dict` |  |
| `discovery` | `dict` |  |
| `external_agent_access` | `dict` |  |
| `external_agent_webhooks` | `dict` |  |
| `local_discovery_location_policy` | `dict` |  |
| `location_choices` | `dict` |  |
| `registry_name` | `Any` |  |
| `schema_version` | `Any` |  |
| `trust_model_version` | `Any` |  |

#### Example: Load

```python
agent_capability = client.AgentCapability().load()
```


### AgentConnectionTest

Create an instance: `agent_connection_test = client.AgentConnectionTest()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `key` | `str` | Optional UI fallback. |

#### Example: Create

```python
agent_connection_test = client.AgentConnectionTest().create({
})
```


### AgentIntegration

Create an instance: `agent_integration = client.AgentIntegration()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_model` | `dict` |  |
| `commercial_influence` | `dict` |  |
| `developer_docs_url` | `str` |  |
| `exposure_tiers` | `dict` |  |
| `external_agent_access` | `dict` |  |
| `generated_at` | `str` |  |
| `http_api` | `dict` |  |
| `legal` | `dict` |  |
| `mcp` | `dict` |  |
| `mcp_client_example_url` | `str` |  |
| `monitoring_url` | `str` |  |
| `openapi_url` | `str` |  |
| `openapi_v1_url` | `str` |  |
| `operational_rules` | `list` |  |
| `owner_agent_notifications` | `dict` |  |
| `package_url` | `str` |  |
| `public_base_url` | `str` |  |
| `rate_limits` | `dict` |  |
| `registry_name` | `Any` |  |
| `schema_version` | `str` |  |
| `trust_card_contract` | `dict` |  |
| `trust_doctrine` | `dict` |  |

#### Example: List

```python
agent_integrations = client.AgentIntegration().list()
```


### AgentMonitoring

Create an instance: `agent_monitoring = client.AgentMonitoring()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `build_sha` | `str` |  |
| `contract_version` | `str` |  |
| `generated_at` | `str` |  |
| `health_url` | `str` |  |
| `integration_package_url` | `str` |  |
| `mcp_url` | `str` |  |
| `metrics` | `dict` |  |
| `openapi_url` | `str` |  |
| `rate_limits` | `dict` |  |
| `registry_name` | `Any` |  |
| `schema_version` | `str` |  |
| `service` | `str` |  |
| `uptime_seconds` | `float` |  |
| `version` | `str` |  |

#### Example: Load

```python
agent_monitoring = client.AgentMonitoring().load()
```


### AgentOpenapi

Create an instance: `agent_openapi = client.AgentOpenapi()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `components` | `dict` |  |
| `info` | `dict` |  |
| `openapi` | `Any` |  |
| `paths` | `dict` |  |
| `servers` | `list` |  |
| `tags` | `list` |  |

#### Example: List

```python
agent_openapis = client.AgentOpenapi().list()
```


### AgentPolicy

Create an instance: `agent_policy = client.AgentPolicy()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `external_agent_access` | `dict` |  |
| `external_agent_webhooks` | `dict` |  |
| `local_discovery_location_policy` | `dict` |  |
| `location_handoff_flow` | `dict` |  |
| `payment` | `dict` |  |
| `publication` | `dict` |  |
| `schema_version` | `Any` |  |
| `trust_model_version` | `Any` |  |
| `verification` | `dict` |  |

#### Example: Load

```python
agent_policy = client.AgentPolicy().load()
```


### AnonymousLocationProofRevocation

Create an instance: `anonymous_location_proof_revocation = client.AnonymousLocationProofRevocation()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accuracy_meters` | `float` |  |
| `captured_at` | `str` |  |
| `latitude` | `float` |  |
| `longitude` | `float` |  |

#### Example: Create

```python
anonymous_location_proof_revocation = client.AnonymousLocationProofRevocation().create({
    "accuracy_meters": 1,  # float
    "captured_at": "example_captured_at",  # str
    "latitude": 1,  # float
    "longitude": 1,  # float
})
```


### BusinessApplication

Create an instance: `business_application = client.BusinessApplication()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `application` | `dict` |  |
| `application_id` | `str` |  |
| `business_id` | `str` |  |
| `claim_id` | `str | None` |  |
| `created_at` | `str` |  |
| `existing_business` | `bool` |  |
| `files` | `list` |  |
| `listing_id` | `str` |  |
| `pipeline_status` | `str` |  |
| `status` | `Any` |  |
| `trust_model_version` | `Any` |  |
| `uploaded_files` | `float` |  |

#### Example: Create

```python
business_application = client.BusinessApplication().create({
    "application": {},  # dict
})
```


### BusinessClaim

Create an instance: `business_claim = client.BusinessClaim()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `business_id` | `str | None` |  |
| `category` | `str` |  |
| `city` | `str` |  |
| `claim_id` | `str` |  |
| `claim_status` | `str` |  |
| `claimant_email` | `str` | Legacy field; authenticated owner identity wins. |
| `claimant_name` | `str` | Legacy field; authenticated owner identity wins. |
| `claimant_relationship` | `str` |  |
| `created_at` | `str` |  |
| `directory_listing_id` | `str | None` |  |
| `display_name` | `str` |  |
| `listing_id` | `str` |  |
| `notes` | `str` |  |
| `phone` | `str` |  |
| `source` | `str` |  |
| `source_type` | `str` |  |
| `source_url` | `str` |  |
| `state` | `str` |  |
| `status` | `Any` |  |
| `verification` | `dict` |  |
| `website` | `str` |  |

#### Example: Create

```python
business_claim = client.BusinessClaim().create({
    "display_name": "example_display_name",  # str
})
```


### BusinessDeal

Create an instance: `business_deal = client.BusinessDeal()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `str` |  |
| `description` | `str` |  |
| `discountLabel` | `str` |  |
| `endsAt` | `str | None` |  |
| `id` | `str` |  |
| `promoCode` | `str | None` |  |
| `startsAt` | `str | None` |  |
| `terms` | `str | None` |  |
| `title` | `str` |  |

#### Example: List

```python
business_deals = client.BusinessDeal().list({"id": "example"})
```


### BusinessIndex

Create an instance: `business_index = client.BusinessIndex()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `brand_assets` | `Any` |  |
| `business_id` | `str` |  |
| `category` | `str` |  |
| `city` | `str` |  |
| `display_name` | `str` |  |
| `domain` | `str | None` |  |
| `insurance` | `dict` |  |
| `phone` | `str | None` |  |
| `public_profile_url` | `str` |  |
| `review_reputation` | `dict` |  |
| `state` | `str` |  |
| `street_address` | `str | None` | Owner-published street address where authorized. |
| `trust_card_url` | `str` |  |
| `trust_model_version` | `Any` |  |
| `verification_class` | `str` |  |
| `verification_disclosure` | `str` |  |
| `website` | `str | None` |  |
| `zip` | `str | None` | Owner-published postal code where authorized. |

#### Example: List

```python
business_indexs = client.BusinessIndex().list()
```


### BusinessOwner

Create an instance: `business_owner = client.BusinessOwner()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `str` |  |
| `account_role` | `str` |  |
| `acknowledge_data_effects` | `bool` |  |
| `actions` | `list` |  |
| `allowed_actions` | `list` |  |
| `amount_cents` | `float` | Within the top-up limits (default $25 to $5,000). |
| `applicant_location_requirements` | `str` |  |
| `apply_url` | `str | None` |  |
| `asset_id` | `str` |  |
| `assigneeId` | `str` |  |
| `assigneeLabel` | `str` |  |
| `assigneeType` | `str` |  |
| `attempt_id` | `str` |  |
| `benefits` | `str` |  |
| `body` | `str` |  |
| `businessId` | `str` |  |
| `businessName` | `str` |  |
| `business_id` | `str` |  |
| `campaign` | `dict` |  |
| `campaign_id` | `str` |  |
| `carrier_name` | `str` |  |
| `category` | `str` |  |
| `category_alias` | `str` |  |
| `category_aliases` | `list` |  |
| `change` | `dict` |  |
| `city` | `str` |  |
| `client_message_id` | `str` |  |
| `code` | `str` |  |
| `compensation_text` | `str` |  |
| `confirm` | `bool` |  |
| `confirmation` | `str` |  |
| `connection_kind` | `str` |  |
| `consent_sha256` | `str` | SHA-256 of the acceptance text shown (from payment-authorizations). |
| `contact_email` | `str | None` |  |
| `content_type` | `str` |  |
| `country` | `str` |  |
| `coupon_code` | `str` |  |
| `createdAt` | `str | None` |  |
| `created_at` | `str` |  |
| `credential_id` | `str` |  |
| `credential_identifier` | `str` |  |
| `data_base64` | `str` |  |
| `delivery_contract` | `dict` |  |
| `description` | `str | None` |  |
| `direct_apply` | `bool` |  |
| `disabled_reason` | `str | None` |  |
| `discount_label` | `str` |  |
| `display_name` | `str` |  |
| `employment_type` | `str` |  |
| `enabled` | `bool` |  |
| `endpoint` | `dict` |  |
| `endpoint_id` | `str` |  |
| `endpoint_url` | `str` |  |
| `ends_at` | `str | None` |  |
| `event_id` | `str` |  |
| `event_types` | `list` |  |
| `evidence_observed_at` | `str` |  |
| `expected_updated_at` | `str` |  |
| `experience_level` | `str` |  |
| `expires_at` | `str` |  |
| `factor_id` | `str` |  |
| `failure_count` | `int` |  |
| `file_name` | `str` |  |
| `file_sha256` | `str` |  |
| `full_name` | `str` |  |
| `guideHandoffAnsweredAt` | `str | None` |  |
| `guideHandoffAt` | `str | None` |  |
| `guideHandoffDueAt` | `str | None` |  |
| `hours` | `dict | None` |  |
| `id` | `str` |  |
| `idempotency_key` | `str` |  |
| `installation_id` | `str` |  |
| `issuer` | `str` |  |
| `jurisdiction` | `str` |  |
| `kind` | `str` |  |
| `label` | `str` |  |
| `lastMessageAt` | `str | None` |  |
| `lastMessageAuthorType` | `str` |  |
| `lastMessagePreview` | `str` |  |
| `last_delivery_at` | `str | None` |  |
| `launch` | `bool` |  |
| `license_number` | `str` |  |
| `messages` | `list` |  |
| `messagesTruncated` | `bool` |  |
| `monthly_cap_cents` | `float` |  |
| `name` | `str` |  |
| `note` | `str` |  |
| `one_time_display` | `Any` |  |
| `ownerEmail` | `str` |  |
| `ownerLastReadAt` | `str | None` |  |
| `ownerName` | `str` |  |
| `ownerUserId` | `str` |  |
| `period` | `str` |  |
| `phone` | `str` |  |
| `platform` | `str` |  |
| `policy_number` | `str` |  |
| `postal_code` | `str` |  |
| `promo_code` | `str | None` |  |
| `push_token` | `str` |  |
| `radius_miles` | `float` |  |
| `reason` | `str` |  |
| `reason_category` | `str` |  |
| `reason_detail` | `str` |  |
| `registered_at` | `str` |  |
| `request_id` | `str` | Client id of this confirmation (8-100 characters); reuse it only to retry the same confirmation. |
| `requested_at` | `str` |  |
| `salary_currency` | `str` |  |
| `salary_max` | `float | None` |  |
| `salary_min` | `float | None` |  |
| `salary_period` | `str` |  |
| `save_card` | `bool` |  |
| `save_card_consent_sha256` | `str` | Only with save_card true: SHA-256 of the save-card consent text shown. |
| `schedule` | `str` |  |
| `service_areas` | `str` |  |
| `signing_secret` | `str` |  |
| `size_bytes` | `float` |  |
| `skills` | `list` |  |
| `source_url` | `str` |  |
| `starts_at` | `str | None` |  |
| `state` | `str` |  |
| `stated_expires_at` | `str` |  |
| `status` | `str` |  |
| `street_address` | `str` |  |
| `subject` | `str` |  |
| `submitted_identifier` | `str` |  |
| `supportLastReadAt` | `str | None` |  |
| `terms` | `str | None` |  |
| `terms_version` | `str` | Must be the current Advertiser Terms version. |
| `threshold_cents` | `float` |  |
| `ticketNumber` | `str` |  |
| `tier` | `str` |  |
| `title` | `str` |  |
| `total_job_openings` | `int | None` |  |
| `typing` | `bool` |  |
| `updatedAt` | `str | None` |  |
| `updated_at` | `str` |  |
| `url` | `str` | Public HTTPS receiver operated by the connecting principal or its agent runtime. |
| `website` | `str` |  |
| `workplace_type` | `str` |  |
| `zip` | `str` |  |

#### Example: Create

```python
business_owner = client.BusinessOwner().create({
    "deal_id": "example_deal_id",  # str
    "account_id": "example_account_id",  # str
    "account_role": "example_account_role",  # str
    "acknowledge_data_effects": True,  # bool
    "actions": [],  # list
    "allowed_actions": [],  # list
    "amount_cents": 1,  # float
    "asset_id": "example_asset_id",  # str
    "assigneeId": "example_assigneeId",  # str
    "assigneeLabel": "example_assigneeLabel",  # str
    "assigneeType": "example_assigneeType",  # str
    "attempt_id": "example_attempt_id",  # str
    "body": "example_body",  # str
    "businessId": "example_businessId",  # str
    "businessName": "example_businessName",  # str
    "campaign": {},  # dict
    "campaign_id": "example_campaign_id",  # str
    "category_aliases": [],  # list
    "change": {},  # dict
    "city": "example_city",  # str
    "client_message_id": "example_client_message_id",  # str
    "code": "example_code",  # str
    "confirmation": "example_confirmation",  # str
    "connection_kind": "example_connection_kind",  # str
    "consent_sha256": "example_consent_sha256",  # str
    "content_type": "example_content_type",  # str
    "createdAt": "example_createdAt",  # str | None
    "created_at": "example_created_at",  # str
    "credential_id": "example_credential_id",  # str
    "credential_identifier": "example_credential_identifier",  # str
    "data_base64": "example_data_base64",  # str
    "delivery_contract": {},  # dict
    "disabled_reason": "example_disabled_reason",  # str | None
    "discount_label": "example_discount_label",  # str
    "display_name": "example_display_name",  # str
    "enabled": True,  # bool
    "endpoint": {},  # dict
    "endpoint_id": "example_endpoint_id",  # str
    "endpoint_url": "example_endpoint_url",  # str
    "event_id": "example_event_id",  # str
    "event_types": [],  # list
    "expected_updated_at": "example_expected_updated_at",  # str
    "factor_id": "example_factor_id",  # str
    "failure_count": 1,  # int
    "file_name": "example_file_name",  # str
    "file_sha256": "example_file_sha256",  # str
    "id": "example_id",  # str
    "installation_id": "example_installation_id",  # str
    "issuer": "example_issuer",  # str
    "kind": "example_kind",  # str
    "lastMessageAt": "example_lastMessageAt",  # str | None
    "lastMessageAuthorType": "example_lastMessageAuthorType",  # str
    "lastMessagePreview": "example_lastMessagePreview",  # str
    "last_delivery_at": "example_last_delivery_at",  # str | None
    "license_number": "example_license_number",  # str
    "messages": [],  # list
    "messagesTruncated": True,  # bool
    "name": "example_name",  # str
    "one_time_display": "example_one_time_display",  # Any
    "ownerEmail": "example_ownerEmail",  # str
    "ownerLastReadAt": "example_ownerLastReadAt",  # str | None
    "ownerName": "example_ownerName",  # str
    "ownerUserId": "example_ownerUserId",  # str
    "phone": "example_phone",  # str
    "platform": "example_platform",  # str
    "push_token": "example_push_token",  # str
    "radius_miles": 1,  # float
    "reason": "example_reason",  # str
    "registered_at": "example_registered_at",  # str
    "request_id": "example_request_id",  # str
    "requested_at": "example_requested_at",  # str
    "save_card": True,  # bool
    "signing_secret": "example_signing_secret",  # str
    "size_bytes": 1,  # float
    "state": "example_state",  # str
    "street_address": "example_street_address",  # str
    "supportLastReadAt": "example_supportLastReadAt",  # str | None
    "terms_version": "example_terms_version",  # str
    "ticketNumber": "example_ticketNumber",  # str
    "tier": "example_tier",  # str
    "title": "example_title",  # str
    "updatedAt": "example_updatedAt",  # str | None
    "updated_at": "example_updated_at",  # str
    "url": "example_url",  # str
    "website": "example_website",  # str
})
```


### BusinessReview

Create an instance: `business_review = client.BusinessReview()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: Load

```python
business_review = client.BusinessReview().load({"id": "business_review_id"})
```


### ChatAttachment

Create an instance: `chat_attachment = client.ChatAttachment()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `byteSize` | `int` |  |
| `content_type` | `Any` |  |
| `data_base64` | `str` |  |
| `fileName` | `str` |  |
| `file_name` | `str` |  |
| `id` | `str` |  |
| `mediaType` | `str` |  |
| `size_bytes` | `int` |  |

#### Example: Create

```python
chat_attachment = client.ChatAttachment().create({
    "conversation_id": "example_conversation_id",  # str
    "content_type": "example_content_type",  # Any
    "data_base64": "example_data_base64",  # str
    "file_name": "example_file_name",  # str
    "size_bytes": 1,  # int
})
```


### ChatAttachmentUrl

Create an instance: `chat_attachment_url = client.ChatAttachmentUrl()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `byte_size` | `int` |  |
| `expires_in_seconds` | `Any` |  |
| `file_name` | `str` |  |
| `id` | `str` |  |
| `media_type` | `str` |  |
| `signed_url` | `str` |  |

#### Example: Create

```python
chat_attachment_url = client.ChatAttachmentUrl().create({
    "attachment_id": "example_attachment_id",  # str
    "conversation_id": "example_conversation_id",  # str
})
```


### ClaimVerificationSend

Create an instance: `claim_verification_send = client.ClaimVerificationSend()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `challenge_id` | `str` | Opaque v3 SMS or owner-email challenge UUID. |
| `channel` | `Any` |  |
| `claim_id` | `str` |  |
| `destination_hint` | `str` |  |
| `expires_in_seconds` | `float` |  |
| `provider_status` | `Any` | V3 provider request state. |
| `recipient_delivery_confirmed` | `Any` | V3 currently has no final-delivery provider event for this receipt. |
| `request_id` | `str` | Caller-generated idempotency UUID. |
| `status` | `Any` |  |

#### Example: Create

```python
claim_verification_send = client.ClaimVerificationSend().create({
    "claim_id": "example_claim_id",  # str
})
```


### ClaimVerificationVerify

Create an instance: `claim_verification_verify = client.ClaimVerificationVerify()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `business_id` | `str | None` |  |
| `challenge_id` | `str` | Exact challenge UUID returned by the v3 SMS or owner-email send. |
| `channel` | `Any` |  |
| `claim_id` | `str` |  |
| `code` | `str` |  |
| `method` | `Any` |  |
| `publication` | `dict` |  |
| `status` | `Any` |  |
| `transfer_review_required` | `Any` |  |
| `trust_model_version` | `Any` |  |

#### Example: Create

```python
claim_verification_verify = client.ClaimVerificationVerify().create({
    "claim_id": "example_claim_id",  # str
    "code": "example_code",  # str
})
```


### CommercialClick

Create an instance: `commercial_click = client.CommercialClick()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action_type` | `Any` |  |
| `ad_receipt` | `str` | Opaque server-signed receipt of a served Sponsored ad, sent back unchanged with a profile, website or call tap. |
| `billable` | `bool` |  |
| `billing_event_id` | `str | None` |  |
| `billing_status` | `str` |  |
| `business_id` | `str` |  |
| `category` | `str` |  |
| `city` | `str` |  |
| `click_id` | `str` |  |
| `commercial_status` | `Any` |  |
| `created_at` | `str` |  |
| `directory_listing_id` | `str` | Deprecated alias of listing_id. |
| `display_name` | `str` |  |
| `fallback_interaction_id` | `str` |  |
| `ledger_status` | `str` |  |
| `listing_id` | `str` |  |
| `metadata` | `dict` |  |
| `migration_required` | `bool` |  |
| `page_path` | `str` |  |
| `referrer` | `str` |  |
| `source_type` | `Any` |  |
| `state` | `str` |  |
| `status` | `Any` |  |
| `storage` | `Any` |  |
| `surface` | `Any` | Where the Sponsored ad was shown (with ad_receipt). |
| `target_url` | `str` |  |

#### Example: Create

```python
commercial_click = client.CommercialClick().create({
    "action_type": "example_action_type",  # Any
    "source_type": "example_source_type",  # Any
})
```


### ContactRecorded

Create an instance: `contact_recorded = client.ContactRecorded()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `business_id` | `str` |  |
| `contact_recorded` | `Any` |  |
| `interaction_id` | `str` |  |
| `ok` | `Any` |  |
| `policy` | `str` |  |
| `review_upgraded` | `Any` |  |
| `status` | `Any` |  |
| `trust_weight` | `Any` |  |
| `verified` | `bool` |  |

#### Example: Create

```python
contact_recorded = client.ContactRecorded().create({
    "business_id": "example_business_id",  # str
})
```


### Conversation

Create an instance: `conversation = client.Conversation()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `str` |  |
| `conversation_id` | `str` | Exact conversation referenced by a webhook; returns zero or one scoped thread. |
| `conversations` | `list` |  |
| `count` | `float` |  |
| `cursor` | `str` | Opaque pagination cursor returned by the previous page. |
| `limit` | `float` |  |
| `pagination` | `dict` |  |

#### Example: Create

```python
conversation = client.Conversation().create({
    "account_id": "example_account_id",  # str
})
```


### ConversationClose

Create an instance: `conversation_close = client.ConversationClose()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `closed_at` | `str` |  |
| `conversation_id` | `str` |  |
| `id` | `str` |  |
| `status` | `Any` |  |

#### Example: Create

```python
conversation_close = client.ConversationClose().create({
    "id": "example_id",  # str
})
```


### ConversationReport

Create an instance: `conversation_report = client.ConversationReport()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `detail` | `str` |  |
| `id` | `str` |  |
| `reason` | `Any` |  |
| `status` | `Any` |  |

#### Example: Create

```python
conversation_report = client.ConversationReport().create({
    "id": "example_id",  # str
    "reason": "example_reason",  # Any
})
```


### ConversationWorkflow

Create an instance: `conversation_workflow = client.ConversationWorkflow()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `priority` | `Any` |  |
| `status` | `Any` |  |

#### Example: Create

```python
conversation_workflow = client.ConversationWorkflow().create({
    "message_id": "example_message_id",  # str
})
```


### CreateAgentApiKey

Create an instance: `create_agent_api_key = client.CreateAgentApiKey()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `str` |  |
| `allowed_actions` | `list` |  |
| `allowed_business_ids` | `list` |  |
| `created_by` | `str` |  |
| `key` | `dict` |  |
| `label` | `str` |  |
| `monthly_quota` | `float` |  |
| `notes` | `str` |  |
| `one_time_display` | `Any` |  |
| `rate_limit_per_minute` | `float` |  |
| `raw_key` | `str` |  |
| `status` | `Any` |  |

#### Example: Create

```python
create_agent_api_key = client.CreateAgentApiKey().create({
    "account_id": "example_account_id",  # str
})
```


### Customer

Create an instance: `customer = client.Customer()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_provider` | `str` |  |
| `avatar_url` | `str | None` | Short-lived signed display URL for a private avatar object, or null. |
| `city` | `str | None` |  |
| `created_at` | `str | None` |  |
| `email` | `str` |  |
| `full_name` | `str` |  |
| `id` | `str` |  |
| `phone` | `str | None` |  |
| `search_category` | `str` |  |
| `service_need` | `str` |  |
| `state` | `str | None` |  |
| `status` | `Any` |  |
| `updated_at` | `str | None` |  |

#### Example: Create

```python
customer = client.Customer().create({
})
```


### CustomerAccount

Create an instance: `customer_account = client.CustomerAccount()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `str` |  |
| `account_role` | `str` |  |
| `accuracy_meters` | `float` |  |
| `acknowledge_data_effects` | `bool` |  |
| `actions` | `list` |  |
| `agent_key_id` | `str` |  |
| `agent_receives_coordinates` | `bool` |  |
| `all_paused` | `bool` |  |
| `app_attest_registered` | `bool` |  |
| `assertion` | `str` |  |
| `attestation` | `str` |  |
| `author_label` | `str` |  |
| `author_type` | `str` |  |
| `binding` | `Any` |  |
| `body` | `str` |  |
| `business_id` | `str | None` |  |
| `capture_source` | `Any` |  |
| `captured_at` | `str` |  |
| `challenge` | `str` |  |
| `challenge_id` | `str` |  |
| `client_message_id` | `str` |  |
| `completed` | `bool` |  |
| `confirmation` | `str` |  |
| `connection_id` | `str` |  |
| `connection_kind` | `str` |  |
| `continuation` | `Any` | The continuation from the previous response, sent back unchanged to get the next results. |
| `coordinates_returned` | `bool` |  |
| `created_at` | `str` |  |
| `credential_id` | `str` |  |
| `declined` | `bool` |  |
| `delivery_contract` | `dict` |  |
| `disabled_reason` | `str | None` |  |
| `disclosure` | `str` |  |
| `enabled` | `bool` |  |
| `endpoint` | `dict` |  |
| `endpoint_id` | `str` |  |
| `endpoint_url` | `str` |  |
| `environment` | `str` |  |
| `event_id` | `str` |  |
| `event_types` | `list` |  |
| `failure_count` | `int` |  |
| `handoff_id` | `str` |  |
| `has_more` | `bool` |  |
| `id` | `str` |  |
| `idempotent_replay` | `bool` |  |
| `installation_id` | `str` |  |
| `key_id` | `str` |  |
| `last_delivery_at` | `str | None` |  |
| `latitude` | `float` |  |
| `location` | `Any` | An opaque location reference from the website's own location controls. |
| `longitude` | `float` |  |
| `message_alerts_enabled` | `bool` |  |
| `messages` | `list` |  |
| `mode` | `str` | fallback: a direct search answered because the language model was unavailable. |
| `name` | `str` |  |
| `oauth_grant_id` | `str | None` |  |
| `one_time_display` | `Any` |  |
| `platform` | `str` |  |
| `policy` | `str` |  |
| `purpose` | `str` |  |
| `push_token` | `str` |  |
| `reason` | `str` |  |
| `registered_at` | `str` |  |
| `reply` | `str` |  |
| `request_mode` | `str` |  |
| `requested_at` | `str` |  |
| `results` | `list` |  |
| `schema_version` | `str` |  |
| `selected_at` | `str` |  |
| `signed_in` | `bool` |  |
| `signing_secret` | `str` |  |
| `status` | `Any` |  |
| `updated_at` | `str` |  |
| `url` | `str` | Public HTTPS receiver operated by the connecting principal or its agent runtime. |
| `usable_until` | `str` |  |
| `use_mode` | `str` |  |

#### Example: Create

```python
customer_account = client.CustomerAccount().create({
    "account_id": "example_account_id",  # str
    "account_role": "example_account_role",  # str
    "accuracy_meters": 1,  # float
    "acknowledge_data_effects": True,  # bool
    "actions": [],  # list
    "agent_key_id": "example_agent_key_id",  # str
    "agent_receives_coordinates": True,  # bool
    "all_paused": True,  # bool
    "app_attest_registered": True,  # bool
    "assertion": "example_assertion",  # str
    "attestation": "example_attestation",  # str
    "author_label": "example_author_label",  # str
    "author_type": "example_author_type",  # str
    "binding": "example_binding",  # Any
    "body": "example_body",  # str
    "business_id": "example_business_id",  # str | None
    "capture_source": "example_capture_source",  # Any
    "captured_at": "example_captured_at",  # str
    "challenge": "example_challenge",  # str
    "challenge_id": "example_challenge_id",  # str
    "client_message_id": "example_client_message_id",  # str
    "completed": True,  # bool
    "confirmation": "example_confirmation",  # str
    "connection_id": "example_connection_id",  # str
    "connection_kind": "example_connection_kind",  # str
    "coordinates_returned": True,  # bool
    "created_at": "example_created_at",  # str
    "credential_id": "example_credential_id",  # str
    "declined": True,  # bool
    "delivery_contract": {},  # dict
    "disabled_reason": "example_disabled_reason",  # str | None
    "disclosure": "example_disclosure",  # str
    "enabled": True,  # bool
    "endpoint": {},  # dict
    "endpoint_id": "example_endpoint_id",  # str
    "endpoint_url": "example_endpoint_url",  # str
    "environment": "example_environment",  # str
    "event_id": "example_event_id",  # str
    "event_types": [],  # list
    "failure_count": 1,  # int
    "handoff_id": "example_handoff_id",  # str
    "has_more": True,  # bool
    "id": "example_id",  # str
    "idempotent_replay": True,  # bool
    "installation_id": "example_installation_id",  # str
    "key_id": "example_key_id",  # str
    "last_delivery_at": "example_last_delivery_at",  # str | None
    "latitude": 1,  # float
    "longitude": 1,  # float
    "message_alerts_enabled": True,  # bool
    "messages": [],  # list
    "mode": "example_mode",  # str
    "oauth_grant_id": "example_oauth_grant_id",  # str | None
    "one_time_display": "example_one_time_display",  # Any
    "platform": "example_platform",  # str
    "policy": "example_policy",  # str
    "purpose": "example_purpose",  # str
    "push_token": "example_push_token",  # str
    "registered_at": "example_registered_at",  # str
    "reply": "example_reply",  # str
    "request_mode": "example_request_mode",  # str
    "requested_at": "example_requested_at",  # str
    "results": [],  # list
    "schema_version": "example_schema_version",  # str
    "selected_at": "example_selected_at",  # str
    "signed_in": True,  # bool
    "signing_secret": "example_signing_secret",  # str
    "status": "example_status",  # Any
    "updated_at": "example_updated_at",  # str
    "url": "example_url",  # str
    "usable_until": "example_usable_until",  # str
    "use_mode": "example_use_mode",  # str
})
```


### CustomerLocationProofRevocation

Create an instance: `customer_location_proof_revocation = client.CustomerLocationProofRevocation()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accuracy_meters` | `float` |  |
| `captured_at` | `str` |  |
| `latitude` | `float` |  |
| `longitude` | `float` |  |

#### Example: Create

```python
customer_location_proof_revocation = client.CustomerLocationProofRevocation().create({
    "accuracy_meters": 1,  # float
    "captured_at": "example_captured_at",  # str
    "latitude": 1,  # float
    "longitude": 1,  # float
})
```


### DestinationAddressSuggestion

Create an instance: `destination_address_suggestion = client.DestinationAddressSuggestion()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `input` | `str` | Normalized partial US service-address text. |
| `suggestions` | `list` |  |

#### Example: Create

```python
destination_address_suggestion = client.DestinationAddressSuggestion().create({
    "input": "example_input",  # str
})
```


### DestinationLocationProof

Create an instance: `destination_location_proof = client.DestinationLocationProof()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `address` | `str` | A real US service address. |
| `premise_proximity_confirmation_token` | `str` | Opaque one-time token from the immediately preceding premise-proximity challenge for the same address and authority. |

#### Example: Create

```python
destination_location_proof = client.DestinationLocationProof().create({
    "address": "example_address",  # str
})
```


### DomainTrustCard

Create an instance: `domain_trust_card = client.DomainTrustCard()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `business_id` | `str` |  |
| `domain` | `str` |  |
| `schema_version` | `Any` |  |
| `trust_card` | `dict` |  |
| `trust_card_url` | `str` |  |
| `trust_model_version` | `Any` |  |
| `verification_class` | `Any` |  |
| `verification_disclosure` | `str` |  |

#### Example: Load

```python
domain_trust_card = client.DomainTrustCard().load({"domain_key": "domain_key"})
```


### GeoContext

Create an instance: `geo_context = client.GeoContext()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```python
geo_context = client.GeoContext().load()
```


### Health

Create an instance: `health = client.Health()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_phone_location_bridge` | `dict` |  |
| `build_sha` | `str` |  |
| `business_review_access` | `dict` |  |
| `contract_version` | `str` |  |
| `external_agent_webhooks` | `dict` |  |
| `external_agent_webhooks_enabled` | `bool` |  |
| `ios_app_attest_anonymous_location` | `dict` |  |
| `location_choices` | `dict` |  |
| `location_handoff` | `dict` |  |
| `mobile_push` | `Any` |  |
| `ok` | `Any` |  |
| `service` | `str` |  |
| `sponsored_ordering` | `dict` |  |
| `trust_model_version` | `Any` |  |
| `version` | `str` |  |

#### Example: Load

```python
health = client.Health().load()
```


### JobApplication

Create an instance: `job_application = client.JobApplication()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `str` |  |
| `already_withdrawn` | `bool` |  |
| `application` | `dict` |  |
| `applications` | `list` |  |
| `billing` | `dict` |  |
| `business_id` | `str` |  |
| `count` | `float` |  |
| `cover_note` | `str` |  |
| `free_to_apply` | `bool` |  |
| `id` | `str` |  |
| `job_id` | `str` |  |
| `limit` | `float` |  |
| `offset` | `float` |  |
| `resume` | `dict` |  |
| `retention_note` | `str` |  |
| `status` | `str` |  |

#### Example: Create

```python
job_application = client.JobApplication().create({
    "job_id": "example_job_id",  # str
    "resume": {},  # dict
})
```


### JobResumeSignedUrl

Create an instance: `job_resume_signed_url = client.JobResumeSignedUrl()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `application_id` | `str` |  |
| `content_type` | `str` |  |
| `expires_in_seconds` | `float` |  |
| `resume_file_name` | `str` |  |
| `signed_url` | `str` |  |
| `size_bytes` | `float` |  |
| `status` | `Any` |  |

#### Example: Create

```python
job_resume_signed_url = client.JobResumeSignedUrl().create({
    "job_application_id": "example_job_application_id",  # str
})
```


### LocationHandoff

Create an instance: `location_handoff = client.LocationHandoff()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```python
location_handoff = client.LocationHandoff().create({
})
```


### Message

Create an instance: `message = client.Message()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `str` |  |
| `client_message_id` | `str` | Caller-stable retry key. |
| `conversation_id` | `str` |  |
| `created_at` | `str` |  |
| `delivery` | `Any` |  |
| `idempotent_replay` | `bool` |  |
| `interaction_id` | `str` |  |
| `message` | `str` |  |
| `moderation_required` | `Any` |  |
| `source_path` | `str` |  |
| `status` | `Any` |  |
| `subject` | `str` |  |
| `target_business_id` | `str` |  |
| `target_business_name` | `str` |  |
| `target_business_source` | `str` |  |

#### Example: Create

```python
message = client.Message().create({
    "account_id": "example_account_id",  # str
    "client_message_id": "example_client_message_id",  # str
    "message": "example_message",  # str
    "subject": "example_subject",  # str
    "target_business_id": "example_target_business_id",  # str
    "target_business_name": "example_target_business_name",  # str
    "target_business_source": "example_target_business_source",  # str
})
```


### ModeratedAction

Create an instance: `moderated_action = client.ModeratedAction()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actions` | `list` |  |
| `body` | `str` |  |
| `client_request_id` | `str` |  |
| `content_type` | `str` |  |
| `continuation` | `Any` | The continuation from the previous response, sent back unchanged to get the next results. |
| `coordinates_returned` | `bool` |  |
| `disclosure` | `str` |  |
| `enabled` | `bool` |  |
| `file_sha256` | `str` |  |
| `has_more` | `bool` |  |
| `human_confirmation` | `bool` |  |
| `intent_id` | `str` |  |
| `kind` | `str` |  |
| `knowledgeVersion` | `str` |  |
| `limits` | `dict` |  |
| `links` | `list` |  |
| `location` | `dict` | An opaque location reference from the website's own location controls. |
| `message` | `str` |  |
| `messages` | `list` |  |
| `mode` | `str` | fallback: a direct search answered because the language model was unavailable. |
| `name` | `str` |  |
| `needsHuman` | `bool` |  |
| `policy` | `dict` | Human schedule and separate claim-review policy. |
| `question` | `str` |  |
| `reply` | `str` |  |
| `result` | `str` |  |
| `results` | `list` |  |
| `scan_authority_id` | `str` |  |
| `scanner` | `str` |  |
| `scanner_version` | `str` |  |
| `schema_version` | `str` |  |
| `searcher_latitude` | `float` |  |
| `searcher_longitude` | `float` |  |
| `signature` | `str` |  |
| `signed_in` | `bool` |  |
| `size_bytes` | `float` |  |
| `subject` | `str` |  |
| `target_business_id` | `str` |  |
| `topic` | `str` |  |

#### Example: Load

```python
moderated_action = client.ModeratedAction().load()
```

#### Example: Create

```python
moderated_action = client.ModeratedAction().create({
    "content_type": "example_content_type",  # str
    "file_sha256": "example_file_sha256",  # str
    "intent_id": "example_intent_id",  # str
    "messages": [],  # list
    "question": "example_question",  # str
    "result": "example_result",  # str
    "scan_authority_id": "example_scan_authority_id",  # str
    "scanner": "example_scanner",  # str
    "scanner_version": "example_scanner_version",  # str
    "size_bytes": 1,  # float
    "target_business_id": "example_target_business_id",  # str
})
```


### OpenApiDocument

Create an instance: `open_api_document = client.OpenApiDocument()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `components` | `dict` |  |
| `info` | `dict` |  |
| `openapi` | `Any` |  |
| `paths` | `dict` |  |
| `servers` | `list` |  |
| `tags` | `list` |  |

#### Example: List

```python
open_api_documents = client.OpenApiDocument().list()
```


### Operation

Create an instance: `operation = client.Operation()`

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
| `account_id` | `str` |  |
| `action` | `str` |  |
| `active` | `bool` |  |
| `active_or_good_standing` | `bool` |  |
| `ai_draft_id` | `str` |  |
| `allowed_actions` | `list` |  |
| `alt` | `str` |  |
| `amount_cents` | `float` | Whole cents, non-zero, at most 1,000,000 either way; a promotional credit is positive. |
| `amount_off_cents` | `float` |  |
| `api_key` | `str` |  |
| `applies_to_period` | `str` |  |
| `applies_to_tier` | `str | None` |  |
| `assigned_admin_user_id` | `str | None` |  |
| `assigneeId` | `str` |  |
| `assigneeLabel` | `str` |  |
| `assigneeType` | `str` |  |
| `assignee_id` | `str` |  |
| `assignee_label` | `str` |  |
| `assignee_type` | `str` | AI assignment is unavailable while the customer-support workload is disconnected. |
| `assistant_enabled` | `bool` |  |
| `base_url` | `str` |  |
| `body` | `str` |  |
| `businessId` | `str` |  |
| `businessName` | `str` |  |
| `business_id` | `str | None` |  |
| `business_ids` | `list` |  |
| `campaign_id` | `str` |  |
| `campaign_ids` | `list` |  |
| `caption` | `str` |  |
| `case_status` | `str` |  |
| `catalog` | `list` |  |
| `category` | `str` |  |
| `category_alias` | `str` |  |
| `chunk_size` | `float` |  |
| `city` | `str` |  |
| `code` | `str` |  |
| `confidence` | `float` |  |
| `config` | `dict` | Complete validated pricing configuration. |
| `confirm` | `bool` |  |
| `confirm_admin` | `bool` |  |
| `confirmation` | `str` |  |
| `connection_id` | `str` |  |
| `connection_kind` | `str` |  |
| `content_type` | `str` |  |
| `context_id` | `str` |  |
| `context_type` | `str` |  |
| `createdAt` | `str | None` |  |
| `created_at` | `str` |  |
| `credential_expires_at` | `str` | Expiration date printed on the license. |
| `credential_id` | `str` |  |
| `custom_wire` | `str` |  |
| `data_base64` | `str` |  |
| `decision` | `str` |  |
| `dedupe_ack` | `bool` |  |
| `delivery_contract` | `dict` |  |
| `disabled_reason` | `str | None` |  |
| `discount_type` | `str` |  |
| `display_name` | `str` |  |
| `disposition` | `str` |  |
| `draft` | `dict` |  |
| `duration` | `str` |  |
| `duration_in_months` | `int | None` |  |
| `email` | `str` |  |
| `enabled` | `bool` |  |
| `endpoint` | `dict` |  |
| `endpoint_id` | `str` |  |
| `endpoint_url` | `str` |  |
| `ends_at` | `str` |  |
| `environment_fallback` | `Any` |  |
| `event_id` | `str` |  |
| `event_types` | `list` |  |
| `expected_allowed_actions` | `list` |  |
| `expected_key_id` | `str` |  |
| `expected_updated_at` | `str` |  |
| `expected_version` | `float` |  |
| `expires_at` | `str` | Promotional credit only: ISO date-time 1 hour to 2 years ahead, disclosed to the owner. |
| `fact_id` | `str` |  |
| `facts` | `dict` |  |
| `failure_count` | `int` |  |
| `fields` | `dict` | Validated fields for this fixed content-block type. |
| `file_name` | `str` |  |
| `guideHandoffAnsweredAt` | `str | None` |  |
| `guideHandoffAt` | `str | None` |  |
| `guideHandoffDueAt` | `str | None` |  |
| `height` | `float` |  |
| `historic_association_checked` | `bool` |  |
| `hold` | `str` |  |
| `holder_name_match` | `bool` |  |
| `hours` | `dict` |  |
| `id` | `str` |  |
| `idempotency_key` | `str` |  |
| `identifier_match` | `bool` |  |
| `in_use` | `dict` |  |
| `instruction` | `str` |  |
| `invited` | `bool` |  |
| `key_check` | `Any` |  |
| `kind` | `str` |  |
| `label` | `str` |  |
| `lastMessageAt` | `str | None` |  |
| `lastMessageAuthorType` | `str` |  |
| `lastMessagePreview` | `str` |  |
| `last_delivery_at` | `str | None` |  |
| `last_error_code` | `Any` |  |
| `last_probe_at` | `Any` |  |
| `last_problem` | `Any` |  |
| `legal_name` | `str` |  |
| `limit` | `float` |  |
| `make_active` | `bool` |  |
| `max_cents` | `float` |  |
| `max_redemptions` | `int | None` |  |
| `messages` | `list` |  |
| `messagesTruncated` | `bool` |  |
| `min_cents` | `float` |  |
| `model` | `str` |  |
| `model_id` | `str` |  |
| `name` | `str` |  |
| `note` | `str` |  |
| `notes` | `str` |  |
| `observed_at` | `str` |  |
| `one_time_display` | `Any` |  |
| `outcome` | `str` |  |
| `ownerEmail` | `str` |  |
| `ownerLastReadAt` | `str | None` |  |
| `ownerName` | `str` |  |
| `ownerUserId` | `str` |  |
| `owner_reason_code` | `str` | Controlled owner-visible rejection reason. |
| `per_customer_limit` | `float` |  |
| `percent_off` | `float` |  |
| `phone` | `str` |  |
| `policyVersion` | `str` |  |
| `priority` | `str` |  |
| `provider` | `str` |  |
| `providers` | `list` |  |
| `purpose_code` | `str` |  |
| `rank_bid_cents` | `int` |  |
| `reason` | `str` |  |
| `reason_category` | `str` |  |
| `reason_code` | `str` |  |
| `reason_detail` | `str` |  |
| `reference` | `str` |  |
| `reject_reason` | `str` |  |
| `related_case_id` | `str` |  |
| `report_id` | `int` |  |
| `report_ids` | `list` |  |
| `reserve_cents` | `float` | 100-10000; never below $1.00. |
| `resolution_note` | `str` |  |
| `review_notes` | `str` |  |
| `revision` | `int` |  |
| `role` | `str` |  |
| `rows` | `list` |  |
| `run` | `dict` |  |
| `schema_version` | `str` |  |
| `scope` | `str` |  |
| `search` | `str` |  |
| `settings` | `dict` |  |
| `signing_secret` | `str` |  |
| `size_bytes` | `float` |  |
| `sla_due_at` | `str | None` |  |
| `source` | `str` |  |
| `source_authority` | `str` | Exact official authority name. |
| `source_category_slug` | `str` |  |
| `source_scope_checked` | `bool` |  |
| `source_url` | `str` | Exact HTTPS official source URL. |
| `starts_at` | `str | None` |  |
| `state` | `str` | Bulk by area: every ad of the advertisers in this two-letter U.S. |
| `status` | `str` |  |
| `storage` | `str` |  |
| `street_address` | `str` |  |
| `subject` | `str` |  |
| `supportLastReadAt` | `str | None` |  |
| `target_category` | `str` |  |
| `taxonomy_category_aliases` | `list` |  |
| `ticketNumber` | `str` |  |
| `tier` | `str` |  |
| `typing` | `bool` |  |
| `until` | `str` |  |
| `updatedAt` | `str | None` |  |
| `updated_at` | `str` |  |
| `url` | `str` | Public HTTPS receiver operated by the connecting principal or its agent runtime. |
| `valid_until` | `str` |  |
| `value` | `str` |  |
| `verification_method` | `str` |  |
| `verified_at` | `Any` |  |
| `verified_service_scope` | `list` |  |
| `version` | `str` |  |
| `website` | `str` |  |
| `width` | `float` |  |
| `window_hours` | `float` | 1-744, default 48. |
| `workload` | `str` |  |
| `zip` | `str` |  |

#### Example: Create

```python
operation = client.Operation().create({
    "coupon_id": "example_coupon_id",  # str
    "account_id": "example_account_id",  # str
    "allowed_actions": [],  # list
    "amount_cents": 1,  # float
    "api_key": "example_api_key",  # str
    "assigneeId": "example_assigneeId",  # str
    "assigneeLabel": "example_assigneeLabel",  # str
    "assigneeType": "example_assigneeType",  # str
    "assistant_enabled": True,  # bool
    "body": "example_body",  # str
    "businessId": "example_businessId",  # str
    "businessName": "example_businessName",  # str
    "business_ids": [],  # list
    "catalog": [],  # list
    "code": "example_code",  # str
    "config": {},  # dict
    "confirmation": "example_confirmation",  # str
    "connection_id": "example_connection_id",  # str
    "connection_kind": "example_connection_kind",  # str
    "content_type": "example_content_type",  # str
    "context_id": "example_context_id",  # str
    "context_type": "example_context_type",  # str
    "createdAt": "example_createdAt",  # str | None
    "created_at": "example_created_at",  # str
    "credential_id": "example_credential_id",  # str
    "data_base64": "example_data_base64",  # str
    "decision": "example_decision",  # str
    "delivery_contract": {},  # dict
    "disabled_reason": "example_disabled_reason",  # str | None
    "discount_type": "example_discount_type",  # str
    "display_name": "example_display_name",  # str
    "disposition": "example_disposition",  # str
    "draft": {},  # dict
    "email": "example_email",  # str
    "enabled": True,  # bool
    "endpoint": {},  # dict
    "endpoint_id": "example_endpoint_id",  # str
    "endpoint_url": "example_endpoint_url",  # str
    "ends_at": "example_ends_at",  # str
    "environment_fallback": "example_environment_fallback",  # Any
    "event_id": "example_event_id",  # str
    "event_types": [],  # list
    "expected_allowed_actions": [],  # list
    "expected_key_id": "example_expected_key_id",  # str
    "expected_updated_at": "example_expected_updated_at",  # str
    "expected_version": 1,  # float
    "fact_id": "example_fact_id",  # str
    "facts": {},  # dict
    "failure_count": 1,  # int
    "fields": {},  # dict
    "file_name": "example_file_name",  # str
    "historic_association_checked": True,  # bool
    "hold": "example_hold",  # str
    "hours": {},  # dict
    "id": "example_id",  # str
    "in_use": {},  # dict
    "invited": True,  # bool
    "key_check": "example_key_check",  # Any
    "kind": "example_kind",  # str
    "label": "example_label",  # str
    "lastMessageAt": "example_lastMessageAt",  # str | None
    "lastMessageAuthorType": "example_lastMessageAuthorType",  # str
    "lastMessagePreview": "example_lastMessagePreview",  # str
    "last_delivery_at": "example_last_delivery_at",  # str | None
    "last_error_code": "example_last_error_code",  # Any
    "last_probe_at": "example_last_probe_at",  # Any
    "last_problem": "example_last_problem",  # Any
    "make_active": True,  # bool
    "max_cents": 1,  # float
    "messages": [],  # list
    "messagesTruncated": True,  # bool
    "min_cents": 1,  # float
    "model": "example_model",  # str
    "model_id": "example_model_id",  # str
    "name": "example_name",  # str
    "one_time_display": "example_one_time_display",  # Any
    "outcome": "example_outcome",  # str
    "ownerEmail": "example_ownerEmail",  # str
    "ownerLastReadAt": "example_ownerLastReadAt",  # str | None
    "ownerName": "example_ownerName",  # str
    "ownerUserId": "example_ownerUserId",  # str
    "policyVersion": "example_policyVersion",  # str
    "provider": "example_provider",  # str
    "providers": [],  # list
    "purpose_code": "example_purpose_code",  # str
    "rank_bid_cents": 1,  # int
    "reference": "example_reference",  # str
    "report_ids": [],  # list
    "reserve_cents": 1,  # float
    "resolution_note": "example_resolution_note",  # str
    "revision": 1,  # int
    "rows": [],  # list
    "run": {},  # dict
    "schema_version": "example_schema_version",  # str
    "scope": "example_scope",  # str
    "settings": {},  # dict
    "signing_secret": "example_signing_secret",  # str
    "size_bytes": 1,  # float
    "source_scope_checked": True,  # bool
    "storage": "example_storage",  # str
    "subject": "example_subject",  # str
    "supportLastReadAt": "example_supportLastReadAt",  # str | None
    "taxonomy_category_aliases": [],  # list
    "ticketNumber": "example_ticketNumber",  # str
    "tier": "example_tier",  # str
    "updatedAt": "example_updatedAt",  # str | None
    "updated_at": "example_updated_at",  # str
    "url": "example_url",  # str
    "value": "example_value",  # str
    "verification_method": "example_verification_method",  # str
    "verified_at": "example_verified_at",  # Any
    "workload": "example_workload",  # str
})
```


### OwnerNotification

Create an instance: `owner_notification = client.OwnerNotification()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `businessId` | `str` |  |
| `createdAt` | `str` |  |
| `dedupeKey` | `str` |  |
| `emailStatus` | `str` |  |
| `eventType` | `Any` |  |
| `id` | `str` |  |
| `readAt` | `str | None` |  |
| `resourceId` | `str` |  |
| `resourceKind` | `Any` |  |
| `resourceUrl` | `str` |  |
| `summary` | `str` |  |
| `webhookStatus` | `str` |  |

#### Example: Create

```python
owner_notification = client.OwnerNotification().create({
    "notification_id": "example_notification_id",  # str
})
```


### OwnerNotificationSetting

Create an instance: `owner_notification_setting = client.OwnerNotificationSetting()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `businessId` | `str` |  |
| `business_id` | `str` |  |
| `createdAt` | `str` |  |
| `emailEnabled` | `bool` |  |
| `email_enabled` | `bool` |  |
| `eventTypeSubscriptions` | `list` |  |
| `event_types` | `list` |  |
| `updatedAt` | `str` |  |
| `webhookEnabled` | `bool` |  |
| `webhook_enabled` | `bool` |  |

#### Example: Create

```python
owner_notification_setting = client.OwnerNotificationSetting().create({
})
```


### OwnerWebhookEndpoint

Create an instance: `owner_webhook_endpoint = client.OwnerWebhookEndpoint()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `businessId` | `str` |  |
| `createdAt` | `str` |  |
| `enabled` | `bool` |  |
| `eventTypeSubscriptions` | `list` |  |
| `failureCount` | `float` |  |
| `id` | `str` |  |
| `lastDeliveryAt` | `str | None` |  |
| `updatedAt` | `str` |  |
| `url` | `str` |  |

#### Example: Create

```python
owner_webhook_endpoint = client.OwnerWebhookEndpoint().create({
    "webhook_id": "example_webhook_id",  # str
})
```


### OwnerWebhookRegistration

Create an instance: `owner_webhook_registration = client.OwnerWebhookRegistration()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `business_id` | `str` |  |
| `endpoint` | `dict` |  |
| `event_types` | `list` |  |
| `one_time_display` | `Any` |  |
| `signing_secret` | `str` |  |
| `status` | `Any` |  |
| `url` | `str` |  |

#### Example: Create

```python
owner_webhook_registration = client.OwnerWebhookRegistration().create({
    "url": "example_url",  # str
})
```


### Pricing

Create an instance: `pricing = client.Pricing()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `billing` | `dict` |  |
| `branch_add_ons` | `list` |  |
| `currency` | `Any` |  |
| `generated_at` | `str` |  |
| `neutrality` | `str` |  |
| `plans` | `list` |  |
| `promotions` | `list` |  |
| `published_at` | `str | None` |  |
| `radius_extension` | `dict` |  |
| `revision_id` | `str | None` |  |
| `source` | `Any` |  |
| `trust_model_version` | `Any` |  |

#### Example: List

```python
pricings = client.Pricing().list()
```


### PromoteVerifiedTransaction

Create an instance: `promote_verified_transaction = client.PromoteVerifiedTransaction()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `business_id` | `str` |  |
| `evidence_id` | `str` |  |
| `interaction_id` | `str` |  |
| `ok` | `Any` |  |
| `review_upgraded` | `bool` |  |
| `status` | `Any` |  |
| `trust_weight` | `Any` |  |
| `verified` | `bool` |  |

#### Example: Create

```python
promote_verified_transaction = client.PromoteVerifiedTransaction().create({
    "business_id": "example_business_id",  # str
    "evidence_id": "example_evidence_id",  # str
})
```


### PublicContent

Create an instance: `public_content = client.PublicContent()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `blocks` | `dict` |  |
| `generated_at` | `str` |  |
| `source` | `Any` |  |
| `trust_model_version` | `Any` |  |

#### Example: Load

```python
public_content = client.PublicContent().load()
```


### Recommend

Create an instance: `recommend = client.Recommend()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `candidate_window_truncated` | `bool` | True when Loppee's bounded candidate assembly reached its safety cap. |
| `commercial_influence` | `str` | Must be none whenever current-location or saved_exact authority is absent, including universal exact/genuine-prefix name lookup. |
| `display_count` | `int` | Agent-key responses: the number of businesses in this response. |
| `endpoint` | `Any` |  |
| `fallback_registry` | `list` |  |
| `generated_at` | `str` |  |
| `has_more` | `bool` | True only when next_cursor can continue through the current bounded, deterministic candidate window. |
| `listed` | `list` |  |
| `location_context` | `Any` | Local category discovery and recommendations require a current precise location proof or handoff, a user-confirmed validated destination authority, or a saved_exact Home location. |
| `ordering` | `Any` |  |
| `policy` | `str` |  |
| `presentation_guidance` | `str` | Agent-key responses: how to present these results to the customer. |
| `query` | `dict` |  |
| `ranking_policy` | `str` |  |
| `registry_count_basis` | `str` |  |
| `registry_count_observed_at` | `str | None` |  |
| `registry_name` | `Any` |  |
| `results` | `list` |  |
| `returned_count` | `int` |  |
| `reviewed_registry` | `list` |  |
| `schema_version` | `Any` |  |
| `search_intent` | `dict` |  |
| `suggestions` | `dict` |  |
| `total_matches` | `int` | Web and app responses. |
| `total_matches_basis` | `int` |  |
| `total_registry_records` | `int` |  |
| `trust_model_version` | `Any` |  |
| `verified` | `list` |  |
| `visible_candidate_records` | `int` | Web and app responses. |

#### Example: List

```python
recommends = client.Recommend().list()
```


### Review

Create an instance: `review = client.Review()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `str` |  |
| `attestation_accepted` | `bool` | Set true only after the customer confirms this describes their own experience and explicitly approves publishing the displayed business, star rating, title, and full review. |
| `customer_confirmed` | `bool` | Set true to confirm you were a customer of this business. |
| `message` | `str` |  |
| `rating` | `int` |  |
| `service_date` | `Any` | Optional real, non-future service date in YYYY-MM-DD format; empty means not provided. |
| `subject` | `str` |  |
| `target_business_id` | `str` |  |

#### Example: Create

```python
review = client.Review().create({
    "account_id": "example_account_id",  # str
    "attestation_accepted": True,  # bool
    "message": "example_message",  # str
    "rating": 1,  # int
    "subject": "example_subject",  # str
    "target_business_id": "example_target_business_id",  # str
})
```


### Revoke

Create an instance: `revoke = client.Revoke()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `str` |  |
| `key_id` | `str` |  |
| `revoked_by` | `str` |  |
| `status` | `Any` |  |

#### Example: Create

```python
revoke = client.Revoke().create({
    "agent_key_id": "example_agent_key_id",  # str
})
```


### SaveBusiness

Create an instance: `save_business = client.SaveBusiness()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `str` |  |
| `business_id` | `str` |  |
| `business_name` | `str` |  |
| `business_source` | `str` |  |
| `category` | `str` |  |
| `city` | `str` |  |
| `created_at` | `str` |  |
| `notes` | `str` |  |
| `saved_business_id` | `str` |  |
| `state` | `str` |  |
| `status` | `Any` |  |

#### Example: Create

```python
save_business = client.SaveBusiness().create({
    "account_id": "example_account_id",  # str
    "business_id": "example_business_id",  # str
    "business_name": "example_business_name",  # str
    "business_source": "example_business_source",  # str
})
```


### SavedBusiness

Create an instance: `saved_business = client.SavedBusiness()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `str` |  |
| `count` | `float` |  |
| `limit` | `float` |  |
| `saved_businesses` | `list` |  |

#### Example: Create

```python
saved_business = client.SavedBusiness().create({
    "account_id": "example_account_id",  # str
})
```


### SavedLocation

Create an instance: `saved_location = client.SavedLocation()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `available` | `bool` |  |
| `coordinates_returned` | `Any` |  |
| `kind` | `Any` | Only saved_exact is precise local-discovery authority. |
| `label` | `str | None` |  |
| `location_proof_id` | `str` |  |
| `reach_precision` | `Any` | Exact can authorize local category/recommendation reach; coarse cannot activate local results, Sponsored placement, or impressions. |
| `saved_location_ref` | `str | None` |  |
| `updated_at` | `str | None` |  |
| `zip` | `str` |  |


### Search

Create an instance: `search = client.Search()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `candidate_window_truncated` | `bool` | True when Loppee's bounded candidate assembly reached its safety cap. |
| `commercial_influence` | `str` | Must be none whenever current-location or saved_exact authority is absent, including universal exact/genuine-prefix name lookup. |
| `display_count` | `int` | Agent-key responses: the number of businesses in this response. |
| `generated_at` | `str` |  |
| `has_more` | `bool` | True only when next_cursor can continue through the current bounded, deterministic candidate window. |
| `location_context` | `Any` | Local category discovery and recommendations require a current precise location proof or handoff, a user-confirmed validated destination authority, or a saved_exact Home location. |
| `next_cursor` | `str | None` |  |
| `page_limit` | `int` |  |
| `policy` | `str` |  |
| `presentation_guidance` | `str` | Agent-key responses: how to present these results to the customer. |
| `query` | `dict` |  |
| `ranking_policy` | `str` |  |
| `registry_count_basis` | `str` |  |
| `registry_count_observed_at` | `str | None` |  |
| `registry_name` | `Any` |  |
| `results` | `list` |  |
| `returned_count` | `int` |  |
| `schema_version` | `Any` |  |
| `search_intent` | `dict` |  |
| `suggestions` | `dict` |  |
| `total_matches` | `int` | Web and app responses. |
| `total_matches_basis` | `int` |  |
| `total_registry_records` | `int` |  |
| `trust_model_version` | `Any` |  |
| `visible_candidate_records` | `int` | Web and app responses. |

#### Example: List

```python
searchs = client.Search().list()
```


### Suggest

Create an instance: `suggest = client.Suggest()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `categories` | `list` |  |
| `names` | `list` |  |
| `query` | `str` |  |
| `schema_version` | `Any` |  |

#### Example: List

```python
suggests = client.Suggest().list()
```


### SupportInternalNote

Create an instance: `support_internal_note = client.SupportInternalNote()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `authorLabel` | `str` |  |
| `body` | `str` |  |
| `createdAt` | `str | None` |  |
| `id` | `str` |  |

#### Example: Create

```python
support_internal_note = client.SupportInternalNote().create({
    "id": "example_id",  # str
    "body": "example_body",  # str
})
```


### SupportWorkflow

Create an instance: `support_workflow = client.SupportWorkflow()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `category` | `Any` |  |
| `id` | `str` |  |
| `priority` | `Any` |  |
| `waiting_on` | `Any` |  |

#### Example: Create

```python
support_workflow = client.SupportWorkflow().create({
    "id": "example_id",  # str
})
```


### TaxonomySuggestion

Create an instance: `taxonomy_suggestion = client.TaxonomySuggestion()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alias` | `str` |  |
| `path_titles` | `list` |  |
| `title` | `str` |  |

#### Example: List

```python
taxonomy_suggestions = client.TaxonomySuggestion().list()
```


### TrustCard

Create an instance: `trust_card = client.TrustCard()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agency` | `str` |  |
| `collected_at` | `str` |  |
| `disclosure` | `str` |  |
| `fact_id` | `str` |  |
| `matched_on` | `str` |  |
| `reason` | `str` |  |
| `record_kind` | `str` |  |
| `record_number` | `str | None` |  |
| `record_scope` | `str` |  |
| `record_type` | `str` |  |
| `recorded_expiry` | `str | None` |  |
| `result` | `str` |  |
| `source_label` | `str` |  |
| `source_url` | `str` |  |
| `state` | `str` |  |
| `status_on_record` | `str` |  |

#### Example: Load

```python
trust_card = client.TrustCard().load({"schema_name": "schema_name"})
```

#### Example: List

```python
trust_cards = client.TrustCard().list({"business_id": "example"})
```

#### Example: Create

```python
trust_card = client.TrustCard().create({
    "business_id": "example_business_id",  # str
    "license_record_id": "example_license_record_id",  # str
})
```


### UnsaveBusiness

Create an instance: `unsave_business = client.UnsaveBusiness()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `str` |  |
| `business_id` | `str` |  |
| `removed` | `bool` |  |
| `status` | `Any` |  |

#### Example: Create

```python
unsave_business = client.UnsaveBusiness().create({
    "account_id": "example_account_id",  # str
    "business_id": "example_business_id",  # str
})
```


### UpdateAgentBillingAccount

Create an instance: `update_agent_billing_account = client.UpdateAgentBillingAccount()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `str` |  |
| `billing_account` | `dict` |  |
| `billing_status` | `str` |  |
| `included_actions` | `float` |  |
| `monthly_fee_cents` | `float` |  |
| `overage_cents` | `float` |  |
| `plan` | `str` |  |
| `status` | `Any` |  |
| `updated_by` | `str` |  |

#### Example: Create

```python
update_agent_billing_account = client.UpdateAgentBillingAccount().create({
    "account_id": "example_account_id",  # str
})
```


### WithdrawJobApplication

Create an instance: `withdraw_job_application = client.WithdrawJobApplication()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `str` |  |
| `already_withdrawn` | `bool` |  |
| `application` | `dict` |  |
| `application_id` | `str` |  |
| `status` | `Any` |  |

#### Example: Create

```python
withdraw_job_application = client.WithdrawJobApplication().create({
    "account_id": "example_account_id",  # str
    "application_id": "example_application_id",  # str
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

Features are the extension mechanism. A feature is a Python class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **RatelimitFeature**: Rate limiting
- **RetryFeature**: Retry
- **TestFeature**: Test transport
- **TimeoutFeature**: Timeout

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as dicts

The Python SDK uses plain dicts throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a dict.

### Module structure

```
py/
├── loppeebusiness_sdk.py         -- Main SDK module
├── config.py                    -- Configuration
├── schema.py                    -- Generated option + entity specs
├── features.py                  -- Feature factory
├── core/                        -- Core types and context
├── entity/                      -- Entity implementations
├── feature/                     -- Built-in features (Base, Test, Log)
├── utility/                     -- Utility functions and struct library
└── test/                        -- Test suites
```

The main module (`loppeebusiness_sdk`) exports the SDK class.
Import entity or utility modules directly only when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```python
agentcapability = client.AgentCapability()
agentcapability.load()

# agentcapability.data_get() now returns the agentcapability data from the last load
# agentcapability.match_get() returns the last match criteria
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
