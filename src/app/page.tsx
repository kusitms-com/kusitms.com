import ActivityIntroSection from "@/components/main/ActivityIntroSection";
import GuestIntroSection from "@/components/main/GuestIntroSection";
import IntroSection from "@/components/main/IntroSection";
import PartIntroSection from "@/components/main/PartIntroSection";
import PartnerSection from "@/components/main/PartnerSection";
import ProgramIntroSection from "@/components/main/ProgramIntroSection";
import StatsSection from "@/components/main/StatsSection";

export default function Home() {
  return (
    <main
      className="font-[family-name:var(--font-geist-sans)]"
      style={{
        background:
          "linear-gradient(180deg, #FFF 13.61%, #F0FAFF 23.29%, #FFF 36.05%, #F3FBFF 46.56%, #FFF 79.61%, #F0FAFF 109.62%)",
      }}
    >
      <IntroSection />
      <StatsSection />
      <PartIntroSection />
      <ProgramIntroSection />
      {/* <ActivityIntroSection /> */}
      <GuestIntroSection />
      <PartnerSection />
    </main>
  );
}
