/* See license.txt for terms of usage */

"use strict";

define(function (require, exports) {
  // Dependencies
  const React = require("react");

  // Firebug.SDK
  const { createFactories } = require("reps/rep-utils");
  const { Toolbar, ToolbarButton } = createFactories(require("reps/toolbar"));

  // WebSockets Monitor
  const { clear } = require("../actions/frames");
  const { SearchBox } = createFactories(require("./search-box"));
  const { ConnectionFilter } = createFactories(require("./connection-filter"));

  /**
   * @template This object is responsible for rendering the toolbar
   * in Actors tab
   */
  let MainToolbar = React.createClass({
  /** @lends MainToolbar */

    displayName: "MainToolbar",

    getInitialState: function () {
      return {
        paused: false
      };
    },

    // Commands

    onTogglePause: function () {
      let paused = !this.state.paused;

      // xxxHonza: the 'toggle-pause' actions is asynchronous since
      // it needs to be sent to the backend actor. The UI should
      // reflect that by e.g. disabling the button till a confirmation
      // is received from the backend.
      // See also:
      // http://rackt.org/redux/docs/advanced/AsyncActions.html
      // http://danmaz74.me/2015/08/19/from-flux-to-redux-async-actions-the-easy-way/
      // http://www.code-experience.com/async-requests-with-react-js-and-flux/
      this.props.togglePause(paused);

      this.setState({ paused });
    },

    onClear: function () {
      this.props.dispatch(clear());
    },

    onSwitchPerspective: function () {
      let newValue = (this.props.perspective != "table");
      Options.set("tabularView", newValue);
    },

    // Render

    render: function () {
      let perspectiveLabel = (this.props.perspective == "table") ?
        Locale.$STR("websocketmonitor.perspective.listView") :
        Locale.$STR("websocketmonitor.perspective.tableView");

      let pauseLabel = this.state.paused ?
        Locale.$STR("websocketmonitor.Unpause") :
        Locale.$STR("websocketmonitor.Pause");

      return (
        Toolbar({className: "toolbar", ref: "toolbar"},
          ToolbarButton({bsSize: "xsmall", onClick: this.onTogglePause},
            pauseLabel
          ),
          ToolbarButton({bsSize: "xsmall", onClick: this.onClear},
            Locale.$STR("websocketmonitor.Clear")
          ),
          ToolbarButton({bsSize: "xsmall", onClick: this.onSwitchPerspective},
            perspectiveLabel
          ),
          SearchBox(this.props),
          ConnectionFilter(this.props)
        )
      );
    },
  });

  // Exports from this module
  exports.MainToolbar = MainToolbar;
});
