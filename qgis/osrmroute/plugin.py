"""QGIS dialog with asynchronous, bounded HTTPS requests."""

import json

from qgis.core import QgsNetworkAccessManager, QgsProject, QgsVectorLayer
from qgis.PyQt.QtCore import QTimer, QUrl
from qgis.PyQt.QtNetwork import QNetworkReply, QNetworkRequest
from qgis.PyQt.QtWidgets import (
    QAction,
    QComboBox,
    QDialog,
    QFormLayout,
    QLabel,
    QLineEdit,
    QPushButton,
)

from .core import feature_collection, request_url

MAX_BYTES = 5 * 1024 * 1024


class QueryDialog(QDialog):
    def __init__(self, parent=None):
        super().__init__(parent)
        self.setWindowTitle("OSRMRoute")
        self.resize(580, 260)
        self.reply = None
        form = QFormLayout(self)
        self.key = QLineEdit()
        self.key.setEchoMode(QLineEdit.Password)
        self.mode = QComboBox()
        self.mode.addItem("Find an address", "geocode")
        self.mode.addItem("Driving route", "route")
        self.value = QLineEdit()
        self.value.setPlaceholderText("Brandenburg Gate, Berlin")
        self.mode.currentIndexChanged.connect(self.update_hint)
        self.notice = QLabel(
            "Queries are sent to OSRMRoute. Your API plan and credits apply.\nAPI key stays in memory only; it is cleared when this window closes."
        )
        self.notice.setWordWrap(True)
        self.status = QLabel("")
        self.status.setWordWrap(True)
        self.run_button = QPushButton("Run and add layer")
        self.run_button.clicked.connect(self.run_query)
        form.addRow("API key", self.key)
        form.addRow("Operation", self.mode)
        form.addRow("Query", self.value)
        form.addRow(self.notice)
        form.addRow(self.run_button)
        form.addRow(self.status)
        self.timer = QTimer(self)
        self.timer.setSingleShot(True)
        self.timer.timeout.connect(self.cancel_request)

    def update_hint(self):
        self.value.setPlaceholderText(
            "13.3777,52.5163;13.4286,52.5232"
            if self.mode.currentData() == "route"
            else "Brandenburg Gate, Berlin"
        )

    def run_query(self):
        key = self.key.text().strip()
        if not key or any(c in key for c in "\r\n"):
            self.status.setText("Enter a valid API key.")
            return
        mode = self.mode.currentData()
        try:
            url = request_url(mode, self.value.text())
        except ValueError as error:
            self.status.setText(str(error))
            return
        request = QNetworkRequest(QUrl(url))
        request.setRawHeader(
            b"Authorization", ("Bearer " + key).encode("utf-8")
        )
        request.setRawHeader(b"Accept", b"application/json")
        request.setAttribute(
            QNetworkRequest.RedirectPolicyAttribute,
            QNetworkRequest.ManualRedirectPolicy,
        )
        self.run_button.setEnabled(False)
        self.status.setText("Requesting…")
        self.reply = QgsNetworkAccessManager.instance().get(request)
        self.reply.downloadProgress.connect(self.check_size)
        self.reply.finished.connect(lambda: self.finish_request(mode))
        self.timer.start(30000)

    def check_size(self, received, total):
        if max(received, total) > MAX_BYTES:
            self.cancel_request()

    def cancel_request(self):
        if self.reply:
            self.reply.abort()

    def finish_request(self, mode):
        self.timer.stop()
        reply, self.reply = self.reply, None
        if not reply:
            return
        self.run_button.setEnabled(True)
        try:
            status = reply.attribute(QNetworkRequest.HttpStatusCodeAttribute)
            if reply.error() != QNetworkReply.NoError or status != 200:
                self.status.setText(
                    "Request failed (HTTP {}). Check your key, scopes, credits and connection. No automatic retry was made.".format(
                        status or "unavailable"
                    )
                )
                return
            data = bytes(reply.readAll())
            if len(data) > MAX_BYTES:
                raise ValueError("Response exceeded the 5 MB limit.")
            collection = feature_collection(mode, json.loads(data))
            if not collection["features"]:
                self.status.setText(
                    "No matching results. Try a more specific address."
                )
                return
            layer = QgsVectorLayer(
                json.dumps(collection), "OSRMRoute " + mode, "ogr"
            )
            if not layer.isValid():
                raise ValueError(
                    "QGIS could not load the response as a vector layer."
                )
            QgsProject.instance().addMapLayer(layer)
            self.status.setText(
                "Added {} feature(s).".format(len(collection["features"]))
            )
        except (ValueError, TypeError, KeyError):
            self.status.setText(
                "The response could not be loaded. Check the request and try again."
            )
        finally:
            reply.deleteLater()

    def done(self, result):
        self.cancel_request()
        self.key.clear()
        super().done(result)


class OSRMRoutePlugin:
    def __init__(self, iface):
        self.iface = iface
        self.action = None
        self.dialog = None

    def initGui(self):
        self.action = QAction(
            "OSRMRoute: addresses and routes", self.iface.mainWindow()
        )
        self.action.triggered.connect(self.open_dialog)
        self.iface.addPluginToWebMenu("OSRMRoute", self.action)

    def open_dialog(self):
        if self.dialog is None:
            self.dialog = QueryDialog(self.iface.mainWindow())
        self.dialog.show()
        self.dialog.raise_()

    def unload(self):
        if self.dialog:
            self.dialog.reject()
            self.dialog.deleteLater()
            self.dialog = None
        if self.action:
            self.iface.removePluginWebMenu("OSRMRoute", self.action)
            self.action.deleteLater()
            self.action = None
