

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


describe('WithdrawJobApplicationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LOPPEE_BUSINESS_TEST_LIVE=TRUE.
  afterEach(liveDelay('LOPPEE_BUSINESS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LoppeeBusinessSDK.test()
    const ent = testsdk.WithdrawJobApplication()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = LoppeeBusinessSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.WithdrawJobApplication().create({"account_id":1,"application_id":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LOPPEE_BUSINESS_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'withdraw_job_application.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"account_id":{"a":true,"h":"Account Id","n":"account_id","r":true,"t":"`$STRING`","key$":"account_id","index$":0},"already_withdrawn":{"a":true,"h":"Already Withdrawn","n":"already_withdrawn","r":true,"t":"`$BOOLEAN`","key$":"already_withdrawn","index$":1},"application":{"a":true,"h":"Application","n":"application","r":true,"t":"`$OBJECT`","key$":"application","index$":2},"application_id":{"a":true,"h":"Application Id","n":"application_id","r":true,"t":"`$STRING`","key$":"application_id","index$":3},"status":{"a":true,"h":"Status","n":"status","r":true,"t":"`$ANY`","key$":"status","index$":4}},"name":"withdraw_job_application","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["account_id","application_id"],"co":{"id":"POST /v1/actions/withdraw-job-application","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/actions/withdraw-job-application","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"actions"},{"lit":"withdraw-job-application"}],"t":{"req":{"account_id":"`reqdata.account_id`","application_id":"`reqdata.application_id`"},"res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"withdraw_job_application","name__orig":"withdraw_job_application","Name":"WithdrawJobApplication","name_":"withdraw_job_application","name-":"withdraw-job-application","NAME":"WITHDRAW_JOB_APPLICATION","index$":61}, {"active":true,"entity":"withdraw_job_application","key$":"BasicWithdrawJobApplicationFlow","kind":"basic","name":"BasicWithdrawJobApplicationFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"withdraw_job_application_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'WithdrawJobApplication', {"POST /v1/actions/withdraw-job-application":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["account_id","application_id"],"additionalProperties":false,"properties":{"account_id":{"type":"string","minLength":1,"key$":"account_id"},"application_id":{"type":"string","minLength":1,"key$":"application_id"}},"x-ref":"#/components/schemas/WithdrawJobApplicationRequest","index$":1}}}},"parameters":[]}}, { strict: LIVE_STRICT, t }, 'TRUE' === process.env.VOXGIG_GETONLY_GUARD ? {"withdraw_job_application.create.0":"GET-only live run: needs POST /v1/actions/withdraw-job-application"} : {})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const withdraw_job_application_ref01_ent = client.WithdrawJobApplication()
    let withdraw_job_application_ref01_data = setup.data.new.withdraw_job_application['withdraw_job_application_ref01']

    withdraw_job_application_ref01_data = (await withdraw_job_application_ref01_ent.create(withdraw_job_application_ref01_data)).data()
    assert(null != withdraw_job_application_ref01_data)


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
      '../../../../.sdk/test/entity/withdraw_job_application/WithdrawJobApplicationTestData.json')

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
    ['withdraw_job_application01','withdraw_job_application02','withdraw_job_application03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LOPPEE_BUSINESS_TEST_WITHDRAW_JOB_APPLICATION_ENTID': idmap,
    'LOPPEE_BUSINESS_TEST_LIVE': 'FALSE',
    'LOPPEE_BUSINESS_TEST_EXPLAIN': 'FALSE',
    'LOPPEE_BUSINESS_APIKEY': '',
  })

  idmap = env['LOPPEE_BUSINESS_TEST_WITHDRAW_JOB_APPLICATION_ENTID']

  const live = 'TRUE' === env.LOPPEE_BUSINESS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LOPPEE_BUSINESS_TEST_WITHDRAW_JOB_APPLICATION_ENTID']
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
  
