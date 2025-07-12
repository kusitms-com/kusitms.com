import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface JobRequirementProps {
  children: ReactNode;
  title: string;
  style?: string;
}

export default function Recruit({
  children,
  title,
  style,
}: JobRequirementProps) {
  return (
    <div
      className={twMerge(
        "flex flex-col items-center gap-y-[100px] w-full",
        style
      )}
    >
      <h1 className="font-extrabold text-[48px] leading-[100%] tracking-[0%]">
        {title}
      </h1>
      {children}
    </div>
  );
}
