/* @flow */

import i18n from "i18next";
import es from "i18n/es.js";

// Singleton

export default new class {
  init(callback: Function) {
    i18n.init(
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
          callback(t);
        }
      }
    );
  }
}();
