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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
      onClick={() => router.back()}
    >
      <div
        className="relative tablet:w-[624px] h-[90vh] mx-20 pb-4  bg-white rounded-xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between h-[88px] border-b px-10 items-center bg-white rounded-xl">
          <p className="text-title-7 text-gray-700">프로젝트 소개</p>
          <button onClick={() => router.back()}>
            <Image
              src="/projects/icons/CloseIcon2.svg"
              alt="Close"
              width={32}
              height={32}
            />
          </button>
        </div>
        <div className="overflow-y-auto px-6 pt-4 flex-1">{children}</div>
      </div>
    </div>
  );
}
