"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/reviews/activity", label: "활동 후기", path: "/reviews/activity" },
  { href: "/reviews/story", label: "큐밀리 이야기", path: "/reviews/story" },
];

export default function ReviewNavButtons() {
  const pathname = usePathname();

  return (
    <nav className="w-full tablet:h-[158px] h-[104px] flex tablet:px-10 pt-5">
      {NAV_ITEMS.map((item) => {
        const isActive = pathname === item.path;
        return (
          <Link
            key={item.path}
            href={item.href}
            className={`w-1/2 tablet:h-[78px] h-[48px] flex justify-center items-center ${
              isActive ? "border-dark-blue-500 border-b-[3px]" : "border-gray-100 border-b-[2px]"
            }`}
          >
            <p
              className={[
                "text-gray-700",
                isActive ? "text-body-5" : "text-body-6",
                isActive ? "tablet:text-body-1" : "tablet:text-body-2",
              ].join(" ")}
            >
              {item.label}
            </p>
          </Link>
        );
      })}
    </nav>
  );
}
