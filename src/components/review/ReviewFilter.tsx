/* eslint-disable no-unused-vars */
import React from "react";
import { TeamType } from "./Reviews";

interface ReviewFilterProps {
  team: TeamType;
  onChange: (team: "DEVELOPER" | "PLANNER" | "DESIGNER" | "") => void;
}

export default function ReviewFilter({ team, onChange }: ReviewFilterProps) {
  const getButtonClass = (value: "DEVELOPER" | "PLANNER" | "DESIGNER" | "") =>
    `px-8 py-4 rounded-[75px] text-xl cursor-pointer transition-colors ${
      team === value ? "bg-[#05f] text-white" : "bg-[#DCE1FF] text-black"
    }`;

  return (
    <section className="flex gap-12 mb-[120px]">
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
