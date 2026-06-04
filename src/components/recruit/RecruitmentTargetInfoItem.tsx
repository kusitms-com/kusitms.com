import { RecruitmentCard } from "@kusitms.com/ui";
import { BookGraphic, CalendarGraphic, TrophyGraphic } from "@kusitms.com/icons";

const recruitItems = [
  {
    graphic: BookGraphic,
    description: "활동 내 대학생 신분을 유지하는 분\n(졸업 유예자, 휴학생, 수료생 포함)",
  },
  {
    graphic: CalendarGraphic,
    description: "매주 토요일 서울 지역에서\n진행하는 세션에 빠짐없이 참석 가능한 분",
  },
  {
    graphic: TrophyGraphic,
    description: "활동 기간 동안 운영진 활동 및 학회 활동에\n적극적으로 참여 가능한 분",
  },
];

export default function RecruitmentTargetInfoItem() {
  return (
    <section className="flex desktop:flex-row flex-col w-full desktop:px-0 px-[10px] gap-[16px] desktop:gap-[22px] items-center desktop:items-stretch">
      {recruitItems.map((item) => (
        <RecruitmentCard
          key={item.description}
          type="default"
          graphic={item.graphic}
          description={item.description}
        />
      ))}
    </section>
  );
}
