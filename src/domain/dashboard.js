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
            title: "Planificació",
            content: [
              {
                columns: 1,
                type: "Line",
                title: "Gráfica 1",
                data: {
                  labels: ["1", "2", "3", "4"],
                  datasets: [{ data: [10, 20, 30, 40] }]
                }
              },
              {
                columns: 1,
                type: "Perc",
                title: "KPI 1",
                data: 100
              },
              {
                columns: 1,
                type: "Bar",
                title: "Gráfica 2",
                data: {
                  labels: ["1", "2", "3", "4"],
                  datasets: [{ data: [10, 20, 30, 40] }]
                }
              },
              {
                columns: 2,
                type: "Line",
                title: "Gráfica 3",
                data: {
                  labels: ["1", "2", "3", "4"],
                  datasets: [{ data: [10, 20, 30, 40] }]
                }
              },
              {
                columns: 1,
                type: "Number",
                title: "KPI 2",
                data: 77.334
              },
              {
                columns: 1,
                type: "Bar",
                title: "Gráfica 4",
                data: {
                  labels: ["1", "2", "3", "4"],
                  datasets: [{ data: [10, 20, 30, 40] }]
                }
              }
            ]
          }
        ];
        resolve();
      }, 1000);
    });
  }
}
