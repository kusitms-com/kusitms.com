"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useScrollDetection } from "@/hooks";

interface DesktopTeamCardProps {
  mainIcon: string;
  bgIcon: string;
  mainIconWidth: number;
  mainIconHeight: number;
  bgIconWidth: number;
  bgIconHeight: number;
  title: string;
  subtitle: string;
  delay?: number;
  description?: string;
  active: boolean;
  onActivate: () => void;
  onDeactivate: () => void;
}

interface MobileTeamCardProps {
  mainIcon: string;
  bgIcon: string;
  mainIconWidthMobile: number;
  mainIconHeightMobile: number;
  bgIconWidthMobile: number;
  bgIconHeightMobile: number;
  title: string;
  subtitle: string;
  descriptionMobile?: string;
  index: number;
  isExpanded: boolean;
  onExpand: (idx: number) => void;
  onCollapse: () => void;
}

interface TabletCardProps {
  mainIcon: string;
  bgIcon: string;
  mainIconWidthMobile: number;
  mainIconHeightMobile: number;
  bgIconWidthMobile: number;
  bgIconHeightMobile: number;
  title: string;
  subtitle: string;
  descriptionMobile?: string;
  index: number;
  tabletExpandedRow: number | null;
  onTabletRowExpand: (row: number) => void;
  onTabletRowCollapse: () => void;
}

// 데스크탑 카드 컴포넌트
export function DesktopTeamCard({
  mainIcon,
  bgIcon,
  mainIconWidth,
  mainIconHeight,
  bgIconWidth,
  bgIconHeight,
  title,
  subtitle,
  delay,
  description,
  active,
  onActivate,
  onDeactivate,
}: DesktopTeamCardProps) {
  const baseWidth = 224;
  const expandedWidth = baseWidth * 2;

  return (
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
      className="relative flex-shrink-0 overflow-visible cursor-pointer h-[317.692px] [will-change:width,transform]"
    >
      <div className="relative w-full h-full px-[18.1px] py-[13.6px] bg-sky-50 overflow-hidden rounded-[9px] border-2 border-[#F0F4FF] shadow-[0px_4px_10px_0px_rgba(121,212,255,0.20)]">
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
              <span className="text-dark-blue-500 text-[22.7px] font-semibold leading-none">
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
  );
}

// 모바일 카드 컴포넌트
export function MobileTeamCard({
  mainIcon,
  bgIcon,
  mainIconWidthMobile,
  mainIconHeightMobile,
  bgIconWidthMobile,
  bgIconHeightMobile,
  title,
  subtitle,
  descriptionMobile,
  index,
  isExpanded,
  onExpand,
  onCollapse,
}: MobileTeamCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "0px 0px -20% 0px" });
  const isScrolling = useScrollDetection(
    typeof window !== "undefined" && window.innerWidth < 768,
    5,
    "both",
  );

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth >= 768) {
      return;
    }
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
      initial={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative w-[224px] overflow-visible"
      animate={{
        height: isExpanded ? 208 : 162,
      }}
      transition={{
        height: { duration: 0.4, ease: "easeInOut" },
      }}
    >
      <div className="relative w-full h-full px-[18.1px] py-[13.6px] bg-sky-50 overflow-hidden rounded-[9px] border-2 border-[#F0F4FF] shadow-[0px_4px_10px_0px_rgba(121,212,255,0.20)]">
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
          className="relative z-10 mt-[50px] overflow-hidden"
          initial={false}
          animate={{
            opacity: isExpanded ? 1 : 0,
            height: isExpanded ? "auto" : 0,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <p className="ml-[29px] text-body-9 text-gray-600 whitespace-pre-line">
            {descriptionMobile}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

// 태블릿 카드 컴포넌트
export function TabletTeamCard({
  mainIcon,
  bgIcon,
  mainIconWidthMobile,
  mainIconHeightMobile,
  bgIconWidthMobile,
  bgIconHeightMobile,
  title,
  subtitle,
  descriptionMobile,
  index,
  tabletExpandedRow,
  onTabletRowExpand,
  onTabletRowCollapse,
}: TabletCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "0px 0px -20% 0px" });
  const row = Math.floor(index / 2);
  const isExpanded = tabletExpandedRow === row;
  const isScrolling = useScrollDetection(
    typeof window !== "undefined" && window.innerWidth >= 768 && window.innerWidth < 1024,
    10,
    "up",
  );

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
      initial={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative w-[224px] overflow-visible"
      animate={{
        height: isExpanded ? 208 : 162,
      }}
      transition={{
        height: { duration: 0.4, ease: "easeInOut" },
      }}
    >
      <div className="relative w-full h-full px-[18.1px] py-[13.6px] bg-sky-50 overflow-hidden rounded-[9px] border-2 border-[#F0F4FF] shadow-[0px_4px_10px_0px_rgba(121,212,255,0.20)]">
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
          className="relative z-10 mt-[50px] overflow-hidden"
          initial={false}
          animate={{
            opacity: isExpanded ? 1 : 0,
            height: isExpanded ? "auto" : 0,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <p className="ml-[29px] text-body-9 text-gray-600 whitespace-pre-line">
            {descriptionMobile}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
