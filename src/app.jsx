/* @flow */

import { default as ReactDOM } from "react-dom";
import { default as React } from "react";
import { Router, Route } from "react-router";
import createBrowserHistory from "history/createBrowserHistory";
import Config from "./config";
import State from "./state";
import Root from "./components/root.jsx";

// React && Config && State (Initialization)

window.React = React;
window.config = Config;
window.state = State;

// Render

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <Route path="/" component={Root} />
  </Router>,
  document.getElementById("app")
);
