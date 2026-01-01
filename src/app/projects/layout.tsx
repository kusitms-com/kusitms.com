import type { Metadata } from "next";
import type { ReactNode } from "react";
import Banner from "@/components/projects/common/Banner";

export const metadata: Metadata = {
  title: "KUSITMS | Projects",
  description: "큐시즘에서 진행한 다양한 프로젝트들을 한눈에 확인해보세요.",
  keywords: ["큐시즘", "KUSITMS", "프로젝트", "밋업", "기업", "대학생 IT 학회"],
  openGraph: {
    title: "KUSITMS Projects",
    description: "큐시즘에서 진행한 다양한 프로젝트들을 한눈에 확인해보세요.",
    url: "https://www.kusitms.com/projects/meetup",
    siteName: "KUSITMS",
    images: [
      {
        url: "https://kusitms-bucket.s3.ap-northeast-2.amazonaws.com/meetup/OG/456ed518-7489-4106-9d33-94c491ef358732__OG_.png",
        alt: "KUSITMS 프로젝트 목록",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KUSITMS Projects",
    description: "큐시즘에서 진행한 다양한 프로젝트들을 한눈에 확인해보세요.",
    images: [
      {
        url: "https://kusitms-bucket.s3.ap-northeast-2.amazonaws.com/meetup/OG/456ed518-7489-4106-9d33-94c491ef358732__OG_.png",
        alt: "KUSITMS 프로젝트 목록",
      },
    ],
  },
};

export default async function ProjectsLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <main className="flex flex-col items-center desktop:pt-[72px]">
      <Banner
        title="프로젝트"
        description={
          <>
            KUSITMS의 기업, 밋업(Meet-up)
            <br className="desktop:hidden" />
            프로젝트를 만나보세요
          </>
        }
      />
      {children}
    </main>
  );
}
