/**
 * npm Script Lib: Styles
 */

// Requires

const async = require("async");
const fs = require("fs-extra");
const sass = require("node-sass");
const sassGlobImporter = require("sass-glob-importer");
const sassJsonImporter = require("node-sass-json-importer");
const postcss = require("postcss");
const autoprefixer = require("autoprefixer");
const stylelint = require("stylelint");
const path = require("path");
const chalk = require("chalk");
const formatter = require("stylelint-formatter-table");
const csso = require("csso");

// Export

module.exports = (options, callback) => {
  async.waterfall(
    [
      // Stylelint
      cb => {
        stylelint
          .lint({
            files: path.join(__dirname, "../../src/styles/**/*.scss"),
            formatter: formatter
          })
          .then(result => {
            console.log(chalk.dim("[Styles] Linting...\n"));
            console.log(result.output);
            console.log(chalk.dim("[Styles] Linted"));
            return cb(null);
          })
          .catch(err => {
            return cb(err);
          });
      },

      // Settings JSON to /build

      cb => {
        console.log(chalk.dim("[Styles] Settings (JSON)..."));
        const settingsJson = fs.readFileSync(options.settingsSource);
        const settingsJs =
          "(function(){ window.settings=" + settingsJson + "})();";
        fs.writeFile(options.settingsTarget, settingsJs, err => {
          return cb(err);
        });
      },

      // Sass => CSS

      cb => {
        console.log(chalk.dim("[Styles] Rendering..."));
        sass.render(
          {
            file: options.source,
            importer: [sassJsonImporter, sassGlobImporter()]
          },
          (err, result) => {
            console.log(chalk.dim("[Styles] Rendered"));
            return cb(err, result && result.css && result.css.toString());
          }
        );
      },

      // PostCSS (Autoprefixer)

      (css, cb) => {
        const postCSSPlugins = [autoprefixer];
        const postCSSOptions = {};
        console.log(chalk.dim("[Styles] PostCSS processing..."));
        postcss(postCSSPlugins).process(css, postCSSOptions).then(
          result => {
            console.log(chalk.dim("[Styles] PostCSS processed"));
            return cb(null, result.css);
          },
          err => {
            return cb(err);
          }
        );
      },

      (css, cb) => {
        if (options.production === true) {
          return cb(null, csso.minify(css).css);
        } else {
          return cb(null, css);
        }
      },

      // Save to target

      (css, cb) => {
        fs.writeFile(options.target, css, err => {
          return cb(err);
        });
      }
    ],
    err => {
      if (err) {
        console.log(chalk.dim("Error generating Styles bundle"));
        console.log(chalk.red(err.message || err.toString()));
      }
      if (callback) {
        return callback(err);
      }
    }
  );
};
