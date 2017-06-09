const path = require('path')
const baseConf = require('./webpack.base.conf');
const webpack = require('webpack')
const merge = require('webpack-merge')

module.exports = merge(baseConf, {
  entry: './dev/index.js',
  output: {
    path: path.resolve(__dirname, '../dev'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: '#eval-source-map',
  module: {
    rules: [
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      }
    ]
  },
})
