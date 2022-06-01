const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const config = require('./webpack.config.js')
const complier = webpack(config)

const app = new express()
app.use(webpackDevMiddleware(complier, {
    publicPath: config.output.publicPath
}))

app.listen(8888, () => {
    console.warn('my server is started')
})