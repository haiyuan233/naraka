'use strict'
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'
// 判断拿生产环境的SourceMap还是编译环境下的SourceMap
const sourceMapEnabled = isProduction
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap

module.exports = {
  // 调用utils配置文件中的cssLoaders方法，用来返回配置好的css-loader和vue-style-loader
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled, // 这一句话表示如何生成map文
    extract: isProduction// 这一项是自定义配置项，设置为true表示生成单独样式文件
  }),
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
