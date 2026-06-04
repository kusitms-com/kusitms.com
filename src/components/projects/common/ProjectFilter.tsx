import { Dropdown } from "@kusitms.com/ui";
import { useMemo } from "react";
import type { CorporateProjectItem, MeetupItem } from "@/service/projects";
import { calculateProjectCounts } from "@/utils/projectCountUtils";

interface ProjectFilterProps {
  cardinal: string;
  onChange: (cardinal: string) => void;
  projectList: MeetupItem[] | CorporateProjectItem[];
}

export default function ProjectFilter({ cardinal, onChange, projectList }: ProjectFilterProps) {
  const generations = Array.from({ length: 7 }, (_, i) => `${32 - i}기`);
  const options = ["모든 기수", ...generations];

  const projectCounts = useMemo(() => calculateProjectCounts(projectList), [projectList]);

  const visibleCount =
    cardinal === "" || !cardinal ? projectCounts.total : (projectCounts[cardinal] ?? 0);

  return (
    <div className="flex justify-between items-start">
      <p className="tablet:text-title-7 text-body-3 text-gray-700 pb-[39px] pt-[4.5px]">
        전체 프로젝트 <span className="text-dark-blue-600">{visibleCount}</span>개
      </p>
      <Dropdown
        options={options.map((o) => ({ value: o, label: o }))}
        value={cardinal ? `${cardinal}기` : "모든 기수"}
        onValueChange={(value) => onChange(value === "모든 기수" ? "" : value.replace("기", ""))}
      />
    </div>
  );
}
