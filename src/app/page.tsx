import IntroSection from "@/components/main/IntroSection";
import StatsSection from "@/components/main/StatsSection";
import PartIntroSection from "@/components/main/PartIntroSection";
import ProgramIntroSection from "@/components/main/ProgramIntroSection";
import ActivityIntroSection from "@/components/main/ActivityIntroSection";
import GuestIntroSection from "@/components/main/GuestIntroSection";
import PartnerSection from "@/components/main/PartnerSection";

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
