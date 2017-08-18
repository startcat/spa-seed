/**
 * npm Scripts Config
 */

// Requires

const path = require("path");

// Private

const SRC_FOLDER = path.join(__dirname, "../src");
const BUILD_FOLDER = path.join(__dirname, "../build");

// Config

module.exports = {
  // Folders

  SRC_FOLDER: SRC_FOLDER,
  BUILD_FOLDER: BUILD_FOLDER,

  // Assets

  ASSETS_FOLDER: path.join(SRC_FOLDER, "/assets"),

  // Styles (App)

  APP_STYLES_ENTRY: path.join(SRC_FOLDER, "/styles/app.scss"),
  APP_STYLES_TARGET: path.join(BUILD_FOLDER, "/app.css"),

  // Javascript (App)

  APP_JS_ENTRY: path.join(SRC_FOLDER, "app.jsx"),
  APP_JS_TARGET: path.join(BUILD_FOLDER, "/app.js"),

  // DEV Server
  DEV_SERVER_PORT: 8080
};
