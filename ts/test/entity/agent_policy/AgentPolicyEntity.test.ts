

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


describe('AgentPolicyEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LOPPEE_BUSINESS_TEST_LIVE=TRUE.
  afterEach(liveDelay('LOPPEE_BUSINESS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LoppeeBusinessSDK.test()
    const ent = testsdk.AgentPolicy()
    assert(null != ent)
  })




  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LOPPEE_BUSINESS_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'agent_policy.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"external_agent_access":{"a":true,"h":"External Agent Access","n":"external_agent_access","r":true,"t":"`$OBJECT`","key$":"external_agent_access","index$":0},"external_agent_webhooks":{"a":true,"h":"External Agent Webhooks","n":"external_agent_webhooks","r":true,"t":"`$OBJECT`","key$":"external_agent_webhooks","index$":1},"local_discovery_location_policy":{"a":true,"h":"Local Discovery Location Policy","n":"local_discovery_location_policy","r":true,"t":"`$OBJECT`","key$":"local_discovery_location_policy","index$":2},"location_handoff_flow":{"a":true,"h":"Location Handoff Flow","n":"location_handoff_flow","r":false,"t":"`$OBJECT`","key$":"location_handoff_flow","index$":3},"payment":{"a":true,"h":"Payment","n":"payment","r":true,"t":"`$OBJECT`","key$":"payment","index$":4},"publication":{"a":true,"h":"Publication","n":"publication","r":true,"t":"`$OBJECT`","key$":"publication","index$":5},"schema_version":{"a":true,"h":"Schema Version","n":"schema_version","r":true,"t":"`$ANY`","key$":"schema_version","index$":6},"trust_model_version":{"a":true,"h":"Trust Model Version","n":"trust_model_version","r":true,"t":"`$ANY`","key$":"trust_model_version","index$":7},"verification":{"a":true,"h":"Verification","n":"verification","r":true,"t":"`$OBJECT`","key$":"verification","index$":8}},"name":"agent_policy","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/agent-policy.json","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/v1/agent-policy.json","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"agent-policy.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"agent_policy","name__orig":"agent_policy","Name":"AgentPolicy","name_":"agent_policy","name-":"agent-policy","NAME":"AGENT_POLICY","index$":6}, {"active":true,"entity":"agent_policy","key$":"BasicAgentPolicyFlow","kind":"basic","name":"BasicAgentPolicyFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"agent_policy_ref01","srcdatavar":"agent_policy_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-agent_policy_ref01"}}],"index$":0}]}, 'AgentPolicy', {"GET /v1/agent-policy.json":{"protocol":"http","parameters":[]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let agent_policy_ref01_data = Object.values(setup.data.existing.agent_policy)[0] as any

    // LOAD
    const agent_policy_ref01_ent = client.AgentPolicy()
    const agent_policy_ref01_match_dt0: any = {}
    const agent_policy_ref01_data_dt0 = (await agent_policy_ref01_ent.load(agent_policy_ref01_match_dt0)).data()
    assert(null != agent_policy_ref01_data_dt0)


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
      '../../../../.sdk/test/entity/agent_policy/AgentPolicyTestData.json')

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
    ['agent_policy01','agent_policy02','agent_policy03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LOPPEE_BUSINESS_TEST_AGENT_POLICY_ENTID': idmap,
    'LOPPEE_BUSINESS_TEST_LIVE': 'FALSE',
    'LOPPEE_BUSINESS_TEST_EXPLAIN': 'FALSE',
    'LOPPEE_BUSINESS_APIKEY': '',
  })

  idmap = env['LOPPEE_BUSINESS_TEST_AGENT_POLICY_ENTID']

  const live = 'TRUE' === env.LOPPEE_BUSINESS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LOPPEE_BUSINESS_TEST_AGENT_POLICY_ENTID']
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
  
