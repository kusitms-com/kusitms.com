"use client";

import { ScrollTopButton as ScrollTopButtonUI } from "@kusitms.com/ui";
import { useEffect, useState } from "react";

function TopScrollButton() {
  const [bottom, setBottom] = useState(40);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
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
      const remain = docHeight - (scrollY + winHeight);
      const minBottom = isDesktop ? 177 : 226;
      const defaultBottom = isDesktop ? 40 : 16;

      if (remain <= minBottom) {
        const dynamicBottom = defaultBottom + (minBottom - remain);
        setBottom(Math.min(dynamicBottom, minBottom));
      } else {
        setBottom(defaultBottom);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDesktop]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const style: React.CSSProperties = {
    position: "fixed",
    right: isDesktop ? 40 : 16,
    bottom: bottom,
    zIndex: 50,
  };

  return <ScrollTopButtonUI onClick={scrollToTop} style={style} />;
}

export default TopScrollButton;
