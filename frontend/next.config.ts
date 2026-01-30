/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  devIndicators: {
    autoPreload: false,
  },
};

export default nextConfig;