"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function NavButtons() {
  const pathname = usePathname();
  const currentPath = pathname ? pathname.slice(10) : "";

  return (
    <nav className="w-full flex gap-4 mt-[64px]">
      <Link
        href="/projects/meetup"
        className={`w-[50%] flex justify-center items-center border-b-4 text-[28px] font-extrabold p-8 ${
          currentPath === "meetup"
            ? "border-[#62EFE5]"
            : "border-transparent text-[#595A62]"
        }`}
      >
        밋업데이
      </Link>
      <Link
        href="/projects/corporate"
        className={`w-[50%] flex justify-center items-center border-b-4 text-[28px] font-extrabold p-8 ${
          currentPath === "corporate"
            ? "border-[#62EFE5]"
            : "border-transparent text-[#595A62]"
        }`}
      >
        기업 프로젝트
      </Link>
    </nav>
  );
}
