/* @flow */

import { default as React } from "react";

// Types

type Props = {};
type State = {};

// Class Component

export default class extends React.Component<void, Props, State> {
  // Private properties

  props: Props;
  state: State = {};

  // Event Handlers

  // Render

  render() {
    let className = "class";
    return <div className={className}>Table</div>;
  }
}
