"use client";

import { Button, DefaultButton, HeaderNavigation, Header as HeaderUI } from "@kusitms.com/ui";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useApplyAction } from "@/hooks/useApplyAction";
import {
  APPLY_LABEL,
  isStatusKey,
  RECRUIT_STATUS_COOKIE,
  type RecruitStatusKey,
} from "@/lib/recruitStatus";

const DESKTOP_HEADER_HEIGHT = 76;

function readStatusCookie(): RecruitStatusKey | null {
  const value = document.cookie.match(new RegExp(`(?:^|; )${RECRUIT_STATUS_COOKIE}=([^;]*)`))?.[1];
  return isStatusKey(value) ? value : null;
}

const navLinks = [
  { href: "/", label: "학회소개", matchPath: "/" },
  { href: "/projects/meetup", label: "프로젝트", matchPath: "/projects" },
  { href: "/reviews/activity", label: "후기", matchPath: "/reviews" },
  { href: "/archive", label: "33기 아카이브", matchPath: "/archive" },
  { href: "/recruit", label: "리크루팅", matchPath: "/recruit" },
];

export const Header = () => {
  const pathname = usePathname();
  const currentPath = pathname ?? "";
  const [overHero, setOverHero] = useState(currentPath === "/");
  // proxy가 요청마다 서버 시간으로 판정해 둔 모집 상태. 읽기 전에는 버튼 자리만 잡아 두고 숨긴다
  const [statusKey, setStatusKey] = useState<RecruitStatusKey | null>(null);
  const apply = useApplyAction("gnb");

  // biome-ignore lint/correctness/useExhaustiveDependencies: 페이지를 옮길 때마다 proxy가 갱신한 쿠키를 다시 읽는다
  useEffect(() => {
    setStatusKey(readStatusCookie());
  }, [currentPath]);

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

  // 명세 0-1: 버튼은 하나, 문구와 동작만 모집 상태에 따라 바뀐다. 모바일은 헤더 대신 햄버거 메뉴 하단에 둔다(디자인 기준)
  const cta = (
    <span
      className={statusKey ? undefined : "invisible"}
      aria-hidden={statusKey ? undefined : true}
    >
      <Button
        size="m"
        variant={overHero ? "glass" : "default"}
        className={overHero ? "transition-colors hover:bg-white/60" : undefined}
        showIcon={false}
        tabIndex={statusKey ? undefined : -1}
        onClick={() => statusKey && apply(statusKey)}
      >
        {APPLY_LABEL[statusKey ?? "closed"]}
      </Button>
    </span>
  );

  const mobileCta = statusKey ? (
    <DefaultButton size="m" onClick={() => apply(statusKey)}>
      {APPLY_LABEL[statusKey]}
    </DefaultButton>
  ) : null;

  return (
    <HeaderUI
      key={currentPath}
      // DS Header는 데스크톱에서만 fixed라, 모바일도 스크롤 중 화면 위에 남도록 sticky를 준다(데스크톱은 DS의 fixed가 이긴다)
      className="sticky"
      mobileMenuClassName="[&_a:hover]:text-label-normal [&_a:hover]:font-semibold [&_a:active]:text-label-normal [&_a:active]:font-semibold"
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
          className="hover:font-semibold active:text-label-normal active:font-semibold"
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
