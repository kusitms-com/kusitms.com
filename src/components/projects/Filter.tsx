/* eslint-disable no-unused-vars */
import React from "react";

interface FilterProps {
  order: "desc" | "asc";
  onChange: (order: "desc" | "asc") => void;
}

export const Filter = ({ order, onChange }: FilterProps) => {
  return (
    <div className="flex justify-end gap-6 mb-6">
      <button
        className={`${
          order === "desc" ? "text-[#E2E2EB]" : "text-[#90909A]"
        } text-[16px] 
        font-semibold leading-[150%] tracking-[-0.2px]`}
        type="button"
        onClick={() => onChange("desc")}
      >
        최신순
      </button>
      <button
        className={`${
          order === "asc" ? "text-[#E2E2EB]" : "text-[#90909A]"
        } text-[16px] 
      font-semibold leading-[150%] tracking-[-0.2px]`}
        type="button"
        onClick={() => onChange("asc")}
      >
        오래된 순
      </button>
    </div>
  );
};
