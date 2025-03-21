"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export const NavButtons = () => {
  const pathname = usePathname().slice(10);

  return (
    <nav className="flex gap-4 justify-center">
      <Link href="/projects/meetup">
        <button
          className={`flex cursor-pointer rounded-[75px] border-0 mx-[16px] 
    mt-[48px] h-[53px] px-[32px] justify-center 
    items-center font-bold ${
      pathname === "meetup" ? "bg-[#0055FF]" : "bg-[#2f3038]"
    }`}
        >
          밋업데이
        </button>
      </Link>
      <Link href="/projects/corporate">
        <button
          className={`flex cursor-pointer rounded-[75px] border-0 mx-[16px] mt-[48px] 
h-[53px] px-[32px] justify-center items-center font-bold ${
            pathname === "corporate" ? "bg-[#0055FF]" : "bg-[#2f3038]"
          }`}
        >
          기업 프로젝트
        </button>
      </Link>
    </nav>
  );
};
