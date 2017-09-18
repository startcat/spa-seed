/* @flow */

import { observable } from "mobx";
import type { Session, Notification } from "domain/types/session";
import ui from "domain/ui";

// Singleton

export default new class {
  // Properties

  @observable session: ?Session = null;

  @observable notifications: ?Array<Notification> = null;

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

  async getNotifications() {
    this.notifications = null;
    return new Promise(resolve => {
      setTimeout(() => {
        this.notifications = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(number => {
          return {
            id: number.toString(),
            createdOn: new Date(),
            text: "Notification " + number
          };
        });
        resolve();
      }, 2000);
    });
  }
}();
