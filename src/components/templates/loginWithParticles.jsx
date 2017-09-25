/* @flow */

import Particles from "components/atoms/particles";
import Footer from "components/organisms/footer";
import { t } from "i18n";

type Props = {
  className: string,
  children: any
};

export default (props: Props) => {
  let className = "t-loginWithParticles " + props.className;
  return (
    <div className={className}>
      <div className="t-loginWithParticles__half">
        <div className="t-loginWithParticles__logoContainer">
          <div className="t-loginWithParticles__logo" />
        </div>
        <div className="t-loginWithParticles__box">
          <div className="t-loginWithParticles__content">
            {props.children}
          </div>
        </div>
        <div className="t-loginWithParticles__footer">
          <Footer />
        </div>
      </div>
      <div className="t-loginWithParticles__half">
        <div className="t-loginWithParticles__background">
          <div className="t-loginWithParticles__particles">
            <Particles hexColor={window.settings["color--particles1"]} />
          </div>
          <div
            className="t-loginWithParticles__welcome"
            dangerouslySetInnerHTML={{
              __html: t("login.welcome", { name: t("app.name") })
            }}
          />
        </div>
      </div>
    </div>
  );
};
