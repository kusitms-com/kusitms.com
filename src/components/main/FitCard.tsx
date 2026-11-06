import Image from "next/image";
import { cn } from "@/lib/utils";

export type FitLine = { text: string; tone?: "strong" | "sub" };

interface FitCardProps {
  label: string;
  title: string;
  lines: FitLine[];
  className?: string;
}

const LINE_STYLE = {
  strong: "text-body-18sb text-label-normal",
  sub: "text-body-16r text-label-alternative",
  default: "text-body-16r desktop:text-body-18r text-label-normal",
};

/** 피그마 Card/Fit. 모바일(Variant2) → 데스크톱(Overview) 반응형 */
export default function FitCard({ label, title, lines, className }: FitCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-4 rounded-m bg-fill-normal px-6 pt-7 pb-9 text-center shadow-spread-s desktop:shadow-spread-m",
        className,
      )}
    >
      <div className="flex flex-col items-center gap-3">
        <p className="text-label-14sb text-brand-primary">{label}</p>
        <h3 className="text-headline-20b desktop:text-headline-24b text-label-normal">{title}</h3>
      </div>
      <Image src="/main/renewal/fit-divider.svg" alt="" width={120} height={1} />
      <ul className="flex flex-col items-center gap-2">
        {lines.map((line) => (
          <li key={line.text} className={LINE_STYLE[line.tone ?? "default"]}>
            {line.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
