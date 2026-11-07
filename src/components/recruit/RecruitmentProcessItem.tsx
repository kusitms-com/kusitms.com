"use client";

import { ChatGraphic, FileGraphic, MedalGraphic, PeopleGraphic } from "@kusitms.com/icons";
import { Button, RecruitmentCard } from "@kusitms.com/ui";
import { useToast } from "@/hooks";

const RECRUIT_APPLY_URL = "https://forms.gle/7sf8ix1CnP9s3G3s8";

const recruitmentSchedules = [
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
        // 시안에 면접 기간(1/30~1/31)과 같은 값이 들어 있어 그대로 옮김. 확정 날짜 받으면 교체
        description: "1/30(토) ~ 1/31(일)",
      },
    ],
  },
];

export default function RecruitmentProcessItem() {
  const isRecruiting = false;
  const { showToast, Toast } = useToast();

  const handleApplyClick = () => {
    if (isRecruiting) {
      window.open(RECRUIT_APPLY_URL, "_blank", "noopener,noreferrer");
      return;
    }

    showToast({ message: "지원 기간이 아직 아니에요" });
  };

  return (
    <section className="flex flex-col w-full items-center gap-[60px] desktop:pb-14">
      <div className="flex w-full max-w-[1200px] flex-col gap-[60px] desktop:gap-[60px]">
        {recruitmentSchedules.map((schedule) => (
          <div
            key={schedule.label}
            className="flex w-full flex-col items-center gap-6 desktop:gap-[30px]"
          >
            <h3 className="text-title-7 text-label-normal desktop:text-[28px] desktop:leading-[38px] desktop:font-semibold">
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
      {isRecruiting && <Button onClick={handleApplyClick}>지원하기</Button>}
      {Toast}
    </section>
  );
}
