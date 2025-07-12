import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true
  },
  basepath: "",
  assetPrefix: "./",
  trailingSlash: true
};

export default nextConfig;
