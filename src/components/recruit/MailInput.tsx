"use client";

import { useState } from "react";
import { EmailInput } from "@kusitms.com/ui";
import { postEmail } from "@/service/recruit/postEmail";

const MailInput = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (value: string) => {
    try {
      await postEmail(value);
      alert("알림 신청이 완료되었습니다!");
      setEmail("");
    } catch (error) {
      if (error instanceof Error && error.message) {
        try {
          const parsed = JSON.parse(error.message);
          if (parsed?.message) {
            alert(parsed.message);
            return;
          }
        } catch {}
      }
      alert("알림 신청에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <EmailInput
      value={email}
      onChange={setEmail}
      onSubmit={handleSubmit as any}
      validate={() => true}
      placeholder="메일을 입력해주세요"
      buttonLabel="알림 받기"
    />
  );
};

export default MailInput;
