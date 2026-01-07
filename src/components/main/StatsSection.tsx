"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function StatsSection() {
  const statData = [
    {
      end: 1409,
      suffix: "명",
      label: "누적 회원 수",
      delay: 0,
    },
    {
      end: 230,
      suffix: "개",
      label: "프로젝트 결과물",
      delay: 0.3,
    },
    {
      end: 100,
      suffix: "개",
      label: "참여 대학 수",
      delay: 0.6,
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
      <div className="flex flex-col gap-y-[24px] desktop:gap-y-[40px] items-center justify-center absolute top-0 w-full desktop:h-[447px] h-[308px]">
        <div className="desktop:text-title-7 text-body-6 text-white">Since 2009</div>
        <div className="flex gap-0 tablet:gap-12 desktop:gap-0">
          {statData.map(({ end, suffix, label, delay }) => (
            <StatItem
              key={label}
              end={end}
              suffix={suffix}
              label={label}
              delay={delay}
              startCount={startCount}
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
    className="flex flex-col items-center justify-center text-white w-[96px] desktop:w-[315px]"
  >
    <div className="mb-[-2px] h-[8px] w-[8px] desktop:w-[12px] desktop:h-[12px] rounded-full bg-white" />
    <div className="text-title-7 desktop:text-title-2 font-extrabold">
      {startCount ? <CountUp end={end} duration={2} delay={delay} /> : 0}
      {suffix}
    </div>
    <div className="text-body-9 desktop:text-body-6 text-gray-200">{label}</div>
  </motion.div>
);
