interface MeetupItem {
  meetup_id: number | string;
}

export function getAdjacentMeetupIds(
  meetupList: MeetupItem[],
  currentId: string,
): { prevId?: string; nextId?: string } {
  const currentIndex = meetupList.findIndex((item) => item.meetup_id.toString() === currentId);
  return {
    prevId: meetupList[currentIndex - 1]?.meetup_id.toString(),
    nextId: meetupList[currentIndex + 1]?.meetup_id.toString(),
  };
}
