# Make custom app (private draft)

The app provides address geocoding and an MCP tool module covering 18 location tools.
`communication.json`, `expect.json`, `interface.json` and `samples.json` correspond to Make builder tabs.
All requests inherit a fixed OSRMRoute origin and per-user API-key connection. No shared platform key is included.

The MCP tool module parses a JSON arguments object and rejects JSON-RPC and tool errors, including errors returned with HTTP 200.

Live acceptance on 2026-10-19: Make executed `geocode_address` with `{"q":"Berlin"}` through the saved dedicated connection. The module returned Berlin results and `isError: false`. The acceptance scenario remains inactive (manual execution only). Catalog publication and review remain pending. This source draft is not a public or approved Make catalog entry.
