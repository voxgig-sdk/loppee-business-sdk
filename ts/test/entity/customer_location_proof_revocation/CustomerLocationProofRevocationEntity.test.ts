

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


describe('CustomerLocationProofRevocationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LOPPEE_BUSINESS_TEST_LIVE=TRUE.
  afterEach(liveDelay('LOPPEE_BUSINESS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LoppeeBusinessSDK.test()
    const ent = testsdk.CustomerLocationProofRevocation()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = LoppeeBusinessSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.CustomerLocationProofRevocation().create({"accuracy_meters":"x","captured_at":"x","latitude":1,"longitude":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LOPPEE_BUSINESS_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'customer_location_proof_revocation.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"accuracy_meters":{"a":true,"h":"Accuracy Meters","n":"accuracy_meters","r":true,"t":"`$NUMBER`","key$":"accuracy_meters","index$":0},"captured_at":{"a":true,"fo":"date-time","h":"Captured At","n":"captured_at","r":true,"t":"`$STRING`","key$":"captured_at","index$":1},"latitude":{"a":true,"h":"Latitude","n":"latitude","r":true,"t":"`$NUMBER`","key$":"latitude","index$":2},"longitude":{"a":true,"h":"Longitude","n":"longitude","r":true,"t":"`$NUMBER`","key$":"longitude","index$":3}},"name":"customer_location_proof_revocation","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["accuracy_meters","captured_at","latitude","longitude"],"co":{"id":"POST /v1/account/location-proofs","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/account/location-proofs","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"account"},{"lit":"location-proofs"}],"t":{"req":{"accuracy_meters":"`reqdata.accuracy_meter`","captured_at":"`reqdata.captured_at`","latitude":"`reqdata.latitude`","longitude":"`reqdata.longitude`"},"res":"`body`"},"index$":0}],"key$":"create"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /v1/account/location-proofs/{location_proof_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"location_proof_id","or":"location_proof_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/v1/account/location-proofs/{location_proof_id}","q":{"exist":["location_proof_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"account"},{"lit":"location-proofs"},{"var":"location_proof_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[]},"key$":"customer_location_proof_revocation","name__orig":"customer_location_proof_revocation","Name":"CustomerLocationProofRevocation","name_":"customer_location_proof_revocation","name-":"customer-location-proof-revocation","NAME":"CUSTOMER_LOCATION_PROOF_REVOCATION","index$":27}, {"active":true,"entity":"customer_location_proof_revocation","key$":"BasicCustomerLocationProofRevocationFlow","kind":"basic","name":"BasicCustomerLocationProofRevocationFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"customer_location_proof_revocation_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":false,"d":{},"i":{"ref":"customer_location_proof_revocation_ref01","suffix":"_rm0"},"m":{"id":"customer_location_proof_revocation01"},"o":"remove","s":[],"v":[],"unreachable":true}]}, 'CustomerLocationProofRevocation', {"POST /v1/account/location-proofs":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","additionalProperties":false,"required":["latitude","longitude","accuracy_meters","captured_at"],"properties":{"latitude":{"type":"number","minimum":-90,"maximum":90,"key$":"latitude"},"longitude":{"type":"number","minimum":-180,"maximum":180,"key$":"longitude"},"accuracy_meters":{"type":"number","exclusiveMinimum":0,"maximum":500,"key$":"accuracy_meters"},"captured_at":{"type":"string","format":"date-time","key$":"captured_at"}},"x-ref":"#/components/schemas/CustomerLocationProofRequest","index$":1}}}},"parameters":[]},"DELETE /v1/account/location-proofs/{location_proof_id}":{"protocol":"http","parameters":[{"name":"location_proof_id","in":"path","required":true,"schema":{"type":"string","format":"uuid"},"index$":0}]}}, { strict: LIVE_STRICT, t }, 'TRUE' === process.env.VOXGIG_GETONLY_GUARD ? {"customer_location_proof_revocation.create.0":"GET-only live run: needs POST /v1/account/location-proofs","customer_location_proof_revocation.remove.1":"GET-only live run: needs DELETE /v1/account/location-proofs/{location_proof_id}"} : {})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const customer_location_proof_revocation_ref01_ent = client.CustomerLocationProofRevocation()
    let customer_location_proof_revocation_ref01_data = setup.data.new.customer_location_proof_revocation['customer_location_proof_revocation_ref01']

    customer_location_proof_revocation_ref01_data = (await customer_location_proof_revocation_ref01_ent.create(customer_location_proof_revocation_ref01_data)).data()
    assert(null != customer_location_proof_revocation_ref01_data)


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
      '../../../../.sdk/test/entity/customer_location_proof_revocation/CustomerLocationProofRevocationTestData.json')

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
    ['customer_location_proof_revocation01','customer_location_proof_revocation02','customer_location_proof_revocation03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LOPPEE_BUSINESS_TEST_CUSTOMER_LOCATION_PROOF_REVOCATION_ENTID': idmap,
    'LOPPEE_BUSINESS_TEST_LIVE': 'FALSE',
    'LOPPEE_BUSINESS_TEST_EXPLAIN': 'FALSE',
    'LOPPEE_BUSINESS_APIKEY': '',
  })

  idmap = env['LOPPEE_BUSINESS_TEST_CUSTOMER_LOCATION_PROOF_REVOCATION_ENTID']

  const live = 'TRUE' === env.LOPPEE_BUSINESS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LOPPEE_BUSINESS_TEST_CUSTOMER_LOCATION_PROOF_REVOCATION_ENTID']
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
  
