const path = require('path');
const withTypescript = require('@zeit/next-typescript');

const { BACKEND_URL } = require('./config/client');

exports = module.exports = withTypescript({
  assetPrefix: BACKEND_URL
});
