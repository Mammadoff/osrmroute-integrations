const { test } = require('node:test');
const assert = require('node:assert/strict');
const { createRequire } = require('node:module');
const coreRequire = createRequire(require.resolve('n8n-core'));
const { Workflow } = coreRequire('n8n-workflow');
const { RoutingNode } = require('n8n-core/dist/execution-engine/routing-node');
const get = require('lodash/get');
const { Osrmroute } = require('../dist/nodes/Osrmroute/Osrmroute.node');

function request(parameters) {
 parameters = {resource:'api', ...parameters};
 const nodeType = new Osrmroute();
 const node = { id:'test', name:'OSRMRoute', type:'osrmroute', typeVersion:1, position:[0,0], parameters };
 const workflow = new Workflow({id:'test',nodes:[node],connections:{},active:false,nodeTypes:{getByNameAndVersion:()=>nodeType}});
 const context = {node,nodeType,workflow,mode:'manual',connectionInputData:[{json:{}}],runExecutionData:null};
 const router = new RoutingNode(context,nodeType);
 const single = {getNodeParameter:(name,fallback)=>get(parameters,name,fallback),getExecuteData:()=>undefined};
 const result={options:{qs:{},body:{},headers:{}},preSend:[],postReceive:[],requestOperations:{}};
 for(const property of nodeType.description.properties) router.mergeOptions(result,router.getRequestOptionsFromParameters(single,property,0,0,''));
 return result.options;
}
test('n8n routing engine builds geocoding query without unrelated parameters',()=>{
 const options=request({operation:'get_geocoding',get_geocoding_options:{q:'Berlin & Mitte',country:'DE',limit:2}});
 assert.equal(options.url,'/api/1/geocode');
 assert.equal(options.qs.q,'Berlin & Mitte');
 assert.equal(options.qs.country,'DE');
 assert.equal(options.qs.limit,2);
});
test('n8n expression engine encodes path inputs and parses JSON body',()=>{
 const route=request({operation:'get_routing',get_routing_profile:'driving',get_routing_coordinates:'13.4,52.5;13.5,52.6',get_routing_options:{}});
 assert.equal(route.url,'/api/v1/osrm/route/v1/driving/13.4%2C52.5%3B13.5%2C52.6');
 const batch=request({operation:'post_batch_geocoding',post_batch_geocoding_body:'{"queries":["Berlin"]}'});
 assert.deepEqual(batch.body,{queries:['Berlin']});
});
test('n8n routing leaves fields from other operations out of the request',()=>{
 const options=request({operation:'get_geocoding',get_geocoding_options:{q:'Berlin'},get_routing_coordinates:'not-a-geocoding-parameter'});
 assert.deepEqual(Object.keys(options.qs),['q']);
});

test('full n8n execution preserves HTTP bounds after global defaults',async()=>{
const {Container}=coreRequire('@n8n/di');
const {InstanceSettings}=require('n8n-core/dist/instance-settings');
Container.set(InstanceSettings,{instanceId:'integration-test',hmacSignatureSecret:'test-only'});

const type=new Osrmroute(); const node={id:'test',name:'OSRMRoute',type:'osrmroute',typeVersion:1,position:[0,0],parameters:{resource:'api',operation:'get_geocoding',get_geocoding_options:{q:'Berlin'}}};
const workflow=new Workflow({id:'test',nodes:[node],connections:{},active:false,nodeTypes:{getByNameAndVersion:()=>type}});
const item={json:{}};const context={node,nodeType:type,workflow,mode:'manual',runIndex:0,connectionInputData:[item],inputData:{main:[[item]]},runExecutionData:{resultData:{runData:{}}},additionalData:{currentNodeParameters:node.parameters},executeData:{data:{main:[[item]]},node,source:null},getExecutionCancelSignal:()=>undefined,getNodeParameter:()=>({}),getCredentials:async()=>({apiKey:'test-only'})};
const router=new RoutingNode(context,type);
 let sent;
 router.rawRoutingRequest=async(_single,data)=>{
  sent=data.options;
  return {body:{hits:[{name:'Berlin'}]},headers:{},statusCode:200};
 };
 const output=await router.runNode();
 assert.equal(sent.timeout,30000);
 assert.equal(sent.disableFollowRedirect,true);
 assert.equal(sent.baseURL,'https://osrmroute.com');
 assert.equal(sent.qs.q,'Berlin');
 assert.deepEqual(output[0][0].json,{hits:[{name:'Berlin'}]});
});
