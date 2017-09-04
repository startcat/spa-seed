/* @flow */

import Store from "store.js";

export default class Common {
  store: typeof Store;

  constructor(store: typeof Store) {
    this.store = store;
  }

  // Actions

  setLoading(value: boolean) {
    this.store.isLoading = value;
  }
}
