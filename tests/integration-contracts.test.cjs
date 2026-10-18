const { test } = require('node:test');
const assert = require('node:assert/strict');
const spec = require('../integrations/rapidapi/openapi.json');
const request = require('../integrations/make/makeApiCall/communication.json');
const parameters = require('../integrations/make/makeApiCall/expect.json');
test('all 45 RapidAPI operations use customer bearer authentication', () => {
  const operations = Object.values(spec.paths).flatMap(path => Object.entries(path).filter(([method]) => ['get', 'post', 'delete', 'put', 'patch'].includes(method)).map(([, operation]) => operation));
  assert.equal(operations.length, 45);
  for (const operation of operations) assert.deepEqual(operation.security ?? spec.security, [{ bearerAuth: [] }]);
  assert.equal(spec.components.securitySchemes.apiKeyQuery, undefined);
});
test('Make API paths cannot replace the credential destination', () => {
  for (const path of ['/1/geocode', '//evil.example', '@evil.example', 'https://evil.example', '/../../example', '\\\\evil.example']) {
    assert.equal(new URL(request.url.replace('{{parameters.url}}', path)).origin, 'https://osrmroute.com');
  }
  assert.equal(request.headers.Authorization, 'Bearer {{connection.apiKey}}');
  assert.equal(parameters.some(parameter => parameter.name === 'headers'), false);
  assert.ok(request.log.sanitize.includes('request.headers.Authorization'));
});
