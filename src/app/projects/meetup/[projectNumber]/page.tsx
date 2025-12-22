import ProjectModalShell from "@/components/projectDetail/ProjectModalShell";
import ProjectNavigation from "@/components/projectDetail/ProjectNavigation";
import NavButtons from "@/components/projects/common/NavButtons";
import ProjectTypeBanner from "@/components/projects/common/ProjectTypeBanner";
import ProjectContainer from "@/components/projects/MeetupProjectContainer";
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

async function ProjectDetailPage({
  params,
}: Readonly<{
  params: Promise<{ projectNumber: string }>;
}>) {
  const { projectNumber } = await params;

  const { data: project } = await getMeetupProjectDetail(projectNumber);
  const projectList = await getMeetupProjects("", "");

  const recentIdList = [47, 50, 51, 53, 48, 55, 52, 49, 54];

  const { prevId, nextId } = getAdjacentMeetupIds(projectList.data.meetup_list, projectNumber);

  return (
    <>
      <section className="w-full mx-auto max-w-[1024px]">
        <NavButtons />
        <ProjectTypeBanner
          title={"밋업 프로젝트란?"}
          detail={
            <>
              기획 파트에서 발제된 아이디어를 디자인,
              <br className="desktop:hidden" />
              개발 파트와 함께 3개월 동안 준비해서
              <br className="desktop:hidden" />
              발표하는 큐시즘의 메인 프로젝트예요.
            </>
          }
        />
        <ProjectContainer data={projectList.data} />
      </section>

      <ProjectModalShell>
        <ProjectNavigation prevId={prevId} nextId={nextId} />
        {recentIdList.includes(parseInt(projectNumber)) ? (
          <RecentProjectSection project={project} />
        ) : (
          <OldProjectSection project={project} />
        )}
      </ProjectModalShell>
    </>
  );
}

export default ProjectDetailPage;
