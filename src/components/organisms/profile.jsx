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

// Class Component

export default class extends React.Component<void, Props, State> {
  // Private properties

  props: Props;
  state: State = {};

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
            <FormField label={t("profile.username")}>
              <Input
                type="text"
                autoFocus={true}
                modifiers={[]}
                isDisabled={true}
                onChange={this.onChangeHandler}
                value={this.props.data.username}
                ref={input => {}}
              />
            </FormField>
            <FormField label={t("profile.name")}>
              <Input
                type="text"
                autoFocus={false}
                modifiers={[]}
                isDisabled={true}
                onChange={this.onChangeHandler}
                value={this.props.data.name}
                ref={input => {}}
              />
            </FormField>
          </FormRow>
          <FormRow id="3">
            <FormField label={t("profile.email")}>
              <Input
                type="text"
                autoFocus={false}
                modifiers={[]}
                isDisabled={true}
                onChange={this.onChangeHandler}
                ref={input => {}}
              />
            </FormField>
          </FormRow>
        </Form>

        <Form>
          <FormTitle title={t("profile.updatePassword")} />
          <FormRow id="2">
            <FormField label={t("profile.password")}>
              <Input
                type="password"
                autoFocus={false}
                modifiers={[]}
                isDisabled={true}
                onChange={this.onChangeHandler}
                value={this.props.data.username}
                ref={input => {}}
              />
            </FormField>
            <FormField label={t("profile.password2")}>
              <Input
                type="password"
                autoFocus={false}
                modifiers={[]}
                isDisabled={true}
                onChange={this.onChangeHandler}
                value={this.props.data.name}
                ref={input => {}}
              />
            </FormField>
          </FormRow>
        </Form>
      </div>
    );
  }

  // Public Methods
}
