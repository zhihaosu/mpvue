require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var util = require('./tools/util')
var env = 'dev'
if (process.argv.length >= 3) {
  env = process.argv[2]
}
util.generateEvnFile(env)

var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var portfinder = require('portfinder')
var webpackConfig = require('./webpack.dev.conf')

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = port
  portfinder.getPortPromise()
    .then(newPort => {
      if (port !== newPort) {
        console.log(`${port}端口被占用，开启新端口${newPort}`)
      }
      var app = express()
      webpackConfig.output.publicPath = 'http://' + util.getIPAddress() + ':' + newPort + '/'
      var compiler = webpack(webpackConfig)


// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
      var proxyTable = config.dev.proxyTable
// proxy api requests
      Object.keys(proxyTable).forEach(function (context) {
        var options = proxyTable[context]
        if (typeof options === 'string') {
          options = {target: options}
        }
        app.use(proxyMiddleware(options.filter || context, options))
      })

// handle fallback for HTML5 history API
      app.use(require('connect-history-api-fallback')())

// serve pure static assets
// var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
// app.use(staticPath, express.static('./static'))
      app.use('/', express.static('./'))


      // for 小程序的文件保存机制
      app.use(require('webpack-dev-middleware-hard-disk')(compiler, {
        publicPath: webpackConfig.output.publicPath,
        quiet: true
      }))
      var server = app.listen(newPort, function (err) {
        if (err) {
          throw err
        }
        console.log(`Listening at http://localhost:${newPort}/`) // eslint-disable-line
      })
      resolve({
        ready: readyPromise,
        close: () => {
          server.close()
        }
      })
    }).catch(error => {
    console.log('没有找到空闲端口，请打开任务管理器杀死进程端口再试', error)
  })
})
