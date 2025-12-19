import Image from "next/image";
import Link from "next/link";
import React from "react";
import type { MeetupProjectDetail } from "@/service/projects";
import { toUpperCaseOnlyLetters } from "@/utils";
import TeamMember from "./common/TeamMember";

function OldProjectSection({ project }: { project: MeetupProjectDetail }) {
  return (
    <div className="flex flex-col gap-5 px-10">
      <div className="flex justify-start items-center relative gap-3">
        <p className="text-title-6 text-gray-900 font-bold">{project.name}</p>
        <div className="flex gap-2">
          <div className="bg-sky-blue-100 rounded-[8px] px-4 py-1">
            <p className="text-sky-blue-700 text-body-5">{project.cardinal}기</p>
          </div>
          <div className="bg-sky-blue-100 rounded-[8px] px-4 py-1">
            <p className="text-sky-blue-700 text-body-5">{toUpperCaseOnlyLetters(project.type)}</p>
          </div>
        </div>
      </div>
      <div className="relative px-10 w-full h-[663px]">
        <Image
          src={project.poster_url ?? "/footerLogo.svg"}
          className="object-cover rounded-[20px]"
          fill
          alt="poster"
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-body-3 text-gray-700 font-bold">프로젝트 설명</p>
        <p className="text-body-6 text-gray-500">{project.intro}</p>
      </div>
      <div className="flex">
        <div className="flex-1 flex flex-col gap-3">
          <p className="text-body-3 text-gray-700 font-bold">프로젝트 팀원</p>
          <TeamMember role="기획" members={project.team.planner} />
          <TeamMember role="디자인" members={project.team.designer} />
          {project.team.frontend && (
            <TeamMember role="프론트엔드" members={project.team.frontend} />
          )}
          {project.team.ios && <TeamMember role="IOS" members={project.team.ios} />}
          {project.team.aos && <TeamMember role="AOS" members={project.team.aos} />}
          <TeamMember role="백엔드" members={project.team.backend} />
        </div>

        <div className="flex-1 flex flex-col gap-3">
          <p className="text-body-3 text-gray-700 font-bold">링크</p>
          {[
            {
              url: project.instagram_url,
              icon: "InstagramIcon.svg",
              label: "Instagram",
            },
            {
              url: project.github_url,
              icon: "GithubIcon2.svg",
              label: "Github",
            },
            {
              url: project.app_url,
              icon: "LinkIcon2.svg",
              label: "서비스 바로가기",
            },
          ].map(
            (link) =>
              link.url && (
                <Link
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  className="flex items-center gap-2 bg-gray-50 w-fit rounded-[8px] pl-4 pr-2 py-[10px] h-10"
                >
                  <Image
                    src={`/projects/icons/${link.icon}`}
                    alt={link.label}
                    width={20}
                    height={20}
                  />
                  <p className="text-body-6 text-gray-700">{link.label}</p>
                  <Image
                    src="/projects/icons/ProjectArrowRight.svg"
                    alt="right arrow"
                    width={20}
                    height={20}
                  />
                </Link>
              ),
          )}
        </div>
      </div>
    </div>
  );
}

export default OldProjectSection;
