"""Build a reproducible QGIS plugin ZIP without caches or local credentials."""
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED, ZipInfo
root = Path(__file__).resolve().parents[1]
source = root / 'qgis' / 'osrmroute'
files = ['__init__.py', 'core.py', 'plugin.py', 'metadata.txt', 'LICENSE']
(root / 'dist').mkdir(exist_ok=True)
with ZipFile(root / 'dist' / 'osrmroute-qgis-0.1.0.zip', 'w', ZIP_DEFLATED) as archive:
    for name in files:
        item = ZipInfo('osrmroute/' + name, (2026, 10, 19, 0, 0, 0))
        item.compress_type = ZIP_DEFLATED
        item.external_attr = 0o644 << 16
        archive.writestr(item, (source / name).read_bytes())
print('dist/osrmroute-qgis-0.1.0.zip')
