import { getMeetupProjectDetail, getMeetupProjects } from "@/service/projects";
import ProjectNavigation from "@/components/projectDetail/ProjectNavigation";
import OldProjectSection from "@/components/projects/OldProjectSection";
import RecentProjectSection from "@/components/projects/RecentProjectSection";
import { getAdjacentMeetupIds } from "@/utils";

export async function generateStaticParams() {
  const meetupProjectList = await getMeetupProjects("");
  return meetupProjectList.data.meetup_list.map((project) => ({
    projectNumber: project.meetup_id.toString(),
  }));
}

async function ProjectDetailPage({
  params,
}: Readonly<{
  params: Promise<{ projectNumber: string }>;
}>) {
  const { projectNumber } = await params;
  const { data: project } = await getMeetupProjectDetail(projectNumber);
  const projectList = await getMeetupProjects("");

  // 31기 프로젝트 ID 리스트
  const recentIdList = [47, 50, 51, 53, 48, 55, 52, 49, 54];

  const { prevId, nextId } = getAdjacentMeetupIds(
    projectList.data.meetup_list,
    projectNumber
  );

  return (
    <>
      <ProjectNavigation prevId={prevId} nextId={nextId} />
      {recentIdList.includes(parseInt(projectNumber)) ? (
        <RecentProjectSection project={project} />
      ) : (
        <OldProjectSection project={project} />
      )}
    </>
  );
}

export default ProjectDetailPage;
