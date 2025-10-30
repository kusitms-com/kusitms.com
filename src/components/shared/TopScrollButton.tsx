"use client";

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
      className="flex cursor-pointer justify-center items-center w-[56px] h-[56px] rounded-full bg-[#ffffff] mx-auto shadow-[0px_1px_20px_rgba(179,179,188,0.4)]"
    >
      <span className="text-body-5  font-semibold text-black">TOP</span>
    </button>
  );
}

export default TopScrollButton;
