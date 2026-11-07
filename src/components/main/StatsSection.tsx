"use client";

import { MotionConfig } from "framer-motion";
import { useId, useState } from "react";
import StatCard from "./StatCard";

// 시안에 전환 시간이 정의돼 있지 않아 300ms ease-out으로 맞춘다
const CARD_TRANSITION = { duration: 0.3, ease: "easeOut" } as const;

const STATS = [
  { label: "누적 회원 수", end: 1464, suffix: "명", description: "2009년부터 함께한 큐밀리" },
  {
    label: "프로젝트 결과물",
    end: 244,
    suffix: "개",
    description: "기획에서 전시까지 만든 서비스",
  },
  { label: "참여 대학 수", end: 100, suffix: "개", description: "함께하는 연합 학회" },
  { label: "운영기간", end: 17, suffix: "년", description: "Since 2009" },
] as const;

export default function StatsSection() {
  const headingId = useId();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      aria-labelledby={headingId}
      className="relative z-10 bg-fill-netural px-5 pt-[200px] desktop:bg-[#f9fafb] desktop:px-0 desktop:py-80"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-9 desktop:gap-12">
        <h2
          id={headingId}
          className="text-center text-[16px] leading-6 font-bold tracking-[-0.0025em] text-brand-primary desktop:text-[20px] desktop:leading-8 desktop:tracking-[-0.008em]"
        >
          Since 2009
        </h2>
        <MotionConfig transition={CARD_TRANSITION} reducedMotion="user">
          <ul
            className="flex flex-col gap-5 desktop:flex-row desktop:gap-6"
            onMouseLeave={() => setActiveIndex(0)}
          >
            {STATS.map((stat, index) => (
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
