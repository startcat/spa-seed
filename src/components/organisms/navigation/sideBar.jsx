/* @flow */

import type { SideBarItem } from "domain/types/ui";
import Icon from "components/atoms/icon";
import { Link } from "react-router-dom";

type Props = {
  items: ?Array<SideBarItem>
};

export default (props: Props) => {
  let className = "o-sideBar";
  return (
    <div className={className}>
      {props.items
        ? props.items.map(item => {
            let menuEntryClassName = "o-sideBar__item";
            return (
              <div key={item.name} className={menuEntryClassName}>
                <Link to={item.path}>
                  <Icon className="o-sideBar__icon" name={item.icon} />
                  <span className="o-sideBar__name">
                    {item.name}
                  </span>
                </Link>
              </div>
            );
          })
        : null}
    </div>
  );
};
