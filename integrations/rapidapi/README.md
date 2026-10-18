# OSRMRoute Location APIs

Build with routing, address search, places, distance matrices, isochrones, road data and map design. This reference contains 45 operations.

## Authentication

Use both your RapidAPI application key and your own OSRMRoute API key. RapidAPI credentials identify your RapidAPI application; they do not replace your OSRMRoute account or credits. Send the OSRMRoute key as `Authorization: Bearer YOUR_OSRMROUTE_API_KEY`. Never publish a real key in examples or public workspaces.

## First request

1. Create an OSRMRoute account and a scoped API key at https://osrmroute.com/dashboard.
2. Select your RapidAPI application in the Playground.
3. Open Geocoding API, set `q=Berlin`, `country=DE`, `lang=en` and `limit=5`. Clear unrelated example filters such as `bbox`, `city`, `osm_tag` and `point`.
4. Supply your OSRMRoute key in the HTTP bearer token field and run the request.

## Services

Explore routing and optimization, matrix, map matching, nearest, trip, geocoding, reverse geocoding, autocomplete, places, isochrones, boundaries, elevation, timezone, geometry utilities, map and Studio operations in the endpoint reference. Each operation describes its parameters and response contract.

## Plans and usage

Connect your OSRMRoute account. Usage is billed through your OSRMRoute plan. OSRMRoute does not add a separate RapidAPI subscription or per-request overage charge. The BASIC gateway currently has a separate 1,000-request monthly hard limit; this is not an allocation of OSRMRoute credits. RapidAPI lists a bandwidth platform fee of $0.001 per MB above 10,240 MB/month. Check the subscription terms displayed by RapidAPI before subscribing. For higher-volume access without the additional RapidAPI gateway quota, use the direct OSRMRoute API.

OSRMRoute service access, API scopes, credits and rate limits depend on your OSRMRoute account. Road Data, Road Signs and AI features have additional plan requirements. Enterprise limits may be individually agreed. Check the current [pricing](https://osrmroute.com/pricing) before integrating. A successful request can consume OSRMRoute credits. An empty result does not imply complete data coverage. Live traffic is not included.

## Errors and reliability

Check the HTTP status and response error before using results. Invalid parameters, missing or invalid credentials, insufficient scope, plan restrictions and exhausted quotas must be handled by your application. Use bounded retries only for transient failures; do not automatically retry authentication or validation errors. Coverage varies by service and geography.

## Developer resources

- [Documentation](https://osrmroute.com/docs)
- [API reference](https://osrmroute.com/docs/platform)
- [SDKs and integrations](https://osrmroute.com/developers)
- [Coverage](https://osrmroute.com/coverage)
- [Pricing](https://osrmroute.com/pricing)
- [Support](https://osrmroute.com/contact)
