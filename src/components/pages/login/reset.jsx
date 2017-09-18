/* @flow */

import { observer } from "mobx-react";
import Login from "components/templates/login";
import ResetForm from "components/organisms/login/resetForm";
import store from "store";

export default observer(() => {
  return (
    <Login className="p-reset">
      <ResetForm isLoading={store.ui.loading} />
    </Login>
  );
});
