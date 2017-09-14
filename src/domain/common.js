/* @flow */

import { observable } from "mobx";

// Singleton

export default new class {
  // Properties

  @observable isLoading: boolean = true;

  // Actions

  // Indica si la aplicación se encuentra en un proceso de loading "bloqueante"
  setLoading(value: boolean) {
    this.isLoading = value;
  }
}();
