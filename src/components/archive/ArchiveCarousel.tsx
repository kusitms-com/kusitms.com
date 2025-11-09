import MeetupProjectCarousel from "@/components/main/MeetupProjectCarousel";
import { getMeetupProjects } from "@/service/projects";
import type { MeetupItem } from "@/service/projects/getMeetupProjects";

export default async function ArchiveCarousel() {
  let meetupProjects: MeetupItem[] = [];
  try {
    const response = await getMeetupProjects("31", "");
    meetupProjects = response.data?.meetup_list || [];
  } catch (error) {
    console.error("Failed to fetch meetup projects:", error);
  }
  return (
    <main className="w-full mx-auto max-w-[1024px] ">
      <MeetupProjectCarousel projects={meetupProjects} archiveMode={true} />
    </main>
  );
}
