import { cookies } from "next/headers";
import Recruit from "@/components/recruit/Recruit";
import RecruitingTeamInfoItem from "@/components/recruit/RecruitingTeamInfoItem";
import RecruitmentProcessItem from "@/components/recruit/RecruitmentProcessItem";
import RecruitmentTargetInfoItem from "@/components/recruit/RecruitmentTargetInfoItem";
import RecruitmentTogether from "@/components/recruit/RecruitmentTogether";
import RecruitQnA from "@/components/recruit/RecruitQnA";
import UpcomingToast from "@/components/recruit/UpcomingToast";
import { getRecruitStatus, QA_DATE_COOKIE, resolveKstDate, toStatusKey } from "@/lib/recruitStatus";

async function RecruitPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { qa_date: qaDate } = await searchParams;
  // proxy와 같은 규칙: 주소의 qa_date가 없으면 스테이징에서 저장해 둔 qa_date 쿠키를 쓴다
  const savedQaDate = (await cookies()).get(QA_DATE_COOKIE)?.value;
  const statusKey = toStatusKey(getRecruitStatus(resolveKstDate(qaDate ?? savedQaDate)));
  const isRecruiting = statusKey !== "closed";
  const recruitInfoList = [
    // 시안(KUS_RCT) 순서: 일정 → 대상 → 파트 → FAQ
    { id: 3, title: "모집 일정", englishTitle: "Schedule", anchor: "schedule" },
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
    <main className="mx-auto w-full flex justify-center" data-recruit-status={statusKey}>
      <div className="w-full min-w-0 px-5 desktop:max-w-[1440px] flex flex-col items-center gap-[100px] desktop:gap-[200px] pt-[80px] desktop:pt-[172px] desktop:px-10">
        <RecruitmentTogether statusKey={statusKey} />
        {/* 모집 정보 */}
        <div className="w-full flex flex-col gap-y-[100px] items-center">
          <section className="w-full flex flex-col gap-y-[200px] items-center">
            {recruitInfoList.map((item) => (
              <Recruit
                title={item.title}
                key={item.id}
                englishTitle={item.englishTitle}
                id={item.anchor}
              >
                {renderRecruitComponent(item.id)}
              </Recruit>
            ))}
          </section>
        </div>
      </div>
      <UpcomingToast />
    </main>
  );
}

export default RecruitPage;
