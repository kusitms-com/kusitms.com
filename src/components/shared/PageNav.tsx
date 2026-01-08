"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "학회소개", matchPath: "/" },
  { href: "/projects/meetup", label: "프로젝트", matchPath: "/projects" },
  { href: "/reviews/activity", label: "후기", matchPath: "/reviews" },
  { href: "/archive", label: "32기 아카이브", matchPath: "/archive" },
  { href: "/recruit", label: "리크루팅", matchPath: "/recruit" },
];

export const PageNav = () => {
  const pathname = usePathname();
  const currentPath = pathname ? pathname : "";

  return (
    <nav className="desktop:flex hidden text-center">
      {navLinks.map(({ href, label, matchPath }, index) => {
        const isActive =
          matchPath === "/" ? currentPath === matchPath : currentPath.startsWith(matchPath);
        return (
          <Link
            key={index}
            href={href}
            className={`px-7 ${
              isActive
                ? "text-body-5 text-dark-blue-600"
                : "text-body-6 text-gray-700 hover:text-body-5"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
};
