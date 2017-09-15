/* @flow */

import Loader from "components/atoms/loader";
import type { OverlayState } from "domain/types/ui";

type Props = {
  state: OverlayState,
  children: any
};

export default (props: Props) => {
  const className = "m-overlay m-overlay__" + props.state.toLowerCase();
  const switchObject: { [state: OverlayState]: any } = {
    Hidden: "",
    Loading: (
      <div className="m-overlay__loader">
        <Loader />
      </div>
    ),
    Visible: props.children
  };

  return (
    <div className={className}>
      {switchObject[props.state]}
    </div>
  );
};
