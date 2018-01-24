const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  cache: true,

  devtool: 'source-map',

  entry: [
    path.resolve(__dirname, 'src/index.tsx'),
    path.resolve(__dirname, 'css/app.css'),
  ],

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: '[name].js',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'templates/index.html'),
    }),
  ],

  devServer: {
    overlay: true,
    port: 8000,
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: { emitErrors: true },
      },
      {
        test: /\.tsx?$/,
        use: [
          // 'source-map-loader',
          'awesome-typescript-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
        ],
      },
    ],
  },
};