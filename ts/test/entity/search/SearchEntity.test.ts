

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


describe('SearchEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LOPPEE_BUSINESS_TEST_LIVE=TRUE.
  afterEach(liveDelay('LOPPEE_BUSINESS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LoppeeBusinessSDK.test()
    const ent = testsdk.Search()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('search hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of LoppeeBusinessSDK.test(offline).Search().stream('list')) { }
    }, /offline/)

    for await (const _item of LoppeeBusinessSDK.test(offline).Search()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = LoppeeBusinessSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.Search().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of LoppeeBusinessSDK.test().Search().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new LoppeeBusinessSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.Search().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.Search().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = LoppeeBusinessSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Search().list({"category":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LOPPEE_BUSINESS_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'search.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"candidate_window_truncated":{"a":true,"h":"Candidate Window Truncated","n":"candidate_window_truncated","r":true,"sh":"True when Loppee's bounded candidate assembly reached its safety cap.","t":"`$BOOLEAN`","key$":"candidate_window_truncated","index$":0},"commercial_influence":{"a":true,"h":"Commercial Influence","n":"commercial_influence","r":true,"sh":"Must be none whenever current-location or saved_exact authority is absent, including universal exact/genuine-prefix name lookup.","t":"`$STRING`","key$":"commercial_influence","index$":1},"display_count":{"a":true,"h":"Display Count","n":"display_count","r":false,"sh":"Agent-key responses: the number of businesses in this response.","t":"`$INTEGER`","key$":"display_count","index$":2},"generated_at":{"a":true,"fo":"date-time","h":"Generated At","n":"generated_at","r":true,"t":"`$STRING`","key$":"generated_at","index$":3},"has_more":{"a":true,"h":"Has More","n":"has_more","r":true,"sh":"True only when next_cursor can continue through the current bounded, deterministic candidate window.","t":"`$BOOLEAN`","key$":"has_more","index$":4},"location_context":{"a":true,"h":"Location Context","n":"location_context","r":true,"sh":"Local category discovery and recommendations require a current precise location proof or handoff, a user-confirmed validated destination authority, or a saved_exact Home location.","t":"`$ANY`","union":{"branches":2,"count":1,"depth":0},"key$":"location_context","index$":5},"next_cursor":{"a":true,"h":"Next Cursor","n":"next_cursor","r":true,"t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"next_cursor","index$":6},"page_limit":{"a":true,"h":"Page Limit","n":"page_limit","r":true,"t":"`$INTEGER`","key$":"page_limit","index$":7},"policy":{"a":true,"h":"Policy","n":"policy","r":true,"t":"`$STRING`","key$":"policy","index$":8},"presentation_guidance":{"a":true,"h":"Presentation Guidance","n":"presentation_guidance","r":false,"sh":"Agent-key responses: how to present these results to the customer.","t":"`$STRING`","key$":"presentation_guidance","index$":9},"query":{"a":true,"h":"Query","n":"query","r":true,"t":"`$OBJECT`","key$":"query","index$":10},"ranking_policy":{"a":true,"h":"Ranking Policy","n":"ranking_policy","r":true,"t":"`$STRING`","key$":"ranking_policy","index$":11},"registry_count_basis":{"a":true,"h":"Registry Count Basis","n":"registry_count_basis","r":true,"t":"`$STRING`","key$":"registry_count_basis","index$":12},"registry_count_observed_at":{"a":true,"h":"Registry Count Observed At","n":"registry_count_observed_at","r":true,"t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"registry_count_observed_at","index$":13},"registry_name":{"a":true,"h":"Registry Name","n":"registry_name","r":true,"t":"`$ANY`","key$":"registry_name","index$":14},"results":{"a":true,"h":"Results","n":"results","r":true,"t":"`$ARRAY`","union":{"branches":10,"count":8,"depth":7},"key$":"results","index$":15},"returned_count":{"a":true,"h":"Returned Count","n":"returned_count","r":true,"t":"`$INTEGER`","key$":"returned_count","index$":16},"schema_version":{"a":true,"h":"Schema Version","n":"schema_version","r":true,"t":"`$ANY`","key$":"schema_version","index$":17},"search_intent":{"a":true,"h":"Search Intent","n":"search_intent","r":true,"t":"`$OBJECT`","key$":"search_intent","index$":18},"suggestions":{"a":true,"h":"Suggestions","n":"suggestions","r":false,"t":"`$OBJECT`","key$":"suggestions","index$":19},"total_matches":{"a":true,"h":"Total Matches","n":"total_matches","r":false,"sh":"Web and app responses.","t":"`$INTEGER`","key$":"total_matches","index$":20},"total_matches_basis":{"a":true,"h":"Total Matches Basis","n":"total_matches_basis","r":false,"t":"`$INTEGER`","key$":"total_matches_basis","index$":21},"total_registry_records":{"a":true,"h":"Total Registry Records","n":"total_registry_records","r":true,"t":"`$INTEGER`","key$":"total_registry_records","index$":22},"trust_model_version":{"a":true,"h":"Trust Model Version","n":"trust_model_version","r":true,"t":"`$ANY`","key$":"trust_model_version","index$":23},"visible_candidate_records":{"a":true,"h":"Visible Candidate Records","n":"visible_candidate_records","r":false,"sh":"Web and app responses.","t":"`$INTEGER`","key$":"visible_candidate_records","index$":24}},"name":"search","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/business-claim/candidates","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"city","or":"city","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$NUMBER`","index$":1},{"a":true,"ex":"Elite AC LLC","k":"query","n":"q","or":"q","r":true,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"state","or":"state","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"zip","or":"zip","r":false,"t":"`$STRING`","index$":4}]},"k":"http","m":"GET","o":"/v1/business-claim/candidates","q":{"exist":["q"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"business-claim"},{"lit":"candidates"}],"t":{"req":"`reqdata`","res":"`body.results`"},"index$":0},{"a":true,"co":{"id":"GET /v1/search","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"category","or":"category","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"city","or":"city","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"consumer_reach","or":"consumer_reach","r":false,"t":"`$BOOLEAN`","index$":2},{"a":true,"k":"query","n":"cursor","or":"cursor","r":false,"t":"`$STRING`","index$":3},{"a":true,"ex":true,"k":"query","n":"include_directory_listing","or":"include_directory_listings","r":false,"t":"`$BOOLEAN`","index$":4},{"a":true,"k":"query","n":"intent","or":"intent","r":false,"t":"`$STRING`","index$":5},{"a":true,"ex":10,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":6},{"a":true,"k":"query","n":"location_handoff_id","or":"location_handoff_id","r":false,"t":"`$STRING`","index$":7},{"a":true,"k":"query","n":"location_proof_id","or":"location_proof_id","r":false,"t":"`$STRING`","index$":8},{"a":true,"k":"query","n":"location_selection","or":"location_selection","r":false,"t":"`$STRING`","index$":9},{"a":true,"k":"query","n":"paid_only","or":"paid_only","r":false,"t":"`$BOOLEAN`","index$":10},{"a":true,"k":"query","n":"q","or":"q","r":false,"t":"`$STRING`","index$":11},{"a":true,"k":"query","n":"radius_mile","or":"radius_miles","r":false,"t":"`$NUMBER`","index$":12},{"a":true,"k":"query","n":"saved_location_ref","or":"saved_location_ref","r":false,"t":"`$STRING`","index$":13},{"a":true,"k":"query","n":"search_intent","or":"search_intent","r":false,"t":"`$STRING`","index$":14},{"a":true,"k":"query","n":"state","or":"state","r":false,"t":"`$STRING`","index$":15},{"a":true,"k":"query","n":"zip","or":"zip","r":false,"t":"`$STRING`","index$":16}]},"k":"http","m":"GET","o":"/v1/search","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"search"}],"t":{"req":"`reqdata`","res":"`body.results`"},"index$":1}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"search","name__orig":"search","Name":"Search","name_":"search","name-":"search","NAME":"SEARCH","index$":53}, {"active":true,"entity":"search","key$":"BasicSearchFlow","kind":"basic","name":"BasicSearchFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"search_ref01"}}],"index$":0}]}, 'Search', {"GET /v1/business-claim/candidates":{"protocol":"http","parameters":[{"name":"q","in":"query","required":true,"description":"Business name, 2-200 characters.","schema":{"type":"string"},"example":"Elite AC LLC","index$":0},{"name":"city","in":"query","required":false,"description":"Optional city for neutral same-name disambiguation.","schema":{"type":"string"},"index$":1},{"name":"state","in":"query","required":false,"description":"Optional two-letter US state or territory code.","schema":{"type":"string"},"index$":2},{"name":"zip","in":"query","required":false,"description":"Optional 5-digit US ZIP or ZIP+4 for neutral disambiguation.","schema":{"type":"string"},"index$":3},{"name":"limit","in":"query","required":false,"description":"Maximum candidates, 1-6; default 6.","schema":{"type":"number"},"index$":4}]},"GET /v1/search":{"protocol":"http","parameters":[{"name":"q","in":"query","required":false,"description":"Free-text search. Category terms auto-route to precise-location-gated discovery; otherwise exact and genuine-prefix business-name lookup is universal and commercially neutral without precise location.","schema":{"description":"Free-text search. Category terms auto-route to precise-location-gated discovery; otherwise exact and genuine-prefix business-name lookup is universal and commercially neutral without precise location.","type":"string","minLength":1,"maxLength":200},"index$":0},{"name":"category","in":"query","required":false,"description":"Taxonomy category alias or category term. Resolved categories require recognized current-location, validated-destination, or saved_exact authority; coarse context returns no local results.","schema":{"description":"Taxonomy category alias or category term. Resolved categories require recognized current-location, validated-destination, or saved_exact authority; coarse context returns no local results.","type":"string","minLength":1,"maxLength":200},"index$":1},{"name":"intent","in":"query","required":false,"description":"Routing hint: auto (default), category, or name; legacy value aliases remain accepted.","schema":{"description":"Routing hint: auto (default), category, or name; legacy value aliases remain accepted.","type":"string","enum":["auto","category","name","search_category","category_search","lookup","lookup_business","business_name"]},"index$":2},{"name":"search_intent","in":"query","required":false,"description":"Deprecated alias of intent; legacy value aliases remain accepted.","deprecated":true,"schema":{"description":"Deprecated alias of intent; legacy value aliases remain accepted.","type":"string","enum":["auto","category","name","search_category","category_search","lookup","lookup_business","business_name"]},"index$":3},{"name":"city","in":"query","required":false,"description":"City context. With state, it can disambiguate a business name but cannot enable local category/recommendation reach, Sponsored placement, or impressions.","schema":{"description":"City context. With state, it can disambiguate a business name but cannot enable local category/recommendation reach, Sponsored placement, or impressions.","type":"string","minLength":1,"maxLength":200},"index$":4},{"name":"state","in":"query","required":false,"description":"Two-letter US state or territory code. With city, this is neutral area context for business-name disambiguation; it is not precise local-discovery authority.","schema":{"description":"Two-letter US state or territory code. With city, this is neutral area context for business-name disambiguation; it is not precise local-discovery authority.","type":"string","pattern":"^(?:AL|AK|AZ|AR|CA|CO|CT|DE|FL|GA|HI|ID|IL|IN|IA|KS|KY|LA|ME|MD|MA|MI|MN|MS|MO|MT|NE|NV|NH|NJ|NM|NY|NC|ND|OH|OK|OR|PA|RI|SC|SD|TN|TX|UT|VT|VA|WA|WV|WI|WY|DC|AS|GU|MP|PR|VI)$"},"index$":5},{"name":"zip","in":"query","required":false,"description":"5-digit US ZIP (ZIP+4 accepted). Its ZCTA centroid is neutral area context for business-name disambiguation only; it cannot enable local category/recommendation reach, Sponsored placement, or impressions.","schema":{"description":"5-digit US ZIP (ZIP+4 accepted). Its ZCTA centroid is neutral area context for business-name disambiguation only; it cannot enable local category/recommendation reach, Sponsored placement, or impressions.","type":"string","pattern":"^\\d{5}(?:-\\d{4})?$"},"index$":6},{"name":"radius_miles","in":"query","required":false,"description":"Requested area radius. It never substitutes for recognized current-location, validated-destination, or saved_exact authority. Universal name lookup may use it only as neutral context.","schema":{"description":"Requested area radius. It never substitutes for recognized current-location, validated-destination, or saved_exact authority. Universal name lookup may use it only as neutral context.","type":"number","minimum":0.1,"maximum":500},"index$":7},{"name":"include_directory_listings","in":"query","required":false,"description":"Include honestly labeled, unverified directory listings for discovery.","schema":{"default":true,"description":"Include honestly labeled, unverified directory listings for discovery.","type":"boolean"},"index$":8},{"name":"paid_only","in":"query","required":false,"description":"Consumer-directory paid-exposure presentation filter.","schema":{"description":"Consumer-directory paid-exposure presentation filter.","type":"boolean"},"index$":9},{"name":"consumer_reach","in":"query","required":false,"description":"Consumer web/mobile directory policy: ignore caller radius_miles and enforce each result's exact plan/branch radius for category and partial/fuzzy name discovery. Literal exact and genuine-prefix entity-name matches remain universal and commercially neutral. Agents should normally omit it.","schema":{"description":"Consumer web/mobile directory policy: ignore caller radius_miles and enforce each result's exact plan/branch radius for category and partial/fuzzy name discovery. Literal exact and genuine-prefix entity-name matches remain universal and commercially neutral. Agents should normally omit it.","type":"boolean"},"index$":10},{"name":"location_selection","in":"query","required":false,"description":"The customer's explicit location choice. Current, a user-confirmed validated destination handoff, or Home when reach_precision=exact can authorize local category/recommendation discovery. Provided city/ZIP and coarse Home are neutral area context for business-name disambiguation only. Ask exactly: 'Where should I search? For local categories, use your current location, enter a different service address securely in Loppee, or use Home only when it is marked exact. Another city/ZIP is for area context or business-name lookup only.' Exact and genuine-prefix business-name lookup is exempt.","schema":{"description":"The customer's explicit location choice. Current, a user-confirmed validated destination handoff, or Home when reach_precision=exact can authorize local category/recommendation discovery. Provided city/ZIP and coarse Home are neutral area context for business-name disambiguation only. Ask exactly: 'Where should I search? For local categories, use your current location, enter a different service address securely in Loppee, or use Home only when it is marked exact. Another city/ZIP is for area context or business-name lookup only.' Exact and genuine-prefix business-name lookup is exempt.","type":"string","enum":["saved","current","destination","provided"]},"index$":11},{"name":"saved_location_ref","in":"query","required":false,"description":"Opaque saved-location reference returned by get_location_options. Required with location_selection=saved. Only kind=saved_exact authorizes local category/recommendation reach; coarse saved kinds remain neutral context. It contains no address, ZIP, latitude, or longitude.","schema":{"description":"Opaque saved-location reference returned by get_location_options. Required with location_selection=saved. Only kind=saved_exact authorizes local category/recommendation reach; coarse saved kinds remain neutral context. It contains no address, ZIP, latitude, or longitude.","type":"string","minLength":1,"maxLength":512},"index$":12},{"name":"location_handoff_id","in":"query","required":false,"description":"Opaque current-location or validated-destination handoff approved by the consumer. Both authorize plan-based organic local category/recommendation reach and both are Sponsored-neutral: no Sponsored ordering or labels, click/recommendation attribution, or exposure accounting. Current location must come from the registered Loppee iPhone. Requires the same active scoped consumer-agent connection that created it. Do not combine it with lat/lng, ZIP, city, or state; Loppee uses the point privately and never returns an address or coordinates to the agent.","schema":{"description":"Opaque current-location or validated-destination handoff approved by the consumer. Both authorize plan-based organic local category/recommendation reach and both are Sponsored-neutral: no Sponsored ordering or labels, click/recommendation attribution, or exposure accounting. Current location must come from the registered Loppee iPhone. Requires the same active scoped consumer-agent connection that created it. Do not combine it with lat/lng, ZIP, city, or state; Loppee uses the point privately and never returns an address or coordinates to the agent.","type":"string","format":"uuid","pattern":"^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"},"index$":13},{"name":"location_proof_id","in":"query","required":false,"description":"Opaque short-lived current-location or validated-destination proof. It may be created by an authenticated Loppee customer or same-origin browser flow; the attested iOS lane remains current-location only. Do not combine it with any other location input; the address and exact point remain private.","schema":{"description":"Opaque short-lived current-location or validated-destination proof. It may be created by an authenticated Loppee customer or same-origin browser flow; the attested iOS lane remains current-location only. Do not combine it with any other location input; the address and exact point remain private.","type":"string","format":"uuid","pattern":"^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"},"index$":14},{"name":"cursor","in":"query","required":false,"description":"Opaque cursor returned in next_cursor by the previous v3 search page. Omit for the first page.","schema":{"description":"Opaque cursor returned in next_cursor by the previous v3 search page. Omit for the first page.","type":"string","minLength":1,"maxLength":4096},"index$":15},{"name":"limit","in":"query","required":false,"description":"Maximum result count from 1 to 50.","schema":{"default":10,"description":"Maximum result count from 1 to 50.","type":"integer","minimum":1,"maximum":50},"index$":16}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let search_ref01_data = Object.values(setup.data.existing.search)[0] as any

    // LIST
    const search_ref01_ent = client.Search()
    const search_ref01_match: any = {}

    const search_ref01_list = (await search_ref01_ent.list(search_ref01_match)).map((e: any) => e.data())


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
      '../../../../.sdk/test/entity/search/SearchTestData.json')

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
    ['search01','search02','search03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LOPPEE_BUSINESS_TEST_SEARCH_ENTID': idmap,
    'LOPPEE_BUSINESS_TEST_LIVE': 'FALSE',
    'LOPPEE_BUSINESS_TEST_EXPLAIN': 'FALSE',
    'LOPPEE_BUSINESS_APIKEY': '',
  })

  idmap = env['LOPPEE_BUSINESS_TEST_SEARCH_ENTID']

  const live = 'TRUE' === env.LOPPEE_BUSINESS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LOPPEE_BUSINESS_TEST_SEARCH_ENTID']
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
  
