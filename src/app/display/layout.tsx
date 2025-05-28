import React, { ReactNode } from "react";
import Image from "next/image";
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
      <section className="flex justify-start gap-y-12 display-gradient relative overflow-hidden">
        <Image
          src="/display/displayBackground.png"
          alt="KUSITMS 31ST EXHIBITON"
          width={1018}
          height={472}
          className="absolute right-0 top-0 w-[1018px] h-[472px] object-cover z-0"
        />
        <div className="flex flex-col gap-y-5 mt-22 mb-22 relative z-10">
          <h1 className="font-extrabold text-[42px] text-white px-9 py-5">
            KUSITMS 31ST EXHIBITON
          </h1>
          <Image
            src="/display/banner.png"
            alt="KUSITMS 31ST EXHIBITON"
            width={1152}
            height={207}
            className="w-[1157px] h-[207px]"
          />
        </div>
        <div className="absolute right-0 bottom-0 px-9 py-5 bg-black">
          <h2 className="text-4xl font-semibold text-white">
            Starting Point For Challengers
          </h2>
        </div>
      </section>

      <main className="w-full flex flex-col items-center gap-y-12">
        {children}
      </main>
    </>
  );
}
