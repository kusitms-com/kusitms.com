import { format } from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { weekdayLabels } from "@/components/mypage/ob/schedule/constants";
import type { ScheduleCalendarModel } from "@/components/mypage/ob/schedule/types";

type ScheduleCalendarProps = {
  calendar: ScheduleCalendarModel;
};

export function ScheduleCalendar({ calendar }: ScheduleCalendarProps) {
  return (
    <section className="h-[580px] overflow-hidden rounded-b-[16px] bg-white">
      <div className="flex h-[61px] items-center justify-between px-5">
        <h2 className="text-xl font-bold leading-7 text-[#151519]">
          {format(calendar.currentMonth, "yyyy년 M월")}
        </h2>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={calendar.goToPrevMonth}
            aria-label="이전 달"
            className="grid size-9 cursor-pointer place-items-center rounded-[8px] text-[#b1b6c3] hover:bg-[#f7f8fb]"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={calendar.goToNextMonth}
            aria-label="다음 달"
            className="grid size-9 cursor-pointer place-items-center rounded-[8px] text-[#343946] hover:bg-[#f7f8fb]"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="grid h-[35px] grid-cols-7 items-center text-center text-xs font-semibold text-[#626879]">
        {weekdayLabels.map((label) => (
          <div key={label} className={label === "일" ? "text-[#e5484d]" : undefined}>
            {label}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7">
        {calendar.calendarDays.map((day) => (
          <button
            key={day.dateKey}
            type="button"
            onClick={() => calendar.selectDate(day.date)}
            className={`relative flex h-[96.8px] cursor-pointer flex-col border-t border-r border-[#f0f1f5] px-3 py-3 text-left text-sm transition nth-[7n]:border-r-0 ${
              day.isSelected
                ? "z-10 rounded-[4px] border !border-[#3E5EFA] bg-[#EFF4FF]"
                : day.isCurrentMonth
                  ? "bg-white hover:bg-[#fafbff]"
                  : "bg-[#f7f7f9]"
            }`}
          >
            <span
              className={`flex items-center gap-1 font-medium leading-5 ${
                day.isToday && !day.isSelected
                  ? "text-[#3157ff]"
                  : day.isSelected
                    ? "text-[#343946]"
                    : day.isCurrentMonth
                      ? day.isSunday
                        ? "text-[#e5484d]"
                        : "text-[#343946]"
                      : "text-[#c1c6d3]"
              }`}
            >
              <span>{day.day}</span>
              {day.isToday && <span className="text-xs font-medium leading-5">오늘</span>}
            </span>
            {day.hasSlots && (
              <span className="absolute left-1/2 top-[78px] size-1.5 -translate-x-1/2 rounded-full bg-[#3157ff]" />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
