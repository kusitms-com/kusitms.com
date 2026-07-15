export const initialScheduleDate = new Date(2026, 5, 4);
export const scheduleTodayDate = new Date(2026, 5, 1);

export const weekdayLabels = ["일", "월", "화", "수", "목", "금", "토"];

export const timeOptions = Array.from({ length: 24 * 6 }, (_, index) => {
  const hour = Math.floor(index / 6);
  const minute = (index % 6) * 10;

  return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
});
