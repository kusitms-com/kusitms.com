import ArchiveContainerPage from "@/components/archive/ArchiveContainer";
import Banner from "@/components/archive/Banner";
import MeetupProjectCarousel from "@/components/main/MeetupProjectCarousel";
import { getMeetupProjects } from "@/service/projects";
import type { MeetupItem } from "@/service/projects/getMeetupProjects";

async function ArchivePage() {
  const response = await getMeetupProjects("32", "");
  const meetupProjects: MeetupItem[] = response.data?.meetup_list || [];
  return (
    <main className="desktop:pt-[72px] mx-auto bg-gradient-1 overflow-x-hidden">
      <Banner />
      <MeetupProjectCarousel projects={meetupProjects} archiveMode={true} />
      <ArchiveContainerPage />
    </main>
  );
}
export default ArchivePage;
