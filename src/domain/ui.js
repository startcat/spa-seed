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
        { name: "Menu 1", path: "/menu1", icon: "looks_one" },
        { name: "Menu 2", path: "/menu2", icon: "looks_two" },
        { name: "Menu 3", path: "/menu3", icon: "looks_3" }
      ];
    }, 1000);
  }
}();
