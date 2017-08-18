/**
 * npm Script Lib: Assets
 */

// Requires

const async = require("async");
const fs = require("fs-extra");

// Script Body

module.exports = (options, callback) => {
  async.waterfall(
    [
      // Copy Assets from src to Build

      cb => {
        fs.copy(options.source, options.target, {}, err => {
          return cb(err);
        });
      }
    ],
    err => {
      if (callback) {
        return callback(err);
      }
    }
  );
};
