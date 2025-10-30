"use client";
import clsx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function PartIntroSection() {
  const teamData = [
    {
      mainIcon: "/main/Mange.svg",
      bgIcon: "/main/MangeBg.svg",
      title: "01 Planner",
      subtitle: "기획자",
      delay: 0,
    },
    {
      mainIcon: "/main/Mange.svg",
      bgIcon: "/main/MangeBg.svg",
      title: "02 Designer",
      subtitle: "디자이너",
      delay: 0.2,
    },
    {
      mainIcon: "/main/Mange.svg",
      bgIcon: "/main/MangeBg.svg",
      title: "03 Frontend",
      subtitle: "프론트엔드",
      delay: 0.4,
    },
    {
      mainIcon: "/main/Mange.svg",
      bgIcon: "/main/MangeBg.svg",
      title: "04 Backend",
      subtitle: "백엔드",
      delay: 0.6,
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
    <div
      className="flex flex-col pt-[100px] desktop:pt-[240px] items-center"
      style={{
        background: "linear-gradient(180deg, #F0FAFF 4.82%, #FFF 108.77%)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col gap-y-[16px] items-center justify-center"
      >
        <p
          className="text-title-5 desktop:text-[48px] text-black"
          style={{ textShadow: "0 1px 20px rgba(121, 212, 255, 0.40)" }}
        >
          함께하는 큐밀리
        </p>
        <p className="text-center text-body-4 desktop:text-[20px] text-gray-500">
          학회원이 새로운 경험을 통해 성장할 수 있도록 <br />
          다양한 프로젝트를 진행해요.
        </p>
      </motion.div>

      <section className="flex flex-wrap justify-center gap-4 pt-[30px] desktop:pt-[80px] mb-[40px] px-4 desktop:px-0">
        {teamData.map(({ mainIcon, bgIcon, title, subtitle, delay }) => (
          <TeamCard
            key={title}
            mainIcon={mainIcon}
            bgIcon={bgIcon}
            title={title}
            subtitle={subtitle}
            delay={delay}
          />
        ))}
      </section>

      {/* <button
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
      </button> */}

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
  mainIcon,
  bgIcon,
  title,
  subtitle,
  delay,
}: {
  mainIcon: string;
  bgIcon: string;
  title: string;
  subtitle: string;
  reverse?: boolean;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: delay || 0 }}
      viewport={{ once: true }}
      className={clsx(
        "relative px-[18.1px] py-[13.6px] flex-shrink-0 overflow-hidden bg-sky-50",
        "max-w-[calc(50%-8px)] desktop:max-w-none"
      )}
      style={{
        width: "224px",
        height: "317.692px",
        borderRadius: "9.077px",
        border: "2px solid #F0F4FF",
        boxShadow: "0px 4px 10px 0px rgba(121, 212, 255, 0.20)",
      }}
    >
      <div className="absolute top-0 left-0">
        <Image
          src={bgIcon}
          alt={title}
          width={152}
          height={158}
        />
      </div>
      <div className="relative z-10">
        <div className="flex flex-col gap-[8px]">
          <div className="flex items-baseline gap-2">
            <span className="text-dark-blue-500 text-[22.692px] font-semibold leading-none">{title.split(" ")[0]}</span>
            <div>
              <span className="text-gray-900 text-[27.2px] font-semibold leading-none">{title.split(" ")[1]}</span>
              <p className="text-[15.88px] font-semibold text-gray-600">{subtitle}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-0">
        <Image
          src={mainIcon}
          alt={title}
          width={189}
          height={197}
        />
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
