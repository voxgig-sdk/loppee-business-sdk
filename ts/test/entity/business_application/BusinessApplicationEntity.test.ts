

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


describe('BusinessApplicationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LOPPEE_BUSINESS_TEST_LIVE=TRUE.
  afterEach(liveDelay('LOPPEE_BUSINESS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LoppeeBusinessSDK.test()
    const ent = testsdk.BusinessApplication()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = LoppeeBusinessSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.BusinessApplication().create({"application":"x","business_id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LOPPEE_BUSINESS_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'business_application.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"application":{"a":true,"h":"Application","n":"application","r":true,"t":"`$OBJECT`","key$":"application","index$":0},"application_id":{"a":true,"h":"Application Id","n":"application_id","r":true,"t":"`$STRING`","key$":"application_id","index$":1},"business_id":{"a":true,"h":"Business Id","n":"business_id","op":{"create":{"req":false,"type":"`$STRING`"}},"r":true,"t":"`$STRING`","key$":"business_id","index$":2},"claim_id":{"a":true,"h":"Claim Id","n":"claim_id","op":{"create":{"req":false,"type":"`$STRING`"}},"r":true,"t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"claim_id","index$":3},"created_at":{"a":true,"h":"Created At","n":"created_at","r":true,"t":"`$STRING`","key$":"created_at","index$":4},"existing_business":{"a":true,"h":"Existing Business","n":"existing_business","r":true,"t":"`$BOOLEAN`","key$":"existing_business","index$":5},"files":{"a":true,"h":"Files","n":"files","r":false,"t":"`$ARRAY`","key$":"files","index$":6},"listing_id":{"a":true,"h":"Listing Id","n":"listing_id","r":false,"t":"`$STRING`","key$":"listing_id","index$":7},"pipeline_status":{"a":true,"h":"Pipeline Status","n":"pipeline_status","r":true,"t":"`$STRING`","key$":"pipeline_status","index$":8},"status":{"a":true,"h":"Status","n":"status","r":true,"t":"`$ANY`","key$":"status","index$":9},"trust_model_version":{"a":true,"h":"Trust Model Version","n":"trust_model_version","r":true,"t":"`$ANY`","key$":"trust_model_version","index$":10},"uploaded_files":{"a":true,"h":"Uploaded Files","n":"uploaded_files","r":true,"t":"`$NUMBER`","key$":"uploaded_files","index$":11}},"name":"business_application","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["application","business_id","claim_id","files","listing_id"],"co":{"id":"POST /v1/actions/business-application","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/actions/business-application","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"actions"},{"lit":"business-application"}],"t":{"req":{"application":"`reqdata.application`","business_id":"`reqdata.business_id`","claim_id":"`reqdata.claim_id`","files":"`reqdata.file`","listing_id":"`reqdata.listing_id`"},"res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"business_application","name__orig":"business_application","Name":"BusinessApplication","name_":"business_application","name-":"business-application","NAME":"BUSINESS_APPLICATION","index$":8}, {"active":true,"entity":"business_application","key$":"BasicBusinessApplicationFlow","kind":"basic","name":"BasicBusinessApplicationFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"business_application_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'BusinessApplication', {"POST /v1/actions/business-application":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["application"],"additionalProperties":false,"properties":{"application":{"type":"object","required":["legalName","displayName","website","phone","streetAddress","city","state","zip","category","taxonomyCategoryAliases","ownerEmail"],"additionalProperties":false,"properties":{"legalName":{"type":"string","minLength":1},"displayName":{"type":"string","minLength":1},"logoFileName":{"type":"string"},"businessPhotoFileNames":{"type":"array","items":{"type":"string"}},"website":{"type":"string","minLength":1},"phone":{"type":"string","minLength":1},"streetAddress":{"type":"string","minLength":1},"city":{"type":"string","minLength":1},"state":{"type":"string","minLength":1},"zip":{"type":"string","minLength":1},"category":{"type":"string","minLength":1},"taxonomyCategoryAliases":{"type":"array","minItems":1,"maxItems":3,"uniqueItems":true,"items":{"type":"string","minLength":1}},"licenseNumber":{"type":"string"},"licenseState":{"type":"string"},"insuranceFileName":{"type":"string"},"insuranceStatus":{"enum":["not_provided","provided"],"description":"Insurance certificate provided by the business. Not independently confirmed by Loppee."},"googleBusinessProfileUrl":{"type":"string"},"facebookPageUrl":{"type":"string"},"bbbProfileUrl":{"type":"string"},"services":{"type":"string"},"serviceAreas":{"type":"string"},"categoryEvidence":{"type":"object","additionalProperties":{"type":"string"}},"complianceAttestations":{"type":"object","additionalProperties":{"type":"boolean"}},"ownerEmail":{"type":"string","minLength":1},"notes":{"type":"string"}},"key$":"application"},"claim_id":{"type":"string","key$":"claim_id"},"business_id":{"type":"string","key$":"business_id"},"listing_id":{"type":"string","key$":"listing_id"},"files":{"type":"array","items":{"type":"object","required":["kind","fileName","contentType","sizeBytes","dataBase64"],"additionalProperties":false,"properties":{"kind":{"enum":[]},"fileName":{"type":"string","minLength":1},"contentType":{"type":"string","minLength":1},"sizeBytes":{"type":"number","minimum":1},"dataBase64":{"type":"string","minLength":1}}},"key$":"files"}},"x-ref":"#/components/schemas/BusinessApplicationRequest","index$":1}}}},"parameters":[]}}, { strict: LIVE_STRICT, t }, 'TRUE' === process.env.VOXGIG_GETONLY_GUARD ? {"business_application.create.0":"GET-only live run: needs POST /v1/actions/business-application"} : {})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const business_application_ref01_ent = client.BusinessApplication()
    let business_application_ref01_data = setup.data.new.business_application['business_application_ref01']

    business_application_ref01_data = (await business_application_ref01_ent.create(business_application_ref01_data)).data()
    assert(null != business_application_ref01_data)


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
      '../../../../.sdk/test/entity/business_application/BusinessApplicationTestData.json')

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
    ['business_application01','business_application02','business_application03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LOPPEE_BUSINESS_TEST_BUSINESS_APPLICATION_ENTID': idmap,
    'LOPPEE_BUSINESS_TEST_LIVE': 'FALSE',
    'LOPPEE_BUSINESS_TEST_EXPLAIN': 'FALSE',
    'LOPPEE_BUSINESS_APIKEY': '',
  })

  idmap = env['LOPPEE_BUSINESS_TEST_BUSINESS_APPLICATION_ENTID']

  const live = 'TRUE' === env.LOPPEE_BUSINESS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LOPPEE_BUSINESS_TEST_BUSINESS_APPLICATION_ENTID']
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
  
