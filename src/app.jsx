/* @flow */

import { default as ReactDOM } from "react-dom";
import { default as React } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { init } from "i18n";
import store from "store";
import SignIn from "components/pages/login/signIn";
import Forgot from "components/pages/login/forgot";
import Reset from "components/pages/login/reset";
import Dashboard from "components/pages/dashboard";

// Translations Initialization

init(() => {
  store.ui.setLangLoading(false);
});

// Globals

window.React = React;

// Initial Render

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/login/forgot" component={Forgot} />
      <Route exact path="/login/reset" component={Reset} />
      <Route exact path="/dashboard" component={Dashboard} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("app")
);
