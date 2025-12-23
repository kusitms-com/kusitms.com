"use client";

import { useCallback } from "react";

export default function ScrollTopButton() {
  const handleClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <button
      type="button"
      onClick={handleClick}
      className="cursor-pointer fixed bottom-8 left-1/2 -translate-x-1/2 w-[56px] h-[56px] rounded-full bg-white shadow-[0_1px_20px_0_rgba(179,179,188,0.4)] flex justify-center items-center"
    >
      <span className="text-body-5 font-semibold text-black">TOP</span>
    </button>
  );
}
