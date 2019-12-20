const merge = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');

const PATH = {
  SRC: path.join(__dirname, '/src')
};

module.exports = merge(common, {
  devtool: 'source-map',
  devServer: {
    compress: true,
    hot: true,
    https: false,
    open: true,
    port: process.env.PORT || 3000,
    overlay: {
      warnings: true,
      errors: true
    },
    stats: {
      colors: true
    },
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${PATH.SRC}/index.html`
    })
  ]
});
