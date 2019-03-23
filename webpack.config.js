const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const config = {
  entry: {
    index: path.resolve(__dirname, 'src/js/app.js')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
}

module.exports = (env, argv) => {
  const isPrd = argv.mode === 'production'

  return {
    devtool: isPrd ? 'source-map' : 'inline-source-map',
    mode: isPrd ? 'production' : 'development',
    ...config
  }
}
