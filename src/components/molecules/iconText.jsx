/* @flow */

import Icon from "components/atoms/icon";

type Props = {
  icon: string,
  children: any
};

export default (props: Props) => {
  let className = "m-iconText";
  return (
    <div className={className}>
      <div className="m-iconText__iconContainer">
        <Icon className="m-iconText__icon" name={props.icon} />
      </div>
      <div className="m-iconText__text">
        {props.children}
      </div>
    </div>
  );
};
