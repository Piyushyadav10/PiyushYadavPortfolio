import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  turbopack: {
    root: 'C:\\Users\\yadav\\Downloads\\Portfoliooo',
  },
};

export default nextConfig;
