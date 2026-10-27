

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


describe('OwnerWebhookRegistrationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LOPPEE_BUSINESS_TEST_LIVE=TRUE.
  afterEach(liveDelay('LOPPEE_BUSINESS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LoppeeBusinessSDK.test()
    const ent = testsdk.OwnerWebhookRegistration()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = LoppeeBusinessSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.OwnerWebhookRegistration().create({"business_id":1,"url":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LOPPEE_BUSINESS_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'owner_webhook_registration.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"business_id":{"a":true,"h":"Business Id","n":"business_id","r":false,"t":"`$STRING`","key$":"business_id","index$":0},"endpoint":{"a":true,"h":"Endpoint","n":"endpoint","r":true,"t":"`$OBJECT`","key$":"endpoint","index$":1},"event_types":{"a":true,"h":"Event Types","n":"event_types","r":false,"t":"`$ARRAY`","key$":"event_types","index$":2},"one_time_display":{"a":true,"h":"One Time Display","n":"one_time_display","r":true,"t":"`$ANY`","key$":"one_time_display","index$":3},"signing_secret":{"a":true,"h":"Signing Secret","n":"signing_secret","r":true,"t":"`$STRING`","key$":"signing_secret","index$":4},"status":{"a":true,"h":"Status","n":"status","r":true,"t":"`$ANY`","key$":"status","index$":5},"url":{"a":true,"h":"Url","n":"url","r":true,"t":"`$STRING`","key$":"url","index$":6}},"name":"owner_webhook_registration","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":false,"co":{"id":"POST /v1/owner/webhooks/{endpoint_id}/rotate-secret","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"webhook_id","or":"endpoint_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/owner/webhooks/{endpoint_id}/rotate-secret","q":{"exist":["webhook_id"]},"r":{"param":{"endpoint_id":"webhook_id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"owner"},{"lit":"webhooks"},{"var":"webhook_id"},{"lit":"rotate-secret"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"bf":["business_id","event_types","url"],"co":{"id":"POST /v1/owner/webhooks","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/owner/webhooks","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"owner"},{"lit":"webhooks"}],"t":{"req":{"business_id":"`reqdata.business_id`","event_types":"`reqdata.event_type`","url":"`reqdata.url`"},"res":"`body`"},"index$":1}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"owner_webhook_registration","name__orig":"owner_webhook_registration","Name":"OwnerWebhookRegistration","name_":"owner_webhook_registration","name-":"owner-webhook-registration","NAME":"OWNER_WEBHOOK_REGISTRATION","index$":43}, {"active":true,"entity":"owner_webhook_registration","key$":"BasicOwnerWebhookRegistrationFlow","kind":"basic","name":"BasicOwnerWebhookRegistrationFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"owner_webhook_registration_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'OwnerWebhookRegistration', {"POST /v1/owner/webhooks/{endpoint_id}/rotate-secret":{"protocol":"http","requestBody":{"required":false,"content":{"application/json":{"schema":{"type":"object","maxProperties":0,"additionalProperties":false,"x-ref":"#/components/schemas/EmptyRequest","index$":1}}}},"parameters":[{"name":"endpoint_id","in":"path","required":true,"description":"Owner webhook endpoint id.","schema":{"type":"string"},"index$":0}]},"POST /v1/owner/webhooks":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["url"],"additionalProperties":false,"properties":{"business_id":{"type":"string","key$":"business_id"},"url":{"type":"string","pattern":"^https://","key$":"url"},"event_types":{"type":"array","items":{"type":"string"},"key$":"event_types"}},"x-ref":"#/components/schemas/OwnerWebhookRegistrationRequest","index$":1}}}},"parameters":[]}}, { strict: LIVE_STRICT, t }, 'TRUE' === process.env.VOXGIG_GETONLY_GUARD ? {"owner_webhook_registration.create.0":"GET-only live run: needs POST /v1/owner/webhooks/{endpoint_id}/rotate-secret"} : {})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const owner_webhook_registration_ref01_ent = client.OwnerWebhookRegistration()
    let owner_webhook_registration_ref01_data = setup.data.new.owner_webhook_registration['owner_webhook_registration_ref01']

    owner_webhook_registration_ref01_data = (await owner_webhook_registration_ref01_ent.create(owner_webhook_registration_ref01_data)).data()
    assert(null != owner_webhook_registration_ref01_data)


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
      '../../../../.sdk/test/entity/owner_webhook_registration/OwnerWebhookRegistrationTestData.json')

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
    ['owner_webhook_registration01','owner_webhook_registration02','owner_webhook_registration03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LOPPEE_BUSINESS_TEST_OWNER_WEBHOOK_REGISTRATION_ENTID': idmap,
    'LOPPEE_BUSINESS_TEST_LIVE': 'FALSE',
    'LOPPEE_BUSINESS_TEST_EXPLAIN': 'FALSE',
    'LOPPEE_BUSINESS_APIKEY': '',
  })

  idmap = env['LOPPEE_BUSINESS_TEST_OWNER_WEBHOOK_REGISTRATION_ENTID']

  const live = 'TRUE' === env.LOPPEE_BUSINESS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LOPPEE_BUSINESS_TEST_OWNER_WEBHOOK_REGISTRATION_ENTID']
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
  
