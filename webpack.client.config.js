const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = function () {
  return {
    entry:  './src/client/index.js',
    output: {
      path: path.join(__dirname, 'dist'),
      publicPath: '/dist/',
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          enforce: 'pre',
          loader: 'eslint-loader',
          exclude: [/node_modules/, /production/]
        },
        {
          test: /\.jsx?$/,
          loader: 'babel-loader?sourceMap',
          exclude: [/node_modules/]
        },
        {
          test: /\.json$/,
          loader: 'json-loader'
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              { loader: 'css-loader', options: { importLoaders: 1 } },
              'postcss-loader'
            ]
          })
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('/css/style.css')
    ]
  }
}
