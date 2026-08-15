import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve('.'),
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: '/web-dev',
        destination: '/web-development',
        permanent: true,
      },
      {
        source: '/mobile-dev',
        destination: '/mobile-app-development',
        permanent: true,
      },
      {
        source: '/seo-growth',
        destination: '/seo-services',
        permanent: true,
      },
      {
        source: '/ai-video',
        destination: '/ai-video-creation',
        permanent: true,
      },
    ];
  }
};

export default nextConfig;
