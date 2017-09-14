/* @flow */

import type { TopBarState } from "domain/types/ui";
import { Link } from "react-router-dom";

type Props = {
  state: ?TopBarState
};

export default (props: Props) => {
  let className = "o-topBar";
  return (
    <div className={className}>
      <div className="o-topBar__logoContainer">
        <Link to="/">
          <div className="o-topBar__logo" />
        </Link>
      </div>
    </div>
  );
};
