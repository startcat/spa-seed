/* @flow */

import { default as ReactDOM } from "react-dom";
import { default as React } from "react";
import { Router, Route } from "react-router";
import createBrowserHistory from "history/createBrowserHistory";
import Config from "config.js";
import State from "state.js";
import SignIn from "components/pages/login/signIn.jsx";

// React && Config && State (Initialization)

window.React = React;
window.config = Config;
window.state = State;

// Render

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <Route path="/" component={SignIn} />
  </Router>,
  document.getElementById("app")
);
