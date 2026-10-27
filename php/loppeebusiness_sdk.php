<?php
declare(strict_types=1);

// LoppeeBusiness SDK

require_once __DIR__ . '/utility/struct/Struct.php';
require_once __DIR__ . '/core/UtilityType.php';
require_once __DIR__ . '/core/Spec.php';
require_once __DIR__ . '/core/Helpers.php';

// Load utility registration
require_once __DIR__ . '/utility/Register.php';

// Load config and features
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/features.php';

use Voxgig\Struct\Struct;

// Features record diagnostic state on the client as dynamic properties
// (_retry, _cache, _metrics, ...); allow them explicitly (PHP 8.2+
// deprecates implicit dynamic properties).
#[\AllowDynamicProperties]
class LoppeeBusinessSDK implements \JsonSerializable
{
    public string $mode;
    public array $features;
    public ?array $options;

    private $_utility;
    private $_rootctx;

    public function __construct(array $options = [])
    {
        $this->mode = "live";
        $this->features = [];
        $this->options = null;

        $utility = new LoppeeBusinessUtility();
        $this->_utility = $utility;

        $config = LoppeeBusinessConfig::shared_config();

        $this->_rootctx = ($utility->make_context)([
            "client" => $this,
            "utility" => $utility,
            "config" => $config,
            "options" => $options ?? [],
            "shared" => [],
        ], null);

        $this->options = ($utility->make_options)($this->_rootctx);

        if (Struct::getpath($this->options, "feature.test.active") === true) {
            $this->mode = "test";
        }

        $this->_rootctx->options = $this->options;

        // Feature INSTANCES supplied at construction (the station adopt
        // path) are read from the RAW construction options - extend is
        // consumed exactly once, here; make_options strips it from the
        // processed map so options_map() stays clean data.
        $extend_val = is_array($options["extend"] ?? null) ? $options["extend"] : [];

        // Add features in the resolved order (make_options puts an explicit
        // list order first, else defaults to test-first). Ordering matters: the
        // `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        // current, so `test` must be added before them to sit at the base.
        $feature_opts = LoppeeBusinessHelpers::to_map(Struct::getprop($this->options, "feature"));
        if ($feature_opts) {
            $featureorder = Struct::getpath($this->options, "__derived__.featureorder");
            if (is_array($featureorder)) {
                foreach ($featureorder as $fname) {
                    $fopts = LoppeeBusinessHelpers::to_map($feature_opts[$fname] ?? null);
                    if ($fopts && isset($fopts["active"]) && $fopts["active"] === true) {
                        // An active name with no generated feature class is
                        // legal when an extend-supplied instance carries that
                        // name (station's adopt path): the instance is added
                        // below, positioned by its own __after__ entry, so
                        // skip it here rather than add a BaseFeature stray
                        // that would silently shift feature positions.
                        if (!LoppeeBusinessFeatures::has_feature($fname)) {
                            foreach ($extend_val as $ef) {
                                if (is_object($ef) && method_exists($ef, 'get_name')
                                    && $fname === $ef->get_name()) {
                                    continue 2;
                                }
                            }
                        }
                        ($utility->feature_add)($this->_rootctx, LoppeeBusinessFeatures::make_feature($fname));
                    }
                }
            }
        }

        // Add extension features.
        foreach ($extend_val as $f) {
            if (is_object($f) && method_exists($f, 'get_name')) {
                ($utility->feature_add)($this->_rootctx, $f);
            }
        }

        // Initialize features.
        foreach ($this->features as $f) {
            ($utility->feature_init)($this->_rootctx, $f);
        }

        ($utility->feature_hook)($this->_rootctx, "PostConstruct");
    }

    public function options_map(): array
    {
        $out = Struct::clone($this->options);
        return is_array($out) ? $out : [];
    }

    // The options hold the credential, so the default print and json form
    // name the client and nothing more; options_map() is the way to read
    // them back.
    public function jsonSerialize(): array
    {
        return ['name' => 'LoppeeBusiness'];
    }

    public function __debugInfo(): array
    {
        return $this->jsonSerialize();
    }

    public function get_utility()
    {
        return LoppeeBusinessUtility::copy($this->_utility);
    }

    public function get_root_ctx()
    {
        return $this->_rootctx;
    }

    public function prepare(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;
        $fetchargs = $fetchargs ?? [];

        $ctrl = LoppeeBusinessHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "prepare",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $opts = $this->options;
        $path = Struct::getprop($fetchargs, "path") ?? "";
        $path = is_string($path) ? $path : "";
        $method_val = Struct::getprop($fetchargs, "method") ?? "GET";
        $method_val = strtoupper(is_string($method_val) && '' !== $method_val ? $method_val : "GET");
        $allow_method = Struct::getpath($opts, "allow.method");
        if (!LoppeeBusinessPrepareMethod::allowed($allow_method, $method_val)) {
            return ($utility->make_error)($ctx, $ctx->make_error("spec_method_allow",
                "Method \"" . $method_val . "\" not allowed by SDK option allow.method value: \"" .
                (is_string($allow_method) ? $allow_method : "") . "\""));
        }
        $params = LoppeeBusinessHelpers::to_map(Struct::getprop($fetchargs, "params")) ?? [];
        $query = LoppeeBusinessHelpers::to_map(Struct::getprop($fetchargs, "query")) ?? [];
        $headers = ($utility->prepare_headers)($ctx);

        $base = Struct::getprop($opts, "base") ?? "";
        $base = is_string($base) ? $base : "";
        $prefix = Struct::getprop($opts, "prefix") ?? "";
        $prefix = is_string($prefix) ? $prefix : "";
        $suffix = Struct::getprop($opts, "suffix") ?? "";
        $suffix = is_string($suffix) ? $suffix : "";

        $ctx->spec = new LoppeeBusinessSpec([
            "base" => $base, "prefix" => $prefix, "suffix" => $suffix,
            "path" => $path, "method" => $method_val,
            "params" => $params, "query" => $query, "headers" => $headers,
            "body" => Struct::getprop($fetchargs, "body"),
            "step" => "start",
        ]);

        // Merge user-provided headers.
        $uh = Struct::getprop($fetchargs, "headers");
        if (is_array($uh)) {
            foreach ($uh as $k => $v) {
                $ctx->spec->headers[$k] = $v;
            }
        }

        [$_, $err] = ($utility->prepare_auth)($ctx);
        if ($err) {
            return ($utility->make_error)($ctx, $err);
        }

        [$fetchdef, $fd_err] = ($utility->make_fetch_def)($ctx);
        if ($fd_err) {
            return ($utility->make_error)($ctx, $fd_err);
        }
        return $fetchdef;
    }

    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens,
    // since either one reaches the same endpoint.
    public function direct(array $fetchargs = []): mixed
    {
        if (!$this->op_allowed("direct")) {
            return $this->op_denied("direct");
        }

        return $this->raw_request($fetchargs);
    }

    // Is this raw-access op permitted by the SDK's allow.op option?
    private function op_allowed(string $op): bool
    {
        return LoppeeBusinessPrepareMethod::allowed(Struct::getpath($this->options, "allow.op"), $op);
    }

    private function op_denied(string $op): array
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return [
            "ok" => false,
            "err" => new LoppeeBusinessError($op . "_allow",
                "LoppeeBusinessSDK: " . $op . ": operation not allowed by" .
                " SDK option allow.op value: \"" . (string)$allow_op . "\""),
        ];
    }

    // Ungated request path shared by direct and graphql, each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    private function raw_request(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;

        // direct() is the raw-HTTP escape hatch: it never throws, it returns
        // an {ok, err, ...} dict. prepare() now raises on error, so catch it
        // and surface the failure through the dict instead.
        try {
            $fetchdef = $this->prepare($fetchargs);
        } catch (\Throwable $err) {
            return ["ok" => false, "err" => $err];
        }

        $fetchargs = $fetchargs ?? [];
        $ctrl = LoppeeBusinessHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "direct",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $url = $fetchdef["url"] ?? "";
        [$fetched, $fetch_err] = ($utility->fetcher)($ctx, $url, $fetchdef);

        if ($fetch_err) {
            return ["ok" => false, "err" => ($utility->clean)($ctx, $fetch_err)];
        }

        if ($fetched === null) {
            return [
                "ok" => false,
                "err" => $ctx->make_error("direct_no_response", "response: undefined"),
            ];
        }

        if (is_array($fetched)) {
            $status = LoppeeBusinessHelpers::to_int(Struct::getprop($fetched, "status"));
            $headers = Struct::getprop($fetched, "headers") ?? [];

            // No-body responses (204, 304) and explicit zero content-length
            // must skip JSON parsing — calling json() on an empty body errors.
            $content_length = is_array($headers) ? ($headers["content-length"] ?? null) : null;
            $no_body = $status === 204 || $status === 304 || (string)$content_length === "0";

            $json_data = null;
            $body_err = null;
            if (!$no_body) {
                $jf = Struct::getprop($fetched, "json");
                if (is_callable($jf)) {
                    try {
                        $json_data = $jf();
                    } catch (\Throwable $e) {
                        // Non-JSON body — leave data null but keep status/ok.
                        $json_data = null;
                    }
                }
                if (true === Struct::getprop($fetched, "unreadable")) {
                    $failed = ($status >= 200 && $status < 300) ? null : $ctx->make_error(
                        "request_status",
                        "request: {$status}: " . (string)Struct::getprop($fetched, "statusText"));
                    $sent = $fetchdef["headers"] ?? [];
                    if (LoppeeBusinessFetcher::usesDefault($ctx)) {
                        $sent = LoppeeBusinessFetcher::sentHeaders($sent);
                    }
                    $body_err = LoppeeBusinessResultBody::unreadable($ctx, $status, $headers,
                        Struct::getprop($fetched, "body"), $sent, $failed);
                }
            }

            $out = [
                "ok" => null === $body_err && $status >= 200 && $status < 300,
                "status" => $status,
                "headers" => Struct::getprop($fetched, "headers"),
                "data" => $json_data,
            ];
            if (null !== $body_err) {
                $out["err"] = ($utility->clean)($ctx, $body_err);
            }
            return $out;
        }

        return [
            "ok" => false,
            "err" => $ctx->make_error("direct_invalid", "invalid response type"),
        ];
    }

    // Raw GraphQL access: the pressure valve that makes the generated
    // surface's deliberate omissions (per-call selection sets, typed filter
    // builders, batching, subscriptions) livable — the whole schema stays
    // reachable.
    //
    // Thin wrapper over the same prepare/fetch path direct uses, with the
    // one thing raw direct cannot do for GraphQL: a GraphQL failure rides
    // HTTP 200 as a top-level `errors` array, so status alone would report
    // a failed query as ok.
    //
    // NOTE: like direct, this bypasses the feature pipeline — no retry,
    // ratelimit or paging features apply.
    public function graphql(string $query, ?array $variables = null, ?array $ctrl = null): mixed
    {
        if (!$this->op_allowed("graphql")) {
            return $this->op_denied("graphql");
        }

        $res = $this->raw_request([
            "method" => "POST",
            "headers" => ["content-type" => "application/json"],
            "body" => ["query" => $query, "variables" => $variables ?? []],
            "ctrl" => $ctrl ?? [],
        ]);

        if (!is_array($res)) {
            return $res;
        }

        // Errors are read BEFORE any status check: a GraphQL parse or
        // validation failure comes back as HTTP 400 carrying the standard
        // { errors: [...] } body, and the raw path represents a non-2xx as
        // ok:false with no err — so returning early on status would discard
        // the server's own diagnostics, which are the only useful part of
        // that response.
        $errors = Struct::getpath($res, "data.errors");

        if (is_array($errors) && 0 < count($errors)) {
            $first = is_array($errors[0]) ? $errors[0] : [];
            $msg = $first["message"] ?? "";
            if (!is_string($msg) || "" === $msg) {
                $msg = "graphql error";
            }
            $res["ok"] = false;
            $res["err"] = new LoppeeBusinessError("graphql_error",
                "LoppeeBusinessSDK: graphql: " . $msg);
            $res["graphql"] = $errors;
        }

        return $res;
    }


    private $_agent_access = null;

    // Canonical facade: $client->AgentAccess()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->agent_access()
    // resolves here too.
    public function AgentAccess($data = null)
    {
        require_once __DIR__ . '/entity/agent_access_entity.php';
        if ($data === null) {
            if ($this->_agent_access === null) {
                $this->_agent_access = new AgentAccessEntity($this, null);
            }
            return $this->_agent_access;
        }
        return new AgentAccessEntity($this, $data);
    }


    private $_agent_capability = null;

    // Canonical facade: $client->AgentCapability()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->agent_capability()
    // resolves here too.
    public function AgentCapability($data = null)
    {
        require_once __DIR__ . '/entity/agent_capability_entity.php';
        if ($data === null) {
            if ($this->_agent_capability === null) {
                $this->_agent_capability = new AgentCapabilityEntity($this, null);
            }
            return $this->_agent_capability;
        }
        return new AgentCapabilityEntity($this, $data);
    }


    private $_agent_connection_test = null;

    // Canonical facade: $client->AgentConnectionTest()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->agent_connection_test()
    // resolves here too.
    public function AgentConnectionTest($data = null)
    {
        require_once __DIR__ . '/entity/agent_connection_test_entity.php';
        if ($data === null) {
            if ($this->_agent_connection_test === null) {
                $this->_agent_connection_test = new AgentConnectionTestEntity($this, null);
            }
            return $this->_agent_connection_test;
        }
        return new AgentConnectionTestEntity($this, $data);
    }


    private $_agent_integration = null;

    // Canonical facade: $client->AgentIntegration()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->agent_integration()
    // resolves here too.
    public function AgentIntegration($data = null)
    {
        require_once __DIR__ . '/entity/agent_integration_entity.php';
        if ($data === null) {
            if ($this->_agent_integration === null) {
                $this->_agent_integration = new AgentIntegrationEntity($this, null);
            }
            return $this->_agent_integration;
        }
        return new AgentIntegrationEntity($this, $data);
    }


    private $_agent_monitoring = null;

    // Canonical facade: $client->AgentMonitoring()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->agent_monitoring()
    // resolves here too.
    public function AgentMonitoring($data = null)
    {
        require_once __DIR__ . '/entity/agent_monitoring_entity.php';
        if ($data === null) {
            if ($this->_agent_monitoring === null) {
                $this->_agent_monitoring = new AgentMonitoringEntity($this, null);
            }
            return $this->_agent_monitoring;
        }
        return new AgentMonitoringEntity($this, $data);
    }


    private $_agent_openapi = null;

    // Canonical facade: $client->AgentOpenapi()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->agent_openapi()
    // resolves here too.
    public function AgentOpenapi($data = null)
    {
        require_once __DIR__ . '/entity/agent_openapi_entity.php';
        if ($data === null) {
            if ($this->_agent_openapi === null) {
                $this->_agent_openapi = new AgentOpenapiEntity($this, null);
            }
            return $this->_agent_openapi;
        }
        return new AgentOpenapiEntity($this, $data);
    }


    private $_agent_policy = null;

    // Canonical facade: $client->AgentPolicy()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->agent_policy()
    // resolves here too.
    public function AgentPolicy($data = null)
    {
        require_once __DIR__ . '/entity/agent_policy_entity.php';
        if ($data === null) {
            if ($this->_agent_policy === null) {
                $this->_agent_policy = new AgentPolicyEntity($this, null);
            }
            return $this->_agent_policy;
        }
        return new AgentPolicyEntity($this, $data);
    }


    private $_anonymous_location_proof_revocation = null;

    // Canonical facade: $client->AnonymousLocationProofRevocation()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->anonymous_location_proof_revocation()
    // resolves here too.
    public function AnonymousLocationProofRevocation($data = null)
    {
        require_once __DIR__ . '/entity/anonymous_location_proof_revocation_entity.php';
        if ($data === null) {
            if ($this->_anonymous_location_proof_revocation === null) {
                $this->_anonymous_location_proof_revocation = new AnonymousLocationProofRevocationEntity($this, null);
            }
            return $this->_anonymous_location_proof_revocation;
        }
        return new AnonymousLocationProofRevocationEntity($this, $data);
    }


    private $_business_application = null;

    // Canonical facade: $client->BusinessApplication()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->business_application()
    // resolves here too.
    public function BusinessApplication($data = null)
    {
        require_once __DIR__ . '/entity/business_application_entity.php';
        if ($data === null) {
            if ($this->_business_application === null) {
                $this->_business_application = new BusinessApplicationEntity($this, null);
            }
            return $this->_business_application;
        }
        return new BusinessApplicationEntity($this, $data);
    }


    private $_business_claim = null;

    // Canonical facade: $client->BusinessClaim()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->business_claim()
    // resolves here too.
    public function BusinessClaim($data = null)
    {
        require_once __DIR__ . '/entity/business_claim_entity.php';
        if ($data === null) {
            if ($this->_business_claim === null) {
                $this->_business_claim = new BusinessClaimEntity($this, null);
            }
            return $this->_business_claim;
        }
        return new BusinessClaimEntity($this, $data);
    }


    private $_business_deal = null;

    // Canonical facade: $client->BusinessDeal()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->business_deal()
    // resolves here too.
    public function BusinessDeal($data = null)
    {
        require_once __DIR__ . '/entity/business_deal_entity.php';
        if ($data === null) {
            if ($this->_business_deal === null) {
                $this->_business_deal = new BusinessDealEntity($this, null);
            }
            return $this->_business_deal;
        }
        return new BusinessDealEntity($this, $data);
    }


    private $_business_index = null;

    // Canonical facade: $client->BusinessIndex()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->business_index()
    // resolves here too.
    public function BusinessIndex($data = null)
    {
        require_once __DIR__ . '/entity/business_index_entity.php';
        if ($data === null) {
            if ($this->_business_index === null) {
                $this->_business_index = new BusinessIndexEntity($this, null);
            }
            return $this->_business_index;
        }
        return new BusinessIndexEntity($this, $data);
    }


    private $_business_owner = null;

    // Canonical facade: $client->BusinessOwner()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->business_owner()
    // resolves here too.
    public function BusinessOwner($data = null)
    {
        require_once __DIR__ . '/entity/business_owner_entity.php';
        if ($data === null) {
            if ($this->_business_owner === null) {
                $this->_business_owner = new BusinessOwnerEntity($this, null);
            }
            return $this->_business_owner;
        }
        return new BusinessOwnerEntity($this, $data);
    }


    private $_business_review = null;

    // Canonical facade: $client->BusinessReview()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->business_review()
    // resolves here too.
    public function BusinessReview($data = null)
    {
        require_once __DIR__ . '/entity/business_review_entity.php';
        if ($data === null) {
            if ($this->_business_review === null) {
                $this->_business_review = new BusinessReviewEntity($this, null);
            }
            return $this->_business_review;
        }
        return new BusinessReviewEntity($this, $data);
    }


    private $_chat_attachment = null;

    // Canonical facade: $client->ChatAttachment()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->chat_attachment()
    // resolves here too.
    public function ChatAttachment($data = null)
    {
        require_once __DIR__ . '/entity/chat_attachment_entity.php';
        if ($data === null) {
            if ($this->_chat_attachment === null) {
                $this->_chat_attachment = new ChatAttachmentEntity($this, null);
            }
            return $this->_chat_attachment;
        }
        return new ChatAttachmentEntity($this, $data);
    }


    private $_chat_attachment_url = null;

    // Canonical facade: $client->ChatAttachmentUrl()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->chat_attachment_url()
    // resolves here too.
    public function ChatAttachmentUrl($data = null)
    {
        require_once __DIR__ . '/entity/chat_attachment_url_entity.php';
        if ($data === null) {
            if ($this->_chat_attachment_url === null) {
                $this->_chat_attachment_url = new ChatAttachmentUrlEntity($this, null);
            }
            return $this->_chat_attachment_url;
        }
        return new ChatAttachmentUrlEntity($this, $data);
    }


    private $_claim_verification_send = null;

    // Canonical facade: $client->ClaimVerificationSend()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->claim_verification_send()
    // resolves here too.
    public function ClaimVerificationSend($data = null)
    {
        require_once __DIR__ . '/entity/claim_verification_send_entity.php';
        if ($data === null) {
            if ($this->_claim_verification_send === null) {
                $this->_claim_verification_send = new ClaimVerificationSendEntity($this, null);
            }
            return $this->_claim_verification_send;
        }
        return new ClaimVerificationSendEntity($this, $data);
    }


    private $_claim_verification_verify = null;

    // Canonical facade: $client->ClaimVerificationVerify()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->claim_verification_verify()
    // resolves here too.
    public function ClaimVerificationVerify($data = null)
    {
        require_once __DIR__ . '/entity/claim_verification_verify_entity.php';
        if ($data === null) {
            if ($this->_claim_verification_verify === null) {
                $this->_claim_verification_verify = new ClaimVerificationVerifyEntity($this, null);
            }
            return $this->_claim_verification_verify;
        }
        return new ClaimVerificationVerifyEntity($this, $data);
    }


    private $_commercial_click = null;

    // Canonical facade: $client->CommercialClick()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->commercial_click()
    // resolves here too.
    public function CommercialClick($data = null)
    {
        require_once __DIR__ . '/entity/commercial_click_entity.php';
        if ($data === null) {
            if ($this->_commercial_click === null) {
                $this->_commercial_click = new CommercialClickEntity($this, null);
            }
            return $this->_commercial_click;
        }
        return new CommercialClickEntity($this, $data);
    }


    private $_contact_recorded = null;

    // Canonical facade: $client->ContactRecorded()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->contact_recorded()
    // resolves here too.
    public function ContactRecorded($data = null)
    {
        require_once __DIR__ . '/entity/contact_recorded_entity.php';
        if ($data === null) {
            if ($this->_contact_recorded === null) {
                $this->_contact_recorded = new ContactRecordedEntity($this, null);
            }
            return $this->_contact_recorded;
        }
        return new ContactRecordedEntity($this, $data);
    }


    private $_conversation = null;

    // Canonical facade: $client->Conversation()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->conversation()
    // resolves here too.
    public function Conversation($data = null)
    {
        require_once __DIR__ . '/entity/conversation_entity.php';
        if ($data === null) {
            if ($this->_conversation === null) {
                $this->_conversation = new ConversationEntity($this, null);
            }
            return $this->_conversation;
        }
        return new ConversationEntity($this, $data);
    }


    private $_conversation_close = null;

    // Canonical facade: $client->ConversationClose()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->conversation_close()
    // resolves here too.
    public function ConversationClose($data = null)
    {
        require_once __DIR__ . '/entity/conversation_close_entity.php';
        if ($data === null) {
            if ($this->_conversation_close === null) {
                $this->_conversation_close = new ConversationCloseEntity($this, null);
            }
            return $this->_conversation_close;
        }
        return new ConversationCloseEntity($this, $data);
    }


    private $_conversation_report = null;

    // Canonical facade: $client->ConversationReport()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->conversation_report()
    // resolves here too.
    public function ConversationReport($data = null)
    {
        require_once __DIR__ . '/entity/conversation_report_entity.php';
        if ($data === null) {
            if ($this->_conversation_report === null) {
                $this->_conversation_report = new ConversationReportEntity($this, null);
            }
            return $this->_conversation_report;
        }
        return new ConversationReportEntity($this, $data);
    }


    private $_conversation_workflow = null;

    // Canonical facade: $client->ConversationWorkflow()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->conversation_workflow()
    // resolves here too.
    public function ConversationWorkflow($data = null)
    {
        require_once __DIR__ . '/entity/conversation_workflow_entity.php';
        if ($data === null) {
            if ($this->_conversation_workflow === null) {
                $this->_conversation_workflow = new ConversationWorkflowEntity($this, null);
            }
            return $this->_conversation_workflow;
        }
        return new ConversationWorkflowEntity($this, $data);
    }


    private $_create_agent_api_key = null;

    // Canonical facade: $client->CreateAgentApiKey()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->create_agent_api_key()
    // resolves here too.
    public function CreateAgentApiKey($data = null)
    {
        require_once __DIR__ . '/entity/create_agent_api_key_entity.php';
        if ($data === null) {
            if ($this->_create_agent_api_key === null) {
                $this->_create_agent_api_key = new CreateAgentApiKeyEntity($this, null);
            }
            return $this->_create_agent_api_key;
        }
        return new CreateAgentApiKeyEntity($this, $data);
    }


    private $_customer = null;

    // Canonical facade: $client->Customer()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->customer()
    // resolves here too.
    public function Customer($data = null)
    {
        require_once __DIR__ . '/entity/customer_entity.php';
        if ($data === null) {
            if ($this->_customer === null) {
                $this->_customer = new CustomerEntity($this, null);
            }
            return $this->_customer;
        }
        return new CustomerEntity($this, $data);
    }


    private $_customer_account = null;

    // Canonical facade: $client->CustomerAccount()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->customer_account()
    // resolves here too.
    public function CustomerAccount($data = null)
    {
        require_once __DIR__ . '/entity/customer_account_entity.php';
        if ($data === null) {
            if ($this->_customer_account === null) {
                $this->_customer_account = new CustomerAccountEntity($this, null);
            }
            return $this->_customer_account;
        }
        return new CustomerAccountEntity($this, $data);
    }


    private $_customer_location_proof_revocation = null;

    // Canonical facade: $client->CustomerLocationProofRevocation()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->customer_location_proof_revocation()
    // resolves here too.
    public function CustomerLocationProofRevocation($data = null)
    {
        require_once __DIR__ . '/entity/customer_location_proof_revocation_entity.php';
        if ($data === null) {
            if ($this->_customer_location_proof_revocation === null) {
                $this->_customer_location_proof_revocation = new CustomerLocationProofRevocationEntity($this, null);
            }
            return $this->_customer_location_proof_revocation;
        }
        return new CustomerLocationProofRevocationEntity($this, $data);
    }


    private $_destination_address_suggestion = null;

    // Canonical facade: $client->DestinationAddressSuggestion()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->destination_address_suggestion()
    // resolves here too.
    public function DestinationAddressSuggestion($data = null)
    {
        require_once __DIR__ . '/entity/destination_address_suggestion_entity.php';
        if ($data === null) {
            if ($this->_destination_address_suggestion === null) {
                $this->_destination_address_suggestion = new DestinationAddressSuggestionEntity($this, null);
            }
            return $this->_destination_address_suggestion;
        }
        return new DestinationAddressSuggestionEntity($this, $data);
    }


    private $_destination_location_proof = null;

    // Canonical facade: $client->DestinationLocationProof()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->destination_location_proof()
    // resolves here too.
    public function DestinationLocationProof($data = null)
    {
        require_once __DIR__ . '/entity/destination_location_proof_entity.php';
        if ($data === null) {
            if ($this->_destination_location_proof === null) {
                $this->_destination_location_proof = new DestinationLocationProofEntity($this, null);
            }
            return $this->_destination_location_proof;
        }
        return new DestinationLocationProofEntity($this, $data);
    }


    private $_domain_trust_card = null;

    // Canonical facade: $client->DomainTrustCard()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->domain_trust_card()
    // resolves here too.
    public function DomainTrustCard($data = null)
    {
        require_once __DIR__ . '/entity/domain_trust_card_entity.php';
        if ($data === null) {
            if ($this->_domain_trust_card === null) {
                $this->_domain_trust_card = new DomainTrustCardEntity($this, null);
            }
            return $this->_domain_trust_card;
        }
        return new DomainTrustCardEntity($this, $data);
    }


    private $_geo_context = null;

    // Canonical facade: $client->GeoContext()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->geo_context()
    // resolves here too.
    public function GeoContext($data = null)
    {
        require_once __DIR__ . '/entity/geo_context_entity.php';
        if ($data === null) {
            if ($this->_geo_context === null) {
                $this->_geo_context = new GeoContextEntity($this, null);
            }
            return $this->_geo_context;
        }
        return new GeoContextEntity($this, $data);
    }


    private $_health = null;

    // Canonical facade: $client->Health()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->health()
    // resolves here too.
    public function Health($data = null)
    {
        require_once __DIR__ . '/entity/health_entity.php';
        if ($data === null) {
            if ($this->_health === null) {
                $this->_health = new HealthEntity($this, null);
            }
            return $this->_health;
        }
        return new HealthEntity($this, $data);
    }


    private $_job_application = null;

    // Canonical facade: $client->JobApplication()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->job_application()
    // resolves here too.
    public function JobApplication($data = null)
    {
        require_once __DIR__ . '/entity/job_application_entity.php';
        if ($data === null) {
            if ($this->_job_application === null) {
                $this->_job_application = new JobApplicationEntity($this, null);
            }
            return $this->_job_application;
        }
        return new JobApplicationEntity($this, $data);
    }


    private $_job_resume_signed_url = null;

    // Canonical facade: $client->JobResumeSignedUrl()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->job_resume_signed_url()
    // resolves here too.
    public function JobResumeSignedUrl($data = null)
    {
        require_once __DIR__ . '/entity/job_resume_signed_url_entity.php';
        if ($data === null) {
            if ($this->_job_resume_signed_url === null) {
                $this->_job_resume_signed_url = new JobResumeSignedUrlEntity($this, null);
            }
            return $this->_job_resume_signed_url;
        }
        return new JobResumeSignedUrlEntity($this, $data);
    }


    private $_location_handoff = null;

    // Canonical facade: $client->LocationHandoff()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->location_handoff()
    // resolves here too.
    public function LocationHandoff($data = null)
    {
        require_once __DIR__ . '/entity/location_handoff_entity.php';
        if ($data === null) {
            if ($this->_location_handoff === null) {
                $this->_location_handoff = new LocationHandoffEntity($this, null);
            }
            return $this->_location_handoff;
        }
        return new LocationHandoffEntity($this, $data);
    }


    private $_message = null;

    // Canonical facade: $client->Message()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->message()
    // resolves here too.
    public function Message($data = null)
    {
        require_once __DIR__ . '/entity/message_entity.php';
        if ($data === null) {
            if ($this->_message === null) {
                $this->_message = new MessageEntity($this, null);
            }
            return $this->_message;
        }
        return new MessageEntity($this, $data);
    }


    private $_moderated_action = null;

    // Canonical facade: $client->ModeratedAction()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->moderated_action()
    // resolves here too.
    public function ModeratedAction($data = null)
    {
        require_once __DIR__ . '/entity/moderated_action_entity.php';
        if ($data === null) {
            if ($this->_moderated_action === null) {
                $this->_moderated_action = new ModeratedActionEntity($this, null);
            }
            return $this->_moderated_action;
        }
        return new ModeratedActionEntity($this, $data);
    }


    private $_open_api_document = null;

    // Canonical facade: $client->OpenApiDocument()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->open_api_document()
    // resolves here too.
    public function OpenApiDocument($data = null)
    {
        require_once __DIR__ . '/entity/open_api_document_entity.php';
        if ($data === null) {
            if ($this->_open_api_document === null) {
                $this->_open_api_document = new OpenApiDocumentEntity($this, null);
            }
            return $this->_open_api_document;
        }
        return new OpenApiDocumentEntity($this, $data);
    }


    private $_operation = null;

    // Canonical facade: $client->Operation()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->operation()
    // resolves here too.
    public function Operation($data = null)
    {
        require_once __DIR__ . '/entity/operation_entity.php';
        if ($data === null) {
            if ($this->_operation === null) {
                $this->_operation = new OperationEntity($this, null);
            }
            return $this->_operation;
        }
        return new OperationEntity($this, $data);
    }


    private $_owner_notification = null;

    // Canonical facade: $client->OwnerNotification()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->owner_notification()
    // resolves here too.
    public function OwnerNotification($data = null)
    {
        require_once __DIR__ . '/entity/owner_notification_entity.php';
        if ($data === null) {
            if ($this->_owner_notification === null) {
                $this->_owner_notification = new OwnerNotificationEntity($this, null);
            }
            return $this->_owner_notification;
        }
        return new OwnerNotificationEntity($this, $data);
    }


    private $_owner_notification_setting = null;

    // Canonical facade: $client->OwnerNotificationSetting()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->owner_notification_setting()
    // resolves here too.
    public function OwnerNotificationSetting($data = null)
    {
        require_once __DIR__ . '/entity/owner_notification_setting_entity.php';
        if ($data === null) {
            if ($this->_owner_notification_setting === null) {
                $this->_owner_notification_setting = new OwnerNotificationSettingEntity($this, null);
            }
            return $this->_owner_notification_setting;
        }
        return new OwnerNotificationSettingEntity($this, $data);
    }


    private $_owner_webhook_endpoint = null;

    // Canonical facade: $client->OwnerWebhookEndpoint()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->owner_webhook_endpoint()
    // resolves here too.
    public function OwnerWebhookEndpoint($data = null)
    {
        require_once __DIR__ . '/entity/owner_webhook_endpoint_entity.php';
        if ($data === null) {
            if ($this->_owner_webhook_endpoint === null) {
                $this->_owner_webhook_endpoint = new OwnerWebhookEndpointEntity($this, null);
            }
            return $this->_owner_webhook_endpoint;
        }
        return new OwnerWebhookEndpointEntity($this, $data);
    }


    private $_owner_webhook_registration = null;

    // Canonical facade: $client->OwnerWebhookRegistration()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->owner_webhook_registration()
    // resolves here too.
    public function OwnerWebhookRegistration($data = null)
    {
        require_once __DIR__ . '/entity/owner_webhook_registration_entity.php';
        if ($data === null) {
            if ($this->_owner_webhook_registration === null) {
                $this->_owner_webhook_registration = new OwnerWebhookRegistrationEntity($this, null);
            }
            return $this->_owner_webhook_registration;
        }
        return new OwnerWebhookRegistrationEntity($this, $data);
    }


    private $_pricing = null;

    // Canonical facade: $client->Pricing()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->pricing()
    // resolves here too.
    public function Pricing($data = null)
    {
        require_once __DIR__ . '/entity/pricing_entity.php';
        if ($data === null) {
            if ($this->_pricing === null) {
                $this->_pricing = new PricingEntity($this, null);
            }
            return $this->_pricing;
        }
        return new PricingEntity($this, $data);
    }


    private $_promote_verified_transaction = null;

    // Canonical facade: $client->PromoteVerifiedTransaction()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->promote_verified_transaction()
    // resolves here too.
    public function PromoteVerifiedTransaction($data = null)
    {
        require_once __DIR__ . '/entity/promote_verified_transaction_entity.php';
        if ($data === null) {
            if ($this->_promote_verified_transaction === null) {
                $this->_promote_verified_transaction = new PromoteVerifiedTransactionEntity($this, null);
            }
            return $this->_promote_verified_transaction;
        }
        return new PromoteVerifiedTransactionEntity($this, $data);
    }


    private $_public_content = null;

    // Canonical facade: $client->PublicContent()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->public_content()
    // resolves here too.
    public function PublicContent($data = null)
    {
        require_once __DIR__ . '/entity/public_content_entity.php';
        if ($data === null) {
            if ($this->_public_content === null) {
                $this->_public_content = new PublicContentEntity($this, null);
            }
            return $this->_public_content;
        }
        return new PublicContentEntity($this, $data);
    }


    private $_recommend = null;

    // Canonical facade: $client->Recommend()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->recommend()
    // resolves here too.
    public function Recommend($data = null)
    {
        require_once __DIR__ . '/entity/recommend_entity.php';
        if ($data === null) {
            if ($this->_recommend === null) {
                $this->_recommend = new RecommendEntity($this, null);
            }
            return $this->_recommend;
        }
        return new RecommendEntity($this, $data);
    }


    private $_review = null;

    // Canonical facade: $client->Review()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->review()
    // resolves here too.
    public function Review($data = null)
    {
        require_once __DIR__ . '/entity/review_entity.php';
        if ($data === null) {
            if ($this->_review === null) {
                $this->_review = new ReviewEntity($this, null);
            }
            return $this->_review;
        }
        return new ReviewEntity($this, $data);
    }


    private $_revoke = null;

    // Canonical facade: $client->Revoke()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->revoke()
    // resolves here too.
    public function Revoke($data = null)
    {
        require_once __DIR__ . '/entity/revoke_entity.php';
        if ($data === null) {
            if ($this->_revoke === null) {
                $this->_revoke = new RevokeEntity($this, null);
            }
            return $this->_revoke;
        }
        return new RevokeEntity($this, $data);
    }


    private $_save_business = null;

    // Canonical facade: $client->SaveBusiness()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->save_business()
    // resolves here too.
    public function SaveBusiness($data = null)
    {
        require_once __DIR__ . '/entity/save_business_entity.php';
        if ($data === null) {
            if ($this->_save_business === null) {
                $this->_save_business = new SaveBusinessEntity($this, null);
            }
            return $this->_save_business;
        }
        return new SaveBusinessEntity($this, $data);
    }


    private $_saved_business = null;

    // Canonical facade: $client->SavedBusiness()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->saved_business()
    // resolves here too.
    public function SavedBusiness($data = null)
    {
        require_once __DIR__ . '/entity/saved_business_entity.php';
        if ($data === null) {
            if ($this->_saved_business === null) {
                $this->_saved_business = new SavedBusinessEntity($this, null);
            }
            return $this->_saved_business;
        }
        return new SavedBusinessEntity($this, $data);
    }


    private $_saved_location = null;

    // Canonical facade: $client->SavedLocation()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->saved_location()
    // resolves here too.
    public function SavedLocation($data = null)
    {
        require_once __DIR__ . '/entity/saved_location_entity.php';
        if ($data === null) {
            if ($this->_saved_location === null) {
                $this->_saved_location = new SavedLocationEntity($this, null);
            }
            return $this->_saved_location;
        }
        return new SavedLocationEntity($this, $data);
    }


    private $_search = null;

    // Canonical facade: $client->Search()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->search()
    // resolves here too.
    public function Search($data = null)
    {
        require_once __DIR__ . '/entity/search_entity.php';
        if ($data === null) {
            if ($this->_search === null) {
                $this->_search = new SearchEntity($this, null);
            }
            return $this->_search;
        }
        return new SearchEntity($this, $data);
    }


    private $_suggest = null;

    // Canonical facade: $client->Suggest()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->suggest()
    // resolves here too.
    public function Suggest($data = null)
    {
        require_once __DIR__ . '/entity/suggest_entity.php';
        if ($data === null) {
            if ($this->_suggest === null) {
                $this->_suggest = new SuggestEntity($this, null);
            }
            return $this->_suggest;
        }
        return new SuggestEntity($this, $data);
    }


    private $_support_internal_note = null;

    // Canonical facade: $client->SupportInternalNote()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->support_internal_note()
    // resolves here too.
    public function SupportInternalNote($data = null)
    {
        require_once __DIR__ . '/entity/support_internal_note_entity.php';
        if ($data === null) {
            if ($this->_support_internal_note === null) {
                $this->_support_internal_note = new SupportInternalNoteEntity($this, null);
            }
            return $this->_support_internal_note;
        }
        return new SupportInternalNoteEntity($this, $data);
    }


    private $_support_workflow = null;

    // Canonical facade: $client->SupportWorkflow()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->support_workflow()
    // resolves here too.
    public function SupportWorkflow($data = null)
    {
        require_once __DIR__ . '/entity/support_workflow_entity.php';
        if ($data === null) {
            if ($this->_support_workflow === null) {
                $this->_support_workflow = new SupportWorkflowEntity($this, null);
            }
            return $this->_support_workflow;
        }
        return new SupportWorkflowEntity($this, $data);
    }


    private $_taxonomy_suggestion = null;

    // Canonical facade: $client->TaxonomySuggestion()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->taxonomy_suggestion()
    // resolves here too.
    public function TaxonomySuggestion($data = null)
    {
        require_once __DIR__ . '/entity/taxonomy_suggestion_entity.php';
        if ($data === null) {
            if ($this->_taxonomy_suggestion === null) {
                $this->_taxonomy_suggestion = new TaxonomySuggestionEntity($this, null);
            }
            return $this->_taxonomy_suggestion;
        }
        return new TaxonomySuggestionEntity($this, $data);
    }


    private $_trust_card = null;

    // Canonical facade: $client->TrustCard()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->trust_card()
    // resolves here too.
    public function TrustCard($data = null)
    {
        require_once __DIR__ . '/entity/trust_card_entity.php';
        if ($data === null) {
            if ($this->_trust_card === null) {
                $this->_trust_card = new TrustCardEntity($this, null);
            }
            return $this->_trust_card;
        }
        return new TrustCardEntity($this, $data);
    }


    private $_unsave_business = null;

    // Canonical facade: $client->UnsaveBusiness()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->unsave_business()
    // resolves here too.
    public function UnsaveBusiness($data = null)
    {
        require_once __DIR__ . '/entity/unsave_business_entity.php';
        if ($data === null) {
            if ($this->_unsave_business === null) {
                $this->_unsave_business = new UnsaveBusinessEntity($this, null);
            }
            return $this->_unsave_business;
        }
        return new UnsaveBusinessEntity($this, $data);
    }


    private $_update_agent_billing_account = null;

    // Canonical facade: $client->UpdateAgentBillingAccount()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->update_agent_billing_account()
    // resolves here too.
    public function UpdateAgentBillingAccount($data = null)
    {
        require_once __DIR__ . '/entity/update_agent_billing_account_entity.php';
        if ($data === null) {
            if ($this->_update_agent_billing_account === null) {
                $this->_update_agent_billing_account = new UpdateAgentBillingAccountEntity($this, null);
            }
            return $this->_update_agent_billing_account;
        }
        return new UpdateAgentBillingAccountEntity($this, $data);
    }


    private $_withdraw_job_application = null;

    // Canonical facade: $client->WithdrawJobApplication()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->withdraw_job_application()
    // resolves here too.
    public function WithdrawJobApplication($data = null)
    {
        require_once __DIR__ . '/entity/withdraw_job_application_entity.php';
        if ($data === null) {
            if ($this->_withdraw_job_application === null) {
                $this->_withdraw_job_application = new WithdrawJobApplicationEntity($this, null);
            }
            return $this->_withdraw_job_application;
        }
        return new WithdrawJobApplicationEntity($this, $data);
    }



    public static function test(?array $testopts = null, ?array $sdkopts = null): self
    {
        $sdkopts = $sdkopts ?? [];
        $sdkopts = Struct::clone($sdkopts);
        $sdkopts = is_array($sdkopts) ? $sdkopts : [];

        $testopts = $testopts ?? [];
        $testopts = Struct::clone($testopts);
        $testopts = is_array($testopts) ? $testopts : [];
        $testopts["active"] = true;

        if (!isset($sdkopts["feature"])) {
            $sdkopts["feature"] = [];
        }
        $sdkopts["feature"]["test"] = $testopts;

        $sdk = new LoppeeBusinessSDK($sdkopts);
        $sdk->mode = "test";
        return $sdk;
    }
}
