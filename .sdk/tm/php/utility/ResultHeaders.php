<?php
declare(strict_types=1);

// LoppeeBusiness SDK utility: result_headers

class LoppeeBusinessResultHeaders
{
    public static function call(LoppeeBusinessContext $ctx): ?LoppeeBusinessResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
