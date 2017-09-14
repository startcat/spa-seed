/* @flow */

import { observer } from "mobx-react";
import ui from "domain/ui";
import Login from "components/templates/login";
import ResetForm from "components/organisms/login/resetForm";

export default observer(() => {
  return (
    <Login className="p-reset">
      <ResetForm isLoading={ui.isLoading} />
    </Login>
  );
});
