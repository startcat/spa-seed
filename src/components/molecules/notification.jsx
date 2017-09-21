/* @flow */

import type { Notification } from "domain/types/session";
import IconText from "components/molecules/iconText";
import dates from "utils/dates";

type Props = { data: Notification };

export default (props: Props) => {
  const className =
    "m-notification" + (props.data.isRead ? " m-notification--isRead" : "");
  return (
    <div className={className}>
      <div className="m-notification__bulletContainer">
        <div className="m-notification__bullet" />
      </div>
      <div className="m-notification__content">
        <div className="m-notification__text">
          {props.data.text}
        </div>
        <div className="m-notification__createdOn">
          <IconText icon="schedule">
            {dates.format(props.data.createdOn)}
          </IconText>
        </div>
      </div>
    </div>
  );
};
