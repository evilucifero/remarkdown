'use strict';

var webpack = require('webpack');
var path = require('path');

module.exports = {
  devServer: {
    hot: true,
    inline: true,
    progress: true,
    contentBase: './demo',
    port: 3223
  },
  devtool: 'source-map',
  entry: {
    bundle: [path.resolve(__dirname, 'src/index.js')],
    app: path.resolve(__dirname, 'demo/app.js'),
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'demo'),
        ],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets:['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'style!css',
      }
    ]
  }
};
