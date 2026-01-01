import Image from "next/image";
import LinkButton from "../shared/LinkButton";

export default function RecruitmentProcessItem() {
  const recruitmentProcess = [
    {
      icon: { src: "/recruit/icons/Paper.svg", alt: "서류 지원" },
      title: "서류 지원 기간",
      notice: ["7월 17일(목) ~ 7월 26일(토)", "자정 마감"],
    },
    {
      icon: { src: "/recruit/icons/Call.svg", alt: "서류 합격" },
      title: "서류 합격 발표",
      notice: ["7월 29일(화)", "합격자/불합격자 전체 연락"],
    },
    {
      icon: { src: "/recruit/icons/People.svg", alt: "면접 기간" },
      title: "면접 기간",
      notice: ["8월 2일(토) ~ 8월 3일(일)", "서류 합격자 개별 안내"],
    },
    {
      icon: { src: "/recruit/icons/Medal.svg", alt: "최종 발표" },
      title: "최종 합격 발표",
      notice: ["8월 5일(화)", "합격자/불합격자 전체 연락"],
    },
  ];

  return (
    <section className="flex flex-col items-center gap-[60px]">
      <div className="flex gap-[20px] desktop:flex-row flex-col">
        {recruitmentProcess.map((process, index) => (
          <div
            key={index}
            className="flex flex-col gap-[20px] desktop:w-[220px] w-[300px] py-[20px] items-center bg-dark-blue-50 justify-center rounded-2xl"
          >
            <div className="flex justify-center items-center bg-gray-0 rounded-full w-[80px] h-[80px]">
              <Image src={process.icon.src} alt={process.icon.alt} width={50} height={50} />
            </div>
            <div className="flex flex-col items-center gap-[12px]">
              <h3 className="text-body-5 desktop:text-body-3 text-blue-600">{process.title}</h3>
              <div className="w-[10.5px] h-[2px] bg-gray-200 rounded-xs" />
              <span className="text-body-8 text-gray-700 flex flex-col items-center">
                <p>{process.notice[0]}</p>
                <p>{process.notice[1]}</p>
              </span>
            </div>
          </div>
        ))}
      </div>
      {/* TODO: 실제 지원 링크로 이동 */}
      <LinkButton title="지원하러 가기" />
    </section>
  );
}
