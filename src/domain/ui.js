/* @flow */

import { observable, computed } from "mobx";
import type { SideBarItem, TopBarState } from "domain/types/ui";
import { t } from "i18n";

// Singleton

export default class {
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
    this.loadTopBar();
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
    this.sideBarItems = [
      {
        caption: t("menu.dashboard"),
        path: "/dashboard",
        icon: "equalizer"
      },
      {
        caption: t("menu.users"),
        path: "/menu2",
        icon: "group"
      },
      {
        caption: t("menu.settings"),
        path: "/menu3",
        icon: "settings"
      }
    ];
  }

  loadTopBar() {
    this.topBarState = { notifications: 99 };
  }
}
