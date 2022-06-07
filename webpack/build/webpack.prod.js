const commonConfig = require('./webpack.common')
const webpackMerge = require('webpack-merge')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const WorkboxWebpackPlugin = require("workbox-webpack-plugin")
console.log(WorkboxWebpackPlugin)
const prodConfig = {
  mode: 'production',
  devtool: 'inline-cheap-module-source-map',
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new WorkboxWebpackPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true
    })
  ]
}

module.exports = webpackMerge.merge(prodConfig, commonConfig)