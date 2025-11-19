import React from "react";
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

export default function StoryFilter({
  generation,
  position,
  category,
  totalCount,
  onChange,
}: StoryFilterProps) {
  const generations = Array.from({ length: 7 }, (_, i) => `${31 - i}기`);
  const genOptions = ["모든 기수", ...generations];

  const categoryOptions = [
    "모든 활동",
    "서류 후기",
    "면접 후기",
    "기업 프로젝트",
    "밋업 프로젝트",
    "소모임 · TF",
  ];
  const categoryMap: Record<string, BlogCategory | undefined> = {
    "모든 활동": undefined,
    "서류 후기": BlogCategory.DOCUMENT,
    "면접 후기": BlogCategory.INTERVIEW,
    "기업 프로젝트": BlogCategory.GIFT,
    "밋업 프로젝트": BlogCategory.MEETUP,
    "소모임 · TF": BlogCategory.GROUP_TF,
  };

  const partOptions = ["모든 파트", "프론트엔드", "백엔드", "디자이너", "기획"];
  const positionMap: Record<string, BlogPosition | undefined> = {
    "모든 파트": undefined,
    프론트엔드: BlogPosition.FRONTEND,
    백엔드: BlogPosition.BACKEND,
    디자이너: BlogPosition.DESIGNER,
    기획: BlogPosition.PLAN,
  };

  const handleCategoryChange = (value: string) => {
    const newCategory = categoryMap[value];
    onChange({ generation, position, category: newCategory });
  };

  const handleGenerationChange = (value: string) => {
    const newGeneration = value === "모든 기수" ? undefined : parseInt(value.replace("기", ""));
    onChange({ generation: newGeneration, position, category });
  };

  const handlePositionChange = (value: string) => {
    const newPosition = positionMap[value];
    onChange({ generation, position: newPosition, category });
  };

  const getCategoryLabel = () => {
    if (!category) return "모든 활동";
    return Object.keys(categoryMap).find((k) => categoryMap[k] === category) || "모든 활동";
  };

  const getPositionLabel = () => {
    if (!position) return "모든 파트";
    return Object.keys(positionMap).find((k) => positionMap[k] === position) || "모든 파트";
  };

  return (
    <div className="flex justify-between">
      <p className="text-title-7 text-gray-700 pb-[39px]">
        전체 게시글 <span className="text-dark-blue-600">{totalCount}</span>개
      </p>
      <div className="flex gap-[12px]">
        <Dropdown
          options={categoryOptions}
          selected={getCategoryLabel()}
          onSelect={handleCategoryChange}
        />
        <Dropdown
          options={genOptions}
          selected={generation ? `${generation}기` : "모든 기수"}
          onSelect={handleGenerationChange}
        />
        <Dropdown
          options={partOptions}
          selected={getPositionLabel()}
          onSelect={handlePositionChange}
        />
      </div>
    </div>
  );
}
