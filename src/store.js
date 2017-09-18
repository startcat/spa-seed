/* @flow */

import Ui from "domain/ui";
import Session from "domain/session";

// Singleton

const ui: typeof Ui = Ui;
const session: typeof Session = Session;

export default {
  ui: ui,
  session: session
};
