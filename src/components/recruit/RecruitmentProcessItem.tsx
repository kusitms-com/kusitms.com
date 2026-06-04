import { Button, RecruitmentCard } from "@kusitms.com/ui";
import { ChatGraphic, FileGraphic, MedalGraphic, PeopleGraphic } from "@kusitms.com/icons";

const recruitmentProcess = [
  {
    graphic: FileGraphic,
    title: "서류 지원 기간",
    description: "1월 17일(토) ~ 1월 24일(토) 23:59",
  },
  {
    graphic: ChatGraphic,
    title: "서류 합격 발표",
    description: "1월 28일(수)\n합격자/불합격자 전체 연락",
  },
  {
    graphic: PeopleGraphic,
    title: "면접 기간",
    description: "1월 31일(토) ~ 2월 1일(일)\n서류 합격자 개별 안내",
  },
  {
    graphic: MedalGraphic,
    title: "최종 합격 발표",
    description: "2월 4일(수)\n합격자/불합격자 전체 연락",
  },
];

export default function RecruitmentProcessItem() {
  return (
    <section className="flex flex-col w-full items-center gap-[60px]">
      <div className="flex gap-[20px] w-full desktop:flex-row flex-col items-center desktop:items-stretch">
        {recruitmentProcess.map((process) => (
          <RecruitmentCard
            key={process.title}
            type="titled"
            graphic={process.graphic}
            title={process.title}
            description={process.description}
          />
        ))}
      </div>
      <a
        href="https://www.recruit-withus.co.kr/%ED%95%9C%EA%B5%AD%EB%8C%80%ED%95%99%EC%83%9DIT%EA%B2%BD%EC%98%81%ED%95%99%ED%9A%8C-KUSITMS/fIdzmzwic"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button>지원하기</Button>
      </a>
    </section>
  );
}
