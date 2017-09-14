/* @flow */

import { default as ReactDOM } from "react-dom";
import { default as React } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import i18next from "i18next";
import session from "domain/session";
import SignIn from "components/pages/login/signIn";
import Forgot from "components/pages/login/forgot";
import Reset from "components/pages/login/reset";
import es from "i18n/es.js";

i18next.init(
  {
    lng: "es",
    resources: {
      es: { translation: es }
    }
  },
  (err, t) => {
    if (err) {
      window.alert(err.message || err.toString());
    } else {
      // React (window)

      window.React = React;

      // i18n Initialization

      window.t = t;

      // Initializations

      session.check();

      // Initial Render

      ReactDOM.render(
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/login/forgot" component={Forgot} />
            <Route exact path="/login/reset" component={Reset} />
          </Switch>
        </BrowserRouter>,
        document.getElementById("app")
      );
    }
  }
);
