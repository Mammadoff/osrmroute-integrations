"""Run with the system Python of a QGIS installation."""
import json
import unittest
from qgis.core import QgsApplication, QgsVectorLayer, QgsProject
from osrmroute.plugin import QueryDialog, OSRMRoutePlugin
from osrmroute.core import feature_collection
app = QgsApplication([], False)
app.initQgis()

class NativeTests(unittest.TestCase):
    def test_dialog_and_secret_lifecycle(self):
        dialog = QueryDialog()
        dialog.key.setText('test-not-a-real-key')
        dialog.mode.setCurrentIndex(1)
        self.assertIn(';', dialog.value.placeholderText())
        dialog.reject()
        self.assertEqual(dialog.key.text(), '')
        dialog.deleteLater()

    def test_real_ogr_geojson_layer(self):
        data = feature_collection('geocode', {'hits':[{'name':'Berlin','point':{'lat':52.5,'lng':13.4}}]})
        layer = QgsVectorLayer(json.dumps(data), 'test', 'ogr')
        self.assertTrue(layer.isValid())
        self.assertEqual(layer.featureCount(),1)
        self.assertEqual(layer.crs().authid(),'EPSG:4326')

    def test_plugin_lifecycle(self):
        class Interface:
            def mainWindow(self): return None
            def addPluginToWebMenu(self, name, action): self.action = action
            def removePluginWebMenu(self, name, action): self.action = None
        iface = Interface()
        plugin = OSRMRoutePlugin(iface)
        plugin.initGui()
        self.assertIsNotNone(iface.action)
        plugin.unload()
        self.assertIsNone(iface.action)

if __name__ == '__main__': unittest.main()
