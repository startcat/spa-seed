/* @flow */

import { default as React } from "react";
import NotificationComponent from "components/molecules/notification";
import type { Notification } from "domain/types/session";

// Types

type Props = { data: Array<Notification> };
type State = {};

// Class Component

export default class extends React.Component<void, Props, State> {
  // Private properties

  props: Props;
  state: State = {};

  // Event Handlers

  // Render

  render() {
    let className = "o-notifications";
    return (
      <div className={className}>
        {this.props.data.map(item => {
          return (
            <div key={item.id} className="o-notifications__notification">
              <NotificationComponent data={item} />
            </div>
          );
        })}
      </div>
    );
  }
}
