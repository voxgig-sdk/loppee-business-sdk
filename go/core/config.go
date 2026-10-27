package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "LoppeeBusiness",
			"slug": "loppee-business",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"now": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "https://loppee.com",
			"auth": map[string]any{
				"prefix": "",
				"name": "X-LOPPEE-API-Key",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"agent_access": map[string]any{},
				"agent_capability": map[string]any{},
				"agent_connection_test": map[string]any{},
				"agent_integration": map[string]any{},
				"agent_monitoring": map[string]any{},
				"agent_openapi": map[string]any{},
				"agent_policy": map[string]any{},
				"anonymous_location_proof_revocation": map[string]any{},
				"business_application": map[string]any{},
				"business_claim": map[string]any{},
				"business_deal": map[string]any{},
				"business_index": map[string]any{},
				"business_owner": map[string]any{},
				"business_review": map[string]any{},
				"chat_attachment": map[string]any{},
				"chat_attachment_url": map[string]any{},
				"claim_verification_send": map[string]any{},
				"claim_verification_verify": map[string]any{},
				"commercial_click": map[string]any{},
				"contact_recorded": map[string]any{},
				"conversation": map[string]any{},
				"conversation_close": map[string]any{},
				"conversation_report": map[string]any{},
				"conversation_workflow": map[string]any{},
				"create_agent_api_key": map[string]any{},
				"customer": map[string]any{},
				"customer_account": map[string]any{},
				"customer_location_proof_revocation": map[string]any{},
				"destination_address_suggestion": map[string]any{},
				"destination_location_proof": map[string]any{},
				"domain_trust_card": map[string]any{},
				"geo_context": map[string]any{},
				"health": map[string]any{},
				"job_application": map[string]any{},
				"job_resume_signed_url": map[string]any{},
				"location_handoff": map[string]any{},
				"message": map[string]any{},
				"moderated_action": map[string]any{},
				"open_api_document": map[string]any{},
				"operation": map[string]any{},
				"owner_notification": map[string]any{},
				"owner_notification_setting": map[string]any{},
				"owner_webhook_endpoint": map[string]any{},
				"owner_webhook_registration": map[string]any{},
				"pricing": map[string]any{},
				"promote_verified_transaction": map[string]any{},
				"public_content": map[string]any{},
				"recommend": map[string]any{},
				"review": map[string]any{},
				"revoke": map[string]any{},
				"save_business": map[string]any{},
				"saved_business": map[string]any{},
				"saved_location": map[string]any{},
				"search": map[string]any{},
				"suggest": map[string]any{},
				"support_internal_note": map[string]any{},
				"support_workflow": map[string]any{},
				"taxonomy_suggestion": map[string]any{},
				"trust_card": map[string]any{},
				"unsave_business": map[string]any{},
				"update_agent_billing_account": map[string]any{},
				"withdraw_job_application": map[string]any{},
			},
		},
		"entity": map[string]any{
			"agent_access": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "agent_name",
						"title": "Agent Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "agent_type",
						"title": "Agent Type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "callback_url",
						"title": "Callback Url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "compliance_notes",
						"title": "Compliance Notes",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "data_needs",
						"title": "Data Needs",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "developer_email",
						"title": "Developer Email",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "operating_states",
						"title": "Operating States",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "organization_name",
						"title": "Organization Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "request_id",
						"title": "Request Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "request_status",
						"title": "Request Status",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "requested_actions",
						"title": "Requested Actions",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "safety_contact",
						"title": "Safety Contact",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "target_categories",
						"title": "Target Categories",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "use_case",
						"title": "Use Case",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "website",
						"title": "Website",
						"type": "`$STRING`",
					},
				},
				"name": "agent_access",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/actions/agent-access-request",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"lit": "agent-access-request",
									},
								},
								"parts": []any{
									"v1",
									"actions",
									"agent-access-request",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"agent_name": "`reqdata.agent_name`",
										"agent_type": "`reqdata.agent_type`",
										"callback_url": "`reqdata.callback_url`",
										"compliance_notes": "`reqdata.compliance_note`",
										"data_needs": "`reqdata.data_need`",
										"developer_email": "`reqdata.developer_email`",
										"operating_states": "`reqdata.operating_state`",
										"organization_name": "`reqdata.organization_name`",
										"requested_actions": "`reqdata.requested_action`",
										"safety_contact": "`reqdata.safety_contact`",
										"target_categories": "`reqdata.target_category`",
										"use_case": "`reqdata.use_case`",
										"website": "`reqdata.website`",
									},
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"agent_capability": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "agent_phone_location_bridge",
						"title": "Agent Phone Location Bridge",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "agent_rules",
						"title": "Agent Rules",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "discovery",
						"title": "Discovery",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "external_agent_access",
						"title": "External Agent Access",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "external_agent_webhooks",
						"title": "External Agent Webhooks",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "local_discovery_location_policy",
						"title": "Local Discovery Location Policy",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "location_choices",
						"title": "Location Choices",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "registry_name",
						"title": "Registry Name",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "schema_version",
						"title": "Schema Version",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "trust_model_version",
						"title": "Trust Model Version",
						"type": "`$ANY`",
						"req": true,
					},
				},
				"name": "agent_capability",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v1/agent-capabilities.json",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "agent-capabilities.json",
									},
								},
								"parts": []any{
									"v1",
									"agent-capabilities.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"agent_connection_test": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "key",
						"title": "Key",
						"type": "`$STRING`",
						"short": "Optional UI fallback.",
					},
				},
				"name": "agent_connection_test",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/actions/agent-connection-test",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"lit": "agent-connection-test",
									},
								},
								"parts": []any{
									"v1",
									"actions",
									"agent-connection-test",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"key": "`reqdata.key`",
									},
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_loppee_api_key",
											"orig": "X-LOPPEE-API-Key",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
								},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"agent_integration": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "auth_model",
						"title": "Auth Model",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "commercial_influence",
						"title": "Commercial Influence",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "developer_docs_url",
						"title": "Developer Docs Url",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "exposure_tiers",
						"title": "Exposure Tiers",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "external_agent_access",
						"title": "External Agent Access",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "generated_at",
						"title": "Generated At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "http_api",
						"title": "Http Api",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "legal",
						"title": "Legal",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "mcp",
						"title": "Mcp",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "mcp_client_example_url",
						"title": "Mcp Client Example Url",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "monitoring_url",
						"title": "Monitoring Url",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "openapi_url",
						"title": "Openapi Url",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "openapi_v1_url",
						"title": "Openapi V1 Url",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "operational_rules",
						"title": "Operational Rules",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "owner_agent_notifications",
						"title": "Owner Agent Notifications",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "package_url",
						"title": "Package Url",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "public_base_url",
						"title": "Public Base Url",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "rate_limits",
						"title": "Rate Limits",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "registry_name",
						"title": "Registry Name",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "schema_version",
						"title": "Schema Version",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "trust_card_contract",
						"title": "Trust Card Contract",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "trust_doctrine",
						"title": "Trust Doctrine",
						"type": "`$OBJECT`",
						"req": true,
					},
				},
				"name": "agent_integration",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v1/agent-integration.json",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "agent-integration.json",
									},
								},
								"parts": []any{
									"v1",
									"agent-integration.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"agent_monitoring": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "build_sha",
						"title": "Build Sha",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "contract_version",
						"title": "Contract Version",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "generated_at",
						"title": "Generated At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "health_url",
						"title": "Health Url",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "integration_package_url",
						"title": "Integration Package Url",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "mcp_url",
						"title": "Mcp Url",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "metrics",
						"title": "Metrics",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "openapi_url",
						"title": "Openapi Url",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "rate_limits",
						"title": "Rate Limits",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "registry_name",
						"title": "Registry Name",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "schema_version",
						"title": "Schema Version",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "service",
						"title": "Service",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "uptime_seconds",
						"title": "Uptime Seconds",
						"type": "`$NUMBER`",
						"req": true,
					},
					map[string]any{
						"name": "version",
						"title": "Version",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"name": "agent_monitoring",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v1/agent-monitoring.json",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "agent-monitoring.json",
									},
								},
								"parts": []any{
									"v1",
									"agent-monitoring.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"agent_openapi": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "components",
						"title": "Components",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "info",
						"title": "Info",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "openapi",
						"title": "Openapi",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "paths",
						"title": "Paths",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "servers",
						"title": "Servers",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "tags",
						"title": "Tags",
						"type": "`$ARRAY`",
						"req": true,
					},
				},
				"name": "agent_openapi",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v1/agent-openapi.json",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "agent-openapi.json",
									},
								},
								"parts": []any{
									"v1",
									"agent-openapi.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"agent_policy": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "external_agent_access",
						"title": "External Agent Access",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "external_agent_webhooks",
						"title": "External Agent Webhooks",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "local_discovery_location_policy",
						"title": "Local Discovery Location Policy",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "location_handoff_flow",
						"title": "Location Handoff Flow",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "payment",
						"title": "Payment",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "publication",
						"title": "Publication",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "schema_version",
						"title": "Schema Version",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "trust_model_version",
						"title": "Trust Model Version",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "verification",
						"title": "Verification",
						"type": "`$OBJECT`",
						"req": true,
					},
				},
				"name": "agent_policy",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v1/agent-policy.json",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "agent-policy.json",
									},
								},
								"parts": []any{
									"v1",
									"agent-policy.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"anonymous_location_proof_revocation": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "accuracy_meters",
						"title": "Accuracy Meters",
						"type": "`$NUMBER`",
						"req": true,
					},
					map[string]any{
						"name": "captured_at",
						"title": "Captured At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "latitude",
						"title": "Latitude",
						"type": "`$NUMBER`",
						"req": true,
					},
					map[string]any{
						"name": "longitude",
						"title": "Longitude",
						"type": "`$NUMBER`",
						"req": true,
					},
				},
				"name": "anonymous_location_proof_revocation",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/location-proofs",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "location-proofs",
									},
								},
								"parts": []any{
									"v1",
									"location-proofs",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"accuracy_meters": "`reqdata.accuracy_meter`",
										"captured_at": "`reqdata.captured_at`",
										"latitude": "`reqdata.latitude`",
										"longitude": "`reqdata.longitude`",
									},
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/v1/location-proofs/{location_proof_id}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "location-proofs",
									},
									map[string]any{
										"var": "location_proof_id",
									},
								},
								"parts": []any{
									"v1",
									"location-proofs",
									"{location_proof_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "location_proof_id",
											"orig": "location_proof_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"location_proof_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"business_application": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "application",
						"title": "Application",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "application_id",
						"title": "Application Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "business_id",
						"title": "Business Id",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "claim_id",
						"title": "Claim Id",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "existing_business",
						"title": "Existing Business",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "files",
						"title": "Files",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "listing_id",
						"title": "Listing Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pipeline_status",
						"title": "Pipeline Status",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "trust_model_version",
						"title": "Trust Model Version",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "uploaded_files",
						"title": "Uploaded Files",
						"type": "`$NUMBER`",
						"req": true,
					},
				},
				"name": "business_application",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/actions/business-application",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"lit": "business-application",
									},
								},
								"parts": []any{
									"v1",
									"actions",
									"business-application",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"application": "`reqdata.application`",
										"business_id": "`reqdata.business_id`",
										"claim_id": "`reqdata.claim_id`",
										"files": "`reqdata.file`",
										"listing_id": "`reqdata.listing_id`",
									},
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"business_claim": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "business_id",
						"title": "Business Id",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "category",
						"title": "Category",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "city",
						"title": "City",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "claim_id",
						"title": "Claim Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "claim_status",
						"title": "Claim Status",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "claimant_email",
						"title": "Claimant Email",
						"type": "`$STRING`",
						"short": "Legacy field; authenticated owner identity wins.",
					},
					map[string]any{
						"name": "claimant_name",
						"title": "Claimant Name",
						"type": "`$STRING`",
						"short": "Legacy field; authenticated owner identity wins.",
					},
					map[string]any{
						"name": "claimant_relationship",
						"title": "Claimant Relationship",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "directory_listing_id",
						"title": "Directory Listing Id",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
					},
					map[string]any{
						"name": "display_name",
						"title": "Display Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "listing_id",
						"title": "Listing Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "notes",
						"title": "Notes",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "phone",
						"title": "Phone",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "source",
						"title": "Source",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "source_type",
						"title": "Source Type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "source_url",
						"title": "Source Url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "state",
						"title": "State",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "verification",
						"title": "Verification",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "website",
						"title": "Website",
						"type": "`$STRING`",
					},
				},
				"name": "business_claim",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/actions/business-claim",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"lit": "business-claim",
									},
								},
								"parts": []any{
									"v1",
									"actions",
									"business-claim",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"business_id": "`reqdata.business_id`",
										"category": "`reqdata.category`",
										"city": "`reqdata.city`",
										"claimant_email": "`reqdata.claimant_email`",
										"claimant_name": "`reqdata.claimant_name`",
										"claimant_relationship": "`reqdata.claimant_relationship`",
										"display_name": "`reqdata.display_name`",
										"listing_id": "`reqdata.listing_id`",
										"notes": "`reqdata.note`",
										"phone": "`reqdata.phone`",
										"source": "`reqdata.source`",
										"source_type": "`reqdata.source_type`",
										"source_url": "`reqdata.source_url`",
										"state": "`reqdata.state`",
										"website": "`reqdata.website`",
									},
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"business_deal": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "discountLabel",
						"title": "Discount Label",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "endsAt",
						"title": "Ends At",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "promoCode",
						"title": "Promo Code",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
					},
					map[string]any{
						"name": "startsAt",
						"title": "Starts At",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
					},
					map[string]any{
						"name": "terms",
						"title": "Terms",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
					},
					map[string]any{
						"name": "title",
						"title": "Title",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "business_deal",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v1/businesses/{business_id}/deals.json",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "businesses",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "deals.json",
									},
								},
								"parts": []any{
									"v1",
									"businesses",
									"{id}",
									"deals.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"business_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.deals`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "business_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "biz_elite_ac_llc_jacksonville_fl",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"business_index": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "brand_assets",
						"title": "Brand Assets",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "business_id",
						"title": "Business Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "category",
						"title": "Category",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "city",
						"title": "City",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "display_name",
						"title": "Display Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "domain",
						"title": "Domain",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
					},
					map[string]any{
						"name": "insurance",
						"title": "Insurance",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "phone",
						"title": "Phone",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
					},
					map[string]any{
						"name": "public_profile_url",
						"title": "Public Profile Url",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "review_reputation",
						"title": "Review Reputation",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "state",
						"title": "State",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "street_address",
						"title": "Street Address",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"short": "Owner-published street address where authorized.",
					},
					map[string]any{
						"name": "trust_card_url",
						"title": "Trust Card Url",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "trust_model_version",
						"title": "Trust Model Version",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "verification_class",
						"title": "Verification Class",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "verification_disclosure",
						"title": "Verification Disclosure",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "website",
						"title": "Website",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
					},
					map[string]any{
						"name": "zip",
						"title": "Zip",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"short": "Owner-published postal code where authorized.",
					},
				},
				"name": "business_index",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v1/businesses/index.json",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "businesses",
									},
									map[string]any{
										"lit": "index.json",
									},
								},
								"parts": []any{
									"v1",
									"businesses",
									"index.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.businesses`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$NUMBER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"business_owner": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "account_id",
						"title": "Account Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "account_role",
						"title": "Account Role",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "acknowledge_data_effects",
						"title": "Acknowledge Data Effects",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "actions",
						"title": "Actions",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "allowed_actions",
						"title": "Allowed Actions",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "amount_cents",
						"title": "Amount Cents",
						"type": "`$NUMBER`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$NUMBER`",
							},
						},
						"short": "Within the top-up limits (default $25 to $5,000).",
					},
					map[string]any{
						"name": "applicant_location_requirements",
						"title": "Applicant Location Requirements",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "apply_url",
						"title": "Apply Url",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "asset_id",
						"title": "Asset Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "assigneeId",
						"title": "Assignee Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "assigneeLabel",
						"title": "Assignee Label",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "assigneeType",
						"title": "Assignee Type",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "attempt_id",
						"title": "Attempt Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "benefits",
						"title": "Benefits",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "body",
						"title": "Body",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "businessId",
						"title": "Business Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "businessName",
						"title": "Business Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "business_id",
						"title": "Business Id",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "campaign",
						"title": "Campaign",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "campaign_id",
						"title": "Campaign Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "carrier_name",
						"title": "Carrier Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "category",
						"title": "Category",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "category_alias",
						"title": "Category Alias",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "category_aliases",
						"title": "Category Aliases",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "change",
						"title": "Change",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "city",
						"title": "City",
						"type": "`$STRING`",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "client_message_id",
						"title": "Client Message Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "code",
						"title": "Code",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "compensation_text",
						"title": "Compensation Text",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "confirm",
						"title": "Confirm",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "confirmation",
						"title": "Confirmation",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "connection_kind",
						"title": "Connection Kind",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "consent_sha256",
						"title": "Consent Sha256",
						"type": "`$STRING`",
						"req": true,
						"short": "SHA-256 of the acceptance text shown (from payment-authorizations).",
					},
					map[string]any{
						"name": "contact_email",
						"title": "Contact Email",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "content_type",
						"title": "Content Type",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "country",
						"title": "Country",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "coupon_code",
						"title": "Coupon Code",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "credential_id",
						"title": "Credential Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "credential_identifier",
						"title": "Credential Identifier",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "data_base64",
						"title": "Data Base64",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "delivery_contract",
						"title": "Delivery Contract",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "direct_apply",
						"title": "Direct Apply",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "disabled_reason",
						"title": "Disabled Reason",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
					},
					map[string]any{
						"name": "discount_label",
						"title": "Discount Label",
						"type": "`$STRING`",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "display_name",
						"title": "Display Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "employment_type",
						"title": "Employment Type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "enabled",
						"title": "Enabled",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "endpoint",
						"title": "Endpoint",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "endpoint_id",
						"title": "Endpoint Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "endpoint_url",
						"title": "Endpoint Url",
						"type": "`$STRING`",
						"req": true,
						"format": "uri",
					},
					map[string]any{
						"name": "ends_at",
						"title": "Ends At",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "event_id",
						"title": "Event Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "event_types",
						"title": "Event Types",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "evidence_observed_at",
						"title": "Evidence Observed At",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "expected_updated_at",
						"title": "Expected Updated At",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "experience_level",
						"title": "Experience Level",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "expires_at",
						"title": "Expires At",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "factor_id",
						"title": "Factor Id",
						"type": "`$STRING`",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "failure_count",
						"title": "Failure Count",
						"type": "`$INTEGER`",
						"req": true,
					},
					map[string]any{
						"name": "file_name",
						"title": "File Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "file_sha256",
						"title": "File Sha256",
						"type": "`$STRING`",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "full_name",
						"title": "Full Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "guideHandoffAnsweredAt",
						"title": "Guide Handoff Answered At",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "guideHandoffAt",
						"title": "Guide Handoff At",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "guideHandoffDueAt",
						"title": "Guide Handoff Due At",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "hours",
						"title": "Hours",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$OBJECT`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"format": "uuid",
					},
					map[string]any{
						"name": "idempotency_key",
						"title": "Idempotency Key",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "installation_id",
						"title": "Installation Id",
						"type": "`$STRING`",
						"req": true,
						"format": "uuid",
					},
					map[string]any{
						"name": "issuer",
						"title": "Issuer",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "jurisdiction",
						"title": "Jurisdiction",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "kind",
						"title": "Kind",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "label",
						"title": "Label",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "lastMessageAt",
						"title": "Last Message At",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
					},
					map[string]any{
						"name": "lastMessageAuthorType",
						"title": "Last Message Author Type",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "lastMessagePreview",
						"title": "Last Message Preview",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "last_delivery_at",
						"title": "Last Delivery At",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "launch",
						"title": "Launch",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "license_number",
						"title": "License Number",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messagesTruncated",
						"title": "Messages Truncated",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "monthly_cap_cents",
						"title": "Monthly Cap Cents",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "note",
						"title": "Note",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "one_time_display",
						"title": "One Time Display",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "ownerEmail",
						"title": "Owner Email",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "ownerLastReadAt",
						"title": "Owner Last Read At",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
					},
					map[string]any{
						"name": "ownerName",
						"title": "Owner Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "ownerUserId",
						"title": "Owner User Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "period",
						"title": "Period",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "phone",
						"title": "Phone",
						"type": "`$STRING`",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "platform",
						"title": "Platform",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "policy_number",
						"title": "Policy Number",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "postal_code",
						"title": "Postal Code",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "promo_code",
						"title": "Promo Code",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "push_token",
						"title": "Push Token",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "radius_miles",
						"title": "Radius Miles",
						"type": "`$NUMBER`",
						"req": true,
					},
					map[string]any{
						"name": "reason",
						"title": "Reason",
						"type": "`$STRING`",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "reason_category",
						"title": "Reason Category",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "reason_detail",
						"title": "Reason Detail",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "registered_at",
						"title": "Registered At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "request_id",
						"title": "Request Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Client id of this confirmation (8-100 characters); reuse it only to retry the same confirmation.",
					},
					map[string]any{
						"name": "requested_at",
						"title": "Requested At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "salary_currency",
						"title": "Salary Currency",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "salary_max",
						"title": "Salary Max",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "salary_min",
						"title": "Salary Min",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "salary_period",
						"title": "Salary Period",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "save_card",
						"title": "Save Card",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "save_card_consent_sha256",
						"title": "Save Card Consent Sha256",
						"type": "`$STRING`",
						"short": "Only with save_card true: SHA-256 of the save-card consent text shown.",
					},
					map[string]any{
						"name": "schedule",
						"title": "Schedule",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "service_areas",
						"title": "Service Areas",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "signing_secret",
						"title": "Signing Secret",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "size_bytes",
						"title": "Size Bytes",
						"type": "`$NUMBER`",
						"req": true,
					},
					map[string]any{
						"name": "skills",
						"title": "Skills",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "source_url",
						"title": "Source Url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "starts_at",
						"title": "Starts At",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "state",
						"title": "State",
						"type": "`$STRING`",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "stated_expires_at",
						"title": "Stated Expires At",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "street_address",
						"title": "Street Address",
						"type": "`$STRING`",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "subject",
						"title": "Subject",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "submitted_identifier",
						"title": "Submitted Identifier",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "supportLastReadAt",
						"title": "Support Last Read At",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
					},
					map[string]any{
						"name": "terms",
						"title": "Terms",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "terms_version",
						"title": "Terms Version",
						"type": "`$STRING`",
						"req": true,
						"short": "Must be the current Advertiser Terms version.",
					},
					map[string]any{
						"name": "threshold_cents",
						"title": "Threshold Cents",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "ticketNumber",
						"title": "Ticket Number",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "tier",
						"title": "Tier",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "title",
						"title": "Title",
						"type": "`$STRING`",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "total_job_openings",
						"title": "Total Job Openings",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "typing",
						"title": "Typing",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
					},
					map[string]any{
						"name": "updated_at",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
						"req": true,
						"short": "Public HTTPS receiver operated by the connecting principal or its agent runtime.",
						"format": "uri",
					},
					map[string]any{
						"name": "website",
						"title": "Website",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "workplace_type",
						"title": "Workplace Type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "zip",
						"title": "Zip",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "business_owner",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/agents/{agent_id}/disconnect",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "agents",
									},
									map[string]any{
										"var": "agent_id",
									},
									map[string]any{
										"lit": "disconnect",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"agents",
									"{agent_id}",
									"disconnect",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "agent_id",
											"orig": "agent_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"agent_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/agents/{agent_id}/permissions",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "agents",
									},
									map[string]any{
										"var": "agent_id",
									},
									map[string]any{
										"lit": "permissions",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"agents",
									"{agent_id}",
									"permissions",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"actions": "`reqdata.action`",
									},
									"res": "`body.agent`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "agent_id",
											"orig": "agent_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"agent_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/agents/{agent_id}/rotate-key",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "agents",
									},
									map[string]any{
										"var": "agent_id",
									},
									map[string]any{
										"lit": "rotate-key",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"agents",
									"{agent_id}",
									"rotate-key",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "agent_id",
											"orig": "agent_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"agent_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/agents/{agent_id}/webhook",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "agents",
									},
									map[string]any{
										"var": "agent_id",
									},
									map[string]any{
										"lit": "webhook",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"agents",
									"{agent_id}",
									"webhook",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"url": "`reqdata.url`",
									},
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "agent_id",
											"orig": "agent_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"agent_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/agents/{agent_id}/webhook/disable",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "agents",
									},
									map[string]any{
										"var": "agent_id",
									},
									map[string]any{
										"lit": "webhook",
									},
									map[string]any{
										"lit": "disable",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"agents",
									"{agent_id}",
									"webhook",
									"disable",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.endpoint`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "agent_id",
											"orig": "agent_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"agent_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/agents/{agent_id}/webhook/rotate-secret",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "agents",
									},
									map[string]any{
										"var": "agent_id",
									},
									map[string]any{
										"lit": "webhook",
									},
									map[string]any{
										"lit": "rotate-secret",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"agents",
									"{agent_id}",
									"webhook",
									"rotate-secret",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "agent_id",
											"orig": "agent_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"agent_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/agents/{agent_id}/webhook/test",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "agents",
									},
									map[string]any{
										"var": "agent_id",
									},
									map[string]any{
										"lit": "webhook",
									},
									map[string]any{
										"lit": "test",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"agents",
									"{agent_id}",
									"webhook",
									"test",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "agent_id",
											"orig": "agent_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"agent_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/ads/changes/{id}/confirm",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "ads",
									},
									map[string]any{
										"lit": "changes",
									},
									map[string]any{
										"var": "change_id",
									},
									map[string]any{
										"lit": "confirm",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"ads",
									"changes",
									"{change_id}",
									"confirm",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "change_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "change_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"change_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/ads/changes/{id}/reject",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "ads",
									},
									map[string]any{
										"lit": "changes",
									},
									map[string]any{
										"var": "change_id",
									},
									map[string]any{
										"lit": "reject",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"ads",
									"changes",
									"{change_id}",
									"reject",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "change_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "change_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"change_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/ads/changes/{id}/undo",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "ads",
									},
									map[string]any{
										"lit": "changes",
									},
									map[string]any{
										"var": "change_id",
									},
									map[string]any{
										"lit": "undo",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"ads",
									"changes",
									"{change_id}",
									"undo",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "change_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "change_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"change_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/conversations/{conversation_id}/read",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"var": "conversation_id",
									},
									map[string]any{
										"lit": "read",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"conversations",
									"{conversation_id}",
									"read",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "conversation_id",
											"orig": "conversation_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"conversation_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/deals/{deal_id}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "deals",
									},
									map[string]any{
										"var": "deal_id",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"deals",
									"{deal_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "deal_id",
											"orig": "deal_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"deal_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/deals/{deal_id}/delete",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "deals",
									},
									map[string]any{
										"var": "deal_id",
									},
									map[string]any{
										"lit": "delete",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"deals",
									"{deal_id}",
									"delete",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "deal_id",
											"orig": "deal_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "delete",
									"exist": []any{
										"deal_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/jobs/{job_id}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "jobs",
									},
									map[string]any{
										"var": "job_id",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"jobs",
									"{job_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "job_id",
											"orig": "job_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"job_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/jobs/{job_id}/checkout",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "jobs",
									},
									map[string]any{
										"var": "job_id",
									},
									map[string]any{
										"lit": "checkout",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"jobs",
									"{job_id}",
									"checkout",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "job_id",
											"orig": "job_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "checkout",
									"exist": []any{
										"job_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/jobs/{job_id}/delete",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "jobs",
									},
									map[string]any{
										"var": "job_id",
									},
									map[string]any{
										"lit": "delete",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"jobs",
									"{job_id}",
									"delete",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "job_id",
											"orig": "job_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "delete",
									"exist": []any{
										"job_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/locations/{location_id}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "locations",
									},
									map[string]any{
										"var": "location_id",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"locations",
									"{location_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "location_id",
											"orig": "location_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"location_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/locations/{location_id}/delete",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "locations",
									},
									map[string]any{
										"var": "location_id",
									},
									map[string]any{
										"lit": "delete",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"locations",
									"{location_id}",
									"delete",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "location_id",
											"orig": "location_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "delete",
									"exist": []any{
										"location_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/messages/{interaction_id}/reply",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "messages",
									},
									map[string]any{
										"var": "message_id",
									},
									map[string]any{
										"lit": "reply",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"messages",
									"{message_id}",
									"reply",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"interaction_id": "message_id",
									},
								},
								"transform": map[string]any{
									"req": map[string]any{
										"body": "`reqdata.body`",
										"client_message_id": "`reqdata.client_message_id`",
									},
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "message_id",
											"orig": "interaction_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"message_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/reviews/{review_id}/report",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "reviews",
									},
									map[string]any{
										"var": "review_id",
									},
									map[string]any{
										"lit": "report",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"reviews",
									"{review_id}",
									"report",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "review_id",
											"orig": "review_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"review_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/reviews/{review_id}/respond",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "reviews",
									},
									map[string]any{
										"var": "review_id",
									},
									map[string]any{
										"lit": "respond",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"reviews",
									"{review_id}",
									"respond",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "review_id",
											"orig": "review_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"review_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/ads/suggestions/{id}/apply",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "ads",
									},
									map[string]any{
										"lit": "suggestions",
									},
									map[string]any{
										"var": "suggestion_id",
									},
									map[string]any{
										"lit": "apply",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"ads",
									"suggestions",
									"{suggestion_id}",
									"apply",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "suggestion_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "suggestion_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"suggestion_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/ads/suggestions/{id}/dismiss",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "ads",
									},
									map[string]any{
										"lit": "suggestions",
									},
									map[string]any{
										"var": "suggestion_id",
									},
									map[string]any{
										"lit": "dismiss",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"ads",
									"suggestions",
									"{suggestion_id}",
									"dismiss",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "suggestion_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "suggestion_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"suggestion_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/support/{conversation_id}/read",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "support",
									},
									map[string]any{
										"var": "support_id",
									},
									map[string]any{
										"lit": "read",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"support",
									"{support_id}",
									"read",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"conversation_id": "support_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "support_id",
											"orig": "conversation_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"support_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/support/{conversation_id}/typing",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "support",
									},
									map[string]any{
										"var": "support_id",
									},
									map[string]any{
										"lit": "typing",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"support",
									"{support_id}",
									"typing",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"conversation_id": "support_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "support_id",
											"orig": "conversation_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"support_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/evidence/upload-intents/{intent_id}/finalize",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "evidence",
									},
									map[string]any{
										"lit": "upload-intents",
									},
									map[string]any{
										"var": "upload_intent_id",
									},
									map[string]any{
										"lit": "finalize",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"evidence",
									"upload-intents",
									"{upload_intent_id}",
									"finalize",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"intent_id": "upload_intent_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "upload_intent_id",
											"orig": "intent_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"upload_intent_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/account",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "account",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"account",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/ads/account",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "ads",
									},
									map[string]any{
										"lit": "account",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"ads",
									"account",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/ads/assistant/chat",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "ads",
									},
									map[string]any{
										"lit": "assistant",
									},
									map[string]any{
										"lit": "chat",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"ads",
									"assistant",
									"chat",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/ads/assistant/handoff",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "ads",
									},
									map[string]any{
										"lit": "assistant",
									},
									map[string]any{
										"lit": "handoff",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"ads",
									"assistant",
									"handoff",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/ads/campaigns",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "ads",
									},
									map[string]any{
										"lit": "campaigns",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"ads",
									"campaigns",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/ads/changes",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "ads",
									},
									map[string]any{
										"lit": "changes",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"ads",
									"changes",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/ads/refund-requests",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "ads",
									},
									map[string]any{
										"lit": "refund-requests",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"ads",
									"refund-requests",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/ads/terms/accept",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "ads",
									},
									map[string]any{
										"lit": "terms",
									},
									map[string]any{
										"lit": "accept",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"ads",
									"terms",
									"accept",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/ads/topup",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "ads",
									},
									map[string]any{
										"lit": "topup",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"ads",
									"topup",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/agents",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "agents",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"agents",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"actions": "`reqdata.action`",
										"business_id": "`reqdata.business_id`",
										"name": "`reqdata.name`",
									},
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/billing/checkout",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "billing",
									},
									map[string]any{
										"lit": "checkout",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"billing",
									"checkout",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/billing/portal",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "billing",
									},
									map[string]any{
										"lit": "portal",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"billing",
									"portal",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/category-requests",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "category-requests",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"category-requests",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/coupons/checkout",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "coupons",
									},
									map[string]any{
										"lit": "checkout",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"coupons",
									"checkout",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/coupons/preview",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "coupons",
									},
									map[string]any{
										"lit": "preview",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"coupons",
									"preview",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/deals",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "deals",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"deals",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/deletion-requests",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "deletion-requests",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"deletion-requests",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"acknowledge_data_effects": "`reqdata.acknowledge_data_effect`",
										"confirmation": "`reqdata.confirmation`",
										"reason": "`reqdata.reason`",
									},
									"res": "`body.request`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/diamond-radius",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "diamond-radius",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"diamond-radius",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"business_id": "`reqdata.business_id`",
										"period": "`reqdata.period`",
										"radius_miles": "`reqdata.radius_mile`",
									},
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/evidence",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "evidence",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"evidence",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/evidence/authorize",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "evidence",
									},
									map[string]any{
										"lit": "authorize",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"evidence",
									"authorize",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/evidence/upload-intents",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "evidence",
									},
									map[string]any{
										"lit": "upload-intents",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"evidence",
									"upload-intents",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/exposure-tier",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "exposure-tier",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"exposure-tier",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/hours",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "hours",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"hours",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/jobs",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "jobs",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"jobs",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/locations",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "locations",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"locations",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/missed-contacts/convert",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "missed-contacts",
									},
									map[string]any{
										"lit": "convert",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"missed-contacts",
									"convert",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/mobile-devices",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "mobile-devices",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"mobile-devices",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"installation_id": "`reqdata.installation_id`",
										"platform": "`reqdata.platform`",
										"push_token": "`reqdata.push_token`",
									},
									"res": "`body.device`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/mobile-devices/revoke",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "mobile-devices",
									},
									map[string]any{
										"lit": "revoke",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"mobile-devices",
									"revoke",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"installation_id": "`reqdata.installation_id`",
									},
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/photos",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "photos",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"photos",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/photos/remove",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "photos",
									},
									map[string]any{
										"lit": "remove",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"photos",
									"remove",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/profile-details",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "profile-details",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"profile-details",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/support/messages",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "support",
									},
									map[string]any{
										"lit": "messages",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"support",
									"messages",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.conversation`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/v1/owner/evidence/upload-intents/{intent_id}/object",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "evidence",
									},
									map[string]any{
										"lit": "upload-intents",
									},
									map[string]any{
										"var": "upload_intent_id",
									},
									map[string]any{
										"lit": "object",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"evidence",
									"upload-intents",
									"{upload_intent_id}",
									"object",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"intent_id": "upload_intent_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "upload_intent_id",
											"orig": "intent_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"upload_intent_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/v1/owner/ads/auto-refill",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "ads",
									},
									map[string]any{
										"lit": "auto-refill",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"ads",
									"auto-refill",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.conversation",
						},
						[]any{
							"$.main.kit.entity.message",
						},
						[]any{
							"$.main.kit.entity.review",
						},
					},
				},
			},
			"business_review": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "business_review",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v1/businesses/{business_id}/reviews.json",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "businesses",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "reviews.json",
									},
								},
								"parts": []any{
									"v1",
									"businesses",
									"{id}",
									"reviews.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"business_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "business_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "biz_elite_ac_llc_jacksonville_fl",
										},
									},
									"query": []any{
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "rating",
											"orig": "rating",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"chat_attachment": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "byteSize",
						"title": "Byte Size",
						"type": "`$INTEGER`",
						"req": true,
					},
					map[string]any{
						"name": "content_type",
						"title": "Content Type",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "data_base64",
						"title": "Data Base64",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "fileName",
						"title": "File Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "file_name",
						"title": "File Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "mediaType",
						"title": "Media Type",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "size_bytes",
						"title": "Size Bytes",
						"type": "`$INTEGER`",
						"req": true,
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "chat_attachment",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/account/conversations/{conversation_id}/attachments",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"var": "conversation_id",
									},
									map[string]any{
										"lit": "attachments",
									},
								},
								"parts": []any{
									"v1",
									"account",
									"conversations",
									"{conversation_id}",
									"attachments",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"content_type": "`reqdata.content_type`",
										"data_base64": "`reqdata.data_base64`",
										"file_name": "`reqdata.file_name`",
										"size_bytes": "`reqdata.size_byte`",
									},
									"res": "`body.attachment`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "conversation_id",
											"orig": "conversation_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"conversation_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/messages/{interaction_id}/attachments",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "messages",
									},
									map[string]any{
										"var": "message_id",
									},
									map[string]any{
										"lit": "attachments",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"messages",
									"{message_id}",
									"attachments",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"interaction_id": "message_id",
									},
								},
								"transform": map[string]any{
									"req": map[string]any{
										"content_type": "`reqdata.content_type`",
										"data_base64": "`reqdata.data_base64`",
										"file_name": "`reqdata.file_name`",
										"size_bytes": "`reqdata.size_byte`",
									},
									"res": "`body.attachment`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "message_id",
											"orig": "interaction_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"message_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/support/{conversation_id}/attachments",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "support",
									},
									map[string]any{
										"var": "support_id",
									},
									map[string]any{
										"lit": "attachments",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"support",
									"{support_id}",
									"attachments",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"conversation_id": "support_id",
									},
								},
								"transform": map[string]any{
									"req": map[string]any{
										"content_type": "`reqdata.content_type`",
										"data_base64": "`reqdata.data_base64`",
										"file_name": "`reqdata.file_name`",
										"size_bytes": "`reqdata.size_byte`",
									},
									"res": "`body.attachment`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "support_id",
											"orig": "conversation_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"support_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/support/{conversation_id}/attachments",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "support",
									},
									map[string]any{
										"var": "support_id",
									},
									map[string]any{
										"lit": "attachments",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"support",
									"{support_id}",
									"attachments",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"conversation_id": "support_id",
									},
								},
								"transform": map[string]any{
									"req": map[string]any{
										"content_type": "`reqdata.content_type`",
										"data_base64": "`reqdata.data_base64`",
										"file_name": "`reqdata.file_name`",
										"size_bytes": "`reqdata.size_byte`",
									},
									"res": "`body.attachment`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "support_id",
											"orig": "conversation_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"support_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.conversation",
						},
						[]any{
							"$.main.kit.entity.message",
						},
					},
				},
			},
			"chat_attachment_url": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "byte_size",
						"title": "Byte Size",
						"type": "`$INTEGER`",
						"req": true,
					},
					map[string]any{
						"name": "expires_in_seconds",
						"title": "Expires In Seconds",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "file_name",
						"title": "File Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "media_type",
						"title": "Media Type",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "signed_url",
						"title": "Signed Url",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "chat_attachment_url",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/account/conversations/{conversation_id}/attachments/{attachment_id}/url",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"var": "conversation_id",
									},
									map[string]any{
										"lit": "attachments",
									},
									map[string]any{
										"var": "attachment_id",
									},
									map[string]any{
										"lit": "url",
									},
								},
								"parts": []any{
									"v1",
									"account",
									"conversations",
									"{conversation_id}",
									"attachments",
									"{attachment_id}",
									"url",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.attachment`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "attachment_id",
											"orig": "attachment_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "conversation_id",
											"orig": "conversation_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"attachment_id",
										"conversation_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/messages/{interaction_id}/attachments/{attachment_id}/url",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "messages",
									},
									map[string]any{
										"var": "message_id",
									},
									map[string]any{
										"lit": "attachments",
									},
									map[string]any{
										"var": "attachment_id",
									},
									map[string]any{
										"lit": "url",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"messages",
									"{message_id}",
									"attachments",
									"{attachment_id}",
									"url",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"interaction_id": "message_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.attachment`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "attachment_id",
											"orig": "attachment_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "message_id",
											"orig": "interaction_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"attachment_id",
										"message_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/support/{conversation_id}/attachments/{attachment_id}/url",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "support",
									},
									map[string]any{
										"var": "support_id",
									},
									map[string]any{
										"lit": "attachments",
									},
									map[string]any{
										"var": "attachment_id",
									},
									map[string]any{
										"lit": "url",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"support",
									"{support_id}",
									"attachments",
									"{attachment_id}",
									"url",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"conversation_id": "support_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.attachment`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "attachment_id",
											"orig": "attachment_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "support_id",
											"orig": "conversation_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"attachment_id",
										"support_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/support/{conversation_id}/attachments/{attachment_id}/url",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "support",
									},
									map[string]any{
										"var": "support_id",
									},
									map[string]any{
										"lit": "attachments",
									},
									map[string]any{
										"var": "attachment_id",
									},
									map[string]any{
										"lit": "url",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"support",
									"{support_id}",
									"attachments",
									"{attachment_id}",
									"url",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"conversation_id": "support_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.attachment`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "attachment_id",
											"orig": "attachment_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "support_id",
											"orig": "conversation_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"attachment_id",
										"support_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.conversation",
						},
						[]any{
							"$.main.kit.entity.message",
						},
					},
				},
			},
			"claim_verification_send": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "challenge_id",
						"title": "Challenge Id",
						"type": "`$STRING`",
						"short": "Opaque v3 SMS or owner-email challenge UUID.",
						"format": "uuid",
					},
					map[string]any{
						"name": "channel",
						"title": "Channel",
						"type": "`$ANY`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$ANY`",
							},
						},
					},
					map[string]any{
						"name": "claim_id",
						"title": "Claim Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "destination_hint",
						"title": "Destination Hint",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "expires_in_seconds",
						"title": "Expires In Seconds",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "provider_status",
						"title": "Provider Status",
						"type": "`$ANY`",
						"short": "V3 provider request state.",
					},
					map[string]any{
						"name": "recipient_delivery_confirmed",
						"title": "Recipient Delivery Confirmed",
						"type": "`$ANY`",
						"short": "V3 currently has no final-delivery provider event for this receipt.",
					},
					map[string]any{
						"name": "request_id",
						"title": "Request Id",
						"type": "`$STRING`",
						"short": "Caller-generated idempotency UUID.",
						"format": "uuid",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$ANY`",
						"req": true,
					},
				},
				"name": "claim_verification_send",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/actions/claim-verification/send",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"lit": "claim-verification",
									},
									map[string]any{
										"lit": "send",
									},
								},
								"parts": []any{
									"v1",
									"actions",
									"claim-verification",
									"send",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"channel": "`reqdata.channel`",
										"claim_id": "`reqdata.claim_id`",
										"request_id": "`reqdata.request_id`",
									},
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"claim_verification_verify": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "business_id",
						"title": "Business Id",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
					},
					map[string]any{
						"name": "challenge_id",
						"title": "Challenge Id",
						"type": "`$STRING`",
						"short": "Exact challenge UUID returned by the v3 SMS or owner-email send.",
						"format": "uuid",
					},
					map[string]any{
						"name": "channel",
						"title": "Channel",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "claim_id",
						"title": "Claim Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "code",
						"title": "Code",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "method",
						"title": "Method",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "publication",
						"title": "Publication",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "transfer_review_required",
						"title": "Transfer Review Required",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "trust_model_version",
						"title": "Trust Model Version",
						"type": "`$ANY`",
					},
				},
				"name": "claim_verification_verify",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/actions/claim-verification/verify",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"lit": "claim-verification",
									},
									map[string]any{
										"lit": "verify",
									},
								},
								"parts": []any{
									"v1",
									"actions",
									"claim-verification",
									"verify",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"challenge_id": "`reqdata.challenge_id`",
										"channel": "`reqdata.channel`",
										"claim_id": "`reqdata.claim_id`",
										"code": "`reqdata.code`",
									},
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"commercial_click": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "action_type",
						"title": "Action Type",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "ad_receipt",
						"title": "Ad Receipt",
						"type": "`$STRING`",
						"short": "Opaque server-signed receipt of a served Sponsored ad, sent back unchanged with a profile, website or call tap.",
					},
					map[string]any{
						"name": "billable",
						"title": "Billable",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "billing_event_id",
						"title": "Billing Event Id",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "billing_status",
						"title": "Billing Status",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "business_id",
						"title": "Business Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "category",
						"title": "Category",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "city",
						"title": "City",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "click_id",
						"title": "Click Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "commercial_status",
						"title": "Commercial Status",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "directory_listing_id",
						"title": "Directory Listing Id",
						"type": "`$STRING`",
						"short": "Deprecated alias of listing_id.",
					},
					map[string]any{
						"name": "display_name",
						"title": "Display Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "fallback_interaction_id",
						"title": "Fallback Interaction Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ledger_status",
						"title": "Ledger Status",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "listing_id",
						"title": "Listing Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "metadata",
						"title": "Metadata",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "migration_required",
						"title": "Migration Required",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "page_path",
						"title": "Page Path",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "referrer",
						"title": "Referrer",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "source_type",
						"title": "Source Type",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "state",
						"title": "State",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "storage",
						"title": "Storage",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "surface",
						"title": "Surface",
						"type": "`$ANY`",
						"short": "Where the Sponsored ad was shown (with ad_receipt).",
					},
					map[string]any{
						"name": "target_url",
						"title": "Target Url",
						"type": "`$STRING`",
					},
				},
				"name": "commercial_click",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/actions/commercial-click",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"lit": "commercial-click",
									},
								},
								"parts": []any{
									"v1",
									"actions",
									"commercial-click",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"action_type": "`reqdata.action_type`",
										"ad_receipt": "`reqdata.ad_receipt`",
										"business_id": "`reqdata.business_id`",
										"category": "`reqdata.category`",
										"city": "`reqdata.city`",
										"commercial_status": "`reqdata.commercial_status`",
										"directory_listing_id": "`reqdata.directory_listing_id`",
										"display_name": "`reqdata.display_name`",
										"listing_id": "`reqdata.listing_id`",
										"metadata": "`reqdata.metadata`",
										"page_path": "`reqdata.page_path`",
										"referrer": "`reqdata.referrer`",
										"source_type": "`reqdata.source_type`",
										"state": "`reqdata.state`",
										"surface": "`reqdata.surface`",
										"target_url": "`reqdata.target_url`",
									},
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"contact_recorded": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "business_id",
						"title": "Business Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "contact_recorded",
						"title": "Contact Recorded",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "interaction_id",
						"title": "Interaction Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "ok",
						"title": "Ok",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "policy",
						"title": "Policy",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "review_upgraded",
						"title": "Review Upgraded",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "trust_weight",
						"title": "Trust Weight",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "verified",
						"title": "Verified",
						"type": "`$BOOLEAN`",
						"req": true,
					},
				},
				"name": "contact_recorded",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/actions/confirm-interaction",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"lit": "confirm-interaction",
									},
								},
								"parts": []any{
									"v1",
									"actions",
									"confirm-interaction",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"business_id": "`reqdata.business_id`",
									},
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"conversation": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "account_id",
						"title": "Account Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "conversation_id",
						"title": "Conversation Id",
						"type": "`$STRING`",
						"short": "Exact conversation referenced by a webhook; returns zero or one scoped thread.",
					},
					map[string]any{
						"name": "conversations",
						"title": "Conversations",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "count",
						"title": "Count",
						"type": "`$NUMBER`",
						"req": true,
					},
					map[string]any{
						"name": "cursor",
						"title": "Cursor",
						"type": "`$STRING`",
						"short": "Opaque pagination cursor returned by the previous page.",
					},
					map[string]any{
						"name": "limit",
						"title": "Limit",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "pagination",
						"title": "Pagination",
						"type": "`$OBJECT`",
						"req": true,
					},
				},
				"name": "conversation",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/actions/list-my-conversations",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"lit": "list-my-conversations",
									},
								},
								"parts": []any{
									"v1",
									"actions",
									"list-my-conversations",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"account_id": "`reqdata.account_id`",
										"conversation_id": "`reqdata.conversation_id`",
										"cursor": "`reqdata.cursor`",
										"limit": "`reqdata.limit`",
									},
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"conversation_close": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "closed_at",
						"title": "Closed At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "conversation_id",
						"title": "Conversation Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$ANY`",
						"req": true,
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "conversation_close",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/account/conversations/{conversation_id}/close",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "close",
									},
								},
								"parts": []any{
									"v1",
									"account",
									"conversations",
									"{id}",
									"close",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"conversation_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "conversation_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"conversation_report": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "detail",
						"title": "Detail",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "reason",
						"title": "Reason",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$ANY`",
						"req": true,
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "conversation_report",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/account/conversations/{conversation_id}/report",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "report",
									},
								},
								"parts": []any{
									"v1",
									"account",
									"conversations",
									"{id}",
									"report",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"conversation_id": "id",
									},
								},
								"transform": map[string]any{
									"req": map[string]any{
										"detail": "`reqdata.detail`",
										"reason": "`reqdata.reason`",
									},
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "conversation_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/messages/{interaction_id}/report",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "messages",
									},
									map[string]any{
										"var": "message_id",
									},
									map[string]any{
										"lit": "report",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"messages",
									"{message_id}",
									"report",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"interaction_id": "message_id",
									},
								},
								"transform": map[string]any{
									"req": map[string]any{
										"detail": "`reqdata.detail`",
										"reason": "`reqdata.reason`",
									},
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "message_id",
											"orig": "interaction_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"message_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.message",
						},
					},
				},
			},
			"conversation_workflow": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "priority",
						"title": "Priority",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$ANY`",
					},
				},
				"name": "conversation_workflow",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/messages/{interaction_id}/workflow",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "messages",
									},
									map[string]any{
										"var": "message_id",
									},
									map[string]any{
										"lit": "workflow",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"messages",
									"{message_id}",
									"workflow",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"interaction_id": "message_id",
									},
								},
								"transform": map[string]any{
									"req": map[string]any{
										"priority": "`reqdata.priority`",
										"status": "`reqdata.status`",
									},
									"res": "`body.conversation`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "message_id",
											"orig": "interaction_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"message_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.message",
						},
					},
				},
			},
			"create_agent_api_key": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "account_id",
						"title": "Account Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "allowed_actions",
						"title": "Allowed Actions",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "allowed_business_ids",
						"title": "Allowed Business Ids",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "created_by",
						"title": "Created By",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "key",
						"title": "Key",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "label",
						"title": "Label",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "monthly_quota",
						"title": "Monthly Quota",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "notes",
						"title": "Notes",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "one_time_display",
						"title": "One Time Display",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "rate_limit_per_minute",
						"title": "Rate Limit Per Minute",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "raw_key",
						"title": "Raw Key",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$ANY`",
						"req": true,
					},
				},
				"name": "create_agent_api_key",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/agent-keys",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "agent-keys",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"agent-keys",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"customer": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "auth_provider",
						"title": "Auth Provider",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "avatar_url",
						"title": "Avatar Url",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "Short-lived signed display URL for a private avatar object, or null.",
						"format": "uri",
					},
					map[string]any{
						"name": "city",
						"title": "City",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "email",
						"title": "Email",
						"type": "`$STRING`",
						"req": true,
						"format": "email",
					},
					map[string]any{
						"name": "full_name",
						"title": "Full Name",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "phone",
						"title": "Phone",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "search_category",
						"title": "Search Category",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "service_need",
						"title": "Service Need",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "state",
						"title": "State",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "updated_at",
						"title": "Updated At",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
						"format": "date-time",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "customer",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/account/customer",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "customer",
									},
								},
								"parts": []any{
									"v1",
									"account",
									"customer",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"auth_provider": "`reqdata.auth_provider`",
										"avatar_url": "`reqdata.avatar_url`",
										"city": "`reqdata.city`",
										"full_name": "`reqdata.full_name`",
										"phone": "`reqdata.phone`",
										"search_category": "`reqdata.search_category`",
										"service_need": "`reqdata.service_need`",
										"state": "`reqdata.state`",
									},
									"res": "`body.account`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"customer_account": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "account_id",
						"title": "Account Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "account_role",
						"title": "Account Role",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "accuracy_meters",
						"title": "Accuracy Meters",
						"type": "`$NUMBER`",
						"req": true,
					},
					map[string]any{
						"name": "acknowledge_data_effects",
						"title": "Acknowledge Data Effects",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "actions",
						"title": "Actions",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "agent_key_id",
						"title": "Agent Key Id",
						"type": "`$STRING`",
						"req": true,
						"format": "uuid",
					},
					map[string]any{
						"name": "agent_receives_coordinates",
						"title": "Agent Receives Coordinates",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "all_paused",
						"title": "All Paused",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "app_attest_registered",
						"title": "App Attest Registered",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "assertion",
						"title": "Assertion",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "attestation",
						"title": "Attestation",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "author_label",
						"title": "Author Label",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "author_type",
						"title": "Author Type",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "binding",
						"title": "Binding",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "body",
						"title": "Body",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "business_id",
						"title": "Business Id",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
					},
					map[string]any{
						"name": "capture_source",
						"title": "Capture Source",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "captured_at",
						"title": "Captured At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "challenge",
						"title": "Challenge",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "challenge_id",
						"title": "Challenge Id",
						"type": "`$STRING`",
						"req": true,
						"format": "uuid",
					},
					map[string]any{
						"name": "client_message_id",
						"title": "Client Message Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "completed",
						"title": "Completed",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "confirmation",
						"title": "Confirmation",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "connection_id",
						"title": "Connection Id",
						"type": "`$STRING`",
						"req": true,
						"format": "uuid",
					},
					map[string]any{
						"name": "connection_kind",
						"title": "Connection Kind",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "continuation",
						"title": "Continuation",
						"type": "`$ANY`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$ANY`",
							},
						},
						"short": "The continuation from the previous response, sent back unchanged to get the next results.",
					},
					map[string]any{
						"name": "coordinates_returned",
						"title": "Coordinates Returned",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "credential_id",
						"title": "Credential Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "declined",
						"title": "Declined",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "delivery_contract",
						"title": "Delivery Contract",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "disabled_reason",
						"title": "Disabled Reason",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
					},
					map[string]any{
						"name": "disclosure",
						"title": "Disclosure",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "enabled",
						"title": "Enabled",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "endpoint",
						"title": "Endpoint",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "endpoint_id",
						"title": "Endpoint Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "endpoint_url",
						"title": "Endpoint Url",
						"type": "`$STRING`",
						"req": true,
						"format": "uri",
					},
					map[string]any{
						"name": "environment",
						"title": "Environment",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "event_id",
						"title": "Event Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "event_types",
						"title": "Event Types",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "failure_count",
						"title": "Failure Count",
						"type": "`$INTEGER`",
						"req": true,
					},
					map[string]any{
						"name": "handoff_id",
						"title": "Handoff Id",
						"type": "`$STRING`",
						"req": true,
						"format": "uuid",
					},
					map[string]any{
						"name": "has_more",
						"title": "Has More",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"format": "uuid",
					},
					map[string]any{
						"name": "idempotent_replay",
						"title": "Idempotent Replay",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "installation_id",
						"title": "Installation Id",
						"type": "`$STRING`",
						"req": true,
						"format": "uuid",
					},
					map[string]any{
						"name": "key_id",
						"title": "Key Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "last_delivery_at",
						"title": "Last Delivery At",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "latitude",
						"title": "Latitude",
						"type": "`$NUMBER`",
						"req": true,
					},
					map[string]any{
						"name": "location",
						"title": "Location",
						"type": "`$ANY`",
						"short": "An opaque location reference from the website's own location controls.",
					},
					map[string]any{
						"name": "longitude",
						"title": "Longitude",
						"type": "`$NUMBER`",
						"req": true,
					},
					map[string]any{
						"name": "message_alerts_enabled",
						"title": "Message Alerts Enabled",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "mode",
						"title": "Mode",
						"type": "`$STRING`",
						"req": true,
						"short": "fallback: a direct search answered because the language model was unavailable.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "oauth_grant_id",
						"title": "Oauth Grant Id",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
						"format": "uuid",
					},
					map[string]any{
						"name": "one_time_display",
						"title": "One Time Display",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "platform",
						"title": "Platform",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "policy",
						"title": "Policy",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "purpose",
						"title": "Purpose",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "push_token",
						"title": "Push Token",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "reason",
						"title": "Reason",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "registered_at",
						"title": "Registered At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "reply",
						"title": "Reply",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "request_mode",
						"title": "Request Mode",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "requested_at",
						"title": "Requested At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "results",
						"title": "Results",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "schema_version",
						"title": "Schema Version",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "selected_at",
						"title": "Selected At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "signed_in",
						"title": "Signed In",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "signing_secret",
						"title": "Signing Secret",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "updated_at",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
						"req": true,
						"short": "Public HTTPS receiver operated by the connecting principal or its agent runtime.",
						"format": "uri",
					},
					map[string]any{
						"name": "usable_until",
						"title": "Usable Until",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "use_mode",
						"title": "Use Mode",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "customer_account",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/account/location-handoffs/{handoff_id}/complete-from-device",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "location-handoffs",
									},
									map[string]any{
										"var": "location_handoff_id",
									},
									map[string]any{
										"lit": "complete-from-device",
									},
								},
								"parts": []any{
									"v1",
									"account",
									"location-handoffs",
									"{location_handoff_id}",
									"complete-from-device",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"handoff_id": "location_handoff_id",
									},
								},
								"transform": map[string]any{
									"req": map[string]any{
										"accuracy_meters": "`reqdata.accuracy_meter`",
										"agent_key_id": "`reqdata.agent_key_id`",
										"assertion": "`reqdata.assertion`",
										"capture_source": "`reqdata.capture_source`",
										"captured_at": "`reqdata.captured_at`",
										"challenge": "`reqdata.challenge`",
										"challenge_id": "`reqdata.challenge_id`",
										"connection_id": "`reqdata.connection_id`",
										"installation_id": "`reqdata.installation_id`",
										"key_id": "`reqdata.key_id`",
										"latitude": "`reqdata.latitude`",
										"longitude": "`reqdata.longitude`",
										"oauth_grant_id": "`reqdata.oauth_grant_id`",
										"use_mode": "`reqdata.use_mode`",
									},
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_loppee_client_platform",
											"orig": "X-Loppee-Client-Platform",
											"type": "`$STRING`",
											"kind": "header",
											"reqd": true,
										},
										map[string]any{
											"name": "x_loppee_installation_id",
											"orig": "X-Loppee-Installation-Id",
											"type": "`$STRING`",
											"kind": "header",
											"reqd": true,
										},
									},
									"params": []any{
										map[string]any{
											"name": "location_handoff_id",
											"orig": "handoff_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"location_handoff_id",
										"x_loppee_client_platform",
										"x_loppee_installation_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/account/location-handoffs/{handoff_id}/decline-from-device",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "location-handoffs",
									},
									map[string]any{
										"var": "location_handoff_id",
									},
									map[string]any{
										"lit": "decline-from-device",
									},
								},
								"parts": []any{
									"v1",
									"account",
									"location-handoffs",
									"{location_handoff_id}",
									"decline-from-device",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"handoff_id": "location_handoff_id",
									},
								},
								"transform": map[string]any{
									"req": map[string]any{
										"agent_key_id": "`reqdata.agent_key_id`",
										"assertion": "`reqdata.assertion`",
										"challenge": "`reqdata.challenge`",
										"challenge_id": "`reqdata.challenge_id`",
										"connection_id": "`reqdata.connection_id`",
										"installation_id": "`reqdata.installation_id`",
										"key_id": "`reqdata.key_id`",
										"oauth_grant_id": "`reqdata.oauth_grant_id`",
										"request_mode": "`reqdata.request_mode`",
									},
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_loppee_client_platform",
											"orig": "X-Loppee-Client-Platform",
											"type": "`$STRING`",
											"kind": "header",
											"reqd": true,
										},
										map[string]any{
											"name": "x_loppee_installation_id",
											"orig": "X-Loppee-Installation-Id",
											"type": "`$STRING`",
											"kind": "header",
											"reqd": true,
										},
									},
									"params": []any{
										map[string]any{
											"name": "location_handoff_id",
											"orig": "handoff_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"location_handoff_id",
										"x_loppee_client_platform",
										"x_loppee_installation_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/account/agent-location/app-attest/challenges",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "agent-location",
									},
									map[string]any{
										"lit": "app-attest",
									},
									map[string]any{
										"lit": "challenges",
									},
								},
								"parts": []any{
									"v1",
									"account",
									"agent-location",
									"app-attest",
									"challenges",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_loppee_client_platform",
											"orig": "X-Loppee-Client-Platform",
											"type": "`$STRING`",
											"kind": "header",
											"reqd": true,
										},
										map[string]any{
											"name": "x_loppee_installation_id",
											"orig": "X-Loppee-Installation-Id",
											"type": "`$STRING`",
											"kind": "header",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"x_loppee_client_platform",
										"x_loppee_installation_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/account/agent-location/app-attest/keys",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "agent-location",
									},
									map[string]any{
										"lit": "app-attest",
									},
									map[string]any{
										"lit": "keys",
									},
								},
								"parts": []any{
									"v1",
									"account",
									"agent-location",
									"app-attest",
									"keys",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"attestation": "`reqdata.attestation`",
										"challenge": "`reqdata.challenge`",
										"challenge_id": "`reqdata.challenge_id`",
										"installation_id": "`reqdata.installation_id`",
										"key_id": "`reqdata.key_id`",
									},
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_loppee_client_platform",
											"orig": "X-Loppee-Client-Platform",
											"type": "`$STRING`",
											"kind": "header",
											"reqd": true,
										},
										map[string]any{
											"name": "x_loppee_installation_id",
											"orig": "X-Loppee-Installation-Id",
											"type": "`$STRING`",
											"kind": "header",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"x_loppee_client_platform",
										"x_loppee_installation_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/account/agents/{agent_id}/disconnect",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "agents",
									},
									map[string]any{
										"var": "agent_id",
									},
									map[string]any{
										"lit": "disconnect",
									},
								},
								"parts": []any{
									"v1",
									"account",
									"agents",
									"{agent_id}",
									"disconnect",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "agent_id",
											"orig": "agent_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"agent_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/account/agents/{agent_id}/rotate-key",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "agents",
									},
									map[string]any{
										"var": "agent_id",
									},
									map[string]any{
										"lit": "rotate-key",
									},
								},
								"parts": []any{
									"v1",
									"account",
									"agents",
									"{agent_id}",
									"rotate-key",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "agent_id",
											"orig": "agent_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"agent_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/account/agents/{agent_id}/webhook",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "agents",
									},
									map[string]any{
										"var": "agent_id",
									},
									map[string]any{
										"lit": "webhook",
									},
								},
								"parts": []any{
									"v1",
									"account",
									"agents",
									"{agent_id}",
									"webhook",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"url": "`reqdata.url`",
									},
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "agent_id",
											"orig": "agent_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"agent_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/account/agents/{agent_id}/webhook/disable",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "agents",
									},
									map[string]any{
										"var": "agent_id",
									},
									map[string]any{
										"lit": "webhook",
									},
									map[string]any{
										"lit": "disable",
									},
								},
								"parts": []any{
									"v1",
									"account",
									"agents",
									"{agent_id}",
									"webhook",
									"disable",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.endpoint`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "agent_id",
											"orig": "agent_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"agent_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/account/agents/{agent_id}/webhook/test",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "agents",
									},
									map[string]any{
										"var": "agent_id",
									},
									map[string]any{
										"lit": "webhook",
									},
									map[string]any{
										"lit": "test",
									},
								},
								"parts": []any{
									"v1",
									"account",
									"agents",
									"{agent_id}",
									"webhook",
									"test",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "agent_id",
											"orig": "agent_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"agent_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/account/agent-location/connections/{connection_id}/policy",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "agent-location",
									},
									map[string]any{
										"lit": "connections",
									},
									map[string]any{
										"var": "connection_id",
									},
									map[string]any{
										"lit": "policy",
									},
								},
								"parts": []any{
									"v1",
									"account",
									"agent-location",
									"connections",
									"{connection_id}",
									"policy",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "connection_id",
											"orig": "connection_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"connection_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/account/conversations/{conversation_id}/read",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"var": "conversation_id",
									},
									map[string]any{
										"lit": "read",
									},
								},
								"parts": []any{
									"v1",
									"account",
									"conversations",
									"{conversation_id}",
									"read",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "conversation_id",
											"orig": "conversation_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"conversation_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/account/conversations/{conversation_id}/reply",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "conversations",
									},
									map[string]any{
										"var": "conversation_id",
									},
									map[string]any{
										"lit": "reply",
									},
								},
								"parts": []any{
									"v1",
									"account",
									"conversations",
									"{conversation_id}",
									"reply",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"body": "`reqdata.body`",
										"client_message_id": "`reqdata.client_message_id`",
									},
									"res": "`body.reply`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "conversation_id",
											"orig": "conversation_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"conversation_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/account/agent-location/pause",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "agent-location",
									},
									map[string]any{
										"lit": "pause",
									},
								},
								"parts": []any{
									"v1",
									"account",
									"agent-location",
									"pause",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/account/agents",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "agents",
									},
								},
								"parts": []any{
									"v1",
									"account",
									"agents",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/account/assistant/chat",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "assistant",
									},
									map[string]any{
										"lit": "chat",
									},
								},
								"parts": []any{
									"v1",
									"account",
									"assistant",
									"chat",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"continuation": "`reqdata.continuation`",
										"location": "`reqdata.location`",
										"messages": "`reqdata.message`",
									},
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/account/deletion-requests",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "deletion-requests",
									},
								},
								"parts": []any{
									"v1",
									"account",
									"deletion-requests",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"acknowledge_data_effects": "`reqdata.acknowledge_data_effect`",
										"confirmation": "`reqdata.confirmation`",
										"reason": "`reqdata.reason`",
									},
									"res": "`body.request`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/account/mobile-devices",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "mobile-devices",
									},
								},
								"parts": []any{
									"v1",
									"account",
									"mobile-devices",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"installation_id": "`reqdata.installation_id`",
										"platform": "`reqdata.platform`",
										"push_token": "`reqdata.push_token`",
									},
									"res": "`body.device`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/account/mobile-devices/message-alerts",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "mobile-devices",
									},
									map[string]any{
										"lit": "message-alerts",
									},
								},
								"parts": []any{
									"v1",
									"account",
									"mobile-devices",
									"message-alerts",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"enabled": "`reqdata.enabled`",
										"installation_id": "`reqdata.installation_id`",
									},
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/account/mobile-devices/revoke",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "mobile-devices",
									},
									map[string]any{
										"lit": "revoke",
									},
								},
								"parts": []any{
									"v1",
									"account",
									"mobile-devices",
									"revoke",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"installation_id": "`reqdata.installation_id`",
									},
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.conversation",
						},
						[]any{
							"$.main.kit.entity.location_handoff",
						},
					},
				},
			},
			"customer_location_proof_revocation": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "accuracy_meters",
						"title": "Accuracy Meters",
						"type": "`$NUMBER`",
						"req": true,
					},
					map[string]any{
						"name": "captured_at",
						"title": "Captured At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "latitude",
						"title": "Latitude",
						"type": "`$NUMBER`",
						"req": true,
					},
					map[string]any{
						"name": "longitude",
						"title": "Longitude",
						"type": "`$NUMBER`",
						"req": true,
					},
				},
				"name": "customer_location_proof_revocation",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/account/location-proofs",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "location-proofs",
									},
								},
								"parts": []any{
									"v1",
									"account",
									"location-proofs",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"accuracy_meters": "`reqdata.accuracy_meter`",
										"captured_at": "`reqdata.captured_at`",
										"latitude": "`reqdata.latitude`",
										"longitude": "`reqdata.longitude`",
									},
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/v1/account/location-proofs/{location_proof_id}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "location-proofs",
									},
									map[string]any{
										"var": "location_proof_id",
									},
								},
								"parts": []any{
									"v1",
									"account",
									"location-proofs",
									"{location_proof_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "location_proof_id",
											"orig": "location_proof_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"location_proof_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"destination_address_suggestion": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "input",
						"title": "Input",
						"type": "`$STRING`",
						"req": true,
						"short": "Normalized partial US service-address text.",
					},
					map[string]any{
						"name": "suggestions",
						"title": "Suggestions",
						"type": "`$ARRAY`",
						"req": true,
					},
				},
				"name": "destination_address_suggestion",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/account/destination-address-suggestions",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "destination-address-suggestions",
									},
								},
								"parts": []any{
									"v1",
									"account",
									"destination-address-suggestions",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"input": "`reqdata.input`",
									},
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/destination-address-suggestions",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "destination-address-suggestions",
									},
								},
								"parts": []any{
									"v1",
									"destination-address-suggestions",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"input": "`reqdata.input`",
									},
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"destination_location_proof": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "address",
						"title": "Address",
						"type": "`$STRING`",
						"req": true,
						"short": "A real US service address.",
					},
					map[string]any{
						"name": "premise_proximity_confirmation_token",
						"title": "Premise Proximity Confirmation Token",
						"type": "`$STRING`",
						"short": "Opaque one-time token from the immediately preceding premise-proximity challenge for the same address and authority.",
					},
				},
				"name": "destination_location_proof",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/account/destination-location-proofs",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "destination-location-proofs",
									},
								},
								"parts": []any{
									"v1",
									"account",
									"destination-location-proofs",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"address": "`reqdata.address`",
										"premise_proximity_confirmation_token": "`reqdata.premise_proximity_confirmation_token`",
									},
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/destination-location-proofs",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "destination-location-proofs",
									},
								},
								"parts": []any{
									"v1",
									"destination-location-proofs",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"address": "`reqdata.address`",
										"premise_proximity_confirmation_token": "`reqdata.premise_proximity_confirmation_token`",
									},
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"domain_trust_card": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "business_id",
						"title": "Business Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "domain",
						"title": "Domain",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "schema_version",
						"title": "Schema Version",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "trust_card",
						"title": "Trust Card",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "trust_card_url",
						"title": "Trust Card Url",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "trust_model_version",
						"title": "Trust Model Version",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "verification_class",
						"title": "Verification Class",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "verification_disclosure",
						"title": "Verification Disclosure",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"name": "domain_trust_card",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v1/domains/{domain_key}/trust-card.json",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "domains",
									},
									map[string]any{
										"var": "domain_key",
									},
									map[string]any{
										"lit": "trust-card.json",
									},
								},
								"parts": []any{
									"v1",
									"domains",
									"{domain_key}",
									"trust-card.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "domain_key",
											"orig": "domain_key",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "eliteacllc-com",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"domain_key",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"geo_context": map[string]any{
				"fields": []any{},
				"name": "geo_context",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v1/geo/context",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "geo",
									},
									map[string]any{
										"lit": "context",
									},
								},
								"parts": []any{
									"v1",
									"geo",
									"context",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"health": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "agent_phone_location_bridge",
						"title": "Agent Phone Location Bridge",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "build_sha",
						"title": "Build Sha",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "business_review_access",
						"title": "Business Review Access",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "contract_version",
						"title": "Contract Version",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "external_agent_webhooks",
						"title": "External Agent Webhooks",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "external_agent_webhooks_enabled",
						"title": "External Agent Webhooks Enabled",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "ios_app_attest_anonymous_location",
						"title": "Ios App Attest Anonymous Location",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "location_choices",
						"title": "Location Choices",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "location_handoff",
						"title": "Location Handoff",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "mobile_push",
						"title": "Mobile Push",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "ok",
						"title": "Ok",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "service",
						"title": "Service",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "sponsored_ordering",
						"title": "Sponsored Ordering",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "trust_model_version",
						"title": "Trust Model Version",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "version",
						"title": "Version",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"name": "health",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/health",
								"segments": []any{
									map[string]any{
										"lit": "health",
									},
								},
								"parts": []any{
									"health",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"job_application": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "account_id",
						"title": "Account Id",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "already_withdrawn",
						"title": "Already Withdrawn",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "application",
						"title": "Application",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "applications",
						"title": "Applications",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "billing",
						"title": "Billing",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "business_id",
						"title": "Business Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "count",
						"title": "Count",
						"type": "`$NUMBER`",
						"req": true,
					},
					map[string]any{
						"name": "cover_note",
						"title": "Cover Note",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "free_to_apply",
						"title": "Free To Apply",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "job_id",
						"title": "Job Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "limit",
						"title": "Limit",
						"type": "`$NUMBER`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$NUMBER`",
							},
						},
					},
					map[string]any{
						"name": "offset",
						"title": "Offset",
						"type": "`$NUMBER`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$NUMBER`",
							},
						},
					},
					map[string]any{
						"name": "resume",
						"title": "Resume",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "retention_note",
						"title": "Retention Note",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$ANY`",
							},
						},
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "job_application",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/jobs/{job_id}/apply",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "jobs",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "apply",
									},
								},
								"parts": []any{
									"v1",
									"jobs",
									"{id}",
									"apply",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"job_id": "id",
									},
								},
								"transform": map[string]any{
									"req": map[string]any{
										"cover_note": "`reqdata.cover_note`",
										"resume": "`reqdata.resume`",
									},
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "job_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "apply",
									"exist": []any{
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/job-applications/{application_id}/status",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "job-applications",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "status",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"job-applications",
									"{id}",
									"status",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"application_id": "id",
									},
								},
								"transform": map[string]any{
									"req": map[string]any{
										"status": "`reqdata.status`",
									},
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "application_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "status",
									"exist": []any{
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/account/job-applications/{application_id}/withdraw",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "job-applications",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "withdraw",
									},
								},
								"parts": []any{
									"v1",
									"account",
									"job-applications",
									"{id}",
									"withdraw",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"application_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "application_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "withdraw",
									"exist": []any{
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/actions/job-application",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"lit": "job-application",
									},
								},
								"parts": []any{
									"v1",
									"actions",
									"job-application",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"account_id": "`reqdata.account_id`",
										"cover_note": "`reqdata.cover_note`",
										"job_id": "`reqdata.job_id`",
										"resume": "`reqdata.resume`",
									},
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/actions/list-my-job-applications",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"lit": "list-my-job-applications",
									},
								},
								"parts": []any{
									"v1",
									"actions",
									"list-my-job-applications",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"account_id": "`reqdata.account_id`",
										"limit": "`reqdata.limit`",
										"offset": "`reqdata.offset`",
										"status": "`reqdata.status`",
									},
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"job_resume_signed_url": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "application_id",
						"title": "Application Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "content_type",
						"title": "Content Type",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "expires_in_seconds",
						"title": "Expires In Seconds",
						"type": "`$NUMBER`",
						"req": true,
					},
					map[string]any{
						"name": "resume_file_name",
						"title": "Resume File Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "signed_url",
						"title": "Signed Url",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "size_bytes",
						"title": "Size Bytes",
						"type": "`$NUMBER`",
						"req": true,
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$ANY`",
						"req": true,
					},
				},
				"name": "job_resume_signed_url",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/account/job-applications/{application_id}/resume-url",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "job-applications",
									},
									map[string]any{
										"var": "job_application_id",
									},
									map[string]any{
										"lit": "resume-url",
									},
								},
								"parts": []any{
									"v1",
									"account",
									"job-applications",
									"{job_application_id}",
									"resume-url",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"application_id": "job_application_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "job_application_id",
											"orig": "application_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"job_application_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/job-applications/{application_id}/resume-url",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "job-applications",
									},
									map[string]any{
										"var": "job_application_id",
									},
									map[string]any{
										"lit": "resume-url",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"job-applications",
									"{job_application_id}",
									"resume-url",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"application_id": "job_application_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "job_application_id",
											"orig": "application_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"job_application_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.job_application",
						},
					},
				},
			},
			"location_handoff": map[string]any{
				"fields": []any{},
				"name": "location_handoff",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/account/location-handoffs",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "location-handoffs",
									},
								},
								"parts": []any{
									"v1",
									"account",
									"location-handoffs",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"message": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "account_id",
						"title": "Account Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "client_message_id",
						"title": "Client Message Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Caller-stable retry key.",
					},
					map[string]any{
						"name": "conversation_id",
						"title": "Conversation Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "delivery",
						"title": "Delivery",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "idempotent_replay",
						"title": "Idempotent Replay",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "interaction_id",
						"title": "Interaction Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "message",
						"title": "Message",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "moderation_required",
						"title": "Moderation Required",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "source_path",
						"title": "Source Path",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "subject",
						"title": "Subject",
						"type": "`$STRING`",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "target_business_id",
						"title": "Target Business Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "target_business_name",
						"title": "Target Business Name",
						"type": "`$STRING`",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "target_business_source",
						"title": "Target Business Source",
						"type": "`$STRING`",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
					},
				},
				"name": "message",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/actions/business-message",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"lit": "business-message",
									},
								},
								"parts": []any{
									"v1",
									"actions",
									"business-message",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"message": "`reqdata.message`",
										"source_path": "`reqdata.source_path`",
										"subject": "`reqdata.subject`",
										"target_business_id": "`reqdata.target_business_id`",
										"target_business_name": "`reqdata.target_business_name`",
										"target_business_source": "`reqdata.target_business_source`",
									},
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/actions/message-request",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"lit": "message-request",
									},
								},
								"parts": []any{
									"v1",
									"actions",
									"message-request",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"account_id": "`reqdata.account_id`",
										"client_message_id": "`reqdata.client_message_id`",
										"message": "`reqdata.message`",
										"subject": "`reqdata.subject`",
										"target_business_id": "`reqdata.target_business_id`",
										"target_business_name": "`reqdata.target_business_name`",
										"target_business_source": "`reqdata.target_business_source`",
									},
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"moderated_action": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "actions",
						"title": "Actions",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "body",
						"title": "Body",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "client_request_id",
						"title": "Client Request Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "content_type",
						"title": "Content Type",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "continuation",
						"title": "Continuation",
						"type": "`$ANY`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$ANY`",
							},
						},
						"short": "The continuation from the previous response, sent back unchanged to get the next results.",
					},
					map[string]any{
						"name": "coordinates_returned",
						"title": "Coordinates Returned",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "disclosure",
						"title": "Disclosure",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "enabled",
						"title": "Enabled",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "file_sha256",
						"title": "File Sha256",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "has_more",
						"title": "Has More",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "human_confirmation",
						"title": "Human Confirmation",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "intent_id",
						"title": "Intent Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "kind",
						"title": "Kind",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "knowledgeVersion",
						"title": "Knowledge Version",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "limits",
						"title": "Limits",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "links",
						"title": "Links",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "location",
						"title": "Location",
						"type": "`$OBJECT`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$ANY`",
							},
						},
						"short": "An opaque location reference from the website's own location controls.",
					},
					map[string]any{
						"name": "message",
						"title": "Message",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "mode",
						"title": "Mode",
						"type": "`$STRING`",
						"req": true,
						"short": "fallback: a direct search answered because the language model was unavailable.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "needsHuman",
						"title": "Needs Human",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "policy",
						"title": "Policy",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Human schedule and separate claim-review policy.",
					},
					map[string]any{
						"name": "question",
						"title": "Question",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "reply",
						"title": "Reply",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "results",
						"title": "Results",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "scan_authority_id",
						"title": "Scan Authority Id",
						"type": "`$STRING`",
						"req": true,
						"format": "uuid",
					},
					map[string]any{
						"name": "scanner",
						"title": "Scanner",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "scanner_version",
						"title": "Scanner Version",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "schema_version",
						"title": "Schema Version",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "searcher_latitude",
						"title": "Searcher Latitude",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "searcher_longitude",
						"title": "Searcher Longitude",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "signature",
						"title": "Signature",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "signed_in",
						"title": "Signed In",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "size_bytes",
						"title": "Size Bytes",
						"type": "`$NUMBER`",
						"req": true,
					},
					map[string]any{
						"name": "subject",
						"title": "Subject",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "target_business_id",
						"title": "Target Business Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "topic",
						"title": "Topic",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"name": "moderated_action",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/actions/contact-attempt",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"lit": "contact-attempt",
									},
								},
								"parts": []any{
									"v1",
									"actions",
									"contact-attempt",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/assistant/chat",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assistant",
									},
									map[string]any{
										"lit": "chat",
									},
								},
								"parts": []any{
									"v1",
									"assistant",
									"chat",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"continuation": "`reqdata.continuation`",
										"location": "`reqdata.location`",
										"messages": "`reqdata.message`",
									},
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/internal/jobs/resume-scan-results",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "internal",
									},
									map[string]any{
										"lit": "jobs",
									},
									map[string]any{
										"lit": "resume-scan-results",
									},
								},
								"parts": []any{
									"v1",
									"internal",
									"jobs",
									"resume-scan-results",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"content_type": "`reqdata.content_type`",
										"file_sha256": "`reqdata.file_sha256`",
										"intent_id": "`reqdata.intent_id`",
										"result": "`reqdata.result`",
										"scan_authority_id": "`reqdata.scan_authority_id`",
										"scanner": "`reqdata.scanner`",
										"scanner_version": "`reqdata.scanner_version`",
										"signature": "`reqdata.signature`",
										"size_bytes": "`reqdata.size_byte`",
									},
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/internal/owner-evidence/scan-results",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "internal",
									},
									map[string]any{
										"lit": "owner-evidence",
									},
									map[string]any{
										"lit": "scan-results",
									},
								},
								"parts": []any{
									"v1",
									"internal",
									"owner-evidence",
									"scan-results",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/stripe/webhook",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "stripe",
									},
									map[string]any{
										"lit": "webhook",
									},
								},
								"parts": []any{
									"v1",
									"stripe",
									"webhook",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/support/guide/help",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "support",
									},
									map[string]any{
										"lit": "guide",
									},
									map[string]any{
										"lit": "help",
									},
								},
								"parts": []any{
									"v1",
									"support",
									"guide",
									"help",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"question": "`reqdata.question`",
									},
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v1/assistant/native/status",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assistant",
									},
									map[string]any{
										"lit": "native",
									},
									map[string]any{
										"lit": "status",
									},
								},
								"parts": []any{
									"v1",
									"assistant",
									"native",
									"status",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v1/assistant/status",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assistant",
									},
									map[string]any{
										"lit": "status",
									},
								},
								"parts": []any{
									"v1",
									"assistant",
									"status",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v1/support/guide",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "support",
									},
									map[string]any{
										"lit": "guide",
									},
								},
								"parts": []any{
									"v1",
									"support",
									"guide",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"open_api_document": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "components",
						"title": "Components",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "info",
						"title": "Info",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "openapi",
						"title": "Openapi",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "paths",
						"title": "Paths",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "servers",
						"title": "Servers",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "tags",
						"title": "Tags",
						"type": "`$ARRAY`",
						"req": true,
					},
				},
				"name": "open_api_document",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/openapi.json",
								"segments": []any{
									map[string]any{
										"lit": "openapi.json",
									},
								},
								"parts": []any{
									"openapi.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v1/openapi.json",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "openapi.json",
									},
								},
								"parts": []any{
									"v1",
									"openapi.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"operation": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "account_id",
						"title": "Account Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "action",
						"title": "Action",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "active",
						"title": "Active",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "active_or_good_standing",
						"title": "Active Or Good Standing",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "ai_draft_id",
						"title": "Ai Draft Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "allowed_actions",
						"title": "Allowed Actions",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "alt",
						"title": "Alt",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "amount_cents",
						"title": "Amount Cents",
						"type": "`$NUMBER`",
						"req": true,
						"short": "Whole cents, non-zero, at most 1,000,000 either way; a promotional credit is positive.",
					},
					map[string]any{
						"name": "amount_off_cents",
						"title": "Amount Off Cents",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "api_key",
						"title": "Api Key",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"writeOnly": true,
					},
					map[string]any{
						"name": "applies_to_period",
						"title": "Applies To Period",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "applies_to_tier",
						"title": "Applies To Tier",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "assigned_admin_user_id",
						"title": "Assigned Admin User Id",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "assigneeId",
						"title": "Assignee Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "assigneeLabel",
						"title": "Assignee Label",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "assigneeType",
						"title": "Assignee Type",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "assignee_id",
						"title": "Assignee Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "assignee_label",
						"title": "Assignee Label",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "assignee_type",
						"title": "Assignee Type",
						"type": "`$STRING`",
						"short": "AI assignment is unavailable while the customer-support workload is disconnected.",
					},
					map[string]any{
						"name": "assistant_enabled",
						"title": "Assistant Enabled",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "base_url",
						"title": "Base Url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "body",
						"title": "Body",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "businessId",
						"title": "Business Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "businessName",
						"title": "Business Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "business_id",
						"title": "Business Id",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "business_ids",
						"title": "Business Ids",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "campaign_id",
						"title": "Campaign Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "campaign_ids",
						"title": "Campaign Ids",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "caption",
						"title": "Caption",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "case_status",
						"title": "Case Status",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "catalog",
						"title": "Catalog",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "category",
						"title": "Category",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "category_alias",
						"title": "Category Alias",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "chunk_size",
						"title": "Chunk Size",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "city",
						"title": "City",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "code",
						"title": "Code",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "confidence",
						"title": "Confidence",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "config",
						"title": "Config",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Complete validated pricing configuration.",
					},
					map[string]any{
						"name": "confirm",
						"title": "Confirm",
						"type": "`$BOOLEAN`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "confirm_admin",
						"title": "Confirm Admin",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "confirmation",
						"title": "Confirmation",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "connection_id",
						"title": "Connection Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "connection_kind",
						"title": "Connection Kind",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "content_type",
						"title": "Content Type",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "context_id",
						"title": "Context Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "context_type",
						"title": "Context Type",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "credential_expires_at",
						"title": "Credential Expires At",
						"type": "`$STRING`",
						"short": "Expiration date printed on the license.",
						"format": "date",
					},
					map[string]any{
						"name": "credential_id",
						"title": "Credential Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "custom_wire",
						"title": "Custom Wire",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "data_base64",
						"title": "Data Base64",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "decision",
						"title": "Decision",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "dedupe_ack",
						"title": "Dedupe Ack",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "delivery_contract",
						"title": "Delivery Contract",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "disabled_reason",
						"title": "Disabled Reason",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
					},
					map[string]any{
						"name": "discount_type",
						"title": "Discount Type",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "display_name",
						"title": "Display Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "disposition",
						"title": "Disposition",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "draft",
						"title": "Draft",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "duration",
						"title": "Duration",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "duration_in_months",
						"title": "Duration In Months",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "email",
						"title": "Email",
						"type": "`$STRING`",
						"req": true,
						"format": "email",
					},
					map[string]any{
						"name": "enabled",
						"title": "Enabled",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "endpoint",
						"title": "Endpoint",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "endpoint_id",
						"title": "Endpoint Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "endpoint_url",
						"title": "Endpoint Url",
						"type": "`$STRING`",
						"req": true,
						"format": "uri",
					},
					map[string]any{
						"name": "ends_at",
						"title": "Ends At",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "environment_fallback",
						"title": "Environment Fallback",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "event_id",
						"title": "Event Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "event_types",
						"title": "Event Types",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "expected_allowed_actions",
						"title": "Expected Allowed Actions",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "expected_key_id",
						"title": "Expected Key Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "expected_updated_at",
						"title": "Expected Updated At",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "expected_version",
						"title": "Expected Version",
						"type": "`$NUMBER`",
						"req": true,
					},
					map[string]any{
						"name": "expires_at",
						"title": "Expires At",
						"type": "`$STRING`",
						"short": "Promotional credit only: ISO date-time 1 hour to 2 years ahead, disclosed to the owner.",
					},
					map[string]any{
						"name": "fact_id",
						"title": "Fact Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "facts",
						"title": "Facts",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "failure_count",
						"title": "Failure Count",
						"type": "`$INTEGER`",
						"req": true,
					},
					map[string]any{
						"name": "fields",
						"title": "Fields",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Validated fields for this fixed content-block type.",
					},
					map[string]any{
						"name": "file_name",
						"title": "File Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "guideHandoffAnsweredAt",
						"title": "Guide Handoff Answered At",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "guideHandoffAt",
						"title": "Guide Handoff At",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "guideHandoffDueAt",
						"title": "Guide Handoff Due At",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "height",
						"title": "Height",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "historic_association_checked",
						"title": "Historic Association Checked",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "hold",
						"title": "Hold",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "holder_name_match",
						"title": "Holder Name Match",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "hours",
						"title": "Hours",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "idempotency_key",
						"title": "Idempotency Key",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "identifier_match",
						"title": "Identifier Match",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "in_use",
						"title": "In Use",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "instruction",
						"title": "Instruction",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "invited",
						"title": "Invited",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "key_check",
						"title": "Key Check",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "kind",
						"title": "Kind",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "label",
						"title": "Label",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "lastMessageAt",
						"title": "Last Message At",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
					},
					map[string]any{
						"name": "lastMessageAuthorType",
						"title": "Last Message Author Type",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "lastMessagePreview",
						"title": "Last Message Preview",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "last_delivery_at",
						"title": "Last Delivery At",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "last_error_code",
						"title": "Last Error Code",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "last_probe_at",
						"title": "Last Probe At",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "last_problem",
						"title": "Last Problem",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "legal_name",
						"title": "Legal Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "limit",
						"title": "Limit",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "make_active",
						"title": "Make Active",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "max_cents",
						"title": "Max Cents",
						"type": "`$NUMBER`",
						"req": true,
					},
					map[string]any{
						"name": "max_redemptions",
						"title": "Max Redemptions",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messagesTruncated",
						"title": "Messages Truncated",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "min_cents",
						"title": "Min Cents",
						"type": "`$NUMBER`",
						"req": true,
					},
					map[string]any{
						"name": "model",
						"title": "Model",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "model_id",
						"title": "Model Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "note",
						"title": "Note",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "notes",
						"title": "Notes",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "observed_at",
						"title": "Observed At",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "one_time_display",
						"title": "One Time Display",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "outcome",
						"title": "Outcome",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "ownerEmail",
						"title": "Owner Email",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "ownerLastReadAt",
						"title": "Owner Last Read At",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
					},
					map[string]any{
						"name": "ownerName",
						"title": "Owner Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "ownerUserId",
						"title": "Owner User Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "owner_reason_code",
						"title": "Owner Reason Code",
						"type": "`$STRING`",
						"short": "Controlled owner-visible rejection reason.",
					},
					map[string]any{
						"name": "per_customer_limit",
						"title": "Per Customer Limit",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "percent_off",
						"title": "Percent Off",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "phone",
						"title": "Phone",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "policyVersion",
						"title": "Policy Version",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "priority",
						"title": "Priority",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "provider",
						"title": "Provider",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "providers",
						"title": "Providers",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "purpose_code",
						"title": "Purpose Code",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "rank_bid_cents",
						"title": "Rank Bid Cents",
						"type": "`$INTEGER`",
						"req": true,
					},
					map[string]any{
						"name": "reason",
						"title": "Reason",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "reason_category",
						"title": "Reason Category",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "reason_code",
						"title": "Reason Code",
						"type": "`$STRING`",
						"op": map[string]any{
							"patch": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "reason_detail",
						"title": "Reason Detail",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "reference",
						"title": "Reference",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "reject_reason",
						"title": "Reject Reason",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "related_case_id",
						"title": "Related Case Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "report_id",
						"title": "Report Id",
						"type": "`$INTEGER`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "report_ids",
						"title": "Report Ids",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "reserve_cents",
						"title": "Reserve Cents",
						"type": "`$NUMBER`",
						"req": true,
						"short": "100-10000; never below $1.00.",
					},
					map[string]any{
						"name": "resolution_note",
						"title": "Resolution Note",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "review_notes",
						"title": "Review Notes",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "revision",
						"title": "Revision",
						"type": "`$INTEGER`",
						"req": true,
					},
					map[string]any{
						"name": "role",
						"title": "Role",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "rows",
						"title": "Rows",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "run",
						"title": "Run",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "schema_version",
						"title": "Schema Version",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "scope",
						"title": "Scope",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "search",
						"title": "Search",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "settings",
						"title": "Settings",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "signing_secret",
						"title": "Signing Secret",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "size_bytes",
						"title": "Size Bytes",
						"type": "`$NUMBER`",
						"req": true,
					},
					map[string]any{
						"name": "sla_due_at",
						"title": "Sla Due At",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "source",
						"title": "Source",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "source_authority",
						"title": "Source Authority",
						"type": "`$STRING`",
						"short": "Exact official authority name.",
					},
					map[string]any{
						"name": "source_category_slug",
						"title": "Source Category Slug",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "source_scope_checked",
						"title": "Source Scope Checked",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "source_url",
						"title": "Source Url",
						"type": "`$STRING`",
						"short": "Exact HTTPS official source URL.",
						"format": "uri",
					},
					map[string]any{
						"name": "starts_at",
						"title": "Starts At",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "state",
						"title": "State",
						"type": "`$STRING`",
						"short": "Bulk by area: every ad of the advertisers in this two-letter U.S.",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
							"patch": map[string]any{
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "storage",
						"title": "Storage",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "street_address",
						"title": "Street Address",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "subject",
						"title": "Subject",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "supportLastReadAt",
						"title": "Support Last Read At",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
					},
					map[string]any{
						"name": "target_category",
						"title": "Target Category",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
							"patch": map[string]any{
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "taxonomy_category_aliases",
						"title": "Taxonomy Category Aliases",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "ticketNumber",
						"title": "Ticket Number",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "tier",
						"title": "Tier",
						"type": "`$STRING`",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "typing",
						"title": "Typing",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "until",
						"title": "Until",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
					},
					map[string]any{
						"name": "updated_at",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
						"req": true,
						"short": "Public HTTPS receiver operated by the connecting principal or its agent runtime.",
						"format": "uri",
					},
					map[string]any{
						"name": "valid_until",
						"title": "Valid Until",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "value",
						"title": "Value",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "verification_method",
						"title": "Verification Method",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "verified_at",
						"title": "Verified At",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "verified_service_scope",
						"title": "Verified Service Scope",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "version",
						"title": "Version",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "website",
						"title": "Website",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "width",
						"title": "Width",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "window_hours",
						"title": "Window Hours",
						"type": "`$NUMBER`",
						"short": "1-744, default 48.",
					},
					map[string]any{
						"name": "workload",
						"title": "Workload",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "zip",
						"title": "Zip",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "operation",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/businesses/{business_id}/job-applications/{application_id}/resume-url",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "businesses",
									},
									map[string]any{
										"var": "business_id",
									},
									map[string]any{
										"lit": "job-applications",
									},
									map[string]any{
										"var": "job_application_id",
									},
									map[string]any{
										"lit": "resume-url",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"businesses",
									"{business_id}",
									"job-applications",
									"{job_application_id}",
									"resume-url",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"application_id": "job_application_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_loppee_admin_context",
											"orig": "X-Loppee-Admin-Context",
											"type": "`$STRING`",
											"kind": "header",
											"reqd": true,
										},
									},
									"params": []any{
										map[string]any{
											"name": "business_id",
											"orig": "business_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "job_application_id",
											"orig": "application_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"business_id",
										"job_application_id",
										"x_loppee_admin_context",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/businesses/{business_id}/jobs/{job_id}/close",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "businesses",
									},
									map[string]any{
										"var": "business_id",
									},
									map[string]any{
										"lit": "jobs",
									},
									map[string]any{
										"var": "job_id",
									},
									map[string]any{
										"lit": "close",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"businesses",
									"{business_id}",
									"jobs",
									"{job_id}",
									"close",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_loppee_admin_context",
											"orig": "X-Loppee-Admin-Context",
											"type": "`$STRING`",
											"kind": "header",
											"reqd": true,
										},
									},
									"params": []any{
										map[string]any{
											"name": "business_id",
											"orig": "business_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "job_id",
											"orig": "job_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"business_id",
										"job_id",
										"x_loppee_admin_context",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/businesses/{business_id}/messages/{thread_id}/moderate",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "businesses",
									},
									map[string]any{
										"var": "business_id",
									},
									map[string]any{
										"lit": "messages",
									},
									map[string]any{
										"var": "message_id",
									},
									map[string]any{
										"lit": "moderate",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"businesses",
									"{business_id}",
									"messages",
									"{message_id}",
									"moderate",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"thread_id": "message_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_loppee_admin_context",
											"orig": "X-Loppee-Admin-Context",
											"type": "`$STRING`",
											"kind": "header",
											"reqd": true,
										},
									},
									"params": []any{
										map[string]any{
											"name": "business_id",
											"orig": "business_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "message_id",
											"orig": "thread_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"business_id",
										"message_id",
										"x_loppee_admin_context",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/businesses/{business_id}/archived-records/{fact_id}/review",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "businesses",
									},
									map[string]any{
										"var": "business_id",
									},
									map[string]any{
										"lit": "archived-records",
									},
									map[string]any{
										"var": "archived_record_id",
									},
									map[string]any{
										"lit": "review",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"businesses",
									"{business_id}",
									"archived-records",
									"{archived_record_id}",
									"review",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"fact_id": "archived_record_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "archived_record_id",
											"orig": "fact_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "business_id",
											"orig": "business_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"archived_record_id",
										"business_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/ads/accounts/{account_id}/adjust",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "ads",
									},
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "adjust",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"ads",
									"accounts",
									"{account_id}",
									"adjust",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/ads/accounts/{account_id}/release-hold",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "ads",
									},
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "release-hold",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"ads",
									"accounts",
									"{account_id}",
									"release-hold",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/team/agents/{agent_id}/access",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "team",
									},
									map[string]any{
										"lit": "agents",
									},
									map[string]any{
										"var": "agent_id",
									},
									map[string]any{
										"lit": "access",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"team",
									"agents",
									"{agent_id}",
									"access",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "agent_id",
											"orig": "agent_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"agent_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/team/agents/{agent_id}/disable",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "team",
									},
									map[string]any{
										"lit": "agents",
									},
									map[string]any{
										"var": "agent_id",
									},
									map[string]any{
										"lit": "disable",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"team",
									"agents",
									"{agent_id}",
									"disable",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "agent_id",
											"orig": "agent_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"agent_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/team/agents/{agent_id}/rotate-key",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "team",
									},
									map[string]any{
										"lit": "agents",
									},
									map[string]any{
										"var": "agent_id",
									},
									map[string]any{
										"lit": "rotate-key",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"team",
									"agents",
									"{agent_id}",
									"rotate-key",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "agent_id",
											"orig": "agent_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"agent_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/team/agents/{agent_id}/scope",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "team",
									},
									map[string]any{
										"lit": "agents",
									},
									map[string]any{
										"var": "agent_id",
									},
									map[string]any{
										"lit": "scope",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"team",
									"agents",
									"{agent_id}",
									"scope",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "agent_id",
											"orig": "agent_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"agent_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/team/agents/{agent_id}/webhook",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "team",
									},
									map[string]any{
										"lit": "agents",
									},
									map[string]any{
										"var": "agent_id",
									},
									map[string]any{
										"lit": "webhook",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"team",
									"agents",
									"{agent_id}",
									"webhook",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"url": "`reqdata.url`",
									},
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "agent_id",
											"orig": "agent_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"agent_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/team/agents/{agent_id}/webhook/disable",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "team",
									},
									map[string]any{
										"lit": "agents",
									},
									map[string]any{
										"var": "agent_id",
									},
									map[string]any{
										"lit": "webhook",
									},
									map[string]any{
										"lit": "disable",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"team",
									"agents",
									"{agent_id}",
									"webhook",
									"disable",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.endpoint`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "agent_id",
											"orig": "agent_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"agent_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/team/agents/{agent_id}/webhook/rotate-secret",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "team",
									},
									map[string]any{
										"lit": "agents",
									},
									map[string]any{
										"var": "agent_id",
									},
									map[string]any{
										"lit": "webhook",
									},
									map[string]any{
										"lit": "rotate-secret",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"team",
									"agents",
									"{agent_id}",
									"webhook",
									"rotate-secret",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "agent_id",
											"orig": "agent_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"agent_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/team/agents/{agent_id}/webhook/test",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "team",
									},
									map[string]any{
										"lit": "agents",
									},
									map[string]any{
										"var": "agent_id",
									},
									map[string]any{
										"lit": "webhook",
									},
									map[string]any{
										"lit": "test",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"team",
									"agents",
									"{agent_id}",
									"webhook",
									"test",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "agent_id",
											"orig": "agent_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"agent_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/content/blocks/{block_key}/discard-draft",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "content",
									},
									map[string]any{
										"lit": "blocks",
									},
									map[string]any{
										"var": "block_key",
									},
									map[string]any{
										"lit": "discard-draft",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"content",
									"blocks",
									"{block_key}",
									"discard-draft",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "block_key",
											"orig": "block_key",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"block_key",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/content/blocks/{block_key}/draft",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "content",
									},
									map[string]any{
										"lit": "blocks",
									},
									map[string]any{
										"var": "block_key",
									},
									map[string]any{
										"lit": "draft",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"content",
									"blocks",
									"{block_key}",
									"draft",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "block_key",
											"orig": "block_key",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"block_key",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/content/blocks/{block_key}/publish",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "content",
									},
									map[string]any{
										"lit": "blocks",
									},
									map[string]any{
										"var": "block_key",
									},
									map[string]any{
										"lit": "publish",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"content",
									"blocks",
									"{block_key}",
									"publish",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "block_key",
											"orig": "block_key",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"block_key",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/content/blocks/{block_key}/revert",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "content",
									},
									map[string]any{
										"lit": "blocks",
									},
									map[string]any{
										"var": "block_key",
									},
									map[string]any{
										"lit": "revert",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"content",
									"blocks",
									"{block_key}",
									"revert",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "block_key",
											"orig": "block_key",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"block_key",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/ops/bulk-jobs/{job_id}/apply",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "ops",
									},
									map[string]any{
										"lit": "bulk-jobs",
									},
									map[string]any{
										"var": "bulk_job_id",
									},
									map[string]any{
										"lit": "apply",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"ops",
									"bulk-jobs",
									"{bulk_job_id}",
									"apply",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"job_id": "bulk_job_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "bulk_job_id",
											"orig": "job_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"bulk_job_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/ops/bulk-jobs/{job_id}/enqueue",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "ops",
									},
									map[string]any{
										"lit": "bulk-jobs",
									},
									map[string]any{
										"var": "bulk_job_id",
									},
									map[string]any{
										"lit": "enqueue",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"ops",
									"bulk-jobs",
									"{bulk_job_id}",
									"enqueue",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"job_id": "bulk_job_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "bulk_job_id",
											"orig": "job_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"bulk_job_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/ops/bulk-jobs/{job_id}/rollback",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "ops",
									},
									map[string]any{
										"lit": "bulk-jobs",
									},
									map[string]any{
										"var": "bulk_job_id",
									},
									map[string]any{
										"lit": "rollback",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"ops",
									"bulk-jobs",
									"{bulk_job_id}",
									"rollback",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"job_id": "bulk_job_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "bulk_job_id",
											"orig": "job_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"bulk_job_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/business-claims/{claim_id}/review",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "business-claims",
									},
									map[string]any{
										"var": "business_claim_id",
									},
									map[string]any{
										"lit": "review",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"business-claims",
									"{business_claim_id}",
									"review",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"claim_id": "business_claim_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "business_claim_id",
											"orig": "claim_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"business_claim_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/businesses/{business_id}/billing-comp",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "businesses",
									},
									map[string]any{
										"var": "business_id",
									},
									map[string]any{
										"lit": "billing-comp",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"businesses",
									"{business_id}",
									"billing-comp",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "business_id",
											"orig": "business_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"business_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/businesses/{business_id}/category",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "businesses",
									},
									map[string]any{
										"var": "business_id",
									},
									map[string]any{
										"lit": "category",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"businesses",
									"{business_id}",
									"category",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "business_id",
											"orig": "business_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"business_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/businesses/{business_id}/exposure-tier",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "businesses",
									},
									map[string]any{
										"var": "business_id",
									},
									map[string]any{
										"lit": "exposure-tier",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"businesses",
									"{business_id}",
									"exposure-tier",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "business_id",
											"orig": "business_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"business_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/businesses/{business_id}/facts",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "businesses",
									},
									map[string]any{
										"var": "business_id",
									},
									map[string]any{
										"lit": "facts",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"businesses",
									"{business_id}",
									"facts",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "business_id",
											"orig": "business_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"business_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/businesses/{business_id}/hours",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "businesses",
									},
									map[string]any{
										"var": "business_id",
									},
									map[string]any{
										"lit": "hours",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"businesses",
									"{business_id}",
									"hours",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "business_id",
											"orig": "business_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"business_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/businesses/{business_id}/lifecycle",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "businesses",
									},
									map[string]any{
										"var": "business_id",
									},
									map[string]any{
										"lit": "lifecycle",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"businesses",
									"{business_id}",
									"lifecycle",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "business_id",
											"orig": "business_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"business_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/ops/duplicate-candidates/{candidate_id}/merge-dry-run",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "ops",
									},
									map[string]any{
										"lit": "duplicate-candidates",
									},
									map[string]any{
										"var": "candidate_id",
									},
									map[string]any{
										"lit": "merge-dry-run",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"ops",
									"duplicate-candidates",
									"{candidate_id}",
									"merge-dry-run",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "candidate_id",
											"orig": "candidate_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "merge_dry_run",
									"exist": []any{
										"candidate_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/category-requests/{request_id}/review",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "category-requests",
									},
									map[string]any{
										"var": "category_request_id",
									},
									map[string]any{
										"lit": "review",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"category-requests",
									"{category_request_id}",
									"review",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"request_id": "category_request_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "category_request_id",
											"orig": "request_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"category_request_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/ads/clicks/{click_id}/credit",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "ads",
									},
									map[string]any{
										"lit": "clicks",
									},
									map[string]any{
										"var": "click_id",
									},
									map[string]any{
										"lit": "credit",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"ads",
									"clicks",
									"{click_id}",
									"credit",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "click_id",
											"orig": "click_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"click_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/ads/clicks/{click_id}/invalid",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "ads",
									},
									map[string]any{
										"lit": "clicks",
									},
									map[string]any{
										"var": "click_id",
									},
									map[string]any{
										"lit": "invalid",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"ads",
									"clicks",
									"{click_id}",
									"invalid",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "click_id",
											"orig": "click_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"click_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/ads/comped/{campaign_id}/end",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "ads",
									},
									map[string]any{
										"lit": "comped",
									},
									map[string]any{
										"var": "comped_id",
									},
									map[string]any{
										"lit": "end",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"ads",
									"comped",
									"{comped_id}",
									"end",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"campaign_id": "comped_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "comped_id",
											"orig": "campaign_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"comped_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/ai-connections/{connection_id}/rotate",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "ai-connections",
									},
									map[string]any{
										"var": "connection_id",
									},
									map[string]any{
										"lit": "rotate",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"ai-connections",
									"{connection_id}",
									"rotate",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"api_key": "`reqdata.api_key`",
									},
									"res": "`body.connection`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "connection_id",
											"orig": "connection_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "rotate",
									"exist": []any{
										"connection_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/ai-connections/{connection_id}/test",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "ai-connections",
									},
									map[string]any{
										"var": "connection_id",
									},
									map[string]any{
										"lit": "test",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"ai-connections",
									"{connection_id}",
									"test",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "connection_id",
											"orig": "connection_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "test",
									"exist": []any{
										"connection_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/coupons/{coupon_id}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "coupons",
									},
									map[string]any{
										"var": "coupon_id",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"coupons",
									"{coupon_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "coupon_id",
											"orig": "coupon_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"coupon_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/deals/{deal_id}/moderate",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "deals",
									},
									map[string]any{
										"var": "deal_id",
									},
									map[string]any{
										"lit": "moderate",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"deals",
									"{deal_id}",
									"moderate",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "deal_id",
											"orig": "deal_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"deal_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/ads/review/{id}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "ads",
									},
									map[string]any{
										"lit": "review",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"ads",
									"review",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/team/invites/{invite_id}/revoke",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "team",
									},
									map[string]any{
										"lit": "invites",
									},
									map[string]any{
										"var": "invite_id",
									},
									map[string]any{
										"lit": "revoke",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"team",
									"invites",
									"{invite_id}",
									"revoke",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "invite_id",
											"orig": "invite_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"invite_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/switches/{key}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "switches",
									},
									map[string]any{
										"var": "key",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"switches",
									"{key}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"reason": "`reqdata.reason`",
										"value": "`reqdata.value`",
									},
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "key",
											"orig": "key",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"key",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/license-record-reports/{report_id}/resolve",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "license-record-reports",
									},
									map[string]any{
										"var": "license_record_report_id",
									},
									map[string]any{
										"lit": "resolve",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"license-record-reports",
									"{license_record_report_id}",
									"resolve",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"report_id": "license_record_report_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "license_record_report_id",
											"orig": "report_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"license_record_report_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/v3/manual-verification-submissions/{submission_id}/decision",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "v3",
									},
									map[string]any{
										"lit": "manual-verification-submissions",
									},
									map[string]any{
										"var": "manual_verification_submission_id",
									},
									map[string]any{
										"lit": "decision",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"v3",
									"manual-verification-submissions",
									"{manual_verification_submission_id}",
									"decision",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"submission_id": "manual_verification_submission_id",
									},
								},
								"transform": map[string]any{
									"req": map[string]any{
										"active_or_good_standing": "`reqdata.active_or_good_standing`",
										"confirmation": "`reqdata.confirmation`",
										"credential_expires_at": "`reqdata.credential_expires_at`",
										"holder_name_match": "`reqdata.holder_name_match`",
										"identifier_match": "`reqdata.identifier_match`",
										"observed_at": "`reqdata.observed_at`",
										"outcome": "`reqdata.outcome`",
										"owner_reason_code": "`reqdata.owner_reason_code`",
										"reason": "`reqdata.reason`",
										"source_authority": "`reqdata.source_authority`",
										"source_url": "`reqdata.source_url`",
										"valid_until": "`reqdata.valid_until`",
										"verification_method": "`reqdata.verification_method`",
										"verified_service_scope": "`reqdata.verified_service_scope`",
									},
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "manual_verification_submission_id",
											"orig": "submission_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"manual_verification_submission_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/content/media/{media_id}/delete",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "content",
									},
									map[string]any{
										"lit": "media",
									},
									map[string]any{
										"var": "media_id",
									},
									map[string]any{
										"lit": "delete",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"content",
									"media",
									"{media_id}",
									"delete",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "media_id",
											"orig": "media_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"media_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/media/{asset_id}/remove",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "media",
									},
									map[string]any{
										"var": "media_id",
									},
									map[string]any{
										"lit": "remove",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"media",
									"{media_id}",
									"remove",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"asset_id": "media_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "media_id",
											"orig": "asset_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"media_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/assistant-provider/{provider}/test",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "assistant-provider",
									},
									map[string]any{
										"var": "provider",
									},
									map[string]any{
										"lit": "test",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"assistant-provider",
									"{provider}",
									"test",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "provider",
											"orig": "provider",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "test",
									"exist": []any{
										"provider",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/ads/refund-requests/{request_id}/approve",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "ads",
									},
									map[string]any{
										"lit": "refund-requests",
									},
									map[string]any{
										"var": "refund_request_id",
									},
									map[string]any{
										"lit": "approve",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"ads",
									"refund-requests",
									"{refund_request_id}",
									"approve",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"request_id": "refund_request_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "refund_request_id",
											"orig": "request_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"refund_request_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/ads/refund-requests/{request_id}/reject",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "ads",
									},
									map[string]any{
										"lit": "refund-requests",
									},
									map[string]any{
										"var": "refund_request_id",
									},
									map[string]any{
										"lit": "reject",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"ads",
									"refund-requests",
									"{refund_request_id}",
									"reject",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"request_id": "refund_request_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "refund_request_id",
											"orig": "request_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"refund_request_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/v3/review-anomalies/{flag_id}/resolve",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "v3",
									},
									map[string]any{
										"lit": "review-anomalies",
									},
									map[string]any{
										"var": "review_anomaly_id",
									},
									map[string]any{
										"lit": "resolve",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"v3",
									"review-anomalies",
									"{review_anomaly_id}",
									"resolve",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"flag_id": "review_anomaly_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "review_anomaly_id",
											"orig": "flag_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"review_anomaly_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/reviews/{review_id}/moderate",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "reviews",
									},
									map[string]any{
										"var": "review_id",
									},
									map[string]any{
										"lit": "moderate",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"reviews",
									"{review_id}",
									"moderate",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "review_id",
											"orig": "review_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"review_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/service-accounts/{account_id}/status",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "service-accounts",
									},
									map[string]any{
										"var": "service_account_id",
									},
									map[string]any{
										"lit": "status",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"service-accounts",
									"{service_account_id}",
									"status",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"account_id": "service_account_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "service_account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"service_account_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/support/{conversation_id}/ai-draft",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "support",
									},
									map[string]any{
										"var": "support_id",
									},
									map[string]any{
										"lit": "ai-draft",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"support",
									"{support_id}",
									"ai-draft",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"conversation_id": "support_id",
									},
								},
								"transform": map[string]any{
									"req": map[string]any{
										"instruction": "`reqdata.instruction`",
									},
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "support_id",
											"orig": "conversation_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"support_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/support/{conversation_id}/assign",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "support",
									},
									map[string]any{
										"var": "support_id",
									},
									map[string]any{
										"lit": "assign",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"support",
									"{support_id}",
									"assign",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"conversation_id": "support_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.conversation`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "support_id",
											"orig": "conversation_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"support_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/support/{conversation_id}/read",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "support",
									},
									map[string]any{
										"var": "support_id",
									},
									map[string]any{
										"lit": "read",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"support",
									"{support_id}",
									"read",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"conversation_id": "support_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "support_id",
											"orig": "conversation_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"support_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/support/{conversation_id}/reply",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "support",
									},
									map[string]any{
										"var": "support_id",
									},
									map[string]any{
										"lit": "reply",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"support",
									"{support_id}",
									"reply",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"conversation_id": "support_id",
									},
								},
								"transform": map[string]any{
									"req": map[string]any{
										"ai_draft_id": "`reqdata.ai_draft_id`",
										"body": "`reqdata.body`",
									},
									"res": "`body.conversation`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "support_id",
											"orig": "conversation_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"support_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/support/{conversation_id}/status",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "support",
									},
									map[string]any{
										"var": "support_id",
									},
									map[string]any{
										"lit": "status",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"support",
									"{support_id}",
									"status",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"conversation_id": "support_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.conversation`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "support_id",
											"orig": "conversation_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"support_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/support/{conversation_id}/typing",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "support",
									},
									map[string]any{
										"var": "support_id",
									},
									map[string]any{
										"lit": "typing",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"support",
									"{support_id}",
									"typing",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"conversation_id": "support_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "support_id",
											"orig": "conversation_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"support_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/team/members/{user_id}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "team",
									},
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "user_id",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"team",
									"members",
									"{user_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "user_id",
											"orig": "user_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"user_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/team/members/{user_id}/remove",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "team",
									},
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "user_id",
									},
									map[string]any{
										"lit": "remove",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"team",
									"members",
									"{user_id}",
									"remove",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "user_id",
											"orig": "user_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "remove",
									"exist": []any{
										"user_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/ops/worker-tasks/{task_id}/control",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "ops",
									},
									map[string]any{
										"lit": "worker-tasks",
									},
									map[string]any{
										"var": "worker_task_id",
									},
									map[string]any{
										"lit": "control",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"ops",
									"worker-tasks",
									"{worker_task_id}",
									"control",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"task_id": "worker_task_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "worker_task_id",
											"orig": "task_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"worker_task_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/access-contexts",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "access-contexts",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"access-contexts",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"context_id": "`reqdata.context_id`",
										"context_type": "`reqdata.context_type`",
										"purpose_code": "`reqdata.purpose_code`",
										"related_case_id": "`reqdata.related_case_id`",
										"scope": "`reqdata.scope`",
									},
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/ads/comped",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "ads",
									},
									map[string]any{
										"lit": "comped",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"ads",
									"comped",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/ads/invites",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "ads",
									},
									map[string]any{
										"lit": "invites",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"ads",
									"invites",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/ads/moderation",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "ads",
									},
									map[string]any{
										"lit": "moderation",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"ads",
									"moderation",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/ads/reconciliation/run",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "ads",
									},
									map[string]any{
										"lit": "reconciliation",
									},
									map[string]any{
										"lit": "run",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"ads",
									"reconciliation",
									"run",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/ai-connections",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "ai-connections",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"ai-connections",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"api_key": "`reqdata.api_key`",
										"provider": "`reqdata.provider`",
									},
									"res": "`body.connection`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/assistant-provider/active",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "assistant-provider",
									},
									map[string]any{
										"lit": "active",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"assistant-provider",
									"active",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"provider": "`reqdata.provider`",
									},
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/businesses",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "businesses",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"businesses",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/content/media",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "content",
									},
									map[string]any{
										"lit": "media",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"content",
									"media",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/coupons",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "coupons",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"coupons",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/florida-seo/reviews/inspect",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "florida-seo",
									},
									map[string]any{
										"lit": "reviews",
									},
									map[string]any{
										"lit": "inspect",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"florida-seo",
									"reviews",
									"inspect",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"business_ids": "`reqdata.business_id`",
									},
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/ops/category-mappings",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "ops",
									},
									map[string]any{
										"lit": "category-mappings",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"ops",
									"category-mappings",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/ops/category-remap/dry-run",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "ops",
									},
									map[string]any{
										"lit": "category-remap",
									},
									map[string]any{
										"lit": "dry-run",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"ops",
									"category-remap",
									"dry-run",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/ops/category-remap/selection-dry-run",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "ops",
									},
									map[string]any{
										"lit": "category-remap",
									},
									map[string]any{
										"lit": "selection-dry-run",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"ops",
									"category-remap",
									"selection-dry-run",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/ops/quality-scan/dry-run",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "ops",
									},
									map[string]any{
										"lit": "quality-scan",
									},
									map[string]any{
										"lit": "dry-run",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"ops",
									"quality-scan",
									"dry-run",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/pricing-content/discard-draft",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "pricing-content",
									},
									map[string]any{
										"lit": "discard-draft",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"pricing-content",
									"discard-draft",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/pricing-content/draft",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "pricing-content",
									},
									map[string]any{
										"lit": "draft",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"pricing-content",
									"draft",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/pricing-content/publish",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "pricing-content",
									},
									map[string]any{
										"lit": "publish",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"pricing-content",
									"publish",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/reviews/reports/bulk-dismiss",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "reviews",
									},
									map[string]any{
										"lit": "reports",
									},
									map[string]any{
										"lit": "bulk-dismiss",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"reviews",
									"reports",
									"bulk-dismiss",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/team/agents",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "team",
									},
									map[string]any{
										"lit": "agents",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"team",
									"agents",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/team/invites",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "team",
									},
									map[string]any{
										"lit": "invites",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"team",
									"invites",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/v1/admin/ops/duplicate-candidates/{candidate_id}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "ops",
									},
									map[string]any{
										"lit": "duplicate-candidates",
									},
									map[string]any{
										"var": "candidate_id",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"ops",
									"duplicate-candidates",
									"{candidate_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "candidate_id",
											"orig": "candidate_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"candidate_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/v1/admin/ops/category-mappings/{mapping_id}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "ops",
									},
									map[string]any{
										"lit": "category-mappings",
									},
									map[string]any{
										"var": "mapping_id",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"ops",
									"category-mappings",
									"{mapping_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "mapping_id",
											"orig": "mapping_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"mapping_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/v1/admin/ops/quality-signals/{signal_id}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "ops",
									},
									map[string]any{
										"lit": "quality-signals",
									},
									map[string]any{
										"var": "signal_id",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"ops",
									"quality-signals",
									"{signal_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "signal_id",
											"orig": "signal_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"signal_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/v1/admin/verification-cases/{business_id}/management",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "verification-cases",
									},
									map[string]any{
										"var": "verification_case_id",
									},
									map[string]any{
										"lit": "management",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"verification-cases",
									"{verification_case_id}",
									"management",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"business_id": "verification_case_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "verification_case_id",
											"orig": "business_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"verification_case_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/v1/admin/support/{conversation_id}/ai-drafts/{draft_id}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "support",
									},
									map[string]any{
										"var": "support_id",
									},
									map[string]any{
										"lit": "ai-drafts",
									},
									map[string]any{
										"var": "draft_id",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"support",
									"{support_id}",
									"ai-drafts",
									"{draft_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"conversation_id": "support_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "draft_id",
											"orig": "draft_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "support_id",
											"orig": "conversation_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"draft_id",
										"support_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/v1/admin/access-contexts/{access_context_id}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "access-contexts",
									},
									map[string]any{
										"var": "access_context_id",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"access-contexts",
									"{access_context_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "access_context_id",
											"orig": "access_context_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"access_context_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/v1/admin/ai-connections/{connection_id}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "ai-connections",
									},
									map[string]any{
										"var": "connection_id",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"ai-connections",
									"{connection_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "connection_id",
											"orig": "connection_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"connection_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/v1/admin/coupons/{coupon_id}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "coupons",
									},
									map[string]any{
										"var": "coupon_id",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"coupons",
									"{coupon_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "coupon_id",
											"orig": "coupon_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"coupon_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/v1/admin/assistant-provider/{provider}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "assistant-provider",
									},
									map[string]any{
										"var": "provider",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"assistant-provider",
									"{provider}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "provider",
											"orig": "provider",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"provider",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/v1/admin/ai-workload-bindings/{workload}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "ai-workload-bindings",
									},
									map[string]any{
										"var": "workload",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"ai-workload-bindings",
									"{workload}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "workload",
											"orig": "workload",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"workload",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/v1/admin/assistant-provider/{provider}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "assistant-provider",
									},
									map[string]any{
										"var": "provider",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"assistant-provider",
									"{provider}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"api_key": "`reqdata.api_key`",
										"base_url": "`reqdata.base_url`",
										"custom_wire": "`reqdata.custom_wire`",
										"make_active": "`reqdata.make_active`",
										"model": "`reqdata.model`",
									},
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "provider",
											"orig": "provider",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"provider",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/v1/admin/ai-workload-bindings/{workload}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "ai-workload-bindings",
									},
									map[string]any{
										"var": "workload",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"ai-workload-bindings",
									"{workload}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"connection_id": "`reqdata.connection_id`",
										"enabled": "`reqdata.enabled`",
										"model_id": "`reqdata.model_id`",
									},
									"res": "`body.binding`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "workload",
											"orig": "workload",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"workload",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/v1/admin/ads/reserves",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "ads",
									},
									map[string]any{
										"lit": "reserves",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"ads",
									"reserves",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/v1/admin/ads/settings/topup-limits",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "ads",
									},
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "topup-limits",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"ads",
									"settings",
									"topup-limits",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.business_claim",
						},
						[]any{
							"$.main.kit.entity.review",
						},
						[]any{
							"$.main.kit.entity.job_application",
						},
						[]any{
							"$.main.kit.entity.message",
						},
					},
				},
			},
			"owner_notification": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "businessId",
						"title": "Business Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "dedupeKey",
						"title": "Dedupe Key",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "emailStatus",
						"title": "Email Status",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "eventType",
						"title": "Event Type",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "readAt",
						"title": "Read At",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
					},
					map[string]any{
						"name": "resourceId",
						"title": "Resource Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "resourceKind",
						"title": "Resource Kind",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "resourceUrl",
						"title": "Resource Url",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "summary",
						"title": "Summary",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "webhookStatus",
						"title": "Webhook Status",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "owner_notification",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/notifications/{notification_id}/read",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "notifications",
									},
									map[string]any{
										"var": "notification_id",
									},
									map[string]any{
										"lit": "read",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"notifications",
									"{notification_id}",
									"read",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.notification`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "notification_id",
											"orig": "notification_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"notification_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"owner_notification_setting": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "businessId",
						"title": "Business Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "business_id",
						"title": "Business Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "emailEnabled",
						"title": "Email Enabled",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "email_enabled",
						"title": "Email Enabled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "eventTypeSubscriptions",
						"title": "Event Type Subscriptions",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "event_types",
						"title": "Event Types",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "webhookEnabled",
						"title": "Webhook Enabled",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "webhook_enabled",
						"title": "Webhook Enabled",
						"type": "`$BOOLEAN`",
					},
				},
				"name": "owner_notification_setting",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/notification-settings",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "notification-settings",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"notification-settings",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"business_id": "`reqdata.business_id`",
										"email_enabled": "`reqdata.email_enabled`",
										"event_types": "`reqdata.event_type`",
										"webhook_enabled": "`reqdata.webhook_enabled`",
									},
									"res": "`body.settings`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"owner_webhook_endpoint": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "businessId",
						"title": "Business Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "enabled",
						"title": "Enabled",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "eventTypeSubscriptions",
						"title": "Event Type Subscriptions",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "failureCount",
						"title": "Failure Count",
						"type": "`$NUMBER`",
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "lastDeliveryAt",
						"title": "Last Delivery At",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "owner_webhook_endpoint",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/webhooks/{endpoint_id}/disable",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "webhooks",
									},
									map[string]any{
										"var": "webhook_id",
									},
									map[string]any{
										"lit": "disable",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"webhooks",
									"{webhook_id}",
									"disable",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"endpoint_id": "webhook_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.endpoint`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "webhook_id",
											"orig": "endpoint_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"webhook_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"owner_webhook_registration": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "business_id",
						"title": "Business Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "endpoint",
						"title": "Endpoint",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "event_types",
						"title": "Event Types",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "one_time_display",
						"title": "One Time Display",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "signing_secret",
						"title": "Signing Secret",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"name": "owner_webhook_registration",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/webhooks/{endpoint_id}/rotate-secret",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "webhooks",
									},
									map[string]any{
										"var": "webhook_id",
									},
									map[string]any{
										"lit": "rotate-secret",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"webhooks",
									"{webhook_id}",
									"rotate-secret",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"endpoint_id": "webhook_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "webhook_id",
											"orig": "endpoint_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"webhook_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/owner/webhooks",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "owner",
									},
									map[string]any{
										"lit": "webhooks",
									},
								},
								"parts": []any{
									"v1",
									"owner",
									"webhooks",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"business_id": "`reqdata.business_id`",
										"event_types": "`reqdata.event_type`",
										"url": "`reqdata.url`",
									},
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"pricing": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "billing",
						"title": "Billing",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "branch_add_ons",
						"title": "Branch Add Ons",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "currency",
						"title": "Currency",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "generated_at",
						"title": "Generated At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "neutrality",
						"title": "Neutrality",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "plans",
						"title": "Plans",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "promotions",
						"title": "Promotions",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "published_at",
						"title": "Published At",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
					},
					map[string]any{
						"name": "radius_extension",
						"title": "Radius Extension",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "revision_id",
						"title": "Revision Id",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
					},
					map[string]any{
						"name": "source",
						"title": "Source",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "trust_model_version",
						"title": "Trust Model Version",
						"type": "`$ANY`",
						"req": true,
					},
				},
				"name": "pricing",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v1/pricing",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "pricing",
									},
								},
								"parts": []any{
									"v1",
									"pricing",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"promote_verified_transaction": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "business_id",
						"title": "Business Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "evidence_id",
						"title": "Evidence Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "interaction_id",
						"title": "Interaction Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "ok",
						"title": "Ok",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "review_upgraded",
						"title": "Review Upgraded",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "trust_weight",
						"title": "Trust Weight",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "verified",
						"title": "Verified",
						"type": "`$BOOLEAN`",
						"req": true,
					},
				},
				"name": "promote_verified_transaction",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/actions/promote-verified-transaction",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"lit": "promote-verified-transaction",
									},
								},
								"parts": []any{
									"v1",
									"actions",
									"promote-verified-transaction",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"business_id": "`reqdata.business_id`",
										"evidence_id": "`reqdata.evidence_id`",
									},
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"public_content": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "blocks",
						"title": "Blocks",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "generated_at",
						"title": "Generated At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "source",
						"title": "Source",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "trust_model_version",
						"title": "Trust Model Version",
						"type": "`$ANY`",
						"req": true,
					},
				},
				"name": "public_content",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v1/content",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "content",
									},
								},
								"parts": []any{
									"v1",
									"content",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"recommend": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "candidate_window_truncated",
						"title": "Candidate Window Truncated",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "True when Loppee's bounded candidate assembly reached its safety cap.",
					},
					map[string]any{
						"name": "commercial_influence",
						"title": "Commercial Influence",
						"type": "`$STRING`",
						"req": true,
						"short": "Must be none whenever current-location or saved_exact authority is absent, including universal exact/genuine-prefix name lookup.",
					},
					map[string]any{
						"name": "display_count",
						"title": "Display Count",
						"type": "`$INTEGER`",
						"short": "Agent-key responses: the number of businesses in this response.",
					},
					map[string]any{
						"name": "endpoint",
						"title": "Endpoint",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "fallback_registry",
						"title": "Fallback Registry",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "generated_at",
						"title": "Generated At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "has_more",
						"title": "Has More",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "True only when next_cursor can continue through the current bounded, deterministic candidate window.",
					},
					map[string]any{
						"name": "listed",
						"title": "Listed",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "location_context",
						"title": "Location Context",
						"type": "`$ANY`",
						"req": true,
						"short": "Local category discovery and recommendations require a current precise location proof or handoff, a user-confirmed validated destination authority, or a saved_exact Home location.",
					},
					map[string]any{
						"name": "ordering",
						"title": "Ordering",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "policy",
						"title": "Policy",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "presentation_guidance",
						"title": "Presentation Guidance",
						"type": "`$STRING`",
						"short": "Agent-key responses: how to present these results to the customer.",
					},
					map[string]any{
						"name": "query",
						"title": "Query",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "ranking_policy",
						"title": "Ranking Policy",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "registry_count_basis",
						"title": "Registry Count Basis",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "registry_count_observed_at",
						"title": "Registry Count Observed At",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
					},
					map[string]any{
						"name": "registry_name",
						"title": "Registry Name",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "results",
						"title": "Results",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "returned_count",
						"title": "Returned Count",
						"type": "`$INTEGER`",
						"req": true,
					},
					map[string]any{
						"name": "reviewed_registry",
						"title": "Reviewed Registry",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "schema_version",
						"title": "Schema Version",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "search_intent",
						"title": "Search Intent",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "suggestions",
						"title": "Suggestions",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "total_matches",
						"title": "Total Matches",
						"type": "`$INTEGER`",
						"short": "Web and app responses.",
					},
					map[string]any{
						"name": "total_matches_basis",
						"title": "Total Matches Basis",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "total_registry_records",
						"title": "Total Registry Records",
						"type": "`$INTEGER`",
						"req": true,
					},
					map[string]any{
						"name": "trust_model_version",
						"title": "Trust Model Version",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "verified",
						"title": "Verified",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "visible_candidate_records",
						"title": "Visible Candidate Records",
						"type": "`$INTEGER`",
						"short": "Web and app responses.",
					},
				},
				"name": "recommend",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v1/recommend",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "recommend",
									},
								},
								"parts": []any{
									"v1",
									"recommend",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "allowed_action",
											"orig": "allowed_action",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "category",
											"orig": "category",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "city",
											"orig": "city",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 10,
										},
										map[string]any{
											"name": "location_handoff_id",
											"orig": "location_handoff_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "location_proof_id",
											"orig": "location_proof_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "location_selection",
											"orig": "location_selection",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "q",
											"orig": "q",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "radius_mile",
											"orig": "radius_miles",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "saved_location_ref",
											"orig": "saved_location_ref",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "state",
											"orig": "state",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "zip",
											"orig": "zip",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"review": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "account_id",
						"title": "Account Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "attestation_accepted",
						"title": "Attestation Accepted",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Set true only after the customer confirms this describes their own experience and explicitly approves publishing the displayed business, star rating, title, and full review.",
					},
					map[string]any{
						"name": "customer_confirmed",
						"title": "Customer Confirmed",
						"type": "`$BOOLEAN`",
						"short": "Set true to confirm you were a customer of this business.",
					},
					map[string]any{
						"name": "message",
						"title": "Message",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "rating",
						"title": "Rating",
						"type": "`$INTEGER`",
						"req": true,
					},
					map[string]any{
						"name": "service_date",
						"title": "Service Date",
						"type": "`$ANY`",
						"short": "Optional real, non-future service date in YYYY-MM-DD format; empty means not provided.",
					},
					map[string]any{
						"name": "subject",
						"title": "Subject",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "target_business_id",
						"title": "Target Business Id",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"name": "review",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/actions/public-review",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"lit": "public-review",
									},
								},
								"parts": []any{
									"v1",
									"actions",
									"public-review",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"attestation_accepted": "`reqdata.attestation_accepted`",
										"customer_confirmed": "`reqdata.customer_confirmed`",
										"message": "`reqdata.message`",
										"rating": "`reqdata.rating`",
										"service_date": "`reqdata.service_date`",
										"subject": "`reqdata.subject`",
										"target_business_id": "`reqdata.target_business_id`",
									},
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/actions/review",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"lit": "review",
									},
								},
								"parts": []any{
									"v1",
									"actions",
									"review",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"account_id": "`reqdata.account_id`",
										"attestation_accepted": "`reqdata.attestation_accepted`",
										"customer_confirmed": "`reqdata.customer_confirmed`",
										"message": "`reqdata.message`",
										"rating": "`reqdata.rating`",
										"service_date": "`reqdata.service_date`",
										"subject": "`reqdata.subject`",
										"target_business_id": "`reqdata.target_business_id`",
									},
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"revoke": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "account_id",
						"title": "Account Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "key_id",
						"title": "Key Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "revoked_by",
						"title": "Revoked By",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$ANY`",
						"req": true,
					},
				},
				"name": "revoke",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/agent-keys/{key_id}/revoke",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "agent-keys",
									},
									map[string]any{
										"var": "agent_key_id",
									},
									map[string]any{
										"lit": "revoke",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"agent-keys",
									"{agent_key_id}",
									"revoke",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"key_id": "agent_key_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "agent_key_id",
											"orig": "key_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"agent_key_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"save_business": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "account_id",
						"title": "Account Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "business_id",
						"title": "Business Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "business_name",
						"title": "Business Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "business_source",
						"title": "Business Source",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "category",
						"title": "Category",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "city",
						"title": "City",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "notes",
						"title": "Notes",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "saved_business_id",
						"title": "Saved Business Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "state",
						"title": "State",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$ANY`",
						"req": true,
					},
				},
				"name": "save_business",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/actions/save-business",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"lit": "save-business",
									},
								},
								"parts": []any{
									"v1",
									"actions",
									"save-business",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"account_id": "`reqdata.account_id`",
										"business_id": "`reqdata.business_id`",
										"business_name": "`reqdata.business_name`",
										"business_source": "`reqdata.business_source`",
										"category": "`reqdata.category`",
										"city": "`reqdata.city`",
										"notes": "`reqdata.note`",
										"state": "`reqdata.state`",
									},
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"saved_business": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "account_id",
						"title": "Account Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "count",
						"title": "Count",
						"type": "`$NUMBER`",
						"req": true,
					},
					map[string]any{
						"name": "limit",
						"title": "Limit",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "saved_businesses",
						"title": "Saved Businesses",
						"type": "`$ARRAY`",
						"req": true,
					},
				},
				"name": "saved_business",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/actions/list-saved-businesses",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"lit": "list-saved-businesses",
									},
								},
								"parts": []any{
									"v1",
									"actions",
									"list-saved-businesses",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"account_id": "`reqdata.account_id`",
										"limit": "`reqdata.limit`",
									},
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"saved_location": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "available",
						"title": "Available",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "coordinates_returned",
						"title": "Coordinates Returned",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "kind",
						"title": "Kind",
						"type": "`$ANY`",
						"req": true,
						"short": "Only saved_exact is precise local-discovery authority.",
					},
					map[string]any{
						"name": "label",
						"title": "Label",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "location_proof_id",
						"title": "Location Proof Id",
						"type": "`$STRING`",
						"format": "uuid",
					},
					map[string]any{
						"name": "reach_precision",
						"title": "Reach Precision",
						"type": "`$ANY`",
						"req": true,
						"short": "Exact can authorize local category/recommendation reach; coarse cannot activate local results, Sponsored placement, or impressions.",
					},
					map[string]any{
						"name": "saved_location_ref",
						"title": "Saved Location Ref",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
					},
					map[string]any{
						"name": "updated_at",
						"title": "Updated At",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "zip",
						"title": "Zip",
						"type": "`$STRING`",
					},
				},
				"name": "saved_location",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/v1/account/location",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "location",
									},
								},
								"parts": []any{
									"v1",
									"account",
									"location",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/v1/account/location",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "account",
									},
									map[string]any{
										"lit": "location",
									},
								},
								"parts": []any{
									"v1",
									"account",
									"location",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"label": "`reqdata.label`",
										"location_proof_id": "`reqdata.location_proof_id`",
										"zip": "`reqdata.zip`",
									},
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"search": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "candidate_window_truncated",
						"title": "Candidate Window Truncated",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "True when Loppee's bounded candidate assembly reached its safety cap.",
					},
					map[string]any{
						"name": "commercial_influence",
						"title": "Commercial Influence",
						"type": "`$STRING`",
						"req": true,
						"short": "Must be none whenever current-location or saved_exact authority is absent, including universal exact/genuine-prefix name lookup.",
					},
					map[string]any{
						"name": "display_count",
						"title": "Display Count",
						"type": "`$INTEGER`",
						"short": "Agent-key responses: the number of businesses in this response.",
					},
					map[string]any{
						"name": "generated_at",
						"title": "Generated At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "has_more",
						"title": "Has More",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "True only when next_cursor can continue through the current bounded, deterministic candidate window.",
					},
					map[string]any{
						"name": "location_context",
						"title": "Location Context",
						"type": "`$ANY`",
						"req": true,
						"short": "Local category discovery and recommendations require a current precise location proof or handoff, a user-confirmed validated destination authority, or a saved_exact Home location.",
					},
					map[string]any{
						"name": "next_cursor",
						"title": "Next Cursor",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
					},
					map[string]any{
						"name": "page_limit",
						"title": "Page Limit",
						"type": "`$INTEGER`",
						"req": true,
					},
					map[string]any{
						"name": "policy",
						"title": "Policy",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "presentation_guidance",
						"title": "Presentation Guidance",
						"type": "`$STRING`",
						"short": "Agent-key responses: how to present these results to the customer.",
					},
					map[string]any{
						"name": "query",
						"title": "Query",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "ranking_policy",
						"title": "Ranking Policy",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "registry_count_basis",
						"title": "Registry Count Basis",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "registry_count_observed_at",
						"title": "Registry Count Observed At",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
					},
					map[string]any{
						"name": "registry_name",
						"title": "Registry Name",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "results",
						"title": "Results",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "returned_count",
						"title": "Returned Count",
						"type": "`$INTEGER`",
						"req": true,
					},
					map[string]any{
						"name": "schema_version",
						"title": "Schema Version",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "search_intent",
						"title": "Search Intent",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "suggestions",
						"title": "Suggestions",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "total_matches",
						"title": "Total Matches",
						"type": "`$INTEGER`",
						"short": "Web and app responses.",
					},
					map[string]any{
						"name": "total_matches_basis",
						"title": "Total Matches Basis",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "total_registry_records",
						"title": "Total Registry Records",
						"type": "`$INTEGER`",
						"req": true,
					},
					map[string]any{
						"name": "trust_model_version",
						"title": "Trust Model Version",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "visible_candidate_records",
						"title": "Visible Candidate Records",
						"type": "`$INTEGER`",
						"short": "Web and app responses.",
					},
				},
				"name": "search",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v1/business-claim/candidates",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "business-claim",
									},
									map[string]any{
										"lit": "candidates",
									},
								},
								"parts": []any{
									"v1",
									"business-claim",
									"candidates",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.results`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "city",
											"orig": "city",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "q",
											"orig": "q",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "Elite AC LLC",
										},
										map[string]any{
											"name": "state",
											"orig": "state",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "zip",
											"orig": "zip",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"q",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v1/search",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "search",
									},
								},
								"parts": []any{
									"v1",
									"search",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.results`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "category",
											"orig": "category",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "city",
											"orig": "city",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "consumer_reach",
											"orig": "consumer_reach",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "include_directory_listing",
											"orig": "include_directory_listings",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": true,
										},
										map[string]any{
											"name": "intent",
											"orig": "intent",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 10,
										},
										map[string]any{
											"name": "location_handoff_id",
											"orig": "location_handoff_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "location_proof_id",
											"orig": "location_proof_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "location_selection",
											"orig": "location_selection",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "paid_only",
											"orig": "paid_only",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "q",
											"orig": "q",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "radius_mile",
											"orig": "radius_miles",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "saved_location_ref",
											"orig": "saved_location_ref",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "search_intent",
											"orig": "search_intent",
											"type": "`$STRING`",
											"kind": "query",
											"field": true,
										},
										map[string]any{
											"name": "state",
											"orig": "state",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "zip",
											"orig": "zip",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"suggest": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "categories",
						"title": "Categories",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "names",
						"title": "Names",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "query",
						"title": "Query",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "schema_version",
						"title": "Schema Version",
						"type": "`$ANY`",
						"req": true,
					},
				},
				"name": "suggest",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v1/suggest",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "suggest",
									},
								},
								"parts": []any{
									"v1",
									"suggest",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "q",
											"orig": "q",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"support_internal_note": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "authorLabel",
						"title": "Author Label",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "body",
						"title": "Body",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "support_internal_note",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/support/{conversation_id}/internal-notes",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "support",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "internal-notes",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"support",
									"{id}",
									"internal-notes",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"conversation_id": "id",
									},
								},
								"transform": map[string]any{
									"req": map[string]any{
										"body": "`reqdata.body`",
									},
									"res": "`body.note`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "conversation_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"support_workflow": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "category",
						"title": "Category",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "priority",
						"title": "Priority",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "waiting_on",
						"title": "Waiting On",
						"type": "`$ANY`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "support_workflow",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/support/{conversation_id}/workflow",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "support",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "workflow",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"support",
									"{id}",
									"workflow",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"conversation_id": "id",
									},
								},
								"transform": map[string]any{
									"req": map[string]any{
										"category": "`reqdata.category`",
										"priority": "`reqdata.priority`",
										"waiting_on": "`reqdata.waiting_on`",
									},
									"res": "`body.conversation`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "conversation_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"taxonomy_suggestion": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "alias",
						"title": "Alias",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "path_titles",
						"title": "Path Titles",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "title",
						"title": "Title",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"name": "taxonomy_suggestion",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v1/taxonomy/suggest",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "taxonomy",
									},
									map[string]any{
										"lit": "suggest",
									},
								},
								"parts": []any{
									"v1",
									"taxonomy",
									"suggest",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.suggestions`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "q",
											"orig": "q",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"trust_card": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "agency",
						"title": "Agency",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "collected_at",
						"title": "Collected At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "disclosure",
						"title": "Disclosure",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "fact_id",
						"title": "Fact Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "matched_on",
						"title": "Matched On",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "reason",
						"title": "Reason",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "record_kind",
						"title": "Record Kind",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "record_number",
						"title": "Record Number",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
					},
					map[string]any{
						"name": "record_scope",
						"title": "Record Scope",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "record_type",
						"title": "Record Type",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "recorded_expiry",
						"title": "Recorded Expiry",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"req": true,
						"format": "date",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "source_label",
						"title": "Source Label",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "source_url",
						"title": "Source Url",
						"type": "`$STRING`",
						"req": true,
						"format": "uri",
					},
					map[string]any{
						"name": "state",
						"title": "State",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "status_on_record",
						"title": "Status On Record",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"name": "trust_card",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/businesses/{business_id}/license-records/{fact_id}/report",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "businesses",
									},
									map[string]any{
										"var": "business_id",
									},
									map[string]any{
										"lit": "license-records",
									},
									map[string]any{
										"var": "license_record_id",
									},
									map[string]any{
										"lit": "report",
									},
								},
								"parts": []any{
									"v1",
									"businesses",
									"{business_id}",
									"license-records",
									"{license_record_id}",
									"report",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"fact_id": "license_record_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "business_id",
											"orig": "business_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "license_record_id",
											"orig": "fact_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"business_id",
										"license_record_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v1/businesses/{business_id}/archived-records.json",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "businesses",
									},
									map[string]any{
										"var": "business_id",
									},
									map[string]any{
										"lit": "archived-records.json",
									},
								},
								"parts": []any{
									"v1",
									"businesses",
									"{business_id}",
									"archived-records.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.facts`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "business_id",
											"orig": "business_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "biz_elite_ac_llc_jacksonville_fl",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"business_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v1/businesses/{business_id}/license-records.json",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "businesses",
									},
									map[string]any{
										"var": "business_id",
									},
									map[string]any{
										"lit": "license-records.json",
									},
								},
								"parts": []any{
									"v1",
									"businesses",
									"{business_id}",
									"license-records.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.records`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "business_id",
											"orig": "business_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "biz_elite_ac_llc_jacksonville_fl",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"business_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v1/businesses/{business_id}/trust-card.json",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "businesses",
									},
									map[string]any{
										"var": "business_id",
									},
									map[string]any{
										"lit": "trust-card.json",
									},
								},
								"parts": []any{
									"v1",
									"businesses",
									"{business_id}",
									"trust-card.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "business_id",
											"orig": "business_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "biz_elite_ac_llc_jacksonville_fl",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"business_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v1/schemas/{schema_name}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "schemas",
									},
									map[string]any{
										"var": "schema_name",
									},
								},
								"parts": []any{
									"v1",
									"schemas",
									"{schema_name}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "schema_name",
											"orig": "schema_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "trust-card.schema.json",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"schema_name",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"unsave_business": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "account_id",
						"title": "Account Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "business_id",
						"title": "Business Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "removed",
						"title": "Removed",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$ANY`",
						"req": true,
					},
				},
				"name": "unsave_business",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/actions/unsave-business",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"lit": "unsave-business",
									},
								},
								"parts": []any{
									"v1",
									"actions",
									"unsave-business",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"account_id": "`reqdata.account_id`",
										"business_id": "`reqdata.business_id`",
									},
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"update_agent_billing_account": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "account_id",
						"title": "Account Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "billing_account",
						"title": "Billing Account",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "billing_status",
						"title": "Billing Status",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "included_actions",
						"title": "Included Actions",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "monthly_fee_cents",
						"title": "Monthly Fee Cents",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "overage_cents",
						"title": "Overage Cents",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "plan",
						"title": "Plan",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "updated_by",
						"title": "Updated By",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"name": "update_agent_billing_account",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/admin/agent-billing-accounts",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "admin",
									},
									map[string]any{
										"lit": "agent-billing-accounts",
									},
								},
								"parts": []any{
									"v1",
									"admin",
									"agent-billing-accounts",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"account_id": "`reqdata.account_id`",
										"billing_status": "`reqdata.billing_status`",
										"included_actions": "`reqdata.included_action`",
										"monthly_fee_cents": "`reqdata.monthly_fee_cent`",
										"overage_cents": "`reqdata.overage_cent`",
										"plan": "`reqdata.plan`",
									},
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"withdraw_job_application": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "account_id",
						"title": "Account Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "already_withdrawn",
						"title": "Already Withdrawn",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "application",
						"title": "Application",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "application_id",
						"title": "Application Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$ANY`",
						"req": true,
					},
				},
				"name": "withdraw_job_application",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/actions/withdraw-job-application",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"lit": "withdraw-job-application",
									},
								},
								"parts": []any{
									"v1",
									"actions",
									"withdraw-job-application",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"account_id": "`reqdata.account_id`",
										"application_id": "`reqdata.application_id`",
									},
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
