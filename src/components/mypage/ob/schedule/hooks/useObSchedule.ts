import { addDays, addMonths, format, getDay, isSameMonth, subMonths } from "date-fns";
import { useMemo, useState } from "react";
import { initialScheduleDate, weekdayLabels } from "@/components/mypage/ob/schedule/constants";
import type {
  ObScheduleState,
  TimeSlot,
  UseObScheduleReturn,
} from "@/components/mypage/ob/schedule/types";
import {
  buildCalendarDays,
  clearSlotDraft,
  createSlotId,
  dateKeyOf,
} from "@/components/mypage/ob/schedule/utils";

export function useObSchedule(): UseObScheduleReturn {
  const [state, setState] = useState<ObScheduleState>({
    currentMonth: initialScheduleDate,
    selectedDate: initialScheduleDate,
    slots: [],
    draftStartTime: "",
    draftEndTime: "",
    editingSlotId: null,
    isGroupMentoring: false,
    capacity: 1,
    toastVisible: false,
  });

  const selectedDateKey = dateKeyOf(state.selectedDate);

  const calendarDays = useMemo(
    () =>
      buildCalendarDays({
        currentMonth: state.currentMonth,
        selectedDate: state.selectedDate,
        slots: state.slots,
      }),
    [state.currentMonth, state.selectedDate, state.slots],
  );

  const selectedDateSlots = useMemo(
    () => state.slots.filter((slot) => slot.dateKey === selectedDateKey),
    [selectedDateKey, state.slots],
  );

  const selectedDateLabel = `${format(state.selectedDate, "M월 d일")} (${
    weekdayLabels[getDay(state.selectedDate)]
  })`;
  const canSubmitSlot =
    Boolean(state.draftStartTime) &&
    Boolean(state.draftEndTime) &&
    state.draftStartTime < state.draftEndTime;
  const canRegister = selectedDateSlots.length > 0;

  const selectDate = (date: Date) => {
    setState((prev) => ({
      ...prev,
      selectedDate: date,
      currentMonth: isSameMonth(date, prev.currentMonth) ? prev.currentMonth : date,
      ...clearSlotDraft(),
    }));
  };

  const addOrUpdateSlot = () => {
    if (!canSubmitSlot) {
      return;
    }

    setState((prev) => {
      if (prev.editingSlotId) {
        return {
          ...prev,
          slots: prev.slots.map((slot) =>
            slot.id === prev.editingSlotId
              ? {
                  ...slot,
                  dateKey: dateKeyOf(prev.selectedDate),
                  startTime: prev.draftStartTime,
                  endTime: prev.draftEndTime,
                }
              : slot,
          ),
          ...clearSlotDraft(),
        };
      }

      return {
        ...prev,
        slots: [
          ...prev.slots,
          {
            id: createSlotId(),
            dateKey: dateKeyOf(prev.selectedDate),
            startTime: prev.draftStartTime,
            endTime: prev.draftEndTime,
          },
        ],
        ...clearSlotDraft(),
      };
    });
  };

  const registerSchedule = () => {
    if (!canRegister) {
      return;
    }

    setState((prev) => ({ ...prev, toastVisible: true }));
    window.setTimeout(() => {
      setState((prev) => ({ ...prev, toastVisible: false }));
    }, 1800);
  };

  const goToPrevMonth = () =>
    setState((prev) => ({ ...prev, currentMonth: subMonths(prev.currentMonth, 1) }));
  const goToNextMonth = () =>
    setState((prev) => ({ ...prev, currentMonth: addMonths(prev.currentMonth, 1) }));
  const updateDraftStartTime = (value: string) =>
    setState((prev) => ({ ...prev, draftStartTime: value }));
  const updateDraftEndTime = (value: string) =>
    setState((prev) => ({ ...prev, draftEndTime: value }));
  const startEditSlot = (slot: TimeSlot) =>
    setState((prev) => ({
      ...prev,
      draftStartTime: slot.startTime,
      draftEndTime: slot.endTime,
      editingSlotId: slot.id,
    }));
  const removeSlot = (slotId: string) =>
    setState((prev) => ({
      ...prev,
      slots: prev.slots.filter((slot) => slot.id !== slotId),
      ...(prev.editingSlotId === slotId ? clearSlotDraft() : {}),
    }));
  const toggleGroupMentoring = () =>
    setState((prev) => ({ ...prev, isGroupMentoring: !prev.isGroupMentoring }));
  const decrementCapacity = () =>
    setState((prev) => ({ ...prev, capacity: Math.max(1, prev.capacity - 1) }));
  const incrementCapacity = () =>
    setState((prev) => ({ ...prev, capacity: Math.min(5, prev.capacity + 1) }));

  const calendar = {
    currentMonth: state.currentMonth,
    calendarDays,
    selectDate,
    goToPrevMonth,
    goToNextMonth,
  };
  const dateNav = {
    selectedDateLabel,
    selectPrevDate: () => selectDate(addDays(state.selectedDate, -1)),
    selectNextDate: () => selectDate(addDays(state.selectedDate, 1)),
  };
  const timeSlot = {
    selectedDateSlots,
    draftStartTime: state.draftStartTime,
    draftEndTime: state.draftEndTime,
    editingSlotId: state.editingSlotId,
    canSubmitSlot,
    updateDraftStartTime,
    updateDraftEndTime,
    addOrUpdateSlot,
    startEditSlot,
    removeSlot,
  };
  const groupMentoring = {
    isGroupMentoring: state.isGroupMentoring,
    capacity: state.capacity,
    toggleGroupMentoring,
    decrementCapacity,
    incrementCapacity,
  };
  const register = {
    canRegister,
    toastVisible: state.toastVisible,
    registerSchedule,
  };

  return {
    calendar,
    dateNav,
    timeSlot,
    groupMentoring,
    register,
  };
}
