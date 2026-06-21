"use client";

import { NavigationTab, NavigationTabItem } from "@kusitms.com/ui";
import { usePathname, useRouter } from "next/navigation";

const NAV_ITEMS = [
  { href: "/reviews/activity", label: "활동 후기" },
  { href: "/reviews/story", label: "큐밀리 이야기" },
];

export default function ReviewNavButtons() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <NavigationTab className="tablet:px-10 px-4 tablet:pb-15 pb-7">
      {NAV_ITEMS.map((item) => (
        <NavigationTabItem
          key={item.href}
          active={pathname === item.href}
          onClick={() => router.push(item.href)}
          className="cursor-pointer"
        >
          {item.label}
        </NavigationTabItem>
      ))}
    </NavigationTab>
  );
}
