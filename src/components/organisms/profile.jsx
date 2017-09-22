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
type State = {};
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
  state: State = {};
  usernameInput: Input;
  nameInput: Input;
  emailInput: Input;
  password1Input: Input;
  password2Input: Input;

  // Event Handlers

  onChangeHandler = () => {
    if (this.props.onDirtyChange) {
      this.props.onDirtyChange();
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
            <FormField label={t("profile.username")} isRequired={true}>
              <Input
                type="text"
                autoFocus={true}
                modifiers={[]}
                onChange={this.onChangeHandler}
                value={this.props.data.username}
                ref={input => {
                  this.usernameInput = input;
                }}
              />
            </FormField>
            <FormField label={t("profile.name")} isRequired={true}>
              <Input
                type="text"
                autoFocus={false}
                modifiers={[]}
                onChange={this.onChangeHandler}
                value={this.props.data.name}
                ref={input => {
                  this.nameInput = input;
                }}
              />
            </FormField>
          </FormRow>
          <FormRow id="3">
            <FormField label={t("profile.email")} isRequired={true}>
              <Input
                type="text"
                autoFocus={false}
                modifiers={[]}
                onChange={this.onChangeHandler}
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
            <FormField label={t("profile.password1")}>
              <Input
                type="password"
                autoFocus={false}
                modifiers={[]}
                onChange={this.onChangeHandler}
                value={this.props.data.username}
                ref={input => {
                  this.password1Input = input;
                }}
              />
            </FormField>
            <FormField label={t("profile.password2")}>
              <Input
                type="password"
                autoFocus={false}
                modifiers={[]}
                onChange={this.onChangeHandler}
                value={this.props.data.name}
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

  validate = (json: FormFields) => {
    return true;
  };
}
