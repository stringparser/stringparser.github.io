const withCSS = require('@zeit/next-css');
const withTypescript = require('@zeit/next-typescript');

exports = module.exports = withCSS(withTypescript());
