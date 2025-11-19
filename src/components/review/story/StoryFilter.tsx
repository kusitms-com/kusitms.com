import React, { useMemo } from "react";
import { BlogCategory, BlogPosition } from "@/constants/blogTypes";
import type { StoriesParams } from "@/service/reviews/getStories";
import Dropdown from "../../projects/common/DropDown";

interface StoryFilterProps {
  generation?: number;
  position?: BlogPosition;
  category?: BlogCategory;
  totalCount: number;
  onChange: (params: StoriesParams) => void;
}

const CATEGORIES = {
  "모든 활동": undefined,
  "서류 후기": BlogCategory.DOCUMENT,
  "면접 후기": BlogCategory.INTERVIEW,
  "기업 프로젝트": BlogCategory.GIFT,
  "밋업 프로젝트": BlogCategory.MEETUP,
  "소모임 · TF": BlogCategory.GROUP_TF,
} as const;

const POSITIONS = {
  "모든 파트": undefined,
  프론트엔드: BlogPosition.FRONTEND,
  백엔드: BlogPosition.BACKEND,
  디자이너: BlogPosition.DESIGNER,
  기획: BlogPosition.PLAN,
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

  const getSelectedLabel = <T,>(value: T | undefined, options: Record<string, T | undefined>) =>
    Object.entries(options).find(([, v]) => v === value)?.[0] || Object.keys(options)[0];

  return (
    <div className="flex justify-between">
      <p className="text-title-7 text-gray-700 pb-[39px]">
        전체 게시글 <span className="text-dark-blue-600">{totalCount}</span>개
      </p>
      <div className="flex gap-[12px]">
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
