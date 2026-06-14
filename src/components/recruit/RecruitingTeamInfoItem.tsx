"use client";

import { FilterItem, List, NavigationFilter } from "@kusitms.com/ui";
import { useState } from "react";
import { recruitInfoItems } from "@/constants/recruitData";

export default function RecruitingTeamInfoItem() {
  const [selectedRole, setSelectedRole] = useState("기획");

  const selectedInfo = recruitInfoItems.find((item) => item.role === selectedRole);

  return (
    <section className="flex flex-col gap-[40px] desktop:gap-[60px] w-full">
      {/* 파트 선택 네비게이션 */}
      <NavigationFilter className="justify-center">
        {recruitInfoItems.map((item) => (
          <FilterItem
            key={item.role}
            active={selectedRole === item.role}
            onClick={() => setSelectedRole(item.role)}
          >
            {item.role}
          </FilterItem>
        ))}
      </NavigationFilter>

      {/* 파트 정보 */}
      {selectedInfo && (
        <>
          <List
            title={`${selectedRole} 파트는 이런 활동을 해요`}
            items={selectedInfo.activity as [string, string, string]}
          />
          <List
            title="이런 분과 함께하고 싶어요"
            items={selectedInfo.people as [string, string, string]}
          />
        </>
      )}
    </section>
  );
}
