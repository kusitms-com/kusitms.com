"use client";

import Image from "next/image";
import Link from "next/link";
import { type CSSProperties, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const TAGLINE_LINES = ["한계 너머, 새로운 도약"] as const;
// v14 시안은 글자별 inline-block에 capitalize가 걸려 전부 대문자로 렌더링되며, 그 결과가 확정 디자인이다
const HEADLINE_LINES = ["Beyond LIMIT,", "Lead IT"] as const;

// v14 시안의 타이틀 타임라인(ms): 1740ms 뒤 시작해 5851.408ms 주기로 무한 반복하고, 주기 전체에 cubic-bezier(0, 0, 0.58, 1)이 걸린다.
// 글자는 가운데에서 바깥으로 260.079ms부터 나타나 1721.017ms에 모두 보이고, 4500ms부터 같은 순서로 사라져 주기 끝에 모두 사라진다.
// 글자 간격 = 구간 길이 ÷ (가장 먼 칸 수 + 4), 글자당 재생 시간 = 간격 × 4 (시안의 data-in-step/in-duration/out-step/out-duration과 일치)
const TITLE_TIMELINE_MS = 5851.408;
const TITLE_DELAY_MS = 1740;
const TITLE_IN_START_MS = 260.079;
const TITLE_IN_END_MS = 1721.017;
const TITLE_OUT_START_MS = 4500;
const TITLE_STEPS_PER_CHARACTER = 4;
const TITLE_EASING = "cubic-bezier(0, 0, 0.58, 1)";
const HIDDEN_CHARACTER = { opacity: 0, filter: "blur(30px)" };
const VISIBLE_CHARACTER = { opacity: 1, filter: "blur(0px)" };

// 700px 이하에서는 12개만 보이되, 서버 마크업을 고정하려고 항상 20개를 렌더하고 CSS로 숨긴다
const SLAT_COUNT = 20;
const MOBILE_SLAT_COUNT = 12;
const SLATS = Array.from({ length: SLAT_COUNT }, (_, index) => ({
  index,
  depth: (0.4 + (index % 6) * 0.12).toFixed(2),
  wave: `${(Math.sin(index * 0.72) * 0.8).toFixed(3)}px`,
  appearDelay: `${500 + index * 42}ms`,
}));

function AnimatedLines({ lines }: { readonly lines: readonly string[] }) {
  const lineLengths = lines.map((line) => [...line].length);
  const lineStarts = lineLengths.map((_, lineIndex) =>
    lineLengths.slice(0, lineIndex).reduce((sum, length) => sum + length + 1, 0),
  );
  // 줄바꿈도 한 글자로 세어, 두 줄을 한 문자열로 다루는 시안과 같은 가운데 위치를 얻는다
  const totalCharacters = lineLengths.reduce((sum, length) => sum + length + 1, -1);
  const center = (totalCharacters - 1) / 2;

  return (
    <>
      <span className="sr-only">{lines.join(" ")}</span>
      {lines.map((line, lineIndex) => (
        <span key={line} aria-hidden="true" className="block whitespace-nowrap">
          {[...line].map((character, index) => (
            <span
              key={`${index}-${character}`}
              data-distance={Math.abs(lineStarts[lineIndex] + index - center)}
              // 스크립트가 켜진 환경에서만 숨겨 두어야 스크립트 없이도 제목이 보인다
              className="inline-block will-change-[opacity,filter] [@media(scripting:enabled)]:motion-safe:opacity-0"
            >
              {character === " " ? "\u00a0" : character}
            </span>
          ))}
        </span>
      ))}
    </>
  );
}

function animateTitleCharacters(section: HTMLElement) {
  const animations: Animation[] = [];
  for (const text of section.querySelectorAll<HTMLElement>("[data-hero-text]")) {
    const characters = [...text.querySelectorAll<HTMLElement>("[data-distance]")];
    const distances = characters.map((character) => Number(character.dataset.distance));
    const steps = Math.max(...distances) + TITLE_STEPS_PER_CHARACTER;
    const inStep = (TITLE_IN_END_MS - TITLE_IN_START_MS) / steps;
    const outStep = (TITLE_TIMELINE_MS - TITLE_OUT_START_MS) / steps;

    for (const [index, character] of characters.entries()) {
      const enterStart = (TITLE_IN_START_MS + distances[index] * inStep) / TITLE_TIMELINE_MS;
      const enterEnd = enterStart + (inStep * TITLE_STEPS_PER_CHARACTER) / TITLE_TIMELINE_MS;
      const exitStart = (TITLE_OUT_START_MS + distances[index] * outStep) / TITLE_TIMELINE_MS;
      const exitEnd = Math.min(
        exitStart + (outStep * TITLE_STEPS_PER_CHARACTER) / TITLE_TIMELINE_MS,
        1,
      );

      animations.push(
        character.animate(
          [
            { ...HIDDEN_CHARACTER, offset: 0 },
            { ...HIDDEN_CHARACTER, offset: enterStart },
            { ...VISIBLE_CHARACTER, offset: enterEnd },
            { ...VISIBLE_CHARACTER, offset: exitStart },
            { ...HIDDEN_CHARACTER, offset: exitEnd },
            { ...HIDDEN_CHARACTER, offset: 1 },
          ],
          {
            duration: TITLE_TIMELINE_MS,
            delay: TITLE_DELAY_MS,
            iterations: Number.POSITIVE_INFINITY,
            easing: TITLE_EASING,
          },
        ),
      );
    }
  }
  return animations;
}

// 목표값 범위(26, 12)와 보간 계수(0.06, 0.055)는 v14 시안 값 그대로다
function startPointerParallax(section: HTMLElement) {
  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  let frameId = 0;

  const render = () => {
    currentX += (targetX - currentX) * 0.06;
    currentY += (targetY - currentY) * 0.055;
    section.style.setProperty("--hero-pointer-x", `${currentX}px`);
    section.style.setProperty("--hero-pointer-y", `${currentY}px`);
    const settled = Math.abs(targetX - currentX) <= 0.01 && Math.abs(targetY - currentY) <= 0.01;
    frameId = settled ? 0 : requestAnimationFrame(render);
  };
  const setTarget = (x: number, y: number) => {
    targetX = x;
    targetY = y;
    if (!frameId) frameId = requestAnimationFrame(render);
  };
  const handlePointerMove = (event: PointerEvent) => {
    setTarget(
      (event.clientX / window.innerWidth - 0.5) * 26,
      (event.clientY / window.innerHeight - 0.5) * 12,
    );
  };
  const handlePointerLeave = () => setTarget(0, 0);

  section.addEventListener("pointermove", handlePointerMove);
  section.addEventListener("pointerleave", handlePointerLeave);
  return () => {
    section.removeEventListener("pointermove", handlePointerMove);
    section.removeEventListener("pointerleave", handlePointerLeave);
    cancelAnimationFrame(frameId);
  };
}

export default function IntroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const titleAnimations = animateTitleCharacters(section);
    const stopPointerParallax = window.matchMedia("(hover: hover) and (pointer: fine)").matches
      ? startPointerParallax(section)
      : undefined;

    return () => {
      for (const animation of titleAnimations) animation.cancel();
      stopPointerParallax?.();
    };
  }, []);

  const scrollToNextSection = () => {
    sectionRef.current?.nextElementSibling?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  };

  return (
    <section
      ref={sectionRef}
      aria-label="KUSITMS 소개"
      className="sticky top-0 isolate -mt-16 flex min-h-dvh w-full flex-col overflow-hidden bg-white text-brand-60 [--hero-pointer-x:0px] [--hero-pointer-y:0px] desktop:mt-0"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src="/main/renewal/hero-initial.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <Image
          src="/main/renewal/hero-background.jpg"
          alt=""
          width={2163}
          height={2163}
          priority
          sizes="(min-width: 1024px) 100vw, 1181px"
          className={cn(
            "absolute top-[-17px] left-[-367px] h-[848px] w-[1181px] max-w-none desktop:top-0 desktop:left-[-1.77%] desktop:h-[103.05%] desktop:w-[103.44%]",
            "mask-[linear-gradient(90deg,#000_0%,#000_55%,rgba(0,0,0,0.72)_70%,rgba(0,0,0,0.22)_88%,transparent_100%)] mask-size-[200%_100%] mask-left mask-no-repeat",
            "will-change-[transform,mask-size] [transform:translate3d(calc(var(--hero-pointer-x)*0.08),calc(var(--hero-pointer-y)*0.05),0)]",
            "motion-safe:animate-hero-energy",
          )}
        />
        <div className="absolute inset-0 flex [clip-path:inset(0)] will-change-[clip-path] motion-safe:animate-hero-glass">
          {SLATS.map((slat) => (
            <div
              key={slat.index}
              className={cn(
                "relative h-full flex-[1_0_5%] border-l border-white/[0.34] bg-[linear-gradient(90deg,rgba(255,255,255,0.22),rgba(255,255,255,0.07)_52%,rgba(67,136,233,0.07))] shadow-[inset_1px_0_rgba(255,255,255,0.2),8px_0_22px_rgba(37,109,211,0.035)] backdrop-blur-[5px] backdrop-saturate-106 will-change-transform",
                "nth-[3n+1]:bg-[linear-gradient(90deg,rgba(255,255,255,0.28),rgba(255,255,255,0.04)_75%)]",
                "after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-[linear-gradient(transparent,rgba(255,255,255,0.72)_18%,rgba(255,255,255,0.15)_78%,transparent)]",
                "[transform:translate3d(calc(var(--hero-pointer-x)*var(--slat-depth)_+_var(--slat-wave)),calc(var(--hero-pointer-y)*var(--slat-depth)*0.08),0)]",
                "motion-safe:animate-hero-slat",
                "[@media(max-width:700px)]:basis-[9%] [@media(max-width:700px)]:backdrop-blur-[3px]",
                slat.index >= MOBILE_SLAT_COUNT && "[@media(max-width:700px)]:hidden",
              )}
              style={
                {
                  "--slat-depth": slat.depth,
                  "--slat-wave": slat.wave,
                  animationDelay: slat.appearDelay,
                } as CSSProperties
              }
            />
          ))}
        </div>
        <div className="absolute -inset-[30%] bg-[linear-gradient(112deg,transparent_36%,rgba(255,255,255,0.08)_46%,transparent_56%)] mix-blend-screen motion-safe:animate-hero-sheen" />
        <div className="absolute inset-x-0 bottom-0 h-[400px] bg-linear-to-b from-white/0 to-white desktop:h-[505px] desktop:from-[rgba(247,247,248,0)] desktop:to-fill-netural" />
      </div>
      <div className="absolute top-[calc(50%-30px)] left-1/2 z-10 flex w-[276px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-14 text-center desktop:top-[19.82%] desktop:left-[5.14%] desktop:w-[772px] desktop:translate-x-0 desktop:translate-y-0 desktop:items-start desktop:text-left">
        <div className="flex w-full flex-col gap-2 desktop:gap-1">
          <p
            data-hero-text
            className="font-suit text-[24px] leading-[1.25] tracking-[-0.04em] desktop:text-[48px]"
          >
            <AnimatedLines lines={TAGLINE_LINES} />
          </p>
          <h2
            data-hero-text
            className="font-brand text-[44px] font-medium leading-[56px] tracking-[-0.01em] desktop:text-[123px] desktop:leading-[138.232px]"
          >
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
