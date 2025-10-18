export function getAdjacentIds(
  idList: (number | string)[],
  currentId: string,
): { prevId?: string; nextId?: string } {
  const index = idList.findIndex((id) => id.toString() === currentId);

  return {
    prevId: index > 0 ? idList[index - 1].toString() : undefined,
    nextId: index < idList.length - 1 ? idList[index + 1].toString() : undefined,
  };
}
