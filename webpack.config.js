const webpack = require('webpack')

module.exports = {
  entry: ['@babel/polyfill', './index.js'],
  output: {
    path: __dirname + '/public',
    filename: './app.js'
  },
  devServer: {
    port: 8080,
    contentBase: './public'
  },
  module: {
    rules: [{
      test: /.jsx?$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      exclude: '/node_modules/'
    }]
  }
}
