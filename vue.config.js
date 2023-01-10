// const { defineConfig } = require('@vue/cli-service')

const webpack = require('webpack')

module.exports = {
  // devServer: {
  //   proxy: 'http://127.0.0.1:8081'
  // },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8081', // 请求的服务器地址
        pathRewrite: { '^/api': '' } // 可以让发过去的请求不带/api打头
      }
    }
  },
  publicPath: '',

  transpileDependencies: [
    'vuetify'
  ],

  // 配置插件参数

  configureWebpack: {

    plugins: [

      // 配置 jQuery 插件的参数

      new webpack.ProvidePlugin({

        $: 'jquery',

        jQuery: 'jquery',

        'window.jQuery': 'jquery',

        Popper: ['popper.js', 'default']

      })

    ]

  }

}
