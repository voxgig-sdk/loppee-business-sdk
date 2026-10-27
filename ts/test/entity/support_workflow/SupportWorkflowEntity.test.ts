

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


describe('SupportWorkflowEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LOPPEE_BUSINESS_TEST_LIVE=TRUE.
  afterEach(liveDelay('LOPPEE_BUSINESS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LoppeeBusinessSDK.test()
    const ent = testsdk.SupportWorkflow()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = LoppeeBusinessSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.SupportWorkflow().create({"id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LOPPEE_BUSINESS_TEST_LIVE
    for (const op of []) {
      if (!live && maybeSkipControl(t, 'entityOp', 'support_workflow.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"category":{"a":true,"h":"Category","n":"category","r":false,"t":"`$ANY`","key$":"category","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":1},"priority":{"a":true,"h":"Priority","n":"priority","r":false,"t":"`$ANY`","key$":"priority","index$":2},"waiting_on":{"a":true,"h":"Waiting On","n":"waiting_on","r":false,"t":"`$ANY`","key$":"waiting_on","index$":3}},"id":{"field":"id","name":"id"},"name":"support_workflow","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["category","priority","waiting_on"],"co":{"id":"POST /v1/admin/support/{conversation_id}/workflow","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"conversation_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/admin/support/{conversation_id}/workflow","q":{"exist":["id"]},"r":{"param":{"conversation_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"admin"},{"lit":"support"},{"var":"id"},{"lit":"workflow"}],"t":{"req":{"category":"`reqdata.category`","priority":"`reqdata.priority`","waiting_on":"`reqdata.waiting_on`"},"res":"`body.conversation`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"support_workflow","name__orig":"support_workflow","Name":"SupportWorkflow","name_":"support_workflow","name-":"support-workflow","NAME":"SUPPORT_WORKFLOW","index$":56}, {"active":true,"entity":"support_workflow","key$":"BasicSupportWorkflowFlow","kind":"basic","name":"BasicSupportWorkflowFlow","param":{},"step":[{"a":false,"d":{},"i":{"ref":"support_workflow_ref01"},"m":{"conversation_id":"conversation01"},"o":"create","s":[],"v":[],"unreachable":true}]}, 'SupportWorkflow', {"POST /v1/admin/support/{conversation_id}/workflow":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","minProperties":1,"additionalProperties":false,"properties":{"category":{"enum":["verification","billing","profile","agent_api","technical","report","general"],"key$":"category"},"priority":{"enum":["urgent","high","normal","low"],"key$":"priority"},"waiting_on":{"enum":["support","owner","none"],"key$":"waiting_on"}},"x-ref":"#/components/schemas/SupportWorkflowRequest","index$":1}}}},"parameters":[{"name":"conversation_id","in":"path","required":true,"description":"Support conversation id.","schema":{"type":"string"},"index$":0}]}}, { strict: LIVE_STRICT, t }, 'TRUE' === process.env.VOXGIG_GETONLY_GUARD ? {"support_workflow.create.0":"GET-only live run: needs POST /v1/admin/support/{conversation_id}/workflow"} : {})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let support_workflow_ref01_data = Object.values(setup.data.existing.support_workflow)[0] as any

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
      '../../../../.sdk/test/entity/support_workflow/SupportWorkflowTestData.json')

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
    ['support_workflow01','support_workflow02','support_workflow03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LOPPEE_BUSINESS_TEST_SUPPORT_WORKFLOW_ENTID': idmap,
    'LOPPEE_BUSINESS_TEST_LIVE': 'FALSE',
    'LOPPEE_BUSINESS_TEST_EXPLAIN': 'FALSE',
    'LOPPEE_BUSINESS_APIKEY': '',
  })

  idmap = env['LOPPEE_BUSINESS_TEST_SUPPORT_WORKFLOW_ENTID']

  const live = 'TRUE' === env.LOPPEE_BUSINESS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LOPPEE_BUSINESS_TEST_SUPPORT_WORKFLOW_ENTID']
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
  
