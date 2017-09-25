/* @flow */

import { default as React } from "react";

// Chart.js Settings

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

// Types

type Props = { type: string, data: Object, options: Object };
type State = {};

// Class Component

export default class extends React.Component<void, Props, State> {
  // Private properties

  chart: Chart;
  props: Props;
  state: State = {};

  // Life Cycle

  componentDidMount() {
    if (this.props.data) {
      this.chart = new window.vendor.Chart(this.refs.canvas, {
        type: this.props.type.toLowerCase(),
        data: Object.assign({}, this.props.data, {
          datasets: this.props.data.datasets.map(item => {
            return Object.assign({}, dataSetProperties, item);
          })
        }),
        options: options
      });
    }
  }

  // Render

  render() {
    let className = "m-chart m-chart--" + this.props.type;

    return (
      <div className={className}>
        <div className="m-chart__canvasContainer">
          <canvas ref="canvas" className="m-chart__canvas" />
        </div>
      </div>
    );
  }
}
