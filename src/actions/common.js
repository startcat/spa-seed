/* @flow */

import store from "store.js";

export default {
  setLoading(value: boolean) {
    store.isLoading = value;
  }
};
