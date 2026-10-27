# LoppeeBusiness SDK exists test

require "minitest/autorun"
require_relative "../LoppeeBusiness_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = LoppeeBusinessSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
