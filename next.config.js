// next.config.js
/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isProd ? "/SEFA-ACEROS" : "",
  assetPrefix: isProd ? "/SEFA-ACEROS/" : ""
};

module.exports = nextConfig;
