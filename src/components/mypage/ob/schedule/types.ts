export type TimeSlot = {
  id: string;
  dateKey: string;
  startTime: string;
  endTime: string;
};

export type CalendarDay = {
  date: Date;
  dateKey: string;
  day: number;
  isCurrentMonth: boolean;
  isSelected: boolean;
  isToday: boolean;
  isSunday: boolean;
  hasSlots: boolean;
};

export type ObScheduleState = {
  currentMonth: Date;
  selectedDate: Date;
  slots: TimeSlot[];
  draftStartTime: string;
  draftEndTime: string;
  editingSlotId: string | null;
  isGroupMentoring: boolean;
  capacity: number;
  toastVisible: boolean;
};

export type ScheduleCalendarModel = {
  currentMonth: Date;
  calendarDays: CalendarDay[];
  selectDate: (date: Date) => void;
  goToPrevMonth: () => void;
  goToNextMonth: () => void;
};

export type ScheduleDateNavModel = {
  selectedDateLabel: string;
  selectPrevDate: () => void;
  selectNextDate: () => void;
};

export type ScheduleTimeSlotModel = {
  selectedDateSlots: TimeSlot[];
  draftStartTime: string;
  draftEndTime: string;
  editingSlotId: string | null;
  canSubmitSlot: boolean;
  updateDraftStartTime: (value: string) => void;
  updateDraftEndTime: (value: string) => void;
  addOrUpdateSlot: () => void;
  startEditSlot: (slot: TimeSlot) => void;
  removeSlot: (slotId: string) => void;
};

export type ScheduleGroupMentoringModel = {
  isGroupMentoring: boolean;
  capacity: number;
  toggleGroupMentoring: () => void;
  decrementCapacity: () => void;
  incrementCapacity: () => void;
};

export type ScheduleRegisterModel = {
  canRegister: boolean;
  toastVisible: boolean;
  registerSchedule: () => void;
};

export type UseObScheduleReturn = {
  calendar: ScheduleCalendarModel;
  dateNav: ScheduleDateNavModel;
  timeSlot: ScheduleTimeSlotModel;
  groupMentoring: ScheduleGroupMentoringModel;
  register: ScheduleRegisterModel;
};
