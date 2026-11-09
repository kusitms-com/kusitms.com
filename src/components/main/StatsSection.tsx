"use client";

import { MotionConfig } from "framer-motion";
import { useId, useState } from "react";
import type { IntroductionData } from "@/service/introductions";
import StatCard from "./StatCard";

// 시안에 전환 시간이 정의돼 있지 않아 300ms ease-out으로 맞춘다
const CARD_TRANSITION = { duration: 0.3, ease: "easeOut" } as const;

export default function StatsSection({ introductions }: { introductions: IntroductionData }) {
  const stats = [
    {
      label: "누적 회원 수",
      end: introductions.member_count,
      suffix: "명",
      description: "2009년부터 함께한 큐밀리",
    },
    {
      label: "프로젝트 결과물",
      end: introductions.project_count,
      suffix: "개",
      description: "기획에서 전시까지 만든 서비스",
    },
    {
      label: "참여 대학 수",
      end: introductions.university_count,
      suffix: "개",
      description: "함께하는 연합 학회",
    },
    { label: "운영기간", end: 17, suffix: "년", description: "Since 2009" },
  ] as const;

  const headingId = useId();
  // 처음에는 모든 카드가 흰색이고, 마우스를 올린 카드만 파랗게 넓어진다
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      aria-labelledby={headingId}
      className="relative z-10 bg-fill-netural px-5 pt-[200px] desktop:px-0 desktop:py-80"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-9 desktop:gap-12">
        <h2
          id={headingId}
          className="text-center text-body-16b text-brand-primary desktop:text-[20px] desktop:leading-8 desktop:tracking-[-0.008em]"
        >
          Since 2009
        </h2>
        <MotionConfig transition={CARD_TRANSITION} reducedMotion="user">
          <ul
            className="flex flex-col gap-5 desktop:flex-row desktop:gap-6"
            onMouseLeave={() => setActiveIndex(null)}
          >
            {stats.map((stat, index) => (
              <StatCard
                key={stat.label}
                {...stat}
                isActive={index === activeIndex}
                onMouseEnter={() => setActiveIndex(index)}
              />
            ))}
          </ul>
        </MotionConfig>
      </div>
    </section>
  );
}
