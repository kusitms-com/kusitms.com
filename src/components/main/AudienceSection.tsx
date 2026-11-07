import { useId } from "react";
import PictureCard from "./PictureCard";

// 피그마 주석 "호버 시, 1.2배 확대": 카드 전체가 1.2배로 커지고 옆 카드가 밀려난다(데스크톱).
// 가로 여백을 282px의 10%씩 늘려 자리를 만들고, 세로는 페이지가 흔들리지 않게 겹쳐 그린다.
// 전환 시간은 정의돼 있지 않아 파트 카드와 같은 600ms ease-in-out
const CARD_HOVER =
  "desktop:relative desktop:w-[282px] desktop:min-w-0 min-[1280px]:shrink-0 desktop:transition-[scale,margin] desktop:duration-[600ms] desktop:ease-[cubic-bezier(0.42,0,0.58,1)] motion-reduce:transition-none desktop:hover:z-10 desktop:hover:mx-[28.2px] desktop:hover:scale-[1.2]";

const AUDIENCE_CARDS = [
  {
    image: "/main/renewal/audience-1.jpg",
    number: "01",
    title: "머릿속 아이디어를\n직접 만들어보고 싶은 분",
    description: "기획·디자인·개발이 한 팀이 되어 아이디어를 실제 서비스로 완성해요.",
  },
  {
    image: "/main/renewal/audience-2.jpg",
    number: "02",
    title: "혼자가 아니라 팀으로\n끝까지 완주해보고 싶은 분",
    description: "기업 연계·밋업 프로젝트를 6개월 동안 처음부터 끝까지 함께 만들어요.",
  },
  {
    image: "/main/renewal/audience-3.jpg",
    number: "03",
    title: "다른 파트와 부딪히며\n답을 찾아가고 싶은 분",
    description: "서로의 언어와 일하는 방식을 배우면서 하나의 결론을 만들어가요.",
  },
  {
    image: "/main/renewal/audience-4.jpg",
    number: "04",
    title: "같은 고민을 나눌\n동료가 필요한 분",
    description: "동기와 선배가 함께 고민하고 응원하는 커뮤니티가 있어요.",
  },
];

/** 피그마 KUS_HOM_002 이런 분께 추천해요 */
export default function AudienceSection() {
  const headingId = useId();

  return (
    <section
      aria-labelledby={headingId}
      className="bg-fill-netural px-5 py-[200px] desktop:px-10 desktop:pt-[360px] min-[1280px]:px-0 desktop:pb-80"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-9 desktop:gap-14">
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="text-body-16b desktop:text-headline-20b text-brand-primary">PARTS</p>
          <div className="flex flex-col gap-4">
            <h2 id={headingId} className="text-headline-24b desktop:text-pc-36b text-label-normal">
              이런 분께 추천해요
            </h2>
            <p className="hidden text-headline-20m text-label-netural desktop:block">
              학회원의 성장을 위해 기획·디자인·프론트엔드·백엔드가 한 팀으로 프로젝트를 진행해요.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 desktop:flex-row desktop:items-center desktop:justify-center desktop:gap-6">
          {AUDIENCE_CARDS.map((card) => (
            <PictureCard key={card.number} {...card} className={CARD_HOVER} />
          ))}
        </div>
      </div>
    </section>
  );
}
