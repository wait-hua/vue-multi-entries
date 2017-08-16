var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

// vue-loader 里的style lang = scss 别名配置
var baseCss = "src/common";

var _config = {
  sourceMap: isProduction
    ? config.build.productionSourceMap
    : config.dev.cssSourceMap,
  extract: isProduction
}
if(!!baseCss){
  _config.scssAlis = baseCss;
}
module.exports = {
  loaders: utils.cssLoaders(_config)
}

