import CorporateProjectContainer from "@/components/projects/CorporateProjectContainer";
import ProjectTypeBanner from "@/components/projects/common/ProjectTypeBanner";
import TopScrollButton from "@/components/shared/TopScrollButton";
import { getCorporateProjects } from "@/service/projects";
import Banner from "@/components/projects/common/Banner";
import NavButtons from "@/components/projects/common/NavButtons";

async function CorporateProjectPage() {
  const corporateProjectsList = await getCorporateProjects("");

  return (
    <>
      <section className="mx-auto w-full ">
        <Banner />
        <NavButtons />
        <ProjectTypeBanner
          title="기업 연계 프로젝트란?"
          detail={
            "실제 기업이 고민하고 있는 경영/마케팅 문제나 개발과 관련된 과제를 받아\n팀별로 아이디어를 제시해 과제를 수행하는 프로젝트에요."
          }
        />
        <CorporateProjectContainer data={corporateProjectsList.data} />
        <TopScrollButton />
      </section>
    </>
  );
}

export default CorporateProjectPage;
