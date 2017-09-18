/* @flow */

import { default as React } from "react";
import gradient from "utils/gradient";

// Types

type Props = { id: string };
type State = {};

// Class Component

export default class extends React.Component<void, Props, State> {
  // Private properties

  props: Props;
  state: State = {};

  // Life Cycle

  componentDidMount() {
    gradient(this.props.id, [
      { start: [128, 179, 171], stop: [30, 41, 58] },
      { start: [255, 207, 160], stop: [234, 92, 68] },
      { start: [212, 121, 121], stop: [130, 105, 151] }
    ]);
  }

  // Event Handlers

  // Render

  render() {
    let className = "a-gradient";
    return <div id={this.props.id} className={className} />;
  }
}
