/* @flow */

import { observable, action } from "mobx";

// State

class State {
  // Observables

  @observable isLoading = 0;

  // Actions

  @action
  setLoading(value: boolean) {
    this.isLoading += value ? 1 : -1;
  }
}

// Export

export default new State();
