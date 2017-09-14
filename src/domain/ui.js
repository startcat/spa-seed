/* @flow */

import { observable } from "mobx";
import type { SideBarItem, TopBarState } from "domain/types/ui";

// Singleton

export default new class {
  // Properties

  @observable isLoading: boolean = true;

  @observable sideBarItems: ?Array<SideBarItem> = null;

  @observable topBarState: ?TopBarState = null;

  // Actions

  // Indica si la aplicación se encuentra en un proceso de loading "bloqueante"
  setLoading(value: boolean) {
    this.isLoading = value;
  }
}();
