/* @flow */

import { default as React } from "react";
// import gradient from "utils/gradient";
// import Particles from "utils/particles";

// Types

type Props = { hexColor: string };
type State = {};

// Class Component

export default class extends React.Component<void, Props, State> {
  // Private properties
  props: Props;
  state: State = {};

  // Life Cycle

  componentDidMount() {
    window.vendor.particles.init({
      selector: ".a-particles__canvas",
      maxParticles: 150,
      sizeVariations: 3,
      speed: 1,
      color: this.props.hexColor,
      minDistance: 120,
      connectParticles: true,
      responsive: null
    });
  }

  // Event Handlers

  // Render

  render() {
    let className = "a-particles";
    return (
      <div className={className}>
        <canvas className="a-particles__canvas" />
      </div>
    );
  }
}
