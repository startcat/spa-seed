/* @flow */

import Loader from "components/atoms/loader";
import OverlayTopbar from "components/molecules/overlayTopbar";
import Transition from "react-transition-group/Transition";
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

  return (
    <Transition in={props.state !== "Hidden"} timeout={150}>
      {state => {
        return (
          <div className={className + (" m-overlay--" + state)}>
            <div className={"m-overlay__background"} />
            {props.state === "Hidden"
              ? null
              : props.state === "Loading"
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
                      {props.children}
                    </div>
                  </div>}
          </div>
        );
      }}
    </Transition>
  );
};
