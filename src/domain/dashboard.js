/* @flow */

import { observable } from "mobx";
import progress from "utils/progress";
import type { DashboardSection } from "domain/types/dashboard";

// Constants

const dataSetProperties = {
  borderColor: window.settings["color--main"],
  backgroundColor: window.settings["color--particles2"]
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  tooltips: {},
  legend: {
    display: false
  },
  scales: {
    yAxes: [
      {
        beginAtZero: true
      }
    ]
  }
};

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
                columns: 1,
                id: "1",
                type: "Line",
                title: "Gráfica 1",
                options: Object.assign({}, options),
                data: {
                  labels: ["1", "2", "3", "4"],
                  datasets: [
                    Object.assign({}, dataSetProperties, {
                      data: [10, 20, 30, 40]
                    })
                  ]
                }
              },
              {
                columns: 1,
                id: "kpi-1",
                type: "Perc",
                title: "Gráfica 1",
                options: {},
                data: 100
              },
              {
                columns: 1,
                id: "2",
                type: "Bar",
                title: "Gráfica 1",
                options: Object.assign({}, options),
                data: {
                  labels: ["1", "2", "3", "4"],
                  datasets: [
                    Object.assign({}, dataSetProperties, {
                      data: [50, 20, 30, 40]
                    })
                  ]
                }
              },
              {
                columns: 1,
                id: "3",
                type: "Line",
                title: "Gráfica 1",
                options: Object.assign({}, options),
                data: {
                  labels: ["1", "2", "3", "4"],
                  datasets: [
                    Object.assign({}, dataSetProperties, {
                      data: [50, 20, 30, 40]
                    })
                  ]
                }
              },
              {
                columns: 1,
                id: "4",
                type: "Bar",
                title: "Gráfica 1",
                options: Object.assign({}, options),
                data: {
                  labels: ["1", "2", "3", "4"],
                  datasets: [
                    Object.assign({}, dataSetProperties, {
                      data: [50, 20, 30, 40]
                    })
                  ]
                }
              },
              {
                columns: 1,
                id: "5",
                type: "Bar",
                title: "Gráfica 1",
                options: Object.assign({}, options),
                data: {
                  labels: ["1", "2", "3", "4"],
                  datasets: [
                    Object.assign({}, dataSetProperties, {
                      data: [50, 20, 30, 40]
                    })
                  ]
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
