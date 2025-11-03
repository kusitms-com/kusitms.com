export type TeamItem = {
  mainIcon: string;
  bgIcon: string;
  title: string;
  subtitle: string;
  delay?: number;
  description?: string;
};

export const TEAM_DATA: TeamItem[] = [
  {
    mainIcon: "/main/MangeIcon.svg",
    bgIcon: "/main/MangeBg.svg",
    title: "01 Planner",
    subtitle: "기획자",
    delay: 0,
    description:
      "가설을 세우고\n검증하며 논리적인\n문서화와 명확한\n커뮤니케이션으로\n방향성을 제시해요.",
  },
  {
    mainIcon: "/main/DesignIcon.svg",
    bgIcon: "/main/DesignBg.svg",
    title: "02 Designer",
    subtitle: "디자이너",
    delay: 0.2,
    description:
      "기획 의도를 파악해\n디자인에 녹여내고\nUX이론을 바탕으로\n논리적인 디자인을\n설계해요.",
  },
  {
    mainIcon: "/main/FrontendIcon.svg",
    bgIcon: "/main/FrontendBg.svg",
    title: "03 Frontend",
    subtitle: "프론트엔드",
    delay: 0.4,
    description:
      "디자이너와\n 협업해 디자인\n 시스템을 구축하고\n 백엔드 개발자와\n 기능을 조율해요",
  },
  {
    mainIcon: "/main/BackendIcon.svg",
    bgIcon: "/main/BackendBg.svg",
    title: "04 Backend",
    subtitle: "백엔드",
    delay: 0.6,
    description:
      "프로젝트의 요구\n 사항과 규모, 팀의 \n 상황에 따라 기술\n 스택을 선정하고\n 오류원인을 분석해요",
  },
];

