import { ReactNode } from "react";
import { NavButtons } from "@/components/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KUSITMS | PROJECTS",
  description: "",
};

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="flex flex-col items-center">
      <header className="w-full max-w-6xl mx-auto py-8 text-center">
        <h1 className="text-5xl font-black mb-4 mt-[180px] leading-[130%]">
          KUSITMS의 다양한 프로젝트를 <br />
          구경해보세요!
        </h1>
        <p className="font-normal text-[20px]">
          <span className="text-[#62EFE5]">45개</span>의 프로젝트를 볼 수
          있어요.
        </p>
        <NavButtons />
      </header>
      <main className="w-full max-w-6xl mx-auto">{children}</main>
    </div>
  );
}
