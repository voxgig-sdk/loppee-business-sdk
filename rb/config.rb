# LoppeeBusiness SDK configuration

module LoppeeBusinessConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "LoppeeBusiness",
        "slug" => "loppee-business",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "now" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
      },
      "options" => {
        "base" => "https://loppee.com",
        "auth" => {
          "prefix" => "",
          "name" => "X-LOPPEE-API-Key",
        },
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "agent_access" => {},
          "agent_capability" => {},
          "agent_connection_test" => {},
          "agent_integration" => {},
          "agent_monitoring" => {},
          "agent_openapi" => {},
          "agent_policy" => {},
          "anonymous_location_proof_revocation" => {},
          "business_application" => {},
          "business_claim" => {},
          "business_deal" => {},
          "business_index" => {},
          "business_owner" => {},
          "business_review" => {},
          "chat_attachment" => {},
          "chat_attachment_url" => {},
          "claim_verification_send" => {},
          "claim_verification_verify" => {},
          "commercial_click" => {},
          "contact_recorded" => {},
          "conversation" => {},
          "conversation_close" => {},
          "conversation_report" => {},
          "conversation_workflow" => {},
          "create_agent_api_key" => {},
          "customer" => {},
          "customer_account" => {},
          "customer_location_proof_revocation" => {},
          "destination_address_suggestion" => {},
          "destination_location_proof" => {},
          "domain_trust_card" => {},
          "geo_context" => {},
          "health" => {},
          "job_application" => {},
          "job_resume_signed_url" => {},
          "location_handoff" => {},
          "message" => {},
          "moderated_action" => {},
          "open_api_document" => {},
          "operation" => {},
          "owner_notification" => {},
          "owner_notification_setting" => {},
          "owner_webhook_endpoint" => {},
          "owner_webhook_registration" => {},
          "pricing" => {},
          "promote_verified_transaction" => {},
          "public_content" => {},
          "recommend" => {},
          "review" => {},
          "revoke" => {},
          "save_business" => {},
          "saved_business" => {},
          "saved_location" => {},
          "search" => {},
          "suggest" => {},
          "support_internal_note" => {},
          "support_workflow" => {},
          "taxonomy_suggestion" => {},
          "trust_card" => {},
          "unsave_business" => {},
          "update_agent_billing_account" => {},
          "withdraw_job_application" => {},
        },
      },
      "entity" => {
        "agent_access" => {
          "fields" => [
            {
              "name" => "agent_name",
              "title" => "Agent Name",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "agent_type",
              "title" => "Agent Type",
              "type" => "`$STRING`",
            },
            {
              "name" => "callback_url",
              "title" => "Callback Url",
              "type" => "`$STRING`",
            },
            {
              "name" => "compliance_notes",
              "title" => "Compliance Notes",
              "type" => "`$STRING`",
            },
            {
              "name" => "created_at",
              "title" => "Created At",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "data_needs",
              "title" => "Data Needs",
              "type" => "`$STRING`",
            },
            {
              "name" => "developer_email",
              "title" => "Developer Email",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "operating_states",
              "title" => "Operating States",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "organization_name",
              "title" => "Organization Name",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "request_id",
              "title" => "Request Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "request_status",
              "title" => "Request Status",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "requested_actions",
              "title" => "Requested Actions",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "safety_contact",
              "title" => "Safety Contact",
              "type" => "`$STRING`",
            },
            {
              "name" => "status",
              "title" => "Status",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "target_categories",
              "title" => "Target Categories",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "use_case",
              "title" => "Use Case",
              "type" => "`$STRING`",
            },
            {
              "name" => "website",
              "title" => "Website",
              "type" => "`$STRING`",
            },
          ],
          "name" => "agent_access",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/actions/agent-access-request",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "actions",
                    },
                    {
                      "lit" => "agent-access-request",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "actions",
                    "agent-access-request",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => {
                      "agent_name" => "`reqdata.agent_name`",
                      "agent_type" => "`reqdata.agent_type`",
                      "callback_url" => "`reqdata.callback_url`",
                      "compliance_notes" => "`reqdata.compliance_note`",
                      "data_needs" => "`reqdata.data_need`",
                      "developer_email" => "`reqdata.developer_email`",
                      "operating_states" => "`reqdata.operating_state`",
                      "organization_name" => "`reqdata.organization_name`",
                      "requested_actions" => "`reqdata.requested_action`",
                      "safety_contact" => "`reqdata.safety_contact`",
                      "target_categories" => "`reqdata.target_category`",
                      "use_case" => "`reqdata.use_case`",
                      "website" => "`reqdata.website`",
                    },
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "agent_capability" => {
          "fields" => [
            {
              "name" => "agent_phone_location_bridge",
              "title" => "Agent Phone Location Bridge",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "agent_rules",
              "title" => "Agent Rules",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "discovery",
              "title" => "Discovery",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "external_agent_access",
              "title" => "External Agent Access",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "external_agent_webhooks",
              "title" => "External Agent Webhooks",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "local_discovery_location_policy",
              "title" => "Local Discovery Location Policy",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "location_choices",
              "title" => "Location Choices",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "registry_name",
              "title" => "Registry Name",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "schema_version",
              "title" => "Schema Version",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "trust_model_version",
              "title" => "Trust Model Version",
              "type" => "`$ANY`",
              "req" => true,
            },
          ],
          "name" => "agent_capability",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/v1/agent-capabilities.json",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "agent-capabilities.json",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "agent-capabilities.json",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "agent_connection_test" => {
          "fields" => [
            {
              "name" => "key",
              "title" => "Key",
              "type" => "`$STRING`",
              "short" => "Optional UI fallback.",
            },
          ],
          "name" => "agent_connection_test",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/actions/agent-connection-test",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "actions",
                    },
                    {
                      "lit" => "agent-connection-test",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "actions",
                    "agent-connection-test",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => {
                      "key" => "`reqdata.key`",
                    },
                    "res" => "`body`",
                  },
                  "args" => {
                    "header" => [
                      {
                        "name" => "x_loppee_api_key",
                        "orig" => "X-LOPPEE-API-Key",
                        "type" => "`$STRING`",
                        "kind" => "header",
                      },
                    ],
                  },
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "agent_integration" => {
          "fields" => [
            {
              "name" => "auth_model",
              "title" => "Auth Model",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "commercial_influence",
              "title" => "Commercial Influence",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "developer_docs_url",
              "title" => "Developer Docs Url",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "exposure_tiers",
              "title" => "Exposure Tiers",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "external_agent_access",
              "title" => "External Agent Access",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "generated_at",
              "title" => "Generated At",
              "type" => "`$STRING`",
              "req" => true,
              "format" => "date-time",
            },
            {
              "name" => "http_api",
              "title" => "Http Api",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "legal",
              "title" => "Legal",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "mcp",
              "title" => "Mcp",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "mcp_client_example_url",
              "title" => "Mcp Client Example Url",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "monitoring_url",
              "title" => "Monitoring Url",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "openapi_url",
              "title" => "Openapi Url",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "openapi_v1_url",
              "title" => "Openapi V1 Url",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "operational_rules",
              "title" => "Operational Rules",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "owner_agent_notifications",
              "title" => "Owner Agent Notifications",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "package_url",
              "title" => "Package Url",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "public_base_url",
              "title" => "Public Base Url",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "rate_limits",
              "title" => "Rate Limits",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "registry_name",
              "title" => "Registry Name",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "schema_version",
              "title" => "Schema Version",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "trust_card_contract",
              "title" => "Trust Card Contract",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "trust_doctrine",
              "title" => "Trust Doctrine",
              "type" => "`$OBJECT`",
              "req" => true,
            },
          ],
          "name" => "agent_integration",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/v1/agent-integration.json",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "agent-integration.json",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "agent-integration.json",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "agent_monitoring" => {
          "fields" => [
            {
              "name" => "build_sha",
              "title" => "Build Sha",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "contract_version",
              "title" => "Contract Version",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "generated_at",
              "title" => "Generated At",
              "type" => "`$STRING`",
              "req" => true,
              "format" => "date-time",
            },
            {
              "name" => "health_url",
              "title" => "Health Url",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "integration_package_url",
              "title" => "Integration Package Url",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "mcp_url",
              "title" => "Mcp Url",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "metrics",
              "title" => "Metrics",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "openapi_url",
              "title" => "Openapi Url",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "rate_limits",
              "title" => "Rate Limits",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "registry_name",
              "title" => "Registry Name",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "schema_version",
              "title" => "Schema Version",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "service",
              "title" => "Service",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "uptime_seconds",
              "title" => "Uptime Seconds",
              "type" => "`$NUMBER`",
              "req" => true,
            },
            {
              "name" => "version",
              "title" => "Version",
              "type" => "`$STRING`",
              "req" => true,
            },
          ],
          "name" => "agent_monitoring",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/v1/agent-monitoring.json",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "agent-monitoring.json",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "agent-monitoring.json",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "agent_openapi" => {
          "fields" => [
            {
              "name" => "components",
              "title" => "Components",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "info",
              "title" => "Info",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "openapi",
              "title" => "Openapi",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "paths",
              "title" => "Paths",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "servers",
              "title" => "Servers",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "tags",
              "title" => "Tags",
              "type" => "`$ARRAY`",
              "req" => true,
            },
          ],
          "name" => "agent_openapi",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/v1/agent-openapi.json",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "agent-openapi.json",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "agent-openapi.json",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "agent_policy" => {
          "fields" => [
            {
              "name" => "external_agent_access",
              "title" => "External Agent Access",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "external_agent_webhooks",
              "title" => "External Agent Webhooks",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "local_discovery_location_policy",
              "title" => "Local Discovery Location Policy",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "location_handoff_flow",
              "title" => "Location Handoff Flow",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "payment",
              "title" => "Payment",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "publication",
              "title" => "Publication",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "schema_version",
              "title" => "Schema Version",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "trust_model_version",
              "title" => "Trust Model Version",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "verification",
              "title" => "Verification",
              "type" => "`$OBJECT`",
              "req" => true,
            },
          ],
          "name" => "agent_policy",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/v1/agent-policy.json",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "agent-policy.json",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "agent-policy.json",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "anonymous_location_proof_revocation" => {
          "fields" => [
            {
              "name" => "accuracy_meters",
              "title" => "Accuracy Meters",
              "type" => "`$NUMBER`",
              "req" => true,
            },
            {
              "name" => "captured_at",
              "title" => "Captured At",
              "type" => "`$STRING`",
              "req" => true,
              "format" => "date-time",
            },
            {
              "name" => "latitude",
              "title" => "Latitude",
              "type" => "`$NUMBER`",
              "req" => true,
            },
            {
              "name" => "longitude",
              "title" => "Longitude",
              "type" => "`$NUMBER`",
              "req" => true,
            },
          ],
          "name" => "anonymous_location_proof_revocation",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/location-proofs",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "location-proofs",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "location-proofs",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => {
                      "accuracy_meters" => "`reqdata.accuracy_meter`",
                      "captured_at" => "`reqdata.captured_at`",
                      "latitude" => "`reqdata.latitude`",
                      "longitude" => "`reqdata.longitude`",
                    },
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
            "remove" => {
              "input" => "data",
              "name" => "remove",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "DELETE",
                  "orig" => "/v1/location-proofs/{location_proof_id}",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "location-proofs",
                    },
                    {
                      "var" => "location_proof_id",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "location-proofs",
                    "{location_proof_id}",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "location_proof_id",
                        "orig" => "location_proof_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "location_proof_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "business_application" => {
          "fields" => [
            {
              "name" => "application",
              "title" => "Application",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "application_id",
              "title" => "Application Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "business_id",
              "title" => "Business Id",
              "type" => "`$STRING`",
              "req" => true,
              "op" => {
                "create" => {
                  "type" => "`$STRING`",
                },
              },
            },
            {
              "name" => "claim_id",
              "title" => "Claim Id",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "req" => true,
              "op" => {
                "create" => {
                  "type" => "`$STRING`",
                },
              },
            },
            {
              "name" => "created_at",
              "title" => "Created At",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "existing_business",
              "title" => "Existing Business",
              "type" => "`$BOOLEAN`",
              "req" => true,
            },
            {
              "name" => "files",
              "title" => "Files",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "listing_id",
              "title" => "Listing Id",
              "type" => "`$STRING`",
            },
            {
              "name" => "pipeline_status",
              "title" => "Pipeline Status",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "status",
              "title" => "Status",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "trust_model_version",
              "title" => "Trust Model Version",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "uploaded_files",
              "title" => "Uploaded Files",
              "type" => "`$NUMBER`",
              "req" => true,
            },
          ],
          "name" => "business_application",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/actions/business-application",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "actions",
                    },
                    {
                      "lit" => "business-application",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "actions",
                    "business-application",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => {
                      "application" => "`reqdata.application`",
                      "business_id" => "`reqdata.business_id`",
                      "claim_id" => "`reqdata.claim_id`",
                      "files" => "`reqdata.file`",
                      "listing_id" => "`reqdata.listing_id`",
                    },
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "business_claim" => {
          "fields" => [
            {
              "name" => "business_id",
              "title" => "Business Id",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "req" => true,
              "op" => {
                "create" => {
                  "type" => "`$STRING`",
                },
              },
            },
            {
              "name" => "category",
              "title" => "Category",
              "type" => "`$STRING`",
            },
            {
              "name" => "city",
              "title" => "City",
              "type" => "`$STRING`",
            },
            {
              "name" => "claim_id",
              "title" => "Claim Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "claim_status",
              "title" => "Claim Status",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "claimant_email",
              "title" => "Claimant Email",
              "type" => "`$STRING`",
              "short" => "Legacy field; authenticated owner identity wins.",
            },
            {
              "name" => "claimant_name",
              "title" => "Claimant Name",
              "type" => "`$STRING`",
              "short" => "Legacy field; authenticated owner identity wins.",
            },
            {
              "name" => "claimant_relationship",
              "title" => "Claimant Relationship",
              "type" => "`$STRING`",
            },
            {
              "name" => "created_at",
              "title" => "Created At",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "directory_listing_id",
              "title" => "Directory Listing Id",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "req" => true,
            },
            {
              "name" => "display_name",
              "title" => "Display Name",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "listing_id",
              "title" => "Listing Id",
              "type" => "`$STRING`",
            },
            {
              "name" => "notes",
              "title" => "Notes",
              "type" => "`$STRING`",
            },
            {
              "name" => "phone",
              "title" => "Phone",
              "type" => "`$STRING`",
            },
            {
              "name" => "source",
              "title" => "Source",
              "type" => "`$STRING`",
            },
            {
              "name" => "source_type",
              "title" => "Source Type",
              "type" => "`$STRING`",
            },
            {
              "name" => "source_url",
              "title" => "Source Url",
              "type" => "`$STRING`",
            },
            {
              "name" => "state",
              "title" => "State",
              "type" => "`$STRING`",
            },
            {
              "name" => "status",
              "title" => "Status",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "verification",
              "title" => "Verification",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "website",
              "title" => "Website",
              "type" => "`$STRING`",
            },
          ],
          "name" => "business_claim",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/actions/business-claim",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "actions",
                    },
                    {
                      "lit" => "business-claim",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "actions",
                    "business-claim",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => {
                      "business_id" => "`reqdata.business_id`",
                      "category" => "`reqdata.category`",
                      "city" => "`reqdata.city`",
                      "claimant_email" => "`reqdata.claimant_email`",
                      "claimant_name" => "`reqdata.claimant_name`",
                      "claimant_relationship" => "`reqdata.claimant_relationship`",
                      "display_name" => "`reqdata.display_name`",
                      "listing_id" => "`reqdata.listing_id`",
                      "notes" => "`reqdata.note`",
                      "phone" => "`reqdata.phone`",
                      "source" => "`reqdata.source`",
                      "source_type" => "`reqdata.source_type`",
                      "source_url" => "`reqdata.source_url`",
                      "state" => "`reqdata.state`",
                      "website" => "`reqdata.website`",
                    },
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "business_deal" => {
          "fields" => [
            {
              "name" => "createdAt",
              "title" => "Created At",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "description",
              "title" => "Description",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "discountLabel",
              "title" => "Discount Label",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "endsAt",
              "title" => "Ends At",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "req" => true,
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "promoCode",
              "title" => "Promo Code",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "req" => true,
            },
            {
              "name" => "startsAt",
              "title" => "Starts At",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "req" => true,
            },
            {
              "name" => "terms",
              "title" => "Terms",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "req" => true,
            },
            {
              "name" => "title",
              "title" => "Title",
              "type" => "`$STRING`",
              "req" => true,
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "business_deal",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/v1/businesses/{business_id}/deals.json",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "businesses",
                    },
                    {
                      "var" => "id",
                    },
                    {
                      "lit" => "deals.json",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "businesses",
                    "{id}",
                    "deals.json",
                  ],
                  "rename" => {
                    "param" => {
                      "business_id" => "id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.deals`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "id",
                        "orig" => "business_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "biz_elite_ac_llc_jacksonville_fl",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "business_index" => {
          "fields" => [
            {
              "name" => "brand_assets",
              "title" => "Brand Assets",
              "type" => "`$ANY`",
            },
            {
              "name" => "business_id",
              "title" => "Business Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "category",
              "title" => "Category",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "city",
              "title" => "City",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "display_name",
              "title" => "Display Name",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "domain",
              "title" => "Domain",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "req" => true,
            },
            {
              "name" => "insurance",
              "title" => "Insurance",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "phone",
              "title" => "Phone",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "req" => true,
            },
            {
              "name" => "public_profile_url",
              "title" => "Public Profile Url",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "review_reputation",
              "title" => "Review Reputation",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "state",
              "title" => "State",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "street_address",
              "title" => "Street Address",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "short" => "Owner-published street address where authorized.",
            },
            {
              "name" => "trust_card_url",
              "title" => "Trust Card Url",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "trust_model_version",
              "title" => "Trust Model Version",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "verification_class",
              "title" => "Verification Class",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "verification_disclosure",
              "title" => "Verification Disclosure",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "website",
              "title" => "Website",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "req" => true,
            },
            {
              "name" => "zip",
              "title" => "Zip",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "short" => "Owner-published postal code where authorized.",
            },
          ],
          "name" => "business_index",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/v1/businesses/index.json",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "businesses",
                    },
                    {
                      "lit" => "index.json",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "businesses",
                    "index.json",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.businesses`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "cursor",
                        "orig" => "cursor",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "limit",
                        "orig" => "limit",
                        "type" => "`$NUMBER`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "business_owner" => {
          "fields" => [
            {
              "name" => "account_id",
              "title" => "Account Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "account_role",
              "title" => "Account Role",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "acknowledge_data_effects",
              "title" => "Acknowledge Data Effects",
              "type" => "`$BOOLEAN`",
              "req" => true,
            },
            {
              "name" => "actions",
              "title" => "Actions",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "allowed_actions",
              "title" => "Allowed Actions",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "amount_cents",
              "title" => "Amount Cents",
              "type" => "`$NUMBER`",
              "req" => true,
              "op" => {
                "update" => {
                  "type" => "`$NUMBER`",
                },
              },
              "short" => "Within the top-up limits (default $25 to $5,000).",
            },
            {
              "name" => "applicant_location_requirements",
              "title" => "Applicant Location Requirements",
              "type" => "`$STRING`",
            },
            {
              "name" => "apply_url",
              "title" => "Apply Url",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
            },
            {
              "name" => "asset_id",
              "title" => "Asset Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "assigneeId",
              "title" => "Assignee Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "assigneeLabel",
              "title" => "Assignee Label",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "assigneeType",
              "title" => "Assignee Type",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "attempt_id",
              "title" => "Attempt Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "benefits",
              "title" => "Benefits",
              "type" => "`$STRING`",
            },
            {
              "name" => "body",
              "title" => "Body",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "businessId",
              "title" => "Business Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "businessName",
              "title" => "Business Name",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "business_id",
              "title" => "Business Id",
              "type" => "`$STRING`",
              "req" => true,
              "op" => {
                "create" => {
                  "type" => "`$STRING`",
                },
                "update" => {
                  "type" => "`$STRING`",
                },
              },
            },
            {
              "name" => "campaign",
              "title" => "Campaign",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "campaign_id",
              "title" => "Campaign Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "carrier_name",
              "title" => "Carrier Name",
              "type" => "`$STRING`",
            },
            {
              "name" => "category",
              "title" => "Category",
              "type" => "`$STRING`",
            },
            {
              "name" => "category_alias",
              "title" => "Category Alias",
              "type" => "`$STRING`",
            },
            {
              "name" => "category_aliases",
              "title" => "Category Aliases",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "change",
              "title" => "Change",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "city",
              "title" => "City",
              "type" => "`$STRING`",
              "op" => {
                "create" => {
                  "req" => true,
                  "type" => "`$STRING`",
                },
              },
            },
            {
              "name" => "client_message_id",
              "title" => "Client Message Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "code",
              "title" => "Code",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "compensation_text",
              "title" => "Compensation Text",
              "type" => "`$STRING`",
            },
            {
              "name" => "confirm",
              "title" => "Confirm",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "confirmation",
              "title" => "Confirmation",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "connection_kind",
              "title" => "Connection Kind",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "consent_sha256",
              "title" => "Consent Sha256",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "SHA-256 of the acceptance text shown (from payment-authorizations).",
            },
            {
              "name" => "contact_email",
              "title" => "Contact Email",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
            },
            {
              "name" => "content_type",
              "title" => "Content Type",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "country",
              "title" => "Country",
              "type" => "`$STRING`",
            },
            {
              "name" => "coupon_code",
              "title" => "Coupon Code",
              "type" => "`$STRING`",
            },
            {
              "name" => "createdAt",
              "title" => "Created At",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "req" => true,
            },
            {
              "name" => "created_at",
              "title" => "Created At",
              "type" => "`$STRING`",
              "req" => true,
              "format" => "date-time",
            },
            {
              "name" => "credential_id",
              "title" => "Credential Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "credential_identifier",
              "title" => "Credential Identifier",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "data_base64",
              "title" => "Data Base64",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "delivery_contract",
              "title" => "Delivery Contract",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "description",
              "title" => "Description",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
            },
            {
              "name" => "direct_apply",
              "title" => "Direct Apply",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "disabled_reason",
              "title" => "Disabled Reason",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "req" => true,
            },
            {
              "name" => "discount_label",
              "title" => "Discount Label",
              "type" => "`$STRING`",
              "op" => {
                "create" => {
                  "req" => true,
                  "type" => "`$STRING`",
                },
              },
            },
            {
              "name" => "display_name",
              "title" => "Display Name",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "employment_type",
              "title" => "Employment Type",
              "type" => "`$STRING`",
            },
            {
              "name" => "enabled",
              "title" => "Enabled",
              "type" => "`$BOOLEAN`",
              "req" => true,
            },
            {
              "name" => "endpoint",
              "title" => "Endpoint",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "endpoint_id",
              "title" => "Endpoint Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "endpoint_url",
              "title" => "Endpoint Url",
              "type" => "`$STRING`",
              "req" => true,
              "format" => "uri",
            },
            {
              "name" => "ends_at",
              "title" => "Ends At",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
            },
            {
              "name" => "event_id",
              "title" => "Event Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "event_types",
              "title" => "Event Types",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "evidence_observed_at",
              "title" => "Evidence Observed At",
              "type" => "`$STRING`",
            },
            {
              "name" => "expected_updated_at",
              "title" => "Expected Updated At",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "experience_level",
              "title" => "Experience Level",
              "type" => "`$STRING`",
            },
            {
              "name" => "expires_at",
              "title" => "Expires At",
              "type" => "`$STRING`",
            },
            {
              "name" => "factor_id",
              "title" => "Factor Id",
              "type" => "`$STRING`",
              "op" => {
                "create" => {
                  "req" => true,
                  "type" => "`$STRING`",
                },
              },
            },
            {
              "name" => "failure_count",
              "title" => "Failure Count",
              "type" => "`$INTEGER`",
              "req" => true,
            },
            {
              "name" => "file_name",
              "title" => "File Name",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "file_sha256",
              "title" => "File Sha256",
              "type" => "`$STRING`",
              "op" => {
                "create" => {
                  "req" => true,
                  "type" => "`$STRING`",
                },
              },
            },
            {
              "name" => "full_name",
              "title" => "Full Name",
              "type" => "`$STRING`",
            },
            {
              "name" => "guideHandoffAnsweredAt",
              "title" => "Guide Handoff Answered At",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
            },
            {
              "name" => "guideHandoffAt",
              "title" => "Guide Handoff At",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
            },
            {
              "name" => "guideHandoffDueAt",
              "title" => "Guide Handoff Due At",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
            },
            {
              "name" => "hours",
              "title" => "Hours",
              "type" => [
                "`$ONE`",
                [
                  "`$OBJECT`",
                  "`$NULL`",
                ],
              ],
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
              "req" => true,
              "format" => "uuid",
            },
            {
              "name" => "idempotency_key",
              "title" => "Idempotency Key",
              "type" => "`$STRING`",
            },
            {
              "name" => "installation_id",
              "title" => "Installation Id",
              "type" => "`$STRING`",
              "req" => true,
              "format" => "uuid",
            },
            {
              "name" => "issuer",
              "title" => "Issuer",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "jurisdiction",
              "title" => "Jurisdiction",
              "type" => "`$STRING`",
            },
            {
              "name" => "kind",
              "title" => "Kind",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "label",
              "title" => "Label",
              "type" => "`$STRING`",
            },
            {
              "name" => "lastMessageAt",
              "title" => "Last Message At",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "req" => true,
            },
            {
              "name" => "lastMessageAuthorType",
              "title" => "Last Message Author Type",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "lastMessagePreview",
              "title" => "Last Message Preview",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "last_delivery_at",
              "title" => "Last Delivery At",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "req" => true,
              "format" => "date-time",
            },
            {
              "name" => "launch",
              "title" => "Launch",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "license_number",
              "title" => "License Number",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "messages",
              "title" => "Messages",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "messagesTruncated",
              "title" => "Messages Truncated",
              "type" => "`$BOOLEAN`",
              "req" => true,
            },
            {
              "name" => "monthly_cap_cents",
              "title" => "Monthly Cap Cents",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "name",
              "title" => "Name",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "note",
              "title" => "Note",
              "type" => "`$STRING`",
            },
            {
              "name" => "one_time_display",
              "title" => "One Time Display",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "ownerEmail",
              "title" => "Owner Email",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "ownerLastReadAt",
              "title" => "Owner Last Read At",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "req" => true,
            },
            {
              "name" => "ownerName",
              "title" => "Owner Name",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "ownerUserId",
              "title" => "Owner User Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "period",
              "title" => "Period",
              "type" => "`$STRING`",
            },
            {
              "name" => "phone",
              "title" => "Phone",
              "type" => "`$STRING`",
              "op" => {
                "create" => {
                  "req" => true,
                  "type" => "`$STRING`",
                },
              },
            },
            {
              "name" => "platform",
              "title" => "Platform",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "policy_number",
              "title" => "Policy Number",
              "type" => "`$STRING`",
            },
            {
              "name" => "postal_code",
              "title" => "Postal Code",
              "type" => "`$STRING`",
            },
            {
              "name" => "promo_code",
              "title" => "Promo Code",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
            },
            {
              "name" => "push_token",
              "title" => "Push Token",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "radius_miles",
              "title" => "Radius Miles",
              "type" => "`$NUMBER`",
              "req" => true,
            },
            {
              "name" => "reason",
              "title" => "Reason",
              "type" => "`$STRING`",
              "op" => {
                "create" => {
                  "req" => true,
                  "type" => "`$STRING`",
                },
              },
            },
            {
              "name" => "reason_category",
              "title" => "Reason Category",
              "type" => "`$STRING`",
            },
            {
              "name" => "reason_detail",
              "title" => "Reason Detail",
              "type" => "`$STRING`",
            },
            {
              "name" => "registered_at",
              "title" => "Registered At",
              "type" => "`$STRING`",
              "req" => true,
              "format" => "date-time",
            },
            {
              "name" => "request_id",
              "title" => "Request Id",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "Client id of this confirmation (8-100 characters); reuse it only to retry the same confirmation.",
            },
            {
              "name" => "requested_at",
              "title" => "Requested At",
              "type" => "`$STRING`",
              "req" => true,
              "format" => "date-time",
            },
            {
              "name" => "salary_currency",
              "title" => "Salary Currency",
              "type" => "`$STRING`",
            },
            {
              "name" => "salary_max",
              "title" => "Salary Max",
              "type" => [
                "`$ONE`",
                [
                  "`$NUMBER`",
                  "`$NULL`",
                ],
              ],
            },
            {
              "name" => "salary_min",
              "title" => "Salary Min",
              "type" => [
                "`$ONE`",
                [
                  "`$NUMBER`",
                  "`$NULL`",
                ],
              ],
            },
            {
              "name" => "salary_period",
              "title" => "Salary Period",
              "type" => "`$STRING`",
            },
            {
              "name" => "save_card",
              "title" => "Save Card",
              "type" => "`$BOOLEAN`",
              "req" => true,
            },
            {
              "name" => "save_card_consent_sha256",
              "title" => "Save Card Consent Sha256",
              "type" => "`$STRING`",
              "short" => "Only with save_card true: SHA-256 of the save-card consent text shown.",
            },
            {
              "name" => "schedule",
              "title" => "Schedule",
              "type" => "`$STRING`",
            },
            {
              "name" => "service_areas",
              "title" => "Service Areas",
              "type" => "`$STRING`",
            },
            {
              "name" => "signing_secret",
              "title" => "Signing Secret",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "size_bytes",
              "title" => "Size Bytes",
              "type" => "`$NUMBER`",
              "req" => true,
            },
            {
              "name" => "skills",
              "title" => "Skills",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "source_url",
              "title" => "Source Url",
              "type" => "`$STRING`",
            },
            {
              "name" => "starts_at",
              "title" => "Starts At",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
            },
            {
              "name" => "state",
              "title" => "State",
              "type" => "`$STRING`",
              "op" => {
                "create" => {
                  "req" => true,
                  "type" => "`$STRING`",
                },
              },
            },
            {
              "name" => "stated_expires_at",
              "title" => "Stated Expires At",
              "type" => "`$STRING`",
            },
            {
              "name" => "status",
              "title" => "Status",
              "type" => "`$STRING`",
              "req" => true,
              "op" => {
                "create" => {
                  "type" => "`$STRING`",
                },
              },
            },
            {
              "name" => "street_address",
              "title" => "Street Address",
              "type" => "`$STRING`",
              "op" => {
                "create" => {
                  "req" => true,
                  "type" => "`$STRING`",
                },
              },
            },
            {
              "name" => "subject",
              "title" => "Subject",
              "type" => "`$STRING`",
              "req" => true,
              "op" => {
                "create" => {
                  "type" => "`$STRING`",
                },
              },
            },
            {
              "name" => "submitted_identifier",
              "title" => "Submitted Identifier",
              "type" => "`$STRING`",
            },
            {
              "name" => "supportLastReadAt",
              "title" => "Support Last Read At",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "req" => true,
            },
            {
              "name" => "terms",
              "title" => "Terms",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
            },
            {
              "name" => "terms_version",
              "title" => "Terms Version",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "Must be the current Advertiser Terms version.",
            },
            {
              "name" => "threshold_cents",
              "title" => "Threshold Cents",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "ticketNumber",
              "title" => "Ticket Number",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "tier",
              "title" => "Tier",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "title",
              "title" => "Title",
              "type" => "`$STRING`",
              "op" => {
                "create" => {
                  "req" => true,
                  "type" => "`$STRING`",
                },
              },
            },
            {
              "name" => "total_job_openings",
              "title" => "Total Job Openings",
              "type" => [
                "`$ONE`",
                [
                  "`$INTEGER`",
                  "`$NULL`",
                ],
              ],
            },
            {
              "name" => "typing",
              "title" => "Typing",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "updatedAt",
              "title" => "Updated At",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "req" => true,
            },
            {
              "name" => "updated_at",
              "title" => "Updated At",
              "type" => "`$STRING`",
              "req" => true,
              "format" => "date-time",
            },
            {
              "name" => "url",
              "title" => "Url",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "Public HTTPS receiver operated by the connecting principal or its agent runtime.",
              "format" => "uri",
            },
            {
              "name" => "website",
              "title" => "Website",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "workplace_type",
              "title" => "Workplace Type",
              "type" => "`$STRING`",
            },
            {
              "name" => "zip",
              "title" => "Zip",
              "type" => "`$STRING`",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "business_owner",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/agents/{agent_id}/disconnect",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "agents",
                    },
                    {
                      "var" => "agent_id",
                    },
                    {
                      "lit" => "disconnect",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "agents",
                    "{agent_id}",
                    "disconnect",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "agent_id",
                        "orig" => "agent_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "agent_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/agents/{agent_id}/permissions",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "agents",
                    },
                    {
                      "var" => "agent_id",
                    },
                    {
                      "lit" => "permissions",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "agents",
                    "{agent_id}",
                    "permissions",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => {
                      "actions" => "`reqdata.action`",
                    },
                    "res" => "`body.agent`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "agent_id",
                        "orig" => "agent_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "agent_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/agents/{agent_id}/rotate-key",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "agents",
                    },
                    {
                      "var" => "agent_id",
                    },
                    {
                      "lit" => "rotate-key",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "agents",
                    "{agent_id}",
                    "rotate-key",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "agent_id",
                        "orig" => "agent_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "agent_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/agents/{agent_id}/webhook",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "agents",
                    },
                    {
                      "var" => "agent_id",
                    },
                    {
                      "lit" => "webhook",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "agents",
                    "{agent_id}",
                    "webhook",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => {
                      "url" => "`reqdata.url`",
                    },
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "agent_id",
                        "orig" => "agent_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "agent_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/agents/{agent_id}/webhook/disable",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "agents",
                    },
                    {
                      "var" => "agent_id",
                    },
                    {
                      "lit" => "webhook",
                    },
                    {
                      "lit" => "disable",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "agents",
                    "{agent_id}",
                    "webhook",
                    "disable",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.endpoint`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "agent_id",
                        "orig" => "agent_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "agent_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/agents/{agent_id}/webhook/rotate-secret",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "agents",
                    },
                    {
                      "var" => "agent_id",
                    },
                    {
                      "lit" => "webhook",
                    },
                    {
                      "lit" => "rotate-secret",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "agents",
                    "{agent_id}",
                    "webhook",
                    "rotate-secret",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "agent_id",
                        "orig" => "agent_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "agent_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/agents/{agent_id}/webhook/test",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "agents",
                    },
                    {
                      "var" => "agent_id",
                    },
                    {
                      "lit" => "webhook",
                    },
                    {
                      "lit" => "test",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "agents",
                    "{agent_id}",
                    "webhook",
                    "test",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "agent_id",
                        "orig" => "agent_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "agent_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/ads/changes/{id}/confirm",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "ads",
                    },
                    {
                      "lit" => "changes",
                    },
                    {
                      "var" => "change_id",
                    },
                    {
                      "lit" => "confirm",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "ads",
                    "changes",
                    "{change_id}",
                    "confirm",
                  ],
                  "rename" => {
                    "param" => {
                      "id" => "change_id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "change_id",
                        "orig" => "id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "change_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/ads/changes/{id}/reject",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "ads",
                    },
                    {
                      "lit" => "changes",
                    },
                    {
                      "var" => "change_id",
                    },
                    {
                      "lit" => "reject",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "ads",
                    "changes",
                    "{change_id}",
                    "reject",
                  ],
                  "rename" => {
                    "param" => {
                      "id" => "change_id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "change_id",
                        "orig" => "id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "change_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/ads/changes/{id}/undo",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "ads",
                    },
                    {
                      "lit" => "changes",
                    },
                    {
                      "var" => "change_id",
                    },
                    {
                      "lit" => "undo",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "ads",
                    "changes",
                    "{change_id}",
                    "undo",
                  ],
                  "rename" => {
                    "param" => {
                      "id" => "change_id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "change_id",
                        "orig" => "id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "change_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/conversations/{conversation_id}/read",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "conversations",
                    },
                    {
                      "var" => "conversation_id",
                    },
                    {
                      "lit" => "read",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "conversations",
                    "{conversation_id}",
                    "read",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "conversation_id",
                        "orig" => "conversation_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "conversation_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/deals/{deal_id}",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "deals",
                    },
                    {
                      "var" => "deal_id",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "deals",
                    "{deal_id}",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "deal_id",
                        "orig" => "deal_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "deal_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/deals/{deal_id}/delete",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "deals",
                    },
                    {
                      "var" => "deal_id",
                    },
                    {
                      "lit" => "delete",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "deals",
                    "{deal_id}",
                    "delete",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "deal_id",
                        "orig" => "deal_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "$action" => "delete",
                    "exist" => [
                      "deal_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/jobs/{job_id}",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "jobs",
                    },
                    {
                      "var" => "job_id",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "jobs",
                    "{job_id}",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "job_id",
                        "orig" => "job_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "job_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/jobs/{job_id}/checkout",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "jobs",
                    },
                    {
                      "var" => "job_id",
                    },
                    {
                      "lit" => "checkout",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "jobs",
                    "{job_id}",
                    "checkout",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "job_id",
                        "orig" => "job_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "$action" => "checkout",
                    "exist" => [
                      "job_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/jobs/{job_id}/delete",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "jobs",
                    },
                    {
                      "var" => "job_id",
                    },
                    {
                      "lit" => "delete",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "jobs",
                    "{job_id}",
                    "delete",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "job_id",
                        "orig" => "job_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "$action" => "delete",
                    "exist" => [
                      "job_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/locations/{location_id}",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "locations",
                    },
                    {
                      "var" => "location_id",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "locations",
                    "{location_id}",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "location_id",
                        "orig" => "location_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "location_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/locations/{location_id}/delete",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "locations",
                    },
                    {
                      "var" => "location_id",
                    },
                    {
                      "lit" => "delete",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "locations",
                    "{location_id}",
                    "delete",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "location_id",
                        "orig" => "location_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "$action" => "delete",
                    "exist" => [
                      "location_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/messages/{interaction_id}/reply",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "messages",
                    },
                    {
                      "var" => "message_id",
                    },
                    {
                      "lit" => "reply",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "messages",
                    "{message_id}",
                    "reply",
                  ],
                  "rename" => {
                    "param" => {
                      "interaction_id" => "message_id",
                    },
                  },
                  "transform" => {
                    "req" => {
                      "body" => "`reqdata.body`",
                      "client_message_id" => "`reqdata.client_message_id`",
                    },
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "message_id",
                        "orig" => "interaction_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "message_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/reviews/{review_id}/report",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "reviews",
                    },
                    {
                      "var" => "review_id",
                    },
                    {
                      "lit" => "report",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "reviews",
                    "{review_id}",
                    "report",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "review_id",
                        "orig" => "review_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "review_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/reviews/{review_id}/respond",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "reviews",
                    },
                    {
                      "var" => "review_id",
                    },
                    {
                      "lit" => "respond",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "reviews",
                    "{review_id}",
                    "respond",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "review_id",
                        "orig" => "review_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "review_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/ads/suggestions/{id}/apply",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "ads",
                    },
                    {
                      "lit" => "suggestions",
                    },
                    {
                      "var" => "suggestion_id",
                    },
                    {
                      "lit" => "apply",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "ads",
                    "suggestions",
                    "{suggestion_id}",
                    "apply",
                  ],
                  "rename" => {
                    "param" => {
                      "id" => "suggestion_id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "suggestion_id",
                        "orig" => "id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "suggestion_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/ads/suggestions/{id}/dismiss",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "ads",
                    },
                    {
                      "lit" => "suggestions",
                    },
                    {
                      "var" => "suggestion_id",
                    },
                    {
                      "lit" => "dismiss",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "ads",
                    "suggestions",
                    "{suggestion_id}",
                    "dismiss",
                  ],
                  "rename" => {
                    "param" => {
                      "id" => "suggestion_id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "suggestion_id",
                        "orig" => "id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "suggestion_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/support/{conversation_id}/read",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "support",
                    },
                    {
                      "var" => "support_id",
                    },
                    {
                      "lit" => "read",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "support",
                    "{support_id}",
                    "read",
                  ],
                  "rename" => {
                    "param" => {
                      "conversation_id" => "support_id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "support_id",
                        "orig" => "conversation_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "support_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/support/{conversation_id}/typing",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "support",
                    },
                    {
                      "var" => "support_id",
                    },
                    {
                      "lit" => "typing",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "support",
                    "{support_id}",
                    "typing",
                  ],
                  "rename" => {
                    "param" => {
                      "conversation_id" => "support_id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "support_id",
                        "orig" => "conversation_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "support_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/evidence/upload-intents/{intent_id}/finalize",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "evidence",
                    },
                    {
                      "lit" => "upload-intents",
                    },
                    {
                      "var" => "upload_intent_id",
                    },
                    {
                      "lit" => "finalize",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "evidence",
                    "upload-intents",
                    "{upload_intent_id}",
                    "finalize",
                  ],
                  "rename" => {
                    "param" => {
                      "intent_id" => "upload_intent_id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "upload_intent_id",
                        "orig" => "intent_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "upload_intent_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/account",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "account",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "account",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/ads/account",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "ads",
                    },
                    {
                      "lit" => "account",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "ads",
                    "account",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/ads/assistant/chat",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "ads",
                    },
                    {
                      "lit" => "assistant",
                    },
                    {
                      "lit" => "chat",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "ads",
                    "assistant",
                    "chat",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/ads/assistant/handoff",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "ads",
                    },
                    {
                      "lit" => "assistant",
                    },
                    {
                      "lit" => "handoff",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "ads",
                    "assistant",
                    "handoff",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/ads/campaigns",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "ads",
                    },
                    {
                      "lit" => "campaigns",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "ads",
                    "campaigns",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/ads/changes",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "ads",
                    },
                    {
                      "lit" => "changes",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "ads",
                    "changes",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/ads/refund-requests",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "ads",
                    },
                    {
                      "lit" => "refund-requests",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "ads",
                    "refund-requests",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/ads/terms/accept",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "ads",
                    },
                    {
                      "lit" => "terms",
                    },
                    {
                      "lit" => "accept",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "ads",
                    "terms",
                    "accept",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/ads/topup",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "ads",
                    },
                    {
                      "lit" => "topup",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "ads",
                    "topup",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/agents",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "agents",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "agents",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => {
                      "actions" => "`reqdata.action`",
                      "business_id" => "`reqdata.business_id`",
                      "name" => "`reqdata.name`",
                    },
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/billing/checkout",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "billing",
                    },
                    {
                      "lit" => "checkout",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "billing",
                    "checkout",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/billing/portal",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "billing",
                    },
                    {
                      "lit" => "portal",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "billing",
                    "portal",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/category-requests",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "category-requests",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "category-requests",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/coupons/checkout",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "coupons",
                    },
                    {
                      "lit" => "checkout",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "coupons",
                    "checkout",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/coupons/preview",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "coupons",
                    },
                    {
                      "lit" => "preview",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "coupons",
                    "preview",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/deals",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "deals",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "deals",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/deletion-requests",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "deletion-requests",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "deletion-requests",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => {
                      "acknowledge_data_effects" => "`reqdata.acknowledge_data_effect`",
                      "confirmation" => "`reqdata.confirmation`",
                      "reason" => "`reqdata.reason`",
                    },
                    "res" => "`body.request`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/diamond-radius",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "diamond-radius",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "diamond-radius",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => {
                      "business_id" => "`reqdata.business_id`",
                      "period" => "`reqdata.period`",
                      "radius_miles" => "`reqdata.radius_mile`",
                    },
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/evidence",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "evidence",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "evidence",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/evidence/authorize",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "evidence",
                    },
                    {
                      "lit" => "authorize",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "evidence",
                    "authorize",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/evidence/upload-intents",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "evidence",
                    },
                    {
                      "lit" => "upload-intents",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "evidence",
                    "upload-intents",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/exposure-tier",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "exposure-tier",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "exposure-tier",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/hours",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "hours",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "hours",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/jobs",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "jobs",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "jobs",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/locations",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "locations",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "locations",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/missed-contacts/convert",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "missed-contacts",
                    },
                    {
                      "lit" => "convert",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "missed-contacts",
                    "convert",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/mobile-devices",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "mobile-devices",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "mobile-devices",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => {
                      "installation_id" => "`reqdata.installation_id`",
                      "platform" => "`reqdata.platform`",
                      "push_token" => "`reqdata.push_token`",
                    },
                    "res" => "`body.device`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/mobile-devices/revoke",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "mobile-devices",
                    },
                    {
                      "lit" => "revoke",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "mobile-devices",
                    "revoke",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => {
                      "installation_id" => "`reqdata.installation_id`",
                    },
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/photos",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "photos",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "photos",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/photos/remove",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "photos",
                    },
                    {
                      "lit" => "remove",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "photos",
                    "remove",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/profile-details",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "profile-details",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "profile-details",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/support/messages",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "support",
                    },
                    {
                      "lit" => "messages",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "support",
                    "messages",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.conversation`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
            "update" => {
              "input" => "data",
              "name" => "update",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "PUT",
                  "orig" => "/v1/owner/evidence/upload-intents/{intent_id}/object",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "evidence",
                    },
                    {
                      "lit" => "upload-intents",
                    },
                    {
                      "var" => "upload_intent_id",
                    },
                    {
                      "lit" => "object",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "evidence",
                    "upload-intents",
                    "{upload_intent_id}",
                    "object",
                  ],
                  "rename" => {
                    "param" => {
                      "intent_id" => "upload_intent_id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "upload_intent_id",
                        "orig" => "intent_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "upload_intent_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "PUT",
                  "orig" => "/v1/owner/ads/auto-refill",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "ads",
                    },
                    {
                      "lit" => "auto-refill",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "ads",
                    "auto-refill",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "$.main.kit.entity.conversation",
              ],
              [
                "$.main.kit.entity.message",
              ],
              [
                "$.main.kit.entity.review",
              ],
            ],
          },
        },
        "business_review" => {
          "fields" => [
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "business_review",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/v1/businesses/{business_id}/reviews.json",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "businesses",
                    },
                    {
                      "var" => "id",
                    },
                    {
                      "lit" => "reviews.json",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "businesses",
                    "{id}",
                    "reviews.json",
                  ],
                  "rename" => {
                    "param" => {
                      "business_id" => "id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "id",
                        "orig" => "business_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "biz_elite_ac_llc_jacksonville_fl",
                      },
                    ],
                    "query" => [
                      {
                        "name" => "limit",
                        "orig" => "limit",
                        "type" => "`$NUMBER`",
                        "kind" => "query",
                      },
                      {
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$NUMBER`",
                        "kind" => "query",
                      },
                      {
                        "name" => "rating",
                        "orig" => "rating",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "chat_attachment" => {
          "fields" => [
            {
              "name" => "byteSize",
              "title" => "Byte Size",
              "type" => "`$INTEGER`",
              "req" => true,
            },
            {
              "name" => "content_type",
              "title" => "Content Type",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "data_base64",
              "title" => "Data Base64",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "fileName",
              "title" => "File Name",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "file_name",
              "title" => "File Name",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "mediaType",
              "title" => "Media Type",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "size_bytes",
              "title" => "Size Bytes",
              "type" => "`$INTEGER`",
              "req" => true,
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "chat_attachment",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/account/conversations/{conversation_id}/attachments",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "account",
                    },
                    {
                      "lit" => "conversations",
                    },
                    {
                      "var" => "conversation_id",
                    },
                    {
                      "lit" => "attachments",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "account",
                    "conversations",
                    "{conversation_id}",
                    "attachments",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => {
                      "content_type" => "`reqdata.content_type`",
                      "data_base64" => "`reqdata.data_base64`",
                      "file_name" => "`reqdata.file_name`",
                      "size_bytes" => "`reqdata.size_byte`",
                    },
                    "res" => "`body.attachment`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "conversation_id",
                        "orig" => "conversation_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "conversation_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/messages/{interaction_id}/attachments",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "messages",
                    },
                    {
                      "var" => "message_id",
                    },
                    {
                      "lit" => "attachments",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "messages",
                    "{message_id}",
                    "attachments",
                  ],
                  "rename" => {
                    "param" => {
                      "interaction_id" => "message_id",
                    },
                  },
                  "transform" => {
                    "req" => {
                      "content_type" => "`reqdata.content_type`",
                      "data_base64" => "`reqdata.data_base64`",
                      "file_name" => "`reqdata.file_name`",
                      "size_bytes" => "`reqdata.size_byte`",
                    },
                    "res" => "`body.attachment`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "message_id",
                        "orig" => "interaction_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "message_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/support/{conversation_id}/attachments",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "support",
                    },
                    {
                      "var" => "support_id",
                    },
                    {
                      "lit" => "attachments",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "support",
                    "{support_id}",
                    "attachments",
                  ],
                  "rename" => {
                    "param" => {
                      "conversation_id" => "support_id",
                    },
                  },
                  "transform" => {
                    "req" => {
                      "content_type" => "`reqdata.content_type`",
                      "data_base64" => "`reqdata.data_base64`",
                      "file_name" => "`reqdata.file_name`",
                      "size_bytes" => "`reqdata.size_byte`",
                    },
                    "res" => "`body.attachment`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "support_id",
                        "orig" => "conversation_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "support_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/support/{conversation_id}/attachments",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "support",
                    },
                    {
                      "var" => "support_id",
                    },
                    {
                      "lit" => "attachments",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "support",
                    "{support_id}",
                    "attachments",
                  ],
                  "rename" => {
                    "param" => {
                      "conversation_id" => "support_id",
                    },
                  },
                  "transform" => {
                    "req" => {
                      "content_type" => "`reqdata.content_type`",
                      "data_base64" => "`reqdata.data_base64`",
                      "file_name" => "`reqdata.file_name`",
                      "size_bytes" => "`reqdata.size_byte`",
                    },
                    "res" => "`body.attachment`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "support_id",
                        "orig" => "conversation_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "support_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "$.main.kit.entity.conversation",
              ],
              [
                "$.main.kit.entity.message",
              ],
            ],
          },
        },
        "chat_attachment_url" => {
          "fields" => [
            {
              "name" => "byte_size",
              "title" => "Byte Size",
              "type" => "`$INTEGER`",
              "req" => true,
            },
            {
              "name" => "expires_in_seconds",
              "title" => "Expires In Seconds",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "file_name",
              "title" => "File Name",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "media_type",
              "title" => "Media Type",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "signed_url",
              "title" => "Signed Url",
              "type" => "`$STRING`",
              "req" => true,
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "chat_attachment_url",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/account/conversations/{conversation_id}/attachments/{attachment_id}/url",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "account",
                    },
                    {
                      "lit" => "conversations",
                    },
                    {
                      "var" => "conversation_id",
                    },
                    {
                      "lit" => "attachments",
                    },
                    {
                      "var" => "attachment_id",
                    },
                    {
                      "lit" => "url",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "account",
                    "conversations",
                    "{conversation_id}",
                    "attachments",
                    "{attachment_id}",
                    "url",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.attachment`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "attachment_id",
                        "orig" => "attachment_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                      {
                        "name" => "conversation_id",
                        "orig" => "conversation_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "attachment_id",
                      "conversation_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/messages/{interaction_id}/attachments/{attachment_id}/url",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "messages",
                    },
                    {
                      "var" => "message_id",
                    },
                    {
                      "lit" => "attachments",
                    },
                    {
                      "var" => "attachment_id",
                    },
                    {
                      "lit" => "url",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "messages",
                    "{message_id}",
                    "attachments",
                    "{attachment_id}",
                    "url",
                  ],
                  "rename" => {
                    "param" => {
                      "interaction_id" => "message_id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.attachment`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "attachment_id",
                        "orig" => "attachment_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                      {
                        "name" => "message_id",
                        "orig" => "interaction_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "attachment_id",
                      "message_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/support/{conversation_id}/attachments/{attachment_id}/url",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "support",
                    },
                    {
                      "var" => "support_id",
                    },
                    {
                      "lit" => "attachments",
                    },
                    {
                      "var" => "attachment_id",
                    },
                    {
                      "lit" => "url",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "support",
                    "{support_id}",
                    "attachments",
                    "{attachment_id}",
                    "url",
                  ],
                  "rename" => {
                    "param" => {
                      "conversation_id" => "support_id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.attachment`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "attachment_id",
                        "orig" => "attachment_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                      {
                        "name" => "support_id",
                        "orig" => "conversation_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "attachment_id",
                      "support_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/support/{conversation_id}/attachments/{attachment_id}/url",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "support",
                    },
                    {
                      "var" => "support_id",
                    },
                    {
                      "lit" => "attachments",
                    },
                    {
                      "var" => "attachment_id",
                    },
                    {
                      "lit" => "url",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "support",
                    "{support_id}",
                    "attachments",
                    "{attachment_id}",
                    "url",
                  ],
                  "rename" => {
                    "param" => {
                      "conversation_id" => "support_id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.attachment`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "attachment_id",
                        "orig" => "attachment_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                      {
                        "name" => "support_id",
                        "orig" => "conversation_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "attachment_id",
                      "support_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "$.main.kit.entity.conversation",
              ],
              [
                "$.main.kit.entity.message",
              ],
            ],
          },
        },
        "claim_verification_send" => {
          "fields" => [
            {
              "name" => "challenge_id",
              "title" => "Challenge Id",
              "type" => "`$STRING`",
              "short" => "Opaque v3 SMS or owner-email challenge UUID.",
              "format" => "uuid",
            },
            {
              "name" => "channel",
              "title" => "Channel",
              "type" => "`$ANY`",
              "req" => true,
              "op" => {
                "create" => {
                  "type" => "`$ANY`",
                },
              },
            },
            {
              "name" => "claim_id",
              "title" => "Claim Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "destination_hint",
              "title" => "Destination Hint",
              "type" => "`$STRING`",
            },
            {
              "name" => "expires_in_seconds",
              "title" => "Expires In Seconds",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "provider_status",
              "title" => "Provider Status",
              "type" => "`$ANY`",
              "short" => "V3 provider request state.",
            },
            {
              "name" => "recipient_delivery_confirmed",
              "title" => "Recipient Delivery Confirmed",
              "type" => "`$ANY`",
              "short" => "V3 currently has no final-delivery provider event for this receipt.",
            },
            {
              "name" => "request_id",
              "title" => "Request Id",
              "type" => "`$STRING`",
              "short" => "Caller-generated idempotency UUID.",
              "format" => "uuid",
            },
            {
              "name" => "status",
              "title" => "Status",
              "type" => "`$ANY`",
              "req" => true,
            },
          ],
          "name" => "claim_verification_send",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/actions/claim-verification/send",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "actions",
                    },
                    {
                      "lit" => "claim-verification",
                    },
                    {
                      "lit" => "send",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "actions",
                    "claim-verification",
                    "send",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => {
                      "channel" => "`reqdata.channel`",
                      "claim_id" => "`reqdata.claim_id`",
                      "request_id" => "`reqdata.request_id`",
                    },
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "claim_verification_verify" => {
          "fields" => [
            {
              "name" => "business_id",
              "title" => "Business Id",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "req" => true,
            },
            {
              "name" => "challenge_id",
              "title" => "Challenge Id",
              "type" => "`$STRING`",
              "short" => "Exact challenge UUID returned by the v3 SMS or owner-email send.",
              "format" => "uuid",
            },
            {
              "name" => "channel",
              "title" => "Channel",
              "type" => "`$ANY`",
            },
            {
              "name" => "claim_id",
              "title" => "Claim Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "code",
              "title" => "Code",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "method",
              "title" => "Method",
              "type" => "`$ANY`",
            },
            {
              "name" => "publication",
              "title" => "Publication",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "status",
              "title" => "Status",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "transfer_review_required",
              "title" => "Transfer Review Required",
              "type" => "`$ANY`",
            },
            {
              "name" => "trust_model_version",
              "title" => "Trust Model Version",
              "type" => "`$ANY`",
            },
          ],
          "name" => "claim_verification_verify",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/actions/claim-verification/verify",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "actions",
                    },
                    {
                      "lit" => "claim-verification",
                    },
                    {
                      "lit" => "verify",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "actions",
                    "claim-verification",
                    "verify",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => {
                      "challenge_id" => "`reqdata.challenge_id`",
                      "channel" => "`reqdata.channel`",
                      "claim_id" => "`reqdata.claim_id`",
                      "code" => "`reqdata.code`",
                    },
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "commercial_click" => {
          "fields" => [
            {
              "name" => "action_type",
              "title" => "Action Type",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "ad_receipt",
              "title" => "Ad Receipt",
              "type" => "`$STRING`",
              "short" => "Opaque server-signed receipt of a served Sponsored ad, sent back unchanged with a profile, website or call tap.",
            },
            {
              "name" => "billable",
              "title" => "Billable",
              "type" => "`$BOOLEAN`",
              "req" => true,
            },
            {
              "name" => "billing_event_id",
              "title" => "Billing Event Id",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
            },
            {
              "name" => "billing_status",
              "title" => "Billing Status",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "business_id",
              "title" => "Business Id",
              "type" => "`$STRING`",
            },
            {
              "name" => "category",
              "title" => "Category",
              "type" => "`$STRING`",
            },
            {
              "name" => "city",
              "title" => "City",
              "type" => "`$STRING`",
            },
            {
              "name" => "click_id",
              "title" => "Click Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "commercial_status",
              "title" => "Commercial Status",
              "type" => "`$ANY`",
            },
            {
              "name" => "created_at",
              "title" => "Created At",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "directory_listing_id",
              "title" => "Directory Listing Id",
              "type" => "`$STRING`",
              "short" => "Deprecated alias of listing_id.",
            },
            {
              "name" => "display_name",
              "title" => "Display Name",
              "type" => "`$STRING`",
            },
            {
              "name" => "fallback_interaction_id",
              "title" => "Fallback Interaction Id",
              "type" => "`$STRING`",
            },
            {
              "name" => "ledger_status",
              "title" => "Ledger Status",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "listing_id",
              "title" => "Listing Id",
              "type" => "`$STRING`",
            },
            {
              "name" => "metadata",
              "title" => "Metadata",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "migration_required",
              "title" => "Migration Required",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "page_path",
              "title" => "Page Path",
              "type" => "`$STRING`",
            },
            {
              "name" => "referrer",
              "title" => "Referrer",
              "type" => "`$STRING`",
            },
            {
              "name" => "source_type",
              "title" => "Source Type",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "state",
              "title" => "State",
              "type" => "`$STRING`",
            },
            {
              "name" => "status",
              "title" => "Status",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "storage",
              "title" => "Storage",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "surface",
              "title" => "Surface",
              "type" => "`$ANY`",
              "short" => "Where the Sponsored ad was shown (with ad_receipt).",
            },
            {
              "name" => "target_url",
              "title" => "Target Url",
              "type" => "`$STRING`",
            },
          ],
          "name" => "commercial_click",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/actions/commercial-click",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "actions",
                    },
                    {
                      "lit" => "commercial-click",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "actions",
                    "commercial-click",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => {
                      "action_type" => "`reqdata.action_type`",
                      "ad_receipt" => "`reqdata.ad_receipt`",
                      "business_id" => "`reqdata.business_id`",
                      "category" => "`reqdata.category`",
                      "city" => "`reqdata.city`",
                      "commercial_status" => "`reqdata.commercial_status`",
                      "directory_listing_id" => "`reqdata.directory_listing_id`",
                      "display_name" => "`reqdata.display_name`",
                      "listing_id" => "`reqdata.listing_id`",
                      "metadata" => "`reqdata.metadata`",
                      "page_path" => "`reqdata.page_path`",
                      "referrer" => "`reqdata.referrer`",
                      "source_type" => "`reqdata.source_type`",
                      "state" => "`reqdata.state`",
                      "surface" => "`reqdata.surface`",
                      "target_url" => "`reqdata.target_url`",
                    },
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "contact_recorded" => {
          "fields" => [
            {
              "name" => "business_id",
              "title" => "Business Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "contact_recorded",
              "title" => "Contact Recorded",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "interaction_id",
              "title" => "Interaction Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "ok",
              "title" => "Ok",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "policy",
              "title" => "Policy",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "review_upgraded",
              "title" => "Review Upgraded",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "status",
              "title" => "Status",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "trust_weight",
              "title" => "Trust Weight",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "verified",
              "title" => "Verified",
              "type" => "`$BOOLEAN`",
              "req" => true,
            },
          ],
          "name" => "contact_recorded",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/actions/confirm-interaction",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "actions",
                    },
                    {
                      "lit" => "confirm-interaction",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "actions",
                    "confirm-interaction",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => {
                      "business_id" => "`reqdata.business_id`",
                    },
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "conversation" => {
          "fields" => [
            {
              "name" => "account_id",
              "title" => "Account Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "conversation_id",
              "title" => "Conversation Id",
              "type" => "`$STRING`",
              "short" => "Exact conversation referenced by a webhook; returns zero or one scoped thread.",
            },
            {
              "name" => "conversations",
              "title" => "Conversations",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "count",
              "title" => "Count",
              "type" => "`$NUMBER`",
              "req" => true,
            },
            {
              "name" => "cursor",
              "title" => "Cursor",
              "type" => "`$STRING`",
              "short" => "Opaque pagination cursor returned by the previous page.",
            },
            {
              "name" => "limit",
              "title" => "Limit",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "pagination",
              "title" => "Pagination",
              "type" => "`$OBJECT`",
              "req" => true,
            },
          ],
          "name" => "conversation",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/actions/list-my-conversations",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "actions",
                    },
                    {
                      "lit" => "list-my-conversations",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "actions",
                    "list-my-conversations",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => {
                      "account_id" => "`reqdata.account_id`",
                      "conversation_id" => "`reqdata.conversation_id`",
                      "cursor" => "`reqdata.cursor`",
                      "limit" => "`reqdata.limit`",
                    },
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "conversation_close" => {
          "fields" => [
            {
              "name" => "closed_at",
              "title" => "Closed At",
              "type" => "`$STRING`",
              "req" => true,
              "format" => "date-time",
            },
            {
              "name" => "conversation_id",
              "title" => "Conversation Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
            },
            {
              "name" => "status",
              "title" => "Status",
              "type" => "`$ANY`",
              "req" => true,
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "conversation_close",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/account/conversations/{conversation_id}/close",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "account",
                    },
                    {
                      "lit" => "conversations",
                    },
                    {
                      "var" => "id",
                    },
                    {
                      "lit" => "close",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "account",
                    "conversations",
                    "{id}",
                    "close",
                  ],
                  "rename" => {
                    "param" => {
                      "conversation_id" => "id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "id",
                        "orig" => "conversation_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "conversation_report" => {
          "fields" => [
            {
              "name" => "detail",
              "title" => "Detail",
              "type" => "`$STRING`",
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
            },
            {
              "name" => "reason",
              "title" => "Reason",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "status",
              "title" => "Status",
              "type" => "`$ANY`",
              "req" => true,
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "conversation_report",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/account/conversations/{conversation_id}/report",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "account",
                    },
                    {
                      "lit" => "conversations",
                    },
                    {
                      "var" => "id",
                    },
                    {
                      "lit" => "report",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "account",
                    "conversations",
                    "{id}",
                    "report",
                  ],
                  "rename" => {
                    "param" => {
                      "conversation_id" => "id",
                    },
                  },
                  "transform" => {
                    "req" => {
                      "detail" => "`reqdata.detail`",
                      "reason" => "`reqdata.reason`",
                    },
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "id",
                        "orig" => "conversation_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/messages/{interaction_id}/report",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "messages",
                    },
                    {
                      "var" => "message_id",
                    },
                    {
                      "lit" => "report",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "messages",
                    "{message_id}",
                    "report",
                  ],
                  "rename" => {
                    "param" => {
                      "interaction_id" => "message_id",
                    },
                  },
                  "transform" => {
                    "req" => {
                      "detail" => "`reqdata.detail`",
                      "reason" => "`reqdata.reason`",
                    },
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "message_id",
                        "orig" => "interaction_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "message_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "$.main.kit.entity.message",
              ],
            ],
          },
        },
        "conversation_workflow" => {
          "fields" => [
            {
              "name" => "priority",
              "title" => "Priority",
              "type" => "`$ANY`",
            },
            {
              "name" => "status",
              "title" => "Status",
              "type" => "`$ANY`",
            },
          ],
          "name" => "conversation_workflow",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/messages/{interaction_id}/workflow",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "messages",
                    },
                    {
                      "var" => "message_id",
                    },
                    {
                      "lit" => "workflow",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "messages",
                    "{message_id}",
                    "workflow",
                  ],
                  "rename" => {
                    "param" => {
                      "interaction_id" => "message_id",
                    },
                  },
                  "transform" => {
                    "req" => {
                      "priority" => "`reqdata.priority`",
                      "status" => "`reqdata.status`",
                    },
                    "res" => "`body.conversation`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "message_id",
                        "orig" => "interaction_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "message_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "$.main.kit.entity.message",
              ],
            ],
          },
        },
        "create_agent_api_key" => {
          "fields" => [
            {
              "name" => "account_id",
              "title" => "Account Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "allowed_actions",
              "title" => "Allowed Actions",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "allowed_business_ids",
              "title" => "Allowed Business Ids",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "created_by",
              "title" => "Created By",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "key",
              "title" => "Key",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "label",
              "title" => "Label",
              "type" => "`$STRING`",
            },
            {
              "name" => "monthly_quota",
              "title" => "Monthly Quota",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "notes",
              "title" => "Notes",
              "type" => "`$STRING`",
            },
            {
              "name" => "one_time_display",
              "title" => "One Time Display",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "rate_limit_per_minute",
              "title" => "Rate Limit Per Minute",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "raw_key",
              "title" => "Raw Key",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "status",
              "title" => "Status",
              "type" => "`$ANY`",
              "req" => true,
            },
          ],
          "name" => "create_agent_api_key",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/agent-keys",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "agent-keys",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "agent-keys",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "customer" => {
          "fields" => [
            {
              "name" => "auth_provider",
              "title" => "Auth Provider",
              "type" => "`$STRING`",
            },
            {
              "name" => "avatar_url",
              "title" => "Avatar Url",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "req" => true,
              "op" => {
                "create" => {
                  "type" => "`$STRING`",
                },
              },
              "short" => "Short-lived signed display URL for a private avatar object, or null.",
              "format" => "uri",
            },
            {
              "name" => "city",
              "title" => "City",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "req" => true,
              "op" => {
                "create" => {
                  "type" => "`$STRING`",
                },
              },
            },
            {
              "name" => "created_at",
              "title" => "Created At",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "req" => true,
              "format" => "date-time",
            },
            {
              "name" => "email",
              "title" => "Email",
              "type" => "`$STRING`",
              "req" => true,
              "format" => "email",
            },
            {
              "name" => "full_name",
              "title" => "Full Name",
              "type" => "`$STRING`",
              "req" => true,
              "op" => {
                "create" => {
                  "type" => "`$STRING`",
                },
              },
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "phone",
              "title" => "Phone",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "req" => true,
              "op" => {
                "create" => {
                  "type" => "`$STRING`",
                },
              },
            },
            {
              "name" => "search_category",
              "title" => "Search Category",
              "type" => "`$STRING`",
            },
            {
              "name" => "service_need",
              "title" => "Service Need",
              "type" => "`$STRING`",
            },
            {
              "name" => "state",
              "title" => "State",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "req" => true,
              "op" => {
                "create" => {
                  "type" => "`$STRING`",
                },
              },
            },
            {
              "name" => "status",
              "title" => "Status",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "updated_at",
              "title" => "Updated At",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "req" => true,
              "format" => "date-time",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "customer",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/account/customer",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "account",
                    },
                    {
                      "lit" => "customer",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "account",
                    "customer",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => {
                      "auth_provider" => "`reqdata.auth_provider`",
                      "avatar_url" => "`reqdata.avatar_url`",
                      "city" => "`reqdata.city`",
                      "full_name" => "`reqdata.full_name`",
                      "phone" => "`reqdata.phone`",
                      "search_category" => "`reqdata.search_category`",
                      "service_need" => "`reqdata.service_need`",
                      "state" => "`reqdata.state`",
                    },
                    "res" => "`body.account`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "customer_account" => {
          "fields" => [
            {
              "name" => "account_id",
              "title" => "Account Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "account_role",
              "title" => "Account Role",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "accuracy_meters",
              "title" => "Accuracy Meters",
              "type" => "`$NUMBER`",
              "req" => true,
            },
            {
              "name" => "acknowledge_data_effects",
              "title" => "Acknowledge Data Effects",
              "type" => "`$BOOLEAN`",
              "req" => true,
            },
            {
              "name" => "actions",
              "title" => "Actions",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "agent_key_id",
              "title" => "Agent Key Id",
              "type" => "`$STRING`",
              "req" => true,
              "format" => "uuid",
            },
            {
              "name" => "agent_receives_coordinates",
              "title" => "Agent Receives Coordinates",
              "type" => "`$BOOLEAN`",
              "req" => true,
            },
            {
              "name" => "all_paused",
              "title" => "All Paused",
              "type" => "`$BOOLEAN`",
              "req" => true,
            },
            {
              "name" => "app_attest_registered",
              "title" => "App Attest Registered",
              "type" => "`$BOOLEAN`",
              "req" => true,
            },
            {
              "name" => "assertion",
              "title" => "Assertion",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "attestation",
              "title" => "Attestation",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "author_label",
              "title" => "Author Label",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "author_type",
              "title" => "Author Type",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "binding",
              "title" => "Binding",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "body",
              "title" => "Body",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "business_id",
              "title" => "Business Id",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "req" => true,
            },
            {
              "name" => "capture_source",
              "title" => "Capture Source",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "captured_at",
              "title" => "Captured At",
              "type" => "`$STRING`",
              "req" => true,
              "format" => "date-time",
            },
            {
              "name" => "challenge",
              "title" => "Challenge",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "challenge_id",
              "title" => "Challenge Id",
              "type" => "`$STRING`",
              "req" => true,
              "format" => "uuid",
            },
            {
              "name" => "client_message_id",
              "title" => "Client Message Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "completed",
              "title" => "Completed",
              "type" => "`$BOOLEAN`",
              "req" => true,
            },
            {
              "name" => "confirmation",
              "title" => "Confirmation",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "connection_id",
              "title" => "Connection Id",
              "type" => "`$STRING`",
              "req" => true,
              "format" => "uuid",
            },
            {
              "name" => "connection_kind",
              "title" => "Connection Kind",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "continuation",
              "title" => "Continuation",
              "type" => "`$ANY`",
              "req" => true,
              "op" => {
                "create" => {
                  "type" => "`$ANY`",
                },
              },
              "short" => "The continuation from the previous response, sent back unchanged to get the next results.",
            },
            {
              "name" => "coordinates_returned",
              "title" => "Coordinates Returned",
              "type" => "`$BOOLEAN`",
              "req" => true,
            },
            {
              "name" => "created_at",
              "title" => "Created At",
              "type" => "`$STRING`",
              "req" => true,
              "format" => "date-time",
            },
            {
              "name" => "credential_id",
              "title" => "Credential Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "declined",
              "title" => "Declined",
              "type" => "`$BOOLEAN`",
              "req" => true,
            },
            {
              "name" => "delivery_contract",
              "title" => "Delivery Contract",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "disabled_reason",
              "title" => "Disabled Reason",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "req" => true,
            },
            {
              "name" => "disclosure",
              "title" => "Disclosure",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "enabled",
              "title" => "Enabled",
              "type" => "`$BOOLEAN`",
              "req" => true,
            },
            {
              "name" => "endpoint",
              "title" => "Endpoint",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "endpoint_id",
              "title" => "Endpoint Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "endpoint_url",
              "title" => "Endpoint Url",
              "type" => "`$STRING`",
              "req" => true,
              "format" => "uri",
            },
            {
              "name" => "environment",
              "title" => "Environment",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "event_id",
              "title" => "Event Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "event_types",
              "title" => "Event Types",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "failure_count",
              "title" => "Failure Count",
              "type" => "`$INTEGER`",
              "req" => true,
            },
            {
              "name" => "handoff_id",
              "title" => "Handoff Id",
              "type" => "`$STRING`",
              "req" => true,
              "format" => "uuid",
            },
            {
              "name" => "has_more",
              "title" => "Has More",
              "type" => "`$BOOLEAN`",
              "req" => true,
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
              "req" => true,
              "format" => "uuid",
            },
            {
              "name" => "idempotent_replay",
              "title" => "Idempotent Replay",
              "type" => "`$BOOLEAN`",
              "req" => true,
            },
            {
              "name" => "installation_id",
              "title" => "Installation Id",
              "type" => "`$STRING`",
              "req" => true,
              "format" => "uuid",
            },
            {
              "name" => "key_id",
              "title" => "Key Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "last_delivery_at",
              "title" => "Last Delivery At",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "req" => true,
              "format" => "date-time",
            },
            {
              "name" => "latitude",
              "title" => "Latitude",
              "type" => "`$NUMBER`",
              "req" => true,
            },
            {
              "name" => "location",
              "title" => "Location",
              "type" => "`$ANY`",
              "short" => "An opaque location reference from the website's own location controls.",
            },
            {
              "name" => "longitude",
              "title" => "Longitude",
              "type" => "`$NUMBER`",
              "req" => true,
            },
            {
              "name" => "message_alerts_enabled",
              "title" => "Message Alerts Enabled",
              "type" => "`$BOOLEAN`",
              "req" => true,
            },
            {
              "name" => "messages",
              "title" => "Messages",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "mode",
              "title" => "Mode",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "fallback: a direct search answered because the language model was unavailable.",
            },
            {
              "name" => "name",
              "title" => "Name",
              "type" => "`$STRING`",
            },
            {
              "name" => "oauth_grant_id",
              "title" => "Oauth Grant Id",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "req" => true,
              "format" => "uuid",
            },
            {
              "name" => "one_time_display",
              "title" => "One Time Display",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "platform",
              "title" => "Platform",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "policy",
              "title" => "Policy",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "purpose",
              "title" => "Purpose",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "push_token",
              "title" => "Push Token",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "reason",
              "title" => "Reason",
              "type" => "`$STRING`",
              "req" => true,
              "op" => {
                "create" => {
                  "type" => "`$STRING`",
                },
              },
            },
            {
              "name" => "registered_at",
              "title" => "Registered At",
              "type" => "`$STRING`",
              "req" => true,
              "format" => "date-time",
            },
            {
              "name" => "reply",
              "title" => "Reply",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "request_mode",
              "title" => "Request Mode",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "requested_at",
              "title" => "Requested At",
              "type" => "`$STRING`",
              "req" => true,
              "format" => "date-time",
            },
            {
              "name" => "results",
              "title" => "Results",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "schema_version",
              "title" => "Schema Version",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "selected_at",
              "title" => "Selected At",
              "type" => "`$STRING`",
              "req" => true,
              "format" => "date-time",
            },
            {
              "name" => "signed_in",
              "title" => "Signed In",
              "type" => "`$BOOLEAN`",
              "req" => true,
            },
            {
              "name" => "signing_secret",
              "title" => "Signing Secret",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "status",
              "title" => "Status",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "updated_at",
              "title" => "Updated At",
              "type" => "`$STRING`",
              "req" => true,
              "format" => "date-time",
            },
            {
              "name" => "url",
              "title" => "Url",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "Public HTTPS receiver operated by the connecting principal or its agent runtime.",
              "format" => "uri",
            },
            {
              "name" => "usable_until",
              "title" => "Usable Until",
              "type" => "`$STRING`",
              "req" => true,
              "format" => "date-time",
            },
            {
              "name" => "use_mode",
              "title" => "Use Mode",
              "type" => "`$STRING`",
              "req" => true,
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "customer_account",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/account/location-handoffs/{handoff_id}/complete-from-device",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "account",
                    },
                    {
                      "lit" => "location-handoffs",
                    },
                    {
                      "var" => "location_handoff_id",
                    },
                    {
                      "lit" => "complete-from-device",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "account",
                    "location-handoffs",
                    "{location_handoff_id}",
                    "complete-from-device",
                  ],
                  "rename" => {
                    "param" => {
                      "handoff_id" => "location_handoff_id",
                    },
                  },
                  "transform" => {
                    "req" => {
                      "accuracy_meters" => "`reqdata.accuracy_meter`",
                      "agent_key_id" => "`reqdata.agent_key_id`",
                      "assertion" => "`reqdata.assertion`",
                      "capture_source" => "`reqdata.capture_source`",
                      "captured_at" => "`reqdata.captured_at`",
                      "challenge" => "`reqdata.challenge`",
                      "challenge_id" => "`reqdata.challenge_id`",
                      "connection_id" => "`reqdata.connection_id`",
                      "installation_id" => "`reqdata.installation_id`",
                      "key_id" => "`reqdata.key_id`",
                      "latitude" => "`reqdata.latitude`",
                      "longitude" => "`reqdata.longitude`",
                      "oauth_grant_id" => "`reqdata.oauth_grant_id`",
                      "use_mode" => "`reqdata.use_mode`",
                    },
                    "res" => "`body`",
                  },
                  "args" => {
                    "header" => [
                      {
                        "name" => "x_loppee_client_platform",
                        "orig" => "X-Loppee-Client-Platform",
                        "type" => "`$STRING`",
                        "kind" => "header",
                        "reqd" => true,
                      },
                      {
                        "name" => "x_loppee_installation_id",
                        "orig" => "X-Loppee-Installation-Id",
                        "type" => "`$STRING`",
                        "kind" => "header",
                        "reqd" => true,
                      },
                    ],
                    "params" => [
                      {
                        "name" => "location_handoff_id",
                        "orig" => "handoff_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "location_handoff_id",
                      "x_loppee_client_platform",
                      "x_loppee_installation_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/account/location-handoffs/{handoff_id}/decline-from-device",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "account",
                    },
                    {
                      "lit" => "location-handoffs",
                    },
                    {
                      "var" => "location_handoff_id",
                    },
                    {
                      "lit" => "decline-from-device",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "account",
                    "location-handoffs",
                    "{location_handoff_id}",
                    "decline-from-device",
                  ],
                  "rename" => {
                    "param" => {
                      "handoff_id" => "location_handoff_id",
                    },
                  },
                  "transform" => {
                    "req" => {
                      "agent_key_id" => "`reqdata.agent_key_id`",
                      "assertion" => "`reqdata.assertion`",
                      "challenge" => "`reqdata.challenge`",
                      "challenge_id" => "`reqdata.challenge_id`",
                      "connection_id" => "`reqdata.connection_id`",
                      "installation_id" => "`reqdata.installation_id`",
                      "key_id" => "`reqdata.key_id`",
                      "oauth_grant_id" => "`reqdata.oauth_grant_id`",
                      "request_mode" => "`reqdata.request_mode`",
                    },
                    "res" => "`body`",
                  },
                  "args" => {
                    "header" => [
                      {
                        "name" => "x_loppee_client_platform",
                        "orig" => "X-Loppee-Client-Platform",
                        "type" => "`$STRING`",
                        "kind" => "header",
                        "reqd" => true,
                      },
                      {
                        "name" => "x_loppee_installation_id",
                        "orig" => "X-Loppee-Installation-Id",
                        "type" => "`$STRING`",
                        "kind" => "header",
                        "reqd" => true,
                      },
                    ],
                    "params" => [
                      {
                        "name" => "location_handoff_id",
                        "orig" => "handoff_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "location_handoff_id",
                      "x_loppee_client_platform",
                      "x_loppee_installation_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/account/agent-location/app-attest/challenges",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "account",
                    },
                    {
                      "lit" => "agent-location",
                    },
                    {
                      "lit" => "app-attest",
                    },
                    {
                      "lit" => "challenges",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "account",
                    "agent-location",
                    "app-attest",
                    "challenges",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "header" => [
                      {
                        "name" => "x_loppee_client_platform",
                        "orig" => "X-Loppee-Client-Platform",
                        "type" => "`$STRING`",
                        "kind" => "header",
                        "reqd" => true,
                      },
                      {
                        "name" => "x_loppee_installation_id",
                        "orig" => "X-Loppee-Installation-Id",
                        "type" => "`$STRING`",
                        "kind" => "header",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "x_loppee_client_platform",
                      "x_loppee_installation_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/account/agent-location/app-attest/keys",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "account",
                    },
                    {
                      "lit" => "agent-location",
                    },
                    {
                      "lit" => "app-attest",
                    },
                    {
                      "lit" => "keys",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "account",
                    "agent-location",
                    "app-attest",
                    "keys",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => {
                      "attestation" => "`reqdata.attestation`",
                      "challenge" => "`reqdata.challenge`",
                      "challenge_id" => "`reqdata.challenge_id`",
                      "installation_id" => "`reqdata.installation_id`",
                      "key_id" => "`reqdata.key_id`",
                    },
                    "res" => "`body`",
                  },
                  "args" => {
                    "header" => [
                      {
                        "name" => "x_loppee_client_platform",
                        "orig" => "X-Loppee-Client-Platform",
                        "type" => "`$STRING`",
                        "kind" => "header",
                        "reqd" => true,
                      },
                      {
                        "name" => "x_loppee_installation_id",
                        "orig" => "X-Loppee-Installation-Id",
                        "type" => "`$STRING`",
                        "kind" => "header",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "x_loppee_client_platform",
                      "x_loppee_installation_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/account/agents/{agent_id}/disconnect",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "account",
                    },
                    {
                      "lit" => "agents",
                    },
                    {
                      "var" => "agent_id",
                    },
                    {
                      "lit" => "disconnect",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "account",
                    "agents",
                    "{agent_id}",
                    "disconnect",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "agent_id",
                        "orig" => "agent_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "agent_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/account/agents/{agent_id}/rotate-key",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "account",
                    },
                    {
                      "lit" => "agents",
                    },
                    {
                      "var" => "agent_id",
                    },
                    {
                      "lit" => "rotate-key",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "account",
                    "agents",
                    "{agent_id}",
                    "rotate-key",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "agent_id",
                        "orig" => "agent_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "agent_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/account/agents/{agent_id}/webhook",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "account",
                    },
                    {
                      "lit" => "agents",
                    },
                    {
                      "var" => "agent_id",
                    },
                    {
                      "lit" => "webhook",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "account",
                    "agents",
                    "{agent_id}",
                    "webhook",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => {
                      "url" => "`reqdata.url`",
                    },
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "agent_id",
                        "orig" => "agent_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "agent_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/account/agents/{agent_id}/webhook/disable",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "account",
                    },
                    {
                      "lit" => "agents",
                    },
                    {
                      "var" => "agent_id",
                    },
                    {
                      "lit" => "webhook",
                    },
                    {
                      "lit" => "disable",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "account",
                    "agents",
                    "{agent_id}",
                    "webhook",
                    "disable",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.endpoint`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "agent_id",
                        "orig" => "agent_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "agent_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/account/agents/{agent_id}/webhook/test",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "account",
                    },
                    {
                      "lit" => "agents",
                    },
                    {
                      "var" => "agent_id",
                    },
                    {
                      "lit" => "webhook",
                    },
                    {
                      "lit" => "test",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "account",
                    "agents",
                    "{agent_id}",
                    "webhook",
                    "test",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "agent_id",
                        "orig" => "agent_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "agent_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/account/agent-location/connections/{connection_id}/policy",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "account",
                    },
                    {
                      "lit" => "agent-location",
                    },
                    {
                      "lit" => "connections",
                    },
                    {
                      "var" => "connection_id",
                    },
                    {
                      "lit" => "policy",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "account",
                    "agent-location",
                    "connections",
                    "{connection_id}",
                    "policy",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "connection_id",
                        "orig" => "connection_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "connection_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/account/conversations/{conversation_id}/read",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "account",
                    },
                    {
                      "lit" => "conversations",
                    },
                    {
                      "var" => "conversation_id",
                    },
                    {
                      "lit" => "read",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "account",
                    "conversations",
                    "{conversation_id}",
                    "read",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "conversation_id",
                        "orig" => "conversation_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "conversation_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/account/conversations/{conversation_id}/reply",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "account",
                    },
                    {
                      "lit" => "conversations",
                    },
                    {
                      "var" => "conversation_id",
                    },
                    {
                      "lit" => "reply",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "account",
                    "conversations",
                    "{conversation_id}",
                    "reply",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => {
                      "body" => "`reqdata.body`",
                      "client_message_id" => "`reqdata.client_message_id`",
                    },
                    "res" => "`body.reply`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "conversation_id",
                        "orig" => "conversation_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "conversation_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/account/agent-location/pause",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "account",
                    },
                    {
                      "lit" => "agent-location",
                    },
                    {
                      "lit" => "pause",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "account",
                    "agent-location",
                    "pause",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/account/agents",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "account",
                    },
                    {
                      "lit" => "agents",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "account",
                    "agents",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/account/assistant/chat",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "account",
                    },
                    {
                      "lit" => "assistant",
                    },
                    {
                      "lit" => "chat",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "account",
                    "assistant",
                    "chat",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => {
                      "continuation" => "`reqdata.continuation`",
                      "location" => "`reqdata.location`",
                      "messages" => "`reqdata.message`",
                    },
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/account/deletion-requests",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "account",
                    },
                    {
                      "lit" => "deletion-requests",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "account",
                    "deletion-requests",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => {
                      "acknowledge_data_effects" => "`reqdata.acknowledge_data_effect`",
                      "confirmation" => "`reqdata.confirmation`",
                      "reason" => "`reqdata.reason`",
                    },
                    "res" => "`body.request`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/account/mobile-devices",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "account",
                    },
                    {
                      "lit" => "mobile-devices",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "account",
                    "mobile-devices",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => {
                      "installation_id" => "`reqdata.installation_id`",
                      "platform" => "`reqdata.platform`",
                      "push_token" => "`reqdata.push_token`",
                    },
                    "res" => "`body.device`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/account/mobile-devices/message-alerts",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "account",
                    },
                    {
                      "lit" => "mobile-devices",
                    },
                    {
                      "lit" => "message-alerts",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "account",
                    "mobile-devices",
                    "message-alerts",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => {
                      "enabled" => "`reqdata.enabled`",
                      "installation_id" => "`reqdata.installation_id`",
                    },
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/account/mobile-devices/revoke",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "account",
                    },
                    {
                      "lit" => "mobile-devices",
                    },
                    {
                      "lit" => "revoke",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "account",
                    "mobile-devices",
                    "revoke",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => {
                      "installation_id" => "`reqdata.installation_id`",
                    },
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "$.main.kit.entity.conversation",
              ],
              [
                "$.main.kit.entity.location_handoff",
              ],
            ],
          },
        },
        "customer_location_proof_revocation" => {
          "fields" => [
            {
              "name" => "accuracy_meters",
              "title" => "Accuracy Meters",
              "type" => "`$NUMBER`",
              "req" => true,
            },
            {
              "name" => "captured_at",
              "title" => "Captured At",
              "type" => "`$STRING`",
              "req" => true,
              "format" => "date-time",
            },
            {
              "name" => "latitude",
              "title" => "Latitude",
              "type" => "`$NUMBER`",
              "req" => true,
            },
            {
              "name" => "longitude",
              "title" => "Longitude",
              "type" => "`$NUMBER`",
              "req" => true,
            },
          ],
          "name" => "customer_location_proof_revocation",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/account/location-proofs",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "account",
                    },
                    {
                      "lit" => "location-proofs",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "account",
                    "location-proofs",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => {
                      "accuracy_meters" => "`reqdata.accuracy_meter`",
                      "captured_at" => "`reqdata.captured_at`",
                      "latitude" => "`reqdata.latitude`",
                      "longitude" => "`reqdata.longitude`",
                    },
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
            "remove" => {
              "input" => "data",
              "name" => "remove",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "DELETE",
                  "orig" => "/v1/account/location-proofs/{location_proof_id}",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "account",
                    },
                    {
                      "lit" => "location-proofs",
                    },
                    {
                      "var" => "location_proof_id",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "account",
                    "location-proofs",
                    "{location_proof_id}",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "location_proof_id",
                        "orig" => "location_proof_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "location_proof_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "destination_address_suggestion" => {
          "fields" => [
            {
              "name" => "input",
              "title" => "Input",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "Normalized partial US service-address text.",
            },
            {
              "name" => "suggestions",
              "title" => "Suggestions",
              "type" => "`$ARRAY`",
              "req" => true,
            },
          ],
          "name" => "destination_address_suggestion",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/account/destination-address-suggestions",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "account",
                    },
                    {
                      "lit" => "destination-address-suggestions",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "account",
                    "destination-address-suggestions",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => {
                      "input" => "`reqdata.input`",
                    },
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/destination-address-suggestions",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "destination-address-suggestions",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "destination-address-suggestions",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => {
                      "input" => "`reqdata.input`",
                    },
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "destination_location_proof" => {
          "fields" => [
            {
              "name" => "address",
              "title" => "Address",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "A real US service address.",
            },
            {
              "name" => "premise_proximity_confirmation_token",
              "title" => "Premise Proximity Confirmation Token",
              "type" => "`$STRING`",
              "short" => "Opaque one-time token from the immediately preceding premise-proximity challenge for the same address and authority.",
            },
          ],
          "name" => "destination_location_proof",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/account/destination-location-proofs",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "account",
                    },
                    {
                      "lit" => "destination-location-proofs",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "account",
                    "destination-location-proofs",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => {
                      "address" => "`reqdata.address`",
                      "premise_proximity_confirmation_token" => "`reqdata.premise_proximity_confirmation_token`",
                    },
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/destination-location-proofs",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "destination-location-proofs",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "destination-location-proofs",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => {
                      "address" => "`reqdata.address`",
                      "premise_proximity_confirmation_token" => "`reqdata.premise_proximity_confirmation_token`",
                    },
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "domain_trust_card" => {
          "fields" => [
            {
              "name" => "business_id",
              "title" => "Business Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "domain",
              "title" => "Domain",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "schema_version",
              "title" => "Schema Version",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "trust_card",
              "title" => "Trust Card",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "trust_card_url",
              "title" => "Trust Card Url",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "trust_model_version",
              "title" => "Trust Model Version",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "verification_class",
              "title" => "Verification Class",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "verification_disclosure",
              "title" => "Verification Disclosure",
              "type" => "`$STRING`",
              "req" => true,
            },
          ],
          "name" => "domain_trust_card",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/v1/domains/{domain_key}/trust-card.json",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "domains",
                    },
                    {
                      "var" => "domain_key",
                    },
                    {
                      "lit" => "trust-card.json",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "domains",
                    "{domain_key}",
                    "trust-card.json",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "domain_key",
                        "orig" => "domain_key",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "eliteacllc-com",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "domain_key",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "geo_context" => {
          "fields" => [],
          "name" => "geo_context",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/v1/geo/context",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "geo",
                    },
                    {
                      "lit" => "context",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "geo",
                    "context",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "health" => {
          "fields" => [
            {
              "name" => "agent_phone_location_bridge",
              "title" => "Agent Phone Location Bridge",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "build_sha",
              "title" => "Build Sha",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "business_review_access",
              "title" => "Business Review Access",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "contract_version",
              "title" => "Contract Version",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "external_agent_webhooks",
              "title" => "External Agent Webhooks",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "external_agent_webhooks_enabled",
              "title" => "External Agent Webhooks Enabled",
              "type" => "`$BOOLEAN`",
              "req" => true,
            },
            {
              "name" => "ios_app_attest_anonymous_location",
              "title" => "Ios App Attest Anonymous Location",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "location_choices",
              "title" => "Location Choices",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "location_handoff",
              "title" => "Location Handoff",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "mobile_push",
              "title" => "Mobile Push",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "ok",
              "title" => "Ok",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "service",
              "title" => "Service",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "sponsored_ordering",
              "title" => "Sponsored Ordering",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "trust_model_version",
              "title" => "Trust Model Version",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "version",
              "title" => "Version",
              "type" => "`$STRING`",
              "req" => true,
            },
          ],
          "name" => "health",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/health",
                  "segments" => [
                    {
                      "lit" => "health",
                    },
                  ],
                  "parts" => [
                    "health",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "job_application" => {
          "fields" => [
            {
              "name" => "account_id",
              "title" => "Account Id",
              "type" => "`$STRING`",
              "req" => true,
              "op" => {
                "create" => {
                  "type" => "`$STRING`",
                },
              },
            },
            {
              "name" => "already_withdrawn",
              "title" => "Already Withdrawn",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "application",
              "title" => "Application",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "applications",
              "title" => "Applications",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "billing",
              "title" => "Billing",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "business_id",
              "title" => "Business Id",
              "type" => "`$STRING`",
            },
            {
              "name" => "count",
              "title" => "Count",
              "type" => "`$NUMBER`",
              "req" => true,
            },
            {
              "name" => "cover_note",
              "title" => "Cover Note",
              "type" => "`$STRING`",
            },
            {
              "name" => "free_to_apply",
              "title" => "Free To Apply",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
            },
            {
              "name" => "job_id",
              "title" => "Job Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "limit",
              "title" => "Limit",
              "type" => "`$NUMBER`",
              "req" => true,
              "op" => {
                "create" => {
                  "type" => "`$NUMBER`",
                },
              },
            },
            {
              "name" => "offset",
              "title" => "Offset",
              "type" => "`$NUMBER`",
              "req" => true,
              "op" => {
                "create" => {
                  "type" => "`$NUMBER`",
                },
              },
            },
            {
              "name" => "resume",
              "title" => "Resume",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "retention_note",
              "title" => "Retention Note",
              "type" => "`$STRING`",
            },
            {
              "name" => "status",
              "title" => "Status",
              "type" => "`$STRING`",
              "req" => true,
              "op" => {
                "create" => {
                  "type" => "`$ANY`",
                },
              },
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "job_application",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/jobs/{job_id}/apply",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "jobs",
                    },
                    {
                      "var" => "id",
                    },
                    {
                      "lit" => "apply",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "jobs",
                    "{id}",
                    "apply",
                  ],
                  "rename" => {
                    "param" => {
                      "job_id" => "id",
                    },
                  },
                  "transform" => {
                    "req" => {
                      "cover_note" => "`reqdata.cover_note`",
                      "resume" => "`reqdata.resume`",
                    },
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "id",
                        "orig" => "job_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "$action" => "apply",
                    "exist" => [
                      "id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/job-applications/{application_id}/status",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "job-applications",
                    },
                    {
                      "var" => "id",
                    },
                    {
                      "lit" => "status",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "job-applications",
                    "{id}",
                    "status",
                  ],
                  "rename" => {
                    "param" => {
                      "application_id" => "id",
                    },
                  },
                  "transform" => {
                    "req" => {
                      "status" => "`reqdata.status`",
                    },
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "id",
                        "orig" => "application_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "$action" => "status",
                    "exist" => [
                      "id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/account/job-applications/{application_id}/withdraw",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "account",
                    },
                    {
                      "lit" => "job-applications",
                    },
                    {
                      "var" => "id",
                    },
                    {
                      "lit" => "withdraw",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "account",
                    "job-applications",
                    "{id}",
                    "withdraw",
                  ],
                  "rename" => {
                    "param" => {
                      "application_id" => "id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "id",
                        "orig" => "application_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "$action" => "withdraw",
                    "exist" => [
                      "id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/actions/job-application",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "actions",
                    },
                    {
                      "lit" => "job-application",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "actions",
                    "job-application",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => {
                      "account_id" => "`reqdata.account_id`",
                      "cover_note" => "`reqdata.cover_note`",
                      "job_id" => "`reqdata.job_id`",
                      "resume" => "`reqdata.resume`",
                    },
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/actions/list-my-job-applications",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "actions",
                    },
                    {
                      "lit" => "list-my-job-applications",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "actions",
                    "list-my-job-applications",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => {
                      "account_id" => "`reqdata.account_id`",
                      "limit" => "`reqdata.limit`",
                      "offset" => "`reqdata.offset`",
                      "status" => "`reqdata.status`",
                    },
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "job_resume_signed_url" => {
          "fields" => [
            {
              "name" => "application_id",
              "title" => "Application Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "content_type",
              "title" => "Content Type",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "expires_in_seconds",
              "title" => "Expires In Seconds",
              "type" => "`$NUMBER`",
              "req" => true,
            },
            {
              "name" => "resume_file_name",
              "title" => "Resume File Name",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "signed_url",
              "title" => "Signed Url",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "size_bytes",
              "title" => "Size Bytes",
              "type" => "`$NUMBER`",
              "req" => true,
            },
            {
              "name" => "status",
              "title" => "Status",
              "type" => "`$ANY`",
              "req" => true,
            },
          ],
          "name" => "job_resume_signed_url",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/account/job-applications/{application_id}/resume-url",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "account",
                    },
                    {
                      "lit" => "job-applications",
                    },
                    {
                      "var" => "job_application_id",
                    },
                    {
                      "lit" => "resume-url",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "account",
                    "job-applications",
                    "{job_application_id}",
                    "resume-url",
                  ],
                  "rename" => {
                    "param" => {
                      "application_id" => "job_application_id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "job_application_id",
                        "orig" => "application_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "job_application_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/job-applications/{application_id}/resume-url",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "job-applications",
                    },
                    {
                      "var" => "job_application_id",
                    },
                    {
                      "lit" => "resume-url",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "job-applications",
                    "{job_application_id}",
                    "resume-url",
                  ],
                  "rename" => {
                    "param" => {
                      "application_id" => "job_application_id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "job_application_id",
                        "orig" => "application_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "job_application_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "$.main.kit.entity.job_application",
              ],
            ],
          },
        },
        "location_handoff" => {
          "fields" => [],
          "name" => "location_handoff",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/account/location-handoffs",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "account",
                    },
                    {
                      "lit" => "location-handoffs",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "account",
                    "location-handoffs",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "message" => {
          "fields" => [
            {
              "name" => "account_id",
              "title" => "Account Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "client_message_id",
              "title" => "Client Message Id",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "Caller-stable retry key.",
            },
            {
              "name" => "conversation_id",
              "title" => "Conversation Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "created_at",
              "title" => "Created At",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "delivery",
              "title" => "Delivery",
              "type" => "`$ANY`",
            },
            {
              "name" => "idempotent_replay",
              "title" => "Idempotent Replay",
              "type" => "`$BOOLEAN`",
              "req" => true,
            },
            {
              "name" => "interaction_id",
              "title" => "Interaction Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "message",
              "title" => "Message",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "moderation_required",
              "title" => "Moderation Required",
              "type" => "`$ANY`",
            },
            {
              "name" => "source_path",
              "title" => "Source Path",
              "type" => "`$STRING`",
            },
            {
              "name" => "status",
              "title" => "Status",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "subject",
              "title" => "Subject",
              "type" => "`$STRING`",
              "op" => {
                "create" => {
                  "req" => true,
                  "type" => "`$STRING`",
                },
              },
            },
            {
              "name" => "target_business_id",
              "title" => "Target Business Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "target_business_name",
              "title" => "Target Business Name",
              "type" => "`$STRING`",
              "op" => {
                "create" => {
                  "req" => true,
                  "type" => "`$STRING`",
                },
              },
            },
            {
              "name" => "target_business_source",
              "title" => "Target Business Source",
              "type" => "`$STRING`",
              "op" => {
                "create" => {
                  "req" => true,
                  "type" => "`$STRING`",
                },
              },
            },
          ],
          "name" => "message",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/actions/business-message",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "actions",
                    },
                    {
                      "lit" => "business-message",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "actions",
                    "business-message",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => {
                      "message" => "`reqdata.message`",
                      "source_path" => "`reqdata.source_path`",
                      "subject" => "`reqdata.subject`",
                      "target_business_id" => "`reqdata.target_business_id`",
                      "target_business_name" => "`reqdata.target_business_name`",
                      "target_business_source" => "`reqdata.target_business_source`",
                    },
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/actions/message-request",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "actions",
                    },
                    {
                      "lit" => "message-request",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "actions",
                    "message-request",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => {
                      "account_id" => "`reqdata.account_id`",
                      "client_message_id" => "`reqdata.client_message_id`",
                      "message" => "`reqdata.message`",
                      "subject" => "`reqdata.subject`",
                      "target_business_id" => "`reqdata.target_business_id`",
                      "target_business_name" => "`reqdata.target_business_name`",
                      "target_business_source" => "`reqdata.target_business_source`",
                    },
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "moderated_action" => {
          "fields" => [
            {
              "name" => "actions",
              "title" => "Actions",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "body",
              "title" => "Body",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "client_request_id",
              "title" => "Client Request Id",
              "type" => "`$STRING`",
            },
            {
              "name" => "content_type",
              "title" => "Content Type",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "continuation",
              "title" => "Continuation",
              "type" => "`$ANY`",
              "req" => true,
              "op" => {
                "create" => {
                  "type" => "`$ANY`",
                },
              },
              "short" => "The continuation from the previous response, sent back unchanged to get the next results.",
            },
            {
              "name" => "coordinates_returned",
              "title" => "Coordinates Returned",
              "type" => "`$BOOLEAN`",
              "req" => true,
            },
            {
              "name" => "disclosure",
              "title" => "Disclosure",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "enabled",
              "title" => "Enabled",
              "type" => "`$BOOLEAN`",
              "req" => true,
            },
            {
              "name" => "file_sha256",
              "title" => "File Sha256",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "has_more",
              "title" => "Has More",
              "type" => "`$BOOLEAN`",
              "req" => true,
            },
            {
              "name" => "human_confirmation",
              "title" => "Human Confirmation",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "intent_id",
              "title" => "Intent Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "kind",
              "title" => "Kind",
              "type" => "`$STRING`",
            },
            {
              "name" => "knowledgeVersion",
              "title" => "Knowledge Version",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "limits",
              "title" => "Limits",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "links",
              "title" => "Links",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "location",
              "title" => "Location",
              "type" => "`$OBJECT`",
              "req" => true,
              "op" => {
                "create" => {
                  "type" => "`$ANY`",
                },
              },
              "short" => "An opaque location reference from the website's own location controls.",
            },
            {
              "name" => "message",
              "title" => "Message",
              "type" => "`$STRING`",
            },
            {
              "name" => "messages",
              "title" => "Messages",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "mode",
              "title" => "Mode",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "fallback: a direct search answered because the language model was unavailable.",
            },
            {
              "name" => "name",
              "title" => "Name",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "needsHuman",
              "title" => "Needs Human",
              "type" => "`$BOOLEAN`",
              "req" => true,
            },
            {
              "name" => "policy",
              "title" => "Policy",
              "type" => "`$OBJECT`",
              "req" => true,
              "short" => "Human schedule and separate claim-review policy.",
            },
            {
              "name" => "question",
              "title" => "Question",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "reply",
              "title" => "Reply",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "result",
              "title" => "Result",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "results",
              "title" => "Results",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "scan_authority_id",
              "title" => "Scan Authority Id",
              "type" => "`$STRING`",
              "req" => true,
              "format" => "uuid",
            },
            {
              "name" => "scanner",
              "title" => "Scanner",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "scanner_version",
              "title" => "Scanner Version",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "schema_version",
              "title" => "Schema Version",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "searcher_latitude",
              "title" => "Searcher Latitude",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "searcher_longitude",
              "title" => "Searcher Longitude",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "signature",
              "title" => "Signature",
              "type" => "`$STRING`",
            },
            {
              "name" => "signed_in",
              "title" => "Signed In",
              "type" => "`$BOOLEAN`",
              "req" => true,
            },
            {
              "name" => "size_bytes",
              "title" => "Size Bytes",
              "type" => "`$NUMBER`",
              "req" => true,
            },
            {
              "name" => "subject",
              "title" => "Subject",
              "type" => "`$STRING`",
            },
            {
              "name" => "target_business_id",
              "title" => "Target Business Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "topic",
              "title" => "Topic",
              "type" => "`$STRING`",
              "req" => true,
            },
          ],
          "name" => "moderated_action",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/actions/contact-attempt",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "actions",
                    },
                    {
                      "lit" => "contact-attempt",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "actions",
                    "contact-attempt",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/assistant/chat",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "assistant",
                    },
                    {
                      "lit" => "chat",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "assistant",
                    "chat",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => {
                      "continuation" => "`reqdata.continuation`",
                      "location" => "`reqdata.location`",
                      "messages" => "`reqdata.message`",
                    },
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/internal/jobs/resume-scan-results",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "internal",
                    },
                    {
                      "lit" => "jobs",
                    },
                    {
                      "lit" => "resume-scan-results",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "internal",
                    "jobs",
                    "resume-scan-results",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => {
                      "content_type" => "`reqdata.content_type`",
                      "file_sha256" => "`reqdata.file_sha256`",
                      "intent_id" => "`reqdata.intent_id`",
                      "result" => "`reqdata.result`",
                      "scan_authority_id" => "`reqdata.scan_authority_id`",
                      "scanner" => "`reqdata.scanner`",
                      "scanner_version" => "`reqdata.scanner_version`",
                      "signature" => "`reqdata.signature`",
                      "size_bytes" => "`reqdata.size_byte`",
                    },
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/internal/owner-evidence/scan-results",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "internal",
                    },
                    {
                      "lit" => "owner-evidence",
                    },
                    {
                      "lit" => "scan-results",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "internal",
                    "owner-evidence",
                    "scan-results",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/stripe/webhook",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "stripe",
                    },
                    {
                      "lit" => "webhook",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "stripe",
                    "webhook",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/support/guide/help",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "support",
                    },
                    {
                      "lit" => "guide",
                    },
                    {
                      "lit" => "help",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "support",
                    "guide",
                    "help",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => {
                      "question" => "`reqdata.question`",
                    },
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/v1/assistant/native/status",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "assistant",
                    },
                    {
                      "lit" => "native",
                    },
                    {
                      "lit" => "status",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "assistant",
                    "native",
                    "status",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/v1/assistant/status",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "assistant",
                    },
                    {
                      "lit" => "status",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "assistant",
                    "status",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/v1/support/guide",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "support",
                    },
                    {
                      "lit" => "guide",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "support",
                    "guide",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "open_api_document" => {
          "fields" => [
            {
              "name" => "components",
              "title" => "Components",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "info",
              "title" => "Info",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "openapi",
              "title" => "Openapi",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "paths",
              "title" => "Paths",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "servers",
              "title" => "Servers",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "tags",
              "title" => "Tags",
              "type" => "`$ARRAY`",
              "req" => true,
            },
          ],
          "name" => "open_api_document",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/openapi.json",
                  "segments" => [
                    {
                      "lit" => "openapi.json",
                    },
                  ],
                  "parts" => [
                    "openapi.json",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/v1/openapi.json",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "openapi.json",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "openapi.json",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "operation" => {
          "fields" => [
            {
              "name" => "account_id",
              "title" => "Account Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "action",
              "title" => "Action",
              "type" => "`$STRING`",
              "req" => true,
              "op" => {
                "create" => {
                  "type" => "`$STRING`",
                },
              },
            },
            {
              "name" => "active",
              "title" => "Active",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "active_or_good_standing",
              "title" => "Active Or Good Standing",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "ai_draft_id",
              "title" => "Ai Draft Id",
              "type" => "`$STRING`",
            },
            {
              "name" => "allowed_actions",
              "title" => "Allowed Actions",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "alt",
              "title" => "Alt",
              "type" => "`$STRING`",
            },
            {
              "name" => "amount_cents",
              "title" => "Amount Cents",
              "type" => "`$NUMBER`",
              "req" => true,
              "short" => "Whole cents, non-zero, at most 1,000,000 either way; a promotional credit is positive.",
            },
            {
              "name" => "amount_off_cents",
              "title" => "Amount Off Cents",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "api_key",
              "title" => "Api Key",
              "type" => "`$STRING`",
              "req" => true,
              "op" => {
                "update" => {
                  "type" => "`$STRING`",
                },
              },
              "writeOnly" => true,
            },
            {
              "name" => "applies_to_period",
              "title" => "Applies To Period",
              "type" => "`$STRING`",
            },
            {
              "name" => "applies_to_tier",
              "title" => "Applies To Tier",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
            },
            {
              "name" => "assigned_admin_user_id",
              "title" => "Assigned Admin User Id",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
            },
            {
              "name" => "assigneeId",
              "title" => "Assignee Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "assigneeLabel",
              "title" => "Assignee Label",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "assigneeType",
              "title" => "Assignee Type",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "assignee_id",
              "title" => "Assignee Id",
              "type" => "`$STRING`",
            },
            {
              "name" => "assignee_label",
              "title" => "Assignee Label",
              "type" => "`$STRING`",
            },
            {
              "name" => "assignee_type",
              "title" => "Assignee Type",
              "type" => "`$STRING`",
              "short" => "AI assignment is unavailable while the customer-support workload is disconnected.",
            },
            {
              "name" => "assistant_enabled",
              "title" => "Assistant Enabled",
              "type" => "`$BOOLEAN`",
              "req" => true,
            },
            {
              "name" => "base_url",
              "title" => "Base Url",
              "type" => "`$STRING`",
            },
            {
              "name" => "body",
              "title" => "Body",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "businessId",
              "title" => "Business Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "businessName",
              "title" => "Business Name",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "business_id",
              "title" => "Business Id",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "req" => true,
              "op" => {
                "create" => {
                  "type" => "`$STRING`",
                },
              },
            },
            {
              "name" => "business_ids",
              "title" => "Business Ids",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "campaign_id",
              "title" => "Campaign Id",
              "type" => "`$STRING`",
            },
            {
              "name" => "campaign_ids",
              "title" => "Campaign Ids",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "caption",
              "title" => "Caption",
              "type" => "`$STRING`",
            },
            {
              "name" => "case_status",
              "title" => "Case Status",
              "type" => "`$STRING`",
            },
            {
              "name" => "catalog",
              "title" => "Catalog",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "category",
              "title" => "Category",
              "type" => "`$STRING`",
            },
            {
              "name" => "category_alias",
              "title" => "Category Alias",
              "type" => "`$STRING`",
              "req" => true,
              "op" => {
                "create" => {
                  "type" => "`$STRING`",
                },
              },
            },
            {
              "name" => "chunk_size",
              "title" => "Chunk Size",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "city",
              "title" => "City",
              "type" => "`$STRING`",
            },
            {
              "name" => "code",
              "title" => "Code",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "confidence",
              "title" => "Confidence",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "config",
              "title" => "Config",
              "type" => "`$OBJECT`",
              "req" => true,
              "short" => "Complete validated pricing configuration.",
            },
            {
              "name" => "confirm",
              "title" => "Confirm",
              "type" => "`$BOOLEAN`",
              "req" => true,
              "op" => {
                "create" => {
                  "type" => "`$STRING`",
                },
              },
            },
            {
              "name" => "confirm_admin",
              "title" => "Confirm Admin",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "confirmation",
              "title" => "Confirmation",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "connection_id",
              "title" => "Connection Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "connection_kind",
              "title" => "Connection Kind",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "content_type",
              "title" => "Content Type",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "context_id",
              "title" => "Context Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "context_type",
              "title" => "Context Type",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "createdAt",
              "title" => "Created At",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "req" => true,
            },
            {
              "name" => "created_at",
              "title" => "Created At",
              "type" => "`$STRING`",
              "req" => true,
              "format" => "date-time",
            },
            {
              "name" => "credential_expires_at",
              "title" => "Credential Expires At",
              "type" => "`$STRING`",
              "short" => "Expiration date printed on the license.",
              "format" => "date",
            },
            {
              "name" => "credential_id",
              "title" => "Credential Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "custom_wire",
              "title" => "Custom Wire",
              "type" => "`$STRING`",
            },
            {
              "name" => "data_base64",
              "title" => "Data Base64",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "decision",
              "title" => "Decision",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "dedupe_ack",
              "title" => "Dedupe Ack",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "delivery_contract",
              "title" => "Delivery Contract",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "disabled_reason",
              "title" => "Disabled Reason",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "req" => true,
            },
            {
              "name" => "discount_type",
              "title" => "Discount Type",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "display_name",
              "title" => "Display Name",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "disposition",
              "title" => "Disposition",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "draft",
              "title" => "Draft",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "duration",
              "title" => "Duration",
              "type" => "`$STRING`",
            },
            {
              "name" => "duration_in_months",
              "title" => "Duration In Months",
              "type" => [
                "`$ONE`",
                [
                  "`$INTEGER`",
                  "`$NULL`",
                ],
              ],
            },
            {
              "name" => "email",
              "title" => "Email",
              "type" => "`$STRING`",
              "req" => true,
              "format" => "email",
            },
            {
              "name" => "enabled",
              "title" => "Enabled",
              "type" => "`$BOOLEAN`",
              "req" => true,
            },
            {
              "name" => "endpoint",
              "title" => "Endpoint",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "endpoint_id",
              "title" => "Endpoint Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "endpoint_url",
              "title" => "Endpoint Url",
              "type" => "`$STRING`",
              "req" => true,
              "format" => "uri",
            },
            {
              "name" => "ends_at",
              "title" => "Ends At",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "environment_fallback",
              "title" => "Environment Fallback",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "event_id",
              "title" => "Event Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "event_types",
              "title" => "Event Types",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "expected_allowed_actions",
              "title" => "Expected Allowed Actions",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "expected_key_id",
              "title" => "Expected Key Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "expected_updated_at",
              "title" => "Expected Updated At",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "expected_version",
              "title" => "Expected Version",
              "type" => "`$NUMBER`",
              "req" => true,
            },
            {
              "name" => "expires_at",
              "title" => "Expires At",
              "type" => "`$STRING`",
              "short" => "Promotional credit only: ISO date-time 1 hour to 2 years ahead, disclosed to the owner.",
            },
            {
              "name" => "fact_id",
              "title" => "Fact Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "facts",
              "title" => "Facts",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "failure_count",
              "title" => "Failure Count",
              "type" => "`$INTEGER`",
              "req" => true,
            },
            {
              "name" => "fields",
              "title" => "Fields",
              "type" => "`$OBJECT`",
              "req" => true,
              "short" => "Validated fields for this fixed content-block type.",
            },
            {
              "name" => "file_name",
              "title" => "File Name",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "guideHandoffAnsweredAt",
              "title" => "Guide Handoff Answered At",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
            },
            {
              "name" => "guideHandoffAt",
              "title" => "Guide Handoff At",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
            },
            {
              "name" => "guideHandoffDueAt",
              "title" => "Guide Handoff Due At",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
            },
            {
              "name" => "height",
              "title" => "Height",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "historic_association_checked",
              "title" => "Historic Association Checked",
              "type" => "`$BOOLEAN`",
              "req" => true,
            },
            {
              "name" => "hold",
              "title" => "Hold",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "holder_name_match",
              "title" => "Holder Name Match",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "hours",
              "title" => "Hours",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "idempotency_key",
              "title" => "Idempotency Key",
              "type" => "`$STRING`",
            },
            {
              "name" => "identifier_match",
              "title" => "Identifier Match",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "in_use",
              "title" => "In Use",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "instruction",
              "title" => "Instruction",
              "type" => "`$STRING`",
            },
            {
              "name" => "invited",
              "title" => "Invited",
              "type" => "`$BOOLEAN`",
              "req" => true,
            },
            {
              "name" => "key_check",
              "title" => "Key Check",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "kind",
              "title" => "Kind",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "label",
              "title" => "Label",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "lastMessageAt",
              "title" => "Last Message At",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "req" => true,
            },
            {
              "name" => "lastMessageAuthorType",
              "title" => "Last Message Author Type",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "lastMessagePreview",
              "title" => "Last Message Preview",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "last_delivery_at",
              "title" => "Last Delivery At",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "req" => true,
              "format" => "date-time",
            },
            {
              "name" => "last_error_code",
              "title" => "Last Error Code",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "last_probe_at",
              "title" => "Last Probe At",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "last_problem",
              "title" => "Last Problem",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "legal_name",
              "title" => "Legal Name",
              "type" => "`$STRING`",
            },
            {
              "name" => "limit",
              "title" => "Limit",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "make_active",
              "title" => "Make Active",
              "type" => "`$BOOLEAN`",
              "req" => true,
            },
            {
              "name" => "max_cents",
              "title" => "Max Cents",
              "type" => "`$NUMBER`",
              "req" => true,
            },
            {
              "name" => "max_redemptions",
              "title" => "Max Redemptions",
              "type" => [
                "`$ONE`",
                [
                  "`$INTEGER`",
                  "`$NULL`",
                ],
              ],
            },
            {
              "name" => "messages",
              "title" => "Messages",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "messagesTruncated",
              "title" => "Messages Truncated",
              "type" => "`$BOOLEAN`",
              "req" => true,
            },
            {
              "name" => "min_cents",
              "title" => "Min Cents",
              "type" => "`$NUMBER`",
              "req" => true,
            },
            {
              "name" => "model",
              "title" => "Model",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "model_id",
              "title" => "Model Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "name",
              "title" => "Name",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "note",
              "title" => "Note",
              "type" => "`$STRING`",
            },
            {
              "name" => "notes",
              "title" => "Notes",
              "type" => "`$STRING`",
            },
            {
              "name" => "observed_at",
              "title" => "Observed At",
              "type" => "`$STRING`",
              "format" => "date-time",
            },
            {
              "name" => "one_time_display",
              "title" => "One Time Display",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "outcome",
              "title" => "Outcome",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "ownerEmail",
              "title" => "Owner Email",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "ownerLastReadAt",
              "title" => "Owner Last Read At",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "req" => true,
            },
            {
              "name" => "ownerName",
              "title" => "Owner Name",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "ownerUserId",
              "title" => "Owner User Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "owner_reason_code",
              "title" => "Owner Reason Code",
              "type" => "`$STRING`",
              "short" => "Controlled owner-visible rejection reason.",
            },
            {
              "name" => "per_customer_limit",
              "title" => "Per Customer Limit",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "percent_off",
              "title" => "Percent Off",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "phone",
              "title" => "Phone",
              "type" => "`$STRING`",
            },
            {
              "name" => "policyVersion",
              "title" => "Policy Version",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "priority",
              "title" => "Priority",
              "type" => "`$STRING`",
            },
            {
              "name" => "provider",
              "title" => "Provider",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "providers",
              "title" => "Providers",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "purpose_code",
              "title" => "Purpose Code",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "rank_bid_cents",
              "title" => "Rank Bid Cents",
              "type" => "`$INTEGER`",
              "req" => true,
            },
            {
              "name" => "reason",
              "title" => "Reason",
              "type" => "`$STRING`",
              "req" => true,
              "op" => {
                "create" => {
                  "type" => "`$STRING`",
                },
              },
            },
            {
              "name" => "reason_category",
              "title" => "Reason Category",
              "type" => "`$STRING`",
            },
            {
              "name" => "reason_code",
              "title" => "Reason Code",
              "type" => "`$STRING`",
              "op" => {
                "patch" => {
                  "req" => true,
                  "type" => "`$STRING`",
                },
              },
            },
            {
              "name" => "reason_detail",
              "title" => "Reason Detail",
              "type" => "`$STRING`",
            },
            {
              "name" => "reference",
              "title" => "Reference",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "reject_reason",
              "title" => "Reject Reason",
              "type" => "`$STRING`",
            },
            {
              "name" => "related_case_id",
              "title" => "Related Case Id",
              "type" => "`$STRING`",
            },
            {
              "name" => "report_id",
              "title" => "Report Id",
              "type" => "`$INTEGER`",
              "req" => true,
              "op" => {
                "create" => {
                  "type" => "`$STRING`",
                },
              },
            },
            {
              "name" => "report_ids",
              "title" => "Report Ids",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "reserve_cents",
              "title" => "Reserve Cents",
              "type" => "`$NUMBER`",
              "req" => true,
              "short" => "100-10000; never below $1.00.",
            },
            {
              "name" => "resolution_note",
              "title" => "Resolution Note",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "review_notes",
              "title" => "Review Notes",
              "type" => "`$STRING`",
            },
            {
              "name" => "revision",
              "title" => "Revision",
              "type" => "`$INTEGER`",
              "req" => true,
            },
            {
              "name" => "role",
              "title" => "Role",
              "type" => "`$STRING`",
              "req" => true,
              "op" => {
                "create" => {
                  "type" => "`$STRING`",
                },
              },
            },
            {
              "name" => "rows",
              "title" => "Rows",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "run",
              "title" => "Run",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "schema_version",
              "title" => "Schema Version",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "scope",
              "title" => "Scope",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "search",
              "title" => "Search",
              "type" => "`$STRING`",
            },
            {
              "name" => "settings",
              "title" => "Settings",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "signing_secret",
              "title" => "Signing Secret",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "size_bytes",
              "title" => "Size Bytes",
              "type" => "`$NUMBER`",
              "req" => true,
            },
            {
              "name" => "sla_due_at",
              "title" => "Sla Due At",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
            },
            {
              "name" => "source",
              "title" => "Source",
              "type" => "`$STRING`",
              "req" => true,
              "op" => {
                "create" => {
                  "type" => "`$STRING`",
                },
              },
            },
            {
              "name" => "source_authority",
              "title" => "Source Authority",
              "type" => "`$STRING`",
              "short" => "Exact official authority name.",
            },
            {
              "name" => "source_category_slug",
              "title" => "Source Category Slug",
              "type" => "`$STRING`",
              "req" => true,
              "op" => {
                "create" => {
                  "type" => "`$STRING`",
                },
              },
            },
            {
              "name" => "source_scope_checked",
              "title" => "Source Scope Checked",
              "type" => "`$BOOLEAN`",
              "req" => true,
            },
            {
              "name" => "source_url",
              "title" => "Source Url",
              "type" => "`$STRING`",
              "short" => "Exact HTTPS official source URL.",
              "format" => "uri",
            },
            {
              "name" => "starts_at",
              "title" => "Starts At",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
            },
            {
              "name" => "state",
              "title" => "State",
              "type" => "`$STRING`",
              "short" => "Bulk by area: every ad of the advertisers in this two-letter U.S.",
            },
            {
              "name" => "status",
              "title" => "Status",
              "type" => "`$STRING`",
              "req" => true,
              "op" => {
                "create" => {
                  "type" => "`$STRING`",
                },
                "patch" => {
                  "type" => "`$STRING`",
                },
              },
            },
            {
              "name" => "storage",
              "title" => "Storage",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "street_address",
              "title" => "Street Address",
              "type" => "`$STRING`",
            },
            {
              "name" => "subject",
              "title" => "Subject",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "supportLastReadAt",
              "title" => "Support Last Read At",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "req" => true,
            },
            {
              "name" => "target_category",
              "title" => "Target Category",
              "type" => "`$STRING`",
              "req" => true,
              "op" => {
                "create" => {
                  "type" => "`$STRING`",
                },
                "patch" => {
                  "type" => "`$STRING`",
                },
              },
            },
            {
              "name" => "taxonomy_category_aliases",
              "title" => "Taxonomy Category Aliases",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "ticketNumber",
              "title" => "Ticket Number",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "tier",
              "title" => "Tier",
              "type" => "`$STRING`",
              "op" => {
                "create" => {
                  "req" => true,
                  "type" => "`$STRING`",
                },
              },
            },
            {
              "name" => "typing",
              "title" => "Typing",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "until",
              "title" => "Until",
              "type" => "`$STRING`",
            },
            {
              "name" => "updatedAt",
              "title" => "Updated At",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "req" => true,
            },
            {
              "name" => "updated_at",
              "title" => "Updated At",
              "type" => "`$STRING`",
              "req" => true,
              "format" => "date-time",
            },
            {
              "name" => "url",
              "title" => "Url",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "Public HTTPS receiver operated by the connecting principal or its agent runtime.",
              "format" => "uri",
            },
            {
              "name" => "valid_until",
              "title" => "Valid Until",
              "type" => "`$STRING`",
              "format" => "date-time",
            },
            {
              "name" => "value",
              "title" => "Value",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "verification_method",
              "title" => "Verification Method",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "verified_at",
              "title" => "Verified At",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "verified_service_scope",
              "title" => "Verified Service Scope",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "version",
              "title" => "Version",
              "type" => "`$STRING`",
            },
            {
              "name" => "website",
              "title" => "Website",
              "type" => "`$STRING`",
            },
            {
              "name" => "width",
              "title" => "Width",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "window_hours",
              "title" => "Window Hours",
              "type" => "`$NUMBER`",
              "short" => "1-744, default 48.",
            },
            {
              "name" => "workload",
              "title" => "Workload",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "zip",
              "title" => "Zip",
              "type" => "`$STRING`",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "operation",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/businesses/{business_id}/job-applications/{application_id}/resume-url",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "businesses",
                    },
                    {
                      "var" => "business_id",
                    },
                    {
                      "lit" => "job-applications",
                    },
                    {
                      "var" => "job_application_id",
                    },
                    {
                      "lit" => "resume-url",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "businesses",
                    "{business_id}",
                    "job-applications",
                    "{job_application_id}",
                    "resume-url",
                  ],
                  "rename" => {
                    "param" => {
                      "application_id" => "job_application_id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "header" => [
                      {
                        "name" => "x_loppee_admin_context",
                        "orig" => "X-Loppee-Admin-Context",
                        "type" => "`$STRING`",
                        "kind" => "header",
                        "reqd" => true,
                      },
                    ],
                    "params" => [
                      {
                        "name" => "business_id",
                        "orig" => "business_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                      {
                        "name" => "job_application_id",
                        "orig" => "application_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "business_id",
                      "job_application_id",
                      "x_loppee_admin_context",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/businesses/{business_id}/jobs/{job_id}/close",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "businesses",
                    },
                    {
                      "var" => "business_id",
                    },
                    {
                      "lit" => "jobs",
                    },
                    {
                      "var" => "job_id",
                    },
                    {
                      "lit" => "close",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "businesses",
                    "{business_id}",
                    "jobs",
                    "{job_id}",
                    "close",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "header" => [
                      {
                        "name" => "x_loppee_admin_context",
                        "orig" => "X-Loppee-Admin-Context",
                        "type" => "`$STRING`",
                        "kind" => "header",
                        "reqd" => true,
                      },
                    ],
                    "params" => [
                      {
                        "name" => "business_id",
                        "orig" => "business_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                      {
                        "name" => "job_id",
                        "orig" => "job_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "business_id",
                      "job_id",
                      "x_loppee_admin_context",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/businesses/{business_id}/messages/{thread_id}/moderate",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "businesses",
                    },
                    {
                      "var" => "business_id",
                    },
                    {
                      "lit" => "messages",
                    },
                    {
                      "var" => "message_id",
                    },
                    {
                      "lit" => "moderate",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "businesses",
                    "{business_id}",
                    "messages",
                    "{message_id}",
                    "moderate",
                  ],
                  "rename" => {
                    "param" => {
                      "thread_id" => "message_id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "header" => [
                      {
                        "name" => "x_loppee_admin_context",
                        "orig" => "X-Loppee-Admin-Context",
                        "type" => "`$STRING`",
                        "kind" => "header",
                        "reqd" => true,
                      },
                    ],
                    "params" => [
                      {
                        "name" => "business_id",
                        "orig" => "business_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                      {
                        "name" => "message_id",
                        "orig" => "thread_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "business_id",
                      "message_id",
                      "x_loppee_admin_context",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/businesses/{business_id}/archived-records/{fact_id}/review",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "businesses",
                    },
                    {
                      "var" => "business_id",
                    },
                    {
                      "lit" => "archived-records",
                    },
                    {
                      "var" => "archived_record_id",
                    },
                    {
                      "lit" => "review",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "businesses",
                    "{business_id}",
                    "archived-records",
                    "{archived_record_id}",
                    "review",
                  ],
                  "rename" => {
                    "param" => {
                      "fact_id" => "archived_record_id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "archived_record_id",
                        "orig" => "fact_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                      {
                        "name" => "business_id",
                        "orig" => "business_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "archived_record_id",
                      "business_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/ads/accounts/{account_id}/adjust",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "ads",
                    },
                    {
                      "lit" => "accounts",
                    },
                    {
                      "var" => "account_id",
                    },
                    {
                      "lit" => "adjust",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "ads",
                    "accounts",
                    "{account_id}",
                    "adjust",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "account_id",
                        "orig" => "account_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "account_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/ads/accounts/{account_id}/release-hold",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "ads",
                    },
                    {
                      "lit" => "accounts",
                    },
                    {
                      "var" => "account_id",
                    },
                    {
                      "lit" => "release-hold",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "ads",
                    "accounts",
                    "{account_id}",
                    "release-hold",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "account_id",
                        "orig" => "account_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "account_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/team/agents/{agent_id}/access",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "team",
                    },
                    {
                      "lit" => "agents",
                    },
                    {
                      "var" => "agent_id",
                    },
                    {
                      "lit" => "access",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "team",
                    "agents",
                    "{agent_id}",
                    "access",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "agent_id",
                        "orig" => "agent_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "agent_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/team/agents/{agent_id}/disable",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "team",
                    },
                    {
                      "lit" => "agents",
                    },
                    {
                      "var" => "agent_id",
                    },
                    {
                      "lit" => "disable",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "team",
                    "agents",
                    "{agent_id}",
                    "disable",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "agent_id",
                        "orig" => "agent_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "agent_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/team/agents/{agent_id}/rotate-key",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "team",
                    },
                    {
                      "lit" => "agents",
                    },
                    {
                      "var" => "agent_id",
                    },
                    {
                      "lit" => "rotate-key",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "team",
                    "agents",
                    "{agent_id}",
                    "rotate-key",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "agent_id",
                        "orig" => "agent_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "agent_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/team/agents/{agent_id}/scope",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "team",
                    },
                    {
                      "lit" => "agents",
                    },
                    {
                      "var" => "agent_id",
                    },
                    {
                      "lit" => "scope",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "team",
                    "agents",
                    "{agent_id}",
                    "scope",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "agent_id",
                        "orig" => "agent_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "agent_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/team/agents/{agent_id}/webhook",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "team",
                    },
                    {
                      "lit" => "agents",
                    },
                    {
                      "var" => "agent_id",
                    },
                    {
                      "lit" => "webhook",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "team",
                    "agents",
                    "{agent_id}",
                    "webhook",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => {
                      "url" => "`reqdata.url`",
                    },
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "agent_id",
                        "orig" => "agent_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "agent_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/team/agents/{agent_id}/webhook/disable",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "team",
                    },
                    {
                      "lit" => "agents",
                    },
                    {
                      "var" => "agent_id",
                    },
                    {
                      "lit" => "webhook",
                    },
                    {
                      "lit" => "disable",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "team",
                    "agents",
                    "{agent_id}",
                    "webhook",
                    "disable",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.endpoint`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "agent_id",
                        "orig" => "agent_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "agent_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/team/agents/{agent_id}/webhook/rotate-secret",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "team",
                    },
                    {
                      "lit" => "agents",
                    },
                    {
                      "var" => "agent_id",
                    },
                    {
                      "lit" => "webhook",
                    },
                    {
                      "lit" => "rotate-secret",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "team",
                    "agents",
                    "{agent_id}",
                    "webhook",
                    "rotate-secret",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "agent_id",
                        "orig" => "agent_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "agent_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/team/agents/{agent_id}/webhook/test",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "team",
                    },
                    {
                      "lit" => "agents",
                    },
                    {
                      "var" => "agent_id",
                    },
                    {
                      "lit" => "webhook",
                    },
                    {
                      "lit" => "test",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "team",
                    "agents",
                    "{agent_id}",
                    "webhook",
                    "test",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "agent_id",
                        "orig" => "agent_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "agent_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/content/blocks/{block_key}/discard-draft",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "content",
                    },
                    {
                      "lit" => "blocks",
                    },
                    {
                      "var" => "block_key",
                    },
                    {
                      "lit" => "discard-draft",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "content",
                    "blocks",
                    "{block_key}",
                    "discard-draft",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "block_key",
                        "orig" => "block_key",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "block_key",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/content/blocks/{block_key}/draft",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "content",
                    },
                    {
                      "lit" => "blocks",
                    },
                    {
                      "var" => "block_key",
                    },
                    {
                      "lit" => "draft",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "content",
                    "blocks",
                    "{block_key}",
                    "draft",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "block_key",
                        "orig" => "block_key",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "block_key",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/content/blocks/{block_key}/publish",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "content",
                    },
                    {
                      "lit" => "blocks",
                    },
                    {
                      "var" => "block_key",
                    },
                    {
                      "lit" => "publish",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "content",
                    "blocks",
                    "{block_key}",
                    "publish",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "block_key",
                        "orig" => "block_key",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "block_key",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/content/blocks/{block_key}/revert",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "content",
                    },
                    {
                      "lit" => "blocks",
                    },
                    {
                      "var" => "block_key",
                    },
                    {
                      "lit" => "revert",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "content",
                    "blocks",
                    "{block_key}",
                    "revert",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "block_key",
                        "orig" => "block_key",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "block_key",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/ops/bulk-jobs/{job_id}/apply",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "ops",
                    },
                    {
                      "lit" => "bulk-jobs",
                    },
                    {
                      "var" => "bulk_job_id",
                    },
                    {
                      "lit" => "apply",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "ops",
                    "bulk-jobs",
                    "{bulk_job_id}",
                    "apply",
                  ],
                  "rename" => {
                    "param" => {
                      "job_id" => "bulk_job_id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "bulk_job_id",
                        "orig" => "job_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "bulk_job_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/ops/bulk-jobs/{job_id}/enqueue",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "ops",
                    },
                    {
                      "lit" => "bulk-jobs",
                    },
                    {
                      "var" => "bulk_job_id",
                    },
                    {
                      "lit" => "enqueue",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "ops",
                    "bulk-jobs",
                    "{bulk_job_id}",
                    "enqueue",
                  ],
                  "rename" => {
                    "param" => {
                      "job_id" => "bulk_job_id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "bulk_job_id",
                        "orig" => "job_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "bulk_job_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/ops/bulk-jobs/{job_id}/rollback",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "ops",
                    },
                    {
                      "lit" => "bulk-jobs",
                    },
                    {
                      "var" => "bulk_job_id",
                    },
                    {
                      "lit" => "rollback",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "ops",
                    "bulk-jobs",
                    "{bulk_job_id}",
                    "rollback",
                  ],
                  "rename" => {
                    "param" => {
                      "job_id" => "bulk_job_id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "bulk_job_id",
                        "orig" => "job_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "bulk_job_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/business-claims/{claim_id}/review",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "business-claims",
                    },
                    {
                      "var" => "business_claim_id",
                    },
                    {
                      "lit" => "review",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "business-claims",
                    "{business_claim_id}",
                    "review",
                  ],
                  "rename" => {
                    "param" => {
                      "claim_id" => "business_claim_id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "business_claim_id",
                        "orig" => "claim_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "business_claim_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/businesses/{business_id}/billing-comp",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "businesses",
                    },
                    {
                      "var" => "business_id",
                    },
                    {
                      "lit" => "billing-comp",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "businesses",
                    "{business_id}",
                    "billing-comp",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "business_id",
                        "orig" => "business_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "business_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/businesses/{business_id}/category",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "businesses",
                    },
                    {
                      "var" => "business_id",
                    },
                    {
                      "lit" => "category",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "businesses",
                    "{business_id}",
                    "category",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "business_id",
                        "orig" => "business_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "business_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/businesses/{business_id}/exposure-tier",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "businesses",
                    },
                    {
                      "var" => "business_id",
                    },
                    {
                      "lit" => "exposure-tier",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "businesses",
                    "{business_id}",
                    "exposure-tier",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "business_id",
                        "orig" => "business_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "business_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/businesses/{business_id}/facts",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "businesses",
                    },
                    {
                      "var" => "business_id",
                    },
                    {
                      "lit" => "facts",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "businesses",
                    "{business_id}",
                    "facts",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "business_id",
                        "orig" => "business_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "business_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/businesses/{business_id}/hours",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "businesses",
                    },
                    {
                      "var" => "business_id",
                    },
                    {
                      "lit" => "hours",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "businesses",
                    "{business_id}",
                    "hours",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "business_id",
                        "orig" => "business_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "business_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/businesses/{business_id}/lifecycle",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "businesses",
                    },
                    {
                      "var" => "business_id",
                    },
                    {
                      "lit" => "lifecycle",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "businesses",
                    "{business_id}",
                    "lifecycle",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "business_id",
                        "orig" => "business_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "business_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/ops/duplicate-candidates/{candidate_id}/merge-dry-run",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "ops",
                    },
                    {
                      "lit" => "duplicate-candidates",
                    },
                    {
                      "var" => "candidate_id",
                    },
                    {
                      "lit" => "merge-dry-run",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "ops",
                    "duplicate-candidates",
                    "{candidate_id}",
                    "merge-dry-run",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "candidate_id",
                        "orig" => "candidate_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "$action" => "merge_dry_run",
                    "exist" => [
                      "candidate_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/category-requests/{request_id}/review",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "category-requests",
                    },
                    {
                      "var" => "category_request_id",
                    },
                    {
                      "lit" => "review",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "category-requests",
                    "{category_request_id}",
                    "review",
                  ],
                  "rename" => {
                    "param" => {
                      "request_id" => "category_request_id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "category_request_id",
                        "orig" => "request_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "category_request_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/ads/clicks/{click_id}/credit",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "ads",
                    },
                    {
                      "lit" => "clicks",
                    },
                    {
                      "var" => "click_id",
                    },
                    {
                      "lit" => "credit",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "ads",
                    "clicks",
                    "{click_id}",
                    "credit",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "click_id",
                        "orig" => "click_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "click_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/ads/clicks/{click_id}/invalid",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "ads",
                    },
                    {
                      "lit" => "clicks",
                    },
                    {
                      "var" => "click_id",
                    },
                    {
                      "lit" => "invalid",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "ads",
                    "clicks",
                    "{click_id}",
                    "invalid",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "click_id",
                        "orig" => "click_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "click_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/ads/comped/{campaign_id}/end",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "ads",
                    },
                    {
                      "lit" => "comped",
                    },
                    {
                      "var" => "comped_id",
                    },
                    {
                      "lit" => "end",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "ads",
                    "comped",
                    "{comped_id}",
                    "end",
                  ],
                  "rename" => {
                    "param" => {
                      "campaign_id" => "comped_id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "comped_id",
                        "orig" => "campaign_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "comped_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/ai-connections/{connection_id}/rotate",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "ai-connections",
                    },
                    {
                      "var" => "connection_id",
                    },
                    {
                      "lit" => "rotate",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "ai-connections",
                    "{connection_id}",
                    "rotate",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => {
                      "api_key" => "`reqdata.api_key`",
                    },
                    "res" => "`body.connection`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "connection_id",
                        "orig" => "connection_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "$action" => "rotate",
                    "exist" => [
                      "connection_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/ai-connections/{connection_id}/test",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "ai-connections",
                    },
                    {
                      "var" => "connection_id",
                    },
                    {
                      "lit" => "test",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "ai-connections",
                    "{connection_id}",
                    "test",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "connection_id",
                        "orig" => "connection_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "$action" => "test",
                    "exist" => [
                      "connection_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/coupons/{coupon_id}",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "coupons",
                    },
                    {
                      "var" => "coupon_id",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "coupons",
                    "{coupon_id}",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "coupon_id",
                        "orig" => "coupon_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "coupon_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/deals/{deal_id}/moderate",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "deals",
                    },
                    {
                      "var" => "deal_id",
                    },
                    {
                      "lit" => "moderate",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "deals",
                    "{deal_id}",
                    "moderate",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "deal_id",
                        "orig" => "deal_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "deal_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/ads/review/{id}",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "ads",
                    },
                    {
                      "lit" => "review",
                    },
                    {
                      "var" => "id",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "ads",
                    "review",
                    "{id}",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "id",
                        "orig" => "id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/team/invites/{invite_id}/revoke",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "team",
                    },
                    {
                      "lit" => "invites",
                    },
                    {
                      "var" => "invite_id",
                    },
                    {
                      "lit" => "revoke",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "team",
                    "invites",
                    "{invite_id}",
                    "revoke",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "invite_id",
                        "orig" => "invite_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "invite_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/switches/{key}",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "switches",
                    },
                    {
                      "var" => "key",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "switches",
                    "{key}",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => {
                      "reason" => "`reqdata.reason`",
                      "value" => "`reqdata.value`",
                    },
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "key",
                        "orig" => "key",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "key",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/license-record-reports/{report_id}/resolve",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "license-record-reports",
                    },
                    {
                      "var" => "license_record_report_id",
                    },
                    {
                      "lit" => "resolve",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "license-record-reports",
                    "{license_record_report_id}",
                    "resolve",
                  ],
                  "rename" => {
                    "param" => {
                      "report_id" => "license_record_report_id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "license_record_report_id",
                        "orig" => "report_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "license_record_report_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/v3/manual-verification-submissions/{submission_id}/decision",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "v3",
                    },
                    {
                      "lit" => "manual-verification-submissions",
                    },
                    {
                      "var" => "manual_verification_submission_id",
                    },
                    {
                      "lit" => "decision",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "v3",
                    "manual-verification-submissions",
                    "{manual_verification_submission_id}",
                    "decision",
                  ],
                  "rename" => {
                    "param" => {
                      "submission_id" => "manual_verification_submission_id",
                    },
                  },
                  "transform" => {
                    "req" => {
                      "active_or_good_standing" => "`reqdata.active_or_good_standing`",
                      "confirmation" => "`reqdata.confirmation`",
                      "credential_expires_at" => "`reqdata.credential_expires_at`",
                      "holder_name_match" => "`reqdata.holder_name_match`",
                      "identifier_match" => "`reqdata.identifier_match`",
                      "observed_at" => "`reqdata.observed_at`",
                      "outcome" => "`reqdata.outcome`",
                      "owner_reason_code" => "`reqdata.owner_reason_code`",
                      "reason" => "`reqdata.reason`",
                      "source_authority" => "`reqdata.source_authority`",
                      "source_url" => "`reqdata.source_url`",
                      "valid_until" => "`reqdata.valid_until`",
                      "verification_method" => "`reqdata.verification_method`",
                      "verified_service_scope" => "`reqdata.verified_service_scope`",
                    },
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "manual_verification_submission_id",
                        "orig" => "submission_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "manual_verification_submission_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/content/media/{media_id}/delete",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "content",
                    },
                    {
                      "lit" => "media",
                    },
                    {
                      "var" => "media_id",
                    },
                    {
                      "lit" => "delete",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "content",
                    "media",
                    "{media_id}",
                    "delete",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "media_id",
                        "orig" => "media_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "media_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/media/{asset_id}/remove",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "media",
                    },
                    {
                      "var" => "media_id",
                    },
                    {
                      "lit" => "remove",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "media",
                    "{media_id}",
                    "remove",
                  ],
                  "rename" => {
                    "param" => {
                      "asset_id" => "media_id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "media_id",
                        "orig" => "asset_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "media_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/assistant-provider/{provider}/test",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "assistant-provider",
                    },
                    {
                      "var" => "provider",
                    },
                    {
                      "lit" => "test",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "assistant-provider",
                    "{provider}",
                    "test",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "provider",
                        "orig" => "provider",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "$action" => "test",
                    "exist" => [
                      "provider",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/ads/refund-requests/{request_id}/approve",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "ads",
                    },
                    {
                      "lit" => "refund-requests",
                    },
                    {
                      "var" => "refund_request_id",
                    },
                    {
                      "lit" => "approve",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "ads",
                    "refund-requests",
                    "{refund_request_id}",
                    "approve",
                  ],
                  "rename" => {
                    "param" => {
                      "request_id" => "refund_request_id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "refund_request_id",
                        "orig" => "request_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "refund_request_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/ads/refund-requests/{request_id}/reject",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "ads",
                    },
                    {
                      "lit" => "refund-requests",
                    },
                    {
                      "var" => "refund_request_id",
                    },
                    {
                      "lit" => "reject",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "ads",
                    "refund-requests",
                    "{refund_request_id}",
                    "reject",
                  ],
                  "rename" => {
                    "param" => {
                      "request_id" => "refund_request_id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "refund_request_id",
                        "orig" => "request_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "refund_request_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/v3/review-anomalies/{flag_id}/resolve",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "v3",
                    },
                    {
                      "lit" => "review-anomalies",
                    },
                    {
                      "var" => "review_anomaly_id",
                    },
                    {
                      "lit" => "resolve",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "v3",
                    "review-anomalies",
                    "{review_anomaly_id}",
                    "resolve",
                  ],
                  "rename" => {
                    "param" => {
                      "flag_id" => "review_anomaly_id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "review_anomaly_id",
                        "orig" => "flag_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "review_anomaly_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/reviews/{review_id}/moderate",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "reviews",
                    },
                    {
                      "var" => "review_id",
                    },
                    {
                      "lit" => "moderate",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "reviews",
                    "{review_id}",
                    "moderate",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "review_id",
                        "orig" => "review_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "review_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/service-accounts/{account_id}/status",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "service-accounts",
                    },
                    {
                      "var" => "service_account_id",
                    },
                    {
                      "lit" => "status",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "service-accounts",
                    "{service_account_id}",
                    "status",
                  ],
                  "rename" => {
                    "param" => {
                      "account_id" => "service_account_id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "service_account_id",
                        "orig" => "account_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "service_account_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/support/{conversation_id}/ai-draft",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "support",
                    },
                    {
                      "var" => "support_id",
                    },
                    {
                      "lit" => "ai-draft",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "support",
                    "{support_id}",
                    "ai-draft",
                  ],
                  "rename" => {
                    "param" => {
                      "conversation_id" => "support_id",
                    },
                  },
                  "transform" => {
                    "req" => {
                      "instruction" => "`reqdata.instruction`",
                    },
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "support_id",
                        "orig" => "conversation_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "support_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/support/{conversation_id}/assign",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "support",
                    },
                    {
                      "var" => "support_id",
                    },
                    {
                      "lit" => "assign",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "support",
                    "{support_id}",
                    "assign",
                  ],
                  "rename" => {
                    "param" => {
                      "conversation_id" => "support_id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.conversation`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "support_id",
                        "orig" => "conversation_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "support_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/support/{conversation_id}/read",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "support",
                    },
                    {
                      "var" => "support_id",
                    },
                    {
                      "lit" => "read",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "support",
                    "{support_id}",
                    "read",
                  ],
                  "rename" => {
                    "param" => {
                      "conversation_id" => "support_id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "support_id",
                        "orig" => "conversation_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "support_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/support/{conversation_id}/reply",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "support",
                    },
                    {
                      "var" => "support_id",
                    },
                    {
                      "lit" => "reply",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "support",
                    "{support_id}",
                    "reply",
                  ],
                  "rename" => {
                    "param" => {
                      "conversation_id" => "support_id",
                    },
                  },
                  "transform" => {
                    "req" => {
                      "ai_draft_id" => "`reqdata.ai_draft_id`",
                      "body" => "`reqdata.body`",
                    },
                    "res" => "`body.conversation`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "support_id",
                        "orig" => "conversation_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "support_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/support/{conversation_id}/status",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "support",
                    },
                    {
                      "var" => "support_id",
                    },
                    {
                      "lit" => "status",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "support",
                    "{support_id}",
                    "status",
                  ],
                  "rename" => {
                    "param" => {
                      "conversation_id" => "support_id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.conversation`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "support_id",
                        "orig" => "conversation_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "support_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/support/{conversation_id}/typing",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "support",
                    },
                    {
                      "var" => "support_id",
                    },
                    {
                      "lit" => "typing",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "support",
                    "{support_id}",
                    "typing",
                  ],
                  "rename" => {
                    "param" => {
                      "conversation_id" => "support_id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "support_id",
                        "orig" => "conversation_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "support_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/team/members/{user_id}",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "team",
                    },
                    {
                      "lit" => "members",
                    },
                    {
                      "var" => "user_id",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "team",
                    "members",
                    "{user_id}",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "user_id",
                        "orig" => "user_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "user_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/team/members/{user_id}/remove",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "team",
                    },
                    {
                      "lit" => "members",
                    },
                    {
                      "var" => "user_id",
                    },
                    {
                      "lit" => "remove",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "team",
                    "members",
                    "{user_id}",
                    "remove",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "user_id",
                        "orig" => "user_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "$action" => "remove",
                    "exist" => [
                      "user_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/ops/worker-tasks/{task_id}/control",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "ops",
                    },
                    {
                      "lit" => "worker-tasks",
                    },
                    {
                      "var" => "worker_task_id",
                    },
                    {
                      "lit" => "control",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "ops",
                    "worker-tasks",
                    "{worker_task_id}",
                    "control",
                  ],
                  "rename" => {
                    "param" => {
                      "task_id" => "worker_task_id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "worker_task_id",
                        "orig" => "task_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "worker_task_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/access-contexts",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "access-contexts",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "access-contexts",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => {
                      "context_id" => "`reqdata.context_id`",
                      "context_type" => "`reqdata.context_type`",
                      "purpose_code" => "`reqdata.purpose_code`",
                      "related_case_id" => "`reqdata.related_case_id`",
                      "scope" => "`reqdata.scope`",
                    },
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/ads/comped",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "ads",
                    },
                    {
                      "lit" => "comped",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "ads",
                    "comped",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/ads/invites",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "ads",
                    },
                    {
                      "lit" => "invites",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "ads",
                    "invites",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/ads/moderation",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "ads",
                    },
                    {
                      "lit" => "moderation",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "ads",
                    "moderation",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/ads/reconciliation/run",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "ads",
                    },
                    {
                      "lit" => "reconciliation",
                    },
                    {
                      "lit" => "run",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "ads",
                    "reconciliation",
                    "run",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/ai-connections",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "ai-connections",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "ai-connections",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => {
                      "api_key" => "`reqdata.api_key`",
                      "provider" => "`reqdata.provider`",
                    },
                    "res" => "`body.connection`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/assistant-provider/active",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "assistant-provider",
                    },
                    {
                      "lit" => "active",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "assistant-provider",
                    "active",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => {
                      "provider" => "`reqdata.provider`",
                    },
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/businesses",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "businesses",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "businesses",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/content/media",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "content",
                    },
                    {
                      "lit" => "media",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "content",
                    "media",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/coupons",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "coupons",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "coupons",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/florida-seo/reviews/inspect",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "florida-seo",
                    },
                    {
                      "lit" => "reviews",
                    },
                    {
                      "lit" => "inspect",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "florida-seo",
                    "reviews",
                    "inspect",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => {
                      "business_ids" => "`reqdata.business_id`",
                    },
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/ops/category-mappings",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "ops",
                    },
                    {
                      "lit" => "category-mappings",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "ops",
                    "category-mappings",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/ops/category-remap/dry-run",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "ops",
                    },
                    {
                      "lit" => "category-remap",
                    },
                    {
                      "lit" => "dry-run",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "ops",
                    "category-remap",
                    "dry-run",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/ops/category-remap/selection-dry-run",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "ops",
                    },
                    {
                      "lit" => "category-remap",
                    },
                    {
                      "lit" => "selection-dry-run",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "ops",
                    "category-remap",
                    "selection-dry-run",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/ops/quality-scan/dry-run",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "ops",
                    },
                    {
                      "lit" => "quality-scan",
                    },
                    {
                      "lit" => "dry-run",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "ops",
                    "quality-scan",
                    "dry-run",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/pricing-content/discard-draft",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "pricing-content",
                    },
                    {
                      "lit" => "discard-draft",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "pricing-content",
                    "discard-draft",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/pricing-content/draft",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "pricing-content",
                    },
                    {
                      "lit" => "draft",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "pricing-content",
                    "draft",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/pricing-content/publish",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "pricing-content",
                    },
                    {
                      "lit" => "publish",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "pricing-content",
                    "publish",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/reviews/reports/bulk-dismiss",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "reviews",
                    },
                    {
                      "lit" => "reports",
                    },
                    {
                      "lit" => "bulk-dismiss",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "reviews",
                    "reports",
                    "bulk-dismiss",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/team/agents",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "team",
                    },
                    {
                      "lit" => "agents",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "team",
                    "agents",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/team/invites",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "team",
                    },
                    {
                      "lit" => "invites",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "team",
                    "invites",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
            "patch" => {
              "input" => "data",
              "name" => "patch",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "PATCH",
                  "orig" => "/v1/admin/ops/duplicate-candidates/{candidate_id}",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "ops",
                    },
                    {
                      "lit" => "duplicate-candidates",
                    },
                    {
                      "var" => "candidate_id",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "ops",
                    "duplicate-candidates",
                    "{candidate_id}",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "candidate_id",
                        "orig" => "candidate_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "candidate_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "PATCH",
                  "orig" => "/v1/admin/ops/category-mappings/{mapping_id}",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "ops",
                    },
                    {
                      "lit" => "category-mappings",
                    },
                    {
                      "var" => "mapping_id",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "ops",
                    "category-mappings",
                    "{mapping_id}",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "mapping_id",
                        "orig" => "mapping_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "mapping_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "PATCH",
                  "orig" => "/v1/admin/ops/quality-signals/{signal_id}",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "ops",
                    },
                    {
                      "lit" => "quality-signals",
                    },
                    {
                      "var" => "signal_id",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "ops",
                    "quality-signals",
                    "{signal_id}",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "signal_id",
                        "orig" => "signal_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "signal_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "PATCH",
                  "orig" => "/v1/admin/verification-cases/{business_id}/management",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "verification-cases",
                    },
                    {
                      "var" => "verification_case_id",
                    },
                    {
                      "lit" => "management",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "verification-cases",
                    "{verification_case_id}",
                    "management",
                  ],
                  "rename" => {
                    "param" => {
                      "business_id" => "verification_case_id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "verification_case_id",
                        "orig" => "business_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "verification_case_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
            "remove" => {
              "input" => "data",
              "name" => "remove",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "DELETE",
                  "orig" => "/v1/admin/support/{conversation_id}/ai-drafts/{draft_id}",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "support",
                    },
                    {
                      "var" => "support_id",
                    },
                    {
                      "lit" => "ai-drafts",
                    },
                    {
                      "var" => "draft_id",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "support",
                    "{support_id}",
                    "ai-drafts",
                    "{draft_id}",
                  ],
                  "rename" => {
                    "param" => {
                      "conversation_id" => "support_id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "draft_id",
                        "orig" => "draft_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                      {
                        "name" => "support_id",
                        "orig" => "conversation_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "draft_id",
                      "support_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "DELETE",
                  "orig" => "/v1/admin/access-contexts/{access_context_id}",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "access-contexts",
                    },
                    {
                      "var" => "access_context_id",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "access-contexts",
                    "{access_context_id}",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "access_context_id",
                        "orig" => "access_context_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "access_context_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "DELETE",
                  "orig" => "/v1/admin/ai-connections/{connection_id}",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "ai-connections",
                    },
                    {
                      "var" => "connection_id",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "ai-connections",
                    "{connection_id}",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "connection_id",
                        "orig" => "connection_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "connection_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "DELETE",
                  "orig" => "/v1/admin/coupons/{coupon_id}",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "coupons",
                    },
                    {
                      "var" => "coupon_id",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "coupons",
                    "{coupon_id}",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "coupon_id",
                        "orig" => "coupon_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "coupon_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "DELETE",
                  "orig" => "/v1/admin/assistant-provider/{provider}",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "assistant-provider",
                    },
                    {
                      "var" => "provider",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "assistant-provider",
                    "{provider}",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "provider",
                        "orig" => "provider",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "provider",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "DELETE",
                  "orig" => "/v1/admin/ai-workload-bindings/{workload}",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "ai-workload-bindings",
                    },
                    {
                      "var" => "workload",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "ai-workload-bindings",
                    "{workload}",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "workload",
                        "orig" => "workload",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "workload",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
            "update" => {
              "input" => "data",
              "name" => "update",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "PUT",
                  "orig" => "/v1/admin/assistant-provider/{provider}",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "assistant-provider",
                    },
                    {
                      "var" => "provider",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "assistant-provider",
                    "{provider}",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => {
                      "api_key" => "`reqdata.api_key`",
                      "base_url" => "`reqdata.base_url`",
                      "custom_wire" => "`reqdata.custom_wire`",
                      "make_active" => "`reqdata.make_active`",
                      "model" => "`reqdata.model`",
                    },
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "provider",
                        "orig" => "provider",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "provider",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "PUT",
                  "orig" => "/v1/admin/ai-workload-bindings/{workload}",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "ai-workload-bindings",
                    },
                    {
                      "var" => "workload",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "ai-workload-bindings",
                    "{workload}",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => {
                      "connection_id" => "`reqdata.connection_id`",
                      "enabled" => "`reqdata.enabled`",
                      "model_id" => "`reqdata.model_id`",
                    },
                    "res" => "`body.binding`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "workload",
                        "orig" => "workload",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "workload",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "PUT",
                  "orig" => "/v1/admin/ads/reserves",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "ads",
                    },
                    {
                      "lit" => "reserves",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "ads",
                    "reserves",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "PUT",
                  "orig" => "/v1/admin/ads/settings/topup-limits",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "ads",
                    },
                    {
                      "lit" => "settings",
                    },
                    {
                      "lit" => "topup-limits",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "ads",
                    "settings",
                    "topup-limits",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "$.main.kit.entity.business_claim",
              ],
              [
                "$.main.kit.entity.review",
              ],
              [
                "$.main.kit.entity.job_application",
              ],
              [
                "$.main.kit.entity.message",
              ],
            ],
          },
        },
        "owner_notification" => {
          "fields" => [
            {
              "name" => "businessId",
              "title" => "Business Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "createdAt",
              "title" => "Created At",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "dedupeKey",
              "title" => "Dedupe Key",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "emailStatus",
              "title" => "Email Status",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "eventType",
              "title" => "Event Type",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "readAt",
              "title" => "Read At",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "req" => true,
            },
            {
              "name" => "resourceId",
              "title" => "Resource Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "resourceKind",
              "title" => "Resource Kind",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "resourceUrl",
              "title" => "Resource Url",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "summary",
              "title" => "Summary",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "webhookStatus",
              "title" => "Webhook Status",
              "type" => "`$STRING`",
              "req" => true,
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "owner_notification",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/notifications/{notification_id}/read",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "notifications",
                    },
                    {
                      "var" => "notification_id",
                    },
                    {
                      "lit" => "read",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "notifications",
                    "{notification_id}",
                    "read",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.notification`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "notification_id",
                        "orig" => "notification_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "notification_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "owner_notification_setting" => {
          "fields" => [
            {
              "name" => "businessId",
              "title" => "Business Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "business_id",
              "title" => "Business Id",
              "type" => "`$STRING`",
            },
            {
              "name" => "createdAt",
              "title" => "Created At",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "emailEnabled",
              "title" => "Email Enabled",
              "type" => "`$BOOLEAN`",
              "req" => true,
            },
            {
              "name" => "email_enabled",
              "title" => "Email Enabled",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "eventTypeSubscriptions",
              "title" => "Event Type Subscriptions",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "event_types",
              "title" => "Event Types",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "updatedAt",
              "title" => "Updated At",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "webhookEnabled",
              "title" => "Webhook Enabled",
              "type" => "`$BOOLEAN`",
              "req" => true,
            },
            {
              "name" => "webhook_enabled",
              "title" => "Webhook Enabled",
              "type" => "`$BOOLEAN`",
            },
          ],
          "name" => "owner_notification_setting",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/notification-settings",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "notification-settings",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "notification-settings",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => {
                      "business_id" => "`reqdata.business_id`",
                      "email_enabled" => "`reqdata.email_enabled`",
                      "event_types" => "`reqdata.event_type`",
                      "webhook_enabled" => "`reqdata.webhook_enabled`",
                    },
                    "res" => "`body.settings`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "owner_webhook_endpoint" => {
          "fields" => [
            {
              "name" => "businessId",
              "title" => "Business Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "createdAt",
              "title" => "Created At",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "enabled",
              "title" => "Enabled",
              "type" => "`$BOOLEAN`",
              "req" => true,
            },
            {
              "name" => "eventTypeSubscriptions",
              "title" => "Event Type Subscriptions",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "failureCount",
              "title" => "Failure Count",
              "type" => "`$NUMBER`",
              "req" => true,
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "lastDeliveryAt",
              "title" => "Last Delivery At",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "req" => true,
            },
            {
              "name" => "updatedAt",
              "title" => "Updated At",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "url",
              "title" => "Url",
              "type" => "`$STRING`",
              "req" => true,
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "owner_webhook_endpoint",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/webhooks/{endpoint_id}/disable",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "webhooks",
                    },
                    {
                      "var" => "webhook_id",
                    },
                    {
                      "lit" => "disable",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "webhooks",
                    "{webhook_id}",
                    "disable",
                  ],
                  "rename" => {
                    "param" => {
                      "endpoint_id" => "webhook_id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.endpoint`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "webhook_id",
                        "orig" => "endpoint_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "webhook_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "owner_webhook_registration" => {
          "fields" => [
            {
              "name" => "business_id",
              "title" => "Business Id",
              "type" => "`$STRING`",
            },
            {
              "name" => "endpoint",
              "title" => "Endpoint",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "event_types",
              "title" => "Event Types",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "one_time_display",
              "title" => "One Time Display",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "signing_secret",
              "title" => "Signing Secret",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "status",
              "title" => "Status",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "url",
              "title" => "Url",
              "type" => "`$STRING`",
              "req" => true,
            },
          ],
          "name" => "owner_webhook_registration",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/webhooks/{endpoint_id}/rotate-secret",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "webhooks",
                    },
                    {
                      "var" => "webhook_id",
                    },
                    {
                      "lit" => "rotate-secret",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "webhooks",
                    "{webhook_id}",
                    "rotate-secret",
                  ],
                  "rename" => {
                    "param" => {
                      "endpoint_id" => "webhook_id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "webhook_id",
                        "orig" => "endpoint_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "webhook_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/owner/webhooks",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "owner",
                    },
                    {
                      "lit" => "webhooks",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "owner",
                    "webhooks",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => {
                      "business_id" => "`reqdata.business_id`",
                      "event_types" => "`reqdata.event_type`",
                      "url" => "`reqdata.url`",
                    },
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "pricing" => {
          "fields" => [
            {
              "name" => "billing",
              "title" => "Billing",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "branch_add_ons",
              "title" => "Branch Add Ons",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "currency",
              "title" => "Currency",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "generated_at",
              "title" => "Generated At",
              "type" => "`$STRING`",
              "req" => true,
              "format" => "date-time",
            },
            {
              "name" => "neutrality",
              "title" => "Neutrality",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "plans",
              "title" => "Plans",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "promotions",
              "title" => "Promotions",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "published_at",
              "title" => "Published At",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "req" => true,
            },
            {
              "name" => "radius_extension",
              "title" => "Radius Extension",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "revision_id",
              "title" => "Revision Id",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "req" => true,
            },
            {
              "name" => "source",
              "title" => "Source",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "trust_model_version",
              "title" => "Trust Model Version",
              "type" => "`$ANY`",
              "req" => true,
            },
          ],
          "name" => "pricing",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/v1/pricing",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "pricing",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "pricing",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "promote_verified_transaction" => {
          "fields" => [
            {
              "name" => "business_id",
              "title" => "Business Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "evidence_id",
              "title" => "Evidence Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "interaction_id",
              "title" => "Interaction Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "ok",
              "title" => "Ok",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "review_upgraded",
              "title" => "Review Upgraded",
              "type" => "`$BOOLEAN`",
              "req" => true,
            },
            {
              "name" => "status",
              "title" => "Status",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "trust_weight",
              "title" => "Trust Weight",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "verified",
              "title" => "Verified",
              "type" => "`$BOOLEAN`",
              "req" => true,
            },
          ],
          "name" => "promote_verified_transaction",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/actions/promote-verified-transaction",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "actions",
                    },
                    {
                      "lit" => "promote-verified-transaction",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "actions",
                    "promote-verified-transaction",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => {
                      "business_id" => "`reqdata.business_id`",
                      "evidence_id" => "`reqdata.evidence_id`",
                    },
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "public_content" => {
          "fields" => [
            {
              "name" => "blocks",
              "title" => "Blocks",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "generated_at",
              "title" => "Generated At",
              "type" => "`$STRING`",
              "req" => true,
              "format" => "date-time",
            },
            {
              "name" => "source",
              "title" => "Source",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "trust_model_version",
              "title" => "Trust Model Version",
              "type" => "`$ANY`",
              "req" => true,
            },
          ],
          "name" => "public_content",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/v1/content",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "content",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "content",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "recommend" => {
          "fields" => [
            {
              "name" => "candidate_window_truncated",
              "title" => "Candidate Window Truncated",
              "type" => "`$BOOLEAN`",
              "req" => true,
              "short" => "True when Loppee's bounded candidate assembly reached its safety cap.",
            },
            {
              "name" => "commercial_influence",
              "title" => "Commercial Influence",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "Must be none whenever current-location or saved_exact authority is absent, including universal exact/genuine-prefix name lookup.",
            },
            {
              "name" => "display_count",
              "title" => "Display Count",
              "type" => "`$INTEGER`",
              "short" => "Agent-key responses: the number of businesses in this response.",
            },
            {
              "name" => "endpoint",
              "title" => "Endpoint",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "fallback_registry",
              "title" => "Fallback Registry",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "generated_at",
              "title" => "Generated At",
              "type" => "`$STRING`",
              "req" => true,
              "format" => "date-time",
            },
            {
              "name" => "has_more",
              "title" => "Has More",
              "type" => "`$BOOLEAN`",
              "req" => true,
              "short" => "True only when next_cursor can continue through the current bounded, deterministic candidate window.",
            },
            {
              "name" => "listed",
              "title" => "Listed",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "location_context",
              "title" => "Location Context",
              "type" => "`$ANY`",
              "req" => true,
              "short" => "Local category discovery and recommendations require a current precise location proof or handoff, a user-confirmed validated destination authority, or a saved_exact Home location.",
            },
            {
              "name" => "ordering",
              "title" => "Ordering",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "policy",
              "title" => "Policy",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "presentation_guidance",
              "title" => "Presentation Guidance",
              "type" => "`$STRING`",
              "short" => "Agent-key responses: how to present these results to the customer.",
            },
            {
              "name" => "query",
              "title" => "Query",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "ranking_policy",
              "title" => "Ranking Policy",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "registry_count_basis",
              "title" => "Registry Count Basis",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "registry_count_observed_at",
              "title" => "Registry Count Observed At",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "req" => true,
            },
            {
              "name" => "registry_name",
              "title" => "Registry Name",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "results",
              "title" => "Results",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "returned_count",
              "title" => "Returned Count",
              "type" => "`$INTEGER`",
              "req" => true,
            },
            {
              "name" => "reviewed_registry",
              "title" => "Reviewed Registry",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "schema_version",
              "title" => "Schema Version",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "search_intent",
              "title" => "Search Intent",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "suggestions",
              "title" => "Suggestions",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "total_matches",
              "title" => "Total Matches",
              "type" => "`$INTEGER`",
              "short" => "Web and app responses.",
            },
            {
              "name" => "total_matches_basis",
              "title" => "Total Matches Basis",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "total_registry_records",
              "title" => "Total Registry Records",
              "type" => "`$INTEGER`",
              "req" => true,
            },
            {
              "name" => "trust_model_version",
              "title" => "Trust Model Version",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "verified",
              "title" => "Verified",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "visible_candidate_records",
              "title" => "Visible Candidate Records",
              "type" => "`$INTEGER`",
              "short" => "Web and app responses.",
            },
          ],
          "name" => "recommend",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/v1/recommend",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "recommend",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "recommend",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "allowed_action",
                        "orig" => "allowed_action",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "category",
                        "orig" => "category",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "city",
                        "orig" => "city",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "limit",
                        "orig" => "limit",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 10,
                      },
                      {
                        "name" => "location_handoff_id",
                        "orig" => "location_handoff_id",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "location_proof_id",
                        "orig" => "location_proof_id",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "location_selection",
                        "orig" => "location_selection",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "q",
                        "orig" => "q",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "radius_mile",
                        "orig" => "radius_miles",
                        "type" => "`$NUMBER`",
                        "kind" => "query",
                      },
                      {
                        "name" => "saved_location_ref",
                        "orig" => "saved_location_ref",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "state",
                        "orig" => "state",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "zip",
                        "orig" => "zip",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "review" => {
          "fields" => [
            {
              "name" => "account_id",
              "title" => "Account Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "attestation_accepted",
              "title" => "Attestation Accepted",
              "type" => "`$BOOLEAN`",
              "req" => true,
              "short" => "Set true only after the customer confirms this describes their own experience and explicitly approves publishing the displayed business, star rating, title, and full review.",
            },
            {
              "name" => "customer_confirmed",
              "title" => "Customer Confirmed",
              "type" => "`$BOOLEAN`",
              "short" => "Set true to confirm you were a customer of this business.",
            },
            {
              "name" => "message",
              "title" => "Message",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "rating",
              "title" => "Rating",
              "type" => "`$INTEGER`",
              "req" => true,
            },
            {
              "name" => "service_date",
              "title" => "Service Date",
              "type" => "`$ANY`",
              "short" => "Optional real, non-future service date in YYYY-MM-DD format; empty means not provided.",
            },
            {
              "name" => "subject",
              "title" => "Subject",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "target_business_id",
              "title" => "Target Business Id",
              "type" => "`$STRING`",
              "req" => true,
            },
          ],
          "name" => "review",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/actions/public-review",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "actions",
                    },
                    {
                      "lit" => "public-review",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "actions",
                    "public-review",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => {
                      "attestation_accepted" => "`reqdata.attestation_accepted`",
                      "customer_confirmed" => "`reqdata.customer_confirmed`",
                      "message" => "`reqdata.message`",
                      "rating" => "`reqdata.rating`",
                      "service_date" => "`reqdata.service_date`",
                      "subject" => "`reqdata.subject`",
                      "target_business_id" => "`reqdata.target_business_id`",
                    },
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/actions/review",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "actions",
                    },
                    {
                      "lit" => "review",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "actions",
                    "review",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => {
                      "account_id" => "`reqdata.account_id`",
                      "attestation_accepted" => "`reqdata.attestation_accepted`",
                      "customer_confirmed" => "`reqdata.customer_confirmed`",
                      "message" => "`reqdata.message`",
                      "rating" => "`reqdata.rating`",
                      "service_date" => "`reqdata.service_date`",
                      "subject" => "`reqdata.subject`",
                      "target_business_id" => "`reqdata.target_business_id`",
                    },
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "revoke" => {
          "fields" => [
            {
              "name" => "account_id",
              "title" => "Account Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "key_id",
              "title" => "Key Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "revoked_by",
              "title" => "Revoked By",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "status",
              "title" => "Status",
              "type" => "`$ANY`",
              "req" => true,
            },
          ],
          "name" => "revoke",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/agent-keys/{key_id}/revoke",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "agent-keys",
                    },
                    {
                      "var" => "agent_key_id",
                    },
                    {
                      "lit" => "revoke",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "agent-keys",
                    "{agent_key_id}",
                    "revoke",
                  ],
                  "rename" => {
                    "param" => {
                      "key_id" => "agent_key_id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "agent_key_id",
                        "orig" => "key_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "agent_key_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "save_business" => {
          "fields" => [
            {
              "name" => "account_id",
              "title" => "Account Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "business_id",
              "title" => "Business Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "business_name",
              "title" => "Business Name",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "business_source",
              "title" => "Business Source",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "category",
              "title" => "Category",
              "type" => "`$STRING`",
            },
            {
              "name" => "city",
              "title" => "City",
              "type" => "`$STRING`",
            },
            {
              "name" => "created_at",
              "title" => "Created At",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "notes",
              "title" => "Notes",
              "type" => "`$STRING`",
            },
            {
              "name" => "saved_business_id",
              "title" => "Saved Business Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "state",
              "title" => "State",
              "type" => "`$STRING`",
            },
            {
              "name" => "status",
              "title" => "Status",
              "type" => "`$ANY`",
              "req" => true,
            },
          ],
          "name" => "save_business",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/actions/save-business",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "actions",
                    },
                    {
                      "lit" => "save-business",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "actions",
                    "save-business",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => {
                      "account_id" => "`reqdata.account_id`",
                      "business_id" => "`reqdata.business_id`",
                      "business_name" => "`reqdata.business_name`",
                      "business_source" => "`reqdata.business_source`",
                      "category" => "`reqdata.category`",
                      "city" => "`reqdata.city`",
                      "notes" => "`reqdata.note`",
                      "state" => "`reqdata.state`",
                    },
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "saved_business" => {
          "fields" => [
            {
              "name" => "account_id",
              "title" => "Account Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "count",
              "title" => "Count",
              "type" => "`$NUMBER`",
              "req" => true,
            },
            {
              "name" => "limit",
              "title" => "Limit",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "saved_businesses",
              "title" => "Saved Businesses",
              "type" => "`$ARRAY`",
              "req" => true,
            },
          ],
          "name" => "saved_business",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/actions/list-saved-businesses",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "actions",
                    },
                    {
                      "lit" => "list-saved-businesses",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "actions",
                    "list-saved-businesses",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => {
                      "account_id" => "`reqdata.account_id`",
                      "limit" => "`reqdata.limit`",
                    },
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "saved_location" => {
          "fields" => [
            {
              "name" => "available",
              "title" => "Available",
              "type" => "`$BOOLEAN`",
              "req" => true,
            },
            {
              "name" => "coordinates_returned",
              "title" => "Coordinates Returned",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "kind",
              "title" => "Kind",
              "type" => "`$ANY`",
              "req" => true,
              "short" => "Only saved_exact is precise local-discovery authority.",
            },
            {
              "name" => "label",
              "title" => "Label",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "req" => true,
              "op" => {
                "update" => {
                  "type" => "`$STRING`",
                },
              },
            },
            {
              "name" => "location_proof_id",
              "title" => "Location Proof Id",
              "type" => "`$STRING`",
              "format" => "uuid",
            },
            {
              "name" => "reach_precision",
              "title" => "Reach Precision",
              "type" => "`$ANY`",
              "req" => true,
              "short" => "Exact can authorize local category/recommendation reach; coarse cannot activate local results, Sponsored placement, or impressions.",
            },
            {
              "name" => "saved_location_ref",
              "title" => "Saved Location Ref",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "req" => true,
            },
            {
              "name" => "updated_at",
              "title" => "Updated At",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "req" => true,
              "format" => "date-time",
            },
            {
              "name" => "zip",
              "title" => "Zip",
              "type" => "`$STRING`",
            },
          ],
          "name" => "saved_location",
          "op" => {
            "remove" => {
              "input" => "data",
              "name" => "remove",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "DELETE",
                  "orig" => "/v1/account/location",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "account",
                    },
                    {
                      "lit" => "location",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "account",
                    "location",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
            "update" => {
              "input" => "data",
              "name" => "update",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "PUT",
                  "orig" => "/v1/account/location",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "account",
                    },
                    {
                      "lit" => "location",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "account",
                    "location",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => {
                      "label" => "`reqdata.label`",
                      "location_proof_id" => "`reqdata.location_proof_id`",
                      "zip" => "`reqdata.zip`",
                    },
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "search" => {
          "fields" => [
            {
              "name" => "candidate_window_truncated",
              "title" => "Candidate Window Truncated",
              "type" => "`$BOOLEAN`",
              "req" => true,
              "short" => "True when Loppee's bounded candidate assembly reached its safety cap.",
            },
            {
              "name" => "commercial_influence",
              "title" => "Commercial Influence",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "Must be none whenever current-location or saved_exact authority is absent, including universal exact/genuine-prefix name lookup.",
            },
            {
              "name" => "display_count",
              "title" => "Display Count",
              "type" => "`$INTEGER`",
              "short" => "Agent-key responses: the number of businesses in this response.",
            },
            {
              "name" => "generated_at",
              "title" => "Generated At",
              "type" => "`$STRING`",
              "req" => true,
              "format" => "date-time",
            },
            {
              "name" => "has_more",
              "title" => "Has More",
              "type" => "`$BOOLEAN`",
              "req" => true,
              "short" => "True only when next_cursor can continue through the current bounded, deterministic candidate window.",
            },
            {
              "name" => "location_context",
              "title" => "Location Context",
              "type" => "`$ANY`",
              "req" => true,
              "short" => "Local category discovery and recommendations require a current precise location proof or handoff, a user-confirmed validated destination authority, or a saved_exact Home location.",
            },
            {
              "name" => "next_cursor",
              "title" => "Next Cursor",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "req" => true,
            },
            {
              "name" => "page_limit",
              "title" => "Page Limit",
              "type" => "`$INTEGER`",
              "req" => true,
            },
            {
              "name" => "policy",
              "title" => "Policy",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "presentation_guidance",
              "title" => "Presentation Guidance",
              "type" => "`$STRING`",
              "short" => "Agent-key responses: how to present these results to the customer.",
            },
            {
              "name" => "query",
              "title" => "Query",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "ranking_policy",
              "title" => "Ranking Policy",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "registry_count_basis",
              "title" => "Registry Count Basis",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "registry_count_observed_at",
              "title" => "Registry Count Observed At",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "req" => true,
            },
            {
              "name" => "registry_name",
              "title" => "Registry Name",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "results",
              "title" => "Results",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "returned_count",
              "title" => "Returned Count",
              "type" => "`$INTEGER`",
              "req" => true,
            },
            {
              "name" => "schema_version",
              "title" => "Schema Version",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "search_intent",
              "title" => "Search Intent",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "suggestions",
              "title" => "Suggestions",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "total_matches",
              "title" => "Total Matches",
              "type" => "`$INTEGER`",
              "short" => "Web and app responses.",
            },
            {
              "name" => "total_matches_basis",
              "title" => "Total Matches Basis",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "total_registry_records",
              "title" => "Total Registry Records",
              "type" => "`$INTEGER`",
              "req" => true,
            },
            {
              "name" => "trust_model_version",
              "title" => "Trust Model Version",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "visible_candidate_records",
              "title" => "Visible Candidate Records",
              "type" => "`$INTEGER`",
              "short" => "Web and app responses.",
            },
          ],
          "name" => "search",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/v1/business-claim/candidates",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "business-claim",
                    },
                    {
                      "lit" => "candidates",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "business-claim",
                    "candidates",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.results`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "city",
                        "orig" => "city",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "limit",
                        "orig" => "limit",
                        "type" => "`$NUMBER`",
                        "kind" => "query",
                      },
                      {
                        "name" => "q",
                        "orig" => "q",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "reqd" => true,
                        "example" => "Elite AC LLC",
                      },
                      {
                        "name" => "state",
                        "orig" => "state",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "zip",
                        "orig" => "zip",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "q",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/v1/search",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "search",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "search",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.results`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "category",
                        "orig" => "category",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "city",
                        "orig" => "city",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "consumer_reach",
                        "orig" => "consumer_reach",
                        "type" => "`$BOOLEAN`",
                        "kind" => "query",
                      },
                      {
                        "name" => "cursor",
                        "orig" => "cursor",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "include_directory_listing",
                        "orig" => "include_directory_listings",
                        "type" => "`$BOOLEAN`",
                        "kind" => "query",
                        "example" => true,
                      },
                      {
                        "name" => "intent",
                        "orig" => "intent",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "limit",
                        "orig" => "limit",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 10,
                      },
                      {
                        "name" => "location_handoff_id",
                        "orig" => "location_handoff_id",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "location_proof_id",
                        "orig" => "location_proof_id",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "location_selection",
                        "orig" => "location_selection",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "paid_only",
                        "orig" => "paid_only",
                        "type" => "`$BOOLEAN`",
                        "kind" => "query",
                      },
                      {
                        "name" => "q",
                        "orig" => "q",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "radius_mile",
                        "orig" => "radius_miles",
                        "type" => "`$NUMBER`",
                        "kind" => "query",
                      },
                      {
                        "name" => "saved_location_ref",
                        "orig" => "saved_location_ref",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "search_intent",
                        "orig" => "search_intent",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "field" => true,
                      },
                      {
                        "name" => "state",
                        "orig" => "state",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "zip",
                        "orig" => "zip",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "suggest" => {
          "fields" => [
            {
              "name" => "categories",
              "title" => "Categories",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "names",
              "title" => "Names",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "query",
              "title" => "Query",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "schema_version",
              "title" => "Schema Version",
              "type" => "`$ANY`",
              "req" => true,
            },
          ],
          "name" => "suggest",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/v1/suggest",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "suggest",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "suggest",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "q",
                        "orig" => "q",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "support_internal_note" => {
          "fields" => [
            {
              "name" => "authorLabel",
              "title" => "Author Label",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "body",
              "title" => "Body",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "createdAt",
              "title" => "Created At",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "req" => true,
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
              "req" => true,
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "support_internal_note",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/support/{conversation_id}/internal-notes",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "support",
                    },
                    {
                      "var" => "id",
                    },
                    {
                      "lit" => "internal-notes",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "support",
                    "{id}",
                    "internal-notes",
                  ],
                  "rename" => {
                    "param" => {
                      "conversation_id" => "id",
                    },
                  },
                  "transform" => {
                    "req" => {
                      "body" => "`reqdata.body`",
                    },
                    "res" => "`body.note`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "id",
                        "orig" => "conversation_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "support_workflow" => {
          "fields" => [
            {
              "name" => "category",
              "title" => "Category",
              "type" => "`$ANY`",
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
            },
            {
              "name" => "priority",
              "title" => "Priority",
              "type" => "`$ANY`",
            },
            {
              "name" => "waiting_on",
              "title" => "Waiting On",
              "type" => "`$ANY`",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "support_workflow",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/support/{conversation_id}/workflow",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "support",
                    },
                    {
                      "var" => "id",
                    },
                    {
                      "lit" => "workflow",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "support",
                    "{id}",
                    "workflow",
                  ],
                  "rename" => {
                    "param" => {
                      "conversation_id" => "id",
                    },
                  },
                  "transform" => {
                    "req" => {
                      "category" => "`reqdata.category`",
                      "priority" => "`reqdata.priority`",
                      "waiting_on" => "`reqdata.waiting_on`",
                    },
                    "res" => "`body.conversation`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "id",
                        "orig" => "conversation_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "taxonomy_suggestion" => {
          "fields" => [
            {
              "name" => "alias",
              "title" => "Alias",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "path_titles",
              "title" => "Path Titles",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "title",
              "title" => "Title",
              "type" => "`$STRING`",
              "req" => true,
            },
          ],
          "name" => "taxonomy_suggestion",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/v1/taxonomy/suggest",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "taxonomy",
                    },
                    {
                      "lit" => "suggest",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "taxonomy",
                    "suggest",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.suggestions`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "limit",
                        "orig" => "limit",
                        "type" => "`$NUMBER`",
                        "kind" => "query",
                      },
                      {
                        "name" => "q",
                        "orig" => "q",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "trust_card" => {
          "fields" => [
            {
              "name" => "agency",
              "title" => "Agency",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "collected_at",
              "title" => "Collected At",
              "type" => "`$STRING`",
              "req" => true,
              "format" => "date-time",
            },
            {
              "name" => "disclosure",
              "title" => "Disclosure",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "fact_id",
              "title" => "Fact Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "matched_on",
              "title" => "Matched On",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "reason",
              "title" => "Reason",
              "type" => "`$STRING`",
            },
            {
              "name" => "record_kind",
              "title" => "Record Kind",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "record_number",
              "title" => "Record Number",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "req" => true,
            },
            {
              "name" => "record_scope",
              "title" => "Record Scope",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "record_type",
              "title" => "Record Type",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "recorded_expiry",
              "title" => "Recorded Expiry",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "req" => true,
              "format" => "date",
            },
            {
              "name" => "result",
              "title" => "Result",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "source_label",
              "title" => "Source Label",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "source_url",
              "title" => "Source Url",
              "type" => "`$STRING`",
              "req" => true,
              "format" => "uri",
            },
            {
              "name" => "state",
              "title" => "State",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "status_on_record",
              "title" => "Status On Record",
              "type" => "`$STRING`",
              "req" => true,
            },
          ],
          "name" => "trust_card",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/businesses/{business_id}/license-records/{fact_id}/report",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "businesses",
                    },
                    {
                      "var" => "business_id",
                    },
                    {
                      "lit" => "license-records",
                    },
                    {
                      "var" => "license_record_id",
                    },
                    {
                      "lit" => "report",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "businesses",
                    "{business_id}",
                    "license-records",
                    "{license_record_id}",
                    "report",
                  ],
                  "rename" => {
                    "param" => {
                      "fact_id" => "license_record_id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "business_id",
                        "orig" => "business_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                      {
                        "name" => "license_record_id",
                        "orig" => "fact_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "business_id",
                      "license_record_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/v1/businesses/{business_id}/archived-records.json",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "businesses",
                    },
                    {
                      "var" => "business_id",
                    },
                    {
                      "lit" => "archived-records.json",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "businesses",
                    "{business_id}",
                    "archived-records.json",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.facts`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "business_id",
                        "orig" => "business_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "biz_elite_ac_llc_jacksonville_fl",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "business_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/v1/businesses/{business_id}/license-records.json",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "businesses",
                    },
                    {
                      "var" => "business_id",
                    },
                    {
                      "lit" => "license-records.json",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "businesses",
                    "{business_id}",
                    "license-records.json",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.records`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "business_id",
                        "orig" => "business_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "biz_elite_ac_llc_jacksonville_fl",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "business_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/v1/businesses/{business_id}/trust-card.json",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "businesses",
                    },
                    {
                      "var" => "business_id",
                    },
                    {
                      "lit" => "trust-card.json",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "businesses",
                    "{business_id}",
                    "trust-card.json",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "business_id",
                        "orig" => "business_id",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "biz_elite_ac_llc_jacksonville_fl",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "business_id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/v1/schemas/{schema_name}",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "schemas",
                    },
                    {
                      "var" => "schema_name",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "schemas",
                    "{schema_name}",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "schema_name",
                        "orig" => "schema_name",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "trust-card.schema.json",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "schema_name",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "unsave_business" => {
          "fields" => [
            {
              "name" => "account_id",
              "title" => "Account Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "business_id",
              "title" => "Business Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "removed",
              "title" => "Removed",
              "type" => "`$BOOLEAN`",
              "req" => true,
            },
            {
              "name" => "status",
              "title" => "Status",
              "type" => "`$ANY`",
              "req" => true,
            },
          ],
          "name" => "unsave_business",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/actions/unsave-business",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "actions",
                    },
                    {
                      "lit" => "unsave-business",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "actions",
                    "unsave-business",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => {
                      "account_id" => "`reqdata.account_id`",
                      "business_id" => "`reqdata.business_id`",
                    },
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "update_agent_billing_account" => {
          "fields" => [
            {
              "name" => "account_id",
              "title" => "Account Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "billing_account",
              "title" => "Billing Account",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "billing_status",
              "title" => "Billing Status",
              "type" => "`$STRING`",
            },
            {
              "name" => "included_actions",
              "title" => "Included Actions",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "monthly_fee_cents",
              "title" => "Monthly Fee Cents",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "overage_cents",
              "title" => "Overage Cents",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "plan",
              "title" => "Plan",
              "type" => "`$STRING`",
            },
            {
              "name" => "status",
              "title" => "Status",
              "type" => "`$ANY`",
              "req" => true,
            },
            {
              "name" => "updated_by",
              "title" => "Updated By",
              "type" => "`$STRING`",
              "req" => true,
            },
          ],
          "name" => "update_agent_billing_account",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/admin/agent-billing-accounts",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "admin",
                    },
                    {
                      "lit" => "agent-billing-accounts",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "admin",
                    "agent-billing-accounts",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => {
                      "account_id" => "`reqdata.account_id`",
                      "billing_status" => "`reqdata.billing_status`",
                      "included_actions" => "`reqdata.included_action`",
                      "monthly_fee_cents" => "`reqdata.monthly_fee_cent`",
                      "overage_cents" => "`reqdata.overage_cent`",
                      "plan" => "`reqdata.plan`",
                    },
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "withdraw_job_application" => {
          "fields" => [
            {
              "name" => "account_id",
              "title" => "Account Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "already_withdrawn",
              "title" => "Already Withdrawn",
              "type" => "`$BOOLEAN`",
              "req" => true,
            },
            {
              "name" => "application",
              "title" => "Application",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "application_id",
              "title" => "Application Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "status",
              "title" => "Status",
              "type" => "`$ANY`",
              "req" => true,
            },
          ],
          "name" => "withdraw_job_application",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/v1/actions/withdraw-job-application",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "actions",
                    },
                    {
                      "lit" => "withdraw-job-application",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "actions",
                    "withdraw-job-application",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => {
                      "account_id" => "`reqdata.account_id`",
                      "application_id" => "`reqdata.application_id`",
                    },
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    LoppeeBusinessFeatures.make_feature(name)
  end
end
