

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


describe('HealthEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LOPPEE_BUSINESS_TEST_LIVE=TRUE.
  afterEach(liveDelay('LOPPEE_BUSINESS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LoppeeBusinessSDK.test()
    const ent = testsdk.Health()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = LoppeeBusinessSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Health().load({"build_sha":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LOPPEE_BUSINESS_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'health.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"agent_phone_location_bridge":{"a":true,"h":"Agent Phone Location Bridge","n":"agent_phone_location_bridge","r":true,"t":"`$OBJECT`","key$":"agent_phone_location_bridge","index$":0},"build_sha":{"a":true,"h":"Build Sha","n":"build_sha","r":true,"t":"`$STRING`","key$":"build_sha","index$":1},"business_review_access":{"a":true,"h":"Business Review Access","n":"business_review_access","r":true,"t":"`$OBJECT`","key$":"business_review_access","index$":2},"contract_version":{"a":true,"h":"Contract Version","n":"contract_version","r":true,"t":"`$STRING`","key$":"contract_version","index$":3},"external_agent_webhooks":{"a":true,"h":"External Agent Webhooks","n":"external_agent_webhooks","r":true,"t":"`$OBJECT`","key$":"external_agent_webhooks","index$":4},"external_agent_webhooks_enabled":{"a":true,"h":"External Agent Webhooks Enabled","n":"external_agent_webhooks_enabled","r":true,"t":"`$BOOLEAN`","key$":"external_agent_webhooks_enabled","index$":5},"ios_app_attest_anonymous_location":{"a":true,"h":"Ios App Attest Anonymous Location","n":"ios_app_attest_anonymous_location","r":true,"t":"`$OBJECT`","key$":"ios_app_attest_anonymous_location","index$":6},"location_choices":{"a":true,"h":"Location Choices","n":"location_choices","r":true,"t":"`$OBJECT`","key$":"location_choices","index$":7},"location_handoff":{"a":true,"h":"Location Handoff","n":"location_handoff","r":true,"t":"`$OBJECT`","key$":"location_handoff","index$":8},"mobile_push":{"a":true,"h":"Mobile Push","n":"mobile_push","r":true,"t":"`$ANY`","union":{"branches":2,"count":1,"depth":0},"key$":"mobile_push","index$":9},"ok":{"a":true,"h":"Ok","n":"ok","r":true,"t":"`$ANY`","key$":"ok","index$":10},"service":{"a":true,"h":"Service","n":"service","r":true,"t":"`$STRING`","key$":"service","index$":11},"sponsored_ordering":{"a":true,"h":"Sponsored Ordering","n":"sponsored_ordering","r":true,"t":"`$OBJECT`","key$":"sponsored_ordering","index$":12},"trust_model_version":{"a":true,"h":"Trust Model Version","n":"trust_model_version","r":true,"t":"`$ANY`","key$":"trust_model_version","index$":13},"version":{"a":true,"h":"Version","n":"version","r":true,"t":"`$STRING`","key$":"version","index$":14}},"name":"health","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /health","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/health","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"health"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"health","name__orig":"health","Name":"Health","name_":"health","name-":"health","NAME":"HEALTH","index$":32}, {"active":true,"entity":"health","key$":"BasicHealthFlow","kind":"basic","name":"BasicHealthFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"health_ref01","srcdatavar":"health_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-health_ref01"}}],"index$":0}]}, 'Health', {"GET /health":{"protocol":"http","parameters":[]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let health_ref01_data = Object.values(setup.data.existing.health)[0] as any

    // LOAD
    const health_ref01_ent = client.Health()
    const health_ref01_match_dt0: any = {}
    const health_ref01_data_dt0 = (await health_ref01_ent.load(health_ref01_match_dt0)).data()
    assert(null != health_ref01_data_dt0)


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
      '../../../../.sdk/test/entity/health/HealthTestData.json')

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
    ['health01','health02','health03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LOPPEE_BUSINESS_TEST_HEALTH_ENTID': idmap,
    'LOPPEE_BUSINESS_TEST_LIVE': 'FALSE',
    'LOPPEE_BUSINESS_TEST_EXPLAIN': 'FALSE',
    'LOPPEE_BUSINESS_APIKEY': '',
  })

  idmap = env['LOPPEE_BUSINESS_TEST_HEALTH_ENTID']

  const live = 'TRUE' === env.LOPPEE_BUSINESS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LOPPEE_BUSINESS_TEST_HEALTH_ENTID']
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
  
