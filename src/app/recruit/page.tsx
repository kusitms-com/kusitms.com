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
      <main>
        {/* 리쿠리팅 Info */}
        <div className="mx-auto flex flex-col gap-y-[100px] items-center w-full max-w-[1180px]">
          <Image
              src="/recruit/sticker/Arrow.svg"
              alt="Arrow"
              width={106}
              height={46}
              priority
              style={{width: 106, height: 46}}
          />
          <section className="flex flex-col w-full gap-y-[200px] justify-center items-center">
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
          <Recruit style={"gap-y-[64px]"} title={"이제 지원해볼게요!"}>
            <div
                className={"flex flex-col items-center pb-[120px] gap-y-[64px] "}
            >
              <p
                  className={
                    "font-semibold text-[20px] leading-[150%] tracking-[-0.2px] text-center"
                  }
              >
                큐시즘 31기 신규 학회원 리크루팅이 시작되었어요. <br/>
                큐시즘과 함께 성장할 열정 가득한 여러분을 기다려요!
              </p>
              <button
                  className={
                    "flex gap-x-1 items-center font-semibold text-[20px] px-8 py-4 rounded-full bg-[#0055FF] hover:scale-105 transition cursor-pointer"
                  }
              >
                함께하러 가기
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
