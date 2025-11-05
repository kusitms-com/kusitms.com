"use client";

import Image from "next/image";
import { useState } from "react";

export default function RecruitingTeamInfoItem() {
  const [selectedRole, setSelectedRole] = useState("기획");

  const recruitInfoItems = [
    {
      role: "기획",
      activity: ["기획 활동1", "기획 활동2", "기획 활동3"],
      people: ["기획 인재상1", "기획 인재상2", "기획 인재상3"],
    },
    {
      role: "디자인",
      activity: ["디자인 활동1", "디자인 활동2", "디자인 활동3"],
      people: ["디자인 인재상1", "디자인 인재상2", "디자인 인재상3"],
    },
    {
      role: "프론트",
      activity: ["프론트 활동1", "프론트 활동2", "프론트 활동3"],
      people: ["프론트 인재상1", "프론트 인재상2", "프론트 인재상3"],
    },
    {
      role: "백엔드",
      activity: ["백엔드 활동1", "백엔드 활동2", "백엔드 활동3"],
      people: ["백엔드 인재상1", "백엔드 인재상2", "백엔드 인재상3"],
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
