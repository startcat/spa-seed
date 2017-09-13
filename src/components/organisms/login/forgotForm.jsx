/* @flow */

import { default as React } from "react";
import { Link } from "react-router-dom";
import Input from "components/atoms/form/input";
import Button from "components/atoms/form/button";
import Loader from "components/atoms/loader";
import validate from "utils/validate";

// Types

type Props = {};
type State = { isValid: boolean };
type FormFields = { email: ?string };

// Class

export default class ForgotForm extends React.Component<void, Props, State> {
  // Private properties

  props: Props;
  state: State = { isValid: false };
  emailInput: ?Input = null;

  // Private Methods

  getJSON = (): FormFields => {
    return {
      email: this.emailInput && this.emailInput.get()
    };
  };

  validate = (json: FormFields) => {
    this.setState({ isValid: validate.email(json.email) });
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
    let className = "o-forgotForm";

    return this.props.isLoading
      ? <Loader />
      : <div className={className}>
          <div className="o-signInForm__input o-signInForm__input--user">
            <Input
              type="text"
              autoFocus={true}
              modifiers={["center"]}
              onChange={this.onChangeHandler}
              ref={input => {
                this.emailInput = input;
              }}
            />
          </div>
          <div className="o-signInForm__forgotMessage">
            <Link to="/">
              {t("login.justRemember")}
            </Link>
          </div>
          <div className="o-signInForm__button">
            <Button disabled={!this.state.isValid}>
              {t("login.resetPassword")}
            </Button>
          </div>
        </div>;
  }
}
