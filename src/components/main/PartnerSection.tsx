"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export const PartnerSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className={
        "pt-[200px] pb-[120px] flex flex-col justify-center items-center"
      }
    >
      <div className={"flex flex-col items-center justify-center"}>
        <h1 className={"text-[48px] font-black"}>파트너사</h1>
        <Image
          src="/main/BlueUnderlineIcon.svg"
          alt="밑줄"
          width={161}
          height={16}
          priority
          style={{ width: 161, height: 16 }}
        />
      </div>
      <p className={"mt-[48px] text-[20px]"}>
        KUSITMS과 함께하는 파트너사를 소개해요.
      </p>
      <Image
        className={"mt-[100px]"}
        src="/main/img/파트너사.png"
        alt="파트너사"
        width={980}
        height={300}
        priority
        style={{ width: 980, height: 300 }}
      />
    </motion.div>
  );
};
