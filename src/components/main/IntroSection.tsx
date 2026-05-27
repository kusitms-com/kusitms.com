"use client";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const ASSET_MOTION = {
  duration: 7,
  repeat: Infinity,
  ease: "easeInOut" as const,
};

const FLOAT_Y = [0, -12, 0];

export default function IntroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="relative w-full desktop:mt-[74px] overflow-hidden bg-[#d9e7ff]"
      aria-label="KUSITMS 33rd Want It One, One IT One banner"
    >
      <motion.div
        className="relative h-[260px] tablet:h-[420px] desktop:h-[min(41.67vw,720px)] min-[1728px]:h-[720px] overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(69deg, #ffffff 8.7%, #e3e5ff 19.3%, #ffffff 55.3%, #91a9ca 106.9%)",
        }}
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Image
          src="/main/img/banner/layers/wave-line.svg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-70 mix-blend-overlay"
        />

        <motion.div
          aria-hidden="true"
          className="absolute left-[-3%] top-[-18%] w-[34%] min-w-[220px] max-w-[650px]"
          animate={shouldReduceMotion ? undefined : { y: FLOAT_Y, rotate: [-2, 1.5, -2] }}
          transition={{ ...ASSET_MOTION, delay: 0.2 }}
        >
          <Image
            src="/main/img/banner/layers/glass-left.png"
            alt=""
            width={980}
            height={1116}
            priority
            className="h-auto w-full"
          />
        </motion.div>

        <motion.div
          aria-hidden="true"
          className="absolute left-[2%] bottom-0 w-[28%] min-w-[170px] max-w-[500px]"
          animate={shouldReduceMotion ? undefined : { y: [0, -10, 0], x: [0, -6, 0] }}
          transition={{ ...ASSET_MOTION, duration: 8.5, delay: 0.8 }}
        >
          <Image
            src="/main/img/banner/layers/glass-left-blur.png"
            alt=""
            width={1000}
            height={693}
            className="h-auto w-full"
          />
        </motion.div>

        <motion.div
          aria-hidden="true"
          className="absolute right-[-8%] bottom-[-20%] w-[34%] min-w-[260px] max-w-[700px]"
          animate={shouldReduceMotion ? undefined : { y: [0, -16, 0], rotate: [0, -1.4, 0] }}
          transition={{ ...ASSET_MOTION, duration: 7.8, delay: 0.4 }}
        >
          <Image
            src="/main/img/banner/layers/glass-right.png"
            alt=""
            width={994}
            height={983}
            priority
            className="h-auto w-full"
          />
        </motion.div>

        <motion.div
          aria-hidden="true"
          className="absolute right-[-1%] top-[-6%] w-[22%] min-w-[170px] max-w-[420px]"
          animate={shouldReduceMotion ? undefined : { y: [0, 12, 0], rotate: [0, 2.2, 0] }}
          transition={{ ...ASSET_MOTION, duration: 8.2, delay: 1 }}
        >
          <Image
            src="/main/img/banner/layers/glass-top-right.png"
            alt=""
            width={612}
            height={430}
            className="h-auto w-full"
          />
        </motion.div>

        <div className="absolute inset-x-0 top-[7%] hidden grid-cols-3 px-[12%] font-[family-name:var(--font-outfit)] text-[10px] font-medium uppercase leading-[1.4] text-[#2f40ff] tablet:grid desktop:text-[clamp(11px,0.86vw,28px)]">
          <p className="text-center">Planner, Designer, Developer</p>
          <p className="text-center capitalize">33rd Concept</p>
          <p className="text-center">
            Korean University Students
            <br />
            It, Management Society
          </p>
        </div>

        <div className="absolute inset-x-0 top-[36%] z-10 flex -translate-y-1/2 flex-col items-center gap-[12px] px-4 font-[family-name:var(--font-outfit)] font-medium leading-none text-[#2f40ff] drop-shadow-[0_0_12.5px_rgba(143,124,255,0.15)] tablet:gap-[24px] desktop:gap-[min(1.82vw,59px)]">
          <p className="text-[clamp(28px,3.09vw,100px)]">KUSITMS 33rd</p>
          <p className="whitespace-nowrap text-center text-[clamp(26px,8vw,34px)] tablet:text-[clamp(42px,5.86vw,190px)]">
            Want It One, One IT One
          </p>
        </div>

        <Image
          src="/main/img/banner/layers/kusitms-logo.svg"
          alt="KUSITMS"
          width={305}
          height={56}
          className="absolute bottom-[5.5%] left-1/2 z-10 h-auto w-[96px] -translate-x-1/2 tablet:w-[126px] desktop:w-[min(9.4vw,152px)]"
        />
      </motion.div>
    </section>
  );
}
