/* @flow */

import { default as React } from "react";
import Chart from "chart.js";

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
      var canvas = this.refs.canvas;
      this.chart = new Chart(canvas, {
        type: this.props.type,
        data: this.props.data,
        options: this.props.options
      });
    }
  }

  // Render

  render() {
    let className =
      "m-chart " + (this.props.type ? "m-chart--" + this.props.type : "");

    return (
      <div className={className}>
        <div className="m-chart__canvasContainer">
          <canvas ref="canvas" className="m-chart__canvas" />
        </div>
      </div>
    );
  }
}
