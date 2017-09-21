/* @flow */

import { observable } from "mobx";
import type { Session, Notification, Profile } from "domain/types/session";
import store from "store";
import progress from "utils/progress";

// Singleton

export default class {
  // Properties

  @observable session: ?Session = null;

  @observable notifications: Array<Notification> = [];

  @observable profile: Profile = null;

  // Initialization

  constructor() {
    this.check();
  }

  // Actions

  check() {
    // Función que verifica si estamos o no logados. En caso de que no lo estemos,
    // nos lleva a la pantalla de login.
    progress.start();
    store.ui.setLoading(true);
    setTimeout(() => {
      progress.stop();
      store.ui.setLoading(false);
    }, 1000);
  }

  async getNotifications() {
    return new Promise(resolve => {
      progress.start();
      setTimeout(() => {
        progress.stop();
        this.notifications = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(number => {
          return {
            id: number.toString(),
            createdOn: new Date(),
            text: "Notification " + number,
            isRead: number > 2
          };
        });
        resolve();
      }, 1000);
    });
  }

  async getProfile() {
    return new Promise(resolve => {
      progress.start();
      setTimeout(() => {
        progress.stop();
        this.profile = {
          username: "46405604E",
          email: "juancarlos.vinas@start.cat",
          name: "Juan Carlos Viñas"
        };
        resolve();
      }, 1000);
    });
  }
}
