# OSRMRoute integrations

Official integration sources for [OSRMRoute](https://osrmroute.com).

| Integration | Status |
| --- | --- |
| MCP | Available through the official MCP registry: `io.github.Mammadoff/osrmroute`; endpoint `https://osrmroute.com/api/mcp` |
| n8n | Development package covering 45 public OpenAPI operations. npm release and workflow acceptance pending |
| QGIS | [Experimental 0.1.1 ZIP](https://github.com/Mammadoff/osrmroute-integrations/releases/tag/qgis-v0.1.1) available. QGIS portal security and Qt6 checks passed; moderator approval and real API acceptance pending |
| Make | [Published invitation](https://www.make.com/en/hq/app-invitation/a01f9009f3ba8f7f888cdca604409b13). Live MCP geocoding passed; catalog review pending |
| RapidAPI | Existing private listing being updated; not yet publicly available |

Every integration uses the user's own OSRMRoute key and existing plan, scopes, credits and geographic coverage. None grants extra credits. API keys must never be checked in. Use a dedicated restricted key for each automation.

## QGIS

QGIS 3.34–3.99. Download the experimental release ZIP, then Plugins → Manage and Install Plugins → Install from ZIP. Open Web → OSRMRoute → addresses and routes. Enter a key and either an address or `longitude,latitude;longitude,latitude` route coordinates. Click Run and add layer. Requests may consume credits; the selected address or coordinates are transmitted to OSRMRoute. The key remains only in memory until the dialog is closed. The resulting layer can be exported with QGIS's normal export tools.

The initial plugin supports address search and driving routes, not every REST API. There are no hidden automatic queries, retries or batch charges. Empty results and failures are reported without creating a misleading layer. HTTPS redirects are not followed with credentials. Requests time out after 30 seconds and responses are limited to 5 MB.

## Development

- n8n: see `n8n-nodes-osrmroute/README.md`.
- QGIS pure tests: `PYTHONPATH=qgis python3 -m unittest discover -s qgis/tests -p test_core.py`.
- Native QGIS tests run in CI with the QGIS Python bindings; no simulator or additional local server is required.
- Plugin packaging: `python3 scripts/package_qgis.py`.

QGIS sources are GPL-3.0-or-later. n8n sources are MIT. Publication status must be verified separately from a passing source build.
