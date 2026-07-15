import { Minus, Plus } from "lucide-react";
import type { ReactNode } from "react";
import type { ScheduleGroupMentoringModel } from "@/components/mypage/ob/schedule/types";

type GroupMentoringControlProps = {
  groupMentoring: ScheduleGroupMentoringModel;
};

export function GroupMentoringControl({ groupMentoring }: GroupMentoringControlProps) {
  return (
    <div className="px-5 pt-7">
      <div className="flex h-[40px] items-start justify-between">
        <div>
          <p className="text-sm font-semibold leading-[18px] text-[#626879]">1:N 멘토링</p>
          <p className="mt-1 text-sm font-medium leading-[18px] text-[#b1b6c3]">
            소그룹 멘토링을 신청하는 경우 체크해주세요
          </p>
        </div>
        <button
          type="button"
          role="switch"
          aria-checked={groupMentoring.isGroupMentoring}
          onClick={groupMentoring.toggleGroupMentoring}
          className={`relative mt-0.5 h-[18px] w-8 shrink-0 cursor-pointer rounded-full transition ${
            groupMentoring.isGroupMentoring ? "bg-[#3157ff]" : "bg-[#d9dce3]"
          }`}
        >
          <span
            className={`absolute top-0.5 size-3.5 rounded-full bg-white transition ${
              groupMentoring.isGroupMentoring ? "left-4" : "left-0.5"
            }`}
          />
        </button>
      </div>

      <div className="mt-4 grid h-10 grid-cols-[40px_minmax(0,1fr)_40px] gap-2">
        <CapacityButton
          label="인원 줄이기"
          disabled={!groupMentoring.isGroupMentoring || groupMentoring.capacity <= 1}
          onClick={groupMentoring.decrementCapacity}
        >
          <Minus size={14} />
        </CapacityButton>
        <div
          className={`flex items-center justify-center rounded-[8px] border border-[#d9dce3] text-sm font-semibold ${
            groupMentoring.isGroupMentoring
              ? "bg-white text-[#343946]"
              : "bg-[#fafbfc] text-[#9da2af]"
          }`}
        >
          {groupMentoring.isGroupMentoring
            ? `${groupMentoring.capacity}명`
            : `최대 ${groupMentoring.capacity}명`}
        </div>
        <CapacityButton
          label="인원 늘리기"
          disabled={!groupMentoring.isGroupMentoring || groupMentoring.capacity >= 5}
          onClick={groupMentoring.incrementCapacity}
        >
          <Plus size={14} />
        </CapacityButton>
      </div>
    </div>
  );
}

type CapacityButtonProps = {
  label: string;
  disabled: boolean;
  onClick: () => void;
  children: ReactNode;
};

function CapacityButton({ label, disabled, onClick, children }: CapacityButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className={`grid size-10 place-items-center rounded-[8px] ${
        disabled
          ? "cursor-not-allowed bg-[#eef0f6] text-[#626879]"
          : "cursor-pointer bg-[#eef3ff] text-[#3157ff] hover:bg-[#e3ebff]"
      }`}
    >
      {children}
    </button>
  );
}
