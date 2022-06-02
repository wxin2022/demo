const commonConfig = require('./webpack.common')
const webpackMerge = require('webpack-merge')

const prodConfig = {
  mode: 'production',
  devtool: 'inline-cheap-module-source-map',
}

module.exports = webpackMerge.merge(prodConfig, commonConfig)