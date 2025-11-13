import React, { useMemo } from "react";
import Dropdown from "../../projects/common/DropDown";

interface StoryFilterProps {
  cardinal: string;
  onChange: (cardinal: string) => void;
  // storyList: ;
}

export default function StoryFilter({ cardinal, onChange }: StoryFilterProps) {
  const generations = Array.from({ length: 7 }, (_, i) => `${31 - i}기`);
  const activityOptions = ["모든 활동", "프로젝트", "스터디", "공모전", "기타"];
  const genOptions = ["모든 기수", ...generations];
  const partOptions = ["모든 파트", "프론트엔드", "백엔드", "디자인", "기획", "AI"];

  return (
    <div className="flex justify-between">
      <p className="text-title-7 text-gray-700 pb-[39px]">
        전체 게시글 <span className="text-dark-blue-600">00</span>개
      </p>
      <div className="flex gap-[12px]">
        <Dropdown
          options={activityOptions}
          selected={cardinal ? `${cardinal}기` : "모든 활동"}
          onSelect={(value) => onChange(value === "모든 활동" ? "" : value.replace("기", ""))}
        />
        <Dropdown
          options={genOptions}
          selected={cardinal ? `${cardinal}기` : "모든 기수"}
          onSelect={(value) => onChange(value === "모든 기수" ? "" : value.replace("기", ""))}
        />
        <Dropdown
          options={partOptions}
          selected={cardinal ? `${cardinal}기` : "모든 파트"}
          onSelect={(value) => onChange(value === "모든 파트" ? "" : value.replace("기", ""))}
        />
      </div>
    </div>
  );
}
