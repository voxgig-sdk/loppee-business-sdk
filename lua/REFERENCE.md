# LoppeeBusiness Lua SDK Reference

Complete API reference for the LoppeeBusiness Lua SDK.


## LoppeeBusinessSDK

### Constructor

```lua
local sdk = require("loppee-business_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `AgentAccess(data)`

Create a new `AgentAccess` entity instance. Pass `nil` for no initial data.

#### `AgentCapability(data)`

Create a new `AgentCapability` entity instance. Pass `nil` for no initial data.

#### `AgentConnectionTest(data)`

Create a new `AgentConnectionTest` entity instance. Pass `nil` for no initial data.

#### `AgentIntegration(data)`

Create a new `AgentIntegration` entity instance. Pass `nil` for no initial data.

#### `AgentMonitoring(data)`

Create a new `AgentMonitoring` entity instance. Pass `nil` for no initial data.

#### `AgentOpenapi(data)`

Create a new `AgentOpenapi` entity instance. Pass `nil` for no initial data.

#### `AgentPolicy(data)`

Create a new `AgentPolicy` entity instance. Pass `nil` for no initial data.

#### `AnonymousLocationProofRevocation(data)`

Create a new `AnonymousLocationProofRevocation` entity instance. Pass `nil` for no initial data.

#### `BusinessApplication(data)`

Create a new `BusinessApplication` entity instance. Pass `nil` for no initial data.

#### `BusinessClaim(data)`

Create a new `BusinessClaim` entity instance. Pass `nil` for no initial data.

#### `BusinessDeal(data)`

Create a new `BusinessDeal` entity instance. Pass `nil` for no initial data.

#### `BusinessIndex(data)`

Create a new `BusinessIndex` entity instance. Pass `nil` for no initial data.

#### `BusinessOwner(data)`

Create a new `BusinessOwner` entity instance. Pass `nil` for no initial data.

#### `BusinessReview(data)`

Create a new `BusinessReview` entity instance. Pass `nil` for no initial data.

#### `ChatAttachment(data)`

Create a new `ChatAttachment` entity instance. Pass `nil` for no initial data.

#### `ChatAttachmentUrl(data)`

Create a new `ChatAttachmentUrl` entity instance. Pass `nil` for no initial data.

#### `ClaimVerificationSend(data)`

Create a new `ClaimVerificationSend` entity instance. Pass `nil` for no initial data.

#### `ClaimVerificationVerify(data)`

Create a new `ClaimVerificationVerify` entity instance. Pass `nil` for no initial data.

#### `CommercialClick(data)`

Create a new `CommercialClick` entity instance. Pass `nil` for no initial data.

#### `ContactRecorded(data)`

Create a new `ContactRecorded` entity instance. Pass `nil` for no initial data.

#### `Conversation(data)`

Create a new `Conversation` entity instance. Pass `nil` for no initial data.

#### `ConversationClose(data)`

Create a new `ConversationClose` entity instance. Pass `nil` for no initial data.

#### `ConversationReport(data)`

Create a new `ConversationReport` entity instance. Pass `nil` for no initial data.

#### `ConversationWorkflow(data)`

Create a new `ConversationWorkflow` entity instance. Pass `nil` for no initial data.

#### `CreateAgentApiKey(data)`

Create a new `CreateAgentApiKey` entity instance. Pass `nil` for no initial data.

#### `Customer(data)`

Create a new `Customer` entity instance. Pass `nil` for no initial data.

#### `CustomerAccount(data)`

Create a new `CustomerAccount` entity instance. Pass `nil` for no initial data.

#### `CustomerLocationProofRevocation(data)`

Create a new `CustomerLocationProofRevocation` entity instance. Pass `nil` for no initial data.

#### `DestinationAddressSuggestion(data)`

Create a new `DestinationAddressSuggestion` entity instance. Pass `nil` for no initial data.

#### `DestinationLocationProof(data)`

Create a new `DestinationLocationProof` entity instance. Pass `nil` for no initial data.

#### `DomainTrustCard(data)`

Create a new `DomainTrustCard` entity instance. Pass `nil` for no initial data.

#### `GeoContext(data)`

Create a new `GeoContext` entity instance. Pass `nil` for no initial data.

#### `Health(data)`

Create a new `Health` entity instance. Pass `nil` for no initial data.

#### `JobApplication(data)`

Create a new `JobApplication` entity instance. Pass `nil` for no initial data.

#### `JobResumeSignedUrl(data)`

Create a new `JobResumeSignedUrl` entity instance. Pass `nil` for no initial data.

#### `LocationHandoff(data)`

Create a new `LocationHandoff` entity instance. Pass `nil` for no initial data.

#### `Message(data)`

Create a new `Message` entity instance. Pass `nil` for no initial data.

#### `ModeratedAction(data)`

Create a new `ModeratedAction` entity instance. Pass `nil` for no initial data.

#### `OpenApiDocument(data)`

Create a new `OpenApiDocument` entity instance. Pass `nil` for no initial data.

#### `Operation(data)`

Create a new `Operation` entity instance. Pass `nil` for no initial data.

#### `OwnerNotification(data)`

Create a new `OwnerNotification` entity instance. Pass `nil` for no initial data.

#### `OwnerNotificationSetting(data)`

Create a new `OwnerNotificationSetting` entity instance. Pass `nil` for no initial data.

#### `OwnerWebhookEndpoint(data)`

Create a new `OwnerWebhookEndpoint` entity instance. Pass `nil` for no initial data.

#### `OwnerWebhookRegistration(data)`

Create a new `OwnerWebhookRegistration` entity instance. Pass `nil` for no initial data.

#### `Pricing(data)`

Create a new `Pricing` entity instance. Pass `nil` for no initial data.

#### `PromoteVerifiedTransaction(data)`

Create a new `PromoteVerifiedTransaction` entity instance. Pass `nil` for no initial data.

#### `PublicContent(data)`

Create a new `PublicContent` entity instance. Pass `nil` for no initial data.

#### `Recommend(data)`

Create a new `Recommend` entity instance. Pass `nil` for no initial data.

#### `Review(data)`

Create a new `Review` entity instance. Pass `nil` for no initial data.

#### `Revoke(data)`

Create a new `Revoke` entity instance. Pass `nil` for no initial data.

#### `SaveBusiness(data)`

Create a new `SaveBusiness` entity instance. Pass `nil` for no initial data.

#### `SavedBusiness(data)`

Create a new `SavedBusiness` entity instance. Pass `nil` for no initial data.

#### `SavedLocation(data)`

Create a new `SavedLocation` entity instance. Pass `nil` for no initial data.

#### `Search(data)`

Create a new `Search` entity instance. Pass `nil` for no initial data.

#### `Suggest(data)`

Create a new `Suggest` entity instance. Pass `nil` for no initial data.

#### `SupportInternalNote(data)`

Create a new `SupportInternalNote` entity instance. Pass `nil` for no initial data.

#### `SupportWorkflow(data)`

Create a new `SupportWorkflow` entity instance. Pass `nil` for no initial data.

#### `TaxonomySuggestion(data)`

Create a new `TaxonomySuggestion` entity instance. Pass `nil` for no initial data.

#### `TrustCard(data)`

Create a new `TrustCard` entity instance. Pass `nil` for no initial data.

#### `UnsaveBusiness(data)`

Create a new `UnsaveBusiness` entity instance. Pass `nil` for no initial data.

#### `UpdateAgentBillingAccount(data)`

Create a new `UpdateAgentBillingAccount` entity instance. Pass `nil` for no initial data.

#### `WithdrawJobApplication(data)`

Create a new `WithdrawJobApplication` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## AgentAccessEntity

```lua
local agent_access = client:AgentAccess(nil)
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
| `operating_states` | `table` | No |  |
| `organization_name` | `string` | Yes |  |
| `request_id` | `string` | Yes |  |
| `request_status` | `string` | Yes |  |
| `requested_actions` | `table` | No |  |
| `safety_contact` | `string` | No |  |
| `status` | `any` | Yes |  |
| `target_categories` | `table` | No |  |
| `use_case` | `string` | No |  |
| `website` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:AgentAccess():create({
  agent_name = --[[ string ]],
  developer_email = --[[ string ]],
  organization_name = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentAccessEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AgentCapabilityEntity

```lua
local agent_capability = client:AgentCapability(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_phone_location_bridge` | `table` | No |  |
| `agent_rules` | `table` | Yes |  |
| `discovery` | `table` | Yes |  |
| `external_agent_access` | `table` | Yes |  |
| `external_agent_webhooks` | `table` | Yes |  |
| `local_discovery_location_policy` | `table` | Yes |  |
| `location_choices` | `table` | No |  |
| `registry_name` | `any` | Yes |  |
| `schema_version` | `any` | Yes |  |
| `trust_model_version` | `any` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:AgentCapability():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentCapabilityEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AgentConnectionTestEntity

```lua
local agent_connection_test = client:AgentConnectionTest(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key` | `string` | No | Optional UI fallback. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:AgentConnectionTest():create({
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentConnectionTestEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AgentIntegrationEntity

```lua
local agent_integration = client:AgentIntegration(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_model` | `table` | Yes |  |
| `commercial_influence` | `table` | Yes |  |
| `developer_docs_url` | `string` | Yes |  |
| `exposure_tiers` | `table` | Yes |  |
| `external_agent_access` | `table` | Yes |  |
| `generated_at` | `string` | Yes |  |
| `http_api` | `table` | Yes |  |
| `legal` | `table` | Yes |  |
| `mcp` | `table` | Yes |  |
| `mcp_client_example_url` | `string` | Yes |  |
| `monitoring_url` | `string` | Yes |  |
| `openapi_url` | `string` | Yes |  |
| `openapi_v1_url` | `string` | Yes |  |
| `operational_rules` | `table` | Yes |  |
| `owner_agent_notifications` | `table` | Yes |  |
| `package_url` | `string` | Yes |  |
| `public_base_url` | `string` | Yes |  |
| `rate_limits` | `table` | Yes |  |
| `registry_name` | `any` | Yes |  |
| `schema_version` | `string` | Yes |  |
| `trust_card_contract` | `table` | Yes |  |
| `trust_doctrine` | `table` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:AgentIntegration():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentIntegrationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AgentMonitoringEntity

```lua
local agent_monitoring = client:AgentMonitoring(nil)
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
| `metrics` | `table` | Yes |  |
| `openapi_url` | `string` | Yes |  |
| `rate_limits` | `table` | Yes |  |
| `registry_name` | `any` | Yes |  |
| `schema_version` | `string` | Yes |  |
| `service` | `string` | Yes |  |
| `uptime_seconds` | `number` | Yes |  |
| `version` | `string` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:AgentMonitoring():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentMonitoringEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AgentOpenapiEntity

```lua
local agent_openapi = client:AgentOpenapi(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `components` | `table` | Yes |  |
| `info` | `table` | Yes |  |
| `openapi` | `any` | Yes |  |
| `paths` | `table` | Yes |  |
| `servers` | `table` | Yes |  |
| `tags` | `table` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:AgentOpenapi():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentOpenapiEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AgentPolicyEntity

```lua
local agent_policy = client:AgentPolicy(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `external_agent_access` | `table` | Yes |  |
| `external_agent_webhooks` | `table` | Yes |  |
| `local_discovery_location_policy` | `table` | Yes |  |
| `location_handoff_flow` | `table` | No |  |
| `payment` | `table` | Yes |  |
| `publication` | `table` | Yes |  |
| `schema_version` | `any` | Yes |  |
| `trust_model_version` | `any` | Yes |  |
| `verification` | `table` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:AgentPolicy():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentPolicyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AnonymousLocationProofRevocationEntity

```lua
local anonymous_location_proof_revocation = client:AnonymousLocationProofRevocation(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accuracy_meters` | `number` | Yes |  |
| `captured_at` | `string` | Yes |  |
| `latitude` | `number` | Yes |  |
| `longitude` | `number` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:AnonymousLocationProofRevocation():create({
  accuracy_meters = --[[ number ]],
  captured_at = --[[ string ]],
  latitude = --[[ number ]],
  longitude = --[[ number ]],
})
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, or `nil` and an error on failure.

```lua
local result, err = client:AnonymousLocationProofRevocation():remove({ location_proof_id = "location_proof_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AnonymousLocationProofRevocationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BusinessApplicationEntity

```lua
local business_application = client:BusinessApplication(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `application` | `table` | Yes |  |
| `application_id` | `string` | Yes |  |
| `business_id` | `string` | Yes |  |
| `claim_id` | `string|nil` | Yes |  |
| `created_at` | `string` | Yes |  |
| `existing_business` | `boolean` | Yes |  |
| `files` | `table` | No |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:BusinessApplication():create({
  application = --[[ table ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BusinessApplicationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BusinessClaimEntity

```lua
local business_claim = client:BusinessClaim(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `business_id` | `string|nil` | Yes |  |
| `category` | `string` | No |  |
| `city` | `string` | No |  |
| `claim_id` | `string` | Yes |  |
| `claim_status` | `string` | Yes |  |
| `claimant_email` | `string` | No | Legacy field; authenticated owner identity wins. |
| `claimant_name` | `string` | No | Legacy field; authenticated owner identity wins. |
| `claimant_relationship` | `string` | No |  |
| `created_at` | `string` | Yes |  |
| `directory_listing_id` | `string|nil` | Yes |  |
| `display_name` | `string` | Yes |  |
| `listing_id` | `string` | No |  |
| `notes` | `string` | No |  |
| `phone` | `string` | No |  |
| `source` | `string` | No |  |
| `source_type` | `string` | No |  |
| `source_url` | `string` | No |  |
| `state` | `string` | No |  |
| `status` | `any` | Yes |  |
| `verification` | `table` | No |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:BusinessClaim():create({
  display_name = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BusinessClaimEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BusinessDealEntity

```lua
local business_deal = client:BusinessDeal(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `discountLabel` | `string` | Yes |  |
| `endsAt` | `string|nil` | Yes |  |
| `id` | `string` | Yes |  |
| `promoCode` | `string|nil` | Yes |  |
| `startsAt` | `string|nil` | Yes |  |
| `terms` | `string|nil` | Yes |  |
| `title` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:BusinessDeal():list({ id = "example" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BusinessDealEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BusinessIndexEntity

```lua
local business_index = client:BusinessIndex(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `brand_assets` | `any` | No |  |
| `business_id` | `string` | Yes |  |
| `category` | `string` | Yes |  |
| `city` | `string` | Yes |  |
| `display_name` | `string` | Yes |  |
| `domain` | `string|nil` | Yes |  |
| `insurance` | `table` | Yes |  |
| `phone` | `string|nil` | Yes |  |
| `public_profile_url` | `string` | Yes |  |
| `review_reputation` | `table` | Yes |  |
| `state` | `string` | Yes |  |
| `street_address` | `string|nil` | No | Owner-published street address where authorized. |
| `trust_card_url` | `string` | Yes |  |
| `trust_model_version` | `any` | Yes |  |
| `verification_class` | `string` | Yes |  |
| `verification_disclosure` | `string` | Yes |  |
| `website` | `string|nil` | Yes |  |
| `zip` | `string|nil` | No | Owner-published postal code where authorized. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:BusinessIndex():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BusinessIndexEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BusinessOwnerEntity

```lua
local business_owner = client:BusinessOwner(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | Yes |  |
| `account_role` | `string` | Yes |  |
| `acknowledge_data_effects` | `boolean` | Yes |  |
| `actions` | `table` | Yes |  |
| `allowed_actions` | `table` | Yes |  |
| `amount_cents` | `number` | Yes | Within the top-up limits (default $25 to $5,000). |
| `applicant_location_requirements` | `string` | No |  |
| `apply_url` | `string|nil` | No |  |
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
| `campaign` | `table` | Yes |  |
| `campaign_id` | `string` | Yes |  |
| `carrier_name` | `string` | No |  |
| `category` | `string` | No |  |
| `category_alias` | `string` | No |  |
| `category_aliases` | `table` | Yes |  |
| `change` | `table` | Yes |  |
| `city` | `string` | No |  |
| `client_message_id` | `string` | Yes |  |
| `code` | `string` | Yes |  |
| `compensation_text` | `string` | No |  |
| `confirm` | `boolean` | No |  |
| `confirmation` | `string` | Yes |  |
| `connection_kind` | `string` | Yes |  |
| `consent_sha256` | `string` | Yes | SHA-256 of the acceptance text shown (from payment-authorizations). |
| `contact_email` | `string|nil` | No |  |
| `content_type` | `string` | Yes |  |
| `country` | `string` | No |  |
| `coupon_code` | `string` | No |  |
| `createdAt` | `string|nil` | Yes |  |
| `created_at` | `string` | Yes |  |
| `credential_id` | `string` | Yes |  |
| `credential_identifier` | `string` | Yes |  |
| `data_base64` | `string` | Yes |  |
| `delivery_contract` | `table` | Yes |  |
| `description` | `string|nil` | No |  |
| `direct_apply` | `boolean` | No |  |
| `disabled_reason` | `string|nil` | Yes |  |
| `discount_label` | `string` | No |  |
| `display_name` | `string` | Yes |  |
| `employment_type` | `string` | No |  |
| `enabled` | `boolean` | Yes |  |
| `endpoint` | `table` | Yes |  |
| `endpoint_id` | `string` | Yes |  |
| `endpoint_url` | `string` | Yes |  |
| `ends_at` | `string|nil` | No |  |
| `event_id` | `string` | Yes |  |
| `event_types` | `table` | Yes |  |
| `evidence_observed_at` | `string` | No |  |
| `expected_updated_at` | `string` | Yes |  |
| `experience_level` | `string` | No |  |
| `expires_at` | `string` | No |  |
| `factor_id` | `string` | No |  |
| `failure_count` | `number` | Yes |  |
| `file_name` | `string` | Yes |  |
| `file_sha256` | `string` | No |  |
| `full_name` | `string` | No |  |
| `guideHandoffAnsweredAt` | `string|nil` | No |  |
| `guideHandoffAt` | `string|nil` | No |  |
| `guideHandoffDueAt` | `string|nil` | No |  |
| `hours` | `table|nil` | No |  |
| `id` | `string` | Yes |  |
| `idempotency_key` | `string` | No |  |
| `installation_id` | `string` | Yes |  |
| `issuer` | `string` | Yes |  |
| `jurisdiction` | `string` | No |  |
| `kind` | `string` | Yes |  |
| `label` | `string` | No |  |
| `lastMessageAt` | `string|nil` | Yes |  |
| `lastMessageAuthorType` | `string` | Yes |  |
| `lastMessagePreview` | `string` | Yes |  |
| `last_delivery_at` | `string|nil` | Yes |  |
| `launch` | `boolean` | No |  |
| `license_number` | `string` | Yes |  |
| `messages` | `table` | Yes |  |
| `messagesTruncated` | `boolean` | Yes |  |
| `monthly_cap_cents` | `number` | No |  |
| `name` | `string` | Yes |  |
| `note` | `string` | No |  |
| `one_time_display` | `any` | Yes |  |
| `ownerEmail` | `string` | Yes |  |
| `ownerLastReadAt` | `string|nil` | Yes |  |
| `ownerName` | `string` | Yes |  |
| `ownerUserId` | `string` | Yes |  |
| `period` | `string` | No |  |
| `phone` | `string` | No |  |
| `platform` | `string` | Yes |  |
| `policy_number` | `string` | No |  |
| `postal_code` | `string` | No |  |
| `promo_code` | `string|nil` | No |  |
| `push_token` | `string` | Yes |  |
| `radius_miles` | `number` | Yes |  |
| `reason` | `string` | No |  |
| `reason_category` | `string` | No |  |
| `reason_detail` | `string` | No |  |
| `registered_at` | `string` | Yes |  |
| `request_id` | `string` | Yes | Client id of this confirmation (8-100 characters); reuse it only to retry the same confirmation. |
| `requested_at` | `string` | Yes |  |
| `salary_currency` | `string` | No |  |
| `salary_max` | `number|nil` | No |  |
| `salary_min` | `number|nil` | No |  |
| `salary_period` | `string` | No |  |
| `save_card` | `boolean` | Yes |  |
| `save_card_consent_sha256` | `string` | No | Only with save_card true: SHA-256 of the save-card consent text shown. |
| `schedule` | `string` | No |  |
| `service_areas` | `string` | No |  |
| `signing_secret` | `string` | Yes |  |
| `size_bytes` | `number` | Yes |  |
| `skills` | `table` | No |  |
| `source_url` | `string` | No |  |
| `starts_at` | `string|nil` | No |  |
| `state` | `string` | No |  |
| `stated_expires_at` | `string` | No |  |
| `status` | `string` | Yes |  |
| `street_address` | `string` | No |  |
| `subject` | `string` | Yes |  |
| `submitted_identifier` | `string` | No |  |
| `supportLastReadAt` | `string|nil` | Yes |  |
| `terms` | `string|nil` | No |  |
| `terms_version` | `string` | Yes | Must be the current Advertiser Terms version. |
| `threshold_cents` | `number` | No |  |
| `ticketNumber` | `string` | Yes |  |
| `tier` | `string` | Yes |  |
| `title` | `string` | No |  |
| `total_job_openings` | `number|nil` | No |  |
| `typing` | `boolean` | No |  |
| `updatedAt` | `string|nil` | Yes |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:BusinessOwner():create({
  deal_id = --[[ string ]],
  account_id = --[[ string ]],
  account_role = --[[ string ]],
  acknowledge_data_effects = --[[ boolean ]],
  actions = --[[ table ]],
  allowed_actions = --[[ table ]],
  amount_cents = --[[ number ]],
  asset_id = --[[ string ]],
  assigneeId = --[[ string ]],
  assigneeLabel = --[[ string ]],
  assigneeType = --[[ string ]],
  attempt_id = --[[ string ]],
  body = --[[ string ]],
  businessId = --[[ string ]],
  businessName = --[[ string ]],
  campaign = --[[ table ]],
  campaign_id = --[[ string ]],
  category_aliases = --[[ table ]],
  change = --[[ table ]],
  city = --[[ string ]],
  client_message_id = --[[ string ]],
  code = --[[ string ]],
  confirmation = --[[ string ]],
  connection_kind = --[[ string ]],
  consent_sha256 = --[[ string ]],
  content_type = --[[ string ]],
  createdAt = --[[ string|nil ]],
  created_at = --[[ string ]],
  credential_id = --[[ string ]],
  credential_identifier = --[[ string ]],
  data_base64 = --[[ string ]],
  delivery_contract = --[[ table ]],
  disabled_reason = --[[ string|nil ]],
  discount_label = --[[ string ]],
  display_name = --[[ string ]],
  enabled = --[[ boolean ]],
  endpoint = --[[ table ]],
  endpoint_id = --[[ string ]],
  endpoint_url = --[[ string ]],
  event_id = --[[ string ]],
  event_types = --[[ table ]],
  expected_updated_at = --[[ string ]],
  factor_id = --[[ string ]],
  failure_count = --[[ number ]],
  file_name = --[[ string ]],
  file_sha256 = --[[ string ]],
  id = --[[ string ]],
  installation_id = --[[ string ]],
  issuer = --[[ string ]],
  kind = --[[ string ]],
  lastMessageAt = --[[ string|nil ]],
  lastMessageAuthorType = --[[ string ]],
  lastMessagePreview = --[[ string ]],
  last_delivery_at = --[[ string|nil ]],
  license_number = --[[ string ]],
  messages = --[[ table ]],
  messagesTruncated = --[[ boolean ]],
  name = --[[ string ]],
  one_time_display = --[[ any ]],
  ownerEmail = --[[ string ]],
  ownerLastReadAt = --[[ string|nil ]],
  ownerName = --[[ string ]],
  ownerUserId = --[[ string ]],
  phone = --[[ string ]],
  platform = --[[ string ]],
  push_token = --[[ string ]],
  radius_miles = --[[ number ]],
  reason = --[[ string ]],
  registered_at = --[[ string ]],
  request_id = --[[ string ]],
  requested_at = --[[ string ]],
  save_card = --[[ boolean ]],
  signing_secret = --[[ string ]],
  size_bytes = --[[ number ]],
  state = --[[ string ]],
  street_address = --[[ string ]],
  supportLastReadAt = --[[ string|nil ]],
  terms_version = --[[ string ]],
  ticketNumber = --[[ string ]],
  tier = --[[ string ]],
  title = --[[ string ]],
  updatedAt = --[[ string|nil ]],
  updated_at = --[[ string ]],
  url = --[[ string ]],
  website = --[[ string ]],
})
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`. Returns the updated entity, or `nil` and an error on failure.

```lua
local result, err = client:BusinessOwner():update({
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BusinessOwnerEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BusinessReviewEntity

```lua
local business_review = client:BusinessReview(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:BusinessReview():load({ id = "business_review_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BusinessReviewEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ChatAttachmentEntity

```lua
local chat_attachment = client:ChatAttachment(nil)
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:ChatAttachment():create({
  conversation_id = --[[ string ]],
  content_type = --[[ any ]],
  data_base64 = --[[ string ]],
  file_name = --[[ string ]],
  size_bytes = --[[ number ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ChatAttachmentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ChatAttachmentUrlEntity

```lua
local chat_attachment_url = client:ChatAttachmentUrl(nil)
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:ChatAttachmentUrl():create({
  attachment_id = --[[ string ]],
  conversation_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ChatAttachmentUrlEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ClaimVerificationSendEntity

```lua
local claim_verification_send = client:ClaimVerificationSend(nil)
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:ClaimVerificationSend():create({
  claim_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ClaimVerificationSendEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ClaimVerificationVerifyEntity

```lua
local claim_verification_verify = client:ClaimVerificationVerify(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `business_id` | `string|nil` | Yes |  |
| `challenge_id` | `string` | No | Exact challenge UUID returned by the v3 SMS or owner-email send. |
| `channel` | `any` | No |  |
| `claim_id` | `string` | Yes |  |
| `code` | `string` | Yes |  |
| `method` | `any` | No |  |
| `publication` | `table` | No |  |
| `status` | `any` | Yes |  |
| `transfer_review_required` | `any` | No |  |
| `trust_model_version` | `any` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:ClaimVerificationVerify():create({
  claim_id = --[[ string ]],
  code = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ClaimVerificationVerifyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CommercialClickEntity

```lua
local commercial_click = client:CommercialClick(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action_type` | `any` | Yes |  |
| `ad_receipt` | `string` | No | Opaque server-signed receipt of a served Sponsored ad, sent back unchanged with a profile, website or call tap. |
| `billable` | `boolean` | Yes |  |
| `billing_event_id` | `string|nil` | No |  |
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
| `metadata` | `table` | No |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:CommercialClick():create({
  action_type = --[[ any ]],
  source_type = --[[ any ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CommercialClickEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ContactRecordedEntity

```lua
local contact_recorded = client:ContactRecorded(nil)
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:ContactRecorded():create({
  business_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ContactRecordedEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ConversationEntity

```lua
local conversation = client:Conversation(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | Yes |  |
| `conversation_id` | `string` | No | Exact conversation referenced by a webhook; returns zero or one scoped thread. |
| `conversations` | `table` | Yes |  |
| `count` | `number` | Yes |  |
| `cursor` | `string` | No | Opaque pagination cursor returned by the previous page. |
| `limit` | `number` | No |  |
| `pagination` | `table` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:Conversation():create({
  account_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ConversationCloseEntity

```lua
local conversation_close = client:ConversationClose(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `closed_at` | `string` | Yes |  |
| `conversation_id` | `string` | Yes |  |
| `id` | `string` | No |  |
| `status` | `any` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:ConversationClose():create({
  id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationCloseEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ConversationReportEntity

```lua
local conversation_report = client:ConversationReport(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `detail` | `string` | No |  |
| `id` | `string` | No |  |
| `reason` | `any` | Yes |  |
| `status` | `any` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:ConversationReport():create({
  id = --[[ string ]],
  reason = --[[ any ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationReportEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ConversationWorkflowEntity

```lua
local conversation_workflow = client:ConversationWorkflow(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `priority` | `any` | No |  |
| `status` | `any` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:ConversationWorkflow():create({
  message_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationWorkflowEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CreateAgentApiKeyEntity

```lua
local create_agent_api_key = client:CreateAgentApiKey(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | Yes |  |
| `allowed_actions` | `table` | No |  |
| `allowed_business_ids` | `table` | No |  |
| `created_by` | `string` | Yes |  |
| `key` | `table` | Yes |  |
| `label` | `string` | No |  |
| `monthly_quota` | `number` | No |  |
| `notes` | `string` | No |  |
| `one_time_display` | `any` | Yes |  |
| `rate_limit_per_minute` | `number` | No |  |
| `raw_key` | `string` | Yes |  |
| `status` | `any` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:CreateAgentApiKey():create({
  account_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreateAgentApiKeyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CustomerEntity

```lua
local customer = client:Customer(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_provider` | `string` | No |  |
| `avatar_url` | `string|nil` | Yes | Short-lived signed display URL for a private avatar object, or null. |
| `city` | `string|nil` | Yes |  |
| `created_at` | `string|nil` | Yes |  |
| `email` | `string` | Yes |  |
| `full_name` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `phone` | `string|nil` | Yes |  |
| `search_category` | `string` | No |  |
| `service_need` | `string` | No |  |
| `state` | `string|nil` | Yes |  |
| `status` | `any` | Yes |  |
| `updated_at` | `string|nil` | Yes |  |

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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:Customer():create({
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomerEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CustomerAccountEntity

```lua
local customer_account = client:CustomerAccount(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | Yes |  |
| `account_role` | `string` | Yes |  |
| `accuracy_meters` | `number` | Yes |  |
| `acknowledge_data_effects` | `boolean` | Yes |  |
| `actions` | `table` | Yes |  |
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
| `business_id` | `string|nil` | Yes |  |
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
| `delivery_contract` | `table` | Yes |  |
| `disabled_reason` | `string|nil` | Yes |  |
| `disclosure` | `string` | Yes |  |
| `enabled` | `boolean` | Yes |  |
| `endpoint` | `table` | Yes |  |
| `endpoint_id` | `string` | Yes |  |
| `endpoint_url` | `string` | Yes |  |
| `environment` | `string` | Yes |  |
| `event_id` | `string` | Yes |  |
| `event_types` | `table` | Yes |  |
| `failure_count` | `number` | Yes |  |
| `handoff_id` | `string` | Yes |  |
| `has_more` | `boolean` | Yes |  |
| `id` | `string` | Yes |  |
| `idempotent_replay` | `boolean` | Yes |  |
| `installation_id` | `string` | Yes |  |
| `key_id` | `string` | Yes |  |
| `last_delivery_at` | `string|nil` | Yes |  |
| `latitude` | `number` | Yes |  |
| `location` | `any` | No | An opaque location reference from the website's own location controls. |
| `longitude` | `number` | Yes |  |
| `message_alerts_enabled` | `boolean` | Yes |  |
| `messages` | `table` | Yes |  |
| `mode` | `string` | Yes | fallback: a direct search answered because the language model was unavailable. |
| `name` | `string` | No |  |
| `oauth_grant_id` | `string|nil` | Yes |  |
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
| `results` | `table` | Yes |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:CustomerAccount():create({
  account_id = --[[ string ]],
  account_role = --[[ string ]],
  accuracy_meters = --[[ number ]],
  acknowledge_data_effects = --[[ boolean ]],
  actions = --[[ table ]],
  agent_key_id = --[[ string ]],
  agent_receives_coordinates = --[[ boolean ]],
  all_paused = --[[ boolean ]],
  app_attest_registered = --[[ boolean ]],
  assertion = --[[ string ]],
  attestation = --[[ string ]],
  author_label = --[[ string ]],
  author_type = --[[ string ]],
  binding = --[[ any ]],
  body = --[[ string ]],
  business_id = --[[ string|nil ]],
  capture_source = --[[ any ]],
  captured_at = --[[ string ]],
  challenge = --[[ string ]],
  challenge_id = --[[ string ]],
  client_message_id = --[[ string ]],
  completed = --[[ boolean ]],
  confirmation = --[[ string ]],
  connection_id = --[[ string ]],
  connection_kind = --[[ string ]],
  coordinates_returned = --[[ boolean ]],
  created_at = --[[ string ]],
  credential_id = --[[ string ]],
  declined = --[[ boolean ]],
  delivery_contract = --[[ table ]],
  disabled_reason = --[[ string|nil ]],
  disclosure = --[[ string ]],
  enabled = --[[ boolean ]],
  endpoint = --[[ table ]],
  endpoint_id = --[[ string ]],
  endpoint_url = --[[ string ]],
  environment = --[[ string ]],
  event_id = --[[ string ]],
  event_types = --[[ table ]],
  failure_count = --[[ number ]],
  handoff_id = --[[ string ]],
  has_more = --[[ boolean ]],
  id = --[[ string ]],
  idempotent_replay = --[[ boolean ]],
  installation_id = --[[ string ]],
  key_id = --[[ string ]],
  last_delivery_at = --[[ string|nil ]],
  latitude = --[[ number ]],
  longitude = --[[ number ]],
  message_alerts_enabled = --[[ boolean ]],
  messages = --[[ table ]],
  mode = --[[ string ]],
  oauth_grant_id = --[[ string|nil ]],
  one_time_display = --[[ any ]],
  platform = --[[ string ]],
  policy = --[[ string ]],
  purpose = --[[ string ]],
  push_token = --[[ string ]],
  registered_at = --[[ string ]],
  reply = --[[ string ]],
  request_mode = --[[ string ]],
  requested_at = --[[ string ]],
  results = --[[ table ]],
  schema_version = --[[ string ]],
  selected_at = --[[ string ]],
  signed_in = --[[ boolean ]],
  signing_secret = --[[ string ]],
  status = --[[ any ]],
  updated_at = --[[ string ]],
  url = --[[ string ]],
  usable_until = --[[ string ]],
  use_mode = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomerAccountEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CustomerLocationProofRevocationEntity

```lua
local customer_location_proof_revocation = client:CustomerLocationProofRevocation(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accuracy_meters` | `number` | Yes |  |
| `captured_at` | `string` | Yes |  |
| `latitude` | `number` | Yes |  |
| `longitude` | `number` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:CustomerLocationProofRevocation():create({
  accuracy_meters = --[[ number ]],
  captured_at = --[[ string ]],
  latitude = --[[ number ]],
  longitude = --[[ number ]],
})
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, or `nil` and an error on failure.

```lua
local result, err = client:CustomerLocationProofRevocation():remove({ location_proof_id = "location_proof_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomerLocationProofRevocationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DestinationAddressSuggestionEntity

```lua
local destination_address_suggestion = client:DestinationAddressSuggestion(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `input` | `string` | Yes | Normalized partial US service-address text. |
| `suggestions` | `table` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:DestinationAddressSuggestion():create({
  input = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DestinationAddressSuggestionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DestinationLocationProofEntity

```lua
local destination_location_proof = client:DestinationLocationProof(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `string` | Yes | A real US service address. |
| `premise_proximity_confirmation_token` | `string` | No | Opaque one-time token from the immediately preceding premise-proximity challenge for the same address and authority. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:DestinationLocationProof():create({
  address = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DestinationLocationProofEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DomainTrustCardEntity

```lua
local domain_trust_card = client:DomainTrustCard(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `business_id` | `string` | Yes |  |
| `domain` | `string` | Yes |  |
| `schema_version` | `any` | Yes |  |
| `trust_card` | `table` | Yes |  |
| `trust_card_url` | `string` | Yes |  |
| `trust_model_version` | `any` | Yes |  |
| `verification_class` | `any` | Yes |  |
| `verification_disclosure` | `string` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:DomainTrustCard():load({ domain_key = "domain_key" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DomainTrustCardEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GeoContextEntity

```lua
local geo_context = client:GeoContext(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:GeoContext():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GeoContextEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## HealthEntity

```lua
local health = client:Health(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_phone_location_bridge` | `table` | Yes |  |
| `build_sha` | `string` | Yes |  |
| `business_review_access` | `table` | Yes |  |
| `contract_version` | `string` | Yes |  |
| `external_agent_webhooks` | `table` | Yes |  |
| `external_agent_webhooks_enabled` | `boolean` | Yes |  |
| `ios_app_attest_anonymous_location` | `table` | Yes |  |
| `location_choices` | `table` | Yes |  |
| `location_handoff` | `table` | Yes |  |
| `mobile_push` | `any` | Yes |  |
| `ok` | `any` | Yes |  |
| `service` | `string` | Yes |  |
| `sponsored_ordering` | `table` | Yes |  |
| `trust_model_version` | `any` | Yes |  |
| `version` | `string` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:Health():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `HealthEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## JobApplicationEntity

```lua
local job_application = client:JobApplication(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | Yes |  |
| `already_withdrawn` | `boolean` | No |  |
| `application` | `table` | Yes |  |
| `applications` | `table` | Yes |  |
| `billing` | `table` | Yes |  |
| `business_id` | `string` | No |  |
| `count` | `number` | Yes |  |
| `cover_note` | `string` | No |  |
| `free_to_apply` | `boolean` | No |  |
| `id` | `string` | No |  |
| `job_id` | `string` | Yes |  |
| `limit` | `number` | Yes |  |
| `offset` | `number` | Yes |  |
| `resume` | `table` | Yes |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:JobApplication():create({
  job_id = --[[ string ]],
  resume = --[[ table ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `JobApplicationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## JobResumeSignedUrlEntity

```lua
local job_resume_signed_url = client:JobResumeSignedUrl(nil)
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:JobResumeSignedUrl():create({
  job_application_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `JobResumeSignedUrlEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LocationHandoffEntity

```lua
local location_handoff = client:LocationHandoff(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:LocationHandoff():create({
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LocationHandoffEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MessageEntity

```lua
local message = client:Message(nil)
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:Message():create({
  account_id = --[[ string ]],
  client_message_id = --[[ string ]],
  message = --[[ string ]],
  subject = --[[ string ]],
  target_business_id = --[[ string ]],
  target_business_name = --[[ string ]],
  target_business_source = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MessageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ModeratedActionEntity

```lua
local moderated_action = client:ModeratedAction(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actions` | `table` | Yes |  |
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
| `limits` | `table` | Yes |  |
| `links` | `table` | Yes |  |
| `location` | `table` | Yes | An opaque location reference from the website's own location controls. |
| `message` | `string` | No |  |
| `messages` | `table` | Yes |  |
| `mode` | `string` | Yes | fallback: a direct search answered because the language model was unavailable. |
| `name` | `string` | Yes |  |
| `needsHuman` | `boolean` | Yes |  |
| `policy` | `table` | Yes | Human schedule and separate claim-review policy. |
| `question` | `string` | Yes |  |
| `reply` | `string` | Yes |  |
| `result` | `string` | Yes |  |
| `results` | `table` | Yes |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:ModeratedAction():create({
  content_type = --[[ string ]],
  file_sha256 = --[[ string ]],
  intent_id = --[[ string ]],
  messages = --[[ table ]],
  question = --[[ string ]],
  result = --[[ string ]],
  scan_authority_id = --[[ string ]],
  scanner = --[[ string ]],
  scanner_version = --[[ string ]],
  size_bytes = --[[ number ]],
  target_business_id = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:ModeratedAction():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ModeratedActionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OpenApiDocumentEntity

```lua
local open_api_document = client:OpenApiDocument(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `components` | `table` | Yes |  |
| `info` | `table` | Yes |  |
| `openapi` | `any` | Yes |  |
| `paths` | `table` | Yes |  |
| `servers` | `table` | Yes |  |
| `tags` | `table` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:OpenApiDocument():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OpenApiDocumentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OperationEntity

```lua
local operation = client:Operation(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | Yes |  |
| `action` | `string` | Yes |  |
| `active` | `boolean` | No |  |
| `active_or_good_standing` | `boolean` | No |  |
| `ai_draft_id` | `string` | No |  |
| `allowed_actions` | `table` | Yes |  |
| `alt` | `string` | No |  |
| `amount_cents` | `number` | Yes | Whole cents, non-zero, at most 1,000,000 either way; a promotional credit is positive. |
| `amount_off_cents` | `number` | No |  |
| `api_key` | `string` | Yes |  |
| `applies_to_period` | `string` | No |  |
| `applies_to_tier` | `string|nil` | No |  |
| `assigned_admin_user_id` | `string|nil` | No |  |
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
| `business_id` | `string|nil` | Yes |  |
| `business_ids` | `table` | Yes |  |
| `campaign_id` | `string` | No |  |
| `campaign_ids` | `table` | No |  |
| `caption` | `string` | No |  |
| `case_status` | `string` | No |  |
| `catalog` | `table` | Yes |  |
| `category` | `string` | No |  |
| `category_alias` | `string` | Yes |  |
| `chunk_size` | `number` | No |  |
| `city` | `string` | No |  |
| `code` | `string` | Yes |  |
| `confidence` | `number` | No |  |
| `config` | `table` | Yes | Complete validated pricing configuration. |
| `confirm` | `boolean` | Yes |  |
| `confirm_admin` | `boolean` | No |  |
| `confirmation` | `string` | Yes |  |
| `connection_id` | `string` | Yes |  |
| `connection_kind` | `string` | Yes |  |
| `content_type` | `string` | Yes |  |
| `context_id` | `string` | Yes |  |
| `context_type` | `string` | Yes |  |
| `createdAt` | `string|nil` | Yes |  |
| `created_at` | `string` | Yes |  |
| `credential_expires_at` | `string` | No | Expiration date printed on the license. |
| `credential_id` | `string` | Yes |  |
| `custom_wire` | `string` | No |  |
| `data_base64` | `string` | Yes |  |
| `decision` | `string` | Yes |  |
| `dedupe_ack` | `boolean` | No |  |
| `delivery_contract` | `table` | Yes |  |
| `disabled_reason` | `string|nil` | Yes |  |
| `discount_type` | `string` | Yes |  |
| `display_name` | `string` | Yes |  |
| `disposition` | `string` | Yes |  |
| `draft` | `table` | Yes |  |
| `duration` | `string` | No |  |
| `duration_in_months` | `number|nil` | No |  |
| `email` | `string` | Yes |  |
| `enabled` | `boolean` | Yes |  |
| `endpoint` | `table` | Yes |  |
| `endpoint_id` | `string` | Yes |  |
| `endpoint_url` | `string` | Yes |  |
| `ends_at` | `string` | Yes |  |
| `environment_fallback` | `any` | Yes |  |
| `event_id` | `string` | Yes |  |
| `event_types` | `table` | Yes |  |
| `expected_allowed_actions` | `table` | Yes |  |
| `expected_key_id` | `string` | Yes |  |
| `expected_updated_at` | `string` | Yes |  |
| `expected_version` | `number` | Yes |  |
| `expires_at` | `string` | No | Promotional credit only: ISO date-time 1 hour to 2 years ahead, disclosed to the owner. |
| `fact_id` | `string` | Yes |  |
| `facts` | `table` | Yes |  |
| `failure_count` | `number` | Yes |  |
| `fields` | `table` | Yes | Validated fields for this fixed content-block type. |
| `file_name` | `string` | Yes |  |
| `guideHandoffAnsweredAt` | `string|nil` | No |  |
| `guideHandoffAt` | `string|nil` | No |  |
| `guideHandoffDueAt` | `string|nil` | No |  |
| `height` | `number` | No |  |
| `historic_association_checked` | `boolean` | Yes |  |
| `hold` | `string` | Yes |  |
| `holder_name_match` | `boolean` | No |  |
| `hours` | `table` | Yes |  |
| `id` | `string` | Yes |  |
| `idempotency_key` | `string` | No |  |
| `identifier_match` | `boolean` | No |  |
| `in_use` | `table` | Yes |  |
| `instruction` | `string` | No |  |
| `invited` | `boolean` | Yes |  |
| `key_check` | `any` | Yes |  |
| `kind` | `string` | Yes |  |
| `label` | `string` | Yes |  |
| `lastMessageAt` | `string|nil` | Yes |  |
| `lastMessageAuthorType` | `string` | Yes |  |
| `lastMessagePreview` | `string` | Yes |  |
| `last_delivery_at` | `string|nil` | Yes |  |
| `last_error_code` | `any` | Yes |  |
| `last_probe_at` | `any` | Yes |  |
| `last_problem` | `any` | Yes |  |
| `legal_name` | `string` | No |  |
| `limit` | `number` | No |  |
| `make_active` | `boolean` | Yes |  |
| `max_cents` | `number` | Yes |  |
| `max_redemptions` | `number|nil` | No |  |
| `messages` | `table` | Yes |  |
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
| `ownerLastReadAt` | `string|nil` | Yes |  |
| `ownerName` | `string` | Yes |  |
| `ownerUserId` | `string` | Yes |  |
| `owner_reason_code` | `string` | No | Controlled owner-visible rejection reason. |
| `per_customer_limit` | `number` | No |  |
| `percent_off` | `number` | No |  |
| `phone` | `string` | No |  |
| `policyVersion` | `string` | Yes |  |
| `priority` | `string` | No |  |
| `provider` | `string` | Yes |  |
| `providers` | `table` | Yes |  |
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
| `report_ids` | `table` | Yes |  |
| `reserve_cents` | `number` | Yes | 100-10000; never below $1.00. |
| `resolution_note` | `string` | Yes |  |
| `review_notes` | `string` | No |  |
| `revision` | `number` | Yes |  |
| `role` | `string` | Yes |  |
| `rows` | `table` | Yes |  |
| `run` | `table` | Yes |  |
| `schema_version` | `string` | Yes |  |
| `scope` | `string` | Yes |  |
| `search` | `string` | No |  |
| `settings` | `table` | Yes |  |
| `signing_secret` | `string` | Yes |  |
| `size_bytes` | `number` | Yes |  |
| `sla_due_at` | `string|nil` | No |  |
| `source` | `string` | Yes |  |
| `source_authority` | `string` | No | Exact official authority name. |
| `source_category_slug` | `string` | Yes |  |
| `source_scope_checked` | `boolean` | Yes |  |
| `source_url` | `string` | No | Exact HTTPS official source URL. |
| `starts_at` | `string|nil` | No |  |
| `state` | `string` | No | Bulk by area: every ad of the advertisers in this two-letter U.S. |
| `status` | `string` | Yes |  |
| `storage` | `string` | Yes |  |
| `street_address` | `string` | No |  |
| `subject` | `string` | Yes |  |
| `supportLastReadAt` | `string|nil` | Yes |  |
| `target_category` | `string` | Yes |  |
| `taxonomy_category_aliases` | `table` | Yes |  |
| `ticketNumber` | `string` | Yes |  |
| `tier` | `string` | No |  |
| `typing` | `boolean` | No |  |
| `until` | `string` | No |  |
| `updatedAt` | `string|nil` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes | Public HTTPS receiver operated by the connecting principal or its agent runtime. |
| `valid_until` | `string` | No |  |
| `value` | `string` | Yes |  |
| `verification_method` | `string` | Yes |  |
| `verified_at` | `any` | Yes |  |
| `verified_service_scope` | `table` | No |  |
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

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:Operation():create({
  coupon_id = --[[ string ]],
  account_id = --[[ string ]],
  allowed_actions = --[[ table ]],
  amount_cents = --[[ number ]],
  api_key = --[[ string ]],
  assigneeId = --[[ string ]],
  assigneeLabel = --[[ string ]],
  assigneeType = --[[ string ]],
  assistant_enabled = --[[ boolean ]],
  body = --[[ string ]],
  businessId = --[[ string ]],
  businessName = --[[ string ]],
  business_ids = --[[ table ]],
  catalog = --[[ table ]],
  code = --[[ string ]],
  config = --[[ table ]],
  confirmation = --[[ string ]],
  connection_id = --[[ string ]],
  connection_kind = --[[ string ]],
  content_type = --[[ string ]],
  context_id = --[[ string ]],
  context_type = --[[ string ]],
  createdAt = --[[ string|nil ]],
  created_at = --[[ string ]],
  credential_id = --[[ string ]],
  data_base64 = --[[ string ]],
  decision = --[[ string ]],
  delivery_contract = --[[ table ]],
  disabled_reason = --[[ string|nil ]],
  discount_type = --[[ string ]],
  display_name = --[[ string ]],
  disposition = --[[ string ]],
  draft = --[[ table ]],
  email = --[[ string ]],
  enabled = --[[ boolean ]],
  endpoint = --[[ table ]],
  endpoint_id = --[[ string ]],
  endpoint_url = --[[ string ]],
  ends_at = --[[ string ]],
  environment_fallback = --[[ any ]],
  event_id = --[[ string ]],
  event_types = --[[ table ]],
  expected_allowed_actions = --[[ table ]],
  expected_key_id = --[[ string ]],
  expected_updated_at = --[[ string ]],
  expected_version = --[[ number ]],
  fact_id = --[[ string ]],
  facts = --[[ table ]],
  failure_count = --[[ number ]],
  fields = --[[ table ]],
  file_name = --[[ string ]],
  historic_association_checked = --[[ boolean ]],
  hold = --[[ string ]],
  hours = --[[ table ]],
  id = --[[ string ]],
  in_use = --[[ table ]],
  invited = --[[ boolean ]],
  key_check = --[[ any ]],
  kind = --[[ string ]],
  label = --[[ string ]],
  lastMessageAt = --[[ string|nil ]],
  lastMessageAuthorType = --[[ string ]],
  lastMessagePreview = --[[ string ]],
  last_delivery_at = --[[ string|nil ]],
  last_error_code = --[[ any ]],
  last_probe_at = --[[ any ]],
  last_problem = --[[ any ]],
  make_active = --[[ boolean ]],
  max_cents = --[[ number ]],
  messages = --[[ table ]],
  messagesTruncated = --[[ boolean ]],
  min_cents = --[[ number ]],
  model = --[[ string ]],
  model_id = --[[ string ]],
  name = --[[ string ]],
  one_time_display = --[[ any ]],
  outcome = --[[ string ]],
  ownerEmail = --[[ string ]],
  ownerLastReadAt = --[[ string|nil ]],
  ownerName = --[[ string ]],
  ownerUserId = --[[ string ]],
  policyVersion = --[[ string ]],
  provider = --[[ string ]],
  providers = --[[ table ]],
  purpose_code = --[[ string ]],
  rank_bid_cents = --[[ number ]],
  reference = --[[ string ]],
  report_ids = --[[ table ]],
  reserve_cents = --[[ number ]],
  resolution_note = --[[ string ]],
  revision = --[[ number ]],
  rows = --[[ table ]],
  run = --[[ table ]],
  schema_version = --[[ string ]],
  scope = --[[ string ]],
  settings = --[[ table ]],
  signing_secret = --[[ string ]],
  size_bytes = --[[ number ]],
  source_scope_checked = --[[ boolean ]],
  storage = --[[ string ]],
  subject = --[[ string ]],
  supportLastReadAt = --[[ string|nil ]],
  taxonomy_category_aliases = --[[ table ]],
  ticketNumber = --[[ string ]],
  tier = --[[ string ]],
  updatedAt = --[[ string|nil ]],
  updated_at = --[[ string ]],
  url = --[[ string ]],
  value = --[[ string ]],
  verification_method = --[[ string ]],
  verified_at = --[[ any ]],
  workload = --[[ string ]],
})
```

#### `patch(reqdata, ctrl) -> any, err`

Change part of an existing entity: only the fields given are sent. The data must include the entity `id`. Returns the patched entity, or `nil` and an error on failure.

```lua
local result, err = client:Operation():patch({
  candidate_id = "candidate_id",
  -- Only the fields to change
})
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, or `nil` and an error on failure.

```lua
local result, err = client:Operation():remove({ access_context_id = "access_context_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`. Returns the updated entity, or `nil` and an error on failure.

```lua
local result, err = client:Operation():update({
  provider = "provider",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OperationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OwnerNotificationEntity

```lua
local owner_notification = client:OwnerNotification(nil)
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
| `readAt` | `string|nil` | Yes |  |
| `resourceId` | `string` | Yes |  |
| `resourceKind` | `any` | Yes |  |
| `resourceUrl` | `string` | Yes |  |
| `summary` | `string` | Yes |  |
| `webhookStatus` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:OwnerNotification():create({
  notification_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OwnerNotificationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OwnerNotificationSettingEntity

```lua
local owner_notification_setting = client:OwnerNotificationSetting(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `businessId` | `string` | Yes |  |
| `business_id` | `string` | No |  |
| `createdAt` | `string` | Yes |  |
| `emailEnabled` | `boolean` | Yes |  |
| `email_enabled` | `boolean` | No |  |
| `eventTypeSubscriptions` | `table` | Yes |  |
| `event_types` | `table` | No |  |
| `updatedAt` | `string` | Yes |  |
| `webhookEnabled` | `boolean` | Yes |  |
| `webhook_enabled` | `boolean` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:OwnerNotificationSetting():create({
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OwnerNotificationSettingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OwnerWebhookEndpointEntity

```lua
local owner_webhook_endpoint = client:OwnerWebhookEndpoint(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `businessId` | `string` | Yes |  |
| `createdAt` | `string` | Yes |  |
| `enabled` | `boolean` | Yes |  |
| `eventTypeSubscriptions` | `table` | Yes |  |
| `failureCount` | `number` | Yes |  |
| `id` | `string` | Yes |  |
| `lastDeliveryAt` | `string|nil` | Yes |  |
| `updatedAt` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:OwnerWebhookEndpoint():create({
  webhook_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OwnerWebhookEndpointEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OwnerWebhookRegistrationEntity

```lua
local owner_webhook_registration = client:OwnerWebhookRegistration(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `business_id` | `string` | No |  |
| `endpoint` | `table` | Yes |  |
| `event_types` | `table` | No |  |
| `one_time_display` | `any` | Yes |  |
| `signing_secret` | `string` | Yes |  |
| `status` | `any` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:OwnerWebhookRegistration():create({
  url = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OwnerWebhookRegistrationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PricingEntity

```lua
local pricing = client:Pricing(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `billing` | `table` | Yes |  |
| `branch_add_ons` | `table` | Yes |  |
| `currency` | `any` | Yes |  |
| `generated_at` | `string` | Yes |  |
| `neutrality` | `string` | Yes |  |
| `plans` | `table` | Yes |  |
| `promotions` | `table` | Yes |  |
| `published_at` | `string|nil` | Yes |  |
| `radius_extension` | `table` | Yes |  |
| `revision_id` | `string|nil` | Yes |  |
| `source` | `any` | Yes |  |
| `trust_model_version` | `any` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:Pricing():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PricingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PromoteVerifiedTransactionEntity

```lua
local promote_verified_transaction = client:PromoteVerifiedTransaction(nil)
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:PromoteVerifiedTransaction():create({
  business_id = --[[ string ]],
  evidence_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PromoteVerifiedTransactionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PublicContentEntity

```lua
local public_content = client:PublicContent(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `blocks` | `table` | Yes |  |
| `generated_at` | `string` | Yes |  |
| `source` | `any` | Yes |  |
| `trust_model_version` | `any` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:PublicContent():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PublicContentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RecommendEntity

```lua
local recommend = client:Recommend(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `candidate_window_truncated` | `boolean` | Yes | True when Loppee's bounded candidate assembly reached its safety cap. |
| `commercial_influence` | `string` | Yes | Must be none whenever current-location or saved_exact authority is absent, including universal exact/genuine-prefix name lookup. |
| `display_count` | `number` | No | Agent-key responses: the number of businesses in this response. |
| `endpoint` | `any` | Yes |  |
| `fallback_registry` | `table` | Yes |  |
| `generated_at` | `string` | Yes |  |
| `has_more` | `boolean` | Yes | True only when next_cursor can continue through the current bounded, deterministic candidate window. |
| `listed` | `table` | Yes |  |
| `location_context` | `any` | Yes | Local category discovery and recommendations require a current precise location proof or handoff, a user-confirmed validated destination authority, or a saved_exact Home location. |
| `ordering` | `any` | Yes |  |
| `policy` | `string` | Yes |  |
| `presentation_guidance` | `string` | No | Agent-key responses: how to present these results to the customer. |
| `query` | `table` | Yes |  |
| `ranking_policy` | `string` | Yes |  |
| `registry_count_basis` | `string` | Yes |  |
| `registry_count_observed_at` | `string|nil` | Yes |  |
| `registry_name` | `any` | Yes |  |
| `results` | `table` | Yes |  |
| `returned_count` | `number` | Yes |  |
| `reviewed_registry` | `table` | Yes |  |
| `schema_version` | `any` | Yes |  |
| `search_intent` | `table` | Yes |  |
| `suggestions` | `table` | No |  |
| `total_matches` | `number` | No | Web and app responses. |
| `total_matches_basis` | `number` | No |  |
| `total_registry_records` | `number` | Yes |  |
| `trust_model_version` | `any` | Yes |  |
| `verified` | `table` | Yes |  |
| `visible_candidate_records` | `number` | No | Web and app responses. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:Recommend():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RecommendEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ReviewEntity

```lua
local review = client:Review(nil)
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:Review():create({
  account_id = --[[ string ]],
  attestation_accepted = --[[ boolean ]],
  message = --[[ string ]],
  rating = --[[ number ]],
  subject = --[[ string ]],
  target_business_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReviewEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RevokeEntity

```lua
local revoke = client:Revoke(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | Yes |  |
| `key_id` | `string` | Yes |  |
| `revoked_by` | `string` | Yes |  |
| `status` | `any` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:Revoke():create({
  agent_key_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RevokeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SaveBusinessEntity

```lua
local save_business = client:SaveBusiness(nil)
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:SaveBusiness():create({
  account_id = --[[ string ]],
  business_id = --[[ string ]],
  business_name = --[[ string ]],
  business_source = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SaveBusinessEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SavedBusinessEntity

```lua
local saved_business = client:SavedBusiness(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | Yes |  |
| `count` | `number` | Yes |  |
| `limit` | `number` | No |  |
| `saved_businesses` | `table` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:SavedBusiness():create({
  account_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SavedBusinessEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SavedLocationEntity

```lua
local saved_location = client:SavedLocation(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `available` | `boolean` | Yes |  |
| `coordinates_returned` | `any` | Yes |  |
| `kind` | `any` | Yes | Only saved_exact is precise local-discovery authority. |
| `label` | `string|nil` | Yes |  |
| `location_proof_id` | `string` | No |  |
| `reach_precision` | `any` | Yes | Exact can authorize local category/recommendation reach; coarse cannot activate local results, Sponsored placement, or impressions. |
| `saved_location_ref` | `string|nil` | Yes |  |
| `updated_at` | `string|nil` | Yes |  |
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

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, or `nil` and an error on failure.

```lua
local result, err = client:SavedLocation():remove()
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`. Returns the updated entity, or `nil` and an error on failure.

```lua
local result, err = client:SavedLocation():update({
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SavedLocationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SearchEntity

```lua
local search = client:Search(nil)
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
| `next_cursor` | `string|nil` | Yes |  |
| `page_limit` | `number` | Yes |  |
| `policy` | `string` | Yes |  |
| `presentation_guidance` | `string` | No | Agent-key responses: how to present these results to the customer. |
| `query` | `table` | Yes |  |
| `ranking_policy` | `string` | Yes |  |
| `registry_count_basis` | `string` | Yes |  |
| `registry_count_observed_at` | `string|nil` | Yes |  |
| `registry_name` | `any` | Yes |  |
| `results` | `table` | Yes |  |
| `returned_count` | `number` | Yes |  |
| `schema_version` | `any` | Yes |  |
| `search_intent` | `table` | Yes |  |
| `suggestions` | `table` | No |  |
| `total_matches` | `number` | No | Web and app responses. |
| `total_matches_basis` | `number` | No |  |
| `total_registry_records` | `number` | Yes |  |
| `trust_model_version` | `any` | Yes |  |
| `visible_candidate_records` | `number` | No | Web and app responses. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:Search():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SearchEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SuggestEntity

```lua
local suggest = client:Suggest(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `categories` | `table` | Yes |  |
| `names` | `table` | Yes |  |
| `query` | `string` | Yes |  |
| `schema_version` | `any` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:Suggest():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SuggestEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SupportInternalNoteEntity

```lua
local support_internal_note = client:SupportInternalNote(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authorLabel` | `string` | Yes |  |
| `body` | `string` | Yes |  |
| `createdAt` | `string|nil` | Yes |  |
| `id` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:SupportInternalNote():create({
  id = --[[ string ]],
  body = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SupportInternalNoteEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SupportWorkflowEntity

```lua
local support_workflow = client:SupportWorkflow(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `any` | No |  |
| `id` | `string` | No |  |
| `priority` | `any` | No |  |
| `waiting_on` | `any` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:SupportWorkflow():create({
  id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SupportWorkflowEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TaxonomySuggestionEntity

```lua
local taxonomy_suggestion = client:TaxonomySuggestion(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alias` | `string` | Yes |  |
| `path_titles` | `table` | Yes |  |
| `title` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:TaxonomySuggestion():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TaxonomySuggestionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TrustCardEntity

```lua
local trust_card = client:TrustCard(nil)
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
| `record_number` | `string|nil` | Yes |  |
| `record_scope` | `string` | Yes |  |
| `record_type` | `string` | Yes |  |
| `recorded_expiry` | `string|nil` | Yes |  |
| `result` | `string` | Yes |  |
| `source_label` | `string` | Yes |  |
| `source_url` | `string` | Yes |  |
| `state` | `string` | Yes |  |
| `status_on_record` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:TrustCard():create({
  business_id = --[[ string ]],
  license_record_id = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:TrustCard():list({ business_id = "example" })
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:TrustCard():load({ schema_name = "schema_name" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TrustCardEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UnsaveBusinessEntity

```lua
local unsave_business = client:UnsaveBusiness(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | Yes |  |
| `business_id` | `string` | Yes |  |
| `removed` | `boolean` | Yes |  |
| `status` | `any` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:UnsaveBusiness():create({
  account_id = --[[ string ]],
  business_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UnsaveBusinessEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UpdateAgentBillingAccountEntity

```lua
local update_agent_billing_account = client:UpdateAgentBillingAccount(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | Yes |  |
| `billing_account` | `table` | Yes |  |
| `billing_status` | `string` | No |  |
| `included_actions` | `number` | No |  |
| `monthly_fee_cents` | `number` | No |  |
| `overage_cents` | `number` | No |  |
| `plan` | `string` | No |  |
| `status` | `any` | Yes |  |
| `updated_by` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:UpdateAgentBillingAccount():create({
  account_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UpdateAgentBillingAccountEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WithdrawJobApplicationEntity

```lua
local withdraw_job_application = client:WithdrawJobApplication(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | Yes |  |
| `already_withdrawn` | `boolean` | Yes |  |
| `application` | `table` | Yes |  |
| `application_id` | `string` | Yes |  |
| `status` | `any` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:WithdrawJobApplication():create({
  account_id = --[[ string ]],
  application_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WithdrawJobApplicationEntity` instance with the same client and
options.

#### `get_name() -> string`

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

```lua
local client = sdk.new({
  feature = {
    ratelimit = { active = true },
    retry = { active = true },
    test = { active = true },
    timeout = { active = true },
  },
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

