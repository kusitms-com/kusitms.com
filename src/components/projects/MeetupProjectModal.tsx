import Image from "next/image";
import React from "react";

interface MeetupProjectModalProps {
  changecloseState: () => void;
}

export const MeetupProjectModal = ({
  changecloseState,
}: MeetupProjectModalProps) => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-10">
      <div className="absolute max-w-[65%]">
        <div className="flex justify-between mb-6">
          <h2 className="text-4xl font-extrabold">조각조각</h2>
          <Image
            className="cursor-pointer"
            src="/projects/icons/CloseIcon.svg"
            alt="모달 닫기"
            width={28}
            height={28}
            style={{ width: "28px", height: "28px" }}
            onClick={changecloseState}
          />
        </div>
        <div className="mb-10">
          <p className="text-xl font-normal">throthro</p>
        </div>
        <div className="grid grid-cols-[minmax(0,400px)_minmax(0,550px)] grid-rows-[minmax(0,270px)_minmax(0,250px)] gap-3">
          <div className="row-span-2 bg-gray-200 flex items-center justify-center rounded-xl">
            test1
          </div>
          <div className="bg-[#5D5E67] py-6 pl-8 pt-6 pr-12 rounded-xl">
            <h3 className="text-xl font-extrabold mb-4">프로젝트 요약</h3>
            <div className="flex justify-between">
              <div className="border-r-[1px] pr-12 text-base font-normal flex flex-col gap-2">
                <p>진행기수</p>
                <p>프로젝트 형태 / 기간</p>
                <p>팀 구성</p>
              </div>
              <div className="text-[#E2E2EB] text-base font-normal flex flex-col gap-2">
                <p>26기</p>
                <p>web (2024-09-21 - 2024-11-30)</p>
                <p>기획 (3) : 신예진,한나영,홍가연</p>
                <p>기획 (3) : 신예진,한나영,홍가연</p>
                <p>기획 (3) : 신예진,한나영,홍가연</p>
                <p>기획 (3) : 신예진,한나영,홍가연</p>
              </div>
            </div>
          </div>
          <div className="bg-[#2F3038] py-6 px-10 pt-8  rounded-xl">
            <h3 className="text-xl font-extrabold mb-6">프로젝트 설명</h3>
            <p className="text-base font-normal">
              조각조각’은 일상 속에서 불규칙하고 갑작스럽게 발생해 버려지기 쉬운
              ‘자투리 시간’을 유의미한 활동으로 전환할 수 있도록 돕습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
