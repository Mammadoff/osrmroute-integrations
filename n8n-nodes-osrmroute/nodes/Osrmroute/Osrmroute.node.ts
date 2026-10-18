import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { operations } from './operations';

export class Osrmroute implements INodeType {
 description: INodeTypeDescription = {
  displayName: 'OSRMRoute', name: 'osrmroute',
  icon: { light: 'file:osrmroute.svg', dark: 'file:osrmroute.dark.svg' },
  group: ['transform'], version: 1,
  subtitle: '={{$parameter["operation"]}}',
  description: 'Search places, calculate routes and manage map data with OSRMRoute',
  defaults: { name: 'OSRMRoute' }, usableAsTool: true,
  inputs: [NodeConnectionTypes.Main], outputs: [NodeConnectionTypes.Main],
  credentials: [{ name: 'osrmrouteApi', required: true }],
  requestDefaults: {
   baseURL: 'https://osrmroute.com',
   headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
   disableFollowRedirect: true,
   timeout: 30000,
  },
  properties: operations,
 };
}
