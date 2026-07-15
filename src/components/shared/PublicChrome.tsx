"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { Footer, Header } from "@/components/shared";

type PublicChromeProps = {
  children: ReactNode;
};

export function PublicChrome({ children }: PublicChromeProps) {
  const pathname = usePathname();
  const isMyPage = pathname?.startsWith("/mypage");

  if (isMyPage) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
