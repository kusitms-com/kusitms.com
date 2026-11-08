import { useId } from "react";
import PartCard, { type Part } from "./PartCard";

const PARTS: {
  part: Part;
  number: string;
  name: string;
  korean: string;
  summary: string;
  detail: string;
}[] = [
  {
    part: "planner",
    number: "01",
    name: "Planner",
    korean: "기획자",
    summary: "가설 검증과 문서화, 방향성 제시",
    detail: "서비스 문제를 정의하고 기능·화면을 설계해요.\n기획서, IA, 와이어프레임을 만들어요.",
  },
  {
    part: "designer",
    number: "02",
    name: "Designer",
    korean: "디자이너",
    summary: "기획 의도를 반영한 UX 기반 디자인",
    detail: "사용자 경험과 화면을 디자인해요.\nUI 디자인, 프로토타입, 디자인 시스템을 만들어요.",
  },
  {
    part: "frontend",
    number: "03",
    name: "Frontend",
    korean: "프론트엔드",
    summary: "디자인 시스템 구축, 백엔드와 기능 조율",
    detail: "화면을 직접 구현해 사용자가 만나는 서비스를 완성해요.\n웹·앱 클라이언트를 개발해요.",
  },
  {
    part: "backend",
    number: "04",
    name: "Backend",
    korean: "백엔드",
    summary: "기술 스택 선정, 오류 원인 분석",
    detail: "서버·DB·API를 설계하고 서비스를 안정적으로 운영해요.\n배포와 인프라도 다뤄요.",
  },
];

/** 피그마 KUS_HOM_002 함께하는 큐밀리. 데스크톱 호버 디자인은 PartCard가 처리 */
export default function PartsSection() {
  const headingId = useId();

  return (
    <section
      aria-labelledby={headingId}
      className="bg-fill-netural px-5 pt-[200px] desktop:px-0 desktop:py-[360px]"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-9 desktop:gap-14">
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="text-body-16b desktop:text-headline-20b text-brand-primary">PARTS</p>
          <div className="flex flex-col gap-4">
            <h2 id={headingId} className="text-headline-24b desktop:text-pc-36b text-label-normal">
              함께하는 큐밀리
            </h2>
            <p className="text-body-16r desktop:text-headline-20m text-label-netural">
              학회원의 성장을 위해 기획·디자인·프론트엔드·백엔드가 한 팀으로 프로젝트를 진행해요.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 desktop:grid desktop:grid-cols-2 desktop:gap-6">
          {PARTS.map((part) => (
            <PartCard key={part.part} {...part} />
          ))}
        </div>
      </div>
    </section>
  );
}
