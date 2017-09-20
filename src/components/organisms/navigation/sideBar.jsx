/* @flow */

import type { SideBarItem } from "domain/types/ui";
import IconButton from "components/molecules/iconButton";

type Props = {
  items: ?Array<SideBarItem>
};

export default (props: Props) => {
  let className = "o-sideBar";
  return (
    <div className={className}>
      {props.items
        ? props.items.map(item => {
            return (
              <div key={item.path} className="o-sideBar__item">
                <IconButton
                  active={window.location.pathname === item.path}
                  path={item.path}
                  icon={item.icon}
                  caption={item.caption}
                />
              </div>
            );
          })
        : null}
    </div>
  );
};
