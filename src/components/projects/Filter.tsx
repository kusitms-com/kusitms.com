/* eslint-disable no-unused-vars */
import React, { useMemo } from "react";
import { calculateProjectCounts } from "@/utils/projectCountUtils";
import { MeetupItem, CorporateProjectItem } from "@/service/projects";

interface FilterProps {
  cardinal: string;
  onChange: (cardinal: string) => void;
  generation?: number;
  projectList: MeetupItem[] | CorporateProjectItem[];
}

export default function Filter({
  cardinal,
  onChange,
  projectList,
}: FilterProps) {
  // 25기부터 31기까지 배열 생성
  const generations = Array.from({ length: 7 }, (_, i) => 31 - i);

  // 프로젝트 개수 계산
  const projectCounts = useMemo(() => {
    return calculateProjectCounts(projectList);
  }, [projectList]);

  return (
    <div className="flex desktop:justify-center justify-start gap-6 desktop:mb-12 mb-6 overflow-x-auto desktop:overflow-x-visible px-4 desktop:px-0 custom-scrollbar-none">
      <div className="flex gap-3 mr-6 min-w-max">
        <button
          className={`${
            cardinal === "" ? "bg-[#05F]" : "bg-[#2F3038]"
          } desktop:text-xl text-[10px] font-semibold leading-[150%] tracking-[-0.2px] desktop:py-2 py-1 rounded-[75px] desktop:w-[130px] w-[65px] cursor-pointer flex-shrink-0 h-[24px] desktop:h-[46px]`}
          type="button"
          onClick={() => onChange("")}
        >
          {`전체 (${projectCounts.total})`}
        </button>
        {generations.map((gen) => (
          <button
            key={gen}
            className={`${
              cardinal === gen + "" ? "bg-[#05F]" : "bg-[#2F3038]"
            } desktop:text-xl text-[10px] font-semibold leading-[150%] tracking-[-0.2px] desktop:py-2 py-1 rounded-[75px] desktop:w-[130px] w-[65px] cursor-pointer flex-shrink-0 h-[24px] desktop:h-[46px]`}
            type="button"
            onClick={() => onChange(gen.toString())}
          >
            {`${gen}기 (${projectCounts[gen]})`}
          </button>
        ))}
      </div>
    </div>
  );
}
