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

export const Filter = ({ cardinal, onChange, projectList }: FilterProps) => {
  // 26기부터 31기까지 배열 생성
  const generations = Array.from({ length: 6 }, (_, i) => 31 - i);

  // 프로젝트 개수 계산
  const projectCounts = useMemo(() => {
    return calculateProjectCounts(projectList);
  }, [projectList]);

  return (
    <div className="flex justify-center gap-6 mb-12">
      <div className="flex gap-3 mr-6">
        <button
          className={`${
            cardinal === "" ? "bg-[#05F]" : "bg-[#2F3038]"
          } text-xl font-semibold leading-[150%] tracking-[-0.2px] py-2 rounded-[75px] w-[130px] cursor-pointer`}
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
            } text-xl font-semibold leading-[150%] tracking-[-0.2px] py-2 rounded-[75px] w-[130px] cursor-pointer`}
            type="button"
            onClick={() => onChange(gen.toString())}
          >
            {`${gen}기 (${projectCounts[gen]})`}
          </button>
        ))}
      </div>
    </div>
  );
};
