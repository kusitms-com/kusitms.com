export type TeamItem = {
  mainIcon: string;
  mainIconWidth: number;
  mainIconHeight: number;
  mainIconWidthMobile: number;
  mainIconHeightMobile: number;
  bgIcon: string;
  bgIconWidth: number;
  bgIconHeight: number;
  bgIconWidthMobile: number;
  bgIconHeightMobile: number;
  title: string;
  subtitle: string;
  delay?: number;
  description?: string;
  descriptionMobile?: string;
};

export const TEAM_DATA: TeamItem[] = [
  {
    mainIcon: "/main/ManageIcon.svg",
    mainIconWidth: 219,
    mainIconHeight: 225,
    mainIconWidthMobile: 146,
    mainIconHeightMobile: 150,
    bgIcon: "/main/ManageBg.svg",
    bgIconWidth: 146,
    bgIconHeight: 152,
    bgIconWidthMobile: 105,
    bgIconHeightMobile: 108,
    title: "01 Planner",
    subtitle: "기획자",
    delay: 0,
    description:
      "가설을 세우고\n검증하며 논리적인\n문서화와 명확한\n커뮤니케이션으로\n방향성을 제시해요.",
    descriptionMobile:
      "가설을 세우고 검증하며\n 논리적인 문서화와 명확한\n 커뮤니케이션으로\n 방향성을 제시해요.",
  },
  {
    mainIcon: "/main/DesignIcon.svg",
    mainIconWidth: 224,
    mainIconHeight: 246,
    mainIconWidthMobile: 149,
    mainIconHeightMobile: 164,
    bgIcon: "/main/DesignBg.svg",
    bgIconWidth: 151,
    bgIconHeight: 163,
    bgIconWidthMobile: 108,
    bgIconHeightMobile: 116,
    title: "02 Designer",
    subtitle: "디자이너",
    delay: 0.2,
    description:
      "기획 의도를 파악해\n디자인에 녹여내고\nUX이론을 바탕으로\n논리적인 디자인을\n설계해요.",
    descriptionMobile:
      "기획 의도를 파악해\n 디자인에 녹여내고 UX\n 이론을 바탕으로 논리적인\n 디자인을 설계해요.",
  },
  {
    mainIcon: "/main/FrontendIcon.svg",
    mainIconWidth: 222,
    mainIconHeight: 220,
    mainIconWidthMobile: 148,
    mainIconHeightMobile: 147,
    bgIcon: "/main/FrontendBg.svg",
    bgIconWidth: 147,
    bgIconHeight: 151,
    bgIconWidthMobile: 105,
    bgIconHeightMobile: 108,
    title: "03 Frontend",
    subtitle: "프론트엔드",
    delay: 0.4,
    description:
      "디자이너와\n 협업해 디자인\n 시스템을 구축하고\n 백엔드 개발자와\n 기능을 조율해요",
    descriptionMobile:
      "디자이너와 협업해\n 디자인 시스템을 구축하고\n 백엔드 개발자와 기능을\n 조율해요",
  },
  {
    mainIcon: "/main/BackendIcon.svg",
    mainIconWidth: 172,
    mainIconHeight: 181,
    mainIconWidthMobile: 115,
    mainIconHeightMobile: 121,
    bgIcon: "/main/BackendBg.svg",
    bgIconWidth: 130,
    bgIconHeight: 143,
    bgIconWidthMobile: 93,
    bgIconHeightMobile: 101,
    title: "04 Backend",
    subtitle: "백엔드",
    delay: 0.6,
    description:
      "프로젝트의 요구\n 사항과 규모, 팀의 \n 상황에 따라 기술\n 스택을 선정하고\n 오류원인을 분석해요",
    descriptionMobile:
      "프로젝트의 요구 사항과 규\n모, 팀의 상황에 따라 기술\n 스택을 선정하고 오류원인\n을 분석해요",
  },
];
