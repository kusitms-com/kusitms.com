import Image from "next/image";
import { cn } from "@/lib/utils";

export type Part = "planner" | "designer" | "frontend" | "backend";

/** 피그마 Image Asset (planner/designer/front/back) */
export function PartImage({
  part,
  size,
  className,
}: {
  part: Part;
  size: number;
  className?: string;
}) {
  return (
    <Image
      src={`/main/renewal/part-${part}.png`}
      alt=""
      width={size}
      height={size}
      className={className}
    />
  );
}

interface PartCardProps {
  part: Part;
  number: string;
  name: string;
  korean: string;
  summary: string;
  /** 두 줄 설명. 줄바꿈은 \n */
  detail: string;
  className?: string;
}

/** 피그마 Card/Parts. 모바일 → 데스크톱 반응형, 데스크톱 호버 시 isHover=true 디자인으로 전환 */
export default function PartCard({
  part,
  number,
  name,
  korean,
  summary,
  detail,
  className,
}: PartCardProps) {
  return (
    <div
      className={cn(
        "group relative flex overflow-hidden rounded-m bg-fill-normal shadow-spread-s desktop:h-[232px] desktop:shadow-spread-m",
        className,
      )}
    >
      <div className="flex flex-1 flex-col justify-center gap-7 px-6 py-5 desktop:gap-6 desktop:p-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1 desktop:gap-2">
            <p className="text-body-16m text-brand-primary">{number}</p>
            <div className="flex flex-col gap-1">
              <h3 className="font-brand text-brand-22b desktop:text-brand-30b text-label-normal">
                {name}
              </h3>
              <p className="text-body-16r text-label-assitive">{korean}</p>
            </div>
          </div>
          <PartImage part={part} size={64} className="mb-2 rounded-[3.556px] desktop:hidden" />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-body-16sb text-label-netural">{summary}</p>
          <p className="whitespace-pre-line text-caption-12r text-label-alternative">{detail}</p>
        </div>
      </div>
      <PartImage part={part} size={232} className="hidden shrink-0 desktop:block" />

      <div
        aria-hidden
        className="absolute inset-0 hidden flex-col justify-between bg-fill-normal p-6 opacity-0 transition-opacity duration-300 desktop:flex desktop:group-hover:opacity-100"
      >
        <p className="flex items-center gap-2">
          <span className="text-body-16m text-brand-primary">{number}</span>
          <span className="font-brand font-medium text-[16px] text-label-netural leading-5 tracking-[0.005em]">
            {name}
          </span>
        </p>
        <div className="flex flex-col gap-1">
          <p className="text-body-16r text-label-light">{summary}</p>
          <p className="whitespace-pre-line text-headline-20sb text-label-normal">{detail}</p>
        </div>
      </div>
    </div>
  );
}
