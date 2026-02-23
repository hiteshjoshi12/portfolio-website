import type { NextConfig } from "next";


const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for GitHub Pages since it doesn't support Next.js image optimization
  },
  basePath: '/portfolio-website',
};

export default nextConfig;