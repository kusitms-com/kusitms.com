"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import type { ReactNode } from "react";
import { useEffect } from "react";

interface Props {
  children: ReactNode;
}

export default function ProjectModalShell({ children }: Props) {
  const router = useRouter();

  useEffect(()=>{
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow="hidden";
    return()=>{
      document.body.style.overflow=originalStyle;
    }
  },[])

  return (
    <div
      className="fixed inset-0 z-50 flex tablet:items-center justify-center bg-black/70 tablet:pt-0 pt-[80px]"
      onClick={() => router.back()}
    >
      <div
        className="relative w-[624px] max-h-[480px] tablet:max-h-[800px] tablet:mx-20 mx-5 pb-4 bg-white rounded-xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="hidden tablet:flex justify-between min-h-[88px] border-b px-10 items-center bg-white rounded-t-xl">
          <p className="text-title-7 text-gray-700">프로젝트 소개</p>
          <button onClick={() => router.back()}>
            <Image src="/projects/icons/CloseIcon2.svg" alt="Close" width={32} height={32} />
          </button>
        </div>
        <div className="overflow-y-auto tablet:pt-4 pt-5 flex-1 tablet:custom-scrollbar-default custom-scrollbar-none">
          {children}
        </div>
      </div>
    </div>
  );
}
