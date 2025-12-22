"use client";

import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function IntroSection() {
  const wordVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };
  const sentence = "비전을 가지고 \n 함께 성장하는 학회";
  return (
    <div className="mt-[40px] desktop:mt-[120px] flex flex-col items-center justify-center">
      <section>
        <div className="text-[23px] desktop:text-[72px] font-black text-center leading-tight">
          {sentence.split("").map((char, index) => {
            const delay = index * 0.1;

            return (
              <React.Fragment key={index}>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0.3, 1] }}
                  transition={{
                    duration: 3,
                    delay,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                  }}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>

                {sentence.slice(0, index + 1) === "비전을 가지고" && <br />}
              </React.Fragment>
            );
          })}
        </div>
        <div className="relative mt-[40px]">
          <Image
            className="relative z-10 block desktop:hidden"
            src="/main/MainGroupSticker.svg"
            alt="MainGroupSticker"
            width={328}
            height={129}
            style={{ width: 328, height: 129 }}
          />
          <Image
            className="relative z-10 hidden desktop:block"
            src="/main/MainGroupSticker.svg"
            alt="MainGroupSticker"
            width={1258}
            height={570}
            style={{ width: 1258, height: 570 }}
          />
          <Image
            className="absolute top-6 left-0 z-0 block desktop:hidden"
            src="/main/MainBlueArrow.svg"
            alt="MainBlueArrow"
            width={328}
            height={56}
            style={{ width: 328, height: 56 }}
          />
          <Image
            className="absolute top-20 left-0 z-0 hidden desktop:block"
            src="/main/MainBlueArrow.svg"
            alt="MainBlueArrow"
            width={1430}
            height={246}
            style={{ width: 1430, height: 246 }}
          />
        </div>
      </section>
      <section className="flex flex-col justify-center items-center pt-[58px] desktop:pt-[140px] pb-[73px] desktop:pb-[162px]">
        <div className="flex desktop:gap-x-[370px] items-center">
          <div className="flex flex-col gap-y-[67px] desktop:gap-y-[200px]">
            <p className="flex flex-col text-[23px] desktop:text-[72px] font-bold">
              {["Vision", "Growth", "Together"].map((word, i) => (
                <motion.span
                  key={word}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={wordVariants}
                >
                  {word}
                </motion.span>
              ))}
            </p>
            <p className="text-[14px] desktop:text-[36px]">
              Korean University Students <br />
              IT, Management Society
            </p>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Image
                className="hidden desktop:block"
                src="/main/Logo.svg"
                alt="Logo"
                width={400}
                height={278}
                style={{ width: 400, height: 278 }}
              />
              <Image
                className="block desktop:hidden"
                src="/main/Logo.svg"
                alt="Logo"
                width={134}
                height={93}
                style={{ width: 134, height: 93 }}
              />
            </motion.div>
            <p className="absolute top-10 text-[#F2F2F8] text-[46px] desktop:text-[170px] opacity-5 transform rotate-270 inline-block">
              KUSITMS
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
