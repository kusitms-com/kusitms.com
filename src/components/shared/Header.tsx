"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import MobilePageNav from "./MobilePageNav";
import { PageNav } from "./PageNav";

export const Header = () => {
  const pathname = usePathname();

  return (
    <header
      className={`w-full desktop:px-12 px-4 py-6 desktop:fixed top-0 left-0 z-50 ${
        pathname === "/display" ? "bg-transparent" : "bg-[#151519]"
      }`}
    >
      <div className="max-w-[2000px] w-full mx-auto flex justify-between">
        <Link href="/">
          <Image
            src="/headerLogo.svg"
            alt="큐시즘 로고"
            width={142}
            height={26}
            priority
            style={{ width: "142px", height: "26px" }}
          />
        </Link>
        <PageNav />
        <MobilePageNav />
      </div>
    </header>
  );
};
