# LoppeeBusiness TypeScript SDK



The TypeScript SDK for the LoppeeBusiness API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.AgentAccess()` — each with a small set of operations (`list`, `load`, `create`, `update`, `patch`, `remove`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Also generated from this model: `go`, `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb` — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`, see [Tags](https://github.com/voxgig-sdk/loppee-business-sdk/tags)), or from a
clone, which carries the compiled `dist/`:

```bash
git clone https://github.com/voxgig-sdk/loppee-business-sdk
npm install ./loppee-business-sdk/ts
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record. The client sends the API key in the `X-LOPPEE-API-Key` header.

### 1. Create a client

```ts
import { LoppeeBusinessSDK } from '@voxgig-sdk/loppee-business-sdk'

const client = new LoppeeBusinessSDK({
  apikey: process.env.LOPPEE_BUSINESS_APIKEY,
})
```

### 4. Create, update, and remove

```ts
// Create — returns the created AgentAccess ENTITY (.data() for the record)
const created = await client.AgentAccess().create({
  agent_name: 'example_agent_name',
  developer_email: 'example_developer_email',
  organization_name: 'example_organization_name',
})

```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const agentcapability = await client.AgentCapability().load()
  console.log(agentcapability.data())
} catch (err) {
  console.error('load failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
result envelope. Branch on `ok`; on failure `status` holds the HTTP status
(for error responses) and `err` holds the error:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (!result.ok) {
  console.error('request failed:', result.status, result.err)
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = LoppeeBusinessSDK.test()

const agentcapability = await client.AgentCapability().load()
// agentcapability is the AgentCapability entity; .data() reads its mock record
console.log(agentcapability.data())
```

You can also use the instance method:

```ts
const client = new LoppeeBusinessSDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.AgentCapability()

// First call runs the operation and stores its result
await entity.load()

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new LoppeeBusinessSDK({
  apikey: '...',
  extend: [logger],
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
cd ts && npm test
```

Live entity tests continue independent operations after errors and attempt
supported cleanup. Their final result reports failures and missing prerequisites
after the remaining work completes. The model and test inputs determine which
API operations the generated scenarios cover.


## Reference

### LoppeeBusinessSDK

#### Constructor

```ts
new LoppeeBusinessSDK(options?: {
  apikey?: string
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `AgentAccess(data?)` | `AgentAccessEntity` | Create an AgentAccess entity instance. |
| `AgentCapability(data?)` | `AgentCapabilityEntity` | Create an AgentCapability entity instance. |
| `AgentConnectionTest(data?)` | `AgentConnectionTestEntity` | Create an AgentConnectionTest entity instance. |
| `AgentIntegration(data?)` | `AgentIntegrationEntity` | Create an AgentIntegration entity instance. |
| `AgentMonitoring(data?)` | `AgentMonitoringEntity` | Create an AgentMonitoring entity instance. |
| `AgentOpenapi(data?)` | `AgentOpenapiEntity` | Create an AgentOpenapi entity instance. |
| `AgentPolicy(data?)` | `AgentPolicyEntity` | Create an AgentPolicy entity instance. |
| `AnonymousLocationProofRevocation(data?)` | `AnonymousLocationProofRevocationEntity` | Create an AnonymousLocationProofRevocation entity instance. |
| `BusinessApplication(data?)` | `BusinessApplicationEntity` | Create a BusinessApplication entity instance. |
| `BusinessClaim(data?)` | `BusinessClaimEntity` | Create a BusinessClaim entity instance. |
| `BusinessDeal(data?)` | `BusinessDealEntity` | Create a BusinessDeal entity instance. |
| `BusinessIndex(data?)` | `BusinessIndexEntity` | Create a BusinessIndex entity instance. |
| `BusinessOwner(data?)` | `BusinessOwnerEntity` | Create a BusinessOwner entity instance. |
| `BusinessReview(data?)` | `BusinessReviewEntity` | Create a BusinessReview entity instance. |
| `ChatAttachment(data?)` | `ChatAttachmentEntity` | Create a ChatAttachment entity instance. |
| `ChatAttachmentUrl(data?)` | `ChatAttachmentUrlEntity` | Create a ChatAttachmentUrl entity instance. |
| `ClaimVerificationSend(data?)` | `ClaimVerificationSendEntity` | Create a ClaimVerificationSend entity instance. |
| `ClaimVerificationVerify(data?)` | `ClaimVerificationVerifyEntity` | Create a ClaimVerificationVerify entity instance. |
| `CommercialClick(data?)` | `CommercialClickEntity` | Create a CommercialClick entity instance. |
| `ContactRecorded(data?)` | `ContactRecordedEntity` | Create a ContactRecorded entity instance. |
| `Conversation(data?)` | `ConversationEntity` | Create a Conversation entity instance. |
| `ConversationClose(data?)` | `ConversationCloseEntity` | Create a ConversationClose entity instance. |
| `ConversationReport(data?)` | `ConversationReportEntity` | Create a ConversationReport entity instance. |
| `ConversationWorkflow(data?)` | `ConversationWorkflowEntity` | Create a ConversationWorkflow entity instance. |
| `CreateAgentApiKey(data?)` | `CreateAgentApiKeyEntity` | Create a CreateAgentApiKey entity instance. |
| `Customer(data?)` | `CustomerEntity` | Create a Customer entity instance. |
| `CustomerAccount(data?)` | `CustomerAccountEntity` | Create a CustomerAccount entity instance. |
| `CustomerLocationProofRevocation(data?)` | `CustomerLocationProofRevocationEntity` | Create a CustomerLocationProofRevocation entity instance. |
| `DestinationAddressSuggestion(data?)` | `DestinationAddressSuggestionEntity` | Create a DestinationAddressSuggestion entity instance. |
| `DestinationLocationProof(data?)` | `DestinationLocationProofEntity` | Create a DestinationLocationProof entity instance. |
| `DomainTrustCard(data?)` | `DomainTrustCardEntity` | Create a DomainTrustCard entity instance. |
| `GeoContext(data?)` | `GeoContextEntity` | Create a GeoContext entity instance. |
| `Health(data?)` | `HealthEntity` | Create a Health entity instance. |
| `JobApplication(data?)` | `JobApplicationEntity` | Create a JobApplication entity instance. |
| `JobResumeSignedUrl(data?)` | `JobResumeSignedUrlEntity` | Create a JobResumeSignedUrl entity instance. |
| `LocationHandoff(data?)` | `LocationHandoffEntity` | Create a LocationHandoff entity instance. |
| `Message(data?)` | `MessageEntity` | Create a Message entity instance. |
| `ModeratedAction(data?)` | `ModeratedActionEntity` | Create a ModeratedAction entity instance. |
| `OpenApiDocument(data?)` | `OpenApiDocumentEntity` | Create an OpenApiDocument entity instance. |
| `Operation(data?)` | `OperationEntity` | Create an Operation entity instance. |
| `OwnerNotification(data?)` | `OwnerNotificationEntity` | Create an OwnerNotification entity instance. |
| `OwnerNotificationSetting(data?)` | `OwnerNotificationSettingEntity` | Create an OwnerNotificationSetting entity instance. |
| `OwnerWebhookEndpoint(data?)` | `OwnerWebhookEndpointEntity` | Create an OwnerWebhookEndpoint entity instance. |
| `OwnerWebhookRegistration(data?)` | `OwnerWebhookRegistrationEntity` | Create an OwnerWebhookRegistration entity instance. |
| `Pricing(data?)` | `PricingEntity` | Create a Pricing entity instance. |
| `PromoteVerifiedTransaction(data?)` | `PromoteVerifiedTransactionEntity` | Create a PromoteVerifiedTransaction entity instance. |
| `PublicContent(data?)` | `PublicContentEntity` | Create a PublicContent entity instance. |
| `Recommend(data?)` | `RecommendEntity` | Create a Recommend entity instance. |
| `Review(data?)` | `ReviewEntity` | Create a Review entity instance. |
| `Revoke(data?)` | `RevokeEntity` | Create a Revoke entity instance. |
| `SaveBusiness(data?)` | `SaveBusinessEntity` | Create a SaveBusiness entity instance. |
| `SavedBusiness(data?)` | `SavedBusinessEntity` | Create a SavedBusiness entity instance. |
| `SavedLocation(data?)` | `SavedLocationEntity` | Create a SavedLocation entity instance. |
| `Search(data?)` | `SearchEntity` | Create a Search entity instance. |
| `Suggest(data?)` | `SuggestEntity` | Create a Suggest entity instance. |
| `SupportInternalNote(data?)` | `SupportInternalNoteEntity` | Create a SupportInternalNote entity instance. |
| `SupportWorkflow(data?)` | `SupportWorkflowEntity` | Create a SupportWorkflow entity instance. |
| `TaxonomySuggestion(data?)` | `TaxonomySuggestionEntity` | Create a TaxonomySuggestion entity instance. |
| `TrustCard(data?)` | `TrustCardEntity` | Create a TrustCard entity instance. |
| `UnsaveBusiness(data?)` | `UnsaveBusinessEntity` | Create an UnsaveBusiness entity instance. |
| `UpdateAgentBillingAccount(data?)` | `UpdateAgentBillingAccountEntity` | Create an UpdateAgentBillingAccount entity instance. |
| `WithdrawJobApplication(data?)` | `WithdrawJobApplicationEntity` | Create a WithdrawJobApplication entity instance. |
| `tester(testopts?, sdkopts?)` | `LoppeeBusinessSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `LoppeeBusinessSDK.test(testopts?, sdkopts?)` | `LoppeeBusinessSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria, and return it. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria, one per record. |
| `create` | `create(reqdata?, ctrl?): Promise<Entity>` | Create a new entity, and return it. |
| `update` | `update(reqdata?, ctrl?): Promise<Entity>` | Update an existing entity, and return it. |
| `patch` | `patch(reqdata?, ctrl?): Promise<Entity>` | Change part of an existing entity, and return it. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<Entity>` | Remove an entity, and return it marked as deleted. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): LoppeeBusinessSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity itself — there is no result
envelope, and an entity's `data()` reads its record:

- `load`, `create`, `update` and `patch` resolve to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).
- `remove` resolves to the entity, marked as deleted.

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

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

Operations: create.

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

Operations: load.

API path: `/v1/agent-capabilities.json`

#### AgentConnectionTest

| Field | Description |
| --- | --- |
| `key` | Optional UI fallback. |

Operations: create.

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

Operations: list.

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

Operations: load.

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

Operations: list.

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

Operations: load.

API path: `/v1/agent-policy.json`

#### AnonymousLocationProofRevocation

| Field | Description |
| --- | --- |
| `accuracy_meters` |  |
| `captured_at` |  |
| `latitude` |  |
| `longitude` |  |

Operations: create, remove.

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

Operations: create.

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

Operations: create.

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

Operations: list.

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

Operations: list.

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

Operations: create, update.

API path: `/v1/owner/agents/{agent_id}/disconnect`

#### BusinessReview

| Field | Description |
| --- | --- |
| `id` |  |

Operations: load.

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

Operations: create.

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

Operations: create.

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

Operations: create.

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

Operations: create.

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

Operations: create.

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

Operations: create.

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

Operations: create.

API path: `/v1/actions/list-my-conversations`

#### ConversationClose

| Field | Description |
| --- | --- |
| `closed_at` |  |
| `conversation_id` |  |
| `id` |  |
| `status` |  |

Operations: create.

API path: `/v1/account/conversations/{conversation_id}/close`

#### ConversationReport

| Field | Description |
| --- | --- |
| `detail` |  |
| `id` |  |
| `reason` |  |
| `status` |  |

Operations: create.

API path: `/v1/account/conversations/{conversation_id}/report`

#### ConversationWorkflow

| Field | Description |
| --- | --- |
| `priority` |  |
| `status` |  |

Operations: create.

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

Operations: create.

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

Operations: create.

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

Operations: create.

API path: `/v1/account/location-handoffs/{handoff_id}/complete-from-device`

#### CustomerLocationProofRevocation

| Field | Description |
| --- | --- |
| `accuracy_meters` |  |
| `captured_at` |  |
| `latitude` |  |
| `longitude` |  |

Operations: create, remove.

API path: `/v1/account/location-proofs`

#### DestinationAddressSuggestion

| Field | Description |
| --- | --- |
| `input` | Normalized partial US service-address text. |
| `suggestions` |  |

Operations: create.

API path: `/v1/account/destination-address-suggestions`

#### DestinationLocationProof

| Field | Description |
| --- | --- |
| `address` | A real US service address. |
| `premise_proximity_confirmation_token` | Opaque one-time token from the immediately preceding premise-proximity challenge for the same address and authority. |

Operations: create.

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

Operations: load.

API path: `/v1/domains/{domain_key}/trust-card.json`

#### GeoContext

| Field | Description |
| --- | --- |

Operations: load.

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

Operations: load.

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

Operations: create.

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

Operations: create.

API path: `/v1/account/job-applications/{application_id}/resume-url`

#### LocationHandoff

| Field | Description |
| --- | --- |

Operations: create.

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

Operations: create.

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

Operations: create, load.

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

Operations: list.

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

Operations: create, patch, remove, update.

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

Operations: create.

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

Operations: create.

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

Operations: create.

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

Operations: create.

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

Operations: list.

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

Operations: create.

API path: `/v1/actions/promote-verified-transaction`

#### PublicContent

| Field | Description |
| --- | --- |
| `blocks` |  |
| `generated_at` |  |
| `source` |  |
| `trust_model_version` |  |

Operations: load.

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

Operations: list.

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

Operations: create.

API path: `/v1/actions/public-review`

#### Revoke

| Field | Description |
| --- | --- |
| `account_id` |  |
| `key_id` |  |
| `revoked_by` |  |
| `status` |  |

Operations: create.

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

Operations: create.

API path: `/v1/actions/save-business`

#### SavedBusiness

| Field | Description |
| --- | --- |
| `account_id` |  |
| `count` |  |
| `limit` |  |
| `saved_businesses` |  |

Operations: create.

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

Operations: remove, update.

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

Operations: list.

API path: `/v1/business-claim/candidates`

#### Suggest

| Field | Description |
| --- | --- |
| `categories` |  |
| `names` |  |
| `query` |  |
| `schema_version` |  |

Operations: list.

API path: `/v1/suggest`

#### SupportInternalNote

| Field | Description |
| --- | --- |
| `authorLabel` |  |
| `body` |  |
| `createdAt` |  |
| `id` |  |

Operations: create.

API path: `/v1/admin/support/{conversation_id}/internal-notes`

#### SupportWorkflow

| Field | Description |
| --- | --- |
| `category` |  |
| `id` |  |
| `priority` |  |
| `waiting_on` |  |

Operations: create.

API path: `/v1/admin/support/{conversation_id}/workflow`

#### TaxonomySuggestion

| Field | Description |
| --- | --- |
| `alias` |  |
| `path_titles` |  |
| `title` |  |

Operations: list.

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

Operations: create, list, load.

API path: `/v1/businesses/{business_id}/license-records/{fact_id}/report`

#### UnsaveBusiness

| Field | Description |
| --- | --- |
| `account_id` |  |
| `business_id` |  |
| `removed` |  |
| `status` |  |

Operations: create.

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

Operations: create.

API path: `/v1/admin/agent-billing-accounts`

#### WithdrawJobApplication

| Field | Description |
| --- | --- |
| `account_id` |  |
| `already_withdrawn` |  |
| `application` |  |
| `application_id` |  |
| `status` |  |

Operations: create.

API path: `/v1/actions/withdraw-job-application`



## Entities


### AgentAccess

Create an instance: `const agent_access = client.AgentAccess()`

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
| `operating_states` | `any[]` |  |
| `organization_name` | `string` |  |
| `request_id` | `string` |  |
| `request_status` | `string` |  |
| `requested_actions` | `any[]` |  |
| `safety_contact` | `string` |  |
| `status` | `any` |  |
| `target_categories` | `any[]` |  |
| `use_case` | `string` |  |
| `website` | `string` |  |

#### Example: Create

```ts
const agent_access = await client.AgentAccess().create({
  agent_name: 'example_agent_name',
  developer_email: 'example_developer_email',
  organization_name: 'example_organization_name',
})
```


### AgentCapability

Create an instance: `const agent_capability = client.AgentCapability()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_phone_location_bridge` | `Record<string, any>` |  |
| `agent_rules` | `Record<string, any>` |  |
| `discovery` | `Record<string, any>` |  |
| `external_agent_access` | `Record<string, any>` |  |
| `external_agent_webhooks` | `Record<string, any>` |  |
| `local_discovery_location_policy` | `Record<string, any>` |  |
| `location_choices` | `Record<string, any>` |  |
| `registry_name` | `any` |  |
| `schema_version` | `any` |  |
| `trust_model_version` | `any` |  |

#### Example: Load

```ts
const agent_capability = await client.AgentCapability().load()
```


### AgentConnectionTest

Create an instance: `const agent_connection_test = client.AgentConnectionTest()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `key` | `string` | Optional UI fallback. |

#### Example: Create

```ts
const agent_connection_test = await client.AgentConnectionTest().create({
})
```


### AgentIntegration

Create an instance: `const agent_integration = client.AgentIntegration()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_model` | `Record<string, any>` |  |
| `commercial_influence` | `Record<string, any>` |  |
| `developer_docs_url` | `string` |  |
| `exposure_tiers` | `Record<string, any>` |  |
| `external_agent_access` | `Record<string, any>` |  |
| `generated_at` | `string` |  |
| `http_api` | `Record<string, any>` |  |
| `legal` | `Record<string, any>` |  |
| `mcp` | `Record<string, any>` |  |
| `mcp_client_example_url` | `string` |  |
| `monitoring_url` | `string` |  |
| `openapi_url` | `string` |  |
| `openapi_v1_url` | `string` |  |
| `operational_rules` | `any[]` |  |
| `owner_agent_notifications` | `Record<string, any>` |  |
| `package_url` | `string` |  |
| `public_base_url` | `string` |  |
| `rate_limits` | `Record<string, any>` |  |
| `registry_name` | `any` |  |
| `schema_version` | `string` |  |
| `trust_card_contract` | `Record<string, any>` |  |
| `trust_doctrine` | `Record<string, any>` |  |

#### Example: List

```ts
const agent_integrations = await client.AgentIntegration().list()
```


### AgentMonitoring

Create an instance: `const agent_monitoring = client.AgentMonitoring()`

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
| `metrics` | `Record<string, any>` |  |
| `openapi_url` | `string` |  |
| `rate_limits` | `Record<string, any>` |  |
| `registry_name` | `any` |  |
| `schema_version` | `string` |  |
| `service` | `string` |  |
| `uptime_seconds` | `number` |  |
| `version` | `string` |  |

#### Example: Load

```ts
const agent_monitoring = await client.AgentMonitoring().load()
```


### AgentOpenapi

Create an instance: `const agent_openapi = client.AgentOpenapi()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `components` | `Record<string, any>` |  |
| `info` | `Record<string, any>` |  |
| `openapi` | `any` |  |
| `paths` | `Record<string, any>` |  |
| `servers` | `any[]` |  |
| `tags` | `any[]` |  |

#### Example: List

```ts
const agent_openapis = await client.AgentOpenapi().list()
```


### AgentPolicy

Create an instance: `const agent_policy = client.AgentPolicy()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `external_agent_access` | `Record<string, any>` |  |
| `external_agent_webhooks` | `Record<string, any>` |  |
| `local_discovery_location_policy` | `Record<string, any>` |  |
| `location_handoff_flow` | `Record<string, any>` |  |
| `payment` | `Record<string, any>` |  |
| `publication` | `Record<string, any>` |  |
| `schema_version` | `any` |  |
| `trust_model_version` | `any` |  |
| `verification` | `Record<string, any>` |  |

#### Example: Load

```ts
const agent_policy = await client.AgentPolicy().load()
```


### AnonymousLocationProofRevocation

Create an instance: `const anonymous_location_proof_revocation = client.AnonymousLocationProofRevocation()`

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

```ts
const anonymous_location_proof_revocation = await client.AnonymousLocationProofRevocation().create({
  accuracy_meters: 1,
  captured_at: 'example_captured_at',
  latitude: 1,
  longitude: 1,
})
```


### BusinessApplication

Create an instance: `const business_application = client.BusinessApplication()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `application` | `Record<string, any>` |  |
| `application_id` | `string` |  |
| `business_id` | `string` |  |
| `claim_id` | `string | null` |  |
| `created_at` | `string` |  |
| `existing_business` | `boolean` |  |
| `files` | `any[]` |  |
| `listing_id` | `string` |  |
| `pipeline_status` | `string` |  |
| `status` | `any` |  |
| `trust_model_version` | `any` |  |
| `uploaded_files` | `number` |  |

#### Example: Create

```ts
const business_application = await client.BusinessApplication().create({
  application: {},
})
```


### BusinessClaim

Create an instance: `const business_claim = client.BusinessClaim()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `business_id` | `string | null` |  |
| `category` | `string` |  |
| `city` | `string` |  |
| `claim_id` | `string` |  |
| `claim_status` | `string` |  |
| `claimant_email` | `string` | Legacy field; authenticated owner identity wins. |
| `claimant_name` | `string` | Legacy field; authenticated owner identity wins. |
| `claimant_relationship` | `string` |  |
| `created_at` | `string` |  |
| `directory_listing_id` | `string | null` |  |
| `display_name` | `string` |  |
| `listing_id` | `string` |  |
| `notes` | `string` |  |
| `phone` | `string` |  |
| `source` | `string` |  |
| `source_type` | `string` |  |
| `source_url` | `string` |  |
| `state` | `string` |  |
| `status` | `any` |  |
| `verification` | `Record<string, any>` |  |
| `website` | `string` |  |

#### Example: Create

```ts
const business_claim = await client.BusinessClaim().create({
  display_name: 'example_display_name',
})
```


### BusinessDeal

Create an instance: `const business_deal = client.BusinessDeal()`

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
| `endsAt` | `string | null` |  |
| `id` | `string` |  |
| `promoCode` | `string | null` |  |
| `startsAt` | `string | null` |  |
| `terms` | `string | null` |  |
| `title` | `string` |  |

#### Example: List

```ts
const business_deals = await client.BusinessDeal().list({ id: "example" })
```


### BusinessIndex

Create an instance: `const business_index = client.BusinessIndex()`

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
| `domain` | `string | null` |  |
| `insurance` | `Record<string, any>` |  |
| `phone` | `string | null` |  |
| `public_profile_url` | `string` |  |
| `review_reputation` | `Record<string, any>` |  |
| `state` | `string` |  |
| `street_address` | `string | null` | Owner-published street address where authorized. |
| `trust_card_url` | `string` |  |
| `trust_model_version` | `any` |  |
| `verification_class` | `string` |  |
| `verification_disclosure` | `string` |  |
| `website` | `string | null` |  |
| `zip` | `string | null` | Owner-published postal code where authorized. |

#### Example: List

```ts
const business_indexs = await client.BusinessIndex().list()
```


### BusinessOwner

Create an instance: `const business_owner = client.BusinessOwner()`

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
| `actions` | `any[]` |  |
| `allowed_actions` | `any[]` |  |
| `amount_cents` | `number` | Within the top-up limits (default $25 to $5,000). |
| `applicant_location_requirements` | `string` |  |
| `apply_url` | `string | null` |  |
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
| `campaign` | `Record<string, any>` |  |
| `campaign_id` | `string` |  |
| `carrier_name` | `string` |  |
| `category` | `string` |  |
| `category_alias` | `string` |  |
| `category_aliases` | `any[]` |  |
| `change` | `Record<string, any>` |  |
| `city` | `string` |  |
| `client_message_id` | `string` |  |
| `code` | `string` |  |
| `compensation_text` | `string` |  |
| `confirm` | `boolean` |  |
| `confirmation` | `string` |  |
| `connection_kind` | `string` |  |
| `consent_sha256` | `string` | SHA-256 of the acceptance text shown (from payment-authorizations). |
| `contact_email` | `string | null` |  |
| `content_type` | `string` |  |
| `country` | `string` |  |
| `coupon_code` | `string` |  |
| `createdAt` | `string | null` |  |
| `created_at` | `string` |  |
| `credential_id` | `string` |  |
| `credential_identifier` | `string` |  |
| `data_base64` | `string` |  |
| `delivery_contract` | `Record<string, any>` |  |
| `description` | `string | null` |  |
| `direct_apply` | `boolean` |  |
| `disabled_reason` | `string | null` |  |
| `discount_label` | `string` |  |
| `display_name` | `string` |  |
| `employment_type` | `string` |  |
| `enabled` | `boolean` |  |
| `endpoint` | `Record<string, any>` |  |
| `endpoint_id` | `string` |  |
| `endpoint_url` | `string` |  |
| `ends_at` | `string | null` |  |
| `event_id` | `string` |  |
| `event_types` | `any[]` |  |
| `evidence_observed_at` | `string` |  |
| `expected_updated_at` | `string` |  |
| `experience_level` | `string` |  |
| `expires_at` | `string` |  |
| `factor_id` | `string` |  |
| `failure_count` | `number` |  |
| `file_name` | `string` |  |
| `file_sha256` | `string` |  |
| `full_name` | `string` |  |
| `guideHandoffAnsweredAt` | `string | null` |  |
| `guideHandoffAt` | `string | null` |  |
| `guideHandoffDueAt` | `string | null` |  |
| `hours` | `Record<string, any> | null` |  |
| `id` | `string` |  |
| `idempotency_key` | `string` |  |
| `installation_id` | `string` |  |
| `issuer` | `string` |  |
| `jurisdiction` | `string` |  |
| `kind` | `string` |  |
| `label` | `string` |  |
| `lastMessageAt` | `string | null` |  |
| `lastMessageAuthorType` | `string` |  |
| `lastMessagePreview` | `string` |  |
| `last_delivery_at` | `string | null` |  |
| `launch` | `boolean` |  |
| `license_number` | `string` |  |
| `messages` | `any[]` |  |
| `messagesTruncated` | `boolean` |  |
| `monthly_cap_cents` | `number` |  |
| `name` | `string` |  |
| `note` | `string` |  |
| `one_time_display` | `any` |  |
| `ownerEmail` | `string` |  |
| `ownerLastReadAt` | `string | null` |  |
| `ownerName` | `string` |  |
| `ownerUserId` | `string` |  |
| `period` | `string` |  |
| `phone` | `string` |  |
| `platform` | `string` |  |
| `policy_number` | `string` |  |
| `postal_code` | `string` |  |
| `promo_code` | `string | null` |  |
| `push_token` | `string` |  |
| `radius_miles` | `number` |  |
| `reason` | `string` |  |
| `reason_category` | `string` |  |
| `reason_detail` | `string` |  |
| `registered_at` | `string` |  |
| `request_id` | `string` | Client id of this confirmation (8-100 characters); reuse it only to retry the same confirmation. |
| `requested_at` | `string` |  |
| `salary_currency` | `string` |  |
| `salary_max` | `number | null` |  |
| `salary_min` | `number | null` |  |
| `salary_period` | `string` |  |
| `save_card` | `boolean` |  |
| `save_card_consent_sha256` | `string` | Only with save_card true: SHA-256 of the save-card consent text shown. |
| `schedule` | `string` |  |
| `service_areas` | `string` |  |
| `signing_secret` | `string` |  |
| `size_bytes` | `number` |  |
| `skills` | `any[]` |  |
| `source_url` | `string` |  |
| `starts_at` | `string | null` |  |
| `state` | `string` |  |
| `stated_expires_at` | `string` |  |
| `status` | `string` |  |
| `street_address` | `string` |  |
| `subject` | `string` |  |
| `submitted_identifier` | `string` |  |
| `supportLastReadAt` | `string | null` |  |
| `terms` | `string | null` |  |
| `terms_version` | `string` | Must be the current Advertiser Terms version. |
| `threshold_cents` | `number` |  |
| `ticketNumber` | `string` |  |
| `tier` | `string` |  |
| `title` | `string` |  |
| `total_job_openings` | `number | null` |  |
| `typing` | `boolean` |  |
| `updatedAt` | `string | null` |  |
| `updated_at` | `string` |  |
| `url` | `string` | Public HTTPS receiver operated by the connecting principal or its agent runtime. |
| `website` | `string` |  |
| `workplace_type` | `string` |  |
| `zip` | `string` |  |

#### Example: Create

```ts
const business_owner = await client.BusinessOwner().create({
  deal_id: 'example_deal_id',
  account_id: 'example_account_id',
  account_role: 'example_account_role',
  acknowledge_data_effects: true,
  actions: [],
  allowed_actions: [],
  amount_cents: 1,
  asset_id: 'example_asset_id',
  assigneeId: 'example_assigneeId',
  assigneeLabel: 'example_assigneeLabel',
  assigneeType: 'example_assigneeType',
  attempt_id: 'example_attempt_id',
  body: 'example_body',
  businessId: 'example_businessId',
  businessName: 'example_businessName',
  campaign: {},
  campaign_id: 'example_campaign_id',
  category_aliases: [],
  change: {},
  city: 'example_city',
  client_message_id: 'example_client_message_id',
  code: 'example_code',
  confirmation: 'example_confirmation',
  connection_kind: 'example_connection_kind',
  consent_sha256: 'example_consent_sha256',
  content_type: 'example_content_type',
  createdAt: 'example_createdAt',
  created_at: 'example_created_at',
  credential_id: 'example_credential_id',
  credential_identifier: 'example_credential_identifier',
  data_base64: 'example_data_base64',
  delivery_contract: {},
  disabled_reason: 'example_disabled_reason',
  discount_label: 'example_discount_label',
  display_name: 'example_display_name',
  enabled: true,
  endpoint: {},
  endpoint_id: 'example_endpoint_id',
  endpoint_url: 'example_endpoint_url',
  event_id: 'example_event_id',
  event_types: [],
  expected_updated_at: 'example_expected_updated_at',
  factor_id: 'example_factor_id',
  failure_count: 1,
  file_name: 'example_file_name',
  file_sha256: 'example_file_sha256',
  id: 'example_id',
  installation_id: 'example_installation_id',
  issuer: 'example_issuer',
  kind: 'example_kind',
  lastMessageAt: 'example_lastMessageAt',
  lastMessageAuthorType: 'example_lastMessageAuthorType',
  lastMessagePreview: 'example_lastMessagePreview',
  last_delivery_at: 'example_last_delivery_at',
  license_number: 'example_license_number',
  messages: [],
  messagesTruncated: true,
  name: 'example_name',
  one_time_display: 'example_one_time_display',
  ownerEmail: 'example_ownerEmail',
  ownerLastReadAt: 'example_ownerLastReadAt',
  ownerName: 'example_ownerName',
  ownerUserId: 'example_ownerUserId',
  phone: 'example_phone',
  platform: 'example_platform',
  push_token: 'example_push_token',
  radius_miles: 1,
  reason: 'example_reason',
  registered_at: 'example_registered_at',
  request_id: 'example_request_id',
  requested_at: 'example_requested_at',
  save_card: true,
  signing_secret: 'example_signing_secret',
  size_bytes: 1,
  state: 'example_state',
  street_address: 'example_street_address',
  supportLastReadAt: 'example_supportLastReadAt',
  terms_version: 'example_terms_version',
  ticketNumber: 'example_ticketNumber',
  tier: 'example_tier',
  title: 'example_title',
  updatedAt: 'example_updatedAt',
  updated_at: 'example_updated_at',
  url: 'example_url',
  website: 'example_website',
})
```


### BusinessReview

Create an instance: `const business_review = client.BusinessReview()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```ts
const business_review = await client.BusinessReview().load({ id: 'business_review_id' })
```


### ChatAttachment

Create an instance: `const chat_attachment = client.ChatAttachment()`

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

```ts
const chat_attachment = await client.ChatAttachment().create({
  conversation_id: 'example_conversation_id',
  content_type: 'example_content_type',
  data_base64: 'example_data_base64',
  file_name: 'example_file_name',
  size_bytes: 1,
})
```


### ChatAttachmentUrl

Create an instance: `const chat_attachment_url = client.ChatAttachmentUrl()`

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

```ts
const chat_attachment_url = await client.ChatAttachmentUrl().create({
  attachment_id: 'example_attachment_id',
  conversation_id: 'example_conversation_id',
})
```


### ClaimVerificationSend

Create an instance: `const claim_verification_send = client.ClaimVerificationSend()`

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

```ts
const claim_verification_send = await client.ClaimVerificationSend().create({
  claim_id: 'example_claim_id',
})
```


### ClaimVerificationVerify

Create an instance: `const claim_verification_verify = client.ClaimVerificationVerify()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `business_id` | `string | null` |  |
| `challenge_id` | `string` | Exact challenge UUID returned by the v3 SMS or owner-email send. |
| `channel` | `any` |  |
| `claim_id` | `string` |  |
| `code` | `string` |  |
| `method` | `any` |  |
| `publication` | `Record<string, any>` |  |
| `status` | `any` |  |
| `transfer_review_required` | `any` |  |
| `trust_model_version` | `any` |  |

#### Example: Create

```ts
const claim_verification_verify = await client.ClaimVerificationVerify().create({
  claim_id: 'example_claim_id',
  code: 'example_code',
})
```


### CommercialClick

Create an instance: `const commercial_click = client.CommercialClick()`

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
| `billing_event_id` | `string | null` |  |
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
| `metadata` | `Record<string, any>` |  |
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

```ts
const commercial_click = await client.CommercialClick().create({
  action_type: 'example_action_type',
  source_type: 'example_source_type',
})
```


### ContactRecorded

Create an instance: `const contact_recorded = client.ContactRecorded()`

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

```ts
const contact_recorded = await client.ContactRecorded().create({
  business_id: 'example_business_id',
})
```


### Conversation

Create an instance: `const conversation = client.Conversation()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `string` |  |
| `conversation_id` | `string` | Exact conversation referenced by a webhook; returns zero or one scoped thread. |
| `conversations` | `any[]` |  |
| `count` | `number` |  |
| `cursor` | `string` | Opaque pagination cursor returned by the previous page. |
| `limit` | `number` |  |
| `pagination` | `Record<string, any>` |  |

#### Example: Create

```ts
const conversation = await client.Conversation().create({
  account_id: 'example_account_id',
})
```


### ConversationClose

Create an instance: `const conversation_close = client.ConversationClose()`

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

```ts
const conversation_close = await client.ConversationClose().create({
  id: 'example_id',
})
```


### ConversationReport

Create an instance: `const conversation_report = client.ConversationReport()`

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

```ts
const conversation_report = await client.ConversationReport().create({
  id: 'example_id',
  reason: 'example_reason',
})
```


### ConversationWorkflow

Create an instance: `const conversation_workflow = client.ConversationWorkflow()`

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

```ts
const conversation_workflow = await client.ConversationWorkflow().create({
  message_id: 'example_message_id',
})
```


### CreateAgentApiKey

Create an instance: `const create_agent_api_key = client.CreateAgentApiKey()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `string` |  |
| `allowed_actions` | `any[]` |  |
| `allowed_business_ids` | `any[]` |  |
| `created_by` | `string` |  |
| `key` | `Record<string, any>` |  |
| `label` | `string` |  |
| `monthly_quota` | `number` |  |
| `notes` | `string` |  |
| `one_time_display` | `any` |  |
| `rate_limit_per_minute` | `number` |  |
| `raw_key` | `string` |  |
| `status` | `any` |  |

#### Example: Create

```ts
const create_agent_api_key = await client.CreateAgentApiKey().create({
  account_id: 'example_account_id',
})
```


### Customer

Create an instance: `const customer = client.Customer()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_provider` | `string` |  |
| `avatar_url` | `string | null` | Short-lived signed display URL for a private avatar object, or null. |
| `city` | `string | null` |  |
| `created_at` | `string | null` |  |
| `email` | `string` |  |
| `full_name` | `string` |  |
| `id` | `string` |  |
| `phone` | `string | null` |  |
| `search_category` | `string` |  |
| `service_need` | `string` |  |
| `state` | `string | null` |  |
| `status` | `any` |  |
| `updated_at` | `string | null` |  |

#### Example: Create

```ts
const customer = await client.Customer().create({
})
```


### CustomerAccount

Create an instance: `const customer_account = client.CustomerAccount()`

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
| `actions` | `any[]` |  |
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
| `business_id` | `string | null` |  |
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
| `delivery_contract` | `Record<string, any>` |  |
| `disabled_reason` | `string | null` |  |
| `disclosure` | `string` |  |
| `enabled` | `boolean` |  |
| `endpoint` | `Record<string, any>` |  |
| `endpoint_id` | `string` |  |
| `endpoint_url` | `string` |  |
| `environment` | `string` |  |
| `event_id` | `string` |  |
| `event_types` | `any[]` |  |
| `failure_count` | `number` |  |
| `handoff_id` | `string` |  |
| `has_more` | `boolean` |  |
| `id` | `string` |  |
| `idempotent_replay` | `boolean` |  |
| `installation_id` | `string` |  |
| `key_id` | `string` |  |
| `last_delivery_at` | `string | null` |  |
| `latitude` | `number` |  |
| `location` | `any` | An opaque location reference from the website's own location controls. |
| `longitude` | `number` |  |
| `message_alerts_enabled` | `boolean` |  |
| `messages` | `any[]` |  |
| `mode` | `string` | fallback: a direct search answered because the language model was unavailable. |
| `name` | `string` |  |
| `oauth_grant_id` | `string | null` |  |
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
| `results` | `any[]` |  |
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

```ts
const customer_account = await client.CustomerAccount().create({
  account_id: 'example_account_id',
  account_role: 'example_account_role',
  accuracy_meters: 1,
  acknowledge_data_effects: true,
  actions: [],
  agent_key_id: 'example_agent_key_id',
  agent_receives_coordinates: true,
  all_paused: true,
  app_attest_registered: true,
  assertion: 'example_assertion',
  attestation: 'example_attestation',
  author_label: 'example_author_label',
  author_type: 'example_author_type',
  binding: 'example_binding',
  body: 'example_body',
  business_id: 'example_business_id',
  capture_source: 'example_capture_source',
  captured_at: 'example_captured_at',
  challenge: 'example_challenge',
  challenge_id: 'example_challenge_id',
  client_message_id: 'example_client_message_id',
  completed: true,
  confirmation: 'example_confirmation',
  connection_id: 'example_connection_id',
  connection_kind: 'example_connection_kind',
  coordinates_returned: true,
  created_at: 'example_created_at',
  credential_id: 'example_credential_id',
  declined: true,
  delivery_contract: {},
  disabled_reason: 'example_disabled_reason',
  disclosure: 'example_disclosure',
  enabled: true,
  endpoint: {},
  endpoint_id: 'example_endpoint_id',
  endpoint_url: 'example_endpoint_url',
  environment: 'example_environment',
  event_id: 'example_event_id',
  event_types: [],
  failure_count: 1,
  handoff_id: 'example_handoff_id',
  has_more: true,
  id: 'example_id',
  idempotent_replay: true,
  installation_id: 'example_installation_id',
  key_id: 'example_key_id',
  last_delivery_at: 'example_last_delivery_at',
  latitude: 1,
  longitude: 1,
  message_alerts_enabled: true,
  messages: [],
  mode: 'example_mode',
  oauth_grant_id: 'example_oauth_grant_id',
  one_time_display: 'example_one_time_display',
  platform: 'example_platform',
  policy: 'example_policy',
  purpose: 'example_purpose',
  push_token: 'example_push_token',
  registered_at: 'example_registered_at',
  reply: 'example_reply',
  request_mode: 'example_request_mode',
  requested_at: 'example_requested_at',
  results: [],
  schema_version: 'example_schema_version',
  selected_at: 'example_selected_at',
  signed_in: true,
  signing_secret: 'example_signing_secret',
  status: 'example_status',
  updated_at: 'example_updated_at',
  url: 'example_url',
  usable_until: 'example_usable_until',
  use_mode: 'example_use_mode',
})
```


### CustomerLocationProofRevocation

Create an instance: `const customer_location_proof_revocation = client.CustomerLocationProofRevocation()`

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

```ts
const customer_location_proof_revocation = await client.CustomerLocationProofRevocation().create({
  accuracy_meters: 1,
  captured_at: 'example_captured_at',
  latitude: 1,
  longitude: 1,
})
```


### DestinationAddressSuggestion

Create an instance: `const destination_address_suggestion = client.DestinationAddressSuggestion()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `input` | `string` | Normalized partial US service-address text. |
| `suggestions` | `any[]` |  |

#### Example: Create

```ts
const destination_address_suggestion = await client.DestinationAddressSuggestion().create({
  input: 'example_input',
})
```


### DestinationLocationProof

Create an instance: `const destination_location_proof = client.DestinationLocationProof()`

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

```ts
const destination_location_proof = await client.DestinationLocationProof().create({
  address: 'example_address',
})
```


### DomainTrustCard

Create an instance: `const domain_trust_card = client.DomainTrustCard()`

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
| `trust_card` | `Record<string, any>` |  |
| `trust_card_url` | `string` |  |
| `trust_model_version` | `any` |  |
| `verification_class` | `any` |  |
| `verification_disclosure` | `string` |  |

#### Example: Load

```ts
const domain_trust_card = await client.DomainTrustCard().load({ domain_key: 'domain_key' })
```


### GeoContext

Create an instance: `const geo_context = client.GeoContext()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const geo_context = await client.GeoContext().load()
```


### Health

Create an instance: `const health = client.Health()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_phone_location_bridge` | `Record<string, any>` |  |
| `build_sha` | `string` |  |
| `business_review_access` | `Record<string, any>` |  |
| `contract_version` | `string` |  |
| `external_agent_webhooks` | `Record<string, any>` |  |
| `external_agent_webhooks_enabled` | `boolean` |  |
| `ios_app_attest_anonymous_location` | `Record<string, any>` |  |
| `location_choices` | `Record<string, any>` |  |
| `location_handoff` | `Record<string, any>` |  |
| `mobile_push` | `any` |  |
| `ok` | `any` |  |
| `service` | `string` |  |
| `sponsored_ordering` | `Record<string, any>` |  |
| `trust_model_version` | `any` |  |
| `version` | `string` |  |

#### Example: Load

```ts
const health = await client.Health().load()
```


### JobApplication

Create an instance: `const job_application = client.JobApplication()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `string` |  |
| `already_withdrawn` | `boolean` |  |
| `application` | `Record<string, any>` |  |
| `applications` | `any[]` |  |
| `billing` | `Record<string, any>` |  |
| `business_id` | `string` |  |
| `count` | `number` |  |
| `cover_note` | `string` |  |
| `free_to_apply` | `boolean` |  |
| `id` | `string` |  |
| `job_id` | `string` |  |
| `limit` | `number` |  |
| `offset` | `number` |  |
| `resume` | `Record<string, any>` |  |
| `retention_note` | `string` |  |
| `status` | `string` |  |

#### Example: Create

```ts
const job_application = await client.JobApplication().create({
  job_id: 'example_job_id',
  resume: {},
})
```


### JobResumeSignedUrl

Create an instance: `const job_resume_signed_url = client.JobResumeSignedUrl()`

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

```ts
const job_resume_signed_url = await client.JobResumeSignedUrl().create({
  job_application_id: 'example_job_application_id',
})
```


### LocationHandoff

Create an instance: `const location_handoff = client.LocationHandoff()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ts
const location_handoff = await client.LocationHandoff().create({
})
```


### Message

Create an instance: `const message = client.Message()`

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

```ts
const message = await client.Message().create({
  account_id: 'example_account_id',
  client_message_id: 'example_client_message_id',
  message: 'example_message',
  subject: 'example_subject',
  target_business_id: 'example_target_business_id',
  target_business_name: 'example_target_business_name',
  target_business_source: 'example_target_business_source',
})
```


### ModeratedAction

Create an instance: `const moderated_action = client.ModeratedAction()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actions` | `any[]` |  |
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
| `limits` | `Record<string, any>` |  |
| `links` | `any[]` |  |
| `location` | `Record<string, any>` | An opaque location reference from the website's own location controls. |
| `message` | `string` |  |
| `messages` | `any[]` |  |
| `mode` | `string` | fallback: a direct search answered because the language model was unavailable. |
| `name` | `string` |  |
| `needsHuman` | `boolean` |  |
| `policy` | `Record<string, any>` | Human schedule and separate claim-review policy. |
| `question` | `string` |  |
| `reply` | `string` |  |
| `result` | `string` |  |
| `results` | `any[]` |  |
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

```ts
const moderated_action = await client.ModeratedAction().load()
```

#### Example: Create

```ts
const moderated_action = await client.ModeratedAction().create({
  content_type: 'example_content_type',
  file_sha256: 'example_file_sha256',
  intent_id: 'example_intent_id',
  messages: [],
  question: 'example_question',
  result: 'example_result',
  scan_authority_id: 'example_scan_authority_id',
  scanner: 'example_scanner',
  scanner_version: 'example_scanner_version',
  size_bytes: 1,
  target_business_id: 'example_target_business_id',
})
```


### OpenApiDocument

Create an instance: `const open_api_document = client.OpenApiDocument()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `components` | `Record<string, any>` |  |
| `info` | `Record<string, any>` |  |
| `openapi` | `any` |  |
| `paths` | `Record<string, any>` |  |
| `servers` | `any[]` |  |
| `tags` | `any[]` |  |

#### Example: List

```ts
const open_api_documents = await client.OpenApiDocument().list()
```


### Operation

Create an instance: `const operation = client.Operation()`

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
| `allowed_actions` | `any[]` |  |
| `alt` | `string` |  |
| `amount_cents` | `number` | Whole cents, non-zero, at most 1,000,000 either way; a promotional credit is positive. |
| `amount_off_cents` | `number` |  |
| `api_key` | `string` |  |
| `applies_to_period` | `string` |  |
| `applies_to_tier` | `string | null` |  |
| `assigned_admin_user_id` | `string | null` |  |
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
| `business_id` | `string | null` |  |
| `business_ids` | `any[]` |  |
| `campaign_id` | `string` |  |
| `campaign_ids` | `any[]` |  |
| `caption` | `string` |  |
| `case_status` | `string` |  |
| `catalog` | `any[]` |  |
| `category` | `string` |  |
| `category_alias` | `string` |  |
| `chunk_size` | `number` |  |
| `city` | `string` |  |
| `code` | `string` |  |
| `confidence` | `number` |  |
| `config` | `Record<string, any>` | Complete validated pricing configuration. |
| `confirm` | `boolean` |  |
| `confirm_admin` | `boolean` |  |
| `confirmation` | `string` |  |
| `connection_id` | `string` |  |
| `connection_kind` | `string` |  |
| `content_type` | `string` |  |
| `context_id` | `string` |  |
| `context_type` | `string` |  |
| `createdAt` | `string | null` |  |
| `created_at` | `string` |  |
| `credential_expires_at` | `string` | Expiration date printed on the license. |
| `credential_id` | `string` |  |
| `custom_wire` | `string` |  |
| `data_base64` | `string` |  |
| `decision` | `string` |  |
| `dedupe_ack` | `boolean` |  |
| `delivery_contract` | `Record<string, any>` |  |
| `disabled_reason` | `string | null` |  |
| `discount_type` | `string` |  |
| `display_name` | `string` |  |
| `disposition` | `string` |  |
| `draft` | `Record<string, any>` |  |
| `duration` | `string` |  |
| `duration_in_months` | `number | null` |  |
| `email` | `string` |  |
| `enabled` | `boolean` |  |
| `endpoint` | `Record<string, any>` |  |
| `endpoint_id` | `string` |  |
| `endpoint_url` | `string` |  |
| `ends_at` | `string` |  |
| `environment_fallback` | `any` |  |
| `event_id` | `string` |  |
| `event_types` | `any[]` |  |
| `expected_allowed_actions` | `any[]` |  |
| `expected_key_id` | `string` |  |
| `expected_updated_at` | `string` |  |
| `expected_version` | `number` |  |
| `expires_at` | `string` | Promotional credit only: ISO date-time 1 hour to 2 years ahead, disclosed to the owner. |
| `fact_id` | `string` |  |
| `facts` | `Record<string, any>` |  |
| `failure_count` | `number` |  |
| `fields` | `Record<string, any>` | Validated fields for this fixed content-block type. |
| `file_name` | `string` |  |
| `guideHandoffAnsweredAt` | `string | null` |  |
| `guideHandoffAt` | `string | null` |  |
| `guideHandoffDueAt` | `string | null` |  |
| `height` | `number` |  |
| `historic_association_checked` | `boolean` |  |
| `hold` | `string` |  |
| `holder_name_match` | `boolean` |  |
| `hours` | `Record<string, any>` |  |
| `id` | `string` |  |
| `idempotency_key` | `string` |  |
| `identifier_match` | `boolean` |  |
| `in_use` | `Record<string, any>` |  |
| `instruction` | `string` |  |
| `invited` | `boolean` |  |
| `key_check` | `any` |  |
| `kind` | `string` |  |
| `label` | `string` |  |
| `lastMessageAt` | `string | null` |  |
| `lastMessageAuthorType` | `string` |  |
| `lastMessagePreview` | `string` |  |
| `last_delivery_at` | `string | null` |  |
| `last_error_code` | `any` |  |
| `last_probe_at` | `any` |  |
| `last_problem` | `any` |  |
| `legal_name` | `string` |  |
| `limit` | `number` |  |
| `make_active` | `boolean` |  |
| `max_cents` | `number` |  |
| `max_redemptions` | `number | null` |  |
| `messages` | `any[]` |  |
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
| `ownerLastReadAt` | `string | null` |  |
| `ownerName` | `string` |  |
| `ownerUserId` | `string` |  |
| `owner_reason_code` | `string` | Controlled owner-visible rejection reason. |
| `per_customer_limit` | `number` |  |
| `percent_off` | `number` |  |
| `phone` | `string` |  |
| `policyVersion` | `string` |  |
| `priority` | `string` |  |
| `provider` | `string` |  |
| `providers` | `any[]` |  |
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
| `report_ids` | `any[]` |  |
| `reserve_cents` | `number` | 100-10000; never below $1.00. |
| `resolution_note` | `string` |  |
| `review_notes` | `string` |  |
| `revision` | `number` |  |
| `role` | `string` |  |
| `rows` | `any[]` |  |
| `run` | `Record<string, any>` |  |
| `schema_version` | `string` |  |
| `scope` | `string` |  |
| `search` | `string` |  |
| `settings` | `Record<string, any>` |  |
| `signing_secret` | `string` |  |
| `size_bytes` | `number` |  |
| `sla_due_at` | `string | null` |  |
| `source` | `string` |  |
| `source_authority` | `string` | Exact official authority name. |
| `source_category_slug` | `string` |  |
| `source_scope_checked` | `boolean` |  |
| `source_url` | `string` | Exact HTTPS official source URL. |
| `starts_at` | `string | null` |  |
| `state` | `string` | Bulk by area: every ad of the advertisers in this two-letter U.S. |
| `status` | `string` |  |
| `storage` | `string` |  |
| `street_address` | `string` |  |
| `subject` | `string` |  |
| `supportLastReadAt` | `string | null` |  |
| `target_category` | `string` |  |
| `taxonomy_category_aliases` | `any[]` |  |
| `ticketNumber` | `string` |  |
| `tier` | `string` |  |
| `typing` | `boolean` |  |
| `until` | `string` |  |
| `updatedAt` | `string | null` |  |
| `updated_at` | `string` |  |
| `url` | `string` | Public HTTPS receiver operated by the connecting principal or its agent runtime. |
| `valid_until` | `string` |  |
| `value` | `string` |  |
| `verification_method` | `string` |  |
| `verified_at` | `any` |  |
| `verified_service_scope` | `any[]` |  |
| `version` | `string` |  |
| `website` | `string` |  |
| `width` | `number` |  |
| `window_hours` | `number` | 1-744, default 48. |
| `workload` | `string` |  |
| `zip` | `string` |  |

#### Example: Create

```ts
const operation = await client.Operation().create({
  coupon_id: 'example_coupon_id',
  account_id: 'example_account_id',
  allowed_actions: [],
  amount_cents: 1,
  api_key: 'example_api_key',
  assigneeId: 'example_assigneeId',
  assigneeLabel: 'example_assigneeLabel',
  assigneeType: 'example_assigneeType',
  assistant_enabled: true,
  body: 'example_body',
  businessId: 'example_businessId',
  businessName: 'example_businessName',
  business_ids: [],
  catalog: [],
  code: 'example_code',
  config: {},
  confirmation: 'example_confirmation',
  connection_id: 'example_connection_id',
  connection_kind: 'example_connection_kind',
  content_type: 'example_content_type',
  context_id: 'example_context_id',
  context_type: 'example_context_type',
  createdAt: 'example_createdAt',
  created_at: 'example_created_at',
  credential_id: 'example_credential_id',
  data_base64: 'example_data_base64',
  decision: 'example_decision',
  delivery_contract: {},
  disabled_reason: 'example_disabled_reason',
  discount_type: 'example_discount_type',
  display_name: 'example_display_name',
  disposition: 'example_disposition',
  draft: {},
  email: 'example_email',
  enabled: true,
  endpoint: {},
  endpoint_id: 'example_endpoint_id',
  endpoint_url: 'example_endpoint_url',
  ends_at: 'example_ends_at',
  environment_fallback: 'example_environment_fallback',
  event_id: 'example_event_id',
  event_types: [],
  expected_allowed_actions: [],
  expected_key_id: 'example_expected_key_id',
  expected_updated_at: 'example_expected_updated_at',
  expected_version: 1,
  fact_id: 'example_fact_id',
  facts: {},
  failure_count: 1,
  fields: {},
  file_name: 'example_file_name',
  historic_association_checked: true,
  hold: 'example_hold',
  hours: {},
  id: 'example_id',
  in_use: {},
  invited: true,
  key_check: 'example_key_check',
  kind: 'example_kind',
  label: 'example_label',
  lastMessageAt: 'example_lastMessageAt',
  lastMessageAuthorType: 'example_lastMessageAuthorType',
  lastMessagePreview: 'example_lastMessagePreview',
  last_delivery_at: 'example_last_delivery_at',
  last_error_code: 'example_last_error_code',
  last_probe_at: 'example_last_probe_at',
  last_problem: 'example_last_problem',
  make_active: true,
  max_cents: 1,
  messages: [],
  messagesTruncated: true,
  min_cents: 1,
  model: 'example_model',
  model_id: 'example_model_id',
  name: 'example_name',
  one_time_display: 'example_one_time_display',
  outcome: 'example_outcome',
  ownerEmail: 'example_ownerEmail',
  ownerLastReadAt: 'example_ownerLastReadAt',
  ownerName: 'example_ownerName',
  ownerUserId: 'example_ownerUserId',
  policyVersion: 'example_policyVersion',
  provider: 'example_provider',
  providers: [],
  purpose_code: 'example_purpose_code',
  rank_bid_cents: 1,
  reference: 'example_reference',
  report_ids: [],
  reserve_cents: 1,
  resolution_note: 'example_resolution_note',
  revision: 1,
  rows: [],
  run: {},
  schema_version: 'example_schema_version',
  scope: 'example_scope',
  settings: {},
  signing_secret: 'example_signing_secret',
  size_bytes: 1,
  source_scope_checked: true,
  storage: 'example_storage',
  subject: 'example_subject',
  supportLastReadAt: 'example_supportLastReadAt',
  taxonomy_category_aliases: [],
  ticketNumber: 'example_ticketNumber',
  tier: 'example_tier',
  updatedAt: 'example_updatedAt',
  updated_at: 'example_updated_at',
  url: 'example_url',
  value: 'example_value',
  verification_method: 'example_verification_method',
  verified_at: 'example_verified_at',
  workload: 'example_workload',
})
```


### OwnerNotification

Create an instance: `const owner_notification = client.OwnerNotification()`

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
| `readAt` | `string | null` |  |
| `resourceId` | `string` |  |
| `resourceKind` | `any` |  |
| `resourceUrl` | `string` |  |
| `summary` | `string` |  |
| `webhookStatus` | `string` |  |

#### Example: Create

```ts
const owner_notification = await client.OwnerNotification().create({
  notification_id: 'example_notification_id',
})
```


### OwnerNotificationSetting

Create an instance: `const owner_notification_setting = client.OwnerNotificationSetting()`

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
| `eventTypeSubscriptions` | `any[]` |  |
| `event_types` | `any[]` |  |
| `updatedAt` | `string` |  |
| `webhookEnabled` | `boolean` |  |
| `webhook_enabled` | `boolean` |  |

#### Example: Create

```ts
const owner_notification_setting = await client.OwnerNotificationSetting().create({
})
```


### OwnerWebhookEndpoint

Create an instance: `const owner_webhook_endpoint = client.OwnerWebhookEndpoint()`

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
| `eventTypeSubscriptions` | `any[]` |  |
| `failureCount` | `number` |  |
| `id` | `string` |  |
| `lastDeliveryAt` | `string | null` |  |
| `updatedAt` | `string` |  |
| `url` | `string` |  |

#### Example: Create

```ts
const owner_webhook_endpoint = await client.OwnerWebhookEndpoint().create({
  webhook_id: 'example_webhook_id',
})
```


### OwnerWebhookRegistration

Create an instance: `const owner_webhook_registration = client.OwnerWebhookRegistration()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `business_id` | `string` |  |
| `endpoint` | `Record<string, any>` |  |
| `event_types` | `any[]` |  |
| `one_time_display` | `any` |  |
| `signing_secret` | `string` |  |
| `status` | `any` |  |
| `url` | `string` |  |

#### Example: Create

```ts
const owner_webhook_registration = await client.OwnerWebhookRegistration().create({
  url: 'example_url',
})
```


### Pricing

Create an instance: `const pricing = client.Pricing()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `billing` | `Record<string, any>` |  |
| `branch_add_ons` | `any[]` |  |
| `currency` | `any` |  |
| `generated_at` | `string` |  |
| `neutrality` | `string` |  |
| `plans` | `any[]` |  |
| `promotions` | `any[]` |  |
| `published_at` | `string | null` |  |
| `radius_extension` | `Record<string, any>` |  |
| `revision_id` | `string | null` |  |
| `source` | `any` |  |
| `trust_model_version` | `any` |  |

#### Example: List

```ts
const pricings = await client.Pricing().list()
```


### PromoteVerifiedTransaction

Create an instance: `const promote_verified_transaction = client.PromoteVerifiedTransaction()`

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

```ts
const promote_verified_transaction = await client.PromoteVerifiedTransaction().create({
  business_id: 'example_business_id',
  evidence_id: 'example_evidence_id',
})
```


### PublicContent

Create an instance: `const public_content = client.PublicContent()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `blocks` | `Record<string, any>` |  |
| `generated_at` | `string` |  |
| `source` | `any` |  |
| `trust_model_version` | `any` |  |

#### Example: Load

```ts
const public_content = await client.PublicContent().load()
```


### Recommend

Create an instance: `const recommend = client.Recommend()`

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
| `fallback_registry` | `any[]` |  |
| `generated_at` | `string` |  |
| `has_more` | `boolean` | True only when next_cursor can continue through the current bounded, deterministic candidate window. |
| `listed` | `any[]` |  |
| `location_context` | `any` | Local category discovery and recommendations require a current precise location proof or handoff, a user-confirmed validated destination authority, or a saved_exact Home location. |
| `ordering` | `any` |  |
| `policy` | `string` |  |
| `presentation_guidance` | `string` | Agent-key responses: how to present these results to the customer. |
| `query` | `Record<string, any>` |  |
| `ranking_policy` | `string` |  |
| `registry_count_basis` | `string` |  |
| `registry_count_observed_at` | `string | null` |  |
| `registry_name` | `any` |  |
| `results` | `any[]` |  |
| `returned_count` | `number` |  |
| `reviewed_registry` | `any[]` |  |
| `schema_version` | `any` |  |
| `search_intent` | `Record<string, any>` |  |
| `suggestions` | `Record<string, any>` |  |
| `total_matches` | `number` | Web and app responses. |
| `total_matches_basis` | `number` |  |
| `total_registry_records` | `number` |  |
| `trust_model_version` | `any` |  |
| `verified` | `any[]` |  |
| `visible_candidate_records` | `number` | Web and app responses. |

#### Example: List

```ts
const recommends = await client.Recommend().list()
```


### Review

Create an instance: `const review = client.Review()`

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

```ts
const review = await client.Review().create({
  account_id: 'example_account_id',
  attestation_accepted: true,
  message: 'example_message',
  rating: 1,
  subject: 'example_subject',
  target_business_id: 'example_target_business_id',
})
```


### Revoke

Create an instance: `const revoke = client.Revoke()`

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

```ts
const revoke = await client.Revoke().create({
  agent_key_id: 'example_agent_key_id',
})
```


### SaveBusiness

Create an instance: `const save_business = client.SaveBusiness()`

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

```ts
const save_business = await client.SaveBusiness().create({
  account_id: 'example_account_id',
  business_id: 'example_business_id',
  business_name: 'example_business_name',
  business_source: 'example_business_source',
})
```


### SavedBusiness

Create an instance: `const saved_business = client.SavedBusiness()`

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
| `saved_businesses` | `any[]` |  |

#### Example: Create

```ts
const saved_business = await client.SavedBusiness().create({
  account_id: 'example_account_id',
})
```


### SavedLocation

Create an instance: `const saved_location = client.SavedLocation()`

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
| `label` | `string | null` |  |
| `location_proof_id` | `string` |  |
| `reach_precision` | `any` | Exact can authorize local category/recommendation reach; coarse cannot activate local results, Sponsored placement, or impressions. |
| `saved_location_ref` | `string | null` |  |
| `updated_at` | `string | null` |  |
| `zip` | `string` |  |


### Search

Create an instance: `const search = client.Search()`

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
| `next_cursor` | `string | null` |  |
| `page_limit` | `number` |  |
| `policy` | `string` |  |
| `presentation_guidance` | `string` | Agent-key responses: how to present these results to the customer. |
| `query` | `Record<string, any>` |  |
| `ranking_policy` | `string` |  |
| `registry_count_basis` | `string` |  |
| `registry_count_observed_at` | `string | null` |  |
| `registry_name` | `any` |  |
| `results` | `any[]` |  |
| `returned_count` | `number` |  |
| `schema_version` | `any` |  |
| `search_intent` | `Record<string, any>` |  |
| `suggestions` | `Record<string, any>` |  |
| `total_matches` | `number` | Web and app responses. |
| `total_matches_basis` | `number` |  |
| `total_registry_records` | `number` |  |
| `trust_model_version` | `any` |  |
| `visible_candidate_records` | `number` | Web and app responses. |

#### Example: List

```ts
const searchs = await client.Search().list()
```


### Suggest

Create an instance: `const suggest = client.Suggest()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `categories` | `any[]` |  |
| `names` | `any[]` |  |
| `query` | `string` |  |
| `schema_version` | `any` |  |

#### Example: List

```ts
const suggests = await client.Suggest().list()
```


### SupportInternalNote

Create an instance: `const support_internal_note = client.SupportInternalNote()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `authorLabel` | `string` |  |
| `body` | `string` |  |
| `createdAt` | `string | null` |  |
| `id` | `string` |  |

#### Example: Create

```ts
const support_internal_note = await client.SupportInternalNote().create({
  id: 'example_id',
  body: 'example_body',
})
```


### SupportWorkflow

Create an instance: `const support_workflow = client.SupportWorkflow()`

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

```ts
const support_workflow = await client.SupportWorkflow().create({
  id: 'example_id',
})
```


### TaxonomySuggestion

Create an instance: `const taxonomy_suggestion = client.TaxonomySuggestion()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alias` | `string` |  |
| `path_titles` | `any[]` |  |
| `title` | `string` |  |

#### Example: List

```ts
const taxonomy_suggestions = await client.TaxonomySuggestion().list()
```


### TrustCard

Create an instance: `const trust_card = client.TrustCard()`

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
| `record_number` | `string | null` |  |
| `record_scope` | `string` |  |
| `record_type` | `string` |  |
| `recorded_expiry` | `string | null` |  |
| `result` | `string` |  |
| `source_label` | `string` |  |
| `source_url` | `string` |  |
| `state` | `string` |  |
| `status_on_record` | `string` |  |

#### Example: Load

```ts
const trust_card = await client.TrustCard().load({ schema_name: 'schema_name' })
```

#### Example: List

```ts
const trust_cards = await client.TrustCard().list({ business_id: "example" })
```

#### Example: Create

```ts
const trust_card = await client.TrustCard().create({
  business_id: 'example_business_id',
  license_record_id: 'example_license_record_id',
})
```


### UnsaveBusiness

Create an instance: `const unsave_business = client.UnsaveBusiness()`

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

```ts
const unsave_business = await client.UnsaveBusiness().create({
  account_id: 'example_account_id',
  business_id: 'example_business_id',
})
```


### UpdateAgentBillingAccount

Create an instance: `const update_agent_billing_account = client.UpdateAgentBillingAccount()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `string` |  |
| `billing_account` | `Record<string, any>` |  |
| `billing_status` | `string` |  |
| `included_actions` | `number` |  |
| `monthly_fee_cents` | `number` |  |
| `overage_cents` | `number` |  |
| `plan` | `string` |  |
| `status` | `any` |  |
| `updated_by` | `string` |  |

#### Example: Create

```ts
const update_agent_billing_account = await client.UpdateAgentBillingAccount().create({
  account_id: 'example_account_id',
})
```


### WithdrawJobApplication

Create an instance: `const withdraw_job_application = client.WithdrawJobApplication()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `string` |  |
| `already_withdrawn` | `boolean` |  |
| `application` | `Record<string, any>` |  |
| `application_id` | `string` |  |
| `status` | `any` |  |

#### Example: Create

```ts
const withdraw_job_application = await client.WithdrawJobApplication().create({
  account_id: 'example_account_id',
  application_id: 'example_application_id',
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

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **RatelimitFeature**: Rate limiting
- **RetryFeature**: Retry
- **TestFeature**: Test transport
- **TimeoutFeature**: Timeout

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
loppee-business/
├── src/
│   ├── LoppeeBusinessSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { LoppeeBusinessSDK } from '@voxgig-sdk/loppee-business-sdk'
```

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const agentcapability = client.AgentCapability()
await agentcapability.load()

// agentcapability.data() now returns the agentcapability data from the last `load`
// agentcapability.match() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
