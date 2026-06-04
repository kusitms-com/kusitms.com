"use client";

import { useState } from "react";
import { Accordion } from "@kusitms.com/ui";
import { categories, qnaList } from "@/constants/recruitData";

export default function RecruitQnA() {
  const [selectedField, setSelectedField] = useState("전체");

  return (
    <section className="flex flex-col desktop:gap-[70px] gap-[40px] pb-[100px] desktop:pb-[200px] w-full">
      {/* 질문 선택 네비게이션 */}
      <div className="flex desktop:gap-[20px] gap-1 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setSelectedField(category)}
            className={`cursor-pointer rounded-full py-[4px] desktop:w-[120px] transition-colors duration-300
                    ${
                      selectedField === category
                        ? "bg-dark-blue-50 text-dark-blue-600 text-body-5 desktop:text-body-1 px-[16px] desktop:py-[10px] "
                        : "text-gray-700 text-body-6 desktop:text-body-2 hover:bg-gray-50  hover:px-[16px] px-[12px] hover:desktop:py-[10px]"
                    }`}
          >
            {category}
          </button>
        ))}
      </div>
      {/* QnA 정보 */}
      <Accordion
        type="single"
        collapsible
        className="flex flex-col gap-[12px] desktop:gap-[20px]"
      >
        {qnaList
          .filter((item) => selectedField === "전체" || item.field === selectedField)
          .map((item) => (
            <Accordion.Item
              key={item.question}
              value={item.question}
              question={
                <p className="flex gap-x-2 text-black text-body-6 desktop:text-body-2 items-baseline">
                  <span className="text-dark-blue-500 text-body-1 desktop:text-title-7">Q.</span>
                  {item.question}
                </p>
              }
              answer={
                <div className="flex gap-x-2 text-body-6 desktop:text-body-2 items-baseline">
                  <span className="text-dark-blue-300 text-body-1 desktop:text-title-7">A.</span>
                  <div className="text-gray-700">
                    {item.answer.map((line, idx) => (
                      <p key={idx}>{line}</p>
                    ))}
                  </div>
                </div>
              }
            />
          ))}
      </Accordion>
    </section>
  );
}
