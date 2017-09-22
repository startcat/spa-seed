/* @flow */

import { default as React } from "react";

type Props = {
  type?: string,
  onChange?: Function,
  autoFocus?: boolean,
  modifiers?: Array<string>
};

type State = { hasFocus: boolean, isEmpty: boolean };

export default class Input extends React.Component<void, Props, State> {
  props: Props;
  state: State = { hasFocus: !!this.props.autoFocus, isEmpty: true };
  input: { value: string };

  // Render

  render() {
    let className = "a-input";
    let classNameControl = "a-input__control";

    if (this.state.hasFocus) {
      className += " a-input--hasFocus";
    }

    if (this.state.isEmpty) {
      className += " a-input--isEmpty";
    }

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
          onFocus={this.onFocus.bind(this)}
          onBlur={this.onBlur.bind(this)}
          className={classNameControl}
          autoFocus={!!this.props.autoFocus}
          type={this.props.type || "text"}
          placeholder={this.props.placeholder || null}
          onChange={this.onChangeHandler.bind(this)}
        />
      </div>
    );
  }

  // Handlers

  onChangeHandler() {
    this.setState({ isEmpty: this.input.value.length === 0 }, () => {
      if (this.props.onChange) {
        this.props.onChange();
      }
    });
  }

  onFocus() {
    this.setState({ hasFocus: true });
  }

  onBlur() {
    this.setState({ hasFocus: false });
  }

  // Public Methods

  get() {
    return this.input.value;
  }
  set(value: string) {
    this.input.value = value;
  }
}
