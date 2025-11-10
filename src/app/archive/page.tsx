import ArchiveCarousel from "@/components/archive/ArchiveCarousel";
import ArchiveContainerPage from "@/components/archive/ArchiveContainer";
import Banner from "@/components/archive/Banner";

async function ArchivePage() {
  return (
    <main className="desktop:pt-[72px] mx-auto bg-gradient">
      <Banner />
      <ArchiveCarousel />
      <ArchiveContainerPage />
    </main>
  );
}
export default ArchivePage;
