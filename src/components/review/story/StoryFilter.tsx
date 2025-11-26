import React, { useMemo } from "react";
import type { StoriesParams } from "@/service/reviews/getStories";
import Dropdown from "../../projects/common/DropDown";

interface StoryFilterProps {
  generation?: number;
  position?: string;
  category?: string;
  totalCount: number;
  onChange: (params: StoriesParams) => void;
}

const CATEGORIES = {
  "모든 활동": undefined,
  "서류 후기": "DOCUMENT",
  "면접 후기": "INTERVIEW",
  "기업 프로젝트": "GIFT",
  "밋업 프로젝트": "MEETUP",
  "소모임 · TF": "GROUP_TF",
} as const;

const POSITIONS = {
  "모든 파트": undefined,
  프론트엔드: "FRONTEND",
  백엔드: "BACKEND",
  디자이너: "DESIGNER",
  기획: "PLAN",
} as const;

export default function StoryFilter({
  generation,
  position,
  category,
  totalCount,
  onChange,
}: StoryFilterProps) {
  const genOptions = useMemo(
    () => ["모든 기수", ...Array.from({ length: 7 }, (_, i) => `${31 - i}기`)],
    [],
  );

  const getSelectedLabel = (value: unknown, options: Record<string, unknown>) =>
    Object.entries(options).find(([, v]) => v === value)?.[0] || Object.keys(options)[0];

  return (
    <div className="flex desktop:flex-row flex-col justify-between">
      <p className="desktop:text-title-7 text-body-5 text-gray-700 desktop:pb-[39px] pb-[12px]">
        전체 게시글 <span className="text-dark-blue-600">{totalCount}</span>개
      </p>
      <div className="flex desktop:gap-[12px] gap-[8px] pb-[20px] desktop:pb-0">
        <Dropdown
          options={Object.keys(CATEGORIES)}
          selected={getSelectedLabel(category, CATEGORIES)}
          onSelect={(value) =>
            onChange({
              generation,
              position,
              category: CATEGORIES[value as keyof typeof CATEGORIES],
            })
          }
        />
        <Dropdown
          options={genOptions}
          selected={generation ? `${generation}기` : "모든 기수"}
          onSelect={(value) =>
            onChange({
              generation: value === "모든 기수" ? undefined : parseInt(value.replace("기", "")),
              position,
              category,
            })
          }
        />
        <Dropdown
          options={Object.keys(POSITIONS)}
          selected={getSelectedLabel(position, POSITIONS)}
          onSelect={(value) =>
            onChange({
              generation,
              position: POSITIONS[value as keyof typeof POSITIONS],
              category,
            })
          }
        />
      </div>
    </div>
  );
}
