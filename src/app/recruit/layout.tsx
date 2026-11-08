import type { Metadata } from "next";
import type { ReactNode } from "react";

// title·description·OG는 모집 상태에 따라 page.tsx의 generateMetadata가 정한다
export const metadata: Metadata = {
  keywords: [
    "KUSITMS",
    "큐시즘",
    "큐시즘 모집",
    "대학생 연합 학회",
    "IT 학회",
    "IT 대학생 활동",
    "리크루팅",
    "기수 모집",
    "지원 방법",
    "학회 지원",
  ],
};

export default async function RecruitLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <main className="w-full items-center justify-center">{children}</main>;
}
