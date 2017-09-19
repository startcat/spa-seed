/* @flow */

import i18next from "i18next";
import es from "i18n/es.js";

// Singleton

export function init(callback: Function) {
  i18next.init(
    {
      lng: "es",
      resources: {
        es: { translation: es }
      }
    },
    err => {
      if (err) {
        window.alert(err.message || err.toString());
      } else {
        callback();
      }
    }
  );
}

export function t(key: string, options?: Object) {
  return i18next.t(key, options);
}
