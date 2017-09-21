/* @flow */

import { default as React } from "react";
import { t } from "i18n";
import Button from "components/atoms/form/button";
import type { Profile } from "domain/types/session";

// Types

type Props = { data: ?Profile };
type State = {};

// Class Component

export default class extends React.Component<void, Props, State> {
  // Private properties

  props: Props;
  state: State = {};

  // Event Handlers

  // Render

  render() {
    let className = "o-profile";
    return <div className={className}>Profile</div>;
  }
}
