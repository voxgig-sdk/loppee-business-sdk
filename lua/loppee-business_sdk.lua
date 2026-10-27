-- LoppeeBusiness SDK

local json = require("dkjson")
local vs = require("utility.struct.struct")
local Utility = require("core.utility_type")
local Spec = require("core.spec")
local helpers = require("core.helpers")
local unreadable_body = require("utility.unreadable_body")

-- Load utility registration (populates Utility._registrar)
require("utility.register")

-- Typed-model annotations (LuaLS ---@class); empty at runtime.
require("loppee-business_types")

-- Load features
local BaseFeature = require("feature.base_feature")
local features_factory = require("features")


local LoppeeBusinessSDK = {}

-- The options and the root context both hold the credential. They live in
-- a side table rather than in the client, so a dump or an encoder walking
-- the client's fields never reaches them; `sdk.options` still reads and
-- writes through the metamethods, and options_map() is the documented way
-- to read the credential back.
local HIDDEN = { options = true, _rootctx = true }
local SLOTS = setmetatable({}, { __mode = "k" })

LoppeeBusinessSDK.__index = function(self, key)
  local member = rawget(LoppeeBusinessSDK, key)
  if member ~= nil then
    return member
  end
  if HIDDEN[key] then
    local slots = SLOTS[self]
    return slots ~= nil and slots[key] or nil
  end
  return nil
end

LoppeeBusinessSDK.__newindex = function(self, key, val)
  if HIDDEN[key] then
    local slots = SLOTS[self]
    if slots == nil then
      slots = {}
      SLOTS[self] = slots
    end
    slots[key] = val
  else
    rawset(self, key, val)
  end
end

-- The client's own record: what a serialiser or clean's snapshot sees in
-- place of the client, so neither reaches the options through it.
function LoppeeBusinessSDK:to_record()
  return { sdk = "LoppeeBusiness", mode = self.mode }
end

LoppeeBusinessSDK.__tostring = function(self)
  return "LoppeeBusinessSDK mode=" .. tostring(self.mode)
end

LoppeeBusinessSDK.__tojson = function(self)
  return json.encode(self:to_record())
end


local function _make_feature(name)
  local factory = features_factory[name]
  if factory ~= nil then
    return factory()
  end
  return features_factory.base()
end

LoppeeBusinessSDK._make_feature = _make_feature


function LoppeeBusinessSDK.new(options)
  local self = setmetatable({}, LoppeeBusinessSDK)
  self.mode = "live"
  self.features = {}
  self.options = nil

  local utility = Utility.new()
  self._utility = utility

  local config = require("config_shared")()

  self._rootctx = utility.make_context({
    client = self,
    utility = utility,
    config = config,
    options = options or {},
    shared = {},
  }, nil)

  self.options = utility.make_options(self._rootctx)

  if vs.getpath(self.options, "feature.test.active") == true then
    self.mode = "test"
  end

  self._rootctx.options = self.options

  -- Add features in the resolved order (make_options puts an explicit list
  -- order first, else defaults to test-first). Ordering matters: the `test`
  -- feature installs the base mock transport and the transport features
  -- (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
  -- must be added before them to sit at the base of the chain.
  local feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
  if feature_opts ~= nil then
    local featureorder = vs.getpath(self.options, "__derived__.featureorder")
    if type(featureorder) == "table" then
      for _, fname in ipairs(featureorder) do
        local fopts = helpers.to_map(feature_opts[fname])
        if fopts ~= nil and fopts["active"] == true then
          utility.feature_add(self._rootctx, _make_feature(fname))
        end
      end
    end
  end

  -- Add extension features.
  local extend = vs.getprop(self.options, "extend")
  if type(extend) == "table" then
    for _, f in ipairs(extend) do
      if type(f) == "table" and type(f.get_name) == "function" then
        utility.feature_add(self._rootctx, f)
      end
    end
  end

  -- CONSUMED, not kept. `extend` holds feature INSTANCES, and every shipped
  -- feature's init stores `self.client = ctx.client` - so leaving the list
  -- in self.options makes the options map CYCLIC (client.options.extend[1]
  -- .client == client), and options_map()'s vs.clone, which has no cycle
  -- guard, blew the stack on the first prepare_auth of any client built with
  -- an extend feature. The instances live on self.features from here on,
  -- which is the only place anything reads them; the SAME table is
  -- self._rootctx.options, so the root context loses the key too.
  self.options["extend"] = nil

  -- Initialize features.
  for _, f in ipairs(self.features) do
    utility.feature_init(self._rootctx, f)
  end

  utility.feature_hook(self._rootctx, "PostConstruct")

    -- feature: ratelimit
  -- feature: retry
  -- feature: test
  -- feature: timeout


  return self
end


function LoppeeBusinessSDK:options_map()
  local out = vs.clone(self.options)
  if type(out) == "table" then
    return out
  end
  return {}
end


function LoppeeBusinessSDK:get_utility()
  return Utility.copy(self._utility)
end


function LoppeeBusinessSDK:get_root_ctx()
  return self._rootctx
end


function LoppeeBusinessSDK:prepare(fetchargs)
  local utility = self._utility

  fetchargs = fetchargs or {}

  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "prepare",
    ctrl = ctrl,
  }, self._rootctx)

  local options = self.options

  local path = vs.getprop(fetchargs, "path") or ""
  if type(path) ~= "string" then path = "" end

  local method = vs.getprop(fetchargs, "method") or "GET"
  if type(method) ~= "string" or method == "" then method = "GET" end
  method = string.upper(method)

  local allow_method = vs.getpath(options, "allow.method")
  if not helpers.allowed(allow_method, method) then
    return nil, ctx:make_error("spec_method_allow",
      'Method "' .. method ..
      '" not allowed by SDK option allow.method value: "' .. tostring(allow_method or "") .. '"')
  end

  local params = helpers.to_map(vs.getprop(fetchargs, "params")) or {}
  local query = helpers.to_map(vs.getprop(fetchargs, "query")) or {}

  local headers = utility.prepare_headers(ctx)

  local base = vs.getprop(options, "base") or ""
  if type(base) ~= "string" then base = "" end
  local prefix = vs.getprop(options, "prefix") or ""
  if type(prefix) ~= "string" then prefix = "" end
  local suffix = vs.getprop(options, "suffix") or ""
  if type(suffix) ~= "string" then suffix = "" end

  ctx.spec = Spec.new({
    base = base,
    prefix = prefix,
    suffix = suffix,
    path = path,
    method = method,
    params = params,
    query = query,
    headers = headers,
    body = vs.getprop(fetchargs, "body"),
    step = "start",
  })

  -- Merge user-provided headers.
  local uh = vs.getprop(fetchargs, "headers")
  if type(uh) == "table" then
    for k, v in pairs(uh) do
      ctx.spec.headers[k] = v
    end
  end

  local _, err = utility.prepare_auth(ctx)
  if err ~= nil then
    return nil, err
  end

  return utility.make_fetch_def(ctx)
end


-- Raw endpoint access is operator-controllable, like every entity op.
-- Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
-- either one reaches the same endpoint.
function LoppeeBusinessSDK:direct(fetchargs)
  if not self:_op_allowed("direct") then
    return self:_op_denied("direct"), nil
  end

  return self:_raw_request(fetchargs)
end


-- Is this raw-access op permitted by the SDK's allow.op option?
function LoppeeBusinessSDK:_op_allowed(op)
  return helpers.allowed(vs.getpath(self.options, "allow.op"), op)
end


function LoppeeBusinessSDK:_op_denied(op)
  local allow = vs.getpath(self.options, "allow.op")
  if type(allow) ~= "string" then allow = "" end
  return {
    ok = false,
    err = "LoppeeBusinessSDK: " .. op .. ": operation not allowed by" ..
      " SDK option allow.op value: \"" .. allow .. "\"",
  }
end


-- Ungated request path shared by direct and graphql, each of which checks its
-- own allow.op token first. Private, rather than a flag on fetchargs: a
-- caller-supplied marker would let anyone opt straight back out of the gate
-- by passing it.
function LoppeeBusinessSDK:_raw_request(fetchargs)
  local utility = self._utility

  local fetchdef, err = self:prepare(fetchargs)
  if err ~= nil then
    return { ok = false, err = err }, nil
  end

  fetchargs = fetchargs or {}
  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "direct",
    ctrl = ctrl,
  }, self._rootctx)

  local url = fetchdef["url"] or ""
  local fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

  if fetch_err ~= nil then
    return { ok = false, err = utility.clean(ctx, fetch_err) }, nil
  end

  if fetched == nil then
    return {
      ok = false,
      err = ctx:make_error("direct_no_response", "response: undefined"),
    }, nil
  end

  if type(fetched) == "table" then
    local status = helpers.to_int(vs.getprop(fetched, "status"))
    local headers = vs.getprop(fetched, "headers") or {}

    -- No-body responses (204, 304) and explicit zero content-length
    -- must skip JSON parsing — calling json() on an empty body errors.
    local content_length = nil
    if type(headers) == "table" then
      content_length = headers["content-length"]
    end
    local no_body = status == 204 or status == 304 or tostring(content_length) == "0"

    local json_data = nil
    local body_err = nil
    if not no_body then
      local jf = vs.getprop(fetched, "json")
      if type(jf) == "function" then
        local ok, result = pcall(jf)
        if ok then
          json_data = result
        end
        -- Non-JSON body: json_data stays nil, status/headers preserved.
      end
      if vs.getprop(fetched, "unreadable") == true then
        local failed = nil
        if status < 200 or status >= 300 then
          failed = ctx:make_error("request_status",
            "request: " .. tostring(status) .. ": " .. tostring(vs.getprop(fetched, "statusText")))
        end
        body_err = unreadable_body(ctx, status, headers, vs.getprop(fetched, "body"),
          fetchdef["headers"], failed)
      end
    end

    local out = {
      ok = body_err == nil and status >= 200 and status < 300,
      status = status,
      headers = headers,
      data = json_data,
    }
    if body_err ~= nil then
      out.err = utility.clean(ctx, body_err)
    end
    return out, nil
  end

  return {
    ok = false,
    err = ctx:make_error("direct_invalid", "invalid response type"),
  }, nil
end


-- Raw GraphQL access: the pressure valve that makes the generated surface's
-- deliberate omissions (per-call selection sets, typed filter builders,
-- batching, subscriptions) livable — the whole schema stays reachable.
--
-- Thin wrapper over the same prepare/fetch path direct uses, with the one
-- thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200 as
-- a top-level `errors` array, so status alone would report a failed query as
-- ok.
--
-- NOTE: like direct, this bypasses the feature pipeline — no retry, ratelimit
-- or paging features apply.
function LoppeeBusinessSDK:graphql(query, variables, ctrl)
  if not self:_op_allowed("graphql") then
    return self:_op_denied("graphql"), nil
  end

  local res, err = self:_raw_request({
    method = "POST",
    headers = { ["content-type"] = "application/json" },
    body = {
      query = query,
      variables = type(variables) == "table" and variables or {},
    },
    ctrl = type(ctrl) == "table" and ctrl or {},
  })

  if err ~= nil or type(res) ~= "table" then
    return res, err
  end

  -- Errors are read BEFORE any status check: a GraphQL parse or validation
  -- failure comes back as HTTP 400 carrying the standard { errors = {...} }
  -- body, and the raw path represents a non-2xx as ok=false with no err — so
  -- returning early on status would discard the server's own diagnostics,
  -- which are the only useful part of that response.
  local errors = vs.getpath(res, "data.errors")

  if type(errors) == "table" and 0 < #errors then
    local msg = vs.getprop(errors[1], "message")
    if type(msg) ~= "string" or msg == "" then
      msg = "graphql error"
    end
    res.ok = false
    res.err = "LoppeeBusinessSDK: graphql: " .. msg
    res.graphql = errors
  end

  return res, nil
end



-- Idiomatic facade: client:AgentAccess():list() / client:AgentAccess():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoppeeBusinessSDK:AgentAccess(data)
  local EntityMod = require("entity.agent_access_entity")
  if data == nil then
    if self._agent_access == nil then
      self._agent_access = EntityMod.new(self, nil)
    end
    return self._agent_access
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AgentCapability():list() / client:AgentCapability():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoppeeBusinessSDK:AgentCapability(data)
  local EntityMod = require("entity.agent_capability_entity")
  if data == nil then
    if self._agent_capability == nil then
      self._agent_capability = EntityMod.new(self, nil)
    end
    return self._agent_capability
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AgentConnectionTest():list() / client:AgentConnectionTest():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoppeeBusinessSDK:AgentConnectionTest(data)
  local EntityMod = require("entity.agent_connection_test_entity")
  if data == nil then
    if self._agent_connection_test == nil then
      self._agent_connection_test = EntityMod.new(self, nil)
    end
    return self._agent_connection_test
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AgentIntegration():list() / client:AgentIntegration():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoppeeBusinessSDK:AgentIntegration(data)
  local EntityMod = require("entity.agent_integration_entity")
  if data == nil then
    if self._agent_integration == nil then
      self._agent_integration = EntityMod.new(self, nil)
    end
    return self._agent_integration
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AgentMonitoring():list() / client:AgentMonitoring():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoppeeBusinessSDK:AgentMonitoring(data)
  local EntityMod = require("entity.agent_monitoring_entity")
  if data == nil then
    if self._agent_monitoring == nil then
      self._agent_monitoring = EntityMod.new(self, nil)
    end
    return self._agent_monitoring
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AgentOpenapi():list() / client:AgentOpenapi():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoppeeBusinessSDK:AgentOpenapi(data)
  local EntityMod = require("entity.agent_openapi_entity")
  if data == nil then
    if self._agent_openapi == nil then
      self._agent_openapi = EntityMod.new(self, nil)
    end
    return self._agent_openapi
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AgentPolicy():list() / client:AgentPolicy():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoppeeBusinessSDK:AgentPolicy(data)
  local EntityMod = require("entity.agent_policy_entity")
  if data == nil then
    if self._agent_policy == nil then
      self._agent_policy = EntityMod.new(self, nil)
    end
    return self._agent_policy
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AnonymousLocationProofRevocation():list() / client:AnonymousLocationProofRevocation():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoppeeBusinessSDK:AnonymousLocationProofRevocation(data)
  local EntityMod = require("entity.anonymous_location_proof_revocation_entity")
  if data == nil then
    if self._anonymous_location_proof_revocation == nil then
      self._anonymous_location_proof_revocation = EntityMod.new(self, nil)
    end
    return self._anonymous_location_proof_revocation
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BusinessApplication():list() / client:BusinessApplication():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoppeeBusinessSDK:BusinessApplication(data)
  local EntityMod = require("entity.business_application_entity")
  if data == nil then
    if self._business_application == nil then
      self._business_application = EntityMod.new(self, nil)
    end
    return self._business_application
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BusinessClaim():list() / client:BusinessClaim():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoppeeBusinessSDK:BusinessClaim(data)
  local EntityMod = require("entity.business_claim_entity")
  if data == nil then
    if self._business_claim == nil then
      self._business_claim = EntityMod.new(self, nil)
    end
    return self._business_claim
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BusinessDeal():list() / client:BusinessDeal():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoppeeBusinessSDK:BusinessDeal(data)
  local EntityMod = require("entity.business_deal_entity")
  if data == nil then
    if self._business_deal == nil then
      self._business_deal = EntityMod.new(self, nil)
    end
    return self._business_deal
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BusinessIndex():list() / client:BusinessIndex():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoppeeBusinessSDK:BusinessIndex(data)
  local EntityMod = require("entity.business_index_entity")
  if data == nil then
    if self._business_index == nil then
      self._business_index = EntityMod.new(self, nil)
    end
    return self._business_index
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BusinessOwner():list() / client:BusinessOwner():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoppeeBusinessSDK:BusinessOwner(data)
  local EntityMod = require("entity.business_owner_entity")
  if data == nil then
    if self._business_owner == nil then
      self._business_owner = EntityMod.new(self, nil)
    end
    return self._business_owner
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BusinessReview():list() / client:BusinessReview():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoppeeBusinessSDK:BusinessReview(data)
  local EntityMod = require("entity.business_review_entity")
  if data == nil then
    if self._business_review == nil then
      self._business_review = EntityMod.new(self, nil)
    end
    return self._business_review
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ChatAttachment():list() / client:ChatAttachment():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoppeeBusinessSDK:ChatAttachment(data)
  local EntityMod = require("entity.chat_attachment_entity")
  if data == nil then
    if self._chat_attachment == nil then
      self._chat_attachment = EntityMod.new(self, nil)
    end
    return self._chat_attachment
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ChatAttachmentUrl():list() / client:ChatAttachmentUrl():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoppeeBusinessSDK:ChatAttachmentUrl(data)
  local EntityMod = require("entity.chat_attachment_url_entity")
  if data == nil then
    if self._chat_attachment_url == nil then
      self._chat_attachment_url = EntityMod.new(self, nil)
    end
    return self._chat_attachment_url
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ClaimVerificationSend():list() / client:ClaimVerificationSend():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoppeeBusinessSDK:ClaimVerificationSend(data)
  local EntityMod = require("entity.claim_verification_send_entity")
  if data == nil then
    if self._claim_verification_send == nil then
      self._claim_verification_send = EntityMod.new(self, nil)
    end
    return self._claim_verification_send
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ClaimVerificationVerify():list() / client:ClaimVerificationVerify():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoppeeBusinessSDK:ClaimVerificationVerify(data)
  local EntityMod = require("entity.claim_verification_verify_entity")
  if data == nil then
    if self._claim_verification_verify == nil then
      self._claim_verification_verify = EntityMod.new(self, nil)
    end
    return self._claim_verification_verify
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CommercialClick():list() / client:CommercialClick():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoppeeBusinessSDK:CommercialClick(data)
  local EntityMod = require("entity.commercial_click_entity")
  if data == nil then
    if self._commercial_click == nil then
      self._commercial_click = EntityMod.new(self, nil)
    end
    return self._commercial_click
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ContactRecorded():list() / client:ContactRecorded():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoppeeBusinessSDK:ContactRecorded(data)
  local EntityMod = require("entity.contact_recorded_entity")
  if data == nil then
    if self._contact_recorded == nil then
      self._contact_recorded = EntityMod.new(self, nil)
    end
    return self._contact_recorded
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Conversation():list() / client:Conversation():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoppeeBusinessSDK:Conversation(data)
  local EntityMod = require("entity.conversation_entity")
  if data == nil then
    if self._conversation == nil then
      self._conversation = EntityMod.new(self, nil)
    end
    return self._conversation
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ConversationClose():list() / client:ConversationClose():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoppeeBusinessSDK:ConversationClose(data)
  local EntityMod = require("entity.conversation_close_entity")
  if data == nil then
    if self._conversation_close == nil then
      self._conversation_close = EntityMod.new(self, nil)
    end
    return self._conversation_close
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ConversationReport():list() / client:ConversationReport():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoppeeBusinessSDK:ConversationReport(data)
  local EntityMod = require("entity.conversation_report_entity")
  if data == nil then
    if self._conversation_report == nil then
      self._conversation_report = EntityMod.new(self, nil)
    end
    return self._conversation_report
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ConversationWorkflow():list() / client:ConversationWorkflow():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoppeeBusinessSDK:ConversationWorkflow(data)
  local EntityMod = require("entity.conversation_workflow_entity")
  if data == nil then
    if self._conversation_workflow == nil then
      self._conversation_workflow = EntityMod.new(self, nil)
    end
    return self._conversation_workflow
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CreateAgentApiKey():list() / client:CreateAgentApiKey():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoppeeBusinessSDK:CreateAgentApiKey(data)
  local EntityMod = require("entity.create_agent_api_key_entity")
  if data == nil then
    if self._create_agent_api_key == nil then
      self._create_agent_api_key = EntityMod.new(self, nil)
    end
    return self._create_agent_api_key
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Customer():list() / client:Customer():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoppeeBusinessSDK:Customer(data)
  local EntityMod = require("entity.customer_entity")
  if data == nil then
    if self._customer == nil then
      self._customer = EntityMod.new(self, nil)
    end
    return self._customer
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CustomerAccount():list() / client:CustomerAccount():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoppeeBusinessSDK:CustomerAccount(data)
  local EntityMod = require("entity.customer_account_entity")
  if data == nil then
    if self._customer_account == nil then
      self._customer_account = EntityMod.new(self, nil)
    end
    return self._customer_account
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CustomerLocationProofRevocation():list() / client:CustomerLocationProofRevocation():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoppeeBusinessSDK:CustomerLocationProofRevocation(data)
  local EntityMod = require("entity.customer_location_proof_revocation_entity")
  if data == nil then
    if self._customer_location_proof_revocation == nil then
      self._customer_location_proof_revocation = EntityMod.new(self, nil)
    end
    return self._customer_location_proof_revocation
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DestinationAddressSuggestion():list() / client:DestinationAddressSuggestion():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoppeeBusinessSDK:DestinationAddressSuggestion(data)
  local EntityMod = require("entity.destination_address_suggestion_entity")
  if data == nil then
    if self._destination_address_suggestion == nil then
      self._destination_address_suggestion = EntityMod.new(self, nil)
    end
    return self._destination_address_suggestion
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DestinationLocationProof():list() / client:DestinationLocationProof():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoppeeBusinessSDK:DestinationLocationProof(data)
  local EntityMod = require("entity.destination_location_proof_entity")
  if data == nil then
    if self._destination_location_proof == nil then
      self._destination_location_proof = EntityMod.new(self, nil)
    end
    return self._destination_location_proof
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DomainTrustCard():list() / client:DomainTrustCard():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoppeeBusinessSDK:DomainTrustCard(data)
  local EntityMod = require("entity.domain_trust_card_entity")
  if data == nil then
    if self._domain_trust_card == nil then
      self._domain_trust_card = EntityMod.new(self, nil)
    end
    return self._domain_trust_card
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:GeoContext():list() / client:GeoContext():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoppeeBusinessSDK:GeoContext(data)
  local EntityMod = require("entity.geo_context_entity")
  if data == nil then
    if self._geo_context == nil then
      self._geo_context = EntityMod.new(self, nil)
    end
    return self._geo_context
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Health():list() / client:Health():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoppeeBusinessSDK:Health(data)
  local EntityMod = require("entity.health_entity")
  if data == nil then
    if self._health == nil then
      self._health = EntityMod.new(self, nil)
    end
    return self._health
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:JobApplication():list() / client:JobApplication():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoppeeBusinessSDK:JobApplication(data)
  local EntityMod = require("entity.job_application_entity")
  if data == nil then
    if self._job_application == nil then
      self._job_application = EntityMod.new(self, nil)
    end
    return self._job_application
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:JobResumeSignedUrl():list() / client:JobResumeSignedUrl():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoppeeBusinessSDK:JobResumeSignedUrl(data)
  local EntityMod = require("entity.job_resume_signed_url_entity")
  if data == nil then
    if self._job_resume_signed_url == nil then
      self._job_resume_signed_url = EntityMod.new(self, nil)
    end
    return self._job_resume_signed_url
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:LocationHandoff():list() / client:LocationHandoff():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoppeeBusinessSDK:LocationHandoff(data)
  local EntityMod = require("entity.location_handoff_entity")
  if data == nil then
    if self._location_handoff == nil then
      self._location_handoff = EntityMod.new(self, nil)
    end
    return self._location_handoff
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Message():list() / client:Message():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoppeeBusinessSDK:Message(data)
  local EntityMod = require("entity.message_entity")
  if data == nil then
    if self._message == nil then
      self._message = EntityMod.new(self, nil)
    end
    return self._message
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ModeratedAction():list() / client:ModeratedAction():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoppeeBusinessSDK:ModeratedAction(data)
  local EntityMod = require("entity.moderated_action_entity")
  if data == nil then
    if self._moderated_action == nil then
      self._moderated_action = EntityMod.new(self, nil)
    end
    return self._moderated_action
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:OpenApiDocument():list() / client:OpenApiDocument():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoppeeBusinessSDK:OpenApiDocument(data)
  local EntityMod = require("entity.open_api_document_entity")
  if data == nil then
    if self._open_api_document == nil then
      self._open_api_document = EntityMod.new(self, nil)
    end
    return self._open_api_document
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Operation():list() / client:Operation():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoppeeBusinessSDK:Operation(data)
  local EntityMod = require("entity.operation_entity")
  if data == nil then
    if self._operation == nil then
      self._operation = EntityMod.new(self, nil)
    end
    return self._operation
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:OwnerNotification():list() / client:OwnerNotification():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoppeeBusinessSDK:OwnerNotification(data)
  local EntityMod = require("entity.owner_notification_entity")
  if data == nil then
    if self._owner_notification == nil then
      self._owner_notification = EntityMod.new(self, nil)
    end
    return self._owner_notification
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:OwnerNotificationSetting():list() / client:OwnerNotificationSetting():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoppeeBusinessSDK:OwnerNotificationSetting(data)
  local EntityMod = require("entity.owner_notification_setting_entity")
  if data == nil then
    if self._owner_notification_setting == nil then
      self._owner_notification_setting = EntityMod.new(self, nil)
    end
    return self._owner_notification_setting
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:OwnerWebhookEndpoint():list() / client:OwnerWebhookEndpoint():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoppeeBusinessSDK:OwnerWebhookEndpoint(data)
  local EntityMod = require("entity.owner_webhook_endpoint_entity")
  if data == nil then
    if self._owner_webhook_endpoint == nil then
      self._owner_webhook_endpoint = EntityMod.new(self, nil)
    end
    return self._owner_webhook_endpoint
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:OwnerWebhookRegistration():list() / client:OwnerWebhookRegistration():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoppeeBusinessSDK:OwnerWebhookRegistration(data)
  local EntityMod = require("entity.owner_webhook_registration_entity")
  if data == nil then
    if self._owner_webhook_registration == nil then
      self._owner_webhook_registration = EntityMod.new(self, nil)
    end
    return self._owner_webhook_registration
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Pricing():list() / client:Pricing():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoppeeBusinessSDK:Pricing(data)
  local EntityMod = require("entity.pricing_entity")
  if data == nil then
    if self._pricing == nil then
      self._pricing = EntityMod.new(self, nil)
    end
    return self._pricing
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PromoteVerifiedTransaction():list() / client:PromoteVerifiedTransaction():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoppeeBusinessSDK:PromoteVerifiedTransaction(data)
  local EntityMod = require("entity.promote_verified_transaction_entity")
  if data == nil then
    if self._promote_verified_transaction == nil then
      self._promote_verified_transaction = EntityMod.new(self, nil)
    end
    return self._promote_verified_transaction
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PublicContent():list() / client:PublicContent():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoppeeBusinessSDK:PublicContent(data)
  local EntityMod = require("entity.public_content_entity")
  if data == nil then
    if self._public_content == nil then
      self._public_content = EntityMod.new(self, nil)
    end
    return self._public_content
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Recommend():list() / client:Recommend():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoppeeBusinessSDK:Recommend(data)
  local EntityMod = require("entity.recommend_entity")
  if data == nil then
    if self._recommend == nil then
      self._recommend = EntityMod.new(self, nil)
    end
    return self._recommend
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Review():list() / client:Review():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoppeeBusinessSDK:Review(data)
  local EntityMod = require("entity.review_entity")
  if data == nil then
    if self._review == nil then
      self._review = EntityMod.new(self, nil)
    end
    return self._review
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Revoke():list() / client:Revoke():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoppeeBusinessSDK:Revoke(data)
  local EntityMod = require("entity.revoke_entity")
  if data == nil then
    if self._revoke == nil then
      self._revoke = EntityMod.new(self, nil)
    end
    return self._revoke
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SaveBusiness():list() / client:SaveBusiness():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoppeeBusinessSDK:SaveBusiness(data)
  local EntityMod = require("entity.save_business_entity")
  if data == nil then
    if self._save_business == nil then
      self._save_business = EntityMod.new(self, nil)
    end
    return self._save_business
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SavedBusiness():list() / client:SavedBusiness():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoppeeBusinessSDK:SavedBusiness(data)
  local EntityMod = require("entity.saved_business_entity")
  if data == nil then
    if self._saved_business == nil then
      self._saved_business = EntityMod.new(self, nil)
    end
    return self._saved_business
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SavedLocation():list() / client:SavedLocation():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoppeeBusinessSDK:SavedLocation(data)
  local EntityMod = require("entity.saved_location_entity")
  if data == nil then
    if self._saved_location == nil then
      self._saved_location = EntityMod.new(self, nil)
    end
    return self._saved_location
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Search():list() / client:Search():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoppeeBusinessSDK:Search(data)
  local EntityMod = require("entity.search_entity")
  if data == nil then
    if self._search == nil then
      self._search = EntityMod.new(self, nil)
    end
    return self._search
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Suggest():list() / client:Suggest():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoppeeBusinessSDK:Suggest(data)
  local EntityMod = require("entity.suggest_entity")
  if data == nil then
    if self._suggest == nil then
      self._suggest = EntityMod.new(self, nil)
    end
    return self._suggest
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SupportInternalNote():list() / client:SupportInternalNote():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoppeeBusinessSDK:SupportInternalNote(data)
  local EntityMod = require("entity.support_internal_note_entity")
  if data == nil then
    if self._support_internal_note == nil then
      self._support_internal_note = EntityMod.new(self, nil)
    end
    return self._support_internal_note
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SupportWorkflow():list() / client:SupportWorkflow():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoppeeBusinessSDK:SupportWorkflow(data)
  local EntityMod = require("entity.support_workflow_entity")
  if data == nil then
    if self._support_workflow == nil then
      self._support_workflow = EntityMod.new(self, nil)
    end
    return self._support_workflow
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TaxonomySuggestion():list() / client:TaxonomySuggestion():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoppeeBusinessSDK:TaxonomySuggestion(data)
  local EntityMod = require("entity.taxonomy_suggestion_entity")
  if data == nil then
    if self._taxonomy_suggestion == nil then
      self._taxonomy_suggestion = EntityMod.new(self, nil)
    end
    return self._taxonomy_suggestion
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TrustCard():list() / client:TrustCard():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoppeeBusinessSDK:TrustCard(data)
  local EntityMod = require("entity.trust_card_entity")
  if data == nil then
    if self._trust_card == nil then
      self._trust_card = EntityMod.new(self, nil)
    end
    return self._trust_card
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:UnsaveBusiness():list() / client:UnsaveBusiness():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoppeeBusinessSDK:UnsaveBusiness(data)
  local EntityMod = require("entity.unsave_business_entity")
  if data == nil then
    if self._unsave_business == nil then
      self._unsave_business = EntityMod.new(self, nil)
    end
    return self._unsave_business
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:UpdateAgentBillingAccount():list() / client:UpdateAgentBillingAccount():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoppeeBusinessSDK:UpdateAgentBillingAccount(data)
  local EntityMod = require("entity.update_agent_billing_account_entity")
  if data == nil then
    if self._update_agent_billing_account == nil then
      self._update_agent_billing_account = EntityMod.new(self, nil)
    end
    return self._update_agent_billing_account
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:WithdrawJobApplication():list() / client:WithdrawJobApplication():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoppeeBusinessSDK:WithdrawJobApplication(data)
  local EntityMod = require("entity.withdraw_job_application_entity")
  if data == nil then
    if self._withdraw_job_application == nil then
      self._withdraw_job_application = EntityMod.new(self, nil)
    end
    return self._withdraw_job_application
  end
  return EntityMod.new(self, data)
end




function LoppeeBusinessSDK.test(testopts, sdkopts)
  sdkopts = sdkopts or {}
  sdkopts = vs.clone(sdkopts)
  if type(sdkopts) ~= "table" then
    sdkopts = {}
  end

  testopts = testopts or {}
  testopts = vs.clone(testopts)
  if type(testopts) ~= "table" then
    testopts = {}
  end
  testopts["active"] = true

  vs.setpath(sdkopts, "feature.test", testopts)

  local sdk = LoppeeBusinessSDK.new(sdkopts)
  sdk.mode = "test"

  return sdk
end


return LoppeeBusinessSDK
