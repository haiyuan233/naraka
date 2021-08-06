'use strict'
// 这个配置文件是webpack生产环境的核心配置文件

// 引入node.js的路径模块。
const path = require('path')
// 引入utils工具配置文件，只要用来处理css类文件的loader
const utils = require('./utils')
// 引入webpack，来使用webpack的内置插件
const webpack = require('webpack')
// 引入config的index.js配置文件，主要是用来定义了生产和开发环境的相关基础配置以及代理。
const config = require('../config')
// webpack的merge插件，主要是用来处理配置对象合并的，可以将一个大的配置对象分成几个晓得，合并，相同的项将被合并。
const merge = require('webpack-merge')
// 引入webpack.base.conf配置文件，用来处理不同类型文件的loader。
const baseWebpackConfig = require('./webpack.base.conf')
// copy-webpack-plugin使用复制文件或者文件夹到指定目录的
const CopyWebpackPlugin = require('copy-webpack-plugin')
// html-webpack-plugin是生成html文件的，可以设置模版。
const HtmlWebpackPlugin = require('html-webpack-plugin')
// extract-text-webpack-plugin是on过来将bundle中的css等文件产出单独的bundle文件的。
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// optimize-css-assets-webpack-plugin插件的作用是压缩css代码，还能去掉extract-text-webpack-plugin插件抽离文件产生的重复代码因为同一个css可能在多个模块中出现，所以会出现重复代码，换句话说这两个插件是两兄弟。
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
// uglifyjs-webpack-plugin是用来专门压缩js文件的。
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// const CleanWebpackPlugin=require('clean-webpack-plugin')//webpack2利用插件clean-webpack-plugin来清除dist文件夹中重复的文件---------先注释
// 引入config文件夹下prod.evn.js文件配置。
const env = require('../config/prod.env')

// 把当前的配置对象和基础的配置对象合并。
const webpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  module: {
    // 下面就是把utils配制好的处理各种各种css类型的配置拿过来，和dev一样，就是这里多设置了extract：true和usePost：true，都是自定义项，设置为true标识，生成独立文件以及使用postCss方式。
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true,
      usePostCSS: true
    })
  },
  // devtool开发工具，用来生成sourcemap方便调试。
  devtool: config.build.productionSourceMap ? config.build.devtool : false,
  performance: {
    hints: false
  },
  output: {
    // 打包后的文件放在dist文件夹下。
    path: config.build.assetsRoot,
    // 文件名称用static/js/[name].[chunkhash].js，其中name就是main，chunkhash就是模块的hash值，关于浏览器缓存的。
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    // chunkFilename是非入口模块文件，也就是说filename文件中引用了chunkFilename。
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    // 下面是利用DefinePlugin插件，定义process.env环境变量为env。
    new webpack.DefinePlugin({
      'process.env': env
    }),
    // UglifyJsPlugin插件是专门用来压缩js文件的。
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false,
          drop_debugger: true,
          drop_console: true // 清除console与debugger
        }
      },
      // 压缩后生成map文件。
      sourceMap: config.build.productionSourceMap,
      parallel: true,
      cache: true // 开启缓存减少compiled 时间
    }),
    // extract css into its own file
    // new ExtractTextPlugin({
    //   // 生成独立的css文件，下面是生成独立css文件的名称。
    //   filename: utils.assetsPath('css/[name].[contenthash].css'),
    //   // Setting the following option to `false` will not extract CSS from codesplit chunks.
    //   // Their CSS will instead be inserted dynamically with style-loader when the codesplit chunk has been loaded by webpack.
    //   // It's currently set to `true` because we are seeing that sourcemaps are included in the codesplit bundle as well when it's `false`,
    //   // increasing file size: https://github.com/vuejs-templates/webpack/issues/1110
    //   allChunks: true
    // }),
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    new MiniCssExtractPlugin({
      filename: utils.assetsPath('css/[name].css'),
      chunkFilename: utils.assetsPath('css/[name].[contenthash].css')
    }),
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    new OptimizeCSSPlugin({
      // 压缩css文件的和map文件（如果生成map文件的话）。
      cssProcessorOptions: config.build.productionSourceMap
        ? { safe: true, map: { inline: false } }
        : { safe: true }
    }),
    // generate dist index.html with correct asset hash for caching.
    // you can customize output by editing /index.html
    // see https://github.com/ampedandwired/html-webpack-plugin
    // 生成html文件
    new HtmlWebpackPlugin({
      filename: config.build.index,
      template: 'index.html',
      // favicon: 'favicon.ico',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      }
    }),
    // keep module.id stable when vendor modules does not change
    new webpack.HashedModuleIdsPlugin(),
    // enable scope hoisting
    new webpack.optimize.ModuleConcatenationPlugin(),
    // split vendor js into its own file
    // 把所有的依赖module文件加入到node_modules文件夹下。
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   minChunks (module) {
    //     // any required modules inside node_modules are extracted to vendor
    //     return (
    //       module.resource &&
    //       /\.js$/.test(module.resource) &&
    //       module.resource.indexOf(
    //         path.join(__dirname, '../node_modules')
    //       ) === 0
    //     )
    //   }
    // }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    // 把webpack的runtime代码和module manifest代码提取到manifest文件中，防止修改了代码但是没有修改第三方库文件导致第三方库文件也打包的问题。
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'manifest',
    //   minChunks: Infinity
    // }),
    // This instance extracts shared chunks from code splitted chunks and bundles them
    // in a separate chunk, similar to the vendor chunk
    // see: https://webpack.js.org/plugins/commons-chunk-plugin/#extra-async-commons-chunk
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'app',
    //   async: 'vendor-async',
    //   children: true,
    //   minChunks: 3
    // }),

    // copy custom static assets
    // 下面是复制文件的插件，我认为在这里并不是起到复制文件的作用，而是过滤掉打包过程中产生的以.开头的文件
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.build.assetsSubDirectory,
        ignore: ['.*']
      }
    ]),
    //清理插件
    // new CleanWebpackPlugin(
    //   ['dist/*',],　//匹配删除的文件
    //   {
    //       root: __dirname,       　　　　　　　　　　//根目录
    //       verbose:  true,        　　　　　　　　　　//开启在控制台输出信息
    //       dry:      false        　　　　　　　　　　//启用删除文件
    //   }
    // )
  ],
  optimization: {
    runtimeChunk: {
      name: 'manifest'
    },
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: config.build.productionSourceMap,
        uglifyOptions: {
          warnings: false
        }
      }),
      new OptimizeCSSPlugin({
        cssProcessorOptions: config.build.productionSourceMap
          ? { safe: true, map: { inline: false } }
          : { safe: true }
      })
    ],
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'initial',
          priority: -10
        }
      }
    }
  }
})

if (config.build.productionGzip) {
  // 开启Gzi压缩打包后的文件，老铁们知道这个为什么还能压缩吗？？，就跟你打包压缩包一样，把这个压缩包给浏览器，浏览器自动解压的
  // 你要知道，vue-cli默认将这个神奇的功能禁用掉的，理由是Surge 和 Netlify 静态主机默认帮你把上传的文件gzip了
  const CompressionWebpackPlugin = require('compression-webpack-plugin')

  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(// 这里是把js和css文件压缩
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

if (config.build.bundleAnalyzerReport) {
  // 打包编译后的文件打印出详细的文件信息，vue-cli默认把这个禁用了，个人觉得还是有点用的，可以自行配置
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
