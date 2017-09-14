/* @flow */

import { default as React } from "react";
import Input from "components/atoms/form/input";
import Button from "components/atoms/form/button";
import Loader from "components/atoms/loader";
import validate from "utils/validate";

// Types

type Props = { isLoading: boolean };
type State = { isValid: boolean };
type FormFields = { password1: ?string, password2: ?string };

// Class Component

export default class ResetForm extends React.Component<void, Props, State> {
  // Private properties

  props: Props;
  state: State = { isValid: false };
  password1Input: ?Input = null;
  password2Input: ?Input = null;

  // Private Methods

  getJSON = (): FormFields => {
    return {
      password1: this.password1Input && this.password1Input.get(),
      password2: this.password2Input && this.password2Input.get()
    };
  };

  validate = (json: FormFields) => {
    this.setState({
      isValid:
        validate.password(json.password1) &&
        validate.password(json.password2) &&
        json.password1 === json.password2
    });
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
    let className = "o-resetForm";

    return this.props.isLoading
      ? <Loader />
      : <div className={className}>
          <div className="o-resetForm__input o-resetForm__input--password1">
            <Input
              type="password"
              autoFocus={true}
              modifiers={[]}
              onChange={this.onChangeHandler}
              placeholder={t("login.password")}
              ref={input => {
                this.password1Input = input;
              }}
            />
          </div>
          <div className="o-resetForm__input o-resetForm__input--password2">
            <Input
              type="password"
              modifiers={[]}
              onChange={this.onChangeHandler}
              placeholder={t("login.password2")}
              ref={input => {
                this.password2Input = input;
              }}
            />
          </div>
          <div className="o-resetForm__button">
            <Button disabled={!this.state.isValid}>
              {t("login.reset")}
            </Button>
          </div>
        </div>;
  }
}
