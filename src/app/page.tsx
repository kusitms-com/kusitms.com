import ExecutiveSection from "@/components/main/ExecutiveSection";
import GuestIntroSection from "@/components/main/GuestIntroSection";
import IntroSection from "@/components/main/IntroSection";
import PartnerSection from "@/components/main/PartnerSection";
import ProgramIntroSection from "@/components/main/ProgramIntroSection";
import StatsSection from "@/components/main/StatsSection";
import TeamCardsSection from "@/components/main/TeamCardsSection";
import { getMeetupProjects, type MeetupItem } from "@/service/projects";

export default async function Home() {
  let meetupProjects: MeetupItem[] = [];
  try {
    const response = await getMeetupProjects("32", "");
    meetupProjects = response.data?.meetup_list || [];
  } catch (error) {
    console.error("Failed to fetch meetup projects:", error);
  }

  return (
    <main className="mx-auto font-[family-name:var(--font-pretendard)] bg-gradient-2">
      <IntroSection />
      <StatsSection />
      <TeamCardsSection />
      <ExecutiveSection />
      <ProgramIntroSection meetupProjects={meetupProjects} />
      <GuestIntroSection />
      <PartnerSection />
    </main>
  );
}
