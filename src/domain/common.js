/* @flow */

import { observable } from "mobx";

// Store

class Common {
  // Properties

  @observable isLoading: boolean = true;

  // Actions

  setLoading(value: boolean) {
    this.isLoading = value;
  }
}

// Export Singleton

const singleton = new Common();

export default singleton;
