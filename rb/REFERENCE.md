# LoppeeBusiness Ruby SDK Reference

Complete API reference for the LoppeeBusiness Ruby SDK.


## LoppeeBusinessSDK

### Constructor

```ruby
require_relative 'LoppeeBusiness_sdk'

client = LoppeeBusinessSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["apikey"]` | `String` | API key for authentication. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `LoppeeBusinessSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = LoppeeBusinessSDK.test
```


### Instance Methods

#### `AgentAccess(data = nil)`

Create a new `AgentAccess` entity instance. Pass `nil` for no initial data.

#### `AgentCapability(data = nil)`

Create a new `AgentCapability` entity instance. Pass `nil` for no initial data.

#### `AgentConnectionTest(data = nil)`

Create a new `AgentConnectionTest` entity instance. Pass `nil` for no initial data.

#### `AgentIntegration(data = nil)`

Create a new `AgentIntegration` entity instance. Pass `nil` for no initial data.

#### `AgentMonitoring(data = nil)`

Create a new `AgentMonitoring` entity instance. Pass `nil` for no initial data.

#### `AgentOpenapi(data = nil)`

Create a new `AgentOpenapi` entity instance. Pass `nil` for no initial data.

#### `AgentPolicy(data = nil)`

Create a new `AgentPolicy` entity instance. Pass `nil` for no initial data.

#### `AnonymousLocationProofRevocation(data = nil)`

Create a new `AnonymousLocationProofRevocation` entity instance. Pass `nil` for no initial data.

#### `BusinessApplication(data = nil)`

Create a new `BusinessApplication` entity instance. Pass `nil` for no initial data.

#### `BusinessClaim(data = nil)`

Create a new `BusinessClaim` entity instance. Pass `nil` for no initial data.

#### `BusinessDeal(data = nil)`

Create a new `BusinessDeal` entity instance. Pass `nil` for no initial data.

#### `BusinessIndex(data = nil)`

Create a new `BusinessIndex` entity instance. Pass `nil` for no initial data.

#### `BusinessOwner(data = nil)`

Create a new `BusinessOwner` entity instance. Pass `nil` for no initial data.

#### `BusinessReview(data = nil)`

Create a new `BusinessReview` entity instance. Pass `nil` for no initial data.

#### `ChatAttachment(data = nil)`

Create a new `ChatAttachment` entity instance. Pass `nil` for no initial data.

#### `ChatAttachmentUrl(data = nil)`

Create a new `ChatAttachmentUrl` entity instance. Pass `nil` for no initial data.

#### `ClaimVerificationSend(data = nil)`

Create a new `ClaimVerificationSend` entity instance. Pass `nil` for no initial data.

#### `ClaimVerificationVerify(data = nil)`

Create a new `ClaimVerificationVerify` entity instance. Pass `nil` for no initial data.

#### `CommercialClick(data = nil)`

Create a new `CommercialClick` entity instance. Pass `nil` for no initial data.

#### `ContactRecorded(data = nil)`

Create a new `ContactRecorded` entity instance. Pass `nil` for no initial data.

#### `Conversation(data = nil)`

Create a new `Conversation` entity instance. Pass `nil` for no initial data.

#### `ConversationClose(data = nil)`

Create a new `ConversationClose` entity instance. Pass `nil` for no initial data.

#### `ConversationReport(data = nil)`

Create a new `ConversationReport` entity instance. Pass `nil` for no initial data.

#### `ConversationWorkflow(data = nil)`

Create a new `ConversationWorkflow` entity instance. Pass `nil` for no initial data.

#### `CreateAgentApiKey(data = nil)`

Create a new `CreateAgentApiKey` entity instance. Pass `nil` for no initial data.

#### `Customer(data = nil)`

Create a new `Customer` entity instance. Pass `nil` for no initial data.

#### `CustomerAccount(data = nil)`

Create a new `CustomerAccount` entity instance. Pass `nil` for no initial data.

#### `CustomerLocationProofRevocation(data = nil)`

Create a new `CustomerLocationProofRevocation` entity instance. Pass `nil` for no initial data.

#### `DestinationAddressSuggestion(data = nil)`

Create a new `DestinationAddressSuggestion` entity instance. Pass `nil` for no initial data.

#### `DestinationLocationProof(data = nil)`

Create a new `DestinationLocationProof` entity instance. Pass `nil` for no initial data.

#### `DomainTrustCard(data = nil)`

Create a new `DomainTrustCard` entity instance. Pass `nil` for no initial data.

#### `GeoContext(data = nil)`

Create a new `GeoContext` entity instance. Pass `nil` for no initial data.

#### `Health(data = nil)`

Create a new `Health` entity instance. Pass `nil` for no initial data.

#### `JobApplication(data = nil)`

Create a new `JobApplication` entity instance. Pass `nil` for no initial data.

#### `JobResumeSignedUrl(data = nil)`

Create a new `JobResumeSignedUrl` entity instance. Pass `nil` for no initial data.

#### `LocationHandoff(data = nil)`

Create a new `LocationHandoff` entity instance. Pass `nil` for no initial data.

#### `Message(data = nil)`

Create a new `Message` entity instance. Pass `nil` for no initial data.

#### `ModeratedAction(data = nil)`

Create a new `ModeratedAction` entity instance. Pass `nil` for no initial data.

#### `OpenApiDocument(data = nil)`

Create a new `OpenApiDocument` entity instance. Pass `nil` for no initial data.

#### `Operation(data = nil)`

Create a new `Operation` entity instance. Pass `nil` for no initial data.

#### `OwnerNotification(data = nil)`

Create a new `OwnerNotification` entity instance. Pass `nil` for no initial data.

#### `OwnerNotificationSetting(data = nil)`

Create a new `OwnerNotificationSetting` entity instance. Pass `nil` for no initial data.

#### `OwnerWebhookEndpoint(data = nil)`

Create a new `OwnerWebhookEndpoint` entity instance. Pass `nil` for no initial data.

#### `OwnerWebhookRegistration(data = nil)`

Create a new `OwnerWebhookRegistration` entity instance. Pass `nil` for no initial data.

#### `Pricing(data = nil)`

Create a new `Pricing` entity instance. Pass `nil` for no initial data.

#### `PromoteVerifiedTransaction(data = nil)`

Create a new `PromoteVerifiedTransaction` entity instance. Pass `nil` for no initial data.

#### `PublicContent(data = nil)`

Create a new `PublicContent` entity instance. Pass `nil` for no initial data.

#### `Recommend(data = nil)`

Create a new `Recommend` entity instance. Pass `nil` for no initial data.

#### `Review(data = nil)`

Create a new `Review` entity instance. Pass `nil` for no initial data.

#### `Revoke(data = nil)`

Create a new `Revoke` entity instance. Pass `nil` for no initial data.

#### `SaveBusiness(data = nil)`

Create a new `SaveBusiness` entity instance. Pass `nil` for no initial data.

#### `SavedBusiness(data = nil)`

Create a new `SavedBusiness` entity instance. Pass `nil` for no initial data.

#### `SavedLocation(data = nil)`

Create a new `SavedLocation` entity instance. Pass `nil` for no initial data.

#### `Search(data = nil)`

Create a new `Search` entity instance. Pass `nil` for no initial data.

#### `Suggest(data = nil)`

Create a new `Suggest` entity instance. Pass `nil` for no initial data.

#### `SupportInternalNote(data = nil)`

Create a new `SupportInternalNote` entity instance. Pass `nil` for no initial data.

#### `SupportWorkflow(data = nil)`

Create a new `SupportWorkflow` entity instance. Pass `nil` for no initial data.

#### `TaxonomySuggestion(data = nil)`

Create a new `TaxonomySuggestion` entity instance. Pass `nil` for no initial data.

#### `TrustCard(data = nil)`

Create a new `TrustCard` entity instance. Pass `nil` for no initial data.

#### `UnsaveBusiness(data = nil)`

Create a new `UnsaveBusiness` entity instance. Pass `nil` for no initial data.

#### `UpdateAgentBillingAccount(data = nil)`

Create a new `UpdateAgentBillingAccount` entity instance. Pass `nil` for no initial data.

#### `WithdrawJobApplication(data = nil)`

Create a new `WithdrawJobApplication` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## AgentAccessEntity

```ruby
agent_access = client.AgentAccess
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_name` | `String` | Yes |  |
| `agent_type` | `String` | No |  |
| `callback_url` | `String` | No |  |
| `compliance_notes` | `String` | No |  |
| `created_at` | `String` | Yes |  |
| `data_needs` | `String` | No |  |
| `developer_email` | `String` | Yes |  |
| `operating_states` | `Array` | No |  |
| `organization_name` | `String` | Yes |  |
| `request_id` | `String` | Yes |  |
| `request_status` | `String` | Yes |  |
| `requested_actions` | `Array` | No |  |
| `safety_contact` | `String` | No |  |
| `status` | `Object` | Yes |  |
| `target_categories` | `Array` | No |  |
| `use_case` | `String` | No |  |
| `website` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.AgentAccess.create({
  "agent_name" => "example_agent_name", # String
  "developer_email" => "example_developer_email", # String
  "organization_name" => "example_organization_name", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AgentAccessEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AgentCapabilityEntity

```ruby
agent_capability = client.AgentCapability
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_phone_location_bridge` | `Hash` | No |  |
| `agent_rules` | `Hash` | Yes |  |
| `discovery` | `Hash` | Yes |  |
| `external_agent_access` | `Hash` | Yes |  |
| `external_agent_webhooks` | `Hash` | Yes |  |
| `local_discovery_location_policy` | `Hash` | Yes |  |
| `location_choices` | `Hash` | No |  |
| `registry_name` | `Object` | Yes |  |
| `schema_version` | `Object` | Yes |  |
| `trust_model_version` | `Object` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.AgentCapability.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AgentCapabilityEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AgentConnectionTestEntity

```ruby
agent_connection_test = client.AgentConnectionTest
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key` | `String` | No | Optional UI fallback. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.AgentConnectionTest.create({
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AgentConnectionTestEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AgentIntegrationEntity

```ruby
agent_integration = client.AgentIntegration
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_model` | `Hash` | Yes |  |
| `commercial_influence` | `Hash` | Yes |  |
| `developer_docs_url` | `String` | Yes |  |
| `exposure_tiers` | `Hash` | Yes |  |
| `external_agent_access` | `Hash` | Yes |  |
| `generated_at` | `String` | Yes |  |
| `http_api` | `Hash` | Yes |  |
| `legal` | `Hash` | Yes |  |
| `mcp` | `Hash` | Yes |  |
| `mcp_client_example_url` | `String` | Yes |  |
| `monitoring_url` | `String` | Yes |  |
| `openapi_url` | `String` | Yes |  |
| `openapi_v1_url` | `String` | Yes |  |
| `operational_rules` | `Array` | Yes |  |
| `owner_agent_notifications` | `Hash` | Yes |  |
| `package_url` | `String` | Yes |  |
| `public_base_url` | `String` | Yes |  |
| `rate_limits` | `Hash` | Yes |  |
| `registry_name` | `Object` | Yes |  |
| `schema_version` | `String` | Yes |  |
| `trust_card_contract` | `Hash` | Yes |  |
| `trust_doctrine` | `Hash` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.AgentIntegration.list
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AgentIntegrationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AgentMonitoringEntity

```ruby
agent_monitoring = client.AgentMonitoring
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `build_sha` | `String` | Yes |  |
| `contract_version` | `String` | Yes |  |
| `generated_at` | `String` | Yes |  |
| `health_url` | `String` | Yes |  |
| `integration_package_url` | `String` | Yes |  |
| `mcp_url` | `String` | Yes |  |
| `metrics` | `Hash` | Yes |  |
| `openapi_url` | `String` | Yes |  |
| `rate_limits` | `Hash` | Yes |  |
| `registry_name` | `Object` | Yes |  |
| `schema_version` | `String` | Yes |  |
| `service` | `String` | Yes |  |
| `uptime_seconds` | `Float` | Yes |  |
| `version` | `String` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.AgentMonitoring.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AgentMonitoringEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AgentOpenapiEntity

```ruby
agent_openapi = client.AgentOpenapi
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `components` | `Hash` | Yes |  |
| `info` | `Hash` | Yes |  |
| `openapi` | `Object` | Yes |  |
| `paths` | `Hash` | Yes |  |
| `servers` | `Array` | Yes |  |
| `tags` | `Array` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.AgentOpenapi.list
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AgentOpenapiEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AgentPolicyEntity

```ruby
agent_policy = client.AgentPolicy
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `external_agent_access` | `Hash` | Yes |  |
| `external_agent_webhooks` | `Hash` | Yes |  |
| `local_discovery_location_policy` | `Hash` | Yes |  |
| `location_handoff_flow` | `Hash` | No |  |
| `payment` | `Hash` | Yes |  |
| `publication` | `Hash` | Yes |  |
| `schema_version` | `Object` | Yes |  |
| `trust_model_version` | `Object` | Yes |  |
| `verification` | `Hash` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.AgentPolicy.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AgentPolicyEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AnonymousLocationProofRevocationEntity

```ruby
anonymous_location_proof_revocation = client.AnonymousLocationProofRevocation
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accuracy_meters` | `Float` | Yes |  |
| `captured_at` | `String` | Yes |  |
| `latitude` | `Float` | Yes |  |
| `longitude` | `Float` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.AnonymousLocationProofRevocation.create({
  "accuracy_meters" => 1, # Float
  "captured_at" => "example_captured_at", # String
  "latitude" => 1, # Float
  "longitude" => 1, # Float
})
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```ruby
result = client.AnonymousLocationProofRevocation.remove({ "location_proof_id" => "location_proof_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AnonymousLocationProofRevocationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BusinessApplicationEntity

```ruby
business_application = client.BusinessApplication
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `application` | `Hash` | Yes |  |
| `application_id` | `String` | Yes |  |
| `business_id` | `String` | Yes |  |
| `claim_id` | `Object` | Yes |  |
| `created_at` | `String` | Yes |  |
| `existing_business` | `Boolean` | Yes |  |
| `files` | `Array` | No |  |
| `listing_id` | `String` | No |  |
| `pipeline_status` | `String` | Yes |  |
| `status` | `Object` | Yes |  |
| `trust_model_version` | `Object` | Yes |  |
| `uploaded_files` | `Float` | Yes |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.BusinessApplication.create({
  "application" => {}, # Hash
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BusinessApplicationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BusinessClaimEntity

```ruby
business_claim = client.BusinessClaim
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `business_id` | `Object` | Yes |  |
| `category` | `String` | No |  |
| `city` | `String` | No |  |
| `claim_id` | `String` | Yes |  |
| `claim_status` | `String` | Yes |  |
| `claimant_email` | `String` | No | Legacy field; authenticated owner identity wins. |
| `claimant_name` | `String` | No | Legacy field; authenticated owner identity wins. |
| `claimant_relationship` | `String` | No |  |
| `created_at` | `String` | Yes |  |
| `directory_listing_id` | `Object` | Yes |  |
| `display_name` | `String` | Yes |  |
| `listing_id` | `String` | No |  |
| `notes` | `String` | No |  |
| `phone` | `String` | No |  |
| `source` | `String` | No |  |
| `source_type` | `String` | No |  |
| `source_url` | `String` | No |  |
| `state` | `String` | No |  |
| `status` | `Object` | Yes |  |
| `verification` | `Hash` | No |  |
| `website` | `String` | No |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.BusinessClaim.create({
  "display_name" => "example_display_name", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BusinessClaimEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BusinessDealEntity

```ruby
business_deal = client.BusinessDeal
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `String` | Yes |  |
| `description` | `String` | Yes |  |
| `discountLabel` | `String` | Yes |  |
| `endsAt` | `Object` | Yes |  |
| `id` | `String` | Yes |  |
| `promoCode` | `Object` | Yes |  |
| `startsAt` | `Object` | Yes |  |
| `terms` | `Object` | Yes |  |
| `title` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.BusinessDeal.list({ "id" => "example" })
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BusinessDealEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BusinessIndexEntity

```ruby
business_index = client.BusinessIndex
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `brand_assets` | `Object` | No |  |
| `business_id` | `String` | Yes |  |
| `category` | `String` | Yes |  |
| `city` | `String` | Yes |  |
| `display_name` | `String` | Yes |  |
| `domain` | `Object` | Yes |  |
| `insurance` | `Hash` | Yes |  |
| `phone` | `Object` | Yes |  |
| `public_profile_url` | `String` | Yes |  |
| `review_reputation` | `Hash` | Yes |  |
| `state` | `String` | Yes |  |
| `street_address` | `Object` | No | Owner-published street address where authorized. |
| `trust_card_url` | `String` | Yes |  |
| `trust_model_version` | `Object` | Yes |  |
| `verification_class` | `String` | Yes |  |
| `verification_disclosure` | `String` | Yes |  |
| `website` | `Object` | Yes |  |
| `zip` | `Object` | No | Owner-published postal code where authorized. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.BusinessIndex.list
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BusinessIndexEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BusinessOwnerEntity

```ruby
business_owner = client.BusinessOwner
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `String` | Yes |  |
| `account_role` | `String` | Yes |  |
| `acknowledge_data_effects` | `Boolean` | Yes |  |
| `actions` | `Array` | Yes |  |
| `allowed_actions` | `Array` | Yes |  |
| `amount_cents` | `Float` | Yes | Within the top-up limits (default $25 to $5,000). |
| `applicant_location_requirements` | `String` | No |  |
| `apply_url` | `Object` | No |  |
| `asset_id` | `String` | Yes |  |
| `assigneeId` | `String` | Yes |  |
| `assigneeLabel` | `String` | Yes |  |
| `assigneeType` | `String` | Yes |  |
| `attempt_id` | `String` | Yes |  |
| `benefits` | `String` | No |  |
| `body` | `String` | Yes |  |
| `businessId` | `String` | Yes |  |
| `businessName` | `String` | Yes |  |
| `business_id` | `String` | Yes |  |
| `campaign` | `Hash` | Yes |  |
| `campaign_id` | `String` | Yes |  |
| `carrier_name` | `String` | No |  |
| `category` | `String` | No |  |
| `category_alias` | `String` | No |  |
| `category_aliases` | `Array` | Yes |  |
| `change` | `Hash` | Yes |  |
| `city` | `String` | No |  |
| `client_message_id` | `String` | Yes |  |
| `code` | `String` | Yes |  |
| `compensation_text` | `String` | No |  |
| `confirm` | `Boolean` | No |  |
| `confirmation` | `String` | Yes |  |
| `connection_kind` | `String` | Yes |  |
| `consent_sha256` | `String` | Yes | SHA-256 of the acceptance text shown (from payment-authorizations). |
| `contact_email` | `Object` | No |  |
| `content_type` | `String` | Yes |  |
| `country` | `String` | No |  |
| `coupon_code` | `String` | No |  |
| `createdAt` | `Object` | Yes |  |
| `created_at` | `String` | Yes |  |
| `credential_id` | `String` | Yes |  |
| `credential_identifier` | `String` | Yes |  |
| `data_base64` | `String` | Yes |  |
| `delivery_contract` | `Hash` | Yes |  |
| `description` | `Object` | No |  |
| `direct_apply` | `Boolean` | No |  |
| `disabled_reason` | `Object` | Yes |  |
| `discount_label` | `String` | No |  |
| `display_name` | `String` | Yes |  |
| `employment_type` | `String` | No |  |
| `enabled` | `Boolean` | Yes |  |
| `endpoint` | `Hash` | Yes |  |
| `endpoint_id` | `String` | Yes |  |
| `endpoint_url` | `String` | Yes |  |
| `ends_at` | `Object` | No |  |
| `event_id` | `String` | Yes |  |
| `event_types` | `Array` | Yes |  |
| `evidence_observed_at` | `String` | No |  |
| `expected_updated_at` | `String` | Yes |  |
| `experience_level` | `String` | No |  |
| `expires_at` | `String` | No |  |
| `factor_id` | `String` | No |  |
| `failure_count` | `Integer` | Yes |  |
| `file_name` | `String` | Yes |  |
| `file_sha256` | `String` | No |  |
| `full_name` | `String` | No |  |
| `guideHandoffAnsweredAt` | `Object` | No |  |
| `guideHandoffAt` | `Object` | No |  |
| `guideHandoffDueAt` | `Object` | No |  |
| `hours` | `Object` | No |  |
| `id` | `String` | Yes |  |
| `idempotency_key` | `String` | No |  |
| `installation_id` | `String` | Yes |  |
| `issuer` | `String` | Yes |  |
| `jurisdiction` | `String` | No |  |
| `kind` | `String` | Yes |  |
| `label` | `String` | No |  |
| `lastMessageAt` | `Object` | Yes |  |
| `lastMessageAuthorType` | `String` | Yes |  |
| `lastMessagePreview` | `String` | Yes |  |
| `last_delivery_at` | `Object` | Yes |  |
| `launch` | `Boolean` | No |  |
| `license_number` | `String` | Yes |  |
| `messages` | `Array` | Yes |  |
| `messagesTruncated` | `Boolean` | Yes |  |
| `monthly_cap_cents` | `Float` | No |  |
| `name` | `String` | Yes |  |
| `note` | `String` | No |  |
| `one_time_display` | `Object` | Yes |  |
| `ownerEmail` | `String` | Yes |  |
| `ownerLastReadAt` | `Object` | Yes |  |
| `ownerName` | `String` | Yes |  |
| `ownerUserId` | `String` | Yes |  |
| `period` | `String` | No |  |
| `phone` | `String` | No |  |
| `platform` | `String` | Yes |  |
| `policy_number` | `String` | No |  |
| `postal_code` | `String` | No |  |
| `promo_code` | `Object` | No |  |
| `push_token` | `String` | Yes |  |
| `radius_miles` | `Float` | Yes |  |
| `reason` | `String` | No |  |
| `reason_category` | `String` | No |  |
| `reason_detail` | `String` | No |  |
| `registered_at` | `String` | Yes |  |
| `request_id` | `String` | Yes | Client id of this confirmation (8-100 characters); reuse it only to retry the same confirmation. |
| `requested_at` | `String` | Yes |  |
| `salary_currency` | `String` | No |  |
| `salary_max` | `Object` | No |  |
| `salary_min` | `Object` | No |  |
| `salary_period` | `String` | No |  |
| `save_card` | `Boolean` | Yes |  |
| `save_card_consent_sha256` | `String` | No | Only with save_card true: SHA-256 of the save-card consent text shown. |
| `schedule` | `String` | No |  |
| `service_areas` | `String` | No |  |
| `signing_secret` | `String` | Yes |  |
| `size_bytes` | `Float` | Yes |  |
| `skills` | `Array` | No |  |
| `source_url` | `String` | No |  |
| `starts_at` | `Object` | No |  |
| `state` | `String` | No |  |
| `stated_expires_at` | `String` | No |  |
| `status` | `String` | Yes |  |
| `street_address` | `String` | No |  |
| `subject` | `String` | Yes |  |
| `submitted_identifier` | `String` | No |  |
| `supportLastReadAt` | `Object` | Yes |  |
| `terms` | `Object` | No |  |
| `terms_version` | `String` | Yes | Must be the current Advertiser Terms version. |
| `threshold_cents` | `Float` | No |  |
| `ticketNumber` | `String` | Yes |  |
| `tier` | `String` | Yes |  |
| `title` | `String` | No |  |
| `total_job_openings` | `Object` | No |  |
| `typing` | `Boolean` | No |  |
| `updatedAt` | `Object` | Yes |  |
| `updated_at` | `String` | Yes |  |
| `url` | `String` | Yes | Public HTTPS receiver operated by the connecting principal or its agent runtime. |
| `website` | `String` | Yes |  |
| `workplace_type` | `String` | No |  |
| `zip` | `String` | No |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.BusinessOwner.create({
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

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```ruby
result = client.BusinessOwner.update({
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BusinessOwnerEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BusinessReviewEntity

```ruby
business_review = client.BusinessReview
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.BusinessReview.load({ "id" => "business_review_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BusinessReviewEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ChatAttachmentEntity

```ruby
chat_attachment = client.ChatAttachment
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `byteSize` | `Integer` | Yes |  |
| `content_type` | `Object` | Yes |  |
| `data_base64` | `String` | Yes |  |
| `fileName` | `String` | Yes |  |
| `file_name` | `String` | Yes |  |
| `id` | `String` | Yes |  |
| `mediaType` | `String` | Yes |  |
| `size_bytes` | `Integer` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.ChatAttachment.create({
  "conversation_id" => "example_conversation_id", # String
  "content_type" => "example_content_type", # Object
  "data_base64" => "example_data_base64", # String
  "file_name" => "example_file_name", # String
  "size_bytes" => 1, # Integer
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ChatAttachmentEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ChatAttachmentUrlEntity

```ruby
chat_attachment_url = client.ChatAttachmentUrl
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `byte_size` | `Integer` | Yes |  |
| `expires_in_seconds` | `Object` | Yes |  |
| `file_name` | `String` | Yes |  |
| `id` | `String` | Yes |  |
| `media_type` | `String` | Yes |  |
| `signed_url` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.ChatAttachmentUrl.create({
  "attachment_id" => "example_attachment_id", # String
  "conversation_id" => "example_conversation_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ChatAttachmentUrlEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ClaimVerificationSendEntity

```ruby
claim_verification_send = client.ClaimVerificationSend
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `challenge_id` | `String` | No | Opaque v3 SMS or owner-email challenge UUID. |
| `channel` | `Object` | Yes |  |
| `claim_id` | `String` | Yes |  |
| `destination_hint` | `String` | No |  |
| `expires_in_seconds` | `Float` | No |  |
| `provider_status` | `Object` | No | V3 provider request state. |
| `recipient_delivery_confirmed` | `Object` | No | V3 currently has no final-delivery provider event for this receipt. |
| `request_id` | `String` | No | Caller-generated idempotency UUID. |
| `status` | `Object` | Yes |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.ClaimVerificationSend.create({
  "claim_id" => "example_claim_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ClaimVerificationSendEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ClaimVerificationVerifyEntity

```ruby
claim_verification_verify = client.ClaimVerificationVerify
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `business_id` | `Object` | Yes |  |
| `challenge_id` | `String` | No | Exact challenge UUID returned by the v3 SMS or owner-email send. |
| `channel` | `Object` | No |  |
| `claim_id` | `String` | Yes |  |
| `code` | `String` | Yes |  |
| `method` | `Object` | No |  |
| `publication` | `Hash` | No |  |
| `status` | `Object` | Yes |  |
| `transfer_review_required` | `Object` | No |  |
| `trust_model_version` | `Object` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.ClaimVerificationVerify.create({
  "claim_id" => "example_claim_id", # String
  "code" => "example_code", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ClaimVerificationVerifyEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CommercialClickEntity

```ruby
commercial_click = client.CommercialClick
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action_type` | `Object` | Yes |  |
| `ad_receipt` | `String` | No | Opaque server-signed receipt of a served Sponsored ad, sent back unchanged with a profile, website or call tap. |
| `billable` | `Boolean` | Yes |  |
| `billing_event_id` | `Object` | No |  |
| `billing_status` | `String` | Yes |  |
| `business_id` | `String` | No |  |
| `category` | `String` | No |  |
| `city` | `String` | No |  |
| `click_id` | `String` | Yes |  |
| `commercial_status` | `Object` | No |  |
| `created_at` | `String` | Yes |  |
| `directory_listing_id` | `String` | No | Deprecated alias of listing_id. |
| `display_name` | `String` | No |  |
| `fallback_interaction_id` | `String` | No |  |
| `ledger_status` | `String` | Yes |  |
| `listing_id` | `String` | No |  |
| `metadata` | `Hash` | No |  |
| `migration_required` | `Boolean` | No |  |
| `page_path` | `String` | No |  |
| `referrer` | `String` | No |  |
| `source_type` | `Object` | Yes |  |
| `state` | `String` | No |  |
| `status` | `Object` | Yes |  |
| `storage` | `Object` | Yes |  |
| `surface` | `Object` | No | Where the Sponsored ad was shown (with ad_receipt). |
| `target_url` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.CommercialClick.create({
  "action_type" => "example_action_type", # Object
  "source_type" => "example_source_type", # Object
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CommercialClickEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ContactRecordedEntity

```ruby
contact_recorded = client.ContactRecorded
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `business_id` | `String` | Yes |  |
| `contact_recorded` | `Object` | Yes |  |
| `interaction_id` | `String` | Yes |  |
| `ok` | `Object` | Yes |  |
| `policy` | `String` | Yes |  |
| `review_upgraded` | `Object` | Yes |  |
| `status` | `Object` | Yes |  |
| `trust_weight` | `Object` | Yes |  |
| `verified` | `Boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.ContactRecorded.create({
  "business_id" => "example_business_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ContactRecordedEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ConversationEntity

```ruby
conversation = client.Conversation
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `String` | Yes |  |
| `conversation_id` | `String` | No | Exact conversation referenced by a webhook; returns zero or one scoped thread. |
| `conversations` | `Array` | Yes |  |
| `count` | `Float` | Yes |  |
| `cursor` | `String` | No | Opaque pagination cursor returned by the previous page. |
| `limit` | `Float` | No |  |
| `pagination` | `Hash` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.Conversation.create({
  "account_id" => "example_account_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ConversationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ConversationCloseEntity

```ruby
conversation_close = client.ConversationClose
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `closed_at` | `String` | Yes |  |
| `conversation_id` | `String` | Yes |  |
| `id` | `String` | No |  |
| `status` | `Object` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.ConversationClose.create({
  "id" => "example_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ConversationCloseEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ConversationReportEntity

```ruby
conversation_report = client.ConversationReport
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `detail` | `String` | No |  |
| `id` | `String` | No |  |
| `reason` | `Object` | Yes |  |
| `status` | `Object` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.ConversationReport.create({
  "id" => "example_id", # String
  "reason" => "example_reason", # Object
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ConversationReportEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ConversationWorkflowEntity

```ruby
conversation_workflow = client.ConversationWorkflow
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `priority` | `Object` | No |  |
| `status` | `Object` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.ConversationWorkflow.create({
  "message_id" => "example_message_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ConversationWorkflowEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CreateAgentApiKeyEntity

```ruby
create_agent_api_key = client.CreateAgentApiKey
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `String` | Yes |  |
| `allowed_actions` | `Array` | No |  |
| `allowed_business_ids` | `Array` | No |  |
| `created_by` | `String` | Yes |  |
| `key` | `Hash` | Yes |  |
| `label` | `String` | No |  |
| `monthly_quota` | `Float` | No |  |
| `notes` | `String` | No |  |
| `one_time_display` | `Object` | Yes |  |
| `rate_limit_per_minute` | `Float` | No |  |
| `raw_key` | `String` | Yes |  |
| `status` | `Object` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.CreateAgentApiKey.create({
  "account_id" => "example_account_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CreateAgentApiKeyEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CustomerEntity

```ruby
customer = client.Customer
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_provider` | `String` | No |  |
| `avatar_url` | `Object` | Yes | Short-lived signed display URL for a private avatar object, or null. |
| `city` | `Object` | Yes |  |
| `created_at` | `Object` | Yes |  |
| `email` | `String` | Yes |  |
| `full_name` | `String` | Yes |  |
| `id` | `String` | Yes |  |
| `phone` | `Object` | Yes |  |
| `search_category` | `String` | No |  |
| `service_need` | `String` | No |  |
| `state` | `Object` | Yes |  |
| `status` | `Object` | Yes |  |
| `updated_at` | `Object` | Yes |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.Customer.create({
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CustomerEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CustomerAccountEntity

```ruby
customer_account = client.CustomerAccount
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `String` | Yes |  |
| `account_role` | `String` | Yes |  |
| `accuracy_meters` | `Float` | Yes |  |
| `acknowledge_data_effects` | `Boolean` | Yes |  |
| `actions` | `Array` | Yes |  |
| `agent_key_id` | `String` | Yes |  |
| `agent_receives_coordinates` | `Boolean` | Yes |  |
| `all_paused` | `Boolean` | Yes |  |
| `app_attest_registered` | `Boolean` | Yes |  |
| `assertion` | `String` | Yes |  |
| `attestation` | `String` | Yes |  |
| `author_label` | `String` | Yes |  |
| `author_type` | `String` | Yes |  |
| `binding` | `Object` | Yes |  |
| `body` | `String` | Yes |  |
| `business_id` | `Object` | Yes |  |
| `capture_source` | `Object` | Yes |  |
| `captured_at` | `String` | Yes |  |
| `challenge` | `String` | Yes |  |
| `challenge_id` | `String` | Yes |  |
| `client_message_id` | `String` | Yes |  |
| `completed` | `Boolean` | Yes |  |
| `confirmation` | `String` | Yes |  |
| `connection_id` | `String` | Yes |  |
| `connection_kind` | `String` | Yes |  |
| `continuation` | `Object` | Yes | The continuation from the previous response, sent back unchanged to get the next results. |
| `coordinates_returned` | `Boolean` | Yes |  |
| `created_at` | `String` | Yes |  |
| `credential_id` | `String` | Yes |  |
| `declined` | `Boolean` | Yes |  |
| `delivery_contract` | `Hash` | Yes |  |
| `disabled_reason` | `Object` | Yes |  |
| `disclosure` | `String` | Yes |  |
| `enabled` | `Boolean` | Yes |  |
| `endpoint` | `Hash` | Yes |  |
| `endpoint_id` | `String` | Yes |  |
| `endpoint_url` | `String` | Yes |  |
| `environment` | `String` | Yes |  |
| `event_id` | `String` | Yes |  |
| `event_types` | `Array` | Yes |  |
| `failure_count` | `Integer` | Yes |  |
| `handoff_id` | `String` | Yes |  |
| `has_more` | `Boolean` | Yes |  |
| `id` | `String` | Yes |  |
| `idempotent_replay` | `Boolean` | Yes |  |
| `installation_id` | `String` | Yes |  |
| `key_id` | `String` | Yes |  |
| `last_delivery_at` | `Object` | Yes |  |
| `latitude` | `Float` | Yes |  |
| `location` | `Object` | No | An opaque location reference from the website's own location controls. |
| `longitude` | `Float` | Yes |  |
| `message_alerts_enabled` | `Boolean` | Yes |  |
| `messages` | `Array` | Yes |  |
| `mode` | `String` | Yes | fallback: a direct search answered because the language model was unavailable. |
| `name` | `String` | No |  |
| `oauth_grant_id` | `Object` | Yes |  |
| `one_time_display` | `Object` | Yes |  |
| `platform` | `String` | Yes |  |
| `policy` | `String` | Yes |  |
| `purpose` | `String` | Yes |  |
| `push_token` | `String` | Yes |  |
| `reason` | `String` | Yes |  |
| `registered_at` | `String` | Yes |  |
| `reply` | `String` | Yes |  |
| `request_mode` | `String` | Yes |  |
| `requested_at` | `String` | Yes |  |
| `results` | `Array` | Yes |  |
| `schema_version` | `String` | Yes |  |
| `selected_at` | `String` | Yes |  |
| `signed_in` | `Boolean` | Yes |  |
| `signing_secret` | `String` | Yes |  |
| `status` | `Object` | Yes |  |
| `updated_at` | `String` | Yes |  |
| `url` | `String` | Yes | Public HTTPS receiver operated by the connecting principal or its agent runtime. |
| `usable_until` | `String` | Yes |  |
| `use_mode` | `String` | Yes |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.CustomerAccount.create({
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

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CustomerAccountEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CustomerLocationProofRevocationEntity

```ruby
customer_location_proof_revocation = client.CustomerLocationProofRevocation
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accuracy_meters` | `Float` | Yes |  |
| `captured_at` | `String` | Yes |  |
| `latitude` | `Float` | Yes |  |
| `longitude` | `Float` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.CustomerLocationProofRevocation.create({
  "accuracy_meters" => 1, # Float
  "captured_at" => "example_captured_at", # String
  "latitude" => 1, # Float
  "longitude" => 1, # Float
})
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```ruby
result = client.CustomerLocationProofRevocation.remove({ "location_proof_id" => "location_proof_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CustomerLocationProofRevocationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DestinationAddressSuggestionEntity

```ruby
destination_address_suggestion = client.DestinationAddressSuggestion
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `input` | `String` | Yes | Normalized partial US service-address text. |
| `suggestions` | `Array` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.DestinationAddressSuggestion.create({
  "input" => "example_input", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DestinationAddressSuggestionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DestinationLocationProofEntity

```ruby
destination_location_proof = client.DestinationLocationProof
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `String` | Yes | A real US service address. |
| `premise_proximity_confirmation_token` | `String` | No | Opaque one-time token from the immediately preceding premise-proximity challenge for the same address and authority. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.DestinationLocationProof.create({
  "address" => "example_address", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DestinationLocationProofEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DomainTrustCardEntity

```ruby
domain_trust_card = client.DomainTrustCard
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `business_id` | `String` | Yes |  |
| `domain` | `String` | Yes |  |
| `schema_version` | `Object` | Yes |  |
| `trust_card` | `Hash` | Yes |  |
| `trust_card_url` | `String` | Yes |  |
| `trust_model_version` | `Object` | Yes |  |
| `verification_class` | `Object` | Yes |  |
| `verification_disclosure` | `String` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.DomainTrustCard.load({ "domain_key" => "domain_key" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DomainTrustCardEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## GeoContextEntity

```ruby
geo_context = client.GeoContext
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.GeoContext.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `GeoContextEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## HealthEntity

```ruby
health = client.Health
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_phone_location_bridge` | `Hash` | Yes |  |
| `build_sha` | `String` | Yes |  |
| `business_review_access` | `Hash` | Yes |  |
| `contract_version` | `String` | Yes |  |
| `external_agent_webhooks` | `Hash` | Yes |  |
| `external_agent_webhooks_enabled` | `Boolean` | Yes |  |
| `ios_app_attest_anonymous_location` | `Hash` | Yes |  |
| `location_choices` | `Hash` | Yes |  |
| `location_handoff` | `Hash` | Yes |  |
| `mobile_push` | `Object` | Yes |  |
| `ok` | `Object` | Yes |  |
| `service` | `String` | Yes |  |
| `sponsored_ordering` | `Hash` | Yes |  |
| `trust_model_version` | `Object` | Yes |  |
| `version` | `String` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.Health.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `HealthEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## JobApplicationEntity

```ruby
job_application = client.JobApplication
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `String` | Yes |  |
| `already_withdrawn` | `Boolean` | No |  |
| `application` | `Hash` | Yes |  |
| `applications` | `Array` | Yes |  |
| `billing` | `Hash` | Yes |  |
| `business_id` | `String` | No |  |
| `count` | `Float` | Yes |  |
| `cover_note` | `String` | No |  |
| `free_to_apply` | `Boolean` | No |  |
| `id` | `String` | No |  |
| `job_id` | `String` | Yes |  |
| `limit` | `Float` | Yes |  |
| `offset` | `Float` | Yes |  |
| `resume` | `Hash` | Yes |  |
| `retention_note` | `String` | No |  |
| `status` | `String` | Yes |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.JobApplication.create({
  "job_id" => "example_job_id", # String
  "resume" => {}, # Hash
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `JobApplicationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## JobResumeSignedUrlEntity

```ruby
job_resume_signed_url = client.JobResumeSignedUrl
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `application_id` | `String` | Yes |  |
| `content_type` | `String` | Yes |  |
| `expires_in_seconds` | `Float` | Yes |  |
| `resume_file_name` | `String` | Yes |  |
| `signed_url` | `String` | Yes |  |
| `size_bytes` | `Float` | Yes |  |
| `status` | `Object` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.JobResumeSignedUrl.create({
  "job_application_id" => "example_job_application_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `JobResumeSignedUrlEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## LocationHandoffEntity

```ruby
location_handoff = client.LocationHandoff
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.LocationHandoff.create({
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `LocationHandoffEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## MessageEntity

```ruby
message = client.Message
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `String` | Yes |  |
| `client_message_id` | `String` | Yes | Caller-stable retry key. |
| `conversation_id` | `String` | Yes |  |
| `created_at` | `String` | Yes |  |
| `delivery` | `Object` | No |  |
| `idempotent_replay` | `Boolean` | Yes |  |
| `interaction_id` | `String` | Yes |  |
| `message` | `String` | Yes |  |
| `moderation_required` | `Object` | No |  |
| `source_path` | `String` | No |  |
| `status` | `Object` | Yes |  |
| `subject` | `String` | No |  |
| `target_business_id` | `String` | Yes |  |
| `target_business_name` | `String` | No |  |
| `target_business_source` | `String` | No |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.Message.create({
  "account_id" => "example_account_id", # String
  "client_message_id" => "example_client_message_id", # String
  "message" => "example_message", # String
  "subject" => "example_subject", # String
  "target_business_id" => "example_target_business_id", # String
  "target_business_name" => "example_target_business_name", # String
  "target_business_source" => "example_target_business_source", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MessageEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ModeratedActionEntity

```ruby
moderated_action = client.ModeratedAction
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actions` | `Array` | Yes |  |
| `body` | `String` | Yes |  |
| `client_request_id` | `String` | No |  |
| `content_type` | `String` | Yes |  |
| `continuation` | `Object` | Yes | The continuation from the previous response, sent back unchanged to get the next results. |
| `coordinates_returned` | `Boolean` | Yes |  |
| `disclosure` | `String` | Yes |  |
| `enabled` | `Boolean` | Yes |  |
| `file_sha256` | `String` | Yes |  |
| `has_more` | `Boolean` | Yes |  |
| `human_confirmation` | `Boolean` | No |  |
| `intent_id` | `String` | Yes |  |
| `kind` | `String` | No |  |
| `knowledgeVersion` | `String` | Yes |  |
| `limits` | `Hash` | Yes |  |
| `links` | `Array` | Yes |  |
| `location` | `Hash` | Yes | An opaque location reference from the website's own location controls. |
| `message` | `String` | No |  |
| `messages` | `Array` | Yes |  |
| `mode` | `String` | Yes | fallback: a direct search answered because the language model was unavailable. |
| `name` | `String` | Yes |  |
| `needsHuman` | `Boolean` | Yes |  |
| `policy` | `Hash` | Yes | Human schedule and separate claim-review policy. |
| `question` | `String` | Yes |  |
| `reply` | `String` | Yes |  |
| `result` | `String` | Yes |  |
| `results` | `Array` | Yes |  |
| `scan_authority_id` | `String` | Yes |  |
| `scanner` | `String` | Yes |  |
| `scanner_version` | `String` | Yes |  |
| `schema_version` | `String` | Yes |  |
| `searcher_latitude` | `Float` | No |  |
| `searcher_longitude` | `Float` | No |  |
| `signature` | `String` | No |  |
| `signed_in` | `Boolean` | Yes |  |
| `size_bytes` | `Float` | Yes |  |
| `subject` | `String` | No |  |
| `target_business_id` | `String` | Yes |  |
| `topic` | `String` | Yes |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.ModeratedAction.create({
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

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.ModeratedAction.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ModeratedActionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## OpenApiDocumentEntity

```ruby
open_api_document = client.OpenApiDocument
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `components` | `Hash` | Yes |  |
| `info` | `Hash` | Yes |  |
| `openapi` | `Object` | Yes |  |
| `paths` | `Hash` | Yes |  |
| `servers` | `Array` | Yes |  |
| `tags` | `Array` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.OpenApiDocument.list
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `OpenApiDocumentEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## OperationEntity

```ruby
operation = client.Operation
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `String` | Yes |  |
| `action` | `String` | Yes |  |
| `active` | `Boolean` | No |  |
| `active_or_good_standing` | `Boolean` | No |  |
| `ai_draft_id` | `String` | No |  |
| `allowed_actions` | `Array` | Yes |  |
| `alt` | `String` | No |  |
| `amount_cents` | `Float` | Yes | Whole cents, non-zero, at most 1,000,000 either way; a promotional credit is positive. |
| `amount_off_cents` | `Float` | No |  |
| `api_key` | `String` | Yes |  |
| `applies_to_period` | `String` | No |  |
| `applies_to_tier` | `Object` | No |  |
| `assigned_admin_user_id` | `Object` | No |  |
| `assigneeId` | `String` | Yes |  |
| `assigneeLabel` | `String` | Yes |  |
| `assigneeType` | `String` | Yes |  |
| `assignee_id` | `String` | No |  |
| `assignee_label` | `String` | No |  |
| `assignee_type` | `String` | No | AI assignment is unavailable while the customer-support workload is disconnected. |
| `assistant_enabled` | `Boolean` | Yes |  |
| `base_url` | `String` | No |  |
| `body` | `String` | Yes |  |
| `businessId` | `String` | Yes |  |
| `businessName` | `String` | Yes |  |
| `business_id` | `Object` | Yes |  |
| `business_ids` | `Array` | Yes |  |
| `campaign_id` | `String` | No |  |
| `campaign_ids` | `Array` | No |  |
| `caption` | `String` | No |  |
| `case_status` | `String` | No |  |
| `catalog` | `Array` | Yes |  |
| `category` | `String` | No |  |
| `category_alias` | `String` | Yes |  |
| `chunk_size` | `Float` | No |  |
| `city` | `String` | No |  |
| `code` | `String` | Yes |  |
| `confidence` | `Float` | No |  |
| `config` | `Hash` | Yes | Complete validated pricing configuration. |
| `confirm` | `Boolean` | Yes |  |
| `confirm_admin` | `Boolean` | No |  |
| `confirmation` | `String` | Yes |  |
| `connection_id` | `String` | Yes |  |
| `connection_kind` | `String` | Yes |  |
| `content_type` | `String` | Yes |  |
| `context_id` | `String` | Yes |  |
| `context_type` | `String` | Yes |  |
| `createdAt` | `Object` | Yes |  |
| `created_at` | `String` | Yes |  |
| `credential_expires_at` | `String` | No | Expiration date printed on the license. |
| `credential_id` | `String` | Yes |  |
| `custom_wire` | `String` | No |  |
| `data_base64` | `String` | Yes |  |
| `decision` | `String` | Yes |  |
| `dedupe_ack` | `Boolean` | No |  |
| `delivery_contract` | `Hash` | Yes |  |
| `disabled_reason` | `Object` | Yes |  |
| `discount_type` | `String` | Yes |  |
| `display_name` | `String` | Yes |  |
| `disposition` | `String` | Yes |  |
| `draft` | `Hash` | Yes |  |
| `duration` | `String` | No |  |
| `duration_in_months` | `Object` | No |  |
| `email` | `String` | Yes |  |
| `enabled` | `Boolean` | Yes |  |
| `endpoint` | `Hash` | Yes |  |
| `endpoint_id` | `String` | Yes |  |
| `endpoint_url` | `String` | Yes |  |
| `ends_at` | `String` | Yes |  |
| `environment_fallback` | `Object` | Yes |  |
| `event_id` | `String` | Yes |  |
| `event_types` | `Array` | Yes |  |
| `expected_allowed_actions` | `Array` | Yes |  |
| `expected_key_id` | `String` | Yes |  |
| `expected_updated_at` | `String` | Yes |  |
| `expected_version` | `Float` | Yes |  |
| `expires_at` | `String` | No | Promotional credit only: ISO date-time 1 hour to 2 years ahead, disclosed to the owner. |
| `fact_id` | `String` | Yes |  |
| `facts` | `Hash` | Yes |  |
| `failure_count` | `Integer` | Yes |  |
| `fields` | `Hash` | Yes | Validated fields for this fixed content-block type. |
| `file_name` | `String` | Yes |  |
| `guideHandoffAnsweredAt` | `Object` | No |  |
| `guideHandoffAt` | `Object` | No |  |
| `guideHandoffDueAt` | `Object` | No |  |
| `height` | `Float` | No |  |
| `historic_association_checked` | `Boolean` | Yes |  |
| `hold` | `String` | Yes |  |
| `holder_name_match` | `Boolean` | No |  |
| `hours` | `Hash` | Yes |  |
| `id` | `String` | Yes |  |
| `idempotency_key` | `String` | No |  |
| `identifier_match` | `Boolean` | No |  |
| `in_use` | `Hash` | Yes |  |
| `instruction` | `String` | No |  |
| `invited` | `Boolean` | Yes |  |
| `key_check` | `Object` | Yes |  |
| `kind` | `String` | Yes |  |
| `label` | `String` | Yes |  |
| `lastMessageAt` | `Object` | Yes |  |
| `lastMessageAuthorType` | `String` | Yes |  |
| `lastMessagePreview` | `String` | Yes |  |
| `last_delivery_at` | `Object` | Yes |  |
| `last_error_code` | `Object` | Yes |  |
| `last_probe_at` | `Object` | Yes |  |
| `last_problem` | `Object` | Yes |  |
| `legal_name` | `String` | No |  |
| `limit` | `Float` | No |  |
| `make_active` | `Boolean` | Yes |  |
| `max_cents` | `Float` | Yes |  |
| `max_redemptions` | `Object` | No |  |
| `messages` | `Array` | Yes |  |
| `messagesTruncated` | `Boolean` | Yes |  |
| `min_cents` | `Float` | Yes |  |
| `model` | `String` | Yes |  |
| `model_id` | `String` | Yes |  |
| `name` | `String` | Yes |  |
| `note` | `String` | No |  |
| `notes` | `String` | No |  |
| `observed_at` | `String` | No |  |
| `one_time_display` | `Object` | Yes |  |
| `outcome` | `String` | Yes |  |
| `ownerEmail` | `String` | Yes |  |
| `ownerLastReadAt` | `Object` | Yes |  |
| `ownerName` | `String` | Yes |  |
| `ownerUserId` | `String` | Yes |  |
| `owner_reason_code` | `String` | No | Controlled owner-visible rejection reason. |
| `per_customer_limit` | `Float` | No |  |
| `percent_off` | `Float` | No |  |
| `phone` | `String` | No |  |
| `policyVersion` | `String` | Yes |  |
| `priority` | `String` | No |  |
| `provider` | `String` | Yes |  |
| `providers` | `Array` | Yes |  |
| `purpose_code` | `String` | Yes |  |
| `rank_bid_cents` | `Integer` | Yes |  |
| `reason` | `String` | Yes |  |
| `reason_category` | `String` | No |  |
| `reason_code` | `String` | No |  |
| `reason_detail` | `String` | No |  |
| `reference` | `String` | Yes |  |
| `reject_reason` | `String` | No |  |
| `related_case_id` | `String` | No |  |
| `report_id` | `Integer` | Yes |  |
| `report_ids` | `Array` | Yes |  |
| `reserve_cents` | `Float` | Yes | 100-10000; never below $1.00. |
| `resolution_note` | `String` | Yes |  |
| `review_notes` | `String` | No |  |
| `revision` | `Integer` | Yes |  |
| `role` | `String` | Yes |  |
| `rows` | `Array` | Yes |  |
| `run` | `Hash` | Yes |  |
| `schema_version` | `String` | Yes |  |
| `scope` | `String` | Yes |  |
| `search` | `String` | No |  |
| `settings` | `Hash` | Yes |  |
| `signing_secret` | `String` | Yes |  |
| `size_bytes` | `Float` | Yes |  |
| `sla_due_at` | `Object` | No |  |
| `source` | `String` | Yes |  |
| `source_authority` | `String` | No | Exact official authority name. |
| `source_category_slug` | `String` | Yes |  |
| `source_scope_checked` | `Boolean` | Yes |  |
| `source_url` | `String` | No | Exact HTTPS official source URL. |
| `starts_at` | `Object` | No |  |
| `state` | `String` | No | Bulk by area: every ad of the advertisers in this two-letter U.S. |
| `status` | `String` | Yes |  |
| `storage` | `String` | Yes |  |
| `street_address` | `String` | No |  |
| `subject` | `String` | Yes |  |
| `supportLastReadAt` | `Object` | Yes |  |
| `target_category` | `String` | Yes |  |
| `taxonomy_category_aliases` | `Array` | Yes |  |
| `ticketNumber` | `String` | Yes |  |
| `tier` | `String` | No |  |
| `typing` | `Boolean` | No |  |
| `until` | `String` | No |  |
| `updatedAt` | `Object` | Yes |  |
| `updated_at` | `String` | Yes |  |
| `url` | `String` | Yes | Public HTTPS receiver operated by the connecting principal or its agent runtime. |
| `valid_until` | `String` | No |  |
| `value` | `String` | Yes |  |
| `verification_method` | `String` | Yes |  |
| `verified_at` | `Object` | Yes |  |
| `verified_service_scope` | `Array` | No |  |
| `version` | `String` | No |  |
| `website` | `String` | No |  |
| `width` | `Float` | No |  |
| `window_hours` | `Float` | No | 1-744, default 48. |
| `workload` | `String` | Yes |  |
| `zip` | `String` | No |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.Operation.create({
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

#### `patch(reqdata, ctrl = nil) -> result`

Change part of an existing entity: only the fields given are sent. The data must include the entity `id`. Returns the patched entity and raises on error.

```ruby
result = client.Operation.patch({
  "candidate_id" => "candidate_id",
  # Only the fields to change
})
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```ruby
result = client.Operation.remove({ "access_context_id" => "access_context_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```ruby
result = client.Operation.update({
  "provider" => "provider",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `OperationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## OwnerNotificationEntity

```ruby
owner_notification = client.OwnerNotification
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `businessId` | `String` | Yes |  |
| `createdAt` | `String` | Yes |  |
| `dedupeKey` | `String` | Yes |  |
| `emailStatus` | `String` | Yes |  |
| `eventType` | `Object` | Yes |  |
| `id` | `String` | Yes |  |
| `readAt` | `Object` | Yes |  |
| `resourceId` | `String` | Yes |  |
| `resourceKind` | `Object` | Yes |  |
| `resourceUrl` | `String` | Yes |  |
| `summary` | `String` | Yes |  |
| `webhookStatus` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.OwnerNotification.create({
  "notification_id" => "example_notification_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `OwnerNotificationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## OwnerNotificationSettingEntity

```ruby
owner_notification_setting = client.OwnerNotificationSetting
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `businessId` | `String` | Yes |  |
| `business_id` | `String` | No |  |
| `createdAt` | `String` | Yes |  |
| `emailEnabled` | `Boolean` | Yes |  |
| `email_enabled` | `Boolean` | No |  |
| `eventTypeSubscriptions` | `Array` | Yes |  |
| `event_types` | `Array` | No |  |
| `updatedAt` | `String` | Yes |  |
| `webhookEnabled` | `Boolean` | Yes |  |
| `webhook_enabled` | `Boolean` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.OwnerNotificationSetting.create({
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `OwnerNotificationSettingEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## OwnerWebhookEndpointEntity

```ruby
owner_webhook_endpoint = client.OwnerWebhookEndpoint
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `businessId` | `String` | Yes |  |
| `createdAt` | `String` | Yes |  |
| `enabled` | `Boolean` | Yes |  |
| `eventTypeSubscriptions` | `Array` | Yes |  |
| `failureCount` | `Float` | Yes |  |
| `id` | `String` | Yes |  |
| `lastDeliveryAt` | `Object` | Yes |  |
| `updatedAt` | `String` | Yes |  |
| `url` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.OwnerWebhookEndpoint.create({
  "webhook_id" => "example_webhook_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `OwnerWebhookEndpointEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## OwnerWebhookRegistrationEntity

```ruby
owner_webhook_registration = client.OwnerWebhookRegistration
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `business_id` | `String` | No |  |
| `endpoint` | `Hash` | Yes |  |
| `event_types` | `Array` | No |  |
| `one_time_display` | `Object` | Yes |  |
| `signing_secret` | `String` | Yes |  |
| `status` | `Object` | Yes |  |
| `url` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.OwnerWebhookRegistration.create({
  "url" => "example_url", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `OwnerWebhookRegistrationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PricingEntity

```ruby
pricing = client.Pricing
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `billing` | `Hash` | Yes |  |
| `branch_add_ons` | `Array` | Yes |  |
| `currency` | `Object` | Yes |  |
| `generated_at` | `String` | Yes |  |
| `neutrality` | `String` | Yes |  |
| `plans` | `Array` | Yes |  |
| `promotions` | `Array` | Yes |  |
| `published_at` | `Object` | Yes |  |
| `radius_extension` | `Hash` | Yes |  |
| `revision_id` | `Object` | Yes |  |
| `source` | `Object` | Yes |  |
| `trust_model_version` | `Object` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.Pricing.list
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PricingEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PromoteVerifiedTransactionEntity

```ruby
promote_verified_transaction = client.PromoteVerifiedTransaction
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `business_id` | `String` | Yes |  |
| `evidence_id` | `String` | Yes |  |
| `interaction_id` | `String` | Yes |  |
| `ok` | `Object` | Yes |  |
| `review_upgraded` | `Boolean` | Yes |  |
| `status` | `Object` | Yes |  |
| `trust_weight` | `Object` | Yes |  |
| `verified` | `Boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.PromoteVerifiedTransaction.create({
  "business_id" => "example_business_id", # String
  "evidence_id" => "example_evidence_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PromoteVerifiedTransactionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PublicContentEntity

```ruby
public_content = client.PublicContent
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `blocks` | `Hash` | Yes |  |
| `generated_at` | `String` | Yes |  |
| `source` | `Object` | Yes |  |
| `trust_model_version` | `Object` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.PublicContent.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PublicContentEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RecommendEntity

```ruby
recommend = client.Recommend
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `candidate_window_truncated` | `Boolean` | Yes | True when Loppee's bounded candidate assembly reached its safety cap. |
| `commercial_influence` | `String` | Yes | Must be none whenever current-location or saved_exact authority is absent, including universal exact/genuine-prefix name lookup. |
| `display_count` | `Integer` | No | Agent-key responses: the number of businesses in this response. |
| `endpoint` | `Object` | Yes |  |
| `fallback_registry` | `Array` | Yes |  |
| `generated_at` | `String` | Yes |  |
| `has_more` | `Boolean` | Yes | True only when next_cursor can continue through the current bounded, deterministic candidate window. |
| `listed` | `Array` | Yes |  |
| `location_context` | `Object` | Yes | Local category discovery and recommendations require a current precise location proof or handoff, a user-confirmed validated destination authority, or a saved_exact Home location. |
| `ordering` | `Object` | Yes |  |
| `policy` | `String` | Yes |  |
| `presentation_guidance` | `String` | No | Agent-key responses: how to present these results to the customer. |
| `query` | `Hash` | Yes |  |
| `ranking_policy` | `String` | Yes |  |
| `registry_count_basis` | `String` | Yes |  |
| `registry_count_observed_at` | `Object` | Yes |  |
| `registry_name` | `Object` | Yes |  |
| `results` | `Array` | Yes |  |
| `returned_count` | `Integer` | Yes |  |
| `reviewed_registry` | `Array` | Yes |  |
| `schema_version` | `Object` | Yes |  |
| `search_intent` | `Hash` | Yes |  |
| `suggestions` | `Hash` | No |  |
| `total_matches` | `Integer` | No | Web and app responses. |
| `total_matches_basis` | `Integer` | No |  |
| `total_registry_records` | `Integer` | Yes |  |
| `trust_model_version` | `Object` | Yes |  |
| `verified` | `Array` | Yes |  |
| `visible_candidate_records` | `Integer` | No | Web and app responses. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.Recommend.list
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RecommendEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ReviewEntity

```ruby
review = client.Review
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `String` | Yes |  |
| `attestation_accepted` | `Boolean` | Yes | Set true only after the customer confirms this describes their own experience and explicitly approves publishing the displayed business, star rating, title, and full review. |
| `customer_confirmed` | `Boolean` | No | Set true to confirm you were a customer of this business. |
| `message` | `String` | Yes |  |
| `rating` | `Integer` | Yes |  |
| `service_date` | `Object` | No | Optional real, non-future service date in YYYY-MM-DD format; empty means not provided. |
| `subject` | `String` | Yes |  |
| `target_business_id` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.Review.create({
  "account_id" => "example_account_id", # String
  "attestation_accepted" => true, # Boolean
  "message" => "example_message", # String
  "rating" => 1, # Integer
  "subject" => "example_subject", # String
  "target_business_id" => "example_target_business_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ReviewEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RevokeEntity

```ruby
revoke = client.Revoke
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `String` | Yes |  |
| `key_id` | `String` | Yes |  |
| `revoked_by` | `String` | Yes |  |
| `status` | `Object` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.Revoke.create({
  "agent_key_id" => "example_agent_key_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RevokeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SaveBusinessEntity

```ruby
save_business = client.SaveBusiness
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `String` | Yes |  |
| `business_id` | `String` | Yes |  |
| `business_name` | `String` | Yes |  |
| `business_source` | `String` | Yes |  |
| `category` | `String` | No |  |
| `city` | `String` | No |  |
| `created_at` | `String` | Yes |  |
| `notes` | `String` | No |  |
| `saved_business_id` | `String` | Yes |  |
| `state` | `String` | No |  |
| `status` | `Object` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.SaveBusiness.create({
  "account_id" => "example_account_id", # String
  "business_id" => "example_business_id", # String
  "business_name" => "example_business_name", # String
  "business_source" => "example_business_source", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SaveBusinessEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SavedBusinessEntity

```ruby
saved_business = client.SavedBusiness
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `String` | Yes |  |
| `count` | `Float` | Yes |  |
| `limit` | `Float` | No |  |
| `saved_businesses` | `Array` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.SavedBusiness.create({
  "account_id" => "example_account_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SavedBusinessEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SavedLocationEntity

```ruby
saved_location = client.SavedLocation
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `available` | `Boolean` | Yes |  |
| `coordinates_returned` | `Object` | Yes |  |
| `kind` | `Object` | Yes | Only saved_exact is precise local-discovery authority. |
| `label` | `Object` | Yes |  |
| `location_proof_id` | `String` | No |  |
| `reach_precision` | `Object` | Yes | Exact can authorize local category/recommendation reach; coarse cannot activate local results, Sponsored placement, or impressions. |
| `saved_location_ref` | `Object` | Yes |  |
| `updated_at` | `Object` | Yes |  |
| `zip` | `String` | No |  |

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

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```ruby
result = client.SavedLocation.remove()
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```ruby
result = client.SavedLocation.update({
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SavedLocationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SearchEntity

```ruby
search = client.Search
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `candidate_window_truncated` | `Boolean` | Yes | True when Loppee's bounded candidate assembly reached its safety cap. |
| `commercial_influence` | `String` | Yes | Must be none whenever current-location or saved_exact authority is absent, including universal exact/genuine-prefix name lookup. |
| `display_count` | `Integer` | No | Agent-key responses: the number of businesses in this response. |
| `generated_at` | `String` | Yes |  |
| `has_more` | `Boolean` | Yes | True only when next_cursor can continue through the current bounded, deterministic candidate window. |
| `location_context` | `Object` | Yes | Local category discovery and recommendations require a current precise location proof or handoff, a user-confirmed validated destination authority, or a saved_exact Home location. |
| `next_cursor` | `Object` | Yes |  |
| `page_limit` | `Integer` | Yes |  |
| `policy` | `String` | Yes |  |
| `presentation_guidance` | `String` | No | Agent-key responses: how to present these results to the customer. |
| `query` | `Hash` | Yes |  |
| `ranking_policy` | `String` | Yes |  |
| `registry_count_basis` | `String` | Yes |  |
| `registry_count_observed_at` | `Object` | Yes |  |
| `registry_name` | `Object` | Yes |  |
| `results` | `Array` | Yes |  |
| `returned_count` | `Integer` | Yes |  |
| `schema_version` | `Object` | Yes |  |
| `search_intent` | `Hash` | Yes |  |
| `suggestions` | `Hash` | No |  |
| `total_matches` | `Integer` | No | Web and app responses. |
| `total_matches_basis` | `Integer` | No |  |
| `total_registry_records` | `Integer` | Yes |  |
| `trust_model_version` | `Object` | Yes |  |
| `visible_candidate_records` | `Integer` | No | Web and app responses. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.Search.list
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SearchEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SuggestEntity

```ruby
suggest = client.Suggest
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `categories` | `Array` | Yes |  |
| `names` | `Array` | Yes |  |
| `query` | `String` | Yes |  |
| `schema_version` | `Object` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.Suggest.list
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SuggestEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SupportInternalNoteEntity

```ruby
support_internal_note = client.SupportInternalNote
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authorLabel` | `String` | Yes |  |
| `body` | `String` | Yes |  |
| `createdAt` | `Object` | Yes |  |
| `id` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.SupportInternalNote.create({
  "id" => "example_id", # String
  "body" => "example_body", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SupportInternalNoteEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SupportWorkflowEntity

```ruby
support_workflow = client.SupportWorkflow
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `Object` | No |  |
| `id` | `String` | No |  |
| `priority` | `Object` | No |  |
| `waiting_on` | `Object` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.SupportWorkflow.create({
  "id" => "example_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SupportWorkflowEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TaxonomySuggestionEntity

```ruby
taxonomy_suggestion = client.TaxonomySuggestion
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alias` | `String` | Yes |  |
| `path_titles` | `Array` | Yes |  |
| `title` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.TaxonomySuggestion.list
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TaxonomySuggestionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TrustCardEntity

```ruby
trust_card = client.TrustCard
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agency` | `String` | Yes |  |
| `collected_at` | `String` | Yes |  |
| `disclosure` | `String` | Yes |  |
| `fact_id` | `String` | Yes |  |
| `matched_on` | `String` | Yes |  |
| `reason` | `String` | No |  |
| `record_kind` | `String` | Yes |  |
| `record_number` | `Object` | Yes |  |
| `record_scope` | `String` | Yes |  |
| `record_type` | `String` | Yes |  |
| `recorded_expiry` | `Object` | Yes |  |
| `result` | `String` | Yes |  |
| `source_label` | `String` | Yes |  |
| `source_url` | `String` | Yes |  |
| `state` | `String` | Yes |  |
| `status_on_record` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.TrustCard.create({
  "business_id" => "example_business_id", # String
  "license_record_id" => "example_license_record_id", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.TrustCard.list({ "business_id" => "example" })
results.each { |item| puts item.data_get }
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.TrustCard.load({ "schema_name" => "schema_name" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TrustCardEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## UnsaveBusinessEntity

```ruby
unsave_business = client.UnsaveBusiness
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `String` | Yes |  |
| `business_id` | `String` | Yes |  |
| `removed` | `Boolean` | Yes |  |
| `status` | `Object` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.UnsaveBusiness.create({
  "account_id" => "example_account_id", # String
  "business_id" => "example_business_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `UnsaveBusinessEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## UpdateAgentBillingAccountEntity

```ruby
update_agent_billing_account = client.UpdateAgentBillingAccount
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `String` | Yes |  |
| `billing_account` | `Hash` | Yes |  |
| `billing_status` | `String` | No |  |
| `included_actions` | `Float` | No |  |
| `monthly_fee_cents` | `Float` | No |  |
| `overage_cents` | `Float` | No |  |
| `plan` | `String` | No |  |
| `status` | `Object` | Yes |  |
| `updated_by` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.UpdateAgentBillingAccount.create({
  "account_id" => "example_account_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `UpdateAgentBillingAccountEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WithdrawJobApplicationEntity

```ruby
withdraw_job_application = client.WithdrawJobApplication
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `String` | Yes |  |
| `already_withdrawn` | `Boolean` | Yes |  |
| `application` | `Hash` | Yes |  |
| `application_id` | `String` | Yes |  |
| `status` | `Object` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.WithdrawJobApplication.create({
  "account_id" => "example_account_id", # String
  "application_id" => "example_application_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WithdrawJobApplicationEntity` instance with the same client and
options.

#### `get_name -> String`

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

```ruby
client = LoppeeBusinessSDK.new({
  "feature" => {
    "ratelimit" => { "active" => true },
    "retry" => { "active" => true },
    "test" => { "active" => true },
    "timeout" => { "active" => true },
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

