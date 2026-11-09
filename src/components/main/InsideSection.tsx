"use client";

import { ArrowRightIcon, KeyboardArrowLeftIcon, KeyboardArrowRightIcon } from "@kusitms.com/icons";
import { Button, PageNavButton } from "@kusitms.com/ui";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { type ReactNode, useEffect, useId, useState } from "react";
import { nextTabIndex } from "@/lib/tabKeys";
import { cn } from "@/lib/utils";
import type {
  IntroductionActivity,
  IntroductionData,
  IntroductionLecture,
} from "@/service/introductions";
import type { MeetupItem } from "@/service/projects";
import IntroductionMessage from "./IntroductionMessage";

const LOGO_DIR = "/main/img/company";
// 어두운 사진 위에 올라가므로 검은 계열 로고는 흰색으로 바꿔 보여준다(시안과 같은 처리)
// size: 여백 없이 꽉 찬 로고(SVG)는 다른 로고 파일(위아래 여백 포함)과 크기가 맞도록 높이를 따로 준다
const LOGO_ROWS: { src: string; invert?: boolean; size?: string }[][] = [
  [
    { src: "LG.webp" },
    { src: "LifeZip.webp", invert: true },
    { src: "ZigHang.webp" },
    { src: "SeoulMilk.webp" },
    { src: "Kobaco.webp" },
    { src: "LetsCareer.webp", invert: true },
    { src: "DevOcean.webp", invert: true },
    { src: "SoulLive.webp" },
  ],
  [
    { src: "WeFlo.webp" },
    { src: "CodeIt.webp" },
    { src: "QanDa.webp", invert: true },
    { src: "DongaST.webp", invert: true },
    { src: "HDMedi.webp" },
    { src: "BringKo.webp" },
    { src: "Elice.webp" },
    { src: "FitPet.webp" },
    { src: "Verty.svg", size: "h-2 px-1 desktop:h-3.5 desktop:px-2" },
  ],
];

function LogoMarquee() {
  return (
    <div className="absolute inset-x-0 top-[2.5%] flex flex-col gap-[1%] overflow-hidden">
      {LOGO_ROWS.map((row, rowIndex) => (
        <div
          key={row[0].src}
          className={cn(
            "flex w-max items-center motion-safe:animate-logo-marquee",
            rowIndex === 1 && "motion-safe:[animation-direction:reverse]",
          )}
        >
          {/* 사진 전체 폭을 채우도록 목록을 네 번 이어 붙이고, 앞 절반(두 벌)만큼 흘려 끊김 없이 반복 */}
          {[...row, ...row, ...row, ...row].map((logo, index) => (
            <Image
              key={`${logo.src}-${index}`}
              src={`${LOGO_DIR}/${logo.src}`}
              alt={index < row.length ? logo.src.replace(/\.\w+$/, "") : ""}
              aria-hidden={index >= row.length}
              width={74}
              height={32}
              loading="eager"
              className={cn(
                "w-auto shrink-0 object-contain",
                logo.size ?? "h-[18px] px-0.5 desktop:h-8",
                logo.invert && "brightness-0 invert",
              )}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

// 시안(607:23767)의 밋업 프로젝트 커버플로. 데스크톱 기준 값이고 모바일은 0.56배로 줄인다.
// 가운데 카드 257x162(위쪽 정렬), 양옆 카드 0.742·0.558배(180px 줄의 세로 가운데), 가로 간격 ±142.5·±228.3px.
// 기존 MeetupProjectCarousel은 화면 절반을 덮는 fixed 버튼을 써서 탭을 가리므로 이 섹션 전용으로 둔다.
const COVER = {
  width: 257.2,
  height: 162.5,
  rowHeight: 180,
  scale: [1, 0.742, 0.558],
  x: [0, 142.5, 228.3],
  radius: 10.19,
  arrowTop: 73,
} as const;

function MeetupCoverflow({ projects }: { projects: MeetupItem[] }) {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);
  // "동작 줄이기" 설정이면 카드 이동·크기 변화를 애니메이션 없이 바로 바꾼다
  const reduceMotion = useReducedMotion();
  const transition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const };

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  if (projects.length === 0) return null;

  // 모바일 시안(614:11711): 카드·간격 모두 0.558배, 277px 폭 프레임이 바깥 카드를 잘라 3장만 보인다
  const k = isDesktop ? 1 : 0.558;
  const count = projects.length;
  const go = (step: number) => setCurrent((index) => (index + step + count) % count);

  return (
    <div className="relative flex w-full flex-col items-center pt-8 desktop:pt-0">
      <div
        className="relative w-[277px] overflow-hidden desktop:w-full desktop:overflow-visible"
        style={{ height: COVER.rowHeight * k }}
      >
        {/* 카드를 위치가 아니라 프로젝트로 구분해야 같은 카드가 새 자리로 미끄러져 이동한다 */}
        <AnimatePresence initial={false}>
          {[-2, -1, 0, 1, 2].map((offset) => {
            const index = (current + offset + count) % count;
            const project = projects[index];
            const abs = Math.abs(offset) as 0 | 1 | 2;
            const width = COVER.width * COVER.scale[abs] * k;
            const height = COVER.height * COVER.scale[abs] * k;
            const top = abs === 0 ? 0 : (COVER.rowHeight * k) / 2 - height / 2;
            const x = Math.sign(offset) * COVER.x[abs] * k;
            return (
              <motion.button
                key={count >= 5 ? project.meetup_id : `${project.meetup_id}-${offset}`}
                type="button"
                aria-label={offset === 0 ? project.name : `${project.name} 보기`}
                tabIndex={offset === 0 ? -1 : 0}
                onClick={() => offset !== 0 && go(offset)}
                initial={{ opacity: 0, x, width, height, top, marginLeft: -width / 2 }}
                animate={{
                  opacity: 1,
                  x,
                  width,
                  height,
                  top,
                  marginLeft: -width / 2,
                  borderRadius: COVER.radius * k,
                }}
                exit={{ opacity: 0 }}
                transition={transition}
                className="absolute left-1/2 cursor-pointer overflow-hidden"
                style={{ zIndex: 10 - abs }}
              >
                <Image
                  src={project.poster_url}
                  alt=""
                  fill
                  sizes={`${Math.round(COVER.width * k)}px`}
                  className="object-cover select-none"
                  draggable={false}
                />
                <motion.span
                  className="absolute inset-0 bg-white/40 backdrop-blur-[1.6px]"
                  initial={false}
                  animate={{ opacity: abs > 0 ? 1 : 0 }}
                  transition={transition}
                />
              </motion.button>
            );
          })}
        </AnimatePresence>
      </div>
      {/* 화살표: 데스크톱은 패널 바깥 63px·52px, 모바일은 화면 양끝에 24px로 줄여 카드 높이 가운데 */}
      <div
        className="absolute left-0 z-20 origin-left scale-[0.667] desktop:-left-[63px] desktop:scale-100"
        style={{ top: isDesktop ? COVER.arrowTop : 32 + (COVER.rowHeight * k) / 2 - 18 }}
      >
        <PageNavButton
          color="dark"
          direction="prev"
          aria-label="이전 프로젝트"
          onClick={() => go(-1)}
        />
      </div>
      <div
        className="absolute right-0 z-20 origin-right scale-[0.667] desktop:-right-[63px] desktop:scale-100"
        style={{ top: isDesktop ? COVER.arrowTop : 32 + (COVER.rowHeight * k) / 2 - 18 }}
      >
        <PageNavButton
          color="dark"
          direction="next"
          aria-label="다음 프로젝트"
          onClick={() => go(1)}
        />
      </div>
      <div className="mt-[5px] flex gap-[5px] desktop:mt-2.5" aria-hidden>
        {projects.map((project, index) => (
          <span
            key={project.meetup_id}
            className={cn(
              "size-[5px] rounded-full",
              index === current ? "bg-label-alternative" : "bg-label-disable",
            )}
          />
        ))}
      </div>
      <Button // 디자인 시스템 Button은 클래스 충돌을 병합하지 않아 기본 배경(#004bfe)이 이기므로 important로 덮는다
        className="mt-5 bg-[#4279ff]! desktop:py-2.5"
        onClick={() => router.push("/projects/meetup")}
      >
        프로젝트 더보기
      </Button>
    </div>
  );
}

function PhotoLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="absolute top-[73.7%] left-1/2 inline-flex -translate-x-1/2 items-center gap-1 whitespace-nowrap rounded-full border border-[rgba(124,153,253,0.5)] bg-white px-4 py-2 text-label-14sb text-brand-strong drop-shadow-[0_0_5.4px_rgba(168,186,247,0.8)] desktop:gap-3 desktop:px-6 desktop:py-2.5 desktop:text-[18px] desktop:leading-[27px] desktop:drop-shadow-[0_0_9.75px_rgba(168,186,247,0.8)]"
    >
      {children}
      <ArrowRightIcon className="size-5 desktop:size-6" />
    </Link>
  );
}

// 기업 프로젝트 사진은 API(activities의 "기업 연계프로젝트")를 쓰고, 로고 롤링은 시안대로 맞춘 로컬 로고(색 반전·크기 보정 포함)를 쓴다
function CompanyMedia({ activity }: { activity: IntroductionActivity | undefined }) {
  const photos = [activity?.image_url1, activity?.image_url2].filter((src): src is string => !!src);
  return (
    <div className="relative aspect-[600/377] w-full overflow-hidden rounded-[6.7px] desktop:rounded-m">
      <div className="absolute inset-0 flex">
        {photos.map((src) => (
          <div key={src} className="relative h-full flex-1">
            <Image
              src={src}
              alt="기업 프로젝트 활동 사진"
              fill
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
      {photos.length === 0 && <IntroductionMessage message="소개 정보를 준비 중이에요" />}
      <div className="absolute inset-0 bg-linear-to-b from-black from-[15%] to-transparent to-[80%]" />
      <LogoMarquee />
      <PhotoLink href="/projects/corporate">기업 프로젝트 보러가기</PhotoLink>
    </div>
  );
}

// 받은 사진이 배경 있는 일반 사진이라 얼굴 중심 정사각형으로 잘라 원형으로 보여주고,
// 시안의 흑백 톤에 맞춰 CSS로만 흑백 처리한다(원본 색은 파일에 그대로 둔다)
function SpeakerMedia({ speakers }: { speakers: readonly IntroductionLecture[] }) {
  const rows = Array.from({ length: Math.ceil(speakers.length / 4) }, (_, index) =>
    speakers.slice(index * 4, index * 4 + 4),
  );
  if (speakers.length === 0) return <IntroductionMessage message="소개 정보를 준비 중이에요" />;
  return (
    <div className="flex w-full flex-col items-center gap-4 desktop:gap-5">
      {rows.map((row) => (
        <ul key={row[0].id} className="flex justify-center gap-3 desktop:gap-6">
          {row.map((speaker) => (
            <li key={speaker.id} className="flex w-[72px] flex-col items-center desktop:w-[120px]">
              {speaker.image_link && (
                <Image
                  src={speaker.image_link}
                  alt=""
                  width={100}
                  height={100}
                  className="size-16 rounded-full bg-[#e5ecff] object-cover ring-4 ring-[#e5ecff] grayscale desktop:size-[100px]"
                />
              )}
              <p className="mt-2 text-center text-[10px] leading-[14px] font-semibold desktop:mt-2.5 desktop:text-[12px] desktop:leading-4">
                <span className="block text-[#7099ff]">{speaker.corporation}</span>
                <span className="block text-[#474752]">{speaker.name} 연사님</span>
              </p>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}

// OB 초청데이 사진은 API(ob_lecture)가 아직 비어 있어 당분간 프론트 이미지를 쓴다
function ObMedia() {
  return (
    <div className="relative aspect-[335/210] w-full overflow-hidden rounded-[6.7px] desktop:aspect-[600/402] desktop:rounded-m">
      <Image
        src="/main/renewal/inside/ob-day.webp"
        alt="OB 초청데이 커피챗 사진"
        fill
        sizes="(min-width: 1024px) 600px, 100vw"
        className="object-cover object-left-top"
      />
    </div>
  );
}

function ExhibitionMedia({ activities }: { activities: readonly IntroductionActivity[] }) {
  const photos = activities.flatMap((activity) =>
    [activity.image_url1, activity.image_url2]
      .filter((src): src is string => !!src)
      .map((src) => ({
        src,
        alt: `${activity.name} 사진`,
        position: activity.name === "전시회" ? "54% 50%" : "34% 50%",
      })),
  );
  if (photos.length === 0) return <IntroductionMessage message="소개 정보를 준비 중이에요" />;
  return (
    <div className="grid aspect-[600/378] w-full grid-flow-col auto-cols-fr gap-1.5">
      {photos.map((photo) => (
        <div key={photo.src} className="relative overflow-hidden rounded-[6.7px] desktop:rounded-m">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(min-width: 1024px) 300px, 50vw"
            className="object-cover"
            style={{ objectPosition: photo.position }}
          />
        </div>
      ))}
    </div>
  );
}

export default function InsideSection({
  introductions,
  meetupProjects = [],
}: {
  introductions: IntroductionData;
  meetupProjects?: MeetupItem[];
}) {
  const headingId = useId();
  const tabsId = useId();
  const [activeIndex, setActiveIndex] = useState(0);

  // description: 데스크톱 줄바꿈, mobileDescription: 모바일 줄바꿈(없으면 데스크톱과 같음). 시안의 줄바꿈 위치를 그대로 따른다.
  // panelClass: 시안의 슬라이드별 데스크톱 패널 정렬, descGap: 모바일 미디어-설명 간격
  const slides: {
    title: string;
    media: ReactNode;
    description: string;
    mobileDescription?: string;
    panelClass: string;
    descGap?: string;
  }[] = [
    {
      title: "기업 프로젝트",
      media: (
        <CompanyMedia
          activity={introductions.activities.find((item) => item.name === "기업 연계프로젝트")}
        />
      ),
      description:
        "실제 기업이 고민하고 있는 경영 · 마케팅 문제나 개발과 관련된 과제를 받아\n팀별로 아이디어를 제시해 5주간 과제를 수행하는 프로젝트예요",
      panelClass: "desktop:justify-center",
    },
    {
      title: "전문가 초청 강연",
      media: <SpeakerMedia speakers={introductions.expert_lecture} />,
      description:
        "현업에서 활발히 활동 중이신 기획 · 개발 · 디자인 분야의 전문가 및 실무자에게\n직무에 대한 설명과 조언을 들을 수 있는 활동이에요.",
      panelClass: "desktop:justify-between desktop:pt-3.5",
    },
    {
      title: "OB 초청데이",
      media: <ObMedia />,
      description: "큐시즘을 먼저 경험한 OB 선배들과 커피챗을 하며 프로젝트와 실무 조언을 얻어요.",
      mobileDescription:
        "큐시즘을 먼저 경험한 OB 선배들과 커피챗을 하며\n프로젝트와 실무 조언을 얻어요.",
      panelClass: "desktop:justify-center",
    },
    {
      title: "밋업 프로젝트",
      media: <MeetupCoverflow projects={meetupProjects} />,
      description:
        "기획 파트가 발제한 아이디어로 기획·디자인·개발이 한 팀이 되어\n실제 서비스를 만들어요. 큐시즘의 메인 프로젝트예요.",
      panelClass: "desktop:justify-end",
      descGap: "mt-[30px]",
    },
    {
      title: "전시회 · 밋업데이",
      media: (
        <ExhibitionMedia
          activities={introductions.activities.filter(
            (item) => item.name === "전시회" || item.name === "밋업데이",
          )}
        />
      ),
      description:
        "완성한 서비스를 전시회에서 직접 선보이고,\n밋업데이에서 발표하며 한 기수를 마무리해요.",
      panelClass: "desktop:justify-start",
    },
  ];
  const active = slides[activeIndex];
  const total = slides.length;
  const pad = (value: number) => String(value).padStart(2, "0");
  const move = (step: number) => setActiveIndex((index) => (index + step + total) % total);

  return (
    <section aria-labelledby={headingId} className="px-5 py-[100px] desktop:px-0 desktop:py-0">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-9 desktop:gap-12">
        <div className="flex flex-col items-center gap-2.5 pt-[67px] pb-4 text-center">
          <h2
            id={headingId}
            className="bg-[linear-gradient(95deg,#7c9dfd_11.8%,var(--color-brand-primary)_97.2%)] bg-clip-text text-headline-24b text-transparent desktop:text-[32px] desktop:leading-[42px] desktop:tracking-[-0.012em]"
          >
            Inside KUSITMS
          </h2>
          <p className="text-label-14m text-[#18181b] desktop:text-[18px] desktop:leading-[26px]">
            큐시즘의 한 학기, 그 안에서 펼쳐지는 경험들
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-9 desktop:flex-row desktop:items-end desktop:justify-center desktop:gap-[260px]">
          <div
            role="tablist"
            aria-label="큐시즘 활동"
            aria-orientation="vertical"
            className="hidden w-[240px] shrink-0 flex-col gap-[27px] desktop:flex"
          >
            {slides.map((slide, index) => {
              const selected = index === activeIndex;
              return (
                <button
                  key={slide.title}
                  type="button"
                  role="tab"
                  id={`${tabsId}-tab-${index}`}
                  aria-selected={selected}
                  aria-controls={`${tabsId}-panel`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={(event) => {
                    const next = nextTabIndex(event.key, index, slides.length, "vertical");
                    if (next === null) return;
                    event.preventDefault();
                    setActiveIndex(next);
                    document.getElementById(`${tabsId}-tab-${next}`)?.focus();
                  }}
                  className={cn(
                    "flex w-full cursor-pointer items-center justify-between px-3 py-4 text-left text-[24px] leading-9 tracking-[-0.008em] transition-colors",
                    selected
                      ? "border-b-2 border-brand-secondary font-bold text-black"
                      : "font-medium text-label-disable hover:text-label-alternative",
                  )}
                >
                  {slide.title}
                  <KeyboardArrowRightIcon
                    className={cn("size-9", selected ? "text-brand-primary" : "text-label-disable")}
                  />
                </button>
              );
            })}
          </div>

          <div
            id={`${tabsId}-panel`}
            role="tabpanel"
            aria-labelledby={`${tabsId}-tab-${activeIndex}`}
            className={cn(
              "flex w-full max-w-[600px] flex-col items-center desktop:h-[450px] desktop:gap-5",
              active.panelClass,
            )}
          >
            <p className="mb-2.5 text-body-18sb text-black desktop:hidden">{active.title}</p>
            <div className="flex w-full justify-center">{active.media}</div>
            <p
              className={cn(
                "whitespace-pre-line break-keep text-center text-[11px] leading-[13px] tracking-[0.015em] text-label-netural desktop:mt-0 desktop:text-[18px] desktop:leading-[26px] desktop:font-medium desktop:tracking-[-0.005em]",
                active.descGap ?? "mt-3.5",
              )}
            >
              <span className="desktop:hidden">
                {active.mobileDescription ?? active.description}
              </span>
              <span className="hidden desktop:inline">{active.description}</span>
            </p>
          </div>

          <div className="flex items-center gap-2.5 desktop:hidden">
            <button
              type="button"
              aria-label="이전 활동"
              onClick={() => move(-1)}
              className="cursor-pointer text-label-assitive"
            >
              <KeyboardArrowLeftIcon className="size-5" />
            </button>
            <p className="flex gap-2 text-label-14b" aria-live="polite">
              <span className="text-label-netural">{pad(activeIndex + 1)}</span>
              <span className="text-label-disable">/</span>
              <span className="text-label-disable">{pad(total)}</span>
            </p>
            <button
              type="button"
              aria-label="다음 활동"
              onClick={() => move(1)}
              className="cursor-pointer text-label-netural"
            >
              <KeyboardArrowRightIcon className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
