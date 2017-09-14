/* @flow */

import { observer } from "mobx-react";
import ui from "domain/ui";
import Login from "components/templates/login";
import SignInForm from "components/organisms/login/signInForm";

export default observer(() => {
  return (
    <Login className="p-login">
      <SignInForm isLoading={ui.loading} />
    </Login>
  );
});
