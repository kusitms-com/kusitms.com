"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function GuestIntroSection() {
  return (
    <div
      className={
        "py-[100px] desktop:py-[200px] flex flex-col items-center justify-center desktop:bg-white"
      }
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col justify-center items-center"
      >
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[23px] desktop:text-[48px] font-black desktop:text-black">
            지난 기수 연사님
          </h1>
          <Image
              className="block desktop:hidden"
              src="/main/BlueUnderlineIcon.svg"
              alt="BlueUnderlineIcon"
              width={88}
              height={7}
              style={{ width: 88, height: 7 }}
          />
          <Image
              className="hidden desktop:block"
              src="/main/BlueUnderlineIcon.svg"
              alt="BlueUnderlineIcon"
              width={161}
              height={16}
              style={{ width: 161, height: 16 }}
          />
        </div>
        <Image
            className="block desktop:hidden mt-[64px] desktop:mt-[100px]"
            src="/main/img/Mobile_Former_Member_Speaker.png"
            alt="Mobile_Former_Member_Speaker"
            width={288}
            height={269}
            style={{ width: 288, height: 269 }}
        />
        <Image
            className="hidden desktop:block desktop:mt-[100px]"
            src="/main/img/Former_Member_Speaker.png"
            alt="Former_Member_Speaker"
            width={990}
            height={1217}
            style={{ width: 990, height: 1217 }}
        />
      </motion.div>
    </div>
  );
}
