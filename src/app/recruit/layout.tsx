import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "KUSITMS | RECRUIT",
  description: "큐시즘과 함께할 새로운 기수를 모집합니다. 모집 일정과 지원 방법을 확인해보세요.",
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
  openGraph: {
    title: "KUSITMS | RECRUIT",
    description: "큐시즘과 함께할 새로운 기수를 모집합니다. 모집 일정과 지원 방법을 확인해보세요.",
    url: "https://www.kusitms.com/recruit",
    siteName: "KUSITMS",

    images: [
      {
        url: "https://kusitms-bucket.s3.ap-northeast-2.amazonaws.com/meetup/OG/456ed518-7489-4106-9d33-94c491ef358732__OG_.png",

        alt: "KUSITMS Recruit",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KUSITMS | RECRUIT",
    description: "큐시즘과 함께할 새로운 기수를 모집합니다. 모집 일정과 지원 방법을 확인해보세요.",
    images: [
      "https://kusitms-bucket.s3.ap-northeast-2.amazonaws.com/meetup/OG/456ed518-7489-4106-9d33-94c491ef358732__OG_.png",
    ],
  },
};

export default async function RecruitLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <main className="w-full items-center justify-center">{children}</main>;
}
