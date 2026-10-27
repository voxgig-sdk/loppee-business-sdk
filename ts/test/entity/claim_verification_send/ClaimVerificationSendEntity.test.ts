

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { LoppeeBusinessSDK, BaseFeature, config, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('ClaimVerificationSendEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LOPPEE_BUSINESS_TEST_LIVE=TRUE.
  afterEach(liveDelay('LOPPEE_BUSINESS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LoppeeBusinessSDK.test()
    const ent = testsdk.ClaimVerificationSend()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = LoppeeBusinessSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.ClaimVerificationSend().create({"claim_id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LOPPEE_BUSINESS_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'claim_verification_send.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"challenge_id":{"a":true,"fo":"uuid","h":"Challenge Id","n":"challenge_id","r":false,"sh":"Opaque v3 SMS or owner-email challenge UUID.","t":"`$STRING`","key$":"challenge_id","index$":0},"channel":{"a":true,"h":"Channel","n":"channel","op":{"create":{"req":false,"type":"`$ANY`"}},"r":true,"t":"`$ANY`","key$":"channel","index$":1},"claim_id":{"a":true,"h":"Claim Id","n":"claim_id","r":true,"t":"`$STRING`","key$":"claim_id","index$":2},"destination_hint":{"a":true,"h":"Destination Hint","n":"destination_hint","r":false,"t":"`$STRING`","key$":"destination_hint","index$":3},"expires_in_seconds":{"a":true,"h":"Expires In Seconds","n":"expires_in_seconds","r":false,"t":"`$NUMBER`","key$":"expires_in_seconds","index$":4},"provider_status":{"a":true,"h":"Provider Status","n":"provider_status","r":false,"sh":"V3 provider request state.","t":"`$ANY`","key$":"provider_status","index$":5},"recipient_delivery_confirmed":{"a":true,"h":"Recipient Delivery Confirmed","n":"recipient_delivery_confirmed","r":false,"sh":"V3 currently has no final-delivery provider event for this receipt.","t":"`$ANY`","key$":"recipient_delivery_confirmed","index$":6},"request_id":{"a":true,"fo":"uuid","h":"Request Id","n":"request_id","r":false,"sh":"Caller-generated idempotency UUID.","t":"`$STRING`","key$":"request_id","index$":7},"status":{"a":true,"h":"Status","n":"status","r":true,"t":"`$ANY`","key$":"status","index$":8}},"name":"claim_verification_send","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["channel","claim_id","request_id"],"co":{"id":"POST /v1/actions/claim-verification/send","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/actions/claim-verification/send","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"actions"},{"lit":"claim-verification"},{"lit":"send"}],"t":{"req":{"channel":"`reqdata.channel`","claim_id":"`reqdata.claim_id`","request_id":"`reqdata.request_id`"},"res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"claim_verification_send","name__orig":"claim_verification_send","Name":"ClaimVerificationSend","name_":"claim_verification_send","name-":"claim-verification-send","NAME":"CLAIM_VERIFICATION_SEND","index$":16}, {"active":true,"entity":"claim_verification_send","key$":"BasicClaimVerificationSendFlow","kind":"basic","name":"BasicClaimVerificationSendFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"claim_verification_send_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'ClaimVerificationSend', {"POST /v1/actions/claim-verification/send":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["claim_id"],"additionalProperties":false,"properties":{"claim_id":{"type":"string","minLength":1,"key$":"claim_id"},"channel":{"enum":["email","sms"],"key$":"channel"},"request_id":{"type":"string","format":"uuid","description":"Caller-generated idempotency UUID. Required for trust model v3 SMS and owner-email sends; optional for the compatible v2 path.","key$":"request_id"}},"x-ref":"#/components/schemas/ClaimVerificationSendRequest","index$":1}}}},"parameters":[]}}, { strict: LIVE_STRICT, t }, 'TRUE' === process.env.VOXGIG_GETONLY_GUARD ? {"claim_verification_send.create.0":"GET-only live run: needs POST /v1/actions/claim-verification/send"} : {})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const claim_verification_send_ref01_ent = client.ClaimVerificationSend()
    let claim_verification_send_ref01_data = setup.data.new.claim_verification_send['claim_verification_send_ref01']

    claim_verification_send_ref01_data = (await claim_verification_send_ref01_ent.create(claim_verification_send_ref01_data)).data()
    assert(null != claim_verification_send_ref01_data)


  })
})



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/claim_verification_send/ClaimVerificationSendTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = LoppeeBusinessSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['claim_verification_send01','claim_verification_send02','claim_verification_send03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LOPPEE_BUSINESS_TEST_CLAIM_VERIFICATION_SEND_ENTID': idmap,
    'LOPPEE_BUSINESS_TEST_LIVE': 'FALSE',
    'LOPPEE_BUSINESS_TEST_EXPLAIN': 'FALSE',
    'LOPPEE_BUSINESS_APIKEY': '',
  })

  idmap = env['LOPPEE_BUSINESS_TEST_CLAIM_VERIFICATION_SEND_ENTID']

  const live = 'TRUE' === env.LOPPEE_BUSINESS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LOPPEE_BUSINESS_TEST_CLAIM_VERIFICATION_SEND_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new LoppeeBusinessSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.LOPPEE_BUSINESS_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.LOPPEE_BUSINESS_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
