import ProjectTypeBanner from "@/components/projects/common/ProjectTypeBanner";
import ProjectContainer from "@/components/projects/MeetupProjectContainer";
import ProjectTotalCount from "@/components/projects/ProjectTotalCount";
import TopScrollButton from "@/components/shared/TopScrollButton";
import { getMeetupProjects } from "@/service/projects";

async function MeetupProjectPage() {
  const meetupProjectList = await getMeetupProjects("");

  return (
    <>
      <section className="mx-auto w-full ">
        <ProjectTypeBanner
          title={"밋업 프로젝트란?"}
          detail={
            "기획 파트에서 발제된 아이디어를 디자인, 개발 파트와 함께\n3개월 동안 준비해서 발표하는 큐시즘의 메인 프로젝트예요."
          }
        />
        <ProjectContainer data={meetupProjectList.data} />
        <TopScrollButton />
      </section>
    </>
  );
}

export default MeetupProjectPage;
