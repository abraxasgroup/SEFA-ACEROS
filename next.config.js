/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  basePath: isProd ? '/SEFA-ACEROS' : '',
  assetPrefix: isProd ? '/SEFA-ACEROS/' : '',
  trailingSlash: true
};
