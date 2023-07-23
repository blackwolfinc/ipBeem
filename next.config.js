/** @type {import('next').NextConfig} */

const path = require('path')


const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },
  }



module.exports = nextConfig
