/* @flow */

import { observable } from "mobx";
import type { SideBarItem, TopBarState } from "domain/types/ui";

// Singleton

export default new class {
  // Properties

  @observable isLoading: boolean = true;

  @observable sideBarItems: ?Array<SideBarItem> = null;

  @observable topBarState: ?TopBarState = null;

  // Initialization

  constructor() {
    this.loadSideBar();
  }

  // Actions

  // Indica si la aplicación se encuentra en un proceso de loading "bloqueante"
  setLoading(value: boolean) {
    this.isLoading = value;
  }

  loadSideBar() {
    this.sideBarItems = null;
    setTimeout(() => {
      this.sideBarItems = [
        { name: "Menu 1", path: "/menu1" },
        { name: "Menu 2", path: "/menu2" },
        { name: "Menu 3", path: "/menu3" }
      ];
    }, 1000);
  }
}();
