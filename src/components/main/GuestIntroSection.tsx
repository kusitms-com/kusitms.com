"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function GuestIntroSection() {
  return (
    <div
      className={
        "py-[200px] flex flex-col items-center justify-center bg-white"
      }
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className={"flex flex-col justify-center items-center"}
      >
        <div className={"flex flex-col items-center justify-center"}>
          <h1 className={"text-[48px] font-black text-black"}>
            지난 기수 연사님
          </h1>
          <Image
            src="/main/BlueUnderlineIcon.svg"
            alt="BlueUnderlineIcon"
            width={161}
            height={16}
            style={{ width: 161, height: 16 }}
          />
        </div>
        <div
          className={
            "mt-[100px] py-3 px-7 rounded-full bg-[#0055FF] w-fit font-semibold"
          }
        >
          전문가 초청 강연
        </div>
        <Image
          src="/main/img/Former_Member_Speaker.png"
          alt="Former_Member_Speaker"
          width={992}
          height={1300}
          style={{ width: 992, height: 1300 }}
        />
      </motion.div>
    </div>
  );
}
