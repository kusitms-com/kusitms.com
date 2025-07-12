import React, { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KUSITMS | RECRUIT",
  description:
    "큐시즘과 함께할 새로운 기수를 모집합니다. 모집 일정과 지원 방법을 확인해보세요.",
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
    description:
      "큐시즘과 함께할 새로운 기수를 모집합니다. 모집 일정과 지원 방법을 확인해보세요.",
    url: "https://www.kusitms.com/recruit",
    siteName: "KUSITMS",

    images: [
      {
        url: "https://kusitms-bucket.s3.ap-northeast-2.amazonaws.com/upload/fdc0f561-9f61-47d0-be9b-1274cfe4814emarkup_banner.png",

        alt: "KUSITMS Recruit",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KUSITMS | RECRUIT",
    description:
      "큐시즘과 함께할 새로운 기수를 모집합니다. 모집 일정과 지원 방법을 확인해보세요.",
    images: [
      "https://kusitms-bucket.s3.ap-northeast-2.amazonaws.com/upload/fdc0f561-9f61-47d0-be9b-1274cfe4814emarkup_banner.png",
    ],
  },
};

export default async function RecruitLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
      <div className="flex flex-col desktop:gap-y-[100px] items-center">
        <section className="items-center justify-center w-full max-w-6xl text-center">
          <h1 className="mb-[40px] desktop:mt-[192px] mt-[60px]">
            <span className="desktop:text-[72px] text-[48px] font-black leading-[130%]">KUSITMS</span>
            <br/>
            <span
                className="desktop:text-[72px] text-[48px] font-extrabold text-transparent [-webkit-text-stroke:1px_white]">
            Recruitment
          </span>
          </h1>
          <div className="flex flex-col font-normal desktop:text-[20px] text-[16px] mt-[40px] leading-[150%]">
            <div className="flex flex-col items-center justify-center desktop:flex-row destop:gap-x-1">
              <p>큐시즘은 혼자서는 해낼 수 없는 일들을 </p>
              <p> 함께 이루어내고 있어요.</p>
            </div>
            <p>멋진 아이디어를 실현하고, 놀라운 결과를 만들어내요.</p>
            <p>우리와 함께할래요?</p>
          </div>
        </section>
        <main className="w-full items-center justify-center">{children}</main>
      </div>
  );
}
