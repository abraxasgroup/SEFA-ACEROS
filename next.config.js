/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repo = 'SEFA-ACEROS';

module.exports = {
  output: 'export',              // reemplaza a `next export`
  trailingSlash: true,           // ayuda en GitHub Pages
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  images: { unoptimized: true }, // necesario en export estático
};
