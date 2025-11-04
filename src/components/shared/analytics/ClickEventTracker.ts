import type { GA_CTA_EVENT } from "@/constants/gaEvents";

export type DLPrimitive = string | number | boolean | null | undefined;
type DLItem = { event: string } & Record<string, DLPrimitive>;
type DLWindow = typeof window & { dataLayer?: DLItem[] };

function getDL(): DLItem[] | null {
  if (typeof window === "undefined") return null;
  const w = window as DLWindow;
  return Array.isArray(w.dataLayer) ? w.dataLayer : null;
}

function normalize(v: unknown): DLPrimitive {
  if (v === null || v === undefined) return undefined;
  if (typeof v === "string" || typeof v === "number" || typeof v === "boolean") return v;
  if (v instanceof Date) return v.toISOString();
  if (Array.isArray(v)) return JSON.stringify(v);
  return JSON.stringify(v);
}

export function trackEvent<E extends string, P extends Record<string, DLPrimitive>>(
  event: E,
  params?: P,
) {
  const dl = getDL();
  if (!dl) return;

  const entry: DLItem = { event };
  if (params) {
    for (const [k, v] of Object.entries(params)) {
      const nv = normalize(v);
      if (nv !== undefined) (entry as Record<string, DLPrimitive>)[k] = nv;
    }
  }
  dl.push(entry);
}

export type CtaParams = {
  link_text?: string;
  link_url?: string;
  position?: "header" | "footer" | "list" | "detail" | string;
  component_id?: string;
  project_id?: string;
  value?: number;
};

/** 각 CTA onClick 핸들러에서 호출 */
export function trackCtaClick(event: GA_CTA_EVENT, params?: CtaParams) {
  trackEvent(event, {
    link_text: params?.link_text,
    link_url: params?.link_url,
    position: params?.position,
    component_id: params?.component_id,
    project_id: params?.project_id,
    value: params?.value,
  });
}
