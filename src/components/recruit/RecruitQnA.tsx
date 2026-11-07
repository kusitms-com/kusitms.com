"use client";

import { Accordion, FilterItem, NavigationFilter } from "@kusitms.com/ui";
import { useState } from "react";
import { categories, qnaList } from "@/constants/recruitData";

export default function RecruitQnA() {
  const [selectedField, setSelectedField] = useState("전체");

  return (
    <section className="flex w-full min-w-0 flex-col gap-5 pb-[100px] desktop:gap-0 desktop:pb-[200px]">
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
      <Accordion type="single" collapsible className="flex flex-col gap-5">
        {qnaList
          .filter((item) => selectedField === "전체" || item.field === selectedField)
          .map((item) => (
            <Accordion.Item
              key={item.question}
              value={item.question}
              question={item.question}
              answer={item.answer.map((line, idx) => <p key={idx}>{line}</p>)}
            />
          ))}
      </Accordion>
    </section>
  );
}
