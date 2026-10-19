return z.request({
  url: 'https://osrmroute.com/api/mcp',
  method: 'POST',
  headers: {
    Authorization: 'Bearer ' + bundle.authData.api_key,
    Accept: 'application/json, text/event-stream',
    'Content-Type': 'application/json',
    'MCP-Protocol-Version': '2025-06-18'
  },
  body: {jsonrpc: '2.0', id: 1, method: 'ping'}
}).then((response) => {
  response.throwForStatus();
  if (response.json.error) {
    throw new z.errors.Error('OSRMRoute key validation failed. Check that your key is active.', 'AuthenticationFailed', 401);
  }
  return {connected: true};
});
