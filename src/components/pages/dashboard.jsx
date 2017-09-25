/* @flow */

import { observer } from "mobx-react";
import Main from "components/templates/main";
import SideBar from "components/organisms/navigation/sideBar";
import TopBar from "components/organisms/navigation/topBar";
import Dashboard from "components/organisms/dashboard";
import store from "store";

export default observer(() => {
  return (
    <Main
      className="p-dashboard"
      sideBar={<SideBar items={store.ui.sideBarItems} />}
      topBar={<TopBar {...store.ui.topBarState} />}
    >
      <div className="p-dashboard__content">
        <Dashboard />
      </div>
    </Main>
  );
});
