"use client";

import Image from "next/image";
import { useState } from "react";
import { recruitInfoItems } from "@/constants/recruitData";

export default function RecruitingTeamInfoItem() {
  const [selectedRole, setSelectedRole] = useState("기획");

  const selectedInfo = recruitInfoItems.find((item) => item.role === selectedRole);

  return (
    <section className="flex flex-col gap-[40px] desktop:gap-[60px] w-full">
      {/* 파트 선택 네비게이션 */}
      <div className="flex desktop:gap-[20px] gap-3 justify-center">
        {recruitInfoItems.map((item) => (
          <button
            key={item.role}
            type="button"
            onClick={() => setSelectedRole(item.role)}
            className={`desktop:w-[120px] py-[8px] w-[80px] desktop:py-[10px] cursor-pointer rounded-full 
              ${
                selectedRole === item.role
                  ? "bg-dark-blue-50 text-dark-blue-600 text-body-5 desktop:text-body-1"
                  : "text-gray-700 text-body-6 desktop:text-body-2 hover:bg-gray-50"
              }`}
          >
            {item.role}
          </button>
        ))}
      </div>

      {/* 파트 정보 */}
      <div className="flex flex-col gap-[12px]">
        <div className="flex gap-[8px] px-[4px] items-center">
          <Image
            src="/recruit/icons/Union.svg"
            width={50}
            height={52}
            className="w-[22px] h-[24px] desktop:w-[30px] desktop:h-[33px]"
            alt="아이콘"
          />
          <h3 className="text-body-5 desktop:text-body-1 text-gray-900">
            {selectedRole} 파트는 이런 활동을 해요
          </h3>
        </div>
        <div className="flex flex-col gap-[12px] px-[16px] desktop:px-[24px] desktop:py-[28px] py-[24px] bg-gray-50 rounded-2xl">
          {selectedInfo?.activity.map((activity, index) => (
            <p key={index} className="flex">
              <Image
                src="/recruit/icons/Dot.svg"
                width={28}
                height={28}
                className="w-[21px] h-[21px] desktop:w-[28px] desktop:h-[28px]"
                alt="아이콘"
              />
              <span className="text-gray-700 text-body-8 desktop:text-body-4">{activity}</span>
            </p>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-[12px]">
        <div className="flex gap-[8px] px-[4px] items-center">
          <Image
            src="/recruit/icons/Union.svg"
            width={50}
            height={52}
            className="w-[22px] h-[24px] desktop:w-[30px] desktop:h-[33px]"
            alt="아이콘"
          />
          <h3 className="text-body-5 desktop:text-body-1 text-gray-900">
            이런 분과 함께하고 싶어요
          </h3>
        </div>
        <div className="flex flex-col gap-[12px] px-[16px] desktop:px-[24px] desktop:py-[28px] py-[24px] bg-gray-50 rounded-2xl">
          {selectedInfo?.people.map((person, index) => (
            <p key={index} className="flex">
              <Image
                src="/recruit/icons/Dot.svg"
                width={30}
                height={30}
                className="w-[21px] h-[21px] desktop:w-[28px] desktop:h-[28px]"
                alt="아이콘"
              />
              <span className="text-gray-700 text-body-8 desktop:text-body-4">{person}</span>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
