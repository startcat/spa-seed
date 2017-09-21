/* @flow */

import Loader from "components/atoms/loader";
import OverlayTopbar from "components/molecules/overlayTopbar";
import type { OverlayState, OverlayType } from "domain/types/ui";

type Props = {
  type?: OverlayType,
  state: OverlayState,
  topbar?: OverlayTopbar,
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

  if (props.state === "Hidden") {
    return null;
  } else {
    return (
      <div className={className}>
        <div className="m-overlay__background" />
        {props.state === "Loading"
          ? <div className="m-overlay__content">
              <div className="m-overlay__loader">
                <Loader />
              </div>
            </div>
          : <div className="m-overlay__content">
              {props.topbar
                ? <div className="m-overlay__topbar">
                    {props.topbar}
                  </div>
                : null}
              <div className="m-overlay__children">
                {switchObject[props.state]}
              </div>
            </div>}
      </div>
    );
  }
};
