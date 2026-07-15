"use client";

import { ChatGraphic, FileGraphic, MedalGraphic, PeopleGraphic } from "@kusitms.com/icons";
import { Button, RecruitmentCard } from "@kusitms.com/ui";
import { useToast } from "@/hooks";

const RECRUIT_APPLY_URL = "https://forms.gle/cBzDbN7yYesLxdW99";

const recruitmentSchedules = [
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
        description: "8월 4일(화)\n합격자/불합격자 전체 연락",
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

export default function RecruitmentProcessItem() {
  const isRecruiting = true;
  const { showToast, Toast } = useToast();

  const handleApplyClick = () => {
    if (isRecruiting) {
      window.open(RECRUIT_APPLY_URL, "_blank", "noopener,noreferrer");
      return;
    }

    showToast({ message: "지원 기간이 아직 아니에요" });
  };

  return (
    <section className="flex flex-col w-full items-center gap-[60px]">
      <div className="flex w-full flex-col gap-[60px]">
        {recruitmentSchedules.map((schedule) => (
          <div key={schedule.label} className="flex w-full flex-col items-center gap-[24px]">
            <h3 className="text-title-7 text-gray-900">{schedule.label}</h3>
            <div className="flex gap-[20px] w-full desktop:flex-row flex-col items-center desktop:items-stretch">
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
      <Button onClick={handleApplyClick}>지원하기</Button>
      {Toast}
    </section>
  );
}
