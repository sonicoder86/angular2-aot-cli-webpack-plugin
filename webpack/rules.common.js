'use strict';

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
  {
    test: /\.pug$/,
    loaders: ['apply-loader', 'pug-loader']
  },
  {
    test: /\.sass$/,
    include: path.resolve(process.cwd(), 'src', 'app'),
    loaders: ['to-string-loader', 'css-loader', 'sass-loader']
  },
  {
    test: /\.css$/,
    exclude: path.resolve(process.cwd(), 'src', 'app'),
    loader: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: 'css-loader'
    })
  }
];
