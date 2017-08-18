/**
 * npm Script: Watch
 */

// Requires

const path = require("path");
const async = require("async");
const config = require("./config");
const assets = require("./lib/assets");
const styles = require("./lib/styles");
const javascript = require("./lib/javascript");
const chokidar = require("chokidar");
const chalk = require("chalk");
const express = require("express");
const http = require("http");
const reload = require("reload");
const fs = require("fs-extra");

// DEV Server

const app = express();
const reloadServer = reload(app);

app.use("^[^.]+$", function(req, res) {
  const indexHtml = fs
    .readFileSync(path.join(config.BUILD_FOLDER, "/index.html"))
    .toString()
    .replace("</head>", '<script src="/reload/reload.js"></script></head>');
  res.send(indexHtml);
});

app.use("/", express.static(config.BUILD_FOLDER));

http.createServer(app).listen(config.DEV_SERVER_PORT, () => {
  console.info(
    chalk.dim(
      "Static Server running on port " +
        config.DEV_SERVER_PORT +
        ": Folder: " +
        config.BUILD_FOLDER +
        "\n"
    )
  );

  console.log(chalk.inverse("Watching folders..."));

  async.parallel(
    {
      // Watch Assets

      assets: cb => {
        const watcher = chokidar.watch(config.ASSETS_FOLDER, {
          persistent: true
        });

        watcher.on("change", (path, stats) => {
          console.log(chalk.dim("Assets folder change detected!"));

          assets(
            {
              source: config.ASSETS_FOLDER,
              target: config.BUILD_FOLDER,
              production: false
            },
            () => {
              console.log(chalk.dim("Reloading dev server"));
              reloadServer.reload();
            }
          );
        });
      },

      // Watch Styles

      styles: cb => {
        const watcher = chokidar.watch(
          path.join(config.SRC_FOLDER, "/**/*.scss"),
          {
            persistent: true
          }
        );

        watcher.on("change", (path, stats) => {
          console.log(chalk.dim("Style change detected!"));
          styles(
            {
              source: config.APP_STYLES_ENTRY,
              target: config.APP_STYLES_TARGET,
              production: false
            },
            () => {
              console.log(chalk.dim("Reloading dev server"));
              reloadServer.reload();
            }
          );
        });
      },

      // Watch JS

      js: cb => {
        const watcher = chokidar.watch(
          path.join(config.SRC_FOLDER, "/**/*.{js,jsx}"),
          {
            persistent: true
          }
        );

        watcher.on("change", (path, stats) => {
          console.log(chalk.dim("JS/JSX change detected!"));
          javascript(
            {
              entry: config.APP_JS_ENTRY,
              target: config.APP_JS_TARGET,
              production: false
            },
            () => {
              console.log(chalk.dim("Reloading dev server"));
              reloadServer.reload();
            }
          );
        });
      }
    },
    err => {
      if (err) {
        console.error(chalk.red(err.message || err.toString()));
      }
    }
  );
});
