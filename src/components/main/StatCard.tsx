"use client";
import CountUp from "react-countup";
import { cn } from "@/lib/utils";

interface StatCardProps {
  label: string;
  end: number;
  suffix: string;
  description: string;
  /** 데스크톱 강조 상태(피그마 isHover=true). 넓이 확장은 부모 레이아웃이 flex-grow로 처리 */
  isActive?: boolean;
  onMouseEnter?: () => void;
  className?: string;
}

/** 피그마 Card/Showcase(통계 카드). 디자인 시스템 ShowcaseCard(프로젝트 카드)와 별개 */
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
    <div
      onMouseEnter={onMouseEnter}
      className={cn(
        "flex min-w-0 flex-col items-center gap-1 whitespace-nowrap rounded-m bg-fill-normal p-6 text-center shadow-spread-s transition-[flex-grow,background-color] duration-300",
        "desktop:shadow-spread-m",
        isActive && "desktop:items-start desktop:bg-brand-primary desktop:text-left",
        className,
      )}
    >
      <p
        className={cn(
          "text-body-16sb desktop:text-headline-20sb text-label-alternative",
          isActive && "desktop:text-label-disable",
        )}
      >
        {label}
      </p>
      <div className={cn("flex flex-col items-center gap-2", isActive && "desktop:items-start")}>
        <p
          className={cn(
            "font-brand text-brand-36b desktop:text-brand-56b text-label-normal",
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
        </p>
        <p
          className={cn(
            "text-label-14r desktop:text-body-16r text-label-assitive",
            isActive && "desktop:text-label-disable",
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
