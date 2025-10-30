"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
export default function GuestIntroSection() {
  
  const guestData = [
    {
      mainIcon: "/main/img/guest/Guest_1.png",
      title: "기획",
      subtitle: "정덕우 연사님",
    },
    {
      mainIcon: "/main/img/guest/Guest_2.png",
      title: "기획",
      subtitle: "플래터 연사님",
    },
    {
      mainIcon: "/main/img/guest/Guest_3.png",
      title: "디자인",
      subtitle: "실비안 연사님",
    },
    {
      mainIcon: "/main/img/guest/Guest_4.png",
      title: "백엔드",
      subtitle: "최윤한 연사님",
    },
    {
      mainIcon: "/main/img/guest/Guest_5.png",
      title: "프론트",
      subtitle: "이호연 연사님",
    },
    {
      mainIcon: "/main/img/guest/Guest_6.png",
      title: "프론트",
      subtitle: "이정민 연사님",
    },
  ];

  return (
    <div className={"py-[100px] desktop:py-[200px] flex flex-col items-center justify-center"}>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col justify-center items-center"
      >
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[23px] desktop:text-title-5 text-gray-900">
            전문가 초정 강연
          </h1>
          <p className="text-[13px] desktop:text-body-4 mt-[20px] desktop:mt-4 text-center text-gray-500">
            현업에서 활발히 활동 중이신 기획 · 개발 · 디자인 분야의 전문가 및 실무자에게 <br />
            직무에 대한 설명과 조언을 들을 수 있는 활동입니다.
          </p>
        </div>
        {/* Guests grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-[64px] desktop:mt-[100px] w-full max-w-[1100px] px-4 desktop:px-0"
        >
          <div className="grid grid-cols-2 desktop:grid-cols-4 gap-x-6 gap-y-10 place-items-center">
            {guestData.map(({ mainIcon, title, subtitle }, idx) => (
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
                    src={mainIcon}
                    alt={title}
                    width={220}
                    height={220}
                    style={{ width: 220, height: 220 }}
                  />
                </motion.div>
                <div className="mt-4 text-center">
                  <p className="text-dark-blue-400 text-body-5">{title}</p>
                  <p className="text-gray-700 text-body-5 mt-1">{subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
