export const getCalculateMonthDiff = (start: string, end: string) => {
  const [startYear, startMonth, startDay] = start.split("-").map(Number);
  const [endYear, endMonth, endDay] = end.split("-").map(Number);

  const startDate = new Date(startYear, startMonth - 1, startDay);
  const endDate = new Date(endYear, endMonth - 1, endDay);

  let months =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth());

  // 종료일의 일이 시작일보다 작으면, 아직 해당 달은 안 지났으므로 -1
  if (endDay < startDay) {
    months -= 1;
  }

  return `${months}개월`;
};
