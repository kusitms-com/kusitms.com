import { useId } from "react";
import FitCard, { type FitLine } from "./FitCard";

const FIT_CARDS: { label: string; title: string; lines: FitLine[] }[] = [
  {
    label: "WHO",
    title: "누구와 함께 하나요?",
    lines: [
      { text: "활동 내 대학생 신분을 유지하는 분", tone: "strong" },
      { text: "(졸업 유예자, 휴학생, 수료생 포함)", tone: "sub" },
      { text: "기획 · 디자인 · 프론트엔드 · 백엔드 파트" },
    ],
  },
  {
    label: "HOW",
    title: "어떻게 운영되나요?",
    lines: [
      { text: "6개월 기수제로 운영" },
      { text: "매주 토요일 서울 지역에서 세션 진행" },
      { text: "한 기수 동안 팀 단위로 프로젝트 진행" },
    ],
  },
  {
    label: "WHAT",
    title: "무엇을 하나요?",
    lines: [
      { text: "기업 연계 프로젝트" },
      { text: "밋업 프로젝트, 전시회" },
      { text: "전문가 초청 강연" },
    ],
  },
  {
    label: "GET",
    title: "무엇을 얻을 수 있나요?",
    lines: [
      { text: "직접 만든 서비스와 포트폴리오" },
      { text: "현업 전문가 · 파트너사 네트워크" },
      { text: "같은 목표를 가진 동기, 선배와의 커뮤니티" },
    ],
  },
];

/** 피그마 KUS_HOM_002 큐시즘, 한눈에 보기 */
export default function FitSection() {
  const headingId = useId();

  return (
    <section
      aria-labelledby={headingId}
      className="bg-fill-netural px-5 pt-[200px] desktop:px-0 desktop:py-80"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-9 desktop:gap-12">
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="text-body-16b desktop:text-headline-20b text-brand-primary">FIT</p>
          <h2 id={headingId} className="text-headline-24b desktop:text-pc-36b text-label-normal">
            큐시즘, 한눈에 보기
          </h2>
        </div>
        <div className="flex flex-col gap-5 desktop:grid desktop:grid-cols-2 desktop:gap-6">
          {FIT_CARDS.map((card) => (
            <FitCard key={card.label} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
