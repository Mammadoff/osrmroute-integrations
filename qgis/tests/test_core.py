import unittest

from osrmroute.core import feature_collection, point, request_url


class CoreTests(unittest.TestCase):
    def test_query_escaping_and_origin(self):
        url = request_url("geocode", "Berlin & key=other")
        self.assertTrue(url.startswith("https://osrmroute.com/api/1/geocode?"))
        self.assertIn("%26", url)
        self.assertNotIn(" key=", url)

    def test_coordinate_validation(self):
        for value in (
            [181, 0],
            [0, 91],
            [float("nan"), 0],
            [True, 4],
            ["13", 52],
            [1],
        ):
            with self.assertRaises(ValueError):
                point(value)
        self.assertEqual(point([13.4, 52.5]), [13.4, 52.5])

    def test_route_url_and_limits(self):
        self.assertIn(
            "/driving/13.4,52.5;13.5,52.6?",
            request_url("route", "13.4,52.5;13.5,52.6"),
        )
        for value in (
            "1,2",
            "1,2;NaN,4",
            "1,2;3,4/../../../",
            ";".join(["1,2"] * 11),
        ):
            with self.assertRaises(ValueError):
                request_url("route", value)

    def test_geocode_features(self):
        data = feature_collection(
            "geocode",
            {"hits": [{"name": "Berlin", "point": {"lat": 52.5, "lng": 13.4}}]},
        )
        self.assertEqual(data["features"][0]["geometry"]["coordinates"], [13.4, 52.5])
        self.assertEqual(feature_collection("geocode", {"hits": []})["features"], [])

    def test_route_features_and_missing_data(self):
        data = feature_collection(
            "route",
            {
                "code": "Ok",
                "routes": [
                    {
                        "geometry": {
                            "type": "LineString",
                            "coordinates": [[1, 2], [3, 4]],
                        },
                        "distance": 10,
                        "duration": 2,
                    }
                ],
            },
        )
        self.assertEqual(data["features"][0]["properties"]["distance_m"], 10)
        for response in (
            {"code": "NoRoute"},
            {"code": "Ok", "routes": [{"geometry": "encoded"}]},
            {},
        ):
            with self.assertRaises((ValueError, TypeError)):
                feature_collection("route", response)


if __name__ == "__main__":
    unittest.main()
