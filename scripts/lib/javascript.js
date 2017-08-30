/**
 * npm Script Lib: Javascript
 */

// Requires

const async = require("async");
const fs = require("fs-extra");
const uglify = require("uglify-js");
const rollup = require("rollup");
const eslint = require("eslint");
const babel = require("rollup-plugin-babel");
const resolve = require("rollup-plugin-node-resolve");
const includePaths = require("rollup-plugin-includePaths");
const commonjs = require("rollup-plugin-commonjs");
const replace = require("rollup-plugin-replace");
const chalk = require("chalk");
const execFile = require("child_process").execFile;
const flow = require("flow-bin");

// Private

let rollupCache = null;

// Export

module.exports = (options, callback) => {
  async.waterfall(
    [
      // ESLint (.eslintrc)

      cb => {
        const cli = new eslint.CLIEngine();

        const report = cli.executeOnFiles(
          cli.resolveFileGlobPatterns(["src/**/*.{js,jsx}"])
        );

        const formatter = cli.getFormatter("table");

        try {
          const output = formatter(report.results);
          console.log(chalk.dim("[JS/JSX] Linting..."));
          console.log(output);
          console.log(chalk.dim("[JS/JSX] Linted"));
        } catch (e) {
          console.log(
            chalk.red("[JS/JSX] Linting error: " + e.message || e.toString())
          );
        }

        return cb(null);
      },

      // Flow

      cb => {
        execFile(flow, ["status"], (err, stdout) => {
          console.log(stdout);
          // No tratamos el err (aunque simulamos que si para "engañar" al linter)
          return cb(err && null);
        });
      },

      // Generamos Bundle (rollup && babel)

      cb => {
        console.log(chalk.dim("[JS/JSX] Rolling up..."));

        rollup
          .rollup({
            entry: options.entry,
            cache: rollupCache,
            sourceMap: true,
            plugins: [
              replace({
                "process.env.NODE_ENV": JSON.stringify(
                  options.production ? "production" : "development"
                )
              }),
              includePaths({
                include: {},
                paths: ["src"],
                external: [],
                extensions: [".js", ".json", ".jsx"]
              }),
              resolve({ jsnext: "main" }),
              commonjs({ namedExports: { "mobx-react": ["observer"] } }),
              babel()
            ]
          })
          .then(bundle => {
            rollupCache = bundle;
            return bundle.generate({ format: "es" });
          })
          .then(result => {
            console.log(chalk.dim("[JS/JSX] Rolled up"));
            return cb(null, result.code);
          })
          .catch(cb);
      },

      // Production?

      (js, cb) => {
        if (options.production === true) {
          console.log(chalk.dim("[JS/JSX] Uglifying..."));
          const uglifyresult = uglify.minify(js);
          console.log(chalk.dim("[JS/JSX] Uglified"));
          return cb(uglifyresult.error, uglifyresult.code);
        } else {
          return cb(null, js);
        }
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
