/* @flow */

import { default as React } from "react";
import { t } from "i18n";
import type { Profile } from "domain/types/session";
import Input from "components/atoms/form/input";
import Form from "components/molecules/form/form";
import FormField from "components/molecules/form/formField";
import FormRow from "components/molecules/form/formRow";
import FormTitle from "components/molecules/form/formTitle";

// Types

type Props = { data: Profile, onDirtyChange?: Function };
type State = { errors: { [string]: string } };
type FormFields = {
  username: ?string,
  name: ?string,
  email: ?string,
  password1: ?string,
  password2: ?string
};

// Class Component

export default class extends React.Component<void, Props, State> {
  // Private properties

  props: Props;
  state: State = { errors: {} };
  usernameInput: Input;
  nameInput: Input;
  emailInput: Input;
  password1Input: Input;
  password2Input: Input;

  // Event Handlers

  onChangeHandler = () => {
    if (this.props.onDirtyChange) {
      this.validate(this.getJSON());
      this.props.onDirtyChange && this.props.onDirtyChange();
    }
  };

  // Render

  render() {
    let className = "o-profile";
    return (
      <div className={className}>
        <Form>
          <FormTitle title={t("profile.userData")} />
          <FormRow id="2">
            <FormField
              label={t("profile.username")}
              isRequired={true}
              error={this.state.errors["username"]}
            >
              <Input
                type="text"
                autoFocus={true}
                onChange={this.onChangeHandler}
                value={this.props.data.username}
                ref={input => {
                  this.usernameInput = input;
                }}
              />
            </FormField>
            <FormField
              label={t("profile.name")}
              isRequired={true}
              error={this.state.errors["name"]}
            >
              <Input
                type="text"
                autoFocus={false}
                onChange={this.onChangeHandler}
                value={this.props.data.name}
                ref={input => {
                  this.nameInput = input;
                }}
              />
            </FormField>
          </FormRow>
          <FormRow id="3">
            <FormField
              label={t("profile.email")}
              isRequired={true}
              error={this.state.errors["email"]}
            >
              <Input
                type="text"
                autoFocus={false}
                onChange={this.onChangeHandler}
                value={this.props.data.email}
                ref={input => {
                  this.emailInput = input;
                }}
              />
            </FormField>
          </FormRow>
        </Form>

        <Form>
          <FormTitle title={t("profile.updatePassword")} />
          <FormRow id="2">
            <FormField
              label={t("profile.password1")}
              error={this.state.errors["password1"]}
            >
              <Input
                type="password"
                autoFocus={false}
                onChange={this.onChangeHandler}
                ref={input => {
                  this.password1Input = input;
                }}
              />
            </FormField>
            <FormField
              label={t("profile.password2")}
              error={this.state.errors["password2"]}
            >
              <Input
                type="password"
                autoFocus={false}
                onChange={this.onChangeHandler}
                ref={input => {
                  this.password2Input = input;
                }}
              />
            </FormField>
          </FormRow>
        </Form>
      </div>
    );
  }

  // Public Methods

  getJSON = (): FormFields => {
    return {
      username: this.usernameInput && this.usernameInput.get(),
      name: this.nameInput && this.nameInput.get(),
      email: this.emailInput && this.emailInput.get(),
      password1: this.password1Input && this.password1Input.get(),
      password2: this.password2Input && this.password2Input.get()
    };
  };

  validate = (json: FormFields): boolean => {
    const errors: { [string]: string } = {};

    // Required Fields

    ["username", "name", "email"].forEach(field => {
      if (!json[field]) {
        errors[field] = t("errors.required");
      }
    });

    this.setState({ errors: errors });

    return Object.keys(errors).length > 0;
  };
}
