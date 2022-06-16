class CopyrightWebpackPlugin {
    constructor() {
        console.log('使用自定义插件')
    }

    /**
     * webpack 会调用此方法
     */
    apply(compiler) {
        // compiler.hooks 可获取打包各个生命周期

        // 异步调用
        compiler.hooks.emit.tapAsync('CopyrightWebpackPlugin', (compilation, callback) => {
            compilation.assets['copyright.txt'] = {
                source: function() {
                    return 'this is custom file'
                },
                size: function() {
                    return 20
                }
            }
            callback()
        })

        // 同步调用
        compiler.hooks.compile.tap('CopyrightWebpackPlugin', () => {
            // todo
        })
    }
}

module.exports = CopyrightWebpackPlugin