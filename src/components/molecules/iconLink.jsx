/* @flow */

import Icon from "components/atoms/icon";
import { Link } from "react-router-dom";

type Props = {
  icon: string,
  text: string,
  path: string
};

export default (props: Props) => {
  let className = "m-iconLink";
  return (
    <div className={className}>
      <Link to={props.path}>
        <Icon className="m-iconLink__icon" name={props.icon} />
        <div className="m-iconLink__name">
          {props.text}
        </div>
      </Link>
    </div>
  );
};
