"use client";

import { useState } from "react";
import { postEmail } from "@/service/recruit/postEmail";

const MailInput = () => {
  const [email, setEmail] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      await postEmail(email);
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
    <div className="w-full desktop:w-[652px] flex items-center bg-gray-50 desktop:py-[12px] py-[8px] pl-[20px] desktop:pl-[28px] pr-[10px] desktop:pr-[20px] rounded-full text-body-8 desktop:text-body-2">
      <input
        type="email"
        placeholder="메일을 입력해주세요"
        className="flex-1 min-w-0 bg-transparent placeholder:text-gray-500 text-gray-900 outline-none focus:outline-none"
        value={email}
        onChange={handleInputChange}
      />
      <button
        onClick={handleSubmit}
        className="bg-dark-blue-500 text-gray-0 rounded-full cursor-pointer text-body-8 px-[12px] py-[8px] desktop:text-body-4 desktop:px-[24px] desktop:py-[10px] flex-shrink-0 min-w-[72px]"
      >
        알림 받기
      </button>
    </div>
  );
};

export default MailInput;
