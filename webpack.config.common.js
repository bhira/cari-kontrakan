const { resolve, join } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    path: resolve(__dirname, 'build/'),
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: join(__dirname, 'public/index.html')
    }),
    new CopyPlugin([
      { from: './src/service-worker.js', to: './' },
      { from: './public/manifest.json', to: './manifest.json' },
      { from: './public/icon_144.png', to: './icon_144.png' },
      { from: './public/icon_192.png', to: './icon_192.png' }
    ])
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
}
