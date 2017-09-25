/* @flow */

import Ui from "domain/ui";
import Session from "domain/session";
import Dashboard from "domain/dashboard";

// Singleton

export default new class {
  ui: Ui;
  session: Session;
  dashboard: Dashboard;

  init() {
    this.ui = new Ui();
    this.session = new Session();
    this.dashboard = new Dashboard();
  }
}();
