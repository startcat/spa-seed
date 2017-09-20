// External Vendor Files

window.vendor = {};

// #include "node_modules/particlesjs/dist/particles.js"

window.vendor.particles = window.Particles;
delete window.Particles;

// #include "node_modules/nprogress/nprogress.js"

window.vendor.nprogress = window.NProgress;
delete window.NProgress;
window.vendor.nprogress.configure({ showSpinner: false });
