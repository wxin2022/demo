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

# 使用 babel preset-env
+ ?. 语法在 edge 不支持

1. npm install babel-loader @babel/core --save-dev

2. rules => .js$  使用 babel-loader

+ . npm install @babel/preset-env --save-dev // 语法解析
  加到 loader options 

+ . npm install @babel/polyfill --save-dev // 语法补充
  // 基本高版本的webpack不再需要在业务代码引入 polyfill 内容
  npm install core-js@2 --save
  **特别地：使用 @babel/preset-env 时加上 useBuiltIns usage**

```js
options: {
  presets: [['@babel/preset-env', {
    // 加上 usage 可时 babel/polyfill 只添加业务代码里面存在的语法，减小打包体积
    useBuiltIns: 'usage'
  }]]
}
```  

# 使用 babel plugin 
1. npm install --save-dev @babel/plugin-transform-runtime
   npm install --save @babel/runtime-corejs2
    npm install --save core-js@2
2. loader options, 添加 plugin

3. 使用plugin 方式，业务代码不需要 import @babel/polyfill

```js
options: {
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "absoluteRuntime": false,
        "corejs": 2,
        "helpers": true,
        "regenerator": true,
        "useESModules": true,
      }
    ]
  ]
}
```

# 注意： webpack5 loader的 exclude 只能为 正则表达式

# tree shaking 
  只支持 es module 模块引入，不打包没有import的
```js
optimization: {
  usedExports: true
},

package.json:
"sideEffects": false, // "sideEffects": ['*.css']
```
+ production 模式下默认配置了 tree shaking

# code splitting
+ 对代码进行拆分，提高加载速度（浏览器可以同时并行加载多个文件）
+ 使用 chunks 时 output filename 必须以占位符形式，不能为固定名字
```js
optimization: {
    splitChunks: {
        chunks: 'all' // async 只分割同步代码
    }
}
```

 Multiple chunks emit assets to the same filename main.js 表示打包生成了多个文件，名字但是只有一个，所以要将output 输出的名字定义成占位符形式

 + 动态使用 import 时，如果语法不支持时可使用插件 @babel/plugin-syntax-dynamic-import

 ```js
{
  chunks: 'async', // all  async
  minSize: 20000, // 模块达到这个大小才分割
  minRemainingSize: 0,
  minChunks: 1, // 使用 次数 达到才分割
  maxAsyncRequests: 30, // 
  maxInitialRequests: 30,
  enforceSizeThreshold: 50000,
  cacheGroups: {
    defaultVendors: {
      test: /[\\/]node_modules[\\/]/,
      priority: -10, // 与下面配置的相比较，优先级
      reuseExistingChunk: true,
    },
    default: {
      minChunks: 2,
      priority: -20,
      reuseExistingChunk: true,
    },
}
 ```

 # webpackPrefetch 与 webpackPreload
 + preload 是与主资源同时价值， prefetch 是主资源加载好之后才加载
 ```
  // 等待主资源以及网络带宽加载释放后才加载， 推荐使用
  const { default: $ } = await import(/* webpackPrefetch: true */ 'jquery')
  const num = Math.random()
  return { $, num }
 ```

# chunkFilename 与 filename
+ 通过entry 入口打包的使用 filename,  第三方依赖等使用 chunkFilename


 # css 代码分割
css 文件默认是打包进js
1. npm install mini-css-extract-plugin --save-dev
2. 引入 plugin
3. 将 style-loader 替换为 (mini-css-extract-plugin).loader
4. 使用 tree sh 时 ，package.json  sideEffects 需要添加排除文件
```js
sideEffects: ["*.css", "*.scss"]
```

# 压缩css
1. npm install css-minimizer-webpack-plugin -D
```js
 optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin(),
    ],
  },
```

# contenthash 与 hash 的区别：
+ hash是本次打包所有文件统一的值
+ contenthash 根据内容生成的一个hash值， 代码不变时（如第三方代码），生成的hash值不变

# shimming

```js
// 定义后js中使用 $ 时无需再import
new webpack.ProvidePlugin({
  $: 'jquery',

  // 定义 jquery的 trim 属性作为 $trim
  $trim: ['jquery', 'trim'] 
})
```

### 模块中的 this 默认为 undefined
+ 改变模块中的 this， 可使用 import-loader 
在js 的loader 中添加如下代码，可实现将 this 指向 window对象
```
loader: imports-loader?this=>window
```

# 使用 -- 可以为 npm scripts 拼接额外的内容. 注意 -- 后面的空格
+ 例： npm run dev -- --open // 相当于在script 后面追加内容 --open


# 打包 library
+ 打包库文件需要解决的是不同引用方式均可使用该库
```js
import xx from 'xx' // ES

const xx = require('xx')  // comm js

require(['xx'], function() {

})

<script scr="xx.js"></srcipt>
xx.funs()
```
1. 配置 output => libraryTarget: 'umd' 实现通用的模块引入
2. 配置 output => library: 'xx' 实现通过script标签，引入作为全局变量， xx 是全局变量名

+ libraryTarget = 'window' 并且 library: 'xx' 通过 script标签引入后显示 将 xx 挂载到 window对象中

+ externals: 'jquery',  可忽略打包时的第三方模块

# 提交至 npm 仓库
1. 注册账号
2. npm login
3. npm publish
4. npm install （package.json 中 name 属性 为 npm install 安装时的包名（不能与npm现有重复））

# PWA (progressive web application)
+ 断网情况下可以通过缓存访问

1. npm install workbox-webpack-plugin --save-dev

2. webpack plugin
  new WorkboxPlugin.GenerateSW({
    clientsClaim: true,
    skipWaiting: true
  })

3. 业务代码编辑
```js
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorder.register('service-worker.js')
    .then(r => {
      console.log('pwa 启动')
    })
    .catch( err => {
      console.log('pwa启动失败', err)
    })
  })
}
```
* npm install http-server -D 
* script => http-server dist or  npx http-server dist

# TypeScript 打包
1. npm install ts-loader typescript --save-dev
2. 使用loader
```js
rules: [
  {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /(node_modules)/
  }
]
```
3. 创建tsconfig.json
```json
{
  "compilerOpitons": {
    "module": "es6", // 模块引入方式
    "target": "es5", // 生成es5语法
    "allowJs": true, // 允许js
  }
}
```

# 在 ts 中引入第三方库
* 如使用 jquery 需要安装 该库的 ts 代码解析 依赖才能正常提示错误
  npm install @types/jquery --save-dev
* 引入库时需要使用 as
  import * as jquery from 'jquery'









