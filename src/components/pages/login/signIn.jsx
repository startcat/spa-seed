/* @flow */

import { observer } from "mobx-react";
import Login from "components/templates/login";
import SignInForm from "components/organisms/login/signInForm";
import store from "store";

export default observer(() => {
  return (
    <Login className="p-login">
      <SignInForm isLoading={store.ui.loading} />
    </Login>
  );
});
