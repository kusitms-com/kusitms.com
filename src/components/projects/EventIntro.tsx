import Image from "next/image";

interface EventIntroProps {
  type: "enterprise" | "meetup";
}

export const EventIntro = ({ type }: EventIntroProps) => {
  const content = {
    meetup: {
      title: "밋업(Meet-up)데이란?",
      icon: "/projects/icons/MeetupHighlightIcon.svg",
      detail:
        "큐시즘의 파이널 프로젝트인 밋업데이는, 아이디어톤 행사인 큐넥팅을 통해 발제된 아이디어를 9명의 기획자 개발자 디자이너로 구성된 8개의 팀이 3개월 동안 준비해서 발표하는 큐시즘의 메인 프로그램이에요.",
      bottomIcon: "/projects/icons/MeetupIcons.svg",
    },
    enterprise: {
      title: "기업프로젝트란?",
      icon: "/projects/icons/CompanyHighlightIcon.svg",
      detail:
        "큐시즘과 기업이 협업하여 실제 기업이 고민하고 있는 경영/마케팅 문제나 개발과 관련된 아이디어를 제시 받아, 조 단위로 과제를 수행하는 프로젝트에요. 해당 프로젝트를 통해 기업은 새로운 인사이트를 얻으며, 학회원들은 실제 기업과의 귀중한 협업 경험을 얻을 수 있어요.",
      bottomIcon: "/projects/icons/CompanyIcons.svg",
    },
  };

  const { title, icon, detail, bottomIcon } = content[type];

  return (
    <div>
      <div className="flex flex-col">
        <div className="text-white text-[48px] font-bold mb-[10px]">
          {title}
        </div>
        <Image
          src={icon}
          alt="하이라이트"
          width={180}
          height={16}
          priority
          style={{ width: 180, height: 16 }}
        />
      </div>
      <div className="text-[#90909A] text-[20px] mt-[60px] leading-[150%] mb-[40px]">
        {detail}
      </div>
      <Image
        src={bottomIcon}
        alt="아이콘"
        width={590}
        height={96}
        priority
        style={{ width: 590, height: 96 }}
      />
    </div>
  );
};
