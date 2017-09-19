/* @flow */

import { Link } from "react-router-dom";
import { t } from "i18n";

type Props = {};

export default (props: Props) => {
  let className = "o-footer";
  return (
    <div className={className}>
      <div className="o-footer__line">
        <Link to="/">
          <span className="o-footer__link">
            {t("footer.terms")}
          </span>
        </Link>
        <b className="o-footer__sep">|</b>
        <Link to="/">
          <span className="o-footer__link">
            {t("footer.privacy")}
          </span>
        </Link>
      </div>
      <div className="o-footer__line o-footer__line--bold">
        {t("app.name")} {new Date().getFullYear()} &copy;
      </div>
    </div>
  );
};
