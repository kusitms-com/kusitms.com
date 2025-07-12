import Image from "next/image";
import React from "react";
import { MeetupProjectDetail } from "@/service/projects";
import { IconLink, BackButton } from "@/components/shared";
import { getCalculateMonthDiff, toUpperCaseOnlyLetters } from "@/utils";
import TeamMember from "./TeamMember";

function RecentProjectSection({ project }: { project: MeetupProjectDetail }) {
  return (
    <>
      <div className="flex justify-center items-center relative">
        <h2 className="text-[20px] font-black text-white desktop:hidden block text-center">
          {project.name}
        </h2>
        <BackButton className="w-[14px] h-[14px] absolute right-0" />
      </div>
      <div className="relative desktop:w-[1180px] w-[280px] desktop:h-[663px] h-[160px] desktop:mt-[180px] mt-[20px] mx-auto">
        <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-b from-transparent to-[#ffffff80] rounded-b-[20px] z-10" />
        <Image
          src={project.poster_url}
          className="object-cover rounded-[20px]"
          fill
          alt="poster"
        />
        <div className="flex flex-col absolute desktop:bottom-10 bottom-3 desktop:left-[45px] left-[10px] z-10">
          <h2 className="text-[48px] font-black text-black desktop:block hidden">
            {project.name}
          </h2>
          <p className="desktop:text-[24px] text-[12px] text-black desktop:block hidden">
            {project.one_line_intro}
          </p>
        </div>

        <div className="absolute desktop:flex gap-x-[16px] z-10 bottom-[30px] right-[40px] hidden">
          {project.behance_url && (
            <IconLink
              className="w-[52px] h-[52px] rounded-2xl bg-[#90909A]"
              size={35}
              img="/projects/icons/BehanceIcon.svg"
              link={project.behance_url}
            />
          )}
          {project.github_url && (
            <IconLink
              className="w-[52px] h-[52px] rounded-2xl bg-[#90909A]"
              size={35}
              img="/projects/icons/GithubIcon.svg"
              link={project.github_url}
            />
          )}
          {project.app_url && (
            <IconLink
              className="w-[52px] h-[52px] rounded-2xl bg-[#90909A]"
              size={25}
              img="/projects/icons/DetailLinkIcon.svg"
              link={project.app_url}
            />
          )}
        </div>
      </div>

      <div className="flex flex-col desktop:flex-row desktop:gap-x-5 gap-y-5 desktop:w-[1180px] w-[330px] mt-5 pb-[30px]">
        <section className="w-full bg-[#2F3038] desktop:p-10 p-6 rounded-[24px]">
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
              <p>{project.cardinal}기</p>
              <p>{toUpperCaseOnlyLetters(project.type)}</p>
              <p>{`${project.start_date} ~ ${
                project.end_date
              } (${getCalculateMonthDiff(
                project.start_date,
                project.end_date
              )})`}</p>
              <TeamMember role="기획" members={project.team.planner} />
              <TeamMember role="디자인" members={project.team.designer} />
              <TeamMember role="프론트엔드" members={project.team.frontend} />
              <TeamMember role="백엔드" members={project.team.backend} />
            </div>
          </div>
        </section>
        <section className="desktop:p-10 p-6 bg-[#292D32] w-full rounded-[24px]">
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
            {project.intro}
          </p>
        </section>
      </div>
    </>
  );
}

export default RecentProjectSection;
