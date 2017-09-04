/* @flow */

import { observable } from "mobx";
import Common from "actions/common";

// Types

type Session = {
  user: string,
  token: string
};

// Store

class Store {
  // Actions

  common: Common;

  // Common

  @observable isLoading: boolean = false;

  // Login

  @observable session: ?Session = null;

  // Constructor

  constructor() {
    this.common = new Common(this);
  }
}

// Export

export default new Store();
