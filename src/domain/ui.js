/* @flow */

import { observable, computed } from "mobx";
import type { SideBarItem, TopBarState } from "domain/types/ui";

// Singleton

export default new class {
  // Properties

  @observable isLangLoading: boolean = true;

  @observable isLoading: boolean = true;

  @observable sideBarItems: ?Array<SideBarItem> = null;

  @observable topBarState: ?TopBarState = null;

  @computed
  get loading(): boolean {
    return this.isLangLoading || this.isLoading;
  }

  // Initialization

  constructor() {
    this.loadSideBar();
  }

  // Actions

  // Indica si la aplicación se encuentra en un proceso de loading "bloqueante"
  setLoading(value: boolean) {
    this.isLoading = value;
  }

  // Indica si la aplicación ya ha cargado los recursos i18n
  setLangLoading(value: boolean) {
    this.isLangLoading = value;
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
