var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
// 雪碧图插件
var SpritesmithPlugin = require('webpack-spritesmith')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
// 入口js文件
var entries = utils.getMultiEntry('./src/'+config.moduleName+'/**/**.js');
// scss @import 别名配置
var baseCss = resolve('src/common');

module.exports = {
  // entry: {
  //   app: './src/main.js'
  // },
  entry: entries,
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  plugins: [
    // 自动生成雪碧图
    new SpritesmithPlugin({
      src: {
          cwd: resolve('src/assets/png2x/'),
          glob: '*.png'
      },
      target: {
          image: resolve('src/assets/sprites/sprite.png'),
          css: [[resolve('src/assets/sprites/sprite.css'), {
              format: 'handlebars_based_template'
          }]]
      },
      apiOptions:{
          cssImageRef: "./sprite.png"
      },
      retina:'@2x',
      spritesmithOptions: {
          cssSpritesheetName: 'i-icon',  //对应sprite.hbs里spritesheet_info.name
              algorithm: 'top-down',
              padding: 2, // 生成图片之间的间距

      },
      customTemplates: {
          'handlebars_based_template':resolve('build/sprite.hbs'),
          'handlebars_based_template_retina':resolve('build/sprite.hbs')
      }
    })
  ],
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'components': resolve('src/components'),
      'pages': resolve('src/pages')
    }
  },
  module: {
    rules: [
      // 去掉eslint校验，初始化工程的时候不要eslint
      // {
      //   test: /\.(js|vue)$/,
      //   loader: 'eslint-loader',
      //   enforce: 'pre',
      //   include: [resolve('src'), resolve('test')],
      //   options: {
      //     formatter: require('eslint-friendly-formatter')
      //   }
      // },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.(html|rgl)$/,
        loader: 'html-withimg-loader'
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      {
         test: /\.scss$/,
         loaders: ["style", "css", "sass?includePaths[]="+baseCss]
      }
    ]
  }
}
