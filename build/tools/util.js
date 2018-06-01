/*
 Created by zhihao_su on 2018/5/29.
*/
const chalk = require('chalk')
const fs = require('fs')
const os = require('os')
const cdn = require('../../config/cdn-settings')

const generateEvnFile = function (env) {
  console.log(chalk.blue('Environment: ' + env))
  console.log(chalk.blue('Write file src/config/env.js ...'))
  fs.writeFileSync('src/config/env.js', 'export default \'' + env + '\'' + os.EOL)
  console.log(chalk.blue('Write file src/styles/_env.scss ...'))
  fs.writeFileSync('src/styles/_env.scss', '$env: \'' + env + '\';' + os.EOL)
}

const getPublicPath = function (env) {
  return cdn[env].publicPath
}

function getIPAddress() {
  let interfaces = os.networkInterfaces()
  for (let i in interfaces) {
    let iface = interfaces[i]
    for (let i = 0; i < iface.length; i++) {
      let alias = iface[i]
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        return alias.address
      }
    }
  }
}

module.exports = {
  generateEvnFile: generateEvnFile,
  getPublicPath: getPublicPath,
  getIPAddress: getIPAddress
}
