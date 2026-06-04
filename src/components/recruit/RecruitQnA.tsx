"use client";

import { useState } from "react";
import { Accordion, FilterItem, NavigationFilter } from "@kusitms.com/ui";
import { categories, qnaList } from "@/constants/recruitData";

export default function RecruitQnA() {
  const [selectedField, setSelectedField] = useState("전체");

  return (
    <section className="flex flex-col desktop:gap-[70px] gap-[40px] pb-[100px] desktop:pb-[200px] w-full">
      {/* 질문 선택 네비게이션 */}
      <NavigationFilter className="justify-center">
        {categories.map((category) => (
          <FilterItem
            key={category}
            active={selectedField === category}
            onClick={() => setSelectedField(category)}
          >
            {category}
          </FilterItem>
        ))}
      </NavigationFilter>
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
