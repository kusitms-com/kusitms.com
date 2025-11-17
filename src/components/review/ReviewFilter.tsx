"use client";

import { useState } from "react";
import type { TeamType } from "./Reviews";

interface ReviewFilterProps {
  team: TeamType;
  cardinal: number | "";
  totalCount: number;
  onTeamChange: (team: TeamType) => void;
  onCardinalChange: (cardinal: number | "") => void;
}

export default function ReviewFilter({
  team,
  cardinal,
  totalCount,
  onTeamChange,
  onCardinalChange,
}: ReviewFilterProps) {
  const [isTeamOpen, setIsTeamOpen] = useState(false);
  const [isCardinalOpen, setIsCardinalOpen] = useState(false);

  const teamOptions = [
    { value: "" as TeamType, label: "모든 파트" },
    { value: "PLANNER" as TeamType, label: "기획" },
    { value: "DEVELOPER" as TeamType, label: "개발" },
    { value: "DESIGNER" as TeamType, label: "디자인" },
  ];

  const cardinalOptions = [
    { value: "" as const, label: "모든 기수" },
    { value: 27, label: "27기" },
    { value: 28, label: "28기" },
    { value: 29, label: "29기" },
    { value: 30, label: "30기" },
    { value: 31, label: "31기" },
  ];

  const selectedTeamLabel = teamOptions.find((opt) => opt.value === team)?.label || "모든 파트";
  const selectedCardinalLabel =
    cardinalOptions.find((opt) => opt.value === cardinal)?.label || "모든 기수";

  return (
    <section className="flex items-start justify-between px-10 pb-7">
      <h2 className="desktop:text-4xl text-xl font-normal leading-[42px] tracking-[-1px]">
        <span className="text-title-7 text-gray-700">전체 후기 </span>
        <span className="text-title-7 text-dark-blue-600">{totalCount}</span>
        <span className="text-title-7 text-gray-700">개</span>
      </h2>
      <div className="flex desktop:gap-4 gap-2">
        <div className="relative">
          <button
            type="button"
            onClick={() => {
              setIsCardinalOpen(!isCardinalOpen);
              setIsTeamOpen(false);
            }}
            className="flex items-center gap-2 desktop:px-6 px-4 desktop:py-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 desktop:text-base text-sm cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <span>{selectedCardinalLabel}</span>
            <svg
              className={`w-4 h-4 transition-transform ${isCardinalOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {isCardinalOpen && (
            <>
              <div className="fixed inset-0 z-10" onClick={() => setIsCardinalOpen(false)} />
              <div className="absolute top-full mt-1 left-0 z-20 bg-white border border-gray-300 rounded-lg shadow-lg min-w-[120px] desktop:min-w-[140px]">
                {cardinalOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => {
                      onCardinalChange(option.value);
                      setIsCardinalOpen(false);
                    }}
                    className={`w-full text-left desktop:px-6 px-4 desktop:py-3 py-2 desktop:text-base text-sm hover:bg-gray-50 transition-colors ${
                      cardinal === option.value ? "bg-blue-50 text-[#05f]" : "text-gray-700"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
        <div className="relative">
          <button
            type="button"
            onClick={() => {
              setIsTeamOpen(!isTeamOpen);
              setIsCardinalOpen(false);
            }}
            className="flex items-center gap-2 desktop:px-6 px-4 desktop:py-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 desktop:text-base text-sm cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <span>{selectedTeamLabel}</span>
            <svg
              className={`w-4 h-4 transition-transform ${isTeamOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {isTeamOpen && (
            <>
              <div className="fixed inset-0 z-10" onClick={() => setIsTeamOpen(false)} />
              <div className="absolute top-full mt-1 right-0 z-20 bg-white border border-gray-300 rounded-lg shadow-lg min-w-[120px] desktop:min-w-[140px]">
                {teamOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => {
                      onTeamChange(option.value);
                      setIsTeamOpen(false);
                    }}
                    className={`w-full text-left desktop:px-6 px-4 desktop:py-3 py-2 desktop:text-base text-sm hover:bg-gray-50 transition-colors ${
                      team === option.value ? "bg-blue-50 text-[#05f]" : "text-gray-700"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
