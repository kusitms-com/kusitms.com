"use client";

import { NavigationTab, NavigationTabItem } from "@kusitms.com/ui";
import { usePathname, useRouter } from "next/navigation";

const NAV_ITEMS = [
  { href: "/projects/meetup", label: "밋업 프로젝트", path: "meetup" },
  { href: "/projects/corporate", label: "기업 연계 프로젝트", path: "corporate" },
];

export default function NavButtons() {
  const pathname = usePathname();
  const router = useRouter();
  const currentPath = pathname ? pathname.slice(10) : "";

  return (
    <NavigationTab className="tablet:px-10 px-4 pt-2 pb-10">
      {NAV_ITEMS.map((item) => (
        <NavigationTabItem
          key={item.path}
          active={currentPath === item.path}
          onClick={() => router.push(item.href)}
          className="cursor-pointer"
        >
          {item.label}
        </NavigationTabItem>
      ))}
    </NavigationTab>
  );
}
