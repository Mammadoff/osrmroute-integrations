"""Pure request and GeoJSON transformations, independently testable."""

import math
from urllib.parse import urlencode

ORIGIN = "https://osrmroute.com"


def point(value):
    if not isinstance(value, (list, tuple)) or len(value) != 2:
        raise ValueError("A point must contain longitude and latitude.")
    if any(
        isinstance(x, bool)
        or not isinstance(x, (int, float))
        or not math.isfinite(x)
        for x in value
    ):
        raise ValueError("Coordinates must be finite numbers.")
    lon, lat = value
    if not -180 <= lon <= 180 or not -90 <= lat <= 90:
        raise ValueError("Coordinates are outside WGS84 bounds.")
    return [lon, lat]


def request_url(mode, value):
    if mode == "geocode":
        query = value.strip()
        if not query or len(query) > 500:
            raise ValueError("Enter an address between 1 and 500 characters.")
        return (
            ORIGIN
            + "/api/1/geocode?"
            + urlencode({"q": query, "limit": 10, "lang": "en"})
        )
    if mode != "route":
        raise ValueError("Unknown operation.")
    tokens = value.strip().split(";")
    if not 2 <= len(tokens) <= 10:
        raise ValueError(
            "Enter 2 to 10 longitude,latitude pairs separated by semicolons."
        )
    coords = [point([float(x) for x in token.split(",")]) for token in tokens]
    encoded = ";".join(",".join(str(x) for x in pair) for pair in coords)
    return (
        ORIGIN
        + "/api/v1/osrm/route/v1/driving/"
        + encoded
        + "?overview=full&geometries=geojson"
    )


def feature_collection(mode, payload):
    if not isinstance(payload, dict):
        raise TypeError("Unexpected API response.")
    features = []
    if mode == "geocode":
        hits = payload.get("hits")
        if not isinstance(hits, list):
            raise ValueError("Address response has no results array.")
        for hit in hits:
            if not isinstance(hit, dict) or not isinstance(
                hit.get("point"), dict
            ):
                raise TypeError("Invalid address result.")
            coords = hit.get("point", {})
            geometry = {
                "type": "Point",
                "coordinates": point([coords.get("lng"), coords.get("lat")]),
            }
            properties = {
                k: str(hit.get(k, ""))
                for k in ("name", "city", "country", "countrycode")
            }
            features.append(
                {
                    "type": "Feature",
                    "geometry": geometry,
                    "properties": properties,
                }
            )
    elif mode == "route":
        if payload.get("code") != "Ok":
            raise ValueError("No route was returned for these coordinates.")
        routes = payload.get("routes")
        if not isinstance(routes, list):
            raise ValueError("Route response has no routes array.")
        for route in routes:
            if not isinstance(route, dict) or not isinstance(
                route.get("geometry"), dict
            ):
                raise TypeError("Invalid route geometry.")
            geometry = route.get("geometry", {})
            coords = geometry.get("coordinates", [])
            if (
                geometry.get("type") != "LineString"
                or not isinstance(coords, list)
                or len(coords) < 2
            ):
                raise ValueError("The API did not return a GeoJSON route.")
            geometry = {
                "type": "LineString",
                "coordinates": [point(p) for p in coords],
            }
            features.append(
                {
                    "type": "Feature",
                    "geometry": geometry,
                    "properties": {
                        "distance_m": route.get("distance"),
                        "duration_s": route.get("duration"),
                    },
                }
            )
    else:
        raise ValueError("Unknown operation.")
    return {"type": "FeatureCollection", "features": features}
