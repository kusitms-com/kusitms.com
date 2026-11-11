"use client";

import { PageNavButton } from "@kusitms.com/ui";
import Image from "next/image";
import { useId, useState } from "react";
import FadeIn from "@/components/shared/FadeIn";
import { nextTabIndex } from "@/lib/tabKeys";
import { cn } from "@/lib/utils";
import type { IntroductionTeam } from "@/service/introductions";
import IntroductionMessage from "./IntroductionMessage";

// 시안(614:17374)의 탭 순서. 34기 운영진 전체 카드가 첫 탭이고, 목록에 없는 팀은 뒤에 붙인다
const TEAM_ORDER = ["34기 운영진", "학부학", "경영총괄팀", "교육기획팀", "대외홍보팀"];
const orderOf = (name: string) => {
  const index = TEAM_ORDER.indexOf(name);
  return index === -1 ? TEAM_ORDER.length : index;
};

/** 피그마 TEAM(운영진) — 데스크톱 614:17576 상단, 모바일 614:17424 */
export default function TeamSection({ teams: allTeams }: { teams: readonly IntroductionTeam[] }) {
  const teams = [...allTeams].sort((a, b) => orderOf(a.name) - orderOf(b.name));
  const headingId = useId();
  const tabsId = useId();
  const [active, setActive] = useState(0);
  const team = teams[active];
  const move = (step: number) => setActive((index) => (index + step + teams.length) % teams.length);
  if (!team) return <IntroductionMessage message="소개 정보를 준비 중이에요" />;

  return (
    <section
      aria-labelledby={headingId}
      className="px-5 py-[100px] desktop:px-0 desktop:pt-[320px] desktop:pb-0"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-9 desktop:gap-12">
        <FadeIn className="flex flex-col items-center gap-6 text-center desktop:items-start desktop:gap-12 desktop:text-left">
          <p className="text-body-16b text-brand-primary desktop:text-[20px] desktop:leading-8 desktop:tracking-[-0.008em]">
            TEAM
          </p>
          <div className="flex flex-col gap-1 desktop:gap-3">
            <h2
              id={headingId}
              className="text-headline-24b text-label-normal desktop:text-[48px] desktop:leading-[62px] desktop:tracking-[-0.018em]"
            >
              큐밀리를 이끌어나갈 운영진
            </h2>
            <p className="text-label-14r text-label-netural desktop:w-[560px] desktop:text-body-16m desktop:text-label-alternative">
              <span className="desktop:hidden">
                KUSITMS 활동을 이끄는 운영진으로
                <br />네 가지 팀으로 이루어져있어요
              </span>
              <span className="hidden desktop:inline">
                KUSITMS 활동을 이끄는 운영진으로 네 가지 팀으로 이루어져있어요
                <br />
                학부학, 경영총괄팀, 대외홍보팀, 교육기획팀으로 구성돼요
              </span>
            </p>
          </div>
        </FadeIn>

        <FadeIn className="flex flex-col items-center gap-6 desktop:gap-5">
          <div
            role="tablist"
            aria-label="운영진 팀"
            className="flex max-w-[295px] flex-wrap justify-center gap-x-2.5 gap-y-2 desktop:max-w-none desktop:flex-nowrap desktop:gap-6"
          >
            {teams.map((item, index) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                id={`${tabsId}-tab-${index}`}
                aria-selected={index === active}
                aria-controls={`${tabsId}-panel`}
                tabIndex={index === active ? 0 : -1}
                onClick={() => setActive(index)}
                onKeyDown={(event) => {
                  const next = nextTabIndex(event.key, index, teams.length, "horizontal");
                  if (next === null) return;
                  event.preventDefault();
                  setActive(next);
                  document.getElementById(`${tabsId}-tab-${next}`)?.focus();
                }}
                className={cn(
                  "h-[26px] cursor-pointer rounded-full px-2.5 text-[12px] leading-[18px] font-semibold whitespace-nowrap transition-colors desktop:h-auto desktop:px-6 desktop:py-2.5 desktop:text-[18px] desktop:leading-[26px]",
                  index === active
                    ? "bg-label-strong text-white"
                    : "border border-line-normal bg-white text-label-light hover:text-label-netural",
                )}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div
            id={`${tabsId}-panel`}
            role="tabpanel"
            aria-labelledby={`${tabsId}-tab-${active}`}
            className="relative h-[215px] w-full max-w-[335px] overflow-hidden rounded-[6px] bg-white desktop:h-[571px] desktop:max-w-[944px] desktop:rounded-2xl"
          >
            {team.image_link && (
              <Image
                key={team.image_link}
                src={team.image_link}
                alt={`${team.name} 운영진 사진`}
                fill
                sizes="(min-width: 1024px) 944px, 335px"
                className="object-cover"
              />
            )}
            {/* 사진 아래쪽을 흰색으로 덮어 팀 이름·설명이 읽히게 한다(시안의 흰색 페이드) */}
            <div className="absolute inset-x-0 bottom-0 h-[45%] bg-linear-to-t from-white from-[35%] to-transparent" />
            <div className="absolute inset-x-0 top-[88px] flex justify-between px-3 desktop:top-[233px] desktop:px-8">
              <div className="origin-left scale-[0.6] desktop:scale-100">
                <PageNavButton
                  color="dark"
                  direction="prev"
                  aria-label="이전 팀"
                  onClick={() => move(-1)}
                />
              </div>
              <div className="origin-right scale-[0.6] desktop:scale-100">
                <PageNavButton
                  color="dark"
                  direction="next"
                  aria-label="다음 팀"
                  onClick={() => move(1)}
                />
              </div>
            </div>
            <div className="absolute inset-x-0 top-[163px] flex flex-col gap-[3px] px-10 desktop:top-[433px] desktop:gap-2 desktop:px-[108px]">
              <h3 className="text-[10px] leading-normal font-bold text-label-netural desktop:text-[24px] desktop:leading-[34px] desktop:tracking-[-0.008em]">
                {team.name}
              </h3>
              <p className="text-[8px] leading-normal font-medium text-label-alternative desktop:text-[16px] desktop:leading-6 desktop:tracking-[-0.0025em]">
                {team.description}
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
