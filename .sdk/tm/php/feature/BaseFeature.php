<?php
declare(strict_types=1);

// LoppeeBusiness SDK base feature

class LoppeeBusinessBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(LoppeeBusinessContext $ctx, array $options): void {}
    public function PostConstruct(LoppeeBusinessContext $ctx): void {}
    public function PostConstructEntity(LoppeeBusinessContext $ctx): void {}
    public function SetData(LoppeeBusinessContext $ctx): void {}
    public function GetData(LoppeeBusinessContext $ctx): void {}
    public function GetMatch(LoppeeBusinessContext $ctx): void {}
    public function SetMatch(LoppeeBusinessContext $ctx): void {}
    public function PrePoint(LoppeeBusinessContext $ctx): void {}
    public function PreSpec(LoppeeBusinessContext $ctx): void {}
    public function PreRequest(LoppeeBusinessContext $ctx): void {}
    public function PreResponse(LoppeeBusinessContext $ctx): void {}
    public function PreResult(LoppeeBusinessContext $ctx): void {}
    public function PreDone(LoppeeBusinessContext $ctx): void {}
    public function PreUnexpected(LoppeeBusinessContext $ctx): void {}
}
