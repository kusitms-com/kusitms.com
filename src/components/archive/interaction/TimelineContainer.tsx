"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function TimelineContainer({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
  });

  const snowflakeY = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ["0%", "20%", "45%", "70%", "99%"],
  );
  return (
    <div ref={containerRef} className="relative max-w-[1024px] mx-auto desktop:pt-[248px]">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full desktop:block hidden">
        <motion.div
          aria-hidden
          className="absolute w-full overflow-hidden"
          style={{ height: snowflakeY }}
        >
          <div className="w-full h-full line-dash-passed" />
        </motion.div>
        <motion.div aria-hidden className="absolute w-full bottom-0" style={{ top: snowflakeY }}>
          <div className="w-full h-full bg-gray-50" />
        </motion.div>
      </div>
      <motion.div
        aria-hidden
        className="desktop:block absolute left-1/2 -translate-x-1/2 pointer-events-none flex items-center justify-center w-[48px]"
        style={{ top: snowflakeY }}
      >
        <div className="absolute w-[80px] h-[80px] rounded-full blur-[14px] bg-[rgba(158,231,255,0.18)]" />
        <Image src="/display/snowflake_2.svg" alt="snowflake" width={32} height={35} />
      </motion.div>

      <div className="max-w-[1024px] mx-auto">{children}</div>
    </div>
  );
}
