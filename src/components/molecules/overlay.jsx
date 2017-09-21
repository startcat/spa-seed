/* @flow */

import Loader from "components/atoms/loader";
import type { OverlayState, OverlayType } from "domain/types/ui";

type Props = {
  type?: OverlayType,
  state: OverlayState,
  children: any
};

export default (props: Props) => {
  let className = "m-overlay";
  className += " m-overlay--" + props.state.toLowerCase();
  className += " m-overlay--" + (props.type || "Large").toLowerCase();
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
      <div className="m-overlay__background" />
      <div className="m-overlay__content">
        {switchObject[props.state]}
      </div>
    </div>
  );
};
