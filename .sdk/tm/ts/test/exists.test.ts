
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { LoppeeBusinessSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = LoppeeBusinessSDK.test()
    equal(testsdk instanceof LoppeeBusinessSDK, true,
      'LoppeeBusinessSDK.test() must return a client synchronously')
  })

})
