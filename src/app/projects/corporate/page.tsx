import CorporateProjectContainer from "@/components/projects/CorporateProjectContainer";
import NavButtons from "@/components/projects/common/NavButtons";
import ProjectTypeBanner from "@/components/projects/common/ProjectTypeBanner";
import { getCorporateProjects } from "@/service/projects";

async function CorporateProjectPage() {
  const corporateProjectsList = await getCorporateProjects("");

  return (
    <section className="w-full mx-auto max-w-[1440px]">
      <NavButtons />
      <ProjectTypeBanner
        title="기업 연계 프로젝트란?"
        detail={
          "실제 기업이 고민하고 있는 경영/마케팅 문제나 개발과 관련된 과제를 받아\n팀별로 아이디어를 제시해 과제를 수행하는 프로젝트에요."
        }
      />
      <CorporateProjectContainer data={corporateProjectsList.data} />
    </section>
  );
}

export default CorporateProjectPage;
