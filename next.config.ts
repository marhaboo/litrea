import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['localhost'], // Add 'localhost' to the allowed domains for images
  },
};

export default nextConfig;
