"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavButtons() {
  const pathname = usePathname();
  const currentPath = pathname ? pathname.slice(10) : "";

  return (
    <>
      <nav className="w-full hidden desktop:flex gap-4 mt-[64px]">
        <Link
          href="/projects/meetup"
          className={`w-[50%] flex justify-center items-center border-b-4 text-[28px] font-extrabold p-8 ${
            currentPath === "meetup" ? "border-[#62EFE5]" : "border-transparent text-[#595A62]"
          }`}
        >
          밋업 프로젝트
        </Link>
        <Link
          href="/projects/corporate"
          className={`w-[50%] flex justify-center items-center border-b-4 text-[28px] font-extrabold p-8 ${
            currentPath === "corporate" ? "border-[#62EFE5]" : "border-transparent text-[#595A62]"
          }`}
        >
          기업 프로젝트
        </Link>
      </nav>
      <nav className="w-full flex gap-3 mt-[48px] justify-center desktop:hidden">
        <Link
          href="/projects/meetup"
          className={`flex justify-center items-center text-[15px] font-extrabold px-5 py-2 text-white rounded-[72px] ${
            currentPath === "meetup" ? "bg-[#05F]" : "bg-[#2F3038]"
          }`}
        >
          밋업 프로젝트
        </Link>
        <Link
          href="/projects/corporate"
          className={`flex justify-center items-center text-[15px] font-extrabold px-5 py-2 text-white rounded-[72px] ${
            currentPath === "corporate" ? "bg-[#62EFE5]" : "bg-[#2F3038]"
          }`}
        >
          기업 프로젝트
        </Link>
      </nav>
    </>
  );
}
