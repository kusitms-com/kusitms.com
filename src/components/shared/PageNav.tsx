"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navLinks = [
  { href: "", label: "학회소개" },
  { href: "/projects/meetup", label: "프로젝트" },
  { href: "/reviews", label: "후기" },
  { href: "", label: "리크루팅" },
];

export const PageNav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex text-center">
      {navLinks.map(({ href, label }, index) => {
        const isActive = pathname === href;
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
