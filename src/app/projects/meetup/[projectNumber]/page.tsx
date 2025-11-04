import OldProjectSection from "@/components/projects/OldProjectSection";
import RecentProjectSection from "@/components/projects/RecentProjectSection";
import { getMeetupProjectDetail, getMeetupProjects } from "@/service/projects";

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

  // 31기 프로젝트 ID 리스트
  const recentIdList = [47, 50, 51, 53, 48, 55, 52, 49, 54];

  return (
    <>
      {recentIdList.includes(parseInt(projectNumber)) ? (
        <RecentProjectSection project={project} />
      ) : (
        <OldProjectSection project={project} />
      )}
    </>
  );
}

export default ProjectDetailPage;
