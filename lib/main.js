/* See license.txt for terms of usage */

"use strict";

// Firebug SDK
const { ToolboxChrome } = require("firebug.sdk/lib/toolbox-chrome.js");
const { Locale } = require("firebug.sdk/lib/core/locale.js");

// Localization files. All strings in the UI should be loaded from these
// files, so the entire extension can be localized into other languages.
// Register bundles before loading the panel module.
Locale.registerStringBundle("chrome://websocketmonitor/locale/websocket-monitor.properties");
Locale.registerStringBundle("chrome://websocketmonitor-firebug.sdk/locale/reps.properties");

// WebSocket Monitor
const { WsmPanel } = require("./wsm-panel.js");
const { WsmToolboxOverlay } = require("./wsm-toolbox-overlay.js");
const { WsmNetMonitorOverlay } = require("./wsm-netmonitor-overlay.js");

/**
 * Application entry point. The Toolbox overlay logic is based on objects
 * coming from Firebug SDK
 */
function main(options, callbacks) {
  ToolboxChrome.initialize(options);
  ToolboxChrome.registerToolboxOverlay(WsmToolboxOverlay);
  ToolboxChrome.registerPanelOverlay(WsmNetMonitorOverlay);
}

/**
 * Called at shutdown (uninstall, disable, Firefox shutdown)
 */
function onUnload(reason) {
  ToolboxChrome.registerPanelOverlay(WsmNetMonitorOverlay);
  ToolboxChrome.unregisterToolboxOverlay(WsmToolboxOverlay);
  ToolboxChrome.shutdown(reason);
}

// Exports from this module
exports.main = main;
exports.onUnload = onUnload;
