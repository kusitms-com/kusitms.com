import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 메타 규칙 1-2: 리크루팅 메타(모집 상태별)를 JS 실행 전 HTML의 <head>에 넣는다.
  // 기본값은 일부 봇에만 head에 넣고 나머지(브라우저·카카오 미리보기 등)는 본문으로 스트리밍한다
  htmlLimitedBots: /.*/,
  images: {
    domains: ["kusitms-bucket.s3.ap-northeast-2.amazonaws.com"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
