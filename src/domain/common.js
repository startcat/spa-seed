/* @flow */

import { observable } from "mobx";

// Singleton

export default new class {
  // Properties

  @observable isLoading: boolean = true;

  // Actions

  setLoading(value: boolean) {
    this.isLoading = value;
  }
}();
