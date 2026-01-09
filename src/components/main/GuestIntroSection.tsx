"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GUEST_DATA } from "@/constants/guestData";

export default function GuestIntroSection() {
  return (
    <div className="max-w-[1024px] px-4 mx-auto pb-[120px] tablet:pb-[200px] pt-4 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col justify-center items-center"
      >
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-title-7 tablet:text-title-5 text-gray-900 font-semibold">
            전문가 초청 강연
          </h1>
          <p className="text-body-8 tablet:hidden mt-[20px] text-center text-gray-500">
            현업에서 활발히 활동 중이신 기획 · 개발 · 디자인 <br />
            분야의 전문가 및 실무자에게 직무에 대한 설명과
            <br /> 조언을 들을 수 있는 활동입니다.
          </p>
          <p className="hidden tablet:block text-body-4 mt-4 text-center text-gray-500">
            현업에서 활발히 활동 중이신 기획 · 개발 · 디자인 분야의 전문가 및 실무자에게 <br />
            직무에 대한 설명과 조언을 들을 수 있는 활동입니다.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="my-[52px] tablet:mt-[100px] w-full max-w-[1100px] px-4 tablet:px-0"
        >
          <div className="grid grid-cols-1 tablet:grid-cols-3 desktop:grid-cols-4 gap-x-6 gap-y-8 place-items-center">
            {GUEST_DATA.map((guest, idx) => (
              <div
                key={idx}
                className={
                  `flex flex-col items-center ` +
                  (idx === 4 ? "desktop:col-start-2" : idx === 5 ? "desktop:col-start-3" : "")
                }
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={guest.mainIcon}
                    alt={guest.title}
                    width={160}
                    height={167}
                    className="block desktop:hidden"
                  />
                  <Image
                    src={guest.mainIcon}
                    alt={guest.title}
                    width={192}
                    height={200}
                    className="hidden desktop:block"
                  />
                </motion.div>
                <div className="mt-4 text-center">
                  <p className="text-dark-blue-400 text-body-5">{guest.title}</p>
                  <p className="text-gray-700 text-body-5 mt-1">{guest.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
