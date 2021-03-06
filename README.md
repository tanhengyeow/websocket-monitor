WebSocket Monitor
=================

**This extension is not supported in Firefox 57+ and we are planning to rewrite
it on top of new WebExtension API. There is already an experimental
[prototype](https://github.com/janodvarko/webext-websocket-monitor), but more
work needed to make it useful.
See [issue 75](https://github.com/firebug/websocket-monitor/issues/75) for more details**

WebSocket monitor is an extension to Firefox developer tools that can be
used to monitor WebSocket connections in Firefox. It allows inspecting all
data sent and received.

See [Home Page](https://github.com/firebug/websocket-monitor/wiki)
for more details

**This is the source code, the extension can be downloaded [here](https://addons.mozilla.org/en-US/firefox/addon/websocket-monitor).**

Instructions
------------
1. Install the extension
3. Open a browser tab and developer tools toolbox on it (F12)
4. Select the `Web Sockets` toolbox panel
5. Initiate WebSocket connection on the page and exchanges some messages.
6. Check out content of the `Web Sockets` panel.

You might want to check out online [demo page](http://janodvarko.cz/test/websockets/)

Hacking on WebSocket Monitor
----------------------------
1. Get [npm](https://www.npmjs.com/)

2. Get [JPM](https://developer.mozilla.org/en-US/Add-ons/SDK/Tools/jpm): `sudo npm install -g jpm`

3. Get the WebSocketMonitor repo: `git clone https://github.com/firebug/websocket-monitor.git` and install its dependencies via `npm install`

4. Run `jpm run -b <file path to your Firefox binary> --binary-args 'http://janodvarko.cz/test/websockets/'` in the source directory to launch Firefox, which automatically creates a clean profile and launches the [demo page](http://janodvarko.cz/test/websockets/).

If you wish to run it with an existing profile, first create a new profile via the [Profile Manager](https://support.mozilla.org/en-US/kb/profile-manager-create-and-remove-firefox-profiles), and then run `jpm run -b <file path to your Firefox binary> -p <path to your Firefox profile (needs to start with /)>`.

Further Resources
-----------------
* Add-on SDK: https://developer.mozilla.org/en-US/Add-ons/SDK
* DevTools API: https://developer.mozilla.org/en-US/docs/Tools/DevToolsAPI
* DevTools/Hacking: https://wiki.mozilla.org/DevTools/Hacking
