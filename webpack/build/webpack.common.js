const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');

module.exports = {
    entry: {
      main: './src/index.js'
    },
    output: {
        publicPath: '/',

        // contenthash 与 hash 的区别： hash是本次打包所有文件统一的值
        // contenthash 根据内容生成的一个hash值， 代码不变时（如第三方代码），生成的hash值不变
        filename: '[name].[contenthash].js', 
        chunkFilename: '[name].chunk.[contenthash].js',
        path: path.resolve(__dirname, '../dist') // 以当前配置文件所在文件为标准
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new CleanWebpackPlugin(),

        new MiniCssExtractPlugin({
          filename: '[name].css',
          chunkFilename: '[name].chunk.css'
        }),
        
        // 定义后js中使用 $ 时无需再import
        new webpack.ProvidePlugin({
          $: 'jquery',

          // 定义 jquery的 trim 属性作为 $trim
          $trim: ['jquery', 'trim'] 
        })
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
            // use: ['style-loader', 'css-loader']
            use: [MiniCssExtractPlugin.loader, 'css-loader']
          },
          {
            test: /\.scss$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader', 'postcss-loader']
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