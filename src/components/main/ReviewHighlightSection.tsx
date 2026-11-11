"use client";

import { Button } from "@kusitms.com/ui";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useId } from "react";

// 시안 문구 그대로(API 후기 대신). 목록은 열 우선 순서라 데스크톱은 세로로 채워 3열 2행(기획 → 디자인 → 개발),
// 모바일은 2열 3행이 시안 배치와 같다. "\n"은 데스크톱 시안의 줄바꿈이고 모바일에서는 공백으로 보인다
const REVIEWS = [
  {
    body: "처음 발제한 아이디어로 팀을 꾸리고,\n실제 서비스로 만들어\n유저 피드백까지 받아봤어요.",
    part: "기획 · 33기",
  },
  {
    body: "동아리 활동을 넘어 비즈니스 모델과 경영 관점까지 고민하며 프로젝트를 했어요.",
    part: "기획 · 33기",
  },
  {
    body: "실무에 가까운 협업 속에서 두 프로젝트에 몰입하며 짧은 기간에\n크게 성장했어요.",
    part: "디자인 · 33기",
  },
  { body: "여러 전공 사람들과 부딪히면서 디자인적 사고가 넓어졌어요.", part: "디자인 · 33기" },
  {
    body: "개발은 단순한 구현이 아니라 사람들과 가능성을 현실로 만드는 일이라는 걸 느꼈어요.",
    part: "개발 · 33기",
  },
  {
    body: "기수가 끝난 뒤에도 실제 사용자를 모으려고 밋업 팀이 계속 이어가고 있어요.",
    part: "개발 · 33기",
  },
] as const;

/** 피그마 활동후기(데스크톱 614:17157, 모바일 956:29200) */
export default function ReviewHighlightSection() {
  const headingId = useId();
  const router = useRouter();
  return (
    <section
      aria-labelledby={headingId}
      className="px-5 py-[200px] desktop:px-10 min-[1280px]:px-0 desktop:pt-[320px] desktop:pb-0"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-9 desktop:gap-12">
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="text-body-16b text-brand-primary desktop:text-headline-20b">Review</p>
          <div className="flex flex-col gap-4">
            <h2
              id={headingId}
              className="text-headline-24b text-label-normal desktop:text-pc-36b desktop:leading-12"
            >
              활동후기
            </h2>
            {/* 모바일 시안은 "이야기를" 뒤에서 줄을 바꾼다 */}
            <p className="text-body-16r text-label-netural desktop:text-headline-20m">
              큐시즘을 먼저 경험한 학회원들의 이야기를
              <br className="desktop:hidden" /> 전해드려요
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-9 desktop:gap-10">
          <ul className="grid w-full grid-cols-2 gap-4 desktop:w-auto desktop:grid-flow-col desktop:grid-cols-[repeat(3,minmax(0,335px))] desktop:h-[450px] desktop:grid-rows-[210px_210px] desktop:content-start desktop:gap-6">
            {REVIEWS.map((review) => (
              <li
                key={review.body}
                className="flex h-[180px] flex-col justify-center overflow-hidden rounded-2xl bg-white px-3.5 py-5 shadow-[4px_4px_36px_rgba(0,0,0,0.03)] desktop:h-[210px] desktop:justify-between desktop:rounded-[20px] desktop:p-6 desktop:shadow-[4px_4px_44px_rgba(0,0,0,0.05)]"
              >
                <div className="flex flex-col gap-1">
                  <Image
                    src="/main/renewal/quote.svg"
                    alt=""
                    width={32}
                    height={32}
                    className="size-6 rotate-180 desktop:size-8"
                  />
                  <p className="text-label-14m text-label-strong desktop:whitespace-pre-line desktop:text-[20px] desktop:leading-8 desktop:tracking-[-0.008em]">
                    {review.body}
                  </p>
                </div>
                <p className="mt-auto text-right text-label-13m text-label-light desktop:mt-0 desktop:text-body-18r">
                  {review.part}
                </p>
              </li>
            ))}
          </ul>
          <Button size="m" onClick={() => router.push("/reviews/activity")}>
            후기 더보기
          </Button>
        </div>
      </div>
    </section>
  );
}
