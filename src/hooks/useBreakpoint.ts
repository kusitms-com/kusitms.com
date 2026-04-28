"use client";
import { useEffect, useState } from "react";

export function useBreakpoint() {
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    const update = () => setWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return {
    width,
    isClient: width !== null,
    isMobile: width === null ? null : width < 768,
    isTablet: width === null ? null : width >= 768,
    isDesktop: width === null ? null : width >= 1280,
  };
}
