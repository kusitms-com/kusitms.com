import { Tooltip } from "@kusitms.com/ui";
import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface IconLinkProps {
  icon: ReactNode;
  link: string;
  label: string;
  tooltip: string;
  /** 오른쪽 끝 아이콘은 툴팁이 화면 밖으로 나가지 않도록 오른쪽에 맞춘다(시안 Footer/Contact align=end) */
  tooltipAlign?: "center" | "end";
}

// 시안(861:76150 Footer/Contact): 36px 원형(fill/primary) 아이콘, 호버 시 흰색 25% 밝게 + 그림자, 위로 12px 띄운 툴팁.
// 툴팁 모양과 툴팁 위 hover 상태는 디자인 시스템 Tooltip이 그린다.
// 데스크톱은 툴팁만 링크이고, 모바일은 아이콘이 링크다. 툴팁 아래 12px은 포인터 이동을 위한 투명 여백이다.
export const IconLink = ({
  icon,
  link,
  label,
  tooltip,
  tooltipAlign = "center",
}: IconLinkProps) => (
  <div className="group relative flex size-9 items-center justify-center rounded-full bg-fill-primary text-label-normal transition-[filter] hover:drop-shadow-[0_1px_6px_rgba(179,179,188,0.6)]">
    {/* 시안의 hover: fill/primary 위에 interaction/hover(흰색 25%)를 한 겹 덮는다 */}
    <span
      aria-hidden
      className="pointer-events-none absolute inset-0 rounded-full transition-colors group-hover:bg-interaction-hover"
    />
    <span className="pointer-events-none relative" aria-hidden>
      {icon}
    </span>
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="absolute inset-0 rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary desktop:hidden"
    />
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label}: ${tooltip}`}
      className={cn(
        "absolute bottom-full z-10 hidden pb-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary desktop:block desktop:pointer-events-none desktop:opacity-0 desktop:group-hover:pointer-events-auto desktop:group-hover:opacity-100 desktop:focus-visible:pointer-events-auto desktop:focus-visible:opacity-100",
        tooltipAlign === "end" ? "right-0" : "left-1/2 -translate-x-1/2",
      )}
    >
      <Tooltip label={tooltip} arrow={tooltipAlign} aria-hidden />
    </Link>
  </div>
);
