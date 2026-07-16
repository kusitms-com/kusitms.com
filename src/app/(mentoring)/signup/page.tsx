"use client";

import { useState } from "react";
import Button from "@/components/mentoring/Button";
import Dropdown from "@/components/mentoring/Dropdown";
import FileUpload from "@/components/mentoring/FileUpload";
import InputField from "@/components/mentoring/InputField";

const page = () => {
  const [generation, setGeneration] = useState("");
  const isEligibleForCertificate = generation !== "" && parseInt(generation, 10) <= 25;

  return (
    <div className="w-full">
      <h1 className="text-label-normal text-mobile-28b mt-7 mb-8 text-center">회원가입</h1>
      <div className="flex flex-col gap-11">
        <div className="flex flex-col gap-8 w-full">
          <div className="flex items-end gap-2 w-full">
            <div className="flex-1">
              <InputField label="아이디" type="id" placeholder="아이디를 입력해주세요" required />
            </div>
            <Button size="xl" variant="primary" className="w-[111px]">
              중복 확인
            </Button>
          </div>
          <InputField
            label="이메일"
            type="email"
            placeholder="abc@gmail.com"
            required
            helperText="* 회원 승인 여부 전달 시 필요"
          />
          <InputField
            label="비밀번호"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            required
            helperText="* 영문+숫자+특수문자, 8자 이상"
          />
          <InputField
            label="비밀번호 확인"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            required
          />
          <InputField label="이름" type="name" placeholder="이름을 입력해주세요" required />
          <InputField
            label="휴대폰 번호"
            type="phoneNumber"
            placeholder="휴대폰 번호를 입력해주세요"
            required
          />
          <div className="flex flex-row gap-3 w-full">
            <div className="flex flex-1 flex-col gap-2">
              <div className="flex flex-row gap-0.5">
                <p className="text-label-14sb text-label-alternative">활동 기수</p>
                <p className="text-status-negative text-label-14sb">*</p>
              </div>
              <Dropdown
                options={Array.from({ length: 33 }, (_, i) => `${33 - i}기`)}
                placeholder="활동 기수"
                value={generation ? `${generation}기` : undefined}
                onChange={(value) => setGeneration(value.replace("기", ""))}
              />
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <div className="flex flex-row gap-0.5">
                <p className="text-label-14sb text-label-alternative">파트</p>
                <p className="text-status-negative text-label-14sb">*</p>
              </div>
              <Dropdown options={["기획", "디자인", "프론트엔드", "백엔드"]} placeholder="파트" />
            </div>
          </div>
          {isEligibleForCertificate && (
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-0.5">
                <p className="text-label-14sb text-label-alternative">수료증 업로드</p>
                <p className="text-status-negative text-label-14sb">*</p>
              </div>
              <FileUpload helperText="* 큐시즘 활동 인증 가능한 자료도 가능합니다" />
            </div>
          )}
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-0.5">
              <p className="text-label-14sb text-label-alternative">프로필 사진</p>
              <p className="text-status-negative text-label-14sb">*</p>
            </div>
            <FileUpload helperText="* 가이드 문구(공개 여부나 활용되는 곳 설명)" />
          </div>
        </div>
        <Button
          size="xl"
          variant="disabled"
          className="w-full">
          회원가입
        </Button>
      </div>
    </div>
  );
};

export default page;
