import { X } from "lucide-react";
import { formatKoreanTime } from "@/components/mypage/ob/schedule/components/timeFormat";
import type { ScheduleTimeSlotModel } from "@/components/mypage/ob/schedule/types";

type TimeSlotListProps = {
  timeSlot: ScheduleTimeSlotModel;
};

export function TimeSlotList({ timeSlot }: TimeSlotListProps) {
  return (
    <div className="px-5 pt-7">
      <p className="text-sm font-semibold leading-[18px] text-[#626879]">설정된 시간대</p>
      {timeSlot.selectedDateSlots.length > 0 ? (
        <div className="mt-2 space-y-2">
          {timeSlot.selectedDateSlots.map((slot) => (
            <div
              key={slot.id}
              className="flex h-11 items-center justify-between rounded-[8px] bg-[#f7f7f9] px-3"
            >
              <span className="text-sm font-medium leading-5 text-[#151519]">
                {formatKoreanTime(slot.startTime)} - {formatKoreanTime(slot.endTime)}
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => timeSlot.startEditSlot(slot)}
                  className="cursor-pointer px-1 text-xs font-medium leading-[18px] text-[#737889]"
                >
                  수정
                </button>
                <button
                  type="button"
                  onClick={() => timeSlot.removeSlot(slot.id)}
                  aria-label="시간대 삭제"
                  className="grid size-5 cursor-pointer place-items-center rounded-full text-[#9da2af] hover:bg-[#eef0f6]"
                >
                  <X size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-2 text-sm font-medium leading-[18px] text-[#b1b6c3]">
          시간대를 추가해주세요
        </p>
      )}
    </div>
  );
}
