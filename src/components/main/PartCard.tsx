import Image from "next/image";
import { cn } from "@/lib/utils";

export type Part = "planner" | "designer" | "frontend" | "backend";

// 피그마 프로토타입: While hovering → isHover=true, Smart animate, Ease in and out, 600ms.
// 두 변형의 최상위 레이어 이름이 달라(Role Card·Image Asset ↔ Content) 매칭되는 레이어가 없으므로
// Smart animate는 기본 내용이 사라지고 호버 내용이 나타나는 크로스페이드로 동작한다.
const HOVER_FADE = "transition-opacity duration-[600ms] ease-[cubic-bezier(0.42,0,0.58,1)]";

/** 피그마 Image Asset (planner/designer/front/back) */
export function PartImage({
  src,
  size,
  className,
}: {
  src: string | null;
  size: number;
  className?: string;
}) {
  if (!src) return null;
  return <Image src={src} alt="" width={size} height={size} className={className} />;
}

interface PartCardProps {
  part: Part;
  image: string | null;
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
  image,
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
        "group relative flex overflow-hidden rounded-m bg-fill-normal shadow-spread-s desktop:min-h-[246px] desktop:shadow-spread-m",
        className,
      )}
    >
      <div
        className={cn(
          "flex flex-1 flex-col justify-center gap-7 px-6 py-5 desktop:gap-5 desktop:p-6 desktop:group-hover:opacity-0",
          HOVER_FADE,
        )}
      >
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-body-16m text-brand-primary">{number}</p>
            <div className="flex flex-col gap-1">
              <h3 className="font-brand text-brand-22b desktop:text-brand-30b text-label-normal">
                {name}
              </h3>
              <p className="text-body-16r text-label-assitive desktop:text-label-alternative">
                {korean}
              </p>
            </div>
          </div>
          <PartImage src={image} size={64} className="mb-2 rounded-[3.556px] desktop:hidden" />
        </div>
        <div className="flex flex-col gap-1">
          {/* 시안(8:9837) 데스크톱 기본 상태: 요약 20b, 설명 16m(label/light) */}
          <p className="text-body-16sb text-label-netural desktop:text-headline-20b">{summary}</p>
          <p className="whitespace-pre-line break-keep desktop:whitespace-normal text-caption-12r text-label-alternative desktop:text-body-16m desktop:text-label-light">
            {detail}
          </p>
        </div>
      </div>
      <PartImage
        src={image}
        size={232}
        className={cn("hidden shrink-0 desktop:block desktop:group-hover:opacity-0", HOVER_FADE)}
      />

      <div
        aria-hidden
        className={cn(
          "absolute inset-0 hidden flex-col justify-between bg-fill-normal p-6 opacity-0 desktop:flex desktop:group-hover:opacity-100",
          HOVER_FADE,
        )}
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
