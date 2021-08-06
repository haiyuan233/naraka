'use strict'
// 此配置文件是vue开发环境的wepack相关配置文件，主要用来处理css-loader和vue-style-loader。

// 引入node.js路径模块。
const path = require('path')
// 引入config目录下的index.js配置文件。
const config = require('../config')
// 引入extract-text-webpack-plugin插件，用来将CSS提取到单独的CSS文件中。
// extract-text-webpack-plugin插件是用来将文本从bundle中提取到一个单独的文件中
// new ExtractTextPlugin("styles.css") //表示生成styles.css文件
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 引入package.json文件。
const packageConfig = require('../package.json')

// exports其实就是一个对象，用来导出方法的最终还是使用module.exports，此处导出assetsPath。
exports.assetsPath = function (_path) {
  // 判断是不是生产环境，如果是，那么assetsSubDirectory为static，不然还是static，哈哈哈哈嗝！
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory
  // path.join和path.posix.join区别是，前者返回完整的路径后者返回的是相对路径。
  // 即path.join返回的路径是D:/jiangP/html，path.posix.join返回的是/html
  return path.posix.join(assetsSubDirectory, _path)// 所以这个方法的作用就是返回一个干净的相对根路径
}

// 下面是导出cssLoaders的相关配置
exports.cssLoaders = function (options) {
  options = options || {}
  // cssLoader的基本配置
  const cssLoader = {
    loader: 'css-loader',
    options: {
      // options是用来传递参数给loader的
      // minimize表示压缩，如果是生产环境就压缩css代码
      // minimize: process.env.NODE_ENV === 'production',
      sourceMap: options.sourceMap // 是否开启cssmap，默认是false
    }
  }
  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  // generate loader string to be used with extract text plugin

  function generateLoaders (loader, loaderOptions) {
    // 判断是否用postCss,来将上面的cssLoader存放在一个数组里。
    const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader]
    // 如果该函数传递了单独的loader，就将其添加到loaders数组里面。这个loader可能是less，sass之类的。
    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    // 注意这个extrac是自定义属性，可以定义在options里面，主要作用是当配置为true就把vue-style-loader文件单独提取，
    // false表示不单独提取。这个可以在单独使用的时候单独配置。
    if (options.extract) {
      // return ExtractTextPlugin.extract({
      //   use: loaders, // 表示使用loaders从js读取css文件
      //   fallback: 'vue-style-loader', // fallback表示如果css文件没有成功导入就使用vue-style-loader导入
      //   publicPath: '../../'
      // })
      return [{
        loader: MiniCssExtractPlugin.loader,
        options: {publicPath:'../../'}
      }].concat(loaders)
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
    // 上面这段代码就是用来返回最终读取和导入loader，来处理对应类型的文件
  }
  // sass-resouces-loader 配置
  function generateSassResourceLoader () {
    var loaders = [
      cssLoader,

      'sass-loader',
      {
        loader: 'sass-resources-loader',
        options: {
          resources: [
            path.resolve(__dirname, '../src/component-styles/glob.scss')

          ]
        }
      }
    ]
    if (options.extract) {
      // return ExtractTextPlugin.extract({
      //   use: loaders,
      //   fallback: 'vue-style-loader'
      // })
      return [MiniCssExtractPlugin.loader].concat(loaders)
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(), // css对应 vue-style-loader 和 css-loader
    postcss: generateLoaders(), // postcss对应 vue-style-loader 和 css-loader
    less: generateLoaders('less'), // less对应 vue-style-loader 和 less-loader
    sass: generateSassResourceLoader(), // 替换原来的，下同
    scss: generateSassResourceLoader(),
    // sass: generateLoaders('sass', { indentedSyntax: true }), // sass对应 vue-style-loader 和 sass-loader
    // scss: generateLoaders('sass', {data: '@import "../src/style/glob.scss";'}), // sass对应 vue-style-loader 和 scss-loader

    // scss: generateLoaders('sass'), // sass对应 vue-style-loader 和 scss-loader
    stylus: generateLoaders('stylus'), // stylus对应 vue-style-loader 和 stylus-loader
    styl: generateLoaders('stylus')// styl对应 vue-style-loader 和 styl-loader
  }
}

// Generate loaders for standalone style files (outside of .vue)
// 下面这个主要处理import这种方式导入的文件类型的打包，上面的exports.cssLoaders是为这一步服务的
exports.styleLoaders = function (options) {
  const output = []
  // 下面就是生成的各种css文件的loader对象
  const loaders = exports.cssLoaders(options)

  for (const extension in loaders) {
    // 把每一种文件的laoder都提取出来
    const loader = loaders[extension]
    output.push({
      // 把最终的结果都push到output数组中，大事搞定
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }

  return output
}

exports.createNotifierCallback = () => {
  const notifier = require('node-notifier')

  return (severity, errors) => {
    if (severity !== 'error') return

    const error = errors[0]
    const filename = error.file && error.file.split('!').pop()

    notifier.notify({
      title: packageConfig.name,
      message: severity + ': ' + error.name,
      subtitle: filename || '',
      icon: path.join(__dirname, 'logo.png')
    })
  }
}
