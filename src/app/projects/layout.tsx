import type { Metadata } from "next";
import type { ReactNode } from "react";

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
        url: "https://kusitms-bucket.s3.ap-northeast-2.amazonaws.com/upload/fdc0f561-9f61-47d0-be9b-1274cfe4814emarkup_banner.png",
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
        url: "https://kusitms-bucket.s3.ap-northeast-2.amazonaws.com/upload/fdc0f561-9f61-47d0-be9b-1274cfe4814emarkup_banner.png",
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
      {children}
    </main>
  );
}
