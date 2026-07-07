import ProjectModal from "@/components/projectDetail/ProjectModal";
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
    return null;
  }

  const { prevId, nextId } = getAdjacentMeetupIds(projectList.data.meetup_list, projectNumber);

  return <ProjectModal project={project} prevId={prevId} nextId={nextId} />;
}

export default ProjectDetailModalPage;
