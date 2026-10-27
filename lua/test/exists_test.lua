-- LoppeeBusiness SDK exists test

local sdk = require("loppee-business_sdk")

describe("LoppeeBusinessSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
