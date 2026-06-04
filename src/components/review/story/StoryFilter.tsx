import { Dropdown } from "@kusitms.com/ui";
import { useMemo } from "react";
import type { StoriesParams } from "@/service/reviews/getStories";

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
  프론트: "FRONTEND",
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
    <div className="flex tablet:flex-row flex-col justify-between">
      <p className="tablet:text-title-7 text-body-3 text-gray-700 tablet:pb-[39px] pb-[12px]">
        전체 게시글 <span className="text-dark-blue-600">{totalCount}</span>개
      </p>
      <div className="flex tablet:gap-[12px] gap-[8px] pb-[20px] tablet:pb-0">
        <Dropdown
          options={Object.keys(CATEGORIES).map((o) => ({ value: o, label: o }))}
          value={getSelectedLabel(category, CATEGORIES)}
          onValueChange={(value) =>
            onChange({
              generation,
              position,
              category: CATEGORIES[value as keyof typeof CATEGORIES],
            })
          }
        />
        <Dropdown
          options={genOptions.map((o) => ({ value: o, label: o }))}
          value={generation ? `${generation}기` : "모든 기수"}
          onValueChange={(value) =>
            onChange({
              generation: value === "모든 기수" ? undefined : parseInt(value.replace("기", ""), 10),
              position,
              category,
            })
          }
        />
        <Dropdown
          options={Object.keys(POSITIONS).map((o) => ({ value: o, label: o }))}
          value={getSelectedLabel(position, POSITIONS)}
          onValueChange={(value) =>
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
