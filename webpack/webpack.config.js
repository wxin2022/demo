const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development', // production，| development 不会压缩打包后的代码
  // entry: './src/index.js',  // 下面也一样
  entry: {
    main: './src/index.js',
    sub: './src/test.js'
  },
  output: {
    publicPath: 'http://www.jscode.space',
    // filename: 'main.js',
    filename: '[name].[hash].js', // name 为 'main' & 'sub'
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|jpeg)$/,
        use: {
          // loader: 'file-loader',
          loader: 'url-loader',
          options: {
            name: '[name]—[hash].[ext]', // name 是原文件名， ext 是文件扩展名
            // outputPath: path.resolve(__dirname, 'dist/images')
            outputPath: '/images',
            limit: 102400 // 单位 B , 大于这个值 打包成 url, 否则打包成 base64
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,  // 注意 sass 与 scss

        // loader 的执行顺序： 从下到上（从右到左）， 不能混乱，
        // sass-loader 解析的值交给 css-loader， css-loader 解析后的值 再交给 style-loader
        use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new CleanWebpackPlugin()
  ]
}