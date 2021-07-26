const base = require("./webpack.base");
const webpackMerge = require("webpack-merge");
const terser = require("terser-webpack-plugin");

module.exports = function() {
  return webpackMerge.merge(base.config, {
    mode: "production",
    output: {
      filename: "[name].js",
      library: {
        name: "orda-integer",
        type: "umd"
      },
      globalObject: "this",
      publicPath: "/"
    },
    devtool: "source-map",
    module: {},
    optimization: {
      minimize: true,
      minimizer: [
        new terser({
          terserOptions: {
            compress: {
              drop_console: true
            }
          },
          extractComments: true,
          parallel: true
        })
      ]
    }
  });
};
