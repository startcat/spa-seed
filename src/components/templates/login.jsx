/* @flow */

import Particles from "components/atoms/particles";
import Footer from "components/organisms/footer";
import { t } from "i18n";

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
        <div className="t-login__footer">
          <Footer />
        </div>
      </div>
      <div className="t-login__half">
        <div className="t-login__background">
          <div className="t-login__particles">
            <Particles hexColor="#ff9d8c" />
          </div>
          <div
            className="t-login__welcome"
            dangerouslySetInnerHTML={{
              __html: t("login.welcome", { name: t("app.name") })
            }}
          />
        </div>
      </div>
    </div>
  );
};
