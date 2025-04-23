import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable ESLint during builds
  eslint: {
    // Only run ESLint in development, not during builds
    ignoreDuringBuilds: true,
  },
  
  // Disable TypeScript type checking during builds to allow faster builds
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Output standalone build for deployment
  output: 'standalone',
  
  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pendragonnetworks.com',
      },
    ],
  },
};

export default nextConfig;
