import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface JobRequirementProps {
  children: ReactNode;
  title: string;
  englishTitle: string;
  style?: string;
}

export default function Recruit({ children, title, englishTitle, style }: JobRequirementProps) {
  return (
    <div
      className={twMerge("flex flex-col items-center desktop:gap-y-[60px] gap-y-9 w-full", style)}
    >
      <div className="flex flex-col gap-6 items-center desktop:gap-1">
        <h2 className="text-body-16b text-brand-secondary desktop:text-[24px] desktop:leading-9">
          {englishTitle}
        </h2>
        <h1 className="text-headline-24b text-label-normal desktop:text-[36px] desktop:leading-12">
          {title}
        </h1>
      </div>
      {children}
    </div>
  );
}
