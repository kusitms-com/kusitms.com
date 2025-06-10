import ActivityIntroSection from "@/components/main/ActivityIntroSection";
import GuestIntroSection from "@/components/main/GuestIntroSection";
import IntroSection from "@/components/main/IntroSection";
import PartIntroSection from "@/components/main/PartIntroSection";
import PartnerSection from "@/components/main/PartnerSection";
import ProgramIntroSection from "@/components/main/ProgramIntroSection";
import StatsSection from "@/components/main/StatsSection";

export default function Home() {
  return (
    <main className="font-[family-name:var(--font-geist-sans)]">
      <IntroSection />
      <StatsSection />
      <PartIntroSection />
      <ProgramIntroSection />
      <ActivityIntroSection />
      <GuestIntroSection />
      <PartnerSection />
    </main>
  );
}
