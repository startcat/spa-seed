/* @flow */

import { default as React } from "react";
import Input from "components/atoms/form/input";
import Button from "components/atoms/form/button";

type Props = {};
type State = { isValid: boolean };
type FormFields = { user: ?string, password: ?string };

export default class SignInForm extends React.Component<void, Props, State> {
  // Private properties
  props: Props;
  state: State = { isValid: false };
  userInput: ?Input = null;
  passwordInput: ?Input = null;

  // Private Methods

  getJSON = (): FormFields => {
    return {
      user: this.userInput && this.userInput.get(),
      password: this.passwordInput && this.passwordInput.get()
    };
  };

  validate = (json: FormFields) => {
    this.setState({ isValid: !!(json.user && json.password) });
  };

  // Event Handlers

  onChangeHandler = () => {
    this.validate(this.getJSON());
  };

  onKeyDownHandler = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      if (this.state.isValid) {
        this.onEnterButtonClick();
      }
    }
  };

  onEnterButtonClick = () => {
    window.alert("click");
  };

  // React LifeCycle

  componentDidMount() {
    window.addEventListener("keydown", this.onKeyDownHandler, true);
  }

  // Render

  render() {
    let className = "o-signInForm";

    return (
      <div className={className}>
        <div className="o-signInForm__input o-signInForm__input--user">
          <Input
            type="text"
            autoFocus={true}
            modifiers={["center"]}
            onChange={this.onChangeHandler}
            ref={input => {
              this.userInput = input;
            }}
          />
        </div>
        <div className="o-signInForm__input o-signInForm__input--password">
          <Input
            type="password"
            modifiers={["center"]}
            onChange={this.onChangeHandler}
            ref={input => {
              this.passwordInput = input;
            }}
          />
        </div>
        <div className="o-signInForm__button">
          <Button disabled={!this.state.isValid}>
            {t("login.enter")}
          </Button>
        </div>
      </div>
    );
  }
}
