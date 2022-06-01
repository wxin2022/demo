# 注意
### 打包时要带上 当前路径
npx webpack ./index.js

(() => { console.log('代码')})()


webpack是什么
  基于node环境的模块打包工具， 把多个模块打包到一起

## commonJS 语法
导出： module.exports = Header
导入： let Header = require('./header.js')

# 打包

webpack 以前只能打包js文件，现在webpack 打包的不止js,  可以是任何内容


# 安装

npm install webpack webpack-cli

# 查看当前项目安装的版本号
npx webpack -v


webpack 默认的配置文件名为 webpack.config.js
如果文件名不是这个，可使用 npx webpack  configFileName 进行打包

# loader 是什么
对某中特定文件的打包方案


# file-loader 与 url-loader
file-loader 打包的是文件地址，url-loader 打包可实现 大于某个大小时使用文件地址，否则打包成 base64

# 打包样式，style-loader css-loader  --save-dev

# 使用插件

npm install html-webpack-plugin --save-dev
作用：打包结束后自动生成一个html文件，并把打包后的js文件自动引入到html中

npm install clean-webpack-plugin --save-dev
作用：打包时先清理 dist目录下所有内容， 
使用方式： const { CleanWebpackPlugin } = require('clean-webpack-plugin')

# 常用配置项
1. entry  => main , sub 
   output: => filename: '[name].js'

2. publicPath  打包后的js配置统一前缀