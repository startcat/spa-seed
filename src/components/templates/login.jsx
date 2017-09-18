/* @flow */

import Gradient from "components/atoms/gradient";

type Props = {
  className: string,
  children: any
};

export default (props: Props) => {
  let className = "t-login " + props.className;
  return (
    <div className={className}>
      <div className="t-login__half">
        <div className="t-login__logoContainer">
          <div className="t-login__logo" />
        </div>
        <div className="t-login__box">
          <div className="t-login__content">
            {props.children}
          </div>
        </div>
      </div>
      <div className="t-login__half">
        <div className="t-login__background">
          <div className="t-login__gradient">
            <Gradient id="login" />
          </div>
        </div>
      </div>
    </div>
  );
};
