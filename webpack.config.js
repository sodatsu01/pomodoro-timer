const path = require('path');

module.exports = {
  target: "electron-main",
  node: {
    __dirname: false,
    __filename: false
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        loaders: [ "style-loader", "css-loader" ]
      }
    ]
  },
  entry: {
    "main/main": "./src/main/main.js",
    "renderer/index": "./src/renderer/index.jsx"
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].js"
  },
  devtool: "source-map"
};
