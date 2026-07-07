"use client";

import { EmailInput } from "@kusitms.com/ui";
import { useState } from "react";
import { useToast } from "@/hooks";
import { postEmail } from "@/service/recruit/postEmail";

const MailInput = () => {
  const isPreparing = true;
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showToast, Toast } = useToast();

  const handleSubmit = async (value: string) => {
    if (isPreparing) return;
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      await postEmail(value);
      showToast({ message: "알림 신청이 완료되었습니다!" });
      setEmail("");
    } catch (error) {
      if (error instanceof Error && error.message) {
        try {
          const parsed = JSON.parse(error.message);
          if (parsed?.message) {
            showToast({ message: parsed.message, type: "error" });
            return;
          }
        } catch {}
      }
      showToast({ message: "알림 신청에 실패했습니다. 다시 시도해주세요.", type: "error" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <EmailInput
        value={email}
        onChange={setEmail}
        // biome-ignore lint/suspicious/noExplicitAny: DS EmailInput의 onSubmit이 InputHTMLAttributes와 교차 타입 충돌
        onSubmit={handleSubmit as any}
        validate={() => true}
        placeholder={isPreparing ? "준비중..." : "메일을 입력해주세요"}
        buttonLabel={isSubmitting ? "신청 중" : "알림 받기"}
        disabled={isPreparing || isSubmitting}
      />
      {Toast}
    </>
  );
};

export default MailInput;
