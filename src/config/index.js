import _ from 'lodash'
import env from './env'
const config = { env: env }

if (env === 'dev') {
  _.extend(config, require('./dev'))
} else if (env === 'sit') {
  _.extend(config, require('./sit'))
} else if (env === 'uat') {
  _.extend(config, require('./uat'))
} else {
  _.extend(config, require('./prod'))
}

module.exports = config
