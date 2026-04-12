import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["kusitms-bucket.s3.ap-northeast-2.amazonaws.com"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
