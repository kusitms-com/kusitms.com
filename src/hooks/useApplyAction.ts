import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";
import {
  fromStatusKey,
  RECRUIT_APPLY_URL,
  type RecruitStatus,
  type RecruitStatusKey,
} from "@/lib/recruitStatus";

export type ApplyButtonLocation = "gnb" | "recruit";

// upcoming에서 GNB로 리크루팅에 넘어온 뒤 토스트를 띄우기 위한 표시와, 이미 리크루팅에 있을 때 쓰는 이벤트
export const UPCOMING_TOAST_KEY = "recruit_upcoming_toast";
export const UPCOMING_TOAST_EVENT = "recruit:upcoming-toast";

type DLWindow = Window & { dataLayer?: Record<string, unknown>[] };

// GA 명세 B-2: recruit_track은 open일 때만 보낸다. GTM 데이터 레이어는 이전 값을 기억하므로 나머지 상태에서는 비운다
function pushApplyClick(status: RecruitStatus, location: ApplyButtonLocation) {
  const dataLayer = (window as DLWindow).dataLayer;
  if (!Array.isArray(dataLayer)) return;
  dataLayer.push({
    event: "apply_click",
    button_location: location,
    recruit_status: status.phase,
    recruit_track: status.phase === "open" ? status.track : undefined,
  });
}

/** 지원하기/모집 알림 받기 버튼 클릭: apply_click을 먼저 보내고 상태별로 이동한다(명세 0-1, GA E-2) */
export function useApplyAction(location: ApplyButtonLocation) {
  const router = useRouter();
  const pathname = usePathname();

  return useCallback(
    (key: RecruitStatusKey) => {
      const status = fromStatusKey(key);
      pushApplyClick(status, location);

      if (status.phase === "open") {
        // 팝업 차단을 피하려고 클릭과 같은 순간에 연다(이벤트는 위에서 동기로 데이터 레이어에 들어감)
        window.open(RECRUIT_APPLY_URL[status.track], "_blank", "noopener,noreferrer");
        return;
      }
      if (status.phase === "closed") {
        router.push("/recruit?from=apply_click#alarm");
        return;
      }
      sessionStorage.setItem(UPCOMING_TOAST_KEY, "1");
      if (pathname === "/recruit") window.dispatchEvent(new Event(UPCOMING_TOAST_EVENT));
      else router.push("/recruit#schedule");
    },
    [location, pathname, router],
  );
}
