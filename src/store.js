/* @flow */

import Ui from "domain/ui";
import Session from "domain/session";

// Singleton

export default new class {
  ui: Ui;
  session: Session;

  init() {
    this.ui = new Ui();
    this.session = new Session();
  }
}();
