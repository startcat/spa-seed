/* @flow */

import { observable } from "mobx";
import common from "domain/common";
import type { Session } from "domain/types/session/session";

// Store

class Domain {
  // Properties

  @observable session: ?Session = null;

  // Actions

  check() {
    // Función que verifica si estamos o no logados. En caso de que no lo estemos,
    // nos lleva a la pantalla de login.
    common.setLoading(true);
    setTimeout(() => {
      common.setLoading(false);
    }, 1000);
  }
}

// Export Singleton

const singleton = new Domain();

export default singleton;
