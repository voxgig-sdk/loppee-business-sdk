# LoppeeBusiness SDK utility: make_context
require_relative '../core/context'
module LoppeeBusinessUtilities
  MakeContext = ->(ctxmap, basectx) {
    LoppeeBusinessContext.new(ctxmap, basectx)
  }
end
