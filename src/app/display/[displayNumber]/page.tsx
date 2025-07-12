import Image from "next/image";
import { getMeetupProjectDetail, getMeetupProjects } from "@/service/projects";
import { IconLink } from "@/components/shared";
import {
  getAdjacentIds,
  getCalculateMonthDiff,
  toUpperCaseOnlyLetters,
} from "@/utils";
import ProjectNavigation from "@/components/projectDetail/ProjectNavigation";
import TeamMember from "@/components/projects/TeamMember";

export async function generateStaticParams() {
  const meetupProjectList = await getMeetupProjects("");
  return meetupProjectList.data.meetup_list.map((project) => ({
    projectNumber: project.meetup_id,
  }));
}

const DisplayDetailPage = async ({
  params,
}: Readonly<{
  params: Promise<{ displayNumber: string }>;
}>) => {
  const { displayNumber } = await params;
  const projectDetail = await getMeetupProjectDetail(displayNumber);

  const team = projectDetail?.data.team;
  const displayIdList = [47, 50, 51, 53, 48, 55, 52, 49, 54];

  const { prevId, nextId } = getAdjacentIds(displayIdList, displayNumber);

  return (
    <>
      <h2 className="text-[20px] font-black text-white desktop:hidden block mt-[90px] text-center">
        {projectDetail.data.name}
      </h2>
      <ProjectNavigation prevId={prevId} nextId={nextId} domain={"/display"} />
      <div className="relative desktop:w-[1180px] w-[280px] desktop:h-[663px] h-[160px] desktop:mt-[180px] mt-[20px] mx-auto">
        <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-b from-transparent to-[#ffffff80] rounded-b-[20px] z-10" />
        <Image
          src={projectDetail.data.poster_url}
          className="object-cover rounded-[20px]"
          fill
          alt="poster"
        />
        <div className="flex flex-col absolute bottom-10 left-[45px] z-10">
          <h2 className="text-[48px] font-black text-black desktop:block hidden">
            {projectDetail.data.name}
          </h2>
          <p className="desktop:text-[24px] text-[12px] text-black desktop:block hidden">
            {projectDetail.data.one_line_intro}
          </p>
        </div>

        <div className="absolute desktop:flex gap-x-[16px] z-10 bottom-[30px] right-[40px] hidden">
          {projectDetail.data.behance_url && (
            <IconLink
              className="w-[52px] h-[52px] rounded-2xl bg-[#90909A]"
              size={35}
              img="/projects/icons/BehanceIcon.svg"
              link={projectDetail.data.behance_url}
            />
          )}
          {projectDetail.data.github_url && (
            <IconLink
              className="w-[52px] h-[52px] rounded-2xl bg-[#90909A]"
              size={35}
              img="/projects/icons/GithubIcon.svg"
              link={projectDetail.data.github_url}
            />
          )}
          {projectDetail.data.app_url && (
            <IconLink
              className="w-[52px] h-[52px] rounded-2xl bg-[#90909A]"
              size={25}
              img="/projects/icons/DetailLinkIcon.svg"
              link={projectDetail.data.app_url}
            />
          )}
        </div>
      </div>

      <div className="flex desktop:flex-row flex-col gap-x-5 desktop:w-[1180px] w-full mt-5 pb-[30px] px-5">
        <section className="w-full bg-[#5D5E67] desktop:p-10 p-6 rounded-[24px]">
          <div className="desktop:flex gap-2 border-b border-dashed border-[#ccc] mb-6 items-start hidden">
            <Image
              src="/projects/icons/Summation.svg"
              className="pt-2 desktop:block hidden"
              alt="프로젝트 요약"
              width={20}
              height={25}
            />
            <h3 className="text-2xl font-extrabold mb-4 desktop:block hidden text-[#62EFE5]">
              프로젝트 요약
            </h3>
          </div>

          <div className="flex desktop:gap-8 gap-4">
            <div className="desktop:text-xl text-[12px] font-normal flex flex-col desktop:gap-5 gap-3">
              {[
                ["/projects/icons/Horseman.svg", "진행기수"],
                ["/projects/icons/Project.svg", "프로젝트 형태"],
                ["/projects/icons/Watch.svg", "프로젝트 기간"],
                ["/projects/icons/Human.svg", "팀 구성"],
              ].map(([src, alt], i) => (
                <div key={i} className="flex gap-2">
                  <Image
                    src={src}
                    alt={alt}
                    width={24}
                    height={24}
                    style={{ width: "24px", height: "24px" }}
                    className="desktop:block hidden"
                  />
                  <p className="text-[#62EFE5]">{alt}</p>
                </div>
              ))}
            </div>

            <div className="text-[#E2E2EB] desktop:text-xl text-[12px] font-normal flex flex-col desktop:gap-5 gap-3">
              <p>{projectDetail.data.cardinal}기</p>
              <p>{toUpperCaseOnlyLetters(projectDetail.data.type)}</p>
              <p>{`${projectDetail.data.start_date} ~ ${
                projectDetail.data.end_date
              } 
                (${getCalculateMonthDiff(
                  projectDetail.data.start_date,
                  projectDetail.data.end_date
                )})`}</p>
              <TeamMember role="기획" members={team.planner} />
              <TeamMember role="디자인" members={team.designer} />
              <TeamMember role="프론트엔드" members={team.frontend} />
              <TeamMember role="백엔드" members={team.backend} />
            </div>
          </div>
        </section>
        <section className="desktop:p-10 p-6 bg-[#292D32] w-full rounded-[24px] mt-5 desktop:mt-0">
          <div className="flex gap-2 border-b border-dashed border-[#ccc] mb-6 items-start">
            <Image
              src="/projects/icons/Explanation.svg"
              className="pt-2 desktop:block hidden"
              alt="프로젝트 설명"
              width={24}
              height={24}
            />
            <h3 className="desktop:text-2xl text-[16px] font-extrabold mb-4 text-[#62EFE5]">
              프로젝트 설명
            </h3>
          </div>
          <p className="desktop:text-xl text-[14px] font-normal overflow-y-auto custom-scrollbar-none h-[180px]">
            {projectDetail.data.intro}
          </p>
        </section>
      </div>
    </>
  );
};
export default DisplayDetailPage;
