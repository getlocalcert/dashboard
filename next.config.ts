import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
      loader: 'custom',
      loaderFile: './imageLoader.ts',
  }
};

export default nextConfig;
