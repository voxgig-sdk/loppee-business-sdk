

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


describe('UpdateAgentBillingAccountEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LOPPEE_BUSINESS_TEST_LIVE=TRUE.
  afterEach(liveDelay('LOPPEE_BUSINESS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LoppeeBusinessSDK.test()
    const ent = testsdk.UpdateAgentBillingAccount()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = LoppeeBusinessSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.UpdateAgentBillingAccount().create({"account_id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LOPPEE_BUSINESS_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'update_agent_billing_account.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"account_id":{"a":true,"h":"Account Id","n":"account_id","r":true,"t":"`$STRING`","key$":"account_id","index$":0},"billing_account":{"a":true,"h":"Billing Account","n":"billing_account","r":true,"t":"`$OBJECT`","key$":"billing_account","index$":1},"billing_status":{"a":true,"h":"Billing Status","n":"billing_status","r":false,"t":"`$STRING`","key$":"billing_status","index$":2},"included_actions":{"a":true,"h":"Included Actions","n":"included_actions","r":false,"t":"`$NUMBER`","key$":"included_actions","index$":3},"monthly_fee_cents":{"a":true,"h":"Monthly Fee Cents","n":"monthly_fee_cents","r":false,"t":"`$NUMBER`","key$":"monthly_fee_cents","index$":4},"overage_cents":{"a":true,"h":"Overage Cents","n":"overage_cents","r":false,"t":"`$NUMBER`","key$":"overage_cents","index$":5},"plan":{"a":true,"h":"Plan","n":"plan","r":false,"t":"`$STRING`","key$":"plan","index$":6},"status":{"a":true,"h":"Status","n":"status","r":true,"t":"`$ANY`","key$":"status","index$":7},"updated_by":{"a":true,"h":"Updated By","n":"updated_by","r":true,"t":"`$STRING`","key$":"updated_by","index$":8}},"name":"update_agent_billing_account","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["account_id","billing_status","included_actions","monthly_fee_cents","overage_cents","plan"],"co":{"id":"POST /v1/admin/agent-billing-accounts","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/admin/agent-billing-accounts","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"admin"},{"lit":"agent-billing-accounts"}],"t":{"req":{"account_id":"`reqdata.account_id`","billing_status":"`reqdata.billing_status`","included_actions":"`reqdata.included_action`","monthly_fee_cents":"`reqdata.monthly_fee_cent`","overage_cents":"`reqdata.overage_cent`","plan":"`reqdata.plan`"},"res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"update_agent_billing_account","name__orig":"update_agent_billing_account","Name":"UpdateAgentBillingAccount","name_":"update_agent_billing_account","name-":"update-agent-billing-account","NAME":"UPDATE_AGENT_BILLING_ACCOUNT","index$":60}, {"active":true,"entity":"update_agent_billing_account","key$":"BasicUpdateAgentBillingAccountFlow","kind":"basic","name":"BasicUpdateAgentBillingAccountFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"update_agent_billing_account_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'UpdateAgentBillingAccount', {"POST /v1/admin/agent-billing-accounts":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["account_id"],"additionalProperties":false,"properties":{"account_id":{"type":"string","minLength":1,"key$":"account_id"},"plan":{"type":"string","key$":"plan"},"billing_status":{"type":"string","key$":"billing_status"},"monthly_fee_cents":{"type":"number","minimum":0,"key$":"monthly_fee_cents"},"included_actions":{"type":"number","minimum":0,"key$":"included_actions"},"overage_cents":{"type":"number","minimum":0,"key$":"overage_cents"}},"x-ref":"#/components/schemas/UpdateAgentBillingAccountRequest","index$":1}}}},"parameters":[]}}, { strict: LIVE_STRICT, t }, 'TRUE' === process.env.VOXGIG_GETONLY_GUARD ? {"update_agent_billing_account.create.0":"GET-only live run: needs POST /v1/admin/agent-billing-accounts"} : {})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const update_agent_billing_account_ref01_ent = client.UpdateAgentBillingAccount()
    let update_agent_billing_account_ref01_data = setup.data.new.update_agent_billing_account['update_agent_billing_account_ref01']

    update_agent_billing_account_ref01_data = (await update_agent_billing_account_ref01_ent.create(update_agent_billing_account_ref01_data)).data()
    assert(null != update_agent_billing_account_ref01_data)


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
      '../../../../.sdk/test/entity/update_agent_billing_account/UpdateAgentBillingAccountTestData.json')

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
    ['update_agent_billing_account01','update_agent_billing_account02','update_agent_billing_account03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LOPPEE_BUSINESS_TEST_UPDATE_AGENT_BILLING_ACCOUNT_ENTID': idmap,
    'LOPPEE_BUSINESS_TEST_LIVE': 'FALSE',
    'LOPPEE_BUSINESS_TEST_EXPLAIN': 'FALSE',
    'LOPPEE_BUSINESS_APIKEY': '',
  })

  idmap = env['LOPPEE_BUSINESS_TEST_UPDATE_AGENT_BILLING_ACCOUNT_ENTID']

  const live = 'TRUE' === env.LOPPEE_BUSINESS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LOPPEE_BUSINESS_TEST_UPDATE_AGENT_BILLING_ACCOUNT_ENTID']
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
  
