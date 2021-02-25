
// 环境配置
// const nodeEnv = process.env.NODE_ENV || 'production'
// const env = require(`./${nodeEnv}`)

// 全局配置
const global = {
  // 项目版本号
  version: '0.0.1',
  // px2Rem画稿配置，单位为画稿宽度
  remUnit: 750,
  NODE_ENV: nodeEnv
}

module.exports = Object.assign(global)
