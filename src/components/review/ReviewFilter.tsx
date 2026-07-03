"use client";

import { Dropdown } from "@kusitms.com/ui";
import { useMemo } from "react";

interface ReviewFilterProps {
  team: string;
  cardinal?: number;
  totalCount: number;
  onChange: (params: { team?: string; cardinal?: number }) => void;
}

const CARDINALS = {
  "모든 기수": undefined,
  "33기": 33,
  "31기": 31,
  "30기": 30,
  "29기": 29,
  "28기": 28,
  "27기": 27,
} as const;

const TEAMS = {
  "모든 파트": "",
  기획: "PLANNER",
  디자인: "DESIGNER",
  개발: "DEVELOPER",
} as const;

const getSelectedLabel = <T,>(value: T | undefined, options: Record<string, T | undefined>) =>
  Object.entries(options).find(([, v]) => v === value)?.[0] || Object.keys(options)[0];

export default function ReviewFilter({ team, cardinal, totalCount, onChange }: ReviewFilterProps) {
  const cardinalOptions = useMemo(() => Object.keys(CARDINALS), []);
  const teamOptions = useMemo(() => Object.keys(TEAMS), []);

  return (
    <div className="flex tablet:flex-row flex-col justify-between gap-2 tablet:px-10 px-4 tablet:pb-7 pb-5">
      <p className="tablet:text-title-7 text-body-3 text-gray-700">
        전체 후기 <span className="text-dark-blue-600">{totalCount}</span>개
      </p>
      <div className="flex gap-[12px]">
        <Dropdown
          options={cardinalOptions.map((o) => ({ value: o, label: o }))}
          value={getSelectedLabel(cardinal, CARDINALS)}
          onValueChange={(value) =>
            onChange({
              team,
              cardinal: CARDINALS[value as keyof typeof CARDINALS],
            })
          }
        />
        <Dropdown
          options={teamOptions.map((o) => ({ value: o, label: o }))}
          value={getSelectedLabel(team, TEAMS)}
          onValueChange={(value) =>
            onChange({
              team: TEAMS[value as keyof typeof TEAMS],
              cardinal,
            })
          }
        />
      </div>
    </div>
  );
}
