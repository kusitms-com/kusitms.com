import Image from "next/image";
import React from "react";
import FlipImageCard from "./FlipImageCard";

export default function ProgramIntroSection() {
  const programCards = [
    {
      src: "/main/img/Corporate_Project.png",
      alt: "Corporate_Project",
      className: "absolute top-0 left-0",
      delay: 0,
    },
    {
      src: "/main/img/MeetUp_Project.png",
      alt: "Kunecting_and_Meetup_Day",
      className: "absolute  top-[350px] desktop:top-[104px] desktop:right-0",
      delay: 0.3,
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center py-[100px] desktop:py-[200px]">
      <section>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[24px] desktop:text-[48px] font-black">학회 프로젝트 소개</h1>
          <Image
              className="block desktop:hidden"
              src="/main/BlueUnderlineIcon.svg"
              alt="BlueUnderlineIcon"
              width={88}
              height={7}
              style={{ width: 88, height: 7 }}
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
        <p className="text-[13px] desktop:text-[20px] mt-[20px] desktop:mt-[48px] text-center">
          KUSITMS에서는 학회원이 새로운 경험을 통해 <br />
          성장할 수 있도록다양한 프로젝트를 진행해요.
        </p>

        {/* 카드 */}
        <section
          className={
            "relative mt-[64px] desktop:mt-[100px] flex desktop:flex-row flex-col w-[315px] h-[750px] desktop:w-[930px] desktop:h-[700px]"
          }
        >
          {programCards.map(({ src, alt, className, delay }) => (
            <FlipImageCard
              key={alt}
              src={src}
              alt={alt}
              className={className}
              delay={delay}
            />
          ))}
        </section>
      </section>
    </div>
  );
}
