# frozen_string_literal: true

# Typed models for the LoppeeBusiness SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# AgentAccess entity data model.
#
# @!attribute [rw] agent_name
#   @return [String]
#
# @!attribute [rw] agent_type
#   @return [String, nil]
#
# @!attribute [rw] callback_url
#   @return [String, nil]
#
# @!attribute [rw] compliance_notes
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] data_needs
#   @return [String, nil]
#
# @!attribute [rw] developer_email
#   @return [String]
#
# @!attribute [rw] operating_states
#   @return [Array, nil]
#
# @!attribute [rw] organization_name
#   @return [String]
#
# @!attribute [rw] request_id
#   @return [String]
#
# @!attribute [rw] request_status
#   @return [String]
#
# @!attribute [rw] requested_actions
#   @return [Array, nil]
#
# @!attribute [rw] safety_contact
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [Object]
#
# @!attribute [rw] target_categories
#   @return [Array, nil]
#
# @!attribute [rw] use_case
#   @return [String, nil]
#
# @!attribute [rw] website
#   @return [String, nil]
AgentAccess = Struct.new(
  :agent_name,
  :agent_type,
  :callback_url,
  :compliance_notes,
  :created_at,
  :data_needs,
  :developer_email,
  :operating_states,
  :organization_name,
  :request_id,
  :request_status,
  :requested_actions,
  :safety_contact,
  :status,
  :target_categories,
  :use_case,
  :website,
  keyword_init: true
)

# Request payload for AgentAccess#create.
#
# @!attribute [rw] agent_name
#   @return [String]
#
# @!attribute [rw] agent_type
#   @return [String, nil]
#
# @!attribute [rw] callback_url
#   @return [String, nil]
#
# @!attribute [rw] compliance_notes
#   @return [String, nil]
#
# @!attribute [rw] data_needs
#   @return [String, nil]
#
# @!attribute [rw] developer_email
#   @return [String]
#
# @!attribute [rw] operating_states
#   @return [Array, nil]
#
# @!attribute [rw] organization_name
#   @return [String]
#
# @!attribute [rw] requested_actions
#   @return [Array, nil]
#
# @!attribute [rw] safety_contact
#   @return [String, nil]
#
# @!attribute [rw] target_categories
#   @return [Array, nil]
#
# @!attribute [rw] use_case
#   @return [String, nil]
#
# @!attribute [rw] website
#   @return [String, nil]
AgentAccessCreateData = Struct.new(
  :agent_name,
  :agent_type,
  :callback_url,
  :compliance_notes,
  :data_needs,
  :developer_email,
  :operating_states,
  :organization_name,
  :requested_actions,
  :safety_contact,
  :target_categories,
  :use_case,
  :website,
  keyword_init: true
)

# AgentCapability entity data model.
#
# @!attribute [rw] agent_phone_location_bridge
#   @return [Hash, nil]
#
# @!attribute [rw] agent_rules
#   @return [Hash]
#
# @!attribute [rw] discovery
#   @return [Hash]
#
# @!attribute [rw] external_agent_access
#   @return [Hash]
#
# @!attribute [rw] external_agent_webhooks
#   @return [Hash]
#
# @!attribute [rw] local_discovery_location_policy
#   @return [Hash]
#
# @!attribute [rw] location_choices
#   @return [Hash, nil]
#
# @!attribute [rw] registry_name
#   @return [Object]
#
# @!attribute [rw] schema_version
#   @return [Object]
#
# @!attribute [rw] trust_model_version
#   @return [Object]
AgentCapability = Struct.new(
  :agent_phone_location_bridge,
  :agent_rules,
  :discovery,
  :external_agent_access,
  :external_agent_webhooks,
  :local_discovery_location_policy,
  :location_choices,
  :registry_name,
  :schema_version,
  :trust_model_version,
  keyword_init: true
)

# Request payload for AgentCapability#load.
#
# @!attribute [rw] agent_phone_location_bridge
#   @return [Hash, nil]
#
# @!attribute [rw] agent_rules
#   @return [Hash, nil]
#
# @!attribute [rw] discovery
#   @return [Hash, nil]
#
# @!attribute [rw] external_agent_access
#   @return [Hash, nil]
#
# @!attribute [rw] external_agent_webhooks
#   @return [Hash, nil]
#
# @!attribute [rw] local_discovery_location_policy
#   @return [Hash, nil]
#
# @!attribute [rw] location_choices
#   @return [Hash, nil]
#
# @!attribute [rw] registry_name
#   @return [Object, nil]
#
# @!attribute [rw] schema_version
#   @return [Object, nil]
#
# @!attribute [rw] trust_model_version
#   @return [Object, nil]
AgentCapabilityLoadMatch = Struct.new(
  :agent_phone_location_bridge,
  :agent_rules,
  :discovery,
  :external_agent_access,
  :external_agent_webhooks,
  :local_discovery_location_policy,
  :location_choices,
  :registry_name,
  :schema_version,
  :trust_model_version,
  keyword_init: true
)

# AgentConnectionTest entity data model.
#
# @!attribute [rw] key
#   @return [String, nil]
AgentConnectionTest = Struct.new(
  :key,
  keyword_init: true
)

# Request payload for AgentConnectionTest#create.
#
# @!attribute [rw] key
#   @return [String, nil]
AgentConnectionTestCreateData = Struct.new(
  :key,
  keyword_init: true
)

# AgentIntegration entity data model.
#
# @!attribute [rw] auth_model
#   @return [Hash]
#
# @!attribute [rw] commercial_influence
#   @return [Hash]
#
# @!attribute [rw] developer_docs_url
#   @return [String]
#
# @!attribute [rw] exposure_tiers
#   @return [Hash]
#
# @!attribute [rw] external_agent_access
#   @return [Hash]
#
# @!attribute [rw] generated_at
#   @return [String]
#
# @!attribute [rw] http_api
#   @return [Hash]
#
# @!attribute [rw] legal
#   @return [Hash]
#
# @!attribute [rw] mcp
#   @return [Hash]
#
# @!attribute [rw] mcp_client_example_url
#   @return [String]
#
# @!attribute [rw] monitoring_url
#   @return [String]
#
# @!attribute [rw] openapi_url
#   @return [String]
#
# @!attribute [rw] openapi_v1_url
#   @return [String]
#
# @!attribute [rw] operational_rules
#   @return [Array]
#
# @!attribute [rw] owner_agent_notifications
#   @return [Hash]
#
# @!attribute [rw] package_url
#   @return [String]
#
# @!attribute [rw] public_base_url
#   @return [String]
#
# @!attribute [rw] rate_limits
#   @return [Hash]
#
# @!attribute [rw] registry_name
#   @return [Object]
#
# @!attribute [rw] schema_version
#   @return [String]
#
# @!attribute [rw] trust_card_contract
#   @return [Hash]
#
# @!attribute [rw] trust_doctrine
#   @return [Hash]
AgentIntegration = Struct.new(
  :auth_model,
  :commercial_influence,
  :developer_docs_url,
  :exposure_tiers,
  :external_agent_access,
  :generated_at,
  :http_api,
  :legal,
  :mcp,
  :mcp_client_example_url,
  :monitoring_url,
  :openapi_url,
  :openapi_v1_url,
  :operational_rules,
  :owner_agent_notifications,
  :package_url,
  :public_base_url,
  :rate_limits,
  :registry_name,
  :schema_version,
  :trust_card_contract,
  :trust_doctrine,
  keyword_init: true
)

# Request payload for AgentIntegration#list.
#
# @!attribute [rw] auth_model
#   @return [Hash, nil]
#
# @!attribute [rw] commercial_influence
#   @return [Hash, nil]
#
# @!attribute [rw] developer_docs_url
#   @return [String, nil]
#
# @!attribute [rw] exposure_tiers
#   @return [Hash, nil]
#
# @!attribute [rw] external_agent_access
#   @return [Hash, nil]
#
# @!attribute [rw] generated_at
#   @return [String, nil]
#
# @!attribute [rw] http_api
#   @return [Hash, nil]
#
# @!attribute [rw] legal
#   @return [Hash, nil]
#
# @!attribute [rw] mcp
#   @return [Hash, nil]
#
# @!attribute [rw] mcp_client_example_url
#   @return [String, nil]
#
# @!attribute [rw] monitoring_url
#   @return [String, nil]
#
# @!attribute [rw] openapi_url
#   @return [String, nil]
#
# @!attribute [rw] openapi_v1_url
#   @return [String, nil]
#
# @!attribute [rw] operational_rules
#   @return [Array, nil]
#
# @!attribute [rw] owner_agent_notifications
#   @return [Hash, nil]
#
# @!attribute [rw] package_url
#   @return [String, nil]
#
# @!attribute [rw] public_base_url
#   @return [String, nil]
#
# @!attribute [rw] rate_limits
#   @return [Hash, nil]
#
# @!attribute [rw] registry_name
#   @return [Object, nil]
#
# @!attribute [rw] schema_version
#   @return [String, nil]
#
# @!attribute [rw] trust_card_contract
#   @return [Hash, nil]
#
# @!attribute [rw] trust_doctrine
#   @return [Hash, nil]
AgentIntegrationListMatch = Struct.new(
  :auth_model,
  :commercial_influence,
  :developer_docs_url,
  :exposure_tiers,
  :external_agent_access,
  :generated_at,
  :http_api,
  :legal,
  :mcp,
  :mcp_client_example_url,
  :monitoring_url,
  :openapi_url,
  :openapi_v1_url,
  :operational_rules,
  :owner_agent_notifications,
  :package_url,
  :public_base_url,
  :rate_limits,
  :registry_name,
  :schema_version,
  :trust_card_contract,
  :trust_doctrine,
  keyword_init: true
)

# AgentMonitoring entity data model.
#
# @!attribute [rw] build_sha
#   @return [String]
#
# @!attribute [rw] contract_version
#   @return [String]
#
# @!attribute [rw] generated_at
#   @return [String]
#
# @!attribute [rw] health_url
#   @return [String]
#
# @!attribute [rw] integration_package_url
#   @return [String]
#
# @!attribute [rw] mcp_url
#   @return [String]
#
# @!attribute [rw] metrics
#   @return [Hash]
#
# @!attribute [rw] openapi_url
#   @return [String]
#
# @!attribute [rw] rate_limits
#   @return [Hash]
#
# @!attribute [rw] registry_name
#   @return [Object]
#
# @!attribute [rw] schema_version
#   @return [String]
#
# @!attribute [rw] service
#   @return [String]
#
# @!attribute [rw] uptime_seconds
#   @return [Float]
#
# @!attribute [rw] version
#   @return [String]
AgentMonitoring = Struct.new(
  :build_sha,
  :contract_version,
  :generated_at,
  :health_url,
  :integration_package_url,
  :mcp_url,
  :metrics,
  :openapi_url,
  :rate_limits,
  :registry_name,
  :schema_version,
  :service,
  :uptime_seconds,
  :version,
  keyword_init: true
)

# Request payload for AgentMonitoring#load.
#
# @!attribute [rw] build_sha
#   @return [String, nil]
#
# @!attribute [rw] contract_version
#   @return [String, nil]
#
# @!attribute [rw] generated_at
#   @return [String, nil]
#
# @!attribute [rw] health_url
#   @return [String, nil]
#
# @!attribute [rw] integration_package_url
#   @return [String, nil]
#
# @!attribute [rw] mcp_url
#   @return [String, nil]
#
# @!attribute [rw] metrics
#   @return [Hash, nil]
#
# @!attribute [rw] openapi_url
#   @return [String, nil]
#
# @!attribute [rw] rate_limits
#   @return [Hash, nil]
#
# @!attribute [rw] registry_name
#   @return [Object, nil]
#
# @!attribute [rw] schema_version
#   @return [String, nil]
#
# @!attribute [rw] service
#   @return [String, nil]
#
# @!attribute [rw] uptime_seconds
#   @return [Float, nil]
#
# @!attribute [rw] version
#   @return [String, nil]
AgentMonitoringLoadMatch = Struct.new(
  :build_sha,
  :contract_version,
  :generated_at,
  :health_url,
  :integration_package_url,
  :mcp_url,
  :metrics,
  :openapi_url,
  :rate_limits,
  :registry_name,
  :schema_version,
  :service,
  :uptime_seconds,
  :version,
  keyword_init: true
)

# AgentOpenapi entity data model.
#
# @!attribute [rw] components
#   @return [Hash]
#
# @!attribute [rw] info
#   @return [Hash]
#
# @!attribute [rw] openapi
#   @return [Object]
#
# @!attribute [rw] paths
#   @return [Hash]
#
# @!attribute [rw] servers
#   @return [Array]
#
# @!attribute [rw] tags
#   @return [Array]
AgentOpenapi = Struct.new(
  :components,
  :info,
  :openapi,
  :paths,
  :servers,
  :tags,
  keyword_init: true
)

# Request payload for AgentOpenapi#list.
#
# @!attribute [rw] components
#   @return [Hash, nil]
#
# @!attribute [rw] info
#   @return [Hash, nil]
#
# @!attribute [rw] openapi
#   @return [Object, nil]
#
# @!attribute [rw] paths
#   @return [Hash, nil]
#
# @!attribute [rw] servers
#   @return [Array, nil]
#
# @!attribute [rw] tags
#   @return [Array, nil]
AgentOpenapiListMatch = Struct.new(
  :components,
  :info,
  :openapi,
  :paths,
  :servers,
  :tags,
  keyword_init: true
)

# AgentPolicy entity data model.
#
# @!attribute [rw] external_agent_access
#   @return [Hash]
#
# @!attribute [rw] external_agent_webhooks
#   @return [Hash]
#
# @!attribute [rw] local_discovery_location_policy
#   @return [Hash]
#
# @!attribute [rw] location_handoff_flow
#   @return [Hash, nil]
#
# @!attribute [rw] payment
#   @return [Hash]
#
# @!attribute [rw] publication
#   @return [Hash]
#
# @!attribute [rw] schema_version
#   @return [Object]
#
# @!attribute [rw] trust_model_version
#   @return [Object]
#
# @!attribute [rw] verification
#   @return [Hash]
AgentPolicy = Struct.new(
  :external_agent_access,
  :external_agent_webhooks,
  :local_discovery_location_policy,
  :location_handoff_flow,
  :payment,
  :publication,
  :schema_version,
  :trust_model_version,
  :verification,
  keyword_init: true
)

# Request payload for AgentPolicy#load.
#
# @!attribute [rw] external_agent_access
#   @return [Hash, nil]
#
# @!attribute [rw] external_agent_webhooks
#   @return [Hash, nil]
#
# @!attribute [rw] local_discovery_location_policy
#   @return [Hash, nil]
#
# @!attribute [rw] location_handoff_flow
#   @return [Hash, nil]
#
# @!attribute [rw] payment
#   @return [Hash, nil]
#
# @!attribute [rw] publication
#   @return [Hash, nil]
#
# @!attribute [rw] schema_version
#   @return [Object, nil]
#
# @!attribute [rw] trust_model_version
#   @return [Object, nil]
#
# @!attribute [rw] verification
#   @return [Hash, nil]
AgentPolicyLoadMatch = Struct.new(
  :external_agent_access,
  :external_agent_webhooks,
  :local_discovery_location_policy,
  :location_handoff_flow,
  :payment,
  :publication,
  :schema_version,
  :trust_model_version,
  :verification,
  keyword_init: true
)

# AnonymousLocationProofRevocation entity data model.
#
# @!attribute [rw] accuracy_meters
#   @return [Float]
#
# @!attribute [rw] captured_at
#   @return [String]
#
# @!attribute [rw] latitude
#   @return [Float]
#
# @!attribute [rw] longitude
#   @return [Float]
AnonymousLocationProofRevocation = Struct.new(
  :accuracy_meters,
  :captured_at,
  :latitude,
  :longitude,
  keyword_init: true
)

# Request payload for AnonymousLocationProofRevocation#create.
#
# @!attribute [rw] accuracy_meters
#   @return [Float]
#
# @!attribute [rw] captured_at
#   @return [String]
#
# @!attribute [rw] latitude
#   @return [Float]
#
# @!attribute [rw] longitude
#   @return [Float]
AnonymousLocationProofRevocationCreateData = Struct.new(
  :accuracy_meters,
  :captured_at,
  :latitude,
  :longitude,
  keyword_init: true
)

# Request payload for AnonymousLocationProofRevocation#remove.
#
# @!attribute [rw] location_proof_id
#   @return [String]
AnonymousLocationProofRevocationRemoveMatch = Struct.new(
  :location_proof_id,
  keyword_init: true
)

# BusinessApplication entity data model.
#
# @!attribute [rw] application
#   @return [Hash]
#
# @!attribute [rw] application_id
#   @return [String]
#
# @!attribute [rw] business_id
#   @return [String]
#
# @!attribute [rw] claim_id
#   @return [Object]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] existing_business
#   @return [Boolean]
#
# @!attribute [rw] files
#   @return [Array, nil]
#
# @!attribute [rw] listing_id
#   @return [String, nil]
#
# @!attribute [rw] pipeline_status
#   @return [String]
#
# @!attribute [rw] status
#   @return [Object]
#
# @!attribute [rw] trust_model_version
#   @return [Object]
#
# @!attribute [rw] uploaded_files
#   @return [Float]
BusinessApplication = Struct.new(
  :application,
  :application_id,
  :business_id,
  :claim_id,
  :created_at,
  :existing_business,
  :files,
  :listing_id,
  :pipeline_status,
  :status,
  :trust_model_version,
  :uploaded_files,
  keyword_init: true
)

# Request payload for BusinessApplication#create.
#
# @!attribute [rw] application
#   @return [Hash]
#
# @!attribute [rw] business_id
#   @return [String, nil]
#
# @!attribute [rw] claim_id
#   @return [Object, nil]
#
# @!attribute [rw] files
#   @return [Array, nil]
#
# @!attribute [rw] listing_id
#   @return [String, nil]
BusinessApplicationCreateData = Struct.new(
  :application,
  :business_id,
  :claim_id,
  :files,
  :listing_id,
  keyword_init: true
)

# BusinessClaim entity data model.
#
# @!attribute [rw] business_id
#   @return [Object]
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] city
#   @return [String, nil]
#
# @!attribute [rw] claim_id
#   @return [String]
#
# @!attribute [rw] claim_status
#   @return [String]
#
# @!attribute [rw] claimant_email
#   @return [String, nil]
#
# @!attribute [rw] claimant_name
#   @return [String, nil]
#
# @!attribute [rw] claimant_relationship
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] directory_listing_id
#   @return [Object]
#
# @!attribute [rw] display_name
#   @return [String]
#
# @!attribute [rw] listing_id
#   @return [String, nil]
#
# @!attribute [rw] notes
#   @return [String, nil]
#
# @!attribute [rw] phone
#   @return [String, nil]
#
# @!attribute [rw] source
#   @return [String, nil]
#
# @!attribute [rw] source_type
#   @return [String, nil]
#
# @!attribute [rw] source_url
#   @return [String, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [Object]
#
# @!attribute [rw] verification
#   @return [Hash, nil]
#
# @!attribute [rw] website
#   @return [String, nil]
BusinessClaim = Struct.new(
  :business_id,
  :category,
  :city,
  :claim_id,
  :claim_status,
  :claimant_email,
  :claimant_name,
  :claimant_relationship,
  :created_at,
  :directory_listing_id,
  :display_name,
  :listing_id,
  :notes,
  :phone,
  :source,
  :source_type,
  :source_url,
  :state,
  :status,
  :verification,
  :website,
  keyword_init: true
)

# Request payload for BusinessClaim#create.
#
# @!attribute [rw] business_id
#   @return [Object, nil]
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] city
#   @return [String, nil]
#
# @!attribute [rw] claimant_email
#   @return [String, nil]
#
# @!attribute [rw] claimant_name
#   @return [String, nil]
#
# @!attribute [rw] claimant_relationship
#   @return [String, nil]
#
# @!attribute [rw] display_name
#   @return [String]
#
# @!attribute [rw] listing_id
#   @return [String, nil]
#
# @!attribute [rw] notes
#   @return [String, nil]
#
# @!attribute [rw] phone
#   @return [String, nil]
#
# @!attribute [rw] source
#   @return [String, nil]
#
# @!attribute [rw] source_type
#   @return [String, nil]
#
# @!attribute [rw] source_url
#   @return [String, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] website
#   @return [String, nil]
BusinessClaimCreateData = Struct.new(
  :business_id,
  :category,
  :city,
  :claimant_email,
  :claimant_name,
  :claimant_relationship,
  :display_name,
  :listing_id,
  :notes,
  :phone,
  :source,
  :source_type,
  :source_url,
  :state,
  :website,
  keyword_init: true
)

# BusinessDeal entity data model.
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] discountLabel
#   @return [String]
#
# @!attribute [rw] endsAt
#   @return [Object]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] promoCode
#   @return [Object]
#
# @!attribute [rw] startsAt
#   @return [Object]
#
# @!attribute [rw] terms
#   @return [Object]
#
# @!attribute [rw] title
#   @return [String]
BusinessDeal = Struct.new(
  :createdAt,
  :description,
  :discountLabel,
  :endsAt,
  :id,
  :promoCode,
  :startsAt,
  :terms,
  :title,
  keyword_init: true
)

# Request payload for BusinessDeal#list.
#
# @!attribute [rw] id
#   @return [String]
BusinessDealListMatch = Struct.new(
  :id,
  keyword_init: true
)

# BusinessIndex entity data model.
#
# @!attribute [rw] brand_assets
#   @return [Object, nil]
#
# @!attribute [rw] business_id
#   @return [String]
#
# @!attribute [rw] category
#   @return [String]
#
# @!attribute [rw] city
#   @return [String]
#
# @!attribute [rw] display_name
#   @return [String]
#
# @!attribute [rw] domain
#   @return [Object]
#
# @!attribute [rw] insurance
#   @return [Hash]
#
# @!attribute [rw] phone
#   @return [Object]
#
# @!attribute [rw] public_profile_url
#   @return [String]
#
# @!attribute [rw] review_reputation
#   @return [Hash]
#
# @!attribute [rw] state
#   @return [String]
#
# @!attribute [rw] street_address
#   @return [Object, nil]
#
# @!attribute [rw] trust_card_url
#   @return [String]
#
# @!attribute [rw] trust_model_version
#   @return [Object]
#
# @!attribute [rw] verification_class
#   @return [String]
#
# @!attribute [rw] verification_disclosure
#   @return [String]
#
# @!attribute [rw] website
#   @return [Object]
#
# @!attribute [rw] zip
#   @return [Object, nil]
BusinessIndex = Struct.new(
  :brand_assets,
  :business_id,
  :category,
  :city,
  :display_name,
  :domain,
  :insurance,
  :phone,
  :public_profile_url,
  :review_reputation,
  :state,
  :street_address,
  :trust_card_url,
  :trust_model_version,
  :verification_class,
  :verification_disclosure,
  :website,
  :zip,
  keyword_init: true
)

# Request payload for BusinessIndex#list.
#
# @!attribute [rw] cursor
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Float, nil]
BusinessIndexListMatch = Struct.new(
  :cursor,
  :limit,
  keyword_init: true
)

# BusinessOwner entity data model.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] account_role
#   @return [String]
#
# @!attribute [rw] acknowledge_data_effects
#   @return [Boolean]
#
# @!attribute [rw] actions
#   @return [Array]
#
# @!attribute [rw] allowed_actions
#   @return [Array]
#
# @!attribute [rw] amount_cents
#   @return [Float]
#
# @!attribute [rw] applicant_location_requirements
#   @return [String, nil]
#
# @!attribute [rw] apply_url
#   @return [Object, nil]
#
# @!attribute [rw] asset_id
#   @return [String]
#
# @!attribute [rw] assigneeId
#   @return [String]
#
# @!attribute [rw] assigneeLabel
#   @return [String]
#
# @!attribute [rw] assigneeType
#   @return [String]
#
# @!attribute [rw] attempt_id
#   @return [String]
#
# @!attribute [rw] benefits
#   @return [String, nil]
#
# @!attribute [rw] body
#   @return [String]
#
# @!attribute [rw] businessId
#   @return [String]
#
# @!attribute [rw] businessName
#   @return [String]
#
# @!attribute [rw] business_id
#   @return [String]
#
# @!attribute [rw] campaign
#   @return [Hash]
#
# @!attribute [rw] campaign_id
#   @return [String]
#
# @!attribute [rw] carrier_name
#   @return [String, nil]
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] category_alias
#   @return [String, nil]
#
# @!attribute [rw] category_aliases
#   @return [Array]
#
# @!attribute [rw] change
#   @return [Hash]
#
# @!attribute [rw] city
#   @return [String, nil]
#
# @!attribute [rw] client_message_id
#   @return [String]
#
# @!attribute [rw] code
#   @return [String]
#
# @!attribute [rw] compensation_text
#   @return [String, nil]
#
# @!attribute [rw] confirm
#   @return [Boolean, nil]
#
# @!attribute [rw] confirmation
#   @return [String]
#
# @!attribute [rw] connection_kind
#   @return [String]
#
# @!attribute [rw] consent_sha256
#   @return [String]
#
# @!attribute [rw] contact_email
#   @return [Object, nil]
#
# @!attribute [rw] content_type
#   @return [String]
#
# @!attribute [rw] country
#   @return [String, nil]
#
# @!attribute [rw] coupon_code
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] credential_id
#   @return [String]
#
# @!attribute [rw] credential_identifier
#   @return [String]
#
# @!attribute [rw] data_base64
#   @return [String]
#
# @!attribute [rw] delivery_contract
#   @return [Hash]
#
# @!attribute [rw] description
#   @return [Object, nil]
#
# @!attribute [rw] direct_apply
#   @return [Boolean, nil]
#
# @!attribute [rw] disabled_reason
#   @return [Object]
#
# @!attribute [rw] discount_label
#   @return [String, nil]
#
# @!attribute [rw] display_name
#   @return [String]
#
# @!attribute [rw] employment_type
#   @return [String, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean]
#
# @!attribute [rw] endpoint
#   @return [Hash]
#
# @!attribute [rw] endpoint_id
#   @return [String]
#
# @!attribute [rw] endpoint_url
#   @return [String]
#
# @!attribute [rw] ends_at
#   @return [Object, nil]
#
# @!attribute [rw] event_id
#   @return [String]
#
# @!attribute [rw] event_types
#   @return [Array]
#
# @!attribute [rw] evidence_observed_at
#   @return [String, nil]
#
# @!attribute [rw] expected_updated_at
#   @return [String]
#
# @!attribute [rw] experience_level
#   @return [String, nil]
#
# @!attribute [rw] expires_at
#   @return [String, nil]
#
# @!attribute [rw] factor_id
#   @return [String, nil]
#
# @!attribute [rw] failure_count
#   @return [Integer]
#
# @!attribute [rw] file_name
#   @return [String]
#
# @!attribute [rw] file_sha256
#   @return [String, nil]
#
# @!attribute [rw] full_name
#   @return [String, nil]
#
# @!attribute [rw] guideHandoffAnsweredAt
#   @return [Object, nil]
#
# @!attribute [rw] guideHandoffAt
#   @return [Object, nil]
#
# @!attribute [rw] guideHandoffDueAt
#   @return [Object, nil]
#
# @!attribute [rw] hours
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] idempotency_key
#   @return [String, nil]
#
# @!attribute [rw] installation_id
#   @return [String]
#
# @!attribute [rw] issuer
#   @return [String]
#
# @!attribute [rw] jurisdiction
#   @return [String, nil]
#
# @!attribute [rw] kind
#   @return [String]
#
# @!attribute [rw] label
#   @return [String, nil]
#
# @!attribute [rw] lastMessageAt
#   @return [Object]
#
# @!attribute [rw] lastMessageAuthorType
#   @return [String]
#
# @!attribute [rw] lastMessagePreview
#   @return [String]
#
# @!attribute [rw] last_delivery_at
#   @return [Object]
#
# @!attribute [rw] launch
#   @return [Boolean, nil]
#
# @!attribute [rw] license_number
#   @return [String]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] messagesTruncated
#   @return [Boolean]
#
# @!attribute [rw] monthly_cap_cents
#   @return [Float, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] note
#   @return [String, nil]
#
# @!attribute [rw] one_time_display
#   @return [Object]
#
# @!attribute [rw] ownerEmail
#   @return [String]
#
# @!attribute [rw] ownerLastReadAt
#   @return [Object]
#
# @!attribute [rw] ownerName
#   @return [String]
#
# @!attribute [rw] ownerUserId
#   @return [String]
#
# @!attribute [rw] period
#   @return [String, nil]
#
# @!attribute [rw] phone
#   @return [String, nil]
#
# @!attribute [rw] platform
#   @return [String]
#
# @!attribute [rw] policy_number
#   @return [String, nil]
#
# @!attribute [rw] postal_code
#   @return [String, nil]
#
# @!attribute [rw] promo_code
#   @return [Object, nil]
#
# @!attribute [rw] push_token
#   @return [String]
#
# @!attribute [rw] radius_miles
#   @return [Float]
#
# @!attribute [rw] reason
#   @return [String, nil]
#
# @!attribute [rw] reason_category
#   @return [String, nil]
#
# @!attribute [rw] reason_detail
#   @return [String, nil]
#
# @!attribute [rw] registered_at
#   @return [String]
#
# @!attribute [rw] request_id
#   @return [String]
#
# @!attribute [rw] requested_at
#   @return [String]
#
# @!attribute [rw] salary_currency
#   @return [String, nil]
#
# @!attribute [rw] salary_max
#   @return [Object, nil]
#
# @!attribute [rw] salary_min
#   @return [Object, nil]
#
# @!attribute [rw] salary_period
#   @return [String, nil]
#
# @!attribute [rw] save_card
#   @return [Boolean]
#
# @!attribute [rw] save_card_consent_sha256
#   @return [String, nil]
#
# @!attribute [rw] schedule
#   @return [String, nil]
#
# @!attribute [rw] service_areas
#   @return [String, nil]
#
# @!attribute [rw] signing_secret
#   @return [String]
#
# @!attribute [rw] size_bytes
#   @return [Float]
#
# @!attribute [rw] skills
#   @return [Array, nil]
#
# @!attribute [rw] source_url
#   @return [String, nil]
#
# @!attribute [rw] starts_at
#   @return [Object, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] stated_expires_at
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] street_address
#   @return [String, nil]
#
# @!attribute [rw] subject
#   @return [String]
#
# @!attribute [rw] submitted_identifier
#   @return [String, nil]
#
# @!attribute [rw] supportLastReadAt
#   @return [Object]
#
# @!attribute [rw] terms
#   @return [Object, nil]
#
# @!attribute [rw] terms_version
#   @return [String]
#
# @!attribute [rw] threshold_cents
#   @return [Float, nil]
#
# @!attribute [rw] ticketNumber
#   @return [String]
#
# @!attribute [rw] tier
#   @return [String]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] total_job_openings
#   @return [Object, nil]
#
# @!attribute [rw] typing
#   @return [Boolean, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] updated_at
#   @return [String]
#
# @!attribute [rw] url
#   @return [String]
#
# @!attribute [rw] website
#   @return [String]
#
# @!attribute [rw] workplace_type
#   @return [String, nil]
#
# @!attribute [rw] zip
#   @return [String, nil]
BusinessOwner = Struct.new(
  :account_id,
  :account_role,
  :acknowledge_data_effects,
  :actions,
  :allowed_actions,
  :amount_cents,
  :applicant_location_requirements,
  :apply_url,
  :asset_id,
  :assigneeId,
  :assigneeLabel,
  :assigneeType,
  :attempt_id,
  :benefits,
  :body,
  :businessId,
  :businessName,
  :business_id,
  :campaign,
  :campaign_id,
  :carrier_name,
  :category,
  :category_alias,
  :category_aliases,
  :change,
  :city,
  :client_message_id,
  :code,
  :compensation_text,
  :confirm,
  :confirmation,
  :connection_kind,
  :consent_sha256,
  :contact_email,
  :content_type,
  :country,
  :coupon_code,
  :createdAt,
  :created_at,
  :credential_id,
  :credential_identifier,
  :data_base64,
  :delivery_contract,
  :description,
  :direct_apply,
  :disabled_reason,
  :discount_label,
  :display_name,
  :employment_type,
  :enabled,
  :endpoint,
  :endpoint_id,
  :endpoint_url,
  :ends_at,
  :event_id,
  :event_types,
  :evidence_observed_at,
  :expected_updated_at,
  :experience_level,
  :expires_at,
  :factor_id,
  :failure_count,
  :file_name,
  :file_sha256,
  :full_name,
  :guideHandoffAnsweredAt,
  :guideHandoffAt,
  :guideHandoffDueAt,
  :hours,
  :id,
  :idempotency_key,
  :installation_id,
  :issuer,
  :jurisdiction,
  :kind,
  :label,
  :lastMessageAt,
  :lastMessageAuthorType,
  :lastMessagePreview,
  :last_delivery_at,
  :launch,
  :license_number,
  :messages,
  :messagesTruncated,
  :monthly_cap_cents,
  :name,
  :note,
  :one_time_display,
  :ownerEmail,
  :ownerLastReadAt,
  :ownerName,
  :ownerUserId,
  :period,
  :phone,
  :platform,
  :policy_number,
  :postal_code,
  :promo_code,
  :push_token,
  :radius_miles,
  :reason,
  :reason_category,
  :reason_detail,
  :registered_at,
  :request_id,
  :requested_at,
  :salary_currency,
  :salary_max,
  :salary_min,
  :salary_period,
  :save_card,
  :save_card_consent_sha256,
  :schedule,
  :service_areas,
  :signing_secret,
  :size_bytes,
  :skills,
  :source_url,
  :starts_at,
  :state,
  :stated_expires_at,
  :status,
  :street_address,
  :subject,
  :submitted_identifier,
  :supportLastReadAt,
  :terms,
  :terms_version,
  :threshold_cents,
  :ticketNumber,
  :tier,
  :title,
  :total_job_openings,
  :typing,
  :updatedAt,
  :updated_at,
  :url,
  :website,
  :workplace_type,
  :zip,
  keyword_init: true
)

# Request payload for BusinessOwner#create.
#
# @!attribute [rw] deal_id
#   @return [String]
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] account_role
#   @return [String]
#
# @!attribute [rw] acknowledge_data_effects
#   @return [Boolean]
#
# @!attribute [rw] actions
#   @return [Array]
#
# @!attribute [rw] allowed_actions
#   @return [Array]
#
# @!attribute [rw] amount_cents
#   @return [Float]
#
# @!attribute [rw] applicant_location_requirements
#   @return [String, nil]
#
# @!attribute [rw] apply_url
#   @return [Object, nil]
#
# @!attribute [rw] asset_id
#   @return [String]
#
# @!attribute [rw] assigneeId
#   @return [String]
#
# @!attribute [rw] assigneeLabel
#   @return [String]
#
# @!attribute [rw] assigneeType
#   @return [String]
#
# @!attribute [rw] attempt_id
#   @return [String]
#
# @!attribute [rw] benefits
#   @return [String, nil]
#
# @!attribute [rw] body
#   @return [String]
#
# @!attribute [rw] businessId
#   @return [String]
#
# @!attribute [rw] businessName
#   @return [String]
#
# @!attribute [rw] business_id
#   @return [String, nil]
#
# @!attribute [rw] campaign
#   @return [Hash]
#
# @!attribute [rw] campaign_id
#   @return [String]
#
# @!attribute [rw] carrier_name
#   @return [String, nil]
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] category_alias
#   @return [String, nil]
#
# @!attribute [rw] category_aliases
#   @return [Array]
#
# @!attribute [rw] change
#   @return [Hash]
#
# @!attribute [rw] city
#   @return [String]
#
# @!attribute [rw] client_message_id
#   @return [String]
#
# @!attribute [rw] code
#   @return [String]
#
# @!attribute [rw] compensation_text
#   @return [String, nil]
#
# @!attribute [rw] confirm
#   @return [Boolean, nil]
#
# @!attribute [rw] confirmation
#   @return [String]
#
# @!attribute [rw] connection_kind
#   @return [String]
#
# @!attribute [rw] consent_sha256
#   @return [String]
#
# @!attribute [rw] contact_email
#   @return [Object, nil]
#
# @!attribute [rw] content_type
#   @return [String]
#
# @!attribute [rw] country
#   @return [String, nil]
#
# @!attribute [rw] coupon_code
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] credential_id
#   @return [String]
#
# @!attribute [rw] credential_identifier
#   @return [String]
#
# @!attribute [rw] data_base64
#   @return [String]
#
# @!attribute [rw] delivery_contract
#   @return [Hash]
#
# @!attribute [rw] description
#   @return [Object, nil]
#
# @!attribute [rw] direct_apply
#   @return [Boolean, nil]
#
# @!attribute [rw] disabled_reason
#   @return [Object]
#
# @!attribute [rw] discount_label
#   @return [String]
#
# @!attribute [rw] display_name
#   @return [String]
#
# @!attribute [rw] employment_type
#   @return [String, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean]
#
# @!attribute [rw] endpoint
#   @return [Hash]
#
# @!attribute [rw] endpoint_id
#   @return [String]
#
# @!attribute [rw] endpoint_url
#   @return [String]
#
# @!attribute [rw] ends_at
#   @return [Object, nil]
#
# @!attribute [rw] event_id
#   @return [String]
#
# @!attribute [rw] event_types
#   @return [Array]
#
# @!attribute [rw] evidence_observed_at
#   @return [String, nil]
#
# @!attribute [rw] expected_updated_at
#   @return [String]
#
# @!attribute [rw] experience_level
#   @return [String, nil]
#
# @!attribute [rw] expires_at
#   @return [String, nil]
#
# @!attribute [rw] factor_id
#   @return [String]
#
# @!attribute [rw] failure_count
#   @return [Integer]
#
# @!attribute [rw] file_name
#   @return [String]
#
# @!attribute [rw] file_sha256
#   @return [String]
#
# @!attribute [rw] full_name
#   @return [String, nil]
#
# @!attribute [rw] guideHandoffAnsweredAt
#   @return [Object, nil]
#
# @!attribute [rw] guideHandoffAt
#   @return [Object, nil]
#
# @!attribute [rw] guideHandoffDueAt
#   @return [Object, nil]
#
# @!attribute [rw] hours
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] idempotency_key
#   @return [String, nil]
#
# @!attribute [rw] installation_id
#   @return [String]
#
# @!attribute [rw] issuer
#   @return [String]
#
# @!attribute [rw] jurisdiction
#   @return [String, nil]
#
# @!attribute [rw] kind
#   @return [String]
#
# @!attribute [rw] label
#   @return [String, nil]
#
# @!attribute [rw] lastMessageAt
#   @return [Object]
#
# @!attribute [rw] lastMessageAuthorType
#   @return [String]
#
# @!attribute [rw] lastMessagePreview
#   @return [String]
#
# @!attribute [rw] last_delivery_at
#   @return [Object]
#
# @!attribute [rw] launch
#   @return [Boolean, nil]
#
# @!attribute [rw] license_number
#   @return [String]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] messagesTruncated
#   @return [Boolean]
#
# @!attribute [rw] monthly_cap_cents
#   @return [Float, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] note
#   @return [String, nil]
#
# @!attribute [rw] one_time_display
#   @return [Object]
#
# @!attribute [rw] ownerEmail
#   @return [String]
#
# @!attribute [rw] ownerLastReadAt
#   @return [Object]
#
# @!attribute [rw] ownerName
#   @return [String]
#
# @!attribute [rw] ownerUserId
#   @return [String]
#
# @!attribute [rw] period
#   @return [String, nil]
#
# @!attribute [rw] phone
#   @return [String]
#
# @!attribute [rw] platform
#   @return [String]
#
# @!attribute [rw] policy_number
#   @return [String, nil]
#
# @!attribute [rw] postal_code
#   @return [String, nil]
#
# @!attribute [rw] promo_code
#   @return [Object, nil]
#
# @!attribute [rw] push_token
#   @return [String]
#
# @!attribute [rw] radius_miles
#   @return [Float]
#
# @!attribute [rw] reason
#   @return [String]
#
# @!attribute [rw] reason_category
#   @return [String, nil]
#
# @!attribute [rw] reason_detail
#   @return [String, nil]
#
# @!attribute [rw] registered_at
#   @return [String]
#
# @!attribute [rw] request_id
#   @return [String]
#
# @!attribute [rw] requested_at
#   @return [String]
#
# @!attribute [rw] salary_currency
#   @return [String, nil]
#
# @!attribute [rw] salary_max
#   @return [Object, nil]
#
# @!attribute [rw] salary_min
#   @return [Object, nil]
#
# @!attribute [rw] salary_period
#   @return [String, nil]
#
# @!attribute [rw] save_card
#   @return [Boolean]
#
# @!attribute [rw] save_card_consent_sha256
#   @return [String, nil]
#
# @!attribute [rw] schedule
#   @return [String, nil]
#
# @!attribute [rw] service_areas
#   @return [String, nil]
#
# @!attribute [rw] signing_secret
#   @return [String]
#
# @!attribute [rw] size_bytes
#   @return [Float]
#
# @!attribute [rw] skills
#   @return [Array, nil]
#
# @!attribute [rw] source_url
#   @return [String, nil]
#
# @!attribute [rw] starts_at
#   @return [Object, nil]
#
# @!attribute [rw] state
#   @return [String]
#
# @!attribute [rw] stated_expires_at
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] street_address
#   @return [String]
#
# @!attribute [rw] subject
#   @return [String, nil]
#
# @!attribute [rw] submitted_identifier
#   @return [String, nil]
#
# @!attribute [rw] supportLastReadAt
#   @return [Object]
#
# @!attribute [rw] terms
#   @return [Object, nil]
#
# @!attribute [rw] terms_version
#   @return [String]
#
# @!attribute [rw] threshold_cents
#   @return [Float, nil]
#
# @!attribute [rw] ticketNumber
#   @return [String]
#
# @!attribute [rw] tier
#   @return [String]
#
# @!attribute [rw] title
#   @return [String]
#
# @!attribute [rw] total_job_openings
#   @return [Object, nil]
#
# @!attribute [rw] typing
#   @return [Boolean, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] updated_at
#   @return [String]
#
# @!attribute [rw] url
#   @return [String]
#
# @!attribute [rw] website
#   @return [String]
#
# @!attribute [rw] workplace_type
#   @return [String, nil]
#
# @!attribute [rw] zip
#   @return [String, nil]
BusinessOwnerCreateData = Struct.new(
  :deal_id,
  :account_id,
  :account_role,
  :acknowledge_data_effects,
  :actions,
  :allowed_actions,
  :amount_cents,
  :applicant_location_requirements,
  :apply_url,
  :asset_id,
  :assigneeId,
  :assigneeLabel,
  :assigneeType,
  :attempt_id,
  :benefits,
  :body,
  :businessId,
  :businessName,
  :business_id,
  :campaign,
  :campaign_id,
  :carrier_name,
  :category,
  :category_alias,
  :category_aliases,
  :change,
  :city,
  :client_message_id,
  :code,
  :compensation_text,
  :confirm,
  :confirmation,
  :connection_kind,
  :consent_sha256,
  :contact_email,
  :content_type,
  :country,
  :coupon_code,
  :createdAt,
  :created_at,
  :credential_id,
  :credential_identifier,
  :data_base64,
  :delivery_contract,
  :description,
  :direct_apply,
  :disabled_reason,
  :discount_label,
  :display_name,
  :employment_type,
  :enabled,
  :endpoint,
  :endpoint_id,
  :endpoint_url,
  :ends_at,
  :event_id,
  :event_types,
  :evidence_observed_at,
  :expected_updated_at,
  :experience_level,
  :expires_at,
  :factor_id,
  :failure_count,
  :file_name,
  :file_sha256,
  :full_name,
  :guideHandoffAnsweredAt,
  :guideHandoffAt,
  :guideHandoffDueAt,
  :hours,
  :id,
  :idempotency_key,
  :installation_id,
  :issuer,
  :jurisdiction,
  :kind,
  :label,
  :lastMessageAt,
  :lastMessageAuthorType,
  :lastMessagePreview,
  :last_delivery_at,
  :launch,
  :license_number,
  :messages,
  :messagesTruncated,
  :monthly_cap_cents,
  :name,
  :note,
  :one_time_display,
  :ownerEmail,
  :ownerLastReadAt,
  :ownerName,
  :ownerUserId,
  :period,
  :phone,
  :platform,
  :policy_number,
  :postal_code,
  :promo_code,
  :push_token,
  :radius_miles,
  :reason,
  :reason_category,
  :reason_detail,
  :registered_at,
  :request_id,
  :requested_at,
  :salary_currency,
  :salary_max,
  :salary_min,
  :salary_period,
  :save_card,
  :save_card_consent_sha256,
  :schedule,
  :service_areas,
  :signing_secret,
  :size_bytes,
  :skills,
  :source_url,
  :starts_at,
  :state,
  :stated_expires_at,
  :status,
  :street_address,
  :subject,
  :submitted_identifier,
  :supportLastReadAt,
  :terms,
  :terms_version,
  :threshold_cents,
  :ticketNumber,
  :tier,
  :title,
  :total_job_openings,
  :typing,
  :updatedAt,
  :updated_at,
  :url,
  :website,
  :workplace_type,
  :zip,
  keyword_init: true
)

# Request payload for BusinessOwner#update.
#
# @!attribute [rw] account_id
#   @return [String, nil]
#
# @!attribute [rw] account_role
#   @return [String, nil]
#
# @!attribute [rw] acknowledge_data_effects
#   @return [Boolean, nil]
#
# @!attribute [rw] actions
#   @return [Array, nil]
#
# @!attribute [rw] allowed_actions
#   @return [Array, nil]
#
# @!attribute [rw] amount_cents
#   @return [Float, nil]
#
# @!attribute [rw] applicant_location_requirements
#   @return [String, nil]
#
# @!attribute [rw] apply_url
#   @return [Object, nil]
#
# @!attribute [rw] asset_id
#   @return [String, nil]
#
# @!attribute [rw] assigneeId
#   @return [String, nil]
#
# @!attribute [rw] assigneeLabel
#   @return [String, nil]
#
# @!attribute [rw] assigneeType
#   @return [String, nil]
#
# @!attribute [rw] attempt_id
#   @return [String, nil]
#
# @!attribute [rw] benefits
#   @return [String, nil]
#
# @!attribute [rw] body
#   @return [String, nil]
#
# @!attribute [rw] businessId
#   @return [String, nil]
#
# @!attribute [rw] businessName
#   @return [String, nil]
#
# @!attribute [rw] business_id
#   @return [String, nil]
#
# @!attribute [rw] campaign
#   @return [Hash, nil]
#
# @!attribute [rw] campaign_id
#   @return [String, nil]
#
# @!attribute [rw] carrier_name
#   @return [String, nil]
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] category_alias
#   @return [String, nil]
#
# @!attribute [rw] category_aliases
#   @return [Array, nil]
#
# @!attribute [rw] change
#   @return [Hash, nil]
#
# @!attribute [rw] city
#   @return [String, nil]
#
# @!attribute [rw] client_message_id
#   @return [String, nil]
#
# @!attribute [rw] code
#   @return [String, nil]
#
# @!attribute [rw] compensation_text
#   @return [String, nil]
#
# @!attribute [rw] confirm
#   @return [Boolean, nil]
#
# @!attribute [rw] confirmation
#   @return [String, nil]
#
# @!attribute [rw] connection_kind
#   @return [String, nil]
#
# @!attribute [rw] consent_sha256
#   @return [String, nil]
#
# @!attribute [rw] contact_email
#   @return [Object, nil]
#
# @!attribute [rw] content_type
#   @return [String, nil]
#
# @!attribute [rw] country
#   @return [String, nil]
#
# @!attribute [rw] coupon_code
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] credential_id
#   @return [String, nil]
#
# @!attribute [rw] credential_identifier
#   @return [String, nil]
#
# @!attribute [rw] data_base64
#   @return [String, nil]
#
# @!attribute [rw] delivery_contract
#   @return [Hash, nil]
#
# @!attribute [rw] description
#   @return [Object, nil]
#
# @!attribute [rw] direct_apply
#   @return [Boolean, nil]
#
# @!attribute [rw] disabled_reason
#   @return [Object, nil]
#
# @!attribute [rw] discount_label
#   @return [String, nil]
#
# @!attribute [rw] display_name
#   @return [String, nil]
#
# @!attribute [rw] employment_type
#   @return [String, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] endpoint
#   @return [Hash, nil]
#
# @!attribute [rw] endpoint_id
#   @return [String, nil]
#
# @!attribute [rw] endpoint_url
#   @return [String, nil]
#
# @!attribute [rw] ends_at
#   @return [Object, nil]
#
# @!attribute [rw] event_id
#   @return [String, nil]
#
# @!attribute [rw] event_types
#   @return [Array, nil]
#
# @!attribute [rw] evidence_observed_at
#   @return [String, nil]
#
# @!attribute [rw] expected_updated_at
#   @return [String, nil]
#
# @!attribute [rw] experience_level
#   @return [String, nil]
#
# @!attribute [rw] expires_at
#   @return [String, nil]
#
# @!attribute [rw] factor_id
#   @return [String, nil]
#
# @!attribute [rw] failure_count
#   @return [Integer, nil]
#
# @!attribute [rw] file_name
#   @return [String, nil]
#
# @!attribute [rw] file_sha256
#   @return [String, nil]
#
# @!attribute [rw] full_name
#   @return [String, nil]
#
# @!attribute [rw] guideHandoffAnsweredAt
#   @return [Object, nil]
#
# @!attribute [rw] guideHandoffAt
#   @return [Object, nil]
#
# @!attribute [rw] guideHandoffDueAt
#   @return [Object, nil]
#
# @!attribute [rw] hours
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] idempotency_key
#   @return [String, nil]
#
# @!attribute [rw] installation_id
#   @return [String, nil]
#
# @!attribute [rw] issuer
#   @return [String, nil]
#
# @!attribute [rw] jurisdiction
#   @return [String, nil]
#
# @!attribute [rw] kind
#   @return [String, nil]
#
# @!attribute [rw] label
#   @return [String, nil]
#
# @!attribute [rw] lastMessageAt
#   @return [Object, nil]
#
# @!attribute [rw] lastMessageAuthorType
#   @return [String, nil]
#
# @!attribute [rw] lastMessagePreview
#   @return [String, nil]
#
# @!attribute [rw] last_delivery_at
#   @return [Object, nil]
#
# @!attribute [rw] launch
#   @return [Boolean, nil]
#
# @!attribute [rw] license_number
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] messagesTruncated
#   @return [Boolean, nil]
#
# @!attribute [rw] monthly_cap_cents
#   @return [Float, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] note
#   @return [String, nil]
#
# @!attribute [rw] one_time_display
#   @return [Object, nil]
#
# @!attribute [rw] ownerEmail
#   @return [String, nil]
#
# @!attribute [rw] ownerLastReadAt
#   @return [Object, nil]
#
# @!attribute [rw] ownerName
#   @return [String, nil]
#
# @!attribute [rw] ownerUserId
#   @return [String, nil]
#
# @!attribute [rw] period
#   @return [String, nil]
#
# @!attribute [rw] phone
#   @return [String, nil]
#
# @!attribute [rw] platform
#   @return [String, nil]
#
# @!attribute [rw] policy_number
#   @return [String, nil]
#
# @!attribute [rw] postal_code
#   @return [String, nil]
#
# @!attribute [rw] promo_code
#   @return [Object, nil]
#
# @!attribute [rw] push_token
#   @return [String, nil]
#
# @!attribute [rw] radius_miles
#   @return [Float, nil]
#
# @!attribute [rw] reason
#   @return [String, nil]
#
# @!attribute [rw] reason_category
#   @return [String, nil]
#
# @!attribute [rw] reason_detail
#   @return [String, nil]
#
# @!attribute [rw] registered_at
#   @return [String, nil]
#
# @!attribute [rw] request_id
#   @return [String, nil]
#
# @!attribute [rw] requested_at
#   @return [String, nil]
#
# @!attribute [rw] salary_currency
#   @return [String, nil]
#
# @!attribute [rw] salary_max
#   @return [Object, nil]
#
# @!attribute [rw] salary_min
#   @return [Object, nil]
#
# @!attribute [rw] salary_period
#   @return [String, nil]
#
# @!attribute [rw] save_card
#   @return [Boolean, nil]
#
# @!attribute [rw] save_card_consent_sha256
#   @return [String, nil]
#
# @!attribute [rw] schedule
#   @return [String, nil]
#
# @!attribute [rw] service_areas
#   @return [String, nil]
#
# @!attribute [rw] signing_secret
#   @return [String, nil]
#
# @!attribute [rw] size_bytes
#   @return [Float, nil]
#
# @!attribute [rw] skills
#   @return [Array, nil]
#
# @!attribute [rw] source_url
#   @return [String, nil]
#
# @!attribute [rw] starts_at
#   @return [Object, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] stated_expires_at
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] street_address
#   @return [String, nil]
#
# @!attribute [rw] subject
#   @return [String, nil]
#
# @!attribute [rw] submitted_identifier
#   @return [String, nil]
#
# @!attribute [rw] supportLastReadAt
#   @return [Object, nil]
#
# @!attribute [rw] terms
#   @return [Object, nil]
#
# @!attribute [rw] terms_version
#   @return [String, nil]
#
# @!attribute [rw] threshold_cents
#   @return [Float, nil]
#
# @!attribute [rw] ticketNumber
#   @return [String, nil]
#
# @!attribute [rw] tier
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] total_job_openings
#   @return [Object, nil]
#
# @!attribute [rw] typing
#   @return [Boolean, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] website
#   @return [String, nil]
#
# @!attribute [rw] workplace_type
#   @return [String, nil]
#
# @!attribute [rw] zip
#   @return [String, nil]
BusinessOwnerUpdateData = Struct.new(
  :account_id,
  :account_role,
  :acknowledge_data_effects,
  :actions,
  :allowed_actions,
  :amount_cents,
  :applicant_location_requirements,
  :apply_url,
  :asset_id,
  :assigneeId,
  :assigneeLabel,
  :assigneeType,
  :attempt_id,
  :benefits,
  :body,
  :businessId,
  :businessName,
  :business_id,
  :campaign,
  :campaign_id,
  :carrier_name,
  :category,
  :category_alias,
  :category_aliases,
  :change,
  :city,
  :client_message_id,
  :code,
  :compensation_text,
  :confirm,
  :confirmation,
  :connection_kind,
  :consent_sha256,
  :contact_email,
  :content_type,
  :country,
  :coupon_code,
  :createdAt,
  :created_at,
  :credential_id,
  :credential_identifier,
  :data_base64,
  :delivery_contract,
  :description,
  :direct_apply,
  :disabled_reason,
  :discount_label,
  :display_name,
  :employment_type,
  :enabled,
  :endpoint,
  :endpoint_id,
  :endpoint_url,
  :ends_at,
  :event_id,
  :event_types,
  :evidence_observed_at,
  :expected_updated_at,
  :experience_level,
  :expires_at,
  :factor_id,
  :failure_count,
  :file_name,
  :file_sha256,
  :full_name,
  :guideHandoffAnsweredAt,
  :guideHandoffAt,
  :guideHandoffDueAt,
  :hours,
  :id,
  :idempotency_key,
  :installation_id,
  :issuer,
  :jurisdiction,
  :kind,
  :label,
  :lastMessageAt,
  :lastMessageAuthorType,
  :lastMessagePreview,
  :last_delivery_at,
  :launch,
  :license_number,
  :messages,
  :messagesTruncated,
  :monthly_cap_cents,
  :name,
  :note,
  :one_time_display,
  :ownerEmail,
  :ownerLastReadAt,
  :ownerName,
  :ownerUserId,
  :period,
  :phone,
  :platform,
  :policy_number,
  :postal_code,
  :promo_code,
  :push_token,
  :radius_miles,
  :reason,
  :reason_category,
  :reason_detail,
  :registered_at,
  :request_id,
  :requested_at,
  :salary_currency,
  :salary_max,
  :salary_min,
  :salary_period,
  :save_card,
  :save_card_consent_sha256,
  :schedule,
  :service_areas,
  :signing_secret,
  :size_bytes,
  :skills,
  :source_url,
  :starts_at,
  :state,
  :stated_expires_at,
  :status,
  :street_address,
  :subject,
  :submitted_identifier,
  :supportLastReadAt,
  :terms,
  :terms_version,
  :threshold_cents,
  :ticketNumber,
  :tier,
  :title,
  :total_job_openings,
  :typing,
  :updatedAt,
  :updated_at,
  :url,
  :website,
  :workplace_type,
  :zip,
  keyword_init: true
)

# BusinessReview entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
BusinessReview = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for BusinessReview#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] page
#   @return [Float, nil]
#
# @!attribute [rw] rating
#   @return [String, nil]
BusinessReviewLoadMatch = Struct.new(
  :id,
  :limit,
  :page,
  :rating,
  keyword_init: true
)

# ChatAttachment entity data model.
#
# @!attribute [rw] byteSize
#   @return [Integer]
#
# @!attribute [rw] content_type
#   @return [Object]
#
# @!attribute [rw] data_base64
#   @return [String]
#
# @!attribute [rw] fileName
#   @return [String]
#
# @!attribute [rw] file_name
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] mediaType
#   @return [String]
#
# @!attribute [rw] size_bytes
#   @return [Integer]
ChatAttachment = Struct.new(
  :byteSize,
  :content_type,
  :data_base64,
  :fileName,
  :file_name,
  :id,
  :mediaType,
  :size_bytes,
  keyword_init: true
)

# Request payload for ChatAttachment#create.
#
# @!attribute [rw] conversation_id
#   @return [String]
#
# @!attribute [rw] content_type
#   @return [Object]
#
# @!attribute [rw] data_base64
#   @return [String]
#
# @!attribute [rw] file_name
#   @return [String]
#
# @!attribute [rw] size_bytes
#   @return [Integer]
ChatAttachmentCreateData = Struct.new(
  :conversation_id,
  :content_type,
  :data_base64,
  :file_name,
  :size_bytes,
  keyword_init: true
)

# ChatAttachmentUrl entity data model.
#
# @!attribute [rw] byte_size
#   @return [Integer]
#
# @!attribute [rw] expires_in_seconds
#   @return [Object]
#
# @!attribute [rw] file_name
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] media_type
#   @return [String]
#
# @!attribute [rw] signed_url
#   @return [String]
ChatAttachmentUrl = Struct.new(
  :byte_size,
  :expires_in_seconds,
  :file_name,
  :id,
  :media_type,
  :signed_url,
  keyword_init: true
)

# Request payload for ChatAttachmentUrl#create.
#
# @!attribute [rw] attachment_id
#   @return [String]
#
# @!attribute [rw] conversation_id
#   @return [String, nil]
#
# @!attribute [rw] message_id
#   @return [String, nil]
#
# @!attribute [rw] support_id
#   @return [String, nil]
ChatAttachmentUrlCreateData = Struct.new(
  :attachment_id,
  :conversation_id,
  :message_id,
  :support_id,
  keyword_init: true
)

# ClaimVerificationSend entity data model.
#
# @!attribute [rw] challenge_id
#   @return [String, nil]
#
# @!attribute [rw] channel
#   @return [Object]
#
# @!attribute [rw] claim_id
#   @return [String]
#
# @!attribute [rw] destination_hint
#   @return [String, nil]
#
# @!attribute [rw] expires_in_seconds
#   @return [Float, nil]
#
# @!attribute [rw] provider_status
#   @return [Object, nil]
#
# @!attribute [rw] recipient_delivery_confirmed
#   @return [Object, nil]
#
# @!attribute [rw] request_id
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [Object]
ClaimVerificationSend = Struct.new(
  :challenge_id,
  :channel,
  :claim_id,
  :destination_hint,
  :expires_in_seconds,
  :provider_status,
  :recipient_delivery_confirmed,
  :request_id,
  :status,
  keyword_init: true
)

# Request payload for ClaimVerificationSend#create.
#
# @!attribute [rw] channel
#   @return [Object, nil]
#
# @!attribute [rw] claim_id
#   @return [String]
#
# @!attribute [rw] request_id
#   @return [String, nil]
ClaimVerificationSendCreateData = Struct.new(
  :channel,
  :claim_id,
  :request_id,
  keyword_init: true
)

# ClaimVerificationVerify entity data model.
#
# @!attribute [rw] business_id
#   @return [Object]
#
# @!attribute [rw] challenge_id
#   @return [String, nil]
#
# @!attribute [rw] channel
#   @return [Object, nil]
#
# @!attribute [rw] claim_id
#   @return [String]
#
# @!attribute [rw] code
#   @return [String]
#
# @!attribute [rw] method
#   @return [Object, nil]
#
# @!attribute [rw] publication
#   @return [Hash, nil]
#
# @!attribute [rw] status
#   @return [Object]
#
# @!attribute [rw] transfer_review_required
#   @return [Object, nil]
#
# @!attribute [rw] trust_model_version
#   @return [Object, nil]
ClaimVerificationVerify = Struct.new(
  :business_id,
  :challenge_id,
  :channel,
  :claim_id,
  :code,
  :method,
  :publication,
  :status,
  :transfer_review_required,
  :trust_model_version,
  keyword_init: true
)

# Request payload for ClaimVerificationVerify#create.
#
# @!attribute [rw] challenge_id
#   @return [String, nil]
#
# @!attribute [rw] channel
#   @return [Object, nil]
#
# @!attribute [rw] claim_id
#   @return [String]
#
# @!attribute [rw] code
#   @return [String]
ClaimVerificationVerifyCreateData = Struct.new(
  :challenge_id,
  :channel,
  :claim_id,
  :code,
  keyword_init: true
)

# CommercialClick entity data model.
#
# @!attribute [rw] action_type
#   @return [Object]
#
# @!attribute [rw] ad_receipt
#   @return [String, nil]
#
# @!attribute [rw] billable
#   @return [Boolean]
#
# @!attribute [rw] billing_event_id
#   @return [Object, nil]
#
# @!attribute [rw] billing_status
#   @return [String]
#
# @!attribute [rw] business_id
#   @return [String, nil]
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] city
#   @return [String, nil]
#
# @!attribute [rw] click_id
#   @return [String]
#
# @!attribute [rw] commercial_status
#   @return [Object, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] directory_listing_id
#   @return [String, nil]
#
# @!attribute [rw] display_name
#   @return [String, nil]
#
# @!attribute [rw] fallback_interaction_id
#   @return [String, nil]
#
# @!attribute [rw] ledger_status
#   @return [String]
#
# @!attribute [rw] listing_id
#   @return [String, nil]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] migration_required
#   @return [Boolean, nil]
#
# @!attribute [rw] page_path
#   @return [String, nil]
#
# @!attribute [rw] referrer
#   @return [String, nil]
#
# @!attribute [rw] source_type
#   @return [Object]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [Object]
#
# @!attribute [rw] storage
#   @return [Object]
#
# @!attribute [rw] surface
#   @return [Object, nil]
#
# @!attribute [rw] target_url
#   @return [String, nil]
CommercialClick = Struct.new(
  :action_type,
  :ad_receipt,
  :billable,
  :billing_event_id,
  :billing_status,
  :business_id,
  :category,
  :city,
  :click_id,
  :commercial_status,
  :created_at,
  :directory_listing_id,
  :display_name,
  :fallback_interaction_id,
  :ledger_status,
  :listing_id,
  :metadata,
  :migration_required,
  :page_path,
  :referrer,
  :source_type,
  :state,
  :status,
  :storage,
  :surface,
  :target_url,
  keyword_init: true
)

# Request payload for CommercialClick#create.
#
# @!attribute [rw] action_type
#   @return [Object]
#
# @!attribute [rw] ad_receipt
#   @return [String, nil]
#
# @!attribute [rw] business_id
#   @return [String, nil]
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] city
#   @return [String, nil]
#
# @!attribute [rw] commercial_status
#   @return [Object, nil]
#
# @!attribute [rw] directory_listing_id
#   @return [String, nil]
#
# @!attribute [rw] display_name
#   @return [String, nil]
#
# @!attribute [rw] listing_id
#   @return [String, nil]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] page_path
#   @return [String, nil]
#
# @!attribute [rw] referrer
#   @return [String, nil]
#
# @!attribute [rw] source_type
#   @return [Object]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] surface
#   @return [Object, nil]
#
# @!attribute [rw] target_url
#   @return [String, nil]
CommercialClickCreateData = Struct.new(
  :action_type,
  :ad_receipt,
  :business_id,
  :category,
  :city,
  :commercial_status,
  :directory_listing_id,
  :display_name,
  :listing_id,
  :metadata,
  :page_path,
  :referrer,
  :source_type,
  :state,
  :surface,
  :target_url,
  keyword_init: true
)

# ContactRecorded entity data model.
#
# @!attribute [rw] business_id
#   @return [String]
#
# @!attribute [rw] contact_recorded
#   @return [Object]
#
# @!attribute [rw] interaction_id
#   @return [String]
#
# @!attribute [rw] ok
#   @return [Object]
#
# @!attribute [rw] policy
#   @return [String]
#
# @!attribute [rw] review_upgraded
#   @return [Object]
#
# @!attribute [rw] status
#   @return [Object]
#
# @!attribute [rw] trust_weight
#   @return [Object]
#
# @!attribute [rw] verified
#   @return [Boolean]
ContactRecorded = Struct.new(
  :business_id,
  :contact_recorded,
  :interaction_id,
  :ok,
  :policy,
  :review_upgraded,
  :status,
  :trust_weight,
  :verified,
  keyword_init: true
)

# Request payload for ContactRecorded#create.
#
# @!attribute [rw] business_id
#   @return [String]
ContactRecordedCreateData = Struct.new(
  :business_id,
  keyword_init: true
)

# Conversation entity data model.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] conversation_id
#   @return [String, nil]
#
# @!attribute [rw] conversations
#   @return [Array]
#
# @!attribute [rw] count
#   @return [Float]
#
# @!attribute [rw] cursor
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] pagination
#   @return [Hash]
Conversation = Struct.new(
  :account_id,
  :conversation_id,
  :conversations,
  :count,
  :cursor,
  :limit,
  :pagination,
  keyword_init: true
)

# Request payload for Conversation#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] conversation_id
#   @return [String, nil]
#
# @!attribute [rw] cursor
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Float, nil]
ConversationCreateData = Struct.new(
  :account_id,
  :conversation_id,
  :cursor,
  :limit,
  keyword_init: true
)

# ConversationClose entity data model.
#
# @!attribute [rw] closed_at
#   @return [String]
#
# @!attribute [rw] conversation_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [Object]
ConversationClose = Struct.new(
  :closed_at,
  :conversation_id,
  :id,
  :status,
  keyword_init: true
)

# Request payload for ConversationClose#create.
#
# @!attribute [rw] id
#   @return [String]
ConversationCloseCreateData = Struct.new(
  :id,
  keyword_init: true
)

# ConversationReport entity data model.
#
# @!attribute [rw] detail
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] reason
#   @return [Object]
#
# @!attribute [rw] status
#   @return [Object]
ConversationReport = Struct.new(
  :detail,
  :id,
  :reason,
  :status,
  keyword_init: true
)

# Request payload for ConversationReport#create.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] detail
#   @return [String, nil]
#
# @!attribute [rw] reason
#   @return [Object]
ConversationReportCreateData = Struct.new(
  :id,
  :detail,
  :reason,
  keyword_init: true
)

# ConversationWorkflow entity data model.
#
# @!attribute [rw] priority
#   @return [Object, nil]
#
# @!attribute [rw] status
#   @return [Object, nil]
ConversationWorkflow = Struct.new(
  :priority,
  :status,
  keyword_init: true
)

# Request payload for ConversationWorkflow#create.
#
# @!attribute [rw] message_id
#   @return [String]
#
# @!attribute [rw] priority
#   @return [Object, nil]
#
# @!attribute [rw] status
#   @return [Object, nil]
ConversationWorkflowCreateData = Struct.new(
  :message_id,
  :priority,
  :status,
  keyword_init: true
)

# CreateAgentApiKey entity data model.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] allowed_actions
#   @return [Array, nil]
#
# @!attribute [rw] allowed_business_ids
#   @return [Array, nil]
#
# @!attribute [rw] created_by
#   @return [String]
#
# @!attribute [rw] key
#   @return [Hash]
#
# @!attribute [rw] label
#   @return [String, nil]
#
# @!attribute [rw] monthly_quota
#   @return [Float, nil]
#
# @!attribute [rw] notes
#   @return [String, nil]
#
# @!attribute [rw] one_time_display
#   @return [Object]
#
# @!attribute [rw] rate_limit_per_minute
#   @return [Float, nil]
#
# @!attribute [rw] raw_key
#   @return [String]
#
# @!attribute [rw] status
#   @return [Object]
CreateAgentApiKey = Struct.new(
  :account_id,
  :allowed_actions,
  :allowed_business_ids,
  :created_by,
  :key,
  :label,
  :monthly_quota,
  :notes,
  :one_time_display,
  :rate_limit_per_minute,
  :raw_key,
  :status,
  keyword_init: true
)

# Request payload for CreateAgentApiKey#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] allowed_actions
#   @return [Array, nil]
#
# @!attribute [rw] allowed_business_ids
#   @return [Array, nil]
#
# @!attribute [rw] label
#   @return [String, nil]
#
# @!attribute [rw] monthly_quota
#   @return [Float, nil]
#
# @!attribute [rw] notes
#   @return [String, nil]
#
# @!attribute [rw] rate_limit_per_minute
#   @return [Float, nil]
CreateAgentApiKeyCreateData = Struct.new(
  :account_id,
  :allowed_actions,
  :allowed_business_ids,
  :label,
  :monthly_quota,
  :notes,
  :rate_limit_per_minute,
  keyword_init: true
)

# Customer entity data model.
#
# @!attribute [rw] auth_provider
#   @return [String, nil]
#
# @!attribute [rw] avatar_url
#   @return [Object]
#
# @!attribute [rw] city
#   @return [Object]
#
# @!attribute [rw] created_at
#   @return [Object]
#
# @!attribute [rw] email
#   @return [String]
#
# @!attribute [rw] full_name
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] phone
#   @return [Object]
#
# @!attribute [rw] search_category
#   @return [String, nil]
#
# @!attribute [rw] service_need
#   @return [String, nil]
#
# @!attribute [rw] state
#   @return [Object]
#
# @!attribute [rw] status
#   @return [Object]
#
# @!attribute [rw] updated_at
#   @return [Object]
Customer = Struct.new(
  :auth_provider,
  :avatar_url,
  :city,
  :created_at,
  :email,
  :full_name,
  :id,
  :phone,
  :search_category,
  :service_need,
  :state,
  :status,
  :updated_at,
  keyword_init: true
)

# Request payload for Customer#create.
#
# @!attribute [rw] auth_provider
#   @return [String, nil]
#
# @!attribute [rw] avatar_url
#   @return [Object, nil]
#
# @!attribute [rw] city
#   @return [Object, nil]
#
# @!attribute [rw] full_name
#   @return [String, nil]
#
# @!attribute [rw] phone
#   @return [Object, nil]
#
# @!attribute [rw] search_category
#   @return [String, nil]
#
# @!attribute [rw] service_need
#   @return [String, nil]
#
# @!attribute [rw] state
#   @return [Object, nil]
CustomerCreateData = Struct.new(
  :auth_provider,
  :avatar_url,
  :city,
  :full_name,
  :phone,
  :search_category,
  :service_need,
  :state,
  keyword_init: true
)

# CustomerAccount entity data model.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] account_role
#   @return [String]
#
# @!attribute [rw] accuracy_meters
#   @return [Float]
#
# @!attribute [rw] acknowledge_data_effects
#   @return [Boolean]
#
# @!attribute [rw] actions
#   @return [Array]
#
# @!attribute [rw] agent_key_id
#   @return [String]
#
# @!attribute [rw] agent_receives_coordinates
#   @return [Boolean]
#
# @!attribute [rw] all_paused
#   @return [Boolean]
#
# @!attribute [rw] app_attest_registered
#   @return [Boolean]
#
# @!attribute [rw] assertion
#   @return [String]
#
# @!attribute [rw] attestation
#   @return [String]
#
# @!attribute [rw] author_label
#   @return [String]
#
# @!attribute [rw] author_type
#   @return [String]
#
# @!attribute [rw] binding
#   @return [Object]
#
# @!attribute [rw] body
#   @return [String]
#
# @!attribute [rw] business_id
#   @return [Object]
#
# @!attribute [rw] capture_source
#   @return [Object]
#
# @!attribute [rw] captured_at
#   @return [String]
#
# @!attribute [rw] challenge
#   @return [String]
#
# @!attribute [rw] challenge_id
#   @return [String]
#
# @!attribute [rw] client_message_id
#   @return [String]
#
# @!attribute [rw] completed
#   @return [Boolean]
#
# @!attribute [rw] confirmation
#   @return [String]
#
# @!attribute [rw] connection_id
#   @return [String]
#
# @!attribute [rw] connection_kind
#   @return [String]
#
# @!attribute [rw] continuation
#   @return [Object]
#
# @!attribute [rw] coordinates_returned
#   @return [Boolean]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] credential_id
#   @return [String]
#
# @!attribute [rw] declined
#   @return [Boolean]
#
# @!attribute [rw] delivery_contract
#   @return [Hash]
#
# @!attribute [rw] disabled_reason
#   @return [Object]
#
# @!attribute [rw] disclosure
#   @return [String]
#
# @!attribute [rw] enabled
#   @return [Boolean]
#
# @!attribute [rw] endpoint
#   @return [Hash]
#
# @!attribute [rw] endpoint_id
#   @return [String]
#
# @!attribute [rw] endpoint_url
#   @return [String]
#
# @!attribute [rw] environment
#   @return [String]
#
# @!attribute [rw] event_id
#   @return [String]
#
# @!attribute [rw] event_types
#   @return [Array]
#
# @!attribute [rw] failure_count
#   @return [Integer]
#
# @!attribute [rw] handoff_id
#   @return [String]
#
# @!attribute [rw] has_more
#   @return [Boolean]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] idempotent_replay
#   @return [Boolean]
#
# @!attribute [rw] installation_id
#   @return [String]
#
# @!attribute [rw] key_id
#   @return [String]
#
# @!attribute [rw] last_delivery_at
#   @return [Object]
#
# @!attribute [rw] latitude
#   @return [Float]
#
# @!attribute [rw] location
#   @return [Object, nil]
#
# @!attribute [rw] longitude
#   @return [Float]
#
# @!attribute [rw] message_alerts_enabled
#   @return [Boolean]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] mode
#   @return [String]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] oauth_grant_id
#   @return [Object]
#
# @!attribute [rw] one_time_display
#   @return [Object]
#
# @!attribute [rw] platform
#   @return [String]
#
# @!attribute [rw] policy
#   @return [String]
#
# @!attribute [rw] purpose
#   @return [String]
#
# @!attribute [rw] push_token
#   @return [String]
#
# @!attribute [rw] reason
#   @return [String]
#
# @!attribute [rw] registered_at
#   @return [String]
#
# @!attribute [rw] reply
#   @return [String]
#
# @!attribute [rw] request_mode
#   @return [String]
#
# @!attribute [rw] requested_at
#   @return [String]
#
# @!attribute [rw] results
#   @return [Array]
#
# @!attribute [rw] schema_version
#   @return [String]
#
# @!attribute [rw] selected_at
#   @return [String]
#
# @!attribute [rw] signed_in
#   @return [Boolean]
#
# @!attribute [rw] signing_secret
#   @return [String]
#
# @!attribute [rw] status
#   @return [Object]
#
# @!attribute [rw] updated_at
#   @return [String]
#
# @!attribute [rw] url
#   @return [String]
#
# @!attribute [rw] usable_until
#   @return [String]
#
# @!attribute [rw] use_mode
#   @return [String]
CustomerAccount = Struct.new(
  :account_id,
  :account_role,
  :accuracy_meters,
  :acknowledge_data_effects,
  :actions,
  :agent_key_id,
  :agent_receives_coordinates,
  :all_paused,
  :app_attest_registered,
  :assertion,
  :attestation,
  :author_label,
  :author_type,
  :binding,
  :body,
  :business_id,
  :capture_source,
  :captured_at,
  :challenge,
  :challenge_id,
  :client_message_id,
  :completed,
  :confirmation,
  :connection_id,
  :connection_kind,
  :continuation,
  :coordinates_returned,
  :created_at,
  :credential_id,
  :declined,
  :delivery_contract,
  :disabled_reason,
  :disclosure,
  :enabled,
  :endpoint,
  :endpoint_id,
  :endpoint_url,
  :environment,
  :event_id,
  :event_types,
  :failure_count,
  :handoff_id,
  :has_more,
  :id,
  :idempotent_replay,
  :installation_id,
  :key_id,
  :last_delivery_at,
  :latitude,
  :location,
  :longitude,
  :message_alerts_enabled,
  :messages,
  :mode,
  :name,
  :oauth_grant_id,
  :one_time_display,
  :platform,
  :policy,
  :purpose,
  :push_token,
  :reason,
  :registered_at,
  :reply,
  :request_mode,
  :requested_at,
  :results,
  :schema_version,
  :selected_at,
  :signed_in,
  :signing_secret,
  :status,
  :updated_at,
  :url,
  :usable_until,
  :use_mode,
  keyword_init: true
)

# Request payload for CustomerAccount#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] account_role
#   @return [String]
#
# @!attribute [rw] accuracy_meters
#   @return [Float]
#
# @!attribute [rw] acknowledge_data_effects
#   @return [Boolean]
#
# @!attribute [rw] actions
#   @return [Array]
#
# @!attribute [rw] agent_key_id
#   @return [String]
#
# @!attribute [rw] agent_receives_coordinates
#   @return [Boolean]
#
# @!attribute [rw] all_paused
#   @return [Boolean]
#
# @!attribute [rw] app_attest_registered
#   @return [Boolean]
#
# @!attribute [rw] assertion
#   @return [String]
#
# @!attribute [rw] attestation
#   @return [String]
#
# @!attribute [rw] author_label
#   @return [String]
#
# @!attribute [rw] author_type
#   @return [String]
#
# @!attribute [rw] binding
#   @return [Object]
#
# @!attribute [rw] body
#   @return [String]
#
# @!attribute [rw] business_id
#   @return [Object]
#
# @!attribute [rw] capture_source
#   @return [Object]
#
# @!attribute [rw] captured_at
#   @return [String]
#
# @!attribute [rw] challenge
#   @return [String]
#
# @!attribute [rw] challenge_id
#   @return [String]
#
# @!attribute [rw] client_message_id
#   @return [String]
#
# @!attribute [rw] completed
#   @return [Boolean]
#
# @!attribute [rw] confirmation
#   @return [String]
#
# @!attribute [rw] connection_id
#   @return [String]
#
# @!attribute [rw] connection_kind
#   @return [String]
#
# @!attribute [rw] continuation
#   @return [Object, nil]
#
# @!attribute [rw] coordinates_returned
#   @return [Boolean]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] credential_id
#   @return [String]
#
# @!attribute [rw] declined
#   @return [Boolean]
#
# @!attribute [rw] delivery_contract
#   @return [Hash]
#
# @!attribute [rw] disabled_reason
#   @return [Object]
#
# @!attribute [rw] disclosure
#   @return [String]
#
# @!attribute [rw] enabled
#   @return [Boolean]
#
# @!attribute [rw] endpoint
#   @return [Hash]
#
# @!attribute [rw] endpoint_id
#   @return [String]
#
# @!attribute [rw] endpoint_url
#   @return [String]
#
# @!attribute [rw] environment
#   @return [String]
#
# @!attribute [rw] event_id
#   @return [String]
#
# @!attribute [rw] event_types
#   @return [Array]
#
# @!attribute [rw] failure_count
#   @return [Integer]
#
# @!attribute [rw] handoff_id
#   @return [String]
#
# @!attribute [rw] has_more
#   @return [Boolean]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] idempotent_replay
#   @return [Boolean]
#
# @!attribute [rw] installation_id
#   @return [String]
#
# @!attribute [rw] key_id
#   @return [String]
#
# @!attribute [rw] last_delivery_at
#   @return [Object]
#
# @!attribute [rw] latitude
#   @return [Float]
#
# @!attribute [rw] location
#   @return [Object, nil]
#
# @!attribute [rw] longitude
#   @return [Float]
#
# @!attribute [rw] message_alerts_enabled
#   @return [Boolean]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] mode
#   @return [String]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] oauth_grant_id
#   @return [Object]
#
# @!attribute [rw] one_time_display
#   @return [Object]
#
# @!attribute [rw] platform
#   @return [String]
#
# @!attribute [rw] policy
#   @return [String]
#
# @!attribute [rw] purpose
#   @return [String]
#
# @!attribute [rw] push_token
#   @return [String]
#
# @!attribute [rw] reason
#   @return [String, nil]
#
# @!attribute [rw] registered_at
#   @return [String]
#
# @!attribute [rw] reply
#   @return [String]
#
# @!attribute [rw] request_mode
#   @return [String]
#
# @!attribute [rw] requested_at
#   @return [String]
#
# @!attribute [rw] results
#   @return [Array]
#
# @!attribute [rw] schema_version
#   @return [String]
#
# @!attribute [rw] selected_at
#   @return [String]
#
# @!attribute [rw] signed_in
#   @return [Boolean]
#
# @!attribute [rw] signing_secret
#   @return [String]
#
# @!attribute [rw] status
#   @return [Object]
#
# @!attribute [rw] updated_at
#   @return [String]
#
# @!attribute [rw] url
#   @return [String]
#
# @!attribute [rw] usable_until
#   @return [String]
#
# @!attribute [rw] use_mode
#   @return [String]
#
# @!attribute [rw] action
#   @return [Object, nil]
#
# @!attribute [rw] consent_copy_version
#   @return [Object, nil]
#
# @!attribute [rw] paused
#   @return [Object, nil]
CustomerAccountCreateData = Struct.new(
  :account_id,
  :account_role,
  :accuracy_meters,
  :acknowledge_data_effects,
  :actions,
  :agent_key_id,
  :agent_receives_coordinates,
  :all_paused,
  :app_attest_registered,
  :assertion,
  :attestation,
  :author_label,
  :author_type,
  :binding,
  :body,
  :business_id,
  :capture_source,
  :captured_at,
  :challenge,
  :challenge_id,
  :client_message_id,
  :completed,
  :confirmation,
  :connection_id,
  :connection_kind,
  :continuation,
  :coordinates_returned,
  :created_at,
  :credential_id,
  :declined,
  :delivery_contract,
  :disabled_reason,
  :disclosure,
  :enabled,
  :endpoint,
  :endpoint_id,
  :endpoint_url,
  :environment,
  :event_id,
  :event_types,
  :failure_count,
  :handoff_id,
  :has_more,
  :id,
  :idempotent_replay,
  :installation_id,
  :key_id,
  :last_delivery_at,
  :latitude,
  :location,
  :longitude,
  :message_alerts_enabled,
  :messages,
  :mode,
  :name,
  :oauth_grant_id,
  :one_time_display,
  :platform,
  :policy,
  :purpose,
  :push_token,
  :reason,
  :registered_at,
  :reply,
  :request_mode,
  :requested_at,
  :results,
  :schema_version,
  :selected_at,
  :signed_in,
  :signing_secret,
  :status,
  :updated_at,
  :url,
  :usable_until,
  :use_mode,
  :action,
  :consent_copy_version,
  :paused,
  keyword_init: true
)

# CustomerLocationProofRevocation entity data model.
#
# @!attribute [rw] accuracy_meters
#   @return [Float]
#
# @!attribute [rw] captured_at
#   @return [String]
#
# @!attribute [rw] latitude
#   @return [Float]
#
# @!attribute [rw] longitude
#   @return [Float]
CustomerLocationProofRevocation = Struct.new(
  :accuracy_meters,
  :captured_at,
  :latitude,
  :longitude,
  keyword_init: true
)

# Request payload for CustomerLocationProofRevocation#create.
#
# @!attribute [rw] accuracy_meters
#   @return [Float]
#
# @!attribute [rw] captured_at
#   @return [String]
#
# @!attribute [rw] latitude
#   @return [Float]
#
# @!attribute [rw] longitude
#   @return [Float]
CustomerLocationProofRevocationCreateData = Struct.new(
  :accuracy_meters,
  :captured_at,
  :latitude,
  :longitude,
  keyword_init: true
)

# Request payload for CustomerLocationProofRevocation#remove.
#
# @!attribute [rw] location_proof_id
#   @return [String]
CustomerLocationProofRevocationRemoveMatch = Struct.new(
  :location_proof_id,
  keyword_init: true
)

# DestinationAddressSuggestion entity data model.
#
# @!attribute [rw] input
#   @return [String]
#
# @!attribute [rw] suggestions
#   @return [Array]
DestinationAddressSuggestion = Struct.new(
  :input,
  :suggestions,
  keyword_init: true
)

# Request payload for DestinationAddressSuggestion#create.
#
# @!attribute [rw] input
#   @return [String]
DestinationAddressSuggestionCreateData = Struct.new(
  :input,
  keyword_init: true
)

# DestinationLocationProof entity data model.
#
# @!attribute [rw] address
#   @return [String]
#
# @!attribute [rw] premise_proximity_confirmation_token
#   @return [String, nil]
DestinationLocationProof = Struct.new(
  :address,
  :premise_proximity_confirmation_token,
  keyword_init: true
)

# Request payload for DestinationLocationProof#create.
#
# @!attribute [rw] address
#   @return [String]
#
# @!attribute [rw] premise_proximity_confirmation_token
#   @return [String, nil]
DestinationLocationProofCreateData = Struct.new(
  :address,
  :premise_proximity_confirmation_token,
  keyword_init: true
)

# DomainTrustCard entity data model.
#
# @!attribute [rw] business_id
#   @return [String]
#
# @!attribute [rw] domain
#   @return [String]
#
# @!attribute [rw] schema_version
#   @return [Object]
#
# @!attribute [rw] trust_card
#   @return [Hash]
#
# @!attribute [rw] trust_card_url
#   @return [String]
#
# @!attribute [rw] trust_model_version
#   @return [Object]
#
# @!attribute [rw] verification_class
#   @return [Object]
#
# @!attribute [rw] verification_disclosure
#   @return [String]
DomainTrustCard = Struct.new(
  :business_id,
  :domain,
  :schema_version,
  :trust_card,
  :trust_card_url,
  :trust_model_version,
  :verification_class,
  :verification_disclosure,
  keyword_init: true
)

# Request payload for DomainTrustCard#load.
#
# @!attribute [rw] domain_key
#   @return [String]
DomainTrustCardLoadMatch = Struct.new(
  :domain_key,
  keyword_init: true
)

# GeoContext entity data model.
class GeoContext
end

# Request payload for GeoContext#load.
class GeoContextLoadMatch
end

# Health entity data model.
#
# @!attribute [rw] agent_phone_location_bridge
#   @return [Hash]
#
# @!attribute [rw] build_sha
#   @return [String]
#
# @!attribute [rw] business_review_access
#   @return [Hash]
#
# @!attribute [rw] contract_version
#   @return [String]
#
# @!attribute [rw] external_agent_webhooks
#   @return [Hash]
#
# @!attribute [rw] external_agent_webhooks_enabled
#   @return [Boolean]
#
# @!attribute [rw] ios_app_attest_anonymous_location
#   @return [Hash]
#
# @!attribute [rw] location_choices
#   @return [Hash]
#
# @!attribute [rw] location_handoff
#   @return [Hash]
#
# @!attribute [rw] mobile_push
#   @return [Object]
#
# @!attribute [rw] ok
#   @return [Object]
#
# @!attribute [rw] service
#   @return [String]
#
# @!attribute [rw] sponsored_ordering
#   @return [Hash]
#
# @!attribute [rw] trust_model_version
#   @return [Object]
#
# @!attribute [rw] version
#   @return [String]
Health = Struct.new(
  :agent_phone_location_bridge,
  :build_sha,
  :business_review_access,
  :contract_version,
  :external_agent_webhooks,
  :external_agent_webhooks_enabled,
  :ios_app_attest_anonymous_location,
  :location_choices,
  :location_handoff,
  :mobile_push,
  :ok,
  :service,
  :sponsored_ordering,
  :trust_model_version,
  :version,
  keyword_init: true
)

# Request payload for Health#load.
#
# @!attribute [rw] agent_phone_location_bridge
#   @return [Hash, nil]
#
# @!attribute [rw] build_sha
#   @return [String, nil]
#
# @!attribute [rw] business_review_access
#   @return [Hash, nil]
#
# @!attribute [rw] contract_version
#   @return [String, nil]
#
# @!attribute [rw] external_agent_webhooks
#   @return [Hash, nil]
#
# @!attribute [rw] external_agent_webhooks_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] ios_app_attest_anonymous_location
#   @return [Hash, nil]
#
# @!attribute [rw] location_choices
#   @return [Hash, nil]
#
# @!attribute [rw] location_handoff
#   @return [Hash, nil]
#
# @!attribute [rw] mobile_push
#   @return [Object, nil]
#
# @!attribute [rw] ok
#   @return [Object, nil]
#
# @!attribute [rw] service
#   @return [String, nil]
#
# @!attribute [rw] sponsored_ordering
#   @return [Hash, nil]
#
# @!attribute [rw] trust_model_version
#   @return [Object, nil]
#
# @!attribute [rw] version
#   @return [String, nil]
HealthLoadMatch = Struct.new(
  :agent_phone_location_bridge,
  :build_sha,
  :business_review_access,
  :contract_version,
  :external_agent_webhooks,
  :external_agent_webhooks_enabled,
  :ios_app_attest_anonymous_location,
  :location_choices,
  :location_handoff,
  :mobile_push,
  :ok,
  :service,
  :sponsored_ordering,
  :trust_model_version,
  :version,
  keyword_init: true
)

# JobApplication entity data model.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] already_withdrawn
#   @return [Boolean, nil]
#
# @!attribute [rw] application
#   @return [Hash]
#
# @!attribute [rw] applications
#   @return [Array]
#
# @!attribute [rw] billing
#   @return [Hash]
#
# @!attribute [rw] business_id
#   @return [String, nil]
#
# @!attribute [rw] count
#   @return [Float]
#
# @!attribute [rw] cover_note
#   @return [String, nil]
#
# @!attribute [rw] free_to_apply
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] job_id
#   @return [String]
#
# @!attribute [rw] limit
#   @return [Float]
#
# @!attribute [rw] offset
#   @return [Float]
#
# @!attribute [rw] resume
#   @return [Hash]
#
# @!attribute [rw] retention_note
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String]
JobApplication = Struct.new(
  :account_id,
  :already_withdrawn,
  :application,
  :applications,
  :billing,
  :business_id,
  :count,
  :cover_note,
  :free_to_apply,
  :id,
  :job_id,
  :limit,
  :offset,
  :resume,
  :retention_note,
  :status,
  keyword_init: true
)

# Request payload for JobApplication#create.
#
# @!attribute [rw] account_id
#   @return [String, nil]
#
# @!attribute [rw] cover_note
#   @return [String, nil]
#
# @!attribute [rw] job_id
#   @return [String]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] offset
#   @return [Float, nil]
#
# @!attribute [rw] resume
#   @return [Hash]
#
# @!attribute [rw] status
#   @return [String, nil]
JobApplicationCreateData = Struct.new(
  :account_id,
  :cover_note,
  :job_id,
  :limit,
  :offset,
  :resume,
  :status,
  keyword_init: true
)

# JobResumeSignedUrl entity data model.
#
# @!attribute [rw] application_id
#   @return [String]
#
# @!attribute [rw] content_type
#   @return [String]
#
# @!attribute [rw] expires_in_seconds
#   @return [Float]
#
# @!attribute [rw] resume_file_name
#   @return [String]
#
# @!attribute [rw] signed_url
#   @return [String]
#
# @!attribute [rw] size_bytes
#   @return [Float]
#
# @!attribute [rw] status
#   @return [Object]
JobResumeSignedUrl = Struct.new(
  :application_id,
  :content_type,
  :expires_in_seconds,
  :resume_file_name,
  :signed_url,
  :size_bytes,
  :status,
  keyword_init: true
)

# Request payload for JobResumeSignedUrl#create.
#
# @!attribute [rw] job_application_id
#   @return [String]
JobResumeSignedUrlCreateData = Struct.new(
  :job_application_id,
  keyword_init: true
)

# LocationHandoff entity data model.
class LocationHandoff
end

# Request payload for LocationHandoff#create.
class LocationHandoffCreateData
end

# Message entity data model.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] client_message_id
#   @return [String]
#
# @!attribute [rw] conversation_id
#   @return [String]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] delivery
#   @return [Object, nil]
#
# @!attribute [rw] idempotent_replay
#   @return [Boolean]
#
# @!attribute [rw] interaction_id
#   @return [String]
#
# @!attribute [rw] message
#   @return [String]
#
# @!attribute [rw] moderation_required
#   @return [Object, nil]
#
# @!attribute [rw] source_path
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [Object]
#
# @!attribute [rw] subject
#   @return [String, nil]
#
# @!attribute [rw] target_business_id
#   @return [String]
#
# @!attribute [rw] target_business_name
#   @return [String, nil]
#
# @!attribute [rw] target_business_source
#   @return [String, nil]
Message = Struct.new(
  :account_id,
  :client_message_id,
  :conversation_id,
  :created_at,
  :delivery,
  :idempotent_replay,
  :interaction_id,
  :message,
  :moderation_required,
  :source_path,
  :status,
  :subject,
  :target_business_id,
  :target_business_name,
  :target_business_source,
  keyword_init: true
)

# Request payload for Message#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] client_message_id
#   @return [String]
#
# @!attribute [rw] message
#   @return [String]
#
# @!attribute [rw] source_path
#   @return [String, nil]
#
# @!attribute [rw] subject
#   @return [String]
#
# @!attribute [rw] target_business_id
#   @return [String]
#
# @!attribute [rw] target_business_name
#   @return [String]
#
# @!attribute [rw] target_business_source
#   @return [String]
MessageCreateData = Struct.new(
  :account_id,
  :client_message_id,
  :message,
  :source_path,
  :subject,
  :target_business_id,
  :target_business_name,
  :target_business_source,
  keyword_init: true
)

# ModeratedAction entity data model.
#
# @!attribute [rw] actions
#   @return [Array]
#
# @!attribute [rw] body
#   @return [String]
#
# @!attribute [rw] client_request_id
#   @return [String, nil]
#
# @!attribute [rw] content_type
#   @return [String]
#
# @!attribute [rw] continuation
#   @return [Object]
#
# @!attribute [rw] coordinates_returned
#   @return [Boolean]
#
# @!attribute [rw] disclosure
#   @return [String]
#
# @!attribute [rw] enabled
#   @return [Boolean]
#
# @!attribute [rw] file_sha256
#   @return [String]
#
# @!attribute [rw] has_more
#   @return [Boolean]
#
# @!attribute [rw] human_confirmation
#   @return [Boolean, nil]
#
# @!attribute [rw] intent_id
#   @return [String]
#
# @!attribute [rw] kind
#   @return [String, nil]
#
# @!attribute [rw] knowledgeVersion
#   @return [String]
#
# @!attribute [rw] limits
#   @return [Hash]
#
# @!attribute [rw] links
#   @return [Array]
#
# @!attribute [rw] location
#   @return [Hash]
#
# @!attribute [rw] message
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] mode
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] needsHuman
#   @return [Boolean]
#
# @!attribute [rw] policy
#   @return [Hash]
#
# @!attribute [rw] question
#   @return [String]
#
# @!attribute [rw] reply
#   @return [String]
#
# @!attribute [rw] result
#   @return [String]
#
# @!attribute [rw] results
#   @return [Array]
#
# @!attribute [rw] scan_authority_id
#   @return [String]
#
# @!attribute [rw] scanner
#   @return [String]
#
# @!attribute [rw] scanner_version
#   @return [String]
#
# @!attribute [rw] schema_version
#   @return [String]
#
# @!attribute [rw] searcher_latitude
#   @return [Float, nil]
#
# @!attribute [rw] searcher_longitude
#   @return [Float, nil]
#
# @!attribute [rw] signature
#   @return [String, nil]
#
# @!attribute [rw] signed_in
#   @return [Boolean]
#
# @!attribute [rw] size_bytes
#   @return [Float]
#
# @!attribute [rw] subject
#   @return [String, nil]
#
# @!attribute [rw] target_business_id
#   @return [String]
#
# @!attribute [rw] topic
#   @return [String]
ModeratedAction = Struct.new(
  :actions,
  :body,
  :client_request_id,
  :content_type,
  :continuation,
  :coordinates_returned,
  :disclosure,
  :enabled,
  :file_sha256,
  :has_more,
  :human_confirmation,
  :intent_id,
  :kind,
  :knowledgeVersion,
  :limits,
  :links,
  :location,
  :message,
  :messages,
  :mode,
  :name,
  :needsHuman,
  :policy,
  :question,
  :reply,
  :result,
  :results,
  :scan_authority_id,
  :scanner,
  :scanner_version,
  :schema_version,
  :searcher_latitude,
  :searcher_longitude,
  :signature,
  :signed_in,
  :size_bytes,
  :subject,
  :target_business_id,
  :topic,
  keyword_init: true
)

# Request payload for ModeratedAction#load.
#
# @!attribute [rw] actions
#   @return [Array, nil]
#
# @!attribute [rw] body
#   @return [String, nil]
#
# @!attribute [rw] client_request_id
#   @return [String, nil]
#
# @!attribute [rw] content_type
#   @return [String, nil]
#
# @!attribute [rw] continuation
#   @return [Object, nil]
#
# @!attribute [rw] coordinates_returned
#   @return [Boolean, nil]
#
# @!attribute [rw] disclosure
#   @return [String, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] file_sha256
#   @return [String, nil]
#
# @!attribute [rw] has_more
#   @return [Boolean, nil]
#
# @!attribute [rw] human_confirmation
#   @return [Boolean, nil]
#
# @!attribute [rw] intent_id
#   @return [String, nil]
#
# @!attribute [rw] kind
#   @return [String, nil]
#
# @!attribute [rw] knowledgeVersion
#   @return [String, nil]
#
# @!attribute [rw] limits
#   @return [Hash, nil]
#
# @!attribute [rw] links
#   @return [Array, nil]
#
# @!attribute [rw] location
#   @return [Hash, nil]
#
# @!attribute [rw] message
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] needsHuman
#   @return [Boolean, nil]
#
# @!attribute [rw] policy
#   @return [Hash, nil]
#
# @!attribute [rw] question
#   @return [String, nil]
#
# @!attribute [rw] reply
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [String, nil]
#
# @!attribute [rw] results
#   @return [Array, nil]
#
# @!attribute [rw] scan_authority_id
#   @return [String, nil]
#
# @!attribute [rw] scanner
#   @return [String, nil]
#
# @!attribute [rw] scanner_version
#   @return [String, nil]
#
# @!attribute [rw] schema_version
#   @return [String, nil]
#
# @!attribute [rw] searcher_latitude
#   @return [Float, nil]
#
# @!attribute [rw] searcher_longitude
#   @return [Float, nil]
#
# @!attribute [rw] signature
#   @return [String, nil]
#
# @!attribute [rw] signed_in
#   @return [Boolean, nil]
#
# @!attribute [rw] size_bytes
#   @return [Float, nil]
#
# @!attribute [rw] subject
#   @return [String, nil]
#
# @!attribute [rw] target_business_id
#   @return [String, nil]
#
# @!attribute [rw] topic
#   @return [String, nil]
ModeratedActionLoadMatch = Struct.new(
  :actions,
  :body,
  :client_request_id,
  :content_type,
  :continuation,
  :coordinates_returned,
  :disclosure,
  :enabled,
  :file_sha256,
  :has_more,
  :human_confirmation,
  :intent_id,
  :kind,
  :knowledgeVersion,
  :limits,
  :links,
  :location,
  :message,
  :messages,
  :mode,
  :name,
  :needsHuman,
  :policy,
  :question,
  :reply,
  :result,
  :results,
  :scan_authority_id,
  :scanner,
  :scanner_version,
  :schema_version,
  :searcher_latitude,
  :searcher_longitude,
  :signature,
  :signed_in,
  :size_bytes,
  :subject,
  :target_business_id,
  :topic,
  keyword_init: true
)

# Request payload for ModeratedAction#create.
#
# @!attribute [rw] client_request_id
#   @return [String, nil]
#
# @!attribute [rw] content_type
#   @return [String]
#
# @!attribute [rw] continuation
#   @return [Object, nil]
#
# @!attribute [rw] file_sha256
#   @return [String]
#
# @!attribute [rw] human_confirmation
#   @return [Boolean, nil]
#
# @!attribute [rw] intent_id
#   @return [String]
#
# @!attribute [rw] kind
#   @return [String, nil]
#
# @!attribute [rw] location
#   @return [Hash, nil]
#
# @!attribute [rw] message
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] question
#   @return [String]
#
# @!attribute [rw] result
#   @return [String]
#
# @!attribute [rw] scan_authority_id
#   @return [String]
#
# @!attribute [rw] scanner
#   @return [String]
#
# @!attribute [rw] scanner_version
#   @return [String]
#
# @!attribute [rw] searcher_latitude
#   @return [Float, nil]
#
# @!attribute [rw] searcher_longitude
#   @return [Float, nil]
#
# @!attribute [rw] signature
#   @return [String, nil]
#
# @!attribute [rw] size_bytes
#   @return [Float]
#
# @!attribute [rw] subject
#   @return [String, nil]
#
# @!attribute [rw] target_business_id
#   @return [String]
ModeratedActionCreateData = Struct.new(
  :client_request_id,
  :content_type,
  :continuation,
  :file_sha256,
  :human_confirmation,
  :intent_id,
  :kind,
  :location,
  :message,
  :messages,
  :question,
  :result,
  :scan_authority_id,
  :scanner,
  :scanner_version,
  :searcher_latitude,
  :searcher_longitude,
  :signature,
  :size_bytes,
  :subject,
  :target_business_id,
  keyword_init: true
)

# OpenApiDocument entity data model.
#
# @!attribute [rw] components
#   @return [Hash]
#
# @!attribute [rw] info
#   @return [Hash]
#
# @!attribute [rw] openapi
#   @return [Object]
#
# @!attribute [rw] paths
#   @return [Hash]
#
# @!attribute [rw] servers
#   @return [Array]
#
# @!attribute [rw] tags
#   @return [Array]
OpenApiDocument = Struct.new(
  :components,
  :info,
  :openapi,
  :paths,
  :servers,
  :tags,
  keyword_init: true
)

# Request payload for OpenApiDocument#list.
#
# @!attribute [rw] components
#   @return [Hash, nil]
#
# @!attribute [rw] info
#   @return [Hash, nil]
#
# @!attribute [rw] openapi
#   @return [Object, nil]
#
# @!attribute [rw] paths
#   @return [Hash, nil]
#
# @!attribute [rw] servers
#   @return [Array, nil]
#
# @!attribute [rw] tags
#   @return [Array, nil]
OpenApiDocumentListMatch = Struct.new(
  :components,
  :info,
  :openapi,
  :paths,
  :servers,
  :tags,
  keyword_init: true
)

# Operation entity data model.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] action
#   @return [String]
#
# @!attribute [rw] active
#   @return [Boolean, nil]
#
# @!attribute [rw] active_or_good_standing
#   @return [Boolean, nil]
#
# @!attribute [rw] ai_draft_id
#   @return [String, nil]
#
# @!attribute [rw] allowed_actions
#   @return [Array]
#
# @!attribute [rw] alt
#   @return [String, nil]
#
# @!attribute [rw] amount_cents
#   @return [Float]
#
# @!attribute [rw] amount_off_cents
#   @return [Float, nil]
#
# @!attribute [rw] api_key
#   @return [String]
#
# @!attribute [rw] applies_to_period
#   @return [String, nil]
#
# @!attribute [rw] applies_to_tier
#   @return [Object, nil]
#
# @!attribute [rw] assigned_admin_user_id
#   @return [Object, nil]
#
# @!attribute [rw] assigneeId
#   @return [String]
#
# @!attribute [rw] assigneeLabel
#   @return [String]
#
# @!attribute [rw] assigneeType
#   @return [String]
#
# @!attribute [rw] assignee_id
#   @return [String, nil]
#
# @!attribute [rw] assignee_label
#   @return [String, nil]
#
# @!attribute [rw] assignee_type
#   @return [String, nil]
#
# @!attribute [rw] assistant_enabled
#   @return [Boolean]
#
# @!attribute [rw] base_url
#   @return [String, nil]
#
# @!attribute [rw] body
#   @return [String]
#
# @!attribute [rw] businessId
#   @return [String]
#
# @!attribute [rw] businessName
#   @return [String]
#
# @!attribute [rw] business_id
#   @return [Object]
#
# @!attribute [rw] business_ids
#   @return [Array]
#
# @!attribute [rw] campaign_id
#   @return [String, nil]
#
# @!attribute [rw] campaign_ids
#   @return [Array, nil]
#
# @!attribute [rw] caption
#   @return [String, nil]
#
# @!attribute [rw] case_status
#   @return [String, nil]
#
# @!attribute [rw] catalog
#   @return [Array]
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] category_alias
#   @return [String]
#
# @!attribute [rw] chunk_size
#   @return [Float, nil]
#
# @!attribute [rw] city
#   @return [String, nil]
#
# @!attribute [rw] code
#   @return [String]
#
# @!attribute [rw] confidence
#   @return [Float, nil]
#
# @!attribute [rw] config
#   @return [Hash]
#
# @!attribute [rw] confirm
#   @return [Boolean]
#
# @!attribute [rw] confirm_admin
#   @return [Boolean, nil]
#
# @!attribute [rw] confirmation
#   @return [String]
#
# @!attribute [rw] connection_id
#   @return [String]
#
# @!attribute [rw] connection_kind
#   @return [String]
#
# @!attribute [rw] content_type
#   @return [String]
#
# @!attribute [rw] context_id
#   @return [String]
#
# @!attribute [rw] context_type
#   @return [String]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] credential_expires_at
#   @return [String, nil]
#
# @!attribute [rw] credential_id
#   @return [String]
#
# @!attribute [rw] custom_wire
#   @return [String, nil]
#
# @!attribute [rw] data_base64
#   @return [String]
#
# @!attribute [rw] decision
#   @return [String]
#
# @!attribute [rw] dedupe_ack
#   @return [Boolean, nil]
#
# @!attribute [rw] delivery_contract
#   @return [Hash]
#
# @!attribute [rw] disabled_reason
#   @return [Object]
#
# @!attribute [rw] discount_type
#   @return [String]
#
# @!attribute [rw] display_name
#   @return [String]
#
# @!attribute [rw] disposition
#   @return [String]
#
# @!attribute [rw] draft
#   @return [Hash]
#
# @!attribute [rw] duration
#   @return [String, nil]
#
# @!attribute [rw] duration_in_months
#   @return [Object, nil]
#
# @!attribute [rw] email
#   @return [String]
#
# @!attribute [rw] enabled
#   @return [Boolean]
#
# @!attribute [rw] endpoint
#   @return [Hash]
#
# @!attribute [rw] endpoint_id
#   @return [String]
#
# @!attribute [rw] endpoint_url
#   @return [String]
#
# @!attribute [rw] ends_at
#   @return [String]
#
# @!attribute [rw] environment_fallback
#   @return [Object]
#
# @!attribute [rw] event_id
#   @return [String]
#
# @!attribute [rw] event_types
#   @return [Array]
#
# @!attribute [rw] expected_allowed_actions
#   @return [Array]
#
# @!attribute [rw] expected_key_id
#   @return [String]
#
# @!attribute [rw] expected_updated_at
#   @return [String]
#
# @!attribute [rw] expected_version
#   @return [Float]
#
# @!attribute [rw] expires_at
#   @return [String, nil]
#
# @!attribute [rw] fact_id
#   @return [String]
#
# @!attribute [rw] facts
#   @return [Hash]
#
# @!attribute [rw] failure_count
#   @return [Integer]
#
# @!attribute [rw] fields
#   @return [Hash]
#
# @!attribute [rw] file_name
#   @return [String]
#
# @!attribute [rw] guideHandoffAnsweredAt
#   @return [Object, nil]
#
# @!attribute [rw] guideHandoffAt
#   @return [Object, nil]
#
# @!attribute [rw] guideHandoffDueAt
#   @return [Object, nil]
#
# @!attribute [rw] height
#   @return [Float, nil]
#
# @!attribute [rw] historic_association_checked
#   @return [Boolean]
#
# @!attribute [rw] hold
#   @return [String]
#
# @!attribute [rw] holder_name_match
#   @return [Boolean, nil]
#
# @!attribute [rw] hours
#   @return [Hash]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] idempotency_key
#   @return [String, nil]
#
# @!attribute [rw] identifier_match
#   @return [Boolean, nil]
#
# @!attribute [rw] in_use
#   @return [Hash]
#
# @!attribute [rw] instruction
#   @return [String, nil]
#
# @!attribute [rw] invited
#   @return [Boolean]
#
# @!attribute [rw] key_check
#   @return [Object]
#
# @!attribute [rw] kind
#   @return [String]
#
# @!attribute [rw] label
#   @return [String]
#
# @!attribute [rw] lastMessageAt
#   @return [Object]
#
# @!attribute [rw] lastMessageAuthorType
#   @return [String]
#
# @!attribute [rw] lastMessagePreview
#   @return [String]
#
# @!attribute [rw] last_delivery_at
#   @return [Object]
#
# @!attribute [rw] last_error_code
#   @return [Object]
#
# @!attribute [rw] last_probe_at
#   @return [Object]
#
# @!attribute [rw] last_problem
#   @return [Object]
#
# @!attribute [rw] legal_name
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] make_active
#   @return [Boolean]
#
# @!attribute [rw] max_cents
#   @return [Float]
#
# @!attribute [rw] max_redemptions
#   @return [Object, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] messagesTruncated
#   @return [Boolean]
#
# @!attribute [rw] min_cents
#   @return [Float]
#
# @!attribute [rw] model
#   @return [String]
#
# @!attribute [rw] model_id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] note
#   @return [String, nil]
#
# @!attribute [rw] notes
#   @return [String, nil]
#
# @!attribute [rw] observed_at
#   @return [String, nil]
#
# @!attribute [rw] one_time_display
#   @return [Object]
#
# @!attribute [rw] outcome
#   @return [String]
#
# @!attribute [rw] ownerEmail
#   @return [String]
#
# @!attribute [rw] ownerLastReadAt
#   @return [Object]
#
# @!attribute [rw] ownerName
#   @return [String]
#
# @!attribute [rw] ownerUserId
#   @return [String]
#
# @!attribute [rw] owner_reason_code
#   @return [String, nil]
#
# @!attribute [rw] per_customer_limit
#   @return [Float, nil]
#
# @!attribute [rw] percent_off
#   @return [Float, nil]
#
# @!attribute [rw] phone
#   @return [String, nil]
#
# @!attribute [rw] policyVersion
#   @return [String]
#
# @!attribute [rw] priority
#   @return [String, nil]
#
# @!attribute [rw] provider
#   @return [String]
#
# @!attribute [rw] providers
#   @return [Array]
#
# @!attribute [rw] purpose_code
#   @return [String]
#
# @!attribute [rw] rank_bid_cents
#   @return [Integer]
#
# @!attribute [rw] reason
#   @return [String]
#
# @!attribute [rw] reason_category
#   @return [String, nil]
#
# @!attribute [rw] reason_code
#   @return [String, nil]
#
# @!attribute [rw] reason_detail
#   @return [String, nil]
#
# @!attribute [rw] reference
#   @return [String]
#
# @!attribute [rw] reject_reason
#   @return [String, nil]
#
# @!attribute [rw] related_case_id
#   @return [String, nil]
#
# @!attribute [rw] report_id
#   @return [Integer]
#
# @!attribute [rw] report_ids
#   @return [Array]
#
# @!attribute [rw] reserve_cents
#   @return [Float]
#
# @!attribute [rw] resolution_note
#   @return [String]
#
# @!attribute [rw] review_notes
#   @return [String, nil]
#
# @!attribute [rw] revision
#   @return [Integer]
#
# @!attribute [rw] role
#   @return [String]
#
# @!attribute [rw] rows
#   @return [Array]
#
# @!attribute [rw] run
#   @return [Hash]
#
# @!attribute [rw] schema_version
#   @return [String]
#
# @!attribute [rw] scope
#   @return [String]
#
# @!attribute [rw] search
#   @return [String, nil]
#
# @!attribute [rw] settings
#   @return [Hash]
#
# @!attribute [rw] signing_secret
#   @return [String]
#
# @!attribute [rw] size_bytes
#   @return [Float]
#
# @!attribute [rw] sla_due_at
#   @return [Object, nil]
#
# @!attribute [rw] source
#   @return [String]
#
# @!attribute [rw] source_authority
#   @return [String, nil]
#
# @!attribute [rw] source_category_slug
#   @return [String]
#
# @!attribute [rw] source_scope_checked
#   @return [Boolean]
#
# @!attribute [rw] source_url
#   @return [String, nil]
#
# @!attribute [rw] starts_at
#   @return [Object, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] storage
#   @return [String]
#
# @!attribute [rw] street_address
#   @return [String, nil]
#
# @!attribute [rw] subject
#   @return [String]
#
# @!attribute [rw] supportLastReadAt
#   @return [Object]
#
# @!attribute [rw] target_category
#   @return [String]
#
# @!attribute [rw] taxonomy_category_aliases
#   @return [Array]
#
# @!attribute [rw] ticketNumber
#   @return [String]
#
# @!attribute [rw] tier
#   @return [String, nil]
#
# @!attribute [rw] typing
#   @return [Boolean, nil]
#
# @!attribute [rw] until
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] updated_at
#   @return [String]
#
# @!attribute [rw] url
#   @return [String]
#
# @!attribute [rw] valid_until
#   @return [String, nil]
#
# @!attribute [rw] value
#   @return [String]
#
# @!attribute [rw] verification_method
#   @return [String]
#
# @!attribute [rw] verified_at
#   @return [Object]
#
# @!attribute [rw] verified_service_scope
#   @return [Array, nil]
#
# @!attribute [rw] version
#   @return [String, nil]
#
# @!attribute [rw] website
#   @return [String, nil]
#
# @!attribute [rw] width
#   @return [Float, nil]
#
# @!attribute [rw] window_hours
#   @return [Float, nil]
#
# @!attribute [rw] workload
#   @return [String]
#
# @!attribute [rw] zip
#   @return [String, nil]
Operation = Struct.new(
  :account_id,
  :action,
  :active,
  :active_or_good_standing,
  :ai_draft_id,
  :allowed_actions,
  :alt,
  :amount_cents,
  :amount_off_cents,
  :api_key,
  :applies_to_period,
  :applies_to_tier,
  :assigned_admin_user_id,
  :assigneeId,
  :assigneeLabel,
  :assigneeType,
  :assignee_id,
  :assignee_label,
  :assignee_type,
  :assistant_enabled,
  :base_url,
  :body,
  :businessId,
  :businessName,
  :business_id,
  :business_ids,
  :campaign_id,
  :campaign_ids,
  :caption,
  :case_status,
  :catalog,
  :category,
  :category_alias,
  :chunk_size,
  :city,
  :code,
  :confidence,
  :config,
  :confirm,
  :confirm_admin,
  :confirmation,
  :connection_id,
  :connection_kind,
  :content_type,
  :context_id,
  :context_type,
  :createdAt,
  :created_at,
  :credential_expires_at,
  :credential_id,
  :custom_wire,
  :data_base64,
  :decision,
  :dedupe_ack,
  :delivery_contract,
  :disabled_reason,
  :discount_type,
  :display_name,
  :disposition,
  :draft,
  :duration,
  :duration_in_months,
  :email,
  :enabled,
  :endpoint,
  :endpoint_id,
  :endpoint_url,
  :ends_at,
  :environment_fallback,
  :event_id,
  :event_types,
  :expected_allowed_actions,
  :expected_key_id,
  :expected_updated_at,
  :expected_version,
  :expires_at,
  :fact_id,
  :facts,
  :failure_count,
  :fields,
  :file_name,
  :guideHandoffAnsweredAt,
  :guideHandoffAt,
  :guideHandoffDueAt,
  :height,
  :historic_association_checked,
  :hold,
  :holder_name_match,
  :hours,
  :id,
  :idempotency_key,
  :identifier_match,
  :in_use,
  :instruction,
  :invited,
  :key_check,
  :kind,
  :label,
  :lastMessageAt,
  :lastMessageAuthorType,
  :lastMessagePreview,
  :last_delivery_at,
  :last_error_code,
  :last_probe_at,
  :last_problem,
  :legal_name,
  :limit,
  :make_active,
  :max_cents,
  :max_redemptions,
  :messages,
  :messagesTruncated,
  :min_cents,
  :model,
  :model_id,
  :name,
  :note,
  :notes,
  :observed_at,
  :one_time_display,
  :outcome,
  :ownerEmail,
  :ownerLastReadAt,
  :ownerName,
  :ownerUserId,
  :owner_reason_code,
  :per_customer_limit,
  :percent_off,
  :phone,
  :policyVersion,
  :priority,
  :provider,
  :providers,
  :purpose_code,
  :rank_bid_cents,
  :reason,
  :reason_category,
  :reason_code,
  :reason_detail,
  :reference,
  :reject_reason,
  :related_case_id,
  :report_id,
  :report_ids,
  :reserve_cents,
  :resolution_note,
  :review_notes,
  :revision,
  :role,
  :rows,
  :run,
  :schema_version,
  :scope,
  :search,
  :settings,
  :signing_secret,
  :size_bytes,
  :sla_due_at,
  :source,
  :source_authority,
  :source_category_slug,
  :source_scope_checked,
  :source_url,
  :starts_at,
  :state,
  :status,
  :storage,
  :street_address,
  :subject,
  :supportLastReadAt,
  :target_category,
  :taxonomy_category_aliases,
  :ticketNumber,
  :tier,
  :typing,
  :until,
  :updatedAt,
  :updated_at,
  :url,
  :valid_until,
  :value,
  :verification_method,
  :verified_at,
  :verified_service_scope,
  :version,
  :website,
  :width,
  :window_hours,
  :workload,
  :zip,
  keyword_init: true
)

# Request payload for Operation#create.
#
# @!attribute [rw] coupon_id
#   @return [String]
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] action
#   @return [String, nil]
#
# @!attribute [rw] active
#   @return [Boolean, nil]
#
# @!attribute [rw] active_or_good_standing
#   @return [Boolean, nil]
#
# @!attribute [rw] ai_draft_id
#   @return [String, nil]
#
# @!attribute [rw] allowed_actions
#   @return [Array]
#
# @!attribute [rw] alt
#   @return [String, nil]
#
# @!attribute [rw] amount_cents
#   @return [Float]
#
# @!attribute [rw] amount_off_cents
#   @return [Float, nil]
#
# @!attribute [rw] api_key
#   @return [String]
#
# @!attribute [rw] applies_to_period
#   @return [String, nil]
#
# @!attribute [rw] applies_to_tier
#   @return [Object, nil]
#
# @!attribute [rw] assigned_admin_user_id
#   @return [Object, nil]
#
# @!attribute [rw] assigneeId
#   @return [String]
#
# @!attribute [rw] assigneeLabel
#   @return [String]
#
# @!attribute [rw] assigneeType
#   @return [String]
#
# @!attribute [rw] assignee_id
#   @return [String, nil]
#
# @!attribute [rw] assignee_label
#   @return [String, nil]
#
# @!attribute [rw] assignee_type
#   @return [String, nil]
#
# @!attribute [rw] assistant_enabled
#   @return [Boolean]
#
# @!attribute [rw] base_url
#   @return [String, nil]
#
# @!attribute [rw] body
#   @return [String]
#
# @!attribute [rw] businessId
#   @return [String]
#
# @!attribute [rw] businessName
#   @return [String]
#
# @!attribute [rw] business_id
#   @return [Object, nil]
#
# @!attribute [rw] business_ids
#   @return [Array]
#
# @!attribute [rw] campaign_id
#   @return [String, nil]
#
# @!attribute [rw] campaign_ids
#   @return [Array, nil]
#
# @!attribute [rw] caption
#   @return [String, nil]
#
# @!attribute [rw] case_status
#   @return [String, nil]
#
# @!attribute [rw] catalog
#   @return [Array]
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] category_alias
#   @return [String, nil]
#
# @!attribute [rw] chunk_size
#   @return [Float, nil]
#
# @!attribute [rw] city
#   @return [String, nil]
#
# @!attribute [rw] code
#   @return [String]
#
# @!attribute [rw] confidence
#   @return [Float, nil]
#
# @!attribute [rw] config
#   @return [Hash]
#
# @!attribute [rw] confirm
#   @return [Boolean, nil]
#
# @!attribute [rw] confirm_admin
#   @return [Boolean, nil]
#
# @!attribute [rw] confirmation
#   @return [String]
#
# @!attribute [rw] connection_id
#   @return [String]
#
# @!attribute [rw] connection_kind
#   @return [String]
#
# @!attribute [rw] content_type
#   @return [String]
#
# @!attribute [rw] context_id
#   @return [String]
#
# @!attribute [rw] context_type
#   @return [String]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] credential_expires_at
#   @return [String, nil]
#
# @!attribute [rw] credential_id
#   @return [String]
#
# @!attribute [rw] custom_wire
#   @return [String, nil]
#
# @!attribute [rw] data_base64
#   @return [String]
#
# @!attribute [rw] decision
#   @return [String]
#
# @!attribute [rw] dedupe_ack
#   @return [Boolean, nil]
#
# @!attribute [rw] delivery_contract
#   @return [Hash]
#
# @!attribute [rw] disabled_reason
#   @return [Object]
#
# @!attribute [rw] discount_type
#   @return [String]
#
# @!attribute [rw] display_name
#   @return [String]
#
# @!attribute [rw] disposition
#   @return [String]
#
# @!attribute [rw] draft
#   @return [Hash]
#
# @!attribute [rw] duration
#   @return [String, nil]
#
# @!attribute [rw] duration_in_months
#   @return [Object, nil]
#
# @!attribute [rw] email
#   @return [String]
#
# @!attribute [rw] enabled
#   @return [Boolean]
#
# @!attribute [rw] endpoint
#   @return [Hash]
#
# @!attribute [rw] endpoint_id
#   @return [String]
#
# @!attribute [rw] endpoint_url
#   @return [String]
#
# @!attribute [rw] ends_at
#   @return [String]
#
# @!attribute [rw] environment_fallback
#   @return [Object]
#
# @!attribute [rw] event_id
#   @return [String]
#
# @!attribute [rw] event_types
#   @return [Array]
#
# @!attribute [rw] expected_allowed_actions
#   @return [Array]
#
# @!attribute [rw] expected_key_id
#   @return [String]
#
# @!attribute [rw] expected_updated_at
#   @return [String]
#
# @!attribute [rw] expected_version
#   @return [Float]
#
# @!attribute [rw] expires_at
#   @return [String, nil]
#
# @!attribute [rw] fact_id
#   @return [String]
#
# @!attribute [rw] facts
#   @return [Hash]
#
# @!attribute [rw] failure_count
#   @return [Integer]
#
# @!attribute [rw] fields
#   @return [Hash]
#
# @!attribute [rw] file_name
#   @return [String]
#
# @!attribute [rw] guideHandoffAnsweredAt
#   @return [Object, nil]
#
# @!attribute [rw] guideHandoffAt
#   @return [Object, nil]
#
# @!attribute [rw] guideHandoffDueAt
#   @return [Object, nil]
#
# @!attribute [rw] height
#   @return [Float, nil]
#
# @!attribute [rw] historic_association_checked
#   @return [Boolean]
#
# @!attribute [rw] hold
#   @return [String]
#
# @!attribute [rw] holder_name_match
#   @return [Boolean, nil]
#
# @!attribute [rw] hours
#   @return [Hash]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] idempotency_key
#   @return [String, nil]
#
# @!attribute [rw] identifier_match
#   @return [Boolean, nil]
#
# @!attribute [rw] in_use
#   @return [Hash]
#
# @!attribute [rw] instruction
#   @return [String, nil]
#
# @!attribute [rw] invited
#   @return [Boolean]
#
# @!attribute [rw] key_check
#   @return [Object]
#
# @!attribute [rw] kind
#   @return [String]
#
# @!attribute [rw] label
#   @return [String]
#
# @!attribute [rw] lastMessageAt
#   @return [Object]
#
# @!attribute [rw] lastMessageAuthorType
#   @return [String]
#
# @!attribute [rw] lastMessagePreview
#   @return [String]
#
# @!attribute [rw] last_delivery_at
#   @return [Object]
#
# @!attribute [rw] last_error_code
#   @return [Object]
#
# @!attribute [rw] last_probe_at
#   @return [Object]
#
# @!attribute [rw] last_problem
#   @return [Object]
#
# @!attribute [rw] legal_name
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] make_active
#   @return [Boolean]
#
# @!attribute [rw] max_cents
#   @return [Float]
#
# @!attribute [rw] max_redemptions
#   @return [Object, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] messagesTruncated
#   @return [Boolean]
#
# @!attribute [rw] min_cents
#   @return [Float]
#
# @!attribute [rw] model
#   @return [String]
#
# @!attribute [rw] model_id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] note
#   @return [String, nil]
#
# @!attribute [rw] notes
#   @return [String, nil]
#
# @!attribute [rw] observed_at
#   @return [String, nil]
#
# @!attribute [rw] one_time_display
#   @return [Object]
#
# @!attribute [rw] outcome
#   @return [String]
#
# @!attribute [rw] ownerEmail
#   @return [String]
#
# @!attribute [rw] ownerLastReadAt
#   @return [Object]
#
# @!attribute [rw] ownerName
#   @return [String]
#
# @!attribute [rw] ownerUserId
#   @return [String]
#
# @!attribute [rw] owner_reason_code
#   @return [String, nil]
#
# @!attribute [rw] per_customer_limit
#   @return [Float, nil]
#
# @!attribute [rw] percent_off
#   @return [Float, nil]
#
# @!attribute [rw] phone
#   @return [String, nil]
#
# @!attribute [rw] policyVersion
#   @return [String]
#
# @!attribute [rw] priority
#   @return [String, nil]
#
# @!attribute [rw] provider
#   @return [String]
#
# @!attribute [rw] providers
#   @return [Array]
#
# @!attribute [rw] purpose_code
#   @return [String]
#
# @!attribute [rw] rank_bid_cents
#   @return [Integer]
#
# @!attribute [rw] reason
#   @return [String, nil]
#
# @!attribute [rw] reason_category
#   @return [String, nil]
#
# @!attribute [rw] reason_code
#   @return [String, nil]
#
# @!attribute [rw] reason_detail
#   @return [String, nil]
#
# @!attribute [rw] reference
#   @return [String]
#
# @!attribute [rw] reject_reason
#   @return [String, nil]
#
# @!attribute [rw] related_case_id
#   @return [String, nil]
#
# @!attribute [rw] report_id
#   @return [Integer, nil]
#
# @!attribute [rw] report_ids
#   @return [Array]
#
# @!attribute [rw] reserve_cents
#   @return [Float]
#
# @!attribute [rw] resolution_note
#   @return [String]
#
# @!attribute [rw] review_notes
#   @return [String, nil]
#
# @!attribute [rw] revision
#   @return [Integer]
#
# @!attribute [rw] role
#   @return [String, nil]
#
# @!attribute [rw] rows
#   @return [Array]
#
# @!attribute [rw] run
#   @return [Hash]
#
# @!attribute [rw] schema_version
#   @return [String]
#
# @!attribute [rw] scope
#   @return [String]
#
# @!attribute [rw] search
#   @return [String, nil]
#
# @!attribute [rw] settings
#   @return [Hash]
#
# @!attribute [rw] signing_secret
#   @return [String]
#
# @!attribute [rw] size_bytes
#   @return [Float]
#
# @!attribute [rw] sla_due_at
#   @return [Object, nil]
#
# @!attribute [rw] source
#   @return [String, nil]
#
# @!attribute [rw] source_authority
#   @return [String, nil]
#
# @!attribute [rw] source_category_slug
#   @return [String, nil]
#
# @!attribute [rw] source_scope_checked
#   @return [Boolean]
#
# @!attribute [rw] source_url
#   @return [String, nil]
#
# @!attribute [rw] starts_at
#   @return [Object, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] storage
#   @return [String]
#
# @!attribute [rw] street_address
#   @return [String, nil]
#
# @!attribute [rw] subject
#   @return [String]
#
# @!attribute [rw] supportLastReadAt
#   @return [Object]
#
# @!attribute [rw] target_category
#   @return [String, nil]
#
# @!attribute [rw] taxonomy_category_aliases
#   @return [Array]
#
# @!attribute [rw] ticketNumber
#   @return [String]
#
# @!attribute [rw] tier
#   @return [String]
#
# @!attribute [rw] typing
#   @return [Boolean, nil]
#
# @!attribute [rw] until
#   @return [String, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object]
#
# @!attribute [rw] updated_at
#   @return [String]
#
# @!attribute [rw] url
#   @return [String]
#
# @!attribute [rw] valid_until
#   @return [String, nil]
#
# @!attribute [rw] value
#   @return [String]
#
# @!attribute [rw] verification_method
#   @return [String]
#
# @!attribute [rw] verified_at
#   @return [Object]
#
# @!attribute [rw] verified_service_scope
#   @return [Array, nil]
#
# @!attribute [rw] version
#   @return [String, nil]
#
# @!attribute [rw] website
#   @return [String, nil]
#
# @!attribute [rw] width
#   @return [Float, nil]
#
# @!attribute [rw] window_hours
#   @return [Float, nil]
#
# @!attribute [rw] workload
#   @return [String]
#
# @!attribute [rw] zip
#   @return [String, nil]
OperationCreateData = Struct.new(
  :coupon_id,
  :account_id,
  :action,
  :active,
  :active_or_good_standing,
  :ai_draft_id,
  :allowed_actions,
  :alt,
  :amount_cents,
  :amount_off_cents,
  :api_key,
  :applies_to_period,
  :applies_to_tier,
  :assigned_admin_user_id,
  :assigneeId,
  :assigneeLabel,
  :assigneeType,
  :assignee_id,
  :assignee_label,
  :assignee_type,
  :assistant_enabled,
  :base_url,
  :body,
  :businessId,
  :businessName,
  :business_id,
  :business_ids,
  :campaign_id,
  :campaign_ids,
  :caption,
  :case_status,
  :catalog,
  :category,
  :category_alias,
  :chunk_size,
  :city,
  :code,
  :confidence,
  :config,
  :confirm,
  :confirm_admin,
  :confirmation,
  :connection_id,
  :connection_kind,
  :content_type,
  :context_id,
  :context_type,
  :createdAt,
  :created_at,
  :credential_expires_at,
  :credential_id,
  :custom_wire,
  :data_base64,
  :decision,
  :dedupe_ack,
  :delivery_contract,
  :disabled_reason,
  :discount_type,
  :display_name,
  :disposition,
  :draft,
  :duration,
  :duration_in_months,
  :email,
  :enabled,
  :endpoint,
  :endpoint_id,
  :endpoint_url,
  :ends_at,
  :environment_fallback,
  :event_id,
  :event_types,
  :expected_allowed_actions,
  :expected_key_id,
  :expected_updated_at,
  :expected_version,
  :expires_at,
  :fact_id,
  :facts,
  :failure_count,
  :fields,
  :file_name,
  :guideHandoffAnsweredAt,
  :guideHandoffAt,
  :guideHandoffDueAt,
  :height,
  :historic_association_checked,
  :hold,
  :holder_name_match,
  :hours,
  :id,
  :idempotency_key,
  :identifier_match,
  :in_use,
  :instruction,
  :invited,
  :key_check,
  :kind,
  :label,
  :lastMessageAt,
  :lastMessageAuthorType,
  :lastMessagePreview,
  :last_delivery_at,
  :last_error_code,
  :last_probe_at,
  :last_problem,
  :legal_name,
  :limit,
  :make_active,
  :max_cents,
  :max_redemptions,
  :messages,
  :messagesTruncated,
  :min_cents,
  :model,
  :model_id,
  :name,
  :note,
  :notes,
  :observed_at,
  :one_time_display,
  :outcome,
  :ownerEmail,
  :ownerLastReadAt,
  :ownerName,
  :ownerUserId,
  :owner_reason_code,
  :per_customer_limit,
  :percent_off,
  :phone,
  :policyVersion,
  :priority,
  :provider,
  :providers,
  :purpose_code,
  :rank_bid_cents,
  :reason,
  :reason_category,
  :reason_code,
  :reason_detail,
  :reference,
  :reject_reason,
  :related_case_id,
  :report_id,
  :report_ids,
  :reserve_cents,
  :resolution_note,
  :review_notes,
  :revision,
  :role,
  :rows,
  :run,
  :schema_version,
  :scope,
  :search,
  :settings,
  :signing_secret,
  :size_bytes,
  :sla_due_at,
  :source,
  :source_authority,
  :source_category_slug,
  :source_scope_checked,
  :source_url,
  :starts_at,
  :state,
  :status,
  :storage,
  :street_address,
  :subject,
  :supportLastReadAt,
  :target_category,
  :taxonomy_category_aliases,
  :ticketNumber,
  :tier,
  :typing,
  :until,
  :updatedAt,
  :updated_at,
  :url,
  :valid_until,
  :value,
  :verification_method,
  :verified_at,
  :verified_service_scope,
  :version,
  :website,
  :width,
  :window_hours,
  :workload,
  :zip,
  keyword_init: true
)

# Request payload for Operation#update.
#
# @!attribute [rw] provider
#   @return [String]
#
# @!attribute [rw] api_key
#   @return [String, nil]
#
# @!attribute [rw] base_url
#   @return [String, nil]
#
# @!attribute [rw] category_alias
#   @return [String, nil]
#
# @!attribute [rw] connection_id
#   @return [String, nil]
#
# @!attribute [rw] custom_wire
#   @return [String, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] make_active
#   @return [Boolean, nil]
#
# @!attribute [rw] max_cents
#   @return [Float, nil]
#
# @!attribute [rw] min_cents
#   @return [Float, nil]
#
# @!attribute [rw] model
#   @return [String, nil]
#
# @!attribute [rw] model_id
#   @return [String, nil]
#
# @!attribute [rw] reason
#   @return [String, nil]
#
# @!attribute [rw] reserve_cents
#   @return [Float, nil]
OperationUpdateData = Struct.new(
  :provider,
  :api_key,
  :base_url,
  :category_alias,
  :connection_id,
  :custom_wire,
  :enabled,
  :make_active,
  :max_cents,
  :min_cents,
  :model,
  :model_id,
  :reason,
  :reserve_cents,
  keyword_init: true
)

# Request payload for Operation#patch.
#
# @!attribute [rw] candidate_id
#   @return [String]
#
# @!attribute [rw] assigned_admin_user_id
#   @return [Object, nil]
#
# @!attribute [rw] case_status
#   @return [String, nil]
#
# @!attribute [rw] confidence
#   @return [Float, nil]
#
# @!attribute [rw] expected_version
#   @return [Float, nil]
#
# @!attribute [rw] notes
#   @return [String, nil]
#
# @!attribute [rw] priority
#   @return [String, nil]
#
# @!attribute [rw] reason_code
#   @return [String, nil]
#
# @!attribute [rw] review_notes
#   @return [String, nil]
#
# @!attribute [rw] sla_due_at
#   @return [Object, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] target_category
#   @return [String, nil]
OperationPatchData = Struct.new(
  :candidate_id,
  :assigned_admin_user_id,
  :case_status,
  :confidence,
  :expected_version,
  :notes,
  :priority,
  :reason_code,
  :review_notes,
  :sla_due_at,
  :status,
  :target_category,
  keyword_init: true
)

# Request payload for Operation#remove.
#
# @!attribute [rw] access_context_id
#   @return [String]
OperationRemoveMatch = Struct.new(
  :access_context_id,
  keyword_init: true
)

# OwnerNotification entity data model.
#
# @!attribute [rw] businessId
#   @return [String]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] dedupeKey
#   @return [String]
#
# @!attribute [rw] emailStatus
#   @return [String]
#
# @!attribute [rw] eventType
#   @return [Object]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] readAt
#   @return [Object]
#
# @!attribute [rw] resourceId
#   @return [String]
#
# @!attribute [rw] resourceKind
#   @return [Object]
#
# @!attribute [rw] resourceUrl
#   @return [String]
#
# @!attribute [rw] summary
#   @return [String]
#
# @!attribute [rw] webhookStatus
#   @return [String]
OwnerNotification = Struct.new(
  :businessId,
  :createdAt,
  :dedupeKey,
  :emailStatus,
  :eventType,
  :id,
  :readAt,
  :resourceId,
  :resourceKind,
  :resourceUrl,
  :summary,
  :webhookStatus,
  keyword_init: true
)

# Request payload for OwnerNotification#create.
#
# @!attribute [rw] notification_id
#   @return [String]
OwnerNotificationCreateData = Struct.new(
  :notification_id,
  keyword_init: true
)

# OwnerNotificationSetting entity data model.
#
# @!attribute [rw] businessId
#   @return [String]
#
# @!attribute [rw] business_id
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] emailEnabled
#   @return [Boolean]
#
# @!attribute [rw] email_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] eventTypeSubscriptions
#   @return [Array]
#
# @!attribute [rw] event_types
#   @return [Array, nil]
#
# @!attribute [rw] updatedAt
#   @return [String]
#
# @!attribute [rw] webhookEnabled
#   @return [Boolean]
#
# @!attribute [rw] webhook_enabled
#   @return [Boolean, nil]
OwnerNotificationSetting = Struct.new(
  :businessId,
  :business_id,
  :createdAt,
  :emailEnabled,
  :email_enabled,
  :eventTypeSubscriptions,
  :event_types,
  :updatedAt,
  :webhookEnabled,
  :webhook_enabled,
  keyword_init: true
)

# Request payload for OwnerNotificationSetting#create.
#
# @!attribute [rw] business_id
#   @return [String, nil]
#
# @!attribute [rw] email_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] event_types
#   @return [Array, nil]
#
# @!attribute [rw] webhook_enabled
#   @return [Boolean, nil]
OwnerNotificationSettingCreateData = Struct.new(
  :business_id,
  :email_enabled,
  :event_types,
  :webhook_enabled,
  keyword_init: true
)

# OwnerWebhookEndpoint entity data model.
#
# @!attribute [rw] businessId
#   @return [String]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] enabled
#   @return [Boolean]
#
# @!attribute [rw] eventTypeSubscriptions
#   @return [Array]
#
# @!attribute [rw] failureCount
#   @return [Float]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] lastDeliveryAt
#   @return [Object]
#
# @!attribute [rw] updatedAt
#   @return [String]
#
# @!attribute [rw] url
#   @return [String]
OwnerWebhookEndpoint = Struct.new(
  :businessId,
  :createdAt,
  :enabled,
  :eventTypeSubscriptions,
  :failureCount,
  :id,
  :lastDeliveryAt,
  :updatedAt,
  :url,
  keyword_init: true
)

# Request payload for OwnerWebhookEndpoint#create.
#
# @!attribute [rw] webhook_id
#   @return [String]
OwnerWebhookEndpointCreateData = Struct.new(
  :webhook_id,
  keyword_init: true
)

# OwnerWebhookRegistration entity data model.
#
# @!attribute [rw] business_id
#   @return [String, nil]
#
# @!attribute [rw] endpoint
#   @return [Hash]
#
# @!attribute [rw] event_types
#   @return [Array, nil]
#
# @!attribute [rw] one_time_display
#   @return [Object]
#
# @!attribute [rw] signing_secret
#   @return [String]
#
# @!attribute [rw] status
#   @return [Object]
#
# @!attribute [rw] url
#   @return [String]
OwnerWebhookRegistration = Struct.new(
  :business_id,
  :endpoint,
  :event_types,
  :one_time_display,
  :signing_secret,
  :status,
  :url,
  keyword_init: true
)

# Request payload for OwnerWebhookRegistration#create.
#
# @!attribute [rw] business_id
#   @return [String, nil]
#
# @!attribute [rw] event_types
#   @return [Array, nil]
#
# @!attribute [rw] url
#   @return [String]
OwnerWebhookRegistrationCreateData = Struct.new(
  :business_id,
  :event_types,
  :url,
  keyword_init: true
)

# Pricing entity data model.
#
# @!attribute [rw] billing
#   @return [Hash]
#
# @!attribute [rw] branch_add_ons
#   @return [Array]
#
# @!attribute [rw] currency
#   @return [Object]
#
# @!attribute [rw] generated_at
#   @return [String]
#
# @!attribute [rw] neutrality
#   @return [String]
#
# @!attribute [rw] plans
#   @return [Array]
#
# @!attribute [rw] promotions
#   @return [Array]
#
# @!attribute [rw] published_at
#   @return [Object]
#
# @!attribute [rw] radius_extension
#   @return [Hash]
#
# @!attribute [rw] revision_id
#   @return [Object]
#
# @!attribute [rw] source
#   @return [Object]
#
# @!attribute [rw] trust_model_version
#   @return [Object]
Pricing = Struct.new(
  :billing,
  :branch_add_ons,
  :currency,
  :generated_at,
  :neutrality,
  :plans,
  :promotions,
  :published_at,
  :radius_extension,
  :revision_id,
  :source,
  :trust_model_version,
  keyword_init: true
)

# Request payload for Pricing#list.
#
# @!attribute [rw] billing
#   @return [Hash, nil]
#
# @!attribute [rw] branch_add_ons
#   @return [Array, nil]
#
# @!attribute [rw] currency
#   @return [Object, nil]
#
# @!attribute [rw] generated_at
#   @return [String, nil]
#
# @!attribute [rw] neutrality
#   @return [String, nil]
#
# @!attribute [rw] plans
#   @return [Array, nil]
#
# @!attribute [rw] promotions
#   @return [Array, nil]
#
# @!attribute [rw] published_at
#   @return [Object, nil]
#
# @!attribute [rw] radius_extension
#   @return [Hash, nil]
#
# @!attribute [rw] revision_id
#   @return [Object, nil]
#
# @!attribute [rw] source
#   @return [Object, nil]
#
# @!attribute [rw] trust_model_version
#   @return [Object, nil]
PricingListMatch = Struct.new(
  :billing,
  :branch_add_ons,
  :currency,
  :generated_at,
  :neutrality,
  :plans,
  :promotions,
  :published_at,
  :radius_extension,
  :revision_id,
  :source,
  :trust_model_version,
  keyword_init: true
)

# PromoteVerifiedTransaction entity data model.
#
# @!attribute [rw] business_id
#   @return [String]
#
# @!attribute [rw] evidence_id
#   @return [String]
#
# @!attribute [rw] interaction_id
#   @return [String]
#
# @!attribute [rw] ok
#   @return [Object]
#
# @!attribute [rw] review_upgraded
#   @return [Boolean]
#
# @!attribute [rw] status
#   @return [Object]
#
# @!attribute [rw] trust_weight
#   @return [Object]
#
# @!attribute [rw] verified
#   @return [Boolean]
PromoteVerifiedTransaction = Struct.new(
  :business_id,
  :evidence_id,
  :interaction_id,
  :ok,
  :review_upgraded,
  :status,
  :trust_weight,
  :verified,
  keyword_init: true
)

# Request payload for PromoteVerifiedTransaction#create.
#
# @!attribute [rw] business_id
#   @return [String]
#
# @!attribute [rw] evidence_id
#   @return [String]
PromoteVerifiedTransactionCreateData = Struct.new(
  :business_id,
  :evidence_id,
  keyword_init: true
)

# PublicContent entity data model.
#
# @!attribute [rw] blocks
#   @return [Hash]
#
# @!attribute [rw] generated_at
#   @return [String]
#
# @!attribute [rw] source
#   @return [Object]
#
# @!attribute [rw] trust_model_version
#   @return [Object]
PublicContent = Struct.new(
  :blocks,
  :generated_at,
  :source,
  :trust_model_version,
  keyword_init: true
)

# Request payload for PublicContent#load.
#
# @!attribute [rw] blocks
#   @return [Hash, nil]
#
# @!attribute [rw] generated_at
#   @return [String, nil]
#
# @!attribute [rw] source
#   @return [Object, nil]
#
# @!attribute [rw] trust_model_version
#   @return [Object, nil]
PublicContentLoadMatch = Struct.new(
  :blocks,
  :generated_at,
  :source,
  :trust_model_version,
  keyword_init: true
)

# Recommend entity data model.
#
# @!attribute [rw] candidate_window_truncated
#   @return [Boolean]
#
# @!attribute [rw] commercial_influence
#   @return [String]
#
# @!attribute [rw] display_count
#   @return [Integer, nil]
#
# @!attribute [rw] endpoint
#   @return [Object]
#
# @!attribute [rw] fallback_registry
#   @return [Array]
#
# @!attribute [rw] generated_at
#   @return [String]
#
# @!attribute [rw] has_more
#   @return [Boolean]
#
# @!attribute [rw] listed
#   @return [Array]
#
# @!attribute [rw] location_context
#   @return [Object]
#
# @!attribute [rw] ordering
#   @return [Object]
#
# @!attribute [rw] policy
#   @return [String]
#
# @!attribute [rw] presentation_guidance
#   @return [String, nil]
#
# @!attribute [rw] query
#   @return [Hash]
#
# @!attribute [rw] ranking_policy
#   @return [String]
#
# @!attribute [rw] registry_count_basis
#   @return [String]
#
# @!attribute [rw] registry_count_observed_at
#   @return [Object]
#
# @!attribute [rw] registry_name
#   @return [Object]
#
# @!attribute [rw] results
#   @return [Array]
#
# @!attribute [rw] returned_count
#   @return [Integer]
#
# @!attribute [rw] reviewed_registry
#   @return [Array]
#
# @!attribute [rw] schema_version
#   @return [Object]
#
# @!attribute [rw] search_intent
#   @return [Hash]
#
# @!attribute [rw] suggestions
#   @return [Hash, nil]
#
# @!attribute [rw] total_matches
#   @return [Integer, nil]
#
# @!attribute [rw] total_matches_basis
#   @return [Integer, nil]
#
# @!attribute [rw] total_registry_records
#   @return [Integer]
#
# @!attribute [rw] trust_model_version
#   @return [Object]
#
# @!attribute [rw] verified
#   @return [Array]
#
# @!attribute [rw] visible_candidate_records
#   @return [Integer, nil]
Recommend = Struct.new(
  :candidate_window_truncated,
  :commercial_influence,
  :display_count,
  :endpoint,
  :fallback_registry,
  :generated_at,
  :has_more,
  :listed,
  :location_context,
  :ordering,
  :policy,
  :presentation_guidance,
  :query,
  :ranking_policy,
  :registry_count_basis,
  :registry_count_observed_at,
  :registry_name,
  :results,
  :returned_count,
  :reviewed_registry,
  :schema_version,
  :search_intent,
  :suggestions,
  :total_matches,
  :total_matches_basis,
  :total_registry_records,
  :trust_model_version,
  :verified,
  :visible_candidate_records,
  keyword_init: true
)

# Request payload for Recommend#list.
#
# @!attribute [rw] allowed_action
#   @return [String, nil]
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] city
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] location_handoff_id
#   @return [String, nil]
#
# @!attribute [rw] location_proof_id
#   @return [String, nil]
#
# @!attribute [rw] location_selection
#   @return [String, nil]
#
# @!attribute [rw] q
#   @return [String, nil]
#
# @!attribute [rw] radius_mile
#   @return [Float, nil]
#
# @!attribute [rw] saved_location_ref
#   @return [String, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] zip
#   @return [String, nil]
RecommendListMatch = Struct.new(
  :allowed_action,
  :category,
  :city,
  :limit,
  :location_handoff_id,
  :location_proof_id,
  :location_selection,
  :q,
  :radius_mile,
  :saved_location_ref,
  :state,
  :zip,
  keyword_init: true
)

# Review entity data model.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] attestation_accepted
#   @return [Boolean]
#
# @!attribute [rw] customer_confirmed
#   @return [Boolean, nil]
#
# @!attribute [rw] message
#   @return [String]
#
# @!attribute [rw] rating
#   @return [Integer]
#
# @!attribute [rw] service_date
#   @return [Object, nil]
#
# @!attribute [rw] subject
#   @return [String]
#
# @!attribute [rw] target_business_id
#   @return [String]
Review = Struct.new(
  :account_id,
  :attestation_accepted,
  :customer_confirmed,
  :message,
  :rating,
  :service_date,
  :subject,
  :target_business_id,
  keyword_init: true
)

# Request payload for Review#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] attestation_accepted
#   @return [Boolean]
#
# @!attribute [rw] customer_confirmed
#   @return [Boolean, nil]
#
# @!attribute [rw] message
#   @return [String]
#
# @!attribute [rw] rating
#   @return [Integer]
#
# @!attribute [rw] service_date
#   @return [Object, nil]
#
# @!attribute [rw] subject
#   @return [String]
#
# @!attribute [rw] target_business_id
#   @return [String]
ReviewCreateData = Struct.new(
  :account_id,
  :attestation_accepted,
  :customer_confirmed,
  :message,
  :rating,
  :service_date,
  :subject,
  :target_business_id,
  keyword_init: true
)

# Revoke entity data model.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] key_id
#   @return [String]
#
# @!attribute [rw] revoked_by
#   @return [String]
#
# @!attribute [rw] status
#   @return [Object]
Revoke = Struct.new(
  :account_id,
  :key_id,
  :revoked_by,
  :status,
  keyword_init: true
)

# Request payload for Revoke#create.
#
# @!attribute [rw] agent_key_id
#   @return [String]
RevokeCreateData = Struct.new(
  :agent_key_id,
  keyword_init: true
)

# SaveBusiness entity data model.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] business_id
#   @return [String]
#
# @!attribute [rw] business_name
#   @return [String]
#
# @!attribute [rw] business_source
#   @return [String]
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] city
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] notes
#   @return [String, nil]
#
# @!attribute [rw] saved_business_id
#   @return [String]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [Object]
SaveBusiness = Struct.new(
  :account_id,
  :business_id,
  :business_name,
  :business_source,
  :category,
  :city,
  :created_at,
  :notes,
  :saved_business_id,
  :state,
  :status,
  keyword_init: true
)

# Request payload for SaveBusiness#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] business_id
#   @return [String]
#
# @!attribute [rw] business_name
#   @return [String]
#
# @!attribute [rw] business_source
#   @return [String]
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] city
#   @return [String, nil]
#
# @!attribute [rw] notes
#   @return [String, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
SaveBusinessCreateData = Struct.new(
  :account_id,
  :business_id,
  :business_name,
  :business_source,
  :category,
  :city,
  :notes,
  :state,
  keyword_init: true
)

# SavedBusiness entity data model.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] count
#   @return [Float]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] saved_businesses
#   @return [Array]
SavedBusiness = Struct.new(
  :account_id,
  :count,
  :limit,
  :saved_businesses,
  keyword_init: true
)

# Request payload for SavedBusiness#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] limit
#   @return [Float, nil]
SavedBusinessCreateData = Struct.new(
  :account_id,
  :limit,
  keyword_init: true
)

# SavedLocation entity data model.
#
# @!attribute [rw] available
#   @return [Boolean]
#
# @!attribute [rw] coordinates_returned
#   @return [Object]
#
# @!attribute [rw] kind
#   @return [Object]
#
# @!attribute [rw] label
#   @return [Object]
#
# @!attribute [rw] location_proof_id
#   @return [String, nil]
#
# @!attribute [rw] reach_precision
#   @return [Object]
#
# @!attribute [rw] saved_location_ref
#   @return [Object]
#
# @!attribute [rw] updated_at
#   @return [Object]
#
# @!attribute [rw] zip
#   @return [String, nil]
SavedLocation = Struct.new(
  :available,
  :coordinates_returned,
  :kind,
  :label,
  :location_proof_id,
  :reach_precision,
  :saved_location_ref,
  :updated_at,
  :zip,
  keyword_init: true
)

# Request payload for SavedLocation#update.
#
# @!attribute [rw] label
#   @return [Object, nil]
#
# @!attribute [rw] location_proof_id
#   @return [String, nil]
#
# @!attribute [rw] zip
#   @return [String, nil]
SavedLocationUpdateData = Struct.new(
  :label,
  :location_proof_id,
  :zip,
  keyword_init: true
)

# Request payload for SavedLocation#remove.
#
# @!attribute [rw] available
#   @return [Boolean, nil]
#
# @!attribute [rw] coordinates_returned
#   @return [Object, nil]
#
# @!attribute [rw] kind
#   @return [Object, nil]
#
# @!attribute [rw] label
#   @return [Object, nil]
#
# @!attribute [rw] location_proof_id
#   @return [String, nil]
#
# @!attribute [rw] reach_precision
#   @return [Object, nil]
#
# @!attribute [rw] saved_location_ref
#   @return [Object, nil]
#
# @!attribute [rw] updated_at
#   @return [Object, nil]
#
# @!attribute [rw] zip
#   @return [String, nil]
SavedLocationRemoveMatch = Struct.new(
  :available,
  :coordinates_returned,
  :kind,
  :label,
  :location_proof_id,
  :reach_precision,
  :saved_location_ref,
  :updated_at,
  :zip,
  keyword_init: true
)

# Search entity data model.
#
# @!attribute [rw] candidate_window_truncated
#   @return [Boolean]
#
# @!attribute [rw] commercial_influence
#   @return [String]
#
# @!attribute [rw] display_count
#   @return [Integer, nil]
#
# @!attribute [rw] generated_at
#   @return [String]
#
# @!attribute [rw] has_more
#   @return [Boolean]
#
# @!attribute [rw] location_context
#   @return [Object]
#
# @!attribute [rw] next_cursor
#   @return [Object]
#
# @!attribute [rw] page_limit
#   @return [Integer]
#
# @!attribute [rw] policy
#   @return [String]
#
# @!attribute [rw] presentation_guidance
#   @return [String, nil]
#
# @!attribute [rw] query
#   @return [Hash]
#
# @!attribute [rw] ranking_policy
#   @return [String]
#
# @!attribute [rw] registry_count_basis
#   @return [String]
#
# @!attribute [rw] registry_count_observed_at
#   @return [Object]
#
# @!attribute [rw] registry_name
#   @return [Object]
#
# @!attribute [rw] results
#   @return [Array]
#
# @!attribute [rw] returned_count
#   @return [Integer]
#
# @!attribute [rw] schema_version
#   @return [Object]
#
# @!attribute [rw] search_intent
#   @return [Hash]
#
# @!attribute [rw] suggestions
#   @return [Hash, nil]
#
# @!attribute [rw] total_matches
#   @return [Integer, nil]
#
# @!attribute [rw] total_matches_basis
#   @return [Integer, nil]
#
# @!attribute [rw] total_registry_records
#   @return [Integer]
#
# @!attribute [rw] trust_model_version
#   @return [Object]
#
# @!attribute [rw] visible_candidate_records
#   @return [Integer, nil]
Search = Struct.new(
  :candidate_window_truncated,
  :commercial_influence,
  :display_count,
  :generated_at,
  :has_more,
  :location_context,
  :next_cursor,
  :page_limit,
  :policy,
  :presentation_guidance,
  :query,
  :ranking_policy,
  :registry_count_basis,
  :registry_count_observed_at,
  :registry_name,
  :results,
  :returned_count,
  :schema_version,
  :search_intent,
  :suggestions,
  :total_matches,
  :total_matches_basis,
  :total_registry_records,
  :trust_model_version,
  :visible_candidate_records,
  keyword_init: true
)

# Request payload for Search#list.
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] city
#   @return [String, nil]
#
# @!attribute [rw] consumer_reach
#   @return [Boolean, nil]
#
# @!attribute [rw] cursor
#   @return [String, nil]
#
# @!attribute [rw] include_directory_listing
#   @return [Boolean, nil]
#
# @!attribute [rw] intent
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] location_handoff_id
#   @return [String, nil]
#
# @!attribute [rw] location_proof_id
#   @return [String, nil]
#
# @!attribute [rw] location_selection
#   @return [String, nil]
#
# @!attribute [rw] paid_only
#   @return [Boolean, nil]
#
# @!attribute [rw] q
#   @return [String, nil]
#
# @!attribute [rw] radius_mile
#   @return [Float, nil]
#
# @!attribute [rw] saved_location_ref
#   @return [String, nil]
#
# @!attribute [rw] search_intent
#   @return [String, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] zip
#   @return [String, nil]
SearchListMatch = Struct.new(
  :category,
  :city,
  :consumer_reach,
  :cursor,
  :include_directory_listing,
  :intent,
  :limit,
  :location_handoff_id,
  :location_proof_id,
  :location_selection,
  :paid_only,
  :q,
  :radius_mile,
  :saved_location_ref,
  :search_intent,
  :state,
  :zip,
  keyword_init: true
)

# Suggest entity data model.
#
# @!attribute [rw] categories
#   @return [Array]
#
# @!attribute [rw] names
#   @return [Array]
#
# @!attribute [rw] query
#   @return [String]
#
# @!attribute [rw] schema_version
#   @return [Object]
Suggest = Struct.new(
  :categories,
  :names,
  :query,
  :schema_version,
  keyword_init: true
)

# Request payload for Suggest#list.
#
# @!attribute [rw] q
#   @return [String, nil]
SuggestListMatch = Struct.new(
  :q,
  keyword_init: true
)

# SupportInternalNote entity data model.
#
# @!attribute [rw] authorLabel
#   @return [String]
#
# @!attribute [rw] body
#   @return [String]
#
# @!attribute [rw] createdAt
#   @return [Object]
#
# @!attribute [rw] id
#   @return [String]
SupportInternalNote = Struct.new(
  :authorLabel,
  :body,
  :createdAt,
  :id,
  keyword_init: true
)

# Request payload for SupportInternalNote#create.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] body
#   @return [String]
SupportInternalNoteCreateData = Struct.new(
  :id,
  :body,
  keyword_init: true
)

# SupportWorkflow entity data model.
#
# @!attribute [rw] category
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] priority
#   @return [Object, nil]
#
# @!attribute [rw] waiting_on
#   @return [Object, nil]
SupportWorkflow = Struct.new(
  :category,
  :id,
  :priority,
  :waiting_on,
  keyword_init: true
)

# Request payload for SupportWorkflow#create.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] category
#   @return [Object, nil]
#
# @!attribute [rw] priority
#   @return [Object, nil]
#
# @!attribute [rw] waiting_on
#   @return [Object, nil]
SupportWorkflowCreateData = Struct.new(
  :id,
  :category,
  :priority,
  :waiting_on,
  keyword_init: true
)

# TaxonomySuggestion entity data model.
#
# @!attribute [rw] alias
#   @return [String]
#
# @!attribute [rw] path_titles
#   @return [Array]
#
# @!attribute [rw] title
#   @return [String]
TaxonomySuggestion = Struct.new(
  :alias,
  :path_titles,
  :title,
  keyword_init: true
)

# Request payload for TaxonomySuggestion#list.
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] q
#   @return [String, nil]
TaxonomySuggestionListMatch = Struct.new(
  :limit,
  :q,
  keyword_init: true
)

# TrustCard entity data model.
#
# @!attribute [rw] agency
#   @return [String]
#
# @!attribute [rw] collected_at
#   @return [String]
#
# @!attribute [rw] disclosure
#   @return [String]
#
# @!attribute [rw] fact_id
#   @return [String]
#
# @!attribute [rw] matched_on
#   @return [String]
#
# @!attribute [rw] reason
#   @return [String, nil]
#
# @!attribute [rw] record_kind
#   @return [String]
#
# @!attribute [rw] record_number
#   @return [Object]
#
# @!attribute [rw] record_scope
#   @return [String]
#
# @!attribute [rw] record_type
#   @return [String]
#
# @!attribute [rw] recorded_expiry
#   @return [Object]
#
# @!attribute [rw] result
#   @return [String]
#
# @!attribute [rw] source_label
#   @return [String]
#
# @!attribute [rw] source_url
#   @return [String]
#
# @!attribute [rw] state
#   @return [String]
#
# @!attribute [rw] status_on_record
#   @return [String]
TrustCard = Struct.new(
  :agency,
  :collected_at,
  :disclosure,
  :fact_id,
  :matched_on,
  :reason,
  :record_kind,
  :record_number,
  :record_scope,
  :record_type,
  :recorded_expiry,
  :result,
  :source_label,
  :source_url,
  :state,
  :status_on_record,
  keyword_init: true
)

# Request payload for TrustCard#load.
#
# @!attribute [rw] schema_name
#   @return [String]
TrustCardLoadMatch = Struct.new(
  :schema_name,
  keyword_init: true
)

# Request payload for TrustCard#list.
#
# @!attribute [rw] business_id
#   @return [String]
TrustCardListMatch = Struct.new(
  :business_id,
  keyword_init: true
)

# Request payload for TrustCard#create.
#
# @!attribute [rw] business_id
#   @return [String]
#
# @!attribute [rw] license_record_id
#   @return [String]
#
# @!attribute [rw] reason
#   @return [String, nil]
TrustCardCreateData = Struct.new(
  :business_id,
  :license_record_id,
  :reason,
  keyword_init: true
)

# UnsaveBusiness entity data model.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] business_id
#   @return [String]
#
# @!attribute [rw] removed
#   @return [Boolean]
#
# @!attribute [rw] status
#   @return [Object]
UnsaveBusiness = Struct.new(
  :account_id,
  :business_id,
  :removed,
  :status,
  keyword_init: true
)

# Request payload for UnsaveBusiness#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] business_id
#   @return [String]
UnsaveBusinessCreateData = Struct.new(
  :account_id,
  :business_id,
  keyword_init: true
)

# UpdateAgentBillingAccount entity data model.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] billing_account
#   @return [Hash]
#
# @!attribute [rw] billing_status
#   @return [String, nil]
#
# @!attribute [rw] included_actions
#   @return [Float, nil]
#
# @!attribute [rw] monthly_fee_cents
#   @return [Float, nil]
#
# @!attribute [rw] overage_cents
#   @return [Float, nil]
#
# @!attribute [rw] plan
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [Object]
#
# @!attribute [rw] updated_by
#   @return [String]
UpdateAgentBillingAccount = Struct.new(
  :account_id,
  :billing_account,
  :billing_status,
  :included_actions,
  :monthly_fee_cents,
  :overage_cents,
  :plan,
  :status,
  :updated_by,
  keyword_init: true
)

# Request payload for UpdateAgentBillingAccount#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] billing_status
#   @return [String, nil]
#
# @!attribute [rw] included_actions
#   @return [Float, nil]
#
# @!attribute [rw] monthly_fee_cents
#   @return [Float, nil]
#
# @!attribute [rw] overage_cents
#   @return [Float, nil]
#
# @!attribute [rw] plan
#   @return [String, nil]
UpdateAgentBillingAccountCreateData = Struct.new(
  :account_id,
  :billing_status,
  :included_actions,
  :monthly_fee_cents,
  :overage_cents,
  :plan,
  keyword_init: true
)

# WithdrawJobApplication entity data model.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] already_withdrawn
#   @return [Boolean]
#
# @!attribute [rw] application
#   @return [Hash]
#
# @!attribute [rw] application_id
#   @return [String]
#
# @!attribute [rw] status
#   @return [Object]
WithdrawJobApplication = Struct.new(
  :account_id,
  :already_withdrawn,
  :application,
  :application_id,
  :status,
  keyword_init: true
)

# Request payload for WithdrawJobApplication#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] application_id
#   @return [String]
WithdrawJobApplicationCreateData = Struct.new(
  :account_id,
  :application_id,
  keyword_init: true
)

