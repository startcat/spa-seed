/* @flow */

import { default as React } from "react";
import type { TopBarState, OverlayState } from "domain/types/ui";
import OverlayTopBar from "components/molecules/overlayTopBar";
import IconsBar from "components/molecules/iconsBar";
import Icon from "components/atoms/icon";
import Overlay from "components/molecules/overlay";
import { Link } from "react-router-dom";

// Types

type Props = ?TopBarState;
type State = {
  notificationsOverlayState: OverlayState
};

// Class Component

export default class extends React.Component<void, Props, State> {
  // Private properties

  props: Props;
  state: State = {
    notificationsOverlayState: "Hidden"
  };

  // Event Handlers

  onNotificationsButtonClick = () => {
    this.setState({
      notificationsOverlayState: "Visible"
    });
  };

  onNotificationsCloseButtonClick = () => {
    this.setState({
      notificationsOverlayState: "Hidden"
    });
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
          <IconsBar>
            <Icon
              name="notifications_none"
              onClick={this.onNotificationsButtonClick.bind(this)}
              bullet={this.props ? this.props.notifications : null}
            />
            <Icon name="face" />
          </IconsBar>
        </div>
        <Overlay state={this.state.notificationsOverlayState}>
          <OverlayTopBar>
            <IconsBar>
              <Icon
                name="clear"
                onClick={this.onNotificationsCloseButtonClick.bind(this)}
              />
            </IconsBar>
          </OverlayTopBar>
          <div>demo</div>
        </Overlay>
      </div>
    );
  }
}
