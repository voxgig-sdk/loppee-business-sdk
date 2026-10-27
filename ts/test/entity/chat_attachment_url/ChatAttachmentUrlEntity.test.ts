

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


describe('ChatAttachmentUrlEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LOPPEE_BUSINESS_TEST_LIVE=TRUE.
  afterEach(liveDelay('LOPPEE_BUSINESS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LoppeeBusinessSDK.test()
    const ent = testsdk.ChatAttachmentUrl()
    assert(null != ent)
  })




  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LOPPEE_BUSINESS_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'chat_attachment_url.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"byte_size":{"a":true,"h":"Byte Size","n":"byte_size","r":true,"t":"`$INTEGER`","key$":"byte_size","index$":0},"expires_in_seconds":{"a":true,"h":"Expires In Seconds","n":"expires_in_seconds","r":true,"t":"`$ANY`","key$":"expires_in_seconds","index$":1},"file_name":{"a":true,"h":"File Name","n":"file_name","r":true,"t":"`$STRING`","key$":"file_name","index$":2},"id":{"a":true,"h":"Id","n":"id","r":true,"t":"`$STRING`","key$":"id","index$":3},"media_type":{"a":true,"h":"Media Type","n":"media_type","r":true,"t":"`$STRING`","key$":"media_type","index$":4},"signed_url":{"a":true,"h":"Signed Url","n":"signed_url","r":true,"t":"`$STRING`","key$":"signed_url","index$":5}},"id":{"field":"id","name":"id"},"name":"chat_attachment_url","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":false,"co":{"id":"POST /v1/account/conversations/{conversation_id}/attachments/{attachment_id}/url","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"attachment_id","or":"attachment_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"conversation_id","or":"conversation_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/v1/account/conversations/{conversation_id}/attachments/{attachment_id}/url","q":{"exist":["attachment_id","conversation_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"account"},{"lit":"conversations"},{"var":"conversation_id"},{"lit":"attachments"},{"var":"attachment_id"},{"lit":"url"}],"t":{"req":"`reqdata`","res":"`body.attachment`"},"index$":0},{"a":true,"bf":false,"co":{"id":"POST /v1/owner/messages/{interaction_id}/attachments/{attachment_id}/url","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"attachment_id","or":"attachment_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"message_id","or":"interaction_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/v1/owner/messages/{interaction_id}/attachments/{attachment_id}/url","q":{"exist":["attachment_id","message_id"]},"r":{"param":{"interaction_id":"message_id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"owner"},{"lit":"messages"},{"var":"message_id"},{"lit":"attachments"},{"var":"attachment_id"},{"lit":"url"}],"t":{"req":"`reqdata`","res":"`body.attachment`"},"index$":1},{"a":true,"bf":false,"co":{"id":"POST /v1/admin/support/{conversation_id}/attachments/{attachment_id}/url","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"attachment_id","or":"attachment_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"support_id","or":"conversation_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/v1/admin/support/{conversation_id}/attachments/{attachment_id}/url","q":{"exist":["attachment_id","support_id"]},"r":{"param":{"conversation_id":"support_id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"admin"},{"lit":"support"},{"var":"support_id"},{"lit":"attachments"},{"var":"attachment_id"},{"lit":"url"}],"t":{"req":"`reqdata`","res":"`body.attachment`"},"index$":2},{"a":true,"bf":false,"co":{"id":"POST /v1/owner/support/{conversation_id}/attachments/{attachment_id}/url","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"attachment_id","or":"attachment_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"support_id","or":"conversation_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/v1/owner/support/{conversation_id}/attachments/{attachment_id}/url","q":{"exist":["attachment_id","support_id"]},"r":{"param":{"conversation_id":"support_id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"owner"},{"lit":"support"},{"var":"support_id"},{"lit":"attachments"},{"var":"attachment_id"},{"lit":"url"}],"t":{"req":"`reqdata`","res":"`body.attachment`"},"index$":3}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.conversation"],["$.main.kit.entity.message"]]},"key$":"chat_attachment_url","name__orig":"chat_attachment_url","Name":"ChatAttachmentUrl","name_":"chat_attachment_url","name-":"chat-attachment-url","NAME":"CHAT_ATTACHMENT_URL","index$":15}, {"active":true,"entity":"chat_attachment_url","key$":"BasicChatAttachmentUrlFlow","kind":"basic","name":"BasicChatAttachmentUrlFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"chat_attachment_url_ref01"},"m":{"attachment_id":"attachment01","support_id":"support01"},"o":"create","s":[],"v":[],"index$":0}]}, 'ChatAttachmentUrl', {"POST /v1/account/conversations/{conversation_id}/attachments/{attachment_id}/url":{"protocol":"http","requestBody":{"required":false,"content":{"application/json":{"schema":{"type":"object","maxProperties":0,"additionalProperties":false,"x-ref":"#/components/schemas/EmptyRequest","index$":1}}}},"parameters":[{"name":"conversation_id","in":"path","required":true,"description":"Customer conversation id.","schema":{"type":"string"},"index$":0},{"name":"attachment_id","in":"path","required":true,"description":"Attachment id.","schema":{"type":"string"},"index$":1}]},"POST /v1/owner/messages/{interaction_id}/attachments/{attachment_id}/url":{"protocol":"http","requestBody":{"required":false,"content":{"application/json":{"schema":{"type":"object","maxProperties":0,"additionalProperties":false,"x-ref":"#/components/schemas/EmptyRequest","index$":1}}}},"parameters":[{"name":"interaction_id","in":"path","required":true,"description":"Customer conversation id.","schema":{"type":"string"},"index$":0},{"name":"attachment_id","in":"path","required":true,"description":"Attachment id.","schema":{"type":"string"},"index$":1}]},"POST /v1/admin/support/{conversation_id}/attachments/{attachment_id}/url":{"protocol":"http","requestBody":{"required":false,"content":{"application/json":{"schema":{"type":"object","maxProperties":0,"additionalProperties":false,"x-ref":"#/components/schemas/EmptyRequest","index$":1}}}},"parameters":[{"name":"conversation_id","in":"path","required":true,"description":"Support conversation id.","schema":{"type":"string"},"index$":0},{"name":"attachment_id","in":"path","required":true,"description":"Attachment id.","schema":{"type":"string"},"index$":1}]},"POST /v1/owner/support/{conversation_id}/attachments/{attachment_id}/url":{"protocol":"http","requestBody":{"required":false,"content":{"application/json":{"schema":{"type":"object","maxProperties":0,"additionalProperties":false,"x-ref":"#/components/schemas/EmptyRequest","index$":1}}}},"parameters":[{"name":"conversation_id","in":"path","required":true,"description":"Support conversation id.","schema":{"type":"string"},"index$":0},{"name":"attachment_id","in":"path","required":true,"description":"Attachment id.","schema":{"type":"string"},"index$":1}]}}, { strict: LIVE_STRICT, t }, 'TRUE' === process.env.VOXGIG_GETONLY_GUARD ? {"chat_attachment_url.create.0":"GET-only live run: needs POST /v1/account/conversations/{conversation_id}/attachments/{attachment_id}/url"} : {})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const chat_attachment_url_ref01_ent = client.ChatAttachmentUrl()
    let chat_attachment_url_ref01_data = setup.data.new.chat_attachment_url['chat_attachment_url_ref01']
    chat_attachment_url_ref01_data['attachment_id'] = setup.idmap['attachment01']
    chat_attachment_url_ref01_data['support_id'] = setup.idmap['support01']

    chat_attachment_url_ref01_data = (await chat_attachment_url_ref01_ent.create(chat_attachment_url_ref01_data)).data()
    assert(null != chat_attachment_url_ref01_data.id)


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
      '../../../../.sdk/test/entity/chat_attachment_url/ChatAttachmentUrlTestData.json')

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
    ['chat_attachment_url01','chat_attachment_url02','chat_attachment_url03','conversation01','conversation02','conversation03','message01','message02','message03','attachment01','support01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LOPPEE_BUSINESS_TEST_CHAT_ATTACHMENT_URL_ENTID': idmap,
    'LOPPEE_BUSINESS_TEST_LIVE': 'FALSE',
    'LOPPEE_BUSINESS_TEST_EXPLAIN': 'FALSE',
    'LOPPEE_BUSINESS_APIKEY': '',
  })

  idmap = env['LOPPEE_BUSINESS_TEST_CHAT_ATTACHMENT_URL_ENTID']

  const live = 'TRUE' === env.LOPPEE_BUSINESS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LOPPEE_BUSINESS_TEST_CHAT_ATTACHMENT_URL_ENTID']
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
  
