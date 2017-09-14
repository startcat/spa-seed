/* @flow */

import type { TopBarState } from "domain/types/ui";
import Icon from "components/atoms/icon";
import { Link } from "react-router-dom";

type Props = ?TopBarState;

export default (props: Props) => {
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
            bullet={props ? props.notifications : null}
          />
        </div>
        <div className="o-topBar__icon">
          <Icon name="face" />
        </div>
      </div>
    </div>
  );
};
