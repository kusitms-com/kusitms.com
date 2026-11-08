// 모집 상태 판정. 날짜는 모두 한국 시간(KST) 기준이고, 마감일은 그날 23:59까지 포함한다.
// 일정은 기획 QA 체크리스트(35기 예시 일정) 기준이며, 확정되면 이 값만 바꾼다.
export const RECRUIT_SCHEDULE = {
  cardinal: 35,
  announceDate: "2027-01-02",
  staff: { start: "2027-01-07", end: "2027-01-11" },
  member: { start: "2027-01-16", end: "2027-01-23" },
} as const;

export type RecruitTrack = "staff" | "member";
export type RecruitStatus =
  | { phase: "closed" }
  | { phase: "upcoming" }
  | { phase: "open"; track: RecruitTrack };

const KST_DATE = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Asia/Seoul",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

/** 주어진 시각의 한국 날짜 "YYYY-MM-DD" */
export function toKstDate(now: Date): string {
  return KST_DATE.format(now);
}

/** "YYYY-MM-DD" 형식 날짜의 모집 상태. 문자열 비교로 날짜 순서를 판단한다 */
export function getRecruitStatus(kstDate: string): RecruitStatus {
  const { announceDate, staff, member } = RECRUIT_SCHEDULE;
  if (kstDate < announceDate || kstDate > member.end) return { phase: "closed" };
  if (kstDate >= staff.start && kstDate <= staff.end) return { phase: "open", track: "staff" };
  if (kstDate >= member.start && kstDate <= member.end) return { phase: "open", track: "member" };
  return { phase: "upcoming" };
}

// 스테이징(Vercel Preview)·로컬에서만 ?qa_date=2027-01-07T00:00 처럼 현재 시각을 바꿀 수 있다.
// 실서비스(VERCEL_ENV=production)에서는 무시한다.
const QA_DATE_PATTERN = /^(\d{4}-\d{2}-\d{2})(T\d{2}:\d{2}(:\d{2})?)?$/;

/** 서버 시각(또는 허용된 환경의 qa_date)으로 오늘의 한국 날짜를 정한다 */
export function resolveKstDate(qaDate: string | string[] | undefined, now = new Date()): string {
  const allowQaDate = process.env.VERCEL_ENV !== "production";
  const match = allowQaDate && typeof qaDate === "string" ? QA_DATE_PATTERN.exec(qaDate) : null;
  return match ? match[1] : toKstDate(now);
}
