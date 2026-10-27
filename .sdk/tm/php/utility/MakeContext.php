<?php
declare(strict_types=1);

// LoppeeBusiness SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class LoppeeBusinessMakeContext
{
    public static function call(array $ctxmap, ?LoppeeBusinessContext $basectx): LoppeeBusinessContext
    {
        return new LoppeeBusinessContext($ctxmap, $basectx);
    }
}
