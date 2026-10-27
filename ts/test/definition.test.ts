import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "agent_access",
    "accessor": "AgentAccess",
    "op": "create",
    "method": "POST",
    "path": "/v1/actions/agent-access-request",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "request_id": "x",
      "request_status": "x",
      "created_at": "x"
    },
    "idField": "id"
  },
  {
    "entity": "agent_capability",
    "accessor": "AgentCapability",
    "op": "load",
    "method": "GET",
    "path": "/v1/agent-capabilities.json",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "external_agent_access": {},
      "external_agent_webhooks": {},
      "discovery": {},
      "agent_rules": {},
      "local_discovery_location_policy": {},
      "location_choices": {},
      "agent_phone_location_bridge": {}
    },
    "idField": "id"
  },
  {
    "entity": "agent_connection_test",
    "accessor": "AgentConnectionTest",
    "op": "create",
    "method": "POST",
    "path": "/v1/actions/agent-connection-test",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "identity": {
        "account_id": "x",
        "label": "x",
        "allowed_actions": [
          "x"
        ],
        "allowed_business_ids": [
          "x"
        ],
        "source": "database",
        "scope_kind": "consumer"
      }
    },
    "idField": "id"
  },
  {
    "entity": "agent_integration",
    "accessor": "AgentIntegration",
    "op": "list",
    "method": "GET",
    "path": "/v1/agent-integration.json",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "schema_version": "x",
      "external_agent_access": {},
      "generated_at": "2026-01-01T00:00:00Z",
      "public_base_url": "x",
      "package_url": "x",
      "openapi_url": "x",
      "openapi_v1_url": "x",
      "monitoring_url": "x",
      "developer_docs_url": "x",
      "mcp_client_example_url": "x",
      "legal": {
        "privacy_policy_url": "x",
        "terms_of_service_url": "x"
      },
      "trust_doctrine": {
        "payment": "x",
        "reviews": "x",
        "sponsored_placement": "x"
      },
      "exposure_tiers": {},
      "mcp": {},
      "auth_model": {},
      "owner_agent_notifications": {},
      "http_api": {},
      "trust_card_contract": {},
      "commercial_influence": {},
      "rate_limits": {},
      "operational_rules": [
        "x"
      ]
    },
    "idField": "id"
  },
  {
    "entity": "agent_monitoring",
    "accessor": "AgentMonitoring",
    "op": "load",
    "method": "GET",
    "path": "/v1/agent-monitoring.json",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "schema_version": "x",
      "generated_at": "2026-01-01T00:00:00Z",
      "service": "x",
      "version": "x",
      "contract_version": "x",
      "build_sha": "x",
      "uptime_seconds": 1,
      "health_url": "x",
      "integration_package_url": "x",
      "openapi_url": "x",
      "mcp_url": "x",
      "rate_limits": {},
      "metrics": {
        "total_requests": 1,
        "rate_limited_requests": 1,
        "errors_4xx": 1,
        "errors_5xx": 1
      }
    },
    "idField": "id"
  },
  {
    "entity": "agent_openapi",
    "accessor": "AgentOpenapi",
    "op": "list",
    "method": "GET",
    "path": "/v1/agent-openapi.json",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "info": {
        "title": "x",
        "version": "x",
        "summary": "x",
        "description": "x"
      },
      "servers": [
        {
          "url": "x",
          "description": "x"
        }
      ],
      "tags": [
        {
          "name": "x"
        }
      ],
      "paths": {},
      "components": {
        "securitySchemes": {},
        "schemas": {}
      }
    },
    "idField": "id"
  },
  {
    "entity": "agent_policy",
    "accessor": "AgentPolicy",
    "op": "load",
    "method": "GET",
    "path": "/v1/agent-policy.json",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "external_agent_access": {},
      "external_agent_webhooks": {},
      "verification": {},
      "publication": {},
      "payment": {},
      "local_discovery_location_policy": {},
      "location_handoff_flow": {}
    },
    "idField": "id"
  },
  {
    "entity": "anonymous_location_proof_revocation",
    "accessor": "AnonymousLocationProofRevocation",
    "op": "create",
    "method": "POST",
    "path": "/v1/location-proofs",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 201,
    "sample": {
      "location_proof_id": "x",
      "usable_until": "2026-01-01T00:00:00Z",
      "uses_remaining": 1
    },
    "idField": "id"
  },
  {
    "entity": "anonymous_location_proof_revocation",
    "accessor": "AnonymousLocationProofRevocation",
    "op": "remove",
    "method": "DELETE",
    "path": "/v1/location-proofs/{location_proof_id}",
    "args": [
      {
        "name": "location_proof_id",
        "wire": "location_proof_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "location_proof_id": "x",
      "status": "revoked",
      "revoked": true
    },
    "idField": "id"
  },
  {
    "entity": "business_application",
    "accessor": "BusinessApplication",
    "op": "create",
    "method": "POST",
    "path": "/v1/actions/business-application",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "business_id": "x",
      "application_id": "x",
      "claim_id": "x",
      "existing_business": true,
      "pipeline_status": "x",
      "uploaded_files": 1,
      "created_at": "x"
    },
    "idField": "id"
  },
  {
    "entity": "business_claim",
    "accessor": "BusinessClaim",
    "op": "create",
    "method": "POST",
    "path": "/v1/actions/business-claim",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "status": "queued",
      "claim_id": "x",
      "claim_status": "x",
      "directory_listing_id": "x",
      "business_id": "x",
      "display_name": "x",
      "created_at": "x",
      "verification": {}
    },
    "idField": "id"
  },
  {
    "entity": "business_deal",
    "accessor": "BusinessDeal",
    "op": "list",
    "method": "GET",
    "path": "/v1/businesses/{business_id}/deals.json",
    "args": [
      {
        "name": "id",
        "wire": "business_id",
        "value": "biz_elite_ac_llc_jacksonville_fl"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "schema_version": "x",
      "business_id": "x",
      "deals": [
        {
          "id": "x",
          "title": "x",
          "description": "x",
          "discountLabel": "x",
          "promoCode": "x",
          "terms": "x",
          "startsAt": "x",
          "endsAt": "x",
          "createdAt": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "business_index",
    "accessor": "BusinessIndex",
    "op": "list",
    "method": "GET",
    "path": "/v1/businesses/index.json",
    "args": [],
    "select": {
      "cursor": "v1",
      "limit": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "cursor"
    ],
    "queryArgs": [
      {
        "name": "cursor",
        "wire": "cursor"
      },
      {
        "name": "limit",
        "wire": "limit"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "generated_at": "2026-01-01T00:00:00Z",
      "total_registry_records": 1,
      "registry_count_basis": "x",
      "registry_count_observed_at": "x",
      "published_profile_count": 1,
      "page_limit": 1,
      "next_cursor": "x",
      "public_base_url": "x",
      "search_url": "x",
      "recommend_url": "x",
      "trust_card_pattern": "x",
      "domain_lookup_pattern": "x",
      "publishing_rule": "x",
      "businesses": [
        {
          "business_id": "x",
          "display_name": "x",
          "street_address": "x",
          "zip": "x",
          "domain": "x",
          "category": "x",
          "city": "x",
          "state": "x",
          "website": "x",
          "phone": "x",
          "verification_class": "verified",
          "verification_disclosure": "Loppee completed this business's registration, professional license, and contact checks.",
          "trust_card_url": "x",
          "public_profile_url": "x",
          "insurance": {
            "stated_expires_at": "x"
          },
          "brand_assets": {
            "logo_url": "x",
            "hero_image_url": "x",
            "gallery_image_urls": [
              "x"
            ],
            "hero_alt": "x",
            "source": "x"
          }
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "business_owner",
    "accessor": "BusinessOwner",
    "op": "create",
    "method": "POST",
    "path": "/v1/owner/conversations/{conversation_id}/read",
    "args": [
      {
        "name": "conversation_id",
        "wire": "conversation_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {},
    "idField": "id"
  },
  {
    "entity": "business_owner",
    "accessor": "BusinessOwner",
    "op": "create",
    "method": "POST",
    "path": "/v1/owner/deals/{deal_id}",
    "args": [
      {
        "name": "deal_id",
        "wire": "deal_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {},
    "idField": "id"
  },
  {
    "entity": "business_owner",
    "accessor": "BusinessOwner",
    "op": "create",
    "method": "POST",
    "path": "/v1/owner/deals/{deal_id}/delete",
    "action": "delete",
    "args": [
      {
        "name": "deal_id",
        "wire": "deal_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {},
    "idField": "id"
  },
  {
    "entity": "business_owner",
    "accessor": "BusinessOwner",
    "op": "create",
    "method": "POST",
    "path": "/v1/owner/jobs/{job_id}",
    "args": [
      {
        "name": "job_id",
        "wire": "job_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {},
    "idField": "id"
  },
  {
    "entity": "business_owner",
    "accessor": "BusinessOwner",
    "op": "create",
    "method": "POST",
    "path": "/v1/owner/jobs/{job_id}/checkout",
    "action": "checkout",
    "args": [
      {
        "name": "job_id",
        "wire": "job_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {},
    "idField": "id"
  },
  {
    "entity": "business_owner",
    "accessor": "BusinessOwner",
    "op": "create",
    "method": "POST",
    "path": "/v1/owner/jobs/{job_id}/delete",
    "action": "delete",
    "args": [
      {
        "name": "job_id",
        "wire": "job_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {},
    "idField": "id"
  },
  {
    "entity": "business_owner",
    "accessor": "BusinessOwner",
    "op": "create",
    "method": "POST",
    "path": "/v1/owner/locations/{location_id}",
    "args": [
      {
        "name": "location_id",
        "wire": "location_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {},
    "idField": "id"
  },
  {
    "entity": "business_owner",
    "accessor": "BusinessOwner",
    "op": "create",
    "method": "POST",
    "path": "/v1/owner/locations/{location_id}/delete",
    "action": "delete",
    "args": [
      {
        "name": "location_id",
        "wire": "location_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {},
    "idField": "id"
  },
  {
    "entity": "business_owner",
    "accessor": "BusinessOwner",
    "op": "create",
    "method": "POST",
    "path": "/v1/owner/messages/{interaction_id}/reply",
    "args": [
      {
        "name": "message_id",
        "wire": "interaction_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {},
    "idField": "id"
  },
  {
    "entity": "business_owner",
    "accessor": "BusinessOwner",
    "op": "create",
    "method": "POST",
    "path": "/v1/owner/evidence/upload-intents/{intent_id}/finalize",
    "args": [
      {
        "name": "upload_intent_id",
        "wire": "intent_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {},
    "idField": "id"
  },
  {
    "entity": "business_owner",
    "accessor": "BusinessOwner",
    "op": "update",
    "method": "PUT",
    "path": "/v1/owner/evidence/upload-intents/{intent_id}/object",
    "args": [
      {
        "name": "upload_intent_id",
        "wire": "intent_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {},
    "idField": "id"
  },
  {
    "entity": "business_owner",
    "accessor": "BusinessOwner",
    "op": "update",
    "method": "PUT",
    "path": "/v1/owner/ads/auto-refill",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {},
    "idField": "id"
  },
  {
    "entity": "business_review",
    "accessor": "BusinessReview",
    "op": "load",
    "method": "GET",
    "path": "/v1/businesses/{business_id}/reviews.json",
    "args": [
      {
        "name": "id",
        "wire": "business_id",
        "value": "biz_elite_ac_llc_jacksonville_fl"
      }
    ],
    "select": {
      "limit": "v1",
      "page": "v1",
      "rating": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "page",
      "limit",
      "rating"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "page",
        "wire": "page"
      },
      {
        "name": "rating",
        "wire": "rating"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "business_id": "x",
      "display_name": "x",
      "policy": "x",
      "filter": {
        "ratings": [
          1
        ]
      },
      "reviews": [],
      "pagination": {
        "page": 1,
        "limit": 1,
        "total_count": 1,
        "total_pages": 1,
        "has_more": true,
        "next_page": 1
      }
    },
    "idField": "id"
  },
  {
    "entity": "chat_attachment",
    "accessor": "ChatAttachment",
    "op": "create",
    "method": "POST",
    "path": "/v1/account/conversations/{conversation_id}/attachments",
    "args": [
      {
        "name": "conversation_id",
        "wire": "conversation_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "attachment": {
        "id": "x",
        "fileName": "x",
        "mediaType": "x",
        "byteSize": 1
      }
    },
    "idField": "id"
  },
  {
    "entity": "chat_attachment",
    "accessor": "ChatAttachment",
    "op": "create",
    "method": "POST",
    "path": "/v1/owner/messages/{interaction_id}/attachments",
    "args": [
      {
        "name": "message_id",
        "wire": "interaction_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "attachment": {
        "id": "x",
        "fileName": "x",
        "mediaType": "x",
        "byteSize": 1
      }
    },
    "idField": "id"
  },
  {
    "entity": "chat_attachment_url",
    "accessor": "ChatAttachmentUrl",
    "op": "create",
    "method": "POST",
    "path": "/v1/account/conversations/{conversation_id}/attachments/{attachment_id}/url",
    "args": [
      {
        "name": "attachment_id",
        "wire": "attachment_id",
        "value": "p1"
      },
      {
        "name": "conversation_id",
        "wire": "conversation_id",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "attachment": {
        "id": "x",
        "file_name": "x",
        "media_type": "x",
        "byte_size": 1,
        "signed_url": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "chat_attachment_url",
    "accessor": "ChatAttachmentUrl",
    "op": "create",
    "method": "POST",
    "path": "/v1/owner/messages/{interaction_id}/attachments/{attachment_id}/url",
    "args": [
      {
        "name": "attachment_id",
        "wire": "attachment_id",
        "value": "p1"
      },
      {
        "name": "message_id",
        "wire": "interaction_id",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "attachment": {
        "id": "x",
        "file_name": "x",
        "media_type": "x",
        "byte_size": 1,
        "signed_url": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "claim_verification_send",
    "accessor": "ClaimVerificationSend",
    "op": "create",
    "method": "POST",
    "path": "/v1/actions/claim-verification/send",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "status": "code_sent",
      "channel": "email",
      "provider_status": "accepted",
      "challenge_id": "x",
      "destination_hint": "x",
      "expires_in_seconds": 1
    },
    "idField": "id"
  },
  {
    "entity": "claim_verification_verify",
    "accessor": "ClaimVerificationVerify",
    "op": "create",
    "method": "POST",
    "path": "/v1/actions/claim-verification/verify",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "status": "already_verified",
      "method": "email_code",
      "business_id": "x",
      "publication": {}
    },
    "idField": "id"
  },
  {
    "entity": "commercial_click",
    "accessor": "CommercialClick",
    "op": "create",
    "method": "POST",
    "path": "/v1/actions/commercial-click",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "status": "recorded",
      "storage": "commercial_click_events",
      "click_id": "x",
      "billing_event_id": "x",
      "fallback_interaction_id": "x",
      "billable": true,
      "billing_status": "x",
      "ledger_status": "x",
      "migration_required": true,
      "created_at": "x"
    },
    "idField": "id"
  },
  {
    "entity": "contact_recorded",
    "accessor": "ContactRecorded",
    "op": "create",
    "method": "POST",
    "path": "/v1/actions/confirm-interaction",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "business_id": "x",
      "interaction_id": "x",
      "policy": "x"
    },
    "idField": "id"
  },
  {
    "entity": "conversation",
    "accessor": "Conversation",
    "op": "create",
    "method": "POST",
    "path": "/v1/actions/list-my-conversations",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "x-loppee-api-key"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "account_id": "x",
      "count": 1,
      "pagination": {
        "limit": 1,
        "has_more": true,
        "next_cursor": "x"
      },
      "conversations": [
        {
          "conversation_id": "x",
          "business_id": "x",
          "business_name": "x",
          "subject": "x",
          "message": "x",
          "status": "x",
          "created_at": "x",
          "replies": [
            {
              "body": "x",
              "author_type": "x",
              "author_label": "x",
              "created_at": "x"
            }
          ]
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "conversation_close",
    "accessor": "ConversationClose",
    "op": "create",
    "method": "POST",
    "path": "/v1/account/conversations/{conversation_id}/close",
    "args": [
      {
        "name": "id",
        "wire": "conversation_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "conversation_id": "x",
      "closed_at": "2026-01-01T00:00:00Z"
    },
    "idField": "id"
  },
  {
    "entity": "conversation_report",
    "accessor": "ConversationReport",
    "op": "create",
    "method": "POST",
    "path": "/v1/account/conversations/{conversation_id}/report",
    "args": [
      {
        "name": "id",
        "wire": "conversation_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "status": "reported"
    },
    "idField": "id"
  },
  {
    "entity": "conversation_report",
    "accessor": "ConversationReport",
    "op": "create",
    "method": "POST",
    "path": "/v1/owner/messages/{interaction_id}/report",
    "args": [
      {
        "name": "message_id",
        "wire": "interaction_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "status": "reported"
    },
    "idField": "id"
  },
  {
    "entity": "conversation_workflow",
    "accessor": "ConversationWorkflow",
    "op": "create",
    "method": "POST",
    "path": "/v1/owner/messages/{interaction_id}/workflow",
    "args": [
      {
        "name": "message_id",
        "wire": "interaction_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "conversation": {}
    },
    "idField": "id"
  },
  {
    "entity": "create_agent_api_key",
    "accessor": "CreateAgentApiKey",
    "op": "create",
    "method": "POST",
    "path": "/v1/admin/agent-keys",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "created_by": "x",
      "key": {
        "id": "x",
        "account_id": "x",
        "label": "x",
        "key_prefix": "x",
        "key_last_four": "x",
        "allowed_actions": [
          "x"
        ],
        "allowed_business_ids": [
          "x"
        ],
        "monthly_quota": 1,
        "rate_limit_per_minute": 1,
        "created_at": "x"
      },
      "raw_key": "x"
    },
    "idField": "id"
  },
  {
    "entity": "customer",
    "accessor": "Customer",
    "op": "create",
    "method": "POST",
    "path": "/v1/account/customer",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "account": {
        "id": "x",
        "full_name": "x",
        "email": "x",
        "phone": "x",
        "city": "x",
        "state": "x",
        "avatar_url": "x",
        "created_at": "2026-01-01T00:00:00Z",
        "updated_at": "2026-01-01T00:00:00Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "customer_account",
    "accessor": "CustomerAccount",
    "op": "create",
    "method": "POST",
    "path": "/v1/account/agent-location/connections/{connection_id}/policy",
    "args": [
      {
        "name": "connection_id",
        "wire": "connection_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "connection_id": "x",
      "policy": "always_allowed",
      "all_paused": true,
      "selected_at": "2026-01-01T00:00:00Z",
      "agent_receives_coordinates": true
    },
    "idField": "id"
  },
  {
    "entity": "customer_location_proof_revocation",
    "accessor": "CustomerLocationProofRevocation",
    "op": "create",
    "method": "POST",
    "path": "/v1/account/location-proofs",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 201,
    "sample": {
      "location_proof_id": "x",
      "usable_until": "2026-01-01T00:00:00Z",
      "uses_remaining": 1
    },
    "idField": "id"
  },
  {
    "entity": "customer_location_proof_revocation",
    "accessor": "CustomerLocationProofRevocation",
    "op": "remove",
    "method": "DELETE",
    "path": "/v1/account/location-proofs/{location_proof_id}",
    "args": [
      {
        "name": "location_proof_id",
        "wire": "location_proof_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "location_proof_id": "x",
      "status": "revoked",
      "revoked": true
    },
    "idField": "id"
  },
  {
    "entity": "domain_trust_card",
    "accessor": "DomainTrustCard",
    "op": "load",
    "method": "GET",
    "path": "/v1/domains/{domain_key}/trust-card.json",
    "args": [
      {
        "name": "domain_key",
        "wire": "domain_key",
        "value": "eliteacllc-com"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "business_id": "x",
      "domain": "x",
      "verification_class": "verified",
      "verification_disclosure": "Loppee completed this business's registration, professional license, and contact checks.",
      "trust_card_url": "x",
      "trust_card": {
        "business_id": "x",
        "display_name": "x",
        "domain": "x",
        "category": [
          "x"
        ],
        "city": "x",
        "state": "x",
        "website": "x",
        "phone": "x",
        "verification_class": "verified",
        "verification_disclosure": "Loppee completed this business's registration, professional license, and contact checks.",
        "trust_card_url": "x",
        "public_profile_url": "x",
        "verification_valid_until": "x",
        "commercial_disclosure": "x",
        "legal_name": "x",
        "primary_category": "x",
        "services": [
          "x"
        ],
        "service_areas": [
          "x"
        ],
        "locations": [
          {
            "label": "x",
            "street_address": "x",
            "city": "x",
            "state": "x",
            "zip": "x",
            "is_primary": true,
            "reach_radius_miles": 1
          }
        ],
        "hours": {},
        "reviews": [],
        "active_deals": [
          {}
        ],
        "commercial": {
          "status": "x",
          "exposure_tier": "x"
        },
        "allowed_actions": [
          "x"
        ],
        "requires_human_confirmation": [
          "x"
        ],
        "insurance": {
          "stated_expires_at": "x"
        },
        "brand_assets": {
          "logo_url": "x",
          "hero_image_url": "x",
          "gallery_image_urls": [
            "x"
          ],
          "hero_alt": "x",
          "source": "x"
        },
        "citation": {},
        "schema_org": {},
        "updated_at": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "geo_context",
    "accessor": "GeoContext",
    "op": "load",
    "method": "GET",
    "path": "/v1/geo/context",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "resolver": "ipinfo",
      "city": "x",
      "state": "x",
      "latitude": 1,
      "longitude": 1
    },
    "idField": "id"
  },
  {
    "entity": "health",
    "accessor": "Health",
    "op": "load",
    "method": "GET",
    "path": "/health",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "service": "x",
      "version": "x",
      "contract_version": "x",
      "business_review_access": {
        "status": "disabled",
        "enabled": true,
        "rls_authority_ready": true
      },
      "external_agent_webhooks_enabled": true,
      "external_agent_webhooks": {
        "status": "disabled",
        "enabled": true,
        "worker_ready": true,
        "registration_available": true,
        "requirements": {
          "trust_model_v3": true,
          "explicit_enablement": true,
          "release_approved": true,
          "dedicated_signing_authority": true,
          "durable_outbox_authority": true
        },
        "missing_requirements": [
          "x"
        ]
      },
      "location_handoff": {
        "status": "enabled"
      },
      "location_choices": {
        "status": "enabled",
        "anonymous_browser_proofs_enabled": true,
        "saved_locations_enabled": true
      },
      "ios_app_attest_anonymous_location": {
        "status": "enabled",
        "legacy_extension_compatibility": "enabled"
      },
      "agent_phone_location_bridge": {
        "status": "enabled"
      },
      "mobile_push": {},
      "sponsored_ordering": {
        "status": "enabled",
        "model": "sponsored_share_of_voice",
        "commercial_influence": "sponsored_reach_within_verification_class_and_reputation_band",
        "free_exposure_floor": 1
      },
      "build_sha": "x"
    },
    "idField": "id"
  },
  {
    "entity": "job_application",
    "accessor": "JobApplication",
    "op": "create",
    "method": "POST",
    "path": "/v1/jobs/{job_id}/apply",
    "action": "apply",
    "args": [
      {
        "name": "id",
        "wire": "job_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "status": "x",
      "application": {
        "id": "x",
        "job_id": "x",
        "applicant_account_id": "x",
        "applicant_name": "x",
        "applicant_email": "x",
        "cover_note": "x",
        "submitted_via": "human",
        "status": "submitted",
        "resume": {
          "file_name": "x",
          "content_type": "x",
          "size_bytes": 1,
          "has_resume": true,
          "scan_status": "unscanned",
          "latest_scan_status": "unscanned",
          "retry_required": true,
          "replacement_pending": true,
          "replacement_retry_available": true,
          "quarantine_notice": "x"
        },
        "job": {
          "id": "x",
          "title": "x",
          "status": "x",
          "city": "x",
          "state": "x",
          "business_id": "x"
        },
        "employer": {
          "business_id": "x",
          "display_name": "x",
          "category": "x",
          "city": "x",
          "state": "x"
        },
        "created_at": "x",
        "updated_at": "x",
        "viewed_at": "x",
        "withdrawn_at": "x",
        "status_updated_at": "x",
        "resume_url": "x",
        "resume_url_expires_in_seconds": 1
      },
      "free_to_apply": true,
      "billing": {},
      "retention_note": "x",
      "already_withdrawn": true
    },
    "idField": "id"
  },
  {
    "entity": "job_application",
    "accessor": "JobApplication",
    "op": "create",
    "method": "POST",
    "path": "/v1/owner/job-applications/{application_id}/status",
    "action": "status",
    "args": [
      {
        "name": "id",
        "wire": "application_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "status": "x",
      "application": {
        "id": "x",
        "job_id": "x",
        "applicant_account_id": "x",
        "applicant_name": "x",
        "applicant_email": "x",
        "cover_note": "x",
        "submitted_via": "human",
        "status": "submitted",
        "resume": {
          "file_name": "x",
          "content_type": "x",
          "size_bytes": 1,
          "has_resume": true,
          "scan_status": "unscanned",
          "latest_scan_status": "unscanned",
          "retry_required": true,
          "replacement_pending": true,
          "replacement_retry_available": true,
          "quarantine_notice": "x"
        },
        "job": {
          "id": "x",
          "title": "x",
          "status": "x",
          "city": "x",
          "state": "x",
          "business_id": "x"
        },
        "employer": {
          "business_id": "x",
          "display_name": "x",
          "category": "x",
          "city": "x",
          "state": "x"
        },
        "created_at": "x",
        "updated_at": "x",
        "viewed_at": "x",
        "withdrawn_at": "x",
        "status_updated_at": "x",
        "resume_url": "x",
        "resume_url_expires_in_seconds": 1
      },
      "free_to_apply": true,
      "billing": {},
      "retention_note": "x",
      "already_withdrawn": true
    },
    "idField": "id"
  },
  {
    "entity": "job_application",
    "accessor": "JobApplication",
    "op": "create",
    "method": "POST",
    "path": "/v1/account/job-applications/{application_id}/withdraw",
    "action": "withdraw",
    "args": [
      {
        "name": "id",
        "wire": "application_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "status": "x",
      "application": {
        "id": "x",
        "job_id": "x",
        "applicant_account_id": "x",
        "applicant_name": "x",
        "applicant_email": "x",
        "cover_note": "x",
        "submitted_via": "human",
        "status": "submitted",
        "resume": {
          "file_name": "x",
          "content_type": "x",
          "size_bytes": 1,
          "has_resume": true,
          "scan_status": "unscanned",
          "latest_scan_status": "unscanned",
          "retry_required": true,
          "replacement_pending": true,
          "replacement_retry_available": true,
          "quarantine_notice": "x"
        },
        "job": {
          "id": "x",
          "title": "x",
          "status": "x",
          "city": "x",
          "state": "x",
          "business_id": "x"
        },
        "employer": {
          "business_id": "x",
          "display_name": "x",
          "category": "x",
          "city": "x",
          "state": "x"
        },
        "created_at": "x",
        "updated_at": "x",
        "viewed_at": "x",
        "withdrawn_at": "x",
        "status_updated_at": "x",
        "resume_url": "x",
        "resume_url_expires_in_seconds": 1
      },
      "free_to_apply": true,
      "billing": {},
      "retention_note": "x",
      "already_withdrawn": true
    },
    "idField": "id"
  },
  {
    "entity": "location_handoff",
    "accessor": "LocationHandoff",
    "op": "create",
    "method": "POST",
    "path": "/v1/account/location-handoffs",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "x-loppee-api-key"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "next_action": "poll_location_handoff"
    },
    "idField": "id"
  },
  {
    "entity": "operation",
    "accessor": "Operation",
    "op": "create",
    "method": "POST",
    "path": "/v1/admin/businesses/{business_id}/job-applications/{application_id}/resume-url",
    "args": [
      {
        "name": "business_id",
        "wire": "business_id",
        "value": "p1"
      },
      {
        "name": "job_application_id",
        "wire": "application_id",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "x_loppee_admin_context",
        "wire": "X-Loppee-Admin-Context",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "x-loppee-api-key"
        }
      ]
    ],
    "status": 200,
    "sample": {},
    "idField": "id"
  },
  {
    "entity": "operation",
    "accessor": "Operation",
    "op": "create",
    "method": "POST",
    "path": "/v1/admin/businesses/{business_id}/jobs/{job_id}/close",
    "args": [
      {
        "name": "business_id",
        "wire": "business_id",
        "value": "p1"
      },
      {
        "name": "job_id",
        "wire": "job_id",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "x_loppee_admin_context",
        "wire": "X-Loppee-Admin-Context",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "x-loppee-api-key"
        }
      ]
    ],
    "status": 200,
    "sample": {},
    "idField": "id"
  },
  {
    "entity": "operation",
    "accessor": "Operation",
    "op": "create",
    "method": "POST",
    "path": "/v1/admin/businesses/{business_id}/messages/{thread_id}/moderate",
    "args": [
      {
        "name": "business_id",
        "wire": "business_id",
        "value": "p1"
      },
      {
        "name": "message_id",
        "wire": "thread_id",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "x_loppee_admin_context",
        "wire": "X-Loppee-Admin-Context",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "x-loppee-api-key"
        }
      ]
    ],
    "status": 200,
    "sample": {},
    "idField": "id"
  },
  {
    "entity": "operation",
    "accessor": "Operation",
    "op": "create",
    "method": "POST",
    "path": "/v1/admin/businesses/{business_id}/archived-records/{fact_id}/review",
    "args": [
      {
        "name": "archived_record_id",
        "wire": "fact_id",
        "value": "p1"
      },
      {
        "name": "business_id",
        "wire": "business_id",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "fact_id": "x",
      "disposition": "approved",
      "revision": 1
    },
    "idField": "id"
  },
  {
    "entity": "operation",
    "accessor": "Operation",
    "op": "create",
    "method": "POST",
    "path": "/v1/admin/business-claims/{claim_id}/review",
    "args": [
      {
        "name": "business_claim_id",
        "wire": "claim_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "x-loppee-api-key"
        }
      ]
    ],
    "status": 200,
    "sample": {},
    "idField": "id"
  },
  {
    "entity": "operation",
    "accessor": "Operation",
    "op": "create",
    "method": "POST",
    "path": "/v1/admin/ops/duplicate-candidates/{candidate_id}/merge-dry-run",
    "action": "merge_dry_run",
    "args": [
      {
        "name": "candidate_id",
        "wire": "candidate_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "x-loppee-api-key"
        }
      ]
    ],
    "status": 200,
    "sample": {},
    "idField": "id"
  },
  {
    "entity": "operation",
    "accessor": "Operation",
    "op": "create",
    "method": "POST",
    "path": "/v1/admin/category-requests/{request_id}/review",
    "args": [
      {
        "name": "category_request_id",
        "wire": "request_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "x-loppee-api-key"
        }
      ]
    ],
    "status": 200,
    "sample": {},
    "idField": "id"
  },
  {
    "entity": "operation",
    "accessor": "Operation",
    "op": "create",
    "method": "POST",
    "path": "/v1/admin/ads/comped/{campaign_id}/end",
    "args": [
      {
        "name": "comped_id",
        "wire": "campaign_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "x-loppee-api-key"
        }
      ]
    ],
    "status": 200,
    "sample": {},
    "idField": "id"
  },
  {
    "entity": "operation",
    "accessor": "Operation",
    "op": "create",
    "method": "POST",
    "path": "/v1/admin/ai-connections/{connection_id}/rotate",
    "action": "rotate",
    "args": [
      {
        "name": "connection_id",
        "wire": "connection_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "status": "x",
      "connection": {
        "id": "x",
        "provider": "openai",
        "label": "x",
        "status": "pending",
        "verified_at": "x",
        "last_probe_at": "x",
        "last_error_code": "x",
        "created_at": "x",
        "updated_at": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "operation",
    "accessor": "Operation",
    "op": "create",
    "method": "POST",
    "path": "/v1/admin/ai-connections/{connection_id}/test",
    "action": "test",
    "args": [
      {
        "name": "connection_id",
        "wire": "connection_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "status": "verified",
      "connection": {
        "id": "x",
        "provider": "openai",
        "label": "x",
        "status": "pending",
        "verified_at": "x",
        "last_probe_at": "x",
        "last_error_code": "x",
        "created_at": "x",
        "updated_at": "x"
      },
      "probe": {
        "checked_at": "x",
        "latency_ms": 1
      }
    },
    "idField": "id"
  },
  {
    "entity": "operation",
    "accessor": "Operation",
    "op": "create",
    "method": "POST",
    "path": "/v1/admin/coupons/{coupon_id}",
    "args": [
      {
        "name": "coupon_id",
        "wire": "coupon_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {},
    "idField": "id"
  },
  {
    "entity": "operation",
    "accessor": "Operation",
    "op": "create",
    "method": "POST",
    "path": "/v1/admin/deals/{deal_id}/moderate",
    "args": [
      {
        "name": "deal_id",
        "wire": "deal_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "x-loppee-api-key"
        }
      ]
    ],
    "status": 200,
    "sample": {},
    "idField": "id"
  },
  {
    "entity": "operation",
    "accessor": "Operation",
    "op": "create",
    "method": "POST",
    "path": "/v1/admin/ads/review/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "x-loppee-api-key"
        }
      ]
    ],
    "status": 200,
    "sample": {},
    "idField": "id"
  },
  {
    "entity": "operation",
    "accessor": "Operation",
    "op": "create",
    "method": "POST",
    "path": "/v1/admin/team/invites/{invite_id}/revoke",
    "args": [
      {
        "name": "invite_id",
        "wire": "invite_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {},
    "idField": "id"
  },
  {
    "entity": "operation",
    "accessor": "Operation",
    "op": "create",
    "method": "POST",
    "path": "/v1/admin/switches/{key}",
    "args": [
      {
        "name": "key",
        "wire": "key",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {},
    "idField": "id"
  },
  {
    "entity": "operation",
    "accessor": "Operation",
    "op": "create",
    "method": "POST",
    "path": "/v1/admin/license-record-reports/{report_id}/resolve",
    "args": [
      {
        "name": "license_record_report_id",
        "wire": "report_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "report_id": 1,
      "status": "kept_hidden"
    },
    "idField": "id"
  },
  {
    "entity": "operation",
    "accessor": "Operation",
    "op": "create",
    "method": "POST",
    "path": "/v1/admin/v3/manual-verification-submissions/{submission_id}/decision",
    "args": [
      {
        "name": "manual_verification_submission_id",
        "wire": "submission_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "x-loppee-api-key"
        }
      ]
    ],
    "status": 200,
    "sample": {},
    "idField": "id"
  },
  {
    "entity": "operation",
    "accessor": "Operation",
    "op": "create",
    "method": "POST",
    "path": "/v1/admin/assistant-provider/{provider}/test",
    "action": "test",
    "args": [
      {
        "name": "provider",
        "wire": "provider",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "status": "checked",
      "provider": "gemini",
      "key_check": "passed",
      "checked_at": "x"
    },
    "idField": "id"
  },
  {
    "entity": "operation",
    "accessor": "Operation",
    "op": "create",
    "method": "POST",
    "path": "/v1/admin/v3/review-anomalies/{flag_id}/resolve",
    "args": [
      {
        "name": "review_anomaly_id",
        "wire": "flag_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "x-loppee-api-key"
        }
      ]
    ],
    "status": 200,
    "sample": {},
    "idField": "id"
  },
  {
    "entity": "operation",
    "accessor": "Operation",
    "op": "create",
    "method": "POST",
    "path": "/v1/admin/reviews/{review_id}/moderate",
    "args": [
      {
        "name": "review_id",
        "wire": "review_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "x-loppee-api-key"
        }
      ]
    ],
    "status": 200,
    "sample": {},
    "idField": "id"
  },
  {
    "entity": "operation",
    "accessor": "Operation",
    "op": "create",
    "method": "POST",
    "path": "/v1/admin/service-accounts/{account_id}/status",
    "args": [
      {
        "name": "service_account_id",
        "wire": "account_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {},
    "idField": "id"
  },
  {
    "entity": "operation",
    "accessor": "Operation",
    "op": "create",
    "method": "POST",
    "path": "/v1/admin/team/members/{user_id}",
    "args": [
      {
        "name": "user_id",
        "wire": "user_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {},
    "idField": "id"
  },
  {
    "entity": "operation",
    "accessor": "Operation",
    "op": "create",
    "method": "POST",
    "path": "/v1/admin/team/members/{user_id}/remove",
    "action": "remove",
    "args": [
      {
        "name": "user_id",
        "wire": "user_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {},
    "idField": "id"
  },
  {
    "entity": "operation",
    "accessor": "Operation",
    "op": "create",
    "method": "POST",
    "path": "/v1/admin/ops/worker-tasks/{task_id}/control",
    "args": [
      {
        "name": "worker_task_id",
        "wire": "task_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "x-loppee-api-key"
        }
      ]
    ],
    "status": 200,
    "sample": {},
    "idField": "id"
  },
  {
    "entity": "operation",
    "accessor": "Operation",
    "op": "patch",
    "method": "PATCH",
    "path": "/v1/admin/ops/duplicate-candidates/{candidate_id}",
    "args": [
      {
        "name": "candidate_id",
        "wire": "candidate_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "x-loppee-api-key"
        }
      ]
    ],
    "status": 200,
    "sample": {},
    "idField": "id"
  },
  {
    "entity": "operation",
    "accessor": "Operation",
    "op": "patch",
    "method": "PATCH",
    "path": "/v1/admin/ops/category-mappings/{mapping_id}",
    "args": [
      {
        "name": "mapping_id",
        "wire": "mapping_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "x-loppee-api-key"
        }
      ]
    ],
    "status": 200,
    "sample": {},
    "idField": "id"
  },
  {
    "entity": "operation",
    "accessor": "Operation",
    "op": "patch",
    "method": "PATCH",
    "path": "/v1/admin/ops/quality-signals/{signal_id}",
    "args": [
      {
        "name": "signal_id",
        "wire": "signal_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "x-loppee-api-key"
        }
      ]
    ],
    "status": 200,
    "sample": {},
    "idField": "id"
  },
  {
    "entity": "operation",
    "accessor": "Operation",
    "op": "patch",
    "method": "PATCH",
    "path": "/v1/admin/verification-cases/{business_id}/management",
    "args": [
      {
        "name": "verification_case_id",
        "wire": "business_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "x-loppee-api-key"
        }
      ]
    ],
    "status": 200,
    "sample": {},
    "idField": "id"
  },
  {
    "entity": "operation",
    "accessor": "Operation",
    "op": "remove",
    "method": "DELETE",
    "path": "/v1/admin/support/{conversation_id}/ai-drafts/{draft_id}",
    "args": [
      {
        "name": "draft_id",
        "wire": "draft_id",
        "value": "p1"
      },
      {
        "name": "support_id",
        "wire": "conversation_id",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "status": "x",
      "draft_id": "x",
      "conversation_id": "x",
      "discarded_text_will_not_be_used": true
    },
    "idField": "id"
  },
  {
    "entity": "operation",
    "accessor": "Operation",
    "op": "remove",
    "method": "DELETE",
    "path": "/v1/admin/access-contexts/{access_context_id}",
    "args": [
      {
        "name": "access_context_id",
        "wire": "access_context_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "x-loppee-api-key"
        }
      ]
    ],
    "status": 200,
    "sample": {},
    "idField": "id"
  },
  {
    "entity": "operation",
    "accessor": "Operation",
    "op": "remove",
    "method": "DELETE",
    "path": "/v1/admin/ai-connections/{connection_id}",
    "args": [
      {
        "name": "connection_id",
        "wire": "connection_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "status": "x",
      "connection_id": "x"
    },
    "idField": "id"
  },
  {
    "entity": "operation",
    "accessor": "Operation",
    "op": "remove",
    "method": "DELETE",
    "path": "/v1/admin/coupons/{coupon_id}",
    "args": [
      {
        "name": "coupon_id",
        "wire": "coupon_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {},
    "idField": "id"
  },
  {
    "entity": "operation",
    "accessor": "Operation",
    "op": "remove",
    "method": "DELETE",
    "path": "/v1/admin/assistant-provider/{provider}",
    "args": [
      {
        "name": "provider",
        "wire": "provider",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "schema_version": "1.0",
      "assistant_enabled": true,
      "storage": "available",
      "in_use": {
        "source": "back_office",
        "label": "x",
        "model": "x"
      },
      "providers": [
        {
          "provider": "gemini",
          "label": "x",
          "model": "x",
          "base_url": "x",
          "is_active": true,
          "key_stored": true,
          "key_set_at": "x",
          "updated_at": "x"
        }
      ],
      "catalog": [
        {
          "id": "gemini",
          "label": "x",
          "default_model": "x",
          "suggested_models": [
            "x"
          ],
          "key_page": "x",
          "free_tier": true,
          "data_use_note": "x",
          "needs_address": true
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "operation",
    "accessor": "Operation",
    "op": "remove",
    "method": "DELETE",
    "path": "/v1/admin/ai-workload-bindings/{workload}",
    "args": [
      {
        "name": "workload",
        "wire": "workload",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "status": "x",
      "workload": "backoffice"
    },
    "idField": "id"
  },
  {
    "entity": "operation",
    "accessor": "Operation",
    "op": "update",
    "method": "PUT",
    "path": "/v1/admin/assistant-provider/{provider}",
    "args": [
      {
        "name": "provider",
        "wire": "provider",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "status": "saved",
      "settings": {
        "schema_version": "1.0",
        "assistant_enabled": true,
        "storage": "available",
        "in_use": {
          "source": "back_office",
          "label": "x",
          "model": "x"
        },
        "providers": [
          {
            "provider": "gemini",
            "label": "x",
            "model": "x",
            "base_url": "x",
            "is_active": true,
            "key_stored": true,
            "key_set_at": "x",
            "updated_at": "x"
          }
        ],
        "catalog": [
          {
            "id": "gemini",
            "label": "x",
            "default_model": "x",
            "suggested_models": [
              "x"
            ],
            "key_page": "x",
            "free_tier": true,
            "data_use_note": "x",
            "needs_address": true
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "operation",
    "accessor": "Operation",
    "op": "update",
    "method": "PUT",
    "path": "/v1/admin/ai-workload-bindings/{workload}",
    "args": [
      {
        "name": "workload",
        "wire": "workload",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "status": "x",
      "binding": {
        "workload": "backoffice",
        "connection_id": "x",
        "provider": "openai",
        "model_id": "x",
        "enabled": true,
        "updated_at": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "owner_notification",
    "accessor": "OwnerNotification",
    "op": "create",
    "method": "POST",
    "path": "/v1/owner/notifications/{notification_id}/read",
    "args": [
      {
        "name": "notification_id",
        "wire": "notification_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "notification": {
        "id": "x",
        "businessId": "x",
        "eventType": "customer_message",
        "resourceKind": "customer_message",
        "resourceId": "x",
        "summary": "x",
        "resourceUrl": "x",
        "emailStatus": "x",
        "webhookStatus": "x",
        "dedupeKey": "x",
        "readAt": "x",
        "createdAt": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "owner_notification_setting",
    "accessor": "OwnerNotificationSetting",
    "op": "create",
    "method": "POST",
    "path": "/v1/owner/notification-settings",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "settings": {
        "businessId": "x",
        "emailEnabled": true,
        "webhookEnabled": true,
        "eventTypeSubscriptions": [
          "x"
        ],
        "createdAt": "x",
        "updatedAt": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "owner_webhook_endpoint",
    "accessor": "OwnerWebhookEndpoint",
    "op": "create",
    "method": "POST",
    "path": "/v1/owner/webhooks/{endpoint_id}/disable",
    "args": [
      {
        "name": "webhook_id",
        "wire": "endpoint_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "endpoint": {
        "id": "x",
        "businessId": "x",
        "url": "x",
        "eventTypeSubscriptions": [
          "x"
        ],
        "enabled": true,
        "failureCount": 1,
        "lastDeliveryAt": "x",
        "createdAt": "x",
        "updatedAt": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "owner_webhook_registration",
    "accessor": "OwnerWebhookRegistration",
    "op": "create",
    "method": "POST",
    "path": "/v1/owner/webhooks/{endpoint_id}/rotate-secret",
    "args": [
      {
        "name": "webhook_id",
        "wire": "endpoint_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "status": "registered",
      "endpoint": {
        "id": "x",
        "businessId": "x",
        "url": "x",
        "eventTypeSubscriptions": [
          "x"
        ],
        "enabled": true,
        "failureCount": 1,
        "lastDeliveryAt": "x",
        "createdAt": "x",
        "updatedAt": "x"
      },
      "signing_secret": "x"
    },
    "idField": "id"
  },
  {
    "entity": "owner_webhook_registration",
    "accessor": "OwnerWebhookRegistration",
    "op": "create",
    "method": "POST",
    "path": "/v1/owner/webhooks",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "status": "registered",
      "endpoint": {
        "id": "x",
        "businessId": "x",
        "url": "x",
        "eventTypeSubscriptions": [
          "x"
        ],
        "enabled": true,
        "failureCount": 1,
        "lastDeliveryAt": "x",
        "createdAt": "x",
        "updatedAt": "x"
      },
      "signing_secret": "x"
    },
    "idField": "id"
  },
  {
    "entity": "pricing",
    "accessor": "Pricing",
    "op": "list",
    "method": "GET",
    "path": "/v1/pricing",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "generated_at": "2026-01-01T00:00:00Z",
      "source": "published",
      "revision_id": "x",
      "published_at": "x",
      "billing": {
        "periods": [
          "monthly"
        ],
        "annual_paid_months": 1,
        "annual_rule": "x"
      },
      "plans": [
        {
          "key": "free",
          "name": "x",
          "tagline": "x",
          "reach_label": "x",
          "monthly_usd": 1,
          "annual_usd": 1,
          "features": [
            "x"
          ],
          "badge": "x",
          "unlocks_deals": true,
          "promo": {
            "id": "x",
            "label": "x",
            "banner_text": "x",
            "coupon_code": "x",
            "applies_to_period": "all",
            "ends_at": "x",
            "promo_monthly_usd": 1,
            "promo_annual_usd": 1
          }
        }
      ],
      "branch_add_ons": [
        {
          "radius_max_miles": 1,
          "monthly_usd": 1,
          "annual_usd": 1
        }
      ],
      "radius_extension": {
        "beyond_miles": 1,
        "max_miles": 1,
        "per_mile_monthly_usd": 1
      },
      "promotions": [
        {
          "id": "x",
          "label": "x",
          "banner_text": "x",
          "discount_type": "percent",
          "percent_off": 1,
          "amount_off_usd": 1,
          "coupon_code": "x",
          "applies_to_period": "all",
          "applies_to_tiers": [
            "x"
          ],
          "starts_at": "x",
          "ends_at": "x"
        }
      ],
      "neutrality": "x"
    },
    "idField": "id"
  },
  {
    "entity": "promote_verified_transaction",
    "accessor": "PromoteVerifiedTransaction",
    "op": "create",
    "method": "POST",
    "path": "/v1/actions/promote-verified-transaction",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "business_id": "x",
      "interaction_id": "x",
      "review_upgraded": true,
      "evidence_id": "x"
    },
    "idField": "id"
  },
  {
    "entity": "public_content",
    "accessor": "PublicContent",
    "op": "load",
    "method": "GET",
    "path": "/v1/content",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "generated_at": "2026-01-01T00:00:00Z",
      "source": "cms",
      "blocks": {}
    },
    "idField": "id"
  },
  {
    "entity": "recommend",
    "accessor": "Recommend",
    "op": "list",
    "method": "GET",
    "path": "/v1/recommend",
    "args": [],
    "select": {
      "allowed_action": "v1",
      "category": "v1",
      "city": "v1",
      "limit": 10,
      "location_handoff_id": "v1",
      "location_proof_id": "v1",
      "location_selection": "v1",
      "q": "v1",
      "radius_mile": "v1",
      "saved_location_ref": "v1",
      "state": "v1",
      "zip": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "q",
      "category",
      "city",
      "state",
      "zip",
      "radius_miles",
      "allowed_action",
      "location_selection",
      "saved_location_ref",
      "location_handoff_id",
      "location_proof_id",
      "limit"
    ],
    "queryArgs": [
      {
        "name": "allowed_action",
        "wire": "allowed_action"
      },
      {
        "name": "category",
        "wire": "category"
      },
      {
        "name": "city",
        "wire": "city"
      },
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "location_handoff_id",
        "wire": "location_handoff_id"
      },
      {
        "name": "location_proof_id",
        "wire": "location_proof_id"
      },
      {
        "name": "location_selection",
        "wire": "location_selection"
      },
      {
        "name": "q",
        "wire": "q"
      },
      {
        "name": "radius_mile",
        "wire": "radius_miles"
      },
      {
        "name": "saved_location_ref",
        "wire": "saved_location_ref"
      },
      {
        "name": "state",
        "wire": "state"
      },
      {
        "name": "zip",
        "wire": "zip"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "revoke",
    "accessor": "Revoke",
    "op": "create",
    "method": "POST",
    "path": "/v1/admin/agent-keys/{key_id}/revoke",
    "args": [
      {
        "name": "agent_key_id",
        "wire": "key_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "revoked_by": "x",
      "key_id": "x",
      "account_id": "x"
    },
    "idField": "id"
  },
  {
    "entity": "save_business",
    "accessor": "SaveBusiness",
    "op": "create",
    "method": "POST",
    "path": "/v1/actions/save-business",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "x-loppee-api-key"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "saved_business_id": "x",
      "business_id": "x",
      "account_id": "x",
      "created_at": "x"
    },
    "idField": "id"
  },
  {
    "entity": "saved_business",
    "accessor": "SavedBusiness",
    "op": "create",
    "method": "POST",
    "path": "/v1/actions/list-saved-businesses",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "x-loppee-api-key"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "account_id": "x",
      "count": 1,
      "saved_businesses": [
        {
          "business_id": "x",
          "business_name": "x",
          "business_source": "x",
          "category": "x",
          "city": "x",
          "state": "x",
          "notes": "x",
          "saved_at": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "saved_location",
    "accessor": "SavedLocation",
    "op": "remove",
    "method": "DELETE",
    "path": "/v1/account/location",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "available": true,
      "saved_location_ref": "x",
      "label": "x",
      "kind": "saved_exact",
      "reach_precision": "exact",
      "updated_at": "2026-01-01T00:00:00Z"
    },
    "idField": "id"
  },
  {
    "entity": "saved_location",
    "accessor": "SavedLocation",
    "op": "update",
    "method": "PUT",
    "path": "/v1/account/location",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "available": true,
      "saved_location_ref": "x",
      "label": "x",
      "kind": "saved_exact",
      "reach_precision": "exact",
      "updated_at": "2026-01-01T00:00:00Z"
    },
    "idField": "id"
  },
  {
    "entity": "search",
    "accessor": "Search",
    "op": "list",
    "method": "GET",
    "path": "/v1/business-claim/candidates",
    "args": [],
    "select": {
      "q": "Elite AC LLC",
      "city": "v1",
      "limit": "v1",
      "state": "v1",
      "zip": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "q",
      "city",
      "state",
      "zip",
      "limit"
    ],
    "queryArgs": [
      {
        "name": "city",
        "wire": "city"
      },
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "q",
        "wire": "q"
      },
      {
        "name": "state",
        "wire": "state"
      },
      {
        "name": "zip",
        "wire": "zip"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "search",
    "accessor": "Search",
    "op": "list",
    "method": "GET",
    "path": "/v1/search",
    "args": [],
    "select": {
      "category": "v1",
      "city": "v1",
      "consumer_reach": "v1",
      "cursor": "v1",
      "include_directory_listing": "v1",
      "intent": "v1",
      "limit": 10,
      "location_handoff_id": "v1",
      "location_proof_id": "v1",
      "location_selection": "v1",
      "paid_only": "v1",
      "radius_mile": "v1",
      "saved_location_ref": "v1",
      "search_intent": "v1",
      "state": "v1",
      "zip": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "q",
      "category",
      "intent",
      "search_intent",
      "city",
      "state",
      "zip",
      "radius_miles",
      "include_directory_listings",
      "paid_only",
      "consumer_reach",
      "location_selection",
      "saved_location_ref",
      "location_handoff_id",
      "location_proof_id",
      "cursor",
      "limit"
    ],
    "queryArgs": [
      {
        "name": "category",
        "wire": "category"
      },
      {
        "name": "city",
        "wire": "city"
      },
      {
        "name": "consumer_reach",
        "wire": "consumer_reach"
      },
      {
        "name": "cursor",
        "wire": "cursor"
      },
      {
        "name": "include_directory_listing",
        "wire": "include_directory_listings"
      },
      {
        "name": "intent",
        "wire": "intent"
      },
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "location_handoff_id",
        "wire": "location_handoff_id"
      },
      {
        "name": "location_proof_id",
        "wire": "location_proof_id"
      },
      {
        "name": "location_selection",
        "wire": "location_selection"
      },
      {
        "name": "paid_only",
        "wire": "paid_only"
      },
      {
        "name": "radius_mile",
        "wire": "radius_miles"
      },
      {
        "name": "saved_location_ref",
        "wire": "saved_location_ref"
      },
      {
        "name": "search_intent",
        "wire": "search_intent"
      },
      {
        "name": "state",
        "wire": "state"
      },
      {
        "name": "zip",
        "wire": "zip"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "suggest",
    "accessor": "Suggest",
    "op": "list",
    "method": "GET",
    "path": "/v1/suggest",
    "args": [],
    "select": {
      "q": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "q"
    ],
    "queryArgs": [
      {
        "name": "q",
        "wire": "q"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "query": "x",
      "names": [
        {
          "query": "x",
          "display_name": "x"
        }
      ],
      "categories": [
        {
          "alias": "x",
          "title": "x",
          "path_titles": [
            "x"
          ]
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "support_internal_note",
    "accessor": "SupportInternalNote",
    "op": "create",
    "method": "POST",
    "path": "/v1/admin/support/{conversation_id}/internal-notes",
    "args": [
      {
        "name": "id",
        "wire": "conversation_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "note": {
        "id": "x",
        "body": "x",
        "authorLabel": "x",
        "createdAt": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "support_workflow",
    "accessor": "SupportWorkflow",
    "op": "create",
    "method": "POST",
    "path": "/v1/admin/support/{conversation_id}/workflow",
    "args": [
      {
        "name": "id",
        "wire": "conversation_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "conversation": {}
    },
    "idField": "id"
  },
  {
    "entity": "taxonomy_suggestion",
    "accessor": "TaxonomySuggestion",
    "op": "list",
    "method": "GET",
    "path": "/v1/taxonomy/suggest",
    "args": [],
    "select": {
      "limit": "v1",
      "q": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "q",
      "limit"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "q",
        "wire": "q"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "schema_version": "x",
      "query": "x",
      "normalized_query": "x",
      "corrected_query": "x",
      "count": 1,
      "max_picks": 1,
      "suggestions": [
        {
          "alias": "x",
          "title": "x",
          "path_titles": [
            "x"
          ]
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "trust_card",
    "accessor": "TrustCard",
    "op": "create",
    "method": "POST",
    "path": "/v1/businesses/{business_id}/license-records/{fact_id}/report",
    "args": [
      {
        "name": "business_id",
        "wire": "business_id",
        "value": "p1"
      },
      {
        "name": "license_record_id",
        "wire": "fact_id",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "result": "x"
    },
    "idField": "id"
  },
  {
    "entity": "trust_card",
    "accessor": "TrustCard",
    "op": "load",
    "method": "GET",
    "path": "/v1/businesses/{business_id}/trust-card.json",
    "args": [
      {
        "name": "business_id",
        "wire": "business_id",
        "value": "biz_elite_ac_llc_jacksonville_fl"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "business_id": "x",
      "display_name": "x",
      "domain": "x",
      "category": [
        "x"
      ],
      "city": "x",
      "state": "x",
      "website": "x",
      "phone": "x",
      "verification_class": "verified",
      "verification_disclosure": "Loppee completed this business's registration, professional license, and contact checks.",
      "trust_card_url": "x",
      "public_profile_url": "x",
      "verification_valid_until": "x",
      "commercial_disclosure": "x",
      "legal_name": "x",
      "primary_category": "x",
      "services": [
        "x"
      ],
      "service_areas": [
        "x"
      ],
      "locations": [
        {
          "label": "x",
          "street_address": "x",
          "city": "x",
          "state": "x",
          "zip": "x",
          "is_primary": true,
          "reach_radius_miles": 1
        }
      ],
      "hours": {},
      "reviews": [],
      "active_deals": [
        {}
      ],
      "commercial": {
        "status": "x",
        "exposure_tier": "x"
      },
      "allowed_actions": [
        "x"
      ],
      "requires_human_confirmation": [
        "x"
      ],
      "insurance": {
        "stated_expires_at": "x"
      },
      "brand_assets": {
        "logo_url": "x",
        "hero_image_url": "x",
        "gallery_image_urls": [
          "x"
        ],
        "hero_alt": "x",
        "source": "x"
      },
      "citation": {},
      "schema_org": {},
      "updated_at": "x"
    },
    "idField": "id"
  },
  {
    "entity": "trust_card",
    "accessor": "TrustCard",
    "op": "load",
    "method": "GET",
    "path": "/v1/schemas/{schema_name}",
    "args": [
      {
        "name": "schema_name",
        "wire": "schema_name",
        "value": "trust-card.schema.json"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {},
    "idField": "id"
  },
  {
    "entity": "unsave_business",
    "accessor": "UnsaveBusiness",
    "op": "create",
    "method": "POST",
    "path": "/v1/actions/unsave-business",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "x-loppee-api-key"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "account_id": "x",
      "business_id": "x",
      "removed": true
    },
    "idField": "id"
  },
  {
    "entity": "update_agent_billing_account",
    "accessor": "UpdateAgentBillingAccount",
    "op": "create",
    "method": "POST",
    "path": "/v1/admin/agent-billing-accounts",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "x-loppee-api-key"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "updated_by": "x",
      "billing_account": {}
    },
    "idField": "id"
  },
  {
    "entity": "withdraw_job_application",
    "accessor": "WithdrawJobApplication",
    "op": "create",
    "method": "POST",
    "path": "/v1/actions/withdraw-job-application",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "x-loppee-api-key"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "already_withdrawn": true,
      "application": {
        "id": "x",
        "job_id": "x",
        "applicant_name": "x",
        "submitted_via": "human",
        "status": "submitted",
        "has_resume": true,
        "resume_scan_status": "unscanned",
        "resume_latest_scan_status": "unscanned",
        "resume_replacement_pending": true,
        "resume_retry_required": true,
        "resume_replacement_retry_available": true,
        "job": {
          "id": "x",
          "title": "x",
          "status": "x",
          "city": "x",
          "state": "x",
          "business_id": "x"
        },
        "employer": {
          "business_id": "x",
          "display_name": "x",
          "category": "x",
          "city": "x",
          "state": "x"
        },
        "created_at": "x",
        "status_updated_at": "x"
      }
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
