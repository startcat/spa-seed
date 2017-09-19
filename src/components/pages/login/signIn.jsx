/* @flow */

import { observer } from "mobx-react";
import LoginWithParticles from "components/templates/loginWithParticles";
import SignInForm from "components/organisms/login/signInForm";
import store from "store";

export default observer(() => {
  return (
    <LoginWithParticles className="p-login">
      <SignInForm isLoading={store.ui.loading} />
    </LoginWithParticles>
  );
});
