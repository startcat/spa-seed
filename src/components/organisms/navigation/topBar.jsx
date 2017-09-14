/* @flow */

import type { TopBarState } from "domain/types/ui";

type Props = {
  state: ?TopBarState
};

export default (props: Props) => {
  let className = "o-topBar";
  return (
    <div className={className}>
      <div className="o-topBar__logoContainer">
        <div className="o-topBar__logo" />
      </div>
    </div>
  );
};
