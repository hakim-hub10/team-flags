import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Use standalone output for Docker deployments
  output: 'standalone',

  // Skip type checking during build (for educational purposes)
  // In production, you'd want this enabled
  typescript: {
    ignoreBuildErrors: true,
  },
  
  turbopack: {
    root: path.resolve(__dirname)
  }
};

export default nextConfig;