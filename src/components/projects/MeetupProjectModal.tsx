"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import useOutside from "@/hooks/useOutsideClickHook";
import {
  getMeetupProjectDetail,
  MeetupProjectDetailResponse,
} from "@/service/projects";
import { LinkCircle } from "../shared";

interface MeetupProjectModalProps {
  handleModalClose: () => void;
  projectId: number;
}

export const MeetupProjectModal = ({
  handleModalClose,
  projectId,
}: MeetupProjectModalProps) => {
  const modalRef = useOutside<HTMLDivElement>({
    onCloseToggle: handleModalClose,
  });

  const [projectData, setProjectData] = useState<MeetupProjectDetailResponse>();

  useEffect(() => {
    getMeetupProjectDetail(projectId).then((res) => setProjectData(res));
  }, [projectId]);

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.9)] flex items-center justify-center z-10">
      <div className="absolute max-w-[65%]" ref={modalRef}>
        <div className="flex justify-between mb-6">
          <h2 className="text-4xl font-extrabold">{projectData?.data.name}</h2>
          <Image
            className="cursor-pointer"
            src="/projects/icons/CloseIcon.svg"
            alt="모달 닫기"
            width={28}
            height={28}
            style={{ width: "28px", height: "28px" }}
            onClick={handleModalClose}
          />
        </div>
        <div className="mb-3">
          <p className="text-xl font-normal">
            {projectData?.data.one_line_intro}
          </p>
        </div>
        <div className="flex items-center justify-end gap-3 min-h-[40px] mb-2">
          {projectData?.data.instagram_url && (
            <LinkCircle
              img="/projects/icons/InstagramIcon.svg"
              link={projectData?.data.instagram_url}
            />
          )}
          {projectData?.data.github_url && (
            <LinkCircle
              img="/projects/icons/GithubIcon.svg"
              link={projectData?.data.github_url}
            />
          )}
          {projectData?.data.app_url && (
            <LinkCircle
              img="/projects/icons/DetailLinkIcon.svg"
              link={projectData?.data.app_url}
            />
          )}
        </div>
        <div className="grid grid-cols-[minmax(0,380px)_minmax(0,540px)] grid-rows-[minmax(0,270px)_minmax(0,250px)] gap-3">
          <div className="row-span-2 bg-gray-200 flex items-center justify-center rounded-xl overflow-hidden">
            <Image
              src={projectData?.data.poster_url ?? "/footerLogo.svg"}
              alt="포스터"
              width={380}
              height={540}
              style={{ width: "380px", height: "540px" }}
            />
          </div>
          <div className="bg-[#5D5E67] py-6 pl-8 pt-6 pr-12 rounded-xl">
            <h3 className="text-xl font-extrabold mb-4">프로젝트 요약</h3>
            <div className="flex justify-between">
              <div className="border-r-[1px] pr-12 text-base font-normal flex flex-col gap-2">
                <p>진행기수</p>
                <p>프로젝트 형태 / 기간</p>
                <p>팀 구성</p>
              </div>
              <div className="text-[#E2E2EB] text-base font-normal flex flex-col gap-2">
                <p>{projectData?.data.cardinal}</p>
                <p>{`${projectData?.data.type} (${projectData?.data.start_date} ~ ${projectData?.data.end_date})`}</p>
                <p>
                  기획 ({projectData?.data.team.planner.length}) :
                  {" " + projectData?.data.team.planner.join(", ")}
                </p>
                <p>
                  디자인 ({projectData?.data.team.designer.length}) :
                  {" " + projectData?.data.team.designer.join(", ")}
                </p>
                {projectData?.data.team.frontend && (
                  <p>
                    프론트엔드 ({projectData?.data.team.frontend.length}) :
                    {" " + projectData?.data.team.frontend.join(", ")}
                  </p>
                )}
                {projectData?.data.team.ios && (
                  <p>
                    ios ({projectData?.data.team.ios.length}) :
                    {" " + projectData?.data.team.ios.join(", ")}
                  </p>
                )}
                {projectData?.data.team.aos && (
                  <p>
                    aos ({projectData?.data.team.aos.length}) :
                    {" " + projectData?.data.team.aos.join(", ")}
                  </p>
                )}
                <p>
                  백엔드 ({projectData?.data.team.backend.length}) :
                  {" " + projectData?.data.team.backend.join(", ")}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#2F3038] py-6 px-10 pt-8 rounded-xl">
            <h3 className="text-xl font-extrabold mb-6">프로젝트 설명</h3>
            <p className="text-base font-normal overflow-y-auto custom-scrollbar-none h-[140px]">
              {projectData?.data.intro}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
