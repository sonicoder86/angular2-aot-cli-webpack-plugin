'use strict';

let commonRules = require('./rules.common');

module.exports = {
  rules: [
    {
      test: /\.ts$/,
      use: ['@ultimate/aot-loader']
    }
  ].concat(commonRules)
};
