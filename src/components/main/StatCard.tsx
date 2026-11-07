"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { cn } from "@/lib/utils";

interface StatCardProps {
  label: string;
  end: number;
  suffix: string;
  description: string;
  /** 데스크톱 강조 상태(피그마 isHover=true): 385px로 넓어지고 파란 배경에 왼쪽 정렬 */
  isActive?: boolean;
  onMouseEnter?: () => void;
  className?: string;
}

const TEXT_TRANSITION = "transition-colors duration-300 ease-out";

/**
 * 피그마 Card/Showcase(통계 카드). 디자인 시스템 ShowcaseCard(프로젝트 카드)와 별개.
 * 너비·정렬 전환은 framer-motion layout 애니메이션이 처리하므로 MotionConfig 안에서 쓴다.
 */
export default function StatCard({
  label,
  end,
  suffix,
  description,
  isActive = false,
  onMouseEnter,
  className,
}: StatCardProps) {
  return (
    <motion.li
      layout
      // layout 애니메이션 중 모서리가 늘어나지 않도록 radius-m(12px)을 style로도 지정
      style={{ borderRadius: 12 }}
      onMouseEnter={onMouseEnter}
      className={cn(
        "flex min-w-0 flex-col items-center gap-1 whitespace-nowrap rounded-m bg-fill-normal p-6 text-center shadow-spread-s",
        TEXT_TRANSITION,
        "desktop:h-[200px] desktop:justify-center desktop:shadow-spread-m",
        isActive
          ? "desktop:flex-[0_0_385px] desktop:items-start desktop:bg-brand-primary desktop:text-left"
          : "desktop:flex-[1_1_0%]",
        className,
      )}
    >
      <motion.p
        layout="position"
        className={cn(
          "text-body-16sb desktop:text-headline-20sb text-label-alternative",
          TEXT_TRANSITION,
          isActive && "desktop:text-label-disable",
        )}
      >
        {label}
      </motion.p>
      <motion.div
        layout="position"
        className={cn("flex flex-col items-center gap-2", isActive && "desktop:items-start")}
      >
        <motion.p
          layout="position"
          className={cn(
            "font-brand text-brand-36b desktop:text-brand-56b text-label-normal",
            TEXT_TRANSITION,
            isActive && "desktop:text-label-contrast",
          )}
        >
          <CountUp
            end={end}
            suffix={suffix}
            separator=","
            duration={2}
            enableScrollSpy
            scrollSpyOnce
          />
        </motion.p>
        <motion.p
          layout="position"
          className={cn(
            "text-label-14r desktop:text-body-16r text-label-assitive",
            TEXT_TRANSITION,
            isActive && "desktop:text-label-disable",
          )}
        >
          {description}
        </motion.p>
      </motion.div>
    </motion.li>
  );
}
