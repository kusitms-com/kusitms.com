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
      {/* 시안(607:24007) 데스크톱: 추천 섹션 배경에서 500px 동안 하늘색으로 넘어간 뒤, Inside~파트너사가
          하나의 그라데이션 배경(위아래 72px, 섹션 사이 2px)을 함께 쓴다. 모바일은 섹션별 배경을 그대로 쓴다 */}
      <div
        aria-hidden
        className="hidden h-[500px] bg-linear-to-b from-[#f6f7f9] to-[#e6f0f9] desktop:block"
      />
      <div className="desktop:flex desktop:flex-col desktop:gap-[2px] desktop:bg-linear-to-b desktop:from-[#e6f0f9] desktop:from-[4.82%] desktop:to-[#f9fafb] desktop:to-[108.77%] desktop:py-[72px]">
        <InsideSection meetupProjects={meetupProjects} />
        <ReviewHighlightSection reviews={reviews} />
        <TemaSection />
        <PartnersSection />
      </div>
    </main>
  );
}
