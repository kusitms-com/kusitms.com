"use client";

import Image from "next/image";
import { useState } from "react";

export default function RecruitingTeamInfoItem() {
  const [selectedRole, setSelectedRole] = useState("기획");

  const recruitInfoItems = [
    {
      role: "기획",
      activity: [
        "문제를 빠르게 정의하고, 사용자 관점에서 실현 가능한 기능으로 정리해요,",
        "각 파트가 이해할 수 있도록 화면 흐름, 예외 케이스, 우선순위를 문서로 남겨요.",
        "진행 중에 바뀌는 요구를 파악해서 디자인·개발과 조율하며 팀 방향을 맞춰요.",
      ],
      people: [
        "데이터나 리서치를 근거로 가설을 세우고 논리적으로 설명할 수 있는 분",
        "디자이너·개발자와의 협업 속에서 자연스럽게 우선순위를 판단할 수 있는 분",
        "변화하는 상황 속에서도 책임감 있게 추진하면서 함께 일하는 과정을 즐길 수 있는 분",
      ],
    },
    {
      role: "디자인",
      activity: [
        "기획 의도를 이해해 UX 플로우를 만들고, 실제 화면(UI)로 구체화해요.",
        "개발이 구현하기 쉬운 형태로 컴포넌트와 가이드를 정리해요.",
        "피드백을 받아 사용성을 높이고 완성도를 올리는 수정을 진행해요.",
      ],
      people: [
        "자신의 디자인을 논리적으로 설명하고, 실제 사용자 경험에 적용해본 분",
        "포트폴리오 안에서 본인 기여도를 명확하게 정리할 수 있는 분",
        "협업 과정에서 긍정적으로 소통하고, 스스로를 객관적으로 보며 성장하려는 태도를 가진 분",
      ],
    },
    {
      role: "프론트",
      activity: [
        "웹의 동작 원리를 바탕으로 디자인 시안을 실제 화면으로 구현해요.",
        "API 명세서를 보고 백엔드와 기능을 조율하거나 오류 원인을 함께 찾아내요.",
        "디자인 시스템이나 공통 UI를 프론트 단에서 재사용 가능하게 구조화해요.",
      ],
      people: [
        "핵심 웹 기술에 대한 기본기를 갖추고, 다른 파트와 소통하며 기능을 맞춰본 분",
        "PR과 코드리뷰로 타인의 코드를 읽고 피드백한 경험이 있는 분",
        "프로젝트 규모에 맞춰 기술 스택과 아키텍처를 직접 고민해보고 싶은 분",
      ],
    },
    {
      role: "백엔드",
      activity: [
        "웹 서비스 구조와 서버 동작을 이해하고, 요구사항에 맞는 API와 데이터 구조를 설계해요.",
        "프론트엔드와 API 명세를 기준으로 소통하며 오류 원인을 함께 분석해요.",
        "서비스의 비즈니스 로직과 유지보수성을 고려해 안정적인 시스템을 구현해요.",
      ],
      people: [
        "주요 백엔드 기술의 기본기를 갖추고 있고, 구조를 이해하려는 습관이 있는 분",
        "API 문서를 보고 프론트엔드와 요구를 조율하거나 문제를 풀어본 경험이 있는 분",
        "팀 상황에 따라 기술 스택을 선택하고 더 나은 대안을 고민할 수 있는 분",
      ],
    },
  ];

  const selectedInfo = recruitInfoItems.find((item) => item.role === selectedRole);

  return (
    <section className="flex flex-col gap-[70px] w-full">
      {/* 파트 선택 네비게이션 */}
      <div className="flex gap-[20px] justify-center">
        {recruitInfoItems.map((item) => (
          <button
            key={item.role}
            type="button"
            onClick={() => setSelectedRole(item.role)}
            className={`w-[120px] py-[10px] rounded-full text-body-2 
              ${
                selectedRole === item.role ? "bg-dark-blue-50 text-dark-blue-600" : "text-gray-700"
              }`}
          >
            {item.role}
          </button>
        ))}
      </div>

      {/* 파트 정보 */}
      <div className="flex flex-col gap-[60px]">
        <div className="flex flex-col gap-[12px]">
          <div className="flex gap-[8px] px-[4px] items-center">
            <Image src="/recruit/icons/Union.svg" width={30} height={33} alt="아이콘" />
            <h3 className="text-body-1 text-gray-900">{selectedRole} 파트는 이런 활동을 해요</h3>
          </div>
          <div className="flex flex-col gap-[16px] px-[28px] py-[24px] bg-gray-50 rounded-2xl">
            {selectedInfo?.activity.map((activity, index) => (
              <p key={index} className="flex">
                <Image src="/recruit/icons/Dot.svg" width={30} height={30} alt="아이콘" />
                <span className="text-gray-700 text-body-2">{activity}</span>
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[60px]">
        <div className="flex flex-col gap-[12px]">
          <div className="flex gap-[8px] px-[4px] items-center">
            <Image src="/recruit/icons/Union.svg" width={30} height={33} alt="아이콘" />
            <h3 className="text-body-1 text-gray-900">이런 분과 함께하고 싶어요</h3>
          </div>
          <div className="flex flex-col gap-[16px] px-[28px] py-[24px] bg-gray-50 rounded-2xl">
            {selectedInfo?.people.map((person, index) => (
              <span key={index} className="flex">
                <Image src="/recruit/icons/Dot.svg" width={30} height={30} alt="아이콘" />
                <p className="text-gray-700 text-body-2">{person}</p>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
