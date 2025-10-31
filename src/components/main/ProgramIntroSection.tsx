"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function ProgramIntroSection() {
  const row1 = [
    "/main/img/company/LG.png",
    "/main/img/company/LifeZip.png",
    "/main/img/company/ZigHang.png",
    "/main/img/company/SeoulMilk.png",
    "/main/img/company/Kobaco.png",
    "/main/img/company/CodeIt.png",
    "/main/img/company/HDMedi.png",
    "/main/img/company/FitPet.png",
  ];

  const row2 = [
    "/main/img/company/QanDa.png",
    "/main/img/company/HDMedi.png",
    "/main/img/company/BringKo.png",
    "/main/img/company/Elice.png",
    "/main/img/company/PabloAir.png",
    "/main/img/company/WeFlo.png",
    "/main/img/company/SoulLive.png",
    "/main/img/company/DevOcean.png",
  ];

  return (
    <div className="flex flex-col justify-center items-center pt-4 pb-[100px] desktop:pb-[200px]">
      <section>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[24px] desktop:text-title-5 text-gray-900" style={{ textShadow: "0 1px 20px rgba(121, 212, 255, 0.40)" }}>학회 프로젝트 소개</h1>
        </div>
        <div className="mt-[60px] py-4 flex items-center justify-center gap-2">
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gray-800 text-white text-body-1">1</span>
          <p className="text-[16px] desktop:text-title-7 text-gray-800">기업 연계프로젝트</p>
        </div>
        <p className="text-[13px] desktop:text-body-6 text-center text-gray-600">
        실제 기업이 고민하고 있는 경영 · 마케팅 문제나 개발과 관련된 과제를 받아 <br />
        팀별로 아이디어를 제시해 과제를 수행하는 프로젝트예요
        </p>

        <div className="mt-[40px] desktop:mt-[56px] w-full max-w-[1100px] px-10">
          <div className="relative overflow-hidden h-[110px]">
            <motion.div
              className="flex items-center w-[max-content] flex-nowrap whitespace-nowrap"
              initial={{ x: "-50%" }}
              animate={{ x: ["-50%", "0%"] }}
              transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            >
              {[...row1, ...row1].map((src, idx) => (
                <Image key={`r1-${idx}`} src={src} alt={`company-${idx}`} width={180} height={80} />
              ))}
            </motion.div>
          </div>
          <div className="relative overflow-hidden h-[110px]">
            <motion.div
              className="flex items-center w-[max-content] flex-nowrap whitespace-nowrap "
              initial={{ x: "0%" }}
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 30, ease: "linear", repeat: Infinity, delay: 1.5 }}
            >
              {[...row2, ...row2].map((src, idx) => (
                <Image key={`r2-${idx}`} src={src} alt={`company2-${idx}`} width={180} height={88} />
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
