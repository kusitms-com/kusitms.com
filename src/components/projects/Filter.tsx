import React from "react";

export const Filter = () => {
  return (
    <div className="flex justify-end gap-6 mb-6">
      <button
        className="text-[#E2E2EB] text-[16px] 
        font-semibold leading-[150%] tracking-[-0.2px]"
        type="button"
      >
        최신순
      </button>
      <button
        className="text-[#E2E2EB] text-[16px] 
        font-semibold leading-[150%] tracking-[-0.2px]"
        type="button"
      >
        오래된 순
      </button>
    </div>
  );
};
