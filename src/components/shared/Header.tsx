"use client";

import { Button, DefaultButton, HeaderNavigation, Header as HeaderUI } from "@kusitms.com/ui";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DESKTOP_HEADER_HEIGHT = 76;

const navLinks = [
  { href: "/", label: "학회소개", matchPath: "/" },
  { href: "/projects/meetup", label: "프로젝트", matchPath: "/projects" },
  { href: "/archive", label: "33기 아카이브", matchPath: "/archive" },
  { href: "/reviews/activity", label: "후기", matchPath: "/reviews" },
  { href: "/recruit", label: "리크루팅", matchPath: "/recruit" },
];

export const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const currentPath = pathname ?? "";
  const [overHero, setOverHero] = useState(currentPath === "/");

  useEffect(() => {
    if (currentPath !== "/") {
      setOverHero(false);
      return;
    }

    const updateTone = () => {
      const hero = document.querySelector("main section");
      const nextSection = hero?.nextElementSibling;
      const heroCoverEdge = nextSection
        ? nextSection.getBoundingClientRect().top
        : hero?.getBoundingClientRect().bottom;
      setOverHero(heroCoverEdge !== undefined && heroCoverEdge > DESKTOP_HEADER_HEIGHT);
    };
    updateTone();
    window.addEventListener("scroll", updateTone, { passive: true });
    return () => window.removeEventListener("scroll", updateTone);
  }, [currentPath]);

  const logo = (
    <h1>
      <Link href="/">
        <Image
          src="/headerLogo.svg"
          alt="큐시즘"
          width={132}
          height={24}
          className="h-[21px] w-[120px] desktop:h-6 desktop:w-[132px]"
          priority
        />
      </Link>
    </h1>
  );

  const goToRecruit = () => router.push("/recruit");

  const cta = (
    <Button
      size="m"
      variant={overHero ? "glass" : "default"}
      showIcon={false}
      onClick={goToRecruit}
    >
      모집 알림 받기
    </Button>
  );

  const mobileCta = (
    <DefaultButton size="m" onClick={goToRecruit}>
      모집 알림 받기
    </DefaultButton>
  );

  return (
    <HeaderUI
      key={currentPath}
      className="relative"
      logo={logo}
      mobileLogo={logo}
      cta={cta}
      mobileCta={mobileCta}
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
      {navLinks.map(({ href, label, matchPath }) => (
        <HeaderNavigation
          key={href}
          href={href}
          isActive={
            matchPath === "/" ? currentPath === matchPath : currentPath.startsWith(matchPath)
          }
        >
          {label}
        </HeaderNavigation>
      ))}
    </HeaderUI>
  );
};
