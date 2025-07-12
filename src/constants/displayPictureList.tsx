interface ImageData {
  src: string;
  width: number;
  height: number;
  mobileWidth: number;
  mobileHeight: number;
}

interface SectionData {
  title: string;
  images: ImageData[];
}

export const DISPLAY_SECTIONS: SectionData[] = [
  {
    title: "OT",
    images: [
      {
        src: "/display/ot_1.png",
        width: 640,
        height: 360,
        mobileWidth: 288,
        mobileHeight: 190,
      },
      {
        src: "/display/ot_2.png",
        width: 640,
        height: 360,
        mobileWidth: 320,
        mobileHeight: 180,
      },
    ],
  },
  {
    title: "기업 프로젝트",
    images: [
      {
        src: "/display/corporate_1.jpeg",
        width: 381,
        height: 280,
        mobileWidth: 288,
        mobileHeight: 288,
      },
      {
        src: "/display/corporate_2.jpeg",
        width: 381,
        height: 280,
        mobileWidth: 288,
        mobileHeight: 288,
      },
      {
        src: "/display/corporate_3.jpeg",
        width: 381,
        height: 280,
        mobileWidth: 288,
        mobileHeight: 288,
      },
    ],
  },
  {
    title: "전문가 초청 강연",
    images: [
      {
        src: "/display/invitation_1.png",
        width: 640,
        height: 360,
        mobileWidth: 320,
        mobileHeight: 180,
      },
      {
        src: "/display/invitation_2.png",
        width: 640,
        height: 360,
        mobileWidth: 320,
        mobileHeight: 180,
      },
    ],
  },
  {
    title: "MT",
    images: [
      {
        src: "/display/mt_1.png",
        width: 381,
        height: 381,
        mobileWidth: 288,
        mobileHeight: 288,
      },
      {
        src: "/display/mt_2.png",
        width: 381,
        height: 381,
        mobileWidth: 288,
        mobileHeight: 288,
      },
      {
        src: "/display/mt_3.png",
        width: 381,
        height: 381,
        mobileWidth: 288,
        mobileHeight: 288,
      },
    ],
  },
  {
    title: "OB 초청 데이",
    images: [
      {
        src: "/display/ob_1.png",
        width: 640,
        height: 360,
        mobileWidth: 320,
        mobileHeight: 180,
      },
      {
        src: "/display/ob_2.png",
        width: 640,
        height: 360,
        mobileWidth: 320,
        mobileHeight: 180,
      },
    ],
  },
  {
    title: "밋업 프로젝트",
    images: [
      {
        src: "/display/meetup_1.png",
        width: 381,
        height: 381,
        mobileWidth: 288,
        mobileHeight: 288,
      },
      {
        src: "/display/meetup_2.png",
        width: 381,
        height: 381,
        mobileWidth: 288,
        mobileHeight: 288,
      },
      {
        src: "/display/meetup_3.png",
        width: 381,
        height: 381,
        mobileWidth: 288,
        mobileHeight: 288,
      },
    ],
  },
];
