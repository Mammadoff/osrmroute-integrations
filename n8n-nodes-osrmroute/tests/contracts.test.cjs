const { test } = require('node:test');
const assert = require('node:assert/strict');
const { Osrmroute } = require('../dist/nodes/Osrmroute/Osrmroute.node');
const { OsrmrouteApi } = require('../dist/credentials/OsrmrouteApi.credentials');
const spec = require('../openapi.json');
const node = new Osrmroute().description;
const operations = node.properties.find(p => p.name === 'operation').options;
test('every public OpenAPI operation is represented exactly once', () => {
 const expected = Object.entries(spec.paths).flatMap(([path, methods]) => Object.entries(methods).filter(([m]) => ['get','post','delete'].includes(m)).map(([method,o]) => o.operationId)).sort();
 assert.deepEqual(operations.map(o => o.value).sort(), expected);
 assert.equal(new Set(operations.map(o => o.value)).size, expected.length);
});
test('all requests use the fixed HTTPS origin and encoded path parameters', () => {
 assert.equal(node.requestDefaults.baseURL, 'https://osrmroute.com');
 assert.equal(node.requestDefaults.disableFollowRedirect, true);
 for (const op of operations) {
  const url = op.routing.request.url;
  assert.match(url, /^=?\/api\//);
  for (const token of url.matchAll(/{{(.*?)}}/g)) assert.match(token[1], /^encodeURIComponent\(\$parameter\./);
 }
});
test('key is secret and only sent in authorization header; test does not consume API credits', () => {
 const c = new OsrmrouteApi();
 assert.equal(c.properties[0].typeOptions.password, true);
 assert.deepEqual(Object.keys(c.authenticate.properties), ['headers']);
 assert.equal(c.test.request.url, '/api/mcp');
 assert.equal(c.test.request.body.method, 'ping');
});
test('query names preserve the wire contract and body editors parse JSON', () => {
 for (const op of operations) {
  const body = op.routing.request.body;
  if (body) assert.match(body, /JSON\.parse/);
 }
 const country = node.properties.find(p => p.name === 'get_geocoding_options').options.find(p => p.name === 'country');
 assert.equal(country.routing.send.property, 'country');
});
