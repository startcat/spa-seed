/* @flow */

import Loader from "components/atoms/loader";

type Props = {
  isLoading: boolean,
  children: any
};

export default (props: Props) => {
  let className = "m-overlay";
  return (
    <div className={className}>
      {props.isLoading
        ? <div className="m-overlay__loader">
            <Loader />
          </div>
        : <div className="m-overlay__content">
            {props.children}
          </div>}
    </div>
  );
};
