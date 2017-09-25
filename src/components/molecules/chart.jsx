/* @flow */

import { default as React } from "react";

// Consts

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
        data: this.props.data,
        options: this.props.options
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
