/* @flow */

import { observer } from "mobx-react";
import Login from "components/templates/login";
import ForgotForm from "components/organisms/login/forgotForm";
import store from "store";

export default observer(() => {
  return (
    <Login className="p-forgot">
      <ForgotForm isLoading={store.ui.loading} />
    </Login>
  );
});
