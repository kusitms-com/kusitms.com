/** WAI-ARIA 탭 패턴의 키보드 이동: 방향키(가로/세로), Home, End. 해당 키가 아니면 null */
export function nextTabIndex(
  key: string,
  index: number,
  count: number,
  orientation: "horizontal" | "vertical",
): number | null {
  const prev = orientation === "vertical" ? "ArrowUp" : "ArrowLeft";
  const next = orientation === "vertical" ? "ArrowDown" : "ArrowRight";
  if (key === prev) return (index - 1 + count) % count;
  if (key === next) return (index + 1) % count;
  if (key === "Home") return 0;
  if (key === "End") return count - 1;
  return null;
}
