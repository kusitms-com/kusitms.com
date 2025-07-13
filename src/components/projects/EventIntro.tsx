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
        "큐시즘과 기업이 협업하여 실제 기업이\n 고민하고 있는 경영/마케팅 문제나 개발과 관련된\n 아이디어를 제시 받아, 조 단위로 과제를 수행하는\n 프로젝트에요. 31기 기준으로 2개의 기업에 대해\n 8팀이 구성되었어요.",
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
