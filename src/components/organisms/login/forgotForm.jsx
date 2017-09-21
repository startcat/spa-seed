/* @flow */

import { default as React } from "react";
import { Link } from "react-router-dom";
import Input from "components/atoms/form/input";
import Button from "components/atoms/form/button";
import Loader from "components/atoms/loader";
import FormField from "components/molecules/form/formField";
import validate from "utils/validate";
import { t } from "i18n";

// Types

type Props = {};
type State = { isValid: boolean };
type FormFields = { email: ?string };

// Class Component

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
          <div className="o-forgotForm__text">
            {t("login.forgotText")}
          </div>
          <div className="o-forgotForm__input o-forgotForm__input--email">
            <FormField label={t("login.email")}>
              <Input
                type="text"
                autoFocus={true}
                modifiers={[]}
                onChange={this.onChangeHandler}
                ref={input => {
                  this.emailInput = input;
                }}
              />
            </FormField>
          </div>
          <div className="o-forgotForm__link">
            <Link to="/">
              {t("login.justRemember")}
            </Link>
          </div>
          <div className="o-forgotForm__button">
            <Button disabled={!this.state.isValid}>
              {t("login.reset")}
            </Button>
          </div>
        </div>;
  }
}
