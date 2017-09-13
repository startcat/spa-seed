/* @flow */

import { observable } from "mobx";
import Common from "actions/common";
import type { Session } from "types/store/session";

// Store

class Store {
  // Actions

  common: typeof Common;

  // Common

  @observable isLoading: boolean = false;

  // Login

  @observable session: ?Session = null;

  // Constructor

  constructor() {
    this.common = Common;
  }
}

// Export Singleton

const singleton = new Store();

export default singleton;
