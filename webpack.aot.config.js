'use strict';
let path = require('path');
let ultimate = require('@ultimate/aot-loader');

module.exports = {
  entry: require('./webpack/entry'),

  context: path.join(process.cwd(), 'src'),

  output: require('./webpack/output'),

  module: require('./webpack/module.aot'),

  plugins: require('./webpack/plugins').concat([
    new ultimate.AotPlugin({
      tsConfig: path.join(process.cwd(), 'tsconfig.json')
    })
  ]),

  resolve: require('./webpack/resolve'),

  devServer: require('./webpack/dev-server'),

  stats: 'errors-only',

  devtool: 'source-map'
};
