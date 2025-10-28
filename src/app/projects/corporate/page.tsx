import CorporateProjectContainer from "@/components/projects/CorporateProjectContainer";
import ProjectTypeBanner from "@/components/projects/common/ProjectTypeBanner";
import ProjectTotalCount from "@/components/projects/ProjectTotalCount";
import TopScrollButton from "@/components/shared/TopScrollButton";
import { getCorporateProjects } from "@/service/projects";

async function CorporateProjectPage() {
  const corporateProjectsList = await getCorporateProjects("");

  return (
    <>
      <section className="mx-auto w-full ">
        <ProjectTypeBanner
          title="기업 연계 프로젝트란?"
          detail={
            "실제 기업이 고민하고 있는 경영/마케팅 문제나 개발과 관련된 과제를 받아\n팀별로 아이디어를 제시해 과제를 수행하는 프로젝트에요."
          }
        />

        <div className="flex items-center justify-between mt-6">
          <div className="text-sm text-gray-500">
            전체 프로젝트 <ProjectTotalCount pathname="corporate" />
          </div>
        </div>
        <CorporateProjectContainer data={corporateProjectsList.data} />
        <TopScrollButton />
      </section>
    </>
  );
}

export default CorporateProjectPage;
