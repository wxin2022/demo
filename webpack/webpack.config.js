const path = require('path')

module.exports = {
  mode: 'production', // development 不会压缩打包后的代码
  entry: './index.js',
  output: {
    filename: 'boudle.js',
    path: path.resolve(__dirname, 'build')
  }
}