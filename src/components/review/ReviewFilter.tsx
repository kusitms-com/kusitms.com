import React from "react";

export const ReviewFilter = () => {
  return (
    <section className="flex gap-12 mb-[120px]">
      <button className="px-8 py-4 bg-[#05f] text-[white] rounded-[75px] text-xl cursor-pointer">
        전체
      </button>
      <button className="px-8 py-4 bg-[#DCE1FF] text-[white] rounded-[75px] text-xl cursor-pointer">
        기획
      </button>
      <button className="px-8 py-4 bg-[#DCE1FF] text-[white] rounded-[75px] text-xl cursor-pointer">
        개발
      </button>
      <button className="px-8 py-4 bg-[#DCE1FF] text-[white] rounded-[75px] text-xl cursor-pointer">
        디자인
      </button>
    </section>
  );
};
