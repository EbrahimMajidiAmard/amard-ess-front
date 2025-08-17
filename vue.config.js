const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/',
  devServer: {
    port: 3000,
  }
})

// const { defineConfig } = require('@vue/cli-service')
// const fs = require('fs')

// module.exports = defineConfig({
//   transpileDependencies: true,
//   publicPath: '/',
//   devServer: {
//     port: 3001,
//     https: {
//       key: fs.readFileSync('./localhost-key.pem'),
//       cert: fs.readFileSync('./localhost.pem'),
//     },
//     open: true,
//   }
// })
