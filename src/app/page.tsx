import type { Metadata } from "next";
import AboutSection from "@/components/main/AboutSection";
import AudienceSection from "@/components/main/AudienceSection";
import FitSection from "@/components/main/FitSection";
import InsideSection from "@/components/main/InsideSection";
import IntroSection from "@/components/main/IntroSection";
import PartnersSection from "@/components/main/PartnersSection";
import PartsSection from "@/components/main/PartsSection";
import ReviewHighlightSection from "@/components/main/ReviewHighlightSection";
import StatsSection from "@/components/main/StatsSection";
import TemaSection from "@/components/main/TemaSection";
import { getMeetupProjects, type MeetupItem } from "@/service/projects";
import { getReviews, type Review } from "@/service/reviews";

// 메타 규칙 1-1(홈). 이미지는 현 기수 이미지가 나오기 전까지 기존 33기 이미지를 쓴다
const HOME_TITLE = "큐시즘(KUSITMS) · 대학생 IT 프로젝트 학회";
const HOME_DESCRIPTION =
  "기획·디자인·개발이 한 팀이 되어 6개월 동안 실제 서비스를 만드는 2009년 설립 학회";

export const metadata: Metadata = {
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  alternates: { canonical: "https://www.kusitms.com" },
  openGraph: {
    type: "website",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    url: "https://www.kusitms.com",
    images: [
      { url: "https://www.kusitms.com/og/kusitms-og-33rd.png", alt: "KUSITMS 홈페이지 배너" },
    ],
  },
};

export default async function Home() {
  let meetupProjects: MeetupItem[] = [];
  try {
    const response = await getMeetupProjects("33", "");
    meetupProjects = response.data?.meetup_list || [];
  } catch (error) {
    console.error("Failed to fetch meetup projects:", error);
  }

  let reviews: Review[] = [];
  try {
    const response = await getReviews("");
    reviews = response.data?.review_list || [];
  } catch (error) {
    console.error("Failed to fetch reviews:", error);
  }

  return (
    <main className="mx-auto font-[family-name:var(--font-pretendard)] bg-gradient-2">
      <div className="relative">
        <IntroSection />
        <AboutSection />
        <StatsSection />
      </div>
      <FitSection />
      <PartsSection />
      <AudienceSection />
      {/* 시안(데스크톱 607:24007, 모바일 531:20634): 추천 섹션 배경(#f6f7f9)에서 하늘색으로 넘어가는 띠(모바일 125px, 데스크톱 500px) 뒤에
          Inside~파트너사가 하나의 그라데이션 배경을 함께 쓴다(데스크톱은 위아래 72px, 섹션 사이 2px) */}
      <div
        aria-hidden
        className="h-[125px] bg-linear-to-b from-[#f6f7f9] to-[#e6f0f9] desktop:h-[500px]"
      />
      <div className="bg-linear-to-b from-[#e6f0f9] from-[4.82%] to-[#f9fafb] to-[108.77%] desktop:flex desktop:flex-col desktop:gap-[2px] desktop:py-[72px]">
        <InsideSection meetupProjects={meetupProjects} />
        <ReviewHighlightSection reviews={reviews} />
        <TemaSection />
        <PartnersSection />
      </div>
    </main>
  );
}
