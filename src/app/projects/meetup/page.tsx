import NavButtons from "@/components/projects/common/NavButtons";
import ProjectTypeBanner from "@/components/projects/common/ProjectTypeBanner";
import ProjectContainer from "@/components/projects/MeetupProjectContainer";
import { getMeetupProjects } from "@/service/projects";
import type { MeetupResponse } from "@/service/projects/getMeetupProjects";

async function MeetupProjectPage() {
  let meetupProjectList: MeetupResponse;
  try {
    meetupProjectList = await getMeetupProjects("", "");
  } catch (error) {
    console.error("Failed to fetch meetup projects:", error);
    meetupProjectList = { data: { meetup_list: [], meetup_count: 0 } };
  }

  return (
    <section className="w-full mx-auto max-w-[1024px]">
      <NavButtons />
      <ProjectTypeBanner
        title={"밋업 프로젝트란?"}
        detail={
          "기획 파트에서 발제된 아이디어를 디자인, 개발 파트와 함께\n3개월 동안 준비해서 발표하는 큐시즘의 메인 프로젝트예요."
        }
      />
      <ProjectContainer data={meetupProjectList.data} />
    </section>
  );
}

export default MeetupProjectPage;
