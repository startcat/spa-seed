/* @flow */

import { observable } from "mobx";
import store from "store";
import progress from "utils/progress";
import type { DashboardSection } from "domain/types/dashboard";

// Singleton

export default class {
  // Properties

  @observable dashboard: ?Array<DashboardSection> = null;

  // Initialization

  // constructor() {}

  // Actions

  async getDashboard() {
    return new Promise(resolve => {
      progress.start();
      setTimeout(() => {
        progress.stop();
        this.dashboard = [
          { id: "test1", title: "test1", content: [{ type: "hola", data: {} }] }
        ];
        resolve();
      }, 1000);
    });
  }
}
