

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


describe('ContactRecordedEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LOPPEE_BUSINESS_TEST_LIVE=TRUE.
  afterEach(liveDelay('LOPPEE_BUSINESS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LoppeeBusinessSDK.test()
    const ent = testsdk.ContactRecorded()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = LoppeeBusinessSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.ContactRecorded().create({"business_id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LOPPEE_BUSINESS_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'contact_recorded.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"business_id":{"a":true,"h":"Business Id","n":"business_id","r":true,"t":"`$STRING`","key$":"business_id","index$":0},"contact_recorded":{"a":true,"h":"Contact Recorded","n":"contact_recorded","r":true,"t":"`$ANY`","key$":"contact_recorded","index$":1},"interaction_id":{"a":true,"h":"Interaction Id","n":"interaction_id","r":true,"t":"`$STRING`","key$":"interaction_id","index$":2},"ok":{"a":true,"h":"Ok","n":"ok","r":true,"t":"`$ANY`","key$":"ok","index$":3},"policy":{"a":true,"h":"Policy","n":"policy","r":true,"t":"`$STRING`","key$":"policy","index$":4},"review_upgraded":{"a":true,"h":"Review Upgraded","n":"review_upgraded","r":true,"t":"`$ANY`","key$":"review_upgraded","index$":5},"status":{"a":true,"h":"Status","n":"status","r":true,"t":"`$ANY`","key$":"status","index$":6},"trust_weight":{"a":true,"h":"Trust Weight","n":"trust_weight","r":true,"t":"`$ANY`","key$":"trust_weight","index$":7},"verified":{"a":true,"h":"Verified","n":"verified","r":true,"t":"`$BOOLEAN`","key$":"verified","index$":8}},"name":"contact_recorded","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["business_id"],"co":{"id":"POST /v1/actions/confirm-interaction","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/actions/confirm-interaction","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"actions"},{"lit":"confirm-interaction"}],"t":{"req":{"business_id":"`reqdata.business_id`"},"res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"contact_recorded","name__orig":"contact_recorded","Name":"ContactRecorded","name_":"contact_recorded","name-":"contact-recorded","NAME":"CONTACT_RECORDED","index$":19}, {"active":true,"entity":"contact_recorded","key$":"BasicContactRecordedFlow","kind":"basic","name":"BasicContactRecordedFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"contact_recorded_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'ContactRecorded', {"POST /v1/actions/confirm-interaction":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["business_id"],"additionalProperties":false,"properties":{"business_id":{"type":"string","minLength":1,"key$":"business_id"}},"x-ref":"#/components/schemas/ContactRecordedRequest","index$":1}}}},"parameters":[]}}, { strict: LIVE_STRICT, t }, 'TRUE' === process.env.VOXGIG_GETONLY_GUARD ? {"contact_recorded.create.0":"GET-only live run: needs POST /v1/actions/confirm-interaction"} : {})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const contact_recorded_ref01_ent = client.ContactRecorded()
    let contact_recorded_ref01_data = setup.data.new.contact_recorded['contact_recorded_ref01']

    contact_recorded_ref01_data = (await contact_recorded_ref01_ent.create(contact_recorded_ref01_data)).data()
    assert(null != contact_recorded_ref01_data)


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
      '../../../../.sdk/test/entity/contact_recorded/ContactRecordedTestData.json')

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
    ['contact_recorded01','contact_recorded02','contact_recorded03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LOPPEE_BUSINESS_TEST_CONTACT_RECORDED_ENTID': idmap,
    'LOPPEE_BUSINESS_TEST_LIVE': 'FALSE',
    'LOPPEE_BUSINESS_TEST_EXPLAIN': 'FALSE',
    'LOPPEE_BUSINESS_APIKEY': '',
  })

  idmap = env['LOPPEE_BUSINESS_TEST_CONTACT_RECORDED_ENTID']

  const live = 'TRUE' === env.LOPPEE_BUSINESS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LOPPEE_BUSINESS_TEST_CONTACT_RECORDED_ENTID']
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
  
