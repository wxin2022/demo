const path = require('path')
const commonConfig = require('./webpack.common')
const webpackMerge = require('webpack-merge')

const devConfig = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    hot: true,
  },
  optimization: {
    usedExports: true // tree s
  }
}

module.exports = webpackMerge.merge(devConfig, commonConfig)