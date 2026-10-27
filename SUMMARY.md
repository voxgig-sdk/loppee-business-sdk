# Loppee Business Registry API for External Agents

Customers and administrators supply and operate their external agents. Loppee provides scoped API/MCP access and keys only; it does not provide, host, or operate an agent or AI service. Under v3, this access is available at no charge for now. Loppee v3 exposes explicit Verified and Listed business classes. Category recommendations may also contain a `reviewed_registry` section within the three-mile Free reach and an exclusive `fallback_registry` section containing at most one unclaimed record; owner-submitted and claimed-but-unpublished Registry records are never fallback results. Exact/genuine-prefix name recommendations preserve direct-entity relevance and may contain identity-reviewed Registry rows without radius entitlement or unrated fallback. Registry businesses retain their explicit `claim_status` and disclosure and are not currently published as Verified or Listed. Identity-verified reviewer ratings influence quality only within the applicable class or Registry pool. Local category discovery and recommendations require a current precise location proof or handoff, a user-confirmed validated destination authority, or a `saved_exact` Home location. City/state, ZIP, and `saved_coarse` locations are neutral area context for business-name disambiguation only: they return no local category or recommendation results, cannot activate Sponsored placement, and record no impressions. A connected assistant&#39;s current location comes only from the registered Loppee iPhone; provider IP, caller-supplied coordinates, host metadata, and computer/browser location are rejected as current-location authority. Exact and genuine-prefix business-name lookup remains universal; without precise location it is commercially neutral. Account, owner and admin GET operations that need an ID were removed because they require a Loppee session token or agent key (401/403 without one). 83 GET operations that require a key or session were removed on 2026-10-23.

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 62 entities and 266 HTTP routes. There are 6 SDK targets and 2 companion tools.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### AgentAccess

Results: AgentAccessResponse.

SDK operations: `create`.

### AgentCapability

Results: AgentCapabilities.

SDK operations: `load`.

### AgentConnectionTest

Results: AgentConnectionTestResponse.

SDK operations: `create`.

Key fields to recognise:

- `key`: Optional UI fallback.

### AgentIntegration

Results: AgentIntegration.

SDK operations: `list`.

### AgentMonitoring

Results: AgentMonitoring.

SDK operations: `load`.

### AgentOpenapi

Results: OpenApiDocument.

SDK operations: `list`.

### AgentPolicy

Results: AgentPolicy.

SDK operations: `load`.

### AnonymousLocationProofRevocation

Results: Anonymous browser location proof created.; Proof revoked or already terminal.

SDK operations: `create`, `remove`.

### BusinessApplication

Results: BusinessApplicationResponse.

SDK operations: `create`.

### BusinessClaim

Results: BusinessClaimResponse.

SDK operations: `create`.

Key fields to recognise:

- `claimant_email`: Legacy field; authenticated owner identity wins.
- `claimant_name`: Legacy field; authenticated owner identity wins.

### BusinessDeal

Results: BusinessDealsResponse.

SDK operations: `list`.

### BusinessIndex

Results: BusinessIndex.

SDK operations: `list`.

Key fields to recognise:

- `street_address`: Owner-published street address where authorized. Registry candidates return an empty string; withheld data must not be inferred as a missing source address.
- `zip`: Owner-published postal code where authorized. Registry candidates return an empty string; city/state remain public.

### BusinessOwner

Results: Disconnect business-management agent response; Update business-management agent permissions response; Rotate business-management agent key response; Register business-management agent webhook response; Disable business-management agent webhook response; Rotate business-management agent webhook secret response; Test business-management agent webhook response; Confirm a pending ads change (website only) response; Decline a pending ads change (website only) response; Undo an ads change within 24 hours (website only) response; Mark owner conversation read response; Update business deal response; Delete business deal response; Update job posting response; Create job-posting checkout response; Delete job posting response; Update business location response; Delete business location response; Reply to customer message response; Report business review response; Respond to business review response; Apply an ads suggestion (website only) response; Dismiss an ads suggestion (website only) response; Mark owner support conversation read response; Set owner support typing state response; Finalize a private evidence upload response; Create or update owner account response; Open the advertising account (website only) response; Send one turn to the owner ads assistant (website only) response; Pass the ads assistant chat to Loppee support (website only) response; Create an ad (website only) response; Change an ad (website only) response; Request a refund of unused purchased advertising funds (website only) response; Accept the Advertiser Terms (website only) response; Add advertising funds with a one-time payment (website only) response; Connect business-management agent response; Create owner billing checkout response; Create owner billing portal session response; Request an additional business category response; Checkout with subscription coupon response; Preview subscription coupon response; Create business deal response; Request deletion of my business-owner account response; Purchase or update Diamond discovery radius response; Submit business evidence response; Authorize a business evidence upload response; Create a private evidence upload intent response; Select an exposure tier response; Set structured business hours response; Create job posting response; Create business location response; Convert missed contact to conversation response; Register this owner mobile installation for push delivery response; Revoke this owner mobile installation response; Upload business photo response; Remove business photo response; Edit owner business display details response; Send owner support message response; Upload the exact private evidence object response; Change advertising auto-refill (website only; not offered) response.

SDK operations: `create`, `update`.

Key fields to recognise:

- `amount_cents`: Within the top-up limits (default $25 to $5,000).
- `consent_sha256`: SHA-256 of the acceptance text shown (from payment-authorizations).
- `request_id`: Client id of this confirmation (8-100 characters); reuse it only to retry the same confirmation.
- `save_card_consent_sha256`: Only with `save_card` true: SHA-256 of the save-card consent text shown.
- `terms_version`: Must be the current Advertiser Terms version.

### BusinessReview

Results: BusinessReviewsResponse.

SDK operations: `load`.

### ChatAttachment

Results: ChatAttachmentResponse.

SDK operations: `create`.

### ChatAttachmentUrl

Results: ChatAttachmentUrlResponse.

SDK operations: `create`.

### ClaimVerificationSend

Results: ClaimVerificationSendResponse.

SDK operations: `create`.

Key fields to recognise:

- `challenge_id`: Opaque v3 SMS or owner-email challenge UUID. Present when a challenge can be verified and must be returned unchanged.
- `provider_status`: V3 provider request state. accepted means only that the provider accepted the request; it does not prove inbox or handset delivery.
- `recipient_delivery_confirmed`: V3 currently has no final-delivery provider event for this receipt. This field prevents `code_sent` from being interpreted as confirmed recipient delivery.
- `request_id`: Caller-generated idempotency UUID.

### ClaimVerificationVerify

Results: ClaimVerificationVerifyResponse.

SDK operations: `create`.

Key fields to recognise:

- `challenge_id`: Exact challenge UUID returned by the v3 SMS or owner-email send.

### CommercialClick

Results: CommercialClickResponse.

SDK operations: `create`.

Key fields to recognise:

- `ad_receipt`: Opaque server-signed receipt of a served Sponsored ad, sent back unchanged with a profile, website or call tap.
- `directory_listing_id`: Deprecated alias of `listing_id`.
- `surface`: Where the Sponsored ad was shown (with `ad_receipt`).

### ContactRecorded

Results: ContactRecordedResponse.

SDK operations: `create`.

### Conversation

Results: ConversationsResponse.

SDK operations: `create`.

Key fields to recognise:

- `conversation_id`: Exact conversation referenced by a webhook; returns zero or one scoped thread.
- `cursor`: Opaque pagination cursor returned by the previous page.

### ConversationClose

Results: ConversationCloseResponse.

SDK operations: `create`.

### ConversationReport

Results: ConversationReportResponse.

SDK operations: `create`.

### ConversationWorkflow

Results: ConversationWorkflowResponse.

SDK operations: `create`.

### CreateAgentApiKey

Results: CreateAgentApiKeyResponse.

SDK operations: `create`.

### Customer

Results: CustomerAccountUpsertResponse.

SDK operations: `create`.

Key fields to recognise:

- `avatar_url`: Short-lived signed display URL for a private avatar object, or null. The internal storage locator is never returned.

### CustomerAccount

Results: Complete an assistant location request from the customer&#39;s phone response; Decline an assistant location request from the customer&#39;s phone response; Create an authenticated iPhone App Attest challenge response; Register this signed-in iPhone&#39;s App Attest key response; Disconnect personal agent response; Rotate personal-agent key response; Register personal-agent webhook response; Disable personal-agent webhook response; Test personal-agent webhook response; Set one verified assistant connection&#39;s iPhone location policy response; Mark customer conversation read response; Reply to a business conversation response; Pause or resume all assistant location access response; Connect personal agent response; Send a customer in-app assistant turn response; Request deletion of my customer account response; Register this customer mobile installation for push delivery response; Turn message alerts on or off for this customer mobile installation response; Revoke this customer mobile installation response.

SDK operations: `create`.

Key fields to recognise:

- `account_id`: Opaque Loppee customer service-account id; this is not assumed to be a UUID.
- `continuation`: The continuation from the previous response, sent back unchanged to get the next results.
- `location`: An opaque location reference from the website&#39;s own location controls.
- `mode`: fallback: a direct search answered because the language model was unavailable.
- `url`: Public HTTPS receiver operated by the connecting principal or its agent runtime.

### CustomerLocationProofRevocation

Results: Private location proof created.; Proof revoked or already terminal.

SDK operations: `create`, `remove`.

### DestinationAddressSuggestion

Results: Display-only address suggestions.

SDK operations: `create`.

Key fields to recognise:

- `input`: Normalized partial US service-address text.

### DestinationLocationProof

Results: Private destination proof created.; Anonymous destination proof created.

SDK operations: `create`.

Key fields to recognise:

- `address`: A real US service address.
- `premise_proximity_confirmation_token`: Opaque one-time token from the immediately preceding premise-proximity challenge for the same address and authority.

### DomainTrustCard

Results: DomainTrustCardResponse.

SDK operations: `load`.

### GeoContext

Results: GeoContextResponse.

SDK operations: `load`.

### Health

Results: HealthResponse.

SDK operations: `load`.

### JobApplication

Results: JobApplicationResponse; JobApplicationsResponse.

SDK operations: `create`.

### JobResumeSignedUrl

Results: JobResumeSignedUrlResponse.

SDK operations: `create`.

### LocationHandoff

Results: Consent link created.

SDK operations: `create`.

### Message

Results: MessageResponse.

SDK operations: `create`.

Key fields to recognise:

- `client_message_id`: Caller-stable retry key.

### ModeratedAction

Results: Record Loppee contact attempt response; Send one turn of a website assistant conversation response; Record a private job-resume scan result response; Record a private evidence scan result response; Receive Stripe webhook response; Read stateless business sign-in and claim help response; Check in-app assistant availability response; Check whether the website assistant is available response; Check local business support guide availability response.

SDK operations: `create`, `load`.

Key fields to recognise:

- `continuation`: The continuation from the previous response, sent back unchanged to get the next results.
- `location`: An opaque location reference from the website&#39;s own location controls.
- `mode`: fallback: a direct search answered because the language model was unavailable.
- `policy`: Human schedule and separate claim-review policy.

### OpenApiDocument

Results: OpenApiDocument.

SDK operations: `list`.

### Operation

Results: Create one business application resume URL response; Close one business job post response; Moderate one business message thread response; Review historical display response; Adjust an advertising account&#39;s non-purchased funds response; Release an advertising payment hold response; Change admin team-agent access response; Disable admin team agent response; Rotate admin team-agent key response; Replace admin team-agent key scope response; Register back-office agent webhook response; Disable back-office agent webhook response; Rotate back-office agent webhook secret response; Test back-office agent webhook response; Discard content-block draft response; Save content-block draft response; Publish content-block draft response; Revert content block to default response; Apply reviewed bulk job response; Queue reviewed bulk job response; Rollback bulk job response; Review business claim response; Grant or end a billing comp response; Set exact business category response; Set business exposure tier response; Edit business facts response; Set business opening hours response; Set business lifecycle state response; Dry-run duplicate merge response; Review category request response; Credit an invalid Sponsored ad tap response; Mark a Sponsored ad tap invalid response; End a comped Sponsored ad response; Rotate and verify an AI provider credential response; Test an AI provider connection response; Update subscription coupon response; Moderate deal response; Approve or reject an ad response; Revoke admin team invite response; Change an allowlisted platform switch and redeploy response; Resolve a state license record report response; Decide a Trust Model v3 manual-verification submission response; Delete site-content media response; Remove public business media response; Check a saved key with its company response; Approve an advertising refund and send it to the card response; Reject an advertising refund request response; Resolve a Trust Model v3 review anomaly flag response; Moderate review response; Update service-account status response; Create a support-copilot draft response; Assign support conversation response; Mark support conversation read response; Reply to support conversation response; Set support conversation status response; Set staff support typing state response; Update admin team member response; Remove admin team member response; Control worker task response; Enter an administrative resource context response; Create or update a comped Sponsored ad response; Invite or remove a business from the Ads Manager response; Pause, suspend or reinstate ads response; Run advertising reconciliation now response; Connect and verify an AI provider response; Choose the company the website assistant uses, or turn the model off response; Create intake business response; Upload site-content media response; Create subscription coupon response; Inspect selected Florida admission reviews response; Create category mapping response; Create category-remap dry run response; Create selected-businesses category-remap dry run response; Create quality-scan dry run response; Discard pricing-content draft response; Save pricing-content draft response; Publish pricing-content draft response; Bulk dismiss review reports response; Connect external admin team agent response; Invite admin team member response; Review duplicate candidate response; Update category mapping response; Update data-quality signal response; Update verification case management response; Discard a pending support-copilot draft response; Exit an administrative resource context response; Disconnect an AI provider response; Archive subscription promotion response; Remove a company and delete its key response; Disable and remove an AI workload binding response; Save a company&#39;s model and key for the website assistant response; Configure an AI workload binding response; Set an ads category minimum response; Change the advertising top-up limits response.

SDK operations: `create`, `patch`, `remove`, `update`.

Key fields to recognise:

- `amount_cents`: Whole cents, non-zero, at most 1,000,000 either way; a promotional credit is positive.
- `assignee_type`: AI assignment is unavailable while the customer-support workload is disconnected.
- `config`: Complete validated pricing configuration.
- `credential_expires_at`: Expiration date printed on the license.
- `expires_at`: Promotional credit only: ISO date-time 1 hour to 2 years ahead, disclosed to the owner.

### OwnerNotification

Results: OwnerNotificationResponse.

SDK operations: `create`.

### OwnerNotificationSetting

Results: OwnerNotificationSettingsResponse.

SDK operations: `create`.

### OwnerWebhookEndpoint

Results: OwnerWebhookEndpointResponse.

SDK operations: `create`.

### OwnerWebhookRegistration

Results: OwnerWebhookRegistrationResponse.

SDK operations: `create`.

### Pricing

Results: PricingResponse.

SDK operations: `list`.

### PromoteVerifiedTransaction

Results: PromoteVerifiedTransactionResponse.

SDK operations: `create`.

### PublicContent

Results: PublicContentResponse.

SDK operations: `load`.

### Recommend

Results: SearchResponse.

SDK operations: `list`.

Key fields to recognise:

- `candidate_window_truncated`: True when Loppee&#39;s bounded candidate assembly reached its safety cap. `total_matches` is then a lower bound, never a corpus-wide exact count.
- `commercial_influence`: Must be none whenever current-location or `saved_exact` authority is absent, including universal exact/genuine-prefix name lookup.
- `display_count`: Agent-key responses: the number of businesses in this response. No total number of matches is reported.
- `has_more`: True only when `next_cursor` can continue through the current bounded, deterministic candidate window.
- `location_context`: Local category discovery and recommendations require a current precise location proof or handoff, a user-confirmed validated destination authority, or a `saved_exact` Home location. City/state, ZIP, and `saved_coarse` locations are neutral area context for business-name disambiguation only: they return no local category or recommendation results, cannot activate Sponsored placement, and record no impressions. A connected assistant&#39;s current location comes only from the registered Loppee iPhone; provider IP, caller-supplied coordinates, host metadata, and computer/browser location are rejected as current-location authority. Exact and genuine-prefix business-name lookup remains universal; without precise location it is commercially neutral.

### Review

Results: ReviewResponse.

SDK operations: `create`.

Key fields to recognise:

- `attestation_accepted`: Set true only after the customer confirms this describes their own experience and explicitly approves publishing the displayed business, star rating, title, and full review.
- `customer_confirmed`: Set true to confirm you were a customer of this business.
- `service_date`: Optional real, non-future service date in YYYY-MM-DD format; empty means not provided.

### Revoke

Results: RevokeAgentApiKeyResponse.

SDK operations: `create`.

### SaveBusiness

Results: SaveBusinessResponse.

SDK operations: `create`.

### SavedBusiness

Results: SavedBusinessesResponse.

SDK operations: `create`.

### SavedLocation

Results: SavedLocationResponse.

SDK operations: `remove`, `update`.

Key fields to recognise:

- `kind`: Only `saved_exact` is precise local-discovery authority. `coarse_zip` and `legacy_unverified` are neutral area context only.
- `reach_precision`: Exact can authorize local category/recommendation reach; coarse cannot activate local results, Sponsored placement, or impressions.

### Search

Results: SearchResponse.

SDK operations: `list`.

Key fields to recognise:

- `candidate_window_truncated`: True when Loppee&#39;s bounded candidate assembly reached its safety cap. `total_matches` is then a lower bound, never a corpus-wide exact count.
- `commercial_influence`: Must be none whenever current-location or `saved_exact` authority is absent, including universal exact/genuine-prefix name lookup.
- `display_count`: Agent-key responses: the number of businesses in this response. No total number of matches is reported.
- `has_more`: True only when `next_cursor` can continue through the current bounded, deterministic candidate window.
- `location_context`: Local category discovery and recommendations require a current precise location proof or handoff, a user-confirmed validated destination authority, or a `saved_exact` Home location. City/state, ZIP, and `saved_coarse` locations are neutral area context for business-name disambiguation only: they return no local category or recommendation results, cannot activate Sponsored placement, and record no impressions. A connected assistant&#39;s current location comes only from the registered Loppee iPhone; provider IP, caller-supplied coordinates, host metadata, and computer/browser location are rejected as current-location authority. Exact and genuine-prefix business-name lookup remains universal; without precise location it is commercially neutral.

### Suggest

Results: SuggestResponse.

SDK operations: `list`.

Key fields to recognise:

- `query`: Exact business-name query to submit to /v1/search; never a branch or profile identifier.

### SupportInternalNote

Results: SupportInternalNoteResponse.

SDK operations: `create`.

### SupportWorkflow

Results: SupportWorkflowResponse.

SDK operations: `create`.

### TaxonomySuggestion

Results: TaxonomySuggestionsResponse.

SDK operations: `list`.

### TrustCard

Results: Report a problem with a state license record response; Read approved historical business records response; Read state license records that appear to match a business response; TrustCard; Get agent JSON Schema response.

SDK operations: `create`, `list`, `load`.

### UnsaveBusiness

Results: UnsaveBusinessResponse.

SDK operations: `create`.

### UpdateAgentBillingAccount

Results: UpdateAgentBillingAccountResponse.

SDK operations: `create`.

### WithdrawJobApplication

Results: WithdrawJobApplicationResponse.

SDK operations: `create`.

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| AgentAccess | `create` | `POST /v1/actions/agent-access-request` | Not required |
| AgentCapability | `load` | `GET /v1/agent-capabilities.json` | See reference |
| AgentConnectionTest | `create` | `POST /v1/actions/agent-connection-test` | Not required |
| AgentIntegration | `list` | `GET /v1/agent-integration.json` | See reference |
| AgentMonitoring | `load` | `GET /v1/agent-monitoring.json` | See reference |
| AgentOpenapi | `list` | `GET /v1/agent-openapi.json` | See reference |
| AgentPolicy | `load` | `GET /v1/agent-policy.json` | See reference |
| AnonymousLocationProofRevocation | `create` | `POST /v1/location-proofs` | Not required |
| AnonymousLocationProofRevocation | `remove` | `DELETE /v1/location-proofs/{location_proof_id}` | Not required |
| BusinessApplication | `create` | `POST /v1/actions/business-application` | Required |
| BusinessClaim | `create` | `POST /v1/actions/business-claim` | Required |
| BusinessDeal | `list` | `GET /v1/businesses/{business_id}/deals.json` | See reference |
| BusinessIndex | `list` | `GET /v1/businesses/index.json` | See reference |
| BusinessOwner | `create` | `POST /v1/owner/agents/{agent_id}/disconnect` | Required |
| BusinessOwner | `create` | `POST /v1/owner/agents/{agent_id}/permissions` | Required |
| BusinessOwner | `create` | `POST /v1/owner/agents/{agent_id}/rotate-key` | Required |
| BusinessOwner | `create` | `POST /v1/owner/agents/{agent_id}/webhook` | Required |
| BusinessOwner | `create` | `POST /v1/owner/agents/{agent_id}/webhook/disable` | Required |
| BusinessOwner | `create` | `POST /v1/owner/agents/{agent_id}/webhook/rotate-secret` | Required |
| BusinessOwner | `create` | `POST /v1/owner/agents/{agent_id}/webhook/test` | Required |
| BusinessOwner | `create` | `POST /v1/owner/ads/changes/{id}/confirm` | Required |
| BusinessOwner | `create` | `POST /v1/owner/ads/changes/{id}/reject` | Required |
| BusinessOwner | `create` | `POST /v1/owner/ads/changes/{id}/undo` | Required |
| BusinessOwner | `create` | `POST /v1/owner/conversations/{conversation_id}/read` | Required |
| BusinessOwner | `create` | `POST /v1/owner/deals/{deal_id}` | Required |
| BusinessOwner | `create` | `POST /v1/owner/deals/{deal_id}/delete` | Required |
| BusinessOwner | `create` | `POST /v1/owner/jobs/{job_id}` | Required |
| BusinessOwner | `create` | `POST /v1/owner/jobs/{job_id}/checkout` | Required |
| BusinessOwner | `create` | `POST /v1/owner/jobs/{job_id}/delete` | Required |
| BusinessOwner | `create` | `POST /v1/owner/locations/{location_id}` | Required |
| BusinessOwner | `create` | `POST /v1/owner/locations/{location_id}/delete` | Required |
| BusinessOwner | `create` | `POST /v1/owner/messages/{interaction_id}/reply` | Required |
| BusinessOwner | `create` | `POST /v1/owner/reviews/{review_id}/report` | Required |
| BusinessOwner | `create` | `POST /v1/owner/reviews/{review_id}/respond` | Required |
| BusinessOwner | `create` | `POST /v1/owner/ads/suggestions/{id}/apply` | Required |
| BusinessOwner | `create` | `POST /v1/owner/ads/suggestions/{id}/dismiss` | Required |
| BusinessOwner | `create` | `POST /v1/owner/support/{conversation_id}/read` | Required |
| BusinessOwner | `create` | `POST /v1/owner/support/{conversation_id}/typing` | Required |
| BusinessOwner | `create` | `POST /v1/owner/evidence/upload-intents/{intent_id}/finalize` | Required |
| BusinessOwner | `create` | `POST /v1/owner/account` | Required |
| BusinessOwner | `create` | `POST /v1/owner/ads/account` | Required |
| BusinessOwner | `create` | `POST /v1/owner/ads/assistant/chat` | Required |
| BusinessOwner | `create` | `POST /v1/owner/ads/assistant/handoff` | Required |
| BusinessOwner | `create` | `POST /v1/owner/ads/campaigns` | Required |
| BusinessOwner | `create` | `POST /v1/owner/ads/changes` | Required |
| BusinessOwner | `create` | `POST /v1/owner/ads/refund-requests` | Required |
| BusinessOwner | `create` | `POST /v1/owner/ads/terms/accept` | Required |
| BusinessOwner | `create` | `POST /v1/owner/ads/topup` | Required |
| BusinessOwner | `create` | `POST /v1/owner/agents` | Required |
| BusinessOwner | `create` | `POST /v1/owner/billing/checkout` | Required |
| BusinessOwner | `create` | `POST /v1/owner/billing/portal` | Required |
| BusinessOwner | `create` | `POST /v1/owner/category-requests` | Required |
| BusinessOwner | `create` | `POST /v1/owner/coupons/checkout` | Required |
| BusinessOwner | `create` | `POST /v1/owner/coupons/preview` | Required |
| BusinessOwner | `create` | `POST /v1/owner/deals` | Required |
| BusinessOwner | `create` | `POST /v1/owner/deletion-requests` | Required |
| BusinessOwner | `create` | `POST /v1/owner/diamond-radius` | Required |
| BusinessOwner | `create` | `POST /v1/owner/evidence` | Required |
| BusinessOwner | `create` | `POST /v1/owner/evidence/authorize` | Required |
| BusinessOwner | `create` | `POST /v1/owner/evidence/upload-intents` | Required |
| BusinessOwner | `create` | `POST /v1/owner/exposure-tier` | Required |
| BusinessOwner | `create` | `POST /v1/owner/hours` | Required |
| BusinessOwner | `create` | `POST /v1/owner/jobs` | Required |
| BusinessOwner | `create` | `POST /v1/owner/locations` | Required |
| BusinessOwner | `create` | `POST /v1/owner/missed-contacts/convert` | Required |
| BusinessOwner | `create` | `POST /v1/owner/mobile-devices` | Required |
| BusinessOwner | `create` | `POST /v1/owner/mobile-devices/revoke` | Required |
| BusinessOwner | `create` | `POST /v1/owner/photos` | Required |
| BusinessOwner | `create` | `POST /v1/owner/photos/remove` | Required |
| BusinessOwner | `create` | `POST /v1/owner/profile-details` | Required |
| BusinessOwner | `create` | `POST /v1/owner/support/messages` | Required |
| BusinessOwner | `update` | `PUT /v1/owner/evidence/upload-intents/{intent_id}/object` | Required |
| BusinessOwner | `update` | `PUT /v1/owner/ads/auto-refill` | Required |
| BusinessReview | `load` | `GET /v1/businesses/{business_id}/reviews.json` | See reference |
| ChatAttachment | `create` | `POST /v1/account/conversations/{conversation_id}/attachments` | Required |
| ChatAttachment | `create` | `POST /v1/owner/messages/{interaction_id}/attachments` | Required |
| ChatAttachment | `create` | `POST /v1/admin/support/{conversation_id}/attachments` | Required |
| ChatAttachment | `create` | `POST /v1/owner/support/{conversation_id}/attachments` | Required |
| ChatAttachmentUrl | `create` | `POST /v1/account/conversations/{conversation_id}/attachments/{attachment_id}/url` | Required |
| ChatAttachmentUrl | `create` | `POST /v1/owner/messages/{interaction_id}/attachments/{attachment_id}/url` | Required |
| ChatAttachmentUrl | `create` | `POST /v1/admin/support/{conversation_id}/attachments/{attachment_id}/url` | Required |
| ChatAttachmentUrl | `create` | `POST /v1/owner/support/{conversation_id}/attachments/{attachment_id}/url` | Required |
| ClaimVerificationSend | `create` | `POST /v1/actions/claim-verification/send` | Required |
| ClaimVerificationVerify | `create` | `POST /v1/actions/claim-verification/verify` | Required |
| CommercialClick | `create` | `POST /v1/actions/commercial-click` | Not required |
| ContactRecorded | `create` | `POST /v1/actions/confirm-interaction` | Required |
| Conversation | `create` | `POST /v1/actions/list-my-conversations` | Required |
| ConversationClose | `create` | `POST /v1/account/conversations/{conversation_id}/close` | Required |
| ConversationReport | `create` | `POST /v1/account/conversations/{conversation_id}/report` | Required |
| ConversationReport | `create` | `POST /v1/owner/messages/{interaction_id}/report` | Required |
| ConversationWorkflow | `create` | `POST /v1/owner/messages/{interaction_id}/workflow` | Required |
| CreateAgentApiKey | `create` | `POST /v1/admin/agent-keys` | Required |
| Customer | `create` | `POST /v1/account/customer` | Required |
| CustomerAccount | `create` | `POST /v1/account/location-handoffs/{handoff_id}/complete-from-device` | Required |
| CustomerAccount | `create` | `POST /v1/account/location-handoffs/{handoff_id}/decline-from-device` | Required |
| CustomerAccount | `create` | `POST /v1/account/agent-location/app-attest/challenges` | Required |
| CustomerAccount | `create` | `POST /v1/account/agent-location/app-attest/keys` | Required |
| CustomerAccount | `create` | `POST /v1/account/agents/{agent_id}/disconnect` | Required |
| CustomerAccount | `create` | `POST /v1/account/agents/{agent_id}/rotate-key` | Required |
| CustomerAccount | `create` | `POST /v1/account/agents/{agent_id}/webhook` | Required |
| CustomerAccount | `create` | `POST /v1/account/agents/{agent_id}/webhook/disable` | Required |
| CustomerAccount | `create` | `POST /v1/account/agents/{agent_id}/webhook/test` | Required |
| CustomerAccount | `create` | `POST /v1/account/agent-location/connections/{connection_id}/policy` | Required |
| CustomerAccount | `create` | `POST /v1/account/conversations/{conversation_id}/read` | Required |
| CustomerAccount | `create` | `POST /v1/account/conversations/{conversation_id}/reply` | Required |
| CustomerAccount | `create` | `POST /v1/account/agent-location/pause` | Required |
| CustomerAccount | `create` | `POST /v1/account/agents` | Required |
| CustomerAccount | `create` | `POST /v1/account/assistant/chat` | Required |
| CustomerAccount | `create` | `POST /v1/account/deletion-requests` | Required |
| CustomerAccount | `create` | `POST /v1/account/mobile-devices` | Required |
| CustomerAccount | `create` | `POST /v1/account/mobile-devices/message-alerts` | Required |
| CustomerAccount | `create` | `POST /v1/account/mobile-devices/revoke` | Required |
| CustomerLocationProofRevocation | `create` | `POST /v1/account/location-proofs` | Required |
| CustomerLocationProofRevocation | `remove` | `DELETE /v1/account/location-proofs/{location_proof_id}` | Required |
| DestinationAddressSuggestion | `create` | `POST /v1/account/destination-address-suggestions` | Required |
| DestinationAddressSuggestion | `create` | `POST /v1/destination-address-suggestions` | Not required |
| DestinationLocationProof | `create` | `POST /v1/account/destination-location-proofs` | Required |
| DestinationLocationProof | `create` | `POST /v1/destination-location-proofs` | Not required |
| DomainTrustCard | `load` | `GET /v1/domains/{domain_key}/trust-card.json` | See reference |
| GeoContext | `load` | `GET /v1/geo/context` | See reference |
| Health | `load` | `GET /health` | See reference |
| JobApplication | `create` | `POST /v1/jobs/{job_id}/apply` | Required |
| JobApplication | `create` | `POST /v1/owner/job-applications/{application_id}/status` | Required |
| JobApplication | `create` | `POST /v1/account/job-applications/{application_id}/withdraw` | Required |
| JobApplication | `create` | `POST /v1/actions/job-application` | Required |
| JobApplication | `create` | `POST /v1/actions/list-my-job-applications` | Required |
| JobResumeSignedUrl | `create` | `POST /v1/account/job-applications/{application_id}/resume-url` | Required |
| JobResumeSignedUrl | `create` | `POST /v1/owner/job-applications/{application_id}/resume-url` | Required |
| LocationHandoff | `create` | `POST /v1/account/location-handoffs` | Required |
| Message | `create` | `POST /v1/actions/business-message` | Required |
| Message | `create` | `POST /v1/actions/message-request` | Required |
| ModeratedAction | `create` | `POST /v1/actions/contact-attempt` | Required |
| ModeratedAction | `create` | `POST /v1/assistant/chat` | Not required |
| ModeratedAction | `create` | `POST /v1/internal/jobs/resume-scan-results` | Required |
| ModeratedAction | `create` | `POST /v1/internal/owner-evidence/scan-results` | Required |
| ModeratedAction | `create` | `POST /v1/stripe/webhook` | Required |
| ModeratedAction | `create` | `POST /v1/support/guide/help` | Not required |
| ModeratedAction | `load` | `GET /v1/assistant/native/status` | Not required |
| ModeratedAction | `load` | `GET /v1/assistant/status` | Not required |
| ModeratedAction | `load` | `GET /v1/support/guide` | Not required |
| OpenApiDocument | `list` | `GET /openapi.json` | See reference |
| OpenApiDocument | `list` | `GET /v1/openapi.json` | See reference |
| Operation | `create` | `POST /v1/admin/businesses/{business_id}/job-applications/{application_id}/resume-url` | Required |
| Operation | `create` | `POST /v1/admin/businesses/{business_id}/jobs/{job_id}/close` | Required |
| Operation | `create` | `POST /v1/admin/businesses/{business_id}/messages/{thread_id}/moderate` | Required |
| Operation | `create` | `POST /v1/admin/businesses/{business_id}/archived-records/{fact_id}/review` | Required |
| Operation | `create` | `POST /v1/admin/ads/accounts/{account_id}/adjust` | Required |
| Operation | `create` | `POST /v1/admin/ads/accounts/{account_id}/release-hold` | Required |
| Operation | `create` | `POST /v1/admin/team/agents/{agent_id}/access` | Required |
| Operation | `create` | `POST /v1/admin/team/agents/{agent_id}/disable` | Required |
| Operation | `create` | `POST /v1/admin/team/agents/{agent_id}/rotate-key` | Required |
| Operation | `create` | `POST /v1/admin/team/agents/{agent_id}/scope` | Required |
| Operation | `create` | `POST /v1/admin/team/agents/{agent_id}/webhook` | Required |
| Operation | `create` | `POST /v1/admin/team/agents/{agent_id}/webhook/disable` | Required |
| Operation | `create` | `POST /v1/admin/team/agents/{agent_id}/webhook/rotate-secret` | Required |
| Operation | `create` | `POST /v1/admin/team/agents/{agent_id}/webhook/test` | Required |
| Operation | `create` | `POST /v1/admin/content/blocks/{block_key}/discard-draft` | Required |
| Operation | `create` | `POST /v1/admin/content/blocks/{block_key}/draft` | Required |
| Operation | `create` | `POST /v1/admin/content/blocks/{block_key}/publish` | Required |
| Operation | `create` | `POST /v1/admin/content/blocks/{block_key}/revert` | Required |
| Operation | `create` | `POST /v1/admin/ops/bulk-jobs/{job_id}/apply` | Required |
| Operation | `create` | `POST /v1/admin/ops/bulk-jobs/{job_id}/enqueue` | Required |
| Operation | `create` | `POST /v1/admin/ops/bulk-jobs/{job_id}/rollback` | Required |
| Operation | `create` | `POST /v1/admin/business-claims/{claim_id}/review` | Required |
| Operation | `create` | `POST /v1/admin/businesses/{business_id}/billing-comp` | Required |
| Operation | `create` | `POST /v1/admin/businesses/{business_id}/category` | Required |
| Operation | `create` | `POST /v1/admin/businesses/{business_id}/exposure-tier` | Required |
| Operation | `create` | `POST /v1/admin/businesses/{business_id}/facts` | Required |
| Operation | `create` | `POST /v1/admin/businesses/{business_id}/hours` | Required |
| Operation | `create` | `POST /v1/admin/businesses/{business_id}/lifecycle` | Required |
| Operation | `create` | `POST /v1/admin/ops/duplicate-candidates/{candidate_id}/merge-dry-run` | Required |
| Operation | `create` | `POST /v1/admin/category-requests/{request_id}/review` | Required |
| Operation | `create` | `POST /v1/admin/ads/clicks/{click_id}/credit` | Required |
| Operation | `create` | `POST /v1/admin/ads/clicks/{click_id}/invalid` | Required |
| Operation | `create` | `POST /v1/admin/ads/comped/{campaign_id}/end` | Required |
| Operation | `create` | `POST /v1/admin/ai-connections/{connection_id}/rotate` | Required |
| Operation | `create` | `POST /v1/admin/ai-connections/{connection_id}/test` | Required |
| Operation | `create` | `POST /v1/admin/coupons/{coupon_id}` | Required |
| Operation | `create` | `POST /v1/admin/deals/{deal_id}/moderate` | Required |
| Operation | `create` | `POST /v1/admin/ads/review/{id}` | Required |
| Operation | `create` | `POST /v1/admin/team/invites/{invite_id}/revoke` | Required |
| Operation | `create` | `POST /v1/admin/switches/{key}` | Required |
| Operation | `create` | `POST /v1/admin/license-record-reports/{report_id}/resolve` | Required |
| Operation | `create` | `POST /v1/admin/v3/manual-verification-submissions/{submission_id}/decision` | Required |
| Operation | `create` | `POST /v1/admin/content/media/{media_id}/delete` | Required |
| Operation | `create` | `POST /v1/admin/media/{asset_id}/remove` | Required |
| Operation | `create` | `POST /v1/admin/assistant-provider/{provider}/test` | Required |
| Operation | `create` | `POST /v1/admin/ads/refund-requests/{request_id}/approve` | Required |
| Operation | `create` | `POST /v1/admin/ads/refund-requests/{request_id}/reject` | Required |
| Operation | `create` | `POST /v1/admin/v3/review-anomalies/{flag_id}/resolve` | Required |
| Operation | `create` | `POST /v1/admin/reviews/{review_id}/moderate` | Required |
| Operation | `create` | `POST /v1/admin/service-accounts/{account_id}/status` | Required |
| Operation | `create` | `POST /v1/admin/support/{conversation_id}/ai-draft` | Required |
| Operation | `create` | `POST /v1/admin/support/{conversation_id}/assign` | Required |
| Operation | `create` | `POST /v1/admin/support/{conversation_id}/read` | Required |
| Operation | `create` | `POST /v1/admin/support/{conversation_id}/reply` | Required |
| Operation | `create` | `POST /v1/admin/support/{conversation_id}/status` | Required |
| Operation | `create` | `POST /v1/admin/support/{conversation_id}/typing` | Required |
| Operation | `create` | `POST /v1/admin/team/members/{user_id}` | Required |
| Operation | `create` | `POST /v1/admin/team/members/{user_id}/remove` | Required |
| Operation | `create` | `POST /v1/admin/ops/worker-tasks/{task_id}/control` | Required |
| Operation | `create` | `POST /v1/admin/access-contexts` | Required |
| Operation | `create` | `POST /v1/admin/ads/comped` | Required |
| Operation | `create` | `POST /v1/admin/ads/invites` | Required |
| Operation | `create` | `POST /v1/admin/ads/moderation` | Required |
| Operation | `create` | `POST /v1/admin/ads/reconciliation/run` | Required |
| Operation | `create` | `POST /v1/admin/ai-connections` | Required |
| Operation | `create` | `POST /v1/admin/assistant-provider/active` | Required |
| Operation | `create` | `POST /v1/admin/businesses` | Required |
| Operation | `create` | `POST /v1/admin/content/media` | Required |
| Operation | `create` | `POST /v1/admin/coupons` | Required |
| Operation | `create` | `POST /v1/admin/florida-seo/reviews/inspect` | Required |
| Operation | `create` | `POST /v1/admin/ops/category-mappings` | Required |
| Operation | `create` | `POST /v1/admin/ops/category-remap/dry-run` | Required |
| Operation | `create` | `POST /v1/admin/ops/category-remap/selection-dry-run` | Required |
| Operation | `create` | `POST /v1/admin/ops/quality-scan/dry-run` | Required |
| Operation | `create` | `POST /v1/admin/pricing-content/discard-draft` | Required |
| Operation | `create` | `POST /v1/admin/pricing-content/draft` | Required |
| Operation | `create` | `POST /v1/admin/pricing-content/publish` | Required |
| Operation | `create` | `POST /v1/admin/reviews/reports/bulk-dismiss` | Required |
| Operation | `create` | `POST /v1/admin/team/agents` | Required |
| Operation | `create` | `POST /v1/admin/team/invites` | Required |
| Operation | `patch` | `PATCH /v1/admin/ops/duplicate-candidates/{candidate_id}` | Required |
| Operation | `patch` | `PATCH /v1/admin/ops/category-mappings/{mapping_id}` | Required |
| Operation | `patch` | `PATCH /v1/admin/ops/quality-signals/{signal_id}` | Required |
| Operation | `patch` | `PATCH /v1/admin/verification-cases/{business_id}/management` | Required |
| Operation | `remove` | `DELETE /v1/admin/support/{conversation_id}/ai-drafts/{draft_id}` | Required |
| Operation | `remove` | `DELETE /v1/admin/access-contexts/{access_context_id}` | Required |
| Operation | `remove` | `DELETE /v1/admin/ai-connections/{connection_id}` | Required |
| Operation | `remove` | `DELETE /v1/admin/coupons/{coupon_id}` | Required |
| Operation | `remove` | `DELETE /v1/admin/assistant-provider/{provider}` | Required |
| Operation | `remove` | `DELETE /v1/admin/ai-workload-bindings/{workload}` | Required |
| Operation | `update` | `PUT /v1/admin/assistant-provider/{provider}` | Required |
| Operation | `update` | `PUT /v1/admin/ai-workload-bindings/{workload}` | Required |
| Operation | `update` | `PUT /v1/admin/ads/reserves` | Required |
| Operation | `update` | `PUT /v1/admin/ads/settings/topup-limits` | Required |
| OwnerNotification | `create` | `POST /v1/owner/notifications/{notification_id}/read` | Required |
| OwnerNotificationSetting | `create` | `POST /v1/owner/notification-settings` | Required |
| OwnerWebhookEndpoint | `create` | `POST /v1/owner/webhooks/{endpoint_id}/disable` | Required |
| OwnerWebhookRegistration | `create` | `POST /v1/owner/webhooks/{endpoint_id}/rotate-secret` | Required |
| OwnerWebhookRegistration | `create` | `POST /v1/owner/webhooks` | Required |
| Pricing | `list` | `GET /v1/pricing` | See reference |
| PromoteVerifiedTransaction | `create` | `POST /v1/actions/promote-verified-transaction` | Required |
| PublicContent | `load` | `GET /v1/content` | See reference |
| Recommend | `list` | `GET /v1/recommend` | See reference |
| Review | `create` | `POST /v1/actions/public-review` | Required |
| Review | `create` | `POST /v1/actions/review` | Required |
| Revoke | `create` | `POST /v1/admin/agent-keys/{key_id}/revoke` | Required |
| SaveBusiness | `create` | `POST /v1/actions/save-business` | Required |
| SavedBusiness | `create` | `POST /v1/actions/list-saved-businesses` | Required |
| SavedLocation | `remove` | `DELETE /v1/account/location` | Required |
| SavedLocation | `update` | `PUT /v1/account/location` | Required |
| Search | `list` | `GET /v1/business-claim/candidates` | See reference |
| Search | `list` | `GET /v1/search` | See reference |
| Suggest | `list` | `GET /v1/suggest` | See reference |
| SupportInternalNote | `create` | `POST /v1/admin/support/{conversation_id}/internal-notes` | Required |
| SupportWorkflow | `create` | `POST /v1/admin/support/{conversation_id}/workflow` | Required |
| TaxonomySuggestion | `list` | `GET /v1/taxonomy/suggest` | See reference |
| TrustCard | `create` | `POST /v1/businesses/{business_id}/license-records/{fact_id}/report` | Not required |
| TrustCard | `list` | `GET /v1/businesses/{business_id}/archived-records.json` | Not required |
| TrustCard | `list` | `GET /v1/businesses/{business_id}/license-records.json` | Not required |
| TrustCard | `load` | `GET /v1/businesses/{business_id}/trust-card.json` | See reference |
| TrustCard | `load` | `GET /v1/schemas/{schema_name}` | Not required |
| UnsaveBusiness | `create` | `POST /v1/actions/unsave-business` | Required |
| UpdateAgentBillingAccount | `create` | `POST /v1/admin/agent-billing-accounts` | Required |
| WithdrawJobApplication | `create` | `POST /v1/actions/withdraw-job-application` | Required |

## Connect to the API

- Production: `https://loppee.com`

The default credential is sent in the `X-LOPPEE-API-Key` header.

Scoped agent key. Admin-agent requests are authorized only by the key&#39;s explicit `allowed_actions`; admin-agent keys cannot delete users or agents.

Bearer form of a scoped agent key for non-admin agent workflows. Admin routes deliberately require X-LOPPEE-API-Key for agent keys so Authorization remains unambiguous for human Supabase admin sessions.

Supabase Auth access token with MFA/AAL2 for a user listed in `admin_users`.

Signature-verified Supabase Auth access token used only to resolve the session&#39;s mutually exclusive customer, owner, or admin role. Role-specific operations still enforce their own account and AAL2 requirements.

Signature-verified Supabase Auth access token for an active customer account. AAL2 is operation-specific: endpoints that explicitly require step-up reject AAL1; ordinary review MFA follows deployment policy.

Supabase Auth access token with MFA/AAL2 for an active owner account. Customer/admin role overlap is rejected by runtime and database role-exclusivity guards.

Stripe webhook signature verified against the configured endpoint secret before any mutation.

Single-intent HMAC callback authority supplied only to the private Render Workflow task.

Dedicated single-intent callback authority supplied only to the private job-resume scanner task; it is bound to the immutable scan authority and exact file fingerprint.

Lowercase hexadecimal HMAC-SHA256 of &#39;&lt;X-Webhook-Timestamp&gt;.&lt;raw request body&gt;&#39; using the one-time endpoint signing secret. The signing secret authenticates this delivery only and grants no Loppee API authority.

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

A read request without required parameters or authentication is `GET /v1/assistant/native/status`. For example:

```sh
curl --fail-with-body --silent --show-error 'https://loppee.com/v1/assistant/native/status'
```

Inspect the response using the ModeratedAction reference. This checks the public route; authenticated operations need their own credentials and request data.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| Golang | `go/` | Build from source |
| Lua | `lua/` | Build from source |
| PHP | `php/` | Build from source |
| Python | `py/` | Build from source |
| Ruby | `rb/` | Build from source |
| TypeScript | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Companion tools

These targets provide another way to use the API. Their available commands or tools can cover a smaller set of operations than the client libraries.

### Go CLI

Use the command-line interface for shell-based tasks and scripts.

Repository directory: `go-cli/`. Not published. Build from the go-cli directory.


### Go MCP server

Use the MCP server to expose supported API operations to an MCP client.

Repository directory: `go-mcp/`. Not published. Build from the go-mcp directory.

- `loppee-business_list`: List records for an entity. Supported entities: `agent_integration`, `agent_openapi`, `business_deal`, `business_index`, `open_api_document`, `pricing`, `recommend`, `search`, `suggest`, `taxonomy_suggestion`, `trust_card`.
- `loppee-business_load`: Load one record for an entity. Supported entities: `agent_capability`, `agent_monitoring`, `agent_policy`, `business_review`, `domain_trust_card`, `geo_context`, `health`, `moderated_action`, `public_content`, `trust_card`.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- `ratelimit`: Client-side rate limiting via a token bucket
- `retry`: Automatic retry of transient failures with exponential backoff
- `test`: In-memory mock transport for testing without a live server
- `timeout`: Per-request timeout with transport abort

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the first-call guide for the setup sequence.
- Read the authentication guide before using protected routes.
- Use the API reference for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

