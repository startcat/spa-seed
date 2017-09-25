/* @flow */

import { observable } from "mobx";
import progress from "utils/progress";
import type { DashboardSection } from "domain/types/dashboard";

// Singleton

export default class {
  // Properties

  @observable sections: ?Array<DashboardSection> = null;

  // Initialization

  // constructor() {}

  // Actions

  async getDashboard() {
    return new Promise(resolve => {
      progress.start();
      setTimeout(() => {
        progress.stop();
        this.sections = [
          {
            id: "planificacion",
            title: "Planificació",
            content: [
              {
                columns: 3,
                id: "1",
                type: "hola",
                title: "Gráfica 1",
                options: {},
                data: {}
              }
            ]
          }
        ];
        resolve();
      }, 1000);
    });
  }
}
