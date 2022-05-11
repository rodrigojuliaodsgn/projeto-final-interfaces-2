const path = require("path");

// https://webpack.js.org/configuration/
module.exports = {
  entry: {
    main: path.join(__dirname, "_webpack", "main"),
  },
  output: {
    path: path.resolve(__dirname, "assets/js"),
    filename: "[name]-bundle.js",
  },
  resolve: {
    extensions: [".json", ".js", ".jsx"],
    modules: ["node_modules"],
  },
  optimization: {
    minimize: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
        },
      },
    ],
  },
};
