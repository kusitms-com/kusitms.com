"use client";

import Image from "next/image";
import Link from "next/link";
import MobilePageNav from "./MobilePageNav";
import { PageNav } from "./PageNav";

export const Header = () => {
  return (
    <header className="w-full desktop:px-12 px-4 py-6 desktop:fixed top-0 left-0 z-50 bg-white ">
      <div className="max-w-[2000px] w-full mx-auto flex items-center justify-between">
        <Link href="/">
          <Image
            src="/headerLogo.svg"
            alt="큐시즘 로고"
            width={142}
            height={26}
            className="w-[110px] h-[20px] desktop:w-[142px] desktop:h-[26px]"
            priority
          />
        </Link>
        <PageNav />
        <MobilePageNav />
      </div>
    </header>
  );
};
