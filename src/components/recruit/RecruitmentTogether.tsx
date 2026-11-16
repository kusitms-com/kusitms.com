import { RECRUIT_SCHEDULE, type RecruitStatusKey } from "@/lib/recruitStatus";
import MailInput from "./MailInput";
import RecruitApplyCta from "./RecruitApplyCta";

// 모집기간 여부(서버에서 한국 시간으로 판정)에 따라 문구와 버튼 다르게 처리
const RecruitmentTogether = ({ statusKey }: { statusKey: RecruitStatusKey }) => {
  return (
    <div className="flex flex-col w-full items-center">
      <h2 className="text-pc-40b text-brand-primary desktop:text-[48px] desktop:leading-[1.35]">
        Recruitment
      </h2>
      {statusKey !== "closed" ? (
        <>
          {/* 시안 KUS_RCT(모집 중, 615:26077): 제목 → 40px → 칩 → 20px → 소개 → 80px → 버튼 */}
          <span className="mt-5 rounded-full border border-black bg-white px-[18px] py-[7px] text-label-13m text-label-strong desktop:mt-10">
            {RECRUIT_SCHEDULE.cardinal}기 모집중
          </span>
          <span className="flex flex-col items-center gap-1 pt-5 pb-10 text-label-13m text-label-normal desktop:pb-20 desktop:text-[20px] desktop:leading-[30px]">
            <p className="text-center">
              큐시즘은 혼자서는 해낼 수 없는 일들을 함께 이루어내고 있어요.
            </p>
            <p>멋진 아이디어를 실현하고, 놀라운 결과를 만들어내요.</p>
            <p>함께 큐밀리가 되시겠어요?</p>
          </span>
          <RecruitApplyCta statusKey={statusKey} />
        </>
      ) : (
        // biome-ignore lint/correctness/useUniqueElementIds: 명세의 고정 앵커(/recruit#alarm)이고 페이지에 한 번만 렌더링된다
        <div
          id="alarm"
          className="flex w-full scroll-mt-24 flex-col items-center desktop:scroll-mt-28"
        >
          {/* 시안 KUS_RCT(모집 전): 데스크톱 20/30 Medium, 모바일 13/18 */}
          <span className="flex w-full flex-col items-center gap-1 pt-5 pb-10 text-center text-label-13m text-label-normal desktop:pt-10 desktop:pb-20 desktop:text-[20px] desktop:leading-[30px]">
            <p>지금은 모집 기간이 아니에요</p>
            <p>모집이 시작되면 메일로 알려드릴게요.</p>
          </span>
          <MailInput />
        </div>
      )}
    </div>
  );
};

export default RecruitmentTogether;
