/**
 * npm Script: Vendor
 */

// Requires

const async = require("async");
const config = require("./config");
const vendor = require("./lib/vendor");
const chalk = require("chalk");

// Export

console.log(chalk.inverse("Building..."));

async.parallel(
  {
    // Assets

    vendor: cb => {
      vendor(
        {
          source: config.VENDOR_JS_ENTRY,
          target: config.VENDOR_JS_TARGET,
          production: true
        },
        cb
      );
    }
  },
  err => {
    if (err) {
      console.error(chalk.red(err.message || err.toString()));
    }
  }
);
