# LoppeeBusiness PHP SDK Reference

Complete API reference for the LoppeeBusiness PHP SDK.


## LoppeeBusinessSDK

### Constructor

```php
require_once __DIR__ . '/loppeebusiness_sdk.php';

$client = new LoppeeBusinessSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `LoppeeBusinessSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = LoppeeBusinessSDK::test();
```


### Instance Methods

#### `AgentAccess($data = null)`

Create a new `AgentAccessEntity` instance. Pass `null` for no initial data.

#### `AgentCapability($data = null)`

Create a new `AgentCapabilityEntity` instance. Pass `null` for no initial data.

#### `AgentConnectionTest($data = null)`

Create a new `AgentConnectionTestEntity` instance. Pass `null` for no initial data.

#### `AgentIntegration($data = null)`

Create a new `AgentIntegrationEntity` instance. Pass `null` for no initial data.

#### `AgentMonitoring($data = null)`

Create a new `AgentMonitoringEntity` instance. Pass `null` for no initial data.

#### `AgentOpenapi($data = null)`

Create a new `AgentOpenapiEntity` instance. Pass `null` for no initial data.

#### `AgentPolicy($data = null)`

Create a new `AgentPolicyEntity` instance. Pass `null` for no initial data.

#### `AnonymousLocationProofRevocation($data = null)`

Create a new `AnonymousLocationProofRevocationEntity` instance. Pass `null` for no initial data.

#### `BusinessApplication($data = null)`

Create a new `BusinessApplicationEntity` instance. Pass `null` for no initial data.

#### `BusinessClaim($data = null)`

Create a new `BusinessClaimEntity` instance. Pass `null` for no initial data.

#### `BusinessDeal($data = null)`

Create a new `BusinessDealEntity` instance. Pass `null` for no initial data.

#### `BusinessIndex($data = null)`

Create a new `BusinessIndexEntity` instance. Pass `null` for no initial data.

#### `BusinessOwner($data = null)`

Create a new `BusinessOwnerEntity` instance. Pass `null` for no initial data.

#### `BusinessReview($data = null)`

Create a new `BusinessReviewEntity` instance. Pass `null` for no initial data.

#### `ChatAttachment($data = null)`

Create a new `ChatAttachmentEntity` instance. Pass `null` for no initial data.

#### `ChatAttachmentUrl($data = null)`

Create a new `ChatAttachmentUrlEntity` instance. Pass `null` for no initial data.

#### `ClaimVerificationSend($data = null)`

Create a new `ClaimVerificationSendEntity` instance. Pass `null` for no initial data.

#### `ClaimVerificationVerify($data = null)`

Create a new `ClaimVerificationVerifyEntity` instance. Pass `null` for no initial data.

#### `CommercialClick($data = null)`

Create a new `CommercialClickEntity` instance. Pass `null` for no initial data.

#### `ContactRecorded($data = null)`

Create a new `ContactRecordedEntity` instance. Pass `null` for no initial data.

#### `Conversation($data = null)`

Create a new `ConversationEntity` instance. Pass `null` for no initial data.

#### `ConversationClose($data = null)`

Create a new `ConversationCloseEntity` instance. Pass `null` for no initial data.

#### `ConversationReport($data = null)`

Create a new `ConversationReportEntity` instance. Pass `null` for no initial data.

#### `ConversationWorkflow($data = null)`

Create a new `ConversationWorkflowEntity` instance. Pass `null` for no initial data.

#### `CreateAgentApiKey($data = null)`

Create a new `CreateAgentApiKeyEntity` instance. Pass `null` for no initial data.

#### `Customer($data = null)`

Create a new `CustomerEntity` instance. Pass `null` for no initial data.

#### `CustomerAccount($data = null)`

Create a new `CustomerAccountEntity` instance. Pass `null` for no initial data.

#### `CustomerLocationProofRevocation($data = null)`

Create a new `CustomerLocationProofRevocationEntity` instance. Pass `null` for no initial data.

#### `DestinationAddressSuggestion($data = null)`

Create a new `DestinationAddressSuggestionEntity` instance. Pass `null` for no initial data.

#### `DestinationLocationProof($data = null)`

Create a new `DestinationLocationProofEntity` instance. Pass `null` for no initial data.

#### `DomainTrustCard($data = null)`

Create a new `DomainTrustCardEntity` instance. Pass `null` for no initial data.

#### `GeoContext($data = null)`

Create a new `GeoContextEntity` instance. Pass `null` for no initial data.

#### `Health($data = null)`

Create a new `HealthEntity` instance. Pass `null` for no initial data.

#### `JobApplication($data = null)`

Create a new `JobApplicationEntity` instance. Pass `null` for no initial data.

#### `JobResumeSignedUrl($data = null)`

Create a new `JobResumeSignedUrlEntity` instance. Pass `null` for no initial data.

#### `LocationHandoff($data = null)`

Create a new `LocationHandoffEntity` instance. Pass `null` for no initial data.

#### `Message($data = null)`

Create a new `MessageEntity` instance. Pass `null` for no initial data.

#### `ModeratedAction($data = null)`

Create a new `ModeratedActionEntity` instance. Pass `null` for no initial data.

#### `OpenApiDocument($data = null)`

Create a new `OpenApiDocumentEntity` instance. Pass `null` for no initial data.

#### `Operation($data = null)`

Create a new `OperationEntity` instance. Pass `null` for no initial data.

#### `OwnerNotification($data = null)`

Create a new `OwnerNotificationEntity` instance. Pass `null` for no initial data.

#### `OwnerNotificationSetting($data = null)`

Create a new `OwnerNotificationSettingEntity` instance. Pass `null` for no initial data.

#### `OwnerWebhookEndpoint($data = null)`

Create a new `OwnerWebhookEndpointEntity` instance. Pass `null` for no initial data.

#### `OwnerWebhookRegistration($data = null)`

Create a new `OwnerWebhookRegistrationEntity` instance. Pass `null` for no initial data.

#### `Pricing($data = null)`

Create a new `PricingEntity` instance. Pass `null` for no initial data.

#### `PromoteVerifiedTransaction($data = null)`

Create a new `PromoteVerifiedTransactionEntity` instance. Pass `null` for no initial data.

#### `PublicContent($data = null)`

Create a new `PublicContentEntity` instance. Pass `null` for no initial data.

#### `Recommend($data = null)`

Create a new `RecommendEntity` instance. Pass `null` for no initial data.

#### `Review($data = null)`

Create a new `ReviewEntity` instance. Pass `null` for no initial data.

#### `Revoke($data = null)`

Create a new `RevokeEntity` instance. Pass `null` for no initial data.

#### `SaveBusiness($data = null)`

Create a new `SaveBusinessEntity` instance. Pass `null` for no initial data.

#### `SavedBusiness($data = null)`

Create a new `SavedBusinessEntity` instance. Pass `null` for no initial data.

#### `SavedLocation($data = null)`

Create a new `SavedLocationEntity` instance. Pass `null` for no initial data.

#### `Search($data = null)`

Create a new `SearchEntity` instance. Pass `null` for no initial data.

#### `Suggest($data = null)`

Create a new `SuggestEntity` instance. Pass `null` for no initial data.

#### `SupportInternalNote($data = null)`

Create a new `SupportInternalNoteEntity` instance. Pass `null` for no initial data.

#### `SupportWorkflow($data = null)`

Create a new `SupportWorkflowEntity` instance. Pass `null` for no initial data.

#### `TaxonomySuggestion($data = null)`

Create a new `TaxonomySuggestionEntity` instance. Pass `null` for no initial data.

#### `TrustCard($data = null)`

Create a new `TrustCardEntity` instance. Pass `null` for no initial data.

#### `UnsaveBusiness($data = null)`

Create a new `UnsaveBusinessEntity` instance. Pass `null` for no initial data.

#### `UpdateAgentBillingAccount($data = null)`

Create a new `UpdateAgentBillingAccountEntity` instance. Pass `null` for no initial data.

#### `WithdrawJobApplication($data = null)`

Create a new `WithdrawJobApplicationEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): LoppeeBusinessUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## AgentAccessEntity

```php
$agent_access = $client->AgentAccess();
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
| `operating_states` | `array` | No |  |
| `organization_name` | `string` | Yes |  |
| `request_id` | `string` | Yes |  |
| `request_status` | `string` | Yes |  |
| `requested_actions` | `array` | No |  |
| `safety_contact` | `string` | No |  |
| `status` | `mixed` | Yes |  |
| `target_categories` | `array` | No |  |
| `use_case` | `string` | No |  |
| `website` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->AgentAccess()->create([
  "agent_name" => null, // string
  "developer_email" => null, // string
  "organization_name" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AgentAccessEntity`

Create a new `AgentAccessEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AgentCapabilityEntity

```php
$agent_capability = $client->AgentCapability();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_phone_location_bridge` | `array` | No |  |
| `agent_rules` | `array` | Yes |  |
| `discovery` | `array` | Yes |  |
| `external_agent_access` | `array` | Yes |  |
| `external_agent_webhooks` | `array` | Yes |  |
| `local_discovery_location_policy` | `array` | Yes |  |
| `location_choices` | `array` | No |  |
| `registry_name` | `mixed` | Yes |  |
| `schema_version` | `mixed` | Yes |  |
| `trust_model_version` | `mixed` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->AgentCapability()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AgentCapabilityEntity`

Create a new `AgentCapabilityEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AgentConnectionTestEntity

```php
$agent_connection_test = $client->AgentConnectionTest();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key` | `string` | No | Optional UI fallback. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->AgentConnectionTest()->create([
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AgentConnectionTestEntity`

Create a new `AgentConnectionTestEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AgentIntegrationEntity

```php
$agent_integration = $client->AgentIntegration();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_model` | `array` | Yes |  |
| `commercial_influence` | `array` | Yes |  |
| `developer_docs_url` | `string` | Yes |  |
| `exposure_tiers` | `array` | Yes |  |
| `external_agent_access` | `array` | Yes |  |
| `generated_at` | `string` | Yes |  |
| `http_api` | `array` | Yes |  |
| `legal` | `array` | Yes |  |
| `mcp` | `array` | Yes |  |
| `mcp_client_example_url` | `string` | Yes |  |
| `monitoring_url` | `string` | Yes |  |
| `openapi_url` | `string` | Yes |  |
| `openapi_v1_url` | `string` | Yes |  |
| `operational_rules` | `array` | Yes |  |
| `owner_agent_notifications` | `array` | Yes |  |
| `package_url` | `string` | Yes |  |
| `public_base_url` | `string` | Yes |  |
| `rate_limits` | `array` | Yes |  |
| `registry_name` | `mixed` | Yes |  |
| `schema_version` | `string` | Yes |  |
| `trust_card_contract` | `array` | Yes |  |
| `trust_doctrine` | `array` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->AgentIntegration()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AgentIntegrationEntity`

Create a new `AgentIntegrationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AgentMonitoringEntity

```php
$agent_monitoring = $client->AgentMonitoring();
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
| `metrics` | `array` | Yes |  |
| `openapi_url` | `string` | Yes |  |
| `rate_limits` | `array` | Yes |  |
| `registry_name` | `mixed` | Yes |  |
| `schema_version` | `string` | Yes |  |
| `service` | `string` | Yes |  |
| `uptime_seconds` | `float` | Yes |  |
| `version` | `string` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->AgentMonitoring()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AgentMonitoringEntity`

Create a new `AgentMonitoringEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AgentOpenapiEntity

```php
$agent_openapi = $client->AgentOpenapi();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `components` | `array` | Yes |  |
| `info` | `array` | Yes |  |
| `openapi` | `mixed` | Yes |  |
| `paths` | `array` | Yes |  |
| `servers` | `array` | Yes |  |
| `tags` | `array` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->AgentOpenapi()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AgentOpenapiEntity`

Create a new `AgentOpenapiEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AgentPolicyEntity

```php
$agent_policy = $client->AgentPolicy();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `external_agent_access` | `array` | Yes |  |
| `external_agent_webhooks` | `array` | Yes |  |
| `local_discovery_location_policy` | `array` | Yes |  |
| `location_handoff_flow` | `array` | No |  |
| `payment` | `array` | Yes |  |
| `publication` | `array` | Yes |  |
| `schema_version` | `mixed` | Yes |  |
| `trust_model_version` | `mixed` | Yes |  |
| `verification` | `array` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->AgentPolicy()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AgentPolicyEntity`

Create a new `AgentPolicyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AnonymousLocationProofRevocationEntity

```php
$anonymous_location_proof_revocation = $client->AnonymousLocationProofRevocation();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accuracy_meters` | `float` | Yes |  |
| `captured_at` | `string` | Yes |  |
| `latitude` | `float` | Yes |  |
| `longitude` | `float` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->AnonymousLocationProofRevocation()->create([
  "accuracy_meters" => null, // float
  "captured_at" => null, // string
  "latitude" => null, // float
  "longitude" => null, // float
]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and throws on error.

```php
$result = $client->AnonymousLocationProofRevocation()->remove(["location_proof_id" => "location_proof_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AnonymousLocationProofRevocationEntity`

Create a new `AnonymousLocationProofRevocationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BusinessApplicationEntity

```php
$business_application = $client->BusinessApplication();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `application` | `array` | Yes |  |
| `application_id` | `string` | Yes |  |
| `business_id` | `string` | Yes |  |
| `claim_id` | `mixed` | Yes |  |
| `created_at` | `string` | Yes |  |
| `existing_business` | `bool` | Yes |  |
| `files` | `array` | No |  |
| `listing_id` | `string` | No |  |
| `pipeline_status` | `string` | Yes |  |
| `status` | `mixed` | Yes |  |
| `trust_model_version` | `mixed` | Yes |  |
| `uploaded_files` | `float` | Yes |  |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->BusinessApplication()->create([
  "application" => null, // array
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BusinessApplicationEntity`

Create a new `BusinessApplicationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BusinessClaimEntity

```php
$business_claim = $client->BusinessClaim();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `business_id` | `mixed` | Yes |  |
| `category` | `string` | No |  |
| `city` | `string` | No |  |
| `claim_id` | `string` | Yes |  |
| `claim_status` | `string` | Yes |  |
| `claimant_email` | `string` | No | Legacy field; authenticated owner identity wins. |
| `claimant_name` | `string` | No | Legacy field; authenticated owner identity wins. |
| `claimant_relationship` | `string` | No |  |
| `created_at` | `string` | Yes |  |
| `directory_listing_id` | `mixed` | Yes |  |
| `display_name` | `string` | Yes |  |
| `listing_id` | `string` | No |  |
| `notes` | `string` | No |  |
| `phone` | `string` | No |  |
| `source` | `string` | No |  |
| `source_type` | `string` | No |  |
| `source_url` | `string` | No |  |
| `state` | `string` | No |  |
| `status` | `mixed` | Yes |  |
| `verification` | `array` | No |  |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->BusinessClaim()->create([
  "display_name" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BusinessClaimEntity`

Create a new `BusinessClaimEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BusinessDealEntity

```php
$business_deal = $client->BusinessDeal();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `discountLabel` | `string` | Yes |  |
| `endsAt` | `mixed` | Yes |  |
| `id` | `string` | Yes |  |
| `promoCode` | `mixed` | Yes |  |
| `startsAt` | `mixed` | Yes |  |
| `terms` | `mixed` | Yes |  |
| `title` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->BusinessDeal()->list(["id" => "example"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BusinessDealEntity`

Create a new `BusinessDealEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BusinessIndexEntity

```php
$business_index = $client->BusinessIndex();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `brand_assets` | `mixed` | No |  |
| `business_id` | `string` | Yes |  |
| `category` | `string` | Yes |  |
| `city` | `string` | Yes |  |
| `display_name` | `string` | Yes |  |
| `domain` | `mixed` | Yes |  |
| `insurance` | `array` | Yes |  |
| `phone` | `mixed` | Yes |  |
| `public_profile_url` | `string` | Yes |  |
| `review_reputation` | `array` | Yes |  |
| `state` | `string` | Yes |  |
| `street_address` | `mixed` | No | Owner-published street address where authorized. |
| `trust_card_url` | `string` | Yes |  |
| `trust_model_version` | `mixed` | Yes |  |
| `verification_class` | `string` | Yes |  |
| `verification_disclosure` | `string` | Yes |  |
| `website` | `mixed` | Yes |  |
| `zip` | `mixed` | No | Owner-published postal code where authorized. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->BusinessIndex()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BusinessIndexEntity`

Create a new `BusinessIndexEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BusinessOwnerEntity

```php
$business_owner = $client->BusinessOwner();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | Yes |  |
| `account_role` | `string` | Yes |  |
| `acknowledge_data_effects` | `bool` | Yes |  |
| `actions` | `array` | Yes |  |
| `allowed_actions` | `array` | Yes |  |
| `amount_cents` | `float` | Yes | Within the top-up limits (default $25 to $5,000). |
| `applicant_location_requirements` | `string` | No |  |
| `apply_url` | `mixed` | No |  |
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
| `campaign` | `array` | Yes |  |
| `campaign_id` | `string` | Yes |  |
| `carrier_name` | `string` | No |  |
| `category` | `string` | No |  |
| `category_alias` | `string` | No |  |
| `category_aliases` | `array` | Yes |  |
| `change` | `array` | Yes |  |
| `city` | `string` | No |  |
| `client_message_id` | `string` | Yes |  |
| `code` | `string` | Yes |  |
| `compensation_text` | `string` | No |  |
| `confirm` | `bool` | No |  |
| `confirmation` | `string` | Yes |  |
| `connection_kind` | `string` | Yes |  |
| `consent_sha256` | `string` | Yes | SHA-256 of the acceptance text shown (from payment-authorizations). |
| `contact_email` | `mixed` | No |  |
| `content_type` | `string` | Yes |  |
| `country` | `string` | No |  |
| `coupon_code` | `string` | No |  |
| `createdAt` | `mixed` | Yes |  |
| `created_at` | `string` | Yes |  |
| `credential_id` | `string` | Yes |  |
| `credential_identifier` | `string` | Yes |  |
| `data_base64` | `string` | Yes |  |
| `delivery_contract` | `array` | Yes |  |
| `description` | `mixed` | No |  |
| `direct_apply` | `bool` | No |  |
| `disabled_reason` | `mixed` | Yes |  |
| `discount_label` | `string` | No |  |
| `display_name` | `string` | Yes |  |
| `employment_type` | `string` | No |  |
| `enabled` | `bool` | Yes |  |
| `endpoint` | `array` | Yes |  |
| `endpoint_id` | `string` | Yes |  |
| `endpoint_url` | `string` | Yes |  |
| `ends_at` | `mixed` | No |  |
| `event_id` | `string` | Yes |  |
| `event_types` | `array` | Yes |  |
| `evidence_observed_at` | `string` | No |  |
| `expected_updated_at` | `string` | Yes |  |
| `experience_level` | `string` | No |  |
| `expires_at` | `string` | No |  |
| `factor_id` | `string` | No |  |
| `failure_count` | `int` | Yes |  |
| `file_name` | `string` | Yes |  |
| `file_sha256` | `string` | No |  |
| `full_name` | `string` | No |  |
| `guideHandoffAnsweredAt` | `mixed` | No |  |
| `guideHandoffAt` | `mixed` | No |  |
| `guideHandoffDueAt` | `mixed` | No |  |
| `hours` | `mixed` | No |  |
| `id` | `string` | Yes |  |
| `idempotency_key` | `string` | No |  |
| `installation_id` | `string` | Yes |  |
| `issuer` | `string` | Yes |  |
| `jurisdiction` | `string` | No |  |
| `kind` | `string` | Yes |  |
| `label` | `string` | No |  |
| `lastMessageAt` | `mixed` | Yes |  |
| `lastMessageAuthorType` | `string` | Yes |  |
| `lastMessagePreview` | `string` | Yes |  |
| `last_delivery_at` | `mixed` | Yes |  |
| `launch` | `bool` | No |  |
| `license_number` | `string` | Yes |  |
| `messages` | `array` | Yes |  |
| `messagesTruncated` | `bool` | Yes |  |
| `monthly_cap_cents` | `float` | No |  |
| `name` | `string` | Yes |  |
| `note` | `string` | No |  |
| `one_time_display` | `mixed` | Yes |  |
| `ownerEmail` | `string` | Yes |  |
| `ownerLastReadAt` | `mixed` | Yes |  |
| `ownerName` | `string` | Yes |  |
| `ownerUserId` | `string` | Yes |  |
| `period` | `string` | No |  |
| `phone` | `string` | No |  |
| `platform` | `string` | Yes |  |
| `policy_number` | `string` | No |  |
| `postal_code` | `string` | No |  |
| `promo_code` | `mixed` | No |  |
| `push_token` | `string` | Yes |  |
| `radius_miles` | `float` | Yes |  |
| `reason` | `string` | No |  |
| `reason_category` | `string` | No |  |
| `reason_detail` | `string` | No |  |
| `registered_at` | `string` | Yes |  |
| `request_id` | `string` | Yes | Client id of this confirmation (8-100 characters); reuse it only to retry the same confirmation. |
| `requested_at` | `string` | Yes |  |
| `salary_currency` | `string` | No |  |
| `salary_max` | `mixed` | No |  |
| `salary_min` | `mixed` | No |  |
| `salary_period` | `string` | No |  |
| `save_card` | `bool` | Yes |  |
| `save_card_consent_sha256` | `string` | No | Only with save_card true: SHA-256 of the save-card consent text shown. |
| `schedule` | `string` | No |  |
| `service_areas` | `string` | No |  |
| `signing_secret` | `string` | Yes |  |
| `size_bytes` | `float` | Yes |  |
| `skills` | `array` | No |  |
| `source_url` | `string` | No |  |
| `starts_at` | `mixed` | No |  |
| `state` | `string` | No |  |
| `stated_expires_at` | `string` | No |  |
| `status` | `string` | Yes |  |
| `street_address` | `string` | No |  |
| `subject` | `string` | Yes |  |
| `submitted_identifier` | `string` | No |  |
| `supportLastReadAt` | `mixed` | Yes |  |
| `terms` | `mixed` | No |  |
| `terms_version` | `string` | Yes | Must be the current Advertiser Terms version. |
| `threshold_cents` | `float` | No |  |
| `ticketNumber` | `string` | Yes |  |
| `tier` | `string` | Yes |  |
| `title` | `string` | No |  |
| `total_job_openings` | `mixed` | No |  |
| `typing` | `bool` | No |  |
| `updatedAt` | `mixed` | Yes |  |
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

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->BusinessOwner()->create([
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

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and throws on error.

```php
$result = $client->BusinessOwner()->update([
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BusinessOwnerEntity`

Create a new `BusinessOwnerEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BusinessReviewEntity

```php
$business_review = $client->BusinessReview();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->BusinessReview()->load(["id" => "business_review_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BusinessReviewEntity`

Create a new `BusinessReviewEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ChatAttachmentEntity

```php
$chat_attachment = $client->ChatAttachment();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `byteSize` | `int` | Yes |  |
| `content_type` | `mixed` | Yes |  |
| `data_base64` | `string` | Yes |  |
| `fileName` | `string` | Yes |  |
| `file_name` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `mediaType` | `string` | Yes |  |
| `size_bytes` | `int` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->ChatAttachment()->create([
  "conversation_id" => null, // string
  "content_type" => null, // mixed
  "data_base64" => null, // string
  "file_name" => null, // string
  "size_bytes" => null, // int
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ChatAttachmentEntity`

Create a new `ChatAttachmentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ChatAttachmentUrlEntity

```php
$chat_attachment_url = $client->ChatAttachmentUrl();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `byte_size` | `int` | Yes |  |
| `expires_in_seconds` | `mixed` | Yes |  |
| `file_name` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `media_type` | `string` | Yes |  |
| `signed_url` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->ChatAttachmentUrl()->create([
  "attachment_id" => null, // string
  "conversation_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ChatAttachmentUrlEntity`

Create a new `ChatAttachmentUrlEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ClaimVerificationSendEntity

```php
$claim_verification_send = $client->ClaimVerificationSend();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `challenge_id` | `string` | No | Opaque v3 SMS or owner-email challenge UUID. |
| `channel` | `mixed` | Yes |  |
| `claim_id` | `string` | Yes |  |
| `destination_hint` | `string` | No |  |
| `expires_in_seconds` | `float` | No |  |
| `provider_status` | `mixed` | No | V3 provider request state. |
| `recipient_delivery_confirmed` | `mixed` | No | V3 currently has no final-delivery provider event for this receipt. |
| `request_id` | `string` | No | Caller-generated idempotency UUID. |
| `status` | `mixed` | Yes |  |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->ClaimVerificationSend()->create([
  "claim_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ClaimVerificationSendEntity`

Create a new `ClaimVerificationSendEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ClaimVerificationVerifyEntity

```php
$claim_verification_verify = $client->ClaimVerificationVerify();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `business_id` | `mixed` | Yes |  |
| `challenge_id` | `string` | No | Exact challenge UUID returned by the v3 SMS or owner-email send. |
| `channel` | `mixed` | No |  |
| `claim_id` | `string` | Yes |  |
| `code` | `string` | Yes |  |
| `method` | `mixed` | No |  |
| `publication` | `array` | No |  |
| `status` | `mixed` | Yes |  |
| `transfer_review_required` | `mixed` | No |  |
| `trust_model_version` | `mixed` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->ClaimVerificationVerify()->create([
  "claim_id" => null, // string
  "code" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ClaimVerificationVerifyEntity`

Create a new `ClaimVerificationVerifyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CommercialClickEntity

```php
$commercial_click = $client->CommercialClick();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action_type` | `mixed` | Yes |  |
| `ad_receipt` | `string` | No | Opaque server-signed receipt of a served Sponsored ad, sent back unchanged with a profile, website or call tap. |
| `billable` | `bool` | Yes |  |
| `billing_event_id` | `mixed` | No |  |
| `billing_status` | `string` | Yes |  |
| `business_id` | `string` | No |  |
| `category` | `string` | No |  |
| `city` | `string` | No |  |
| `click_id` | `string` | Yes |  |
| `commercial_status` | `mixed` | No |  |
| `created_at` | `string` | Yes |  |
| `directory_listing_id` | `string` | No | Deprecated alias of listing_id. |
| `display_name` | `string` | No |  |
| `fallback_interaction_id` | `string` | No |  |
| `ledger_status` | `string` | Yes |  |
| `listing_id` | `string` | No |  |
| `metadata` | `array` | No |  |
| `migration_required` | `bool` | No |  |
| `page_path` | `string` | No |  |
| `referrer` | `string` | No |  |
| `source_type` | `mixed` | Yes |  |
| `state` | `string` | No |  |
| `status` | `mixed` | Yes |  |
| `storage` | `mixed` | Yes |  |
| `surface` | `mixed` | No | Where the Sponsored ad was shown (with ad_receipt). |
| `target_url` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->CommercialClick()->create([
  "action_type" => null, // mixed
  "source_type" => null, // mixed
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CommercialClickEntity`

Create a new `CommercialClickEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ContactRecordedEntity

```php
$contact_recorded = $client->ContactRecorded();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `business_id` | `string` | Yes |  |
| `contact_recorded` | `mixed` | Yes |  |
| `interaction_id` | `string` | Yes |  |
| `ok` | `mixed` | Yes |  |
| `policy` | `string` | Yes |  |
| `review_upgraded` | `mixed` | Yes |  |
| `status` | `mixed` | Yes |  |
| `trust_weight` | `mixed` | Yes |  |
| `verified` | `bool` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->ContactRecorded()->create([
  "business_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ContactRecordedEntity`

Create a new `ContactRecordedEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ConversationEntity

```php
$conversation = $client->Conversation();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | Yes |  |
| `conversation_id` | `string` | No | Exact conversation referenced by a webhook; returns zero or one scoped thread. |
| `conversations` | `array` | Yes |  |
| `count` | `float` | Yes |  |
| `cursor` | `string` | No | Opaque pagination cursor returned by the previous page. |
| `limit` | `float` | No |  |
| `pagination` | `array` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->Conversation()->create([
  "account_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ConversationEntity`

Create a new `ConversationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ConversationCloseEntity

```php
$conversation_close = $client->ConversationClose();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `closed_at` | `string` | Yes |  |
| `conversation_id` | `string` | Yes |  |
| `id` | `string` | No |  |
| `status` | `mixed` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->ConversationClose()->create([
  "id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ConversationCloseEntity`

Create a new `ConversationCloseEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ConversationReportEntity

```php
$conversation_report = $client->ConversationReport();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `detail` | `string` | No |  |
| `id` | `string` | No |  |
| `reason` | `mixed` | Yes |  |
| `status` | `mixed` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->ConversationReport()->create([
  "id" => null, // string
  "reason" => null, // mixed
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ConversationReportEntity`

Create a new `ConversationReportEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ConversationWorkflowEntity

```php
$conversation_workflow = $client->ConversationWorkflow();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `priority` | `mixed` | No |  |
| `status` | `mixed` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->ConversationWorkflow()->create([
  "message_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ConversationWorkflowEntity`

Create a new `ConversationWorkflowEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CreateAgentApiKeyEntity

```php
$create_agent_api_key = $client->CreateAgentApiKey();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | Yes |  |
| `allowed_actions` | `array` | No |  |
| `allowed_business_ids` | `array` | No |  |
| `created_by` | `string` | Yes |  |
| `key` | `array` | Yes |  |
| `label` | `string` | No |  |
| `monthly_quota` | `float` | No |  |
| `notes` | `string` | No |  |
| `one_time_display` | `mixed` | Yes |  |
| `rate_limit_per_minute` | `float` | No |  |
| `raw_key` | `string` | Yes |  |
| `status` | `mixed` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->CreateAgentApiKey()->create([
  "account_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CreateAgentApiKeyEntity`

Create a new `CreateAgentApiKeyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CustomerEntity

```php
$customer = $client->Customer();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_provider` | `string` | No |  |
| `avatar_url` | `mixed` | Yes | Short-lived signed display URL for a private avatar object, or null. |
| `city` | `mixed` | Yes |  |
| `created_at` | `mixed` | Yes |  |
| `email` | `string` | Yes |  |
| `full_name` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `phone` | `mixed` | Yes |  |
| `search_category` | `string` | No |  |
| `service_need` | `string` | No |  |
| `state` | `mixed` | Yes |  |
| `status` | `mixed` | Yes |  |
| `updated_at` | `mixed` | Yes |  |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->Customer()->create([
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CustomerEntity`

Create a new `CustomerEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CustomerAccountEntity

```php
$customer_account = $client->CustomerAccount();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | Yes |  |
| `account_role` | `string` | Yes |  |
| `accuracy_meters` | `float` | Yes |  |
| `acknowledge_data_effects` | `bool` | Yes |  |
| `actions` | `array` | Yes |  |
| `agent_key_id` | `string` | Yes |  |
| `agent_receives_coordinates` | `bool` | Yes |  |
| `all_paused` | `bool` | Yes |  |
| `app_attest_registered` | `bool` | Yes |  |
| `assertion` | `string` | Yes |  |
| `attestation` | `string` | Yes |  |
| `author_label` | `string` | Yes |  |
| `author_type` | `string` | Yes |  |
| `binding` | `mixed` | Yes |  |
| `body` | `string` | Yes |  |
| `business_id` | `mixed` | Yes |  |
| `capture_source` | `mixed` | Yes |  |
| `captured_at` | `string` | Yes |  |
| `challenge` | `string` | Yes |  |
| `challenge_id` | `string` | Yes |  |
| `client_message_id` | `string` | Yes |  |
| `completed` | `bool` | Yes |  |
| `confirmation` | `string` | Yes |  |
| `connection_id` | `string` | Yes |  |
| `connection_kind` | `string` | Yes |  |
| `continuation` | `mixed` | Yes | The continuation from the previous response, sent back unchanged to get the next results. |
| `coordinates_returned` | `bool` | Yes |  |
| `created_at` | `string` | Yes |  |
| `credential_id` | `string` | Yes |  |
| `declined` | `bool` | Yes |  |
| `delivery_contract` | `array` | Yes |  |
| `disabled_reason` | `mixed` | Yes |  |
| `disclosure` | `string` | Yes |  |
| `enabled` | `bool` | Yes |  |
| `endpoint` | `array` | Yes |  |
| `endpoint_id` | `string` | Yes |  |
| `endpoint_url` | `string` | Yes |  |
| `environment` | `string` | Yes |  |
| `event_id` | `string` | Yes |  |
| `event_types` | `array` | Yes |  |
| `failure_count` | `int` | Yes |  |
| `handoff_id` | `string` | Yes |  |
| `has_more` | `bool` | Yes |  |
| `id` | `string` | Yes |  |
| `idempotent_replay` | `bool` | Yes |  |
| `installation_id` | `string` | Yes |  |
| `key_id` | `string` | Yes |  |
| `last_delivery_at` | `mixed` | Yes |  |
| `latitude` | `float` | Yes |  |
| `location` | `mixed` | No | An opaque location reference from the website's own location controls. |
| `longitude` | `float` | Yes |  |
| `message_alerts_enabled` | `bool` | Yes |  |
| `messages` | `array` | Yes |  |
| `mode` | `string` | Yes | fallback: a direct search answered because the language model was unavailable. |
| `name` | `string` | No |  |
| `oauth_grant_id` | `mixed` | Yes |  |
| `one_time_display` | `mixed` | Yes |  |
| `platform` | `string` | Yes |  |
| `policy` | `string` | Yes |  |
| `purpose` | `string` | Yes |  |
| `push_token` | `string` | Yes |  |
| `reason` | `string` | Yes |  |
| `registered_at` | `string` | Yes |  |
| `reply` | `string` | Yes |  |
| `request_mode` | `string` | Yes |  |
| `requested_at` | `string` | Yes |  |
| `results` | `array` | Yes |  |
| `schema_version` | `string` | Yes |  |
| `selected_at` | `string` | Yes |  |
| `signed_in` | `bool` | Yes |  |
| `signing_secret` | `string` | Yes |  |
| `status` | `mixed` | Yes |  |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->CustomerAccount()->create([
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

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CustomerAccountEntity`

Create a new `CustomerAccountEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CustomerLocationProofRevocationEntity

```php
$customer_location_proof_revocation = $client->CustomerLocationProofRevocation();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accuracy_meters` | `float` | Yes |  |
| `captured_at` | `string` | Yes |  |
| `latitude` | `float` | Yes |  |
| `longitude` | `float` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->CustomerLocationProofRevocation()->create([
  "accuracy_meters" => null, // float
  "captured_at" => null, // string
  "latitude" => null, // float
  "longitude" => null, // float
]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and throws on error.

```php
$result = $client->CustomerLocationProofRevocation()->remove(["location_proof_id" => "location_proof_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CustomerLocationProofRevocationEntity`

Create a new `CustomerLocationProofRevocationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DestinationAddressSuggestionEntity

```php
$destination_address_suggestion = $client->DestinationAddressSuggestion();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `input` | `string` | Yes | Normalized partial US service-address text. |
| `suggestions` | `array` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->DestinationAddressSuggestion()->create([
  "input" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DestinationAddressSuggestionEntity`

Create a new `DestinationAddressSuggestionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DestinationLocationProofEntity

```php
$destination_location_proof = $client->DestinationLocationProof();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `string` | Yes | A real US service address. |
| `premise_proximity_confirmation_token` | `string` | No | Opaque one-time token from the immediately preceding premise-proximity challenge for the same address and authority. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->DestinationLocationProof()->create([
  "address" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DestinationLocationProofEntity`

Create a new `DestinationLocationProofEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DomainTrustCardEntity

```php
$domain_trust_card = $client->DomainTrustCard();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `business_id` | `string` | Yes |  |
| `domain` | `string` | Yes |  |
| `schema_version` | `mixed` | Yes |  |
| `trust_card` | `array` | Yes |  |
| `trust_card_url` | `string` | Yes |  |
| `trust_model_version` | `mixed` | Yes |  |
| `verification_class` | `mixed` | Yes |  |
| `verification_disclosure` | `string` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->DomainTrustCard()->load(["domain_key" => "domain_key"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DomainTrustCardEntity`

Create a new `DomainTrustCardEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GeoContextEntity

```php
$geo_context = $client->GeoContext();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->GeoContext()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GeoContextEntity`

Create a new `GeoContextEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## HealthEntity

```php
$health = $client->Health();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_phone_location_bridge` | `array` | Yes |  |
| `build_sha` | `string` | Yes |  |
| `business_review_access` | `array` | Yes |  |
| `contract_version` | `string` | Yes |  |
| `external_agent_webhooks` | `array` | Yes |  |
| `external_agent_webhooks_enabled` | `bool` | Yes |  |
| `ios_app_attest_anonymous_location` | `array` | Yes |  |
| `location_choices` | `array` | Yes |  |
| `location_handoff` | `array` | Yes |  |
| `mobile_push` | `mixed` | Yes |  |
| `ok` | `mixed` | Yes |  |
| `service` | `string` | Yes |  |
| `sponsored_ordering` | `array` | Yes |  |
| `trust_model_version` | `mixed` | Yes |  |
| `version` | `string` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->Health()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): HealthEntity`

Create a new `HealthEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## JobApplicationEntity

```php
$job_application = $client->JobApplication();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | Yes |  |
| `already_withdrawn` | `bool` | No |  |
| `application` | `array` | Yes |  |
| `applications` | `array` | Yes |  |
| `billing` | `array` | Yes |  |
| `business_id` | `string` | No |  |
| `count` | `float` | Yes |  |
| `cover_note` | `string` | No |  |
| `free_to_apply` | `bool` | No |  |
| `id` | `string` | No |  |
| `job_id` | `string` | Yes |  |
| `limit` | `float` | Yes |  |
| `offset` | `float` | Yes |  |
| `resume` | `array` | Yes |  |
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

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->JobApplication()->create([
  "job_id" => null, // string
  "resume" => null, // array
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): JobApplicationEntity`

Create a new `JobApplicationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## JobResumeSignedUrlEntity

```php
$job_resume_signed_url = $client->JobResumeSignedUrl();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `application_id` | `string` | Yes |  |
| `content_type` | `string` | Yes |  |
| `expires_in_seconds` | `float` | Yes |  |
| `resume_file_name` | `string` | Yes |  |
| `signed_url` | `string` | Yes |  |
| `size_bytes` | `float` | Yes |  |
| `status` | `mixed` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->JobResumeSignedUrl()->create([
  "job_application_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): JobResumeSignedUrlEntity`

Create a new `JobResumeSignedUrlEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LocationHandoffEntity

```php
$location_handoff = $client->LocationHandoff();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->LocationHandoff()->create([
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LocationHandoffEntity`

Create a new `LocationHandoffEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MessageEntity

```php
$message = $client->Message();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | Yes |  |
| `client_message_id` | `string` | Yes | Caller-stable retry key. |
| `conversation_id` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `delivery` | `mixed` | No |  |
| `idempotent_replay` | `bool` | Yes |  |
| `interaction_id` | `string` | Yes |  |
| `message` | `string` | Yes |  |
| `moderation_required` | `mixed` | No |  |
| `source_path` | `string` | No |  |
| `status` | `mixed` | Yes |  |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->Message()->create([
  "account_id" => null, // string
  "client_message_id" => null, // string
  "message" => null, // string
  "subject" => null, // string
  "target_business_id" => null, // string
  "target_business_name" => null, // string
  "target_business_source" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MessageEntity`

Create a new `MessageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ModeratedActionEntity

```php
$moderated_action = $client->ModeratedAction();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actions` | `array` | Yes |  |
| `body` | `string` | Yes |  |
| `client_request_id` | `string` | No |  |
| `content_type` | `string` | Yes |  |
| `continuation` | `mixed` | Yes | The continuation from the previous response, sent back unchanged to get the next results. |
| `coordinates_returned` | `bool` | Yes |  |
| `disclosure` | `string` | Yes |  |
| `enabled` | `bool` | Yes |  |
| `file_sha256` | `string` | Yes |  |
| `has_more` | `bool` | Yes |  |
| `human_confirmation` | `bool` | No |  |
| `intent_id` | `string` | Yes |  |
| `kind` | `string` | No |  |
| `knowledgeVersion` | `string` | Yes |  |
| `limits` | `array` | Yes |  |
| `links` | `array` | Yes |  |
| `location` | `array` | Yes | An opaque location reference from the website's own location controls. |
| `message` | `string` | No |  |
| `messages` | `array` | Yes |  |
| `mode` | `string` | Yes | fallback: a direct search answered because the language model was unavailable. |
| `name` | `string` | Yes |  |
| `needsHuman` | `bool` | Yes |  |
| `policy` | `array` | Yes | Human schedule and separate claim-review policy. |
| `question` | `string` | Yes |  |
| `reply` | `string` | Yes |  |
| `result` | `string` | Yes |  |
| `results` | `array` | Yes |  |
| `scan_authority_id` | `string` | Yes |  |
| `scanner` | `string` | Yes |  |
| `scanner_version` | `string` | Yes |  |
| `schema_version` | `string` | Yes |  |
| `searcher_latitude` | `float` | No |  |
| `searcher_longitude` | `float` | No |  |
| `signature` | `string` | No |  |
| `signed_in` | `bool` | Yes |  |
| `size_bytes` | `float` | Yes |  |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->ModeratedAction()->create([
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->ModeratedAction()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ModeratedActionEntity`

Create a new `ModeratedActionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OpenApiDocumentEntity

```php
$open_api_document = $client->OpenApiDocument();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `components` | `array` | Yes |  |
| `info` | `array` | Yes |  |
| `openapi` | `mixed` | Yes |  |
| `paths` | `array` | Yes |  |
| `servers` | `array` | Yes |  |
| `tags` | `array` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->OpenApiDocument()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OpenApiDocumentEntity`

Create a new `OpenApiDocumentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OperationEntity

```php
$operation = $client->Operation();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | Yes |  |
| `action` | `string` | Yes |  |
| `active` | `bool` | No |  |
| `active_or_good_standing` | `bool` | No |  |
| `ai_draft_id` | `string` | No |  |
| `allowed_actions` | `array` | Yes |  |
| `alt` | `string` | No |  |
| `amount_cents` | `float` | Yes | Whole cents, non-zero, at most 1,000,000 either way; a promotional credit is positive. |
| `amount_off_cents` | `float` | No |  |
| `api_key` | `string` | Yes |  |
| `applies_to_period` | `string` | No |  |
| `applies_to_tier` | `mixed` | No |  |
| `assigned_admin_user_id` | `mixed` | No |  |
| `assigneeId` | `string` | Yes |  |
| `assigneeLabel` | `string` | Yes |  |
| `assigneeType` | `string` | Yes |  |
| `assignee_id` | `string` | No |  |
| `assignee_label` | `string` | No |  |
| `assignee_type` | `string` | No | AI assignment is unavailable while the customer-support workload is disconnected. |
| `assistant_enabled` | `bool` | Yes |  |
| `base_url` | `string` | No |  |
| `body` | `string` | Yes |  |
| `businessId` | `string` | Yes |  |
| `businessName` | `string` | Yes |  |
| `business_id` | `mixed` | Yes |  |
| `business_ids` | `array` | Yes |  |
| `campaign_id` | `string` | No |  |
| `campaign_ids` | `array` | No |  |
| `caption` | `string` | No |  |
| `case_status` | `string` | No |  |
| `catalog` | `array` | Yes |  |
| `category` | `string` | No |  |
| `category_alias` | `string` | Yes |  |
| `chunk_size` | `float` | No |  |
| `city` | `string` | No |  |
| `code` | `string` | Yes |  |
| `confidence` | `float` | No |  |
| `config` | `array` | Yes | Complete validated pricing configuration. |
| `confirm` | `bool` | Yes |  |
| `confirm_admin` | `bool` | No |  |
| `confirmation` | `string` | Yes |  |
| `connection_id` | `string` | Yes |  |
| `connection_kind` | `string` | Yes |  |
| `content_type` | `string` | Yes |  |
| `context_id` | `string` | Yes |  |
| `context_type` | `string` | Yes |  |
| `createdAt` | `mixed` | Yes |  |
| `created_at` | `string` | Yes |  |
| `credential_expires_at` | `string` | No | Expiration date printed on the license. |
| `credential_id` | `string` | Yes |  |
| `custom_wire` | `string` | No |  |
| `data_base64` | `string` | Yes |  |
| `decision` | `string` | Yes |  |
| `dedupe_ack` | `bool` | No |  |
| `delivery_contract` | `array` | Yes |  |
| `disabled_reason` | `mixed` | Yes |  |
| `discount_type` | `string` | Yes |  |
| `display_name` | `string` | Yes |  |
| `disposition` | `string` | Yes |  |
| `draft` | `array` | Yes |  |
| `duration` | `string` | No |  |
| `duration_in_months` | `mixed` | No |  |
| `email` | `string` | Yes |  |
| `enabled` | `bool` | Yes |  |
| `endpoint` | `array` | Yes |  |
| `endpoint_id` | `string` | Yes |  |
| `endpoint_url` | `string` | Yes |  |
| `ends_at` | `string` | Yes |  |
| `environment_fallback` | `mixed` | Yes |  |
| `event_id` | `string` | Yes |  |
| `event_types` | `array` | Yes |  |
| `expected_allowed_actions` | `array` | Yes |  |
| `expected_key_id` | `string` | Yes |  |
| `expected_updated_at` | `string` | Yes |  |
| `expected_version` | `float` | Yes |  |
| `expires_at` | `string` | No | Promotional credit only: ISO date-time 1 hour to 2 years ahead, disclosed to the owner. |
| `fact_id` | `string` | Yes |  |
| `facts` | `array` | Yes |  |
| `failure_count` | `int` | Yes |  |
| `fields` | `array` | Yes | Validated fields for this fixed content-block type. |
| `file_name` | `string` | Yes |  |
| `guideHandoffAnsweredAt` | `mixed` | No |  |
| `guideHandoffAt` | `mixed` | No |  |
| `guideHandoffDueAt` | `mixed` | No |  |
| `height` | `float` | No |  |
| `historic_association_checked` | `bool` | Yes |  |
| `hold` | `string` | Yes |  |
| `holder_name_match` | `bool` | No |  |
| `hours` | `array` | Yes |  |
| `id` | `string` | Yes |  |
| `idempotency_key` | `string` | No |  |
| `identifier_match` | `bool` | No |  |
| `in_use` | `array` | Yes |  |
| `instruction` | `string` | No |  |
| `invited` | `bool` | Yes |  |
| `key_check` | `mixed` | Yes |  |
| `kind` | `string` | Yes |  |
| `label` | `string` | Yes |  |
| `lastMessageAt` | `mixed` | Yes |  |
| `lastMessageAuthorType` | `string` | Yes |  |
| `lastMessagePreview` | `string` | Yes |  |
| `last_delivery_at` | `mixed` | Yes |  |
| `last_error_code` | `mixed` | Yes |  |
| `last_probe_at` | `mixed` | Yes |  |
| `last_problem` | `mixed` | Yes |  |
| `legal_name` | `string` | No |  |
| `limit` | `float` | No |  |
| `make_active` | `bool` | Yes |  |
| `max_cents` | `float` | Yes |  |
| `max_redemptions` | `mixed` | No |  |
| `messages` | `array` | Yes |  |
| `messagesTruncated` | `bool` | Yes |  |
| `min_cents` | `float` | Yes |  |
| `model` | `string` | Yes |  |
| `model_id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `note` | `string` | No |  |
| `notes` | `string` | No |  |
| `observed_at` | `string` | No |  |
| `one_time_display` | `mixed` | Yes |  |
| `outcome` | `string` | Yes |  |
| `ownerEmail` | `string` | Yes |  |
| `ownerLastReadAt` | `mixed` | Yes |  |
| `ownerName` | `string` | Yes |  |
| `ownerUserId` | `string` | Yes |  |
| `owner_reason_code` | `string` | No | Controlled owner-visible rejection reason. |
| `per_customer_limit` | `float` | No |  |
| `percent_off` | `float` | No |  |
| `phone` | `string` | No |  |
| `policyVersion` | `string` | Yes |  |
| `priority` | `string` | No |  |
| `provider` | `string` | Yes |  |
| `providers` | `array` | Yes |  |
| `purpose_code` | `string` | Yes |  |
| `rank_bid_cents` | `int` | Yes |  |
| `reason` | `string` | Yes |  |
| `reason_category` | `string` | No |  |
| `reason_code` | `string` | No |  |
| `reason_detail` | `string` | No |  |
| `reference` | `string` | Yes |  |
| `reject_reason` | `string` | No |  |
| `related_case_id` | `string` | No |  |
| `report_id` | `int` | Yes |  |
| `report_ids` | `array` | Yes |  |
| `reserve_cents` | `float` | Yes | 100-10000; never below $1.00. |
| `resolution_note` | `string` | Yes |  |
| `review_notes` | `string` | No |  |
| `revision` | `int` | Yes |  |
| `role` | `string` | Yes |  |
| `rows` | `array` | Yes |  |
| `run` | `array` | Yes |  |
| `schema_version` | `string` | Yes |  |
| `scope` | `string` | Yes |  |
| `search` | `string` | No |  |
| `settings` | `array` | Yes |  |
| `signing_secret` | `string` | Yes |  |
| `size_bytes` | `float` | Yes |  |
| `sla_due_at` | `mixed` | No |  |
| `source` | `string` | Yes |  |
| `source_authority` | `string` | No | Exact official authority name. |
| `source_category_slug` | `string` | Yes |  |
| `source_scope_checked` | `bool` | Yes |  |
| `source_url` | `string` | No | Exact HTTPS official source URL. |
| `starts_at` | `mixed` | No |  |
| `state` | `string` | No | Bulk by area: every ad of the advertisers in this two-letter U.S. |
| `status` | `string` | Yes |  |
| `storage` | `string` | Yes |  |
| `street_address` | `string` | No |  |
| `subject` | `string` | Yes |  |
| `supportLastReadAt` | `mixed` | Yes |  |
| `target_category` | `string` | Yes |  |
| `taxonomy_category_aliases` | `array` | Yes |  |
| `ticketNumber` | `string` | Yes |  |
| `tier` | `string` | No |  |
| `typing` | `bool` | No |  |
| `until` | `string` | No |  |
| `updatedAt` | `mixed` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes | Public HTTPS receiver operated by the connecting principal or its agent runtime. |
| `valid_until` | `string` | No |  |
| `value` | `string` | Yes |  |
| `verification_method` | `string` | Yes |  |
| `verified_at` | `mixed` | Yes |  |
| `verified_service_scope` | `array` | No |  |
| `version` | `string` | No |  |
| `website` | `string` | No |  |
| `width` | `float` | No |  |
| `window_hours` | `float` | No | 1-744, default 48. |
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

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->Operation()->create([
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

#### `patch(array $reqdata, ?array $ctrl = null): mixed`

Change part of an existing entity: only the fields given are sent. The data must include the entity `id`. Returns the patched entity and throws on error.

```php
$result = $client->Operation()->patch([
  "candidate_id" => "candidate_id",
  // Only the fields to change
]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and throws on error.

```php
$result = $client->Operation()->remove(["access_context_id" => "access_context_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and throws on error.

```php
$result = $client->Operation()->update([
  "provider" => "provider",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OperationEntity`

Create a new `OperationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OwnerNotificationEntity

```php
$owner_notification = $client->OwnerNotification();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `businessId` | `string` | Yes |  |
| `createdAt` | `string` | Yes |  |
| `dedupeKey` | `string` | Yes |  |
| `emailStatus` | `string` | Yes |  |
| `eventType` | `mixed` | Yes |  |
| `id` | `string` | Yes |  |
| `readAt` | `mixed` | Yes |  |
| `resourceId` | `string` | Yes |  |
| `resourceKind` | `mixed` | Yes |  |
| `resourceUrl` | `string` | Yes |  |
| `summary` | `string` | Yes |  |
| `webhookStatus` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->OwnerNotification()->create([
  "notification_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OwnerNotificationEntity`

Create a new `OwnerNotificationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OwnerNotificationSettingEntity

```php
$owner_notification_setting = $client->OwnerNotificationSetting();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `businessId` | `string` | Yes |  |
| `business_id` | `string` | No |  |
| `createdAt` | `string` | Yes |  |
| `emailEnabled` | `bool` | Yes |  |
| `email_enabled` | `bool` | No |  |
| `eventTypeSubscriptions` | `array` | Yes |  |
| `event_types` | `array` | No |  |
| `updatedAt` | `string` | Yes |  |
| `webhookEnabled` | `bool` | Yes |  |
| `webhook_enabled` | `bool` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->OwnerNotificationSetting()->create([
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OwnerNotificationSettingEntity`

Create a new `OwnerNotificationSettingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OwnerWebhookEndpointEntity

```php
$owner_webhook_endpoint = $client->OwnerWebhookEndpoint();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `businessId` | `string` | Yes |  |
| `createdAt` | `string` | Yes |  |
| `enabled` | `bool` | Yes |  |
| `eventTypeSubscriptions` | `array` | Yes |  |
| `failureCount` | `float` | Yes |  |
| `id` | `string` | Yes |  |
| `lastDeliveryAt` | `mixed` | Yes |  |
| `updatedAt` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->OwnerWebhookEndpoint()->create([
  "webhook_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OwnerWebhookEndpointEntity`

Create a new `OwnerWebhookEndpointEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OwnerWebhookRegistrationEntity

```php
$owner_webhook_registration = $client->OwnerWebhookRegistration();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `business_id` | `string` | No |  |
| `endpoint` | `array` | Yes |  |
| `event_types` | `array` | No |  |
| `one_time_display` | `mixed` | Yes |  |
| `signing_secret` | `string` | Yes |  |
| `status` | `mixed` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->OwnerWebhookRegistration()->create([
  "url" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OwnerWebhookRegistrationEntity`

Create a new `OwnerWebhookRegistrationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PricingEntity

```php
$pricing = $client->Pricing();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `billing` | `array` | Yes |  |
| `branch_add_ons` | `array` | Yes |  |
| `currency` | `mixed` | Yes |  |
| `generated_at` | `string` | Yes |  |
| `neutrality` | `string` | Yes |  |
| `plans` | `array` | Yes |  |
| `promotions` | `array` | Yes |  |
| `published_at` | `mixed` | Yes |  |
| `radius_extension` | `array` | Yes |  |
| `revision_id` | `mixed` | Yes |  |
| `source` | `mixed` | Yes |  |
| `trust_model_version` | `mixed` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->Pricing()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PricingEntity`

Create a new `PricingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PromoteVerifiedTransactionEntity

```php
$promote_verified_transaction = $client->PromoteVerifiedTransaction();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `business_id` | `string` | Yes |  |
| `evidence_id` | `string` | Yes |  |
| `interaction_id` | `string` | Yes |  |
| `ok` | `mixed` | Yes |  |
| `review_upgraded` | `bool` | Yes |  |
| `status` | `mixed` | Yes |  |
| `trust_weight` | `mixed` | Yes |  |
| `verified` | `bool` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->PromoteVerifiedTransaction()->create([
  "business_id" => null, // string
  "evidence_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PromoteVerifiedTransactionEntity`

Create a new `PromoteVerifiedTransactionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PublicContentEntity

```php
$public_content = $client->PublicContent();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `blocks` | `array` | Yes |  |
| `generated_at` | `string` | Yes |  |
| `source` | `mixed` | Yes |  |
| `trust_model_version` | `mixed` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->PublicContent()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PublicContentEntity`

Create a new `PublicContentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RecommendEntity

```php
$recommend = $client->Recommend();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `candidate_window_truncated` | `bool` | Yes | True when Loppee's bounded candidate assembly reached its safety cap. |
| `commercial_influence` | `string` | Yes | Must be none whenever current-location or saved_exact authority is absent, including universal exact/genuine-prefix name lookup. |
| `display_count` | `int` | No | Agent-key responses: the number of businesses in this response. |
| `endpoint` | `mixed` | Yes |  |
| `fallback_registry` | `array` | Yes |  |
| `generated_at` | `string` | Yes |  |
| `has_more` | `bool` | Yes | True only when next_cursor can continue through the current bounded, deterministic candidate window. |
| `listed` | `array` | Yes |  |
| `location_context` | `mixed` | Yes | Local category discovery and recommendations require a current precise location proof or handoff, a user-confirmed validated destination authority, or a saved_exact Home location. |
| `ordering` | `mixed` | Yes |  |
| `policy` | `string` | Yes |  |
| `presentation_guidance` | `string` | No | Agent-key responses: how to present these results to the customer. |
| `query` | `array` | Yes |  |
| `ranking_policy` | `string` | Yes |  |
| `registry_count_basis` | `string` | Yes |  |
| `registry_count_observed_at` | `mixed` | Yes |  |
| `registry_name` | `mixed` | Yes |  |
| `results` | `array` | Yes |  |
| `returned_count` | `int` | Yes |  |
| `reviewed_registry` | `array` | Yes |  |
| `schema_version` | `mixed` | Yes |  |
| `search_intent` | `array` | Yes |  |
| `suggestions` | `array` | No |  |
| `total_matches` | `int` | No | Web and app responses. |
| `total_matches_basis` | `int` | No |  |
| `total_registry_records` | `int` | Yes |  |
| `trust_model_version` | `mixed` | Yes |  |
| `verified` | `array` | Yes |  |
| `visible_candidate_records` | `int` | No | Web and app responses. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->Recommend()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RecommendEntity`

Create a new `RecommendEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ReviewEntity

```php
$review = $client->Review();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | Yes |  |
| `attestation_accepted` | `bool` | Yes | Set true only after the customer confirms this describes their own experience and explicitly approves publishing the displayed business, star rating, title, and full review. |
| `customer_confirmed` | `bool` | No | Set true to confirm you were a customer of this business. |
| `message` | `string` | Yes |  |
| `rating` | `int` | Yes |  |
| `service_date` | `mixed` | No | Optional real, non-future service date in YYYY-MM-DD format; empty means not provided. |
| `subject` | `string` | Yes |  |
| `target_business_id` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->Review()->create([
  "account_id" => null, // string
  "attestation_accepted" => null, // bool
  "message" => null, // string
  "rating" => null, // int
  "subject" => null, // string
  "target_business_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ReviewEntity`

Create a new `ReviewEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RevokeEntity

```php
$revoke = $client->Revoke();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | Yes |  |
| `key_id` | `string` | Yes |  |
| `revoked_by` | `string` | Yes |  |
| `status` | `mixed` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->Revoke()->create([
  "agent_key_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RevokeEntity`

Create a new `RevokeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SaveBusinessEntity

```php
$save_business = $client->SaveBusiness();
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
| `status` | `mixed` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->SaveBusiness()->create([
  "account_id" => null, // string
  "business_id" => null, // string
  "business_name" => null, // string
  "business_source" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SaveBusinessEntity`

Create a new `SaveBusinessEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SavedBusinessEntity

```php
$saved_business = $client->SavedBusiness();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | Yes |  |
| `count` | `float` | Yes |  |
| `limit` | `float` | No |  |
| `saved_businesses` | `array` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->SavedBusiness()->create([
  "account_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SavedBusinessEntity`

Create a new `SavedBusinessEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SavedLocationEntity

```php
$saved_location = $client->SavedLocation();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `available` | `bool` | Yes |  |
| `coordinates_returned` | `mixed` | Yes |  |
| `kind` | `mixed` | Yes | Only saved_exact is precise local-discovery authority. |
| `label` | `mixed` | Yes |  |
| `location_proof_id` | `string` | No |  |
| `reach_precision` | `mixed` | Yes | Exact can authorize local category/recommendation reach; coarse cannot activate local results, Sponsored placement, or impressions. |
| `saved_location_ref` | `mixed` | Yes |  |
| `updated_at` | `mixed` | Yes |  |
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

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and throws on error.

```php
$result = $client->SavedLocation()->remove();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and throws on error.

```php
$result = $client->SavedLocation()->update([
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SavedLocationEntity`

Create a new `SavedLocationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SearchEntity

```php
$search = $client->Search();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `candidate_window_truncated` | `bool` | Yes | True when Loppee's bounded candidate assembly reached its safety cap. |
| `commercial_influence` | `string` | Yes | Must be none whenever current-location or saved_exact authority is absent, including universal exact/genuine-prefix name lookup. |
| `display_count` | `int` | No | Agent-key responses: the number of businesses in this response. |
| `generated_at` | `string` | Yes |  |
| `has_more` | `bool` | Yes | True only when next_cursor can continue through the current bounded, deterministic candidate window. |
| `location_context` | `mixed` | Yes | Local category discovery and recommendations require a current precise location proof or handoff, a user-confirmed validated destination authority, or a saved_exact Home location. |
| `next_cursor` | `mixed` | Yes |  |
| `page_limit` | `int` | Yes |  |
| `policy` | `string` | Yes |  |
| `presentation_guidance` | `string` | No | Agent-key responses: how to present these results to the customer. |
| `query` | `array` | Yes |  |
| `ranking_policy` | `string` | Yes |  |
| `registry_count_basis` | `string` | Yes |  |
| `registry_count_observed_at` | `mixed` | Yes |  |
| `registry_name` | `mixed` | Yes |  |
| `results` | `array` | Yes |  |
| `returned_count` | `int` | Yes |  |
| `schema_version` | `mixed` | Yes |  |
| `search_intent` | `array` | Yes |  |
| `suggestions` | `array` | No |  |
| `total_matches` | `int` | No | Web and app responses. |
| `total_matches_basis` | `int` | No |  |
| `total_registry_records` | `int` | Yes |  |
| `trust_model_version` | `mixed` | Yes |  |
| `visible_candidate_records` | `int` | No | Web and app responses. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->Search()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SearchEntity`

Create a new `SearchEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SuggestEntity

```php
$suggest = $client->Suggest();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `categories` | `array` | Yes |  |
| `names` | `array` | Yes |  |
| `query` | `string` | Yes |  |
| `schema_version` | `mixed` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->Suggest()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SuggestEntity`

Create a new `SuggestEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SupportInternalNoteEntity

```php
$support_internal_note = $client->SupportInternalNote();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authorLabel` | `string` | Yes |  |
| `body` | `string` | Yes |  |
| `createdAt` | `mixed` | Yes |  |
| `id` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->SupportInternalNote()->create([
  "id" => null, // string
  "body" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SupportInternalNoteEntity`

Create a new `SupportInternalNoteEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SupportWorkflowEntity

```php
$support_workflow = $client->SupportWorkflow();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `mixed` | No |  |
| `id` | `string` | No |  |
| `priority` | `mixed` | No |  |
| `waiting_on` | `mixed` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->SupportWorkflow()->create([
  "id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SupportWorkflowEntity`

Create a new `SupportWorkflowEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TaxonomySuggestionEntity

```php
$taxonomy_suggestion = $client->TaxonomySuggestion();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alias` | `string` | Yes |  |
| `path_titles` | `array` | Yes |  |
| `title` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->TaxonomySuggestion()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TaxonomySuggestionEntity`

Create a new `TaxonomySuggestionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TrustCardEntity

```php
$trust_card = $client->TrustCard();
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
| `record_number` | `mixed` | Yes |  |
| `record_scope` | `string` | Yes |  |
| `record_type` | `string` | Yes |  |
| `recorded_expiry` | `mixed` | Yes |  |
| `result` | `string` | Yes |  |
| `source_label` | `string` | Yes |  |
| `source_url` | `string` | Yes |  |
| `state` | `string` | Yes |  |
| `status_on_record` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->TrustCard()->create([
  "business_id" => null, // string
  "license_record_id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->TrustCard()->list(["business_id" => "example"]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->TrustCard()->load(["schema_name" => "schema_name"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TrustCardEntity`

Create a new `TrustCardEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UnsaveBusinessEntity

```php
$unsave_business = $client->UnsaveBusiness();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | Yes |  |
| `business_id` | `string` | Yes |  |
| `removed` | `bool` | Yes |  |
| `status` | `mixed` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->UnsaveBusiness()->create([
  "account_id" => null, // string
  "business_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UnsaveBusinessEntity`

Create a new `UnsaveBusinessEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UpdateAgentBillingAccountEntity

```php
$update_agent_billing_account = $client->UpdateAgentBillingAccount();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | Yes |  |
| `billing_account` | `array` | Yes |  |
| `billing_status` | `string` | No |  |
| `included_actions` | `float` | No |  |
| `monthly_fee_cents` | `float` | No |  |
| `overage_cents` | `float` | No |  |
| `plan` | `string` | No |  |
| `status` | `mixed` | Yes |  |
| `updated_by` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->UpdateAgentBillingAccount()->create([
  "account_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UpdateAgentBillingAccountEntity`

Create a new `UpdateAgentBillingAccountEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WithdrawJobApplicationEntity

```php
$withdraw_job_application = $client->WithdrawJobApplication();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | Yes |  |
| `already_withdrawn` | `bool` | Yes |  |
| `application` | `array` | Yes |  |
| `application_id` | `string` | Yes |  |
| `status` | `mixed` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->WithdrawJobApplication()->create([
  "account_id" => null, // string
  "application_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WithdrawJobApplicationEntity`

Create a new `WithdrawJobApplicationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `ratelimit` | 0.0.1 | Rate limiting |
| `retry` | 0.0.1 | Retry |
| `test` | 0.0.1 | Test transport |
| `timeout` | 0.0.1 | Timeout |


Features are activated via the `feature` option:

```php
$client = new LoppeeBusinessSDK([
  "feature" => [
    "ratelimit" => ["active" => true],
    "retry" => ["active" => true],
    "test" => ["active" => true],
    "timeout" => ["active" => true],
  ],
]);
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

