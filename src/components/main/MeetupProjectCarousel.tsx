"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { MeetupItem } from "@/service/projects/getMeetupProjects";

interface MeetupProjectCarouselProps {
  projects: MeetupItem[];
  archiveMode?: boolean;
}

export default function MeetupProjectCarousel({
  projects,
  archiveMode = false,
}: MeetupProjectCarouselProps) {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsTablet(width >= 768 && width < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const BASE_W = isMobile ? 200 : 404;
  const BASE_H = isMobile ? 126 : 255;
  const OVERLAP1 = isMobile ? 50 : -20;
  const OVERLAP2 = isMobile ? 40 : 0;

  const SCALE = { 0: 1, 1: 0.75, 2: 0.6 } as const;
  const BLUR = { 0: 0, 1: 2.5, 2: 2.5 } as const;

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  }, [projects.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  }, [projects.length]);

  const visibleCards = useMemo(() => {
    const res: Array<{ index: number; offset: number }> = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + projects.length) % projects.length;
      res.push({ index, offset: i });
    }
    return res;
  }, [currentIndex, projects.length]);

  const handleCardClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>, offset: number) => {
      if (offset === 0) {
        const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const leftZone = rect.width * 0.3;
        const rightZone = rect.width * 0.7;
        if (clickX < leftZone) handlePrev();
        else if (clickX > rightZone) handleNext();
      } else {
        const targetIndex = (currentIndex + offset + projects.length) % projects.length;
        setCurrentIndex(targetIndex);
      }
    },
    [currentIndex, projects.length, handlePrev, handleNext],
  );

  const firstPos = BASE_W / 2 - OVERLAP1;
  const secondPos = firstPos + (BASE_W * SCALE[1]) / 2 - OVERLAP2;

  const getX = (offset: number) => {
    const abs = Math.abs(offset) as 0 | 1 | 2;
    if (abs === 0) return 0;
    const dir = offset > 0 ? 1 : -1;
    const baseX = abs === 1 ? firstPos : secondPos;
    const tabletScale = isTablet ? 0.7 : 1;
    return dir * baseX * tabletScale;
  };

  const archiveClassName = archiveMode
    ? "desktop:h-[588px] h-[408px] align-center items-end"
    : "mt-[36px] min-[768px]:mt-[54px] min-h-[126px] min-[768px]:min-h-[260px] overflow-visible items-center";

  return (
    <div className="w-full flex flex-col items-center ">
      <div className={`relative w-full flex   ${archiveClassName}`}>
        {archiveMode && (
          <div className="absolute desktop:top-[160px] top-[90px] items-center flex flex-col w-full gap-4">
            <p className="text-title-7 desktop:text-title-5 text-gray-900 font-bold">
              32기 큐시즘 전시회
            </p>
            <p className="text-body-8 desktop:text-body-4 text-gray-500 text-center">
              큐밀리들의 두 달간의 여정,&nbsp;
              <span className="desktop:hidden">
                <br />
              </span>
              밋업프로젝트의 서비스들을 소개합니다.
              <br />
              이번 전시회에서는 아래 서비스들을&nbsp;
              <span className="desktop:hidden">
                <br />
              </span>
              직접 만나보실 수 있어요.
            </p>
          </div>
        )}
        {visibleCards.map(({ index, offset }) => {
          const project = projects[index];
          const abs = Math.abs(offset) as 0 | 1 | 2;

          const scale = SCALE[abs];
          const blur = BLUR[abs];
          const zIndex = 10 - abs;

          const cardW = BASE_W * scale;
          const cardH = BASE_H * scale;

          return (
            <motion.div
              key={`${project.meetup_id}-${index}`}
              animate={{
                x: getX(offset),
                filter: `blur(${blur}px)`,
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute cursor-pointer"
              style={{
                zIndex,
                left: "50%",
                marginLeft: `-${cardW / 2}px`,
                transformOrigin: "center center",
              }}
              onClick={(e) => handleCardClick(e, offset)}
            >
              <div
                className={`relative overflow-hidden shadow ${isMobile ? "rounded-lg" : "rounded-2xl"}`}
                style={{
                  width: cardW,
                  height: cardH,
                }}
              >
                <Image
                  src={project.poster_url}
                  alt={project.name}
                  fill
                  className="object-cover select-none"
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 560px, 404px"
                  draggable={false}
                  priority={abs === 0}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
      <div className="flex items-center justify-center min-[768px]:gap-2 gap-[6px] mt-[12px] min-[768px]:mt-5">
        {projects.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrentIndex(i)}
            className={`transition-all duration-200 rounded-full ${
              i === currentIndex
                ? "w-[6px] h-[6px] min-[768px]:w-2 min-[768px]:h-2 bg-gray-400"
                : "w-[6px] h-[6px] min-[768px]:w-2 min-[768px]:h-2 bg-gray-100"
            }`}
            aria-label={`프로젝트 ${i + 1}로 이동`}
          />
        ))}
      </div>
      {archiveMode === false && (
        <button
          onClick={() => router.push("/projects/meetup")}
          className="cursor-pointer min-w-[148px] mt-7 min-[768px]:mt-8 py-2 px-3 min-[768px]:py-[10px] min-[768px]:px-5 rounded-[20px] bg-dark-blue-500 text-white font-semibold text-body-8 min-[768px]:text-body-3"
        >
          프로젝트 더보기 →
        </button>
      )}
    </div>
  );
}
