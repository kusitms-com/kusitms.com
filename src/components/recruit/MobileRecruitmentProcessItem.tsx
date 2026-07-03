import Image from "next/image";

type Step = {
  group: "신규 운영진" | "신규 학회원";
  title: string;
  date: string;
  bgColor: "white" | "#0055FF";
  textColor: string;
};

const steps: Step[] = [
  {
    group: "신규 운영진",
    title: "서류 지원 기간",
    date: "7월 16일(목) ~ 7월 20일(월)",
    bgColor: "white",
    textColor: "#0055FF",
  },
  {
    group: "신규 운영진",
    title: "서류 합격 발표",
    date: "7월 22일(수)\n합격자/불합격자 전체 연락",
    bgColor: "#0055FF",
    textColor: "white",
  },
  {
    group: "신규 운영진",
    title: "신규 운영진 면접",
    date: "7월 25일(토) ~ 7월 26일(일)\n서류 합격자 개별 안내",
    bgColor: "white",
    textColor: "#0055FF",
  },
  {
    group: "신규 운영진",
    title: "최종 결과 발표",
    date: "7월 28일(화)\n합격자/불합격자 전체 연락",
    bgColor: "#0055FF",
    textColor: "white",
  },
  {
    group: "신규 학회원",
    title: "서류 지원 기간",
    date: "7월 25일(토) ~ 8월 1일(토) 23:59",
    bgColor: "white",
    textColor: "#0055FF",
  },
  {
    group: "신규 학회원",
    title: "서류 합격 발표",
    date: "8월 4일(화)\n합격자/불합격자 전체 연락",
    bgColor: "#0055FF",
    textColor: "white",
  },
  {
    group: "신규 학회원",
    title: "면접 기간",
    date: "8월 8일(토) ~ 8월 9일(일)\n서류 합격자 개별 안내",
    bgColor: "white",
    textColor: "#0055FF",
  },
  {
    group: "신규 학회원",
    title: "최종 합격 발표",
    date: "8월 11일(화)",
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
      {(["신규 운영진", "신규 학회원"] as const).map((group) => {
        const groupSteps = steps.filter((step) => step.group === group);

        return (
          <div key={group} className="flex w-full flex-col items-center gap-y-[32px]">
            <h3 className="text-title-7 text-gray-900">{group}</h3>
            <div className="flex relative gap-x-[45px]">
              <RecruitStep step={groupSteps[0]} />
              <div className="absolute left-[45%] top-[25%] flex items-center">
                <ArrowIcon />
              </div>
              <RecruitStep step={groupSteps[1]} />
            </div>

            <div className="flex items-center w-full justify-end px-[60px]">
              <ArrowIcon rotate={90} />
            </div>

            <div className="flex relative gap-x-[45px]">
              <RecruitStep step={groupSteps[3]} />
              <div className="absolute left-[45%] top-[25%] flex items-center">
                <ArrowIcon rotate={180} />
              </div>
              <RecruitStep step={groupSteps[2]} />
            </div>
          </div>
        );
      })}
    </section>
  );
}
