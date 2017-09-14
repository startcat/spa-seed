/* @flow */

import { observable } from "mobx";

// Store

class Domain {
  // Properties

  @observable isLoading: boolean = true;

  // Actions

  setLoading(value: boolean) {
    this.isLoading = value;
  }
}

// Export Singleton

const singleton = new Domain();

export default singleton;
