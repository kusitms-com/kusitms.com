"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

function TopScrollButton() {
  const [bottom, setBottom] = useState(40);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    // 뷰포트 크기 체크
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkIsDesktop();
    window.addEventListener("resize", checkIsDesktop);
    return () => window.removeEventListener("resize", checkIsDesktop);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight;
      const scrollY = window.scrollY || window.pageYOffset;
      const winHeight = window.innerHeight;
      // 바닥까지 남은 거리
      const remain = docHeight - (scrollY + winHeight);
      // 하단 고정값
      const minBottom = isDesktop ? 177 : 226;
      const defaultBottom = isDesktop ? 40 : 16;

      if (remain <= minBottom - defaultBottom) {
        setBottom(minBottom);
      } else {
        setBottom(defaultBottom);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDesktop]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const style: React.CSSProperties = {
    position: "fixed",
    right: isDesktop ? 40 : 16,
    bottom: bottom,
    zIndex: 50,
  };

  return (
    <button
      onClick={scrollToTop}
      style={style}
      className="cursor-pointer"
      aria-label="맨 위로 이동"
    >
      <Image
        src="/topScroll.svg"
        alt="Top Scroll"
        width={48}
        height={48}
        className="desktop:w-12 desktop:h-12 w-10 h-10"
      />
    </button>
  );
}

export default TopScrollButton;
