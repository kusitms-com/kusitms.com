"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
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
    <div className="relative w-full" ref={ref}>
      <div className="relative w-full h-[308px] desktop:h-[447px]">
        <Image
          src="/main/img/Background.png"
          alt="Special_Lecture_by_Expert_1"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="flex flex-col gap-y-[24px] desktop:gap-y-[88px] items-center justify-center absolute top-0 w-full h-[308px] desktop:h-[447px]">
        <div className="text-body-6 text-white">Since 2009</div>
        <div className="flex gap-0 tablet:gap-12 desktop:gap-0">
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
    className={`flex flex-col items-center justify-center desktop:gap-y-[14px] desktop:gap-y-6 text-white ${
      width ? width : " desktop:w-[372px]"
    }`}
  >
    <div className="h-[8px] w-[8px] desktop:w-[11px] desktop:h-[11px] rounded-full bg-white" />
    <div className="mt-[2px] text-title-7 desktop:text-[60px] font-bold">
      {startCount ? <CountUp end={end} duration={2} delay={delay} /> : 0}
      {suffix}
    </div>
    <div className="mt-1 text-body-9 desktop:text-[16px] text-[#DCE1FF]">{label}</div>
  </motion.div>
);
