import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: process.env.NODE_ENV === 'development'?["picsum.photos", "localhost", "127.0.0.1"]: ["picsum.photos"],
    unoptimized: process.env.NODE_ENV === 'development',
  },
};

export default nextConfig;
