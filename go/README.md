# LoppeeBusiness Golang SDK



The Golang SDK for the LoppeeBusiness API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.AgentAccess(nil)` — each with the same small set of operations (`List`, `Load`, `Create`, `Update`, `Patch`, `Remove`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Also generated from this model: `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb`, `ts` — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/loppee-business-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Tags](https://github.com/voxgig-sdk/loppee-business-sdk/tags) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/loppee-business-sdk/go=../loppee-business-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record. The client sends the API key in the `X-LOPPEE-API-Key` header.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the entity, and for
`List` a `[]any` of entities, one per record (there is no `{ok, data}`
wrapper), so check `err` and read a record through the entity's
`Data()`.

```go
package main

import (
    "fmt"
    "os"
    sdk "github.com/voxgig-sdk/loppee-business-sdk/go"
)

func main() {
    client := sdk.NewLoppeeBusinessSDK(map[string]any{
        "apikey": os.Getenv("LOPPEE_BUSINESS_APIKEY"),
    })

    // Create a agentAccess.
    created, err := client.AgentAccess(nil).Create(map[string]any{"agent_name": "example_agent_name", "developer_email": "example_developer_email", "organization_name": "example_organization_name"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(created.(sdk.Entity).Data())
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
agentcapability, err := client.AgentCapability(nil).Load(nil, nil)
if err != nil {
    // handle err
    return
}
_ = agentcapability
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

agentCapability, err := client.AgentCapability(nil).Load(
    nil, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(agentCapability.(sdk.Entity).Data()) // the entity's mock record
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewLoppeeBusinessSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
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
cd go && go test ./test/...
```


## Reference

### NewLoppeeBusinessSDK

```go
func NewLoppeeBusinessSDK(options map[string]any) *LoppeeBusinessSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"apikey"` | `string` | API key for authentication. |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *LoppeeBusinessSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### LoppeeBusinessSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `AgentAccess` | `(data map[string]any) LoppeeBusinessEntity` | Create an AgentAccess entity instance. |
| `AgentCapability` | `(data map[string]any) LoppeeBusinessEntity` | Create an AgentCapability entity instance. |
| `AgentConnectionTest` | `(data map[string]any) LoppeeBusinessEntity` | Create an AgentConnectionTest entity instance. |
| `AgentIntegration` | `(data map[string]any) LoppeeBusinessEntity` | Create an AgentIntegration entity instance. |
| `AgentMonitoring` | `(data map[string]any) LoppeeBusinessEntity` | Create an AgentMonitoring entity instance. |
| `AgentOpenapi` | `(data map[string]any) LoppeeBusinessEntity` | Create an AgentOpenapi entity instance. |
| `AgentPolicy` | `(data map[string]any) LoppeeBusinessEntity` | Create an AgentPolicy entity instance. |
| `AnonymousLocationProofRevocation` | `(data map[string]any) LoppeeBusinessEntity` | Create an AnonymousLocationProofRevocation entity instance. |
| `BusinessApplication` | `(data map[string]any) LoppeeBusinessEntity` | Create a BusinessApplication entity instance. |
| `BusinessClaim` | `(data map[string]any) LoppeeBusinessEntity` | Create a BusinessClaim entity instance. |
| `BusinessDeal` | `(data map[string]any) LoppeeBusinessEntity` | Create a BusinessDeal entity instance. |
| `BusinessIndex` | `(data map[string]any) LoppeeBusinessEntity` | Create a BusinessIndex entity instance. |
| `BusinessOwner` | `(data map[string]any) LoppeeBusinessEntity` | Create a BusinessOwner entity instance. |
| `BusinessReview` | `(data map[string]any) LoppeeBusinessEntity` | Create a BusinessReview entity instance. |
| `ChatAttachment` | `(data map[string]any) LoppeeBusinessEntity` | Create a ChatAttachment entity instance. |
| `ChatAttachmentUrl` | `(data map[string]any) LoppeeBusinessEntity` | Create a ChatAttachmentUrl entity instance. |
| `ClaimVerificationSend` | `(data map[string]any) LoppeeBusinessEntity` | Create a ClaimVerificationSend entity instance. |
| `ClaimVerificationVerify` | `(data map[string]any) LoppeeBusinessEntity` | Create a ClaimVerificationVerify entity instance. |
| `CommercialClick` | `(data map[string]any) LoppeeBusinessEntity` | Create a CommercialClick entity instance. |
| `ContactRecorded` | `(data map[string]any) LoppeeBusinessEntity` | Create a ContactRecorded entity instance. |
| `Conversation` | `(data map[string]any) LoppeeBusinessEntity` | Create a Conversation entity instance. |
| `ConversationClose` | `(data map[string]any) LoppeeBusinessEntity` | Create a ConversationClose entity instance. |
| `ConversationReport` | `(data map[string]any) LoppeeBusinessEntity` | Create a ConversationReport entity instance. |
| `ConversationWorkflow` | `(data map[string]any) LoppeeBusinessEntity` | Create a ConversationWorkflow entity instance. |
| `CreateAgentApiKey` | `(data map[string]any) LoppeeBusinessEntity` | Create a CreateAgentApiKey entity instance. |
| `Customer` | `(data map[string]any) LoppeeBusinessEntity` | Create a Customer entity instance. |
| `CustomerAccount` | `(data map[string]any) LoppeeBusinessEntity` | Create a CustomerAccount entity instance. |
| `CustomerLocationProofRevocation` | `(data map[string]any) LoppeeBusinessEntity` | Create a CustomerLocationProofRevocation entity instance. |
| `DestinationAddressSuggestion` | `(data map[string]any) LoppeeBusinessEntity` | Create a DestinationAddressSuggestion entity instance. |
| `DestinationLocationProof` | `(data map[string]any) LoppeeBusinessEntity` | Create a DestinationLocationProof entity instance. |
| `DomainTrustCard` | `(data map[string]any) LoppeeBusinessEntity` | Create a DomainTrustCard entity instance. |
| `GeoContext` | `(data map[string]any) LoppeeBusinessEntity` | Create a GeoContext entity instance. |
| `Health` | `(data map[string]any) LoppeeBusinessEntity` | Create a Health entity instance. |
| `JobApplication` | `(data map[string]any) LoppeeBusinessEntity` | Create a JobApplication entity instance. |
| `JobResumeSignedUrl` | `(data map[string]any) LoppeeBusinessEntity` | Create a JobResumeSignedUrl entity instance. |
| `LocationHandoff` | `(data map[string]any) LoppeeBusinessEntity` | Create a LocationHandoff entity instance. |
| `Message` | `(data map[string]any) LoppeeBusinessEntity` | Create a Message entity instance. |
| `ModeratedAction` | `(data map[string]any) LoppeeBusinessEntity` | Create a ModeratedAction entity instance. |
| `OpenApiDocument` | `(data map[string]any) LoppeeBusinessEntity` | Create an OpenApiDocument entity instance. |
| `Operation` | `(data map[string]any) LoppeeBusinessEntity` | Create an Operation entity instance. |
| `OwnerNotification` | `(data map[string]any) LoppeeBusinessEntity` | Create an OwnerNotification entity instance. |
| `OwnerNotificationSetting` | `(data map[string]any) LoppeeBusinessEntity` | Create an OwnerNotificationSetting entity instance. |
| `OwnerWebhookEndpoint` | `(data map[string]any) LoppeeBusinessEntity` | Create an OwnerWebhookEndpoint entity instance. |
| `OwnerWebhookRegistration` | `(data map[string]any) LoppeeBusinessEntity` | Create an OwnerWebhookRegistration entity instance. |
| `Pricing` | `(data map[string]any) LoppeeBusinessEntity` | Create a Pricing entity instance. |
| `PromoteVerifiedTransaction` | `(data map[string]any) LoppeeBusinessEntity` | Create a PromoteVerifiedTransaction entity instance. |
| `PublicContent` | `(data map[string]any) LoppeeBusinessEntity` | Create a PublicContent entity instance. |
| `Recommend` | `(data map[string]any) LoppeeBusinessEntity` | Create a Recommend entity instance. |
| `Review` | `(data map[string]any) LoppeeBusinessEntity` | Create a Review entity instance. |
| `Revoke` | `(data map[string]any) LoppeeBusinessEntity` | Create a Revoke entity instance. |
| `SaveBusiness` | `(data map[string]any) LoppeeBusinessEntity` | Create a SaveBusiness entity instance. |
| `SavedBusiness` | `(data map[string]any) LoppeeBusinessEntity` | Create a SavedBusiness entity instance. |
| `SavedLocation` | `(data map[string]any) LoppeeBusinessEntity` | Create a SavedLocation entity instance. |
| `Search` | `(data map[string]any) LoppeeBusinessEntity` | Create a Search entity instance. |
| `Suggest` | `(data map[string]any) LoppeeBusinessEntity` | Create a Suggest entity instance. |
| `SupportInternalNote` | `(data map[string]any) LoppeeBusinessEntity` | Create a SupportInternalNote entity instance. |
| `SupportWorkflow` | `(data map[string]any) LoppeeBusinessEntity` | Create a SupportWorkflow entity instance. |
| `TaxonomySuggestion` | `(data map[string]any) LoppeeBusinessEntity` | Create a TaxonomySuggestion entity instance. |
| `TrustCard` | `(data map[string]any) LoppeeBusinessEntity` | Create a TrustCard entity instance. |
| `UnsaveBusiness` | `(data map[string]any) LoppeeBusinessEntity` | Create an UnsaveBusiness entity instance. |
| `UpdateAgentBillingAccount` | `(data map[string]any) LoppeeBusinessEntity` | Create an UpdateAgentBillingAccount entity instance. |
| `WithdrawJobApplication` | `(data map[string]any) LoppeeBusinessEntity` | Create a WithdrawJobApplication entity instance. |

### Entity interface (LoppeeBusinessEntity)

All entities implement the `LoppeeBusinessEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria, and return it. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria, one per record. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity, and return it. |
| `Update` | `(reqdata, ctrl map[string]any) (any, error)` | Update an existing entity, and return it. |
| `Patch` | `(reqdata, ctrl map[string]any) (any, error)` | Change part of an existing entity, and return it. |
| `Remove` | `(reqmatch, ctrl map[string]any) (any, error)` | Remove an entity, and return it marked as deleted. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the entity
itself — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` / `Create` / `Update` / `Patch` / `Remove` | the entity, whose `Data()` reads its record (`map[string]any`) |
| `List` | a `[]any` of entities, one per record |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    agentAccess, err := client.AgentAccess(nil).Create(map[string]any{/* fields */}, nil)
    if err != nil { /* handle */ }
    // agentAccess is the entity; agentAccess.(sdk.Entity).Data() reads its record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### AgentAccess

| Field | Description |
| --- | --- |
| `"agent_name"` |  |
| `"agent_type"` |  |
| `"callback_url"` |  |
| `"compliance_notes"` |  |
| `"created_at"` |  |
| `"data_needs"` |  |
| `"developer_email"` |  |
| `"operating_states"` |  |
| `"organization_name"` |  |
| `"request_id"` |  |
| `"request_status"` |  |
| `"requested_actions"` |  |
| `"safety_contact"` |  |
| `"status"` |  |
| `"target_categories"` |  |
| `"use_case"` |  |
| `"website"` |  |

Operations: Create.

API path: `/v1/actions/agent-access-request`

#### AgentCapability

| Field | Description |
| --- | --- |
| `"agent_phone_location_bridge"` |  |
| `"agent_rules"` |  |
| `"discovery"` |  |
| `"external_agent_access"` |  |
| `"external_agent_webhooks"` |  |
| `"local_discovery_location_policy"` |  |
| `"location_choices"` |  |
| `"registry_name"` |  |
| `"schema_version"` |  |
| `"trust_model_version"` |  |

Operations: Load.

API path: `/v1/agent-capabilities.json`

#### AgentConnectionTest

| Field | Description |
| --- | --- |
| `"key"` | Optional UI fallback. |

Operations: Create.

API path: `/v1/actions/agent-connection-test`

#### AgentIntegration

| Field | Description |
| --- | --- |
| `"auth_model"` |  |
| `"commercial_influence"` |  |
| `"developer_docs_url"` |  |
| `"exposure_tiers"` |  |
| `"external_agent_access"` |  |
| `"generated_at"` |  |
| `"http_api"` |  |
| `"legal"` |  |
| `"mcp"` |  |
| `"mcp_client_example_url"` |  |
| `"monitoring_url"` |  |
| `"openapi_url"` |  |
| `"openapi_v1_url"` |  |
| `"operational_rules"` |  |
| `"owner_agent_notifications"` |  |
| `"package_url"` |  |
| `"public_base_url"` |  |
| `"rate_limits"` |  |
| `"registry_name"` |  |
| `"schema_version"` |  |
| `"trust_card_contract"` |  |
| `"trust_doctrine"` |  |

Operations: List.

API path: `/v1/agent-integration.json`

#### AgentMonitoring

| Field | Description |
| --- | --- |
| `"build_sha"` |  |
| `"contract_version"` |  |
| `"generated_at"` |  |
| `"health_url"` |  |
| `"integration_package_url"` |  |
| `"mcp_url"` |  |
| `"metrics"` |  |
| `"openapi_url"` |  |
| `"rate_limits"` |  |
| `"registry_name"` |  |
| `"schema_version"` |  |
| `"service"` |  |
| `"uptime_seconds"` |  |
| `"version"` |  |

Operations: Load.

API path: `/v1/agent-monitoring.json`

#### AgentOpenapi

| Field | Description |
| --- | --- |
| `"components"` |  |
| `"info"` |  |
| `"openapi"` |  |
| `"paths"` |  |
| `"servers"` |  |
| `"tags"` |  |

Operations: List.

API path: `/v1/agent-openapi.json`

#### AgentPolicy

| Field | Description |
| --- | --- |
| `"external_agent_access"` |  |
| `"external_agent_webhooks"` |  |
| `"local_discovery_location_policy"` |  |
| `"location_handoff_flow"` |  |
| `"payment"` |  |
| `"publication"` |  |
| `"schema_version"` |  |
| `"trust_model_version"` |  |
| `"verification"` |  |

Operations: Load.

API path: `/v1/agent-policy.json`

#### AnonymousLocationProofRevocation

| Field | Description |
| --- | --- |
| `"accuracy_meters"` |  |
| `"captured_at"` |  |
| `"latitude"` |  |
| `"longitude"` |  |

Operations: Create, Remove.

API path: `/v1/location-proofs`

#### BusinessApplication

| Field | Description |
| --- | --- |
| `"application"` |  |
| `"application_id"` |  |
| `"business_id"` |  |
| `"claim_id"` |  |
| `"created_at"` |  |
| `"existing_business"` |  |
| `"files"` |  |
| `"listing_id"` |  |
| `"pipeline_status"` |  |
| `"status"` |  |
| `"trust_model_version"` |  |
| `"uploaded_files"` |  |

Operations: Create.

API path: `/v1/actions/business-application`

#### BusinessClaim

| Field | Description |
| --- | --- |
| `"business_id"` |  |
| `"category"` |  |
| `"city"` |  |
| `"claim_id"` |  |
| `"claim_status"` |  |
| `"claimant_email"` | Legacy field; authenticated owner identity wins. |
| `"claimant_name"` | Legacy field; authenticated owner identity wins. |
| `"claimant_relationship"` |  |
| `"created_at"` |  |
| `"directory_listing_id"` |  |
| `"display_name"` |  |
| `"listing_id"` |  |
| `"notes"` |  |
| `"phone"` |  |
| `"source"` |  |
| `"source_type"` |  |
| `"source_url"` |  |
| `"state"` |  |
| `"status"` |  |
| `"verification"` |  |
| `"website"` |  |

Operations: Create.

API path: `/v1/actions/business-claim`

#### BusinessDeal

| Field | Description |
| --- | --- |
| `"createdAt"` |  |
| `"description"` |  |
| `"discountLabel"` |  |
| `"endsAt"` |  |
| `"id"` |  |
| `"promoCode"` |  |
| `"startsAt"` |  |
| `"terms"` |  |
| `"title"` |  |

Operations: List.

API path: `/v1/businesses/{business_id}/deals.json`

#### BusinessIndex

| Field | Description |
| --- | --- |
| `"brand_assets"` |  |
| `"business_id"` |  |
| `"category"` |  |
| `"city"` |  |
| `"display_name"` |  |
| `"domain"` |  |
| `"insurance"` |  |
| `"phone"` |  |
| `"public_profile_url"` |  |
| `"review_reputation"` |  |
| `"state"` |  |
| `"street_address"` | Owner-published street address where authorized. |
| `"trust_card_url"` |  |
| `"trust_model_version"` |  |
| `"verification_class"` |  |
| `"verification_disclosure"` |  |
| `"website"` |  |
| `"zip"` | Owner-published postal code where authorized. |

Operations: List.

API path: `/v1/businesses/index.json`

#### BusinessOwner

| Field | Description |
| --- | --- |
| `"account_id"` |  |
| `"account_role"` |  |
| `"acknowledge_data_effects"` |  |
| `"actions"` |  |
| `"allowed_actions"` |  |
| `"amount_cents"` | Within the top-up limits (default $25 to $5,000). |
| `"applicant_location_requirements"` |  |
| `"apply_url"` |  |
| `"asset_id"` |  |
| `"assigneeId"` |  |
| `"assigneeLabel"` |  |
| `"assigneeType"` |  |
| `"attempt_id"` |  |
| `"benefits"` |  |
| `"body"` |  |
| `"businessId"` |  |
| `"businessName"` |  |
| `"business_id"` |  |
| `"campaign"` |  |
| `"campaign_id"` |  |
| `"carrier_name"` |  |
| `"category"` |  |
| `"category_alias"` |  |
| `"category_aliases"` |  |
| `"change"` |  |
| `"city"` |  |
| `"client_message_id"` |  |
| `"code"` |  |
| `"compensation_text"` |  |
| `"confirm"` |  |
| `"confirmation"` |  |
| `"connection_kind"` |  |
| `"consent_sha256"` | SHA-256 of the acceptance text shown (from payment-authorizations). |
| `"contact_email"` |  |
| `"content_type"` |  |
| `"country"` |  |
| `"coupon_code"` |  |
| `"createdAt"` |  |
| `"created_at"` |  |
| `"credential_id"` |  |
| `"credential_identifier"` |  |
| `"data_base64"` |  |
| `"delivery_contract"` |  |
| `"description"` |  |
| `"direct_apply"` |  |
| `"disabled_reason"` |  |
| `"discount_label"` |  |
| `"display_name"` |  |
| `"employment_type"` |  |
| `"enabled"` |  |
| `"endpoint"` |  |
| `"endpoint_id"` |  |
| `"endpoint_url"` |  |
| `"ends_at"` |  |
| `"event_id"` |  |
| `"event_types"` |  |
| `"evidence_observed_at"` |  |
| `"expected_updated_at"` |  |
| `"experience_level"` |  |
| `"expires_at"` |  |
| `"factor_id"` |  |
| `"failure_count"` |  |
| `"file_name"` |  |
| `"file_sha256"` |  |
| `"full_name"` |  |
| `"guideHandoffAnsweredAt"` |  |
| `"guideHandoffAt"` |  |
| `"guideHandoffDueAt"` |  |
| `"hours"` |  |
| `"id"` |  |
| `"idempotency_key"` |  |
| `"installation_id"` |  |
| `"issuer"` |  |
| `"jurisdiction"` |  |
| `"kind"` |  |
| `"label"` |  |
| `"lastMessageAt"` |  |
| `"lastMessageAuthorType"` |  |
| `"lastMessagePreview"` |  |
| `"last_delivery_at"` |  |
| `"launch"` |  |
| `"license_number"` |  |
| `"messages"` |  |
| `"messagesTruncated"` |  |
| `"monthly_cap_cents"` |  |
| `"name"` |  |
| `"note"` |  |
| `"one_time_display"` |  |
| `"ownerEmail"` |  |
| `"ownerLastReadAt"` |  |
| `"ownerName"` |  |
| `"ownerUserId"` |  |
| `"period"` |  |
| `"phone"` |  |
| `"platform"` |  |
| `"policy_number"` |  |
| `"postal_code"` |  |
| `"promo_code"` |  |
| `"push_token"` |  |
| `"radius_miles"` |  |
| `"reason"` |  |
| `"reason_category"` |  |
| `"reason_detail"` |  |
| `"registered_at"` |  |
| `"request_id"` | Client id of this confirmation (8-100 characters); reuse it only to retry the same confirmation. |
| `"requested_at"` |  |
| `"salary_currency"` |  |
| `"salary_max"` |  |
| `"salary_min"` |  |
| `"salary_period"` |  |
| `"save_card"` |  |
| `"save_card_consent_sha256"` | Only with save_card true: SHA-256 of the save-card consent text shown. |
| `"schedule"` |  |
| `"service_areas"` |  |
| `"signing_secret"` |  |
| `"size_bytes"` |  |
| `"skills"` |  |
| `"source_url"` |  |
| `"starts_at"` |  |
| `"state"` |  |
| `"stated_expires_at"` |  |
| `"status"` |  |
| `"street_address"` |  |
| `"subject"` |  |
| `"submitted_identifier"` |  |
| `"supportLastReadAt"` |  |
| `"terms"` |  |
| `"terms_version"` | Must be the current Advertiser Terms version. |
| `"threshold_cents"` |  |
| `"ticketNumber"` |  |
| `"tier"` |  |
| `"title"` |  |
| `"total_job_openings"` |  |
| `"typing"` |  |
| `"updatedAt"` |  |
| `"updated_at"` |  |
| `"url"` | Public HTTPS receiver operated by the connecting principal or its agent runtime. |
| `"website"` |  |
| `"workplace_type"` |  |
| `"zip"` |  |

Operations: Create, Update.

API path: `/v1/owner/agents/{agent_id}/disconnect`

#### BusinessReview

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Load.

API path: `/v1/businesses/{business_id}/reviews.json`

#### ChatAttachment

| Field | Description |
| --- | --- |
| `"byteSize"` |  |
| `"content_type"` |  |
| `"data_base64"` |  |
| `"fileName"` |  |
| `"file_name"` |  |
| `"id"` |  |
| `"mediaType"` |  |
| `"size_bytes"` |  |

Operations: Create.

API path: `/v1/account/conversations/{conversation_id}/attachments`

#### ChatAttachmentUrl

| Field | Description |
| --- | --- |
| `"byte_size"` |  |
| `"expires_in_seconds"` |  |
| `"file_name"` |  |
| `"id"` |  |
| `"media_type"` |  |
| `"signed_url"` |  |

Operations: Create.

API path: `/v1/account/conversations/{conversation_id}/attachments/{attachment_id}/url`

#### ClaimVerificationSend

| Field | Description |
| --- | --- |
| `"challenge_id"` | Opaque v3 SMS or owner-email challenge UUID. |
| `"channel"` |  |
| `"claim_id"` |  |
| `"destination_hint"` |  |
| `"expires_in_seconds"` |  |
| `"provider_status"` | V3 provider request state. |
| `"recipient_delivery_confirmed"` | V3 currently has no final-delivery provider event for this receipt. |
| `"request_id"` | Caller-generated idempotency UUID. |
| `"status"` |  |

Operations: Create.

API path: `/v1/actions/claim-verification/send`

#### ClaimVerificationVerify

| Field | Description |
| --- | --- |
| `"business_id"` |  |
| `"challenge_id"` | Exact challenge UUID returned by the v3 SMS or owner-email send. |
| `"channel"` |  |
| `"claim_id"` |  |
| `"code"` |  |
| `"method"` |  |
| `"publication"` |  |
| `"status"` |  |
| `"transfer_review_required"` |  |
| `"trust_model_version"` |  |

Operations: Create.

API path: `/v1/actions/claim-verification/verify`

#### CommercialClick

| Field | Description |
| --- | --- |
| `"action_type"` |  |
| `"ad_receipt"` | Opaque server-signed receipt of a served Sponsored ad, sent back unchanged with a profile, website or call tap. |
| `"billable"` |  |
| `"billing_event_id"` |  |
| `"billing_status"` |  |
| `"business_id"` |  |
| `"category"` |  |
| `"city"` |  |
| `"click_id"` |  |
| `"commercial_status"` |  |
| `"created_at"` |  |
| `"directory_listing_id"` | Deprecated alias of listing_id. |
| `"display_name"` |  |
| `"fallback_interaction_id"` |  |
| `"ledger_status"` |  |
| `"listing_id"` |  |
| `"metadata"` |  |
| `"migration_required"` |  |
| `"page_path"` |  |
| `"referrer"` |  |
| `"source_type"` |  |
| `"state"` |  |
| `"status"` |  |
| `"storage"` |  |
| `"surface"` | Where the Sponsored ad was shown (with ad_receipt). |
| `"target_url"` |  |

Operations: Create.

API path: `/v1/actions/commercial-click`

#### ContactRecorded

| Field | Description |
| --- | --- |
| `"business_id"` |  |
| `"contact_recorded"` |  |
| `"interaction_id"` |  |
| `"ok"` |  |
| `"policy"` |  |
| `"review_upgraded"` |  |
| `"status"` |  |
| `"trust_weight"` |  |
| `"verified"` |  |

Operations: Create.

API path: `/v1/actions/confirm-interaction`

#### Conversation

| Field | Description |
| --- | --- |
| `"account_id"` |  |
| `"conversation_id"` | Exact conversation referenced by a webhook; returns zero or one scoped thread. |
| `"conversations"` |  |
| `"count"` |  |
| `"cursor"` | Opaque pagination cursor returned by the previous page. |
| `"limit"` |  |
| `"pagination"` |  |

Operations: Create.

API path: `/v1/actions/list-my-conversations`

#### ConversationClose

| Field | Description |
| --- | --- |
| `"closed_at"` |  |
| `"conversation_id"` |  |
| `"id"` |  |
| `"status"` |  |

Operations: Create.

API path: `/v1/account/conversations/{conversation_id}/close`

#### ConversationReport

| Field | Description |
| --- | --- |
| `"detail"` |  |
| `"id"` |  |
| `"reason"` |  |
| `"status"` |  |

Operations: Create.

API path: `/v1/account/conversations/{conversation_id}/report`

#### ConversationWorkflow

| Field | Description |
| --- | --- |
| `"priority"` |  |
| `"status"` |  |

Operations: Create.

API path: `/v1/owner/messages/{interaction_id}/workflow`

#### CreateAgentApiKey

| Field | Description |
| --- | --- |
| `"account_id"` |  |
| `"allowed_actions"` |  |
| `"allowed_business_ids"` |  |
| `"created_by"` |  |
| `"key"` |  |
| `"label"` |  |
| `"monthly_quota"` |  |
| `"notes"` |  |
| `"one_time_display"` |  |
| `"rate_limit_per_minute"` |  |
| `"raw_key"` |  |
| `"status"` |  |

Operations: Create.

API path: `/v1/admin/agent-keys`

#### Customer

| Field | Description |
| --- | --- |
| `"auth_provider"` |  |
| `"avatar_url"` | Short-lived signed display URL for a private avatar object, or null. |
| `"city"` |  |
| `"created_at"` |  |
| `"email"` |  |
| `"full_name"` |  |
| `"id"` |  |
| `"phone"` |  |
| `"search_category"` |  |
| `"service_need"` |  |
| `"state"` |  |
| `"status"` |  |
| `"updated_at"` |  |

Operations: Create.

API path: `/v1/account/customer`

#### CustomerAccount

| Field | Description |
| --- | --- |
| `"account_id"` |  |
| `"account_role"` |  |
| `"accuracy_meters"` |  |
| `"acknowledge_data_effects"` |  |
| `"actions"` |  |
| `"agent_key_id"` |  |
| `"agent_receives_coordinates"` |  |
| `"all_paused"` |  |
| `"app_attest_registered"` |  |
| `"assertion"` |  |
| `"attestation"` |  |
| `"author_label"` |  |
| `"author_type"` |  |
| `"binding"` |  |
| `"body"` |  |
| `"business_id"` |  |
| `"capture_source"` |  |
| `"captured_at"` |  |
| `"challenge"` |  |
| `"challenge_id"` |  |
| `"client_message_id"` |  |
| `"completed"` |  |
| `"confirmation"` |  |
| `"connection_id"` |  |
| `"connection_kind"` |  |
| `"continuation"` | The continuation from the previous response, sent back unchanged to get the next results. |
| `"coordinates_returned"` |  |
| `"created_at"` |  |
| `"credential_id"` |  |
| `"declined"` |  |
| `"delivery_contract"` |  |
| `"disabled_reason"` |  |
| `"disclosure"` |  |
| `"enabled"` |  |
| `"endpoint"` |  |
| `"endpoint_id"` |  |
| `"endpoint_url"` |  |
| `"environment"` |  |
| `"event_id"` |  |
| `"event_types"` |  |
| `"failure_count"` |  |
| `"handoff_id"` |  |
| `"has_more"` |  |
| `"id"` |  |
| `"idempotent_replay"` |  |
| `"installation_id"` |  |
| `"key_id"` |  |
| `"last_delivery_at"` |  |
| `"latitude"` |  |
| `"location"` | An opaque location reference from the website's own location controls. |
| `"longitude"` |  |
| `"message_alerts_enabled"` |  |
| `"messages"` |  |
| `"mode"` | fallback: a direct search answered because the language model was unavailable. |
| `"name"` |  |
| `"oauth_grant_id"` |  |
| `"one_time_display"` |  |
| `"platform"` |  |
| `"policy"` |  |
| `"purpose"` |  |
| `"push_token"` |  |
| `"reason"` |  |
| `"registered_at"` |  |
| `"reply"` |  |
| `"request_mode"` |  |
| `"requested_at"` |  |
| `"results"` |  |
| `"schema_version"` |  |
| `"selected_at"` |  |
| `"signed_in"` |  |
| `"signing_secret"` |  |
| `"status"` |  |
| `"updated_at"` |  |
| `"url"` | Public HTTPS receiver operated by the connecting principal or its agent runtime. |
| `"usable_until"` |  |
| `"use_mode"` |  |

Operations: Create.

API path: `/v1/account/location-handoffs/{handoff_id}/complete-from-device`

#### CustomerLocationProofRevocation

| Field | Description |
| --- | --- |
| `"accuracy_meters"` |  |
| `"captured_at"` |  |
| `"latitude"` |  |
| `"longitude"` |  |

Operations: Create, Remove.

API path: `/v1/account/location-proofs`

#### DestinationAddressSuggestion

| Field | Description |
| --- | --- |
| `"input"` | Normalized partial US service-address text. |
| `"suggestions"` |  |

Operations: Create.

API path: `/v1/account/destination-address-suggestions`

#### DestinationLocationProof

| Field | Description |
| --- | --- |
| `"address"` | A real US service address. |
| `"premise_proximity_confirmation_token"` | Opaque one-time token from the immediately preceding premise-proximity challenge for the same address and authority. |

Operations: Create.

API path: `/v1/account/destination-location-proofs`

#### DomainTrustCard

| Field | Description |
| --- | --- |
| `"business_id"` |  |
| `"domain"` |  |
| `"schema_version"` |  |
| `"trust_card"` |  |
| `"trust_card_url"` |  |
| `"trust_model_version"` |  |
| `"verification_class"` |  |
| `"verification_disclosure"` |  |

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
| `"agent_phone_location_bridge"` |  |
| `"build_sha"` |  |
| `"business_review_access"` |  |
| `"contract_version"` |  |
| `"external_agent_webhooks"` |  |
| `"external_agent_webhooks_enabled"` |  |
| `"ios_app_attest_anonymous_location"` |  |
| `"location_choices"` |  |
| `"location_handoff"` |  |
| `"mobile_push"` |  |
| `"ok"` |  |
| `"service"` |  |
| `"sponsored_ordering"` |  |
| `"trust_model_version"` |  |
| `"version"` |  |

Operations: Load.

API path: `/health`

#### JobApplication

| Field | Description |
| --- | --- |
| `"account_id"` |  |
| `"already_withdrawn"` |  |
| `"application"` |  |
| `"applications"` |  |
| `"billing"` |  |
| `"business_id"` |  |
| `"count"` |  |
| `"cover_note"` |  |
| `"free_to_apply"` |  |
| `"id"` |  |
| `"job_id"` |  |
| `"limit"` |  |
| `"offset"` |  |
| `"resume"` |  |
| `"retention_note"` |  |
| `"status"` |  |

Operations: Create.

API path: `/v1/jobs/{job_id}/apply`

#### JobResumeSignedUrl

| Field | Description |
| --- | --- |
| `"application_id"` |  |
| `"content_type"` |  |
| `"expires_in_seconds"` |  |
| `"resume_file_name"` |  |
| `"signed_url"` |  |
| `"size_bytes"` |  |
| `"status"` |  |

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
| `"account_id"` |  |
| `"client_message_id"` | Caller-stable retry key. |
| `"conversation_id"` |  |
| `"created_at"` |  |
| `"delivery"` |  |
| `"idempotent_replay"` |  |
| `"interaction_id"` |  |
| `"message"` |  |
| `"moderation_required"` |  |
| `"source_path"` |  |
| `"status"` |  |
| `"subject"` |  |
| `"target_business_id"` |  |
| `"target_business_name"` |  |
| `"target_business_source"` |  |

Operations: Create.

API path: `/v1/actions/business-message`

#### ModeratedAction

| Field | Description |
| --- | --- |
| `"actions"` |  |
| `"body"` |  |
| `"client_request_id"` |  |
| `"content_type"` |  |
| `"continuation"` | The continuation from the previous response, sent back unchanged to get the next results. |
| `"coordinates_returned"` |  |
| `"disclosure"` |  |
| `"enabled"` |  |
| `"file_sha256"` |  |
| `"has_more"` |  |
| `"human_confirmation"` |  |
| `"intent_id"` |  |
| `"kind"` |  |
| `"knowledgeVersion"` |  |
| `"limits"` |  |
| `"links"` |  |
| `"location"` | An opaque location reference from the website's own location controls. |
| `"message"` |  |
| `"messages"` |  |
| `"mode"` | fallback: a direct search answered because the language model was unavailable. |
| `"name"` |  |
| `"needsHuman"` |  |
| `"policy"` | Human schedule and separate claim-review policy. |
| `"question"` |  |
| `"reply"` |  |
| `"result"` |  |
| `"results"` |  |
| `"scan_authority_id"` |  |
| `"scanner"` |  |
| `"scanner_version"` |  |
| `"schema_version"` |  |
| `"searcher_latitude"` |  |
| `"searcher_longitude"` |  |
| `"signature"` |  |
| `"signed_in"` |  |
| `"size_bytes"` |  |
| `"subject"` |  |
| `"target_business_id"` |  |
| `"topic"` |  |

Operations: Create, Load.

API path: `/v1/actions/contact-attempt`

#### OpenApiDocument

| Field | Description |
| --- | --- |
| `"components"` |  |
| `"info"` |  |
| `"openapi"` |  |
| `"paths"` |  |
| `"servers"` |  |
| `"tags"` |  |

Operations: List.

API path: `/openapi.json`

#### Operation

| Field | Description |
| --- | --- |
| `"account_id"` |  |
| `"action"` |  |
| `"active"` |  |
| `"active_or_good_standing"` |  |
| `"ai_draft_id"` |  |
| `"allowed_actions"` |  |
| `"alt"` |  |
| `"amount_cents"` | Whole cents, non-zero, at most 1,000,000 either way; a promotional credit is positive. |
| `"amount_off_cents"` |  |
| `"api_key"` |  |
| `"applies_to_period"` |  |
| `"applies_to_tier"` |  |
| `"assigned_admin_user_id"` |  |
| `"assigneeId"` |  |
| `"assigneeLabel"` |  |
| `"assigneeType"` |  |
| `"assignee_id"` |  |
| `"assignee_label"` |  |
| `"assignee_type"` | AI assignment is unavailable while the customer-support workload is disconnected. |
| `"assistant_enabled"` |  |
| `"base_url"` |  |
| `"body"` |  |
| `"businessId"` |  |
| `"businessName"` |  |
| `"business_id"` |  |
| `"business_ids"` |  |
| `"campaign_id"` |  |
| `"campaign_ids"` |  |
| `"caption"` |  |
| `"case_status"` |  |
| `"catalog"` |  |
| `"category"` |  |
| `"category_alias"` |  |
| `"chunk_size"` |  |
| `"city"` |  |
| `"code"` |  |
| `"confidence"` |  |
| `"config"` | Complete validated pricing configuration. |
| `"confirm"` |  |
| `"confirm_admin"` |  |
| `"confirmation"` |  |
| `"connection_id"` |  |
| `"connection_kind"` |  |
| `"content_type"` |  |
| `"context_id"` |  |
| `"context_type"` |  |
| `"createdAt"` |  |
| `"created_at"` |  |
| `"credential_expires_at"` | Expiration date printed on the license. |
| `"credential_id"` |  |
| `"custom_wire"` |  |
| `"data_base64"` |  |
| `"decision"` |  |
| `"dedupe_ack"` |  |
| `"delivery_contract"` |  |
| `"disabled_reason"` |  |
| `"discount_type"` |  |
| `"display_name"` |  |
| `"disposition"` |  |
| `"draft"` |  |
| `"duration"` |  |
| `"duration_in_months"` |  |
| `"email"` |  |
| `"enabled"` |  |
| `"endpoint"` |  |
| `"endpoint_id"` |  |
| `"endpoint_url"` |  |
| `"ends_at"` |  |
| `"environment_fallback"` |  |
| `"event_id"` |  |
| `"event_types"` |  |
| `"expected_allowed_actions"` |  |
| `"expected_key_id"` |  |
| `"expected_updated_at"` |  |
| `"expected_version"` |  |
| `"expires_at"` | Promotional credit only: ISO date-time 1 hour to 2 years ahead, disclosed to the owner. |
| `"fact_id"` |  |
| `"facts"` |  |
| `"failure_count"` |  |
| `"fields"` | Validated fields for this fixed content-block type. |
| `"file_name"` |  |
| `"guideHandoffAnsweredAt"` |  |
| `"guideHandoffAt"` |  |
| `"guideHandoffDueAt"` |  |
| `"height"` |  |
| `"historic_association_checked"` |  |
| `"hold"` |  |
| `"holder_name_match"` |  |
| `"hours"` |  |
| `"id"` |  |
| `"idempotency_key"` |  |
| `"identifier_match"` |  |
| `"in_use"` |  |
| `"instruction"` |  |
| `"invited"` |  |
| `"key_check"` |  |
| `"kind"` |  |
| `"label"` |  |
| `"lastMessageAt"` |  |
| `"lastMessageAuthorType"` |  |
| `"lastMessagePreview"` |  |
| `"last_delivery_at"` |  |
| `"last_error_code"` |  |
| `"last_probe_at"` |  |
| `"last_problem"` |  |
| `"legal_name"` |  |
| `"limit"` |  |
| `"make_active"` |  |
| `"max_cents"` |  |
| `"max_redemptions"` |  |
| `"messages"` |  |
| `"messagesTruncated"` |  |
| `"min_cents"` |  |
| `"model"` |  |
| `"model_id"` |  |
| `"name"` |  |
| `"note"` |  |
| `"notes"` |  |
| `"observed_at"` |  |
| `"one_time_display"` |  |
| `"outcome"` |  |
| `"ownerEmail"` |  |
| `"ownerLastReadAt"` |  |
| `"ownerName"` |  |
| `"ownerUserId"` |  |
| `"owner_reason_code"` | Controlled owner-visible rejection reason. |
| `"per_customer_limit"` |  |
| `"percent_off"` |  |
| `"phone"` |  |
| `"policyVersion"` |  |
| `"priority"` |  |
| `"provider"` |  |
| `"providers"` |  |
| `"purpose_code"` |  |
| `"rank_bid_cents"` |  |
| `"reason"` |  |
| `"reason_category"` |  |
| `"reason_code"` |  |
| `"reason_detail"` |  |
| `"reference"` |  |
| `"reject_reason"` |  |
| `"related_case_id"` |  |
| `"report_id"` |  |
| `"report_ids"` |  |
| `"reserve_cents"` | 100-10000; never below $1.00. |
| `"resolution_note"` |  |
| `"review_notes"` |  |
| `"revision"` |  |
| `"role"` |  |
| `"rows"` |  |
| `"run"` |  |
| `"schema_version"` |  |
| `"scope"` |  |
| `"search"` |  |
| `"settings"` |  |
| `"signing_secret"` |  |
| `"size_bytes"` |  |
| `"sla_due_at"` |  |
| `"source"` |  |
| `"source_authority"` | Exact official authority name. |
| `"source_category_slug"` |  |
| `"source_scope_checked"` |  |
| `"source_url"` | Exact HTTPS official source URL. |
| `"starts_at"` |  |
| `"state"` | Bulk by area: every ad of the advertisers in this two-letter U.S. |
| `"status"` |  |
| `"storage"` |  |
| `"street_address"` |  |
| `"subject"` |  |
| `"supportLastReadAt"` |  |
| `"target_category"` |  |
| `"taxonomy_category_aliases"` |  |
| `"ticketNumber"` |  |
| `"tier"` |  |
| `"typing"` |  |
| `"until"` |  |
| `"updatedAt"` |  |
| `"updated_at"` |  |
| `"url"` | Public HTTPS receiver operated by the connecting principal or its agent runtime. |
| `"valid_until"` |  |
| `"value"` |  |
| `"verification_method"` |  |
| `"verified_at"` |  |
| `"verified_service_scope"` |  |
| `"version"` |  |
| `"website"` |  |
| `"width"` |  |
| `"window_hours"` | 1-744, default 48. |
| `"workload"` |  |
| `"zip"` |  |

Operations: Create, Patch, Remove, Update.

API path: `/v1/admin/businesses/{business_id}/job-applications/{application_id}/resume-url`

#### OwnerNotification

| Field | Description |
| --- | --- |
| `"businessId"` |  |
| `"createdAt"` |  |
| `"dedupeKey"` |  |
| `"emailStatus"` |  |
| `"eventType"` |  |
| `"id"` |  |
| `"readAt"` |  |
| `"resourceId"` |  |
| `"resourceKind"` |  |
| `"resourceUrl"` |  |
| `"summary"` |  |
| `"webhookStatus"` |  |

Operations: Create.

API path: `/v1/owner/notifications/{notification_id}/read`

#### OwnerNotificationSetting

| Field | Description |
| --- | --- |
| `"businessId"` |  |
| `"business_id"` |  |
| `"createdAt"` |  |
| `"emailEnabled"` |  |
| `"email_enabled"` |  |
| `"eventTypeSubscriptions"` |  |
| `"event_types"` |  |
| `"updatedAt"` |  |
| `"webhookEnabled"` |  |
| `"webhook_enabled"` |  |

Operations: Create.

API path: `/v1/owner/notification-settings`

#### OwnerWebhookEndpoint

| Field | Description |
| --- | --- |
| `"businessId"` |  |
| `"createdAt"` |  |
| `"enabled"` |  |
| `"eventTypeSubscriptions"` |  |
| `"failureCount"` |  |
| `"id"` |  |
| `"lastDeliveryAt"` |  |
| `"updatedAt"` |  |
| `"url"` |  |

Operations: Create.

API path: `/v1/owner/webhooks/{endpoint_id}/disable`

#### OwnerWebhookRegistration

| Field | Description |
| --- | --- |
| `"business_id"` |  |
| `"endpoint"` |  |
| `"event_types"` |  |
| `"one_time_display"` |  |
| `"signing_secret"` |  |
| `"status"` |  |
| `"url"` |  |

Operations: Create.

API path: `/v1/owner/webhooks/{endpoint_id}/rotate-secret`

#### Pricing

| Field | Description |
| --- | --- |
| `"billing"` |  |
| `"branch_add_ons"` |  |
| `"currency"` |  |
| `"generated_at"` |  |
| `"neutrality"` |  |
| `"plans"` |  |
| `"promotions"` |  |
| `"published_at"` |  |
| `"radius_extension"` |  |
| `"revision_id"` |  |
| `"source"` |  |
| `"trust_model_version"` |  |

Operations: List.

API path: `/v1/pricing`

#### PromoteVerifiedTransaction

| Field | Description |
| --- | --- |
| `"business_id"` |  |
| `"evidence_id"` |  |
| `"interaction_id"` |  |
| `"ok"` |  |
| `"review_upgraded"` |  |
| `"status"` |  |
| `"trust_weight"` |  |
| `"verified"` |  |

Operations: Create.

API path: `/v1/actions/promote-verified-transaction`

#### PublicContent

| Field | Description |
| --- | --- |
| `"blocks"` |  |
| `"generated_at"` |  |
| `"source"` |  |
| `"trust_model_version"` |  |

Operations: Load.

API path: `/v1/content`

#### Recommend

| Field | Description |
| --- | --- |
| `"candidate_window_truncated"` | True when Loppee's bounded candidate assembly reached its safety cap. |
| `"commercial_influence"` | Must be none whenever current-location or saved_exact authority is absent, including universal exact/genuine-prefix name lookup. |
| `"display_count"` | Agent-key responses: the number of businesses in this response. |
| `"endpoint"` |  |
| `"fallback_registry"` |  |
| `"generated_at"` |  |
| `"has_more"` | True only when next_cursor can continue through the current bounded, deterministic candidate window. |
| `"listed"` |  |
| `"location_context"` | Local category discovery and recommendations require a current precise location proof or handoff, a user-confirmed validated destination authority, or a saved_exact Home location. |
| `"ordering"` |  |
| `"policy"` |  |
| `"presentation_guidance"` | Agent-key responses: how to present these results to the customer. |
| `"query"` |  |
| `"ranking_policy"` |  |
| `"registry_count_basis"` |  |
| `"registry_count_observed_at"` |  |
| `"registry_name"` |  |
| `"results"` |  |
| `"returned_count"` |  |
| `"reviewed_registry"` |  |
| `"schema_version"` |  |
| `"search_intent"` |  |
| `"suggestions"` |  |
| `"total_matches"` | Web and app responses. |
| `"total_matches_basis"` |  |
| `"total_registry_records"` |  |
| `"trust_model_version"` |  |
| `"verified"` |  |
| `"visible_candidate_records"` | Web and app responses. |

Operations: List.

API path: `/v1/recommend`

#### Review

| Field | Description |
| --- | --- |
| `"account_id"` |  |
| `"attestation_accepted"` | Set true only after the customer confirms this describes their own experience and explicitly approves publishing the displayed business, star rating, title, and full review. |
| `"customer_confirmed"` | Set true to confirm you were a customer of this business. |
| `"message"` |  |
| `"rating"` |  |
| `"service_date"` | Optional real, non-future service date in YYYY-MM-DD format; empty means not provided. |
| `"subject"` |  |
| `"target_business_id"` |  |

Operations: Create.

API path: `/v1/actions/public-review`

#### Revoke

| Field | Description |
| --- | --- |
| `"account_id"` |  |
| `"key_id"` |  |
| `"revoked_by"` |  |
| `"status"` |  |

Operations: Create.

API path: `/v1/admin/agent-keys/{key_id}/revoke`

#### SaveBusiness

| Field | Description |
| --- | --- |
| `"account_id"` |  |
| `"business_id"` |  |
| `"business_name"` |  |
| `"business_source"` |  |
| `"category"` |  |
| `"city"` |  |
| `"created_at"` |  |
| `"notes"` |  |
| `"saved_business_id"` |  |
| `"state"` |  |
| `"status"` |  |

Operations: Create.

API path: `/v1/actions/save-business`

#### SavedBusiness

| Field | Description |
| --- | --- |
| `"account_id"` |  |
| `"count"` |  |
| `"limit"` |  |
| `"saved_businesses"` |  |

Operations: Create.

API path: `/v1/actions/list-saved-businesses`

#### SavedLocation

| Field | Description |
| --- | --- |
| `"available"` |  |
| `"coordinates_returned"` |  |
| `"kind"` | Only saved_exact is precise local-discovery authority. |
| `"label"` |  |
| `"location_proof_id"` |  |
| `"reach_precision"` | Exact can authorize local category/recommendation reach; coarse cannot activate local results, Sponsored placement, or impressions. |
| `"saved_location_ref"` |  |
| `"updated_at"` |  |
| `"zip"` |  |

Operations: Remove, Update.

API path: `/v1/account/location`

#### Search

| Field | Description |
| --- | --- |
| `"candidate_window_truncated"` | True when Loppee's bounded candidate assembly reached its safety cap. |
| `"commercial_influence"` | Must be none whenever current-location or saved_exact authority is absent, including universal exact/genuine-prefix name lookup. |
| `"display_count"` | Agent-key responses: the number of businesses in this response. |
| `"generated_at"` |  |
| `"has_more"` | True only when next_cursor can continue through the current bounded, deterministic candidate window. |
| `"location_context"` | Local category discovery and recommendations require a current precise location proof or handoff, a user-confirmed validated destination authority, or a saved_exact Home location. |
| `"next_cursor"` |  |
| `"page_limit"` |  |
| `"policy"` |  |
| `"presentation_guidance"` | Agent-key responses: how to present these results to the customer. |
| `"query"` |  |
| `"ranking_policy"` |  |
| `"registry_count_basis"` |  |
| `"registry_count_observed_at"` |  |
| `"registry_name"` |  |
| `"results"` |  |
| `"returned_count"` |  |
| `"schema_version"` |  |
| `"search_intent"` |  |
| `"suggestions"` |  |
| `"total_matches"` | Web and app responses. |
| `"total_matches_basis"` |  |
| `"total_registry_records"` |  |
| `"trust_model_version"` |  |
| `"visible_candidate_records"` | Web and app responses. |

Operations: List.

API path: `/v1/business-claim/candidates`

#### Suggest

| Field | Description |
| --- | --- |
| `"categories"` |  |
| `"names"` |  |
| `"query"` |  |
| `"schema_version"` |  |

Operations: List.

API path: `/v1/suggest`

#### SupportInternalNote

| Field | Description |
| --- | --- |
| `"authorLabel"` |  |
| `"body"` |  |
| `"createdAt"` |  |
| `"id"` |  |

Operations: Create.

API path: `/v1/admin/support/{conversation_id}/internal-notes`

#### SupportWorkflow

| Field | Description |
| --- | --- |
| `"category"` |  |
| `"id"` |  |
| `"priority"` |  |
| `"waiting_on"` |  |

Operations: Create.

API path: `/v1/admin/support/{conversation_id}/workflow`

#### TaxonomySuggestion

| Field | Description |
| --- | --- |
| `"alias"` |  |
| `"path_titles"` |  |
| `"title"` |  |

Operations: List.

API path: `/v1/taxonomy/suggest`

#### TrustCard

| Field | Description |
| --- | --- |
| `"agency"` |  |
| `"collected_at"` |  |
| `"disclosure"` |  |
| `"fact_id"` |  |
| `"matched_on"` |  |
| `"reason"` |  |
| `"record_kind"` |  |
| `"record_number"` |  |
| `"record_scope"` |  |
| `"record_type"` |  |
| `"recorded_expiry"` |  |
| `"result"` |  |
| `"source_label"` |  |
| `"source_url"` |  |
| `"state"` |  |
| `"status_on_record"` |  |

Operations: Create, List, Load.

API path: `/v1/businesses/{business_id}/license-records/{fact_id}/report`

#### UnsaveBusiness

| Field | Description |
| --- | --- |
| `"account_id"` |  |
| `"business_id"` |  |
| `"removed"` |  |
| `"status"` |  |

Operations: Create.

API path: `/v1/actions/unsave-business`

#### UpdateAgentBillingAccount

| Field | Description |
| --- | --- |
| `"account_id"` |  |
| `"billing_account"` |  |
| `"billing_status"` |  |
| `"included_actions"` |  |
| `"monthly_fee_cents"` |  |
| `"overage_cents"` |  |
| `"plan"` |  |
| `"status"` |  |
| `"updated_by"` |  |

Operations: Create.

API path: `/v1/admin/agent-billing-accounts`

#### WithdrawJobApplication

| Field | Description |
| --- | --- |
| `"account_id"` |  |
| `"already_withdrawn"` |  |
| `"application"` |  |
| `"application_id"` |  |
| `"status"` |  |

Operations: Create.

API path: `/v1/actions/withdraw-job-application`



## Entities


### AgentAccess

Create an instance: `agentAccess := client.AgentAccess(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

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
| `operating_states` | `[]any` |  |
| `organization_name` | `string` |  |
| `request_id` | `string` |  |
| `request_status` | `string` |  |
| `requested_actions` | `[]any` |  |
| `safety_contact` | `string` |  |
| `status` | `any` |  |
| `target_categories` | `[]any` |  |
| `use_case` | `string` |  |
| `website` | `string` |  |

#### Example: Create

```go
result, err := client.AgentAccess(nil).Create(map[string]any{
    "agent_name": "example_agent_name",
    "developer_email": "example_developer_email",
    "organization_name": "example_organization_name",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### AgentCapability

Create an instance: `agentCapability := client.AgentCapability(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_phone_location_bridge` | `map[string]any` |  |
| `agent_rules` | `map[string]any` |  |
| `discovery` | `map[string]any` |  |
| `external_agent_access` | `map[string]any` |  |
| `external_agent_webhooks` | `map[string]any` |  |
| `local_discovery_location_policy` | `map[string]any` |  |
| `location_choices` | `map[string]any` |  |
| `registry_name` | `any` |  |
| `schema_version` | `any` |  |
| `trust_model_version` | `any` |  |

#### Example: Load

```go
agentCapability, err := client.AgentCapability(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(agentCapability.(sdk.Entity).Data()) // the loaded entity's record
```


### AgentConnectionTest

Create an instance: `agentConnectionTest := client.AgentConnectionTest(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `key` | `string` | Optional UI fallback. |

#### Example: Create

```go
result, err := client.AgentConnectionTest(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### AgentIntegration

Create an instance: `agentIntegration := client.AgentIntegration(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_model` | `map[string]any` |  |
| `commercial_influence` | `map[string]any` |  |
| `developer_docs_url` | `string` |  |
| `exposure_tiers` | `map[string]any` |  |
| `external_agent_access` | `map[string]any` |  |
| `generated_at` | `string` |  |
| `http_api` | `map[string]any` |  |
| `legal` | `map[string]any` |  |
| `mcp` | `map[string]any` |  |
| `mcp_client_example_url` | `string` |  |
| `monitoring_url` | `string` |  |
| `openapi_url` | `string` |  |
| `openapi_v1_url` | `string` |  |
| `operational_rules` | `[]any` |  |
| `owner_agent_notifications` | `map[string]any` |  |
| `package_url` | `string` |  |
| `public_base_url` | `string` |  |
| `rate_limits` | `map[string]any` |  |
| `registry_name` | `any` |  |
| `schema_version` | `string` |  |
| `trust_card_contract` | `map[string]any` |  |
| `trust_doctrine` | `map[string]any` |  |

#### Example: List

```go
agentIntegrations, err := client.AgentIntegration(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range agentIntegrations.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### AgentMonitoring

Create an instance: `agentMonitoring := client.AgentMonitoring(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `build_sha` | `string` |  |
| `contract_version` | `string` |  |
| `generated_at` | `string` |  |
| `health_url` | `string` |  |
| `integration_package_url` | `string` |  |
| `mcp_url` | `string` |  |
| `metrics` | `map[string]any` |  |
| `openapi_url` | `string` |  |
| `rate_limits` | `map[string]any` |  |
| `registry_name` | `any` |  |
| `schema_version` | `string` |  |
| `service` | `string` |  |
| `uptime_seconds` | `float64` |  |
| `version` | `string` |  |

#### Example: Load

```go
agentMonitoring, err := client.AgentMonitoring(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(agentMonitoring.(sdk.Entity).Data()) // the loaded entity's record
```


### AgentOpenapi

Create an instance: `agentOpenapi := client.AgentOpenapi(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `components` | `map[string]any` |  |
| `info` | `map[string]any` |  |
| `openapi` | `any` |  |
| `paths` | `map[string]any` |  |
| `servers` | `[]any` |  |
| `tags` | `[]any` |  |

#### Example: List

```go
agentOpenapis, err := client.AgentOpenapi(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range agentOpenapis.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### AgentPolicy

Create an instance: `agentPolicy := client.AgentPolicy(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `external_agent_access` | `map[string]any` |  |
| `external_agent_webhooks` | `map[string]any` |  |
| `local_discovery_location_policy` | `map[string]any` |  |
| `location_handoff_flow` | `map[string]any` |  |
| `payment` | `map[string]any` |  |
| `publication` | `map[string]any` |  |
| `schema_version` | `any` |  |
| `trust_model_version` | `any` |  |
| `verification` | `map[string]any` |  |

#### Example: Load

```go
agentPolicy, err := client.AgentPolicy(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(agentPolicy.(sdk.Entity).Data()) // the loaded entity's record
```


### AnonymousLocationProofRevocation

Create an instance: `anonymousLocationProofRevocation := client.AnonymousLocationProofRevocation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accuracy_meters` | `float64` |  |
| `captured_at` | `string` |  |
| `latitude` | `float64` |  |
| `longitude` | `float64` |  |

#### Example: Create

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
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### BusinessApplication

Create an instance: `businessApplication := client.BusinessApplication(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `application` | `map[string]any` |  |
| `application_id` | `string` |  |
| `business_id` | `string` |  |
| `claim_id` | `any` |  |
| `created_at` | `string` |  |
| `existing_business` | `bool` |  |
| `files` | `[]any` |  |
| `listing_id` | `string` |  |
| `pipeline_status` | `string` |  |
| `status` | `any` |  |
| `trust_model_version` | `any` |  |
| `uploaded_files` | `float64` |  |

#### Example: Create

```go
result, err := client.BusinessApplication(nil).Create(map[string]any{
    "application": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### BusinessClaim

Create an instance: `businessClaim := client.BusinessClaim(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `business_id` | `any` |  |
| `category` | `string` |  |
| `city` | `string` |  |
| `claim_id` | `string` |  |
| `claim_status` | `string` |  |
| `claimant_email` | `string` | Legacy field; authenticated owner identity wins. |
| `claimant_name` | `string` | Legacy field; authenticated owner identity wins. |
| `claimant_relationship` | `string` |  |
| `created_at` | `string` |  |
| `directory_listing_id` | `any` |  |
| `display_name` | `string` |  |
| `listing_id` | `string` |  |
| `notes` | `string` |  |
| `phone` | `string` |  |
| `source` | `string` |  |
| `source_type` | `string` |  |
| `source_url` | `string` |  |
| `state` | `string` |  |
| `status` | `any` |  |
| `verification` | `map[string]any` |  |
| `website` | `string` |  |

#### Example: Create

```go
result, err := client.BusinessClaim(nil).Create(map[string]any{
    "display_name": "example_display_name",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### BusinessDeal

Create an instance: `businessDeal := client.BusinessDeal(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `string` |  |
| `description` | `string` |  |
| `discountLabel` | `string` |  |
| `endsAt` | `any` |  |
| `id` | `string` |  |
| `promoCode` | `any` |  |
| `startsAt` | `any` |  |
| `terms` | `any` |  |
| `title` | `string` |  |

#### Example: List

```go
businessDeals, err := client.BusinessDeal(nil).List(map[string]any{"id": "example"}, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range businessDeals.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### BusinessIndex

Create an instance: `businessIndex := client.BusinessIndex(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `brand_assets` | `any` |  |
| `business_id` | `string` |  |
| `category` | `string` |  |
| `city` | `string` |  |
| `display_name` | `string` |  |
| `domain` | `any` |  |
| `insurance` | `map[string]any` |  |
| `phone` | `any` |  |
| `public_profile_url` | `string` |  |
| `review_reputation` | `map[string]any` |  |
| `state` | `string` |  |
| `street_address` | `any` | Owner-published street address where authorized. |
| `trust_card_url` | `string` |  |
| `trust_model_version` | `any` |  |
| `verification_class` | `string` |  |
| `verification_disclosure` | `string` |  |
| `website` | `any` |  |
| `zip` | `any` | Owner-published postal code where authorized. |

#### Example: List

```go
businessIndexs, err := client.BusinessIndex(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range businessIndexs.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### BusinessOwner

Create an instance: `businessOwner := client.BusinessOwner(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `string` |  |
| `account_role` | `string` |  |
| `acknowledge_data_effects` | `bool` |  |
| `actions` | `[]any` |  |
| `allowed_actions` | `[]any` |  |
| `amount_cents` | `float64` | Within the top-up limits (default $25 to $5,000). |
| `applicant_location_requirements` | `string` |  |
| `apply_url` | `any` |  |
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
| `campaign` | `map[string]any` |  |
| `campaign_id` | `string` |  |
| `carrier_name` | `string` |  |
| `category` | `string` |  |
| `category_alias` | `string` |  |
| `category_aliases` | `[]any` |  |
| `change` | `map[string]any` |  |
| `city` | `string` |  |
| `client_message_id` | `string` |  |
| `code` | `string` |  |
| `compensation_text` | `string` |  |
| `confirm` | `bool` |  |
| `confirmation` | `string` |  |
| `connection_kind` | `string` |  |
| `consent_sha256` | `string` | SHA-256 of the acceptance text shown (from payment-authorizations). |
| `contact_email` | `any` |  |
| `content_type` | `string` |  |
| `country` | `string` |  |
| `coupon_code` | `string` |  |
| `createdAt` | `any` |  |
| `created_at` | `string` |  |
| `credential_id` | `string` |  |
| `credential_identifier` | `string` |  |
| `data_base64` | `string` |  |
| `delivery_contract` | `map[string]any` |  |
| `description` | `any` |  |
| `direct_apply` | `bool` |  |
| `disabled_reason` | `any` |  |
| `discount_label` | `string` |  |
| `display_name` | `string` |  |
| `employment_type` | `string` |  |
| `enabled` | `bool` |  |
| `endpoint` | `map[string]any` |  |
| `endpoint_id` | `string` |  |
| `endpoint_url` | `string` |  |
| `ends_at` | `any` |  |
| `event_id` | `string` |  |
| `event_types` | `[]any` |  |
| `evidence_observed_at` | `string` |  |
| `expected_updated_at` | `string` |  |
| `experience_level` | `string` |  |
| `expires_at` | `string` |  |
| `factor_id` | `string` |  |
| `failure_count` | `int` |  |
| `file_name` | `string` |  |
| `file_sha256` | `string` |  |
| `full_name` | `string` |  |
| `guideHandoffAnsweredAt` | `any` |  |
| `guideHandoffAt` | `any` |  |
| `guideHandoffDueAt` | `any` |  |
| `hours` | `any` |  |
| `id` | `string` |  |
| `idempotency_key` | `string` |  |
| `installation_id` | `string` |  |
| `issuer` | `string` |  |
| `jurisdiction` | `string` |  |
| `kind` | `string` |  |
| `label` | `string` |  |
| `lastMessageAt` | `any` |  |
| `lastMessageAuthorType` | `string` |  |
| `lastMessagePreview` | `string` |  |
| `last_delivery_at` | `any` |  |
| `launch` | `bool` |  |
| `license_number` | `string` |  |
| `messages` | `[]any` |  |
| `messagesTruncated` | `bool` |  |
| `monthly_cap_cents` | `float64` |  |
| `name` | `string` |  |
| `note` | `string` |  |
| `one_time_display` | `any` |  |
| `ownerEmail` | `string` |  |
| `ownerLastReadAt` | `any` |  |
| `ownerName` | `string` |  |
| `ownerUserId` | `string` |  |
| `period` | `string` |  |
| `phone` | `string` |  |
| `platform` | `string` |  |
| `policy_number` | `string` |  |
| `postal_code` | `string` |  |
| `promo_code` | `any` |  |
| `push_token` | `string` |  |
| `radius_miles` | `float64` |  |
| `reason` | `string` |  |
| `reason_category` | `string` |  |
| `reason_detail` | `string` |  |
| `registered_at` | `string` |  |
| `request_id` | `string` | Client id of this confirmation (8-100 characters); reuse it only to retry the same confirmation. |
| `requested_at` | `string` |  |
| `salary_currency` | `string` |  |
| `salary_max` | `any` |  |
| `salary_min` | `any` |  |
| `salary_period` | `string` |  |
| `save_card` | `bool` |  |
| `save_card_consent_sha256` | `string` | Only with save_card true: SHA-256 of the save-card consent text shown. |
| `schedule` | `string` |  |
| `service_areas` | `string` |  |
| `signing_secret` | `string` |  |
| `size_bytes` | `float64` |  |
| `skills` | `[]any` |  |
| `source_url` | `string` |  |
| `starts_at` | `any` |  |
| `state` | `string` |  |
| `stated_expires_at` | `string` |  |
| `status` | `string` |  |
| `street_address` | `string` |  |
| `subject` | `string` |  |
| `submitted_identifier` | `string` |  |
| `supportLastReadAt` | `any` |  |
| `terms` | `any` |  |
| `terms_version` | `string` | Must be the current Advertiser Terms version. |
| `threshold_cents` | `float64` |  |
| `ticketNumber` | `string` |  |
| `tier` | `string` |  |
| `title` | `string` |  |
| `total_job_openings` | `any` |  |
| `typing` | `bool` |  |
| `updatedAt` | `any` |  |
| `updated_at` | `string` |  |
| `url` | `string` | Public HTTPS receiver operated by the connecting principal or its agent runtime. |
| `website` | `string` |  |
| `workplace_type` | `string` |  |
| `zip` | `string` |  |

#### Example: Create

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
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### BusinessReview

Create an instance: `businessReview := client.BusinessReview(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```go
businessReview, err := client.BusinessReview(nil).Load(map[string]any{"id": "business_review_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(businessReview.(sdk.Entity).Data()) // the loaded entity's record
```


### ChatAttachment

Create an instance: `chatAttachment := client.ChatAttachment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `byteSize` | `int` |  |
| `content_type` | `any` |  |
| `data_base64` | `string` |  |
| `fileName` | `string` |  |
| `file_name` | `string` |  |
| `id` | `string` |  |
| `mediaType` | `string` |  |
| `size_bytes` | `int` |  |

#### Example: Create

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
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### ChatAttachmentUrl

Create an instance: `chatAttachmentUrl := client.ChatAttachmentUrl(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `byte_size` | `int` |  |
| `expires_in_seconds` | `any` |  |
| `file_name` | `string` |  |
| `id` | `string` |  |
| `media_type` | `string` |  |
| `signed_url` | `string` |  |

#### Example: Create

```go
result, err := client.ChatAttachmentUrl(nil).Create(map[string]any{
    "attachment_id": "example_attachment_id",
    "conversation_id": "example_conversation_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### ClaimVerificationSend

Create an instance: `claimVerificationSend := client.ClaimVerificationSend(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `challenge_id` | `string` | Opaque v3 SMS or owner-email challenge UUID. |
| `channel` | `any` |  |
| `claim_id` | `string` |  |
| `destination_hint` | `string` |  |
| `expires_in_seconds` | `float64` |  |
| `provider_status` | `any` | V3 provider request state. |
| `recipient_delivery_confirmed` | `any` | V3 currently has no final-delivery provider event for this receipt. |
| `request_id` | `string` | Caller-generated idempotency UUID. |
| `status` | `any` |  |

#### Example: Create

```go
result, err := client.ClaimVerificationSend(nil).Create(map[string]any{
    "claim_id": "example_claim_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### ClaimVerificationVerify

Create an instance: `claimVerificationVerify := client.ClaimVerificationVerify(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `business_id` | `any` |  |
| `challenge_id` | `string` | Exact challenge UUID returned by the v3 SMS or owner-email send. |
| `channel` | `any` |  |
| `claim_id` | `string` |  |
| `code` | `string` |  |
| `method` | `any` |  |
| `publication` | `map[string]any` |  |
| `status` | `any` |  |
| `transfer_review_required` | `any` |  |
| `trust_model_version` | `any` |  |

#### Example: Create

```go
result, err := client.ClaimVerificationVerify(nil).Create(map[string]any{
    "claim_id": "example_claim_id",
    "code": "example_code",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### CommercialClick

Create an instance: `commercialClick := client.CommercialClick(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action_type` | `any` |  |
| `ad_receipt` | `string` | Opaque server-signed receipt of a served Sponsored ad, sent back unchanged with a profile, website or call tap. |
| `billable` | `bool` |  |
| `billing_event_id` | `any` |  |
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
| `metadata` | `map[string]any` |  |
| `migration_required` | `bool` |  |
| `page_path` | `string` |  |
| `referrer` | `string` |  |
| `source_type` | `any` |  |
| `state` | `string` |  |
| `status` | `any` |  |
| `storage` | `any` |  |
| `surface` | `any` | Where the Sponsored ad was shown (with ad_receipt). |
| `target_url` | `string` |  |

#### Example: Create

```go
result, err := client.CommercialClick(nil).Create(map[string]any{
    "action_type": "example_action_type",
    "source_type": "example_source_type",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### ContactRecorded

Create an instance: `contactRecorded := client.ContactRecorded(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

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
| `verified` | `bool` |  |

#### Example: Create

```go
result, err := client.ContactRecorded(nil).Create(map[string]any{
    "business_id": "example_business_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### Conversation

Create an instance: `conversation := client.Conversation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `string` |  |
| `conversation_id` | `string` | Exact conversation referenced by a webhook; returns zero or one scoped thread. |
| `conversations` | `[]any` |  |
| `count` | `float64` |  |
| `cursor` | `string` | Opaque pagination cursor returned by the previous page. |
| `limit` | `float64` |  |
| `pagination` | `map[string]any` |  |

#### Example: Create

```go
result, err := client.Conversation(nil).Create(map[string]any{
    "account_id": "example_account_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### ConversationClose

Create an instance: `conversationClose := client.ConversationClose(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `closed_at` | `string` |  |
| `conversation_id` | `string` |  |
| `id` | `string` |  |
| `status` | `any` |  |

#### Example: Create

```go
result, err := client.ConversationClose(nil).Create(map[string]any{
    "id": "example_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### ConversationReport

Create an instance: `conversationReport := client.ConversationReport(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `detail` | `string` |  |
| `id` | `string` |  |
| `reason` | `any` |  |
| `status` | `any` |  |

#### Example: Create

```go
result, err := client.ConversationReport(nil).Create(map[string]any{
    "id": "example_id",
    "reason": "example_reason",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### ConversationWorkflow

Create an instance: `conversationWorkflow := client.ConversationWorkflow(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `priority` | `any` |  |
| `status` | `any` |  |

#### Example: Create

```go
result, err := client.ConversationWorkflow(nil).Create(map[string]any{
    "message_id": "example_message_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### CreateAgentApiKey

Create an instance: `createAgentApiKey := client.CreateAgentApiKey(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `string` |  |
| `allowed_actions` | `[]any` |  |
| `allowed_business_ids` | `[]any` |  |
| `created_by` | `string` |  |
| `key` | `map[string]any` |  |
| `label` | `string` |  |
| `monthly_quota` | `float64` |  |
| `notes` | `string` |  |
| `one_time_display` | `any` |  |
| `rate_limit_per_minute` | `float64` |  |
| `raw_key` | `string` |  |
| `status` | `any` |  |

#### Example: Create

```go
result, err := client.CreateAgentApiKey(nil).Create(map[string]any{
    "account_id": "example_account_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### Customer

Create an instance: `customer := client.Customer(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_provider` | `string` |  |
| `avatar_url` | `any` | Short-lived signed display URL for a private avatar object, or null. |
| `city` | `any` |  |
| `created_at` | `any` |  |
| `email` | `string` |  |
| `full_name` | `string` |  |
| `id` | `string` |  |
| `phone` | `any` |  |
| `search_category` | `string` |  |
| `service_need` | `string` |  |
| `state` | `any` |  |
| `status` | `any` |  |
| `updated_at` | `any` |  |

#### Example: Create

```go
result, err := client.Customer(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### CustomerAccount

Create an instance: `customerAccount := client.CustomerAccount(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `string` |  |
| `account_role` | `string` |  |
| `accuracy_meters` | `float64` |  |
| `acknowledge_data_effects` | `bool` |  |
| `actions` | `[]any` |  |
| `agent_key_id` | `string` |  |
| `agent_receives_coordinates` | `bool` |  |
| `all_paused` | `bool` |  |
| `app_attest_registered` | `bool` |  |
| `assertion` | `string` |  |
| `attestation` | `string` |  |
| `author_label` | `string` |  |
| `author_type` | `string` |  |
| `binding` | `any` |  |
| `body` | `string` |  |
| `business_id` | `any` |  |
| `capture_source` | `any` |  |
| `captured_at` | `string` |  |
| `challenge` | `string` |  |
| `challenge_id` | `string` |  |
| `client_message_id` | `string` |  |
| `completed` | `bool` |  |
| `confirmation` | `string` |  |
| `connection_id` | `string` |  |
| `connection_kind` | `string` |  |
| `continuation` | `any` | The continuation from the previous response, sent back unchanged to get the next results. |
| `coordinates_returned` | `bool` |  |
| `created_at` | `string` |  |
| `credential_id` | `string` |  |
| `declined` | `bool` |  |
| `delivery_contract` | `map[string]any` |  |
| `disabled_reason` | `any` |  |
| `disclosure` | `string` |  |
| `enabled` | `bool` |  |
| `endpoint` | `map[string]any` |  |
| `endpoint_id` | `string` |  |
| `endpoint_url` | `string` |  |
| `environment` | `string` |  |
| `event_id` | `string` |  |
| `event_types` | `[]any` |  |
| `failure_count` | `int` |  |
| `handoff_id` | `string` |  |
| `has_more` | `bool` |  |
| `id` | `string` |  |
| `idempotent_replay` | `bool` |  |
| `installation_id` | `string` |  |
| `key_id` | `string` |  |
| `last_delivery_at` | `any` |  |
| `latitude` | `float64` |  |
| `location` | `any` | An opaque location reference from the website's own location controls. |
| `longitude` | `float64` |  |
| `message_alerts_enabled` | `bool` |  |
| `messages` | `[]any` |  |
| `mode` | `string` | fallback: a direct search answered because the language model was unavailable. |
| `name` | `string` |  |
| `oauth_grant_id` | `any` |  |
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
| `results` | `[]any` |  |
| `schema_version` | `string` |  |
| `selected_at` | `string` |  |
| `signed_in` | `bool` |  |
| `signing_secret` | `string` |  |
| `status` | `any` |  |
| `updated_at` | `string` |  |
| `url` | `string` | Public HTTPS receiver operated by the connecting principal or its agent runtime. |
| `usable_until` | `string` |  |
| `use_mode` | `string` |  |

#### Example: Create

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
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### CustomerLocationProofRevocation

Create an instance: `customerLocationProofRevocation := client.CustomerLocationProofRevocation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accuracy_meters` | `float64` |  |
| `captured_at` | `string` |  |
| `latitude` | `float64` |  |
| `longitude` | `float64` |  |

#### Example: Create

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
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### DestinationAddressSuggestion

Create an instance: `destinationAddressSuggestion := client.DestinationAddressSuggestion(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `input` | `string` | Normalized partial US service-address text. |
| `suggestions` | `[]any` |  |

#### Example: Create

```go
result, err := client.DestinationAddressSuggestion(nil).Create(map[string]any{
    "input": "example_input",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### DestinationLocationProof

Create an instance: `destinationLocationProof := client.DestinationLocationProof(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `address` | `string` | A real US service address. |
| `premise_proximity_confirmation_token` | `string` | Opaque one-time token from the immediately preceding premise-proximity challenge for the same address and authority. |

#### Example: Create

```go
result, err := client.DestinationLocationProof(nil).Create(map[string]any{
    "address": "example_address",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### DomainTrustCard

Create an instance: `domainTrustCard := client.DomainTrustCard(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `business_id` | `string` |  |
| `domain` | `string` |  |
| `schema_version` | `any` |  |
| `trust_card` | `map[string]any` |  |
| `trust_card_url` | `string` |  |
| `trust_model_version` | `any` |  |
| `verification_class` | `any` |  |
| `verification_disclosure` | `string` |  |

#### Example: Load

```go
domainTrustCard, err := client.DomainTrustCard(nil).Load(map[string]any{"domain_key": "domain_key"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(domainTrustCard.(sdk.Entity).Data()) // the loaded entity's record
```


### GeoContext

Create an instance: `geoContext := client.GeoContext(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
geoContext, err := client.GeoContext(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(geoContext.(sdk.Entity).Data()) // the loaded entity's record
```


### Health

Create an instance: `health := client.Health(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `agent_phone_location_bridge` | `map[string]any` |  |
| `build_sha` | `string` |  |
| `business_review_access` | `map[string]any` |  |
| `contract_version` | `string` |  |
| `external_agent_webhooks` | `map[string]any` |  |
| `external_agent_webhooks_enabled` | `bool` |  |
| `ios_app_attest_anonymous_location` | `map[string]any` |  |
| `location_choices` | `map[string]any` |  |
| `location_handoff` | `map[string]any` |  |
| `mobile_push` | `any` |  |
| `ok` | `any` |  |
| `service` | `string` |  |
| `sponsored_ordering` | `map[string]any` |  |
| `trust_model_version` | `any` |  |
| `version` | `string` |  |

#### Example: Load

```go
health, err := client.Health(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(health.(sdk.Entity).Data()) // the loaded entity's record
```


### JobApplication

Create an instance: `jobApplication := client.JobApplication(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `string` |  |
| `already_withdrawn` | `bool` |  |
| `application` | `map[string]any` |  |
| `applications` | `[]any` |  |
| `billing` | `map[string]any` |  |
| `business_id` | `string` |  |
| `count` | `float64` |  |
| `cover_note` | `string` |  |
| `free_to_apply` | `bool` |  |
| `id` | `string` |  |
| `job_id` | `string` |  |
| `limit` | `float64` |  |
| `offset` | `float64` |  |
| `resume` | `map[string]any` |  |
| `retention_note` | `string` |  |
| `status` | `string` |  |

#### Example: Create

```go
result, err := client.JobApplication(nil).Create(map[string]any{
    "job_id": "example_job_id",
    "resume": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### JobResumeSignedUrl

Create an instance: `jobResumeSignedUrl := client.JobResumeSignedUrl(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `application_id` | `string` |  |
| `content_type` | `string` |  |
| `expires_in_seconds` | `float64` |  |
| `resume_file_name` | `string` |  |
| `signed_url` | `string` |  |
| `size_bytes` | `float64` |  |
| `status` | `any` |  |

#### Example: Create

```go
result, err := client.JobResumeSignedUrl(nil).Create(map[string]any{
    "job_application_id": "example_job_application_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### LocationHandoff

Create an instance: `locationHandoff := client.LocationHandoff(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Create

```go
result, err := client.LocationHandoff(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### Message

Create an instance: `message := client.Message(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `string` |  |
| `client_message_id` | `string` | Caller-stable retry key. |
| `conversation_id` | `string` |  |
| `created_at` | `string` |  |
| `delivery` | `any` |  |
| `idempotent_replay` | `bool` |  |
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
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### ModeratedAction

Create an instance: `moderatedAction := client.ModeratedAction(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actions` | `[]any` |  |
| `body` | `string` |  |
| `client_request_id` | `string` |  |
| `content_type` | `string` |  |
| `continuation` | `any` | The continuation from the previous response, sent back unchanged to get the next results. |
| `coordinates_returned` | `bool` |  |
| `disclosure` | `string` |  |
| `enabled` | `bool` |  |
| `file_sha256` | `string` |  |
| `has_more` | `bool` |  |
| `human_confirmation` | `bool` |  |
| `intent_id` | `string` |  |
| `kind` | `string` |  |
| `knowledgeVersion` | `string` |  |
| `limits` | `map[string]any` |  |
| `links` | `[]any` |  |
| `location` | `map[string]any` | An opaque location reference from the website's own location controls. |
| `message` | `string` |  |
| `messages` | `[]any` |  |
| `mode` | `string` | fallback: a direct search answered because the language model was unavailable. |
| `name` | `string` |  |
| `needsHuman` | `bool` |  |
| `policy` | `map[string]any` | Human schedule and separate claim-review policy. |
| `question` | `string` |  |
| `reply` | `string` |  |
| `result` | `string` |  |
| `results` | `[]any` |  |
| `scan_authority_id` | `string` |  |
| `scanner` | `string` |  |
| `scanner_version` | `string` |  |
| `schema_version` | `string` |  |
| `searcher_latitude` | `float64` |  |
| `searcher_longitude` | `float64` |  |
| `signature` | `string` |  |
| `signed_in` | `bool` |  |
| `size_bytes` | `float64` |  |
| `subject` | `string` |  |
| `target_business_id` | `string` |  |
| `topic` | `string` |  |

#### Example: Load

```go
moderatedAction, err := client.ModeratedAction(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(moderatedAction.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: Create

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
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### OpenApiDocument

Create an instance: `openApiDocument := client.OpenApiDocument(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `components` | `map[string]any` |  |
| `info` | `map[string]any` |  |
| `openapi` | `any` |  |
| `paths` | `map[string]any` |  |
| `servers` | `[]any` |  |
| `tags` | `[]any` |  |

#### Example: List

```go
openApiDocuments, err := client.OpenApiDocument(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range openApiDocuments.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### Operation

Create an instance: `operation := client.Operation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Patch(data, ctrl)` | Change part of an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `string` |  |
| `action` | `string` |  |
| `active` | `bool` |  |
| `active_or_good_standing` | `bool` |  |
| `ai_draft_id` | `string` |  |
| `allowed_actions` | `[]any` |  |
| `alt` | `string` |  |
| `amount_cents` | `float64` | Whole cents, non-zero, at most 1,000,000 either way; a promotional credit is positive. |
| `amount_off_cents` | `float64` |  |
| `api_key` | `string` |  |
| `applies_to_period` | `string` |  |
| `applies_to_tier` | `any` |  |
| `assigned_admin_user_id` | `any` |  |
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
| `business_id` | `any` |  |
| `business_ids` | `[]any` |  |
| `campaign_id` | `string` |  |
| `campaign_ids` | `[]any` |  |
| `caption` | `string` |  |
| `case_status` | `string` |  |
| `catalog` | `[]any` |  |
| `category` | `string` |  |
| `category_alias` | `string` |  |
| `chunk_size` | `float64` |  |
| `city` | `string` |  |
| `code` | `string` |  |
| `confidence` | `float64` |  |
| `config` | `map[string]any` | Complete validated pricing configuration. |
| `confirm` | `bool` |  |
| `confirm_admin` | `bool` |  |
| `confirmation` | `string` |  |
| `connection_id` | `string` |  |
| `connection_kind` | `string` |  |
| `content_type` | `string` |  |
| `context_id` | `string` |  |
| `context_type` | `string` |  |
| `createdAt` | `any` |  |
| `created_at` | `string` |  |
| `credential_expires_at` | `string` | Expiration date printed on the license. |
| `credential_id` | `string` |  |
| `custom_wire` | `string` |  |
| `data_base64` | `string` |  |
| `decision` | `string` |  |
| `dedupe_ack` | `bool` |  |
| `delivery_contract` | `map[string]any` |  |
| `disabled_reason` | `any` |  |
| `discount_type` | `string` |  |
| `display_name` | `string` |  |
| `disposition` | `string` |  |
| `draft` | `map[string]any` |  |
| `duration` | `string` |  |
| `duration_in_months` | `any` |  |
| `email` | `string` |  |
| `enabled` | `bool` |  |
| `endpoint` | `map[string]any` |  |
| `endpoint_id` | `string` |  |
| `endpoint_url` | `string` |  |
| `ends_at` | `string` |  |
| `environment_fallback` | `any` |  |
| `event_id` | `string` |  |
| `event_types` | `[]any` |  |
| `expected_allowed_actions` | `[]any` |  |
| `expected_key_id` | `string` |  |
| `expected_updated_at` | `string` |  |
| `expected_version` | `float64` |  |
| `expires_at` | `string` | Promotional credit only: ISO date-time 1 hour to 2 years ahead, disclosed to the owner. |
| `fact_id` | `string` |  |
| `facts` | `map[string]any` |  |
| `failure_count` | `int` |  |
| `fields` | `map[string]any` | Validated fields for this fixed content-block type. |
| `file_name` | `string` |  |
| `guideHandoffAnsweredAt` | `any` |  |
| `guideHandoffAt` | `any` |  |
| `guideHandoffDueAt` | `any` |  |
| `height` | `float64` |  |
| `historic_association_checked` | `bool` |  |
| `hold` | `string` |  |
| `holder_name_match` | `bool` |  |
| `hours` | `map[string]any` |  |
| `id` | `string` |  |
| `idempotency_key` | `string` |  |
| `identifier_match` | `bool` |  |
| `in_use` | `map[string]any` |  |
| `instruction` | `string` |  |
| `invited` | `bool` |  |
| `key_check` | `any` |  |
| `kind` | `string` |  |
| `label` | `string` |  |
| `lastMessageAt` | `any` |  |
| `lastMessageAuthorType` | `string` |  |
| `lastMessagePreview` | `string` |  |
| `last_delivery_at` | `any` |  |
| `last_error_code` | `any` |  |
| `last_probe_at` | `any` |  |
| `last_problem` | `any` |  |
| `legal_name` | `string` |  |
| `limit` | `float64` |  |
| `make_active` | `bool` |  |
| `max_cents` | `float64` |  |
| `max_redemptions` | `any` |  |
| `messages` | `[]any` |  |
| `messagesTruncated` | `bool` |  |
| `min_cents` | `float64` |  |
| `model` | `string` |  |
| `model_id` | `string` |  |
| `name` | `string` |  |
| `note` | `string` |  |
| `notes` | `string` |  |
| `observed_at` | `string` |  |
| `one_time_display` | `any` |  |
| `outcome` | `string` |  |
| `ownerEmail` | `string` |  |
| `ownerLastReadAt` | `any` |  |
| `ownerName` | `string` |  |
| `ownerUserId` | `string` |  |
| `owner_reason_code` | `string` | Controlled owner-visible rejection reason. |
| `per_customer_limit` | `float64` |  |
| `percent_off` | `float64` |  |
| `phone` | `string` |  |
| `policyVersion` | `string` |  |
| `priority` | `string` |  |
| `provider` | `string` |  |
| `providers` | `[]any` |  |
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
| `report_ids` | `[]any` |  |
| `reserve_cents` | `float64` | 100-10000; never below $1.00. |
| `resolution_note` | `string` |  |
| `review_notes` | `string` |  |
| `revision` | `int` |  |
| `role` | `string` |  |
| `rows` | `[]any` |  |
| `run` | `map[string]any` |  |
| `schema_version` | `string` |  |
| `scope` | `string` |  |
| `search` | `string` |  |
| `settings` | `map[string]any` |  |
| `signing_secret` | `string` |  |
| `size_bytes` | `float64` |  |
| `sla_due_at` | `any` |  |
| `source` | `string` |  |
| `source_authority` | `string` | Exact official authority name. |
| `source_category_slug` | `string` |  |
| `source_scope_checked` | `bool` |  |
| `source_url` | `string` | Exact HTTPS official source URL. |
| `starts_at` | `any` |  |
| `state` | `string` | Bulk by area: every ad of the advertisers in this two-letter U.S. |
| `status` | `string` |  |
| `storage` | `string` |  |
| `street_address` | `string` |  |
| `subject` | `string` |  |
| `supportLastReadAt` | `any` |  |
| `target_category` | `string` |  |
| `taxonomy_category_aliases` | `[]any` |  |
| `ticketNumber` | `string` |  |
| `tier` | `string` |  |
| `typing` | `bool` |  |
| `until` | `string` |  |
| `updatedAt` | `any` |  |
| `updated_at` | `string` |  |
| `url` | `string` | Public HTTPS receiver operated by the connecting principal or its agent runtime. |
| `valid_until` | `string` |  |
| `value` | `string` |  |
| `verification_method` | `string` |  |
| `verified_at` | `any` |  |
| `verified_service_scope` | `[]any` |  |
| `version` | `string` |  |
| `website` | `string` |  |
| `width` | `float64` |  |
| `window_hours` | `float64` | 1-744, default 48. |
| `workload` | `string` |  |
| `zip` | `string` |  |

#### Example: Create

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
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### OwnerNotification

Create an instance: `ownerNotification := client.OwnerNotification(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `businessId` | `string` |  |
| `createdAt` | `string` |  |
| `dedupeKey` | `string` |  |
| `emailStatus` | `string` |  |
| `eventType` | `any` |  |
| `id` | `string` |  |
| `readAt` | `any` |  |
| `resourceId` | `string` |  |
| `resourceKind` | `any` |  |
| `resourceUrl` | `string` |  |
| `summary` | `string` |  |
| `webhookStatus` | `string` |  |

#### Example: Create

```go
result, err := client.OwnerNotification(nil).Create(map[string]any{
    "notification_id": "example_notification_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### OwnerNotificationSetting

Create an instance: `ownerNotificationSetting := client.OwnerNotificationSetting(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `businessId` | `string` |  |
| `business_id` | `string` |  |
| `createdAt` | `string` |  |
| `emailEnabled` | `bool` |  |
| `email_enabled` | `bool` |  |
| `eventTypeSubscriptions` | `[]any` |  |
| `event_types` | `[]any` |  |
| `updatedAt` | `string` |  |
| `webhookEnabled` | `bool` |  |
| `webhook_enabled` | `bool` |  |

#### Example: Create

```go
result, err := client.OwnerNotificationSetting(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### OwnerWebhookEndpoint

Create an instance: `ownerWebhookEndpoint := client.OwnerWebhookEndpoint(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `businessId` | `string` |  |
| `createdAt` | `string` |  |
| `enabled` | `bool` |  |
| `eventTypeSubscriptions` | `[]any` |  |
| `failureCount` | `float64` |  |
| `id` | `string` |  |
| `lastDeliveryAt` | `any` |  |
| `updatedAt` | `string` |  |
| `url` | `string` |  |

#### Example: Create

```go
result, err := client.OwnerWebhookEndpoint(nil).Create(map[string]any{
    "webhook_id": "example_webhook_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### OwnerWebhookRegistration

Create an instance: `ownerWebhookRegistration := client.OwnerWebhookRegistration(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `business_id` | `string` |  |
| `endpoint` | `map[string]any` |  |
| `event_types` | `[]any` |  |
| `one_time_display` | `any` |  |
| `signing_secret` | `string` |  |
| `status` | `any` |  |
| `url` | `string` |  |

#### Example: Create

```go
result, err := client.OwnerWebhookRegistration(nil).Create(map[string]any{
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### Pricing

Create an instance: `pricing := client.Pricing(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `billing` | `map[string]any` |  |
| `branch_add_ons` | `[]any` |  |
| `currency` | `any` |  |
| `generated_at` | `string` |  |
| `neutrality` | `string` |  |
| `plans` | `[]any` |  |
| `promotions` | `[]any` |  |
| `published_at` | `any` |  |
| `radius_extension` | `map[string]any` |  |
| `revision_id` | `any` |  |
| `source` | `any` |  |
| `trust_model_version` | `any` |  |

#### Example: List

```go
pricings, err := client.Pricing(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range pricings.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### PromoteVerifiedTransaction

Create an instance: `promoteVerifiedTransaction := client.PromoteVerifiedTransaction(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `business_id` | `string` |  |
| `evidence_id` | `string` |  |
| `interaction_id` | `string` |  |
| `ok` | `any` |  |
| `review_upgraded` | `bool` |  |
| `status` | `any` |  |
| `trust_weight` | `any` |  |
| `verified` | `bool` |  |

#### Example: Create

```go
result, err := client.PromoteVerifiedTransaction(nil).Create(map[string]any{
    "business_id": "example_business_id",
    "evidence_id": "example_evidence_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### PublicContent

Create an instance: `publicContent := client.PublicContent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `blocks` | `map[string]any` |  |
| `generated_at` | `string` |  |
| `source` | `any` |  |
| `trust_model_version` | `any` |  |

#### Example: Load

```go
publicContent, err := client.PublicContent(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(publicContent.(sdk.Entity).Data()) // the loaded entity's record
```


### Recommend

Create an instance: `recommend := client.Recommend(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `candidate_window_truncated` | `bool` | True when Loppee's bounded candidate assembly reached its safety cap. |
| `commercial_influence` | `string` | Must be none whenever current-location or saved_exact authority is absent, including universal exact/genuine-prefix name lookup. |
| `display_count` | `int` | Agent-key responses: the number of businesses in this response. |
| `endpoint` | `any` |  |
| `fallback_registry` | `[]any` |  |
| `generated_at` | `string` |  |
| `has_more` | `bool` | True only when next_cursor can continue through the current bounded, deterministic candidate window. |
| `listed` | `[]any` |  |
| `location_context` | `any` | Local category discovery and recommendations require a current precise location proof or handoff, a user-confirmed validated destination authority, or a saved_exact Home location. |
| `ordering` | `any` |  |
| `policy` | `string` |  |
| `presentation_guidance` | `string` | Agent-key responses: how to present these results to the customer. |
| `query` | `map[string]any` |  |
| `ranking_policy` | `string` |  |
| `registry_count_basis` | `string` |  |
| `registry_count_observed_at` | `any` |  |
| `registry_name` | `any` |  |
| `results` | `[]any` |  |
| `returned_count` | `int` |  |
| `reviewed_registry` | `[]any` |  |
| `schema_version` | `any` |  |
| `search_intent` | `map[string]any` |  |
| `suggestions` | `map[string]any` |  |
| `total_matches` | `int` | Web and app responses. |
| `total_matches_basis` | `int` |  |
| `total_registry_records` | `int` |  |
| `trust_model_version` | `any` |  |
| `verified` | `[]any` |  |
| `visible_candidate_records` | `int` | Web and app responses. |

#### Example: List

```go
recommends, err := client.Recommend(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range recommends.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### Review

Create an instance: `review := client.Review(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `string` |  |
| `attestation_accepted` | `bool` | Set true only after the customer confirms this describes their own experience and explicitly approves publishing the displayed business, star rating, title, and full review. |
| `customer_confirmed` | `bool` | Set true to confirm you were a customer of this business. |
| `message` | `string` |  |
| `rating` | `int` |  |
| `service_date` | `any` | Optional real, non-future service date in YYYY-MM-DD format; empty means not provided. |
| `subject` | `string` |  |
| `target_business_id` | `string` |  |

#### Example: Create

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
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### Revoke

Create an instance: `revoke := client.Revoke(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `string` |  |
| `key_id` | `string` |  |
| `revoked_by` | `string` |  |
| `status` | `any` |  |

#### Example: Create

```go
result, err := client.Revoke(nil).Create(map[string]any{
    "agent_key_id": "example_agent_key_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### SaveBusiness

Create an instance: `saveBusiness := client.SaveBusiness(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

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
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### SavedBusiness

Create an instance: `savedBusiness := client.SavedBusiness(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `string` |  |
| `count` | `float64` |  |
| `limit` | `float64` |  |
| `saved_businesses` | `[]any` |  |

#### Example: Create

```go
result, err := client.SavedBusiness(nil).Create(map[string]any{
    "account_id": "example_account_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### SavedLocation

Create an instance: `savedLocation := client.SavedLocation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `available` | `bool` |  |
| `coordinates_returned` | `any` |  |
| `kind` | `any` | Only saved_exact is precise local-discovery authority. |
| `label` | `any` |  |
| `location_proof_id` | `string` |  |
| `reach_precision` | `any` | Exact can authorize local category/recommendation reach; coarse cannot activate local results, Sponsored placement, or impressions. |
| `saved_location_ref` | `any` |  |
| `updated_at` | `any` |  |
| `zip` | `string` |  |


### Search

Create an instance: `search := client.Search(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `candidate_window_truncated` | `bool` | True when Loppee's bounded candidate assembly reached its safety cap. |
| `commercial_influence` | `string` | Must be none whenever current-location or saved_exact authority is absent, including universal exact/genuine-prefix name lookup. |
| `display_count` | `int` | Agent-key responses: the number of businesses in this response. |
| `generated_at` | `string` |  |
| `has_more` | `bool` | True only when next_cursor can continue through the current bounded, deterministic candidate window. |
| `location_context` | `any` | Local category discovery and recommendations require a current precise location proof or handoff, a user-confirmed validated destination authority, or a saved_exact Home location. |
| `next_cursor` | `any` |  |
| `page_limit` | `int` |  |
| `policy` | `string` |  |
| `presentation_guidance` | `string` | Agent-key responses: how to present these results to the customer. |
| `query` | `map[string]any` |  |
| `ranking_policy` | `string` |  |
| `registry_count_basis` | `string` |  |
| `registry_count_observed_at` | `any` |  |
| `registry_name` | `any` |  |
| `results` | `[]any` |  |
| `returned_count` | `int` |  |
| `schema_version` | `any` |  |
| `search_intent` | `map[string]any` |  |
| `suggestions` | `map[string]any` |  |
| `total_matches` | `int` | Web and app responses. |
| `total_matches_basis` | `int` |  |
| `total_registry_records` | `int` |  |
| `trust_model_version` | `any` |  |
| `visible_candidate_records` | `int` | Web and app responses. |

#### Example: List

```go
searchs, err := client.Search(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range searchs.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### Suggest

Create an instance: `suggest := client.Suggest(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `categories` | `[]any` |  |
| `names` | `[]any` |  |
| `query` | `string` |  |
| `schema_version` | `any` |  |

#### Example: List

```go
suggests, err := client.Suggest(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range suggests.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### SupportInternalNote

Create an instance: `supportInternalNote := client.SupportInternalNote(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `authorLabel` | `string` |  |
| `body` | `string` |  |
| `createdAt` | `any` |  |
| `id` | `string` |  |

#### Example: Create

```go
result, err := client.SupportInternalNote(nil).Create(map[string]any{
    "id": "example_id",
    "body": "example_body",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### SupportWorkflow

Create an instance: `supportWorkflow := client.SupportWorkflow(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `category` | `any` |  |
| `id` | `string` |  |
| `priority` | `any` |  |
| `waiting_on` | `any` |  |

#### Example: Create

```go
result, err := client.SupportWorkflow(nil).Create(map[string]any{
    "id": "example_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### TaxonomySuggestion

Create an instance: `taxonomySuggestion := client.TaxonomySuggestion(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alias` | `string` |  |
| `path_titles` | `[]any` |  |
| `title` | `string` |  |

#### Example: List

```go
taxonomySuggestions, err := client.TaxonomySuggestion(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range taxonomySuggestions.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### TrustCard

Create an instance: `trustCard := client.TrustCard(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

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
| `record_number` | `any` |  |
| `record_scope` | `string` |  |
| `record_type` | `string` |  |
| `recorded_expiry` | `any` |  |
| `result` | `string` |  |
| `source_label` | `string` |  |
| `source_url` | `string` |  |
| `state` | `string` |  |
| `status_on_record` | `string` |  |

#### Example: Load

```go
trustCard, err := client.TrustCard(nil).Load(map[string]any{"schema_name": "schema_name"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(trustCard.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
trustCards, err := client.TrustCard(nil).List(map[string]any{"business_id": "example"}, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range trustCards.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### Example: Create

```go
result, err := client.TrustCard(nil).Create(map[string]any{
    "business_id": "example_business_id",
    "license_record_id": "example_license_record_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### UnsaveBusiness

Create an instance: `unsaveBusiness := client.UnsaveBusiness(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `string` |  |
| `business_id` | `string` |  |
| `removed` | `bool` |  |
| `status` | `any` |  |

#### Example: Create

```go
result, err := client.UnsaveBusiness(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "business_id": "example_business_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### UpdateAgentBillingAccount

Create an instance: `updateAgentBillingAccount := client.UpdateAgentBillingAccount(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `string` |  |
| `billing_account` | `map[string]any` |  |
| `billing_status` | `string` |  |
| `included_actions` | `float64` |  |
| `monthly_fee_cents` | `float64` |  |
| `overage_cents` | `float64` |  |
| `plan` | `string` |  |
| `status` | `any` |  |
| `updated_by` | `string` |  |

#### Example: Create

```go
result, err := client.UpdateAgentBillingAccount(nil).Create(map[string]any{
    "account_id": "example_account_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### WithdrawJobApplication

Create an instance: `withdrawJobApplication := client.WithdrawJobApplication(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `string` |  |
| `already_withdrawn` | `bool` |  |
| `application` | `map[string]any` |  |
| `application_id` | `string` |  |
| `status` | `any` |  |

#### Example: Create

```go
result, err := client.WithdrawJobApplication(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "application_id": "example_application_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
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

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **RatelimitFeature**: Rate limiting
- **RetryFeature**: Retry
- **TestFeature**: Test transport
- **TimeoutFeature**: Timeout

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

An operation returns the entity, and its `Data()` returns the record. Use
`core.ToMapAny()` to safely cast that record, or data nested in it, to
`map[string]any`: it returns `nil` for anything else, an entity included.

### Package structure

```
github.com/voxgig-sdk/loppee-business-sdk/go/
├── loppee-business.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/loppee-business-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `Load`, the entity
stores the returned data and match criteria internally.

```go
agentcapability := client.AgentCapability(nil)
agentcapability.Load(nil, nil)

// agentcapability.Data() now returns the agentcapability data from the last load
// agentcapability.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
