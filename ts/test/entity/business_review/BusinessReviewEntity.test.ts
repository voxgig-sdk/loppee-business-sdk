

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


describe('BusinessReviewEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LOPPEE_BUSINESS_TEST_LIVE=TRUE.
  afterEach(liveDelay('LOPPEE_BUSINESS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LoppeeBusinessSDK.test()
    const ent = testsdk.BusinessReview()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = LoppeeBusinessSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.BusinessReview().load({"id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LOPPEE_BUSINESS_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'business_review.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id"},"name":"business_review","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/businesses/{business_id}/reviews.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"biz_elite_ac_llc_jacksonville_fl","k":"param","n":"id","or":"business_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$NUMBER`","index$":0},{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$NUMBER`","index$":1},{"a":true,"k":"query","n":"rating","or":"rating","r":false,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/v1/businesses/{business_id}/reviews.json","q":{"exist":["id"]},"r":{"param":{"business_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"businesses"},{"var":"id"},{"lit":"reviews.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"business_review","name__orig":"business_review","Name":"BusinessReview","name_":"business_review","name-":"business-review","NAME":"BUSINESS_REVIEW","index$":13}, {"active":true,"entity":"business_review","key$":"BasicBusinessReviewFlow","kind":"basic","name":"BasicBusinessReviewFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"business_review_ref01","srcdatavar":"business_review_ref01_data","suffix":"_dt0"},"m":{"id":"business_review01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-business_review_ref01"}}],"index$":0,"route":"GET /v1/businesses/{business_id}/reviews.json","record":{}}]}, 'BusinessReview', {"GET /v1/businesses/{business_id}/reviews.json":{"protocol":"http","parameters":[{"name":"business_id","in":"path","required":true,"description":"Loppee business id.","schema":{"type":"string"},"example":"biz_elite_ac_llc_jacksonville_fl","index$":0},{"name":"page","in":"query","required":false,"description":"1-based page number (default 1). Out-of-range pages return an honest empty page.","schema":{"type":"number"},"index$":1},{"name":"limit","in":"query","required":false,"description":"Reviews per page (1-50, default 5).","schema":{"type":"number"},"index$":2},{"name":"rating","in":"query","required":false,"description":"Star-rating filter: comma-separated whole values 1-5, e.g. rating=1 or rating=4,5. Omit for all ratings.","schema":{"type":"string"},"index$":3}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let business_review_ref01_data = Object.values(setup.data.existing.business_review)[0] as any

    // LOAD
    const business_review_ref01_ent = client.BusinessReview()
    const business_review_ref01_match_dt0: any = {}
    business_review_ref01_match_dt0.id = business_review_ref01_data.id
    const business_review_ref01_data_dt0 = (await business_review_ref01_ent.load(business_review_ref01_match_dt0)).data()
    assert(business_review_ref01_data_dt0.id === business_review_ref01_data.id)


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
      '../../../../.sdk/test/entity/business_review/BusinessReviewTestData.json')

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
    ['business_review01','business_review02','business_review03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LOPPEE_BUSINESS_TEST_BUSINESS_REVIEW_ENTID': idmap,
    'LOPPEE_BUSINESS_TEST_LIVE': 'FALSE',
    'LOPPEE_BUSINESS_TEST_EXPLAIN': 'FALSE',
    'LOPPEE_BUSINESS_APIKEY': '',
  })

  idmap = env['LOPPEE_BUSINESS_TEST_BUSINESS_REVIEW_ENTID']

  const live = 'TRUE' === env.LOPPEE_BUSINESS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LOPPEE_BUSINESS_TEST_BUSINESS_REVIEW_ENTID']
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
  
