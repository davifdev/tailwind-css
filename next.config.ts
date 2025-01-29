import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'shoemix.fbitsstatic.net',
      }
    ]
  }
};

export default nextConfig;
