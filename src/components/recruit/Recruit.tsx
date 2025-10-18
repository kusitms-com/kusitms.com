import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface JobRequirementProps {
  children: ReactNode;
  title: string;
  style?: string;
}

export default function Recruit({ children, title, style }: JobRequirementProps) {
  return (
    <div
      className={twMerge(
        "flex flex-col items-center desktop:gap-y-[100px] gap-y-[48px] w-full",
        style,
      )}
    >
      <h1 className="font-extrabold desktop:text-[48px] text-[24px] leading-[100%] tracking-[0%]">
        {title}
      </h1>
      {children}
    </div>
  );
}
