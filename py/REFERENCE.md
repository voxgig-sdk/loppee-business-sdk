# LoppeeBusiness Python SDK Reference

Complete API reference for the LoppeeBusiness Python SDK.


## LoppeeBusinessSDK

### Constructor

```python
from loppeebusiness_sdk import LoppeeBusinessSDK

client = LoppeeBusinessSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `LoppeeBusinessSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = LoppeeBusinessSDK.test()
```


### Instance Methods

#### `AgentAccess(data=None)`

Create a new `AgentAccessEntity` instance. Pass `None` for no initial data.

#### `AgentCapability(data=None)`

Create a new `AgentCapabilityEntity` instance. Pass `None` for no initial data.

#### `AgentConnectionTest(data=None)`

Create a new `AgentConnectionTestEntity` instance. Pass `None` for no initial data.

#### `AgentIntegration(data=None)`

Create a new `AgentIntegrationEntity` instance. Pass `None` for no initial data.

#### `AgentMonitoring(data=None)`

Create a new `AgentMonitoringEntity` instance. Pass `None` for no initial data.

#### `AgentOpenapi(data=None)`

Create a new `AgentOpenapiEntity` instance. Pass `None` for no initial data.

#### `AgentPolicy(data=None)`

Create a new `AgentPolicyEntity` instance. Pass `None` for no initial data.

#### `AnonymousLocationProofRevocation(data=None)`

Create a new `AnonymousLocationProofRevocationEntity` instance. Pass `None` for no initial data.

#### `BusinessApplication(data=None)`

Create a new `BusinessApplicationEntity` instance. Pass `None` for no initial data.

#### `BusinessClaim(data=None)`

Create a new `BusinessClaimEntity` instance. Pass `None` for no initial data.

#### `BusinessDeal(data=None)`

Create a new `BusinessDealEntity` instance. Pass `None` for no initial data.

#### `BusinessIndex(data=None)`

Create a new `BusinessIndexEntity` instance. Pass `None` for no initial data.

#### `BusinessOwner(data=None)`

Create a new `BusinessOwnerEntity` instance. Pass `None` for no initial data.

#### `BusinessReview(data=None)`

Create a new `BusinessReviewEntity` instance. Pass `None` for no initial data.

#### `ChatAttachment(data=None)`

Create a new `ChatAttachmentEntity` instance. Pass `None` for no initial data.

#### `ChatAttachmentUrl(data=None)`

Create a new `ChatAttachmentUrlEntity` instance. Pass `None` for no initial data.

#### `ClaimVerificationSend(data=None)`

Create a new `ClaimVerificationSendEntity` instance. Pass `None` for no initial data.

#### `ClaimVerificationVerify(data=None)`

Create a new `ClaimVerificationVerifyEntity` instance. Pass `None` for no initial data.

#### `CommercialClick(data=None)`

Create a new `CommercialClickEntity` instance. Pass `None` for no initial data.

#### `ContactRecorded(data=None)`

Create a new `ContactRecordedEntity` instance. Pass `None` for no initial data.

#### `Conversation(data=None)`

Create a new `ConversationEntity` instance. Pass `None` for no initial data.

#### `ConversationClose(data=None)`

Create a new `ConversationCloseEntity` instance. Pass `None` for no initial data.

#### `ConversationReport(data=None)`

Create a new `ConversationReportEntity` instance. Pass `None` for no initial data.

#### `ConversationWorkflow(data=None)`

Create a new `ConversationWorkflowEntity` instance. Pass `None` for no initial data.

#### `CreateAgentApiKey(data=None)`

Create a new `CreateAgentApiKeyEntity` instance. Pass `None` for no initial data.

#### `Customer(data=None)`

Create a new `CustomerEntity` instance. Pass `None` for no initial data.

#### `CustomerAccount(data=None)`

Create a new `CustomerAccountEntity` instance. Pass `None` for no initial data.

#### `CustomerLocationProofRevocation(data=None)`

Create a new `CustomerLocationProofRevocationEntity` instance. Pass `None` for no initial data.

#### `DestinationAddressSuggestion(data=None)`

Create a new `DestinationAddressSuggestionEntity` instance. Pass `None` for no initial data.

#### `DestinationLocationProof(data=None)`

Create a new `DestinationLocationProofEntity` instance. Pass `None` for no initial data.

#### `DomainTrustCard(data=None)`

Create a new `DomainTrustCardEntity` instance. Pass `None` for no initial data.

#### `GeoContext(data=None)`

Create a new `GeoContextEntity` instance. Pass `None` for no initial data.

#### `Health(data=None)`

Create a new `HealthEntity` instance. Pass `None` for no initial data.

#### `JobApplication(data=None)`

Create a new `JobApplicationEntity` instance. Pass `None` for no initial data.

#### `JobResumeSignedUrl(data=None)`

Create a new `JobResumeSignedUrlEntity` instance. Pass `None` for no initial data.

#### `LocationHandoff(data=None)`

Create a new `LocationHandoffEntity` instance. Pass `None` for no initial data.

#### `Message(data=None)`

Create a new `MessageEntity` instance. Pass `None` for no initial data.

#### `ModeratedAction(data=None)`

Create a new `ModeratedActionEntity` instance. Pass `None` for no initial data.

#### `OpenApiDocument(data=None)`

Create a new `OpenApiDocumentEntity` instance. Pass `None` for no initial data.

#### `Operation(data=None)`

Create a new `OperationEntity` instance. Pass `None` for no initial data.

#### `OwnerNotification(data=None)`

Create a new `OwnerNotificationEntity` instance. Pass `None` for no initial data.

#### `OwnerNotificationSetting(data=None)`

Create a new `OwnerNotificationSettingEntity` instance. Pass `None` for no initial data.

#### `OwnerWebhookEndpoint(data=None)`

Create a new `OwnerWebhookEndpointEntity` instance. Pass `None` for no initial data.

#### `OwnerWebhookRegistration(data=None)`

Create a new `OwnerWebhookRegistrationEntity` instance. Pass `None` for no initial data.

#### `Pricing(data=None)`

Create a new `PricingEntity` instance. Pass `None` for no initial data.

#### `PromoteVerifiedTransaction(data=None)`

Create a new `PromoteVerifiedTransactionEntity` instance. Pass `None` for no initial data.

#### `PublicContent(data=None)`

Create a new `PublicContentEntity` instance. Pass `None` for no initial data.

#### `Recommend(data=None)`

Create a new `RecommendEntity` instance. Pass `None` for no initial data.

#### `Review(data=None)`

Create a new `ReviewEntity` instance. Pass `None` for no initial data.

#### `Revoke(data=None)`

Create a new `RevokeEntity` instance. Pass `None` for no initial data.

#### `SaveBusiness(data=None)`

Create a new `SaveBusinessEntity` instance. Pass `None` for no initial data.

#### `SavedBusiness(data=None)`

Create a new `SavedBusinessEntity` instance. Pass `None` for no initial data.

#### `SavedLocation(data=None)`

Create a new `SavedLocationEntity` instance. Pass `None` for no initial data.

#### `Search(data=None)`

Create a new `SearchEntity` instance. Pass `None` for no initial data.

#### `Suggest(data=None)`

Create a new `SuggestEntity` instance. Pass `None` for no initial data.

#### `SupportInternalNote(data=None)`

Create a new `SupportInternalNoteEntity` instance. Pass `None` for no initial data.

#### `SupportWorkflow(data=None)`

Create a new `SupportWorkflowEntity` instance. Pass `None` for no initial data.

#### `TaxonomySuggestion(data=None)`

Create a new `TaxonomySuggestionEntity` instance. Pass `None` for no initial data.

#### `TrustCard(data=None)`

Create a new `TrustCardEntity` instance. Pass `None` for no initial data.

#### `UnsaveBusiness(data=None)`

Create a new `UnsaveBusinessEntity` instance. Pass `None` for no initial data.

#### `UpdateAgentBillingAccount(data=None)`

Create a new `UpdateAgentBillingAccountEntity` instance. Pass `None` for no initial data.

#### `WithdrawJobApplication(data=None)`

Create a new `WithdrawJobApplicationEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## AgentAccessEntity

```python
agent_access = client.AgentAccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_name` | `str` | Yes |  |
| `agent_type` | `str` | No |  |
| `callback_url` | `str` | No |  |
| `compliance_notes` | `str` | No |  |
| `created_at` | `str` | Yes |  |
| `data_needs` | `str` | No |  |
| `developer_email` | `str` | Yes |  |
| `operating_states` | `list` | No |  |
| `organization_name` | `str` | Yes |  |
| `request_id` | `str` | Yes |  |
| `request_status` | `str` | Yes |  |
| `requested_actions` | `list` | No |  |
| `safety_contact` | `str` | No |  |
| `status` | `Any` | Yes |  |
| `target_categories` | `list` | No |  |
| `use_case` | `str` | No |  |
| `website` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> AgentAccessEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.AgentAccess().create({
    "agent_name": "example_agent_name",  # str
    "developer_email": "example_developer_email",  # str
    "organization_name": "example_organization_name",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentAccessEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AgentCapabilityEntity

```python
agent_capability = client.AgentCapability()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_phone_location_bridge` | `dict` | No |  |
| `agent_rules` | `dict` | Yes |  |
| `discovery` | `dict` | Yes |  |
| `external_agent_access` | `dict` | Yes |  |
| `external_agent_webhooks` | `dict` | Yes |  |
| `local_discovery_location_policy` | `dict` | Yes |  |
| `location_choices` | `dict` | No |  |
| `registry_name` | `Any` | Yes |  |
| `schema_version` | `Any` | Yes |  |
| `trust_model_version` | `Any` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> AgentCapabilityEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.AgentCapability().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentCapabilityEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AgentConnectionTestEntity

```python
agent_connection_test = client.AgentConnectionTest()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key` | `str` | No | Optional UI fallback. |

### Operations

#### `create(reqdata, ctrl=None) -> AgentConnectionTestEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.AgentConnectionTest().create({
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentConnectionTestEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AgentIntegrationEntity

```python
agent_integration = client.AgentIntegration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_model` | `dict` | Yes |  |
| `commercial_influence` | `dict` | Yes |  |
| `developer_docs_url` | `str` | Yes |  |
| `exposure_tiers` | `dict` | Yes |  |
| `external_agent_access` | `dict` | Yes |  |
| `generated_at` | `str` | Yes |  |
| `http_api` | `dict` | Yes |  |
| `legal` | `dict` | Yes |  |
| `mcp` | `dict` | Yes |  |
| `mcp_client_example_url` | `str` | Yes |  |
| `monitoring_url` | `str` | Yes |  |
| `openapi_url` | `str` | Yes |  |
| `openapi_v1_url` | `str` | Yes |  |
| `operational_rules` | `list` | Yes |  |
| `owner_agent_notifications` | `dict` | Yes |  |
| `package_url` | `str` | Yes |  |
| `public_base_url` | `str` | Yes |  |
| `rate_limits` | `dict` | Yes |  |
| `registry_name` | `Any` | Yes |  |
| `schema_version` | `str` | Yes |  |
| `trust_card_contract` | `dict` | Yes |  |
| `trust_doctrine` | `dict` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[AgentIntegrationEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.AgentIntegration().list()
for agent_integration in results:
    print(agent_integration.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentIntegrationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AgentMonitoringEntity

```python
agent_monitoring = client.AgentMonitoring()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `build_sha` | `str` | Yes |  |
| `contract_version` | `str` | Yes |  |
| `generated_at` | `str` | Yes |  |
| `health_url` | `str` | Yes |  |
| `integration_package_url` | `str` | Yes |  |
| `mcp_url` | `str` | Yes |  |
| `metrics` | `dict` | Yes |  |
| `openapi_url` | `str` | Yes |  |
| `rate_limits` | `dict` | Yes |  |
| `registry_name` | `Any` | Yes |  |
| `schema_version` | `str` | Yes |  |
| `service` | `str` | Yes |  |
| `uptime_seconds` | `float` | Yes |  |
| `version` | `str` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> AgentMonitoringEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.AgentMonitoring().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentMonitoringEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AgentOpenapiEntity

```python
agent_openapi = client.AgentOpenapi()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `components` | `dict` | Yes |  |
| `info` | `dict` | Yes |  |
| `openapi` | `Any` | Yes |  |
| `paths` | `dict` | Yes |  |
| `servers` | `list` | Yes |  |
| `tags` | `list` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[AgentOpenapiEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.AgentOpenapi().list()
for agent_openapi in results:
    print(agent_openapi.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentOpenapiEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AgentPolicyEntity

```python
agent_policy = client.AgentPolicy()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `external_agent_access` | `dict` | Yes |  |
| `external_agent_webhooks` | `dict` | Yes |  |
| `local_discovery_location_policy` | `dict` | Yes |  |
| `location_handoff_flow` | `dict` | No |  |
| `payment` | `dict` | Yes |  |
| `publication` | `dict` | Yes |  |
| `schema_version` | `Any` | Yes |  |
| `trust_model_version` | `Any` | Yes |  |
| `verification` | `dict` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> AgentPolicyEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.AgentPolicy().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AgentPolicyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AnonymousLocationProofRevocationEntity

```python
anonymous_location_proof_revocation = client.AnonymousLocationProofRevocation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accuracy_meters` | `float` | Yes |  |
| `captured_at` | `str` | Yes |  |
| `latitude` | `float` | Yes |  |
| `longitude` | `float` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> AnonymousLocationProofRevocationEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.AnonymousLocationProofRevocation().create({
    "accuracy_meters": 1,  # float
    "captured_at": "example_captured_at",  # str
    "latitude": 1,  # float
    "longitude": 1,  # float
})
```

#### `remove(reqmatch, ctrl=None) -> AnonymousLocationProofRevocationEntity`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```python
result = client.AnonymousLocationProofRevocation().remove({"location_proof_id": "location_proof_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AnonymousLocationProofRevocationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BusinessApplicationEntity

```python
business_application = client.BusinessApplication()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `application` | `dict` | Yes |  |
| `application_id` | `str` | Yes |  |
| `business_id` | `str` | Yes |  |
| `claim_id` | `str | None` | Yes |  |
| `created_at` | `str` | Yes |  |
| `existing_business` | `bool` | Yes |  |
| `files` | `list` | No |  |
| `listing_id` | `str` | No |  |
| `pipeline_status` | `str` | Yes |  |
| `status` | `Any` | Yes |  |
| `trust_model_version` | `Any` | Yes |  |
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

#### `create(reqdata, ctrl=None) -> BusinessApplicationEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.BusinessApplication().create({
    "application": {},  # dict
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BusinessApplicationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BusinessClaimEntity

```python
business_claim = client.BusinessClaim()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `business_id` | `str | None` | Yes |  |
| `category` | `str` | No |  |
| `city` | `str` | No |  |
| `claim_id` | `str` | Yes |  |
| `claim_status` | `str` | Yes |  |
| `claimant_email` | `str` | No | Legacy field; authenticated owner identity wins. |
| `claimant_name` | `str` | No | Legacy field; authenticated owner identity wins. |
| `claimant_relationship` | `str` | No |  |
| `created_at` | `str` | Yes |  |
| `directory_listing_id` | `str | None` | Yes |  |
| `display_name` | `str` | Yes |  |
| `listing_id` | `str` | No |  |
| `notes` | `str` | No |  |
| `phone` | `str` | No |  |
| `source` | `str` | No |  |
| `source_type` | `str` | No |  |
| `source_url` | `str` | No |  |
| `state` | `str` | No |  |
| `status` | `Any` | Yes |  |
| `verification` | `dict` | No |  |
| `website` | `str` | No |  |

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

#### `create(reqdata, ctrl=None) -> BusinessClaimEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.BusinessClaim().create({
    "display_name": "example_display_name",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BusinessClaimEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BusinessDealEntity

```python
business_deal = client.BusinessDeal()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `str` | Yes |  |
| `description` | `str` | Yes |  |
| `discountLabel` | `str` | Yes |  |
| `endsAt` | `str | None` | Yes |  |
| `id` | `str` | Yes |  |
| `promoCode` | `str | None` | Yes |  |
| `startsAt` | `str | None` | Yes |  |
| `terms` | `str | None` | Yes |  |
| `title` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[BusinessDealEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.BusinessDeal().list({"id": "example"})
for business_deal in results:
    print(business_deal.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BusinessDealEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BusinessIndexEntity

```python
business_index = client.BusinessIndex()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `brand_assets` | `Any` | No |  |
| `business_id` | `str` | Yes |  |
| `category` | `str` | Yes |  |
| `city` | `str` | Yes |  |
| `display_name` | `str` | Yes |  |
| `domain` | `str | None` | Yes |  |
| `insurance` | `dict` | Yes |  |
| `phone` | `str | None` | Yes |  |
| `public_profile_url` | `str` | Yes |  |
| `review_reputation` | `dict` | Yes |  |
| `state` | `str` | Yes |  |
| `street_address` | `str | None` | No | Owner-published street address where authorized. |
| `trust_card_url` | `str` | Yes |  |
| `trust_model_version` | `Any` | Yes |  |
| `verification_class` | `str` | Yes |  |
| `verification_disclosure` | `str` | Yes |  |
| `website` | `str | None` | Yes |  |
| `zip` | `str | None` | No | Owner-published postal code where authorized. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[BusinessIndexEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.BusinessIndex().list()
for business_index in results:
    print(business_index.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BusinessIndexEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BusinessOwnerEntity

```python
business_owner = client.BusinessOwner()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `str` | Yes |  |
| `account_role` | `str` | Yes |  |
| `acknowledge_data_effects` | `bool` | Yes |  |
| `actions` | `list` | Yes |  |
| `allowed_actions` | `list` | Yes |  |
| `amount_cents` | `float` | Yes | Within the top-up limits (default $25 to $5,000). |
| `applicant_location_requirements` | `str` | No |  |
| `apply_url` | `str | None` | No |  |
| `asset_id` | `str` | Yes |  |
| `assigneeId` | `str` | Yes |  |
| `assigneeLabel` | `str` | Yes |  |
| `assigneeType` | `str` | Yes |  |
| `attempt_id` | `str` | Yes |  |
| `benefits` | `str` | No |  |
| `body` | `str` | Yes |  |
| `businessId` | `str` | Yes |  |
| `businessName` | `str` | Yes |  |
| `business_id` | `str` | Yes |  |
| `campaign` | `dict` | Yes |  |
| `campaign_id` | `str` | Yes |  |
| `carrier_name` | `str` | No |  |
| `category` | `str` | No |  |
| `category_alias` | `str` | No |  |
| `category_aliases` | `list` | Yes |  |
| `change` | `dict` | Yes |  |
| `city` | `str` | No |  |
| `client_message_id` | `str` | Yes |  |
| `code` | `str` | Yes |  |
| `compensation_text` | `str` | No |  |
| `confirm` | `bool` | No |  |
| `confirmation` | `str` | Yes |  |
| `connection_kind` | `str` | Yes |  |
| `consent_sha256` | `str` | Yes | SHA-256 of the acceptance text shown (from payment-authorizations). |
| `contact_email` | `str | None` | No |  |
| `content_type` | `str` | Yes |  |
| `country` | `str` | No |  |
| `coupon_code` | `str` | No |  |
| `createdAt` | `str | None` | Yes |  |
| `created_at` | `str` | Yes |  |
| `credential_id` | `str` | Yes |  |
| `credential_identifier` | `str` | Yes |  |
| `data_base64` | `str` | Yes |  |
| `delivery_contract` | `dict` | Yes |  |
| `description` | `str | None` | No |  |
| `direct_apply` | `bool` | No |  |
| `disabled_reason` | `str | None` | Yes |  |
| `discount_label` | `str` | No |  |
| `display_name` | `str` | Yes |  |
| `employment_type` | `str` | No |  |
| `enabled` | `bool` | Yes |  |
| `endpoint` | `dict` | Yes |  |
| `endpoint_id` | `str` | Yes |  |
| `endpoint_url` | `str` | Yes |  |
| `ends_at` | `str | None` | No |  |
| `event_id` | `str` | Yes |  |
| `event_types` | `list` | Yes |  |
| `evidence_observed_at` | `str` | No |  |
| `expected_updated_at` | `str` | Yes |  |
| `experience_level` | `str` | No |  |
| `expires_at` | `str` | No |  |
| `factor_id` | `str` | No |  |
| `failure_count` | `int` | Yes |  |
| `file_name` | `str` | Yes |  |
| `file_sha256` | `str` | No |  |
| `full_name` | `str` | No |  |
| `guideHandoffAnsweredAt` | `str | None` | No |  |
| `guideHandoffAt` | `str | None` | No |  |
| `guideHandoffDueAt` | `str | None` | No |  |
| `hours` | `dict | None` | No |  |
| `id` | `str` | Yes |  |
| `idempotency_key` | `str` | No |  |
| `installation_id` | `str` | Yes |  |
| `issuer` | `str` | Yes |  |
| `jurisdiction` | `str` | No |  |
| `kind` | `str` | Yes |  |
| `label` | `str` | No |  |
| `lastMessageAt` | `str | None` | Yes |  |
| `lastMessageAuthorType` | `str` | Yes |  |
| `lastMessagePreview` | `str` | Yes |  |
| `last_delivery_at` | `str | None` | Yes |  |
| `launch` | `bool` | No |  |
| `license_number` | `str` | Yes |  |
| `messages` | `list` | Yes |  |
| `messagesTruncated` | `bool` | Yes |  |
| `monthly_cap_cents` | `float` | No |  |
| `name` | `str` | Yes |  |
| `note` | `str` | No |  |
| `one_time_display` | `Any` | Yes |  |
| `ownerEmail` | `str` | Yes |  |
| `ownerLastReadAt` | `str | None` | Yes |  |
| `ownerName` | `str` | Yes |  |
| `ownerUserId` | `str` | Yes |  |
| `period` | `str` | No |  |
| `phone` | `str` | No |  |
| `platform` | `str` | Yes |  |
| `policy_number` | `str` | No |  |
| `postal_code` | `str` | No |  |
| `promo_code` | `str | None` | No |  |
| `push_token` | `str` | Yes |  |
| `radius_miles` | `float` | Yes |  |
| `reason` | `str` | No |  |
| `reason_category` | `str` | No |  |
| `reason_detail` | `str` | No |  |
| `registered_at` | `str` | Yes |  |
| `request_id` | `str` | Yes | Client id of this confirmation (8-100 characters); reuse it only to retry the same confirmation. |
| `requested_at` | `str` | Yes |  |
| `salary_currency` | `str` | No |  |
| `salary_max` | `float | None` | No |  |
| `salary_min` | `float | None` | No |  |
| `salary_period` | `str` | No |  |
| `save_card` | `bool` | Yes |  |
| `save_card_consent_sha256` | `str` | No | Only with save_card true: SHA-256 of the save-card consent text shown. |
| `schedule` | `str` | No |  |
| `service_areas` | `str` | No |  |
| `signing_secret` | `str` | Yes |  |
| `size_bytes` | `float` | Yes |  |
| `skills` | `list` | No |  |
| `source_url` | `str` | No |  |
| `starts_at` | `str | None` | No |  |
| `state` | `str` | No |  |
| `stated_expires_at` | `str` | No |  |
| `status` | `str` | Yes |  |
| `street_address` | `str` | No |  |
| `subject` | `str` | Yes |  |
| `submitted_identifier` | `str` | No |  |
| `supportLastReadAt` | `str | None` | Yes |  |
| `terms` | `str | None` | No |  |
| `terms_version` | `str` | Yes | Must be the current Advertiser Terms version. |
| `threshold_cents` | `float` | No |  |
| `ticketNumber` | `str` | Yes |  |
| `tier` | `str` | Yes |  |
| `title` | `str` | No |  |
| `total_job_openings` | `int | None` | No |  |
| `typing` | `bool` | No |  |
| `updatedAt` | `str | None` | Yes |  |
| `updated_at` | `str` | Yes |  |
| `url` | `str` | Yes | Public HTTPS receiver operated by the connecting principal or its agent runtime. |
| `website` | `str` | Yes |  |
| `workplace_type` | `str` | No |  |
| `zip` | `str` | No |  |

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

#### `create(reqdata, ctrl=None) -> BusinessOwnerEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.BusinessOwner().create({
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

#### `update(reqdata, ctrl=None) -> BusinessOwnerEntity`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```python
result = client.BusinessOwner().update({
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BusinessOwnerEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BusinessReviewEntity

```python
business_review = client.BusinessReview()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> BusinessReviewEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.BusinessReview().load({"id": "business_review_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BusinessReviewEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ChatAttachmentEntity

```python
chat_attachment = client.ChatAttachment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `byteSize` | `int` | Yes |  |
| `content_type` | `Any` | Yes |  |
| `data_base64` | `str` | Yes |  |
| `fileName` | `str` | Yes |  |
| `file_name` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `mediaType` | `str` | Yes |  |
| `size_bytes` | `int` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> ChatAttachmentEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.ChatAttachment().create({
    "conversation_id": "example_conversation_id",  # str
    "content_type": "example_content_type",  # Any
    "data_base64": "example_data_base64",  # str
    "file_name": "example_file_name",  # str
    "size_bytes": 1,  # int
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ChatAttachmentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ChatAttachmentUrlEntity

```python
chat_attachment_url = client.ChatAttachmentUrl()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `byte_size` | `int` | Yes |  |
| `expires_in_seconds` | `Any` | Yes |  |
| `file_name` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `media_type` | `str` | Yes |  |
| `signed_url` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> ChatAttachmentUrlEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.ChatAttachmentUrl().create({
    "attachment_id": "example_attachment_id",  # str
    "conversation_id": "example_conversation_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ChatAttachmentUrlEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ClaimVerificationSendEntity

```python
claim_verification_send = client.ClaimVerificationSend()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `challenge_id` | `str` | No | Opaque v3 SMS or owner-email challenge UUID. |
| `channel` | `Any` | Yes |  |
| `claim_id` | `str` | Yes |  |
| `destination_hint` | `str` | No |  |
| `expires_in_seconds` | `float` | No |  |
| `provider_status` | `Any` | No | V3 provider request state. |
| `recipient_delivery_confirmed` | `Any` | No | V3 currently has no final-delivery provider event for this receipt. |
| `request_id` | `str` | No | Caller-generated idempotency UUID. |
| `status` | `Any` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> ClaimVerificationSendEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.ClaimVerificationSend().create({
    "claim_id": "example_claim_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ClaimVerificationSendEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ClaimVerificationVerifyEntity

```python
claim_verification_verify = client.ClaimVerificationVerify()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `business_id` | `str | None` | Yes |  |
| `challenge_id` | `str` | No | Exact challenge UUID returned by the v3 SMS or owner-email send. |
| `channel` | `Any` | No |  |
| `claim_id` | `str` | Yes |  |
| `code` | `str` | Yes |  |
| `method` | `Any` | No |  |
| `publication` | `dict` | No |  |
| `status` | `Any` | Yes |  |
| `transfer_review_required` | `Any` | No |  |
| `trust_model_version` | `Any` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> ClaimVerificationVerifyEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.ClaimVerificationVerify().create({
    "claim_id": "example_claim_id",  # str
    "code": "example_code",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ClaimVerificationVerifyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CommercialClickEntity

```python
commercial_click = client.CommercialClick()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action_type` | `Any` | Yes |  |
| `ad_receipt` | `str` | No | Opaque server-signed receipt of a served Sponsored ad, sent back unchanged with a profile, website or call tap. |
| `billable` | `bool` | Yes |  |
| `billing_event_id` | `str | None` | No |  |
| `billing_status` | `str` | Yes |  |
| `business_id` | `str` | No |  |
| `category` | `str` | No |  |
| `city` | `str` | No |  |
| `click_id` | `str` | Yes |  |
| `commercial_status` | `Any` | No |  |
| `created_at` | `str` | Yes |  |
| `directory_listing_id` | `str` | No | Deprecated alias of listing_id. |
| `display_name` | `str` | No |  |
| `fallback_interaction_id` | `str` | No |  |
| `ledger_status` | `str` | Yes |  |
| `listing_id` | `str` | No |  |
| `metadata` | `dict` | No |  |
| `migration_required` | `bool` | No |  |
| `page_path` | `str` | No |  |
| `referrer` | `str` | No |  |
| `source_type` | `Any` | Yes |  |
| `state` | `str` | No |  |
| `status` | `Any` | Yes |  |
| `storage` | `Any` | Yes |  |
| `surface` | `Any` | No | Where the Sponsored ad was shown (with ad_receipt). |
| `target_url` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> CommercialClickEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.CommercialClick().create({
    "action_type": "example_action_type",  # Any
    "source_type": "example_source_type",  # Any
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CommercialClickEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ContactRecordedEntity

```python
contact_recorded = client.ContactRecorded()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `business_id` | `str` | Yes |  |
| `contact_recorded` | `Any` | Yes |  |
| `interaction_id` | `str` | Yes |  |
| `ok` | `Any` | Yes |  |
| `policy` | `str` | Yes |  |
| `review_upgraded` | `Any` | Yes |  |
| `status` | `Any` | Yes |  |
| `trust_weight` | `Any` | Yes |  |
| `verified` | `bool` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> ContactRecordedEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.ContactRecorded().create({
    "business_id": "example_business_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ContactRecordedEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ConversationEntity

```python
conversation = client.Conversation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `str` | Yes |  |
| `conversation_id` | `str` | No | Exact conversation referenced by a webhook; returns zero or one scoped thread. |
| `conversations` | `list` | Yes |  |
| `count` | `float` | Yes |  |
| `cursor` | `str` | No | Opaque pagination cursor returned by the previous page. |
| `limit` | `float` | No |  |
| `pagination` | `dict` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> ConversationEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.Conversation().create({
    "account_id": "example_account_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ConversationCloseEntity

```python
conversation_close = client.ConversationClose()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `closed_at` | `str` | Yes |  |
| `conversation_id` | `str` | Yes |  |
| `id` | `str` | No |  |
| `status` | `Any` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> ConversationCloseEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.ConversationClose().create({
    "id": "example_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationCloseEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ConversationReportEntity

```python
conversation_report = client.ConversationReport()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `detail` | `str` | No |  |
| `id` | `str` | No |  |
| `reason` | `Any` | Yes |  |
| `status` | `Any` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> ConversationReportEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.ConversationReport().create({
    "id": "example_id",  # str
    "reason": "example_reason",  # Any
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationReportEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ConversationWorkflowEntity

```python
conversation_workflow = client.ConversationWorkflow()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `priority` | `Any` | No |  |
| `status` | `Any` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> ConversationWorkflowEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.ConversationWorkflow().create({
    "message_id": "example_message_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConversationWorkflowEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CreateAgentApiKeyEntity

```python
create_agent_api_key = client.CreateAgentApiKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `str` | Yes |  |
| `allowed_actions` | `list` | No |  |
| `allowed_business_ids` | `list` | No |  |
| `created_by` | `str` | Yes |  |
| `key` | `dict` | Yes |  |
| `label` | `str` | No |  |
| `monthly_quota` | `float` | No |  |
| `notes` | `str` | No |  |
| `one_time_display` | `Any` | Yes |  |
| `rate_limit_per_minute` | `float` | No |  |
| `raw_key` | `str` | Yes |  |
| `status` | `Any` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> CreateAgentApiKeyEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.CreateAgentApiKey().create({
    "account_id": "example_account_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreateAgentApiKeyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CustomerEntity

```python
customer = client.Customer()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_provider` | `str` | No |  |
| `avatar_url` | `str | None` | Yes | Short-lived signed display URL for a private avatar object, or null. |
| `city` | `str | None` | Yes |  |
| `created_at` | `str | None` | Yes |  |
| `email` | `str` | Yes |  |
| `full_name` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `phone` | `str | None` | Yes |  |
| `search_category` | `str` | No |  |
| `service_need` | `str` | No |  |
| `state` | `str | None` | Yes |  |
| `status` | `Any` | Yes |  |
| `updated_at` | `str | None` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> CustomerEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.Customer().create({
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomerEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CustomerAccountEntity

```python
customer_account = client.CustomerAccount()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `str` | Yes |  |
| `account_role` | `str` | Yes |  |
| `accuracy_meters` | `float` | Yes |  |
| `acknowledge_data_effects` | `bool` | Yes |  |
| `actions` | `list` | Yes |  |
| `agent_key_id` | `str` | Yes |  |
| `agent_receives_coordinates` | `bool` | Yes |  |
| `all_paused` | `bool` | Yes |  |
| `app_attest_registered` | `bool` | Yes |  |
| `assertion` | `str` | Yes |  |
| `attestation` | `str` | Yes |  |
| `author_label` | `str` | Yes |  |
| `author_type` | `str` | Yes |  |
| `binding` | `Any` | Yes |  |
| `body` | `str` | Yes |  |
| `business_id` | `str | None` | Yes |  |
| `capture_source` | `Any` | Yes |  |
| `captured_at` | `str` | Yes |  |
| `challenge` | `str` | Yes |  |
| `challenge_id` | `str` | Yes |  |
| `client_message_id` | `str` | Yes |  |
| `completed` | `bool` | Yes |  |
| `confirmation` | `str` | Yes |  |
| `connection_id` | `str` | Yes |  |
| `connection_kind` | `str` | Yes |  |
| `continuation` | `Any` | Yes | The continuation from the previous response, sent back unchanged to get the next results. |
| `coordinates_returned` | `bool` | Yes |  |
| `created_at` | `str` | Yes |  |
| `credential_id` | `str` | Yes |  |
| `declined` | `bool` | Yes |  |
| `delivery_contract` | `dict` | Yes |  |
| `disabled_reason` | `str | None` | Yes |  |
| `disclosure` | `str` | Yes |  |
| `enabled` | `bool` | Yes |  |
| `endpoint` | `dict` | Yes |  |
| `endpoint_id` | `str` | Yes |  |
| `endpoint_url` | `str` | Yes |  |
| `environment` | `str` | Yes |  |
| `event_id` | `str` | Yes |  |
| `event_types` | `list` | Yes |  |
| `failure_count` | `int` | Yes |  |
| `handoff_id` | `str` | Yes |  |
| `has_more` | `bool` | Yes |  |
| `id` | `str` | Yes |  |
| `idempotent_replay` | `bool` | Yes |  |
| `installation_id` | `str` | Yes |  |
| `key_id` | `str` | Yes |  |
| `last_delivery_at` | `str | None` | Yes |  |
| `latitude` | `float` | Yes |  |
| `location` | `Any` | No | An opaque location reference from the website's own location controls. |
| `longitude` | `float` | Yes |  |
| `message_alerts_enabled` | `bool` | Yes |  |
| `messages` | `list` | Yes |  |
| `mode` | `str` | Yes | fallback: a direct search answered because the language model was unavailable. |
| `name` | `str` | No |  |
| `oauth_grant_id` | `str | None` | Yes |  |
| `one_time_display` | `Any` | Yes |  |
| `platform` | `str` | Yes |  |
| `policy` | `str` | Yes |  |
| `purpose` | `str` | Yes |  |
| `push_token` | `str` | Yes |  |
| `reason` | `str` | Yes |  |
| `registered_at` | `str` | Yes |  |
| `reply` | `str` | Yes |  |
| `request_mode` | `str` | Yes |  |
| `requested_at` | `str` | Yes |  |
| `results` | `list` | Yes |  |
| `schema_version` | `str` | Yes |  |
| `selected_at` | `str` | Yes |  |
| `signed_in` | `bool` | Yes |  |
| `signing_secret` | `str` | Yes |  |
| `status` | `Any` | Yes |  |
| `updated_at` | `str` | Yes |  |
| `url` | `str` | Yes | Public HTTPS receiver operated by the connecting principal or its agent runtime. |
| `usable_until` | `str` | Yes |  |
| `use_mode` | `str` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> CustomerAccountEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.CustomerAccount().create({
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

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomerAccountEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CustomerLocationProofRevocationEntity

```python
customer_location_proof_revocation = client.CustomerLocationProofRevocation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accuracy_meters` | `float` | Yes |  |
| `captured_at` | `str` | Yes |  |
| `latitude` | `float` | Yes |  |
| `longitude` | `float` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> CustomerLocationProofRevocationEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.CustomerLocationProofRevocation().create({
    "accuracy_meters": 1,  # float
    "captured_at": "example_captured_at",  # str
    "latitude": 1,  # float
    "longitude": 1,  # float
})
```

#### `remove(reqmatch, ctrl=None) -> CustomerLocationProofRevocationEntity`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```python
result = client.CustomerLocationProofRevocation().remove({"location_proof_id": "location_proof_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomerLocationProofRevocationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DestinationAddressSuggestionEntity

```python
destination_address_suggestion = client.DestinationAddressSuggestion()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `input` | `str` | Yes | Normalized partial US service-address text. |
| `suggestions` | `list` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> DestinationAddressSuggestionEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.DestinationAddressSuggestion().create({
    "input": "example_input",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DestinationAddressSuggestionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DestinationLocationProofEntity

```python
destination_location_proof = client.DestinationLocationProof()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `str` | Yes | A real US service address. |
| `premise_proximity_confirmation_token` | `str` | No | Opaque one-time token from the immediately preceding premise-proximity challenge for the same address and authority. |

### Operations

#### `create(reqdata, ctrl=None) -> DestinationLocationProofEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.DestinationLocationProof().create({
    "address": "example_address",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DestinationLocationProofEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DomainTrustCardEntity

```python
domain_trust_card = client.DomainTrustCard()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `business_id` | `str` | Yes |  |
| `domain` | `str` | Yes |  |
| `schema_version` | `Any` | Yes |  |
| `trust_card` | `dict` | Yes |  |
| `trust_card_url` | `str` | Yes |  |
| `trust_model_version` | `Any` | Yes |  |
| `verification_class` | `Any` | Yes |  |
| `verification_disclosure` | `str` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> DomainTrustCardEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.DomainTrustCard().load({"domain_key": "domain_key"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DomainTrustCardEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GeoContextEntity

```python
geo_context = client.GeoContext()
```

### Operations

#### `load(reqmatch, ctrl=None) -> GeoContextEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.GeoContext().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GeoContextEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## HealthEntity

```python
health = client.Health()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_phone_location_bridge` | `dict` | Yes |  |
| `build_sha` | `str` | Yes |  |
| `business_review_access` | `dict` | Yes |  |
| `contract_version` | `str` | Yes |  |
| `external_agent_webhooks` | `dict` | Yes |  |
| `external_agent_webhooks_enabled` | `bool` | Yes |  |
| `ios_app_attest_anonymous_location` | `dict` | Yes |  |
| `location_choices` | `dict` | Yes |  |
| `location_handoff` | `dict` | Yes |  |
| `mobile_push` | `Any` | Yes |  |
| `ok` | `Any` | Yes |  |
| `service` | `str` | Yes |  |
| `sponsored_ordering` | `dict` | Yes |  |
| `trust_model_version` | `Any` | Yes |  |
| `version` | `str` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> HealthEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.Health().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `HealthEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## JobApplicationEntity

```python
job_application = client.JobApplication()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `str` | Yes |  |
| `already_withdrawn` | `bool` | No |  |
| `application` | `dict` | Yes |  |
| `applications` | `list` | Yes |  |
| `billing` | `dict` | Yes |  |
| `business_id` | `str` | No |  |
| `count` | `float` | Yes |  |
| `cover_note` | `str` | No |  |
| `free_to_apply` | `bool` | No |  |
| `id` | `str` | No |  |
| `job_id` | `str` | Yes |  |
| `limit` | `float` | Yes |  |
| `offset` | `float` | Yes |  |
| `resume` | `dict` | Yes |  |
| `retention_note` | `str` | No |  |
| `status` | `str` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> JobApplicationEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.JobApplication().create({
    "job_id": "example_job_id",  # str
    "resume": {},  # dict
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `JobApplicationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## JobResumeSignedUrlEntity

```python
job_resume_signed_url = client.JobResumeSignedUrl()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `application_id` | `str` | Yes |  |
| `content_type` | `str` | Yes |  |
| `expires_in_seconds` | `float` | Yes |  |
| `resume_file_name` | `str` | Yes |  |
| `signed_url` | `str` | Yes |  |
| `size_bytes` | `float` | Yes |  |
| `status` | `Any` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> JobResumeSignedUrlEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.JobResumeSignedUrl().create({
    "job_application_id": "example_job_application_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `JobResumeSignedUrlEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LocationHandoffEntity

```python
location_handoff = client.LocationHandoff()
```

### Operations

#### `create(reqdata, ctrl=None) -> LocationHandoffEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.LocationHandoff().create({
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LocationHandoffEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MessageEntity

```python
message = client.Message()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `str` | Yes |  |
| `client_message_id` | `str` | Yes | Caller-stable retry key. |
| `conversation_id` | `str` | Yes |  |
| `created_at` | `str` | Yes |  |
| `delivery` | `Any` | No |  |
| `idempotent_replay` | `bool` | Yes |  |
| `interaction_id` | `str` | Yes |  |
| `message` | `str` | Yes |  |
| `moderation_required` | `Any` | No |  |
| `source_path` | `str` | No |  |
| `status` | `Any` | Yes |  |
| `subject` | `str` | No |  |
| `target_business_id` | `str` | Yes |  |
| `target_business_name` | `str` | No |  |
| `target_business_source` | `str` | No |  |

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

#### `create(reqdata, ctrl=None) -> MessageEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.Message().create({
    "account_id": "example_account_id",  # str
    "client_message_id": "example_client_message_id",  # str
    "message": "example_message",  # str
    "subject": "example_subject",  # str
    "target_business_id": "example_target_business_id",  # str
    "target_business_name": "example_target_business_name",  # str
    "target_business_source": "example_target_business_source",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MessageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ModeratedActionEntity

```python
moderated_action = client.ModeratedAction()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actions` | `list` | Yes |  |
| `body` | `str` | Yes |  |
| `client_request_id` | `str` | No |  |
| `content_type` | `str` | Yes |  |
| `continuation` | `Any` | Yes | The continuation from the previous response, sent back unchanged to get the next results. |
| `coordinates_returned` | `bool` | Yes |  |
| `disclosure` | `str` | Yes |  |
| `enabled` | `bool` | Yes |  |
| `file_sha256` | `str` | Yes |  |
| `has_more` | `bool` | Yes |  |
| `human_confirmation` | `bool` | No |  |
| `intent_id` | `str` | Yes |  |
| `kind` | `str` | No |  |
| `knowledgeVersion` | `str` | Yes |  |
| `limits` | `dict` | Yes |  |
| `links` | `list` | Yes |  |
| `location` | `dict` | Yes | An opaque location reference from the website's own location controls. |
| `message` | `str` | No |  |
| `messages` | `list` | Yes |  |
| `mode` | `str` | Yes | fallback: a direct search answered because the language model was unavailable. |
| `name` | `str` | Yes |  |
| `needsHuman` | `bool` | Yes |  |
| `policy` | `dict` | Yes | Human schedule and separate claim-review policy. |
| `question` | `str` | Yes |  |
| `reply` | `str` | Yes |  |
| `result` | `str` | Yes |  |
| `results` | `list` | Yes |  |
| `scan_authority_id` | `str` | Yes |  |
| `scanner` | `str` | Yes |  |
| `scanner_version` | `str` | Yes |  |
| `schema_version` | `str` | Yes |  |
| `searcher_latitude` | `float` | No |  |
| `searcher_longitude` | `float` | No |  |
| `signature` | `str` | No |  |
| `signed_in` | `bool` | Yes |  |
| `size_bytes` | `float` | Yes |  |
| `subject` | `str` | No |  |
| `target_business_id` | `str` | Yes |  |
| `topic` | `str` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> ModeratedActionEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.ModeratedAction().create({
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

#### `load(reqmatch, ctrl=None) -> ModeratedActionEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.ModeratedAction().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ModeratedActionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OpenApiDocumentEntity

```python
open_api_document = client.OpenApiDocument()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `components` | `dict` | Yes |  |
| `info` | `dict` | Yes |  |
| `openapi` | `Any` | Yes |  |
| `paths` | `dict` | Yes |  |
| `servers` | `list` | Yes |  |
| `tags` | `list` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[OpenApiDocumentEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.OpenApiDocument().list()
for open_api_document in results:
    print(open_api_document.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OpenApiDocumentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OperationEntity

```python
operation = client.Operation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `str` | Yes |  |
| `action` | `str` | Yes |  |
| `active` | `bool` | No |  |
| `active_or_good_standing` | `bool` | No |  |
| `ai_draft_id` | `str` | No |  |
| `allowed_actions` | `list` | Yes |  |
| `alt` | `str` | No |  |
| `amount_cents` | `float` | Yes | Whole cents, non-zero, at most 1,000,000 either way; a promotional credit is positive. |
| `amount_off_cents` | `float` | No |  |
| `api_key` | `str` | Yes |  |
| `applies_to_period` | `str` | No |  |
| `applies_to_tier` | `str | None` | No |  |
| `assigned_admin_user_id` | `str | None` | No |  |
| `assigneeId` | `str` | Yes |  |
| `assigneeLabel` | `str` | Yes |  |
| `assigneeType` | `str` | Yes |  |
| `assignee_id` | `str` | No |  |
| `assignee_label` | `str` | No |  |
| `assignee_type` | `str` | No | AI assignment is unavailable while the customer-support workload is disconnected. |
| `assistant_enabled` | `bool` | Yes |  |
| `base_url` | `str` | No |  |
| `body` | `str` | Yes |  |
| `businessId` | `str` | Yes |  |
| `businessName` | `str` | Yes |  |
| `business_id` | `str | None` | Yes |  |
| `business_ids` | `list` | Yes |  |
| `campaign_id` | `str` | No |  |
| `campaign_ids` | `list` | No |  |
| `caption` | `str` | No |  |
| `case_status` | `str` | No |  |
| `catalog` | `list` | Yes |  |
| `category` | `str` | No |  |
| `category_alias` | `str` | Yes |  |
| `chunk_size` | `float` | No |  |
| `city` | `str` | No |  |
| `code` | `str` | Yes |  |
| `confidence` | `float` | No |  |
| `config` | `dict` | Yes | Complete validated pricing configuration. |
| `confirm` | `bool` | Yes |  |
| `confirm_admin` | `bool` | No |  |
| `confirmation` | `str` | Yes |  |
| `connection_id` | `str` | Yes |  |
| `connection_kind` | `str` | Yes |  |
| `content_type` | `str` | Yes |  |
| `context_id` | `str` | Yes |  |
| `context_type` | `str` | Yes |  |
| `createdAt` | `str | None` | Yes |  |
| `created_at` | `str` | Yes |  |
| `credential_expires_at` | `str` | No | Expiration date printed on the license. |
| `credential_id` | `str` | Yes |  |
| `custom_wire` | `str` | No |  |
| `data_base64` | `str` | Yes |  |
| `decision` | `str` | Yes |  |
| `dedupe_ack` | `bool` | No |  |
| `delivery_contract` | `dict` | Yes |  |
| `disabled_reason` | `str | None` | Yes |  |
| `discount_type` | `str` | Yes |  |
| `display_name` | `str` | Yes |  |
| `disposition` | `str` | Yes |  |
| `draft` | `dict` | Yes |  |
| `duration` | `str` | No |  |
| `duration_in_months` | `int | None` | No |  |
| `email` | `str` | Yes |  |
| `enabled` | `bool` | Yes |  |
| `endpoint` | `dict` | Yes |  |
| `endpoint_id` | `str` | Yes |  |
| `endpoint_url` | `str` | Yes |  |
| `ends_at` | `str` | Yes |  |
| `environment_fallback` | `Any` | Yes |  |
| `event_id` | `str` | Yes |  |
| `event_types` | `list` | Yes |  |
| `expected_allowed_actions` | `list` | Yes |  |
| `expected_key_id` | `str` | Yes |  |
| `expected_updated_at` | `str` | Yes |  |
| `expected_version` | `float` | Yes |  |
| `expires_at` | `str` | No | Promotional credit only: ISO date-time 1 hour to 2 years ahead, disclosed to the owner. |
| `fact_id` | `str` | Yes |  |
| `facts` | `dict` | Yes |  |
| `failure_count` | `int` | Yes |  |
| `fields` | `dict` | Yes | Validated fields for this fixed content-block type. |
| `file_name` | `str` | Yes |  |
| `guideHandoffAnsweredAt` | `str | None` | No |  |
| `guideHandoffAt` | `str | None` | No |  |
| `guideHandoffDueAt` | `str | None` | No |  |
| `height` | `float` | No |  |
| `historic_association_checked` | `bool` | Yes |  |
| `hold` | `str` | Yes |  |
| `holder_name_match` | `bool` | No |  |
| `hours` | `dict` | Yes |  |
| `id` | `str` | Yes |  |
| `idempotency_key` | `str` | No |  |
| `identifier_match` | `bool` | No |  |
| `in_use` | `dict` | Yes |  |
| `instruction` | `str` | No |  |
| `invited` | `bool` | Yes |  |
| `key_check` | `Any` | Yes |  |
| `kind` | `str` | Yes |  |
| `label` | `str` | Yes |  |
| `lastMessageAt` | `str | None` | Yes |  |
| `lastMessageAuthorType` | `str` | Yes |  |
| `lastMessagePreview` | `str` | Yes |  |
| `last_delivery_at` | `str | None` | Yes |  |
| `last_error_code` | `Any` | Yes |  |
| `last_probe_at` | `Any` | Yes |  |
| `last_problem` | `Any` | Yes |  |
| `legal_name` | `str` | No |  |
| `limit` | `float` | No |  |
| `make_active` | `bool` | Yes |  |
| `max_cents` | `float` | Yes |  |
| `max_redemptions` | `int | None` | No |  |
| `messages` | `list` | Yes |  |
| `messagesTruncated` | `bool` | Yes |  |
| `min_cents` | `float` | Yes |  |
| `model` | `str` | Yes |  |
| `model_id` | `str` | Yes |  |
| `name` | `str` | Yes |  |
| `note` | `str` | No |  |
| `notes` | `str` | No |  |
| `observed_at` | `str` | No |  |
| `one_time_display` | `Any` | Yes |  |
| `outcome` | `str` | Yes |  |
| `ownerEmail` | `str` | Yes |  |
| `ownerLastReadAt` | `str | None` | Yes |  |
| `ownerName` | `str` | Yes |  |
| `ownerUserId` | `str` | Yes |  |
| `owner_reason_code` | `str` | No | Controlled owner-visible rejection reason. |
| `per_customer_limit` | `float` | No |  |
| `percent_off` | `float` | No |  |
| `phone` | `str` | No |  |
| `policyVersion` | `str` | Yes |  |
| `priority` | `str` | No |  |
| `provider` | `str` | Yes |  |
| `providers` | `list` | Yes |  |
| `purpose_code` | `str` | Yes |  |
| `rank_bid_cents` | `int` | Yes |  |
| `reason` | `str` | Yes |  |
| `reason_category` | `str` | No |  |
| `reason_code` | `str` | No |  |
| `reason_detail` | `str` | No |  |
| `reference` | `str` | Yes |  |
| `reject_reason` | `str` | No |  |
| `related_case_id` | `str` | No |  |
| `report_id` | `int` | Yes |  |
| `report_ids` | `list` | Yes |  |
| `reserve_cents` | `float` | Yes | 100-10000; never below $1.00. |
| `resolution_note` | `str` | Yes |  |
| `review_notes` | `str` | No |  |
| `revision` | `int` | Yes |  |
| `role` | `str` | Yes |  |
| `rows` | `list` | Yes |  |
| `run` | `dict` | Yes |  |
| `schema_version` | `str` | Yes |  |
| `scope` | `str` | Yes |  |
| `search` | `str` | No |  |
| `settings` | `dict` | Yes |  |
| `signing_secret` | `str` | Yes |  |
| `size_bytes` | `float` | Yes |  |
| `sla_due_at` | `str | None` | No |  |
| `source` | `str` | Yes |  |
| `source_authority` | `str` | No | Exact official authority name. |
| `source_category_slug` | `str` | Yes |  |
| `source_scope_checked` | `bool` | Yes |  |
| `source_url` | `str` | No | Exact HTTPS official source URL. |
| `starts_at` | `str | None` | No |  |
| `state` | `str` | No | Bulk by area: every ad of the advertisers in this two-letter U.S. |
| `status` | `str` | Yes |  |
| `storage` | `str` | Yes |  |
| `street_address` | `str` | No |  |
| `subject` | `str` | Yes |  |
| `supportLastReadAt` | `str | None` | Yes |  |
| `target_category` | `str` | Yes |  |
| `taxonomy_category_aliases` | `list` | Yes |  |
| `ticketNumber` | `str` | Yes |  |
| `tier` | `str` | No |  |
| `typing` | `bool` | No |  |
| `until` | `str` | No |  |
| `updatedAt` | `str | None` | Yes |  |
| `updated_at` | `str` | Yes |  |
| `url` | `str` | Yes | Public HTTPS receiver operated by the connecting principal or its agent runtime. |
| `valid_until` | `str` | No |  |
| `value` | `str` | Yes |  |
| `verification_method` | `str` | Yes |  |
| `verified_at` | `Any` | Yes |  |
| `verified_service_scope` | `list` | No |  |
| `version` | `str` | No |  |
| `website` | `str` | No |  |
| `width` | `float` | No |  |
| `window_hours` | `float` | No | 1-744, default 48. |
| `workload` | `str` | Yes |  |
| `zip` | `str` | No |  |

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

#### `create(reqdata, ctrl=None) -> OperationEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.Operation().create({
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

#### `patch(reqdata, ctrl=None) -> OperationEntity`

Change part of an existing entity: only the fields given are sent. The data must include the entity `id`. Returns the patched entity and raises on error.

```python
result = client.Operation().patch({
    "candidate_id": "candidate_id",
    # Only the fields to change
})
```

#### `remove(reqmatch, ctrl=None) -> OperationEntity`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```python
result = client.Operation().remove({"access_context_id": "access_context_id"})
```

#### `update(reqdata, ctrl=None) -> OperationEntity`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```python
result = client.Operation().update({
    "provider": "provider",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OperationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OwnerNotificationEntity

```python
owner_notification = client.OwnerNotification()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `businessId` | `str` | Yes |  |
| `createdAt` | `str` | Yes |  |
| `dedupeKey` | `str` | Yes |  |
| `emailStatus` | `str` | Yes |  |
| `eventType` | `Any` | Yes |  |
| `id` | `str` | Yes |  |
| `readAt` | `str | None` | Yes |  |
| `resourceId` | `str` | Yes |  |
| `resourceKind` | `Any` | Yes |  |
| `resourceUrl` | `str` | Yes |  |
| `summary` | `str` | Yes |  |
| `webhookStatus` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> OwnerNotificationEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.OwnerNotification().create({
    "notification_id": "example_notification_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OwnerNotificationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OwnerNotificationSettingEntity

```python
owner_notification_setting = client.OwnerNotificationSetting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `businessId` | `str` | Yes |  |
| `business_id` | `str` | No |  |
| `createdAt` | `str` | Yes |  |
| `emailEnabled` | `bool` | Yes |  |
| `email_enabled` | `bool` | No |  |
| `eventTypeSubscriptions` | `list` | Yes |  |
| `event_types` | `list` | No |  |
| `updatedAt` | `str` | Yes |  |
| `webhookEnabled` | `bool` | Yes |  |
| `webhook_enabled` | `bool` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> OwnerNotificationSettingEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.OwnerNotificationSetting().create({
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OwnerNotificationSettingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OwnerWebhookEndpointEntity

```python
owner_webhook_endpoint = client.OwnerWebhookEndpoint()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `businessId` | `str` | Yes |  |
| `createdAt` | `str` | Yes |  |
| `enabled` | `bool` | Yes |  |
| `eventTypeSubscriptions` | `list` | Yes |  |
| `failureCount` | `float` | Yes |  |
| `id` | `str` | Yes |  |
| `lastDeliveryAt` | `str | None` | Yes |  |
| `updatedAt` | `str` | Yes |  |
| `url` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> OwnerWebhookEndpointEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.OwnerWebhookEndpoint().create({
    "webhook_id": "example_webhook_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OwnerWebhookEndpointEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OwnerWebhookRegistrationEntity

```python
owner_webhook_registration = client.OwnerWebhookRegistration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `business_id` | `str` | No |  |
| `endpoint` | `dict` | Yes |  |
| `event_types` | `list` | No |  |
| `one_time_display` | `Any` | Yes |  |
| `signing_secret` | `str` | Yes |  |
| `status` | `Any` | Yes |  |
| `url` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> OwnerWebhookRegistrationEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.OwnerWebhookRegistration().create({
    "url": "example_url",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OwnerWebhookRegistrationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PricingEntity

```python
pricing = client.Pricing()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `billing` | `dict` | Yes |  |
| `branch_add_ons` | `list` | Yes |  |
| `currency` | `Any` | Yes |  |
| `generated_at` | `str` | Yes |  |
| `neutrality` | `str` | Yes |  |
| `plans` | `list` | Yes |  |
| `promotions` | `list` | Yes |  |
| `published_at` | `str | None` | Yes |  |
| `radius_extension` | `dict` | Yes |  |
| `revision_id` | `str | None` | Yes |  |
| `source` | `Any` | Yes |  |
| `trust_model_version` | `Any` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[PricingEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.Pricing().list()
for pricing in results:
    print(pricing.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PricingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PromoteVerifiedTransactionEntity

```python
promote_verified_transaction = client.PromoteVerifiedTransaction()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `business_id` | `str` | Yes |  |
| `evidence_id` | `str` | Yes |  |
| `interaction_id` | `str` | Yes |  |
| `ok` | `Any` | Yes |  |
| `review_upgraded` | `bool` | Yes |  |
| `status` | `Any` | Yes |  |
| `trust_weight` | `Any` | Yes |  |
| `verified` | `bool` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> PromoteVerifiedTransactionEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.PromoteVerifiedTransaction().create({
    "business_id": "example_business_id",  # str
    "evidence_id": "example_evidence_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PromoteVerifiedTransactionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PublicContentEntity

```python
public_content = client.PublicContent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `blocks` | `dict` | Yes |  |
| `generated_at` | `str` | Yes |  |
| `source` | `Any` | Yes |  |
| `trust_model_version` | `Any` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> PublicContentEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.PublicContent().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PublicContentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RecommendEntity

```python
recommend = client.Recommend()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `candidate_window_truncated` | `bool` | Yes | True when Loppee's bounded candidate assembly reached its safety cap. |
| `commercial_influence` | `str` | Yes | Must be none whenever current-location or saved_exact authority is absent, including universal exact/genuine-prefix name lookup. |
| `display_count` | `int` | No | Agent-key responses: the number of businesses in this response. |
| `endpoint` | `Any` | Yes |  |
| `fallback_registry` | `list` | Yes |  |
| `generated_at` | `str` | Yes |  |
| `has_more` | `bool` | Yes | True only when next_cursor can continue through the current bounded, deterministic candidate window. |
| `listed` | `list` | Yes |  |
| `location_context` | `Any` | Yes | Local category discovery and recommendations require a current precise location proof or handoff, a user-confirmed validated destination authority, or a saved_exact Home location. |
| `ordering` | `Any` | Yes |  |
| `policy` | `str` | Yes |  |
| `presentation_guidance` | `str` | No | Agent-key responses: how to present these results to the customer. |
| `query` | `dict` | Yes |  |
| `ranking_policy` | `str` | Yes |  |
| `registry_count_basis` | `str` | Yes |  |
| `registry_count_observed_at` | `str | None` | Yes |  |
| `registry_name` | `Any` | Yes |  |
| `results` | `list` | Yes |  |
| `returned_count` | `int` | Yes |  |
| `reviewed_registry` | `list` | Yes |  |
| `schema_version` | `Any` | Yes |  |
| `search_intent` | `dict` | Yes |  |
| `suggestions` | `dict` | No |  |
| `total_matches` | `int` | No | Web and app responses. |
| `total_matches_basis` | `int` | No |  |
| `total_registry_records` | `int` | Yes |  |
| `trust_model_version` | `Any` | Yes |  |
| `verified` | `list` | Yes |  |
| `visible_candidate_records` | `int` | No | Web and app responses. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[RecommendEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.Recommend().list()
for recommend in results:
    print(recommend.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RecommendEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ReviewEntity

```python
review = client.Review()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `str` | Yes |  |
| `attestation_accepted` | `bool` | Yes | Set true only after the customer confirms this describes their own experience and explicitly approves publishing the displayed business, star rating, title, and full review. |
| `customer_confirmed` | `bool` | No | Set true to confirm you were a customer of this business. |
| `message` | `str` | Yes |  |
| `rating` | `int` | Yes |  |
| `service_date` | `Any` | No | Optional real, non-future service date in YYYY-MM-DD format; empty means not provided. |
| `subject` | `str` | Yes |  |
| `target_business_id` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> ReviewEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.Review().create({
    "account_id": "example_account_id",  # str
    "attestation_accepted": True,  # bool
    "message": "example_message",  # str
    "rating": 1,  # int
    "subject": "example_subject",  # str
    "target_business_id": "example_target_business_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReviewEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RevokeEntity

```python
revoke = client.Revoke()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `str` | Yes |  |
| `key_id` | `str` | Yes |  |
| `revoked_by` | `str` | Yes |  |
| `status` | `Any` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> RevokeEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.Revoke().create({
    "agent_key_id": "example_agent_key_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RevokeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SaveBusinessEntity

```python
save_business = client.SaveBusiness()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `str` | Yes |  |
| `business_id` | `str` | Yes |  |
| `business_name` | `str` | Yes |  |
| `business_source` | `str` | Yes |  |
| `category` | `str` | No |  |
| `city` | `str` | No |  |
| `created_at` | `str` | Yes |  |
| `notes` | `str` | No |  |
| `saved_business_id` | `str` | Yes |  |
| `state` | `str` | No |  |
| `status` | `Any` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> SaveBusinessEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.SaveBusiness().create({
    "account_id": "example_account_id",  # str
    "business_id": "example_business_id",  # str
    "business_name": "example_business_name",  # str
    "business_source": "example_business_source",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SaveBusinessEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SavedBusinessEntity

```python
saved_business = client.SavedBusiness()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `str` | Yes |  |
| `count` | `float` | Yes |  |
| `limit` | `float` | No |  |
| `saved_businesses` | `list` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> SavedBusinessEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.SavedBusiness().create({
    "account_id": "example_account_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SavedBusinessEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SavedLocationEntity

```python
saved_location = client.SavedLocation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `available` | `bool` | Yes |  |
| `coordinates_returned` | `Any` | Yes |  |
| `kind` | `Any` | Yes | Only saved_exact is precise local-discovery authority. |
| `label` | `str | None` | Yes |  |
| `location_proof_id` | `str` | No |  |
| `reach_precision` | `Any` | Yes | Exact can authorize local category/recommendation reach; coarse cannot activate local results, Sponsored placement, or impressions. |
| `saved_location_ref` | `str | None` | Yes |  |
| `updated_at` | `str | None` | Yes |  |
| `zip` | `str` | No |  |

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

#### `remove(reqmatch, ctrl=None) -> SavedLocationEntity`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```python
result = client.SavedLocation().remove()
```

#### `update(reqdata, ctrl=None) -> SavedLocationEntity`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```python
result = client.SavedLocation().update({
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SavedLocationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SearchEntity

```python
search = client.Search()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `candidate_window_truncated` | `bool` | Yes | True when Loppee's bounded candidate assembly reached its safety cap. |
| `commercial_influence` | `str` | Yes | Must be none whenever current-location or saved_exact authority is absent, including universal exact/genuine-prefix name lookup. |
| `display_count` | `int` | No | Agent-key responses: the number of businesses in this response. |
| `generated_at` | `str` | Yes |  |
| `has_more` | `bool` | Yes | True only when next_cursor can continue through the current bounded, deterministic candidate window. |
| `location_context` | `Any` | Yes | Local category discovery and recommendations require a current precise location proof or handoff, a user-confirmed validated destination authority, or a saved_exact Home location. |
| `next_cursor` | `str | None` | Yes |  |
| `page_limit` | `int` | Yes |  |
| `policy` | `str` | Yes |  |
| `presentation_guidance` | `str` | No | Agent-key responses: how to present these results to the customer. |
| `query` | `dict` | Yes |  |
| `ranking_policy` | `str` | Yes |  |
| `registry_count_basis` | `str` | Yes |  |
| `registry_count_observed_at` | `str | None` | Yes |  |
| `registry_name` | `Any` | Yes |  |
| `results` | `list` | Yes |  |
| `returned_count` | `int` | Yes |  |
| `schema_version` | `Any` | Yes |  |
| `search_intent` | `dict` | Yes |  |
| `suggestions` | `dict` | No |  |
| `total_matches` | `int` | No | Web and app responses. |
| `total_matches_basis` | `int` | No |  |
| `total_registry_records` | `int` | Yes |  |
| `trust_model_version` | `Any` | Yes |  |
| `visible_candidate_records` | `int` | No | Web and app responses. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[SearchEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.Search().list()
for search in results:
    print(search.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SearchEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SuggestEntity

```python
suggest = client.Suggest()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `categories` | `list` | Yes |  |
| `names` | `list` | Yes |  |
| `query` | `str` | Yes |  |
| `schema_version` | `Any` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[SuggestEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.Suggest().list()
for suggest in results:
    print(suggest.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SuggestEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SupportInternalNoteEntity

```python
support_internal_note = client.SupportInternalNote()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authorLabel` | `str` | Yes |  |
| `body` | `str` | Yes |  |
| `createdAt` | `str | None` | Yes |  |
| `id` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> SupportInternalNoteEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.SupportInternalNote().create({
    "id": "example_id",  # str
    "body": "example_body",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SupportInternalNoteEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SupportWorkflowEntity

```python
support_workflow = client.SupportWorkflow()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `Any` | No |  |
| `id` | `str` | No |  |
| `priority` | `Any` | No |  |
| `waiting_on` | `Any` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> SupportWorkflowEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.SupportWorkflow().create({
    "id": "example_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SupportWorkflowEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TaxonomySuggestionEntity

```python
taxonomy_suggestion = client.TaxonomySuggestion()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alias` | `str` | Yes |  |
| `path_titles` | `list` | Yes |  |
| `title` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[TaxonomySuggestionEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.TaxonomySuggestion().list()
for taxonomy_suggestion in results:
    print(taxonomy_suggestion.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TaxonomySuggestionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TrustCardEntity

```python
trust_card = client.TrustCard()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agency` | `str` | Yes |  |
| `collected_at` | `str` | Yes |  |
| `disclosure` | `str` | Yes |  |
| `fact_id` | `str` | Yes |  |
| `matched_on` | `str` | Yes |  |
| `reason` | `str` | No |  |
| `record_kind` | `str` | Yes |  |
| `record_number` | `str | None` | Yes |  |
| `record_scope` | `str` | Yes |  |
| `record_type` | `str` | Yes |  |
| `recorded_expiry` | `str | None` | Yes |  |
| `result` | `str` | Yes |  |
| `source_label` | `str` | Yes |  |
| `source_url` | `str` | Yes |  |
| `state` | `str` | Yes |  |
| `status_on_record` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> TrustCardEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.TrustCard().create({
    "business_id": "example_business_id",  # str
    "license_record_id": "example_license_record_id",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list[TrustCardEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.TrustCard().list({"business_id": "example"})
for trust_card in results:
    print(trust_card.data_get())
```

#### `load(reqmatch, ctrl=None) -> TrustCardEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.TrustCard().load({"schema_name": "schema_name"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TrustCardEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UnsaveBusinessEntity

```python
unsave_business = client.UnsaveBusiness()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `str` | Yes |  |
| `business_id` | `str` | Yes |  |
| `removed` | `bool` | Yes |  |
| `status` | `Any` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> UnsaveBusinessEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.UnsaveBusiness().create({
    "account_id": "example_account_id",  # str
    "business_id": "example_business_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UnsaveBusinessEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UpdateAgentBillingAccountEntity

```python
update_agent_billing_account = client.UpdateAgentBillingAccount()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `str` | Yes |  |
| `billing_account` | `dict` | Yes |  |
| `billing_status` | `str` | No |  |
| `included_actions` | `float` | No |  |
| `monthly_fee_cents` | `float` | No |  |
| `overage_cents` | `float` | No |  |
| `plan` | `str` | No |  |
| `status` | `Any` | Yes |  |
| `updated_by` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> UpdateAgentBillingAccountEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.UpdateAgentBillingAccount().create({
    "account_id": "example_account_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UpdateAgentBillingAccountEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WithdrawJobApplicationEntity

```python
withdraw_job_application = client.WithdrawJobApplication()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `str` | Yes |  |
| `already_withdrawn` | `bool` | Yes |  |
| `application` | `dict` | Yes |  |
| `application_id` | `str` | Yes |  |
| `status` | `Any` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> WithdrawJobApplicationEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.WithdrawJobApplication().create({
    "account_id": "example_account_id",  # str
    "application_id": "example_application_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WithdrawJobApplicationEntity` instance with the same options.

#### `get_name() -> str`

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

```python
client = LoppeeBusinessSDK({
    "feature": {
        "ratelimit": {"active": True},
        "retry": {"active": True},
        "test": {"active": True},
        "timeout": {"active": True},
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

