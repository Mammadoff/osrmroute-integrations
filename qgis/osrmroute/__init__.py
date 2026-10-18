"""OSRMRoute QGIS integration."""
def classFactory(iface):
    from .plugin import OSRMRoutePlugin
    return OSRMRoutePlugin(iface)
