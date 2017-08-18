/**
 * npm Script: Build
 */

// Requires

const async = require("async");
const config = require("./config");
const assets = require("./lib/assets");
const styles = require("./lib/styles");
const javascript = require("./lib/javascript");
const chalk = require("chalk");

// Export

console.log(chalk.inverse("Building..."));

async.parallel(
  {
    // Assets

    assets: cb => {
      assets(
        {
          source: config.ASSETS_FOLDER,
          target: config.BUILD_FOLDER,
          production: true
        },
        cb
      );
    },

    // Styles

    styles: cb => {
      styles(
        {
          source: config.APP_STYLES_ENTRY,
          target: config.APP_STYLES_TARGET,
          production: true
        },
        cb
      );
    },

    // App (JS)

    js: cb => {
      javascript(
        {
          entry: config.APP_JS_ENTRY,
          target: config.APP_JS_TARGET,
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
