import Image from "next/image";

type Step = {
  title: string;
  date: string;
  bgColor: "white" | "#0055FF";
  textColor: string;
};

const steps: Step[] = [
  {
    title: "서류 지원 기간",
    date: "7월 17일(목) ~ 7월 26일(토)\n자정 마감",
    bgColor: "white",
    textColor: "#0055FF",
  },
  {
    title: "서류 합격 발표",
    date: "7월 29일(화)\n합격자/불합격자 전체 연락",
    bgColor: "#0055FF",
    textColor: "white",
  },
  {
    title: "면접 기간",
    date: "8월 2일(토) ~ 8월 3일(일)\n서류 합격자 개별 안내",
    bgColor: "white",
    textColor: "#0055FF",
  },
  {
    title: "최종 합격 발표",
    date: "8월 0일()\n합격자/불합격자 전체 연락",
    bgColor: "#0055FF",
    textColor: "white",
  },
  {
    title: "32기 활동",
    date: "8월 9일(토) ~ 12월 6일(토)",
    bgColor: "#0055FF",
    textColor: "white",
  },
];

const RecruitStep = ({ step }: { step: Step }) => (
  <div className="flex flex-col items-center">
    <div className="relative rounded-full p-5">
      <div
        className="relative z-10 flex justify-center items-center w-[120px] h-[120px] rounded-full"
        style={{ backgroundColor: step.bgColor }}
      >
        <p
          className="font-[SUIT] font-medium text-[16px] leading-[100%] text-center whitespace-pre-wrap"
          style={{ color: step.textColor }}
        >
          {step.title}
        </p>
      </div>
    </div>
    <div className="h-[6px] bg-[#0055FF] w-[28px] mt-[30px] mb-[24px]" />
    <p className="font-medium text-[14px] leading-[150%] tracking-[-0.5px] text-center whitespace-pre-wrap">
      {step.date}
    </p>
  </div>
);

const ArrowIcon = ({ rotate = 0, flip = false }: { rotate?: number; flip?: boolean }) => {
  const transform = `rotate(${rotate}deg) ${flip ? "scaleY(-1)" : ""}`;
  return (
    <Image
      src="/recruit/icons/BlueArrow.svg"
      alt="파란색 화살표"
      width={32}
      height={32}
      style={{ transform }}
    />
  );
};

export default function MobileRecruitmentProcessItem() {
  return (
    <section className="relative block desktop:hidden flex flex-col items-center justify-center gap-y-[40px]">
      {/* 1st row */}
      <div className="flex relative gap-x-[45px]">
        <RecruitStep step={steps[0]} />
        <div className="absolute left-[45%] top-[25%] flex items-center">
          <ArrowIcon />
        </div>
        <RecruitStep step={steps[1]} />
      </div>

      {/* 2nd arrow (세로 방향) */}
      <div className="flex items-center w-full justify-end px-[60px]">
        <ArrowIcon rotate={90} />
      </div>

      {/* 2nd row */}
      <div className="flex relative gap-x-[45px]">
        <RecruitStep step={steps[3]} />
        <div className="absolute left-[45%] top-[25%] flex items-center">
          <ArrowIcon rotate={180} />
        </div>
        <RecruitStep step={steps[2]} />
      </div>

      {/* 대각선 화살표 2개 */}
      <div className="flex gap-x-[136px]">
        <div className="flex items-center">
          <ArrowIcon rotate={60} />
        </div>
        <div className="flex items-center">
          <ArrowIcon rotate={120} flip />
        </div>
      </div>

      {/* 마지막 원 + 배경 */}
      <div className="flex flex-col relative items-center justify-center">
        <div className="absolute w-[154px] h-[154px] rounded-full bg-[#0055FF] top-1 opacity-20 z-0" />
        <RecruitStep step={steps[4]} />
      </div>
    </section>
  );
}
