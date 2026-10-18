# Make custom app

The app provides address geocoding, an MCP tool module covering 18 location tools, and a universal REST API module.
`communication.json`, `expect.json`, `interface.json` and `samples.json` correspond to Make builder tabs.
All requests inherit a fixed OSRMRoute origin and per-user API-key connection. No shared platform key is included.

The MCP tool module parses a JSON arguments object and rejects JSON-RPC and tool errors, including errors returned with HTTP 200.

Live acceptance on 2026-10-19: Make executed `geocode_address` with `{"q":"Berlin"}` through the saved dedicated connection. The module returned Berlin results and `isError: false`. The acceptance scenario remains inactive (manual execution only). The app is published for installation by invitation: https://www.make.com/en/hq/app-invitation/a01f9009f3ba8f7f888cdca604409b13 . Make catalog review is separate and remains pending.

On 2026-10-19, all three modules passed one connected live scenario (8038021). A separate empty-query MCP error scenario (8037506) failed as expected. Both are inactive and manual-only. Catalog review was submitted and the UI confirmed `pending approval`; catalog approval is not yet granted.

The universal module fixes its origin to `https://osrmroute.com/api`, supplies authorization from the connection, and exposes response body and status. User-provided headers cannot override authorization. See USER_GUIDE.md for customer documentation.
