/* @flow */

import { observer } from "mobx-react";
import Login from "components/templates/login.jsx";
import SignInForm from "components/organisms/login/signInForm.jsx";

export default observer(() => {
  return (
    <Login className="p-login">
      <SignInForm />
    </Login>
  );
});
