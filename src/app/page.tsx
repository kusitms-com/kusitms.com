import AboutSection from "@/components/main/AboutSection";
import ExecutiveSection from "@/components/main/ExecutiveSection";
import FitSection from "@/components/main/FitSection";
import GuestIntroSection from "@/components/main/GuestIntroSection";
import IntroSection from "@/components/main/IntroSection";
import PartnerSection from "@/components/main/PartnerSection";
import PartsSection from "@/components/main/PartsSection";
import ProgramIntroSection from "@/components/main/ProgramIntroSection";
import StatsSection from "@/components/main/StatsSection";
import { getMeetupProjects, type MeetupItem } from "@/service/projects";

export default async function Home() {
  let meetupProjects: MeetupItem[] = [];
  try {
    const response = await getMeetupProjects("33", "");
    meetupProjects = response.data?.meetup_list || [];
  } catch (error) {
    console.error("Failed to fetch meetup projects:", error);
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
      <ExecutiveSection />
      <ProgramIntroSection meetupProjects={meetupProjects} />
      <GuestIntroSection />
      <PartnerSection />
    </main>
  );
}
