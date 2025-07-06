import Image from "next/image";
import React from "react";
import { MeetupProjectDetail } from "@/service/projects";
import { IconLink } from "@/components/shared";
import { toUpperCaseOnlyLetters } from "@/utils";
import TeamMember from "./TeamMember";

function OldProjectSection({ project }: { project: MeetupProjectDetail }) {
  return (
    <div className="flex items-center justify-center z-10 w-full my-[60px] mb-[30px] px-0">
      <div className="w-full desktop:max-w-none max-w-[350px]">
        <div className="flex justify-between mb-6">
          <h2 className="w-full desktop:text-5xl text-2xl font-extrabold desktop:mt-20 mt-[20px] desktop:text-left text-center">
            {project.name}
          </h2>
        </div>

        <div className="mb-3 flex desktop:justify-between desktop:items-center desktop:flex-row flex-col desktop:gap-0 gap-3">
          <p className="desktop:text-xl text-sm text-[#E2E2EB] desktop:block hidden">
            {project.one_line_intro}
          </p>
          <div className="flex items-center gap-3 desktop:min-h-[40px] min-h-[0px] mb-2">
            {project.instagram_url && (
              <IconLink
                className="desktop:w-[52px] desktop:h-[52px] w-[40px] h-[40px] rounded-2xl"
                size={35}
                img="/projects/icons/InstagramIcon.svg"
                link={project.instagram_url}
              />
            )}
            {project.github_url && (
              <IconLink
                className="desktop:w-[52px] desktop:h-[52px] w-[40px] h-[40px] rounded-2xl"
                size={35}
                img="/projects/icons/GithubIcon.svg"
                link={project.github_url}
              />
            )}
            {project.app_url && (
              <IconLink
                className="desktop:w-[52px] desktop:h-[52px] w-[40px] h-[40px] rounded-2xl"
                size={25}
                img="/projects/icons/DetailLinkIcon.svg"
                link={project.app_url}
              />
            )}
          </div>
        </div>

        <div className="desktop:grid desktop:grid-cols-[minmax(0,580px)_minmax(0,580px)] desktop:grid-rows-[minmax(0,470px)_minmax(0,310px)] desktop:gap-3 flex flex-col gap-4">
          <div className="desktop:row-span-2 bg-gray-200 flex items-center justify-center rounded-xl overflow-hidden desktop:h-auto h-[440px] desktop:w-[580px] w-[300px] mx-auto">
            <Image
              src={project.poster_url ?? "/footerLogo.svg"}
              alt="포스터"
              width={580}
              height={820}
              style={{
                width: "100%",
                height: "100%",
              }}
              priority
              unoptimized
            />
          </div>

          <div className="bg-[#5D5E67] desktop:p-10 p-6 rounded-xl">
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

              <div className="text-[#E2E2EB] desktop:text-xl text-sm font-normal flex flex-col desktop:gap-5 gap-3">
                <p>{project.cardinal}기</p>
                <p>{toUpperCaseOnlyLetters(project.type)}</p>
                <p>{`(${project.start_date} ~ ${project.end_date})`}</p>
                <TeamMember role="기획" members={project.team.planner} />
                <TeamMember role="디자인" members={project.team.designer} />
                {project.team.frontend && (
                  <TeamMember
                    role="프론트엔드"
                    members={project.team.frontend}
                  />
                )}
                {project.team.ios && (
                  <TeamMember role="IOS" members={project.team.ios} />
                )}
                {project.team.aos && (
                  <TeamMember role="AOS" members={project.team.aos} />
                )}
                <TeamMember role="백엔드" members={project.team.backend} />
              </div>
            </div>
          </div>

          <div className="bg-[#2F3038] desktop:p-10 p-6 rounded-xl">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default OldProjectSection;
