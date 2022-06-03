const commonConfig = require('./webpack.common')
const webpackMerge = require('webpack-merge')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")

const prodConfig = {
  mode: 'production',
  devtool: 'inline-cheap-module-source-map',
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
}

module.exports = webpackMerge.merge(prodConfig, commonConfig)