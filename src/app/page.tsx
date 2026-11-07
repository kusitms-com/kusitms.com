import AboutSection from "@/components/main/AboutSection";
import AudienceSection from "@/components/main/AudienceSection";
import FitSection from "@/components/main/FitSection";
import GuestIntroSection from "@/components/main/GuestIntroSection";
import InsideSection from "@/components/main/InsideSection";
import IntroSection from "@/components/main/IntroSection";
import PartnersSection from "@/components/main/PartnersSection";
import PartsSection from "@/components/main/PartsSection";
import ProgramIntroSection from "@/components/main/ProgramIntroSection";
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
      <InsideSection meetupProjects={meetupProjects} />
      <ReviewHighlightSection reviews={reviews} />
      <TemaSection />
      <ProgramIntroSection meetupProjects={meetupProjects} />
      <GuestIntroSection />
      <PartnersSection />
    </main>
  );
}
