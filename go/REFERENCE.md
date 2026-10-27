# LoppeeBusiness Golang SDK Reference

Complete API reference for the LoppeeBusiness Golang SDK.


## LoppeeBusinessSDK

### Constructor

```go
func NewLoppeeBusinessSDK(options map[string]any) *LoppeeBusinessSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *LoppeeBusinessSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *LoppeeBusinessSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `AgentAccess(data map[string]any) LoppeeBusinessEntity`

Create a new `AgentAccess` entity instance. Pass `nil` for no initial data.

#### `AgentCapability(data map[string]any) LoppeeBusinessEntity`

Create a new `AgentCapability` entity instance. Pass `nil` for no initial data.

#### `AgentConnectionTest(data map[string]any) LoppeeBusinessEntity`

Create a new `AgentConnectionTest` entity instance. Pass `nil` for no initial data.

#### `AgentIntegration(data map[string]any) LoppeeBusinessEntity`

Create a new `AgentIntegration` entity instance. Pass `nil` for no initial data.

#### `AgentMonitoring(data map[string]any) LoppeeBusinessEntity`

Create a new `AgentMonitoring` entity instance. Pass `nil` for no initial data.

#### `AgentOpenapi(data map[string]any) LoppeeBusinessEntity`

Create a new `AgentOpenapi` entity instance. Pass `nil` for no initial data.

#### `AgentPolicy(data map[string]any) LoppeeBusinessEntity`

Create a new `AgentPolicy` entity instance. Pass `nil` for no initial data.

#### `AnonymousLocationProofRevocation(data map[string]any) LoppeeBusinessEntity`

Create a new `AnonymousLocationProofRevocation` entity instance. Pass `nil` for no initial data.

#### `BusinessApplication(data map[string]any) LoppeeBusinessEntity`

Create a new `BusinessApplication` entity instance. Pass `nil` for no initial data.

#### `BusinessClaim(data map[string]any) LoppeeBusinessEntity`

Create a new `BusinessClaim` entity instance. Pass `nil` for no initial data.

#### `BusinessDeal(data map[string]any) LoppeeBusinessEntity`

Create a new `BusinessDeal` entity instance. Pass `nil` for no initial data.

#### `BusinessIndex(data map[string]any) LoppeeBusinessEntity`

Create a new `BusinessIndex` entity instance. Pass `nil` for no initial data.

#### `BusinessOwner(data map[string]any) LoppeeBusinessEntity`

Create a new `BusinessOwner` entity instance. Pass `nil` for no initial data.

#### `BusinessReview(data map[string]any) LoppeeBusinessEntity`

Create a new `BusinessReview` entity instance. Pass `nil` for no initial data.

#### `ChatAttachment(data map[string]any) LoppeeBusinessEntity`

Create a new `ChatAttachment` entity instance. Pass `nil` for no initial data.

#### `ChatAttachmentUrl(data map[string]any) LoppeeBusinessEntity`

Create a new `ChatAttachmentUrl` entity instance. Pass `nil` for no initial data.

#### `ClaimVerificationSend(data map[string]any) LoppeeBusinessEntity`

Create a new `ClaimVerificationSend` entity instance. Pass `nil` for no initial data.

#### `ClaimVerificationVerify(data map[string]any) LoppeeBusinessEntity`

Create a new `ClaimVerificationVerify` entity instance. Pass `nil` for no initial data.

#### `CommercialClick(data map[string]any) LoppeeBusinessEntity`

Create a new `CommercialClick` entity instance. Pass `nil` for no initial data.

#### `ContactRecorded(data map[string]any) LoppeeBusinessEntity`

Create a new `ContactRecorded` entity instance. Pass `nil` for no initial data.

#### `Conversation(data map[string]any) LoppeeBusinessEntity`

Create a new `Conversation` entity instance. Pass `nil` for no initial data.

#### `ConversationClose(data map[string]any) LoppeeBusinessEntity`

Create a new `ConversationClose` entity instance. Pass `nil` for no initial data.

#### `ConversationReport(data map[string]any) LoppeeBusinessEntity`

Create a new `ConversationReport` entity instance. Pass `nil` for no initial data.

#### `ConversationWorkflow(data map[string]any) LoppeeBusinessEntity`

Create a new `ConversationWorkflow` entity instance. Pass `nil` for no initial data.

#### `CreateAgentApiKey(data map[string]any) LoppeeBusinessEntity`

Create a new `CreateAgentApiKey` entity instance. Pass `nil` for no initial data.

#### `Customer(data map[string]any) LoppeeBusinessEntity`

Create a new `Customer` entity instance. Pass `nil` for no initial data.

#### `CustomerAccount(data map[string]any) LoppeeBusinessEntity`

Create a new `CustomerAccount` entity instance. Pass `nil` for no initial data.

#### `CustomerLocationProofRevocation(data map[string]any) LoppeeBusinessEntity`

Create a new `CustomerLocationProofRevocation` entity instance. Pass `nil` for no initial data.

#### `DestinationAddressSuggestion(data map[string]any) LoppeeBusinessEntity`

Create a new `DestinationAddressSuggestion` entity instance. Pass `nil` for no initial data.

#### `DestinationLocationProof(data map[string]any) LoppeeBusinessEntity`

Create a new `DestinationLocationProof` entity instance. Pass `nil` for no initial data.

#### `DomainTrustCard(data map[string]any) LoppeeBusinessEntity`

Create a new `DomainTrustCard` entity instance. Pass `nil` for no initial data.

#### `GeoContext(data map[string]any) LoppeeBusinessEntity`

Create a new `GeoContext` entity instance. Pass `nil` for no initial data.

#### `Health(data map[string]any) LoppeeBusinessEntity`

Create a new `Health` entity instance. Pass `nil` for no initial data.

#### `JobApplication(data map[string]any) LoppeeBusinessEntity`

Create a new `JobApplication` entity instance. Pass `nil` for no initial data.

#### `JobResumeSignedUrl(data map[string]any) LoppeeBusinessEntity`

Create a new `JobResumeSignedUrl` entity instance. Pass `nil` for no initial data.

#### `LocationHandoff(data map[string]any) LoppeeBusinessEntity`

Create a new `LocationHandoff` entity instance. Pass `nil` for no initial data.

#### `Message(data map[string]any) LoppeeBusinessEntity`

Create a new `Message` entity instance. Pass `nil` for no initial data.

#### `ModeratedAction(data map[string]any) LoppeeBusinessEntity`

Create a new `ModeratedAction` entity instance. Pass `nil` for no initial data.

#### `OpenApiDocument(data map[string]any) LoppeeBusinessEntity`

Create a new `OpenApiDocument` entity instance. Pass `nil` for no initial data.

#### `Operation(data map[string]any) LoppeeBusinessEntity`

Create a new `Operation` entity instance. Pass `nil` for no initial data.

#### `OwnerNotification(data map[string]any) LoppeeBusinessEntity`

Create a new `OwnerNotification` entity instance. Pass `nil` for no initial data.

#### `OwnerNotificationSetting(data map[string]any) LoppeeBusinessEntity`

Create a new `OwnerNotificationSetting` entity instance. Pass `nil` for no initial data.

#### `OwnerWebhookEndpoint(data map[string]any) LoppeeBusinessEntity`

Create a new `OwnerWebhookEndpoint` entity instance. Pass `nil` for no initial data.

#### `OwnerWebhookRegistration(data map[string]any) LoppeeBusinessEntity`

Create a new `OwnerWebhookRegistration` entity instance. Pass `nil` for no initial data.

#### `Pricing(data map[string]any) LoppeeBusinessEntity`

Create a new `Pricing` entity instance. Pass `nil` for no initial data.

#### `PromoteVerifiedTransaction(data map[string]any) LoppeeBusinessEntity`

Create a new `PromoteVerifiedTransaction` entity instance. Pass `nil` for no initial data.

#### `PublicContent(data map[string]any) LoppeeBusinessEntity`

Create a new `PublicContent` entity instance. Pass `nil` for no initial data.

#### `Recommend(data map[string]any) LoppeeBusinessEntity`

Create a new `Recommend` entity instance. Pass `nil` for no initial data.

#### `Review(data map[string]any) LoppeeBusinessEntity`

Create a new `Review` entity instance. Pass `nil` for no initial data.

#### `Revoke(data map[string]any) LoppeeBusinessEntity`

Create a new `Revoke` entity instance. Pass `nil` for no initial data.

#### `SaveBusiness(data map[string]any) LoppeeBusinessEntity`

Create a new `SaveBusiness` entity instance. Pass `nil` for no initial data.

#### `SavedBusiness(data map[string]any) LoppeeBusinessEntity`

Create a new `SavedBusiness` entity instance. Pass `nil` for no initial data.

#### `SavedLocation(data map[string]any) LoppeeBusinessEntity`

Create a new `SavedLocation` entity instance. Pass `nil` for no initial data.

#### `Search(data map[string]any) LoppeeBusinessEntity`

Create a new `Search` entity instance. Pass `nil` for no initial data.

#### `Suggest(data map[string]any) LoppeeBusinessEntity`

Create a new `Suggest` entity instance. Pass `nil` for no initial data.

#### `SupportInternalNote(data map[string]any) LoppeeBusinessEntity`

Create a new `SupportInternalNote` entity instance. Pass `nil` for no initial data.

#### `SupportWorkflow(data map[string]any) LoppeeBusinessEntity`

Create a new `SupportWorkflow` entity instance. Pass `nil` for no initial data.

#### `TaxonomySuggestion(data map[string]any) LoppeeBusinessEntity`

Create a new `TaxonomySuggestion` entity instance. Pass `nil` for no initial data.

#### `TrustCard(data map[string]any) LoppeeBusinessEntity`

Create a new `TrustCard` entity instance. Pass `nil` for no initial data.

#### `UnsaveBusiness(data map[string]any) LoppeeBusinessEntity`

Create a new `UnsaveBusiness` entity instance. Pass `nil` for no initial data.

#### `UpdateAgentBillingAccount(data map[string]any) LoppeeBusinessEntity`

Create a new `UpdateAgentBillingAccount` entity instance. Pass `nil` for no initial data.

#### `WithdrawJobApplication(data map[string]any) LoppeeBusinessEntity`

Create a new `WithdrawJobApplication` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## AgentAccessEntity

```go
agentAccess := client.AgentAccess(nil)
fmt.Println(agentAccess.GetName()) // "agent_access"
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
| `operating_states` | `[]any` | No |  |
| `organization_name` | `string` | Yes |  |
| `request_id` | `string` | Yes |  |
| `request_status` | `string` | Yes |  |
| `requested_actions` | `[]any` | No |  |
| `safety_contact` | `string` | No |  |
| `status` | `any` | Yes |  |
| `target_categories` | `[]any` | No |  |
| `use_case` | `string` | No |  |
| `website` | `string` | No |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.AgentAccess(nil).Create(map[string]any{
    "agent_name": "example_agent_name",
    "developer_email": "example_developer_email",
    "organization_name": "example_organization_name",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AgentAccessEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AgentCapabilityEntity

```go
agentCapability := client.AgentCapability(nil)
fmt.Println(agentCapability.GetName()) // "agent_capability"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_phone_location_bridge` | `map[string]any` | No |  |
| `agent_rules` | `map[string]any` | Yes |  |
| `discovery` | `map[string]any` | Yes |  |
| `external_agent_access` | `map[string]any` | Yes |  |
| `external_agent_webhooks` | `map[string]any` | Yes |  |
| `local_discovery_location_policy` | `map[string]any` | Yes |  |
| `location_choices` | `map[string]any` | No |  |
| `registry_name` | `any` | Yes |  |
| `schema_version` | `any` | Yes |  |
| `trust_model_version` | `any` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.AgentCapability(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AgentCapabilityEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AgentConnectionTestEntity

```go
agentConnectionTest := client.AgentConnectionTest(nil)
fmt.Println(agentConnectionTest.GetName()) // "agent_connection_test"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key` | `string` | No | Optional UI fallback. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.AgentConnectionTest(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AgentConnectionTestEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AgentIntegrationEntity

```go
agentIntegration := client.AgentIntegration(nil)
fmt.Println(agentIntegration.GetName()) // "agent_integration"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_model` | `map[string]any` | Yes |  |
| `commercial_influence` | `map[string]any` | Yes |  |
| `developer_docs_url` | `string` | Yes |  |
| `exposure_tiers` | `map[string]any` | Yes |  |
| `external_agent_access` | `map[string]any` | Yes |  |
| `generated_at` | `string` | Yes |  |
| `http_api` | `map[string]any` | Yes |  |
| `legal` | `map[string]any` | Yes |  |
| `mcp` | `map[string]any` | Yes |  |
| `mcp_client_example_url` | `string` | Yes |  |
| `monitoring_url` | `string` | Yes |  |
| `openapi_url` | `string` | Yes |  |
| `openapi_v1_url` | `string` | Yes |  |
| `operational_rules` | `[]any` | Yes |  |
| `owner_agent_notifications` | `map[string]any` | Yes |  |
| `package_url` | `string` | Yes |  |
| `public_base_url` | `string` | Yes |  |
| `rate_limits` | `map[string]any` | Yes |  |
| `registry_name` | `any` | Yes |  |
| `schema_version` | `string` | Yes |  |
| `trust_card_contract` | `map[string]any` | Yes |  |
| `trust_doctrine` | `map[string]any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.AgentIntegration(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AgentIntegrationEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AgentMonitoringEntity

```go
agentMonitoring := client.AgentMonitoring(nil)
fmt.Println(agentMonitoring.GetName()) // "agent_monitoring"
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
| `metrics` | `map[string]any` | Yes |  |
| `openapi_url` | `string` | Yes |  |
| `rate_limits` | `map[string]any` | Yes |  |
| `registry_name` | `any` | Yes |  |
| `schema_version` | `string` | Yes |  |
| `service` | `string` | Yes |  |
| `uptime_seconds` | `float64` | Yes |  |
| `version` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.AgentMonitoring(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AgentMonitoringEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AgentOpenapiEntity

```go
agentOpenapi := client.AgentOpenapi(nil)
fmt.Println(agentOpenapi.GetName()) // "agent_openapi"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `components` | `map[string]any` | Yes |  |
| `info` | `map[string]any` | Yes |  |
| `openapi` | `any` | Yes |  |
| `paths` | `map[string]any` | Yes |  |
| `servers` | `[]any` | Yes |  |
| `tags` | `[]any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.AgentOpenapi(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AgentOpenapiEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AgentPolicyEntity

```go
agentPolicy := client.AgentPolicy(nil)
fmt.Println(agentPolicy.GetName()) // "agent_policy"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `external_agent_access` | `map[string]any` | Yes |  |
| `external_agent_webhooks` | `map[string]any` | Yes |  |
| `local_discovery_location_policy` | `map[string]any` | Yes |  |
| `location_handoff_flow` | `map[string]any` | No |  |
| `payment` | `map[string]any` | Yes |  |
| `publication` | `map[string]any` | Yes |  |
| `schema_version` | `any` | Yes |  |
| `trust_model_version` | `any` | Yes |  |
| `verification` | `map[string]any` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.AgentPolicy(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AgentPolicyEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AnonymousLocationProofRevocationEntity

```go
anonymousLocationProofRevocation := client.AnonymousLocationProofRevocation(nil)
fmt.Println(anonymousLocationProofRevocation.GetName()) // "anonymous_location_proof_revocation"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accuracy_meters` | `float64` | Yes |  |
| `captured_at` | `string` | Yes |  |
| `latitude` | `float64` | Yes |  |
| `longitude` | `float64` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.AnonymousLocationProofRevocation(nil).Create(map[string]any{
    "accuracy_meters": 1,
    "captured_at": "example_captured_at",
    "latitude": 1,
    "longitude": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria. Returns the entity, marked as deleted; `err` is non-nil on failure.

```go
result, err := client.AnonymousLocationProofRevocation(nil).Remove(map[string]any{"location_proof_id": "location_proof_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AnonymousLocationProofRevocationEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## BusinessApplicationEntity

```go
businessApplication := client.BusinessApplication(nil)
fmt.Println(businessApplication.GetName()) // "business_application"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `application` | `map[string]any` | Yes |  |
| `application_id` | `string` | Yes |  |
| `business_id` | `string` | Yes |  |
| `claim_id` | `any` | Yes |  |
| `created_at` | `string` | Yes |  |
| `existing_business` | `bool` | Yes |  |
| `files` | `[]any` | No |  |
| `listing_id` | `string` | No |  |
| `pipeline_status` | `string` | Yes |  |
| `status` | `any` | Yes |  |
| `trust_model_version` | `any` | Yes |  |
| `uploaded_files` | `float64` | Yes |  |

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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.BusinessApplication(nil).Create(map[string]any{
    "application": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BusinessApplicationEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## BusinessClaimEntity

```go
businessClaim := client.BusinessClaim(nil)
fmt.Println(businessClaim.GetName()) // "business_claim"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `business_id` | `any` | Yes |  |
| `category` | `string` | No |  |
| `city` | `string` | No |  |
| `claim_id` | `string` | Yes |  |
| `claim_status` | `string` | Yes |  |
| `claimant_email` | `string` | No | Legacy field; authenticated owner identity wins. |
| `claimant_name` | `string` | No | Legacy field; authenticated owner identity wins. |
| `claimant_relationship` | `string` | No |  |
| `created_at` | `string` | Yes |  |
| `directory_listing_id` | `any` | Yes |  |
| `display_name` | `string` | Yes |  |
| `listing_id` | `string` | No |  |
| `notes` | `string` | No |  |
| `phone` | `string` | No |  |
| `source` | `string` | No |  |
| `source_type` | `string` | No |  |
| `source_url` | `string` | No |  |
| `state` | `string` | No |  |
| `status` | `any` | Yes |  |
| `verification` | `map[string]any` | No |  |
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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.BusinessClaim(nil).Create(map[string]any{
    "display_name": "example_display_name",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BusinessClaimEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## BusinessDealEntity

```go
businessDeal := client.BusinessDeal(nil)
fmt.Println(businessDeal.GetName()) // "business_deal"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `discountLabel` | `string` | Yes |  |
| `endsAt` | `any` | Yes |  |
| `id` | `string` | Yes |  |
| `promoCode` | `any` | Yes |  |
| `startsAt` | `any` | Yes |  |
| `terms` | `any` | Yes |  |
| `title` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.BusinessDeal(nil).List(map[string]any{"id": "example"}, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BusinessDealEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## BusinessIndexEntity

```go
businessIndex := client.BusinessIndex(nil)
fmt.Println(businessIndex.GetName()) // "business_index"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `brand_assets` | `any` | No |  |
| `business_id` | `string` | Yes |  |
| `category` | `string` | Yes |  |
| `city` | `string` | Yes |  |
| `display_name` | `string` | Yes |  |
| `domain` | `any` | Yes |  |
| `insurance` | `map[string]any` | Yes |  |
| `phone` | `any` | Yes |  |
| `public_profile_url` | `string` | Yes |  |
| `review_reputation` | `map[string]any` | Yes |  |
| `state` | `string` | Yes |  |
| `street_address` | `any` | No | Owner-published street address where authorized. |
| `trust_card_url` | `string` | Yes |  |
| `trust_model_version` | `any` | Yes |  |
| `verification_class` | `string` | Yes |  |
| `verification_disclosure` | `string` | Yes |  |
| `website` | `any` | Yes |  |
| `zip` | `any` | No | Owner-published postal code where authorized. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.BusinessIndex(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BusinessIndexEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## BusinessOwnerEntity

```go
businessOwner := client.BusinessOwner(nil)
fmt.Println(businessOwner.GetName()) // "business_owner"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | Yes |  |
| `account_role` | `string` | Yes |  |
| `acknowledge_data_effects` | `bool` | Yes |  |
| `actions` | `[]any` | Yes |  |
| `allowed_actions` | `[]any` | Yes |  |
| `amount_cents` | `float64` | Yes | Within the top-up limits (default $25 to $5,000). |
| `applicant_location_requirements` | `string` | No |  |
| `apply_url` | `any` | No |  |
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
| `campaign` | `map[string]any` | Yes |  |
| `campaign_id` | `string` | Yes |  |
| `carrier_name` | `string` | No |  |
| `category` | `string` | No |  |
| `category_alias` | `string` | No |  |
| `category_aliases` | `[]any` | Yes |  |
| `change` | `map[string]any` | Yes |  |
| `city` | `string` | No |  |
| `client_message_id` | `string` | Yes |  |
| `code` | `string` | Yes |  |
| `compensation_text` | `string` | No |  |
| `confirm` | `bool` | No |  |
| `confirmation` | `string` | Yes |  |
| `connection_kind` | `string` | Yes |  |
| `consent_sha256` | `string` | Yes | SHA-256 of the acceptance text shown (from payment-authorizations). |
| `contact_email` | `any` | No |  |
| `content_type` | `string` | Yes |  |
| `country` | `string` | No |  |
| `coupon_code` | `string` | No |  |
| `createdAt` | `any` | Yes |  |
| `created_at` | `string` | Yes |  |
| `credential_id` | `string` | Yes |  |
| `credential_identifier` | `string` | Yes |  |
| `data_base64` | `string` | Yes |  |
| `delivery_contract` | `map[string]any` | Yes |  |
| `description` | `any` | No |  |
| `direct_apply` | `bool` | No |  |
| `disabled_reason` | `any` | Yes |  |
| `discount_label` | `string` | No |  |
| `display_name` | `string` | Yes |  |
| `employment_type` | `string` | No |  |
| `enabled` | `bool` | Yes |  |
| `endpoint` | `map[string]any` | Yes |  |
| `endpoint_id` | `string` | Yes |  |
| `endpoint_url` | `string` | Yes |  |
| `ends_at` | `any` | No |  |
| `event_id` | `string` | Yes |  |
| `event_types` | `[]any` | Yes |  |
| `evidence_observed_at` | `string` | No |  |
| `expected_updated_at` | `string` | Yes |  |
| `experience_level` | `string` | No |  |
| `expires_at` | `string` | No |  |
| `factor_id` | `string` | No |  |
| `failure_count` | `int` | Yes |  |
| `file_name` | `string` | Yes |  |
| `file_sha256` | `string` | No |  |
| `full_name` | `string` | No |  |
| `guideHandoffAnsweredAt` | `any` | No |  |
| `guideHandoffAt` | `any` | No |  |
| `guideHandoffDueAt` | `any` | No |  |
| `hours` | `any` | No |  |
| `id` | `string` | Yes |  |
| `idempotency_key` | `string` | No |  |
| `installation_id` | `string` | Yes |  |
| `issuer` | `string` | Yes |  |
| `jurisdiction` | `string` | No |  |
| `kind` | `string` | Yes |  |
| `label` | `string` | No |  |
| `lastMessageAt` | `any` | Yes |  |
| `lastMessageAuthorType` | `string` | Yes |  |
| `lastMessagePreview` | `string` | Yes |  |
| `last_delivery_at` | `any` | Yes |  |
| `launch` | `bool` | No |  |
| `license_number` | `string` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `messagesTruncated` | `bool` | Yes |  |
| `monthly_cap_cents` | `float64` | No |  |
| `name` | `string` | Yes |  |
| `note` | `string` | No |  |
| `one_time_display` | `any` | Yes |  |
| `ownerEmail` | `string` | Yes |  |
| `ownerLastReadAt` | `any` | Yes |  |
| `ownerName` | `string` | Yes |  |
| `ownerUserId` | `string` | Yes |  |
| `period` | `string` | No |  |
| `phone` | `string` | No |  |
| `platform` | `string` | Yes |  |
| `policy_number` | `string` | No |  |
| `postal_code` | `string` | No |  |
| `promo_code` | `any` | No |  |
| `push_token` | `string` | Yes |  |
| `radius_miles` | `float64` | Yes |  |
| `reason` | `string` | No |  |
| `reason_category` | `string` | No |  |
| `reason_detail` | `string` | No |  |
| `registered_at` | `string` | Yes |  |
| `request_id` | `string` | Yes | Client id of this confirmation (8-100 characters); reuse it only to retry the same confirmation. |
| `requested_at` | `string` | Yes |  |
| `salary_currency` | `string` | No |  |
| `salary_max` | `any` | No |  |
| `salary_min` | `any` | No |  |
| `salary_period` | `string` | No |  |
| `save_card` | `bool` | Yes |  |
| `save_card_consent_sha256` | `string` | No | Only with save_card true: SHA-256 of the save-card consent text shown. |
| `schedule` | `string` | No |  |
| `service_areas` | `string` | No |  |
| `signing_secret` | `string` | Yes |  |
| `size_bytes` | `float64` | Yes |  |
| `skills` | `[]any` | No |  |
| `source_url` | `string` | No |  |
| `starts_at` | `any` | No |  |
| `state` | `string` | No |  |
| `stated_expires_at` | `string` | No |  |
| `status` | `string` | Yes |  |
| `street_address` | `string` | No |  |
| `subject` | `string` | Yes |  |
| `submitted_identifier` | `string` | No |  |
| `supportLastReadAt` | `any` | Yes |  |
| `terms` | `any` | No |  |
| `terms_version` | `string` | Yes | Must be the current Advertiser Terms version. |
| `threshold_cents` | `float64` | No |  |
| `ticketNumber` | `string` | Yes |  |
| `tier` | `string` | Yes |  |
| `title` | `string` | No |  |
| `total_job_openings` | `any` | No |  |
| `typing` | `bool` | No |  |
| `updatedAt` | `any` | Yes |  |
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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.BusinessOwner(nil).Create(map[string]any{
    "deal_id": "example_deal_id",
    "account_id": "example_account_id",
    "account_role": "example_account_role",
    "acknowledge_data_effects": true,
    "actions": []any{},
    "allowed_actions": []any{},
    "amount_cents": 1,
    "asset_id": "example_asset_id",
    "assigneeId": "example_assigneeId",
    "assigneeLabel": "example_assigneeLabel",
    "assigneeType": "example_assigneeType",
    "attempt_id": "example_attempt_id",
    "body": "example_body",
    "businessId": "example_businessId",
    "businessName": "example_businessName",
    "campaign": map[string]any{},
    "campaign_id": "example_campaign_id",
    "category_aliases": []any{},
    "change": map[string]any{},
    "city": "example_city",
    "client_message_id": "example_client_message_id",
    "code": "example_code",
    "confirmation": "example_confirmation",
    "connection_kind": "example_connection_kind",
    "consent_sha256": "example_consent_sha256",
    "content_type": "example_content_type",
    "createdAt": "example_createdAt",
    "created_at": "example_created_at",
    "credential_id": "example_credential_id",
    "credential_identifier": "example_credential_identifier",
    "data_base64": "example_data_base64",
    "delivery_contract": map[string]any{},
    "disabled_reason": "example_disabled_reason",
    "discount_label": "example_discount_label",
    "display_name": "example_display_name",
    "enabled": true,
    "endpoint": map[string]any{},
    "endpoint_id": "example_endpoint_id",
    "endpoint_url": "example_endpoint_url",
    "event_id": "example_event_id",
    "event_types": []any{},
    "expected_updated_at": "example_expected_updated_at",
    "factor_id": "example_factor_id",
    "failure_count": 1,
    "file_name": "example_file_name",
    "file_sha256": "example_file_sha256",
    "id": "example_id",
    "installation_id": "example_installation_id",
    "issuer": "example_issuer",
    "kind": "example_kind",
    "lastMessageAt": "example_lastMessageAt",
    "lastMessageAuthorType": "example_lastMessageAuthorType",
    "lastMessagePreview": "example_lastMessagePreview",
    "last_delivery_at": "example_last_delivery_at",
    "license_number": "example_license_number",
    "messages": []any{},
    "messagesTruncated": true,
    "name": "example_name",
    "one_time_display": "example_one_time_display",
    "ownerEmail": "example_ownerEmail",
    "ownerLastReadAt": "example_ownerLastReadAt",
    "ownerName": "example_ownerName",
    "ownerUserId": "example_ownerUserId",
    "phone": "example_phone",
    "platform": "example_platform",
    "push_token": "example_push_token",
    "radius_miles": 1,
    "reason": "example_reason",
    "registered_at": "example_registered_at",
    "request_id": "example_request_id",
    "requested_at": "example_requested_at",
    "save_card": true,
    "signing_secret": "example_signing_secret",
    "size_bytes": 1,
    "state": "example_state",
    "street_address": "example_street_address",
    "supportLastReadAt": "example_supportLastReadAt",
    "terms_version": "example_terms_version",
    "ticketNumber": "example_ticketNumber",
    "tier": "example_tier",
    "title": "example_title",
    "updatedAt": "example_updatedAt",
    "updated_at": "example_updated_at",
    "url": "example_url",
    "website": "example_website",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`. Returns the updated entity; `err` is non-nil on failure.

```go
result, err := client.BusinessOwner(nil).Update(map[string]any{
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BusinessOwnerEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## BusinessReviewEntity

```go
businessReview := client.BusinessReview(nil)
fmt.Println(businessReview.GetName()) // "business_review"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.BusinessReview(nil).Load(map[string]any{"id": "business_review_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BusinessReviewEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## ChatAttachmentEntity

```go
chatAttachment := client.ChatAttachment(nil)
fmt.Println(chatAttachment.GetName()) // "chat_attachment"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `byteSize` | `int` | Yes |  |
| `content_type` | `any` | Yes |  |
| `data_base64` | `string` | Yes |  |
| `fileName` | `string` | Yes |  |
| `file_name` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `mediaType` | `string` | Yes |  |
| `size_bytes` | `int` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.ChatAttachment(nil).Create(map[string]any{
    "conversation_id": "example_conversation_id",
    "content_type": "example_content_type",
    "data_base64": "example_data_base64",
    "file_name": "example_file_name",
    "size_bytes": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ChatAttachmentEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## ChatAttachmentUrlEntity

```go
chatAttachmentUrl := client.ChatAttachmentUrl(nil)
fmt.Println(chatAttachmentUrl.GetName()) // "chat_attachment_url"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `byte_size` | `int` | Yes |  |
| `expires_in_seconds` | `any` | Yes |  |
| `file_name` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `media_type` | `string` | Yes |  |
| `signed_url` | `string` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.ChatAttachmentUrl(nil).Create(map[string]any{
    "attachment_id": "example_attachment_id",
    "conversation_id": "example_conversation_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ChatAttachmentUrlEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## ClaimVerificationSendEntity

```go
claimVerificationSend := client.ClaimVerificationSend(nil)
fmt.Println(claimVerificationSend.GetName()) // "claim_verification_send"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `challenge_id` | `string` | No | Opaque v3 SMS or owner-email challenge UUID. |
| `channel` | `any` | Yes |  |
| `claim_id` | `string` | Yes |  |
| `destination_hint` | `string` | No |  |
| `expires_in_seconds` | `float64` | No |  |
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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.ClaimVerificationSend(nil).Create(map[string]any{
    "claim_id": "example_claim_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ClaimVerificationSendEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## ClaimVerificationVerifyEntity

```go
claimVerificationVerify := client.ClaimVerificationVerify(nil)
fmt.Println(claimVerificationVerify.GetName()) // "claim_verification_verify"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `business_id` | `any` | Yes |  |
| `challenge_id` | `string` | No | Exact challenge UUID returned by the v3 SMS or owner-email send. |
| `channel` | `any` | No |  |
| `claim_id` | `string` | Yes |  |
| `code` | `string` | Yes |  |
| `method` | `any` | No |  |
| `publication` | `map[string]any` | No |  |
| `status` | `any` | Yes |  |
| `transfer_review_required` | `any` | No |  |
| `trust_model_version` | `any` | No |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.ClaimVerificationVerify(nil).Create(map[string]any{
    "claim_id": "example_claim_id",
    "code": "example_code",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ClaimVerificationVerifyEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## CommercialClickEntity

```go
commercialClick := client.CommercialClick(nil)
fmt.Println(commercialClick.GetName()) // "commercial_click"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action_type` | `any` | Yes |  |
| `ad_receipt` | `string` | No | Opaque server-signed receipt of a served Sponsored ad, sent back unchanged with a profile, website or call tap. |
| `billable` | `bool` | Yes |  |
| `billing_event_id` | `any` | No |  |
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
| `metadata` | `map[string]any` | No |  |
| `migration_required` | `bool` | No |  |
| `page_path` | `string` | No |  |
| `referrer` | `string` | No |  |
| `source_type` | `any` | Yes |  |
| `state` | `string` | No |  |
| `status` | `any` | Yes |  |
| `storage` | `any` | Yes |  |
| `surface` | `any` | No | Where the Sponsored ad was shown (with ad_receipt). |
| `target_url` | `string` | No |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.CommercialClick(nil).Create(map[string]any{
    "action_type": "example_action_type",
    "source_type": "example_source_type",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CommercialClickEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## ContactRecordedEntity

```go
contactRecorded := client.ContactRecorded(nil)
fmt.Println(contactRecorded.GetName()) // "contact_recorded"
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
| `verified` | `bool` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.ContactRecorded(nil).Create(map[string]any{
    "business_id": "example_business_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ContactRecordedEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## ConversationEntity

```go
conversation := client.Conversation(nil)
fmt.Println(conversation.GetName()) // "conversation"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | Yes |  |
| `conversation_id` | `string` | No | Exact conversation referenced by a webhook; returns zero or one scoped thread. |
| `conversations` | `[]any` | Yes |  |
| `count` | `float64` | Yes |  |
| `cursor` | `string` | No | Opaque pagination cursor returned by the previous page. |
| `limit` | `float64` | No |  |
| `pagination` | `map[string]any` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.Conversation(nil).Create(map[string]any{
    "account_id": "example_account_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ConversationEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## ConversationCloseEntity

```go
conversationClose := client.ConversationClose(nil)
fmt.Println(conversationClose.GetName()) // "conversation_close"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `closed_at` | `string` | Yes |  |
| `conversation_id` | `string` | Yes |  |
| `id` | `string` | No |  |
| `status` | `any` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.ConversationClose(nil).Create(map[string]any{
    "id": "example_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ConversationCloseEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## ConversationReportEntity

```go
conversationReport := client.ConversationReport(nil)
fmt.Println(conversationReport.GetName()) // "conversation_report"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `detail` | `string` | No |  |
| `id` | `string` | No |  |
| `reason` | `any` | Yes |  |
| `status` | `any` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.ConversationReport(nil).Create(map[string]any{
    "id": "example_id",
    "reason": "example_reason",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ConversationReportEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## ConversationWorkflowEntity

```go
conversationWorkflow := client.ConversationWorkflow(nil)
fmt.Println(conversationWorkflow.GetName()) // "conversation_workflow"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `priority` | `any` | No |  |
| `status` | `any` | No |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.ConversationWorkflow(nil).Create(map[string]any{
    "message_id": "example_message_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ConversationWorkflowEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## CreateAgentApiKeyEntity

```go
createAgentApiKey := client.CreateAgentApiKey(nil)
fmt.Println(createAgentApiKey.GetName()) // "create_agent_api_key"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | Yes |  |
| `allowed_actions` | `[]any` | No |  |
| `allowed_business_ids` | `[]any` | No |  |
| `created_by` | `string` | Yes |  |
| `key` | `map[string]any` | Yes |  |
| `label` | `string` | No |  |
| `monthly_quota` | `float64` | No |  |
| `notes` | `string` | No |  |
| `one_time_display` | `any` | Yes |  |
| `rate_limit_per_minute` | `float64` | No |  |
| `raw_key` | `string` | Yes |  |
| `status` | `any` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.CreateAgentApiKey(nil).Create(map[string]any{
    "account_id": "example_account_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CreateAgentApiKeyEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## CustomerEntity

```go
customer := client.Customer(nil)
fmt.Println(customer.GetName()) // "customer"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_provider` | `string` | No |  |
| `avatar_url` | `any` | Yes | Short-lived signed display URL for a private avatar object, or null. |
| `city` | `any` | Yes |  |
| `created_at` | `any` | Yes |  |
| `email` | `string` | Yes |  |
| `full_name` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `phone` | `any` | Yes |  |
| `search_category` | `string` | No |  |
| `service_need` | `string` | No |  |
| `state` | `any` | Yes |  |
| `status` | `any` | Yes |  |
| `updated_at` | `any` | Yes |  |

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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.Customer(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CustomerEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## CustomerAccountEntity

```go
customerAccount := client.CustomerAccount(nil)
fmt.Println(customerAccount.GetName()) // "customer_account"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | Yes |  |
| `account_role` | `string` | Yes |  |
| `accuracy_meters` | `float64` | Yes |  |
| `acknowledge_data_effects` | `bool` | Yes |  |
| `actions` | `[]any` | Yes |  |
| `agent_key_id` | `string` | Yes |  |
| `agent_receives_coordinates` | `bool` | Yes |  |
| `all_paused` | `bool` | Yes |  |
| `app_attest_registered` | `bool` | Yes |  |
| `assertion` | `string` | Yes |  |
| `attestation` | `string` | Yes |  |
| `author_label` | `string` | Yes |  |
| `author_type` | `string` | Yes |  |
| `binding` | `any` | Yes |  |
| `body` | `string` | Yes |  |
| `business_id` | `any` | Yes |  |
| `capture_source` | `any` | Yes |  |
| `captured_at` | `string` | Yes |  |
| `challenge` | `string` | Yes |  |
| `challenge_id` | `string` | Yes |  |
| `client_message_id` | `string` | Yes |  |
| `completed` | `bool` | Yes |  |
| `confirmation` | `string` | Yes |  |
| `connection_id` | `string` | Yes |  |
| `connection_kind` | `string` | Yes |  |
| `continuation` | `any` | Yes | The continuation from the previous response, sent back unchanged to get the next results. |
| `coordinates_returned` | `bool` | Yes |  |
| `created_at` | `string` | Yes |  |
| `credential_id` | `string` | Yes |  |
| `declined` | `bool` | Yes |  |
| `delivery_contract` | `map[string]any` | Yes |  |
| `disabled_reason` | `any` | Yes |  |
| `disclosure` | `string` | Yes |  |
| `enabled` | `bool` | Yes |  |
| `endpoint` | `map[string]any` | Yes |  |
| `endpoint_id` | `string` | Yes |  |
| `endpoint_url` | `string` | Yes |  |
| `environment` | `string` | Yes |  |
| `event_id` | `string` | Yes |  |
| `event_types` | `[]any` | Yes |  |
| `failure_count` | `int` | Yes |  |
| `handoff_id` | `string` | Yes |  |
| `has_more` | `bool` | Yes |  |
| `id` | `string` | Yes |  |
| `idempotent_replay` | `bool` | Yes |  |
| `installation_id` | `string` | Yes |  |
| `key_id` | `string` | Yes |  |
| `last_delivery_at` | `any` | Yes |  |
| `latitude` | `float64` | Yes |  |
| `location` | `any` | No | An opaque location reference from the website's own location controls. |
| `longitude` | `float64` | Yes |  |
| `message_alerts_enabled` | `bool` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `mode` | `string` | Yes | fallback: a direct search answered because the language model was unavailable. |
| `name` | `string` | No |  |
| `oauth_grant_id` | `any` | Yes |  |
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
| `results` | `[]any` | Yes |  |
| `schema_version` | `string` | Yes |  |
| `selected_at` | `string` | Yes |  |
| `signed_in` | `bool` | Yes |  |
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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.CustomerAccount(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "account_role": "example_account_role",
    "accuracy_meters": 1,
    "acknowledge_data_effects": true,
    "actions": []any{},
    "agent_key_id": "example_agent_key_id",
    "agent_receives_coordinates": true,
    "all_paused": true,
    "app_attest_registered": true,
    "assertion": "example_assertion",
    "attestation": "example_attestation",
    "author_label": "example_author_label",
    "author_type": "example_author_type",
    "binding": "example_binding",
    "body": "example_body",
    "business_id": "example_business_id",
    "capture_source": "example_capture_source",
    "captured_at": "example_captured_at",
    "challenge": "example_challenge",
    "challenge_id": "example_challenge_id",
    "client_message_id": "example_client_message_id",
    "completed": true,
    "confirmation": "example_confirmation",
    "connection_id": "example_connection_id",
    "connection_kind": "example_connection_kind",
    "coordinates_returned": true,
    "created_at": "example_created_at",
    "credential_id": "example_credential_id",
    "declined": true,
    "delivery_contract": map[string]any{},
    "disabled_reason": "example_disabled_reason",
    "disclosure": "example_disclosure",
    "enabled": true,
    "endpoint": map[string]any{},
    "endpoint_id": "example_endpoint_id",
    "endpoint_url": "example_endpoint_url",
    "environment": "example_environment",
    "event_id": "example_event_id",
    "event_types": []any{},
    "failure_count": 1,
    "handoff_id": "example_handoff_id",
    "has_more": true,
    "id": "example_id",
    "idempotent_replay": true,
    "installation_id": "example_installation_id",
    "key_id": "example_key_id",
    "last_delivery_at": "example_last_delivery_at",
    "latitude": 1,
    "longitude": 1,
    "message_alerts_enabled": true,
    "messages": []any{},
    "mode": "example_mode",
    "oauth_grant_id": "example_oauth_grant_id",
    "one_time_display": "example_one_time_display",
    "platform": "example_platform",
    "policy": "example_policy",
    "purpose": "example_purpose",
    "push_token": "example_push_token",
    "registered_at": "example_registered_at",
    "reply": "example_reply",
    "request_mode": "example_request_mode",
    "requested_at": "example_requested_at",
    "results": []any{},
    "schema_version": "example_schema_version",
    "selected_at": "example_selected_at",
    "signed_in": true,
    "signing_secret": "example_signing_secret",
    "status": "example_status",
    "updated_at": "example_updated_at",
    "url": "example_url",
    "usable_until": "example_usable_until",
    "use_mode": "example_use_mode",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CustomerAccountEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## CustomerLocationProofRevocationEntity

```go
customerLocationProofRevocation := client.CustomerLocationProofRevocation(nil)
fmt.Println(customerLocationProofRevocation.GetName()) // "customer_location_proof_revocation"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accuracy_meters` | `float64` | Yes |  |
| `captured_at` | `string` | Yes |  |
| `latitude` | `float64` | Yes |  |
| `longitude` | `float64` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.CustomerLocationProofRevocation(nil).Create(map[string]any{
    "accuracy_meters": 1,
    "captured_at": "example_captured_at",
    "latitude": 1,
    "longitude": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria. Returns the entity, marked as deleted; `err` is non-nil on failure.

```go
result, err := client.CustomerLocationProofRevocation(nil).Remove(map[string]any{"location_proof_id": "location_proof_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CustomerLocationProofRevocationEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## DestinationAddressSuggestionEntity

```go
destinationAddressSuggestion := client.DestinationAddressSuggestion(nil)
fmt.Println(destinationAddressSuggestion.GetName()) // "destination_address_suggestion"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `input` | `string` | Yes | Normalized partial US service-address text. |
| `suggestions` | `[]any` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.DestinationAddressSuggestion(nil).Create(map[string]any{
    "input": "example_input",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DestinationAddressSuggestionEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## DestinationLocationProofEntity

```go
destinationLocationProof := client.DestinationLocationProof(nil)
fmt.Println(destinationLocationProof.GetName()) // "destination_location_proof"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `string` | Yes | A real US service address. |
| `premise_proximity_confirmation_token` | `string` | No | Opaque one-time token from the immediately preceding premise-proximity challenge for the same address and authority. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.DestinationLocationProof(nil).Create(map[string]any{
    "address": "example_address",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DestinationLocationProofEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## DomainTrustCardEntity

```go
domainTrustCard := client.DomainTrustCard(nil)
fmt.Println(domainTrustCard.GetName()) // "domain_trust_card"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `business_id` | `string` | Yes |  |
| `domain` | `string` | Yes |  |
| `schema_version` | `any` | Yes |  |
| `trust_card` | `map[string]any` | Yes |  |
| `trust_card_url` | `string` | Yes |  |
| `trust_model_version` | `any` | Yes |  |
| `verification_class` | `any` | Yes |  |
| `verification_disclosure` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.DomainTrustCard(nil).Load(map[string]any{"domain_key": "domain_key"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DomainTrustCardEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## GeoContextEntity

```go
geoContext := client.GeoContext(nil)
fmt.Println(geoContext.GetName()) // "geo_context"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.GeoContext(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GeoContextEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## HealthEntity

```go
health := client.Health(nil)
fmt.Println(health.GetName()) // "health"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_phone_location_bridge` | `map[string]any` | Yes |  |
| `build_sha` | `string` | Yes |  |
| `business_review_access` | `map[string]any` | Yes |  |
| `contract_version` | `string` | Yes |  |
| `external_agent_webhooks` | `map[string]any` | Yes |  |
| `external_agent_webhooks_enabled` | `bool` | Yes |  |
| `ios_app_attest_anonymous_location` | `map[string]any` | Yes |  |
| `location_choices` | `map[string]any` | Yes |  |
| `location_handoff` | `map[string]any` | Yes |  |
| `mobile_push` | `any` | Yes |  |
| `ok` | `any` | Yes |  |
| `service` | `string` | Yes |  |
| `sponsored_ordering` | `map[string]any` | Yes |  |
| `trust_model_version` | `any` | Yes |  |
| `version` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.Health(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `HealthEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## JobApplicationEntity

```go
jobApplication := client.JobApplication(nil)
fmt.Println(jobApplication.GetName()) // "job_application"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | Yes |  |
| `already_withdrawn` | `bool` | No |  |
| `application` | `map[string]any` | Yes |  |
| `applications` | `[]any` | Yes |  |
| `billing` | `map[string]any` | Yes |  |
| `business_id` | `string` | No |  |
| `count` | `float64` | Yes |  |
| `cover_note` | `string` | No |  |
| `free_to_apply` | `bool` | No |  |
| `id` | `string` | No |  |
| `job_id` | `string` | Yes |  |
| `limit` | `float64` | Yes |  |
| `offset` | `float64` | Yes |  |
| `resume` | `map[string]any` | Yes |  |
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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.JobApplication(nil).Create(map[string]any{
    "job_id": "example_job_id",
    "resume": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `JobApplicationEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## JobResumeSignedUrlEntity

```go
jobResumeSignedUrl := client.JobResumeSignedUrl(nil)
fmt.Println(jobResumeSignedUrl.GetName()) // "job_resume_signed_url"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `application_id` | `string` | Yes |  |
| `content_type` | `string` | Yes |  |
| `expires_in_seconds` | `float64` | Yes |  |
| `resume_file_name` | `string` | Yes |  |
| `signed_url` | `string` | Yes |  |
| `size_bytes` | `float64` | Yes |  |
| `status` | `any` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.JobResumeSignedUrl(nil).Create(map[string]any{
    "job_application_id": "example_job_application_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `JobResumeSignedUrlEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## LocationHandoffEntity

```go
locationHandoff := client.LocationHandoff(nil)
fmt.Println(locationHandoff.GetName()) // "location_handoff"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.LocationHandoff(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LocationHandoffEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## MessageEntity

```go
message := client.Message(nil)
fmt.Println(message.GetName()) // "message"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | Yes |  |
| `client_message_id` | `string` | Yes | Caller-stable retry key. |
| `conversation_id` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `delivery` | `any` | No |  |
| `idempotent_replay` | `bool` | Yes |  |
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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.Message(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "client_message_id": "example_client_message_id",
    "message": "example_message",
    "subject": "example_subject",
    "target_business_id": "example_target_business_id",
    "target_business_name": "example_target_business_name",
    "target_business_source": "example_target_business_source",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MessageEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## ModeratedActionEntity

```go
moderatedAction := client.ModeratedAction(nil)
fmt.Println(moderatedAction.GetName()) // "moderated_action"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actions` | `[]any` | Yes |  |
| `body` | `string` | Yes |  |
| `client_request_id` | `string` | No |  |
| `content_type` | `string` | Yes |  |
| `continuation` | `any` | Yes | The continuation from the previous response, sent back unchanged to get the next results. |
| `coordinates_returned` | `bool` | Yes |  |
| `disclosure` | `string` | Yes |  |
| `enabled` | `bool` | Yes |  |
| `file_sha256` | `string` | Yes |  |
| `has_more` | `bool` | Yes |  |
| `human_confirmation` | `bool` | No |  |
| `intent_id` | `string` | Yes |  |
| `kind` | `string` | No |  |
| `knowledgeVersion` | `string` | Yes |  |
| `limits` | `map[string]any` | Yes |  |
| `links` | `[]any` | Yes |  |
| `location` | `map[string]any` | Yes | An opaque location reference from the website's own location controls. |
| `message` | `string` | No |  |
| `messages` | `[]any` | Yes |  |
| `mode` | `string` | Yes | fallback: a direct search answered because the language model was unavailable. |
| `name` | `string` | Yes |  |
| `needsHuman` | `bool` | Yes |  |
| `policy` | `map[string]any` | Yes | Human schedule and separate claim-review policy. |
| `question` | `string` | Yes |  |
| `reply` | `string` | Yes |  |
| `result` | `string` | Yes |  |
| `results` | `[]any` | Yes |  |
| `scan_authority_id` | `string` | Yes |  |
| `scanner` | `string` | Yes |  |
| `scanner_version` | `string` | Yes |  |
| `schema_version` | `string` | Yes |  |
| `searcher_latitude` | `float64` | No |  |
| `searcher_longitude` | `float64` | No |  |
| `signature` | `string` | No |  |
| `signed_in` | `bool` | Yes |  |
| `size_bytes` | `float64` | Yes |  |
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.ModeratedAction(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.ModeratedAction(nil).Create(map[string]any{
    "content_type": "example_content_type",
    "file_sha256": "example_file_sha256",
    "intent_id": "example_intent_id",
    "messages": []any{},
    "question": "example_question",
    "result": "example_result",
    "scan_authority_id": "example_scan_authority_id",
    "scanner": "example_scanner",
    "scanner_version": "example_scanner_version",
    "size_bytes": 1,
    "target_business_id": "example_target_business_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ModeratedActionEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## OpenApiDocumentEntity

```go
openApiDocument := client.OpenApiDocument(nil)
fmt.Println(openApiDocument.GetName()) // "open_api_document"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `components` | `map[string]any` | Yes |  |
| `info` | `map[string]any` | Yes |  |
| `openapi` | `any` | Yes |  |
| `paths` | `map[string]any` | Yes |  |
| `servers` | `[]any` | Yes |  |
| `tags` | `[]any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.OpenApiDocument(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OpenApiDocumentEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## OperationEntity

```go
operation := client.Operation(nil)
fmt.Println(operation.GetName()) // "operation"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | Yes |  |
| `action` | `string` | Yes |  |
| `active` | `bool` | No |  |
| `active_or_good_standing` | `bool` | No |  |
| `ai_draft_id` | `string` | No |  |
| `allowed_actions` | `[]any` | Yes |  |
| `alt` | `string` | No |  |
| `amount_cents` | `float64` | Yes | Whole cents, non-zero, at most 1,000,000 either way; a promotional credit is positive. |
| `amount_off_cents` | `float64` | No |  |
| `api_key` | `string` | Yes |  |
| `applies_to_period` | `string` | No |  |
| `applies_to_tier` | `any` | No |  |
| `assigned_admin_user_id` | `any` | No |  |
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
| `business_id` | `any` | Yes |  |
| `business_ids` | `[]any` | Yes |  |
| `campaign_id` | `string` | No |  |
| `campaign_ids` | `[]any` | No |  |
| `caption` | `string` | No |  |
| `case_status` | `string` | No |  |
| `catalog` | `[]any` | Yes |  |
| `category` | `string` | No |  |
| `category_alias` | `string` | Yes |  |
| `chunk_size` | `float64` | No |  |
| `city` | `string` | No |  |
| `code` | `string` | Yes |  |
| `confidence` | `float64` | No |  |
| `config` | `map[string]any` | Yes | Complete validated pricing configuration. |
| `confirm` | `bool` | Yes |  |
| `confirm_admin` | `bool` | No |  |
| `confirmation` | `string` | Yes |  |
| `connection_id` | `string` | Yes |  |
| `connection_kind` | `string` | Yes |  |
| `content_type` | `string` | Yes |  |
| `context_id` | `string` | Yes |  |
| `context_type` | `string` | Yes |  |
| `createdAt` | `any` | Yes |  |
| `created_at` | `string` | Yes |  |
| `credential_expires_at` | `string` | No | Expiration date printed on the license. |
| `credential_id` | `string` | Yes |  |
| `custom_wire` | `string` | No |  |
| `data_base64` | `string` | Yes |  |
| `decision` | `string` | Yes |  |
| `dedupe_ack` | `bool` | No |  |
| `delivery_contract` | `map[string]any` | Yes |  |
| `disabled_reason` | `any` | Yes |  |
| `discount_type` | `string` | Yes |  |
| `display_name` | `string` | Yes |  |
| `disposition` | `string` | Yes |  |
| `draft` | `map[string]any` | Yes |  |
| `duration` | `string` | No |  |
| `duration_in_months` | `any` | No |  |
| `email` | `string` | Yes |  |
| `enabled` | `bool` | Yes |  |
| `endpoint` | `map[string]any` | Yes |  |
| `endpoint_id` | `string` | Yes |  |
| `endpoint_url` | `string` | Yes |  |
| `ends_at` | `string` | Yes |  |
| `environment_fallback` | `any` | Yes |  |
| `event_id` | `string` | Yes |  |
| `event_types` | `[]any` | Yes |  |
| `expected_allowed_actions` | `[]any` | Yes |  |
| `expected_key_id` | `string` | Yes |  |
| `expected_updated_at` | `string` | Yes |  |
| `expected_version` | `float64` | Yes |  |
| `expires_at` | `string` | No | Promotional credit only: ISO date-time 1 hour to 2 years ahead, disclosed to the owner. |
| `fact_id` | `string` | Yes |  |
| `facts` | `map[string]any` | Yes |  |
| `failure_count` | `int` | Yes |  |
| `fields` | `map[string]any` | Yes | Validated fields for this fixed content-block type. |
| `file_name` | `string` | Yes |  |
| `guideHandoffAnsweredAt` | `any` | No |  |
| `guideHandoffAt` | `any` | No |  |
| `guideHandoffDueAt` | `any` | No |  |
| `height` | `float64` | No |  |
| `historic_association_checked` | `bool` | Yes |  |
| `hold` | `string` | Yes |  |
| `holder_name_match` | `bool` | No |  |
| `hours` | `map[string]any` | Yes |  |
| `id` | `string` | Yes |  |
| `idempotency_key` | `string` | No |  |
| `identifier_match` | `bool` | No |  |
| `in_use` | `map[string]any` | Yes |  |
| `instruction` | `string` | No |  |
| `invited` | `bool` | Yes |  |
| `key_check` | `any` | Yes |  |
| `kind` | `string` | Yes |  |
| `label` | `string` | Yes |  |
| `lastMessageAt` | `any` | Yes |  |
| `lastMessageAuthorType` | `string` | Yes |  |
| `lastMessagePreview` | `string` | Yes |  |
| `last_delivery_at` | `any` | Yes |  |
| `last_error_code` | `any` | Yes |  |
| `last_probe_at` | `any` | Yes |  |
| `last_problem` | `any` | Yes |  |
| `legal_name` | `string` | No |  |
| `limit` | `float64` | No |  |
| `make_active` | `bool` | Yes |  |
| `max_cents` | `float64` | Yes |  |
| `max_redemptions` | `any` | No |  |
| `messages` | `[]any` | Yes |  |
| `messagesTruncated` | `bool` | Yes |  |
| `min_cents` | `float64` | Yes |  |
| `model` | `string` | Yes |  |
| `model_id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `note` | `string` | No |  |
| `notes` | `string` | No |  |
| `observed_at` | `string` | No |  |
| `one_time_display` | `any` | Yes |  |
| `outcome` | `string` | Yes |  |
| `ownerEmail` | `string` | Yes |  |
| `ownerLastReadAt` | `any` | Yes |  |
| `ownerName` | `string` | Yes |  |
| `ownerUserId` | `string` | Yes |  |
| `owner_reason_code` | `string` | No | Controlled owner-visible rejection reason. |
| `per_customer_limit` | `float64` | No |  |
| `percent_off` | `float64` | No |  |
| `phone` | `string` | No |  |
| `policyVersion` | `string` | Yes |  |
| `priority` | `string` | No |  |
| `provider` | `string` | Yes |  |
| `providers` | `[]any` | Yes |  |
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
| `report_ids` | `[]any` | Yes |  |
| `reserve_cents` | `float64` | Yes | 100-10000; never below $1.00. |
| `resolution_note` | `string` | Yes |  |
| `review_notes` | `string` | No |  |
| `revision` | `int` | Yes |  |
| `role` | `string` | Yes |  |
| `rows` | `[]any` | Yes |  |
| `run` | `map[string]any` | Yes |  |
| `schema_version` | `string` | Yes |  |
| `scope` | `string` | Yes |  |
| `search` | `string` | No |  |
| `settings` | `map[string]any` | Yes |  |
| `signing_secret` | `string` | Yes |  |
| `size_bytes` | `float64` | Yes |  |
| `sla_due_at` | `any` | No |  |
| `source` | `string` | Yes |  |
| `source_authority` | `string` | No | Exact official authority name. |
| `source_category_slug` | `string` | Yes |  |
| `source_scope_checked` | `bool` | Yes |  |
| `source_url` | `string` | No | Exact HTTPS official source URL. |
| `starts_at` | `any` | No |  |
| `state` | `string` | No | Bulk by area: every ad of the advertisers in this two-letter U.S. |
| `status` | `string` | Yes |  |
| `storage` | `string` | Yes |  |
| `street_address` | `string` | No |  |
| `subject` | `string` | Yes |  |
| `supportLastReadAt` | `any` | Yes |  |
| `target_category` | `string` | Yes |  |
| `taxonomy_category_aliases` | `[]any` | Yes |  |
| `ticketNumber` | `string` | Yes |  |
| `tier` | `string` | No |  |
| `typing` | `bool` | No |  |
| `until` | `string` | No |  |
| `updatedAt` | `any` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `url` | `string` | Yes | Public HTTPS receiver operated by the connecting principal or its agent runtime. |
| `valid_until` | `string` | No |  |
| `value` | `string` | Yes |  |
| `verification_method` | `string` | Yes |  |
| `verified_at` | `any` | Yes |  |
| `verified_service_scope` | `[]any` | No |  |
| `version` | `string` | No |  |
| `website` | `string` | No |  |
| `width` | `float64` | No |  |
| `window_hours` | `float64` | No | 1-744, default 48. |
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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.Operation(nil).Create(map[string]any{
    "coupon_id": "example_coupon_id",
    "account_id": "example_account_id",
    "allowed_actions": []any{},
    "amount_cents": 1,
    "api_key": "example_api_key",
    "assigneeId": "example_assigneeId",
    "assigneeLabel": "example_assigneeLabel",
    "assigneeType": "example_assigneeType",
    "assistant_enabled": true,
    "body": "example_body",
    "businessId": "example_businessId",
    "businessName": "example_businessName",
    "business_ids": []any{},
    "catalog": []any{},
    "code": "example_code",
    "config": map[string]any{},
    "confirmation": "example_confirmation",
    "connection_id": "example_connection_id",
    "connection_kind": "example_connection_kind",
    "content_type": "example_content_type",
    "context_id": "example_context_id",
    "context_type": "example_context_type",
    "createdAt": "example_createdAt",
    "created_at": "example_created_at",
    "credential_id": "example_credential_id",
    "data_base64": "example_data_base64",
    "decision": "example_decision",
    "delivery_contract": map[string]any{},
    "disabled_reason": "example_disabled_reason",
    "discount_type": "example_discount_type",
    "display_name": "example_display_name",
    "disposition": "example_disposition",
    "draft": map[string]any{},
    "email": "example_email",
    "enabled": true,
    "endpoint": map[string]any{},
    "endpoint_id": "example_endpoint_id",
    "endpoint_url": "example_endpoint_url",
    "ends_at": "example_ends_at",
    "environment_fallback": "example_environment_fallback",
    "event_id": "example_event_id",
    "event_types": []any{},
    "expected_allowed_actions": []any{},
    "expected_key_id": "example_expected_key_id",
    "expected_updated_at": "example_expected_updated_at",
    "expected_version": 1,
    "fact_id": "example_fact_id",
    "facts": map[string]any{},
    "failure_count": 1,
    "fields": map[string]any{},
    "file_name": "example_file_name",
    "historic_association_checked": true,
    "hold": "example_hold",
    "hours": map[string]any{},
    "id": "example_id",
    "in_use": map[string]any{},
    "invited": true,
    "key_check": "example_key_check",
    "kind": "example_kind",
    "label": "example_label",
    "lastMessageAt": "example_lastMessageAt",
    "lastMessageAuthorType": "example_lastMessageAuthorType",
    "lastMessagePreview": "example_lastMessagePreview",
    "last_delivery_at": "example_last_delivery_at",
    "last_error_code": "example_last_error_code",
    "last_probe_at": "example_last_probe_at",
    "last_problem": "example_last_problem",
    "make_active": true,
    "max_cents": 1,
    "messages": []any{},
    "messagesTruncated": true,
    "min_cents": 1,
    "model": "example_model",
    "model_id": "example_model_id",
    "name": "example_name",
    "one_time_display": "example_one_time_display",
    "outcome": "example_outcome",
    "ownerEmail": "example_ownerEmail",
    "ownerLastReadAt": "example_ownerLastReadAt",
    "ownerName": "example_ownerName",
    "ownerUserId": "example_ownerUserId",
    "policyVersion": "example_policyVersion",
    "provider": "example_provider",
    "providers": []any{},
    "purpose_code": "example_purpose_code",
    "rank_bid_cents": 1,
    "reference": "example_reference",
    "report_ids": []any{},
    "reserve_cents": 1,
    "resolution_note": "example_resolution_note",
    "revision": 1,
    "rows": []any{},
    "run": map[string]any{},
    "schema_version": "example_schema_version",
    "scope": "example_scope",
    "settings": map[string]any{},
    "signing_secret": "example_signing_secret",
    "size_bytes": 1,
    "source_scope_checked": true,
    "storage": "example_storage",
    "subject": "example_subject",
    "supportLastReadAt": "example_supportLastReadAt",
    "taxonomy_category_aliases": []any{},
    "ticketNumber": "example_ticketNumber",
    "tier": "example_tier",
    "updatedAt": "example_updatedAt",
    "updated_at": "example_updated_at",
    "url": "example_url",
    "value": "example_value",
    "verification_method": "example_verification_method",
    "verified_at": "example_verified_at",
    "workload": "example_workload",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`. Returns the updated entity; `err` is non-nil on failure.

```go
result, err := client.Operation(nil).Update(map[string]any{
    "provider": "provider",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Patch(reqdata, ctrl map[string]any) (any, error)`

Change part of an existing entity: only the fields given are sent. The data must include the entity `id`. Returns the patched entity; `err` is non-nil on failure.

```go
result, err := client.Operation(nil).Patch(map[string]any{
    "candidate_id": "candidate_id",
    // Only the fields to change
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria. Returns the entity, marked as deleted; `err` is non-nil on failure.

```go
result, err := client.Operation(nil).Remove(map[string]any{"access_context_id": "access_context_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OperationEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## OwnerNotificationEntity

```go
ownerNotification := client.OwnerNotification(nil)
fmt.Println(ownerNotification.GetName()) // "owner_notification"
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
| `readAt` | `any` | Yes |  |
| `resourceId` | `string` | Yes |  |
| `resourceKind` | `any` | Yes |  |
| `resourceUrl` | `string` | Yes |  |
| `summary` | `string` | Yes |  |
| `webhookStatus` | `string` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.OwnerNotification(nil).Create(map[string]any{
    "notification_id": "example_notification_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OwnerNotificationEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## OwnerNotificationSettingEntity

```go
ownerNotificationSetting := client.OwnerNotificationSetting(nil)
fmt.Println(ownerNotificationSetting.GetName()) // "owner_notification_setting"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `businessId` | `string` | Yes |  |
| `business_id` | `string` | No |  |
| `createdAt` | `string` | Yes |  |
| `emailEnabled` | `bool` | Yes |  |
| `email_enabled` | `bool` | No |  |
| `eventTypeSubscriptions` | `[]any` | Yes |  |
| `event_types` | `[]any` | No |  |
| `updatedAt` | `string` | Yes |  |
| `webhookEnabled` | `bool` | Yes |  |
| `webhook_enabled` | `bool` | No |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.OwnerNotificationSetting(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OwnerNotificationSettingEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## OwnerWebhookEndpointEntity

```go
ownerWebhookEndpoint := client.OwnerWebhookEndpoint(nil)
fmt.Println(ownerWebhookEndpoint.GetName()) // "owner_webhook_endpoint"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `businessId` | `string` | Yes |  |
| `createdAt` | `string` | Yes |  |
| `enabled` | `bool` | Yes |  |
| `eventTypeSubscriptions` | `[]any` | Yes |  |
| `failureCount` | `float64` | Yes |  |
| `id` | `string` | Yes |  |
| `lastDeliveryAt` | `any` | Yes |  |
| `updatedAt` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.OwnerWebhookEndpoint(nil).Create(map[string]any{
    "webhook_id": "example_webhook_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OwnerWebhookEndpointEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## OwnerWebhookRegistrationEntity

```go
ownerWebhookRegistration := client.OwnerWebhookRegistration(nil)
fmt.Println(ownerWebhookRegistration.GetName()) // "owner_webhook_registration"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `business_id` | `string` | No |  |
| `endpoint` | `map[string]any` | Yes |  |
| `event_types` | `[]any` | No |  |
| `one_time_display` | `any` | Yes |  |
| `signing_secret` | `string` | Yes |  |
| `status` | `any` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.OwnerWebhookRegistration(nil).Create(map[string]any{
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OwnerWebhookRegistrationEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## PricingEntity

```go
pricing := client.Pricing(nil)
fmt.Println(pricing.GetName()) // "pricing"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `billing` | `map[string]any` | Yes |  |
| `branch_add_ons` | `[]any` | Yes |  |
| `currency` | `any` | Yes |  |
| `generated_at` | `string` | Yes |  |
| `neutrality` | `string` | Yes |  |
| `plans` | `[]any` | Yes |  |
| `promotions` | `[]any` | Yes |  |
| `published_at` | `any` | Yes |  |
| `radius_extension` | `map[string]any` | Yes |  |
| `revision_id` | `any` | Yes |  |
| `source` | `any` | Yes |  |
| `trust_model_version` | `any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.Pricing(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PricingEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## PromoteVerifiedTransactionEntity

```go
promoteVerifiedTransaction := client.PromoteVerifiedTransaction(nil)
fmt.Println(promoteVerifiedTransaction.GetName()) // "promote_verified_transaction"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `business_id` | `string` | Yes |  |
| `evidence_id` | `string` | Yes |  |
| `interaction_id` | `string` | Yes |  |
| `ok` | `any` | Yes |  |
| `review_upgraded` | `bool` | Yes |  |
| `status` | `any` | Yes |  |
| `trust_weight` | `any` | Yes |  |
| `verified` | `bool` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.PromoteVerifiedTransaction(nil).Create(map[string]any{
    "business_id": "example_business_id",
    "evidence_id": "example_evidence_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PromoteVerifiedTransactionEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## PublicContentEntity

```go
publicContent := client.PublicContent(nil)
fmt.Println(publicContent.GetName()) // "public_content"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `blocks` | `map[string]any` | Yes |  |
| `generated_at` | `string` | Yes |  |
| `source` | `any` | Yes |  |
| `trust_model_version` | `any` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.PublicContent(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PublicContentEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## RecommendEntity

```go
recommend := client.Recommend(nil)
fmt.Println(recommend.GetName()) // "recommend"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `candidate_window_truncated` | `bool` | Yes | True when Loppee's bounded candidate assembly reached its safety cap. |
| `commercial_influence` | `string` | Yes | Must be none whenever current-location or saved_exact authority is absent, including universal exact/genuine-prefix name lookup. |
| `display_count` | `int` | No | Agent-key responses: the number of businesses in this response. |
| `endpoint` | `any` | Yes |  |
| `fallback_registry` | `[]any` | Yes |  |
| `generated_at` | `string` | Yes |  |
| `has_more` | `bool` | Yes | True only when next_cursor can continue through the current bounded, deterministic candidate window. |
| `listed` | `[]any` | Yes |  |
| `location_context` | `any` | Yes | Local category discovery and recommendations require a current precise location proof or handoff, a user-confirmed validated destination authority, or a saved_exact Home location. |
| `ordering` | `any` | Yes |  |
| `policy` | `string` | Yes |  |
| `presentation_guidance` | `string` | No | Agent-key responses: how to present these results to the customer. |
| `query` | `map[string]any` | Yes |  |
| `ranking_policy` | `string` | Yes |  |
| `registry_count_basis` | `string` | Yes |  |
| `registry_count_observed_at` | `any` | Yes |  |
| `registry_name` | `any` | Yes |  |
| `results` | `[]any` | Yes |  |
| `returned_count` | `int` | Yes |  |
| `reviewed_registry` | `[]any` | Yes |  |
| `schema_version` | `any` | Yes |  |
| `search_intent` | `map[string]any` | Yes |  |
| `suggestions` | `map[string]any` | No |  |
| `total_matches` | `int` | No | Web and app responses. |
| `total_matches_basis` | `int` | No |  |
| `total_registry_records` | `int` | Yes |  |
| `trust_model_version` | `any` | Yes |  |
| `verified` | `[]any` | Yes |  |
| `visible_candidate_records` | `int` | No | Web and app responses. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.Recommend(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RecommendEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## ReviewEntity

```go
review := client.Review(nil)
fmt.Println(review.GetName()) // "review"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | Yes |  |
| `attestation_accepted` | `bool` | Yes | Set true only after the customer confirms this describes their own experience and explicitly approves publishing the displayed business, star rating, title, and full review. |
| `customer_confirmed` | `bool` | No | Set true to confirm you were a customer of this business. |
| `message` | `string` | Yes |  |
| `rating` | `int` | Yes |  |
| `service_date` | `any` | No | Optional real, non-future service date in YYYY-MM-DD format; empty means not provided. |
| `subject` | `string` | Yes |  |
| `target_business_id` | `string` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.Review(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "attestation_accepted": true,
    "message": "example_message",
    "rating": 1,
    "subject": "example_subject",
    "target_business_id": "example_target_business_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ReviewEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## RevokeEntity

```go
revoke := client.Revoke(nil)
fmt.Println(revoke.GetName()) // "revoke"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | Yes |  |
| `key_id` | `string` | Yes |  |
| `revoked_by` | `string` | Yes |  |
| `status` | `any` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.Revoke(nil).Create(map[string]any{
    "agent_key_id": "example_agent_key_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RevokeEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## SaveBusinessEntity

```go
saveBusiness := client.SaveBusiness(nil)
fmt.Println(saveBusiness.GetName()) // "save_business"
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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.SaveBusiness(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "business_id": "example_business_id",
    "business_name": "example_business_name",
    "business_source": "example_business_source",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SaveBusinessEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## SavedBusinessEntity

```go
savedBusiness := client.SavedBusiness(nil)
fmt.Println(savedBusiness.GetName()) // "saved_business"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | Yes |  |
| `count` | `float64` | Yes |  |
| `limit` | `float64` | No |  |
| `saved_businesses` | `[]any` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.SavedBusiness(nil).Create(map[string]any{
    "account_id": "example_account_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SavedBusinessEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## SavedLocationEntity

```go
savedLocation := client.SavedLocation(nil)
fmt.Println(savedLocation.GetName()) // "saved_location"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `available` | `bool` | Yes |  |
| `coordinates_returned` | `any` | Yes |  |
| `kind` | `any` | Yes | Only saved_exact is precise local-discovery authority. |
| `label` | `any` | Yes |  |
| `location_proof_id` | `string` | No |  |
| `reach_precision` | `any` | Yes | Exact can authorize local category/recommendation reach; coarse cannot activate local results, Sponsored placement, or impressions. |
| `saved_location_ref` | `any` | Yes |  |
| `updated_at` | `any` | Yes |  |
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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`. Returns the updated entity; `err` is non-nil on failure.

```go
result, err := client.SavedLocation(nil).Update(map[string]any{
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria. Returns the entity, marked as deleted; `err` is non-nil on failure.

```go
result, err := client.SavedLocation(nil).Remove(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SavedLocationEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## SearchEntity

```go
search := client.Search(nil)
fmt.Println(search.GetName()) // "search"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `candidate_window_truncated` | `bool` | Yes | True when Loppee's bounded candidate assembly reached its safety cap. |
| `commercial_influence` | `string` | Yes | Must be none whenever current-location or saved_exact authority is absent, including universal exact/genuine-prefix name lookup. |
| `display_count` | `int` | No | Agent-key responses: the number of businesses in this response. |
| `generated_at` | `string` | Yes |  |
| `has_more` | `bool` | Yes | True only when next_cursor can continue through the current bounded, deterministic candidate window. |
| `location_context` | `any` | Yes | Local category discovery and recommendations require a current precise location proof or handoff, a user-confirmed validated destination authority, or a saved_exact Home location. |
| `next_cursor` | `any` | Yes |  |
| `page_limit` | `int` | Yes |  |
| `policy` | `string` | Yes |  |
| `presentation_guidance` | `string` | No | Agent-key responses: how to present these results to the customer. |
| `query` | `map[string]any` | Yes |  |
| `ranking_policy` | `string` | Yes |  |
| `registry_count_basis` | `string` | Yes |  |
| `registry_count_observed_at` | `any` | Yes |  |
| `registry_name` | `any` | Yes |  |
| `results` | `[]any` | Yes |  |
| `returned_count` | `int` | Yes |  |
| `schema_version` | `any` | Yes |  |
| `search_intent` | `map[string]any` | Yes |  |
| `suggestions` | `map[string]any` | No |  |
| `total_matches` | `int` | No | Web and app responses. |
| `total_matches_basis` | `int` | No |  |
| `total_registry_records` | `int` | Yes |  |
| `trust_model_version` | `any` | Yes |  |
| `visible_candidate_records` | `int` | No | Web and app responses. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.Search(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SearchEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## SuggestEntity

```go
suggest := client.Suggest(nil)
fmt.Println(suggest.GetName()) // "suggest"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `categories` | `[]any` | Yes |  |
| `names` | `[]any` | Yes |  |
| `query` | `string` | Yes |  |
| `schema_version` | `any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.Suggest(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SuggestEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## SupportInternalNoteEntity

```go
supportInternalNote := client.SupportInternalNote(nil)
fmt.Println(supportInternalNote.GetName()) // "support_internal_note"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authorLabel` | `string` | Yes |  |
| `body` | `string` | Yes |  |
| `createdAt` | `any` | Yes |  |
| `id` | `string` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.SupportInternalNote(nil).Create(map[string]any{
    "id": "example_id",
    "body": "example_body",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SupportInternalNoteEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## SupportWorkflowEntity

```go
supportWorkflow := client.SupportWorkflow(nil)
fmt.Println(supportWorkflow.GetName()) // "support_workflow"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `any` | No |  |
| `id` | `string` | No |  |
| `priority` | `any` | No |  |
| `waiting_on` | `any` | No |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.SupportWorkflow(nil).Create(map[string]any{
    "id": "example_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SupportWorkflowEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## TaxonomySuggestionEntity

```go
taxonomySuggestion := client.TaxonomySuggestion(nil)
fmt.Println(taxonomySuggestion.GetName()) // "taxonomy_suggestion"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alias` | `string` | Yes |  |
| `path_titles` | `[]any` | Yes |  |
| `title` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.TaxonomySuggestion(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TaxonomySuggestionEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## TrustCardEntity

```go
trustCard := client.TrustCard(nil)
fmt.Println(trustCard.GetName()) // "trust_card"
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
| `record_number` | `any` | Yes |  |
| `record_scope` | `string` | Yes |  |
| `record_type` | `string` | Yes |  |
| `recorded_expiry` | `any` | Yes |  |
| `result` | `string` | Yes |  |
| `source_label` | `string` | Yes |  |
| `source_url` | `string` | Yes |  |
| `state` | `string` | Yes |  |
| `status_on_record` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.TrustCard(nil).List(map[string]any{"business_id": "example"}, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.TrustCard(nil).Load(map[string]any{"schema_name": "schema_name"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.TrustCard(nil).Create(map[string]any{
    "business_id": "example_business_id",
    "license_record_id": "example_license_record_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TrustCardEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## UnsaveBusinessEntity

```go
unsaveBusiness := client.UnsaveBusiness(nil)
fmt.Println(unsaveBusiness.GetName()) // "unsave_business"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | Yes |  |
| `business_id` | `string` | Yes |  |
| `removed` | `bool` | Yes |  |
| `status` | `any` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.UnsaveBusiness(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "business_id": "example_business_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UnsaveBusinessEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## UpdateAgentBillingAccountEntity

```go
updateAgentBillingAccount := client.UpdateAgentBillingAccount(nil)
fmt.Println(updateAgentBillingAccount.GetName()) // "update_agent_billing_account"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | Yes |  |
| `billing_account` | `map[string]any` | Yes |  |
| `billing_status` | `string` | No |  |
| `included_actions` | `float64` | No |  |
| `monthly_fee_cents` | `float64` | No |  |
| `overage_cents` | `float64` | No |  |
| `plan` | `string` | No |  |
| `status` | `any` | Yes |  |
| `updated_by` | `string` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.UpdateAgentBillingAccount(nil).Create(map[string]any{
    "account_id": "example_account_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UpdateAgentBillingAccountEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## WithdrawJobApplicationEntity

```go
withdrawJobApplication := client.WithdrawJobApplication(nil)
fmt.Println(withdrawJobApplication.GetName()) // "withdraw_job_application"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | Yes |  |
| `already_withdrawn` | `bool` | Yes |  |
| `application` | `map[string]any` | Yes |  |
| `application_id` | `string` | Yes |  |
| `status` | `any` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.WithdrawJobApplication(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "application_id": "example_application_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WithdrawJobApplicationEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

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

```go
client := sdk.NewLoppeeBusinessSDK(map[string]any{
    "feature": map[string]any{
        "ratelimit": map[string]any{"active": true},
        "retry": map[string]any{"active": true},
        "test": map[string]any{"active": true},
        "timeout": map[string]any{"active": true},
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

