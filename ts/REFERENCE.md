# LoppeeBusiness TypeScript SDK Reference

Complete API reference for the LoppeeBusiness TypeScript SDK.


## LoppeeBusinessSDK

### Constructor

```ts
new LoppeeBusinessSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `LoppeeBusinessSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = LoppeeBusinessSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `LoppeeBusinessSDK` instance in test mode.


### Instance Methods

#### `AgentAccess(data?: object)`

Create a new `AgentAccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AgentAccessEntity` instance.

#### `AgentCapability(data?: object)`

Create a new `AgentCapability` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AgentCapabilityEntity` instance.

#### `AgentConnectionTest(data?: object)`

Create a new `AgentConnectionTest` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AgentConnectionTestEntity` instance.

#### `AgentIntegration(data?: object)`

Create a new `AgentIntegration` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AgentIntegrationEntity` instance.

#### `AgentMonitoring(data?: object)`

Create a new `AgentMonitoring` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AgentMonitoringEntity` instance.

#### `AgentOpenapi(data?: object)`

Create a new `AgentOpenapi` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AgentOpenapiEntity` instance.

#### `AgentPolicy(data?: object)`

Create a new `AgentPolicy` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AgentPolicyEntity` instance.

#### `AnonymousLocationProofRevocation(data?: object)`

Create a new `AnonymousLocationProofRevocation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AnonymousLocationProofRevocationEntity` instance.

#### `BusinessApplication(data?: object)`

Create a new `BusinessApplication` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BusinessApplicationEntity` instance.

#### `BusinessClaim(data?: object)`

Create a new `BusinessClaim` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BusinessClaimEntity` instance.

#### `BusinessDeal(data?: object)`

Create a new `BusinessDeal` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BusinessDealEntity` instance.

#### `BusinessIndex(data?: object)`

Create a new `BusinessIndex` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BusinessIndexEntity` instance.

#### `BusinessOwner(data?: object)`

Create a new `BusinessOwner` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BusinessOwnerEntity` instance.

#### `BusinessReview(data?: object)`

Create a new `BusinessReview` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BusinessReviewEntity` instance.

#### `ChatAttachment(data?: object)`

Create a new `ChatAttachment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ChatAttachmentEntity` instance.

#### `ChatAttachmentUrl(data?: object)`

Create a new `ChatAttachmentUrl` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ChatAttachmentUrlEntity` instance.

#### `ClaimVerificationSend(data?: object)`

Create a new `ClaimVerificationSend` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ClaimVerificationSendEntity` instance.

#### `ClaimVerificationVerify(data?: object)`

Create a new `ClaimVerificationVerify` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ClaimVerificationVerifyEntity` instance.

#### `CommercialClick(data?: object)`

Create a new `CommercialClick` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CommercialClickEntity` instance.

#### `ContactRecorded(data?: object)`

Create a new `ContactRecorded` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ContactRecordedEntity` instance.

#### `Conversation(data?: object)`

Create a new `Conversation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ConversationEntity` instance.

#### `ConversationClose(data?: object)`

Create a new `ConversationClose` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ConversationCloseEntity` instance.

#### `ConversationReport(data?: object)`

Create a new `ConversationReport` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ConversationReportEntity` instance.

#### `ConversationWorkflow(data?: object)`

Create a new `ConversationWorkflow` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ConversationWorkflowEntity` instance.

#### `CreateAgentApiKey(data?: object)`

Create a new `CreateAgentApiKey` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CreateAgentApiKeyEntity` instance.

#### `Customer(data?: object)`

Create a new `Customer` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CustomerEntity` instance.

#### `CustomerAccount(data?: object)`

Create a new `CustomerAccount` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CustomerAccountEntity` instance.

#### `CustomerLocationProofRevocation(data?: object)`

Create a new `CustomerLocationProofRevocation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CustomerLocationProofRevocationEntity` instance.

#### `DestinationAddressSuggestion(data?: object)`

Create a new `DestinationAddressSuggestion` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DestinationAddressSuggestionEntity` instance.

#### `DestinationLocationProof(data?: object)`

Create a new `DestinationLocationProof` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DestinationLocationProofEntity` instance.

#### `DomainTrustCard(data?: object)`

Create a new `DomainTrustCard` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DomainTrustCardEntity` instance.

#### `GeoContext(data?: object)`

Create a new `GeoContext` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GeoContextEntity` instance.

#### `Health(data?: object)`

Create a new `Health` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `HealthEntity` instance.

#### `JobApplication(data?: object)`

Create a new `JobApplication` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `JobApplicationEntity` instance.

#### `JobResumeSignedUrl(data?: object)`

Create a new `JobResumeSignedUrl` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `JobResumeSignedUrlEntity` instance.

#### `LocationHandoff(data?: object)`

Create a new `LocationHandoff` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LocationHandoffEntity` instance.

#### `Message(data?: object)`

Create a new `Message` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MessageEntity` instance.

#### `ModeratedAction(data?: object)`

Create a new `ModeratedAction` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ModeratedActionEntity` instance.

#### `OpenApiDocument(data?: object)`

Create a new `OpenApiDocument` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OpenApiDocumentEntity` instance.

#### `Operation(data?: object)`

Create a new `Operation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OperationEntity` instance.

#### `OwnerNotification(data?: object)`

Create a new `OwnerNotification` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OwnerNotificationEntity` instance.

#### `OwnerNotificationSetting(data?: object)`

Create a new `OwnerNotificationSetting` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OwnerNotificationSettingEntity` instance.

#### `OwnerWebhookEndpoint(data?: object)`

Create a new `OwnerWebhookEndpoint` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OwnerWebhookEndpointEntity` instance.

#### `OwnerWebhookRegistration(data?: object)`

Create a new `OwnerWebhookRegistration` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OwnerWebhookRegistrationEntity` instance.

#### `Pricing(data?: object)`

Create a new `Pricing` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PricingEntity` instance.

#### `PromoteVerifiedTransaction(data?: object)`

Create a new `PromoteVerifiedTransaction` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PromoteVerifiedTransactionEntity` instance.

#### `PublicContent(data?: object)`

Create a new `PublicContent` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PublicContentEntity` instance.

#### `Recommend(data?: object)`

Create a new `Recommend` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RecommendEntity` instance.

#### `Review(data?: object)`

Create a new `Review` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ReviewEntity` instance.

#### `Revoke(data?: object)`

Create a new `Revoke` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RevokeEntity` instance.

#### `SaveBusiness(data?: object)`

Create a new `SaveBusiness` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SaveBusinessEntity` instance.

#### `SavedBusiness(data?: object)`

Create a new `SavedBusiness` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SavedBusinessEntity` instance.

#### `SavedLocation(data?: object)`

Create a new `SavedLocation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SavedLocationEntity` instance.

#### `Search(data?: object)`

Create a new `Search` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SearchEntity` instance.

#### `Suggest(data?: object)`

Create a new `Suggest` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SuggestEntity` instance.

#### `SupportInternalNote(data?: object)`

Create a new `SupportInternalNote` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SupportInternalNoteEntity` instance.

#### `SupportWorkflow(data?: object)`

Create a new `SupportWorkflow` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SupportWorkflowEntity` instance.

#### `TaxonomySuggestion(data?: object)`

Create a new `TaxonomySuggestion` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TaxonomySuggestionEntity` instance.

#### `TrustCard(data?: object)`

Create a new `TrustCard` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TrustCardEntity` instance.

#### `UnsaveBusiness(data?: object)`

Create a new `UnsaveBusiness` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UnsaveBusinessEntity` instance.

#### `UpdateAgentBillingAccount(data?: object)`

Create a new `UpdateAgentBillingAccount` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UpdateAgentBillingAccountEntity` instance.

#### `WithdrawJobApplication(data?: object)`

Create a new `WithdrawJobApplication` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WithdrawJobApplicationEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |
| `fetchargs.ctrl.signal` | `AbortSignal` | Aborts the request in flight: `ok` is then `false` and `err.code` is `request_aborted`. |

**Returns:** `Promise<{ ok, status, headers, data }>`. On a failure
`ok` is `false` and `err` holds the error.

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `LoppeeBusinessSDK.test()`.

**Returns:** `LoppeeBusinessSDK` instance in test mode.

#### Cancelling a call

Every entity operation takes an optional `ctrl` object after its match or
data, and an `AbortSignal` in `ctrl.signal` cancels the request in flight.
The operation then rejects with an error whose `code` is
`request_aborted` and whose `cause` is the signal's reason. A request
whose signal has already aborted is not sent. `stream()` takes the signal
as `callopts.signal`, and ends when it aborts.


---

## AgentAccessEntity

```ts
const agent_access = client.AgentAccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_name` | `string` | Yes |  |
| `agent_type` | `string` | No |  |
| `callback_url` | `string` | No |  |
| `compliance_notes` | `string` | No |  |
| `created_at` | `string` | Yes |  |
| `data_needs` | `string` | No |  |
| `developer_email` | `string` | Yes |  |
| `operating_states` | `any[]` | No |  |
| `organization_name` | `string` | Yes |  |
| `request_id` | `string` | Yes |  |
| `request_status` | `string` | Yes |  |
| `requested_actions` | `any[]` | No |  |
| `safety_contact` | `string` | No |  |
| `status` | `any` | Yes |  |
| `target_categories` | `any[]` | No |  |
| `use_case` | `string` | No |  |
| `website` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.AgentAccess().create({
  agent_name: 'example_agent_name',
  developer_email: 'example_developer_email',
  organization_name: 'example_organization_name',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AgentAccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoppeeBusinessSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AgentCapabilityEntity

```ts
const agent_capability = client.AgentCapability()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_phone_location_bridge` | `Record<string, any>` | No |  |
| `agent_rules` | `Record<string, any>` | Yes |  |
| `discovery` | `Record<string, any>` | Yes |  |
| `external_agent_access` | `Record<string, any>` | Yes |  |
| `external_agent_webhooks` | `Record<string, any>` | Yes |  |
| `local_discovery_location_policy` | `Record<string, any>` | Yes |  |
| `location_choices` | `Record<string, any>` | No |  |
| `registry_name` | `any` | Yes |  |
| `schema_version` | `any` | Yes |  |
| `trust_model_version` | `any` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.AgentCapability().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AgentCapabilityEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoppeeBusinessSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AgentConnectionTestEntity

```ts
const agent_connection_test = client.AgentConnectionTest()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key` | `string` | No | Optional UI fallback. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.AgentConnectionTest().create({
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AgentConnectionTestEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoppeeBusinessSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AgentIntegrationEntity

```ts
const agent_integration = client.AgentIntegration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_model` | `Record<string, any>` | Yes |  |
| `commercial_influence` | `Record<string, any>` | Yes |  |
| `developer_docs_url` | `string` | Yes |  |
| `exposure_tiers` | `Record<string, any>` | Yes |  |
| `external_agent_access` | `Record<string, any>` | Yes |  |
| `generated_at` | `string` | Yes |  |
| `http_api` | `Record<string, any>` | Yes |  |
| `legal` | `Record<string, any>` | Yes |  |
| `mcp` | `Record<string, any>` | Yes |  |
| `mcp_client_example_url` | `string` | Yes |  |
| `monitoring_url` | `string` | Yes |  |
| `openapi_url` | `string` | Yes |  |
| `openapi_v1_url` | `string` | Yes |  |
| `operational_rules` | `any[]` | Yes |  |
| `owner_agent_notifications` | `Record<string, any>` | Yes |  |
| `package_url` | `string` | Yes |  |
| `public_base_url` | `string` | Yes |  |
| `rate_limits` | `Record<string, any>` | Yes |  |
| `registry_name` | `any` | Yes |  |
| `schema_version` | `string` | Yes |  |
| `trust_card_contract` | `Record<string, any>` | Yes |  |
| `trust_doctrine` | `Record<string, any>` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.AgentIntegration().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AgentIntegrationEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoppeeBusinessSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AgentMonitoringEntity

```ts
const agent_monitoring = client.AgentMonitoring()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `build_sha` | `string` | Yes |  |
| `contract_version` | `string` | Yes |  |
| `generated_at` | `string` | Yes |  |
| `health_url` | `string` | Yes |  |
| `integration_package_url` | `string` | Yes |  |
| `mcp_url` | `string` | Yes |  |
| `metrics` | `Record<string, any>` | Yes |  |
| `openapi_url` | `string` | Yes |  |
| `rate_limits` | `Record<string, any>` | Yes |  |
| `registry_name` | `any` | Yes |  |
| `schema_version` | `string` | Yes |  |
| `service` | `string` | Yes |  |
| `uptime_seconds` | `number` | Yes |  |
| `version` | `string` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.AgentMonitoring().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AgentMonitoringEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoppeeBusinessSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AgentOpenapiEntity

```ts
const agent_openapi = client.AgentOpenapi()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `components` | `Record<string, any>` | Yes |  |
| `info` | `Record<string, any>` | Yes |  |
| `openapi` | `any` | Yes |  |
| `paths` | `Record<string, any>` | Yes |  |
| `servers` | `any[]` | Yes |  |
| `tags` | `any[]` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.AgentOpenapi().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AgentOpenapiEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoppeeBusinessSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AgentPolicyEntity

```ts
const agent_policy = client.AgentPolicy()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `external_agent_access` | `Record<string, any>` | Yes |  |
| `external_agent_webhooks` | `Record<string, any>` | Yes |  |
| `local_discovery_location_policy` | `Record<string, any>` | Yes |  |
| `location_handoff_flow` | `Record<string, any>` | No |  |
| `payment` | `Record<string, any>` | Yes |  |
| `publication` | `Record<string, any>` | Yes |  |
| `schema_version` | `any` | Yes |  |
| `trust_model_version` | `any` | Yes |  |
| `verification` | `Record<string, any>` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.AgentPolicy().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AgentPolicyEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoppeeBusinessSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AnonymousLocationProofRevocationEntity

```ts
const anonymous_location_proof_revocation = client.AnonymousLocationProofRevocation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accuracy_meters` | `number` | Yes |  |
| `captured_at` | `string` | Yes |  |
| `latitude` | `number` | Yes |  |
| `longitude` | `number` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.AnonymousLocationProofRevocation().create({
  accuracy_meters: 1,
  captured_at: 'example_captured_at',
  latitude: 1,
  longitude: 1,
})
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.AnonymousLocationProofRevocation().remove({ location_proof_id: 'location_proof_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AnonymousLocationProofRevocationEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoppeeBusinessSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BusinessApplicationEntity

```ts
const business_application = client.BusinessApplication()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `application` | `Record<string, any>` | Yes |  |
| `application_id` | `string` | Yes |  |
| `business_id` | `string` | Yes |  |
| `claim_id` | `string | null` | Yes |  |
| `created_at` | `string` | Yes |  |
| `existing_business` | `boolean` | Yes |  |
| `files` | `any[]` | No |  |
| `listing_id` | `string` | No |  |
| `pipeline_status` | `string` | Yes |  |
| `status` | `any` | Yes |  |
| `trust_model_version` | `any` | Yes |  |
| `uploaded_files` | `number` | Yes |  |

### Field Usage by Operation

| Field | create |
| --- | --- |
| `application` | - |
| `application_id` | - |
| `business_id` | Yes |
| `claim_id` | Yes |
| `created_at` | - |
| `existing_business` | - |
| `files` | - |
| `listing_id` | - |
| `pipeline_status` | - |
| `status` | - |
| `trust_model_version` | - |
| `uploaded_files` | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.BusinessApplication().create({
  application: {},
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BusinessApplicationEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoppeeBusinessSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BusinessClaimEntity

```ts
const business_claim = client.BusinessClaim()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `business_id` | `string | null` | Yes |  |
| `category` | `string` | No |  |
| `city` | `string` | No |  |
| `claim_id` | `string` | Yes |  |
| `claim_status` | `string` | Yes |  |
| `claimant_email` | `string` | No | Legacy field; authenticated owner identity wins. |
| `claimant_name` | `string` | No | Legacy field; authenticated owner identity wins. |
| `claimant_relationship` | `string` | No |  |
| `created_at` | `string` | Yes |  |
| `directory_listing_id` | `string | null` | Yes |  |
| `display_name` | `string` | Yes |  |
| `listing_id` | `string` | No |  |
| `notes` | `string` | No |  |
| `phone` | `string` | No |  |
| `source` | `string` | No |  |
| `source_type` | `string` | No |  |
| `source_url` | `string` | No |  |
| `state` | `string` | No |  |
| `status` | `any` | Yes |  |
| `verification` | `Record<string, any>` | No |  |
| `website` | `string` | No |  |

### Field Usage by Operation

| Field | create |
| --- | --- |
| `business_id` | Yes |
| `category` | - |
| `city` | - |
| `claim_id` | - |
| `claim_status` | - |
| `claimant_email` | - |
| `claimant_name` | - |
| `claimant_relationship` | - |
| `created_at` | - |
| `directory_listing_id` | - |
| `display_name` | - |
| `listing_id` | - |
| `notes` | - |
| `phone` | - |
| `source` | - |
| `source_type` | - |
| `source_url` | - |
| `state` | - |
| `status` | - |
| `verification` | - |
| `website` | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.BusinessClaim().create({
  display_name: 'example_display_name',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BusinessClaimEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoppeeBusinessSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BusinessDealEntity

```ts
const business_deal = client.BusinessDeal()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `discountLabel` | `string` | Yes |  |
| `endsAt` | `string | null` | Yes |  |
| `id` | `string` | Yes |  |
| `promoCode` | `string | null` | Yes |  |
| `startsAt` | `string | null` | Yes |  |
| `terms` | `string | null` | Yes |  |
| `title` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.BusinessDeal().list({ id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BusinessDealEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoppeeBusinessSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BusinessIndexEntity

```ts
const business_index = client.BusinessIndex()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `brand_assets` | `any` | No |  |
| `business_id` | `string` | Yes |  |
| `category` | `string` | Yes |  |
| `city` | `string` | Yes |  |
| `display_name` | `string` | Yes |  |
| `domain` | `string | null` | Yes |  |
| `insurance` | `Record<string, any>` | Yes |  |
| `phone` | `string | null` | Yes |  |
| `public_profile_url` | `string` | Yes |  |
| `review_reputation` | `Record<string, any>` | Yes |  |
| `state` | `string` | Yes |  |
| `street_address` | `string | null` | No | Owner-published street address where authorized. |
| `trust_card_url` | `string` | Yes |  |
| `trust_model_version` | `any` | Yes |  |
| `verification_class` | `string` | Yes |  |
| `verification_disclosure` | `string` | Yes |  |
| `website` | `string | null` | Yes |  |
| `zip` | `string | null` | No | Owner-published postal code where authorized. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.BusinessIndex().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BusinessIndexEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoppeeBusinessSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BusinessOwnerEntity

```ts
const business_owner = client.BusinessOwner()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | Yes |  |
| `account_role` | `string` | Yes |  |
| `acknowledge_data_effects` | `boolean` | Yes |  |
| `actions` | `any[]` | Yes |  |
| `allowed_actions` | `any[]` | Yes |  |
| `amount_cents` | `number` | Yes | Within the top-up limits (default $25 to $5,000). |
| `applicant_location_requirements` | `string` | No |  |
| `apply_url` | `string | null` | No |  |
| `asset_id` | `string` | Yes |  |
| `assigneeId` | `string` | Yes |  |
| `assigneeLabel` | `string` | Yes |  |
| `assigneeType` | `string` | Yes |  |
| `attempt_id` | `string` | Yes |  |
| `benefits` | `string` | No |  |
| `body` | `string` | Yes |  |
| `businessId` | `string` | Yes |  |
| `businessName` | `string` | Yes |  |
| `business_id` | `string` | Yes |  |
| `campaign` | `Record<string, any>` | Yes |  |
| `campaign_id` | `string` | Yes |  |
| `carrier_name` | `string` | No |  |
| `category` | `string` | No |  |
| `category_alias` | `string` | No |  |
| `category_aliases` | `any[]` | Yes |  |
| `change` | `Record<string, any>` | Yes |  |
| `city` | `string` | No |  |
| `client_message_id` | `string` | Yes |  |
| `code` | `string` | Yes |  |
| `compensation_text` | `string` | No |  |
| `confirm` | `boolean` | No |  |
| `confirmation` | `string` | Yes |  |
| `connection_kind` | `string` | Yes |  |
| `consent_sha256` | `string` | Yes | SHA-256 of the acceptance text shown (from payment-authorizations). |
| `contact_email` | `string | null` | No |  |
| `content_type` | `string` | Yes |  |
| `country` | `string` | No |  |
| `coupon_code` | `string` | No |  |
| `createdAt` | `string | null` | Yes |  |
| `created_at` | `string` | Yes |  |
| `credential_id` | `string` | Yes |  |
| `credential_identifier` | `string` | Yes |  |
| `data_base64` | `string` | Yes |  |
| `delivery_contract` | `Record<string, any>` | Yes |  |
| `description` | `string | null` | No |  |
| `direct_apply` | `boolean` | No |  |
| `disabled_reason` | `string | null` | Yes |  |
| `discount_label` | `string` | No |  |
| `display_name` | `string` | Yes |  |
| `employment_type` | `string` | No |  |
| `enabled` | `boolean` | Yes |  |
| `endpoint` | `Record<string, any>` | Yes |  |
| `endpoint_id` | `string` | Yes |  |
| `endpoint_url` | `string` | Yes |  |
| `ends_at` | `string | null` | No |  |
| `event_id` | `string` | Yes |  |
| `event_types` | `any[]` | Yes |  |
| `evidence_observed_at` | `string` | No |  |
| `expected_updated_at` | `string` | Yes |  |
| `experience_level` | `string` | No |  |
| `expires_at` | `string` | No |  |
| `factor_id` | `string` | No |  |
| `failure_count` | `number` | Yes |  |
| `file_name` | `string` | Yes |  |
| `file_sha256` | `string` | No |  |
| `full_name` | `string` | No |  |
| `guideHandoffAnsweredAt` | `string | null` | No |  |
| `guideHandoffAt` | `string | null` | No |  |
| `guideHandoffDueAt` | `string | null` | No |  |
| `hours` | `Record<string, any> | null` | No |  |
| `id` | `string` | Yes |  |
| `idempotency_key` | `string` | No |  |
| `installation_id` | `string` | Yes |  |
| `issuer` | `string` | Yes |  |
| `jurisdiction` | `string` | No |  |
| `kind` | `string` | Yes |  |
| `label` | `string` | No |  |
| `lastMessageAt` | `string | null` | Yes |  |
| `lastMessageAuthorType` | `string` | Yes |  |
| `lastMessagePreview` | `string` | Yes |  |
| `last_delivery_at` | `string | null` | Yes |  |
| `launch` | `boolean` | No |  |
| `license_number` | `string` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `messagesTruncated` | `boolean` | Yes |  |
| `monthly_cap_cents` | `number` | No |  |
| `name` | `string` | Yes |  |
| `note` | `string` | No |  |
| `one_time_display` | `any` | Yes |  |
| `ownerEmail` | `string` | Yes |  |
| `ownerLastReadAt` | `string | null` | Yes |  |
| `ownerName` | `string` | Yes |  |
| `ownerUserId` | `string` | Yes |  |
| `period` | `string` | No |  |
| `phone` | `string` | No |  |
| `platform` | `string` | Yes |  |
| `policy_number` | `string` | No |  |
| `postal_code` | `string` | No |  |
| `promo_code` | `string | null` | No |  |
| `push_token` | `string` | Yes |  |
| `radius_miles` | `number` | Yes |  |
| `reason` | `string` | No |  |
| `reason_category` | `string` | No |  |
| `reason_detail` | `string` | No |  |
| `registered_at` | `string` | Yes |  |
| `request_id` | `string` | Yes | Client id of this confirmation (8-100 characters); reuse it only to retry the same confirmation. |
| `requested_at` | `string` | Yes |  |
| `salary_currency` | `string` | No |  |
| `salary_max` | `number | null` | No |  |
| `salary_min` | `number | null` | No |  |
| `salary_period` | `string` | No |  |
| `save_card` | `boolean` | Yes |  |
| `save_card_consent_sha256` | `string` | No | Only with save_card true: SHA-256 of the save-card consent text shown. |
| `schedule` | `string` | No |  |
| `service_areas` | `string` | No |  |
| `signing_secret` | `string` | Yes |  |
| `size_bytes` | `number` | Yes |  |
| `skills` | `any[]` | No |  |
| `source_url` | `string` | No |  |
| `starts_at` | `string | null` | No |  |
| `state` | `string` | No |  |
| `stated_expires_at` | `string` | No |  |
| `status` | `string` | Yes |  |
| `street_address` | `string` | No |  |
| `subject` | `string` | Yes |  |
| `submitted_identifier` | `string` | No |  |
| `supportLastReadAt` | `string | null` | Yes |  |
| `terms` | `string | null` | No |  |
| `terms_version` | `string` | Yes | Must be the current Advertiser Terms version. |
| `threshold_cents` | `number` | No |  |
| `ticketNumber` | `string` | Yes |  |
| `tier` | `string` | Yes |  |
| `title` | `string` | No |  |
| `total_job_openings` | `number | null` | No |  |
| `typing` | `boolean` | No |  |
| `updatedAt` | `string | null` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes | Public HTTPS receiver operated by the connecting principal or its agent runtime. |
| `website` | `string` | Yes |  |
| `workplace_type` | `string` | No |  |
| `zip` | `string` | No |  |

### Field Usage by Operation

| Field | create | update |
| --- | --- | --- |
| `account_id` | - | - |
| `account_role` | - | - |
| `acknowledge_data_effects` | - | - |
| `actions` | - | - |
| `allowed_actions` | - | - |
| `amount_cents` | - | Yes |
| `applicant_location_requirements` | - | - |
| `apply_url` | - | - |
| `asset_id` | - | - |
| `assigneeId` | - | - |
| `assigneeLabel` | - | - |
| `assigneeType` | - | - |
| `attempt_id` | - | - |
| `benefits` | - | - |
| `body` | - | - |
| `businessId` | - | - |
| `businessName` | - | - |
| `business_id` | Yes | Yes |
| `campaign` | - | - |
| `campaign_id` | - | - |
| `carrier_name` | - | - |
| `category` | - | - |
| `category_alias` | - | - |
| `category_aliases` | - | - |
| `change` | - | - |
| `city` | Yes | - |
| `client_message_id` | - | - |
| `code` | - | - |
| `compensation_text` | - | - |
| `confirm` | - | - |
| `confirmation` | - | - |
| `connection_kind` | - | - |
| `consent_sha256` | - | - |
| `contact_email` | - | - |
| `content_type` | - | - |
| `country` | - | - |
| `coupon_code` | - | - |
| `createdAt` | - | - |
| `created_at` | - | - |
| `credential_id` | - | - |
| `credential_identifier` | - | - |
| `data_base64` | - | - |
| `delivery_contract` | - | - |
| `description` | - | - |
| `direct_apply` | - | - |
| `disabled_reason` | - | - |
| `discount_label` | Yes | - |
| `display_name` | - | - |
| `employment_type` | - | - |
| `enabled` | - | - |
| `endpoint` | - | - |
| `endpoint_id` | - | - |
| `endpoint_url` | - | - |
| `ends_at` | - | - |
| `event_id` | - | - |
| `event_types` | - | - |
| `evidence_observed_at` | - | - |
| `expected_updated_at` | - | - |
| `experience_level` | - | - |
| `expires_at` | - | - |
| `factor_id` | Yes | - |
| `failure_count` | - | - |
| `file_name` | - | - |
| `file_sha256` | Yes | - |
| `full_name` | - | - |
| `guideHandoffAnsweredAt` | - | - |
| `guideHandoffAt` | - | - |
| `guideHandoffDueAt` | - | - |
| `hours` | - | - |
| `id` | - | - |
| `idempotency_key` | - | - |
| `installation_id` | - | - |
| `issuer` | - | - |
| `jurisdiction` | - | - |
| `kind` | - | - |
| `label` | - | - |
| `lastMessageAt` | - | - |
| `lastMessageAuthorType` | - | - |
| `lastMessagePreview` | - | - |
| `last_delivery_at` | - | - |
| `launch` | - | - |
| `license_number` | - | - |
| `messages` | - | - |
| `messagesTruncated` | - | - |
| `monthly_cap_cents` | - | - |
| `name` | - | - |
| `note` | - | - |
| `one_time_display` | - | - |
| `ownerEmail` | - | - |
| `ownerLastReadAt` | - | - |
| `ownerName` | - | - |
| `ownerUserId` | - | - |
| `period` | - | - |
| `phone` | Yes | - |
| `platform` | - | - |
| `policy_number` | - | - |
| `postal_code` | - | - |
| `promo_code` | - | - |
| `push_token` | - | - |
| `radius_miles` | - | - |
| `reason` | Yes | - |
| `reason_category` | - | - |
| `reason_detail` | - | - |
| `registered_at` | - | - |
| `request_id` | - | - |
| `requested_at` | - | - |
| `salary_currency` | - | - |
| `salary_max` | - | - |
| `salary_min` | - | - |
| `salary_period` | - | - |
| `save_card` | - | - |
| `save_card_consent_sha256` | - | - |
| `schedule` | - | - |
| `service_areas` | - | - |
| `signing_secret` | - | - |
| `size_bytes` | - | - |
| `skills` | - | - |
| `source_url` | - | - |
| `starts_at` | - | - |
| `state` | Yes | - |
| `stated_expires_at` | - | - |
| `status` | Yes | - |
| `street_address` | Yes | - |
| `subject` | Yes | - |
| `submitted_identifier` | - | - |
| `supportLastReadAt` | - | - |
| `terms` | - | - |
| `terms_version` | - | - |
| `threshold_cents` | - | - |
| `ticketNumber` | - | - |
| `tier` | - | - |
| `title` | Yes | - |
| `total_job_openings` | - | - |
| `typing` | - | - |
| `updatedAt` | - | - |
| `updated_at` | - | - |
| `url` | - | - |
| `website` | - | - |
| `workplace_type` | - | - |
| `zip` | - | - |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `checkout` | `/v1/owner/jobs/{job_id}/checkout` | `client.BusinessOwner().create({ $action: 'checkout', ... })` |
| `delete` | `/v1/owner/deals/{deal_id}/delete` | `client.BusinessOwner().create({ $action: 'delete', ... })` |
| `delete` | `/v1/owner/jobs/{job_id}/delete` | `client.BusinessOwner().create({ $action: 'delete', ... })` |
| `delete` | `/v1/owner/locations/{location_id}/delete` | `client.BusinessOwner().create({ $action: 'delete', ... })` |

An action returns that action's OWN response, which is not necessarily a
BusinessOwner record — check the API definition for its shape.

```ts
const result = await client.BusinessOwner().create({
  $action: 'checkout',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.BusinessOwner().create({
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

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.BusinessOwner().update({
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BusinessOwnerEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoppeeBusinessSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BusinessReviewEntity

```ts
const business_review = client.BusinessReview()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.BusinessReview().load({ id: 'business_review_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BusinessReviewEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoppeeBusinessSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ChatAttachmentEntity

```ts
const chat_attachment = client.ChatAttachment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `byteSize` | `number` | Yes |  |
| `content_type` | `any` | Yes |  |
| `data_base64` | `string` | Yes |  |
| `fileName` | `string` | Yes |  |
| `file_name` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `mediaType` | `string` | Yes |  |
| `size_bytes` | `number` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.ChatAttachment().create({
  conversation_id: 'example_conversation_id',
  content_type: 'example_content_type',
  data_base64: 'example_data_base64',
  file_name: 'example_file_name',
  size_bytes: 1,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ChatAttachmentEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoppeeBusinessSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ChatAttachmentUrlEntity

```ts
const chat_attachment_url = client.ChatAttachmentUrl()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `byte_size` | `number` | Yes |  |
| `expires_in_seconds` | `any` | Yes |  |
| `file_name` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `media_type` | `string` | Yes |  |
| `signed_url` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.ChatAttachmentUrl().create({
  attachment_id: 'example_attachment_id',
  conversation_id: 'example_conversation_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ChatAttachmentUrlEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoppeeBusinessSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ClaimVerificationSendEntity

```ts
const claim_verification_send = client.ClaimVerificationSend()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `challenge_id` | `string` | No | Opaque v3 SMS or owner-email challenge UUID. |
| `channel` | `any` | Yes |  |
| `claim_id` | `string` | Yes |  |
| `destination_hint` | `string` | No |  |
| `expires_in_seconds` | `number` | No |  |
| `provider_status` | `any` | No | V3 provider request state. |
| `recipient_delivery_confirmed` | `any` | No | V3 currently has no final-delivery provider event for this receipt. |
| `request_id` | `string` | No | Caller-generated idempotency UUID. |
| `status` | `any` | Yes |  |

### Field Usage by Operation

| Field | create |
| --- | --- |
| `challenge_id` | - |
| `channel` | Yes |
| `claim_id` | - |
| `destination_hint` | - |
| `expires_in_seconds` | - |
| `provider_status` | - |
| `recipient_delivery_confirmed` | - |
| `request_id` | - |
| `status` | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.ClaimVerificationSend().create({
  claim_id: 'example_claim_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ClaimVerificationSendEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoppeeBusinessSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ClaimVerificationVerifyEntity

```ts
const claim_verification_verify = client.ClaimVerificationVerify()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `business_id` | `string | null` | Yes |  |
| `challenge_id` | `string` | No | Exact challenge UUID returned by the v3 SMS or owner-email send. |
| `channel` | `any` | No |  |
| `claim_id` | `string` | Yes |  |
| `code` | `string` | Yes |  |
| `method` | `any` | No |  |
| `publication` | `Record<string, any>` | No |  |
| `status` | `any` | Yes |  |
| `transfer_review_required` | `any` | No |  |
| `trust_model_version` | `any` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.ClaimVerificationVerify().create({
  claim_id: 'example_claim_id',
  code: 'example_code',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ClaimVerificationVerifyEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoppeeBusinessSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CommercialClickEntity

```ts
const commercial_click = client.CommercialClick()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action_type` | `any` | Yes |  |
| `ad_receipt` | `string` | No | Opaque server-signed receipt of a served Sponsored ad, sent back unchanged with a profile, website or call tap. |
| `billable` | `boolean` | Yes |  |
| `billing_event_id` | `string | null` | No |  |
| `billing_status` | `string` | Yes |  |
| `business_id` | `string` | No |  |
| `category` | `string` | No |  |
| `city` | `string` | No |  |
| `click_id` | `string` | Yes |  |
| `commercial_status` | `any` | No |  |
| `created_at` | `string` | Yes |  |
| `directory_listing_id` | `string` | No | Deprecated alias of listing_id. |
| `display_name` | `string` | No |  |
| `fallback_interaction_id` | `string` | No |  |
| `ledger_status` | `string` | Yes |  |
| `listing_id` | `string` | No |  |
| `metadata` | `Record<string, any>` | No |  |
| `migration_required` | `boolean` | No |  |
| `page_path` | `string` | No |  |
| `referrer` | `string` | No |  |
| `source_type` | `any` | Yes |  |
| `state` | `string` | No |  |
| `status` | `any` | Yes |  |
| `storage` | `any` | Yes |  |
| `surface` | `any` | No | Where the Sponsored ad was shown (with ad_receipt). |
| `target_url` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.CommercialClick().create({
  action_type: 'example_action_type',
  source_type: 'example_source_type',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CommercialClickEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoppeeBusinessSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ContactRecordedEntity

```ts
const contact_recorded = client.ContactRecorded()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `business_id` | `string` | Yes |  |
| `contact_recorded` | `any` | Yes |  |
| `interaction_id` | `string` | Yes |  |
| `ok` | `any` | Yes |  |
| `policy` | `string` | Yes |  |
| `review_upgraded` | `any` | Yes |  |
| `status` | `any` | Yes |  |
| `trust_weight` | `any` | Yes |  |
| `verified` | `boolean` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.ContactRecorded().create({
  business_id: 'example_business_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ContactRecordedEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoppeeBusinessSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ConversationEntity

```ts
const conversation = client.Conversation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | Yes |  |
| `conversation_id` | `string` | No | Exact conversation referenced by a webhook; returns zero or one scoped thread. |
| `conversations` | `any[]` | Yes |  |
| `count` | `number` | Yes |  |
| `cursor` | `string` | No | Opaque pagination cursor returned by the previous page. |
| `limit` | `number` | No |  |
| `pagination` | `Record<string, any>` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Conversation().create({
  account_id: 'example_account_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ConversationEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoppeeBusinessSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ConversationCloseEntity

```ts
const conversation_close = client.ConversationClose()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `closed_at` | `string` | Yes |  |
| `conversation_id` | `string` | Yes |  |
| `id` | `string` | No |  |
| `status` | `any` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.ConversationClose().create({
  id: 'example_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ConversationCloseEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoppeeBusinessSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ConversationReportEntity

```ts
const conversation_report = client.ConversationReport()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `detail` | `string` | No |  |
| `id` | `string` | No |  |
| `reason` | `any` | Yes |  |
| `status` | `any` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.ConversationReport().create({
  id: 'example_id',
  reason: 'example_reason',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ConversationReportEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoppeeBusinessSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ConversationWorkflowEntity

```ts
const conversation_workflow = client.ConversationWorkflow()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `priority` | `any` | No |  |
| `status` | `any` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.ConversationWorkflow().create({
  message_id: 'example_message_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ConversationWorkflowEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoppeeBusinessSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CreateAgentApiKeyEntity

```ts
const create_agent_api_key = client.CreateAgentApiKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | Yes |  |
| `allowed_actions` | `any[]` | No |  |
| `allowed_business_ids` | `any[]` | No |  |
| `created_by` | `string` | Yes |  |
| `key` | `Record<string, any>` | Yes |  |
| `label` | `string` | No |  |
| `monthly_quota` | `number` | No |  |
| `notes` | `string` | No |  |
| `one_time_display` | `any` | Yes |  |
| `rate_limit_per_minute` | `number` | No |  |
| `raw_key` | `string` | Yes |  |
| `status` | `any` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.CreateAgentApiKey().create({
  account_id: 'example_account_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CreateAgentApiKeyEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoppeeBusinessSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CustomerEntity

```ts
const customer = client.Customer()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_provider` | `string` | No |  |
| `avatar_url` | `string | null` | Yes | Short-lived signed display URL for a private avatar object, or null. |
| `city` | `string | null` | Yes |  |
| `created_at` | `string | null` | Yes |  |
| `email` | `string` | Yes |  |
| `full_name` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `phone` | `string | null` | Yes |  |
| `search_category` | `string` | No |  |
| `service_need` | `string` | No |  |
| `state` | `string | null` | Yes |  |
| `status` | `any` | Yes |  |
| `updated_at` | `string | null` | Yes |  |

### Field Usage by Operation

| Field | create |
| --- | --- |
| `auth_provider` | - |
| `avatar_url` | Yes |
| `city` | Yes |
| `created_at` | - |
| `email` | - |
| `full_name` | Yes |
| `id` | - |
| `phone` | Yes |
| `search_category` | - |
| `service_need` | - |
| `state` | Yes |
| `status` | - |
| `updated_at` | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Customer().create({
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CustomerEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoppeeBusinessSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CustomerAccountEntity

```ts
const customer_account = client.CustomerAccount()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | Yes |  |
| `account_role` | `string` | Yes |  |
| `accuracy_meters` | `number` | Yes |  |
| `acknowledge_data_effects` | `boolean` | Yes |  |
| `actions` | `any[]` | Yes |  |
| `agent_key_id` | `string` | Yes |  |
| `agent_receives_coordinates` | `boolean` | Yes |  |
| `all_paused` | `boolean` | Yes |  |
| `app_attest_registered` | `boolean` | Yes |  |
| `assertion` | `string` | Yes |  |
| `attestation` | `string` | Yes |  |
| `author_label` | `string` | Yes |  |
| `author_type` | `string` | Yes |  |
| `binding` | `any` | Yes |  |
| `body` | `string` | Yes |  |
| `business_id` | `string | null` | Yes |  |
| `capture_source` | `any` | Yes |  |
| `captured_at` | `string` | Yes |  |
| `challenge` | `string` | Yes |  |
| `challenge_id` | `string` | Yes |  |
| `client_message_id` | `string` | Yes |  |
| `completed` | `boolean` | Yes |  |
| `confirmation` | `string` | Yes |  |
| `connection_id` | `string` | Yes |  |
| `connection_kind` | `string` | Yes |  |
| `continuation` | `any` | Yes | The continuation from the previous response, sent back unchanged to get the next results. |
| `coordinates_returned` | `boolean` | Yes |  |
| `created_at` | `string` | Yes |  |
| `credential_id` | `string` | Yes |  |
| `declined` | `boolean` | Yes |  |
| `delivery_contract` | `Record<string, any>` | Yes |  |
| `disabled_reason` | `string | null` | Yes |  |
| `disclosure` | `string` | Yes |  |
| `enabled` | `boolean` | Yes |  |
| `endpoint` | `Record<string, any>` | Yes |  |
| `endpoint_id` | `string` | Yes |  |
| `endpoint_url` | `string` | Yes |  |
| `environment` | `string` | Yes |  |
| `event_id` | `string` | Yes |  |
| `event_types` | `any[]` | Yes |  |
| `failure_count` | `number` | Yes |  |
| `handoff_id` | `string` | Yes |  |
| `has_more` | `boolean` | Yes |  |
| `id` | `string` | Yes |  |
| `idempotent_replay` | `boolean` | Yes |  |
| `installation_id` | `string` | Yes |  |
| `key_id` | `string` | Yes |  |
| `last_delivery_at` | `string | null` | Yes |  |
| `latitude` | `number` | Yes |  |
| `location` | `any` | No | An opaque location reference from the website's own location controls. |
| `longitude` | `number` | Yes |  |
| `message_alerts_enabled` | `boolean` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `mode` | `string` | Yes | fallback: a direct search answered because the language model was unavailable. |
| `name` | `string` | No |  |
| `oauth_grant_id` | `string | null` | Yes |  |
| `one_time_display` | `any` | Yes |  |
| `platform` | `string` | Yes |  |
| `policy` | `string` | Yes |  |
| `purpose` | `string` | Yes |  |
| `push_token` | `string` | Yes |  |
| `reason` | `string` | Yes |  |
| `registered_at` | `string` | Yes |  |
| `reply` | `string` | Yes |  |
| `request_mode` | `string` | Yes |  |
| `requested_at` | `string` | Yes |  |
| `results` | `any[]` | Yes |  |
| `schema_version` | `string` | Yes |  |
| `selected_at` | `string` | Yes |  |
| `signed_in` | `boolean` | Yes |  |
| `signing_secret` | `string` | Yes |  |
| `status` | `any` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes | Public HTTPS receiver operated by the connecting principal or its agent runtime. |
| `usable_until` | `string` | Yes |  |
| `use_mode` | `string` | Yes |  |

### Field Usage by Operation

| Field | create |
| --- | --- |
| `account_id` | - |
| `account_role` | - |
| `accuracy_meters` | - |
| `acknowledge_data_effects` | - |
| `actions` | - |
| `agent_key_id` | - |
| `agent_receives_coordinates` | - |
| `all_paused` | - |
| `app_attest_registered` | - |
| `assertion` | - |
| `attestation` | - |
| `author_label` | - |
| `author_type` | - |
| `binding` | - |
| `body` | - |
| `business_id` | - |
| `capture_source` | - |
| `captured_at` | - |
| `challenge` | - |
| `challenge_id` | - |
| `client_message_id` | - |
| `completed` | - |
| `confirmation` | - |
| `connection_id` | - |
| `connection_kind` | - |
| `continuation` | Yes |
| `coordinates_returned` | - |
| `created_at` | - |
| `credential_id` | - |
| `declined` | - |
| `delivery_contract` | - |
| `disabled_reason` | - |
| `disclosure` | - |
| `enabled` | - |
| `endpoint` | - |
| `endpoint_id` | - |
| `endpoint_url` | - |
| `environment` | - |
| `event_id` | - |
| `event_types` | - |
| `failure_count` | - |
| `handoff_id` | - |
| `has_more` | - |
| `id` | - |
| `idempotent_replay` | - |
| `installation_id` | - |
| `key_id` | - |
| `last_delivery_at` | - |
| `latitude` | - |
| `location` | - |
| `longitude` | - |
| `message_alerts_enabled` | - |
| `messages` | - |
| `mode` | - |
| `name` | - |
| `oauth_grant_id` | - |
| `one_time_display` | - |
| `platform` | - |
| `policy` | - |
| `purpose` | - |
| `push_token` | - |
| `reason` | Yes |
| `registered_at` | - |
| `reply` | - |
| `request_mode` | - |
| `requested_at` | - |
| `results` | - |
| `schema_version` | - |
| `selected_at` | - |
| `signed_in` | - |
| `signing_secret` | - |
| `status` | - |
| `updated_at` | - |
| `url` | - |
| `usable_until` | - |
| `use_mode` | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.CustomerAccount().create({
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

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CustomerAccountEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoppeeBusinessSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CustomerLocationProofRevocationEntity

```ts
const customer_location_proof_revocation = client.CustomerLocationProofRevocation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accuracy_meters` | `number` | Yes |  |
| `captured_at` | `string` | Yes |  |
| `latitude` | `number` | Yes |  |
| `longitude` | `number` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.CustomerLocationProofRevocation().create({
  accuracy_meters: 1,
  captured_at: 'example_captured_at',
  latitude: 1,
  longitude: 1,
})
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.CustomerLocationProofRevocation().remove({ location_proof_id: 'location_proof_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CustomerLocationProofRevocationEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoppeeBusinessSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DestinationAddressSuggestionEntity

```ts
const destination_address_suggestion = client.DestinationAddressSuggestion()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `input` | `string` | Yes | Normalized partial US service-address text. |
| `suggestions` | `any[]` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.DestinationAddressSuggestion().create({
  input: 'example_input',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DestinationAddressSuggestionEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoppeeBusinessSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DestinationLocationProofEntity

```ts
const destination_location_proof = client.DestinationLocationProof()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `string` | Yes | A real US service address. |
| `premise_proximity_confirmation_token` | `string` | No | Opaque one-time token from the immediately preceding premise-proximity challenge for the same address and authority. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.DestinationLocationProof().create({
  address: 'example_address',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DestinationLocationProofEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoppeeBusinessSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DomainTrustCardEntity

```ts
const domain_trust_card = client.DomainTrustCard()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `business_id` | `string` | Yes |  |
| `domain` | `string` | Yes |  |
| `schema_version` | `any` | Yes |  |
| `trust_card` | `Record<string, any>` | Yes |  |
| `trust_card_url` | `string` | Yes |  |
| `trust_model_version` | `any` | Yes |  |
| `verification_class` | `any` | Yes |  |
| `verification_disclosure` | `string` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.DomainTrustCard().load({ domain_key: 'domain_key' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DomainTrustCardEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoppeeBusinessSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GeoContextEntity

```ts
const geo_context = client.GeoContext()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.GeoContext().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GeoContextEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoppeeBusinessSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## HealthEntity

```ts
const health = client.Health()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_phone_location_bridge` | `Record<string, any>` | Yes |  |
| `build_sha` | `string` | Yes |  |
| `business_review_access` | `Record<string, any>` | Yes |  |
| `contract_version` | `string` | Yes |  |
| `external_agent_webhooks` | `Record<string, any>` | Yes |  |
| `external_agent_webhooks_enabled` | `boolean` | Yes |  |
| `ios_app_attest_anonymous_location` | `Record<string, any>` | Yes |  |
| `location_choices` | `Record<string, any>` | Yes |  |
| `location_handoff` | `Record<string, any>` | Yes |  |
| `mobile_push` | `any` | Yes |  |
| `ok` | `any` | Yes |  |
| `service` | `string` | Yes |  |
| `sponsored_ordering` | `Record<string, any>` | Yes |  |
| `trust_model_version` | `any` | Yes |  |
| `version` | `string` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Health().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `HealthEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoppeeBusinessSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## JobApplicationEntity

```ts
const job_application = client.JobApplication()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | Yes |  |
| `already_withdrawn` | `boolean` | No |  |
| `application` | `Record<string, any>` | Yes |  |
| `applications` | `any[]` | Yes |  |
| `billing` | `Record<string, any>` | Yes |  |
| `business_id` | `string` | No |  |
| `count` | `number` | Yes |  |
| `cover_note` | `string` | No |  |
| `free_to_apply` | `boolean` | No |  |
| `id` | `string` | No |  |
| `job_id` | `string` | Yes |  |
| `limit` | `number` | Yes |  |
| `offset` | `number` | Yes |  |
| `resume` | `Record<string, any>` | Yes |  |
| `retention_note` | `string` | No |  |
| `status` | `string` | Yes |  |

### Field Usage by Operation

| Field | create |
| --- | --- |
| `account_id` | Yes |
| `already_withdrawn` | - |
| `application` | - |
| `applications` | - |
| `billing` | - |
| `business_id` | - |
| `count` | - |
| `cover_note` | - |
| `free_to_apply` | - |
| `id` | - |
| `job_id` | - |
| `limit` | Yes |
| `offset` | Yes |
| `resume` | - |
| `retention_note` | - |
| `status` | Yes |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `apply` | `/v1/jobs/{job_id}/apply` | `client.JobApplication().create({ $action: 'apply', ... })` |
| `status` | `/v1/owner/job-applications/{application_id}/status` | `client.JobApplication().create({ $action: 'status', ... })` |
| `withdraw` | `/v1/account/job-applications/{application_id}/withdraw` | `client.JobApplication().create({ $action: 'withdraw', ... })` |

An action returns that action's OWN response, which is not necessarily a
JobApplication record — check the API definition for its shape.

```ts
const result = await client.JobApplication().create({
  $action: 'apply',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.JobApplication().create({
  job_id: 'example_job_id',
  resume: {},
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `JobApplicationEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoppeeBusinessSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## JobResumeSignedUrlEntity

```ts
const job_resume_signed_url = client.JobResumeSignedUrl()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `application_id` | `string` | Yes |  |
| `content_type` | `string` | Yes |  |
| `expires_in_seconds` | `number` | Yes |  |
| `resume_file_name` | `string` | Yes |  |
| `signed_url` | `string` | Yes |  |
| `size_bytes` | `number` | Yes |  |
| `status` | `any` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.JobResumeSignedUrl().create({
  job_application_id: 'example_job_application_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `JobResumeSignedUrlEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoppeeBusinessSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LocationHandoffEntity

```ts
const location_handoff = client.LocationHandoff()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.LocationHandoff().create({
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LocationHandoffEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoppeeBusinessSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MessageEntity

```ts
const message = client.Message()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | Yes |  |
| `client_message_id` | `string` | Yes | Caller-stable retry key. |
| `conversation_id` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `delivery` | `any` | No |  |
| `idempotent_replay` | `boolean` | Yes |  |
| `interaction_id` | `string` | Yes |  |
| `message` | `string` | Yes |  |
| `moderation_required` | `any` | No |  |
| `source_path` | `string` | No |  |
| `status` | `any` | Yes |  |
| `subject` | `string` | No |  |
| `target_business_id` | `string` | Yes |  |
| `target_business_name` | `string` | No |  |
| `target_business_source` | `string` | No |  |

### Field Usage by Operation

| Field | create |
| --- | --- |
| `account_id` | - |
| `client_message_id` | - |
| `conversation_id` | - |
| `created_at` | - |
| `delivery` | - |
| `idempotent_replay` | - |
| `interaction_id` | - |
| `message` | - |
| `moderation_required` | - |
| `source_path` | - |
| `status` | - |
| `subject` | Yes |
| `target_business_id` | - |
| `target_business_name` | Yes |
| `target_business_source` | Yes |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Message().create({
  account_id: 'example_account_id',
  client_message_id: 'example_client_message_id',
  message: 'example_message',
  subject: 'example_subject',
  target_business_id: 'example_target_business_id',
  target_business_name: 'example_target_business_name',
  target_business_source: 'example_target_business_source',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MessageEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoppeeBusinessSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ModeratedActionEntity

```ts
const moderated_action = client.ModeratedAction()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actions` | `any[]` | Yes |  |
| `body` | `string` | Yes |  |
| `client_request_id` | `string` | No |  |
| `content_type` | `string` | Yes |  |
| `continuation` | `any` | Yes | The continuation from the previous response, sent back unchanged to get the next results. |
| `coordinates_returned` | `boolean` | Yes |  |
| `disclosure` | `string` | Yes |  |
| `enabled` | `boolean` | Yes |  |
| `file_sha256` | `string` | Yes |  |
| `has_more` | `boolean` | Yes |  |
| `human_confirmation` | `boolean` | No |  |
| `intent_id` | `string` | Yes |  |
| `kind` | `string` | No |  |
| `knowledgeVersion` | `string` | Yes |  |
| `limits` | `Record<string, any>` | Yes |  |
| `links` | `any[]` | Yes |  |
| `location` | `Record<string, any>` | Yes | An opaque location reference from the website's own location controls. |
| `message` | `string` | No |  |
| `messages` | `any[]` | Yes |  |
| `mode` | `string` | Yes | fallback: a direct search answered because the language model was unavailable. |
| `name` | `string` | Yes |  |
| `needsHuman` | `boolean` | Yes |  |
| `policy` | `Record<string, any>` | Yes | Human schedule and separate claim-review policy. |
| `question` | `string` | Yes |  |
| `reply` | `string` | Yes |  |
| `result` | `string` | Yes |  |
| `results` | `any[]` | Yes |  |
| `scan_authority_id` | `string` | Yes |  |
| `scanner` | `string` | Yes |  |
| `scanner_version` | `string` | Yes |  |
| `schema_version` | `string` | Yes |  |
| `searcher_latitude` | `number` | No |  |
| `searcher_longitude` | `number` | No |  |
| `signature` | `string` | No |  |
| `signed_in` | `boolean` | Yes |  |
| `size_bytes` | `number` | Yes |  |
| `subject` | `string` | No |  |
| `target_business_id` | `string` | Yes |  |
| `topic` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | create |
| --- | --- | --- |
| `actions` | - | - |
| `body` | - | - |
| `client_request_id` | - | - |
| `content_type` | - | - |
| `continuation` | - | Yes |
| `coordinates_returned` | - | - |
| `disclosure` | - | - |
| `enabled` | - | - |
| `file_sha256` | - | - |
| `has_more` | - | - |
| `human_confirmation` | - | - |
| `intent_id` | - | - |
| `kind` | - | - |
| `knowledgeVersion` | - | - |
| `limits` | - | - |
| `links` | - | - |
| `location` | - | Yes |
| `message` | - | - |
| `messages` | - | - |
| `mode` | - | - |
| `name` | - | - |
| `needsHuman` | - | - |
| `policy` | - | - |
| `question` | - | - |
| `reply` | - | - |
| `result` | - | - |
| `results` | - | - |
| `scan_authority_id` | - | - |
| `scanner` | - | - |
| `scanner_version` | - | - |
| `schema_version` | - | - |
| `searcher_latitude` | - | - |
| `searcher_longitude` | - | - |
| `signature` | - | - |
| `signed_in` | - | - |
| `size_bytes` | - | - |
| `subject` | - | - |
| `target_business_id` | - | - |
| `topic` | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.ModeratedAction().create({
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.ModeratedAction().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ModeratedActionEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoppeeBusinessSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OpenApiDocumentEntity

```ts
const open_api_document = client.OpenApiDocument()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `components` | `Record<string, any>` | Yes |  |
| `info` | `Record<string, any>` | Yes |  |
| `openapi` | `any` | Yes |  |
| `paths` | `Record<string, any>` | Yes |  |
| `servers` | `any[]` | Yes |  |
| `tags` | `any[]` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.OpenApiDocument().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OpenApiDocumentEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoppeeBusinessSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OperationEntity

```ts
const operation = client.Operation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | Yes |  |
| `action` | `string` | Yes |  |
| `active` | `boolean` | No |  |
| `active_or_good_standing` | `boolean` | No |  |
| `ai_draft_id` | `string` | No |  |
| `allowed_actions` | `any[]` | Yes |  |
| `alt` | `string` | No |  |
| `amount_cents` | `number` | Yes | Whole cents, non-zero, at most 1,000,000 either way; a promotional credit is positive. |
| `amount_off_cents` | `number` | No |  |
| `api_key` | `string` | Yes |  |
| `applies_to_period` | `string` | No |  |
| `applies_to_tier` | `string | null` | No |  |
| `assigned_admin_user_id` | `string | null` | No |  |
| `assigneeId` | `string` | Yes |  |
| `assigneeLabel` | `string` | Yes |  |
| `assigneeType` | `string` | Yes |  |
| `assignee_id` | `string` | No |  |
| `assignee_label` | `string` | No |  |
| `assignee_type` | `string` | No | AI assignment is unavailable while the customer-support workload is disconnected. |
| `assistant_enabled` | `boolean` | Yes |  |
| `base_url` | `string` | No |  |
| `body` | `string` | Yes |  |
| `businessId` | `string` | Yes |  |
| `businessName` | `string` | Yes |  |
| `business_id` | `string | null` | Yes |  |
| `business_ids` | `any[]` | Yes |  |
| `campaign_id` | `string` | No |  |
| `campaign_ids` | `any[]` | No |  |
| `caption` | `string` | No |  |
| `case_status` | `string` | No |  |
| `catalog` | `any[]` | Yes |  |
| `category` | `string` | No |  |
| `category_alias` | `string` | Yes |  |
| `chunk_size` | `number` | No |  |
| `city` | `string` | No |  |
| `code` | `string` | Yes |  |
| `confidence` | `number` | No |  |
| `config` | `Record<string, any>` | Yes | Complete validated pricing configuration. |
| `confirm` | `boolean` | Yes |  |
| `confirm_admin` | `boolean` | No |  |
| `confirmation` | `string` | Yes |  |
| `connection_id` | `string` | Yes |  |
| `connection_kind` | `string` | Yes |  |
| `content_type` | `string` | Yes |  |
| `context_id` | `string` | Yes |  |
| `context_type` | `string` | Yes |  |
| `createdAt` | `string | null` | Yes |  |
| `created_at` | `string` | Yes |  |
| `credential_expires_at` | `string` | No | Expiration date printed on the license. |
| `credential_id` | `string` | Yes |  |
| `custom_wire` | `string` | No |  |
| `data_base64` | `string` | Yes |  |
| `decision` | `string` | Yes |  |
| `dedupe_ack` | `boolean` | No |  |
| `delivery_contract` | `Record<string, any>` | Yes |  |
| `disabled_reason` | `string | null` | Yes |  |
| `discount_type` | `string` | Yes |  |
| `display_name` | `string` | Yes |  |
| `disposition` | `string` | Yes |  |
| `draft` | `Record<string, any>` | Yes |  |
| `duration` | `string` | No |  |
| `duration_in_months` | `number | null` | No |  |
| `email` | `string` | Yes |  |
| `enabled` | `boolean` | Yes |  |
| `endpoint` | `Record<string, any>` | Yes |  |
| `endpoint_id` | `string` | Yes |  |
| `endpoint_url` | `string` | Yes |  |
| `ends_at` | `string` | Yes |  |
| `environment_fallback` | `any` | Yes |  |
| `event_id` | `string` | Yes |  |
| `event_types` | `any[]` | Yes |  |
| `expected_allowed_actions` | `any[]` | Yes |  |
| `expected_key_id` | `string` | Yes |  |
| `expected_updated_at` | `string` | Yes |  |
| `expected_version` | `number` | Yes |  |
| `expires_at` | `string` | No | Promotional credit only: ISO date-time 1 hour to 2 years ahead, disclosed to the owner. |
| `fact_id` | `string` | Yes |  |
| `facts` | `Record<string, any>` | Yes |  |
| `failure_count` | `number` | Yes |  |
| `fields` | `Record<string, any>` | Yes | Validated fields for this fixed content-block type. |
| `file_name` | `string` | Yes |  |
| `guideHandoffAnsweredAt` | `string | null` | No |  |
| `guideHandoffAt` | `string | null` | No |  |
| `guideHandoffDueAt` | `string | null` | No |  |
| `height` | `number` | No |  |
| `historic_association_checked` | `boolean` | Yes |  |
| `hold` | `string` | Yes |  |
| `holder_name_match` | `boolean` | No |  |
| `hours` | `Record<string, any>` | Yes |  |
| `id` | `string` | Yes |  |
| `idempotency_key` | `string` | No |  |
| `identifier_match` | `boolean` | No |  |
| `in_use` | `Record<string, any>` | Yes |  |
| `instruction` | `string` | No |  |
| `invited` | `boolean` | Yes |  |
| `key_check` | `any` | Yes |  |
| `kind` | `string` | Yes |  |
| `label` | `string` | Yes |  |
| `lastMessageAt` | `string | null` | Yes |  |
| `lastMessageAuthorType` | `string` | Yes |  |
| `lastMessagePreview` | `string` | Yes |  |
| `last_delivery_at` | `string | null` | Yes |  |
| `last_error_code` | `any` | Yes |  |
| `last_probe_at` | `any` | Yes |  |
| `last_problem` | `any` | Yes |  |
| `legal_name` | `string` | No |  |
| `limit` | `number` | No |  |
| `make_active` | `boolean` | Yes |  |
| `max_cents` | `number` | Yes |  |
| `max_redemptions` | `number | null` | No |  |
| `messages` | `any[]` | Yes |  |
| `messagesTruncated` | `boolean` | Yes |  |
| `min_cents` | `number` | Yes |  |
| `model` | `string` | Yes |  |
| `model_id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `note` | `string` | No |  |
| `notes` | `string` | No |  |
| `observed_at` | `string` | No |  |
| `one_time_display` | `any` | Yes |  |
| `outcome` | `string` | Yes |  |
| `ownerEmail` | `string` | Yes |  |
| `ownerLastReadAt` | `string | null` | Yes |  |
| `ownerName` | `string` | Yes |  |
| `ownerUserId` | `string` | Yes |  |
| `owner_reason_code` | `string` | No | Controlled owner-visible rejection reason. |
| `per_customer_limit` | `number` | No |  |
| `percent_off` | `number` | No |  |
| `phone` | `string` | No |  |
| `policyVersion` | `string` | Yes |  |
| `priority` | `string` | No |  |
| `provider` | `string` | Yes |  |
| `providers` | `any[]` | Yes |  |
| `purpose_code` | `string` | Yes |  |
| `rank_bid_cents` | `number` | Yes |  |
| `reason` | `string` | Yes |  |
| `reason_category` | `string` | No |  |
| `reason_code` | `string` | No |  |
| `reason_detail` | `string` | No |  |
| `reference` | `string` | Yes |  |
| `reject_reason` | `string` | No |  |
| `related_case_id` | `string` | No |  |
| `report_id` | `number` | Yes |  |
| `report_ids` | `any[]` | Yes |  |
| `reserve_cents` | `number` | Yes | 100-10000; never below $1.00. |
| `resolution_note` | `string` | Yes |  |
| `review_notes` | `string` | No |  |
| `revision` | `number` | Yes |  |
| `role` | `string` | Yes |  |
| `rows` | `any[]` | Yes |  |
| `run` | `Record<string, any>` | Yes |  |
| `schema_version` | `string` | Yes |  |
| `scope` | `string` | Yes |  |
| `search` | `string` | No |  |
| `settings` | `Record<string, any>` | Yes |  |
| `signing_secret` | `string` | Yes |  |
| `size_bytes` | `number` | Yes |  |
| `sla_due_at` | `string | null` | No |  |
| `source` | `string` | Yes |  |
| `source_authority` | `string` | No | Exact official authority name. |
| `source_category_slug` | `string` | Yes |  |
| `source_scope_checked` | `boolean` | Yes |  |
| `source_url` | `string` | No | Exact HTTPS official source URL. |
| `starts_at` | `string | null` | No |  |
| `state` | `string` | No | Bulk by area: every ad of the advertisers in this two-letter U.S. |
| `status` | `string` | Yes |  |
| `storage` | `string` | Yes |  |
| `street_address` | `string` | No |  |
| `subject` | `string` | Yes |  |
| `supportLastReadAt` | `string | null` | Yes |  |
| `target_category` | `string` | Yes |  |
| `taxonomy_category_aliases` | `any[]` | Yes |  |
| `ticketNumber` | `string` | Yes |  |
| `tier` | `string` | No |  |
| `typing` | `boolean` | No |  |
| `until` | `string` | No |  |
| `updatedAt` | `string | null` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes | Public HTTPS receiver operated by the connecting principal or its agent runtime. |
| `valid_until` | `string` | No |  |
| `value` | `string` | Yes |  |
| `verification_method` | `string` | Yes |  |
| `verified_at` | `any` | Yes |  |
| `verified_service_scope` | `any[]` | No |  |
| `version` | `string` | No |  |
| `website` | `string` | No |  |
| `width` | `number` | No |  |
| `window_hours` | `number` | No | 1-744, default 48. |
| `workload` | `string` | Yes |  |
| `zip` | `string` | No |  |

### Field Usage by Operation

| Field | create | update | patch | remove |
| --- | --- | --- | --- | --- |
| `account_id` | - | - | - | - |
| `action` | Yes | - | - | - |
| `active` | - | - | - | - |
| `active_or_good_standing` | - | - | - | - |
| `ai_draft_id` | - | - | - | - |
| `allowed_actions` | - | - | - | - |
| `alt` | - | - | - | - |
| `amount_cents` | - | - | - | - |
| `amount_off_cents` | - | - | - | - |
| `api_key` | - | Yes | - | - |
| `applies_to_period` | - | - | - | - |
| `applies_to_tier` | - | - | - | - |
| `assigned_admin_user_id` | - | - | - | - |
| `assigneeId` | - | - | - | - |
| `assigneeLabel` | - | - | - | - |
| `assigneeType` | - | - | - | - |
| `assignee_id` | - | - | - | - |
| `assignee_label` | - | - | - | - |
| `assignee_type` | - | - | - | - |
| `assistant_enabled` | - | - | - | - |
| `base_url` | - | - | - | - |
| `body` | - | - | - | - |
| `businessId` | - | - | - | - |
| `businessName` | - | - | - | - |
| `business_id` | Yes | - | - | - |
| `business_ids` | - | - | - | - |
| `campaign_id` | - | - | - | - |
| `campaign_ids` | - | - | - | - |
| `caption` | - | - | - | - |
| `case_status` | - | - | - | - |
| `catalog` | - | - | - | - |
| `category` | - | - | - | - |
| `category_alias` | Yes | - | - | - |
| `chunk_size` | - | - | - | - |
| `city` | - | - | - | - |
| `code` | - | - | - | - |
| `confidence` | - | - | - | - |
| `config` | - | - | - | - |
| `confirm` | Yes | - | - | - |
| `confirm_admin` | - | - | - | - |
| `confirmation` | - | - | - | - |
| `connection_id` | - | - | - | - |
| `connection_kind` | - | - | - | - |
| `content_type` | - | - | - | - |
| `context_id` | - | - | - | - |
| `context_type` | - | - | - | - |
| `createdAt` | - | - | - | - |
| `created_at` | - | - | - | - |
| `credential_expires_at` | - | - | - | - |
| `credential_id` | - | - | - | - |
| `custom_wire` | - | - | - | - |
| `data_base64` | - | - | - | - |
| `decision` | - | - | - | - |
| `dedupe_ack` | - | - | - | - |
| `delivery_contract` | - | - | - | - |
| `disabled_reason` | - | - | - | - |
| `discount_type` | - | - | - | - |
| `display_name` | - | - | - | - |
| `disposition` | - | - | - | - |
| `draft` | - | - | - | - |
| `duration` | - | - | - | - |
| `duration_in_months` | - | - | - | - |
| `email` | - | - | - | - |
| `enabled` | - | - | - | - |
| `endpoint` | - | - | - | - |
| `endpoint_id` | - | - | - | - |
| `endpoint_url` | - | - | - | - |
| `ends_at` | - | - | - | - |
| `environment_fallback` | - | - | - | - |
| `event_id` | - | - | - | - |
| `event_types` | - | - | - | - |
| `expected_allowed_actions` | - | - | - | - |
| `expected_key_id` | - | - | - | - |
| `expected_updated_at` | - | - | - | - |
| `expected_version` | - | - | - | - |
| `expires_at` | - | - | - | - |
| `fact_id` | - | - | - | - |
| `facts` | - | - | - | - |
| `failure_count` | - | - | - | - |
| `fields` | - | - | - | - |
| `file_name` | - | - | - | - |
| `guideHandoffAnsweredAt` | - | - | - | - |
| `guideHandoffAt` | - | - | - | - |
| `guideHandoffDueAt` | - | - | - | - |
| `height` | - | - | - | - |
| `historic_association_checked` | - | - | - | - |
| `hold` | - | - | - | - |
| `holder_name_match` | - | - | - | - |
| `hours` | - | - | - | - |
| `id` | - | - | - | - |
| `idempotency_key` | - | - | - | - |
| `identifier_match` | - | - | - | - |
| `in_use` | - | - | - | - |
| `instruction` | - | - | - | - |
| `invited` | - | - | - | - |
| `key_check` | - | - | - | - |
| `kind` | - | - | - | - |
| `label` | - | - | - | - |
| `lastMessageAt` | - | - | - | - |
| `lastMessageAuthorType` | - | - | - | - |
| `lastMessagePreview` | - | - | - | - |
| `last_delivery_at` | - | - | - | - |
| `last_error_code` | - | - | - | - |
| `last_probe_at` | - | - | - | - |
| `last_problem` | - | - | - | - |
| `legal_name` | - | - | - | - |
| `limit` | - | - | - | - |
| `make_active` | - | - | - | - |
| `max_cents` | - | - | - | - |
| `max_redemptions` | - | - | - | - |
| `messages` | - | - | - | - |
| `messagesTruncated` | - | - | - | - |
| `min_cents` | - | - | - | - |
| `model` | - | - | - | - |
| `model_id` | - | - | - | - |
| `name` | - | - | - | - |
| `note` | - | - | - | - |
| `notes` | - | - | - | - |
| `observed_at` | - | - | - | - |
| `one_time_display` | - | - | - | - |
| `outcome` | - | - | - | - |
| `ownerEmail` | - | - | - | - |
| `ownerLastReadAt` | - | - | - | - |
| `ownerName` | - | - | - | - |
| `ownerUserId` | - | - | - | - |
| `owner_reason_code` | - | - | - | - |
| `per_customer_limit` | - | - | - | - |
| `percent_off` | - | - | - | - |
| `phone` | - | - | - | - |
| `policyVersion` | - | - | - | - |
| `priority` | - | - | - | - |
| `provider` | - | - | - | - |
| `providers` | - | - | - | - |
| `purpose_code` | - | - | - | - |
| `rank_bid_cents` | - | - | - | - |
| `reason` | Yes | - | - | - |
| `reason_category` | - | - | - | - |
| `reason_code` | - | - | Yes | - |
| `reason_detail` | - | - | - | - |
| `reference` | - | - | - | - |
| `reject_reason` | - | - | - | - |
| `related_case_id` | - | - | - | - |
| `report_id` | Yes | - | - | - |
| `report_ids` | - | - | - | - |
| `reserve_cents` | - | - | - | - |
| `resolution_note` | - | - | - | - |
| `review_notes` | - | - | - | - |
| `revision` | - | - | - | - |
| `role` | Yes | - | - | - |
| `rows` | - | - | - | - |
| `run` | - | - | - | - |
| `schema_version` | - | - | - | - |
| `scope` | - | - | - | - |
| `search` | - | - | - | - |
| `settings` | - | - | - | - |
| `signing_secret` | - | - | - | - |
| `size_bytes` | - | - | - | - |
| `sla_due_at` | - | - | - | - |
| `source` | Yes | - | - | - |
| `source_authority` | - | - | - | - |
| `source_category_slug` | Yes | - | - | - |
| `source_scope_checked` | - | - | - | - |
| `source_url` | - | - | - | - |
| `starts_at` | - | - | - | - |
| `state` | - | - | - | - |
| `status` | Yes | - | Yes | - |
| `storage` | - | - | - | - |
| `street_address` | - | - | - | - |
| `subject` | - | - | - | - |
| `supportLastReadAt` | - | - | - | - |
| `target_category` | Yes | - | Yes | - |
| `taxonomy_category_aliases` | - | - | - | - |
| `ticketNumber` | - | - | - | - |
| `tier` | Yes | - | - | - |
| `typing` | - | - | - | - |
| `until` | - | - | - | - |
| `updatedAt` | - | - | - | - |
| `updated_at` | - | - | - | - |
| `url` | - | - | - | - |
| `valid_until` | - | - | - | - |
| `value` | - | - | - | - |
| `verification_method` | - | - | - | - |
| `verified_at` | - | - | - | - |
| `verified_service_scope` | - | - | - | - |
| `version` | - | - | - | - |
| `website` | - | - | - | - |
| `width` | - | - | - | - |
| `window_hours` | - | - | - | - |
| `workload` | - | - | - | - |
| `zip` | - | - | - | - |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `merge_dry_run` | `/v1/admin/ops/duplicate-candidates/{candidate_id}/merge-dry-run` | `client.Operation().create({ $action: 'merge_dry_run', ... })` |
| `remove` | `/v1/admin/team/members/{user_id}/remove` | `client.Operation().create({ $action: 'remove', ... })` |
| `rotate` | `/v1/admin/ai-connections/{connection_id}/rotate` | `client.Operation().create({ $action: 'rotate', ... })` |
| `test` | `/v1/admin/ai-connections/{connection_id}/test` | `client.Operation().create({ $action: 'test', ... })` |
| `test` | `/v1/admin/assistant-provider/{provider}/test` | `client.Operation().create({ $action: 'test', ... })` |

An action returns that action's OWN response, which is not necessarily a
Operation record — check the API definition for its shape.

```ts
const result = await client.Operation().create({
  $action: 'merge_dry_run',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Operation().create({
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

#### `patch(data: object, ctrl?: object)`

Change part of an existing entity: only the fields given are sent. The data must include the entity `id`. Resolves to the patched entity.

```ts
const result = await client.Operation().patch({
  candidate_id: 'candidate_id',
  // Only the fields to change
})
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.Operation().remove({ access_context_id: 'access_context_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.Operation().update({
  provider: 'provider',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OperationEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoppeeBusinessSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OwnerNotificationEntity

```ts
const owner_notification = client.OwnerNotification()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `businessId` | `string` | Yes |  |
| `createdAt` | `string` | Yes |  |
| `dedupeKey` | `string` | Yes |  |
| `emailStatus` | `string` | Yes |  |
| `eventType` | `any` | Yes |  |
| `id` | `string` | Yes |  |
| `readAt` | `string | null` | Yes |  |
| `resourceId` | `string` | Yes |  |
| `resourceKind` | `any` | Yes |  |
| `resourceUrl` | `string` | Yes |  |
| `summary` | `string` | Yes |  |
| `webhookStatus` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.OwnerNotification().create({
  notification_id: 'example_notification_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OwnerNotificationEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoppeeBusinessSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OwnerNotificationSettingEntity

```ts
const owner_notification_setting = client.OwnerNotificationSetting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `businessId` | `string` | Yes |  |
| `business_id` | `string` | No |  |
| `createdAt` | `string` | Yes |  |
| `emailEnabled` | `boolean` | Yes |  |
| `email_enabled` | `boolean` | No |  |
| `eventTypeSubscriptions` | `any[]` | Yes |  |
| `event_types` | `any[]` | No |  |
| `updatedAt` | `string` | Yes |  |
| `webhookEnabled` | `boolean` | Yes |  |
| `webhook_enabled` | `boolean` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.OwnerNotificationSetting().create({
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OwnerNotificationSettingEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoppeeBusinessSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OwnerWebhookEndpointEntity

```ts
const owner_webhook_endpoint = client.OwnerWebhookEndpoint()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `businessId` | `string` | Yes |  |
| `createdAt` | `string` | Yes |  |
| `enabled` | `boolean` | Yes |  |
| `eventTypeSubscriptions` | `any[]` | Yes |  |
| `failureCount` | `number` | Yes |  |
| `id` | `string` | Yes |  |
| `lastDeliveryAt` | `string | null` | Yes |  |
| `updatedAt` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.OwnerWebhookEndpoint().create({
  webhook_id: 'example_webhook_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OwnerWebhookEndpointEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoppeeBusinessSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OwnerWebhookRegistrationEntity

```ts
const owner_webhook_registration = client.OwnerWebhookRegistration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `business_id` | `string` | No |  |
| `endpoint` | `Record<string, any>` | Yes |  |
| `event_types` | `any[]` | No |  |
| `one_time_display` | `any` | Yes |  |
| `signing_secret` | `string` | Yes |  |
| `status` | `any` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.OwnerWebhookRegistration().create({
  url: 'example_url',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OwnerWebhookRegistrationEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoppeeBusinessSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PricingEntity

```ts
const pricing = client.Pricing()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `billing` | `Record<string, any>` | Yes |  |
| `branch_add_ons` | `any[]` | Yes |  |
| `currency` | `any` | Yes |  |
| `generated_at` | `string` | Yes |  |
| `neutrality` | `string` | Yes |  |
| `plans` | `any[]` | Yes |  |
| `promotions` | `any[]` | Yes |  |
| `published_at` | `string | null` | Yes |  |
| `radius_extension` | `Record<string, any>` | Yes |  |
| `revision_id` | `string | null` | Yes |  |
| `source` | `any` | Yes |  |
| `trust_model_version` | `any` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Pricing().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PricingEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoppeeBusinessSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PromoteVerifiedTransactionEntity

```ts
const promote_verified_transaction = client.PromoteVerifiedTransaction()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `business_id` | `string` | Yes |  |
| `evidence_id` | `string` | Yes |  |
| `interaction_id` | `string` | Yes |  |
| `ok` | `any` | Yes |  |
| `review_upgraded` | `boolean` | Yes |  |
| `status` | `any` | Yes |  |
| `trust_weight` | `any` | Yes |  |
| `verified` | `boolean` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.PromoteVerifiedTransaction().create({
  business_id: 'example_business_id',
  evidence_id: 'example_evidence_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PromoteVerifiedTransactionEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoppeeBusinessSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PublicContentEntity

```ts
const public_content = client.PublicContent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `blocks` | `Record<string, any>` | Yes |  |
| `generated_at` | `string` | Yes |  |
| `source` | `any` | Yes |  |
| `trust_model_version` | `any` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.PublicContent().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PublicContentEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoppeeBusinessSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RecommendEntity

```ts
const recommend = client.Recommend()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `candidate_window_truncated` | `boolean` | Yes | True when Loppee's bounded candidate assembly reached its safety cap. |
| `commercial_influence` | `string` | Yes | Must be none whenever current-location or saved_exact authority is absent, including universal exact/genuine-prefix name lookup. |
| `display_count` | `number` | No | Agent-key responses: the number of businesses in this response. |
| `endpoint` | `any` | Yes |  |
| `fallback_registry` | `any[]` | Yes |  |
| `generated_at` | `string` | Yes |  |
| `has_more` | `boolean` | Yes | True only when next_cursor can continue through the current bounded, deterministic candidate window. |
| `listed` | `any[]` | Yes |  |
| `location_context` | `any` | Yes | Local category discovery and recommendations require a current precise location proof or handoff, a user-confirmed validated destination authority, or a saved_exact Home location. |
| `ordering` | `any` | Yes |  |
| `policy` | `string` | Yes |  |
| `presentation_guidance` | `string` | No | Agent-key responses: how to present these results to the customer. |
| `query` | `Record<string, any>` | Yes |  |
| `ranking_policy` | `string` | Yes |  |
| `registry_count_basis` | `string` | Yes |  |
| `registry_count_observed_at` | `string | null` | Yes |  |
| `registry_name` | `any` | Yes |  |
| `results` | `any[]` | Yes |  |
| `returned_count` | `number` | Yes |  |
| `reviewed_registry` | `any[]` | Yes |  |
| `schema_version` | `any` | Yes |  |
| `search_intent` | `Record<string, any>` | Yes |  |
| `suggestions` | `Record<string, any>` | No |  |
| `total_matches` | `number` | No | Web and app responses. |
| `total_matches_basis` | `number` | No |  |
| `total_registry_records` | `number` | Yes |  |
| `trust_model_version` | `any` | Yes |  |
| `verified` | `any[]` | Yes |  |
| `visible_candidate_records` | `number` | No | Web and app responses. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Recommend().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RecommendEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoppeeBusinessSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ReviewEntity

```ts
const review = client.Review()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | Yes |  |
| `attestation_accepted` | `boolean` | Yes | Set true only after the customer confirms this describes their own experience and explicitly approves publishing the displayed business, star rating, title, and full review. |
| `customer_confirmed` | `boolean` | No | Set true to confirm you were a customer of this business. |
| `message` | `string` | Yes |  |
| `rating` | `number` | Yes |  |
| `service_date` | `any` | No | Optional real, non-future service date in YYYY-MM-DD format; empty means not provided. |
| `subject` | `string` | Yes |  |
| `target_business_id` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Review().create({
  account_id: 'example_account_id',
  attestation_accepted: true,
  message: 'example_message',
  rating: 1,
  subject: 'example_subject',
  target_business_id: 'example_target_business_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ReviewEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoppeeBusinessSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RevokeEntity

```ts
const revoke = client.Revoke()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | Yes |  |
| `key_id` | `string` | Yes |  |
| `revoked_by` | `string` | Yes |  |
| `status` | `any` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Revoke().create({
  agent_key_id: 'example_agent_key_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RevokeEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoppeeBusinessSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SaveBusinessEntity

```ts
const save_business = client.SaveBusiness()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | Yes |  |
| `business_id` | `string` | Yes |  |
| `business_name` | `string` | Yes |  |
| `business_source` | `string` | Yes |  |
| `category` | `string` | No |  |
| `city` | `string` | No |  |
| `created_at` | `string` | Yes |  |
| `notes` | `string` | No |  |
| `saved_business_id` | `string` | Yes |  |
| `state` | `string` | No |  |
| `status` | `any` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.SaveBusiness().create({
  account_id: 'example_account_id',
  business_id: 'example_business_id',
  business_name: 'example_business_name',
  business_source: 'example_business_source',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SaveBusinessEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoppeeBusinessSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SavedBusinessEntity

```ts
const saved_business = client.SavedBusiness()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | Yes |  |
| `count` | `number` | Yes |  |
| `limit` | `number` | No |  |
| `saved_businesses` | `any[]` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.SavedBusiness().create({
  account_id: 'example_account_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SavedBusinessEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoppeeBusinessSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SavedLocationEntity

```ts
const saved_location = client.SavedLocation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `available` | `boolean` | Yes |  |
| `coordinates_returned` | `any` | Yes |  |
| `kind` | `any` | Yes | Only saved_exact is precise local-discovery authority. |
| `label` | `string | null` | Yes |  |
| `location_proof_id` | `string` | No |  |
| `reach_precision` | `any` | Yes | Exact can authorize local category/recommendation reach; coarse cannot activate local results, Sponsored placement, or impressions. |
| `saved_location_ref` | `string | null` | Yes |  |
| `updated_at` | `string | null` | Yes |  |
| `zip` | `string` | No |  |

### Field Usage by Operation

| Field | update | remove |
| --- | --- | --- |
| `available` | - | - |
| `coordinates_returned` | - | - |
| `kind` | - | - |
| `label` | Yes | - |
| `location_proof_id` | - | - |
| `reach_precision` | - | - |
| `saved_location_ref` | - | - |
| `updated_at` | - | - |
| `zip` | - | - |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.SavedLocation().remove()
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.SavedLocation().update({
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SavedLocationEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoppeeBusinessSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SearchEntity

```ts
const search = client.Search()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `candidate_window_truncated` | `boolean` | Yes | True when Loppee's bounded candidate assembly reached its safety cap. |
| `commercial_influence` | `string` | Yes | Must be none whenever current-location or saved_exact authority is absent, including universal exact/genuine-prefix name lookup. |
| `display_count` | `number` | No | Agent-key responses: the number of businesses in this response. |
| `generated_at` | `string` | Yes |  |
| `has_more` | `boolean` | Yes | True only when next_cursor can continue through the current bounded, deterministic candidate window. |
| `location_context` | `any` | Yes | Local category discovery and recommendations require a current precise location proof or handoff, a user-confirmed validated destination authority, or a saved_exact Home location. |
| `next_cursor` | `string | null` | Yes |  |
| `page_limit` | `number` | Yes |  |
| `policy` | `string` | Yes |  |
| `presentation_guidance` | `string` | No | Agent-key responses: how to present these results to the customer. |
| `query` | `Record<string, any>` | Yes |  |
| `ranking_policy` | `string` | Yes |  |
| `registry_count_basis` | `string` | Yes |  |
| `registry_count_observed_at` | `string | null` | Yes |  |
| `registry_name` | `any` | Yes |  |
| `results` | `any[]` | Yes |  |
| `returned_count` | `number` | Yes |  |
| `schema_version` | `any` | Yes |  |
| `search_intent` | `Record<string, any>` | Yes |  |
| `suggestions` | `Record<string, any>` | No |  |
| `total_matches` | `number` | No | Web and app responses. |
| `total_matches_basis` | `number` | No |  |
| `total_registry_records` | `number` | Yes |  |
| `trust_model_version` | `any` | Yes |  |
| `visible_candidate_records` | `number` | No | Web and app responses. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Search().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SearchEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoppeeBusinessSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SuggestEntity

```ts
const suggest = client.Suggest()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `categories` | `any[]` | Yes |  |
| `names` | `any[]` | Yes |  |
| `query` | `string` | Yes |  |
| `schema_version` | `any` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Suggest().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SuggestEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoppeeBusinessSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SupportInternalNoteEntity

```ts
const support_internal_note = client.SupportInternalNote()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authorLabel` | `string` | Yes |  |
| `body` | `string` | Yes |  |
| `createdAt` | `string | null` | Yes |  |
| `id` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.SupportInternalNote().create({
  id: 'example_id',
  body: 'example_body',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SupportInternalNoteEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoppeeBusinessSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SupportWorkflowEntity

```ts
const support_workflow = client.SupportWorkflow()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `any` | No |  |
| `id` | `string` | No |  |
| `priority` | `any` | No |  |
| `waiting_on` | `any` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.SupportWorkflow().create({
  id: 'example_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SupportWorkflowEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoppeeBusinessSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TaxonomySuggestionEntity

```ts
const taxonomy_suggestion = client.TaxonomySuggestion()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alias` | `string` | Yes |  |
| `path_titles` | `any[]` | Yes |  |
| `title` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.TaxonomySuggestion().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TaxonomySuggestionEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoppeeBusinessSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TrustCardEntity

```ts
const trust_card = client.TrustCard()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agency` | `string` | Yes |  |
| `collected_at` | `string` | Yes |  |
| `disclosure` | `string` | Yes |  |
| `fact_id` | `string` | Yes |  |
| `matched_on` | `string` | Yes |  |
| `reason` | `string` | No |  |
| `record_kind` | `string` | Yes |  |
| `record_number` | `string | null` | Yes |  |
| `record_scope` | `string` | Yes |  |
| `record_type` | `string` | Yes |  |
| `recorded_expiry` | `string | null` | Yes |  |
| `result` | `string` | Yes |  |
| `source_label` | `string` | Yes |  |
| `source_url` | `string` | Yes |  |
| `state` | `string` | Yes |  |
| `status_on_record` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.TrustCard().create({
  business_id: 'example_business_id',
  license_record_id: 'example_license_record_id',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.TrustCard().list({ business_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.TrustCard().load({ schema_name: 'schema_name' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TrustCardEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoppeeBusinessSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UnsaveBusinessEntity

```ts
const unsave_business = client.UnsaveBusiness()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | Yes |  |
| `business_id` | `string` | Yes |  |
| `removed` | `boolean` | Yes |  |
| `status` | `any` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.UnsaveBusiness().create({
  account_id: 'example_account_id',
  business_id: 'example_business_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UnsaveBusinessEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoppeeBusinessSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UpdateAgentBillingAccountEntity

```ts
const update_agent_billing_account = client.UpdateAgentBillingAccount()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | Yes |  |
| `billing_account` | `Record<string, any>` | Yes |  |
| `billing_status` | `string` | No |  |
| `included_actions` | `number` | No |  |
| `monthly_fee_cents` | `number` | No |  |
| `overage_cents` | `number` | No |  |
| `plan` | `string` | No |  |
| `status` | `any` | Yes |  |
| `updated_by` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.UpdateAgentBillingAccount().create({
  account_id: 'example_account_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UpdateAgentBillingAccountEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoppeeBusinessSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WithdrawJobApplicationEntity

```ts
const withdraw_job_application = client.WithdrawJobApplication()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | Yes |  |
| `already_withdrawn` | `boolean` | Yes |  |
| `application` | `Record<string, any>` | Yes |  |
| `application_id` | `string` | Yes |  |
| `status` | `any` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.WithdrawJobApplication().create({
  account_id: 'example_account_id',
  application_id: 'example_application_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WithdrawJobApplicationEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoppeeBusinessSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `ratelimit` | 0.0.1 | Rate limiting |
| `retry` | 0.0.1 | Retry |
| `test` | 0.0.1 | Test transport |
| `timeout` | 0.0.1 | Timeout |


Features are activated via the `feature` option:

```ts
const client = new LoppeeBusinessSDK({
  feature: {
    ratelimit: { active: true },
    retry: { active: true },
    test: { active: true },
    timeout: { active: true },
  }
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### Ordering

`ratelimit`, `retry`, `timeout` wrap the transport. Each
wraps whatever is already installed, so **activation order is nesting order**:
a feature activated later sits OUTSIDE one activated earlier, and sees the call
first.

That decides behaviour, not just sequence: a feature that short-circuits the
call, such as a cache serving a hit, stops every feature nested inside it from
ever seeing that call.

`test` attach to pipeline hooks
rather than the transport, so their order does not affect what they observe.

#### `ratelimit`

Rate limiting.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

| Option | Type |
|---|---|
| `now` | function |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.ratelimit.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `retry`

Retry.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

| Option | Type |
|---|---|
| `jitter` | boolean |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.retry.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `test`

Test transport.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

#### `timeout`

Timeout.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

| Option | Type |
|---|---|
| `clearTimer` | function |
| `now` | function |
| `setTimer` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.timeout.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

