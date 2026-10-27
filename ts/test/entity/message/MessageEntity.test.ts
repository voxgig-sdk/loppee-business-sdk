

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


describe('MessageEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LOPPEE_BUSINESS_TEST_LIVE=TRUE.
  afterEach(liveDelay('LOPPEE_BUSINESS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LoppeeBusinessSDK.test()
    const ent = testsdk.Message()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = LoppeeBusinessSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Message().create({"account_id":1,"client_message_id":"x","message":"x","subject":"x","target_business_id":"x","target_business_name":"x","target_business_source":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LOPPEE_BUSINESS_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'message.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"account_id":{"a":true,"h":"Account Id","n":"account_id","r":true,"t":"`$STRING`","key$":"account_id","index$":0},"client_message_id":{"a":true,"h":"Client Message Id","n":"client_message_id","r":true,"sh":"Caller-stable retry key.","t":"`$STRING`","key$":"client_message_id","index$":1},"conversation_id":{"a":true,"h":"Conversation Id","n":"conversation_id","r":true,"t":"`$STRING`","key$":"conversation_id","index$":2},"created_at":{"a":true,"h":"Created At","n":"created_at","r":true,"t":"`$STRING`","key$":"created_at","index$":3},"delivery":{"a":true,"h":"Delivery","n":"delivery","r":false,"t":"`$ANY`","key$":"delivery","index$":4},"idempotent_replay":{"a":true,"h":"Idempotent Replay","n":"idempotent_replay","r":true,"t":"`$BOOLEAN`","key$":"idempotent_replay","index$":5},"interaction_id":{"a":true,"h":"Interaction Id","n":"interaction_id","r":true,"t":"`$STRING`","key$":"interaction_id","index$":6},"message":{"a":true,"h":"Message","n":"message","r":true,"t":"`$STRING`","key$":"message","index$":7},"moderation_required":{"a":true,"h":"Moderation Required","n":"moderation_required","r":false,"t":"`$ANY`","key$":"moderation_required","index$":8},"source_path":{"a":true,"h":"Source Path","n":"source_path","r":false,"t":"`$STRING`","key$":"source_path","index$":9},"status":{"a":true,"h":"Status","n":"status","r":true,"t":"`$ANY`","key$":"status","index$":10},"subject":{"a":true,"h":"Subject","n":"subject","op":{"create":{"req":true,"type":"`$STRING`"}},"r":false,"t":"`$STRING`","key$":"subject","index$":11},"target_business_id":{"a":true,"h":"Target Business Id","n":"target_business_id","r":true,"t":"`$STRING`","key$":"target_business_id","index$":12},"target_business_name":{"a":true,"h":"Target Business Name","n":"target_business_name","op":{"create":{"req":true,"type":"`$STRING`"}},"r":false,"t":"`$STRING`","key$":"target_business_name","index$":13},"target_business_source":{"a":true,"h":"Target Business Source","n":"target_business_source","op":{"create":{"req":true,"type":"`$STRING`"}},"r":false,"t":"`$STRING`","key$":"target_business_source","index$":14}},"name":"message","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["message","source_path","subject","target_business_id","target_business_name","target_business_source"],"co":{"id":"POST /v1/actions/business-message","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/actions/business-message","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"actions"},{"lit":"business-message"}],"t":{"req":{"message":"`reqdata.message`","source_path":"`reqdata.source_path`","subject":"`reqdata.subject`","target_business_id":"`reqdata.target_business_id`","target_business_name":"`reqdata.target_business_name`","target_business_source":"`reqdata.target_business_source`"},"res":"`body`"},"index$":0},{"a":true,"bf":["account_id","client_message_id","message","subject","target_business_id","target_business_name","target_business_source"],"co":{"id":"POST /v1/actions/message-request","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/actions/message-request","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"actions"},{"lit":"message-request"}],"t":{"req":{"account_id":"`reqdata.account_id`","client_message_id":"`reqdata.client_message_id`","message":"`reqdata.message`","subject":"`reqdata.subject`","target_business_id":"`reqdata.target_business_id`","target_business_name":"`reqdata.target_business_name`","target_business_source":"`reqdata.target_business_source`"},"res":"`body`"},"index$":1}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"message","name__orig":"message","Name":"Message","name_":"message","name-":"message","NAME":"MESSAGE","index$":36}, {"active":true,"entity":"message","key$":"BasicMessageFlow","kind":"basic","name":"BasicMessageFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"message_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'Message', {"POST /v1/actions/business-message":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["target_business_id","message"],"additionalProperties":false,"properties":{"target_business_id":{"type":"string","minLength":1,"key$":"target_business_id"},"target_business_name":{"type":"string","key$":"target_business_name"},"target_business_source":{"type":"string","key$":"target_business_source"},"subject":{"type":"string","key$":"subject"},"message":{"type":"string","minLength":1,"maxLength":4000,"key$":"message"},"source_path":{"type":"string","key$":"source_path"}},"x-ref":"#/components/schemas/PublicMessageRequest","index$":1}}}},"parameters":[]},"POST /v1/actions/message-request":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["account_id","target_business_id","target_business_name","target_business_source","subject","message","client_message_id"],"additionalProperties":false,"properties":{"account_id":{"type":"string","minLength":1,"key$":"account_id"},"target_business_id":{"type":"string","minLength":1,"key$":"target_business_id"},"target_business_name":{"type":"string","minLength":1,"key$":"target_business_name"},"target_business_source":{"type":"string","minLength":1,"key$":"target_business_source"},"subject":{"type":"string","minLength":1,"key$":"subject"},"message":{"type":"string","minLength":1,"key$":"message"},"client_message_id":{"type":"string","minLength":8,"maxLength":80,"pattern":"^[A-Za-z0-9_-]{8,80}$","description":"Caller-stable retry key. Exact replay is idempotent; reuse with different content is rejected.","key$":"client_message_id"}},"x-ref":"#/components/schemas/MessageRequest","index$":1}}}},"parameters":[]}}, { strict: LIVE_STRICT, t }, 'TRUE' === process.env.VOXGIG_GETONLY_GUARD ? {"message.create.0":"GET-only live run: needs POST /v1/actions/business-message"} : {})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const message_ref01_ent = client.Message()
    let message_ref01_data = setup.data.new.message['message_ref01']

    message_ref01_data = (await message_ref01_ent.create(message_ref01_data)).data()
    assert(null != message_ref01_data)


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
      '../../../../.sdk/test/entity/message/MessageTestData.json')

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
    ['message01','message02','message03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LOPPEE_BUSINESS_TEST_MESSAGE_ENTID': idmap,
    'LOPPEE_BUSINESS_TEST_LIVE': 'FALSE',
    'LOPPEE_BUSINESS_TEST_EXPLAIN': 'FALSE',
    'LOPPEE_BUSINESS_APIKEY': '',
  })

  idmap = env['LOPPEE_BUSINESS_TEST_MESSAGE_ENTID']

  const live = 'TRUE' === env.LOPPEE_BUSINESS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LOPPEE_BUSINESS_TEST_MESSAGE_ENTID']
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
  
