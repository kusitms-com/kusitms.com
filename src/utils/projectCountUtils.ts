import { CorporateProjectItem, MeetupItem } from "@/service/projects";

export interface ProjectCount {
  [key: string]: number; // 기수별 프로젝트 개수 (예: "30": 5)
  total: number; // 전체 프로젝트 개수
}

export const calculateProjectCounts = (
  projectList: MeetupItem[] | CorporateProjectItem[],
  generations: number[] = Array.from({ length: 7 }, (_, i) => 31 - i)
): ProjectCount => {
  // 프로젝트 리스트가 없거나 형식이 맞지 않으면 빈 객체 반환
  if (!projectList) {
    return { total: 0 };
  }

  const projects = projectList;
  const counts: ProjectCount = { total: projects.length };

  // 각 기수별 카운트 초기화
  generations.forEach((gen) => {
    counts[gen.toString()] = 0;
  });

  // 각 프로젝트를 순회하며 해당 기수의 카운트 증가
  projects.forEach((project: any) => {
    const projectCardinal = project.cardinal?.toString();
    if (projectCardinal && counts[projectCardinal] !== undefined) {
      counts[projectCardinal]++;
    }
  });

  return counts;
};

export const formatProjectCount = (
  counts: ProjectCount,
  cardinalKey: string
): string => {
  if (!counts) return "";

  // 전체 개수인 경우
  if (cardinalKey === "" && counts.total) {
    return `${counts.total}개`;
  }

  // 특정 기수 개수인 경우
  const count = counts[cardinalKey];
  return count !== undefined ? `${count}개` : "";
};
