"use client";

import { useObMentoringForm } from "@/components/mypage/ob/hooks/useObMentoringForm";
import { ObMentoringPresenter } from "@/components/mypage/ob/ObMentoringPresenter";

export function ObMentoringContainer() {
  const mentoringForm = useObMentoringForm();

  return <ObMentoringPresenter {...mentoringForm} />;
}
