/* @flow */

import { default as React } from "react";
import type { TopBarState, OverlayState } from "domain/types/ui";
import Notifications from "components/organisms/notifications";
import Profile from "components/organisms/profile";
import OverlayTopBar from "components/molecules/overlayTopBar";
import IconsBar from "components/molecules/iconsBar";
import Icon from "components/atoms/icon";
import Overlay from "components/molecules/overlay";
import { Link } from "react-router-dom";
import store from "store";
import { t } from "i18n";

// Types

type Props = ?TopBarState;
type State = {
  notificationsOverlayState: OverlayState,
  profileOverlayState: OverlayState
};

// Class Component

export default class extends React.Component<void, Props, State> {
  // Private properties

  props: Props;
  state: State = {
    notificationsOverlayState: "Hidden",
    profileOverlayState: "Hidden"
  };

  // Event Handlers

  onNotificationsButtonClick = async () => {
    this.setState({ notificationsOverlayState: "Loading" });
    await store.session.getNotifications();
    this.setState({ notificationsOverlayState: "Visible" });
  };

  onNotificationsCloseButtonClick = () => {
    this.setState({ notificationsOverlayState: "Hidden" });
  };

  onProfileButtonClick = async () => {
    this.setState({ profileOverlayState: "Loading" });
    await store.session.getProfile();
    this.setState({ profileOverlayState: "Visible" });
  };

  onProfileCloseButtonClick = () => {
    this.setState({ profileOverlayState: "Hidden" });
  };

  onProfileSaveButtonClick = () => {
    this.setState({ profileOverlayState: "Visible" });
  };

  onProfileDirtyChange = () => {
    this.setState({ profileOverlayState: "Invalid" });
  };

  onKeyDownHandler = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      if (this.state.notificationsOverlayState === "Visible") {
        this.onNotificationsCloseButtonClick();
      }
      if (this.state.profileOverlayState === "Visible") {
        this.onProfileCloseButtonClick();
      }
    }
  };

  // React LifeCycle

  componentDidMount() {
    window.addEventListener("keydown", this.onKeyDownHandler, true);
  }

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
            <Icon name="face" onClick={this.onProfileButtonClick.bind(this)} />
          </IconsBar>
        </div>

        <Overlay
          state={this.state.notificationsOverlayState}
          type="Medium"
          topbar={
            <OverlayTopBar title={t("notifications.notifications")} bullet={2}>
              <IconsBar>
                <Icon
                  name="clear"
                  onClick={this.onNotificationsCloseButtonClick.bind(this)}
                />
              </IconsBar>
            </OverlayTopBar>
          }
        >
          <div className="o-topBar__notifications">
            <Notifications data={store.session.notifications} />
          </div>
        </Overlay>

        <Overlay
          state={this.state.profileOverlayState}
          type="Medium"
          topbar={
            <OverlayTopBar title={t("profile.profile")}>
              <IconsBar>
                <Icon
                  modifiers={[
                    this.state.profileOverlayState === "Invalid"
                      ? "invalid"
                      : "",
                    this.state.profileOverlayState === "Valid" ? "valid" : ""
                  ]}
                  name="save"
                  onClick={this.onProfileSaveButtonClick.bind(this)}
                />
                <Icon
                  modifiers={[
                    ["Invalid", "Valid"].indexOf(
                      this.state.profileOverlayState
                    ) !== -1
                      ? "dirty"
                      : ""
                  ]}
                  name="clear"
                  onClick={this.onProfileCloseButtonClick.bind(this)}
                />
              </IconsBar>
            </OverlayTopBar>
          }
        >
          <div className="o-topBar__profile">
            <Profile
              data={store.session.profile}
              onDirtyChange={this.onProfileDirtyChange.bind(this)}
            />
          </div>
        </Overlay>
      </div>
    );
  }
}
