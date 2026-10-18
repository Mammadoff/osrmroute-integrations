import type { IAuthenticateGeneric, ICredentialTestRequest, ICredentialType, INodeProperties } from 'n8n-workflow';

export class OsrmrouteApi implements ICredentialType {
 name = 'osrmrouteApi';
 icon = 'file:../nodes/Osrmroute/osrmroute.svg' as const;
 displayName = 'OSRMRoute API';
 documentationUrl = 'https://osrmroute.com/docs/automation';
 properties: INodeProperties[] = [{
  displayName: 'API Key', name: 'apiKey', type: 'string',
  typeOptions: { password: true }, required: true, default: '',
  description: 'Your OSRMRoute API key. Its scopes, credits and plan limits apply',
 }];
 authenticate: IAuthenticateGeneric = {
  type: 'generic', properties: { headers: { Authorization: '=Bearer {{$credentials.apiKey}}' } },
 };
 test: ICredentialTestRequest = {
  request: {
   baseURL: 'https://osrmroute.com', url: '/api/mcp', method: 'POST',
   headers: { Accept: 'application/json, text/event-stream', 'Content-Type': 'application/json', 'MCP-Protocol-Version': '2025-06-18' },
   body: { jsonrpc: '2.0', id: 1, method: 'ping' },
  },
 };
}
