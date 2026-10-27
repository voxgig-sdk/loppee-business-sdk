

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


describe('ChatAttachmentEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LOPPEE_BUSINESS_TEST_LIVE=TRUE.
  afterEach(liveDelay('LOPPEE_BUSINESS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LoppeeBusinessSDK.test()
    const ent = testsdk.ChatAttachment()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = LoppeeBusinessSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.ChatAttachment().create({"conversation_id":1,"content_type":"x","data_base64":"x","file_name":"x","size_bytes":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LOPPEE_BUSINESS_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'chat_attachment.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"byteSize":{"a":true,"h":"Byte Size","n":"byteSize","r":true,"t":"`$INTEGER`","key$":"byteSize","index$":0},"content_type":{"a":true,"h":"Content Type","n":"content_type","r":true,"t":"`$ANY`","key$":"content_type","index$":1},"data_base64":{"a":true,"h":"Data Base64","n":"data_base64","r":true,"t":"`$STRING`","key$":"data_base64","index$":2},"fileName":{"a":true,"h":"File Name","n":"fileName","r":true,"t":"`$STRING`","key$":"fileName","index$":3},"file_name":{"a":true,"h":"File Name","n":"file_name","r":true,"t":"`$STRING`","key$":"file_name","index$":4},"id":{"a":true,"h":"Id","n":"id","r":true,"t":"`$STRING`","key$":"id","index$":5},"mediaType":{"a":true,"h":"Media Type","n":"mediaType","r":true,"t":"`$STRING`","key$":"mediaType","index$":6},"size_bytes":{"a":true,"h":"Size Bytes","n":"size_bytes","r":true,"t":"`$INTEGER`","key$":"size_bytes","index$":7}},"id":{"field":"id","name":"id"},"name":"chat_attachment","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["content_type","data_base64","file_name","size_bytes"],"co":{"id":"POST /v1/account/conversations/{conversation_id}/attachments","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"conversation_id","or":"conversation_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/account/conversations/{conversation_id}/attachments","q":{"exist":["conversation_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"account"},{"lit":"conversations"},{"var":"conversation_id"},{"lit":"attachments"}],"t":{"req":{"content_type":"`reqdata.content_type`","data_base64":"`reqdata.data_base64`","file_name":"`reqdata.file_name`","size_bytes":"`reqdata.size_byte`"},"res":"`body.attachment`"},"index$":0},{"a":true,"bf":["content_type","data_base64","file_name","size_bytes"],"co":{"id":"POST /v1/owner/messages/{interaction_id}/attachments","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"message_id","or":"interaction_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/owner/messages/{interaction_id}/attachments","q":{"exist":["message_id"]},"r":{"param":{"interaction_id":"message_id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"owner"},{"lit":"messages"},{"var":"message_id"},{"lit":"attachments"}],"t":{"req":{"content_type":"`reqdata.content_type`","data_base64":"`reqdata.data_base64`","file_name":"`reqdata.file_name`","size_bytes":"`reqdata.size_byte`"},"res":"`body.attachment`"},"index$":1},{"a":true,"bf":["content_type","data_base64","file_name","size_bytes"],"co":{"id":"POST /v1/admin/support/{conversation_id}/attachments","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"support_id","or":"conversation_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/admin/support/{conversation_id}/attachments","q":{"exist":["support_id"]},"r":{"param":{"conversation_id":"support_id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"admin"},{"lit":"support"},{"var":"support_id"},{"lit":"attachments"}],"t":{"req":{"content_type":"`reqdata.content_type`","data_base64":"`reqdata.data_base64`","file_name":"`reqdata.file_name`","size_bytes":"`reqdata.size_byte`"},"res":"`body.attachment`"},"index$":2},{"a":true,"bf":["content_type","data_base64","file_name","size_bytes"],"co":{"id":"POST /v1/owner/support/{conversation_id}/attachments","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"support_id","or":"conversation_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/owner/support/{conversation_id}/attachments","q":{"exist":["support_id"]},"r":{"param":{"conversation_id":"support_id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"owner"},{"lit":"support"},{"var":"support_id"},{"lit":"attachments"}],"t":{"req":{"content_type":"`reqdata.content_type`","data_base64":"`reqdata.data_base64`","file_name":"`reqdata.file_name`","size_bytes":"`reqdata.size_byte`"},"res":"`body.attachment`"},"index$":3}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.conversation"],["$.main.kit.entity.message"]]},"key$":"chat_attachment","name__orig":"chat_attachment","Name":"ChatAttachment","name_":"chat_attachment","name-":"chat-attachment","NAME":"CHAT_ATTACHMENT","index$":14}, {"active":true,"entity":"chat_attachment","key$":"BasicChatAttachmentFlow","kind":"basic","name":"BasicChatAttachmentFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"chat_attachment_ref01"},"m":{"support_id":"support01"},"o":"create","s":[],"v":[],"index$":0}]}, 'ChatAttachment', {"POST /v1/account/conversations/{conversation_id}/attachments":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["file_name","content_type","size_bytes","data_base64"],"additionalProperties":false,"properties":{"file_name":{"type":"string","minLength":1,"maxLength":180,"key$":"file_name"},"content_type":{"enum":["image/jpeg","image/png","image/webp","application/pdf"],"key$":"content_type"},"size_bytes":{"type":"integer","minimum":1,"maximum":10485760,"key$":"size_bytes"},"data_base64":{"type":"string","minLength":4,"key$":"data_base64"}},"x-ref":"#/components/schemas/ChatAttachmentRequest","index$":1}}}},"parameters":[{"name":"conversation_id","in":"path","required":true,"description":"Customer conversation id.","schema":{"type":"string"},"index$":0}]},"POST /v1/owner/messages/{interaction_id}/attachments":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["file_name","content_type","size_bytes","data_base64"],"additionalProperties":false,"properties":{"file_name":{"type":"string","minLength":1,"maxLength":180,"key$":"file_name"},"content_type":{"enum":["image/jpeg","image/png","image/webp","application/pdf"],"key$":"content_type"},"size_bytes":{"type":"integer","minimum":1,"maximum":10485760,"key$":"size_bytes"},"data_base64":{"type":"string","minLength":4,"key$":"data_base64"}},"x-ref":"#/components/schemas/ChatAttachmentRequest","index$":1}}}},"parameters":[{"name":"interaction_id","in":"path","required":true,"description":"Customer conversation id.","schema":{"type":"string"},"index$":0}]},"POST /v1/admin/support/{conversation_id}/attachments":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["file_name","content_type","size_bytes","data_base64"],"additionalProperties":false,"properties":{"file_name":{"type":"string","minLength":1,"maxLength":180,"key$":"file_name"},"content_type":{"enum":["image/jpeg","image/png","image/webp","application/pdf"],"key$":"content_type"},"size_bytes":{"type":"integer","minimum":1,"maximum":10485760,"key$":"size_bytes"},"data_base64":{"type":"string","minLength":4,"key$":"data_base64"}},"x-ref":"#/components/schemas/ChatAttachmentRequest","index$":1}}}},"parameters":[{"name":"conversation_id","in":"path","required":true,"description":"Support conversation id.","schema":{"type":"string"},"index$":0}]},"POST /v1/owner/support/{conversation_id}/attachments":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["file_name","content_type","size_bytes","data_base64"],"additionalProperties":false,"properties":{"file_name":{"type":"string","minLength":1,"maxLength":180,"key$":"file_name"},"content_type":{"enum":["image/jpeg","image/png","image/webp","application/pdf"],"key$":"content_type"},"size_bytes":{"type":"integer","minimum":1,"maximum":10485760,"key$":"size_bytes"},"data_base64":{"type":"string","minLength":4,"key$":"data_base64"}},"x-ref":"#/components/schemas/ChatAttachmentRequest","index$":1}}}},"parameters":[{"name":"conversation_id","in":"path","required":true,"description":"Support conversation id.","schema":{"type":"string"},"index$":0}]}}, { strict: LIVE_STRICT, t }, 'TRUE' === process.env.VOXGIG_GETONLY_GUARD ? {"chat_attachment.create.0":"GET-only live run: needs POST /v1/account/conversations/{conversation_id}/attachments"} : {})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const chat_attachment_ref01_ent = client.ChatAttachment()
    let chat_attachment_ref01_data = setup.data.new.chat_attachment['chat_attachment_ref01']
    chat_attachment_ref01_data['support_id'] = setup.idmap['support01']

    chat_attachment_ref01_data = (await chat_attachment_ref01_ent.create(chat_attachment_ref01_data)).data()
    assert(null != chat_attachment_ref01_data.id)


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
      '../../../../.sdk/test/entity/chat_attachment/ChatAttachmentTestData.json')

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
    ['chat_attachment01','chat_attachment02','chat_attachment03','conversation01','conversation02','conversation03','message01','message02','message03','support01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LOPPEE_BUSINESS_TEST_CHAT_ATTACHMENT_ENTID': idmap,
    'LOPPEE_BUSINESS_TEST_LIVE': 'FALSE',
    'LOPPEE_BUSINESS_TEST_EXPLAIN': 'FALSE',
    'LOPPEE_BUSINESS_APIKEY': '',
  })

  idmap = env['LOPPEE_BUSINESS_TEST_CHAT_ATTACHMENT_ENTID']

  const live = 'TRUE' === env.LOPPEE_BUSINESS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LOPPEE_BUSINESS_TEST_CHAT_ATTACHMENT_ENTID']
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
  
