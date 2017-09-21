/* @flow */

import type { Notification } from "domain/types/session";
import dates from "utils/dates";

type Props = { data: Notification };

export default (props: Props) => {
  const className = "m-notification";
  const bulletClassName =
    "m-notification__bullet" + (props.data.isRead ? "--isRead" : "");
  return (
    <div className={className}>
      <div className="m-notification__bulletContainer">
        <div className={bulletClassName} />
      </div>
      <div className="m-notification__text">
        {props.data.text}
      </div>
      <div className="m-notification__date">
        {dates.format(props.data.createdOn)}
      </div>
    </div>
  );
};
