"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";
export default function PartIntroSection() {
  const teamData = [
    {
      icon: "/main/ManageIcon.svg",
      title: "기획파트",
      description: `각 조에서 탄생한 아이디어를 바탕으로 실제 IT 서비스를 기획해요. 
      개발파트와 디자인파트의 협업을 통해 개발 가능성 있는 기능들을 사용자 관점에서 기획할 수 있어요.`,
      reverse: false,
      delay: 0,
    },
    {
      icon: "/main/DevelopIcon.svg",
      title: "개발파트",
      description: `기획파트에서 정의한 문제를 기술적으로 해결하는 과정에 참여해요. 
      아이디어에 가장 효과적인 플랫폼을 선택하고, 기획파트와 디자인파트와협력하며 서비스를 구체화해요.`,
      reverse: true,
      delay: 0.2,
    },
    {
      icon: "/main/DesignIcon.svg",
      title: "디자인파트",
      description: `아이디어를 제품화하기 위해 UI기획 설계, 구현까지 비주얼적인 부분을 담당해요. 
      사용하기 쉬운 UX를 고민하고, 확장성 있는 제품 개발을 위해 디자인 시스템을 구축하는 역할을 맡아요.`,
      reverse: false,
      delay: 0.4,
    },
  ];

  const executiveData = [
    {
      image: "/main/img/31st_President_and_Vice_President.png",
      title: "학부학",
      description: `학회의 총체적 운영권과 
            대내외적 대표권을 가지고 있으며, 
            학회 운영 및 업무 총괄, 
            파트너십을 위한 기업 미팅, 
            OB 연락망 구축 등을 진행해요.`,
      delay: 0,
      paddingTop: false,
    },
    {
      image: "/main/img/31st_General_Management_Team.png",
      title: "경영총괄팀",
      description: `OT/LT, 큐시즘 데이, 큐시즘의 밤,
      초청행사 등 학회 행사를 기획하고, 
      회원 관리, 장소 대관, 예산 관리 등 
      학회 경영 관련 업무를 총괄해요.`,
      delay: 0.2,
      paddingTop: true,
    },
    {
      image: "/main/img/31st_Education_Planning_Team.png",
      title: "교육기획팀",
      description: `기업 프로젝트, 밋업데이 등 
      학회의 전반적인 교육 커리큘럼을 
      주관 및 진행하고, 학회원을 대상으로 
      정기 교육 세션을 실시해요.`,
      delay: 0.4,
      paddingTop: false,
    },
    {
      image: "/main/img/31st_External_Public_Relations_Team.png",
      title: "대외홍보팀",
      description: `학회 행사와 관련된 콘텐츠를 제작하고, 
      전반적인 SNS 관리 및 마케팅, 
      외부 기관과의 컨택 및 협찬제안을 담당해요.`,
      delay: 0.6,
      paddingTop: true,
    },
  ];

  return (
    <div className="flex flex-col pt-[100px] desktop:pt-[240px] items-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col gap-y-[20px] desktop:gap-y-[48px] items-center justify-center"
      >
        <div>
          <p className="text-[23px] desktop:text-[48px] font-black">함께하는 큐밀리</p>
          <Image
            className="block desktop:hidden"
            src="/main/BlueUnderlineIcon.svg"
            alt="밑줄"
            width={88}
            height={7}
            style={{ width: 88, height: 7 }}
          />
          <Image
            className="hidden desktop:block"
            src="/main/BlueUnderlineIcon.svg"
            alt="밑줄"
            width={180}
            height={16}
            style={{ width: 180, height: 16 }}
          />
        </div>
        <div className="flex flex-col text-center">
          <p className="text-[13px] desktop:text-[20px]">
            KUSITMS은 기획, 개발, 디자인 파트로 구성되어 있어요
          </p>
          <div className="flex desktop:flex-row flex-col">
            <p className="text-[13px] desktop:text-[20px]">
              각 팀에서 모인 팀원들이 하나의 팀이 되어
            </p>
            <p className="text-[13px] desktop:text-[20px]">함께 프로젝트를 진행해요</p>
          </div>
        </div>
      </motion.div>

      <section className="flex flex-col gap-y-[20px] pt-[30px] desktop:pt-[80px] mb-[40px]">
        {teamData.map(({ icon, title, description, reverse, delay }) => (
          <TeamCard
            key={title}
            icon={icon}
            title={title}
            description={description}
            reverse={reverse}
            delay={delay}
          />
        ))}
      </section>

      <button
        type="button"
        className="flex gap-x-1 bg-[#0055FF] py-2 px-5 desktop:py-3 desktop:px-7 rounded-full w-fit"
      >
        <span className="text-[15px] desktop:text-[16px] font-semibold">
          학회 소개영상 보러가기
        </span>
        <Image
          src="/recruit/icons/WhiteArrow.svg"
          alt="디자인"
          width={24}
          height={24}
          style={{ width: 24, height: 24 }}
        />
      </button>

      <section className="flex flex-col gap-y-[80px] pt-[100px] desktop:pt-[180px]">
        <div className="flex flex-col items-center desktop:gap-y-[100px] gap-y-[24px]">
          <Image
            className="block desktop:hidden"
            src="/main/img/31th_Staff_Group.jpg"
            alt="전체 사진"
            width={311}
            height={222}
            style={{ width: 311, height: 222 }}
          />
          <Image
            className="hidden desktop:block"
            src="/main/img/31th_Staff_Group.jpg"
            alt="전체 사진"
            width={980}
            height={700}
            style={{ width: 980, height: 700 }}
          />
          <p className="text-[13px] desktop:text-[20px] text-center">
            KUSITMS 활동을 이끄는 운영진이에요. <br />
            학회원 활동과 운영진 활동을 함께해요.
          </p>
        </div>

        <div className="flex desktop:flex-row flex-col gap-x-[20px] gap-y-[40px] desktop:mt-[80px]">
          {executiveData.map(({ image, title, description, delay, paddingTop }) => (
            <ExecutiveCard
              key={title}
              image={image}
              title={title}
              description={description}
              delay={delay}
              paddingTop={paddingTop}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

const TeamCard = ({
  icon,
  title,
  description,
  reverse,
  delay,
}: {
  icon: string;
  title: string;
  description: string;
  reverse?: boolean;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: reverse ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: delay || 0 }}
      viewport={{ once: true }}
      className={clsx(
        "flex gap-x-[10px] desktop:gap-x-[40px] rounded-[32px] pt-[38px] pb-[34px] px-[30px] desktop:py-[56px] desktop:px-[64px] bg-white w-[310px] desktop:w-[980px]",
        reverse ? "desktop:flex-row-reverse" : "desktop:flex-row",
      )}
    >
      <Image
        src={icon}
        alt={title}
        width={34}
        height={34}
        className="mb-2 desktop:mb-0 block desktop:hidden"
        style={{ width: 34, height: 34 }}
      />
      <Image
        src={icon}
        alt={title}
        width={96}
        height={96}
        className="mb-2 desktop:mb-0 hidden desktop:block"
        style={{ width: 96, height: 96 }}
      />

      {/* 텍스트 블록 */}
      <div
        className={clsx(
          "flex flex-col gap-y-[10px] desktop:gap-y-[20px]",
          reverse && "desktop:items-end desktop:text-end",
        )}
      >
        <p className="text-[19px] desktop:text-[24px] text-[#0055FF] font-black">{title}</p>
        <p className="text-[13px] desktop:text-[16px] leading-[150%] text-black whitespace-pre-line">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const ExecutiveCard = ({
  image,
  title,
  description,
  delay,
  paddingTop,
}: {
  image: string;
  title: string;
  description: string;
  delay?: number;
  paddingTop?: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: delay || 0 }}
      viewport={{ once: true }}
      className={`relative ${paddingTop ? "desktop:pt-[120px]" : ""}`}
    >
      <Image
        className="block desktop:hidden"
        src={image}
        alt={title}
        width={311}
        height={420}
        style={{ width: 311, height: 420 }}
      />
      <Image
        className="hidden desktop:block"
        src={image}
        alt={title}
        width={347}
        height={520}
        style={{ width: 347, height: 520 }}
      />
      <div
        className={`absolute left-1/2 transform -translate-x-1/2 w-full flex flex-col gap-y-4 desktop:gap-y-6 items-center justify-center ${
          paddingTop
            ? "bottom-[32px] desktop:bottom-[55px]"
            : "bottom-[32px] desktop:bottom-[185px]"
        }`}
      >
        <p className="text-[20px] desktop:text-[24px] font-bold">{title}</p>
        <p className="text-[14px] desktop:text-[16px] text-center whitespace-pre-line">
          {description}
        </p>
      </div>
    </motion.div>
  );
};
