interface EventIntroProps {
  type: "corporate" | "meetup";
}

export default function EventIntro({ type }: EventIntroProps) {
  const content = {
    meetup: {
      title: "밋업(Meet-up)프로젝트란?",
      detail:
        "밋업 프로젝트는 기획, 디자인, 개발 파트가\n 팀을 이루어 2개월 동안 제작한\n IT 서비스의 프로토타입을 공개하고,\n 발표 및 시연하는 데모데이까지의 과정을 일컬어요.",
    },
    corporate: {
      title: "기업프로젝트란?",
      detail:
        "밋업 프로젝트는 기획, 디자인, 개발 파트가\n 팀을 이루어 2개월 동안 제작한\n IT 서비스의 프로토타입을 공개하고,\n 발표 및 시연하는 데모데이까지의 과정을 일컬어요.",
    },
  };

  const { title, detail } = content[type];

  return (
    <div>
      <h2 className="text-white desktop:text-[48px] font-bold mb-7 desktop:block hidden">
        {title}
      </h2>
      <p className="desktop:text-[#90909A] text-[15px] desktop:text-[20px] leading-[150%] text-white text-center desktop:text-left whitespace-pre-line desktop:whitespace-normal">
        {detail}
      </p>
    </div>
  );
}
