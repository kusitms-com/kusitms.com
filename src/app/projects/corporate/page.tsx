import CorporateProjectContainer from "@/components/projects/CorporateProjectContainer";
import NavButtons from "@/components/projects/common/NavButtons";
import ProjectTypeBanner from "@/components/projects/common/ProjectTypeBanner";
import { getCorporateProjects } from "@/service/projects";

// 어드민에서 바꾼 프로젝트·소개 정보가 바로 보이도록 요청마다 새로 그린다(빌드 시 정적 생성 시도 안 함)
export const dynamic = "force-dynamic";

async function CorporateProjectPage() {
  const corporateProjectsList = await getCorporateProjects("");

  return (
    <section className="w-full mx-auto max-w-[1024px]">
      <NavButtons />
      <ProjectTypeBanner
        title="기업 연계 프로젝트란?"
        detail={
          "실제 기업이 고민하고 있는 경영/마케팅 문제나 개발과 관련된 과제를 받아\n팀별로 아이디어를 제시해 과제를 수행하는 프로젝트예요."
        }
      />
      <CorporateProjectContainer data={corporateProjectsList.data} />
    </section>
  );
}

export default CorporateProjectPage;
