import ArchiveCarousel from "@/components/archive/ArchiveCarousel";
import ArchiveContainerPage from "@/components/archive/ArchiveContainer";
import Banner from "@/components/archive/Banner";

async function ArchivePage() {
  return (
    <main className="desktop:pt-[72px] mx-auto bg-[linear-gradient(180deg,_#FFF_13.61%,_#F0FAFF_23.29%,_#FFF_36.05%,_#F3FBFF_46.56%,_#FFF_79.61%,_#F0FAFF_109.62%)]">
      <Banner />
      <ArchiveCarousel />
      <ArchiveContainerPage />
    </main>
  );
}
export default ArchivePage;
