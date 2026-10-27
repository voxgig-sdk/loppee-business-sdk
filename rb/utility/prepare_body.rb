# LoppeeBusiness SDK utility: prepare_body
require_relative 'media'
module LoppeeBusinessUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return LoppeeBusinessUtilities.raw_body(ctx.reqdata) if LoppeeBusinessUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
