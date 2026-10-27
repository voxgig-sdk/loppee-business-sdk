

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


describe('ConversationWorkflowEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LOPPEE_BUSINESS_TEST_LIVE=TRUE.
  afterEach(liveDelay('LOPPEE_BUSINESS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LoppeeBusinessSDK.test()
    const ent = testsdk.ConversationWorkflow()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = LoppeeBusinessSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.ConversationWorkflow().create({"message_id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LOPPEE_BUSINESS_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'conversation_workflow.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"priority":{"a":true,"h":"Priority","n":"priority","r":false,"t":"`$ANY`","key$":"priority","index$":0},"status":{"a":true,"h":"Status","n":"status","r":false,"t":"`$ANY`","key$":"status","index$":1}},"name":"conversation_workflow","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["priority","status"],"co":{"id":"POST /v1/owner/messages/{interaction_id}/workflow","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"message_id","or":"interaction_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/owner/messages/{interaction_id}/workflow","q":{"exist":["message_id"]},"r":{"param":{"interaction_id":"message_id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"owner"},{"lit":"messages"},{"var":"message_id"},{"lit":"workflow"}],"t":{"req":{"priority":"`reqdata.priority`","status":"`reqdata.status`"},"res":"`body.conversation`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.message"]]},"key$":"conversation_workflow","name__orig":"conversation_workflow","Name":"ConversationWorkflow","name_":"conversation_workflow","name-":"conversation-workflow","NAME":"CONVERSATION_WORKFLOW","index$":23}, {"active":true,"entity":"conversation_workflow","key$":"BasicConversationWorkflowFlow","kind":"basic","name":"BasicConversationWorkflowFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"conversation_workflow_ref01"},"m":{"message_id":"message01"},"o":"create","s":[],"v":[],"index$":0}]}, 'ConversationWorkflow', {"POST /v1/owner/messages/{interaction_id}/workflow":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","minProperties":1,"additionalProperties":false,"properties":{"status":{"enum":["new","open","waiting_business","waiting_customer","resolved","closed"],"key$":"status"},"priority":{"enum":["high","normal","low"],"key$":"priority"}},"x-ref":"#/components/schemas/ConversationWorkflowRequest","index$":1}}}},"parameters":[{"name":"interaction_id","in":"path","required":true,"description":"Customer conversation id.","schema":{"type":"string"},"index$":0}]}}, { strict: LIVE_STRICT, t }, 'TRUE' === process.env.VOXGIG_GETONLY_GUARD ? {"conversation_workflow.create.0":"GET-only live run: needs POST /v1/owner/messages/{interaction_id}/workflow"} : {})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const conversation_workflow_ref01_ent = client.ConversationWorkflow()
    let conversation_workflow_ref01_data = setup.data.new.conversation_workflow['conversation_workflow_ref01']
    conversation_workflow_ref01_data['message_id'] = setup.idmap['message01']

    conversation_workflow_ref01_data = (await conversation_workflow_ref01_ent.create(conversation_workflow_ref01_data)).data()
    assert(null != conversation_workflow_ref01_data)


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
      '../../../../.sdk/test/entity/conversation_workflow/ConversationWorkflowTestData.json')

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
    ['conversation_workflow01','conversation_workflow02','conversation_workflow03','message01','message02','message03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LOPPEE_BUSINESS_TEST_CONVERSATION_WORKFLOW_ENTID': idmap,
    'LOPPEE_BUSINESS_TEST_LIVE': 'FALSE',
    'LOPPEE_BUSINESS_TEST_EXPLAIN': 'FALSE',
    'LOPPEE_BUSINESS_APIKEY': '',
  })

  idmap = env['LOPPEE_BUSINESS_TEST_CONVERSATION_WORKFLOW_ENTID']

  const live = 'TRUE' === env.LOPPEE_BUSINESS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LOPPEE_BUSINESS_TEST_CONVERSATION_WORKFLOW_ENTID']
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
  
