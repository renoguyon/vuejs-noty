const path = require('path')
const baseConf = require('./webpack.base.conf');
const webpack = require('webpack')

module.exports = Object.assign({}, baseConf, {
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
  devtool: '#eval-source-map'
})
