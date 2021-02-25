
// const proxy = {}

const path = require('path')
const resove = dir => path.join(__dirname, dir)
module.exports = {
  chainWebpack: config => {
    /**
    * 别名设置
    */
    config.resolve.alias
      .set('@c', resove('src/components'))
      .set('@const', resove('src/constant'))
      .set('@u', resove('src/utils'))
      .set('@Env', resove('env'))

    /**
     * 全局scss变量
     */
    config.module
      .rule('scss')
      .oneOf('vue')
      .use('sass-loader')
      .options({
        prependData: `@import "@/assets/scss/index.scss";`
      })
      .end()
  }
}