/* @flow */

import { default as React } from "react";
import { Link } from "react-router-dom";
import FormField from "components/molecules/form/formField";
import Input from "components/atoms/form/input";
import Button from "components/atoms/form/button";
import Loader from "components/atoms/loader";
import { t } from "i18n";

// Types

type Props = { isLoading: boolean };
type State = { isValid: boolean };
type FormFields = { user: ?string, password: ?string };

// Class Component

export default class extends React.Component<void, Props, State> {
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

    return this.props.isLoading
      ? <Loader />
      : <div className={className}>
          <div className="o-signInForm__input o-signInForm__input--user">
            <FormField label={t("login.email")}>
              <Input
                type="text"
                autoFocus={true}
                modifiers={[]}
                onChange={this.onChangeHandler}
                ref={input => {
                  this.userInput = input;
                }}
              />
            </FormField>
          </div>
          <div className="o-signInForm__input o-signInForm__input--password">
            <FormField label={t("login.password")}>
              <Input
                type="password"
                modifiers={[]}
                onChange={this.onChangeHandler}
                ref={input => {
                  this.passwordInput = input;
                }}
              />
            </FormField>
          </div>
          <div className="o-signInForm__linksAndButtons">
            <div className="o-signInForm__link">
              <Link to={"/login/forgot"}>
                {t("login.forgot")}
              </Link>
            </div>
            <div className="o-signInForm__button">
              <Button disabled={!this.state.isValid}>
                {t("login.enter")}
              </Button>
            </div>
          </div>
        </div>;
  }
}
