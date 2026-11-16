"use client";

import { Button } from "@kusitms.com/ui";
import { useApplyAction } from "@/hooks/useApplyAction";
import { APPLY_LABEL, type RecruitStatusKey } from "@/lib/recruitStatus";

/** 리크루팅 상단 지원 버튼(btn_apply_recruit). 모집 중 화면에서만 쓴다 */
export default function RecruitApplyCta({ statusKey }: { statusKey: RecruitStatusKey }) {
  const apply = useApplyAction("recruit");
  return <Button onClick={() => apply(statusKey)}>{APPLY_LABEL[statusKey]}</Button>;
}
