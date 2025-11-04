"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

type DLItem = {
  event: string;
} & Record<string, string | number | boolean | null | undefined>;

type DLWindow = typeof window & { dataLayer?: DLItem[] };

function getDataLayer(): DLItem[] | null {
  if (typeof window === "undefined") return null;
  const w = window as DLWindow;
  return Array.isArray(w.dataLayer) ? w.dataLayer : null;
}

export default function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const dl = getDataLayer();
    if (!dl) return;

    const page_path = pathname + (searchParams?.toString() ? `?${searchParams}` : "");

    dl.push({
      event: "page_view",
      page_path,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname, searchParams]);

  return null;
}
