/* @flow */

import Icon from "components/atoms/icon";
import { Link } from "react-router-dom";

type Props = {
  icon: string,
  caption: string,
  path: string,
  active?: boolean
};

export default (props: Props) => {
  let className = "m-iconButton";
  if (props.active === true) {
    className += " m-iconButton--active";
  }
  return (
    <div className={className}>
      <Link to={props.path}>
        <div className="m-iconButton__iconContainer">
          <Icon className="m-iconButton__icon" name={props.icon} />
        </div>
        <div className="m-iconButton__caption">
          {props.caption}
        </div>
      </Link>
    </div>
  );
};
