import ProjectModalShell from "@/components/projectDetail/ProjectModalShell";
import ProjectNavigation from "@/components/projectDetail/ProjectNavigation";
import OldProjectSection from "@/components/projects/OldProjectSection";
import RecentProjectSection from "@/components/projects/RecentProjectSection";
import { getMeetupProjectDetail, getMeetupProjects } from "@/service/projects";
import { getAdjacentMeetupIds } from "@/utils";

export async function generateStaticParams() {
  try {
    const meetupProjectList = await getMeetupProjects("", "");
    if (!meetupProjectList?.data?.meetup_list) {
      return [];
    }
    return meetupProjectList.data.meetup_list.map((project) => ({
      projectNumber: project.meetup_id.toString(),
    }));
  } catch (error) {
    console.error("Failed to generate static params for meetup projects:", error);
    return [];
  }
}

async function ProjectDetailModalPage({
  params,
}: Readonly<{
  params: Promise<{ projectNumber: string }>;
}>) {
  const { projectNumber } = await params;

  const { data: project } = await getMeetupProjectDetail(projectNumber);
  const projectList = await getMeetupProjects("", "");

  if (!project || !projectList?.data?.meetup_list) {
    return (
      <ProjectModalShell>
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-lg text-gray-500">프로젝트를 찾을 수 없습니다.</p>
        </div>
      </ProjectModalShell>
    );
  }

  if (!project || !projectList?.data?.meetup_list) {
    return (
      <ProjectModalShell>
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-lg text-gray-500">프로젝트를 찾을 수 없습니다.</p>
        </div>
      </ProjectModalShell>
    );
  }

  const recentIdList = [47, 50, 51, 53, 48, 55, 52, 49, 54];

  const { prevId, nextId } = getAdjacentMeetupIds(projectList.data.meetup_list, projectNumber);

  return (
    <ProjectModalShell>
      <ProjectNavigation prevId={prevId} nextId={nextId} />
      {recentIdList.includes(parseInt(projectNumber, 10)) ? (
        <RecentProjectSection project={project} />
      ) : (
        <OldProjectSection project={project} />
      )}
    </ProjectModalShell>
  );
}

export default ProjectDetailModalPage;
