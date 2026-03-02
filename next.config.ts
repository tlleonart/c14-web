import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'different-raccoon-272.convex.cloud',
      },
    ],
  },
}

export default nextConfig
