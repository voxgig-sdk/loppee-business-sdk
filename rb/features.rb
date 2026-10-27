# LoppeeBusiness SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module LoppeeBusinessFeatures
  def self.make_feature(name)
    case name
    when "base"
      LoppeeBusinessBaseFeature.new
    when "ratelimit"
      LoppeeBusinessRatelimitFeature.new
    when "retry"
      LoppeeBusinessRetryFeature.new
    when "test"
      LoppeeBusinessTestFeature.new
    when "timeout"
      LoppeeBusinessTimeoutFeature.new
    else
      LoppeeBusinessBaseFeature.new
    end
  end
end
