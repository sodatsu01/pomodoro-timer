const path = require('path')
const webpack = require('webpack')

const externalPlugins = new webpack.ExternalsPlugin('common.js', [
  'app',
  'auto-updater',
  'browser-window'
])

module.exports = {
  entry: {
    index: path.join(__dirname, 'src', 'index.js'),
  },
  output: {
    path: path.join(__dirname, 'out'),
    filename: '[name].js'
  },
  devtool: 'cheap-module-eval-source-map',
  target: 'node',
  module: {
    rules: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins: [
    externalPlugins
  ]
}
