import OldProjectSection from "@/components/projects/OldProjectSection";
import RecentProjectSection from "@/components/projects/RecentProjectSection";
import { getMeetupProjectDetail, getMeetupProjects } from "@/service/projects";
import { getAdjacentMeetupIds } from "@/utils";
import ProjectModalShell from "@/components/projectDetail/ProjectModalShell";
import ProjectNavigation from "@/components/projectDetail/ProjectNavigation";

export async function generateStaticParams() {
  const meetupProjectList = await getMeetupProjects("");
  return meetupProjectList.data.meetup_list.map((project) => ({
    projectNumber: project.meetup_id.toString(),
  }));
}

async function ProjectDetailModalPage({
  params,
}: Readonly<{
  params: Promise<{ projectNumber: string }>;
}>) {
  const { projectNumber } = await params;

  const { data: project } = await getMeetupProjectDetail(projectNumber);
  const projectList = await getMeetupProjects("");

  const recentIdList = [47, 50, 51, 53, 48, 55, 52, 49, 54];

  const { prevId, nextId } = getAdjacentMeetupIds(
    projectList.data.meetup_list,
    projectNumber
  );

  return (
    <ProjectModalShell>
      <ProjectNavigation prevId={prevId} nextId={nextId} />

      {recentIdList.includes(parseInt(projectNumber)) ? (
        <RecentProjectSection project={project} />
      ) : (
        <OldProjectSection project={project} />
      )}
    </ProjectModalShell>
  );
}

export default ProjectDetailModalPage;
