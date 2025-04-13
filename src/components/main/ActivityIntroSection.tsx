import Image from "next/image";
import React from "react";
import { FlipImageCard } from "./FlipImageCard";

export const ActivityIntroSection = () => {
  const activityCards = [
    {
      src: "/main/img/큐시즘데이.png",
      alt: "큐시즘데이",
      className: "absolute top-0 left-0",
      delay: 0,
    },
    {
      src: "/main/img/큐시즘의 밤.png",
      alt: "큐시즘의 밤",
      className: "absolute top-[117px] right-0",
      delay: 0.3,
    },
    {
      src: "/main/img/소모임.png",
      alt: "소모임",
      className: "absolute bottom-[92px] left-0",
      delay: 0.6,
    },
    {
      src: "/main/img/스터디.png",
      alt: "스터디",
      className: "absolute bottom-0 right-0",
      delay: 0.9,
    },
  ];

  return (
    <section
      className={
        "relative flex flex-col justify-center items-center bg-[#0055FF] py-[200px]"
      }
    >
      <div className={"flex flex-col items-center justify-center"}>
        <h1 className={"text-[48px] font-black"}>학회 활동 소개</h1>
        <Image
          src="/main/WhiteUnderlineIcon.svg"
          alt="밑줄"
          width={161}
          height={16}
          style={{ width: 161, height: 16 }}
        />
      </div>

      <Image
        className={"absolute top-[249px] left-[224px]"}
        src="/main/DrawnLine1Icon.svg"
        alt="로고"
        width={252}
        height={353}
        style={{ width: 252, height: 353 }}
      />

      <p className={"text-[20px] mt-[48px] text-center"}>
        KUSITMS은 학술적인 프로그램 외에도 <br />
        다양한 활동을 통해 친목을 다져요.
      </p>

      {/* 카드 */}
      <section
        className={
          "mt-[100px] relative justify-center items-center grid grid-cols-2 h-[1320px] w-[935px]"
        }
      >
        {activityCards.map(({ src, alt, className, delay }) => (
          <FlipImageCard
            key={alt}
            src={src}
            alt={alt}
            className={className}
            delay={delay}
          />
        ))}
      </section>

      <Image
        className={"absolute bottom-[132px] right-[120px]"}
        src="/main/DrawnLine2Icon.svg"
        alt="로고"
        width={256}
        height={509}
        style={{ width: 256, height: 509 }}
      />
    </section>
  );
};
