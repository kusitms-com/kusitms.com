import Image from "next/image";
import React from "react";
import { MeetupProjectDetail } from "@/service/projects";
import { IconLink } from "@/components/shared";
import { toUpperCaseOnlyLetters } from "@/utils";

function OldProjectSection({ project }: { project: MeetupProjectDetail }) {
  const team = project.team;
  const renderTeamSection = (role: string, members: string[]) => (
    <p>
      <span className="text-[18px] text-[#CCC]">{role} |</span>
      {" " + members.join(", ")}
    </p>
  );

  return (
    <div className="flex items-center justify-center z-10 w-full my-[120px]">
      <div className="w-full">
        <div className="flex justify-between mb-6">
          <h2 className="text-5xl font-extrabold">{project.name}</h2>
        </div>

        <div className="mb-3 flex justify-between items-center">
          <p className="text-xl text-[#E2E2EB]">{project.one_line_intro}</p>
          <div className="flex items-center gap-3 min-h-[40px] mb-2">
            {project.instagram_url && (
              <IconLink
                className="w-[52px] h-[52px] rounded-2xl"
                size={35}
                img="/projects/icons/InstagramIcon.svg"
                link={project.instagram_url}
              />
            )}
            {project.github_url && (
              <IconLink
                className="w-[52px] h-[52px] rounded-2xl"
                size={35}
                img="/projects/icons/GithubIcon.svg"
                link={project.github_url}
              />
            )}
            {project.app_url && (
              <IconLink
                className="w-[52px] h-[52px] rounded-2xl"
                size={25}
                img="/projects/icons/DetailLinkIcon.svg"
                link={project.app_url}
              />
            )}
          </div>
        </div>

        <div className="grid grid-cols-[minmax(0,580px)_minmax(0,580px)] grid-rows-[minmax(0,470px)_minmax(0,330px)] gap-3">
          <div className="row-span-2 bg-gray-200 flex items-center justify-center rounded-xl overflow-hidden">
            <Image
              src={project.poster_url ?? "/footerLogo.svg"}
              alt="포스터"
              width={580}
              height={820}
              style={{ width: "580px", height: "820px" }}
              priority
              unoptimized
            />
          </div>

          <div className="bg-[#5D5E67] p-10 rounded-xl">
            <div className="flex gap-2 border-b border-dashed border-[#ccc] mb-6">
              <Image
                src="/projects/icons/Summation.svg"
                className="pt-1"
                alt="프로젝트 요약"
                width={20}
                height={25}
              />
              <h3 className="text-2xl font-extrabold mb-4">프로젝트 요약</h3>
            </div>

            <div className="flex gap-8">
              <div className="text-xl font-normal flex flex-col gap-5">
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
                    />
                    <p>{alt}</p>
                  </div>
                ))}
              </div>

              <div className="text-[#E2E2EB] text-xl font-normal flex flex-col gap-5">
                <p>{project.cardinal}기</p>
                <p>{toUpperCaseOnlyLetters(project.type)}</p>
                <p>{`(${project.start_date} ~ ${project.end_date})`}</p>
                {renderTeamSection("기획", team.planner)}
                {renderTeamSection("디자인", team.designer)}
                {team.frontend &&
                  renderTeamSection("프론트엔드", team.frontend)}
                {team.ios && renderTeamSection("IOS", team.ios)}
                {team.aos && renderTeamSection("AOS", team.aos)}
                {renderTeamSection("백엔드", team.backend)}
              </div>
            </div>
          </div>

          <div className="bg-[#2F3038] p-10 rounded-xl">
            <div className="flex gap-2 border-b border-dashed border-[#ccc] mb-6">
              <Image
                src="/projects/icons/Explanation.svg"
                alt="프로젝트 설명"
                width={24}
                height={24}
              />
              <h3 className="text-2xl font-extrabold mb-4">프로젝트 설명</h3>
            </div>
            <p className="text-xl font-normal overflow-y-auto custom-scrollbar-none h-[180px]">
              {project.intro}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OldProjectSection;
