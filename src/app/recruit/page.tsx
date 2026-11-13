import type { Metadata } from "next";
import { cookies } from "next/headers";
import Recruit from "@/components/recruit/Recruit";
import RecruitingTeamInfoItem from "@/components/recruit/RecruitingTeamInfoItem";
import RecruitmentProcessItem from "@/components/recruit/RecruitmentProcessItem";
import RecruitmentTargetInfoItem from "@/components/recruit/RecruitmentTargetInfoItem";
import RecruitmentTogether from "@/components/recruit/RecruitmentTogether";
import RecruitQnA from "@/components/recruit/RecruitQnA";
import UpcomingToast from "@/components/recruit/UpcomingToast";
import {
  formatMonthDay,
  getRecruitStatus,
  QA_DATE_COOKIE,
  RECRUIT_SCHEDULE,
  type RecruitStatusKey,
  resolveKstDate,
  toStatusKey,
} from "@/lib/recruitStatus";

type RecruitSearchParams = Promise<Record<string, string | string[] | undefined>>;

// proxy와 같은 규칙: 주소의 qa_date가 없으면 스테이징에서 저장해 둔 qa_date 쿠키를 쓴다
async function resolveStatusKey(searchParams: RecruitSearchParams): Promise<RecruitStatusKey> {
  const { qa_date: qaDate } = await searchParams;
  const savedQaDate = (await cookies()).get(QA_DATE_COOKIE)?.value;
  return toStatusKey(getRecruitStatus(resolveKstDate(qaDate ?? savedQaDate)));
}

const RECRUIT_URL = "https://www.kusitms.com/recruit";
const OG_IMAGE = "https://www.kusitms.com/og/kusitms-og-34th.png";

// 메타 규칙 1-1·1-2: 모집 상태(비모집 / 모집 중)에 따라 title·description·OG를 서버에서 전환한다.
// 기수와 서류 접수 기간은 RECRUIT_SCHEDULE에서 만든다. 이미지는 상태별 이미지가 나오기 전까지 기존 이미지를 쓴다
export async function generateMetadata({
  searchParams,
}: {
  searchParams: RecruitSearchParams;
}): Promise<Metadata> {
  const statusKey = await resolveStatusKey(searchParams);
  const { cardinal, staff, member } = RECRUIT_SCHEDULE;
  const [title, description] =
    statusKey === "closed"
      ? [
          "다음 기수 모집, 메일로 알려드려요",
          "이메일을 남기면 큐시즘 모집이 시작될 때 바로 알려드려요",
        ]
      : [
          `큐시즘 ${cardinal}기 모집 중`,
          `서류 접수 ${formatMonthDay(staff.start)}~${formatMonthDay(member.end)}. 지금 큐시즘 한 팀이 되어 보세요`,
        ];

  return {
    title,
    description,
    alternates: { canonical: RECRUIT_URL },
    openGraph: {
      type: "website",
      siteName: "KUSITMS",
      title,
      description,
      url: RECRUIT_URL,
      images: [{ url: OG_IMAGE, alt: "KUSITMS Recruit" }],
    },
    twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE] },
  };
}

async function RecruitPage({ searchParams }: { searchParams: RecruitSearchParams }) {
  const statusKey = await resolveStatusKey(searchParams);
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
        return <RecruitmentProcessItem />;
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
