"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navLinks = [
  { href: "/", label: "학회소개", matchPath: "/" },
  { href: "/projects/meetup", label: "프로젝트", matchPath: "/projects" },
  { href: "/display", label: "전시", matchPath: "/display" },
  { href: "/reviews", label: "후기", matchPath: "/reviews" },
  { href: "/recruit", label: "리크루팅", matchPath: "/recruit" },
];

export const PageNav = () => {
  const pathname = usePathname();
  const currentPath = pathname ? pathname : "";

  return (
    <nav className="flex text-center">
      {navLinks.map(({ href, label, matchPath }, index) => {
        const isActive =
          matchPath === "/"
            ? currentPath === matchPath
            : currentPath.startsWith(matchPath);

        return (
          <Link
            key={index}
            href={href}
            className={`px-7 font-semibold ${
              isActive ? "text-white" : "text-[#90909A]"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
};
