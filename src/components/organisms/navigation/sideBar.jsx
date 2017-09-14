/* @flow */

import type { SideBarItem } from "domain/types/ui";

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
              <div className={menuEntryClassName}>
                {item.name}
              </div>
            );
          })
        : null}
    </div>
  );
};
