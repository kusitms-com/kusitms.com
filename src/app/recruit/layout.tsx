import React, { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KUSITMS | RECRUIT",
  description: "",
};

export default async function RecruitLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="flex flex-col gap-y-[100px] items-center">
      <section className="w-full max-w-6xl text-center">
        <h1 className="mb-[40px] mt-[192px]">
          <span className="text-[72px] font-black leading-[130%]">KUSITMS</span>
          <br />
          <span className="text-[72px] font-extrabold text-transparent [-webkit-text-stroke:1px_white]">
            Recruitment
          </span>
        </h1>
        <p className="font-normal text-[20px] mt-[40px] leading-[150%]">
          큐시즘은 혼자서는 해낼 수 없는 일들을 함께 이루어내고 있어요. <br />
          멋진 아이디어를 실현하고, 놀라운 결과를 만들어내요. <br />
          우리와 함께할래요?
        </p>
      </section>
      <main className="w-full">{children}</main>
    </div>
  );
}
