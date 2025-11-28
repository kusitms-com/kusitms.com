import React, { useMemo } from "react";
import Dropdown from "./DropDown";
import { calculateProjectCounts } from "@/utils/projectCountUtils";
import type { CorporateProjectItem, MeetupItem } from "@/service/projects";

interface ProjectFilterProps {
  cardinal: string;
  onChange: (cardinal: string) => void;
  projectList: MeetupItem[] | CorporateProjectItem[];
}

export default function ProjectFilter({
  cardinal,
  onChange,
  projectList,
}: ProjectFilterProps) {
  const generations = Array.from({ length: 7 }, (_, i) => `${31 - i}기`);
  const options = ["모든 기수", ...generations];

  const projectCounts = useMemo(
    () => calculateProjectCounts(projectList),
    [projectList]
  );

  const visibleCount =
    cardinal === "" || !cardinal
      ? projectCounts.total
      : projectCounts[cardinal] ?? 0;

  return (
    <div className="flex justify-between">
      <p className="tablet:text-title-7 text-body-5 text-gray-700 pb-[39px] pt-[4.5px]">
        전체 프로젝트 <span className="text-dark-blue-600">{visibleCount}</span>
        개
      </p>
      <Dropdown
        options={options}
        selected={cardinal ? `${cardinal}기` : "모든 기수"}
        onSelect={(value) =>
          onChange(value === "모든 기수" ? "" : value.replace("기", ""))
        }
      />
    </div>
  );
}
