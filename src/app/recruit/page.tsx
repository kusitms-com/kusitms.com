import Recruit from "@/components/recruit/Recruit";
import RecruitingTeamInfoItem from "@/components/recruit/RecruitingTeamInfoItem";
import RecruitmentProcessItem from "@/components/recruit/RecruitmentProcessItem";
import RecruitmentTargetInfoItem from "@/components/recruit/RecruitmentTargetInfoItem";
import RecruitmentTogether from "@/components/recruit/RecruitmentTogether";
import RecruitQnA from "@/components/recruit/RecruitQnA";
import { getRecruitStatus, resolveKstDate } from "@/lib/recruitStatus";

async function RecruitPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { qa_date: qaDate } = await searchParams;
  const status = getRecruitStatus(resolveKstDate(qaDate));
  const isRecruiting = status.phase !== "closed";
  const recruitInfoList = [
    // 시안(KUS_RCT) 순서: 일정 → 대상 → 파트 → FAQ
    { id: 3, title: "모집 일정", englishTitle: "Schedule" },
    { id: 1, title: "모집 대상", englishTitle: "Target" },
    { id: 2, title: "모집 파트", englishTitle: "Position" },
    { id: 4, title: "자주 묻는 질문", englishTitle: "FAQ" },
  ];

  const renderRecruitComponent = (id: number) => {
    switch (id) {
      case 1:
        return <RecruitmentTargetInfoItem />;
      case 2:
        return <RecruitingTeamInfoItem />;
      case 3:
        return <RecruitmentProcessItem isRecruiting={isRecruiting} />;
      case 4:
        return <RecruitQnA />;
    }
  };

  return (
    <main
      className="mx-auto w-full flex justify-center"
      data-recruit-status={status.phase === "open" ? `open-${status.track}` : status.phase}
    >
      <div className="w-full min-w-0 px-5 desktop:max-w-[1440px] flex flex-col items-center gap-[100px] desktop:gap-[200px] pt-[80px] desktop:pt-[172px] desktop:px-10">
        <RecruitmentTogether isRecruiting={isRecruiting} />
        {/* 모집 정보 */}
        <div className="w-full flex flex-col gap-y-[100px] items-center">
          <section className="w-full flex flex-col gap-y-[200px] items-center">
            {recruitInfoList.map((item) => (
              <Recruit title={item.title} key={item.id} englishTitle={item.englishTitle}>
                {renderRecruitComponent(item.id)}
              </Recruit>
            ))}
          </section>
        </div>
      </div>
    </main>
  );
}

export default RecruitPage;
