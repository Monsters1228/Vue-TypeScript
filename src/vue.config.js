module.exports = {
  outputDir: 'dist',
  configureWebpack: { // 开启生成调试代码
    devtool: 'source-map'
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  // 开发服务器配置
  devServer: {
    port: 8081,
    proxy: {
      '^/api': {
        target: 'http://localhost:8080/',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
