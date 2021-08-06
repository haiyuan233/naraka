'use strict'
// 引入node.js的路径模块。
const path = require('path')
// 引入utils工具模块，该模块主要是用来处理css-loader和style-loader的。
const utils = require('./utils')
// 引入config文件夹下的index.js文件配置，主要是用来定义一些开发环境和生产环境的属性。
const config = require('../config')
//
const vueLoaderConfig = require('./vue-loader.conf')
// 次函数是用来返回当前目录的平行目录的路径，因为有个'..'。
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre', // 保险起见，建议单独给esline-loader指定pre值
  include: [resolve('src'), resolve('test')], // 指定哪些目录的js和vue文件使用eslint-loader
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: !config.dev.showEslintErrorsInOverlay
  }
})

module.exports = {
  // mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  // 上下文是查找入口文件的基本目录，是一个绝对值，所以要用到path.resolve
  // 如果不设，默认为当前目录
  // 与命令行中的 webpack --context是一样的
  // 最后入口文件是 context+entry,
  // 可以写成./today/wang[前加./],./today/wang/[后加/]，不能写成/today/wang，如果../表示在当前目录再往上一层
  // context 除了这里的入口文件用到，象很多loader,plugin都会要用到这个值
  context: path.resolve(__dirname, '../'),
  // entry可以为字符串|对象|数组三种形式
  // 字符串，适合spa,也就是单页网页，如手机网页
  // 下面这个entry最终的位置是 项目根目录/today/wang/app/entry.js
  // 前面./不能少，后面的.js可以省略，也可以写
  // 以下演示三种entry，实际中取一种就行
  // entry: "./app/entry", // string | object | array
  // // 数组
  // entry: ["./home.js","./about.js","./contact.js"],
  // // 对象，适合于多入口网站，也就是mpa，对象格式的每个键，如home,about,contact是每个入口文件chunk的名字，字符串和数组没有键，它也有一个chunk，名字默认为main
  // entry: {
  //   home: "./home.js",
  //   about: "./about.js",
  //   contact: "./contact.js"
  // },
  entry: {
    app: './src/main.js'
  // //   // app: path.resolve('./src/main.js')
  // //   // app: ['babel-polyfill', './src/main.js']
  // //   app: ['@babel/polyfill', './src/main.js']
  },
  // entry: ['@babel/polyfill', './src/main.js'],
  // 下面是定义了打包后的路径和js文件名称。
  output: {
    // 路径是dist目录。
    path: config.build.assetsRoot,
    // 文件名就是使用默认的name，也就是main。
    filename: '[name].js',
    // 上线地址，也就是真正文件的引用路径，如果是生产环境下，其实都是'/'。
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    // resolve是webpack的内置选项，比如当使用import "jquery",该如何执行这件事情就是resolve配置项要去做的。import jQuery from "./js/jquery"这样会很麻烦，可以起个别名简化操作。
    extensions: ['.js', '.vue', '.json'], // 省略扩展名，也就是说以 .js, .vue, .json后缀的文件倒入可以省略后缀名，这会覆盖默认的配置，所以要省略的扩展名需要在这里写上。
    alias: {
      // 后面的$符号指的是精确匹配，也就是说只能使用 import vuejs from "vue"这样的方式导入vue.esm.js文件，不能在后面跟上vue/vue.js。
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  // module是用来解析不同的模块。
  module: {
    rules: [
      ...(config.dev.useEslint ? [createLintingRule()] : []),
      {
        test: /\.vue$/,
        // 对vue文件使用vue-loader，该loader是vue单文件组件的实现核心，专门用来解析.vue文件的。
        loader: 'vue-loader',
        // 将vueLoaderConfig当做参数传递给vue-loader,就可以解析文件中的css相关文件.
        options: vueLoaderConfig// loader的可选项
      },
      // {
      //   test: /\.(vue|js)$/,
      //   loader: 'eslint-loader',
      //   exclude: /node_modules/,
      //   enforce: 'pre'
      // },
      {
        test: /\.js$/,
        // 对js文件使用babel-loader转码,该插件是用来解析es6等代码
        loader: 'babel-loader',
        // 指明src和test目录下的js文件要使用该loadery，以及其他的文件。
        // exclude: /node_modules/,
        include: [
          resolve('src'),
          // resolve('test'),
          resolve('node_modules/@supermap'),
          resolve('node_modules/vue-awesome-swiper'),
          resolve('node_modules/element-ui/packages'),
          resolve('node_modules/element-ui/src'),
          resolve('node_modules/elasticsearch')
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        // 对图片动画进行处理。对图片相关的文件使用url-loader插件，这个插件的作用是将一个足够晓得文件生成一个64位的dataURL。
        // 当一个图片足够小，为了避免单独请求可以把图片的二进制代码转换为64位的，DataURL，使用src加载，也就是把图片当成一段代码，避免请求。
        loader: 'url-loader',
        options: {
          // 限制10000个字节以下的图片才使用DataURL。
          limit: 10000,
          // 大于10000byte的，按[name].[hash:7].[ext]的命名方式放到了static/img下面，方便做cache
          // 因为项目中会有动态引入而无法提前通过loader加载的图片，会如楼主后面说的，用CopyWebpackPlugin放到dist目录下。
          // 所以最后build完的图片资源就是两部分：一部分是dev下的整个图片文件夹（被复制了一份），另外的就是经过url-loader处理过的dist/img下的，带hash的图片。
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        // 对视频进行处理。同上。
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        // 对字体文件处理。
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
