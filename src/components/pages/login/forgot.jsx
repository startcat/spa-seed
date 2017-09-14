/* @flow */

import { observer } from "mobx-react";
import Login from "components/templates/login";
import ForgotForm from "components/organisms/login/forgotForm";

export default observer(() => {
  return (
    <Login className="p-forgot">
      <ForgotForm />
    </Login>
  );
});
