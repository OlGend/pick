/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['hotoffers.casino'],
  },
  swcMinify: true,
}

module.exports = nextConfig;

