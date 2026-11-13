import { useId } from "react";
import FadeIn from "@/components/shared/FadeIn";
import PictureCard from "./PictureCard";

// 피그마 주석 "호버 시, 1.2배 확대": 카드 전체가 1.2배로 커지고, 옆 카드는 282px의 10%만큼 바깥으로 밀려난다(데스크톱).
// 여백(margin)을 늘리면 줄 폭이 다시 계산돼 카드가 줄고 본문이 줄바꿈되므로, 크기·위치는 transform(scale·translate)으로만 바꾼다.
const CARD_HOVER =
  "desktop:relative desktop:w-[282px] desktop:min-w-0 min-[1280px]:shrink-0 desktop:transition-[scale,translate] desktop:duration-500 desktop:ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none desktop:hover:z-10 desktop:hover:scale-[1.2]";

// 호버한 카드의 왼쪽 카드들은 왼쪽으로, 오른쪽 카드들은 오른쪽으로 282px의 10%만큼 밀어낸다
const ROW_HOVER =
  "desktop:[&>*:has(~*:hover)]:-translate-x-[28.2px] desktop:[&>*:hover~*]:translate-x-[28.2px]";

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
    description: "서로의 언어와 일하는 방식을 배우면서\n하나의 결론을 만들어가요.",
  },
  {
    image: "/main/renewal/audience-4.jpg",
    number: "04",
    title: "같은 고민을 나눌\n동료가 필요한 분",
    description: "동기와 선배가 함께 고민하고\n응원하는 커뮤니티가 있어요.",
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
        <FadeIn className="flex flex-col items-center gap-6 text-center">
          <p className="text-body-16b desktop:text-headline-20b text-brand-primary">FIT</p>
          <div className="flex flex-col gap-4">
            <h2 id={headingId} className="text-headline-24b desktop:text-pc-36b text-label-normal">
              이런 분께 추천해요
            </h2>
            <p className="text-body-16r text-label-netural desktop:text-headline-20m">
              큐시즘에서는 이런 분들이 함께하고 있어요
            </p>
          </div>
        </FadeIn>
        <FadeIn
          className={`flex flex-col gap-5 desktop:flex-row desktop:items-center desktop:justify-center desktop:gap-6 ${ROW_HOVER}`}
        >
          {AUDIENCE_CARDS.map((card) => (
            <PictureCard key={card.number} {...card} className={CARD_HOVER} />
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
