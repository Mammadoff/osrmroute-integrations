# OSRMRoute for n8n

Community node for OSRMRoute location APIs. It covers all 45 operations in the bundled public OpenAPI contract, including geocoding, routing, matrices, isochrones, places, road data, background jobs and Map Studio.

## Status
Development build. Not yet published to npm or verified for n8n Cloud. Hosted execution still requires an end-to-end test before release.

## Credentials
Create an API key in your [OSRMRoute dashboard](https://osrmroute.com/dashboard). Add an OSRMRoute API credential in n8n. The key is a password field and is sent only in the Authorization header. Connection testing uses an unbilled MCP ping. API calls use your existing plan, service scopes and credits; this package adds no allowance. Free self-hosted n8n Community Edition can run community nodes; n8n Cloud has separate subscription and verification requirements.

## Usage
1. Add the OSRMRoute node and select your credential.
2. Choose an operation. Required URL and query parameters appear automatically; optional query parameters are under Additional Fields.
3. For POST operations, fill the Request Body (JSON) according to [API documentation](https://osrmroute.com/docs). Empty sample objects are not valid requests for operations requiring fields.
4. Run the workflow. API errors such as insufficient credits, missing scopes and rate limits remain errors; the node does not automatically retry billable writes.

Coordinates and identifiers are sent to OSRMRoute. Review workflow execution retention when processing personal addresses. Use a dedicated restricted key, not an owner credential. Studio write and job cancellation operations change your resources.

## Development
Node.js 24. `npm ci --ignore-scripts`, `npm run build`, `npm run lint`, `npm test`.
Update `openapi.json`, run `python3 scripts/generate.py`, then repeat checks. No runtime dependencies are bundled. Do not add arbitrary user-controlled request origins or expose credentials through query parameters.
