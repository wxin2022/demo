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

# sourceMap
+ 打包文件与源文件的一种映射关系, 出错时友好显示
+ inline-source-map 与 source-map 的差别：inline将source-map文件直接打包到main.js文件底部，而普通的source-map会单独打包为一个文件

+ 普通的source-map定位错误时会有行和列，比较耗费性能，带cheap的source-map 打包后定位错误只有行，性能更好

+ 带 module: 处理本身业务代码外，还关联第三方的代码source-map

+ 带 eval: 打包速度最快，实现是通过 js eval方法形式 定位错误

## 选择哪中 source-map
+ 开发环境推荐： cheap-module-evel-source-map
+ 生产环境推荐： cheap-module-source-map

# devServer, 区分 4 和 5版本
  4 一般以 contentBase 指定项目的跟路径所在文件夹
  5 自动以打包后的文件夹作为项目根路径，可通过static 属性添加 public文件
1. npm install webpack-dev-server -D
2. script 命令添加，  dev: webpack-dev-server
3. 执行 npm run dev

# 通过 middleware 创建devServer
1. npm install express webpack-dev-middleware -D
2. 编写 myserver.js
3. 启动 node myserver.js

# 使用 HMR
+ devServer => hot: true
+ output => publicPath: '/'
+ 不能使用多个entry 文件 (？)
**weapck4需要new webpack.HotModuleReplacement插件，5不需要**


