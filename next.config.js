/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  experimental: {
    optimizeCss: true,
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  // Production optimizations
  poweredByHeader: false,
  compress: true,
  // Only for Docker deployment
  output: process.env.NODE_ENV === 'production' ? 'standalone' : undefined,
  // For GitHub Pages export
  trailingSlash: true,
};

module.exports = nextConfig; 