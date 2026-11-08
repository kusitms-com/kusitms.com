"use client";

import { useEffect } from "react";
import { UPCOMING_TOAST_EVENT, UPCOMING_TOAST_KEY } from "@/hooks/useApplyAction";
import { useToast } from "@/hooks/useToast";

/** upcoming에서 지원하기를 누르면 모집 일정으로 스크롤하고 하단 토스트를 3초 띄운다(GNB에서 넘어온 경우 포함) */
export default function UpcomingToast() {
  const { showToast, Toast } = useToast(3000);

  useEffect(() => {
    const run = () => {
      if (sessionStorage.getItem(UPCOMING_TOAST_KEY) !== "1") return;
      sessionStorage.removeItem(UPCOMING_TOAST_KEY);
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      document.getElementById("schedule")?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
      showToast({ message: "아직 지원서 제출 기간이 아니에요", type: "info" });
    };
    run();
    window.addEventListener(UPCOMING_TOAST_EVENT, run);
    return () => window.removeEventListener(UPCOMING_TOAST_EVENT, run);
  }, [showToast]);

  return Toast;
}
