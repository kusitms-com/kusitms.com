"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function StatsSection() {
  const statData = [
    {
      end: 1409,
      suffix: "명",
      label: "누적 회원 수",
      delay: 0,
      width: "w-[90px] desktop:w-[372px]",
    },
    {
      end: 230,
      suffix: "개",
      label: "프로젝트 결과물",
      delay: 0.3,
      width: "w-[90px] desktop:w-[400px]",
    },
    {
      end: 100,
      suffix: "개",
      label: "참여 대학 수",
      delay: 0.6,
      width: "w-[90px] desktop:w-[372px]",
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setStartCount(true), 300);
      return () => clearTimeout(timer);
    }
  }, [inView]);

  return (
    <div className="relative" ref={ref}>
      <Image
          className="block desktop:hidden"
          src="/main/img/Special_Lecture_by_Expert_1.png"
          alt="Special_Lecture_by_Expert_1"
          width={375}
          height={229}
          priority
          style={{ width: 375, height: 229 }}
      />
      <Image
          className="hidden desktop:block"
          src="/main/img/Special_Lecture_by_Expert_1.png"
          alt="Special_Lecture_by_Expert_1"
          width={1920}
          height={447}
          priority
          style={{ width: 1920, height: 447 }}
      />
      <div className="flex flex-col gap-y-[45px] desktop:gap-y-[88px] items-center justify-center absolute top-0 bg-[#0055FF]/80 w-full h-[229px] desktop:h-[447px]">
        <div className="text-[16px] desktop:text-[24px] text-white">Since 2009</div>
        <div className="flex gap-x-[30px] desktop:gap-x-[50px] desktop:gap-x-[80px]">
          {statData.map(({ end, suffix, label, delay, width }) => (
            <StatItem
              key={label}
              end={end}
              suffix={suffix}
              label={label}
              delay={delay}
              startCount={startCount}
              width={width}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const StatItem = ({
  end,
  suffix,
  label,
  delay,
  startCount,
  width,
}: {
  end: number;
  suffix: string;
  label: string;
  delay: number;
  startCount: boolean;
  width?: string;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6, delay }}
    className={`flex flex-col items-center justify-center gap-y-[11px] desktop:gap-y-[14px] desktop:gap-y-6 text-white ${
      width ? width : " desktop:w-[372px]"
    }`}
  >
    <div className="h-[5px] w-[5px] desktop:w-[11px] desktop:h-[11px] rounded-full bg-white" />
    <div className="text-[24px] desktop:text-[60px] font-bold">
      {startCount ? <CountUp end={end} duration={2} delay={delay} /> : 0}
      {suffix}
    </div>
    <div className="text-[13px] desktop:text-[16px] text-[#DCE1FF]">{label}</div>
  </motion.div>
);
