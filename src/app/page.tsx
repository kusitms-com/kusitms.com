import GuestIntroSection from "@/components/main/GuestIntroSection";
import IntroSection from "@/components/main/IntroSection";
import TeamCardsSection from "@/components/main/TeamCardsSection";
import ExecutiveSection from "@/components/main/ExecutiveSection";
import PartnerSection from "@/components/main/PartnerSection";
import ProgramIntroSection from "@/components/main/ProgramIntroSection";
import StatsSection from "@/components/main/StatsSection";
import { getMeetupProjects, MeetupItem } from "@/service/projects";

export default async function Home() {
  let meetupProjects: MeetupItem[] = [];
  try {
    const response = await getMeetupProjects("31", "");
    meetupProjects = response.data?.meetup_list || [];
  } catch (error) {
    console.error("Failed to fetch meetup projects:", error);
  }

  return (
    <main className="mx-auto font-[family-name:var(--font-geist-sans)] bg-gradient">
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
