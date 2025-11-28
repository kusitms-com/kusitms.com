import Image from "next/image";

export default function RecruitmentTargetInfoItem() {
  const recruitItems = [
    {
      icon: { src: "/recruit/icons/Book.svg", alt: "책" },
      mobileSize: { width: 30, height: 28 },
      text: ["활동 내 대학생 신분을 유지하는 분", "(졸업 유예자, 휴학생, 수료생 포함)"],
    },
    {
      icon: {
        src: "/recruit/icons/Calendar.svg",
        alt: "캘린더",
      },
      mobileSize: { width: 26, height: 30 },
      text: ["매주 토요일 서울 지역에서", "진행하는 세션에 빠짐없이 참석 가능한 분"],
    },
    {
      icon: {
        src: "/recruit/icons/Ranking.svg",
        alt: "스티커",
      },
      mobileSize: { width: 29, height: 30 },
      text: ["활동 기간 동안 운영진 활동 및 학회 활동에", "적극적으로 참여 가능한 분"],
    },
  ];

  return (
    <section className="flex desktop:flex-row flex-col desktop:px-[40px] px-[10px] gap-[16px] desktop:gap-[22px]">
      {recruitItems.map((item, index) => (
        <section
          key={index}
          className="bg-dark-blue-50 w-[300px] rounded-2xl flex gap-[20px] flex-col items-center pt-[28px] pb-[32px]"
        >
          <div className="flex justify-center items-center bg-gray-0 rounded-full w-[80px] h-[80px]">
            <Image src={item.icon.src} alt={item.icon.alt} width={58} height={58} />
          </div>
          <p className="flex flex-col items-center text-body-8 desktop:text-body-6 text-gray-800 gap-[4px]">
            <span>{item.text[0]}</span>
            <span>{item.text[1]}</span>
          </p>
        </section>
      ))}
    </section>
  );
}
