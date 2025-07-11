/* eslint-disable no-unused-vars */
import React from "react";
import { TeamType } from "./Reviews";

interface ReviewFilterProps {
  team: TeamType;
  onChange: (team: "DEVELOPER" | "PLANNER" | "DESIGNER" | "") => void;
}

export default function ReviewFilter({ team, onChange }: ReviewFilterProps) {
  const getButtonClass = (value: "DEVELOPER" | "PLANNER" | "DESIGNER" | "") =>
    `desktop:px-8 px-4 desktop:py-5 py-2 rounded-[75px] desktop:text-xl text-sm cursor-pointer transition-colors text-white ${
      team === value ? "bg-[#05f]" : "bg-[#2F3038]"
    }`;

  return (
    <section className="flex desktop:gap-12 gap-3 desktop:mb-[120px] mb-[60px]">
      <button className={getButtonClass("")} onClick={() => onChange("")}>
        전체
      </button>
      <button
        className={getButtonClass("PLANNER")}
        onClick={() => onChange("PLANNER")}
      >
        기획
      </button>
      <button
        className={getButtonClass("DEVELOPER")}
        onClick={() => onChange("DEVELOPER")}
      >
        개발
      </button>
      <button
        className={getButtonClass("DESIGNER")}
        onClick={() => onChange("DESIGNER")}
      >
        디자인
      </button>
    </section>
  );
}
