'use strict';

let commonRules = require('./rules.common');

module.exports = {
  rules: [
    {
      test: /\.ts$/,
      use: ['@ngtools/webpack']
      // use: ['@ultimate/aot-loader']
    }
  ].concat(commonRules)
};
