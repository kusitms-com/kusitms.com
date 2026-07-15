export const formatKoreanTime = (time: string) => {
  const [hourText, minuteText] = time.split(":");
  const hour = Number(hourText);
  const period = hour < 12 ? "오전" : "오후";
  const displayHour = hour % 12 || 12;

  return `${period} ${String(displayHour).padStart(2, "0")}:${minuteText}`;
};

export const formatDropdownTime = (time: string) => formatKoreanTime(time).replace(" 0", " ");
