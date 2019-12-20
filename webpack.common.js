const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDevelopment =
  process.env.NODE_ENV === 'development' ||
  process.env.NODE_ENV === 'undefined' ||
  false;

const PATH = {
  SRC: path.join(__dirname, '/src'),
  DIST: path.join(__dirname, '/dist')
};

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    main: path.join(PATH.SRC, 'index.tsx')
  },
  output: {
    path: PATH.DIST,
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isDevelopment,
              reloadAll: isDevelopment
            }
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader',
        options: { name: 'img/[name].[ext]' }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
};
