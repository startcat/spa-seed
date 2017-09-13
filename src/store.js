/* @flow */

import { observable } from "mobx";
import Common from "actions/common";
import type { Session } from "types/domain/session";

// Store

class Store {
  // Actions

  common: typeof Common;

  // Common

  @observable isLoading: boolean = true;

  // Login

  @observable session: ?Session = null;

  // Constructor

  constructor() {
    this.common = Common;
    setTimeout(() => {
      this.isLoading = false;
    }, 5000);
  }
}

// Export Singleton

const singleton = new Store();

export default singleton;
