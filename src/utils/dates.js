/* @flow */

import format from "date-fns/format";

export default new class {
  format(value: ?Date, short?: boolean) {
    if (!value) {
      return "";
    } else {
      if (!short) {
        return format(value, "DD/MM/YYYY HH:mm");
      } else {
        return format(value, "DD/MM/YYYY");
      }
    }
  }
}();
