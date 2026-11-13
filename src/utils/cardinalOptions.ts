/**
 * 데이터에 있는 기수만 중복 없이 최신 기수부터 돌려준다.
 * 필터 기수를 코드에 고정하면 새 기수(예: 34기)를 등록해도 고를 수 없어, 받아 온 데이터로 만든다.
 */
export const toCardinalOptions = (cardinals: (number | null | undefined)[]): number[] =>
  [
    ...new Set(cardinals.filter((cardinal): cardinal is number => typeof cardinal === "number")),
  ].sort((a, b) => b - a);
