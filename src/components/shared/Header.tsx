"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { PageNav } from "./PageNav";

export const Header = () => {
  const pathname = usePathname();

  return (
    <header
      className={`w-full px-12 py-6 fixed top-0 left-0 z-50 ${
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
      </div>
    </header>
  );
};
