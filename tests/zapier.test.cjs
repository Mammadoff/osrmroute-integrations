const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { join } = require('node:path');

const load = (name) => new Function('z', 'bundle', readFileSync(join(__dirname, '../integrations/zapier', name), 'utf8'));
const auth = load('authentication.js');
const search = load('find-address.js');
function mock(data, status = 200) {
  const requests = [];
  return {
    requests,
    errors: { Error },
    request: async (request) => {
      requests.push(request);
      return { json: data, throwForStatus() { if (status >= 400) throw new Error('HTTP ' + status); } };
    },
  };
}
const bundle = { authData: { api_key: 'test-only-not-a-real-key' }, inputData: { q: 'Berlin' } };

test('authentication uses fixed-origin bearer ping and rejects provider errors', async () => {
  const z = mock({ result: {} });
  assert.deepEqual(await auth(z, bundle), { connected: true });
  assert.equal(z.requests[0].url, 'https://osrmroute.com/api/mcp');
  assert.equal(z.requests[0].headers.Authorization, 'Bearer test-only-not-a-real-key');
  assert.equal(z.requests[0].params, undefined);
  await assert.rejects(auth(mock({ error: { code: -1 } }), bundle));
  await assert.rejects(auth(mock({}, 401), bundle));
});

test('search returns coordinates, preserves empty results, and fails closed on malformed output', async () => {
  const z = mock({ hits: [{ name: 'Berlin', point: { lat: 52.52, lng: 13.4 } }] });
  const result = await search(z, bundle);
  assert.equal(result[0].latitude, 52.52);
  assert.equal(result[0].longitude, 13.4);
  assert.ok(result[0].id);
  assert.equal(z.requests[0].url, 'https://osrmroute.com/api/1/geocode');
  assert.deepEqual(z.requests[0].params, { q: 'Berlin', limit: 1 });
  assert.deepEqual(await search(mock({ hits: [] }), bundle), []);
  await assert.rejects(search(mock({}), bundle));
  await assert.rejects(search(mock({}, 403), bundle));
});

test('invalid query never makes an API request', () => {
  for (const q of ['', ' ', 'a'.repeat(501)]) {
    const z = mock({ hits: [] });
    assert.throws(() => search(z, { ...bundle, inputData: { q } }));
    assert.equal(z.requests.length, 0);
  }
});
