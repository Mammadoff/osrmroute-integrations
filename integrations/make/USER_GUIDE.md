# OSRMRoute

Connect maps, routing and location data to your Make scenarios.

## Connect your account

Create an API key in your OSRMRoute dashboard and add it to the OSRMRoute connection in Make. Use a dedicated key with the services and credit limits your scenario needs. Your existing OSRMRoute plan and credits apply; this integration does not add a separate OSRMRoute subscription.

## Modules

### Geocode an Address
Turn an address or place name into geographic coordinates. Enter a query such as Berlin, select the response language and limit the number of results. Map the returned results into subsequent modules.

### Call an MCP Tool
Choose a supported OSRMRoute tool and supply its arguments as a JSON object. For example, select geocode_address and enter `{ "q": "Berlin" }`. Available operations cover routing, search, places, matrices, isochrones, static maps and Studio. Each operation requires the corresponding API scope, plan and available credits.

### Make an API call
Run an authorized REST request against OSRMRoute. Enter a path relative to `https://osrmroute.com/api`, such as `/1/geocode`, choose the HTTP method, and add query parameters or a JSON body. The connection supplies authorization. The output contains the response body and HTTP status code.

## Troubleshooting

A disabled or invalid key prevents authentication. For request errors, check required arguments, service permissions, your plan and remaining credits. Failed tool responses stop the module with an error rather than being returned as a successful result. Never include API keys in public scenario descriptions or shared examples.

## Documentation and support

- [Automation and MCP reference](https://osrmroute.com/docs/automation)
- [API documentation](https://osrmroute.com/docs)
- [Plans and credit allowances](https://osrmroute.com/pricing)
- [Support](https://osrmroute.com/contact)
