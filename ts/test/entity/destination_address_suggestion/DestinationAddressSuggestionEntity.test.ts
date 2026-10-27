

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


describe('DestinationAddressSuggestionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LOPPEE_BUSINESS_TEST_LIVE=TRUE.
  afterEach(liveDelay('LOPPEE_BUSINESS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LoppeeBusinessSDK.test()
    const ent = testsdk.DestinationAddressSuggestion()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = LoppeeBusinessSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.DestinationAddressSuggestion().create({"input":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LOPPEE_BUSINESS_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'destination_address_suggestion.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"input":{"a":true,"h":"Input","n":"input","r":true,"sh":"Normalized partial US service-address text.","t":"`$STRING`","key$":"input","index$":0},"suggestions":{"a":true,"h":"Suggestions","n":"suggestions","r":true,"t":"`$ARRAY`","key$":"suggestions","index$":1}},"name":"destination_address_suggestion","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["input"],"co":{"id":"POST /v1/account/destination-address-suggestions","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/account/destination-address-suggestions","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"account"},{"lit":"destination-address-suggestions"}],"t":{"req":{"input":"`reqdata.input`"},"res":"`body`"},"index$":0},{"a":true,"bf":["input"],"co":{"id":"POST /v1/destination-address-suggestions","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/destination-address-suggestions","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"destination-address-suggestions"}],"t":{"req":{"input":"`reqdata.input`"},"res":"`body`"},"index$":1}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"destination_address_suggestion","name__orig":"destination_address_suggestion","Name":"DestinationAddressSuggestion","name_":"destination_address_suggestion","name-":"destination-address-suggestion","NAME":"DESTINATION_ADDRESS_SUGGESTION","index$":28}, {"active":true,"entity":"destination_address_suggestion","key$":"BasicDestinationAddressSuggestionFlow","kind":"basic","name":"BasicDestinationAddressSuggestionFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"destination_address_suggestion_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'DestinationAddressSuggestion', {"POST /v1/account/destination-address-suggestions":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","additionalProperties":false,"required":["input"],"properties":{"input":{"type":"string","minLength":4,"maxLength":280,"description":"Normalized partial US service-address text. This first-party display request contains no session token, place id, coordinates, or proof authority.","key$":"input"}},"x-ref":"#/components/schemas/DestinationAddressSuggestionsRequest","index$":1}}}},"parameters":[]},"POST /v1/destination-address-suggestions":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","additionalProperties":false,"required":["input"],"properties":{"input":{"type":"string","minLength":4,"maxLength":280,"description":"Normalized partial US service-address text. This first-party display request contains no session token, place id, coordinates, or proof authority.","key$":"input"}},"x-ref":"#/components/schemas/DestinationAddressSuggestionsRequest","index$":1}}}},"parameters":[]}}, { strict: LIVE_STRICT, t }, 'TRUE' === process.env.VOXGIG_GETONLY_GUARD ? {"destination_address_suggestion.create.0":"GET-only live run: needs POST /v1/account/destination-address-suggestions"} : {})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const destination_address_suggestion_ref01_ent = client.DestinationAddressSuggestion()
    let destination_address_suggestion_ref01_data = setup.data.new.destination_address_suggestion['destination_address_suggestion_ref01']

    destination_address_suggestion_ref01_data = (await destination_address_suggestion_ref01_ent.create(destination_address_suggestion_ref01_data)).data()
    assert(null != destination_address_suggestion_ref01_data)


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
      '../../../../.sdk/test/entity/destination_address_suggestion/DestinationAddressSuggestionTestData.json')

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
    ['destination_address_suggestion01','destination_address_suggestion02','destination_address_suggestion03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LOPPEE_BUSINESS_TEST_DESTINATION_ADDRESS_SUGGESTION_ENTID': idmap,
    'LOPPEE_BUSINESS_TEST_LIVE': 'FALSE',
    'LOPPEE_BUSINESS_TEST_EXPLAIN': 'FALSE',
    'LOPPEE_BUSINESS_APIKEY': '',
  })

  idmap = env['LOPPEE_BUSINESS_TEST_DESTINATION_ADDRESS_SUGGESTION_ENTID']

  const live = 'TRUE' === env.LOPPEE_BUSINESS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LOPPEE_BUSINESS_TEST_DESTINATION_ADDRESS_SUGGESTION_ENTID']
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
  
