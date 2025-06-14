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
      src: "/main/img/Kunecting_and_Meetup_Day.png",
      alt: "Kunecting_and_Meetup_Day",
      className: "absolute top-[104px] right-0",
      delay: 0.3,
    },
    {
      src: "/main/img/Lecture_Program.png",
      alt: "Lecture_Program",
      className: "absolute bottom-[101px] left-0",
      delay: 0.6,
    },
    {
      src: "/main/img/Education_Session.png",
      alt: "Education_Session",
      className: "absolute bottom-0 right-0",
      delay: 0.9,
    },
  ];

  return (
    <div className={"flex flex-col justify-center items-center py-[200px]"}>
      <section>
        <div className={"flex flex-col items-center justify-center"}>
          <h1 className={"text-[48px] font-black"}>학회 프로그램 소개</h1>
          <Image
            src="/main/BlueUnderlineIcon.svg"
            alt="BlueUnderlineIcon"
            width={161}
            height={16}
            style={{ width: 161, height: 16 }}
          />
        </div>
        <p className={"text-[20px] mt-[48px] text-center"}>
          KUSITMS에서는 학회원이 새로운 경험을 통해 성장할 수 있도록 <br />
          다양한 프로그램을 진행해요.
        </p>

        {/* 카드 */}
        <section
          className={
            "relative mt-[100px] grid grid-cols-2 w-[930px] h-[1330px]"
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
