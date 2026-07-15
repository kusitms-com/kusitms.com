import { ChevronLeft, ChevronRight, Clock3 } from "lucide-react";
import type { ReactNode } from "react";
import { GroupMentoringControl } from "@/components/mypage/ob/schedule/components/GroupMentoringControl";
import { TimeDropdown } from "@/components/mypage/ob/schedule/components/TimeDropdown";
import { TimeSlotList } from "@/components/mypage/ob/schedule/components/TimeSlotList";
import type {
  ScheduleDateNavModel,
  ScheduleGroupMentoringModel,
  ScheduleRegisterModel,
  ScheduleTimeSlotModel,
} from "@/components/mypage/ob/schedule/types";

type ScheduleControlPanelProps = {
  dateNav: ScheduleDateNavModel;
  timeSlot: ScheduleTimeSlotModel;
  groupMentoring: ScheduleGroupMentoringModel;
  register: ScheduleRegisterModel;
};

export function ScheduleControlPanel({
  dateNav,
  timeSlot,
  groupMentoring,
  register,
}: ScheduleControlPanelProps) {
  return (
    <aside className="relative min-h-[641px] overflow-hidden rounded-[16px] border border-[#e2e4eb] bg-white shadow-[0_1px_2px_rgba(16,24,40,0.04)]">
      <div className="flex h-[61px] items-center border-b border-[#eef0f6] px-5">
        <div className="flex items-center gap-2 text-sm font-semibold leading-5 text-[#343946]">
          <Clock3 size={18} className="text-[#737889]" />
          시간대 선택
        </div>
      </div>

      <div className="pb-28">
        <div className="flex h-[60px] items-center justify-between px-5">
          <h2 className="text-lg font-bold leading-6 text-[#151519]">
            {dateNav.selectedDateLabel}
          </h2>
          <div className="flex items-center gap-2">
            <DateArrow label="이전 날짜" onClick={dateNav.selectPrevDate}>
              <ChevronLeft size={20} />
            </DateArrow>
            <DateArrow label="다음 날짜" onClick={dateNav.selectNextDate}>
              <ChevronRight size={20} />
            </DateArrow>
          </div>
        </div>

        <div className="px-5 pt-1">
          <p className="mb-2 text-sm font-semibold leading-[18px] text-[#626879]">시간대 추가</p>
          <div className="flex h-10 items-center gap-2">
            <TimeDropdown
              value={timeSlot.draftStartTime}
              placeholder="시작 시간"
              onChange={timeSlot.updateDraftStartTime}
            />
            <span className="text-sm font-semibold text-[#9da2af]">-</span>
            <TimeDropdown
              value={timeSlot.draftEndTime}
              placeholder="종료 시간"
              onChange={timeSlot.updateDraftEndTime}
            />
            <button
              type="button"
              onClick={timeSlot.addOrUpdateSlot}
              disabled={!timeSlot.canSubmitSlot}
              className={`h-10 w-[72px] shrink-0 rounded-[8px] text-sm font-bold ${
                timeSlot.canSubmitSlot
                  ? "cursor-pointer bg-[#eef3ff] text-[#3157ff] hover:bg-[#e3ebff]"
                  : "cursor-not-allowed bg-[#eef0f6] text-[#626879]"
              }`}
            >
              {timeSlot.editingSlotId ? "수정" : "추가"}
            </button>
          </div>
        </div>
        <TimeSlotList timeSlot={timeSlot} />
        <GroupMentoringControl groupMentoring={groupMentoring} />
      </div>

      <div className="absolute inset-x-0 bottom-0 border-t border-[#eef0f6] bg-white/95 px-6 py-6">
        <button
          type="button"
          onClick={register.registerSchedule}
          disabled={!register.canRegister}
          className={`h-12 w-full rounded-[8px] text-base font-bold ${
            register.canRegister
              ? "cursor-pointer bg-[#3157ff] text-white hover:bg-[#2447e8]"
              : "cursor-not-allowed bg-[#eef0f6] text-[#626879]"
          }`}
        >
          등록하기
        </button>
      </div>
    </aside>
  );
}

type IconButtonProps = {
  label: string;
  onClick: () => void;
  children: ReactNode;
};

function DateArrow({ label, onClick, children }: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="grid size-7 cursor-pointer place-items-center rounded-full text-[#343946] hover:bg-[#f7f8fb]"
    >
      {children}
    </button>
  );
}
