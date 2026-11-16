"use client";

import { FilterItem, List, NavigationFilter } from "@kusitms.com/ui";
import { useState } from "react";
import { recruitInfoItems } from "@/constants/recruitData";

export default function RecruitingTeamInfoItem() {
  const [selectedRole, setSelectedRole] = useState("기획");

  const selectedInfo = recruitInfoItems.find((item) => item.role === selectedRole);

  // DS List의 목록은 폭이 944px로 고정(className 없음)이라 시안 폭(1360px)·모바일 폭에 맞게 덮고,
  // 모바일은 줄바꿈해 문장이 잘리지 않게 한다
  return (
    <section className="flex w-full min-w-0 flex-col gap-5 desktop:gap-0 desktop:pb-[72px] [&_li]:whitespace-normal desktop:[&_li]:whitespace-nowrap [&_ul]:w-full">
      {/* 파트 선택 네비게이션 */}
      {/* DS NavigationFilter(responsive)는 모바일에서 justify-start이고 클래스를 병합하지 않아 important로 가운데 정렬한다. 넘칠 때는 safe로 왼쪽부터 보이게 한다 */}
      <NavigationFilter className="justify-center-safe!">
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
        <div className="flex flex-col gap-5 desktop:gap-[60px]">
          <List
            title={`${selectedRole} 파트는 이런 활동을 해요`}
            items={selectedInfo.activity as [string, string, string]}
          />
          <List
            title="이런 분과 함께하고 싶어요"
            items={selectedInfo.people as [string, string, string]}
          />
        </div>
      )}
    </section>
  );
}
