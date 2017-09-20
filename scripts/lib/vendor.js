/**
 * npm Script Lib: Vendor
 */

// Requires

const async = require("async");
const chalk = require("chalk");
const path = require("path");
const fs = require("fs");
const Preprocessor = require("preprocessor");
const uglify = require("uglify-js");

// Private

// Export

module.exports = (options, callback) => {
  async.waterfall(
    [
      // Preprocessor
      cb => {
        const source = fs.readFileSync(options.source).toString();
        try {
          return cb(
            null,
            new Preprocessor(
              source,
              path.resolve(__dirname, "../../")
            ).process({
              FULL: true
            })
          );
        } catch (e) {
          return cb(new Error(e.message));
        }
      },

      // Uglify

      (js, cb) => {
        console.log(chalk.dim("[Vendor] Uglifying..."));
        const uglifyresult = uglify.minify(js);
        console.log(chalk.dim("[Vendor] Uglified"));
        return cb(uglifyresult.error, uglifyresult.code);
      },

      // Save to Target

      (js, cb) => {
        fs.writeFile(options.target, js, err => {
          return cb(err);
        });
      }
    ],
    err => {
      if (err) {
        console.log(chalk.red(err.message || err.toString()));
      }
      if (callback) {
        return callback(err);
      }
    }
  );
};
