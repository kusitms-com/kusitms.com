"use client";

import { Button } from "@kusitms.com/ui";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useId } from "react";

import type { Review } from "@/service/reviews";

// 시안의 열 순서(기획 → 디자인 → 개발)로 최신 기수 후기를 파트별 2개씩 고른다.
// 목록은 열 우선 순서라 데스크톱은 세로로 채워 3열 2행, 모바일은 2열 3행이 시안 배치와 같다.
const TEAMS = [
  { team: "기획팀", label: "기획" },
  { team: "디자인팀", label: "디자인" },
  { team: "개발팀", label: "개발" },
] as const;
const PER_TEAM = 2;

function pickReviews(reviews: Review[]) {
  const latest = Math.max(...reviews.map((review) => review.cardinal));
  return TEAMS.flatMap(({ team, label }) =>
    reviews
      .filter((review) => review.cardinal === latest && review.team === team)
      .slice(0, PER_TEAM)
      .map((review) => ({
        id: review.review_id,
        body: review.review,
        part: `${review.name} · ${label} · ${latest}기`,
      })),
  );
}

/** 피그마 활동후기(데스크톱 654:23097, 모바일 614:18445) */
export default function ReviewHighlightSection({ reviews }: { reviews: Review[] }) {
  const headingId = useId();
  const router = useRouter();
  const picked = reviews.length > 0 ? pickReviews(reviews) : [];

  if (picked.length === 0) return null;

  return (
    <section
      aria-labelledby={headingId}
      className="px-5 py-[200px] desktop:px-10 min-[1280px]:px-0 desktop:pt-[320px] desktop:pb-0"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-9 desktop:gap-12">
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="hidden text-headline-20b text-brand-primary desktop:block">Review</p>
          <div className="flex flex-col gap-4">
            <h2
              id={headingId}
              className="text-[32px] leading-[42px] font-bold tracking-[-0.012em] text-brand-primary desktop:text-pc-36b desktop:leading-12 desktop:text-label-normal"
            >
              활동후기
            </h2>
            <p className="hidden text-headline-20m text-label-netural desktop:block">
              큐시즘을 수료한 학회원들의 생생한 후기를 전해드려요
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-9 desktop:gap-10">
          <ul className="grid w-full grid-cols-2 gap-4 desktop:w-auto desktop:grid-flow-col desktop:grid-cols-[repeat(3,minmax(0,335px))] desktop:h-[450px] desktop:grid-rows-[210px_210px] desktop:content-start desktop:gap-6">
            {picked.map((review) => (
              <li
                key={review.id}
                className="flex h-[180px] flex-col justify-center overflow-hidden rounded-2xl bg-white px-4 py-5 shadow-[4px_4px_36px_rgba(0,0,0,0.03)] desktop:h-[210px] desktop:justify-between desktop:rounded-[20px] desktop:p-6 desktop:shadow-[4px_4px_44px_rgba(0,0,0,0.05)]"
              >
                <div className="flex flex-col gap-1">
                  <Image
                    src="/main/renewal/quote.svg"
                    alt=""
                    width={32}
                    height={32}
                    className="size-6 rotate-180 desktop:size-8"
                  />
                  {/* API 후기는 길어서(중간값 170자) 카드 크기를 지키도록 줄 수를 자른다: 모바일 4줄, 데스크톱 3줄 */}
                  <p className="line-clamp-4 text-[14px] leading-5 font-medium tracking-[0.0125em] text-black desktop:line-clamp-3 desktop:text-[20px] desktop:leading-8 desktop:tracking-[-0.008em]">
                    {review.body}
                  </p>
                </div>
                <p className="mt-auto text-right text-[13px] leading-[18px] font-medium tracking-[0.012em] text-label-light desktop:mt-0 desktop:text-[18px] desktop:leading-[26px] desktop:font-normal desktop:tracking-[-0.005em]">
                  {review.part}
                </p>
              </li>
            ))}
          </ul>
          <Button
            className="bg-[#4279ff]! desktop:py-2.5"
            onClick={() => router.push("/reviews/activity")}
          >
            후기 더보기
          </Button>
        </div>
      </div>
    </section>
  );
}
