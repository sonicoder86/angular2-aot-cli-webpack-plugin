'use strict';

let commonRules = require('./rules.common');

module.exports = {
  rules: [
    {
      test: /\.ts$/,
      use: ['awesome-typescript-loader', 'angular2-template-loader']
    }
  ].concat(commonRules)
};
