"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/projects/meetup", label: "밋업 프로젝트", path: "meetup" },
  { href: "/projects/corporate", label: "기업 프로젝트", path: "corporate" },
];

export default function NavButtons() {
  const pathname = usePathname();
  const currentPath = pathname ? pathname.slice(10) : "";

  return (
    <nav className="w-full h-[158px] flex px-10 pt-5">
      {NAV_ITEMS.map((item) => {
        const isActive = currentPath === item.path;
        return (
          <Link
            key={item.path}
            href={item.href}
            className={`w-1/2 h-[78px] flex justify-center items-center ${
              isActive
                ? "border-dark-blue-500 border-b-[3px]"
                : "border-gray-100 border-b-[2px]"
            }`}
          >
            <p
              className={`text-gray-700 ${
                isActive ? "text-body-1" : "text-body-2"
              }`}
            >
              {item.label}
            </p>
          </Link>
        );
      })}
    </nav>
  );
}
