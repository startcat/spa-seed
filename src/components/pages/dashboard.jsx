/* @flow */

import { observer } from "mobx-react";
import Main from "components/templates/main";
import ui from "domain/ui";
import SideBar from "components/organisms/navigation/sideBar";
import TopBar from "components/organisms/navigation/topBar";

export default observer(() => {
  return (
    <Main
      className="p-dashboard"
      sideBar={<SideBar items={ui.sideBarItems} />}
      topBar={<TopBar state={ui.topBarState} />}
    >
      <div className="p-dashboard__content">Hola</div>
    </Main>
  );
});
