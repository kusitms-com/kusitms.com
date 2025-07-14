import React from "react";
import Image from "next/image";

import Recruit from "@/components/recruit/Recruit";
import RecruitQnA from "@/components/recruit/RecruitQnA";
import RecruitmentTargetInfoItem from "@/components/recruit/RecruitmentTargetInfoItem";
import RecruitingTeamInfoItem from "@/components/recruit/RecruitingTeamInfoItem";
import MeetingInfoItem from "@/components/recruit/MeetingInfoItem";
import RecruitmentProcessItem from "@/components/recruit/RecruitmentProcessItem";

async function RecruitPage() {

  const recruitInfoList = [{id:1, title: "누가 지원할 수 있나요?"}, {id:2, title: "어떤 팀을 모집해요?"}, {id:3, title: "언제 어디서 모여요?"}, {id:4, title: "모집 절차가 어떻게 돼요?"}];

  const renderRecruitComponent = (id: number) => {
    switch (id) {
      case 1:
        return (
            <RecruitmentTargetInfoItem />
        );
      case 2:
        return (
            <RecruitingTeamInfoItem />
        );
      case 3:
        return (
            <MeetingInfoItem />
        );
      default:
        return (
            <RecruitmentProcessItem />
        );
    }
  };

  return (
      <main className="flex flex-col items-center">
        <button className="flex gap-x-1 items-center font-semibold text-[20px] px-8 py-4 rounded-full bg-[#0055FF] hover:scale-105 transition cursor-pointer mt-[24px] desktop:hidden">
          함께하러 가기
          <Image
              src="/recruit/icons/WhiteArrow.svg"
              alt="Arrow"
              width={24}
              height={24}
              style={{width: 24, height: 24}}
          />
        </button>
        {/* 리쿠리팅 Info */}
        <div className="mx-auto flex flex-col gap-y-[100px] items-center w-full desktop:max-w-[1180px] desktop:mt-0 mt-[100px]">
          <Image
              src="/recruit/sticker/Arrow.svg"
              alt="Arrow"
              width={106}
              height={46}
              style={{width: 106, height: 46}}
          />
          <section className="flex flex-col w-full desktop:gap-y-[200px] gap-y-[100px] justify-center items-center">
            {recruitInfoList.map((item) => (
                <Recruit title={item.title} key={item.id}>
                  {renderRecruitComponent(item.id)}
                </Recruit>
            ))}
          </section>
          <Image
              src="/recruit/sticker/Arrow.svg"
              alt="Arrow"
              width={106}
              height={46}
              style={{width: 106, height: 46}}
          />
          <Recruit style="desktop:gap-y-[64px] gap-y-[40px]" title={"이제 지원해볼게요!"}>
            <div className="flex flex-col items-center desktop:pb-[120px] pb-[160px] desktop:gap-y-[64px] gap-y-[40px]">
              <p className="font-semibold desktop:text-[20px] text-[16px] leading-[150%] tracking-[-0.2px] text-center">
                  큐시즘 32기 신규 운영진 리크루팅이 시작되었어요. <br/>
                  큐시즘을 함께 이끌어 갈 여러분을 기다려요!
              </p>
              <button className="flex gap-x-1 items-center font-semibold text-[20px] px-8 py-4 rounded-full bg-[#0055FF] hover:scale-105 transition cursor-pointer">
                함께하러 가기
                <Image
                    src="/recruit/icons/WhiteArrow.svg"
                    alt="Arrow"
                    width={24}
                    height={24}
                    style={{width: 24, height: 24}}
                />
              </button>
            </div>
          </Recruit>
        </div>

        {/* QnA */}
        <RecruitQnA/>
      </main>
  );
}

export default RecruitPage;
