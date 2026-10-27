

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


describe('CreateAgentApiKeyEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LOPPEE_BUSINESS_TEST_LIVE=TRUE.
  afterEach(liveDelay('LOPPEE_BUSINESS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LoppeeBusinessSDK.test()
    const ent = testsdk.CreateAgentApiKey()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = LoppeeBusinessSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.CreateAgentApiKey().create({"account_id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LOPPEE_BUSINESS_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'create_agent_api_key.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"account_id":{"a":true,"h":"Account Id","n":"account_id","r":true,"t":"`$STRING`","key$":"account_id","index$":0},"allowed_actions":{"a":true,"h":"Allowed Actions","n":"allowed_actions","r":false,"t":"`$ARRAY`","key$":"allowed_actions","index$":1},"allowed_business_ids":{"a":true,"h":"Allowed Business Ids","n":"allowed_business_ids","r":false,"t":"`$ARRAY`","key$":"allowed_business_ids","index$":2},"created_by":{"a":true,"h":"Created By","n":"created_by","r":true,"t":"`$STRING`","key$":"created_by","index$":3},"key":{"a":true,"h":"Key","n":"key","r":true,"t":"`$OBJECT`","key$":"key","index$":4},"label":{"a":true,"h":"Label","n":"label","r":false,"t":"`$STRING`","key$":"label","index$":5},"monthly_quota":{"a":true,"h":"Monthly Quota","n":"monthly_quota","r":false,"t":"`$NUMBER`","key$":"monthly_quota","index$":6},"notes":{"a":true,"h":"Notes","n":"notes","r":false,"t":"`$STRING`","key$":"notes","index$":7},"one_time_display":{"a":true,"h":"One Time Display","n":"one_time_display","r":true,"t":"`$ANY`","key$":"one_time_display","index$":8},"rate_limit_per_minute":{"a":true,"h":"Rate Limit Per Minute","n":"rate_limit_per_minute","r":false,"t":"`$NUMBER`","key$":"rate_limit_per_minute","index$":9},"raw_key":{"a":true,"h":"Raw Key","n":"raw_key","r":true,"t":"`$STRING`","key$":"raw_key","index$":10},"status":{"a":true,"h":"Status","n":"status","r":true,"t":"`$ANY`","key$":"status","index$":11}},"name":"create_agent_api_key","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["account_id","allowed_actions","allowed_business_ids","label","monthly_quota","notes","rate_limit_per_minute"],"co":{"id":"POST /v1/admin/agent-keys","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/admin/agent-keys","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"admin"},{"lit":"agent-keys"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"create_agent_api_key","name__orig":"create_agent_api_key","Name":"CreateAgentApiKey","name_":"create_agent_api_key","name-":"create-agent-api-key","NAME":"CREATE_AGENT_API_KEY","index$":24}, {"active":true,"entity":"create_agent_api_key","key$":"BasicCreateAgentApiKeyFlow","kind":"basic","name":"BasicCreateAgentApiKeyFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"create_agent_api_key_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'CreateAgentApiKey', {"POST /v1/admin/agent-keys":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["account_id"],"additionalProperties":true,"properties":{"account_id":{"type":"string","key$":"account_id"},"label":{"type":"string","key$":"label"},"allowed_actions":{"type":"array","items":{"type":"string"},"key$":"allowed_actions"},"allowed_business_ids":{"type":"array","items":{"type":"string"},"key$":"allowed_business_ids"},"monthly_quota":{"type":"number","key$":"monthly_quota"},"rate_limit_per_minute":{"type":"number","key$":"rate_limit_per_minute"},"notes":{"type":"string","key$":"notes"}},"x-ref":"#/components/schemas/CreateAgentApiKeyRequest","index$":1}}}},"parameters":[]}}, { strict: LIVE_STRICT, t }, 'TRUE' === process.env.VOXGIG_GETONLY_GUARD ? {"create_agent_api_key.create.0":"GET-only live run: needs POST /v1/admin/agent-keys"} : {})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const create_agent_api_key_ref01_ent = client.CreateAgentApiKey()
    let create_agent_api_key_ref01_data = setup.data.new.create_agent_api_key['create_agent_api_key_ref01']

    create_agent_api_key_ref01_data = (await create_agent_api_key_ref01_ent.create(create_agent_api_key_ref01_data)).data()
    assert(null != create_agent_api_key_ref01_data)


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
      '../../../../.sdk/test/entity/create_agent_api_key/CreateAgentApiKeyTestData.json')

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
    ['create_agent_api_key01','create_agent_api_key02','create_agent_api_key03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LOPPEE_BUSINESS_TEST_CREATE_AGENT_API_KEY_ENTID': idmap,
    'LOPPEE_BUSINESS_TEST_LIVE': 'FALSE',
    'LOPPEE_BUSINESS_TEST_EXPLAIN': 'FALSE',
    'LOPPEE_BUSINESS_APIKEY': '',
  })

  idmap = env['LOPPEE_BUSINESS_TEST_CREATE_AGENT_API_KEY_ENTID']

  const live = 'TRUE' === env.LOPPEE_BUSINESS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LOPPEE_BUSINESS_TEST_CREATE_AGENT_API_KEY_ENTID']
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
  
