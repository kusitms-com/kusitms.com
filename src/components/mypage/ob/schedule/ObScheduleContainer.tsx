"use client";

import { useObSchedule } from "@/components/mypage/ob/schedule/hooks/useObSchedule";
import { ObSchedulePresenter } from "@/components/mypage/ob/schedule/ObSchedulePresenter";

export function ObScheduleContainer() {
  const schedule = useObSchedule();

  return <ObSchedulePresenter {...schedule} />;
}
