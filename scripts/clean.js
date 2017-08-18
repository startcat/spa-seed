/**
 * npm Script: Clean
 */

// Requires

const async = require("async");
const fs = require("fs-extra");
const chalk = require("chalk");
const config = require("./config");

// Script Body

console.log(chalk.dim("Cleaning build folder..."));

async.waterfall(
  [
    // Clean Build Folder

    cb => {
      fs.remove(config.BUILD_FOLDER, err => {
        return cb(err);
      });
    },

    // Create Build Folder

    cb => {
      fs.ensureDir(config.BUILD_FOLDER, err => {
        return cb(err);
      });
    }
  ],
  err => {
    if (err) {
      console.error(chalk.red(err.message || err.toString()));
    }
  }
);
