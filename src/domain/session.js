/* @flow */

import { observable } from "mobx";
import type { Session, Notification } from "domain/types/session";
import store from "store";

// Singleton

export default class {
  // Properties

  @observable session: ?Session = null;

  @observable notifications: Array<Notification> = [];

  // Initialization

  constructor() {
    this.check();
  }

  // Actions

  check() {
    // Función que verifica si estamos o no logados. En caso de que no lo estemos,
    // nos lleva a la pantalla de login.
    store.ui.setLoading(true);
    setTimeout(() => {
      store.ui.setLoading(false);
    }, 1000);
  }

  async getNotifications() {
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
      }, 1000);
    });
  }
}
