/* @flow */

import Input from "components/atoms/form/input";
import Button from "components/atoms/form/button";

type Props = {};

export default (props: Props) => {
  let className = "o-signInForm";
  return (
    <div className={className}>
      <div className="o-signInForm__input o-signInForm__input--user">
        <Input type="text" />
      </div>
      <div className="o-signInForm__input o-signInForm__input--password">
        <Input type="password" />
      </div>
      <div className="o-signInForm__signInButton">
        <Button>Entrar</Button>
      </div>
    </div>
  );
};
