

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


describe('PricingEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LOPPEE_BUSINESS_TEST_LIVE=TRUE.
  afterEach(liveDelay('LOPPEE_BUSINESS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LoppeeBusinessSDK.test()
    const ent = testsdk.Pricing()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('pricing hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of LoppeeBusinessSDK.test(offline).Pricing().stream('list')) { }
    }, /offline/)

    for await (const _item of LoppeeBusinessSDK.test(offline).Pricing()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = LoppeeBusinessSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.Pricing().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of LoppeeBusinessSDK.test().Pricing().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new LoppeeBusinessSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.Pricing().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.Pricing().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = LoppeeBusinessSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Pricing().list({"generated_at":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LOPPEE_BUSINESS_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'pricing.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"billing":{"a":true,"h":"Billing","n":"billing","r":true,"t":"`$OBJECT`","key$":"billing","index$":0},"branch_add_ons":{"a":true,"h":"Branch Add Ons","n":"branch_add_ons","r":true,"t":"`$ARRAY`","key$":"branch_add_ons","index$":1},"currency":{"a":true,"h":"Currency","n":"currency","r":true,"t":"`$ANY`","key$":"currency","index$":2},"generated_at":{"a":true,"fo":"date-time","h":"Generated At","n":"generated_at","r":true,"t":"`$STRING`","key$":"generated_at","index$":3},"neutrality":{"a":true,"h":"Neutrality","n":"neutrality","r":true,"t":"`$STRING`","key$":"neutrality","index$":4},"plans":{"a":true,"h":"Plans","n":"plans","r":true,"t":"`$ARRAY`","key$":"plans","index$":5},"promotions":{"a":true,"h":"Promotions","n":"promotions","r":true,"t":"`$ARRAY`","key$":"promotions","index$":6},"published_at":{"a":true,"h":"Published At","n":"published_at","r":true,"t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"published_at","index$":7},"radius_extension":{"a":true,"h":"Radius Extension","n":"radius_extension","r":true,"t":"`$OBJECT`","key$":"radius_extension","index$":8},"revision_id":{"a":true,"h":"Revision Id","n":"revision_id","r":true,"t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"revision_id","index$":9},"source":{"a":true,"h":"Source","n":"source","r":true,"t":"`$ANY`","key$":"source","index$":10},"trust_model_version":{"a":true,"h":"Trust Model Version","n":"trust_model_version","r":true,"t":"`$ANY`","key$":"trust_model_version","index$":11}},"name":"pricing","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/pricing","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/v1/pricing","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"pricing"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"pricing","name__orig":"pricing","Name":"Pricing","name_":"pricing","name-":"pricing","NAME":"PRICING","index$":44}, {"active":true,"entity":"pricing","key$":"BasicPricingFlow","kind":"basic","name":"BasicPricingFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"pricing_ref01"}}],"index$":0}]}, 'Pricing', {"GET /v1/pricing":{"protocol":"http","parameters":[]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let pricing_ref01_data = Object.values(setup.data.existing.pricing)[0] as any

    // LIST
    const pricing_ref01_ent = client.Pricing()
    const pricing_ref01_match: any = {}

    const pricing_ref01_list = (await pricing_ref01_ent.list(pricing_ref01_match)).map((e: any) => e.data())


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
      '../../../../.sdk/test/entity/pricing/PricingTestData.json')

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
    ['pricing01','pricing02','pricing03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LOPPEE_BUSINESS_TEST_PRICING_ENTID': idmap,
    'LOPPEE_BUSINESS_TEST_LIVE': 'FALSE',
    'LOPPEE_BUSINESS_TEST_EXPLAIN': 'FALSE',
    'LOPPEE_BUSINESS_APIKEY': '',
  })

  idmap = env['LOPPEE_BUSINESS_TEST_PRICING_ENTID']

  const live = 'TRUE' === env.LOPPEE_BUSINESS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LOPPEE_BUSINESS_TEST_PRICING_ENTID']
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
  
