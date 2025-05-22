"use client";

import { usePathname } from "next/navigation";
import React from "react";

export const OptionBar = () => {
  const pathname = usePathname();
  const currentPath = pathname ? pathname.slice(10) : "";

  return (
    <div className="w-full flex gap-4 mt-[64px] max-w-[855px] mx-auto">
      <div
        className={`w-[50%] flex justify-center items-center border-b-4 text-[28px] font-extrabold p-8 ${
          currentPath === "meetup"
            ? "border-[#62EFE5]"
            : "border-transparent text-[#595A62]"
        }`}
      >
        ALL
      </div>
      <div
        className={`w-[50%] flex justify-center items-center border-b-4 text-[28px] font-extrabold p-8 ${
          currentPath === "corporate"
            ? "border-[#62EFE5]"
            : "border-transparent text-[#595A62]"
        }`}
      >
        OB
      </div>
      <div
        className={`w-[50%] flex justify-center items-center border-b-4 text-[28px] font-extrabold p-8 ${
          currentPath === "corporate"
            ? "border-[#62EFE5]"
            : "border-transparent text-[#595A62]"
        }`}
      >
        YB
      </div>
    </div>
  );
};
