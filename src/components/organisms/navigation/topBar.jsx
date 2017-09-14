/* @flow */

import { default as React } from "react";
import type { TopBarState } from "domain/types/ui";
import Icon from "components/atoms/icon";
import { Link } from "react-router-dom";

// Types

type Props = ?TopBarState;
type State = {};

// Class Component

export default class extends React.Component<void, Props, State> {
  // Private properties

  props: Props;
  state: State;

  // Event Handlers

  onNotificationsButtonClick = () => {
    window.alert("ey");
  };

  // Render

  render() {
    let className = "o-topBar";
    return (
      <div className={className}>
        <div className="o-topBar__logoContainer">
          <Link to="/">
            <div className="o-topBar__logo" />
          </Link>
        </div>
        <div className="o-topBar__icons">
          <div className="o-topBar__icon">
            <Icon
              name="notifications_none"
              onClick={this.onNotificationsButtonClick.bind(this)}
              bullet={this.props ? this.props.notifications : null}
            />
          </div>
          <div className="o-topBar__icon">
            <Icon name="face" />
          </div>
        </div>
      </div>
    );
  }
}
