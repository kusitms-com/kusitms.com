import {
  ActivityIntroSection,
  GuestIntroSection,
  IntroSection,
  PartIntroSection,
  PartnerSection,
  ProgramIntroSection,
  StatsSection,
} from "@/components/main";

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
