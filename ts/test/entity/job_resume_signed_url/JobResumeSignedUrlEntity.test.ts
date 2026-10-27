

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


describe('JobResumeSignedUrlEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LOPPEE_BUSINESS_TEST_LIVE=TRUE.
  afterEach(liveDelay('LOPPEE_BUSINESS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LoppeeBusinessSDK.test()
    const ent = testsdk.JobResumeSignedUrl()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = LoppeeBusinessSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.JobResumeSignedUrl().create({"job_application_id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LOPPEE_BUSINESS_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'job_resume_signed_url.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"application_id":{"a":true,"h":"Application Id","n":"application_id","r":true,"t":"`$STRING`","key$":"application_id","index$":0},"content_type":{"a":true,"h":"Content Type","n":"content_type","r":true,"t":"`$STRING`","key$":"content_type","index$":1},"expires_in_seconds":{"a":true,"h":"Expires In Seconds","n":"expires_in_seconds","r":true,"t":"`$NUMBER`","key$":"expires_in_seconds","index$":2},"resume_file_name":{"a":true,"h":"Resume File Name","n":"resume_file_name","r":true,"t":"`$STRING`","key$":"resume_file_name","index$":3},"signed_url":{"a":true,"h":"Signed Url","n":"signed_url","r":true,"t":"`$STRING`","key$":"signed_url","index$":4},"size_bytes":{"a":true,"h":"Size Bytes","n":"size_bytes","r":true,"t":"`$NUMBER`","key$":"size_bytes","index$":5},"status":{"a":true,"h":"Status","n":"status","r":true,"t":"`$ANY`","key$":"status","index$":6}},"name":"job_resume_signed_url","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":false,"co":{"id":"POST /v1/account/job-applications/{application_id}/resume-url","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"job_application_id","or":"application_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/account/job-applications/{application_id}/resume-url","q":{"exist":["job_application_id"]},"r":{"param":{"application_id":"job_application_id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"account"},{"lit":"job-applications"},{"var":"job_application_id"},{"lit":"resume-url"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"bf":false,"co":{"id":"POST /v1/owner/job-applications/{application_id}/resume-url","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"job_application_id","or":"application_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/owner/job-applications/{application_id}/resume-url","q":{"exist":["job_application_id"]},"r":{"param":{"application_id":"job_application_id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"owner"},{"lit":"job-applications"},{"var":"job_application_id"},{"lit":"resume-url"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.job_application"]]},"key$":"job_resume_signed_url","name__orig":"job_resume_signed_url","Name":"JobResumeSignedUrl","name_":"job_resume_signed_url","name-":"job-resume-signed-url","NAME":"JOB_RESUME_SIGNED_URL","index$":34}, {"active":true,"entity":"job_resume_signed_url","key$":"BasicJobResumeSignedUrlFlow","kind":"basic","name":"BasicJobResumeSignedUrlFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"job_resume_signed_url_ref01"},"m":{"job_application_id":"job_application01"},"o":"create","s":[],"v":[],"index$":0}]}, 'JobResumeSignedUrl', {"POST /v1/account/job-applications/{application_id}/resume-url":{"protocol":"http","requestBody":{"required":false,"content":{"application/json":{"schema":{"type":"object","maxProperties":0,"additionalProperties":false,"x-ref":"#/components/schemas/EmptyRequest","index$":1}}}},"parameters":[{"name":"application_id","in":"path","required":true,"description":"Job application id.","schema":{"type":"string"},"index$":0}]},"POST /v1/owner/job-applications/{application_id}/resume-url":{"protocol":"http","requestBody":{"required":false,"content":{"application/json":{"schema":{"type":"object","maxProperties":0,"additionalProperties":false,"x-ref":"#/components/schemas/EmptyRequest","index$":1}}}},"parameters":[{"name":"application_id","in":"path","required":true,"description":"Job application id.","schema":{"type":"string"},"index$":0}]}}, { strict: LIVE_STRICT, t }, 'TRUE' === process.env.VOXGIG_GETONLY_GUARD ? {"job_resume_signed_url.create.0":"GET-only live run: needs POST /v1/account/job-applications/{application_id}/resume-url"} : {})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const job_resume_signed_url_ref01_ent = client.JobResumeSignedUrl()
    let job_resume_signed_url_ref01_data = setup.data.new.job_resume_signed_url['job_resume_signed_url_ref01']
    job_resume_signed_url_ref01_data['job_application_id'] = setup.idmap['job_application01']

    job_resume_signed_url_ref01_data = (await job_resume_signed_url_ref01_ent.create(job_resume_signed_url_ref01_data)).data()
    assert(null != job_resume_signed_url_ref01_data)


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
      '../../../../.sdk/test/entity/job_resume_signed_url/JobResumeSignedUrlTestData.json')

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
    ['job_resume_signed_url01','job_resume_signed_url02','job_resume_signed_url03','job_application01','job_application02','job_application03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LOPPEE_BUSINESS_TEST_JOB_RESUME_SIGNED_URL_ENTID': idmap,
    'LOPPEE_BUSINESS_TEST_LIVE': 'FALSE',
    'LOPPEE_BUSINESS_TEST_EXPLAIN': 'FALSE',
    'LOPPEE_BUSINESS_APIKEY': '',
  })

  idmap = env['LOPPEE_BUSINESS_TEST_JOB_RESUME_SIGNED_URL_ENTID']

  const live = 'TRUE' === env.LOPPEE_BUSINESS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LOPPEE_BUSINESS_TEST_JOB_RESUME_SIGNED_URL_ENTID']
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
  
