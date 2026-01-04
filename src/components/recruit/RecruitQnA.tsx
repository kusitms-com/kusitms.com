"use client";

import Link from "next/link";
import { useState } from "react";
import { categories } from "@/constants/recruitData";
import RecruitQnADropBox from "./RecruitQnADropBox";

export default function RecruitQnA() {
  const qnaList = [
    {
      field: "선발",
      question: "모집시기가 언제인가요?",
      answer: [
        "큐시즘은 상반기, 하반기 총 2번 신규 운영진 및 학회원을 모집해요.",
        "운영진 리쿠르팅 이후 학회원 리쿠르팅이 시작되니",
        "모집시기를 놓치고 싶지 않다면 홈페이지 상단에 있는 배너를 클릭하여 미리 알림을 받아보세요.",
      ],
    },
    {
      field: "선발",
      question: "경쟁률이 어떻게 되나요?",
      answer: [
        "매 기수 모집마다 경쟁률이 상이하게 나타나요. 따라서 경쟁률은 말씀드리기 어려운 점 양해부탁드려요.",
      ],
    },
    {
      field: "활동",
      question: "토요일 활동 시간대가 어떻게 되나요?",
      answer: [
        "정규 세션은 3~6시에 진행되나, 행사 및 커리큘럼에 따라 12~6시 사이에 진행되기도 해요.",
        "따라서 토요일 오후 시간에는 큐시즘 활동이 가능해야 해요!",
      ],
    },
    {
      field: "지원",
      question: "졸업예정 학부생도 지원이 가능한가요?",
      answer: [
        "큐시즘은 한 기수동안 재학생, 휴학생, 졸업 유예자처럼 대학생 신분을 유지하는 사람들만 지원이 가능해요.",
      ],
    },
    {
      field: "활동",
      question: "학회 수료시, 수료증을 받을 수 있나요?",
      answer: [
        "네, 학회의 마지막 커리큘럼에서 서류 기준을 충족한 학회원에게 수료증을 제공하고 있어요.",
      ],
    },
    {
      field: "활동",
      question: "정기 커리큘럼에 불참하게 되면 어떻게 되나요?",
      answer: [
        "정기 커리큘럼에 불참하면 정관에 따라 벌점이 부과돼요.",
        "최대 벌점을 초과하면 수료를 못하게 될 수 있어요. 정기 커리큘럼에는 최대한 참여해야 수료에 지장이 없어요.",
      ],
    },
    {
      field: "활동",
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
      field: "지원",
      question: "운영진과 학회원의 차이가 무엇인가요?",
      answer: [
        "운영진은 학회원의 일원으로써 일반 학회원과 동일하게 모든 행사에 참여해요.",
        "다만, 운영진은 큐시즘 행사 전반에 대해 관리하고 운영하는 역할을 하며 더욱 큐시즘을 알차게 보낼 수 있게 해줘요!",
      ],
    },
    {
      field: "지원",
      question: "큐시즘이 처음인데 운영진부터 지원해도 되나요?",
      answer: [
        "네 물론이에요 :)",
        "큐시즘 활동을 하면서 더 많은 경험을 쌓고 알차게 보내고 싶은 분이라면 언제나 환영이에요.",
        "매 기수 신규 운영진으로 들어와 함께 하는 분들이 많기 때문에",
        "큐시즘에 대한 열정만 있으시다면 전혀 부담 가지실 필요 없어요!",
      ],
    },
    {
      field: "선발",
      question: "운영진 지원 후 불합격이면, 일반 학회원으로 재신청해도 불이익은 없나요?",
      answer: [
        "네, 전혀 불이익 없어요!",
        "모든 지원 서류는 모집이 끝난 후 즉시 폐기하므로 학회원으로 재신청하셔도 전혀 문제되지 않아요.",
      ],
    },
    {
      field: "선발",
      question: "서류/면접 전형은 어떻게 진행되나요?",
      answer: ["서류는 위더스 웹을 통해 받고있으며 면접은 오프라인 대면 면접으로 진행하고 있어요."],
    },
    {
      field: "선발",
      question: "한 기수에 몇 명 정도 뽑나요?",
      answer: ["한 기수에 64명이 활동하며, 활동연장한 OB를 제외한 인원을 뽑아 기수별로 상이해요."],
    },
    {
      field: "지원",
      question: "전공자가 아니어도 지원 가능한가요?",
      answer: ["네, 전공이 아니더라도 큐시즘에 대한 열정만 있다면 참여할 수 있어요!"],
    },
    {
      field: "지원",
      question: "이전 기수에서 떨어졌는데 다시 지원해도 되나요?",
      answer: [
        "네, 재지원 가능해요.",
        "모든 지원 서류는 모집이 끝난 후 즉시 폐기하므로 학회원으로 재신청하셔도 전혀 문제되지 않아요.",
      ],
    },
    {
      field: "활동",
      question: "정규 세션 말고도 추가 스터디가 있나요?",
      answer: [
        "네, 정규 세션 외에 자율적으로 스터디를 열어 공부할 수 있어요.",
        "성장하고 싶은 주제라면 모두 가능해요!",
      ],
    },
  ];

  const [selectedField, setSelectedField] = useState("전체");
  const [openQuestionId, setOpenQuestionId] = useState<string | null>(null);

  const handleToggle = (questionId: string) => {
    setOpenQuestionId(openQuestionId === questionId ? null : questionId);
  };

  return (
    <section className="flex flex-col desktop:gap-[70px] gap-[40px] pb-[100px] desktop:pb-[200px] w-full">
      {/* 질문 선택 네비게이션 */}
      <div className="flex desktop:gap-[20px] gap-1 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setSelectedField(category)}
            className={`cursor-pointer rounded-full py-[4px] desktop:w-[120px] transition-colors duration-300
                    ${
                      selectedField === category
                        ? "bg-dark-blue-50 text-dark-blue-600 text-body-5 desktop:text-body-1 px-[16px] desktop:py-[10px] "
                        : "text-gray-700 text-body-6 desktop:text-body-2 hover:bg-gray-50  hover:px-[16px] px-[12px] hover:desktop:py-[10px]"
                    }`}
          >
            {category}
          </button>
        ))}
      </div>
      {/* QnA 정보 */}
      <div className="flex flex-col gap-[12px] desktop:gap-[20px]">
        {qnaList
          .filter((item) => selectedField === "전체" || item.field === selectedField)
          .map((item) => (
            <RecruitQnADropBox
              key={item.question}
              question={item.question}
              answer={item.answer}
              isOpen={openQuestionId === item.question}
              onToggle={() => handleToggle(item.question)}
            />
          ))}
      </div>
    </section>
  );
}
