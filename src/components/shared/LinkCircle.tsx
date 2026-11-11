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
// 툴팁 모양과 툴팁 위 hover 상태는 디자인 시스템 Tooltip이 그리고, 여기서는 위치와 표시 시점만 정한다.
// 툴팁은 데스크톱 호버·키보드 포커스에서만 보이고, 툴팁 아래 12px은 투명 여백(padding)이라 아이콘에서 툴팁으로 포인터를 옮겨도 호버가 끊기지 않는다
export const IconLink = ({
  icon,
  link,
  label,
  tooltip,
  tooltipAlign = "center",
}: IconLinkProps) => (
  <Link
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="group relative flex size-9 items-center justify-center rounded-full bg-fill-primary text-label-normal transition-[filter] hover:drop-shadow-[0_1px_6px_rgba(179,179,188,0.6)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
  >
    {/* 시안의 hover: fill/primary 위에 interaction/hover(흰색 25%)를 한 겹 덮는다 */}
    <span
      aria-hidden
      className="pointer-events-none absolute inset-0 rounded-full transition-colors group-hover:bg-interaction-hover"
    />
    <span className="relative">{icon}</span>
    <span
      aria-hidden
      className={cn(
        "absolute bottom-full z-10 hidden pb-3 desktop:group-hover:block desktop:group-focus-visible:block",
        tooltipAlign === "end" ? "right-0" : "left-1/2 -translate-x-1/2",
      )}
    >
      <Tooltip label={tooltip} arrow={tooltipAlign} />
    </span>
  </Link>
);
