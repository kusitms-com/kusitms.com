"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const BACKGROUND_GRADIENT =
  "radial-gradient(118.65% 100.42% at 0% 0%, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0.00) 100%), linear-gradient(129deg, rgba(70, 136, 254, 0.00) 44.57%, rgba(70, 136, 254, 0.20) 100%), linear-gradient(104deg, #EAF9FF 23.85%, #99DEFF 100%), #FFF";
const OUTFIT_FONT = "font-[family-name:var(--font-outfit)]";
const OUTLINE_TEXT_BASE = `${OUTFIT_FONT} text-[#006AFF] leading-[100%] -tracking-[1.36px] font-medium`;

export default function IntroSection() {
  return (
    <div
      className="relative w-full h-[400px] tablet:h-[808px] desktop:mt-[74px] overflow-hidden"
      style={{ background: BACKGROUND_GRADIENT }}
    >
      <div className="max-[767px]:block tablet:hidden relative z-10 flex flex-col items-center justify-center h-full">
        <div className="flex flex-col px-9">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              y: {
                duration: 2,
                ease: "easeInOut",
              },
              opacity: {
                duration: 2,
                ease: "easeInOut",
              },
            }}
            className="flex flex-col gap-1 mt-8"
          >
            <p className={`${OUTLINE_TEXT_BASE} text-[18px]`}>KUSITMS 32nd</p>
            <div className="flex items-center gap-x-2">
              <p className={`${OUTLINE_TEXT_BASE} text-[28px]`}>More it, MORE IT</p>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  rotate: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                <Image src="/main/Snow.svg" alt="Snow" width={20} height={20} />
              </motion.div>
            </div>
          </motion.div>
          <motion.p
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              y: {
                duration: 2,
                ease: "easeInOut",
              },
              opacity: {
                duration: 2,
                ease: "easeInOut",
              },
            }}
            className="text-body-8 text-[#006AFF] pt-6"
          >
            Korean University Students
            <br />
            It, Management Society
          </motion.p>
        </div>
      </div>
      <div className="hidden tablet:block">
        <motion.p
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            y: {
              duration: 2,
              ease: "easeInOut",
            },
            opacity: {
              duration: 2,
              ease: "easeInOut",
            },
          }}
          className="absolute z-10 top-[72px] right-[75px] text-body-6 text-[#0077FF] text-right"
        >
          Korean University Students
          <br />
          It, Management Society
        </motion.p>
        <motion.div
          className="absolute z-10 top-[72px] left-[84px] space-y-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            y: {
              duration: 2,
              ease: "easeInOut",
            },
            opacity: {
              duration: 2,
              ease: "easeInOut",
            },
          }}
        >
          <div>
            <p className={`${OUTLINE_TEXT_BASE} text-[42px]`}>KUSITMS 32nd</p>
            <div className="flex items-center gap-x-9">
              <p className={`${OUTLINE_TEXT_BASE} text-[68px]`}>More it, MORE IT</p>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  rotate: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                <Image src="/main/Snow.svg" alt="Snow" width={54} height={59} />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          y: {
            duration: 2.2,
            ease: "easeOut",
          },
          opacity: {
            duration: 2.2,
            ease: "easeOut",
          },
        }}
      >
        <motion.div
          className="absolute inset-0"
          animate={{ y: [0, -20, 0] }}
          transition={{
            y: {
              duration: 4,
              repeat: 3,
              ease: "easeInOut",
              delay: 2.2,
            },
          }}
        >
          <div className="absolute inset-0 max-[767px]:top-[-60px] max-[767px]:bottom-0 tablet:inset-0">
            <Image
              src="/main/img/Main_Graphic.png"
              alt="Main Graphic"
              fill
              className="object-cover max-[767px]:translate-y-[60px] max-[767px]:object-[60%_120%] tablet:translate-y-0 tablet:object-center"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
