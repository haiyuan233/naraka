'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.
// path是node.js的路径模块，用来处理路径统一的问题
const path = require('path')

module.exports = {
  dev: {
    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    // vue-cli使用这个功能是借助http-proxy-middleware插件，一般解决跨域请求api
    //     服务名称服务地址
    proxyTable: {
      '/api': {
        // target: 'http://192.168.3.154:81',
        target: 'http://localhost:3000/api/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/api_data/**': {
        // target: 'http://10.18.221.67:8680/ais/v3',
        // target: 'http://39.99.238.205:8089',
        // target: 'http://39.99.181.228:8089',
        target: 'http://192.168.8.50:8081',
        changeOrigin: true,
        pathRewrite: {
          '^/api_data': '/'
        }
      },
      '/postwoman/**': {
        target: 'https://www.baidu.com',
        // changeOrigin: true, // 指示是否跨域
        pathRewrite: {
          '^/postwoman': '/'
        }
      },
      '/video/**': {
        target: 'https://10.18.221.151:8712', // 开发环境
        // changeOrigin: true, // 指示是否跨域
        pathRewrite: {
          '^/video': '/'
        }
      },
      '/apiSystem/**': {
        target: 'http://localhost:8088', // 开发环境
        // changeOrigin: true, // 指示是否跨域
        pathRewrite: {
          '^/apiSystem': '/'
        }
      }
    },

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    // host: '10.16.6.122', // can be overwritten by process.env.HOST
    port: 8088, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false, // 是否编译完成后打开浏览器。
    errorOverlay: true, // 是否展示错误。
    notifyOnErrors: true, // 是否提示错误。
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map', // eval-source-map

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: false,

    cssSourceMap: true
  },
  // 下面是build也就是生产编译环境下的一些配置
  build: {
    // Template for index.html
    // 下面是相对路径的拼接，假如当前跟目录是config，那么下面配置的index属性的属性值就是dist/index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    // 下面定义的是静态资源的根目录 也就是dist目录
    assetsRoot: path.resolve(__dirname, '../dist'),
    // 下面定义的是静态资源根目录的子目录static，也就是dist目录下面的static
    assetsSubDirectory: 'static',
    // 下面定义的是静态资源的公开路径，也就是真正的引用路径
    assetsPublicPath: './',

    /**
     * Source Maps
     */
    // 下面定义是否生成生产环境的sourcmap，sourcmap是用来debug编译后文件的，通过映射到编译前文件来实现
    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    // 下面是是否在生产环境中压缩代码，如果要压缩必须安装compression-webpack-plugin
    productionGzip: false,
    // 下面定义要压缩哪些类型的文件
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    // 下面是用来开启编译完成后的报告，可以通过设置值为true和false来开启或关闭
    // 下面的process.env.npm_config_report表示定义的一个npm_config_report环境变量，可以自行设置
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
