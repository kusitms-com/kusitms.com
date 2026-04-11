import { useEffect, useRef } from "react";

export function useScrollLock(isLocked: boolean) {
  const scrollY = useRef(0);

  useEffect(() => {
    if (!isLocked) return;

    scrollY.current = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY.current}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.overflowY = "scroll";

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflowY = "";
      window.scrollTo(0, scrollY.current);
    };
  }, [isLocked]);
}
