import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Recruit } from "@/components/recruit/index";

export const qnaList = [
  {
    question: "모집시기가 언제인가요?",
    answer: [
      "큐시즘은 상반기, 하반기 총 2번 신규 운영진 및 학회원을 모집해요.",
      "운영진 리쿠르팅 이후 학회원 리쿠르팅이 시작되니",
      "모집시기를 놓치고 싶지 않다면 홈페이지 상단에 있는 배너를 클릭하여 미리 알림을 받아보세요.",
    ],
  },
  {
    question: "경쟁률이 어떻게 되나요?",
    answer: [
      "매 기수 모집마다 경쟁률이 상이하게 나타나요. 따라서 경쟁률은 말씀드리기 어려운 점 양해부탁드려요.",
    ],
  },
  {
    question: "토요일 활동 시간대가 어떻게 되나요?",
    answer: [
      "정규 세션은 3~6시에 진행되나, 행사 및 커리큘럼에 따라 12~6시 사이에 진행되기도 해요.",
      "따라서 토요일 오후 시간에는 큐시즘 활동이 가능해야 해요!",
    ],
  },
  {
    question: "졸업예정 학부생도 지원이 가능한가요?",
    answer: [
      "큐시즘은 한 기수동안 재학생, 휴학생, 졸업 유예자처럼 대학생 신분을 유지하는 사람들만 지원이 가능해요.",
    ],
  },
  {
    question: "학회 수료시, 수료증을 받을 수 있나요?",
    answer: [
      "네, 학회의 마지막 커리큘럼에서 서류 기준을 충족한 학회원에게 수료증을 제공하고 있어요.",
    ],
  },
  {
    question: "정기 커리큘럼에 불참하게 되면 어떻게 되나요?",
    answer: [
      "정기 커리큘럼에 불참하면 정관에 따라 벌점이 부과돼요.",
      "최대 벌점을 초과하면 수료를 못하게 될 수 있어요. 정기 커리큘럼에는 최대한 참여해야 수료에 지장이 없어요.",
    ],
  },
  {
    question: "프로젝트는 어떻게 진행되나요?",
    answer: [
      "매 기수마다 차이가 있지만, 밋업데이 이후 꾸준히 프로젝트를 이어나가는 팀이 존재해요.",
      <>
        자세한 이야기는{" "}
        <Link href={"/projects/meetup"} className="text-[#0055FF]">
          프로젝트 페이지
        </Link>
        에서 확인해보세요.
      </>,
    ],
  },
  {
    question: "운영진과 학회원의 차이가 무엇인가요?",
    answer: [
      "운영진은 학회원의 일원으로써 일반 학회원과 동일하게 모든 행사에 참여해요.",
      "다만, 운영진은 큐시즘 행사 전반에 대해 관리하고 운영하는 역할을 하며 더욱 큐시즘을 알차게 보낼 수 있게 해줘요!",
    ],
  },
  {
    question: "큐시즘이 처음인데 운영진부터 지원해도 되나요?",
    answer: [
      "네 물론이에요 :)",
      "큐시즘 활동을 하면서 더 많은 경험을 쌓고 알차게 보내고 싶은 분이라면 언제나 환영이에요.",
      "매 기수 신규 운영진으로 들어와 함께 하는 분들이 많기 때문에",
      "큐시즘에 대한 열정만 있으시다면 전혀 부담 가지실 필요 없어요!",
    ],
  },
  {
    question:
      "운영진 지원 후 불합격이 되었을 때, 일반 학회원으로 재신청해도 불이익은 없나요?",
    answer: [
      "네, 전혀 불이익 없어요!",
      "모든 지원 서류는 모집이 끝난 후 즉시 폐기하므로 학회원으로 재신청하셔도 전혀 문제되지 않아요.",
    ],
  },
];
export const recruitItems = [
  {
    icon: { src: "/recruit/icons/Book.svg", alt: "책", width: 50, height: 46 },
    text: (
      <>
        활동 기간 동안 대학생 신분을 유지하는 분 <br />
        (졸업 유예자, 휴학생, 수료생 포함)
      </>
    ),
  },
  {
    icon: {
      src: "/recruit/icons/Calendar.svg",
      alt: "캘린더",
      width: 44,
      height: 51,
    },
    text: (
      <>
        매주 토요일 서울 지역에서 <br />
        진행되는 세션에 빠짐없이 참석 가능한 분
      </>
    ),
  },
  {
    icon: {
      src: "/recruit/icons/Ranking.svg",
      alt: "스티커",
      width: 49,
      height: 50,
    },
    text: (
      <>
        활동 기간 동안 운영진 활동 및 힉회 활동에 <br />
        적극적으로 참석 가능한 분
      </>
    ),
  },
];

export const recruitmentProcess = [
  {
    title: "서류 지원 기간",
    notice: (
      <p
        className={
          "font-semibold text-[16px] leading-[150%] tracking-[-0.5px] text-center"
        }
      >
        1월 16일(목) ~ 1월 25일(토)
        <br />
        23:59 마감
      </p>
    ),
  },
  {
    title: "서류 합격 발표",
    notice: (
      <p
        className={
          "font-semibold text-[16px] leading-[150%] tracking-[-0.5px] text-center"
        }
      >
        1월 28일(화) 합격자/불합격자 <br />
        개별 연락
      </p>
    ),
  },
  {
    title: "면접 기간",
    notice: (
      <p
        className={
          "font-semibold text-[16px] leading-[150%] tracking-[-0.5px] text-center"
        }
      >
        2월 1일(토) ~ 2월 2일(일) <br />
        서류 합격자 개별 안내
      </p>
    ),
  },
  {
    title: "최종 합격 발표",
    notice: (
      <p
        className={
          "font-semibold text-[16px] leading-[150%] tracking-[-0.5px] text-center"
        }
      >
        2월 9일(일) <br />
        합격자/불합격자 개별 연락
      </p>
    ),
  },
  {
    title: "31기 활동",
    notice: (
      <p
        className={
          "font-semibold text-[16px] leading-[150%] tracking-[-0.5px] text-center"
        }
      >
        선발 직후 ~ 6월 첫째 주 주말
      </p>
    ),
  },
];

export const recruitInfoList = [
  {
    id: 1,
    title: "누가 지원할 수 있어요?",
    contents: (
      <div className="flex w-full gap-x-[20px] justify-center items-center">
        {recruitItems.map((item, index) => (
          <Recruit.Card key={index}>
            <Recruit.Icon>
              <Image
                src={item.icon.src}
                alt={item.icon.alt}
                width={item.icon.width}
                height={item.icon.height}
                priority
                style={{ width: item.icon.width, height: item.icon.height }}
              />
            </Recruit.Icon>
            <Recruit.Content>
              <p className="font-normal text-[20px] leading-[100%] tracking-[-0.2px] text-center">
                {item.text}
              </p>
            </Recruit.Content>
          </Recruit.Card>
        ))}
      </div>
    ),
  },
  {
    id: 2,
    title: "어떤 팀을 모집해요?",
    contents: (
      <div
        className={
          "flex flex-col gap-y-[40px] items-center justify-center pt-[72px] pb-[52px]"
        }
      >
        <div className={"flex gap-x-[160px]"}>
          {["기획", "개발", "디자인"].map((content) => {
            return (
              <div
                key={content}
                className={
                  "font-extrabold text-[24px] leading-[120%] tracking-[0px] text-center"
                }
              >
                {content}
              </div>
            );
          })}
        </div>
        <p
          className={
            "text-[#90909A] font-normal text-[16px] leading-[100%] tracking-[-0.5px] text-center"
          }
        >
          2025.01.16~2025.01.25 31기 학회원 모집중이에요 :)
        </p>
      </div>
    ),
  },
  {
    id: 3,
    title: "언제 어디서 모여요?",
    contents: (
      <div
        className={
          "flex flex-col gap-y-[40px] items-center justify-center pt-[72px] pb-[52px]"
        }
      >
        <p
          className={
            "font-extrabold text-[24px] leading-[120%] tracking-[0px] text-center"
          }
        >
          일시: 매주 토요일 12시 ~ 18시 <br />
          장소: 서울 지역 내
        </p>
        <p
          className={
            "text-[#90909A] font-normal text-[16px] leading-[100%] tracking-[-0.5px] text-center"
          }
        >
          * 활동 장소와 시간은 커리큘럼에 따라 변경될 수 있어요 :)
        </p>
      </div>
    ),
  },
  {
    id: 4,
    title: "모집 절차가 어떻게 돼요?",
    contents: (
      <div className={"flex flex-col"}>
        <section className={"flex"}>
          {recruitmentProcess.map((process, index) => {
            return (
              <div key={process.title} className={"relative flex pr-9"}>
                <div className={"flex flex-col items-center"}>
                  <div
                    className={
                      index === recruitmentProcess.length - 1
                        ? "relative rounded-full"
                        : "relative rounded-full p-5"
                    }
                  >
                    {index === recruitmentProcess.length - 1 && (
                      <div className="absolute w-[220px] h-[220px] rounded-full bg-[#0055FF] opacity-20 z-0" />
                    )}
                    <div
                      className={`relative z-10 flex justify-center items-center w-[172px] h-[172px] rounded-full 
                                            ${
                                              index % 2 === 0
                                                ? index ===
                                                  recruitmentProcess.length - 1
                                                  ? "bg-[#0055FF] opacity-100 m-6"
                                                  : "bg-white"
                                                : "bg-[#0055FF] opacity-100"
                                            }`}
                    >
                      <p
                        className={`font-[SUIT] font-extrabold text-[20px] leading-[100%] tracking-[0px] text-center 
                                            ${
                                              index % 2 === 0
                                                ? index ===
                                                  recruitmentProcess.length - 1
                                                  ? "text-white"
                                                  : "text-[#0055FF]"
                                                : "text-white"
                                            }`}
                      >
                        {process.title}
                      </p>
                    </div>
                  </div>
                  <div className={"h-[6px] bg-[#0055FF] w-[28px] mt-5 mb-10"} />
                  {process.notice}
                </div>
                <div className={"absolute right-0 top-[25%] flex items-center"}>
                  {index !== recruitmentProcess.length - 1 && (
                    <Image
                      className={""}
                      src={"/recruit/icons/BlueArrow.svg"}
                      alt={"파란색 화살표"}
                      width={32}
                      height={32}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </section>
      </div>
    ),
  },
];
