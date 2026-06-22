"use client";

import { HeaderNavigation, Header as HeaderUI } from "@kusitms.com/ui";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "학회소개", matchPath: "/" },
  { href: "/projects/meetup", label: "프로젝트", matchPath: "/projects" },
  { href: "/reviews/activity", label: "후기", matchPath: "/reviews" },
  { href: "/archive", label: "32기 아카이브", matchPath: "/archive" },
  { href: "/recruit", label: "리크루팅", matchPath: "/recruit" },
];

export const Header = () => {
  const pathname = usePathname();
  const currentPath = pathname ?? "";

  const logo = (
    <h1>
      <Link href="/">
        <Image
          src="/headerLogo.svg"
          alt="큐시즘"
          width={142}
          height={26}
          className="h-[21px] w-[120px] desktop:h-[26px] desktop:w-[142px]"
          priority
        />
      </Link>
    </h1>
  );

  return (
    <HeaderUI
      key={currentPath}
      logo={logo}
      mobileLogo={logo}
      menuIcon={
        <Image
          src="/projects/icons/menu.svg"
          alt="메뉴"
          width={24}
          height={24}
          className="h-6 w-6"
        />
      }
      closeIcon={
        <Image
          src="/projects/icons/CloseIcon.svg"
          alt="닫기"
          width={24}
          height={24}
          className="h-6 w-6"
        />
      }
    >
      {navLinks.map(({ href, label, matchPath }) => {
        const isActive =
          matchPath === "/" ? currentPath === matchPath : currentPath.startsWith(matchPath);

        return (
          <HeaderNavigation key={href} href={href} state={isActive ? "pressed" : "default"}>
            {label}
          </HeaderNavigation>
        );
      })}
    </HeaderUI>
  );
};
