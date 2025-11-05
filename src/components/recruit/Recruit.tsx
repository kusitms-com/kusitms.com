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
      className={twMerge(
        "flex flex-col items-center desktop:gap-y-[60px] gap-y-[48px] w-full",
        style,
      )}
    >
      <div className="flex flex-col gap-[4px] items-center">
        <h2 className="text-title-7 text-dark-blue-600">{englishTitle}</h2>
        <h1 className="text-title-5 text-gray-900">{title}</h1>
      </div>
      {children}
    </div>
  );
}
