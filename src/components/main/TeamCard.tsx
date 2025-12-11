"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { TeamItem } from "@/constants/teamData";

export default function TeamCard({
  mainIcon,
  bgIcon,
  mainIconWidth,
  mainIconHeight,
  mainIconWidthMobile,
  mainIconHeightMobile,
  bgIconWidth,
  bgIconHeight,
  bgIconWidthMobile,
  bgIconHeightMobile,
  title,
  subtitle,
  delay,
  description,
  descriptionMobile,
  active,
  onActivate,
  onDeactivate,
  index,
  mobileExpanded,
  onMobileExpand,
  onMobileCollapse,
  tabletExpandedRow,
  onTabletRowExpand,
  onTabletRowCollapse,
}: TeamItem & {
  active: boolean;
  onActivate: () => void;
  onDeactivate: () => void;
  index: number;
  mobileExpanded: number | null;
  onMobileExpand: (idx: number) => void;
  onMobileCollapse: () => void;
  tabletExpandedRow: number | null;
  onTabletRowExpand: (row: number) => void;
  onTabletRowCollapse: () => void;
}) {
  const baseWidth = 224;
  const expandedWidth = baseWidth * 2;

  return (
    <>
      <motion.div
        onMouseEnter={onActivate}
        onMouseLeave={onDeactivate}
        onClick={() => (active ? onDeactivate() : onActivate())}
        initial={{ opacity: 0, y: 20, width: baseWidth }}
        whileInView={{ opacity: 1, y: 0 }}
        animate={{ width: active ? expandedWidth : baseWidth, height: 317.692 }}
        transition={{
          opacity: { duration: 0.7, ease: "easeOut", delay: delay || 0 },
          y: { duration: 0.7, ease: "easeOut", delay: delay || 0 },
          width: { type: "spring", stiffness: 180, damping: 22, mass: 0.9 },
          height: { type: "spring", stiffness: 180, damping: 22, mass: 0.9 },
        }}
        viewport={{ once: true }}
        className="hidden desktop:block relative flex-shrink-0 overflow-visible cursor-pointer h-[317.692px] [will-change:width,transform]"
      >
        <div className="relative w-full h-full px-[18.1px] py-[13.6px] bg-sky-50 overflow-hidden rounded-[9.077px] border-2 border-[#F0F4FF] shadow-[0px_4px_10px_0px_rgba(121,212,255,0.20)]">
          <motion.div
            className="absolute top-0 left-0"
            animate={{
              scale: active ? 1.5 : 1,
              x: active ? 10 : 0,
              y: active ? 10 : 0,
              opacity: 1,
            }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          >
            <Image
              src={bgIcon}
              alt={title}
              width={bgIconWidth}
              height={bgIconHeight}
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="relative z-10 pr-2">
            <div className="flex flex-col gap-[8px]">
              <div className="flex items-baseline gap-2">
                <span className="text-dark-blue-500 text-[22.692px] font-semibold leading-none">
                  {title.split(" ")[0]}
                </span>
                <div>
                  <span className="text-gray-900 text-[27.2px] font-semibold leading-none">
                    {title.split(" ")[1]}
                  </span>
                  <p className="text-[15.88px] font-semibold text-gray-600">{subtitle}</p>
                </div>
              </div>
            </div>
          </div>
          <motion.div
            className={`absolute ${title.includes("Backend") ? "right-[-30px] bottom-[35px]" : "right-[-45px]"}`}
            animate={{
              scale: active ? 1.3 : 1,
              rotate: active ? 28 : 0,
              x: active ? -40 : 0,
              y: active ? -10 : 0,
            }}
            transition={{ type: "spring", stiffness: 180, damping: 22, mass: 0.9 }}
          >
            <Image src={mainIcon} alt={title} width={mainIconWidth} height={mainIconHeight} />
          </motion.div>
          <motion.div
            className="absolute left-[53px] bottom-[33px]"
            initial={false}
            animate={{ opacity: active ? 1 : 0 }}
            transition={{ duration: 0.25 }}
          >
            <p className="text-body-6 text-gray-600 leading-5 whitespace-pre-line">{description}</p>
          </motion.div>
        </div>
      </motion.div>
      {/* Mobile Card (scroll-based, 767px 미만) */}
      <MobileTeamCard
        mainIcon={mainIcon}
        bgIcon={bgIcon}
        mainIconWidthMobile={mainIconWidthMobile}
        mainIconHeightMobile={mainIconHeightMobile}
        bgIconWidthMobile={bgIconWidthMobile}
        bgIconHeightMobile={bgIconHeightMobile}
        title={title}
        subtitle={subtitle}
        description={description}
        descriptionMobile={descriptionMobile}
        delay={delay}
        index={index}
        isExpanded={mobileExpanded === index}
        onExpand={onMobileExpand}
        onCollapse={onMobileCollapse}
      />
      {/* Tablet Card (hover/click-based, 768px ~ 1023px) */}
      <TabletTeamCard
        mainIcon={mainIcon}
        bgIcon={bgIcon}
        mainIconWidthMobile={mainIconWidthMobile}
        mainIconHeightMobile={mainIconHeightMobile}
        bgIconWidthMobile={bgIconWidthMobile}
        bgIconHeightMobile={bgIconHeightMobile}
        title={title}
        subtitle={subtitle}
        description={description}
        descriptionMobile={descriptionMobile}
        delay={delay}
        index={index}
        tabletExpandedRow={tabletExpandedRow}
        onTabletRowExpand={onTabletRowExpand}
        onTabletRowCollapse={onTabletRowCollapse}
      />
    </>
  );
}

function MobileTeamCard({
  mainIcon,
  bgIcon,
  mainIconWidthMobile,
  mainIconHeightMobile,
  bgIconWidthMobile,
  bgIconHeightMobile,
  title,
  subtitle,
  descriptionMobile,
  delay,
  index,
  isExpanded,
  onExpand,
  onCollapse,
}: {
  mainIcon: string;
  bgIcon: string;
  mainIconWidthMobile: number;
  mainIconHeightMobile: number;
  bgIconWidthMobile: number;
  bgIconHeightMobile: number;
  title: string;
  subtitle: string;
  description?: string;
  descriptionMobile?: string;
  delay?: number;
  index: number;
  isExpanded: boolean;
  onExpand: (idx: number) => void;
  onCollapse: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "0px 0px -20% 0px" });
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    // Only work on mobile (below 768px)
    if (typeof window !== "undefined" && window.innerWidth >= 768) {
      return;
    }

    let scrollTimer: NodeJS.Timeout;
    let lastScrollTop = window.scrollY;
    let rafId: number | null = null;

    const handleScroll = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      rafId = requestAnimationFrame(() => {
        const currentScrollTop = window.scrollY;
        const scrollDelta = Math.abs(currentScrollTop - lastScrollTop);

        // 빠르게 스크롤할 때만 비활성화 (스크롤 속도가 5px 이상일 때)
        if (scrollDelta > 5) {
          setIsScrolling(true);
          clearTimeout(scrollTimer);
          scrollTimer = setTimeout(() => {
            setIsScrolling(false);
          }, 100);
        } else {
          // 느리게 스크롤하거나 멈췄을 때는 바로 활성화
          setIsScrolling(false);
        }

        lastScrollTop = currentScrollTop;
        rafId = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      clearTimeout(scrollTimer);
    };
  }, []);

  useEffect(() => {
    // Only work on mobile (below 768px)
    if (typeof window !== "undefined" && window.innerWidth >= 768) {
      return;
    }
    // 스크롤 중일 때는 상태 변경하지 않음
    if (isScrolling) {
      return;
    }
    if (isInView) {
      onExpand(index);
    } else if (isExpanded) {
      onCollapse();
    }
  }, [isInView, index, isExpanded, onExpand, onCollapse, isScrolling]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-[767px]:block min-[768px]:hidden relative w-[224px] overflow-visible"
      animate={{
        height: isExpanded ? 208 : 162,
      }}
      transition={{
        opacity: { duration: 0.7, ease: "easeOut", delay: delay || 0 },
        y: { duration: 0.7, ease: "easeOut", delay: delay || 0 },
        height: { duration: 0.4, ease: "easeInOut" },
      }}
    >
      <div className="relative w-full h-full px-[18.1px] py-[13.6px] bg-sky-50 overflow-hidden rounded-[9.077px] border-2 border-[#F0F4FF] shadow-[0px_4px_10px_0px_rgba(121,212,255,0.20)]">
        <motion.div
          className="absolute top-0 left-0"
          animate={{
            scale: isExpanded ? 1.2 : 1,
            opacity: isExpanded ? 0.3 : 1,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <Image src={bgIcon} alt={title} width={bgIconWidthMobile} height={bgIconHeightMobile} />
        </motion.div>
        <div className="relative z-10 pr-2">
          <div className="flex flex-col gap-[8px]">
            <div className="flex items-baseline gap-2">
              <span className="text-dark-blue-500 text-body-3 leading-none">
                {title.split(" ")[0]}
              </span>
              <div>
                <span className="text-gray-900 text-body-3 leading-none">
                  {title.split(" ")[1]}
                </span>
                <p className="text-body-10 text-gray-600">{subtitle}</p>
              </div>
            </div>
          </div>
        </div>
        <motion.div
          className={`absolute ${title.includes("Backend") ? "right-[-10px] bottom-[-15px]" : "bottom-[-30px] right-[-20px]"}`}
          animate={{
            scale: isExpanded ? 1.2 : 1,
            opacity: isExpanded ? 0.1 : 1,
            rotate: isExpanded ? 15 : 0,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <Image
            src={mainIcon}
            alt={title}
            width={mainIconWidthMobile}
            height={mainIconHeightMobile}
          />
        </motion.div>
        <motion.div
          className="relative z-10 mt-[50px]"
          initial={false}
          animate={{
            opacity: isExpanded ? 1 : 0,
            height: isExpanded ? "auto" : 0,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          style={{ overflow: "hidden" }}
        >
          <p className="ml-[29px] text-body-9 text-gray-600 whitespace-pre-line">
            {descriptionMobile}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

function TabletTeamCard({
  mainIcon,
  bgIcon,
  mainIconWidthMobile,
  mainIconHeightMobile,
  bgIconWidthMobile,
  bgIconHeightMobile,
  title,
  subtitle,
  description,
  descriptionMobile,
  delay,
  index,
  tabletExpandedRow,
  onTabletRowExpand,
  onTabletRowCollapse,
}: {
  mainIcon: string;
  bgIcon: string;
  mainIconWidthMobile: number;
  mainIconHeightMobile: number;
  bgIconWidthMobile: number;
  bgIconHeightMobile: number;
  title: string;
  subtitle: string;
  description?: string;
  descriptionMobile?: string;
  delay?: number;
  index: number;
  tabletExpandedRow: number | null;
  onTabletRowExpand: (row: number) => void;
  onTabletRowCollapse: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "0px 0px -20% 0px" });
  const row = Math.floor(index / 2); // 태블릿은 2x2 그리드이므로 줄 번호 계산
  const isExpanded = tabletExpandedRow === row;
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      if (width < 768 || width >= 1024) {
        return;
      }

      let scrollTimer: NodeJS.Timeout;
      let lastScrollTop = window.scrollY;
      let rafId: number | null = null;

      const handleScroll = () => {
        if (rafId) {
          cancelAnimationFrame(rafId);
        }

        rafId = requestAnimationFrame(() => {
          const currentScrollTop = window.scrollY;
          const scrollDelta = currentScrollTop - lastScrollTop;
          const scrollSpeed = Math.abs(scrollDelta);

          // 빠르게 위로 스크롤할 때만 비활성화 (스크롤 속도가 10px 이상이고 위로 스크롤할 때)
          if (scrollSpeed > 10 && scrollDelta < 0) {
            setIsScrolling(true);
            clearTimeout(scrollTimer);
            scrollTimer = setTimeout(() => {
              setIsScrolling(false);
            }, 150);
          } else if (scrollSpeed <= 10) {
            // 느리게 스크롤하거나 멈췄을 때는 바로 활성화
            setIsScrolling(false);
          }

          lastScrollTop = currentScrollTop;
          rafId = null;
        });
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => {
        window.removeEventListener("scroll", handleScroll);
        if (rafId) {
          cancelAnimationFrame(rafId);
        }
        clearTimeout(scrollTimer);
      };
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      if (width < 768 || width >= 1024) {
        return;
      }
    }
    if (isScrolling) {
      return;
    }
    if (isInView && index % 2 === 0) {
      onTabletRowExpand(row);
    } else if (!isInView && tabletExpandedRow === row) {
      onTabletRowCollapse();
    }
  }, [
    isInView,
    index,
    row,
    tabletExpandedRow,
    onTabletRowExpand,
    onTabletRowCollapse,
    isScrolling,
  ]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="hidden min-[768px]:block desktop:hidden relative w-[224px] overflow-visible"
      animate={{
        height: isExpanded ? 208 : 162,
      }}
      transition={{
        opacity: { duration: 0.7, ease: "easeOut", delay: delay || 0 },
        y: { duration: 0.7, ease: "easeOut", delay: delay || 0 },
        height: { duration: 0.4, ease: "easeInOut" },
      }}
    >
      <div className="relative w-full h-full px-[18.1px] py-[13.6px] bg-sky-50 overflow-hidden rounded-[9.077px] border-2 border-[#F0F4FF] shadow-[0px_4px_10px_0px_rgba(121,212,255,0.20)]">
        <motion.div
          className="absolute top-0 left-0"
          animate={{
            scale: isExpanded ? 1.2 : 1,
            opacity: isExpanded ? 0.3 : 1,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <Image src={bgIcon} alt={title} width={bgIconWidthMobile} height={bgIconHeightMobile} />
        </motion.div>
        <div className="relative z-10 pr-2">
          <div className="flex flex-col gap-[8px]">
            <div className="flex items-baseline gap-2">
              <span className="text-dark-blue-500 text-body-3 leading-none">
                {title.split(" ")[0]}
              </span>
              <div>
                <span className="text-gray-900 text-body-3 leading-none">
                  {title.split(" ")[1]}
                </span>
                <p className="text-body-10 text-gray-600">{subtitle}</p>
              </div>
            </div>
          </div>
        </div>
        <motion.div
          className={`absolute ${title.includes("Backend") ? "right-[-10px] bottom-[-15px]" : "bottom-[-30px] right-[-20px]"}`}
          animate={{
            scale: isExpanded ? 1.2 : 1,
            opacity: isExpanded ? 0.1 : 1,
            rotate: isExpanded ? 15 : 0,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <Image
            src={mainIcon}
            alt={title}
            width={mainIconWidthMobile}
            height={mainIconHeightMobile}
          />
        </motion.div>
        <motion.div
          className="relative z-10 mt-[50px]"
          initial={false}
          animate={{
            opacity: isExpanded ? 1 : 0,
            height: isExpanded ? "auto" : 0,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          style={{ overflow: "hidden" }}
        >
          <p className="ml-[29px] text-body-9 text-gray-600 whitespace-pre-line">
            {descriptionMobile || description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
