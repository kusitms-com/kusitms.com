import Link from "next/link";
import React from "react";
import Image from "next/image";
import { PageNav } from "./PageNav";

export const Header = () => {
  return (
    <header className="w-full px-12 py-6">
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
