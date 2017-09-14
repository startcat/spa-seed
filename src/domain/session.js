/* @flow */

import { observable } from "mobx";
import ui from "domain/ui";
import type { Session } from "domain/types/session";

// Singleton

export default new class {
  // Properties

  @observable session: ?Session = null;

  // Initialization

  constructor() {
    this.check();
  }

  // Actions

  check() {
    // Función que verifica si estamos o no logados. En caso de que no lo estemos,
    // nos lleva a la pantalla de login.
    ui.setLoading(true);
    setTimeout(() => {
      ui.setLoading(false);
    }, 1000);
  }
}();
