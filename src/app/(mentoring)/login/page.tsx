"use client";

import { Favicon128, FooterDesktopLogo } from "@kusitms.com/icons";
import { Label } from "@kusitms.com/ui";
import Link from "next/link";
import { useState } from "react";
import Button from "@/components/mentoring/Button";
import InputField from "@/components/mentoring/InputField";

const page = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const isFilled = id.trim() !== "" && password.trim() !== "";

  return (
    <div className="flex w-full flex-col items-center">
      <Favicon128 width={128} height={128} />
      <div className="flex items-center flex-col gap-4 pb-[33px]">
        <FooterDesktopLogo viewBox="0 0 121.794 35" width={121.794} height={35} />
        <Label className="!self-center lg:!w-auto lg:!h-auto !px-3">멘토링 서비스</Label>
      </div>
      <div className="flex w-full flex-col gap-5">
        <InputField
          label="아이디"
          type="id"
          placeholder="아이디를 입력해주세요"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <InputField
          label="비밀번호"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button
        size="xl"
        variant={isFilled ? "strong" : "disabled"}
        className="w-full mt-11 mb-[34px]"
        disabled={!isFilled}
      >
        로그인
      </Button>
      <p className="text-label-14r text-label-alternative pb-1">아직 계정이 없으신가요?</p>
      <Link href="/signup" className="text-label-netural underline text-label-14sb cursor-pointer">
        회원가입
      </Link>
    </div>
  );
};

export default page;
