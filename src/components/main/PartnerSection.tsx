"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PartnerSection() {
  const partners = [
    {
      name: "인프런",
      description:
        "IT기술 정보 플랫폼 ‘인프런'은 현재 3,000여개가 넘는 IT 분야 학습 콘텐츠를 보유하고 5,000명 이상의 지식 공유자, 140만 명 이상의 학습자가 함께 지식 생태계의 선순환을 만들고 있습니다.",
      image: "/main/img/Inflearn.png",
      url: "https://www.inflearn.com/",
    },
    {
      name: "네이버 클라우드 플랫폼",
      description:
        "네이버 클라우드 예비 개발자 지원 프로그램 Green Developers 네이버 클라우드 플랫폼은 클라우드 스터디, 토이 프로젝트 등 자기 개발 목적으로 클라우드를 활용하는 예비, 주니어 개발자의 성장을 지원합니다.",
      image: "/main/img/Naver_Cloud.png",
      url: "https://www.ncloud.com/",
    },
    {
      name: "스나이퍼 팩토리",
      description:
        "스나이퍼 팩토리는 국내 유수의 IT 인재 육성을 위한 자체 부트캠프를 운영하며 IT 서비스 기획, UIUX 디자인, 앱/웹 개발자, AI, 빅데이터, 유니티 등 청년 IT 인재 육성을 키워나가고 있습니다.",
      image: "/main/img/Sniper_Factory.png",
      url: "https://sniperfactory.com/",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className={
        "desktop:pt-[200px] pb-[100px] desktop:pb-[120px] flex flex-col justify-center items-center"
      }
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-[23px] desktop:text-[48px] font-black">파트너사</h1>
        <Image
          className="block desktop:hidden mt-[7px]"
          src="/main/BlueUnderlineIcon.svg"
          alt="BlueUnderlineIcon"
          width={113}
          height={13}
          style={{ width: 113, height: 13 }}
        />
        <Image
          className="hidden desktop:block"
          src="/main/BlueUnderlineIcon.svg"
          alt="BlueUnderlineIcon"
          width={161}
          height={16}
          style={{ width: 161, height: 16 }}
        />
      </div>
      <p className="mt-[20px] desktop:mt-[48px] text-[13px] desktop:text-[20px]">
        KUSITMS과 함께하는 파트너사를 소개해요.
      </p>
      <section className="hidden desktop:block  desktop:flex flex-row gap-x-[80px] mt-[64px] desktop:mt-[100px]">
        {partners.map((partner, idx) => (
          <PartnerCard key={idx} {...partner} />
        ))}
      </section>
      <section className="block desktop:hidden flex flex-col gap-y-[30px] mt-[64px]">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="flex flex-col items-center px-5 py-5 justify-center bg-white"
          >
            <Image src={partner.image} width={235} height={165} alt={partner.image} />
          </div>
        ))}
      </section>
    </motion.div>
  );
}

const PartnerCard = ({
  name,
  description,
  image,
  url,
}: {
  name: string;
  description: string;
  image: string;
  url: string;
  key: number;
}) => (
  <div className="relative p-[6px]">
    <Link
      href={url}
      className="absolute top-0 right-0 flex flex-col items-center justify-center bg-black w-[82px] h-[82px] rounded-full"
    >
      <div className="flex flex-col items-center justify-center bg-[#0055FF] w-[66px] h-[66px] rounded-full">
        <Image src="/main/Arrow.svg" width={30} height={30} alt="Arrow" />
      </div>
    </Link>
    <div className="border w-[391px] h-[450px] bg-white rounded-[32px] m-[6px]">
      <div className="flex flex-col items-center justify-center py-8 mx-8 border-b-[0.5px] border-black h-[249px]">
        <Image src={image} width={235} height={165} alt={name} />
      </div>
      <div className="flex flex-col gap-y-3 p-8 h-[201px]">
        <div className="text-[24px] text-[#05F] font-bold">{name}</div>
        <div className="text-black text-[15px]">{description}</div>
      </div>
    </div>
  </div>
);
