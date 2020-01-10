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
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  },
  entry: {
    "main/main": "./src/main/main.js",
    "renderer/index": "./src/renderer/index.jsx"
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].js",
    publicPath: 'http://localhost:8080/dist/'
  },
  devtool: "source-map"
};
