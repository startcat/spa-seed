/* @flow */

import { default as ReactDOM } from "react-dom";
import { default as React } from "react"; // eslint-disable-line no-unused-vars
import { Router, Route } from "react-router";
import i18next from "i18next";
import createBrowserHistory from "history/createBrowserHistory";
import Config from "config.js";
import Store from "store.js";
import SignIn from "components/pages/login/signIn.jsx";
import es from "i18n/es.js";

// Config && Store && Intl (Initialization)

window.config = Config;
window.state = Store;

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
      // i18n Initialization
      window.t = t;
      // Initial Render
      ReactDOM.render(
        <Router history={createBrowserHistory()}>
          <Route path="/" component={SignIn} />
        </Router>,
        document.getElementById("app")
      );
    }
  }
);
