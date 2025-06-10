"use client";

import React, { useState } from "react";
import { qnaList } from "@/utils/recruit";
import RecruitQnADropBox from "@/components/recruit/RecruitQnADropBox";

export default function RecruitQnA() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="flex flex-col pt-[162px] pb-[179px] items-center justify-center w-full bg-white">
      <section className="flex flex-col items-center justify-center gap-y-[120px]">
        <h1 className="text-[#0055FF] text-[48px] font-black">
          궁금한게 있어요!
        </h1>
        <div className="flex flex-col gap-y-[28px]">
          {qnaList.map((qna, idx) => (
            <RecruitQnADropBox
              key={qna.question}
              question={qna.question}
              answer={qna.answer}
              isOpen={openIndex === idx}
              onToggle={() => handleToggle(idx)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
