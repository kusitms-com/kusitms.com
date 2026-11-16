import ProjectModal from "@/components/projectDetail/ProjectModal";
import { getMeetupProjectDetail, getMeetupProjects } from "@/service/projects";
import { getAdjacentMeetupIds } from "@/utils";

async function ProjectDetailModalPage({
  params,
}: Readonly<{
  params: Promise<{ projectNumber: string }>;
}>) {
  const { projectNumber } = await params;
  // 빌드 시 인터셉트 라우트가 "[projectNumber]" 문자열 그대로 프리렌더되어 상세 API가 400을 반환하므로 숫자 id만 처리
  if (!/^\d+$/.test(projectNumber)) return null;

  const { data: project } = await getMeetupProjectDetail(projectNumber);
  const projectList = await getMeetupProjects("", "");

  if (!project || !projectList?.data?.meetup_list) {
    return null;
  }

  const { prevId, nextId } = getAdjacentMeetupIds(projectList.data.meetup_list, projectNumber);

  return <ProjectModal project={project} prevId={prevId} nextId={nextId} />;
}

export default ProjectDetailModalPage;
