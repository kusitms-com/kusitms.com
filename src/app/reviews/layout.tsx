import type { Metadata } from "next";
import type { ReactNode } from "react";
import Banner from "@/components/projects/common/Banner";

export const metadata: Metadata = {
  title: "KUSITMS | REVIEWS",
  description: "큐시즘의 다양한 프로젝트와 활동에 대한 생생한 후기를 확인해보세요.",
  keywords: [
    "KUSITMS",
    "큐시즘",
    "큐시즘 리뷰",
    "큐시즘 후기",
    "IT 학회 후기",
    "학회 활동 리뷰",
    "대학생 연합 학회",
    "IT 동아리 활동",
    "큐시즘 프로젝트",
    "큐시즘 활동",
  ],
  openGraph: {
    title: "KUSITMS | REVIEWS",
    description: "큐시즘의 다양한 프로젝트와 활동에 대한 생생한 후기를 확인해보세요.",
    url: "https://www.kusitms.com/reviews",
    siteName: "KUSITMS",
    images: [
      {
        url: "https://kusitms-bucket.s3.ap-northeast-2.amazonaws.com/upload/fdc0f561-9f61-47d0-be9b-1274cfe4814emarkup_banner.png",
        alt: "KUSITMS Reviews",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KUSITMS | REVIEWS",
    description: "큐시즘의 다양한 프로젝트와 활동에 대한 생생한 후기를 확인해보세요.",
    images: [
      "https://kusitms-bucket.s3.ap-northeast-2.amazonaws.com/upload/fdc0f561-9f61-47d0-be9b-1274cfe4814emarkup_banner.png",
    ],
  },
};

export default async function ReviewsLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <main className="flex flex-col items-center desktop:pt-[72px]">
      <Banner
        title="후기"
        description={
          <>
            큐밀리의 솔직 후기를 <br className="tablet:hidden" />
            들어보세요!
          </>
        }
      />
      {children}
    </main>
  );
}
