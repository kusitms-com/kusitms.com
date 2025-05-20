import React, { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KUSITMS | DISPLAY",
  description: "큐시즘에서 진행한 다양한 프로젝트들을 한눈에 확인해보세요.",
};

export default async function RecruitLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <section className="flex flex-col mt-[180px] items-center gap-y-12">
        <h1 className="text-[48px] text-white font-extrabold text-center">
          KUSITMS의 31ST
          <br />
          EXHIBITON
        </h1>
        <p className="font-normal text-[20px] mt-[40px] leading-[150%]">
          도전하는 사람들을 위한 시작점
        </p>
      </section>
      <main className="w-full flex flex-col items-center gap-y-12">
        {children}
      </main>
    </>
  );
}
