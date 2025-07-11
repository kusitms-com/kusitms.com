interface ImageData {
  src: string;
  width: number;
  height: number;
  mobileWidth: number;
  mobileHeight: number;
  className: string;
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
        mobileWidth: 320,
        mobileHeight: 180,
        className: "w-[640px] h-[360px]",
      },
      {
        src: "/display/ot_2.png",
        width: 640,
        height: 360,
        mobileWidth: 320,
        mobileHeight: 180,
        className: "w-[640px] h-[360px]",
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
        mobileWidth: 190,
        mobileHeight: 140,
        className: "w-[381px] h-[280px]",
      },
      {
        src: "/display/corporate_2.jpeg",
        width: 381,
        height: 280,
        mobileWidth: 190,
        mobileHeight: 140,
        className: "w-[381px] h-[280px]",
      },
      {
        src: "/display/corporate_3.jpeg",
        width: 381,
        height: 280,
        mobileWidth: 190,
        mobileHeight: 140,
        className: "w-[381px] h-[280px]",
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
        className: "w-[640px] h-[360px]",
      },
      {
        src: "/display/invitation_2.png",
        width: 640,
        height: 360,
        mobileWidth: 320,
        mobileHeight: 180,
        className: "w-[640px] h-[360px]",
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
        mobileWidth: 190,
        mobileHeight: 190,
        className: "w-[381px] h-[381px]",
      },
      {
        src: "/display/mt_2.png",
        width: 381,
        height: 381,
        mobileWidth: 190,
        mobileHeight: 190,
        className: "w-[381px] h-[381px]",
      },
      {
        src: "/display/mt_3.png",
        width: 381,
        height: 381,
        mobileWidth: 190,
        mobileHeight: 190,
        className: "w-[381px] h-[381px]",
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
        className: "w-[640px] h-[360px]",
      },
      {
        src: "/display/ob_2.png",
        width: 640,
        height: 360,
        mobileWidth: 320,
        mobileHeight: 180,
        className: "w-[640px] h-[360px]",
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
        mobileWidth: 190,
        mobileHeight: 190,
        className: "w-[381px] h-[381px]",
      },
      {
        src: "/display/meetup_2.png",
        width: 381,
        height: 381,
        mobileWidth: 190,
        mobileHeight: 190,
        className: "w-[381px] h-[381px]",
      },
      {
        src: "/display/meetup_3.png",
        width: 381,
        height: 381,
        mobileWidth: 190,
        mobileHeight: 190,
        className: "w-[381px] h-[381px]",
      },
    ],
  },
];
