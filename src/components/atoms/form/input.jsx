/* @flow */

import { default as React } from "react";

type Props = {
  type?: string,
  onChange?: Function,
  autoFocus?: boolean,
  modifiers: Array<string>
};

type State = {};

export default class Input extends React.Component<void, Props, State> {
  props: Props;
  state: State;
  input: { value: string };

  render() {
    let className = "a-input";
    let classNameControl = "a-input__control";

    if (this.props.modifiers && this.props.modifiers.length > 0) {
      this.props.modifiers.forEach(modifier => {
        className += " a-input--" + modifier;
        classNameControl += " a-input__control--" + modifier;
      });
    }

    return (
      <div className={className}>
        <input
          ref={input => {
            this.input = input;
          }}
          className={classNameControl}
          autoFocus={!!this.props.autoFocus}
          type={this.props.type || "text"}
          placeholder={this.props.placeholder || null}
          onChange={this.onChangeHandler.bind(this)}
        />
      </div>
    );
  }

  onChangeHandler() {
    if (this.props.onChange) {
      this.props.onChange();
    }
  }

  get() {
    return this.input.value;
  }
  set(value: string) {
    this.input.value = value;
  }
}
