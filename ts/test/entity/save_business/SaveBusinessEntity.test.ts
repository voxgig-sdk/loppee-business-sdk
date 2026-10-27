

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


describe('SaveBusinessEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LOPPEE_BUSINESS_TEST_LIVE=TRUE.
  afterEach(liveDelay('LOPPEE_BUSINESS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LoppeeBusinessSDK.test()
    const ent = testsdk.SaveBusiness()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = LoppeeBusinessSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.SaveBusiness().create({"account_id":1,"business_id":"x","business_name":"x","business_source":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LOPPEE_BUSINESS_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'save_business.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"account_id":{"a":true,"h":"Account Id","n":"account_id","r":true,"t":"`$STRING`","key$":"account_id","index$":0},"business_id":{"a":true,"h":"Business Id","n":"business_id","r":true,"t":"`$STRING`","key$":"business_id","index$":1},"business_name":{"a":true,"h":"Business Name","n":"business_name","r":true,"t":"`$STRING`","key$":"business_name","index$":2},"business_source":{"a":true,"h":"Business Source","n":"business_source","r":true,"t":"`$STRING`","key$":"business_source","index$":3},"category":{"a":true,"h":"Category","n":"category","r":false,"t":"`$STRING`","key$":"category","index$":4},"city":{"a":true,"h":"City","n":"city","r":false,"t":"`$STRING`","key$":"city","index$":5},"created_at":{"a":true,"h":"Created At","n":"created_at","r":true,"t":"`$STRING`","key$":"created_at","index$":6},"notes":{"a":true,"h":"Notes","n":"notes","r":false,"t":"`$STRING`","key$":"notes","index$":7},"saved_business_id":{"a":true,"h":"Saved Business Id","n":"saved_business_id","r":true,"t":"`$STRING`","key$":"saved_business_id","index$":8},"state":{"a":true,"h":"State","n":"state","r":false,"t":"`$STRING`","key$":"state","index$":9},"status":{"a":true,"h":"Status","n":"status","r":true,"t":"`$ANY`","key$":"status","index$":10}},"name":"save_business","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["account_id","business_id","business_name","business_source","category","city","notes","state"],"co":{"id":"POST /v1/actions/save-business","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/actions/save-business","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"actions"},{"lit":"save-business"}],"t":{"req":{"account_id":"`reqdata.account_id`","business_id":"`reqdata.business_id`","business_name":"`reqdata.business_name`","business_source":"`reqdata.business_source`","category":"`reqdata.category`","city":"`reqdata.city`","notes":"`reqdata.note`","state":"`reqdata.state`"},"res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"save_business","name__orig":"save_business","Name":"SaveBusiness","name_":"save_business","name-":"save-business","NAME":"SAVE_BUSINESS","index$":50}, {"active":true,"entity":"save_business","key$":"BasicSaveBusinessFlow","kind":"basic","name":"BasicSaveBusinessFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"save_business_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'SaveBusiness', {"POST /v1/actions/save-business":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["account_id","business_id","business_name","business_source"],"additionalProperties":false,"properties":{"account_id":{"type":"string","minLength":1,"key$":"account_id"},"business_id":{"type":"string","minLength":1,"key$":"business_id"},"business_name":{"type":"string","minLength":1,"key$":"business_name"},"business_source":{"type":"string","minLength":1,"key$":"business_source"},"category":{"type":"string","key$":"category"},"city":{"type":"string","key$":"city"},"state":{"type":"string","key$":"state"},"notes":{"type":"string","key$":"notes"}},"x-ref":"#/components/schemas/SaveBusinessRequest","index$":1}}}},"parameters":[]}}, { strict: LIVE_STRICT, t }, 'TRUE' === process.env.VOXGIG_GETONLY_GUARD ? {"save_business.create.0":"GET-only live run: needs POST /v1/actions/save-business"} : {})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const save_business_ref01_ent = client.SaveBusiness()
    let save_business_ref01_data = setup.data.new.save_business['save_business_ref01']

    save_business_ref01_data = (await save_business_ref01_ent.create(save_business_ref01_data)).data()
    assert(null != save_business_ref01_data)


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
      '../../../../.sdk/test/entity/save_business/SaveBusinessTestData.json')

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
    ['save_business01','save_business02','save_business03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LOPPEE_BUSINESS_TEST_SAVE_BUSINESS_ENTID': idmap,
    'LOPPEE_BUSINESS_TEST_LIVE': 'FALSE',
    'LOPPEE_BUSINESS_TEST_EXPLAIN': 'FALSE',
    'LOPPEE_BUSINESS_APIKEY': '',
  })

  idmap = env['LOPPEE_BUSINESS_TEST_SAVE_BUSINESS_ENTID']

  const live = 'TRUE' === env.LOPPEE_BUSINESS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LOPPEE_BUSINESS_TEST_SAVE_BUSINESS_ENTID']
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
  
