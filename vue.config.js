const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "^/api": {
        target: "http://ndpt.dahami.com/",
        changeOrigin: true
      }
    }
  }
})
