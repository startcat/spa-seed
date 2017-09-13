/* @flow */

import { observer } from "mobx-react";
import Login from "components/templates/login.jsx";
import ForgotForm from "components/organisms/login/forgotForm.jsx";

export default observer(() => {
  return (
    <Login className="p-forgot">
      <ForgotForm />
    </Login>
  );
});
