"use client";

import Image from "next/image";
import React from "react";

function TopScrollButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="flex justify-center items-center gap-1 px-3 py-2 rounded-[72px] bg-[#45464F] mx-auto"
    >
      <Image
        src="/projects/icons/arrow_warm_up.svg"
        alt="top"
        width={15}
        height={15}
        className="w-[15px] h-[15px]"
      />
      <span className="text-[14px] font-bold text-white">위로 가기</span>
    </button>
  );
}

export default TopScrollButton;
