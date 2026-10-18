// Generated from the public OpenAPI contract; update with scripts/generate.py.
import type { INodeProperties } from 'n8n-workflow';
export const operations: INodeProperties[] = [
  {
    "displayName": "Resource",
    "name": "resource",
    "type": "options",
    "noDataExpression": true,
    "options": [
      {
        "name": "API",
        "value": "api"
      }
    ],
    "default": "api"
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ]
      }
    },
    "options": [
      {
        "name": "Autocomplete API",
        "value": "get_autocomplete",
        "action": "Autocomplete API",
        "description": "GET /api/1/autocomplete",
        "routing": {
          "request": {
            "method": "GET",
            "url": "/api/1/autocomplete"
          }
        }
      },
      {
        "name": "Batch Geocoding API",
        "value": "post_batch_geocoding",
        "action": "Batch Geocoding API",
        "description": "POST /api/1/geocode/batch",
        "routing": {
          "request": {
            "method": "POST",
            "url": "/api/1/geocode/batch",
            "body": "={{typeof $parameter.post_batch_geocoding_body === \"string\" ? JSON.parse($parameter.post_batch_geocoding_body) : $parameter.post_batch_geocoding_body}}"
          }
        }
      },
      {
        "name": "Boundary Lookup API",
        "value": "get_boundary",
        "action": "Boundary Lookup API",
        "description": "GET /api/1/boundary",
        "routing": {
          "request": {
            "method": "GET",
            "url": "/api/1/boundary"
          }
        }
      },
      {
        "name": "Cancel a queued job; running work cannot be cancelled",
        "value": "cancelQueuedJob",
        "action": "Cancel a queued job; running work cannot be cancelled",
        "description": "DELETE /api/jobs/{id}",
        "routing": {
          "request": {
            "method": "DELETE",
            "url": "=/api/jobs/{{encodeURIComponent($parameter.cancelQueuedJob_id)}}"
          }
        }
      },
      {
        "name": "Coordinate Conversion API",
        "value": "get_coordinate_conversion",
        "action": "Coordinate Conversion API",
        "description": "GET /api/1/convert",
        "routing": {
          "request": {
            "method": "GET",
            "url": "/api/1/convert"
          }
        }
      },
      {
        "name": "Country Info API",
        "value": "get_country_info",
        "action": "Country Info API",
        "description": "GET /api/1/country",
        "routing": {
          "request": {
            "method": "GET",
            "url": "/api/1/country"
          }
        }
      },
      {
        "name": "Dated dataset estimates and evidence review counts; info scope",
        "value": "getSourceMetadata",
        "action": "Dated dataset estimates and evidence review counts; info scope",
        "description": "GET /api/source-metadata",
        "routing": {
          "request": {
            "method": "GET",
            "url": "/api/source-metadata"
          }
        }
      },
      {
        "name": "Deterministic zero-credit fixture; requires sandbox key",
        "value": "runSandboxFixture",
        "action": "Deterministic zero-credit fixture; requires sandbox key",
        "description": "POST /api/sandbox",
        "routing": {
          "request": {
            "method": "POST",
            "url": "/api/sandbox",
            "body": "={{typeof $parameter.runSandboxFixture_body === \"string\" ? JSON.parse($parameter.runSandboxFixture_body) : $parameter.runSandboxFixture_body}}"
          }
        }
      },
      {
        "name": "Directions API / Alternative Routes API",
        "value": "get_directions",
        "action": "Directions API / Alternative Routes API",
        "description": "GET /api/1/directions",
        "routing": {
          "request": {
            "method": "GET",
            "url": "/api/1/directions"
          }
        }
      },
      {
        "name": "Elevation API",
        "value": "get_elevation",
        "action": "Elevation API",
        "description": "GET /api/1/elevation",
        "routing": {
          "request": {
            "method": "GET",
            "url": "/api/1/elevation"
          }
        }
      },
      {
        "name": "Elevation Profile API",
        "value": "post_elevation_profile",
        "action": "Elevation Profile API",
        "description": "POST /api/1/elevation/profile",
        "routing": {
          "request": {
            "method": "POST",
            "url": "/api/1/elevation/profile",
            "body": "={{typeof $parameter.post_elevation_profile_body === \"string\" ? JSON.parse($parameter.post_elevation_profile_body) : $parameter.post_elevation_profile_body}}"
          }
        }
      },
      {
        "name": "Find stops with calculated road detours",
        "value": "searchAlongRoute",
        "action": "Find stops with calculated road detours",
        "description": "POST /api/v1/places/along-route",
        "routing": {
          "request": {
            "method": "POST",
            "url": "/api/v1/places/along-route",
            "body": "={{typeof $parameter.searchAlongRoute_body === \"string\" ? JSON.parse($parameter.searchAlongRoute_body) : $parameter.searchAlongRoute_body}}"
          }
        }
      },
      {
        "name": "Geocoding API",
        "value": "get_geocoding",
        "action": "Geocoding API",
        "description": "GET /api/1/geocode",
        "routing": {
          "request": {
            "method": "GET",
            "url": "/api/1/geocode"
          }
        }
      },
      {
        "name": "Geofencing API",
        "value": "post_geofencing",
        "action": "Geofencing API",
        "description": "POST /api/1/geofence",
        "routing": {
          "request": {
            "method": "POST",
            "url": "/api/1/geofence",
            "body": "={{typeof $parameter.post_geofencing_body === \"string\" ? JSON.parse($parameter.post_geofencing_body) : $parameter.post_geofencing_body}}"
          }
        }
      },
      {
        "name": "Geometry Utilities API",
        "value": "post_geometry",
        "action": "Geometry Utilities API",
        "description": "POST /api/1/geometry",
        "routing": {
          "request": {
            "method": "POST",
            "url": "/api/1/geometry",
            "body": "={{typeof $parameter.post_geometry_body === \"string\" ? JSON.parse($parameter.post_geometry_body) : $parameter.post_geometry_body}}"
          }
        }
      },
      {
        "name": "Get place suggestions and retrieval tokens",
        "value": "suggestPlaces",
        "action": "Get place suggestions and retrieval tokens",
        "description": "POST /api/v1/search/suggest",
        "routing": {
          "request": {
            "method": "POST",
            "url": "/api/v1/search/suggest",
            "body": "={{typeof $parameter.suggestPlaces_body === \"string\" ? JSON.parse($parameter.suggestPlaces_body) : $parameter.suggestPlaces_body}}"
          }
        }
      },
      {
        "name": "Get the mapped passenger-car speed limit for a road near a coordinate",
        "value": "get_speed_limit",
        "action": "Get the mapped passenger-car speed limit for a road near a coordinate",
        "description": "GET /api/1/speed-limit",
        "routing": {
          "request": {
            "method": "GET",
            "url": "/api/1/speed-limit"
          }
        }
      },
      {
        "name": "Isochrones API",
        "value": "get_isochrones",
        "action": "Isochrones API",
        "description": "GET /api/1/isochrone",
        "routing": {
          "request": {
            "method": "GET",
            "url": "/api/1/isochrone"
          }
        }
      },
      {
        "name": "List jobs created by this API key",
        "value": "listBackgroundJobs",
        "action": "List jobs created by this API key",
        "description": "GET /api/jobs",
        "routing": {
          "request": {
            "method": "GET",
            "url": "/api/jobs"
          }
        }
      },
      {
        "name": "List owned Studio resources",
        "value": "listStudioResources",
        "action": "List owned Studio resources",
        "description": "GET /api/v1/studio/{resource}",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/api/v1/studio/{{encodeURIComponent($parameter.listStudioResources_resource)}}"
          }
        }
      },
      {
        "name": "Location Clustering",
        "value": "post_location_clustering",
        "action": "Location Clustering",
        "description": "POST /api/1/cluster",
        "routing": {
          "request": {
            "method": "POST",
            "url": "/api/1/cluster",
            "body": "={{typeof $parameter.post_location_clustering_body === \"string\" ? JSON.parse($parameter.post_location_clustering_body) : $parameter.post_location_clustering_body}}"
          }
        }
      },
      {
        "name": "Manage owned styles or datasets",
        "value": "manageStudioResource",
        "action": "Manage owned styles or datasets",
        "description": "POST /api/v1/studio/{resource}",
        "routing": {
          "request": {
            "method": "POST",
            "url": "=/api/v1/studio/{{encodeURIComponent($parameter.manageStudioResource_resource)}}",
            "body": "={{typeof $parameter.manageStudioResource_body === \"string\" ? JSON.parse($parameter.manageStudioResource_body) : $parameter.manageStudioResource_body}}"
          }
        }
      },
      {
        "name": "Map Matching API",
        "value": "get_map_matching",
        "action": "Map Matching API",
        "description": "GET /api/v1/osrm/match/v1/{profile}/{coordinates}",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/api/v1/osrm/match/v1/{{encodeURIComponent($parameter.get_map_matching_profile)}}/{{encodeURIComponent($parameter.get_map_matching_coordinates)}}"
          }
        }
      },
      {
        "name": "Matrix API",
        "value": "get_matrix",
        "action": "Matrix API",
        "description": "GET /api/v1/osrm/table/v1/{profile}/{coordinates}",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/api/v1/osrm/table/v1/{{encodeURIComponent($parameter.get_matrix_profile)}}/{{encodeURIComponent($parameter.get_matrix_coordinates)}}"
          }
        }
      },
      {
        "name": "Natural language place search",
        "value": "naturalSearch",
        "action": "Natural language place search",
        "description": "POST /api/v1/search/natural",
        "routing": {
          "request": {
            "method": "POST",
            "url": "/api/v1/search/natural",
            "body": "={{typeof $parameter.naturalSearch_body === \"string\" ? JSON.parse($parameter.naturalSearch_body) : $parameter.naturalSearch_body}}"
          }
        }
      },
      {
        "name": "Nearest API",
        "value": "get_nearest",
        "action": "Nearest API",
        "description": "GET /api/v1/osrm/nearest/v1/{profile}/{coordinates}",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/api/v1/osrm/nearest/v1/{{encodeURIComponent($parameter.get_nearest_profile)}}/{{encodeURIComponent($parameter.get_nearest_coordinates)}}"
          }
        }
      },
      {
        "name": "Places API",
        "value": "get_places",
        "action": "Places API",
        "description": "GET /api/1/places",
        "routing": {
          "request": {
            "method": "GET",
            "url": "/api/1/places"
          }
        }
      },
      {
        "name": "Preview style commands",
        "value": "previewTextStyle",
        "action": "Preview style commands",
        "description": "POST /api/v1/studio/preview",
        "routing": {
          "request": {
            "method": "POST",
            "url": "/api/v1/studio/preview",
            "body": "={{typeof $parameter.previewTextStyle_body === \"string\" ? JSON.parse($parameter.previewTextStyle_body) : $parameter.previewTextStyle_body}}"
          }
        }
      },
      {
        "name": "Query an owned map dataset",
        "value": "queryMapDataset",
        "action": "Query an owned map dataset",
        "description": "POST /api/v1/maps/datasets/{id}/query",
        "routing": {
          "request": {
            "method": "POST",
            "url": "=/api/v1/maps/datasets/{{encodeURIComponent($parameter.queryMapDataset_id)}}/query",
            "body": "={{typeof $parameter.queryMapDataset_body === \"string\" ? JSON.parse($parameter.queryMapDataset_body) : $parameter.queryMapDataset_body}}"
          }
        }
      },
      {
        "name": "Queue an encrypted, expiring job",
        "value": "createBackgroundJob",
        "action": "Queue an encrypted, expiring job",
        "description": "POST /api/jobs",
        "routing": {
          "request": {
            "method": "POST",
            "url": "/api/jobs",
            "body": "={{typeof $parameter.createBackgroundJob_body === \"string\" ? JSON.parse($parameter.createBackgroundJob_body) : $parameter.createBackgroundJob_body}}"
          }
        }
      },
      {
        "name": "Read job status or encrypted result before 24-hour expiry",
        "value": "getBackgroundJob",
        "action": "Read job status or encrypted result before 24-hour expiry",
        "description": "GET /api/jobs/{id}",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/api/jobs/{{encodeURIComponent($parameter.getBackgroundJob_id)}}"
          }
        }
      },
      {
        "name": "Read source place attributes",
        "value": "placeDetails",
        "action": "Read source place attributes",
        "description": "POST /api/v1/places/details",
        "routing": {
          "request": {
            "method": "POST",
            "url": "/api/v1/places/details",
            "body": "={{typeof $parameter.placeDetails_body === \"string\" ? JSON.parse($parameter.placeDetails_body) : $parameter.placeDetails_body}}"
          }
        }
      },
      {
        "name": "Render a PNG map",
        "value": "createStaticMap",
        "action": "Render a PNG map",
        "description": "POST /api/v1/maps/static",
        "routing": {
          "request": {
            "method": "POST",
            "url": "/api/v1/maps/static",
            "body": "={{typeof $parameter.createStaticMap_body === \"string\" ? JSON.parse($parameter.createStaticMap_body) : $parameter.createStaticMap_body}}"
          }
        }
      },
      {
        "name": "Retrieve a signed suggestion snapshot",
        "value": "retrievePlace",
        "action": "Retrieve a signed suggestion snapshot",
        "description": "POST /api/v1/search/retrieve",
        "routing": {
          "request": {
            "method": "POST",
            "url": "/api/v1/search/retrieve",
            "body": "={{typeof $parameter.retrievePlace_body === \"string\" ? JSON.parse($parameter.retrievePlace_body) : $parameter.retrievePlace_body}}"
          }
        }
      },
      {
        "name": "Road data: batch",
        "value": "road_data_batch",
        "action": "Road data: batch",
        "description": "POST /api/v1/roads/batch",
        "routing": {
          "request": {
            "method": "POST",
            "url": "/api/v1/roads/batch",
            "body": "={{typeof $parameter.road_data_batch_body === \"string\" ? JSON.parse($parameter.road_data_batch_body) : $parameter.road_data_batch_body}}"
          }
        }
      },
      {
        "name": "Road data: lookup",
        "value": "road_data_lookup",
        "action": "Road data: lookup",
        "description": "POST /api/v1/roads/lookup",
        "routing": {
          "request": {
            "method": "POST",
            "url": "/api/v1/roads/lookup",
            "body": "={{typeof $parameter.road_data_lookup_body === \"string\" ? JSON.parse($parameter.road_data_lookup_body) : $parameter.road_data_lookup_body}}"
          }
        }
      },
      {
        "name": "Road data: signs",
        "value": "road_data_signs",
        "action": "Road data: signs",
        "description": "POST /api/v1/roads/signs",
        "routing": {
          "request": {
            "method": "POST",
            "url": "/api/v1/roads/signs",
            "body": "={{typeof $parameter.road_data_signs_body === \"string\" ? JSON.parse($parameter.road_data_signs_body) : $parameter.road_data_signs_body}}"
          }
        }
      },
      {
        "name": "Road data: usage",
        "value": "road_data_usage",
        "action": "Road data: usage",
        "description": "POST /api/v1/roads/usage",
        "routing": {
          "request": {
            "method": "POST",
            "url": "/api/v1/roads/usage",
            "body": "={{typeof $parameter.road_data_usage_body === \"string\" ? JSON.parse($parameter.road_data_usage_body) : $parameter.road_data_usage_body}}"
          }
        }
      },
      {
        "name": "Route Optimization API",
        "value": "post_route_optimization",
        "action": "Route Optimization API",
        "description": "POST /api/1/vrp",
        "routing": {
          "request": {
            "method": "POST",
            "url": "/api/1/vrp",
            "body": "={{typeof $parameter.post_route_optimization_body === \"string\" ? JSON.parse($parameter.post_route_optimization_body) : $parameter.post_route_optimization_body}}"
          }
        }
      },
      {
        "name": "Routing API",
        "value": "get_routing",
        "action": "Routing API",
        "description": "GET /api/v1/osrm/route/v1/{profile}/{coordinates}",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/api/v1/osrm/route/v1/{{encodeURIComponent($parameter.get_routing_profile)}}/{{encodeURIComponent($parameter.get_routing_coordinates)}}"
          }
        }
      },
      {
        "name": "Search using address components",
        "value": "structuredGeocode",
        "action": "Search using address components",
        "description": "POST /api/v1/search/structured",
        "routing": {
          "request": {
            "method": "POST",
            "url": "/api/v1/search/structured",
            "body": "={{typeof $parameter.structuredGeocode_body === \"string\" ? JSON.parse($parameter.structuredGeocode_body) : $parameter.structuredGeocode_body}}"
          }
        }
      },
      {
        "name": "Snap to Road API",
        "value": "get_snap_to_road",
        "action": "Snap to Road API",
        "description": "GET /api/1/snap",
        "routing": {
          "request": {
            "method": "GET",
            "url": "/api/1/snap"
          }
        }
      },
      {
        "name": "Solar API",
        "value": "get_solar",
        "action": "Solar API",
        "description": "GET /api/1/solar",
        "routing": {
          "request": {
            "method": "GET",
            "url": "/api/1/solar"
          }
        }
      },
      {
        "name": "Timezone API",
        "value": "get_timezone",
        "action": "Timezone API",
        "description": "GET /api/1/timezone",
        "routing": {
          "request": {
            "method": "GET",
            "url": "/api/1/timezone"
          }
        }
      },
      {
        "name": "Trip API (TSP)",
        "value": "get_trip",
        "action": "Trip API (TSP)",
        "description": "GET /api/v1/osrm/trip/v1/{profile}/{coordinates}",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/api/v1/osrm/trip/v1/{{encodeURIComponent($parameter.get_trip_profile)}}/{{encodeURIComponent($parameter.get_trip_coordinates)}}"
          }
        }
      }
    ],
    "default": "get_geocoding"
  },
  {
    "displayName": "Profile",
    "name": "get_routing_profile",
    "type": "string",
    "default": "",
    "description": "Transport mode profile. Supported values: driving (car), cycling (bike), walking (pedestrian)",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "get_routing"
        ]
      }
    }
  },
  {
    "displayName": "Coordinates",
    "name": "get_routing_coordinates",
    "type": "string",
    "default": "",
    "description": "Coordinates of the points. Format: lon,lat;lon,lat;lon,lat... (at least 2 points)",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "get_routing"
        ]
      }
    }
  },
  {
    "displayName": "Additional Fields",
    "name": "get_routing_options",
    "type": "collection",
    "default": {},
    "placeholder": "Add Field",
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "get_routing"
        ]
      }
    },
    "options": [
      {
        "displayName": "Overview",
        "name": "overview",
        "type": "string",
        "default": "",
        "description": "Detail level of the returned route geometry: simplified, full (full geometry), false (no geometry)",
        "routing": {
          "send": {
            "type": "query",
            "property": "overview"
          }
        }
      },
      {
        "displayName": "Geometries",
        "name": "geometries",
        "type": "string",
        "default": "",
        "description": "Geometry format: geojson (GeoJSON object), polyline (encoded string)",
        "routing": {
          "send": {
            "type": "query",
            "property": "geometries"
          }
        }
      },
      {
        "displayName": "Steps",
        "name": "steps",
        "type": "boolean",
        "default": false,
        "description": "Whether step-by-step instructions are returned for each turn",
        "routing": {
          "send": {
            "type": "query",
            "property": "steps"
          }
        }
      }
    ]
  },
  {
    "displayName": "Request Body (JSON)",
    "name": "post_route_optimization_body",
    "type": "json",
    "default": "{\n  \"vehicles\": [\n    {\n      \"vehicle_id\": \"v1\",\n      \"start\": [\n        49.85,\n        40.37\n      ]\n    }\n  ],\n  \"services\": [\n    {\n      \"id\": 10,\n      \"location\": [\n        49.86,\n        40.4\n      ]\n    }\n  ]\n}",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "post_route_optimization"
        ]
      }
    },
    "description": "JSON request body. See the OSRMRoute API reference for required fields and plan limits"
  },
  {
    "displayName": "Additional Fields",
    "name": "get_geocoding_options",
    "type": "collection",
    "default": {},
    "placeholder": "Add Field",
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "get_geocoding"
        ]
      }
    },
    "options": [
      {
        "displayName": "Q",
        "name": "q",
        "type": "string",
        "default": "",
        "description": "The address to search (e.g. \"Nizami Street, Baku\")",
        "routing": {
          "send": {
            "type": "query",
            "property": "q"
          }
        }
      },
      {
        "displayName": "Reverse",
        "name": "reverse",
        "type": "boolean",
        "default": false,
        "description": "Whether must be true to perform reverse geocoding (searching from coordinate to address)",
        "routing": {
          "send": {
            "type": "query",
            "property": "reverse"
          }
        }
      },
      {
        "displayName": "Point",
        "name": "point",
        "type": "string",
        "default": "",
        "description": "Coordinate (lat,lng) to reverse geocode into an address. Required when reverse=true",
        "routing": {
          "send": {
            "type": "query",
            "property": "point"
          }
        }
      },
      {
        "displayName": "Limit",
        "name": "limit",
        "type": "number",
        "default": 0,
        "description": "Maximum number of results to return (1\u201320, default 5)",
        "routing": {
          "send": {
            "type": "query",
            "property": "limit"
          }
        }
      },
      {
        "displayName": "Lang",
        "name": "lang",
        "type": "string",
        "default": "",
        "description": "Preferred language for result names (e.g. en, az, ru). Defaults to en",
        "routing": {
          "send": {
            "type": "query",
            "property": "lang"
          }
        }
      },
      {
        "displayName": "Lat",
        "name": "lat",
        "type": "number",
        "default": 0,
        "description": "Latitude to bias results toward (nearby matches rank first). Pair with lon",
        "routing": {
          "send": {
            "type": "query",
            "property": "lat"
          }
        }
      },
      {
        "displayName": "Lon",
        "name": "lon",
        "type": "number",
        "default": 0,
        "description": "Longitude to bias results toward. Pair with lat",
        "routing": {
          "send": {
            "type": "query",
            "property": "lon"
          }
        }
      },
      {
        "displayName": "Bbox",
        "name": "bbox",
        "type": "string",
        "default": "",
        "description": "Restrict results to a bounding box: minLon,minLat,maxLon,maxLat",
        "routing": {
          "send": {
            "type": "query",
            "property": "bbox"
          }
        }
      },
      {
        "displayName": "Osm Tag",
        "name": "osm_tag",
        "type": "string",
        "default": "",
        "description": "Filter by OSM tag, e.g. place (settlements) or amenity:cafe. Prefix with ! to exclude",
        "routing": {
          "send": {
            "type": "query",
            "property": "osm_tag"
          }
        }
      },
      {
        "displayName": "Country",
        "name": "country",
        "type": "string",
        "default": "",
        "description": "ISO 3166-1 alpha-2 country code, for example AZ. Returns results only within that country",
        "routing": {
          "send": {
            "type": "query",
            "property": "country"
          }
        }
      },
      {
        "displayName": "City",
        "name": "city",
        "type": "string",
        "default": "",
        "description": "Strict city filter, for example Baku. Requires exactly one country code",
        "routing": {
          "send": {
            "type": "query",
            "property": "city"
          }
        }
      },
      {
        "displayName": "Elastic",
        "name": "elastic",
        "type": "boolean",
        "default": false,
        "description": "Whether elastic (fuzzy, high-recall) search \u2014 default true. Tolerates typos, missing diacritics (\u0259\u2194e), reordered words, generic words (metro, rayonu) and house numbers. Set false for strict exact matching",
        "routing": {
          "send": {
            "type": "query",
            "property": "elastic"
          }
        }
      }
    ]
  },
  {
    "displayName": "Point",
    "name": "get_places_point",
    "type": "string",
    "default": "",
    "description": "Center coordinate lat,lng to search around (required)",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "get_places"
        ]
      }
    },
    "routing": {
      "send": {
        "type": "query",
        "property": "point"
      }
    }
  },
  {
    "displayName": "Additional Fields",
    "name": "get_places_options",
    "type": "collection",
    "default": {},
    "placeholder": "Add Field",
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "get_places"
        ]
      }
    },
    "options": [
      {
        "displayName": "Radius",
        "name": "radius",
        "type": "number",
        "default": 0,
        "description": "Search radius in kilometers (0.05\u201320, default 1)",
        "routing": {
          "send": {
            "type": "query",
            "property": "radius"
          }
        }
      },
      {
        "displayName": "Category",
        "name": "category",
        "type": "string",
        "default": "",
        "description": "OSM tag filter, e.g. amenity:cafe, shop, tourism:hotel. Prefix with ! to exclude. Empty = all POIs",
        "routing": {
          "send": {
            "type": "query",
            "property": "category"
          }
        }
      },
      {
        "displayName": "Limit",
        "name": "limit",
        "type": "number",
        "default": 0,
        "description": "Max results to return (1\u201350, default 10)",
        "routing": {
          "send": {
            "type": "query",
            "property": "limit"
          }
        }
      },
      {
        "displayName": "Lang",
        "name": "lang",
        "type": "string",
        "default": "",
        "description": "Preferred language for names (e.g. en, az, ru)",
        "routing": {
          "send": {
            "type": "query",
            "property": "lang"
          }
        }
      }
    ]
  },
  {
    "displayName": "Profile",
    "name": "get_matrix_profile",
    "type": "string",
    "default": "",
    "description": "Transport profile (driving, cycling, walking)",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "get_matrix"
        ]
      }
    }
  },
  {
    "displayName": "Coordinates",
    "name": "get_matrix_coordinates",
    "type": "string",
    "default": "",
    "description": "Matrix points. Format: lon,lat;lon,lat;lon,lat",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "get_matrix"
        ]
      }
    }
  },
  {
    "displayName": "Additional Fields",
    "name": "get_matrix_options",
    "type": "collection",
    "default": {},
    "placeholder": "Add Field",
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "get_matrix"
        ]
      }
    },
    "options": [
      {
        "displayName": "Annotations",
        "name": "annotations",
        "type": "string",
        "default": "",
        "description": "Data to compute: duration (time), distance, or both",
        "routing": {
          "send": {
            "type": "query",
            "property": "annotations"
          }
        }
      }
    ]
  },
  {
    "displayName": "Point",
    "name": "get_isochrones_point",
    "type": "string",
    "default": "",
    "description": "Center point. Format: lat,lon",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "get_isochrones"
        ]
      }
    },
    "routing": {
      "send": {
        "type": "query",
        "property": "point"
      }
    }
  },
  {
    "displayName": "Additional Fields",
    "name": "get_isochrones_options",
    "type": "collection",
    "default": {},
    "placeholder": "Add Field",
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "get_isochrones"
        ]
      }
    },
    "options": [
      {
        "displayName": "Time Limit",
        "name": "time_limit",
        "type": "number",
        "default": 0,
        "description": "Travel time limit (in seconds)",
        "routing": {
          "send": {
            "type": "query",
            "property": "time_limit"
          }
        }
      }
    ]
  },
  {
    "displayName": "Profile",
    "name": "get_map_matching_profile",
    "type": "string",
    "default": "",
    "description": "Transport profile",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "get_map_matching"
        ]
      }
    }
  },
  {
    "displayName": "Coordinates",
    "name": "get_map_matching_coordinates",
    "type": "string",
    "default": "",
    "description": "The sequence of GPS coordinates to snap (lon,lat;lon,lat...)",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "get_map_matching"
        ]
      }
    }
  },
  {
    "displayName": "Additional Fields",
    "name": "get_map_matching_options",
    "type": "collection",
    "default": {},
    "placeholder": "Add Field",
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "get_map_matching"
        ]
      }
    },
    "options": [
      {
        "displayName": "Geometries",
        "name": "geometries",
        "type": "string",
        "default": "",
        "description": "Geometry format: geojson (GeoJSON object), polyline (encoded string)",
        "routing": {
          "send": {
            "type": "query",
            "property": "geometries"
          }
        }
      },
      {
        "displayName": "Overview",
        "name": "overview",
        "type": "string",
        "default": "",
        "description": "Geometry precision of the matched route",
        "routing": {
          "send": {
            "type": "query",
            "property": "overview"
          }
        }
      }
    ]
  },
  {
    "displayName": "Profile",
    "name": "get_nearest_profile",
    "type": "string",
    "default": "",
    "description": "Transport profile",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "get_nearest"
        ]
      }
    }
  },
  {
    "displayName": "Coordinates",
    "name": "get_nearest_coordinates",
    "type": "string",
    "default": "",
    "description": "The point to search near. Format: lon,lat (a single pair)",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "get_nearest"
        ]
      }
    }
  },
  {
    "displayName": "Additional Fields",
    "name": "get_nearest_options",
    "type": "collection",
    "default": {},
    "placeholder": "Add Field",
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "get_nearest"
        ]
      }
    },
    "options": [
      {
        "displayName": "Number",
        "name": "number",
        "type": "number",
        "default": 0,
        "description": "The number of nearest road candidates to find",
        "routing": {
          "send": {
            "type": "query",
            "property": "number"
          }
        }
      }
    ]
  },
  {
    "displayName": "Profile",
    "name": "get_trip_profile",
    "type": "string",
    "default": "",
    "description": "Transport profile",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "get_trip"
        ]
      }
    }
  },
  {
    "displayName": "Coordinates",
    "name": "get_trip_coordinates",
    "type": "string",
    "default": "",
    "description": "Points to visit. Format: lon,lat;lon,lat",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "get_trip"
        ]
      }
    }
  },
  {
    "displayName": "Additional Fields",
    "name": "get_trip_options",
    "type": "collection",
    "default": {},
    "placeholder": "Add Field",
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "get_trip"
        ]
      }
    },
    "options": [
      {
        "displayName": "Geometries",
        "name": "geometries",
        "type": "string",
        "default": "",
        "description": "Geometry format: geojson (GeoJSON object), polyline (encoded string)",
        "routing": {
          "send": {
            "type": "query",
            "property": "geometries"
          }
        }
      },
      {
        "displayName": "Source",
        "name": "source",
        "type": "string",
        "default": "",
        "description": "The point the route can start from (any or the first point)",
        "routing": {
          "send": {
            "type": "query",
            "property": "source"
          }
        }
      },
      {
        "displayName": "Destination",
        "name": "destination",
        "type": "string",
        "default": "",
        "description": "The point the route ends at (any or the last point)",
        "routing": {
          "send": {
            "type": "query",
            "property": "destination"
          }
        }
      }
    ]
  },
  {
    "displayName": "Request Body (JSON)",
    "name": "post_location_clustering_body",
    "type": "json",
    "default": "{\n  \"customers\": [\n    [\n      49.85,\n      40.37\n    ],\n    [\n      49.86,\n      40.4\n    ],\n    [\n      49.83,\n      40.39\n    ]\n  ],\n  \"clusters\": 2\n}",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "post_location_clustering"
        ]
      }
    },
    "description": "JSON request body. See the OSRMRoute API reference for required fields and plan limits"
  },
  {
    "displayName": "Point",
    "name": "get_directions_point",
    "type": "string",
    "default": "",
    "description": "Waypoint as lat,lng. Repeat the parameter for each stop (minimum 2)",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "get_directions"
        ]
      }
    },
    "routing": {
      "send": {
        "type": "query",
        "property": "point"
      }
    }
  },
  {
    "displayName": "Additional Fields",
    "name": "get_directions_options",
    "type": "collection",
    "default": {},
    "placeholder": "Add Field",
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "get_directions"
        ]
      }
    },
    "options": [
      {
        "displayName": "Profile",
        "name": "profile",
        "type": "string",
        "default": "",
        "description": "Travel mode: driving, cycling or walking",
        "routing": {
          "send": {
            "type": "query",
            "property": "profile"
          }
        }
      },
      {
        "displayName": "Alternatives",
        "name": "alternatives",
        "type": "number",
        "default": 0,
        "description": "Number of alternative routes to also return (0\u20133)",
        "routing": {
          "send": {
            "type": "query",
            "property": "alternatives"
          }
        }
      },
      {
        "displayName": "Lang",
        "name": "lang",
        "type": "string",
        "default": "",
        "description": "Language code for the instruction text",
        "routing": {
          "send": {
            "type": "query",
            "property": "lang"
          }
        }
      }
    ]
  },
  {
    "displayName": "Point",
    "name": "get_snap_to_road_point",
    "type": "string",
    "default": "",
    "description": "GPS point as lat,lng. Repeat the parameter for each point (maximum 100)",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "get_snap_to_road"
        ]
      }
    },
    "routing": {
      "send": {
        "type": "query",
        "property": "point"
      }
    }
  },
  {
    "displayName": "Additional Fields",
    "name": "get_snap_to_road_options",
    "type": "collection",
    "default": {},
    "placeholder": "Add Field",
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "get_snap_to_road"
        ]
      }
    },
    "options": [
      {
        "displayName": "Profile",
        "name": "profile",
        "type": "string",
        "default": "",
        "description": "Road network to snap to: driving, cycling or walking",
        "routing": {
          "send": {
            "type": "query",
            "property": "profile"
          }
        }
      }
    ]
  },
  {
    "displayName": "Q",
    "name": "get_autocomplete_q",
    "type": "string",
    "default": "",
    "description": "Search text \u2014 partial input is fine",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "get_autocomplete"
        ]
      }
    },
    "routing": {
      "send": {
        "type": "query",
        "property": "q"
      }
    }
  },
  {
    "displayName": "Additional Fields",
    "name": "get_autocomplete_options",
    "type": "collection",
    "default": {},
    "placeholder": "Add Field",
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "get_autocomplete"
        ]
      }
    },
    "options": [
      {
        "displayName": "Limit",
        "name": "limit",
        "type": "number",
        "default": 0,
        "description": "Maximum number of suggestions to return (1\u201315)",
        "routing": {
          "send": {
            "type": "query",
            "property": "limit"
          }
        }
      },
      {
        "displayName": "Lang",
        "name": "lang",
        "type": "string",
        "default": "",
        "description": "Language code for result labels",
        "routing": {
          "send": {
            "type": "query",
            "property": "lang"
          }
        }
      },
      {
        "displayName": "Lat",
        "name": "lat",
        "type": "number",
        "default": 0,
        "description": "Latitude to bias results toward (optional)",
        "routing": {
          "send": {
            "type": "query",
            "property": "lat"
          }
        }
      },
      {
        "displayName": "Lon",
        "name": "lon",
        "type": "number",
        "default": 0,
        "description": "Longitude to bias results toward (optional)",
        "routing": {
          "send": {
            "type": "query",
            "property": "lon"
          }
        }
      },
      {
        "displayName": "Country",
        "name": "country",
        "type": "string",
        "default": "",
        "description": "ISO 3166-1 alpha-2 country code, for example AZ. Returns results only within that country",
        "routing": {
          "send": {
            "type": "query",
            "property": "country"
          }
        }
      },
      {
        "displayName": "City",
        "name": "city",
        "type": "string",
        "default": "",
        "description": "Strict city filter, for example Baku. Requires exactly one country code",
        "routing": {
          "send": {
            "type": "query",
            "property": "city"
          }
        }
      },
      {
        "displayName": "Osm Tag",
        "name": "osm_tag",
        "type": "string",
        "default": "",
        "description": "Filter suggestions by OSM type, e.g. place:city",
        "routing": {
          "send": {
            "type": "query",
            "property": "osm_tag"
          }
        }
      }
    ]
  },
  {
    "displayName": "Request Body (JSON)",
    "name": "post_batch_geocoding_body",
    "type": "json",
    "default": "{\n  \"queries\": [\n    \"Nizami k\\u00fc\\u00e7\\u0259si 10\",\n    \"28 May, Bak\\u0131\"\n  ],\n  \"lang\": \"az\"\n}",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "post_batch_geocoding"
        ]
      }
    },
    "description": "JSON request body. See the OSRMRoute API reference for required fields and plan limits"
  },
  {
    "displayName": "Point",
    "name": "get_timezone_point",
    "type": "string",
    "default": "",
    "description": "Coordinate as lat,lng",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "get_timezone"
        ]
      }
    },
    "routing": {
      "send": {
        "type": "query",
        "property": "point"
      }
    }
  },
  {
    "displayName": "Additional Fields",
    "name": "get_timezone_options",
    "type": "collection",
    "default": {},
    "placeholder": "Add Field",
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "get_timezone"
        ]
      }
    },
    "options": [
      {
        "displayName": "Lat",
        "name": "lat",
        "type": "number",
        "default": 0,
        "description": "Latitude (alternative to point)",
        "routing": {
          "send": {
            "type": "query",
            "property": "lat"
          }
        }
      },
      {
        "displayName": "Lon",
        "name": "lon",
        "type": "number",
        "default": 0,
        "description": "Longitude (alternative to point)",
        "routing": {
          "send": {
            "type": "query",
            "property": "lon"
          }
        }
      },
      {
        "displayName": "Timestamp",
        "name": "timestamp",
        "type": "number",
        "default": 0,
        "description": "Unix time (seconds) or ISO date to resolve the offset for; defaults to now",
        "routing": {
          "send": {
            "type": "query",
            "property": "timestamp"
          }
        }
      }
    ]
  },
  {
    "displayName": "Point",
    "name": "get_elevation_point",
    "type": "string",
    "default": "",
    "description": "Coordinate as lat,lng. Repeat for each point (up to 100 on GET)",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "get_elevation"
        ]
      }
    },
    "routing": {
      "send": {
        "type": "query",
        "property": "point"
      }
    }
  },
  {
    "displayName": "Point",
    "name": "get_boundary_point",
    "type": "string",
    "default": "",
    "description": "Coordinate as lat,lng",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "get_boundary"
        ]
      }
    },
    "routing": {
      "send": {
        "type": "query",
        "property": "point"
      }
    }
  },
  {
    "displayName": "Additional Fields",
    "name": "get_boundary_options",
    "type": "collection",
    "default": {},
    "placeholder": "Add Field",
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "get_boundary"
        ]
      }
    },
    "options": [
      {
        "displayName": "Polygon",
        "name": "polygon",
        "type": "boolean",
        "default": false,
        "description": "Whether set true to also return the boundary as GeoJSON",
        "routing": {
          "send": {
            "type": "query",
            "property": "polygon"
          }
        }
      },
      {
        "displayName": "Lang",
        "name": "lang",
        "type": "string",
        "default": "",
        "description": "Language code for place names",
        "routing": {
          "send": {
            "type": "query",
            "property": "lang"
          }
        }
      }
    ]
  },
  {
    "displayName": "Request Body (JSON)",
    "name": "post_geofencing_body",
    "type": "json",
    "default": "{\n  \"fences\": [\n    {\n      \"id\": \"zone1\",\n      \"polygon\": [\n        [\n          40.4,\n          49.85\n        ],\n        [\n          40.43,\n          49.85\n        ],\n        [\n          40.43,\n          49.9\n        ],\n        [\n          40.4,\n          49.9\n        ]\n      ]\n    }\n  ],\n  \"points\": [\n    [\n      40.41,\n      49.87\n    ],\n    [\n      40.5,\n      50.1\n    ]\n  ]\n}",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "post_geofencing"
        ]
      }
    },
    "description": "JSON request body. See the OSRMRoute API reference for required fields and plan limits"
  },
  {
    "displayName": "Request Body (JSON)",
    "name": "post_elevation_profile_body",
    "type": "json",
    "default": "{\n  \"points\": [\n    [\n      40.37,\n      49.85\n    ],\n    [\n      40.8,\n      48.9\n    ],\n    [\n      41.3,\n      48.05\n    ]\n  ]\n}",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "post_elevation_profile"
        ]
      }
    },
    "description": "JSON request body. See the OSRMRoute API reference for required fields and plan limits"
  },
  {
    "displayName": "Point",
    "name": "get_solar_point",
    "type": "string",
    "default": "",
    "description": "Coordinate as lat,lng",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "get_solar"
        ]
      }
    },
    "routing": {
      "send": {
        "type": "query",
        "property": "point"
      }
    }
  },
  {
    "displayName": "Additional Fields",
    "name": "get_solar_options",
    "type": "collection",
    "default": {},
    "placeholder": "Add Field",
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "get_solar"
        ]
      }
    },
    "options": [
      {
        "displayName": "Date",
        "name": "date",
        "type": "string",
        "default": "",
        "description": "Date (YYYY-MM-DD) to compute times for; defaults to today",
        "routing": {
          "send": {
            "type": "query",
            "property": "date"
          }
        }
      }
    ]
  },
  {
    "displayName": "Request Body (JSON)",
    "name": "post_geometry_body",
    "type": "json",
    "default": "{\n  \"op\": \"distance\",\n  \"from\": [\n    40.37,\n    49.85\n  ],\n  \"to\": [\n    40.4,\n    49.86\n  ]\n}",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "post_geometry"
        ]
      }
    },
    "description": "JSON request body. See the OSRMRoute API reference for required fields and plan limits"
  },
  {
    "displayName": "Point",
    "name": "get_coordinate_conversion_point",
    "type": "string",
    "default": "",
    "description": "Coordinate as lat,lng to convert to UTM/MGRS",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "get_coordinate_conversion"
        ]
      }
    },
    "routing": {
      "send": {
        "type": "query",
        "property": "point"
      }
    }
  },
  {
    "displayName": "Additional Fields",
    "name": "get_coordinate_conversion_options",
    "type": "collection",
    "default": {},
    "placeholder": "Add Field",
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "get_coordinate_conversion"
        ]
      }
    },
    "options": [
      {
        "displayName": "Mgrs",
        "name": "mgrs",
        "type": "string",
        "default": "",
        "description": "MGRS string to reverse-convert into a coordinate",
        "routing": {
          "send": {
            "type": "query",
            "property": "mgrs"
          }
        }
      }
    ]
  },
  {
    "displayName": "Additional Fields",
    "name": "get_country_info_options",
    "type": "collection",
    "default": {},
    "placeholder": "Add Field",
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "get_country_info"
        ]
      }
    },
    "options": [
      {
        "displayName": "Code",
        "name": "code",
        "type": "string",
        "default": "",
        "description": "ISO 3166 alpha-2 or alpha-3 country code (e.g. AZ or AZE)",
        "routing": {
          "send": {
            "type": "query",
            "property": "code"
          }
        }
      },
      {
        "displayName": "Name",
        "name": "name",
        "type": "string",
        "default": "",
        "description": "Country name as an alternative to code",
        "routing": {
          "send": {
            "type": "query",
            "property": "name"
          }
        }
      }
    ]
  },
  {
    "displayName": "Additional Fields",
    "name": "get_speed_limit_options",
    "type": "collection",
    "default": {},
    "placeholder": "Add Field",
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "get_speed_limit"
        ]
      }
    },
    "options": [
      {
        "displayName": "Point",
        "name": "point",
        "type": "string",
        "default": "",
        "description": "Latitude,longitude. Supply point or both lat and lon",
        "routing": {
          "send": {
            "type": "query",
            "property": "point"
          }
        }
      },
      {
        "displayName": "Lat",
        "name": "lat",
        "type": "number",
        "default": 0,
        "description": "lat",
        "routing": {
          "send": {
            "type": "query",
            "property": "lat"
          }
        }
      },
      {
        "displayName": "Lon",
        "name": "lon",
        "type": "number",
        "default": 0,
        "description": "lon",
        "routing": {
          "send": {
            "type": "query",
            "property": "lon"
          }
        }
      },
      {
        "displayName": "Heading",
        "name": "heading",
        "type": "number",
        "default": 0,
        "description": "Travel heading in degrees clockwise from north; used for carriageway and direction selection",
        "routing": {
          "send": {
            "type": "query",
            "property": "heading"
          }
        }
      },
      {
        "displayName": "Radius",
        "name": "radius",
        "type": "number",
        "default": 35,
        "description": "Maximum road matching distance in metres",
        "routing": {
          "send": {
            "type": "query",
            "property": "radius"
          }
        }
      },
      {
        "displayName": "Osm Way Id",
        "name": "osm_way_id",
        "type": "string",
        "default": "",
        "description": "Optional road identity to resolve nearby roads. The way must still be inside the radius and compatible with heading",
        "routing": {
          "send": {
            "type": "query",
            "property": "osm_way_id"
          }
        }
      }
    ]
  },
  {
    "displayName": "Request Body (JSON)",
    "name": "createBackgroundJob_body",
    "type": "json",
    "default": "{\n  \"operation\": \"geocode_batch\",\n  \"input\": {\n    \"queries\": [\n      \"Baku, Azerbaijan\"\n    ]\n  }\n}",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "createBackgroundJob"
        ]
      }
    },
    "description": "JSON request body. See the OSRMRoute API reference for required fields and plan limits"
  },
  {
    "displayName": "Id",
    "name": "getBackgroundJob_id",
    "type": "string",
    "default": "",
    "description": "id",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "getBackgroundJob"
        ]
      }
    }
  },
  {
    "displayName": "Additional Fields",
    "name": "getBackgroundJob_options",
    "type": "collection",
    "default": {},
    "placeholder": "Add Field",
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "getBackgroundJob"
        ]
      }
    },
    "options": [
      {
        "displayName": "Result",
        "name": "result",
        "type": "options",
        "default": 0,
        "description": "result",
        "options": [
          {
            "name": "0",
            "value": 0
          },
          {
            "name": "1",
            "value": 1
          }
        ],
        "routing": {
          "send": {
            "type": "query",
            "property": "result"
          }
        }
      }
    ]
  },
  {
    "displayName": "Id",
    "name": "cancelQueuedJob_id",
    "type": "string",
    "default": "",
    "description": "id",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "cancelQueuedJob"
        ]
      }
    }
  },
  {
    "displayName": "Request Body (JSON)",
    "name": "runSandboxFixture_body",
    "type": "json",
    "default": "{\n  \"operation\": \"route\",\n  \"input\": {\n    \"points\": [\n      [\n        40.4,\n        49.8\n      ],\n      [\n        40.5,\n        49.9\n      ]\n    ]\n  }\n}",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "runSandboxFixture"
        ]
      }
    },
    "description": "JSON request body. See the OSRMRoute API reference for required fields and plan limits"
  },
  {
    "displayName": "Request Body (JSON)",
    "name": "placeDetails_body",
    "type": "json",
    "default": "{}",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "placeDetails"
        ]
      }
    },
    "description": "JSON request body. See the OSRMRoute API reference for required fields and plan limits"
  },
  {
    "displayName": "Request Body (JSON)",
    "name": "naturalSearch_body",
    "type": "json",
    "default": "{}",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "naturalSearch"
        ]
      }
    },
    "description": "JSON request body. See the OSRMRoute API reference for required fields and plan limits"
  },
  {
    "displayName": "Request Body (JSON)",
    "name": "previewTextStyle_body",
    "type": "json",
    "default": "{}",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "previewTextStyle"
        ]
      }
    },
    "description": "JSON request body. See the OSRMRoute API reference for required fields and plan limits"
  },
  {
    "displayName": "Request Body (JSON)",
    "name": "createStaticMap_body",
    "type": "json",
    "default": "{}",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "createStaticMap"
        ]
      }
    },
    "description": "JSON request body. See the OSRMRoute API reference for required fields and plan limits"
  },
  {
    "displayName": "Id",
    "name": "queryMapDataset_id",
    "type": "string",
    "default": "",
    "description": "id",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "queryMapDataset"
        ]
      }
    }
  },
  {
    "displayName": "Request Body (JSON)",
    "name": "queryMapDataset_body",
    "type": "json",
    "default": "{}",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "queryMapDataset"
        ]
      }
    },
    "description": "JSON request body. See the OSRMRoute API reference for required fields and plan limits"
  },
  {
    "displayName": "Request Body (JSON)",
    "name": "searchAlongRoute_body",
    "type": "json",
    "default": "{}",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "searchAlongRoute"
        ]
      }
    },
    "description": "JSON request body. See the OSRMRoute API reference for required fields and plan limits"
  },
  {
    "displayName": "Request Body (JSON)",
    "name": "structuredGeocode_body",
    "type": "json",
    "default": "{}",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "structuredGeocode"
        ]
      }
    },
    "description": "JSON request body. See the OSRMRoute API reference for required fields and plan limits"
  },
  {
    "displayName": "Request Body (JSON)",
    "name": "suggestPlaces_body",
    "type": "json",
    "default": "{}",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "suggestPlaces"
        ]
      }
    },
    "description": "JSON request body. See the OSRMRoute API reference for required fields and plan limits"
  },
  {
    "displayName": "Request Body (JSON)",
    "name": "retrievePlace_body",
    "type": "json",
    "default": "{}",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "retrievePlace"
        ]
      }
    },
    "description": "JSON request body. See the OSRMRoute API reference for required fields and plan limits"
  },
  {
    "displayName": "Resource",
    "name": "listStudioResources_resource",
    "type": "options",
    "default": "styles",
    "description": "resource",
    "options": [
      {
        "name": "styles",
        "value": "styles"
      },
      {
        "name": "datasets",
        "value": "datasets"
      }
    ],
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "listStudioResources"
        ]
      }
    }
  },
  {
    "displayName": "Resource",
    "name": "manageStudioResource_resource",
    "type": "options",
    "default": "styles",
    "description": "resource",
    "options": [
      {
        "name": "styles",
        "value": "styles"
      },
      {
        "name": "datasets",
        "value": "datasets"
      }
    ],
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "manageStudioResource"
        ]
      }
    }
  },
  {
    "displayName": "Request Body (JSON)",
    "name": "manageStudioResource_body",
    "type": "json",
    "default": "{}",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "manageStudioResource"
        ]
      }
    },
    "description": "JSON request body. See the OSRMRoute API reference for required fields and plan limits"
  },
  {
    "displayName": "Request Body (JSON)",
    "name": "road_data_lookup_body",
    "type": "json",
    "default": "{}",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "road_data_lookup"
        ]
      }
    },
    "description": "JSON request body. See the OSRMRoute API reference for required fields and plan limits"
  },
  {
    "displayName": "Request Body (JSON)",
    "name": "road_data_batch_body",
    "type": "json",
    "default": "{}",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "road_data_batch"
        ]
      }
    },
    "description": "JSON request body. See the OSRMRoute API reference for required fields and plan limits"
  },
  {
    "displayName": "Request Body (JSON)",
    "name": "road_data_signs_body",
    "type": "json",
    "default": "{}",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "road_data_signs"
        ]
      }
    },
    "description": "JSON request body. See the OSRMRoute API reference for required fields and plan limits"
  },
  {
    "displayName": "Request Body (JSON)",
    "name": "road_data_usage_body",
    "type": "json",
    "default": "{}",
    "required": true,
    "displayOptions": {
      "show": {
        "resource": [
          "api"
        ],
        "operation": [
          "road_data_usage"
        ]
      }
    },
    "description": "JSON request body. See the OSRMRoute API reference for required fields and plan limits"
  }
];
