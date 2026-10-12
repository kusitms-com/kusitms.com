import { MyPageHeader } from "@/components/mypage/ob/components/layout/MyPageHeader";
import { ProfileSummary } from "@/components/mypage/ob/components/layout/ProfileSummary";
import { SideNav } from "@/components/mypage/ob/components/layout/SideNav";
import { ScheduleCalendar } from "@/components/mypage/ob/schedule/components/ScheduleCalendar";
import { ScheduleControlPanel } from "@/components/mypage/ob/schedule/components/ScheduleControlPanel";
import type { UseObScheduleReturn } from "@/components/mypage/ob/schedule/types";
import { SuccessToast } from "@/components/shared/ui/SuccessToast";

export function ObSchedulePresenter({
  calendar,
  dateNav,
  timeSlot,
  groupMentoring,
  register,
}: UseObScheduleReturn) {
  return (
    <main className="min-h-screen bg-white font-[family-name:var(--font-pretendard)] text-[#151519]">
      <MyPageHeader />
      <div className="mx-auto flex w-full max-w-[1200px] gap-6 px-5 desktop:px-0">
        <SideNav activeItem="일정 등록" />
        <div className="min-w-0 flex-1 space-y-5 py-8">
          <ProfileSummary />
          <div>
            <h1 className="text-[28px] font-bold leading-9 text-[#151519]">일정 등록</h1>
            <p className="mt-2 text-base font-medium leading-6 text-[#737889]">
              멘토링을 진행할 날짜와 시간대를 등록해 주세요.
            </p>
          </div>
          <div className="grid items-start gap-5 desktop:grid-cols-[minmax(0,1fr)_384px]">
            <ScheduleCalendar calendar={calendar} />
            <ScheduleControlPanel
              dateNav={dateNav}
              timeSlot={timeSlot}
              groupMentoring={groupMentoring}
              register={register}
            />
          </div>
        </div>
      </div>
      {register.toastVisible && <SuccessToast message="일정이 등록되었습니다." />}
    </main>
  );
}
