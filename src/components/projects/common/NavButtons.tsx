"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavButtons() {
  const pathname = usePathname();
  const currentPath = pathname ? pathname.slice(10) : "";

  return (
    <nav className="w-full h-[158px] flex px-10 pt-5">
      <Link
        href="/projects/meetup"
        className={`w-1/2 h-[78px] flex justify-center items-center  ${
          currentPath === "meetup"
            ? "border-dark-blue-500 border-b-[3px]"
            : "border-gray-100 border-b-[2px]"
        }`}
      >
        <p
          className={`text-gray-700 ${
            currentPath === "meetup" ? "text-body-1" : "text-body-2"
          }`}
        >
          밋업 프로젝트
        </p>
      </Link>

      <Link
        href="/projects/corporate"
        className={`w-1/2 h-[78px] flex justify-center items-center  ${
          currentPath === "corporate"
            ? "border-dark-blue-500 border-b-[3px]"
            : "border-gray-100 border-b-[2px]"
        }`}
      >
        <p
          className={`text-gray-700 ${
            currentPath === "corporate" ? "text-body-1" : "text-body-2"
          }`}
        >
          기업 프로젝트
        </p>
      </Link>
    </nav>
  );
}
