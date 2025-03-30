import { ReactNode } from "react";
import { ReviewsTotalCount } from "@/components/review";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KUSITMS | REVIEWS",
  description: "",
};

export default async function ReviewsLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="flex flex-col items-center bg-[#fff] text-[#000] pt-[190px]">
      <h1 className=" font-extrabold text-7xl leading-[96px] tracking-[-1px] text-center mb-[64px]">
        큐밀리의
        <br />
        솔직 후기를 들어보세요!
      </h1>
      <ReviewsTotalCount />
      <main className="w-full max-w-6xl mx-auto bg-[#fff] flex flex-col items-center">
        {children}
      </main>
    </div>
  );
}
