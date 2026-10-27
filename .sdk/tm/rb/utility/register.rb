# LoppeeBusiness SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

LoppeeBusinessUtility.registrar = ->(u) {
  u.clean = LoppeeBusinessUtilities::Clean
  u.clean_add = LoppeeBusinessUtilities::CleanAdd
  u.clean_explain = LoppeeBusinessUtilities::CleanExplain
  u.done = LoppeeBusinessUtilities::Done
  u.make_error = LoppeeBusinessUtilities::MakeError
  u.feature_add = LoppeeBusinessUtilities::FeatureAdd
  u.feature_hook = LoppeeBusinessUtilities::FeatureHook
  u.feature_init = LoppeeBusinessUtilities::FeatureInit
  u.fetcher = LoppeeBusinessUtilities::Fetcher
  u.make_fetch_def = LoppeeBusinessUtilities::MakeFetchDef
  u.make_context = LoppeeBusinessUtilities::MakeContext
  u.make_options = LoppeeBusinessUtilities::MakeOptions
  u.make_request = LoppeeBusinessUtilities::MakeRequest
  u.make_response = LoppeeBusinessUtilities::MakeResponse
  u.make_result = LoppeeBusinessUtilities::MakeResult
  u.make_point = LoppeeBusinessUtilities::MakePoint
  u.make_spec = LoppeeBusinessUtilities::MakeSpec
  u.make_url = LoppeeBusinessUtilities::MakeUrl
  u.param = LoppeeBusinessUtilities::Param
  u.prepare_auth = LoppeeBusinessUtilities::PrepareAuth
  u.prepare_body = LoppeeBusinessUtilities::PrepareBody
  u.prepare_headers = LoppeeBusinessUtilities::PrepareHeaders
  u.prepare_method = LoppeeBusinessUtilities::PrepareMethod
  u.prepare_params = LoppeeBusinessUtilities::PrepareParams
  u.prepare_path = LoppeeBusinessUtilities::PreparePath
  u.prepare_query = LoppeeBusinessUtilities::PrepareQuery
  u.graphql_body = LoppeeBusinessUtilities::GraphqlBody
  u.graphql_errors = LoppeeBusinessUtilities::GraphqlErrors
  u.result_basic = LoppeeBusinessUtilities::ResultBasic
  u.result_body = LoppeeBusinessUtilities::ResultBody
  u.result_headers = LoppeeBusinessUtilities::ResultHeaders
  u.transform_request = LoppeeBusinessUtilities::TransformRequest
  u.transform_response = LoppeeBusinessUtilities::TransformResponse
}
