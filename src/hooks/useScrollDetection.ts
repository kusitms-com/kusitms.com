import { useEffect, useState } from "react";

export function useScrollDetection(
  isActive: boolean,
  threshold: number = 5,
  direction: "up" | "down" | "both" = "both",
) {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    if (!isActive) return;

    let scrollTimer: NodeJS.Timeout;
    let lastScrollTop = window.scrollY;
    let rafId: number | null = null;

    const handleScroll = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      rafId = requestAnimationFrame(() => {
        const currentScrollTop = window.scrollY;
        const scrollDelta = currentScrollTop - lastScrollTop;
        const scrollSpeed = Math.abs(scrollDelta);

        const shouldDisable =
          scrollSpeed > threshold &&
          (direction === "both" ||
            (direction === "up" && scrollDelta < 0) ||
            (direction === "down" && scrollDelta > 0));

        if (shouldDisable) {
          setIsScrolling(true);
          clearTimeout(scrollTimer);
          scrollTimer = setTimeout(
            () => {
              setIsScrolling(false);
            },
            direction === "up" ? 150 : 100,
          );
        } else if (scrollSpeed <= threshold) {
          setIsScrolling(false);
        }

        lastScrollTop = currentScrollTop;
        rafId = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      clearTimeout(scrollTimer);
    };
  }, [isActive, threshold, direction]);

  return isScrolling;
}
