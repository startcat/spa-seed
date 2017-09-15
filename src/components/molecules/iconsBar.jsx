/* @flow */

import Icon from "components/atoms/icon";

type Props = {
  children: Array<typeof Icon>
};

export default (props: Props) => {
  let className = "m-iconsBar";
  return (
    <div className={className}>
      {props.children.map((icon: typeof Icon) => {
        return (
          <div
            key={icon.props && icon.props.name ? icon.props.name : null}
            className="m-iconsBar__icon"
          >
            {icon}
          </div>
        );
      })}
    </div>
  );
};
