type TimelineContent = {
  title: string;
  description: string;
  isLeft: boolean;
  src: string;
  alt: string;
};

export const TIMELINE_DATA: TimelineContent[] = [
  {
    title: "오리엔테이션",
    description:
      "학부학 및 운영진 소개, 출결 및 상벌점 안내 등 큐시즘에 대한 안내를 받은 후 큐시즘의 기업 연계프로젝트를 함께할 기업 LG전자, 리트머스를 소개받았어요.",
    isLeft: true,
    src: "/display/ot.webp",
    alt: "오리엔테이션",
  },
  {
    title: "기업 연계프로젝트",
    description:
      "큐시즘의 첫 번째 프로젝트로 33기는 LG전자, 리트머스와 5주동안 각 기업에서 제시해준 주제를 바탕으로 프로젝트를 진행했어요.",
    isLeft: false,
    src: "/display/corporate-33.webp",
    alt: "기업 연계 프로젝트",
  },
  {
    title: "전문가 초청 강연",
    description:
      "현업에 계신 기획, 디자인, 프론트엔드, 백엔드 직무의 연사님들께서 강연을 진행해주셨어요. 전문가의 시선에서 인사이트를 얻을 수 있는 시간이었어요.",
    isLeft: true,
    src: "/display/expert-lecture-33.webp",
    alt: "전문가 초청 강연",
  },
  {
    title: "MT",
    description: "7주간 쉼없이 달려온 큐밀리들을 위한 재충전의 시간을 가졌어요.",
    isLeft: false,
    src: "/display/mt-33.webp",
    alt: "MT",
  },
  {
    title: "OB 초청데이",
    description:
      "큐시즘의 OB분들을 초청하여 인터뷰와 커피챗 시간을 가졌어요. 큐시즘 프로젝트와 실무 관련 인사이트를 얻을 수 있는 귀중한 시간이었어요.",
    isLeft: true,
    src: "/display/ob-day-33.webp",
    alt: "OB 초청데이",
  },
  {
    title: "밋업 프로젝트",
    description:
      "큐시즘의 두 번째 프로젝트로 학회원들의 아이디어를 바탕으로 팀원을 구성하여 프로젝트를 진행해요.",
    isLeft: false,
    src: "/display/meetup-project-33.webp",
    alt: "밋업 프로젝트",
  },
  {
    title: "전시회",
    description: "학회원의 아이디어에서 시작된 밋업 프로젝트를 사람들에게 처음 선보이는 자리에요.",
    isLeft: true,
    src: "/display/exhibition-33.webp",
    alt: "전시회",
  },
  {
    title: "밋업데이",
    description:
      "밋업데이에서 멘토님들의 심도깊은 평가와 함께 발표하며 밋업 프로젝트를 마무리해요.",
    isLeft: false,
    src: "/display/meetup-day-33.webp",
    alt: "밋업데이",
  },
];
