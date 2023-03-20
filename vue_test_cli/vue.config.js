const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, /*关闭语法检查*/
  // pages: {
  //   index: {
  //     entry: 'src/test.js'
  //   }
  // }
  devServer: {
    proxy: {
      '/atguigu': {
        target: 'http://localhost:5002',
        pathRewrite: { '^/atguigu': '' },
        // ws: true, //用于支持websocket
        // changeOrigin: true //用于控制请求头中的host值
      },
      '/demo': {
        target: 'http://localhost:5001',
        pathRewrite: { '^/demo': '' },
        // ws: true, //用于支持websocket
        // changeOrigin: true //用于控制请求头中的host值
      }
    }
  }
})
