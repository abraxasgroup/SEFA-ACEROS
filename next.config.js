// next.config.js
const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isProd ? '/SEFA-ACEROS' : '',
  assetPrefix: isProd ? '/SEFA-ACEROS/' : '',
  images: { unoptimized: true },
  trailingSlash: true,
};

module.exports = nextConfig;
