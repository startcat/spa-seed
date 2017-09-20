/* @flow */

export default new class {
  start(value: ?string) {
    window.vendor.nprogress.start();
  }

  stop(value: ?string) {
    window.vendor.nprogress.done();
  }
}();
