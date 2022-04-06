const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    host: 'localhost',
    port: 3030,
    hot: true,
    inline: true,
    historyApiFallback: true,
  },
})
