"use client";

import { ChatGraphic, FileGraphic, MedalGraphic, PeopleGraphic } from "@kusitms.com/icons";
import { RecruitmentCard } from "@kusitms.com/ui";

// 비모집: 지난 기수(34기) 일정을 "신규 운영진 / 신규 학회원"으로 그대로 보여 준다(명세 3-3)
const PAST_SCHEDULES = [
  {
    label: "신규 운영진",
    steps: [
      {
        graphic: FileGraphic,
        title: "서류 지원 기간",
        description: "7월 16일(목) ~ 7월 20일(월)",
      },
      {
        graphic: ChatGraphic,
        title: "서류 합격 발표",
        description: "7월 22일(수)\n합격자/불합격자 전체 연락",
      },
      {
        graphic: PeopleGraphic,
        title: "신규 운영진 면접",
        description: "7월 25일(토) ~ 7월 26일(일)\n서류 합격자 개별 안내",
      },
      {
        graphic: MedalGraphic,
        title: "최종 결과 발표",
        description: "7월 28일(화)\n합격자/불합격자 전체 연락",
      },
    ],
  },
  {
    label: "신규 학회원",
    steps: [
      {
        graphic: FileGraphic,
        title: "서류 지원 기간",
        description: "7월 25일(토) ~ 8월 1일(토) 23:59",
      },
      {
        graphic: ChatGraphic,
        title: "서류 합격 발표",
        description: "8월 5일(수)\n합격자/불합격자 전체 연락",
      },
      {
        graphic: PeopleGraphic,
        title: "면접 기간",
        description: "8월 8일(토) ~ 8월 9일(일)\n서류 합격자 개별 안내",
      },
      {
        graphic: MedalGraphic,
        title: "최종 합격 발표",
        description: "8월 11일(화)",
      },
    ],
  },
];

// 모집 중: 이번 기수(35기, 명세 0-2 예시) 일정
const CURRENT_SCHEDULES = [
  {
    label: "운영진",
    steps: [
      {
        graphic: FileGraphic,
        title: "서류 지원 기간",
        description: "1/7(목) ~ 1/11(월)",
      },
      {
        graphic: ChatGraphic,
        title: "서류 합격 발표",
        description: "1/13(수)\n합격자/불합격자 전체 연락",
      },
      {
        graphic: PeopleGraphic,
        title: "운영진 면접",
        description: "1/16(토) ~ 1/17(일)\n서류 합격자 개별 안내",
      },
      {
        graphic: MedalGraphic,
        title: "최종 결과 발표",
        description: "1/19(화)\n합격자/불합격자 전체 연락",
      },
    ],
  },
  {
    label: "학회원",
    steps: [
      {
        graphic: FileGraphic,
        title: "서류 지원 기간",
        description: "1/16(토) ~ 1/23(토) 23:59",
      },
      {
        graphic: ChatGraphic,
        title: "서류 합격 발표",
        description: "1/27(수)\n합격자/불합격자 전체 연락",
      },
      {
        graphic: PeopleGraphic,
        title: "면접 기간",
        description: "1/30(토) ~ 1/31(일)\n서류 합격자 개별 안내",
      },
      {
        graphic: MedalGraphic,
        title: "최종 합격 발표",
        description: "2/2(화)",
      },
    ],
  },
];

export default function RecruitmentProcessItem({ isRecruiting }: { isRecruiting: boolean }) {
  const schedules = isRecruiting ? CURRENT_SCHEDULES : PAST_SCHEDULES;

  return (
    <section className="flex flex-col w-full items-center gap-[60px] desktop:pb-14">
      <div className="flex w-full max-w-[1200px] flex-col gap-[60px] desktop:gap-[60px]">
        {schedules.map((schedule) => (
          <div
            key={schedule.label}
            className="flex w-full flex-col items-center gap-6 desktop:gap-[30px]"
          >
            <h3 className="text-title-7 text-label-normal desktop:text-mobile-28sb">
              {schedule.label}
            </h3>
            {/* DS RecruitmentCard는 폭이 고정(w-75 / lg:w-55)이라 시안(모바일 285px, 데스크톱 4장이 1200px을 채움)에 맞게 덮는다 */}
            <div className="flex gap-[20px] w-full desktop:flex-row flex-col items-center desktop:items-stretch [&>div]:w-[285px] desktop:[&>div]:w-auto desktop:[&>div]:flex-1">
              {schedule.steps.map((process) => (
                <RecruitmentCard
                  key={`${schedule.label}-${process.title}`}
                  type="titled"
                  graphic={process.graphic}
                  title={process.title}
                  description={process.description}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
