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
  