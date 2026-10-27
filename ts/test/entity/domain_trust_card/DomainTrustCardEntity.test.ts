

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


describe('DomainTrustCardEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LOPPEE_BUSINESS_TEST_LIVE=TRUE.
  afterEach(liveDelay('LOPPEE_BUSINESS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LoppeeBusinessSDK.test()
    const ent = testsdk.DomainTrustCard()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = LoppeeBusinessSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.DomainTrustCard().load({"domain_key":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LOPPEE_BUSINESS_TEST_LIVE
    for (const op of []) {
      if (!live && maybeSkipControl(t, 'entityOp', 'domain_trust_card.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"business_id":{"a":true,"h":"Business Id","n":"business_id","r":true,"t":"`$STRING`","key$":"business_id","index$":0},"domain":{"a":true,"h":"Domain","n":"domain","r":true,"t":"`$STRING`","key$":"domain","index$":1},"schema_version":{"a":true,"h":"Schema Version","n":"schema_version","r":true,"t":"`$ANY`","key$":"schema_version","index$":2},"trust_card":{"a":true,"h":"Trust Card","n":"trust_card","r":true,"t":"`$OBJECT`","union":{"branches":2,"count":2,"depth":4},"key$":"trust_card","index$":3},"trust_card_url":{"a":true,"h":"Trust Card Url","n":"trust_card_url","r":true,"t":"`$STRING`","key$":"trust_card_url","index$":4},"trust_model_version":{"a":true,"h":"Trust Model Version","n":"trust_model_version","r":true,"t":"`$ANY`","key$":"trust_model_version","index$":5},"verification_class":{"a":true,"h":"Verification Class","n":"verification_class","r":true,"t":"`$ANY`","key$":"verification_class","index$":6},"verification_disclosure":{"a":true,"h":"Verification Disclosure","n":"verification_disclosure","r":true,"t":"`$STRING`","key$":"verification_disclosure","index$":7}},"name":"domain_trust_card","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/domains/{domain_key}/trust-card.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"eliteacllc-com","k":"param","n":"domain_key","or":"domain_key","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v1/domains/{domain_key}/trust-card.json","q":{"exist":["domain_key"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"domains"},{"var":"domain_key"},{"lit":"trust-card.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"domain_trust_card","name__orig":"domain_trust_card","Name":"DomainTrustCard","name_":"domain_trust_card","name-":"domain-trust-card","NAME":"DOMAIN_TRUST_CARD","index$":30}, {"active":true,"entity":"domain_trust_card","key$":"BasicDomainTrustCardFlow","kind":"basic","name":"BasicDomainTrustCardFlow","param":{},"step":[{"a":false,"d":{},"i":{"ref":"domain_trust_card_ref01","srcdatavar":"domain_trust_card_ref01_data","suffix":"_dt0"},"m":{"id":"domain_trust_card01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-domain_trust_card_ref01"}}],"unreachable":true}]}, 'DomainTrustCard', {"GET /v1/domains/{domain_key}/trust-card.json":{"protocol":"http","parameters":[{"name":"domain_key","in":"path","required":true,"description":"Normalized domain key such as eliteacllc-com.","schema":{"type":"string"},"example":"eliteacllc-com","index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let domain_trust_card_ref01_data = Object.values(setup.data.existing.domain_trust_card)[0] as any

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
      '../../../../.sdk/test/entity/domain_trust_card/DomainTrustCardTestData.json')

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
    ['domain_trust_card01','domain_trust_card02','domain_trust_card03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LOPPEE_BUSINESS_TEST_DOMAIN_TRUST_CARD_ENTID': idmap,
    'LOPPEE_BUSINESS_TEST_LIVE': 'FALSE',
    'LOPPEE_BUSINESS_TEST_EXPLAIN': 'FALSE',
    'LOPPEE_BUSINESS_APIKEY': '',
  })

  idmap = env['LOPPEE_BUSINESS_TEST_DOMAIN_TRUST_CARD_ENTID']

  const live = 'TRUE' === env.LOPPEE_BUSINESS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LOPPEE_BUSINESS_TEST_DOMAIN_TRUST_CARD_ENTID']
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
  
