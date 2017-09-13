/* @flow */

import { observer } from "mobx-react";
import common from "domain/common";
import Login from "components/templates/login.jsx";
import SignInForm from "components/organisms/login/signInForm.jsx";

export default observer(() => {
  return (
    <Login className="p-login">
      <SignInForm isLoading={common.isLoading} />
    </Login>
  );
});
