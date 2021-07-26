const webpackMerge = require("webpack-merge");
const base = require("./webpack.base");

module.exports = function() {
  return webpackMerge.merge(base.config, {
    mode: "development",
    output: {
      filename: "[name]-dev.js",
      library: {
        name: "orda-integer",
        type: "umd"
      },
      globalObject: "this",
      publicPath: "/"
    },
    devtool: "source-map"
  });
};
