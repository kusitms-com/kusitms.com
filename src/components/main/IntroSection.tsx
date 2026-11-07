"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const TAGLINE_LINES = ["한계 너머, 새로운 도약"] as const;
const HEADLINE_LINES = ["Beyond LIMIT,", "Lead IT"] as const;
// Figma 텍스트 모션(가운데에서 바깥으로): 총 1.246초 안에서 글자 간격 = 총 시간 ÷ (가장 먼 칸 수 + 4),
// 글자당 재생 시간 = 간격 × 4. 헤드라인 89ms/356ms, 태그라인 124.6ms/498.4ms와 일치한다.
const TEXT_MOTION_TOTAL_SECONDS = 1.24606;
const TEXT_MOTION_DURATION_IN_STAGGERS = 4;

function AnimatedLines({ lines }: { readonly lines: readonly string[] }) {
  const lineLengths = lines.map((line) => [...line].length);
  const lineStarts = lineLengths.map((_, lineIndex) =>
    lineLengths.slice(0, lineIndex).reduce((sum, length) => sum + length + 1, 0),
  );
  const totalCharacters = lineLengths.reduce((sum, length) => sum + length + 1, -1);
  const center = (totalCharacters - 1) / 2;
  const staggerSeconds =
    TEXT_MOTION_TOTAL_SECONDS /
    (Math.floor(totalCharacters / 2) + TEXT_MOTION_DURATION_IN_STAGGERS);
  const durationSeconds = staggerSeconds * TEXT_MOTION_DURATION_IN_STAGGERS;

  return (
    <>
      <span className="sr-only">{lines.join(" ")}</span>
      {lines.map((line, lineIndex) => (
        <span key={line} aria-hidden="true" className="block whitespace-nowrap">
          {[...line].map((character, index) => (
            <span
              key={`${index}-${character}`}
              className="inline-block motion-safe:animate-hero-char"
              style={{
                animationDuration: `${durationSeconds}s`,
                animationDelay: `${Math.abs(lineStarts[lineIndex] + index - center) * staggerSeconds}s`,
              }}
            >
              {character === " " ? "\u00a0" : character}
            </span>
          ))}
        </span>
      ))}
    </>
  );
}

export default function IntroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const scrollToNextSection = () => {
    sectionRef.current?.nextElementSibling?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  };

  return (
    <section
      ref={sectionRef}
      aria-label="KUSITMS 소개"
      className="sticky top-0 isolate -mt-16 flex min-h-dvh w-full flex-col overflow-hidden bg-white text-brand-60 desktop:mt-0"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src="/main/renewal/hero-background.jpg"
          alt=""
          width={2163}
          height={2163}
          priority
          sizes="(min-width: 1024px) 100vw, 1181px"
          className="absolute top-[-17px] left-[-367px] h-[848px] w-[1181px] max-w-none desktop:top-0 desktop:left-[-1.77%] desktop:h-[103.05%] desktop:w-[103.44%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#000,#fff)] bg-[length:57.094px_100%] bg-[position:-3.84px_0] bg-repeat-x opacity-10 mix-blend-soft-light desktop:bg-[length:72px_100%] desktop:bg-[position:0_0]" />
        <div className="absolute inset-x-0 bottom-0 h-[400px] bg-linear-to-b from-white/0 to-white desktop:h-[505px] desktop:from-[rgba(247,247,248,0)] desktop:to-fill-netural" />
      </div>
      <div className="absolute top-[calc(50%-30px)] left-1/2 z-10 flex w-[276px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-14 text-center desktop:top-[19.82%] desktop:left-[5.14%] desktop:w-[772px] desktop:translate-x-0 desktop:translate-y-0 desktop:items-start desktop:text-left">
        <div className="flex w-full flex-col gap-2 desktop:gap-1">
          <p className="font-suit text-[24px] leading-[1.25] tracking-[-0.04em] desktop:text-[48px]">
            <AnimatedLines lines={TAGLINE_LINES} />
          </p>
          <h2 className="font-brand text-[44px] font-medium leading-[56px] tracking-[-0.01em] desktop:text-[123px] desktop:leading-[138.232px]">
            <AnimatedLines lines={HEADLINE_LINES} />
          </h2>
        </div>
        <Link
          href="/recruit"
          className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-white bg-white/30 px-6 py-2 text-body-16sb text-brand-60 transition-colors hover:bg-white/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary desktop:text-[20px] desktop:leading-8 desktop:tracking-[-0.008em] desktop:text-brand-primary"
        >
          34기 모집 신청 바로가기
        </Link>
      </div>
      <button
        type="button"
        aria-label="다음 섹션으로 이동"
        className="absolute bottom-8 left-1/2 z-10 grid size-11 -translate-x-1/2 cursor-pointer place-items-center border-0 bg-transparent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary desktop:size-14"
        onClick={scrollToNextSection}
      >
        <Image
          src="/main/renewal/hero-arrow.svg"
          alt=""
          width={36}
          height={36}
          className="size-9 motion-safe:animate-hero-arrow desktop:size-12"
        />
      </button>
    </section>
  );
}
