import {
  addDays,
  format,
  getDate,
  getDay,
  isSameDay,
  isSameMonth,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import { scheduleTodayDate } from "@/components/mypage/ob/schedule/constants";
import type { CalendarDay, TimeSlot } from "@/components/mypage/ob/schedule/types";

export const dateKeyOf = (date: Date) => format(date, "yyyy-MM-dd");

export const createSlotId = () =>
  typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(16).slice(2)}`;

export const clearSlotDraft = () => ({
  draftStartTime: "",
  draftEndTime: "",
  editingSlotId: null,
});

export const buildCalendarDays = ({
  currentMonth,
  selectedDate,
  slots,
}: {
  currentMonth: Date;
  selectedDate: Date;
  slots: TimeSlot[];
}): CalendarDay[] => {
  const monthStart = startOfMonth(currentMonth);
  const gridStart = startOfWeek(monthStart, { weekStartsOn: 0 });
  const slotDateKeys = new Set(slots.map((slot) => slot.dateKey));

  return Array.from({ length: 35 }, (_, index) => {
    const date = addDays(gridStart, index);
    const dateKey = dateKeyOf(date);

    return {
      date,
      dateKey,
      day: getDate(date),
      isCurrentMonth: isSameMonth(date, currentMonth),
      isSelected: isSameDay(date, selectedDate),
      isToday: isSameDay(date, scheduleTodayDate),
      isSunday: getDay(date) === 0,
      hasSlots: slotDateKeys.has(dateKey),
    };
  });
};
