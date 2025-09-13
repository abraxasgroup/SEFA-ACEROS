/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',                   // <- reemplaza a "next export"
  trailingSlash: true,                // ayuda en GitHub Pages
  basePath: isProd ? '/SEFA-ACEROS' : '',
  assetPrefix: isProd ? '/SEFA-ACEROS/' : '',
  images: { unoptimized: true },      // necesario en export estático
};

module.exports = nextConfig;
