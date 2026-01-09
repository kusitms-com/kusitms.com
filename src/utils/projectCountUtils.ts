import type { CorporateProjectItem, MeetupItem } from "@/service/projects";

export interface ProjectCount {
  [key: string]: number; // 기수별 프로젝트 개수 (예: "30": 5)
  total: number; // 전체 프로젝트 개수
}

export const calculateProjectCounts = (
  projectList: MeetupItem[] | CorporateProjectItem[],
): ProjectCount => {
  if (!projectList) return {total:0};

  const counts: ProjectCount ={total: projectList.length};

  projectList.forEach((project) => {
    const cardinal = project.cardinal?.toString();
    if(!cardinal) return

    counts[cardinal] = (counts[cardinal] ?? 0) + 1;
  });

  return counts;
};

export const formatProjectCount = (counts: ProjectCount, cardinalKey: string): string => {
  if (!counts) return "";

  // 전체 개수인 경우
  if (cardinalKey === "" && counts.total) {
    return `${counts.total}개`;
  }

  // 특정 기수 개수인 경우
  const count = counts[cardinalKey];
  return count !== undefined ? `${count}개` : "";
};
