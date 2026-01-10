"use client";
import Image from "next/image";
import Link from "next/link";
import type { MeetupProjectDetail } from "@/service/projects";
import { toUpperCaseOnlyLetters } from "@/utils";
import TeamMember from "./common/TeamMember";

function RecentProjectSection({ project }: { project: MeetupProjectDetail }) {
  return (
    <div className="flex flex-col gap-5 tablet:px-10 px-4 tablet:pt-7">
      <div className="flex justify-start items-center relative tablet:gap-3 gap-2">
        <p className="tablet:text-title-6 text-body-3 text-gray-900 font-bold">{project.name}</p>
        <div className="flex tablet:gap-2 gap-1">
          <div className="bg-sky-blue-100 tablet:rounded-[8px] rounded-[4px] tablet:px-4 px-2 tablet:py-1 py-0.5">
            <p className="text-sky-blue-700 tablet:text-body-5 text-body-7">{project.cardinal}기</p>
          </div>
          <div className="bg-sky-blue-100 tablet:rounded-[8px] rounded-[4px] tablet:px-4 px-2 tablet:py-1 py-0.5">
            <p className="text-sky-blue-700 tablet:text-body-5 text-body-7">
              {toUpperCaseOnlyLetters(project.type)}
            </p>
          </div>
        </div>
      </div>
      <div className="relative rounded-[16px] overflow-hidden border border-gray-200">
        <Image
          src={project.poster_url}
          alt="poster"
          width={1000}
          height={1400}
          unoptimized
          className="w-full h-auto object-contain"
          priority
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="tablet:text-body-3 text-body-5 text-gray-700 font-bold">프로젝트 설명</p>
        <p className="tablet:text-body-6 text-body-8 text-gray-500">{project.intro}</p>
      </div>
      <div
        className="grid gap-5 pt-5"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}
      >
        <div className="min-w-[220px] flex flex-col gap-3">
          <p className="tablet:text-body-3 text-body-5 text-gray-700 font-bold">프로젝트 팀원</p>
          <TeamMember position="기획" members={project.team.planner} />
          <TeamMember position="디자인" members={project.team.designer} />
          <TeamMember position="프론트엔드" members={project.team.frontend} />
          <TeamMember position="백엔드" members={project.team.backend} />
        </div>
        <div className="min-w-[220px] flex flex-col gap-3">
          <p className="tablet:text-body-3 text-body-5 text-gray-700 font-bold">링크</p>
          {[
            {
              url: project.behance_url,
              icon: "BehanceIcon2.svg",
              label: "Behance",
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
                  className="flex items-center gap-2 bg-gray-50 w-fit rounded-[8px] pl-4 pr-2 tablet:py-[10px] py-[8px]"
                >
                  <Image
                    src={`/projects/icons/${link.icon}`}
                    alt={link.label}
                    width={20}
                    height={20}
                    className="tablet:w-[20px] tablet:h-[20px] w-[18px] h-[18px]"
                  />
                  <p className="tablet:text-body-6 text-body-9 text-gray-700">{link.label}</p>
                  <Image
                    src="/projects/icons/ProjectArrowRight.svg"
                    alt="right arrow"
                    width={20}
                    height={20}
                    className="tablet:w-[20px] tablet:h-[20px] w-[18px] h-[18px]"
                  />
                </Link>
              ),
          )}
        </div>
      </div>
    </div>
  );
}

export default RecentProjectSection;
