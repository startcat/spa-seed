/* @flow */

import { observer } from "mobx-react";
import common from "domain/common";
import Login from "components/templates/login.jsx";
import ResetForm from "components/organisms/login/resetForm.jsx";

export default observer(() => {
  return (
    <Login className="p-reset">
      <ResetForm isLoading={common.isLoading} />
    </Login>
  );
});
