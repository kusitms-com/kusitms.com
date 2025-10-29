"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import Image from "next/image";

interface Props {
  children: ReactNode;
}

export default function ProjectModalShell({ children }: Props) {
  const router = useRouter();

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 overflow-y-auto"
      onClick={() => router.back()}
    >
      <div
        className="relative tablet:w-[624px] h-[90vh] mx-20 bg-white rounded-xl pb-10 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between h-[88px] border-b mb-7 px-10 items-center">
          <p className="text-title-7 text-gray-700">프로젝트 소개</p>
          <button className="cursor-pointer" onClick={() => router.back()}>
            <Image
              src="/projects/icons/CloseIcon2.svg"
              alt="Close"
              width={32}
              height={32}
            />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
