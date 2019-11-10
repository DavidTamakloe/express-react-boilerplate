const merge = require("webpack-merge");
const common = require("./webpack.lib.js");

module.exports = merge(common, { mode: "production" });
