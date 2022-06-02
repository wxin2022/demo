const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: {
      main: './src/index.js'
    },
    output: {
        publicPath: '/',
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist') // 以当前配置文件所在文件为标准
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
          {
            test: /\.(jpg|png|jpeg)$/,
            use: {
              loader: 'url-loader',
              options: {
                name: '[name]—[hash].[ext]', // name 是原文件名， ext 是文件扩展名
                outputPath: 'images',
                limit: 102400 // 单位 B , 大于这个值 打包成 url, 否则打包成 base64
              }
            }
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          },
          {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader']
          },
          {
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env', {
                useBuiltIns: 'usage'
              }]]
            }
          }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all' // 使用 chunks 时 output filename 必须以占位符形式，不能为固定名字
        }
    }
}